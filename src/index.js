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
  }

  parse(res, options, lng, ns, key) {
    let fc;
    if (this.options.memoize) {
      fc = utils.get(this.mem, `${lng}.${ns}.${key}`);
    }
    if (!fc) {
      fc = new IntlMessageFormat(res, lng);
      if (this.options.memoize) utils.set(this.mem, `${lng}.${ns}.${key}`, fc);
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
