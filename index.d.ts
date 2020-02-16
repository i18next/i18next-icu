declare module "i18next-icu" {
  import { i18n, ThirdPartyModule } from 'i18next';

  interface IntlLocaleData {}

  export type LocaleData = IntlLocaleData | IntlLocaleData[];

  /**
   * @see https://github.com/yahoo/intl-messageformat#user-defined-formats
   * @see https://github.com/i18next/i18next-icu/issues/12#issuecomment-578893063
   */
  // prettier-ignore
  export interface IcuFormats {
    number?: {
      [styleName: string]: {
        style?: "currency" | "percent" | "decimal";
        currency?: string;
        currencyDisplay?: "name" | "symbol" | "code";
        minimumIntegerDigits?: 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21;
        minimumFractionDigits?: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;
        maximumFractionDigits?: 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20;
        minimumSignificantDigits?: 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21;
        maximumSignificantDigits?: 1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21;
        [key: string]: IcuFormats.number;
      }
    },
    date?: {
      [styleName: string]: {
        weekday?: "narrow" | "short" | "long";
        era?: "narrow" | "short" | "long";
        year?: "numeric" | "2-digit";
        month?: "numeric" | "2-digit" | "narrow" | "short" | "long";
        day?: "numeric" | "2-digit";
        hour?: "numeric" | "2-digit";
        minute?: "numeric" | "2-digit";
        second?: "numeric" | "2-digit";
        timeZoneName?: "short" | "long";
        timeZone?: "UTC" | string;
      }
    },
    time?: {
      [styleName: string]: {
        hour?: "numeric" | "2-digit";
        minute?: "numeric" | "2-digit";
        second?: "numeric" | "2-digit";
        timeZoneName?: "short" | "long";
        timeZone?: "UTC" | string;
      }
    }
  }

  export interface IcuConfig {
    memoize?: boolean;
    memoizeFallback?: boolean;
    localeData?: LocaleData | LocaleData[];
    formats?: IcuFormats;
  }

  export interface IcuInstance extends ThirdPartyModule {
    type: 'i18nFormat';
    init(i18next: i18n, options?: IcuConfig): void;
    addLocaleData(localeData: LocaleData | LocaleData[]): void;
    addUserDefinedFormats(formats: IcuFormats): void;
  }

  interface IcuConstructor {
    new (config?: IcuConfig): IcuInstance;
    type: 'i18nFormat';
  }

  const ICU: IcuConstructor;
  export default ICU;
}

declare module 'i18next-icu/locale-data' {
  export { default } from 'i18next-icu/locale-data/index';
}

declare module 'i18next-icu/locale-data/index' {
  import { LocaleData } from 'i18next-icu';

  declare const localesData: LocaleData[];
  export default localesData;
}

// i18next-icu/locale-data/*

declare module 'i18next-icu/locale-data/af' {
  import { LocaleData } from 'i18next-icu';
  declare const af: LocaleData;
  export default af;
}
declare module 'i18next-icu/locale-data/agq' {
  import { LocaleData } from 'i18next-icu';
  declare const agq: LocaleData;
  export default agq;
}
declare module 'i18next-icu/locale-data/ak' {
  import { LocaleData } from 'i18next-icu';
  declare const ak: LocaleData;
  export default ak;
}
declare module 'i18next-icu/locale-data/am' {
  import { LocaleData } from 'i18next-icu';
  declare const am: LocaleData;
  export default am;
}
declare module 'i18next-icu/locale-data/ar' {
  import { LocaleData } from 'i18next-icu';
  declare const ar: LocaleData;
  export default ar;
}
declare module 'i18next-icu/locale-data/ars' {
  import { LocaleData } from 'i18next-icu';
  declare const ars: LocaleData;
  export default ars;
}
declare module 'i18next-icu/locale-data/as' {
  import { LocaleData } from 'i18next-icu';
  declare const as: LocaleData;
  export default as;
}
declare module 'i18next-icu/locale-data/asa' {
  import { LocaleData } from 'i18next-icu';
  declare const asa: LocaleData;
  export default asa;
}
declare module 'i18next-icu/locale-data/ast' {
  import { LocaleData } from 'i18next-icu';
  declare const ast: LocaleData;
  export default ast;
}
declare module 'i18next-icu/locale-data/az' {
  import { LocaleData } from 'i18next-icu';
  declare const az: LocaleData;
  export default az;
}
declare module 'i18next-icu/locale-data/bas' {
  import { LocaleData } from 'i18next-icu';
  declare const bas: LocaleData;
  export default bas;
}
declare module 'i18next-icu/locale-data/be' {
  import { LocaleData } from 'i18next-icu';
  declare const be: LocaleData;
  export default be;
}
declare module 'i18next-icu/locale-data/bem' {
  import { LocaleData } from 'i18next-icu';
  declare const bem: LocaleData;
  export default bem;
}
declare module 'i18next-icu/locale-data/bez' {
  import { LocaleData } from 'i18next-icu';
  declare const bez: LocaleData;
  export default bez;
}
declare module 'i18next-icu/locale-data/bg' {
  import { LocaleData } from 'i18next-icu';
  declare const bg: LocaleData;
  export default bg;
}
declare module 'i18next-icu/locale-data/bh' {
  import { LocaleData } from 'i18next-icu';
  declare const bh: LocaleData;
  export default bh;
}
declare module 'i18next-icu/locale-data/bm' {
  import { LocaleData } from 'i18next-icu';
  declare const bm: LocaleData;
  export default bm;
}
declare module 'i18next-icu/locale-data/bn' {
  import { LocaleData } from 'i18next-icu';
  declare const bn: LocaleData;
  export default bn;
}
declare module 'i18next-icu/locale-data/bo' {
  import { LocaleData } from 'i18next-icu';
  declare const bo: LocaleData;
  export default bo;
}
declare module 'i18next-icu/locale-data/br' {
  import { LocaleData } from 'i18next-icu';
  declare const br: LocaleData;
  export default br;
}
declare module 'i18next-icu/locale-data/brx' {
  import { LocaleData } from 'i18next-icu';
  declare const brx: LocaleData;
  export default brx;
}
declare module 'i18next-icu/locale-data/bs' {
  import { LocaleData } from 'i18next-icu';
  declare const bs: LocaleData;
  export default bs;
}
declare module 'i18next-icu/locale-data/ca' {
  import { LocaleData } from 'i18next-icu';
  declare const ca: LocaleData;
  export default ca;
}
declare module 'i18next-icu/locale-data/ce' {
  import { LocaleData } from 'i18next-icu';
  declare const ce: LocaleData;
  export default ce;
}
declare module 'i18next-icu/locale-data/cgg' {
  import { LocaleData } from 'i18next-icu';
  declare const cgg: LocaleData;
  export default cgg;
}
declare module 'i18next-icu/locale-data/chr' {
  import { LocaleData } from 'i18next-icu';
  declare const chr: LocaleData;
  export default chr;
}
declare module 'i18next-icu/locale-data/ckb' {
  import { LocaleData } from 'i18next-icu';
  declare const ckb: LocaleData;
  export default ckb;
}
declare module 'i18next-icu/locale-data/cs' {
  import { LocaleData } from 'i18next-icu';
  declare const cs: LocaleData;
  export default cs;
}
declare module 'i18next-icu/locale-data/cu' {
  import { LocaleData } from 'i18next-icu';
  declare const cu: LocaleData;
  export default cu;
}
declare module 'i18next-icu/locale-data/cy' {
  import { LocaleData } from 'i18next-icu';
  declare const cy: LocaleData;
  export default cy;
}
declare module 'i18next-icu/locale-data/da' {
  import { LocaleData } from 'i18next-icu';
  declare const da: LocaleData;
  export default da;
}
declare module 'i18next-icu/locale-data/dav' {
  import { LocaleData } from 'i18next-icu';
  declare const dav: LocaleData;
  export default dav;
}
declare module 'i18next-icu/locale-data/de' {
  import { LocaleData } from 'i18next-icu';
  declare const de: LocaleData;
  export default de;
}
declare module 'i18next-icu/locale-data/dje' {
  import { LocaleData } from 'i18next-icu';
  declare const dje: LocaleData;
  export default dje;
}
declare module 'i18next-icu/locale-data/dsb' {
  import { LocaleData } from 'i18next-icu';
  declare const dsb: LocaleData;
  export default dsb;
}
declare module 'i18next-icu/locale-data/dua' {
  import { LocaleData } from 'i18next-icu';
  declare const dua: LocaleData;
  export default dua;
}
declare module 'i18next-icu/locale-data/dv' {
  import { LocaleData } from 'i18next-icu';
  declare const dv: LocaleData;
  export default dv;
}
declare module 'i18next-icu/locale-data/dyo' {
  import { LocaleData } from 'i18next-icu';
  declare const dyo: LocaleData;
  export default dyo;
}
declare module 'i18next-icu/locale-data/dz' {
  import { LocaleData } from 'i18next-icu';
  declare const dz: LocaleData;
  export default dz;
}
declare module 'i18next-icu/locale-data/ebu' {
  import { LocaleData } from 'i18next-icu';
  declare const ebu: LocaleData;
  export default ebu;
}
declare module 'i18next-icu/locale-data/ee' {
  import { LocaleData } from 'i18next-icu';
  declare const ee: LocaleData;
  export default ee;
}
declare module 'i18next-icu/locale-data/el' {
  import { LocaleData } from 'i18next-icu';
  declare const el: LocaleData;
  export default el;
}
declare module 'i18next-icu/locale-data/en' {
  import { LocaleData } from 'i18next-icu';
  declare const en: LocaleData;
  export default en;
}
declare module 'i18next-icu/locale-data/eo' {
  import { LocaleData } from 'i18next-icu';
  declare const eo: LocaleData;
  export default eo;
}
declare module 'i18next-icu/locale-data/es' {
  import { LocaleData } from 'i18next-icu';
  declare const es: LocaleData;
  export default es;
}
declare module 'i18next-icu/locale-data/et' {
  import { LocaleData } from 'i18next-icu';
  declare const et: LocaleData;
  export default et;
}
declare module 'i18next-icu/locale-data/eu' {
  import { LocaleData } from 'i18next-icu';
  declare const eu: LocaleData;
  export default eu;
}
declare module 'i18next-icu/locale-data/ewo' {
  import { LocaleData } from 'i18next-icu';
  declare const ewo: LocaleData;
  export default ewo;
}
declare module 'i18next-icu/locale-data/fa' {
  import { LocaleData } from 'i18next-icu';
  declare const fa: LocaleData;
  export default fa;
}
declare module 'i18next-icu/locale-data/ff' {
  import { LocaleData } from 'i18next-icu';
  declare const ff: LocaleData;
  export default ff;
}
declare module 'i18next-icu/locale-data/fi' {
  import { LocaleData } from 'i18next-icu';
  declare const fi: LocaleData;
  export default fi;
}
declare module 'i18next-icu/locale-data/fil' {
  import { LocaleData } from 'i18next-icu';
  declare const fil: LocaleData;
  export default fil;
}
declare module 'i18next-icu/locale-data/fo' {
  import { LocaleData } from 'i18next-icu';
  declare const fo: LocaleData;
  export default fo;
}
declare module 'i18next-icu/locale-data/fr' {
  import { LocaleData } from 'i18next-icu';
  declare const fr: LocaleData;
  export default fr;
}
declare module 'i18next-icu/locale-data/fur' {
  import { LocaleData } from 'i18next-icu';
  declare const fur: LocaleData;
  export default fur;
}
declare module 'i18next-icu/locale-data/fy' {
  import { LocaleData } from 'i18next-icu';
  declare const fy: LocaleData;
  export default fy;
}
declare module 'i18next-icu/locale-data/ga' {
  import { LocaleData } from 'i18next-icu';
  declare const ga: LocaleData;
  export default ga;
}
declare module 'i18next-icu/locale-data/gd' {
  import { LocaleData } from 'i18next-icu';
  declare const gd: LocaleData;
  export default gd;
}
declare module 'i18next-icu/locale-data/gl' {
  import { LocaleData } from 'i18next-icu';
  declare const gl: LocaleData;
  export default gl;
}
declare module 'i18next-icu/locale-data/gsw' {
  import { LocaleData } from 'i18next-icu';
  declare const gsw: LocaleData;
  export default gsw;
}
declare module 'i18next-icu/locale-data/gu' {
  import { LocaleData } from 'i18next-icu';
  declare const gu: LocaleData;
  export default gu;
}
declare module 'i18next-icu/locale-data/guw' {
  import { LocaleData } from 'i18next-icu';
  declare const guw: LocaleData;
  export default guw;
}
declare module 'i18next-icu/locale-data/guz' {
  import { LocaleData } from 'i18next-icu';
  declare const guz: LocaleData;
  export default guz;
}
declare module 'i18next-icu/locale-data/gv' {
  import { LocaleData } from 'i18next-icu';
  declare const gv: LocaleData;
  export default gv;
}
declare module 'i18next-icu/locale-data/ha' {
  import { LocaleData } from 'i18next-icu';
  declare const ha: LocaleData;
  export default ha;
}
declare module 'i18next-icu/locale-data/haw' {
  import { LocaleData } from 'i18next-icu';
  declare const haw: LocaleData;
  export default haw;
}
declare module 'i18next-icu/locale-data/he' {
  import { LocaleData } from 'i18next-icu';
  declare const he: LocaleData;
  export default he;
}
declare module 'i18next-icu/locale-data/hi' {
  import { LocaleData } from 'i18next-icu';
  declare const hi: LocaleData;
  export default hi;
}
declare module 'i18next-icu/locale-data/hr' {
  import { LocaleData } from 'i18next-icu';
  declare const hr: LocaleData;
  export default hr;
}
declare module 'i18next-icu/locale-data/hsb' {
  import { LocaleData } from 'i18next-icu';
  declare const hsb: LocaleData;
  export default hsb;
}
declare module 'i18next-icu/locale-data/hu' {
  import { LocaleData } from 'i18next-icu';
  declare const hu: LocaleData;
  export default hu;
}
declare module 'i18next-icu/locale-data/hy' {
  import { LocaleData } from 'i18next-icu';
  declare const hy: LocaleData;
  export default hy;
}
declare module 'i18next-icu/locale-data/id' {
  import { LocaleData } from 'i18next-icu';
  declare const id: LocaleData;
  export default id;
}
declare module 'i18next-icu/locale-data/ig' {
  import { LocaleData } from 'i18next-icu';
  declare const ig: LocaleData;
  export default ig;
}
declare module 'i18next-icu/locale-data/ii' {
  import { LocaleData } from 'i18next-icu';
  declare const ii: LocaleData;
  export default ii;
}
declare module 'i18next-icu/locale-data/in' {
  import { LocaleData } from 'i18next-icu';
  declare const inLocaleData: LocaleData;
  export default inLocaleData;
}
declare module 'i18next-icu/locale-data/is' {
  import { LocaleData } from 'i18next-icu';
  declare const is: LocaleData;
  export default is;
}
declare module 'i18next-icu/locale-data/it' {
  import { LocaleData } from 'i18next-icu';
  declare const it: LocaleData;
  export default it;
}
declare module 'i18next-icu/locale-data/iu' {
  import { LocaleData } from 'i18next-icu';
  declare const iu: LocaleData;
  export default iu;
}
declare module 'i18next-icu/locale-data/iw' {
  import { LocaleData } from 'i18next-icu';
  declare const iw: LocaleData;
  export default iw;
}
declare module 'i18next-icu/locale-data/ja' {
  import { LocaleData } from 'i18next-icu';
  declare const ja: LocaleData;
  export default ja;
}
declare module 'i18next-icu/locale-data/jbo' {
  import { LocaleData } from 'i18next-icu';
  declare const jbo: LocaleData;
  export default jbo;
}
declare module 'i18next-icu/locale-data/jgo' {
  import { LocaleData } from 'i18next-icu';
  declare const jgo: LocaleData;
  export default jgo;
}
declare module 'i18next-icu/locale-data/ji' {
  import { LocaleData } from 'i18next-icu';
  declare const ji: LocaleData;
  export default ji;
}
declare module 'i18next-icu/locale-data/jmc' {
  import { LocaleData } from 'i18next-icu';
  declare const jmc: LocaleData;
  export default jmc;
}
declare module 'i18next-icu/locale-data/jv' {
  import { LocaleData } from 'i18next-icu';
  declare const jv: LocaleData;
  export default jv;
}
declare module 'i18next-icu/locale-data/jw' {
  import { LocaleData } from 'i18next-icu';
  declare const jw: LocaleData;
  export default jw;
}
declare module 'i18next-icu/locale-data/ka' {
  import { LocaleData } from 'i18next-icu';
  declare const ka: LocaleData;
  export default ka;
}
declare module 'i18next-icu/locale-data/kab' {
  import { LocaleData } from 'i18next-icu';
  declare const kab: LocaleData;
  export default kab;
}
declare module 'i18next-icu/locale-data/kaj' {
  import { LocaleData } from 'i18next-icu';
  declare const kaj: LocaleData;
  export default kaj;
}
declare module 'i18next-icu/locale-data/kam' {
  import { LocaleData } from 'i18next-icu';
  declare const kam: LocaleData;
  export default kam;
}
declare module 'i18next-icu/locale-data/kcg' {
  import { LocaleData } from 'i18next-icu';
  declare const kcg: LocaleData;
  export default kcg;
}
declare module 'i18next-icu/locale-data/kde' {
  import { LocaleData } from 'i18next-icu';
  declare const kde: LocaleData;
  export default kde;
}
declare module 'i18next-icu/locale-data/kea' {
  import { LocaleData } from 'i18next-icu';
  declare const kea: LocaleData;
  export default kea;
}
declare module 'i18next-icu/locale-data/khq' {
  import { LocaleData } from 'i18next-icu';
  declare const khq: LocaleData;
  export default khq;
}
declare module 'i18next-icu/locale-data/ki' {
  import { LocaleData } from 'i18next-icu';
  declare const ki: LocaleData;
  export default ki;
}
declare module 'i18next-icu/locale-data/kk' {
  import { LocaleData } from 'i18next-icu';
  declare const kk: LocaleData;
  export default kk;
}
declare module 'i18next-icu/locale-data/kkj' {
  import { LocaleData } from 'i18next-icu';
  declare const kkj: LocaleData;
  export default kkj;
}
declare module 'i18next-icu/locale-data/kl' {
  import { LocaleData } from 'i18next-icu';
  declare const kl: LocaleData;
  export default kl;
}
declare module 'i18next-icu/locale-data/kln' {
  import { LocaleData } from 'i18next-icu';
  declare const kln: LocaleData;
  export default kln;
}
declare module 'i18next-icu/locale-data/km' {
  import { LocaleData } from 'i18next-icu';
  declare const km: LocaleData;
  export default km;
}
declare module 'i18next-icu/locale-data/kn' {
  import { LocaleData } from 'i18next-icu';
  declare const kn: LocaleData;
  export default kn;
}
declare module 'i18next-icu/locale-data/ko' {
  import { LocaleData } from 'i18next-icu';
  declare const ko: LocaleData;
  export default ko;
}
declare module 'i18next-icu/locale-data/kok' {
  import { LocaleData } from 'i18next-icu';
  declare const kok: LocaleData;
  export default kok;
}
declare module 'i18next-icu/locale-data/ks' {
  import { LocaleData } from 'i18next-icu';
  declare const ks: LocaleData;
  export default ks;
}
declare module 'i18next-icu/locale-data/ksb' {
  import { LocaleData } from 'i18next-icu';
  declare const ksb: LocaleData;
  export default ksb;
}
declare module 'i18next-icu/locale-data/ksf' {
  import { LocaleData } from 'i18next-icu';
  declare const ksf: LocaleData;
  export default ksf;
}
declare module 'i18next-icu/locale-data/ksh' {
  import { LocaleData } from 'i18next-icu';
  declare const ksh: LocaleData;
  export default ksh;
}
declare module 'i18next-icu/locale-data/ku' {
  import { LocaleData } from 'i18next-icu';
  declare const ku: LocaleData;
  export default ku;
}
declare module 'i18next-icu/locale-data/kw' {
  import { LocaleData } from 'i18next-icu';
  declare const kw: LocaleData;
  export default kw;
}
declare module 'i18next-icu/locale-data/ky' {
  import { LocaleData } from 'i18next-icu';
  declare const ky: LocaleData;
  export default ky;
}
declare module 'i18next-icu/locale-data/lag' {
  import { LocaleData } from 'i18next-icu';
  declare const lag: LocaleData;
  export default lag;
}
declare module 'i18next-icu/locale-data/lb' {
  import { LocaleData } from 'i18next-icu';
  declare const lb: LocaleData;
  export default lb;
}
declare module 'i18next-icu/locale-data/lg' {
  import { LocaleData } from 'i18next-icu';
  declare const lg: LocaleData;
  export default lg;
}
declare module 'i18next-icu/locale-data/lkt' {
  import { LocaleData } from 'i18next-icu';
  declare const lkt: LocaleData;
  export default lkt;
}
declare module 'i18next-icu/locale-data/ln' {
  import { LocaleData } from 'i18next-icu';
  declare const ln: LocaleData;
  export default ln;
}
declare module 'i18next-icu/locale-data/lo' {
  import { LocaleData } from 'i18next-icu';
  declare const lo: LocaleData;
  export default lo;
}
declare module 'i18next-icu/locale-data/lrc' {
  import { LocaleData } from 'i18next-icu';
  declare const lrc: LocaleData;
  export default lrc;
}
declare module 'i18next-icu/locale-data/lt' {
  import { LocaleData } from 'i18next-icu';
  declare const lt: LocaleData;
  export default lt;
}
declare module 'i18next-icu/locale-data/lu' {
  import { LocaleData } from 'i18next-icu';
  declare const lu: LocaleData;
  export default lu;
}
declare module 'i18next-icu/locale-data/luo' {
  import { LocaleData } from 'i18next-icu';
  declare const luo: LocaleData;
  export default luo;
}
declare module 'i18next-icu/locale-data/luy' {
  import { LocaleData } from 'i18next-icu';
  declare const luy: LocaleData;
  export default luy;
}
declare module 'i18next-icu/locale-data/lv' {
  import { LocaleData } from 'i18next-icu';
  declare const lv: LocaleData;
  export default lv;
}
declare module 'i18next-icu/locale-data/mas' {
  import { LocaleData } from 'i18next-icu';
  declare const mas: LocaleData;
  export default mas;
}
declare module 'i18next-icu/locale-data/mer' {
  import { LocaleData } from 'i18next-icu';
  declare const mer: LocaleData;
  export default mer;
}
declare module 'i18next-icu/locale-data/mfe' {
  import { LocaleData } from 'i18next-icu';
  declare const mfe: LocaleData;
  export default mfe;
}
declare module 'i18next-icu/locale-data/mg' {
  import { LocaleData } from 'i18next-icu';
  declare const mg: LocaleData;
  export default mg;
}
declare module 'i18next-icu/locale-data/mgh' {
  import { LocaleData } from 'i18next-icu';
  declare const mgh: LocaleData;
  export default mgh;
}
declare module 'i18next-icu/locale-data/mgo' {
  import { LocaleData } from 'i18next-icu';
  declare const mgo: LocaleData;
  export default mgo;
}
declare module 'i18next-icu/locale-data/mk' {
  import { LocaleData } from 'i18next-icu';
  declare const mk: LocaleData;
  export default mk;
}
declare module 'i18next-icu/locale-data/ml' {
  import { LocaleData } from 'i18next-icu';
  declare const ml: LocaleData;
  export default ml;
}
declare module 'i18next-icu/locale-data/mn' {
  import { LocaleData } from 'i18next-icu';
  declare const mn: LocaleData;
  export default mn;
}
declare module 'i18next-icu/locale-data/mo' {
  import { LocaleData } from 'i18next-icu';
  declare const mo: LocaleData;
  export default mo;
}
declare module 'i18next-icu/locale-data/mr' {
  import { LocaleData } from 'i18next-icu';
  declare const mr: LocaleData;
  export default mr;
}
declare module 'i18next-icu/locale-data/ms' {
  import { LocaleData } from 'i18next-icu';
  declare const ms: LocaleData;
  export default ms;
}
declare module 'i18next-icu/locale-data/mt' {
  import { LocaleData } from 'i18next-icu';
  declare const mt: LocaleData;
  export default mt;
}
declare module 'i18next-icu/locale-data/mua' {
  import { LocaleData } from 'i18next-icu';
  declare const mua: LocaleData;
  export default mua;
}
declare module 'i18next-icu/locale-data/my' {
  import { LocaleData } from 'i18next-icu';
  declare const my: LocaleData;
  export default my;
}
declare module 'i18next-icu/locale-data/mzn' {
  import { LocaleData } from 'i18next-icu';
  declare const mzn: LocaleData;
  export default mzn;
}
declare module 'i18next-icu/locale-data/nah' {
  import { LocaleData } from 'i18next-icu';
  declare const nah: LocaleData;
  export default nah;
}
declare module 'i18next-icu/locale-data/naq' {
  import { LocaleData } from 'i18next-icu';
  declare const naq: LocaleData;
  export default naq;
}
declare module 'i18next-icu/locale-data/nb' {
  import { LocaleData } from 'i18next-icu';
  declare const nb: LocaleData;
  export default nb;
}
declare module 'i18next-icu/locale-data/nd' {
  import { LocaleData } from 'i18next-icu';
  declare const nd: LocaleData;
  export default nd;
}
declare module 'i18next-icu/locale-data/nds' {
  import { LocaleData } from 'i18next-icu';
  declare const nds: LocaleData;
  export default nds;
}
declare module 'i18next-icu/locale-data/ne' {
  import { LocaleData } from 'i18next-icu';
  declare const ne: LocaleData;
  export default ne;
}
declare module 'i18next-icu/locale-data/nl' {
  import { LocaleData } from 'i18next-icu';
  declare const nl: LocaleData;
  export default nl;
}
declare module 'i18next-icu/locale-data/nmg' {
  import { LocaleData } from 'i18next-icu';
  declare const nmg: LocaleData;
  export default nmg;
}
declare module 'i18next-icu/locale-data/nn' {
  import { LocaleData } from 'i18next-icu';
  declare const nn: LocaleData;
  export default nn;
}
declare module 'i18next-icu/locale-data/nnh' {
  import { LocaleData } from 'i18next-icu';
  declare const nnh: LocaleData;
  export default nnh;
}
declare module 'i18next-icu/locale-data/no' {
  import { LocaleData } from 'i18next-icu';
  declare const no: LocaleData;
  export default no;
}
declare module 'i18next-icu/locale-data/nqo' {
  import { LocaleData } from 'i18next-icu';
  declare const nqo: LocaleData;
  export default nqo;
}
declare module 'i18next-icu/locale-data/nr' {
  import { LocaleData } from 'i18next-icu';
  declare const nr: LocaleData;
  export default nr;
}
declare module 'i18next-icu/locale-data/nso' {
  import { LocaleData } from 'i18next-icu';
  declare const nso: LocaleData;
  export default nso;
}
declare module 'i18next-icu/locale-data/nus' {
  import { LocaleData } from 'i18next-icu';
  declare const nus: LocaleData;
  export default nus;
}
declare module 'i18next-icu/locale-data/ny' {
  import { LocaleData } from 'i18next-icu';
  declare const ny: LocaleData;
  export default ny;
}
declare module 'i18next-icu/locale-data/nyn' {
  import { LocaleData } from 'i18next-icu';
  declare const nyn: LocaleData;
  export default nyn;
}
declare module 'i18next-icu/locale-data/om' {
  import { LocaleData } from 'i18next-icu';
  declare const om: LocaleData;
  export default om;
}
declare module 'i18next-icu/locale-data/or' {
  import { LocaleData } from 'i18next-icu';
  declare const or: LocaleData;
  export default or;
}
declare module 'i18next-icu/locale-data/os' {
  import { LocaleData } from 'i18next-icu';
  declare const os: LocaleData;
  export default os;
}
declare module 'i18next-icu/locale-data/pa' {
  import { LocaleData } from 'i18next-icu';
  declare const pa: LocaleData;
  export default pa;
}
declare module 'i18next-icu/locale-data/pap' {
  import { LocaleData } from 'i18next-icu';
  declare const pap: LocaleData;
  export default pap;
}
declare module 'i18next-icu/locale-data/pl' {
  import { LocaleData } from 'i18next-icu';
  declare const pl: LocaleData;
  export default pl;
}
declare module 'i18next-icu/locale-data/prg' {
  import { LocaleData } from 'i18next-icu';
  declare const prg: LocaleData;
  export default prg;
}
declare module 'i18next-icu/locale-data/ps' {
  import { LocaleData } from 'i18next-icu';
  declare const ps: LocaleData;
  export default ps;
}
declare module 'i18next-icu/locale-data/pt' {
  import { LocaleData } from 'i18next-icu';
  declare const pt: LocaleData;
  export default pt;
}
declare module 'i18next-icu/locale-data/qu' {
  import { LocaleData } from 'i18next-icu';
  declare const qu: LocaleData;
  export default qu;
}
declare module 'i18next-icu/locale-data/rm' {
  import { LocaleData } from 'i18next-icu';
  declare const rm: LocaleData;
  export default rm;
}
declare module 'i18next-icu/locale-data/rn' {
  import { LocaleData } from 'i18next-icu';
  declare const rn: LocaleData;
  export default rn;
}
declare module 'i18next-icu/locale-data/ro' {
  import { LocaleData } from 'i18next-icu';
  declare const ro: LocaleData;
  export default ro;
}
declare module 'i18next-icu/locale-data/rof' {
  import { LocaleData } from 'i18next-icu';
  declare const rof: LocaleData;
  export default rof;
}
declare module 'i18next-icu/locale-data/ru' {
  import { LocaleData } from 'i18next-icu';
  declare const ru: LocaleData;
  export default ru;
}
declare module 'i18next-icu/locale-data/rw' {
  import { LocaleData } from 'i18next-icu';
  declare const rw: LocaleData;
  export default rw;
}
declare module 'i18next-icu/locale-data/rwk' {
  import { LocaleData } from 'i18next-icu';
  declare const rwk: LocaleData;
  export default rwk;
}
declare module 'i18next-icu/locale-data/sah' {
  import { LocaleData } from 'i18next-icu';
  declare const sah: LocaleData;
  export default sah;
}
declare module 'i18next-icu/locale-data/saq' {
  import { LocaleData } from 'i18next-icu';
  declare const saq: LocaleData;
  export default saq;
}
declare module 'i18next-icu/locale-data/sbp' {
  import { LocaleData } from 'i18next-icu';
  declare const sbp: LocaleData;
  export default sbp;
}
declare module 'i18next-icu/locale-data/sdh' {
  import { LocaleData } from 'i18next-icu';
  declare const sdh: LocaleData;
  export default sdh;
}
declare module 'i18next-icu/locale-data/se' {
  import { LocaleData } from 'i18next-icu';
  declare const se: LocaleData;
  export default se;
}
declare module 'i18next-icu/locale-data/seh' {
  import { LocaleData } from 'i18next-icu';
  declare const seh: LocaleData;
  export default seh;
}
declare module 'i18next-icu/locale-data/ses' {
  import { LocaleData } from 'i18next-icu';
  declare const ses: LocaleData;
  export default ses;
}
declare module 'i18next-icu/locale-data/sg' {
  import { LocaleData } from 'i18next-icu';
  declare const sg: LocaleData;
  export default sg;
}
declare module 'i18next-icu/locale-data/sh' {
  import { LocaleData } from 'i18next-icu';
  declare const sh: LocaleData;
  export default sh;
}
declare module 'i18next-icu/locale-data/shi' {
  import { LocaleData } from 'i18next-icu';
  declare const shi: LocaleData;
  export default shi;
}
declare module 'i18next-icu/locale-data/si' {
  import { LocaleData } from 'i18next-icu';
  declare const si: LocaleData;
  export default si;
}
declare module 'i18next-icu/locale-data/sk' {
  import { LocaleData } from 'i18next-icu';
  declare const sk: LocaleData;
  export default sk;
}
declare module 'i18next-icu/locale-data/sl' {
  import { LocaleData } from 'i18next-icu';
  declare const sl: LocaleData;
  export default sl;
}
declare module 'i18next-icu/locale-data/sma' {
  import { LocaleData } from 'i18next-icu';
  declare const sma: LocaleData;
  export default sma;
}
declare module 'i18next-icu/locale-data/smi' {
  import { LocaleData } from 'i18next-icu';
  declare const smi: LocaleData;
  export default smi;
}
declare module 'i18next-icu/locale-data/smj' {
  import { LocaleData } from 'i18next-icu';
  declare const smj: LocaleData;
  export default smj;
}
declare module 'i18next-icu/locale-data/smn' {
  import { LocaleData } from 'i18next-icu';
  declare const smn: LocaleData;
  export default smn;
}
declare module 'i18next-icu/locale-data/sms' {
  import { LocaleData } from 'i18next-icu';
  declare const sms: LocaleData;
  export default sms;
}
declare module 'i18next-icu/locale-data/sn' {
  import { LocaleData } from 'i18next-icu';
  declare const sn: LocaleData;
  export default sn;
}
declare module 'i18next-icu/locale-data/so' {
  import { LocaleData } from 'i18next-icu';
  declare const so: LocaleData;
  export default so;
}
declare module 'i18next-icu/locale-data/sq' {
  import { LocaleData } from 'i18next-icu';
  declare const sq: LocaleData;
  export default sq;
}
declare module 'i18next-icu/locale-data/sr' {
  import { LocaleData } from 'i18next-icu';
  declare const sr: LocaleData;
  export default sr;
}
declare module 'i18next-icu/locale-data/ss' {
  import { LocaleData } from 'i18next-icu';
  declare const ss: LocaleData;
  export default ss;
}
declare module 'i18next-icu/locale-data/ssy' {
  import { LocaleData } from 'i18next-icu';
  declare const ssy: LocaleData;
  export default ssy;
}
declare module 'i18next-icu/locale-data/st' {
  import { LocaleData } from 'i18next-icu';
  declare const st: LocaleData;
  export default st;
}
declare module 'i18next-icu/locale-data/sv' {
  import { LocaleData } from 'i18next-icu';
  declare const sv: LocaleData;
  export default sv;
}
declare module 'i18next-icu/locale-data/sw' {
  import { LocaleData } from 'i18next-icu';
  declare const sw: LocaleData;
  export default sw;
}
declare module 'i18next-icu/locale-data/syr' {
  import { LocaleData } from 'i18next-icu';
  declare const syr: LocaleData;
  export default syr;
}
declare module 'i18next-icu/locale-data/ta' {
  import { LocaleData } from 'i18next-icu';
  declare const ta: LocaleData;
  export default ta;
}
declare module 'i18next-icu/locale-data/te' {
  import { LocaleData } from 'i18next-icu';
  declare const te: LocaleData;
  export default te;
}
declare module 'i18next-icu/locale-data/teo' {
  import { LocaleData } from 'i18next-icu';
  declare const teo: LocaleData;
  export default teo;
}
declare module 'i18next-icu/locale-data/th' {
  import { LocaleData } from 'i18next-icu';
  declare const th: LocaleData;
  export default th;
}
declare module 'i18next-icu/locale-data/ti' {
  import { LocaleData } from 'i18next-icu';
  declare const ti: LocaleData;
  export default ti;
}
declare module 'i18next-icu/locale-data/tig' {
  import { LocaleData } from 'i18next-icu';
  declare const tig: LocaleData;
  export default tig;
}
declare module 'i18next-icu/locale-data/tk' {
  import { LocaleData } from 'i18next-icu';
  declare const tk: LocaleData;
  export default tk;
}
declare module 'i18next-icu/locale-data/tl' {
  import { LocaleData } from 'i18next-icu';
  declare const tl: LocaleData;
  export default tl;
}
declare module 'i18next-icu/locale-data/tn' {
  import { LocaleData } from 'i18next-icu';
  declare const tn: LocaleData;
  export default tn;
}
declare module 'i18next-icu/locale-data/to' {
  import { LocaleData } from 'i18next-icu';
  declare const to: LocaleData;
  export default to;
}
declare module 'i18next-icu/locale-data/tr' {
  import { LocaleData } from 'i18next-icu';
  declare const tr: LocaleData;
  export default tr;
}
declare module 'i18next-icu/locale-data/ts' {
  import { LocaleData } from 'i18next-icu';
  declare const ts: LocaleData;
  export default ts;
}
declare module 'i18next-icu/locale-data/twq' {
  import { LocaleData } from 'i18next-icu';
  declare const twq: LocaleData;
  export default twq;
}
declare module 'i18next-icu/locale-data/tzm' {
  import { LocaleData } from 'i18next-icu';
  declare const tzm: LocaleData;
  export default tzm;
}
declare module 'i18next-icu/locale-data/ug' {
  import { LocaleData } from 'i18next-icu';
  declare const ug: LocaleData;
  export default ug;
}
declare module 'i18next-icu/locale-data/uk' {
  import { LocaleData } from 'i18next-icu';
  declare const uk: LocaleData;
  export default uk;
}
declare module 'i18next-icu/locale-data/ur' {
  import { LocaleData } from 'i18next-icu';
  declare const ur: LocaleData;
  export default ur;
}
declare module 'i18next-icu/locale-data/uz' {
  import { LocaleData } from 'i18next-icu';
  declare const uz: LocaleData;
  export default uz;
}
declare module 'i18next-icu/locale-data/vai' {
  import { LocaleData } from 'i18next-icu';
  declare const vai: LocaleData;
  export default vai;
}
declare module 'i18next-icu/locale-data/ve' {
  import { LocaleData } from 'i18next-icu';
  declare const ve: LocaleData;
  export default ve;
}
declare module 'i18next-icu/locale-data/vi' {
  import { LocaleData } from 'i18next-icu';
  declare const vi: LocaleData;
  export default vi;
}
declare module 'i18next-icu/locale-data/vo' {
  import { LocaleData } from 'i18next-icu';
  declare const vo: LocaleData;
  export default vo;
}
declare module 'i18next-icu/locale-data/vun' {
  import { LocaleData } from 'i18next-icu';
  declare const vun: LocaleData;
  export default vun;
}
declare module 'i18next-icu/locale-data/wa' {
  import { LocaleData } from 'i18next-icu';
  declare const wa: LocaleData;
  export default wa;
}
declare module 'i18next-icu/locale-data/wae' {
  import { LocaleData } from 'i18next-icu';
  declare const wae: LocaleData;
  export default wae;
}
declare module 'i18next-icu/locale-data/wo' {
  import { LocaleData } from 'i18next-icu';
  declare const wo: LocaleData;
  export default wo;
}
declare module 'i18next-icu/locale-data/xh' {
  import { LocaleData } from 'i18next-icu';
  declare const xh: LocaleData;
  export default xh;
}
declare module 'i18next-icu/locale-data/xog' {
  import { LocaleData } from 'i18next-icu';
  declare const xog: LocaleData;
  export default xog;
}
declare module 'i18next-icu/locale-data/yav' {
  import { LocaleData } from 'i18next-icu';
  declare const yav: LocaleData;
  export default yav;
}
declare module 'i18next-icu/locale-data/yi' {
  import { LocaleData } from 'i18next-icu';
  declare const yi: LocaleData;
  export default yi;
}
declare module 'i18next-icu/locale-data/yo' {
  import { LocaleData } from 'i18next-icu';
  declare const yo: LocaleData;
  export default yo;
}
declare module 'i18next-icu/locale-data/yue' {
  import { LocaleData } from 'i18next-icu';
  declare const yue: LocaleData;
  export default yue;
}
declare module 'i18next-icu/locale-data/zgh' {
  import { LocaleData } from 'i18next-icu';
  declare const zgh: LocaleData;
  export default zgh;
}
declare module 'i18next-icu/locale-data/zh' {
  import { LocaleData } from 'i18next-icu';
  declare const zh: LocaleData;
  export default zh;
}
declare module 'i18next-icu/locale-data/zu' {
  import { LocaleData } from 'i18next-icu';
  declare const zu: LocaleData;
  export default zu;
}
