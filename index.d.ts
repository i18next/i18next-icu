declare module "i18next-icu" {
  import { i18n, ThirdPartyModule } from "i18next";

  interface IntlLocaleData {}

  export type LocaleData = IntlLocaleData | IntlLocaleData[];

  /**
   * @see https://github.com/yahoo/intl-messageformat#user-defined-formats
   * @see https://github.com/i18next/i18next-icu/issues/12#issuecomment-578893063
   */
  // prettier-ignore
  export interface IcuFormats {
    number?: {
      [styleName: string]: Intl.NumberFormatOptions;
    },
    date?: {
      [styleName: string]: Intl.DateTimeFormatOptions;
    },
    time?: {
      [styleName: string]: Intl.DateTimeFormatOptions;
    }
  }

  export interface IcuConfig {
    memoize?: boolean;
    memoizeFallback?: boolean;
    localeData?: LocaleData | LocaleData[];
    formats?: IcuFormats;
    bindI18n?: string;
    bindI18nStore?: string;
    parseErrorHandler?: (err: Error, key: string, res: string, options: Object) => string;
  }

  export interface IcuInstance<TOptions = IcuConfig> extends ThirdPartyModule {
    init(i18next: i18n, options?: TOptions): void;
    addLocaleData(localeData: LocaleData | LocaleData[]): void;
    addUserDefinedFormats(formats: IcuFormats): void;
    clearCache(): void;
  }

  interface IcuConstructor {
    new (config?: IcuConfig): IcuInstance;
    type: "i18nFormat";
  }

  const ICU: IcuConstructor;
  export default ICU;
}

declare module "i18next-icu/locale-data" {
  export { default } from "i18next-icu/locale-data/index";
}

declare module "i18next-icu/locale-data/index" {
  import { LocaleData } from "i18next-icu";

  const localesData: LocaleData[];
  export default localesData;
}

// i18next-icu/locale-data/*

declare module "i18next-icu/locale-data/af" {
  import { LocaleData } from "i18next-icu";
  const afLocaleData: LocaleData;
  export default afLocaleData;
}
declare module "i18next-icu/locale-data/agq" {
  import { LocaleData } from "i18next-icu";
  const agqLocaleData: LocaleData;
  export default agqLocaleData;
}
declare module "i18next-icu/locale-data/ak" {
  import { LocaleData } from "i18next-icu";
  const akLocaleData: LocaleData;
  export default akLocaleData;
}
declare module "i18next-icu/locale-data/am" {
  import { LocaleData } from "i18next-icu";
  const amLocaleData: LocaleData;
  export default amLocaleData;
}
declare module "i18next-icu/locale-data/ar" {
  import { LocaleData } from "i18next-icu";
  const arLocaleData: LocaleData;
  export default arLocaleData;
}
declare module "i18next-icu/locale-data/ars" {
  import { LocaleData } from "i18next-icu";
  const arsLocaleData: LocaleData;
  export default arsLocaleData;
}
declare module "i18next-icu/locale-data/as" {
  import { LocaleData } from "i18next-icu";
  const asLocaleData: LocaleData;
  export default asLocaleData;
}
declare module "i18next-icu/locale-data/asa" {
  import { LocaleData } from "i18next-icu";
  const asaLocaleData: LocaleData;
  export default asaLocaleData;
}
declare module "i18next-icu/locale-data/ast" {
  import { LocaleData } from "i18next-icu";
  const astLocaleData: LocaleData;
  export default astLocaleData;
}
declare module "i18next-icu/locale-data/az" {
  import { LocaleData } from "i18next-icu";
  const azLocaleData: LocaleData;
  export default azLocaleData;
}
declare module "i18next-icu/locale-data/bas" {
  import { LocaleData } from "i18next-icu";
  const basLocaleData: LocaleData;
  export default basLocaleData;
}
declare module "i18next-icu/locale-data/be" {
  import { LocaleData } from "i18next-icu";
  const beLocaleData: LocaleData;
  export default beLocaleData;
}
declare module "i18next-icu/locale-data/bem" {
  import { LocaleData } from "i18next-icu";
  const bemLocaleData: LocaleData;
  export default bemLocaleData;
}
declare module "i18next-icu/locale-data/bez" {
  import { LocaleData } from "i18next-icu";
  const bezLocaleData: LocaleData;
  export default bezLocaleData;
}
declare module "i18next-icu/locale-data/bg" {
  import { LocaleData } from "i18next-icu";
  const bgLocaleData: LocaleData;
  export default bgLocaleData;
}
declare module "i18next-icu/locale-data/bh" {
  import { LocaleData } from "i18next-icu";
  const bhLocaleData: LocaleData;
  export default bhLocaleData;
}
declare module "i18next-icu/locale-data/bm" {
  import { LocaleData } from "i18next-icu";
  const bmLocaleData: LocaleData;
  export default bmLocaleData;
}
declare module "i18next-icu/locale-data/bn" {
  import { LocaleData } from "i18next-icu";
  const bnLocaleData: LocaleData;
  export default bnLocaleData;
}
declare module "i18next-icu/locale-data/bo" {
  import { LocaleData } from "i18next-icu";
  const boLocaleData: LocaleData;
  export default boLocaleData;
}
declare module "i18next-icu/locale-data/br" {
  import { LocaleData } from "i18next-icu";
  const brLocaleData: LocaleData;
  export default brLocaleData;
}
declare module "i18next-icu/locale-data/brx" {
  import { LocaleData } from "i18next-icu";
  const brxLocaleData: LocaleData;
  export default brxLocaleData;
}
declare module "i18next-icu/locale-data/bs" {
  import { LocaleData } from "i18next-icu";
  const bsLocaleData: LocaleData;
  export default bsLocaleData;
}
declare module "i18next-icu/locale-data/ca" {
  import { LocaleData } from "i18next-icu";
  const caLocaleData: LocaleData;
  export default caLocaleData;
}
declare module "i18next-icu/locale-data/ce" {
  import { LocaleData } from "i18next-icu";
  const ceLocaleData: LocaleData;
  export default ceLocaleData;
}
declare module "i18next-icu/locale-data/cgg" {
  import { LocaleData } from "i18next-icu";
  const cggLocaleData: LocaleData;
  export default cggLocaleData;
}
declare module "i18next-icu/locale-data/chr" {
  import { LocaleData } from "i18next-icu";
  const chrLocaleData: LocaleData;
  export default chrLocaleData;
}
declare module "i18next-icu/locale-data/ckb" {
  import { LocaleData } from "i18next-icu";
  const ckbLocaleData: LocaleData;
  export default ckbLocaleData;
}
declare module "i18next-icu/locale-data/cs" {
  import { LocaleData } from "i18next-icu";
  const csLocaleData: LocaleData;
  export default csLocaleData;
}
declare module "i18next-icu/locale-data/cu" {
  import { LocaleData } from "i18next-icu";
  const cuLocaleData: LocaleData;
  export default cuLocaleData;
}
declare module "i18next-icu/locale-data/cy" {
  import { LocaleData } from "i18next-icu";
  const cyLocaleData: LocaleData;
  export default cyLocaleData;
}
declare module "i18next-icu/locale-data/da" {
  import { LocaleData } from "i18next-icu";
  const daLocaleData: LocaleData;
  export default daLocaleData;
}
declare module "i18next-icu/locale-data/dav" {
  import { LocaleData } from "i18next-icu";
  const davLocaleData: LocaleData;
  export default davLocaleData;
}
declare module "i18next-icu/locale-data/de" {
  import { LocaleData } from "i18next-icu";
  const deLocaleData: LocaleData;
  export default deLocaleData;
}
declare module "i18next-icu/locale-data/dje" {
  import { LocaleData } from "i18next-icu";
  const djeLocaleData: LocaleData;
  export default djeLocaleData;
}
declare module "i18next-icu/locale-data/dsb" {
  import { LocaleData } from "i18next-icu";
  const dsbLocaleData: LocaleData;
  export default dsbLocaleData;
}
declare module "i18next-icu/locale-data/dua" {
  import { LocaleData } from "i18next-icu";
  const duaLocaleData: LocaleData;
  export default duaLocaleData;
}
declare module "i18next-icu/locale-data/dv" {
  import { LocaleData } from "i18next-icu";
  const dvLocaleData: LocaleData;
  export default dvLocaleData;
}
declare module "i18next-icu/locale-data/dyo" {
  import { LocaleData } from "i18next-icu";
  const dyoLocaleData: LocaleData;
  export default dyoLocaleData;
}
declare module "i18next-icu/locale-data/dz" {
  import { LocaleData } from "i18next-icu";
  const dzLocaleData: LocaleData;
  export default dzLocaleData;
}
declare module "i18next-icu/locale-data/ebu" {
  import { LocaleData } from "i18next-icu";
  const ebuLocaleData: LocaleData;
  export default ebuLocaleData;
}
declare module "i18next-icu/locale-data/ee" {
  import { LocaleData } from "i18next-icu";
  const eeLocaleData: LocaleData;
  export default eeLocaleData;
}
declare module "i18next-icu/locale-data/el" {
  import { LocaleData } from "i18next-icu";
  const elLocaleData: LocaleData;
  export default elLocaleData;
}
declare module "i18next-icu/locale-data/en" {
  import { LocaleData } from "i18next-icu";
  const enLocaleData: LocaleData;
  export default enLocaleData;
}
declare module "i18next-icu/locale-data/eo" {
  import { LocaleData } from "i18next-icu";
  const eoLocaleData: LocaleData;
  export default eoLocaleData;
}
declare module "i18next-icu/locale-data/es" {
  import { LocaleData } from "i18next-icu";
  const esLocaleData: LocaleData;
  export default esLocaleData;
}
declare module "i18next-icu/locale-data/et" {
  import { LocaleData } from "i18next-icu";
  const etLocaleData: LocaleData;
  export default etLocaleData;
}
declare module "i18next-icu/locale-data/eu" {
  import { LocaleData } from "i18next-icu";
  const euLocaleData: LocaleData;
  export default euLocaleData;
}
declare module "i18next-icu/locale-data/ewo" {
  import { LocaleData } from "i18next-icu";
  const ewoLocaleData: LocaleData;
  export default ewoLocaleData;
}
declare module "i18next-icu/locale-data/fa" {
  import { LocaleData } from "i18next-icu";
  const faLocaleData: LocaleData;
  export default faLocaleData;
}
declare module "i18next-icu/locale-data/ff" {
  import { LocaleData } from "i18next-icu";
  const ffLocaleData: LocaleData;
  export default ffLocaleData;
}
declare module "i18next-icu/locale-data/fi" {
  import { LocaleData } from "i18next-icu";
  const fiLocaleData: LocaleData;
  export default fiLocaleData;
}
declare module "i18next-icu/locale-data/fil" {
  import { LocaleData } from "i18next-icu";
  const filLocaleData: LocaleData;
  export default filLocaleData;
}
declare module "i18next-icu/locale-data/fo" {
  import { LocaleData } from "i18next-icu";
  const foLocaleData: LocaleData;
  export default foLocaleData;
}
declare module "i18next-icu/locale-data/fr" {
  import { LocaleData } from "i18next-icu";
  const frLocaleData: LocaleData;
  export default frLocaleData;
}
declare module "i18next-icu/locale-data/fur" {
  import { LocaleData } from "i18next-icu";
  const furLocaleData: LocaleData;
  export default furLocaleData;
}
declare module "i18next-icu/locale-data/fy" {
  import { LocaleData } from "i18next-icu";
  const fyLocaleData: LocaleData;
  export default fyLocaleData;
}
declare module "i18next-icu/locale-data/ga" {
  import { LocaleData } from "i18next-icu";
  const gaLocaleData: LocaleData;
  export default gaLocaleData;
}
declare module "i18next-icu/locale-data/gd" {
  import { LocaleData } from "i18next-icu";
  const gdLocaleData: LocaleData;
  export default gdLocaleData;
}
declare module "i18next-icu/locale-data/gl" {
  import { LocaleData } from "i18next-icu";
  const glLocaleData: LocaleData;
  export default glLocaleData;
}
declare module "i18next-icu/locale-data/gsw" {
  import { LocaleData } from "i18next-icu";
  const gswLocaleData: LocaleData;
  export default gswLocaleData;
}
declare module "i18next-icu/locale-data/gu" {
  import { LocaleData } from "i18next-icu";
  const guLocaleData: LocaleData;
  export default guLocaleData;
}
declare module "i18next-icu/locale-data/guw" {
  import { LocaleData } from "i18next-icu";
  const guwLocaleData: LocaleData;
  export default guwLocaleData;
}
declare module "i18next-icu/locale-data/guz" {
  import { LocaleData } from "i18next-icu";
  const guzLocaleData: LocaleData;
  export default guzLocaleData;
}
declare module "i18next-icu/locale-data/gv" {
  import { LocaleData } from "i18next-icu";
  const gvLocaleData: LocaleData;
  export default gvLocaleData;
}
declare module "i18next-icu/locale-data/ha" {
  import { LocaleData } from "i18next-icu";
  const haLocaleData: LocaleData;
  export default haLocaleData;
}
declare module "i18next-icu/locale-data/haw" {
  import { LocaleData } from "i18next-icu";
  const hawLocaleData: LocaleData;
  export default hawLocaleData;
}
declare module "i18next-icu/locale-data/he" {
  import { LocaleData } from "i18next-icu";
  const heLocaleData: LocaleData;
  export default heLocaleData;
}
declare module "i18next-icu/locale-data/hi" {
  import { LocaleData } from "i18next-icu";
  const hiLocaleData: LocaleData;
  export default hiLocaleData;
}
declare module "i18next-icu/locale-data/hr" {
  import { LocaleData } from "i18next-icu";
  const hrLocaleData: LocaleData;
  export default hrLocaleData;
}
declare module "i18next-icu/locale-data/hsb" {
  import { LocaleData } from "i18next-icu";
  const hsbLocaleData: LocaleData;
  export default hsbLocaleData;
}
declare module "i18next-icu/locale-data/hu" {
  import { LocaleData } from "i18next-icu";
  const huLocaleData: LocaleData;
  export default huLocaleData;
}
declare module "i18next-icu/locale-data/hy" {
  import { LocaleData } from "i18next-icu";
  const hyLocaleData: LocaleData;
  export default hyLocaleData;
}
declare module "i18next-icu/locale-data/id" {
  import { LocaleData } from "i18next-icu";
  const idLocaleData: LocaleData;
  export default idLocaleData;
}
declare module "i18next-icu/locale-data/ig" {
  import { LocaleData } from "i18next-icu";
  const igLocaleData: LocaleData;
  export default igLocaleData;
}
declare module "i18next-icu/locale-data/ii" {
  import { LocaleData } from "i18next-icu";
  const iiLocaleData: LocaleData;
  export default iiLocaleData;
}
declare module "i18next-icu/locale-data/in" {
  import { LocaleData } from "i18next-icu";
  const inLocaleData: LocaleData;
  export default inLocaleData;
}
declare module "i18next-icu/locale-data/is" {
  import { LocaleData } from "i18next-icu";
  const isLocaleData: LocaleData;
  export default isLocaleData;
}
declare module "i18next-icu/locale-data/it" {
  import { LocaleData } from "i18next-icu";
  const itLocaleData: LocaleData;
  export default itLocaleData;
}
declare module "i18next-icu/locale-data/iu" {
  import { LocaleData } from "i18next-icu";
  const iuLocaleData: LocaleData;
  export default iuLocaleData;
}
declare module "i18next-icu/locale-data/iw" {
  import { LocaleData } from "i18next-icu";
  const iwLocaleData: LocaleData;
  export default iwLocaleData;
}
declare module "i18next-icu/locale-data/ja" {
  import { LocaleData } from "i18next-icu";
  const jaLocaleData: LocaleData;
  export default jaLocaleData;
}
declare module "i18next-icu/locale-data/jbo" {
  import { LocaleData } from "i18next-icu";
  const jboLocaleData: LocaleData;
  export default jboLocaleData;
}
declare module "i18next-icu/locale-data/jgo" {
  import { LocaleData } from "i18next-icu";
  const jgoLocaleData: LocaleData;
  export default jgoLocaleData;
}
declare module "i18next-icu/locale-data/ji" {
  import { LocaleData } from "i18next-icu";
  const jiLocaleData: LocaleData;
  export default jiLocaleData;
}
declare module "i18next-icu/locale-data/jmc" {
  import { LocaleData } from "i18next-icu";
  const jmcLocaleData: LocaleData;
  export default jmcLocaleData;
}
declare module "i18next-icu/locale-data/jv" {
  import { LocaleData } from "i18next-icu";
  const jvLocaleData: LocaleData;
  export default jvLocaleData;
}
declare module "i18next-icu/locale-data/jw" {
  import { LocaleData } from "i18next-icu";
  const jwLocaleData: LocaleData;
  export default jwLocaleData;
}
declare module "i18next-icu/locale-data/ka" {
  import { LocaleData } from "i18next-icu";
  const kaLocaleData: LocaleData;
  export default kaLocaleData;
}
declare module "i18next-icu/locale-data/kab" {
  import { LocaleData } from "i18next-icu";
  const kabLocaleData: LocaleData;
  export default kabLocaleData;
}
declare module "i18next-icu/locale-data/kaj" {
  import { LocaleData } from "i18next-icu";
  const kajLocaleData: LocaleData;
  export default kajLocaleData;
}
declare module "i18next-icu/locale-data/kam" {
  import { LocaleData } from "i18next-icu";
  const kamLocaleData: LocaleData;
  export default kamLocaleData;
}
declare module "i18next-icu/locale-data/kcg" {
  import { LocaleData } from "i18next-icu";
  const kcgLocaleData: LocaleData;
  export default kcgLocaleData;
}
declare module "i18next-icu/locale-data/kde" {
  import { LocaleData } from "i18next-icu";
  const kdeLocaleData: LocaleData;
  export default kdeLocaleData;
}
declare module "i18next-icu/locale-data/kea" {
  import { LocaleData } from "i18next-icu";
  const keaLocaleData: LocaleData;
  export default keaLocaleData;
}
declare module "i18next-icu/locale-data/khq" {
  import { LocaleData } from "i18next-icu";
  const khqLocaleData: LocaleData;
  export default khqLocaleData;
}
declare module "i18next-icu/locale-data/ki" {
  import { LocaleData } from "i18next-icu";
  const kiLocaleData: LocaleData;
  export default kiLocaleData;
}
declare module "i18next-icu/locale-data/kk" {
  import { LocaleData } from "i18next-icu";
  const kkLocaleData: LocaleData;
  export default kkLocaleData;
}
declare module "i18next-icu/locale-data/kkj" {
  import { LocaleData } from "i18next-icu";
  const kkjLocaleData: LocaleData;
  export default kkjLocaleData;
}
declare module "i18next-icu/locale-data/kl" {
  import { LocaleData } from "i18next-icu";
  const klLocaleData: LocaleData;
  export default klLocaleData;
}
declare module "i18next-icu/locale-data/kln" {
  import { LocaleData } from "i18next-icu";
  const klnLocaleData: LocaleData;
  export default klnLocaleData;
}
declare module "i18next-icu/locale-data/km" {
  import { LocaleData } from "i18next-icu";
  const kmLocaleData: LocaleData;
  export default kmLocaleData;
}
declare module "i18next-icu/locale-data/kn" {
  import { LocaleData } from "i18next-icu";
  const knLocaleData: LocaleData;
  export default knLocaleData;
}
declare module "i18next-icu/locale-data/ko" {
  import { LocaleData } from "i18next-icu";
  const koLocaleData: LocaleData;
  export default koLocaleData;
}
declare module "i18next-icu/locale-data/kok" {
  import { LocaleData } from "i18next-icu";
  const kokLocaleData: LocaleData;
  export default kokLocaleData;
}
declare module "i18next-icu/locale-data/ks" {
  import { LocaleData } from "i18next-icu";
  const ksLocaleData: LocaleData;
  export default ksLocaleData;
}
declare module "i18next-icu/locale-data/ksb" {
  import { LocaleData } from "i18next-icu";
  const ksbLocaleData: LocaleData;
  export default ksbLocaleData;
}
declare module "i18next-icu/locale-data/ksf" {
  import { LocaleData } from "i18next-icu";
  const ksfLocaleData: LocaleData;
  export default ksfLocaleData;
}
declare module "i18next-icu/locale-data/ksh" {
  import { LocaleData } from "i18next-icu";
  const kshLocaleData: LocaleData;
  export default kshLocaleData;
}
declare module "i18next-icu/locale-data/ku" {
  import { LocaleData } from "i18next-icu";
  const kuLocaleData: LocaleData;
  export default kuLocaleData;
}
declare module "i18next-icu/locale-data/kw" {
  import { LocaleData } from "i18next-icu";
  const kwLocaleData: LocaleData;
  export default kwLocaleData;
}
declare module "i18next-icu/locale-data/ky" {
  import { LocaleData } from "i18next-icu";
  const kyLocaleData: LocaleData;
  export default kyLocaleData;
}
declare module "i18next-icu/locale-data/lag" {
  import { LocaleData } from "i18next-icu";
  const lagLocaleData: LocaleData;
  export default lagLocaleData;
}
declare module "i18next-icu/locale-data/lb" {
  import { LocaleData } from "i18next-icu";
  const lbLocaleData: LocaleData;
  export default lbLocaleData;
}
declare module "i18next-icu/locale-data/lg" {
  import { LocaleData } from "i18next-icu";
  const lgLocaleData: LocaleData;
  export default lgLocaleData;
}
declare module "i18next-icu/locale-data/lkt" {
  import { LocaleData } from "i18next-icu";
  const lktLocaleData: LocaleData;
  export default lktLocaleData;
}
declare module "i18next-icu/locale-data/ln" {
  import { LocaleData } from "i18next-icu";
  const lnLocaleData: LocaleData;
  export default lnLocaleData;
}
declare module "i18next-icu/locale-data/lo" {
  import { LocaleData } from "i18next-icu";
  const loLocaleData: LocaleData;
  export default loLocaleData;
}
declare module "i18next-icu/locale-data/lrc" {
  import { LocaleData } from "i18next-icu";
  const lrcLocaleData: LocaleData;
  export default lrcLocaleData;
}
declare module "i18next-icu/locale-data/lt" {
  import { LocaleData } from "i18next-icu";
  const ltLocaleData: LocaleData;
  export default ltLocaleData;
}
declare module "i18next-icu/locale-data/lu" {
  import { LocaleData } from "i18next-icu";
  const luLocaleData: LocaleData;
  export default luLocaleData;
}
declare module "i18next-icu/locale-data/luo" {
  import { LocaleData } from "i18next-icu";
  const luoLocaleData: LocaleData;
  export default luoLocaleData;
}
declare module "i18next-icu/locale-data/luy" {
  import { LocaleData } from "i18next-icu";
  const luyLocaleData: LocaleData;
  export default luyLocaleData;
}
declare module "i18next-icu/locale-data/lv" {
  import { LocaleData } from "i18next-icu";
  const lvLocaleData: LocaleData;
  export default lvLocaleData;
}
declare module "i18next-icu/locale-data/mas" {
  import { LocaleData } from "i18next-icu";
  const masLocaleData: LocaleData;
  export default masLocaleData;
}
declare module "i18next-icu/locale-data/mer" {
  import { LocaleData } from "i18next-icu";
  const merLocaleData: LocaleData;
  export default merLocaleData;
}
declare module "i18next-icu/locale-data/mfe" {
  import { LocaleData } from "i18next-icu";
  const mfeLocaleData: LocaleData;
  export default mfeLocaleData;
}
declare module "i18next-icu/locale-data/mg" {
  import { LocaleData } from "i18next-icu";
  const mgLocaleData: LocaleData;
  export default mgLocaleData;
}
declare module "i18next-icu/locale-data/mgh" {
  import { LocaleData } from "i18next-icu";
  const mghLocaleData: LocaleData;
  export default mghLocaleData;
}
declare module "i18next-icu/locale-data/mgo" {
  import { LocaleData } from "i18next-icu";
  const mgoLocaleData: LocaleData;
  export default mgoLocaleData;
}
declare module "i18next-icu/locale-data/mk" {
  import { LocaleData } from "i18next-icu";
  const mkLocaleData: LocaleData;
  export default mkLocaleData;
}
declare module "i18next-icu/locale-data/ml" {
  import { LocaleData } from "i18next-icu";
  const mlLocaleData: LocaleData;
  export default mlLocaleData;
}
declare module "i18next-icu/locale-data/mn" {
  import { LocaleData } from "i18next-icu";
  const mnLocaleData: LocaleData;
  export default mnLocaleData;
}
declare module "i18next-icu/locale-data/mo" {
  import { LocaleData } from "i18next-icu";
  const moLocaleData: LocaleData;
  export default moLocaleData;
}
declare module "i18next-icu/locale-data/mr" {
  import { LocaleData } from "i18next-icu";
  const mrLocaleData: LocaleData;
  export default mrLocaleData;
}
declare module "i18next-icu/locale-data/ms" {
  import { LocaleData } from "i18next-icu";
  const msLocaleData: LocaleData;
  export default msLocaleData;
}
declare module "i18next-icu/locale-data/mt" {
  import { LocaleData } from "i18next-icu";
  const mtLocaleData: LocaleData;
  export default mtLocaleData;
}
declare module "i18next-icu/locale-data/mua" {
  import { LocaleData } from "i18next-icu";
  const muaLocaleData: LocaleData;
  export default muaLocaleData;
}
declare module "i18next-icu/locale-data/my" {
  import { LocaleData } from "i18next-icu";
  const myLocaleData: LocaleData;
  export default myLocaleData;
}
declare module "i18next-icu/locale-data/mzn" {
  import { LocaleData } from "i18next-icu";
  const mznLocaleData: LocaleData;
  export default mznLocaleData;
}
declare module "i18next-icu/locale-data/nah" {
  import { LocaleData } from "i18next-icu";
  const nahLocaleData: LocaleData;
  export default nahLocaleData;
}
declare module "i18next-icu/locale-data/naq" {
  import { LocaleData } from "i18next-icu";
  const naqLocaleData: LocaleData;
  export default naqLocaleData;
}
declare module "i18next-icu/locale-data/nb" {
  import { LocaleData } from "i18next-icu";
  const nbLocaleData: LocaleData;
  export default nbLocaleData;
}
declare module "i18next-icu/locale-data/nd" {
  import { LocaleData } from "i18next-icu";
  const ndLocaleData: LocaleData;
  export default ndLocaleData;
}
declare module "i18next-icu/locale-data/nds" {
  import { LocaleData } from "i18next-icu";
  const ndsLocaleData: LocaleData;
  export default ndsLocaleData;
}
declare module "i18next-icu/locale-data/ne" {
  import { LocaleData } from "i18next-icu";
  const neLocaleData: LocaleData;
  export default neLocaleData;
}
declare module "i18next-icu/locale-data/nl" {
  import { LocaleData } from "i18next-icu";
  const nlLocaleData: LocaleData;
  export default nlLocaleData;
}
declare module "i18next-icu/locale-data/nmg" {
  import { LocaleData } from "i18next-icu";
  const nmgLocaleData: LocaleData;
  export default nmgLocaleData;
}
declare module "i18next-icu/locale-data/nn" {
  import { LocaleData } from "i18next-icu";
  const nnLocaleData: LocaleData;
  export default nnLocaleData;
}
declare module "i18next-icu/locale-data/nnh" {
  import { LocaleData } from "i18next-icu";
  const nnhLocaleData: LocaleData;
  export default nnhLocaleData;
}
declare module "i18next-icu/locale-data/no" {
  import { LocaleData } from "i18next-icu";
  const noLocaleData: LocaleData;
  export default noLocaleData;
}
declare module "i18next-icu/locale-data/nqo" {
  import { LocaleData } from "i18next-icu";
  const nqoLocaleData: LocaleData;
  export default nqoLocaleData;
}
declare module "i18next-icu/locale-data/nr" {
  import { LocaleData } from "i18next-icu";
  const nrLocaleData: LocaleData;
  export default nrLocaleData;
}
declare module "i18next-icu/locale-data/nso" {
  import { LocaleData } from "i18next-icu";
  const nsoLocaleData: LocaleData;
  export default nsoLocaleData;
}
declare module "i18next-icu/locale-data/nus" {
  import { LocaleData } from "i18next-icu";
  const nusLocaleData: LocaleData;
  export default nusLocaleData;
}
declare module "i18next-icu/locale-data/ny" {
  import { LocaleData } from "i18next-icu";
  const nyLocaleData: LocaleData;
  export default nyLocaleData;
}
declare module "i18next-icu/locale-data/nyn" {
  import { LocaleData } from "i18next-icu";
  const nynLocaleData: LocaleData;
  export default nynLocaleData;
}
declare module "i18next-icu/locale-data/om" {
  import { LocaleData } from "i18next-icu";
  const omLocaleData: LocaleData;
  export default omLocaleData;
}
declare module "i18next-icu/locale-data/or" {
  import { LocaleData } from "i18next-icu";
  const orLocaleData: LocaleData;
  export default orLocaleData;
}
declare module "i18next-icu/locale-data/os" {
  import { LocaleData } from "i18next-icu";
  const osLocaleData: LocaleData;
  export default osLocaleData;
}
declare module "i18next-icu/locale-data/pa" {
  import { LocaleData } from "i18next-icu";
  const paLocaleData: LocaleData;
  export default paLocaleData;
}
declare module "i18next-icu/locale-data/pap" {
  import { LocaleData } from "i18next-icu";
  const papLocaleData: LocaleData;
  export default papLocaleData;
}
declare module "i18next-icu/locale-data/pl" {
  import { LocaleData } from "i18next-icu";
  const plLocaleData: LocaleData;
  export default plLocaleData;
}
declare module "i18next-icu/locale-data/prg" {
  import { LocaleData } from "i18next-icu";
  const prgLocaleData: LocaleData;
  export default prgLocaleData;
}
declare module "i18next-icu/locale-data/ps" {
  import { LocaleData } from "i18next-icu";
  const psLocaleData: LocaleData;
  export default psLocaleData;
}
declare module "i18next-icu/locale-data/pt" {
  import { LocaleData } from "i18next-icu";
  const ptLocaleData: LocaleData;
  export default ptLocaleData;
}
declare module "i18next-icu/locale-data/qu" {
  import { LocaleData } from "i18next-icu";
  const quLocaleData: LocaleData;
  export default quLocaleData;
}
declare module "i18next-icu/locale-data/rm" {
  import { LocaleData } from "i18next-icu";
  const rmLocaleData: LocaleData;
  export default rmLocaleData;
}
declare module "i18next-icu/locale-data/rn" {
  import { LocaleData } from "i18next-icu";
  const rnLocaleData: LocaleData;
  export default rnLocaleData;
}
declare module "i18next-icu/locale-data/ro" {
  import { LocaleData } from "i18next-icu";
  const roLocaleData: LocaleData;
  export default roLocaleData;
}
declare module "i18next-icu/locale-data/rof" {
  import { LocaleData } from "i18next-icu";
  const rofLocaleData: LocaleData;
  export default rofLocaleData;
}
declare module "i18next-icu/locale-data/ru" {
  import { LocaleData } from "i18next-icu";
  const ruLocaleData: LocaleData;
  export default ruLocaleData;
}
declare module "i18next-icu/locale-data/rw" {
  import { LocaleData } from "i18next-icu";
  const rwLocaleData: LocaleData;
  export default rwLocaleData;
}
declare module "i18next-icu/locale-data/rwk" {
  import { LocaleData } from "i18next-icu";
  const rwkLocaleData: LocaleData;
  export default rwkLocaleData;
}
declare module "i18next-icu/locale-data/sah" {
  import { LocaleData } from "i18next-icu";
  const sahLocaleData: LocaleData;
  export default sahLocaleData;
}
declare module "i18next-icu/locale-data/saq" {
  import { LocaleData } from "i18next-icu";
  const saqLocaleData: LocaleData;
  export default saqLocaleData;
}
declare module "i18next-icu/locale-data/sbp" {
  import { LocaleData } from "i18next-icu";
  const sbpLocaleData: LocaleData;
  export default sbpLocaleData;
}
declare module "i18next-icu/locale-data/sdh" {
  import { LocaleData } from "i18next-icu";
  const sdhLocaleData: LocaleData;
  export default sdhLocaleData;
}
declare module "i18next-icu/locale-data/se" {
  import { LocaleData } from "i18next-icu";
  const seLocaleData: LocaleData;
  export default seLocaleData;
}
declare module "i18next-icu/locale-data/seh" {
  import { LocaleData } from "i18next-icu";
  const sehLocaleData: LocaleData;
  export default sehLocaleData;
}
declare module "i18next-icu/locale-data/ses" {
  import { LocaleData } from "i18next-icu";
  const sesLocaleData: LocaleData;
  export default sesLocaleData;
}
declare module "i18next-icu/locale-data/sg" {
  import { LocaleData } from "i18next-icu";
  const sgLocaleData: LocaleData;
  export default sgLocaleData;
}
declare module "i18next-icu/locale-data/sh" {
  import { LocaleData } from "i18next-icu";
  const shLocaleData: LocaleData;
  export default shLocaleData;
}
declare module "i18next-icu/locale-data/shi" {
  import { LocaleData } from "i18next-icu";
  const shiLocaleData: LocaleData;
  export default shiLocaleData;
}
declare module "i18next-icu/locale-data/si" {
  import { LocaleData } from "i18next-icu";
  const siLocaleData: LocaleData;
  export default siLocaleData;
}
declare module "i18next-icu/locale-data/sk" {
  import { LocaleData } from "i18next-icu";
  const skLocaleData: LocaleData;
  export default skLocaleData;
}
declare module "i18next-icu/locale-data/sl" {
  import { LocaleData } from "i18next-icu";
  const slLocaleData: LocaleData;
  export default slLocaleData;
}
declare module "i18next-icu/locale-data/sma" {
  import { LocaleData } from "i18next-icu";
  const smaLocaleData: LocaleData;
  export default smaLocaleData;
}
declare module "i18next-icu/locale-data/smi" {
  import { LocaleData } from "i18next-icu";
  const smiLocaleData: LocaleData;
  export default smiLocaleData;
}
declare module "i18next-icu/locale-data/smj" {
  import { LocaleData } from "i18next-icu";
  const smjLocaleData: LocaleData;
  export default smjLocaleData;
}
declare module "i18next-icu/locale-data/smn" {
  import { LocaleData } from "i18next-icu";
  const smnLocaleData: LocaleData;
  export default smnLocaleData;
}
declare module "i18next-icu/locale-data/sms" {
  import { LocaleData } from "i18next-icu";
  const smsLocaleData: LocaleData;
  export default smsLocaleData;
}
declare module "i18next-icu/locale-data/sn" {
  import { LocaleData } from "i18next-icu";
  const snLocaleData: LocaleData;
  export default snLocaleData;
}
declare module "i18next-icu/locale-data/so" {
  import { LocaleData } from "i18next-icu";
  const soLocaleData: LocaleData;
  export default soLocaleData;
}
declare module "i18next-icu/locale-data/sq" {
  import { LocaleData } from "i18next-icu";
  const sqLocaleData: LocaleData;
  export default sqLocaleData;
}
declare module "i18next-icu/locale-data/sr" {
  import { LocaleData } from "i18next-icu";
  const srLocaleData: LocaleData;
  export default srLocaleData;
}
declare module "i18next-icu/locale-data/ss" {
  import { LocaleData } from "i18next-icu";
  const ssLocaleData: LocaleData;
  export default ssLocaleData;
}
declare module "i18next-icu/locale-data/ssy" {
  import { LocaleData } from "i18next-icu";
  const ssyLocaleData: LocaleData;
  export default ssyLocaleData;
}
declare module "i18next-icu/locale-data/st" {
  import { LocaleData } from "i18next-icu";
  const stLocaleData: LocaleData;
  export default stLocaleData;
}
declare module "i18next-icu/locale-data/sv" {
  import { LocaleData } from "i18next-icu";
  const svLocaleData: LocaleData;
  export default svLocaleData;
}
declare module "i18next-icu/locale-data/sw" {
  import { LocaleData } from "i18next-icu";
  const swLocaleData: LocaleData;
  export default swLocaleData;
}
declare module "i18next-icu/locale-data/syr" {
  import { LocaleData } from "i18next-icu";
  const syrLocaleData: LocaleData;
  export default syrLocaleData;
}
declare module "i18next-icu/locale-data/ta" {
  import { LocaleData } from "i18next-icu";
  const taLocaleData: LocaleData;
  export default taLocaleData;
}
declare module "i18next-icu/locale-data/te" {
  import { LocaleData } from "i18next-icu";
  const teLocaleData: LocaleData;
  export default teLocaleData;
}
declare module "i18next-icu/locale-data/teo" {
  import { LocaleData } from "i18next-icu";
  const teoLocaleData: LocaleData;
  export default teoLocaleData;
}
declare module "i18next-icu/locale-data/th" {
  import { LocaleData } from "i18next-icu";
  const thLocaleData: LocaleData;
  export default thLocaleData;
}
declare module "i18next-icu/locale-data/ti" {
  import { LocaleData } from "i18next-icu";
  const tiLocaleData: LocaleData;
  export default tiLocaleData;
}
declare module "i18next-icu/locale-data/tig" {
  import { LocaleData } from "i18next-icu";
  const tigLocaleData: LocaleData;
  export default tigLocaleData;
}
declare module "i18next-icu/locale-data/tk" {
  import { LocaleData } from "i18next-icu";
  const tkLocaleData: LocaleData;
  export default tkLocaleData;
}
declare module "i18next-icu/locale-data/tl" {
  import { LocaleData } from "i18next-icu";
  const tlLocaleData: LocaleData;
  export default tlLocaleData;
}
declare module "i18next-icu/locale-data/tn" {
  import { LocaleData } from "i18next-icu";
  const tnLocaleData: LocaleData;
  export default tnLocaleData;
}
declare module "i18next-icu/locale-data/to" {
  import { LocaleData } from "i18next-icu";
  const toLocaleData: LocaleData;
  export default toLocaleData;
}
declare module "i18next-icu/locale-data/tr" {
  import { LocaleData } from "i18next-icu";
  const trLocaleData: LocaleData;
  export default trLocaleData;
}
declare module "i18next-icu/locale-data/ts" {
  import { LocaleData } from "i18next-icu";
  const tsLocaleData: LocaleData;
  export default tsLocaleData;
}
declare module "i18next-icu/locale-data/twq" {
  import { LocaleData } from "i18next-icu";
  const twqLocaleData: LocaleData;
  export default twqLocaleData;
}
declare module "i18next-icu/locale-data/tzm" {
  import { LocaleData } from "i18next-icu";
  const tzmLocaleData: LocaleData;
  export default tzmLocaleData;
}
declare module "i18next-icu/locale-data/ug" {
  import { LocaleData } from "i18next-icu";
  const ugLocaleData: LocaleData;
  export default ugLocaleData;
}
declare module "i18next-icu/locale-data/uk" {
  import { LocaleData } from "i18next-icu";
  const ukLocaleData: LocaleData;
  export default ukLocaleData;
}
declare module "i18next-icu/locale-data/ur" {
  import { LocaleData } from "i18next-icu";
  const urLocaleData: LocaleData;
  export default urLocaleData;
}
declare module "i18next-icu/locale-data/uz" {
  import { LocaleData } from "i18next-icu";
  const uzLocaleData: LocaleData;
  export default uzLocaleData;
}
declare module "i18next-icu/locale-data/vai" {
  import { LocaleData } from "i18next-icu";
  const vaiLocaleData: LocaleData;
  export default vaiLocaleData;
}
declare module "i18next-icu/locale-data/ve" {
  import { LocaleData } from "i18next-icu";
  const veLocaleData: LocaleData;
  export default veLocaleData;
}
declare module "i18next-icu/locale-data/vi" {
  import { LocaleData } from "i18next-icu";
  const viLocaleData: LocaleData;
  export default viLocaleData;
}
declare module "i18next-icu/locale-data/vo" {
  import { LocaleData } from "i18next-icu";
  const voLocaleData: LocaleData;
  export default voLocaleData;
}
declare module "i18next-icu/locale-data/vun" {
  import { LocaleData } from "i18next-icu";
  const vunLocaleData: LocaleData;
  export default vunLocaleData;
}
declare module "i18next-icu/locale-data/wa" {
  import { LocaleData } from "i18next-icu";
  const waLocaleData: LocaleData;
  export default waLocaleData;
}
declare module "i18next-icu/locale-data/wae" {
  import { LocaleData } from "i18next-icu";
  const waeLocaleData: LocaleData;
  export default waeLocaleData;
}
declare module "i18next-icu/locale-data/wo" {
  import { LocaleData } from "i18next-icu";
  const woLocaleData: LocaleData;
  export default woLocaleData;
}
declare module "i18next-icu/locale-data/xh" {
  import { LocaleData } from "i18next-icu";
  const xhLocaleData: LocaleData;
  export default xhLocaleData;
}
declare module "i18next-icu/locale-data/xog" {
  import { LocaleData } from "i18next-icu";
  const xogLocaleData: LocaleData;
  export default xogLocaleData;
}
declare module "i18next-icu/locale-data/yav" {
  import { LocaleData } from "i18next-icu";
  const yavLocaleData: LocaleData;
  export default yavLocaleData;
}
declare module "i18next-icu/locale-data/yi" {
  import { LocaleData } from "i18next-icu";
  const yiLocaleData: LocaleData;
  export default yiLocaleData;
}
declare module "i18next-icu/locale-data/yo" {
  import { LocaleData } from "i18next-icu";
  const yoLocaleData: LocaleData;
  export default yoLocaleData;
}
declare module "i18next-icu/locale-data/yue" {
  import { LocaleData } from "i18next-icu";
  const yueLocaleData: LocaleData;
  export default yueLocaleData;
}
declare module "i18next-icu/locale-data/zgh" {
  import { LocaleData } from "i18next-icu";
  const zghLocaleData: LocaleData;
  export default zghLocaleData;
}
declare module "i18next-icu/locale-data/zh" {
  import { LocaleData } from "i18next-icu";
  const zhLocaleData: LocaleData;
  export default zhLocaleData;
}
declare module "i18next-icu/locale-data/zu" {
  import { LocaleData } from "i18next-icu";
  const zuLocaleData: LocaleData;
  export default zuLocaleData;
}
