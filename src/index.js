import IntlMessageFormat from 'intl-messageformat';
import * as utils from './utils.js';

const DOCS_URL = 'https://www.i18next.com/how-to/using-icu-or-mf2';
const PLURAL_SUFFIXES = ['zero', 'one', 'two', 'few', 'many', 'other'];

function getDefaults() {
  return {
    memoize: true,
    memoizeFallback: false,
    bindI18n: '',
    bindI18nStore: '',
    parseErrorHandler: (err, key, res, options) => res,
    parseLngForICU: (lng) => lng,
    escapeVariables: false
  };
}

function errorWarning(err, res, isParseError, where) {
  if (isParseError && res && typeof res === 'object') {
    return `${where} resolved to an object or array, but i18next-icu does not support returnObjects or joinArrays and returns the raw value unformatted.`;
  }
  // {{ is valid ICU inside plural or select cases ({count, plural, other {{count} rows}}), so only hint at it when parsing failed
  if (isParseError && typeof res === 'string' && res.indexOf('{{') > -1) {
    return `${where} could not be parsed (${err.message}). It contains "{{": i18next interpolation like {{name}} does not work with ICU, use {name}.`;
  }
  return `${where} could not be ${isParseError ? 'parsed' : 'formatted'}: ${err.message}`;
}

class ICU {
  constructor(options) {
    this.type = 'i18nFormat';
    this.mem = {};
    this.warned = new Set();

    this.init(null, options);
  }

  init(i18next, options) {
    const i18nextOptions = (i18next && i18next.options && i18next.options.i18nFormat) || {};
    this.options = utils.defaults(i18nextOptions, options, this.options || {}, getDefaults());
    this.formats = this.options.formats;

    if (i18next) {
      const { bindI18n, bindI18nStore, memoize } = this.options;

      i18next.IntlMessageFormat = IntlMessageFormat;
      i18next.ICU = this;
      this.i18next = i18next;
      // the warnings below only run with i18next `debug: true`, like i18next's own warnings
      this.debug = !!(i18next.options && i18next.options.debug);

      if (this.debug && i18next.options.interpolation && i18next.options.interpolation.escapeValue !== false && !this.options.escapeVariables) {
        this.warn('interpolation.escapeValue is not applied, values are inserted without HTML escaping. Set the i18next-icu option escapeVariables: true to escape them, or interpolation.escapeValue: false if your output is escaped elsewhere (e.g. by React).');
      }

      if (memoize) {
        if (bindI18n) {
          i18next.on(bindI18n, () => this.clearCache());
        }

        if (bindI18nStore) {
          i18next.store.on(bindI18nStore, () => this.clearCache());
        }
      }
    }
  }

  addUserDefinedFormats(formats) {
    this.formats = this.formats ? { ...this.formats, ...formats } : formats;
    // cached formatters were compiled with the old formats
    this.clearCache();
  }

  parse(res, options, lng, ns, key, info) {
    const hadSuccessfulLookup = info && info.resolved && info.resolved.res;
    // an array path, so dots in ns or key do not nest the memo deeper
    const memKey = this.options.memoize && [lng, ns, key];

    let fc;
    if (this.options.memoize) {
      // the memo key does not contain the message, so compare it: a message changed by
      // addResource, reloadResources or HMR is compiled again instead of served stale
      const memo = utils.getPath(this.mem, memKey);
      if (memo && memo.res === res) fc = memo.fc;
    }

    try {
      if (!fc) {
        if (this.debug && typeof res === 'string' && res.indexOf('$t(') > -1 && this.firstTime(`nesting ${lng} ${ns} ${key}`)) {
          this.warn(`key "${key}" (${lng}/${ns}) contains "$t(", but i18next-icu does not support nesting, the text is output as is.`);
        }
        const transformedLng = this.options.parseLngForICU(lng);
        // without ignoreTag, react-i18next <Trans> translations with <0></0> placeholders
        // will fail to parse, as IntlMessageFormat expects them to be defined in the
        // options passed to fc.format() as { 0: (children) => string }
        // but the replacement of placeholders is done in react-i18next
        fc = new IntlMessageFormat(res, transformedLng, this.formats, { ignoreTag: true });
        if (this.options.memoize && (this.options.memoizeFallback || !info || hadSuccessfulLookup)) utils.setPath(this.mem, memKey, { res, fc });
      }

      // like i18next, values can also be passed in a replace object
      const values = options && options.replace && typeof options.replace === 'object' ? { ...options, ...options.replace } : options;
      return fc.format(this.escapeVariableValues(values));
    } catch (err) {
      if (this.debug && this.firstTime(`error ${lng} ${ns} ${key}`)) {
        this.warn(errorWarning(err, res, !fc, `key "${key}" (${lng}/${ns})`));
      }
      return this.options.parseErrorHandler(err, key, res, options);
    }
  }

  addLookupKeys(finalKeys, key, code, ns, options) {
    // no additional keys needed for select or plural
    // so there is no need to add keys to that finalKeys array
    if (this.debug && options) this.checkSuffixKeys(key, code, ns, options);
    return finalKeys;
  }

  // i18next would look up key_one, key_male, ... at this point; ICU does not, so tell if such keys exist
  checkSuffixKeys(key, code, ns, { count, context }) {
    const { pluralSeparator = '_', contextSeparator = '_' } = this.i18next.options;
    const store = this.i18next.services.resourceStore;
    const where = `key "${key}" (${code}/${ns})`;

    if (count !== undefined && this.firstTime(`plural ${code} ${ns} ${key}`)) {
      const found = PLURAL_SUFFIXES.concat(PLURAL_SUFFIXES.map((s) => `ordinal${pluralSeparator}${s}`))
        .map((s) => `${key}${pluralSeparator}${s}`)
        .filter((k) => store.getResource(code, ns, k) !== undefined);
      if (found.length) {
        this.warn(`${where} was called with count, but i18next-icu does not look up plural suffix keys (${found.join(', ')}). Put the plural into the message: {count, plural, one {# item} other {# items}}.`);
      }
    }

    const contextKey = `${key}${contextSeparator}${context}`;
    if (context !== undefined && context !== '' && this.firstTime(`context ${code} ${ns} ${contextKey}`) && store.getResource(code, ns, contextKey) !== undefined) {
      this.warn(`${where} was called with context "${context}", but i18next-icu does not look up context keys (${contextKey}). Use a select in the message: {context, select, ${context} {...} other {...}}.`);
    }
  }

  // true the first time an id is seen, so each warning is logged once
  firstTime(id) {
    if (this.warned.has(id)) return false;
    this.warned.add(id);
    return true;
  }

  warn(message) {
    this.i18next.services.logger.warn(`i18next-icu: ${message} See ${DOCS_URL}`);
  }

  clearCache() {
    this.mem = {};
  }

  escapeVariableValues(options) {
    if (!this.options.escapeVariables || !options || typeof options !== 'object') {
      return options;
    }

    const escaped = {};
    for (const [key, value] of Object.entries(options)) {
      if (typeof value === 'string') {
        // Escape HTML special characters that could interfere with ICU parsing
        escaped[key] = value
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      } else {
        escaped[key] = value;
      }
    }
    return escaped;
  }
}

ICU.type = 'i18nFormat';

export default ICU;
