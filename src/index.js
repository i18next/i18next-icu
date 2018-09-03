import * as utils from './utils.js';
import IntlMessageFormat from 'intl-messageformat';

function getDefaults() {
  return {
    memoize: true
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
    this.formatters = this.options.formatters;

    if (i18next) {
      i18next.IntlMessageFormat = IntlMessageFormat;
      i18next.ICU = this;
    }

    if (this.options.localeData) this.addLocaleData(this.options.localeData);
  }

  addLocaleData(data) {
    let locales = Object.prototype.toString.apply(data) === '[object Array]' ? data : [data];

    locales.forEach(localeData => {
      if (localeData && localeData.locale) {
        IntlMessageFormat.__addLocaleData(localeData);
        // IntlRelativeFormat.__addLocaleData(localeData);
      }
    });
  }

  addFormatters(formatters) {
    this.formatters = this.formatters ? { ...this.formatters, ...formatters } : formatters;
  }

  parse(res, options, lng, ns, key) {
    let fc;
    if (this.options.memoize) {
      fc = utils.getPath(this.mem, `${lng}.${ns}.${key}`);
    }
    if (!fc) {
      fc = new IntlMessageFormat(res, lng, this.formatters);
      if (this.options.memoize) utils.setPath(this.mem, `${lng}.${ns}.${key}`, fc);
    }
    return fc.format(options);
  }

  addLookupKeys(finalKeys, key, code, ns, options) {
    // no additional keys needed for select or plural
    // so there is no need to add keys to that finalKeys array
    return finalKeys;
  }
}

ICU.type = 'i18nFormat';


export default ICU;
