import * as utils from './utils.js';
import IntlMessageFormat from 'intl-messageformat';

function getDefaults() {
  return {
    memoize: true,
    memoizeFallback: false,
    bindI18n: '',
    bindI18nStore: '',
    parseErrorHandler: (err, key, res, options) => {
      return res;
    },
    parseLngForICU: (lng) => {
      return lng;
    },
    escapeVariables: false,
  };
}

class ICU {
  constructor(options) {
    this.type = 'i18nFormat';
    this.mem = {};

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

      if (memoize) {
        if (bindI18n) {
          i18next.on(bindI18n, () => this.clearCache())
        }

        if (bindI18nStore) {
          i18next.store.on(bindI18nStore, () => this.clearCache())
        }
      }
    }
  }

  addUserDefinedFormats(formats) {
    this.formats = this.formats ? { ...this.formats, ...formats } : formats;
  }

  parse(res, options, lng, ns, key, info) {
    const hadSuccessfulLookup = info && info.resolved && info.resolved.res;
    const memKey = this.options.memoize && `${lng}.${ns}.${key.replace(/\./g, '###')}`;

    let fc;
    if (this.options.memoize) {
      fc = utils.getPath(this.mem, memKey);
    }

    try {
      if (!fc) {
        const transformedLng = this.options.parseLngForICU(lng);
        // without ignoreTag, react-i18next <Trans> translations with <0></0> placeholders
        // will fail to parse, as IntlMessageFormat expects them to be defined in the
        // options passed to fc.format() as { 0: (children) => string }
        // but the replacement of placeholders is done in react-i18next
        fc = new IntlMessageFormat(res, transformedLng, this.formats, { ignoreTag: true });
        if (this.options.memoize && (this.options.memoizeFallback || !info || hadSuccessfulLookup)) utils.setPath(this.mem, memKey, fc);
      }

      return fc.format(this.escapeVariableValues(options));
    } catch (err) {
      return this.options.parseErrorHandler(err, key, res, options);
    }
  }

  addLookupKeys(finalKeys, _key, _code, _ns, _options) {
    // no additional keys needed for select or plural
    // so there is no need to add keys to that finalKeys array
    return finalKeys;
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
