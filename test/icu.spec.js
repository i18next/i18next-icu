import areIntlLocalesSupported from "intl-locales-supported";
if (global.Intl) {
  if (!areIntlLocalesSupported(['en', 'ar-AR'])) {
    const polyFill = require("intl");
    Intl.NumberFormat = polyFill.NumberFormat;
    Intl.DateTimeFormat = polyFill.DateTimeFormat;
  }
} else {
  global.Intl = require("intl");
}

import ICU from "../src/";
import i18next from "i18next";

describe("icu format", () => {
  describe("basic parse", () => {
    let icu;

    beforeEach(() => {
      icu = new ICU();
    });

    it("should parse", () => {
      const str =
        "You have {numPhotos, plural, " +
        "=0 {no photos.}" +
        "=1 {one photo.}" +
        "other {# photos.}}";

      expect(icu.parse(str, { numPhotos: 1000 }, "en", "ns", "key")).toEqual(
        "You have 1,000 photos."
      );
    });

    it("should parse (AR)", () => {
      const str =
        "{ numVar, plural, zero {Got # zero} one {Got # one} two {Got # two} few {Got # few} many {Got # many} other {Got # other}}";

      expect(icu.parse(str, { numVar: 1000 }, "ar-AR", "ns", "key")).toEqual(
        "Got ١٬٠٠٠ other"
      );
      expect(icu.parse(str, { numVar: 2 }, "ar-AR", "ns", "key")).toEqual(
        "Got ٢ two"
      );
      expect(icu.parse(str, { numVar: 1 }, "ar-AR", "ns", "key")).toEqual(
        "Got ١ one"
      );
    });
  });

  describe("with formatter", () => {
    let icu;
    const formats = {
      number: {
        THREE_FRACTION_DIGITS: {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        },
        ROUGH: {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        },
      },
    };

    beforeEach(() => {
      icu = new ICU({
        // or
        // formats
      });

      // or
      icu.addUserDefinedFormats(formats);
    });

    it("should parse with custom format", () => {
      const str1 = "number formatting 3 digits {value, number, THREE_FRACTION_DIGITS}.";
      const str2 = "number formatting 1 digit {value, number, ROUGH}.";

      expect(icu.parse(str1, { value: 0.333333 }, "en", "ns", "key1")).toEqual(
        "number formatting 3 digits 0.333."
      );
      expect(icu.parse(str1, { value: 0.444444 }, "en", "ns", "key1")).toEqual(
        "number formatting 3 digits 0.444."
      );

      expect(icu.parse(str2, { value: 0.333333 }, "en", "ns", "key2")).toEqual(
        "number formatting 1 digit 0.3."
      );
      expect(icu.parse(str2, { value: 0.444444 }, "en", "ns", "key2")).toEqual(
        "number formatting 1 digit 0.4."
      );
    });
  });

  describe("with i18next", () => {
    beforeEach(() => {
      const str =
        "You have {numPhotos, plural, " +
        "=0 {no photos.}" +
        "=1 {one photo.}" +
        "other {# photos.}}";

      const strBadMissing = "missing {variable} should not fail the world.";
      const strBadUnescape =
        "this {- unescapedVariable} is valid for i18next, but not valid for ICU format parser.";

      i18next.use(ICU).init({
        lng: "en",
        resources: {
          en: {
            translation: {
              key: str,
              bad_key_missing: strBadMissing,
              bad_key_unescape: strBadUnescape,
            },
          },
        },
      });
    });

    it("should parse", () => {
      expect(i18next.t("key", { numPhotos: 1000 })).toEqual(
        "You have 1,000 photos."
      );
      expect(i18next.t("key", { numPhotos: 2000 })).toEqual(
        "You have 2,000 photos."
      );
    });

    it("should return fallback value for incompatible key values", () => {
      expect(i18next.t("bad_key_missing")).toEqual(
        "missing {variable} should not fail the world."
      );
      expect(
        i18next.t("bad_key_unescape", { unescapedVariable: "<img />" })
      ).toEqual(
        "this {- unescapedVariable} is valid for i18next, but not valid for ICU format parser."
      );
    });

    it("should clear the cache on bound events", () => {
      i18next.use(ICU).init({
        lng: "en",
        resources: {},
        i18nFormat: {
          memoize: true,
          bindI18n: "languageChanged",
          bindI18nStore: "added",
        },
      });

      const spy = jest.spyOn(i18next.services.i18nFormat, "clearCache");

      expect(spy).not.toHaveBeenCalled();
      i18next.changeLanguage("ar");
      expect(spy).toHaveBeenCalledTimes(1);
      i18next.addResourceBundle("en", "translation", { key: "value" });
      expect(spy).toHaveBeenCalledTimes(2);
    });
  });

  describe("with missing keys", () => {
    it("should call the error handler", () => {
      let errorHandler = jest.fn();

      let icu;
      icu = new ICU({
        parseErrorHandler: errorHandler,
      });

      icu.parse("hello how are you {name}", {}, "en", "ns", "key1");

      expect(errorHandler).toHaveBeenCalled();
    });
  });

  describe("without missing keys", () => {
    it("should not call the error handler", () => {
      let errorHandler = jest.fn();

      let icu;
      icu = new ICU({
        parseErrorHandler: errorHandler,
      });

      icu.parse(
        "hello how are you {name}",
        { name: "Joseph" },
        "en",
        "ns",
        "key1"
      );

      expect(errorHandler).toHaveBeenCalledTimes(0);
    });
  });
});
