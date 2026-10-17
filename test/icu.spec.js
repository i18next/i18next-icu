import areIntlLocalesSupported from "intl-locales-supported";

const isARSupported = areIntlLocalesSupported(['en', 'ar-AR']) && Intl.NumberFormat('ar-AR').format(1000) === '١٬٠٠٠';

if (global.Intl) {
  if (!isARSupported) {
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

    it("should ignore <0></0> placeholder tags", () => {
      const str = "This has a <0>placeholder</0> tag in it, and an { argument }";

      expect(icu.parse(str, { argument: "argument" }, "en", "ns", "key")).toBe(
        "This has a <0>placeholder</0> tag in it, and an argument"
      )
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

    it("should transform the language code", () => {
      i18next.use(ICU).init({
        lng: "invalid-icu-language",
        resources: {
          "invalid-icu-language": {
            translation: {
              key: "Hello {who}",
            }
          }
        },
        i18nFormat: {
          parseLngForICU: (lng) => "en-US",
        },
      });

      expect(i18next.t("key", { who: 'world' })).toEqual("Hello world");
    });
  });

  describe("memoize", () => {
    it("compiles a message again when it changed (addResource, reloadResources)", async () => {
      let hello = "Hello {name}";
      const instance = i18next.createInstance();
      await instance
        .use({ type: "backend", init() {}, read: (lng, ns, cb) => cb(null, { hello }) })
        .use(ICU)
        .init({ lng: "en", fallbackLng: false });

      expect(instance.t("hello", { name: "Bob" })).toEqual("Hello Bob");
      const { fc } = instance.ICU.mem.en.translation.hello;
      expect(instance.t("hello", { name: "Ann" })).toEqual("Hello Ann");
      expect(instance.ICU.mem.en.translation.hello.fc).toBe(fc);

      instance.addResource("en", "translation", "hello", "Howdy {name}");
      expect(instance.t("hello", { name: "Bob" })).toEqual("Howdy Bob");

      hello = "Hi {name}";
      await instance.reloadResources();
      expect(instance.t("hello", { name: "Bob" })).toEqual("Hi Bob");
    });

    it("keeps namespaces with dots apart", () => {
      const icu = new ICU();
      expect(icu.parse("A {x}", { x: 1 }, "en", "a", "b")).toEqual("A 1");
      expect(icu.parse("B {x}", { x: 2 }, "en", "a.b", "fc")).toEqual("B 2");
      expect(icu.parse("A {x}", { x: 3 }, "en", "a", "b")).toEqual("A 3");
    });

    it("applies formats added after a message was cached", () => {
      const icu = new ICU();
      expect(icu.parse("{v, number, short}", { v: 0.444 }, "en", "ns", "key")).toEqual("0.444");
      icu.addUserDefinedFormats({ number: { short: { maximumFractionDigits: 1 } } });
      expect(icu.parse("{v, number, short}", { v: 0.444 }, "en", "ns", "key")).toEqual("0.4");
    });
  });

  describe("values in replace", () => {
    it("reads the values from a replace object like i18next", () => {
      const icu = new ICU({ escapeVariables: true });
      expect(
        icu.parse("{count, plural, one {# item} other {# items}} for {name}", { count: 2, replace: { name: "<b>Bob</b>" } }, "en", "ns", "key")
      ).toEqual("2 items for &lt;b&gt;Bob&lt;/b&gt;");
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

  describe("HTML escape handling", () => {
    it("should handle variables with HTML special characters when enabled", () => {
      let icu = new ICU({
        escapeVariables: true
      });

      const result = icu.parse(
        "以茲證明 {name} 已於 {date} 完成由 {teacher} 授課的課程。",
        { 
          name: "小月:<", 
          date: "2025/08/20 08:00", 
          teacher: "foobar" 
        },
        "zh",
        "ns",
        "key1"
      );

      expect(result).toBe("以茲證明 小月:&lt; 已於 2025/08/20 08:00 完成由 foobar 授課的課程。");
    });

    it("should allow disabling HTML escape", () => {
      let icu = new ICU({
        escapeVariables: false
      });

      // This might fail or truncate due to HTML parsing issues
      const result = icu.parse(
        "Hello {name}",
        { name: "user<script>" },
        "en",
        "ns",
        "key1"
      );

      // Without escaping, the result might be unexpected due to HTML parsing
      expect(typeof result).toBe("string");
    });

    it("should escape multiple HTML special characters", () => {
      let icu = new ICU({
        escapeVariables: true
      });

      const result = icu.parse(
        "Message: {content}",
        { content: '<script>alert("xss")</script> & other "quotes"' },
        "en",
        "ns",
        "key1"
      );

      expect(result).toBe('Message: &lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt; &amp; other &quot;quotes&quot;');
    });

    it("should not escape non-string values", () => {
      let icu = new ICU({
        escapeVariables: true
      });

      const result = icu.parse(
        "Count: {count}, Price: {price}",
        { count: 42, price: 19.99 },
        "en",
        "ns",
        "key1"
      );

      expect(result).toBe("Count: 42, Price: 19.99");
    });

    it("should work with react-i18next Trans component patterns", () => {
      let icu = new ICU({
        escapeVariables: true
      });

      const result = icu.parse(
        "以茲證明 {name} 已於 {date} 完成由 {teacher} 授課的 <0><0>{course}</0></0> 課程。",
        { 
          name: "小月:<", 
          date: "2025/08/20 08:00", 
          teacher: "foobar",
          course: "JavaScript"
        },
        "zh",
        "ns",
        "key1"
      );

      expect(result).toBe("以茲證明 小月:&lt; 已於 2025/08/20 08:00 完成由 foobar 授課的 <0><0>JavaScript</0></0> 課程。");
    });
  });
});

describe("debug warnings", () => {
  const resources = {
    en: {
      translation: {
        photos_one: "one photo",
        photos_other: "{count} photos",
        rank_ordinal_one: "{count}st",
        friend: "a friend",
        friend_male: "a boyfriend",
        oldSyntax: "Hello {{name}}",
        rows: "{count, plural, one {{count} row} other {{count} rows}}",
        nested: "see $t(friend)",
        list: { a: "x", b: "y" },
      },
    },
  };

  function setup(options = {}) {
    const warn = jest.fn();
    const instance = i18next.createInstance();
    instance
      .use({ type: "logger", log() {}, warn: (args) => warn(args.join(" ")), error() {} })
      .use(ICU)
      .init({ lng: "en", debug: true, resources, interpolation: { escapeValue: false }, ...options });
    const warnings = () => warn.mock.calls.map((c) => c[0]).filter((m) => m.includes("i18next-icu:"));
    return { t: instance.t.bind(instance), warnings, icu: instance.ICU };
  }

  it("warns once when escapeValue is not applied", () => {
    const { warnings } = setup({ interpolation: { escapeValue: true } });
    expect(warnings()).toHaveLength(1);
    expect(warnings()[0]).toMatch(/escapeValue is not applied.*escapeVariables/);
  });

  it("does not warn about escapeValue with escapeVariables or escapeValue: false", () => {
    expect(setup().warnings()).toHaveLength(0);
    expect(setup({ interpolation: { escapeValue: true }, i18nFormat: { escapeVariables: true } }).warnings()).toHaveLength(0);
  });

  it("warns once per key about plural suffix keys", () => {
    const { t, warnings } = setup();
    expect(t("photos", { count: 2 })).toEqual("photos");
    t("photos", { count: 3 });
    t("rank", { count: 1 });
    expect(warnings()).toHaveLength(2);
    expect(warnings()[0]).toMatch(/key "photos" \(en\/translation\) .*photos_one, photos_other.*https:\/\/www\.i18next\.com\/how-to\/using-icu-or-mf2/);
    expect(warnings()[1]).toMatch(/rank_ordinal_one/);
  });

  it("warns about context keys next to a base key", () => {
    const { t, warnings } = setup();
    expect(t("friend", { context: "male" })).toEqual("a friend");
    t("friend", { context: "male" });
    t("friend", { context: "female" }); // no friend_female key
    expect(warnings()).toHaveLength(1);
    expect(warnings()[0]).toMatch(/context "male".*friend_male/);
  });

  it("warns about i18next interpolation syntax, but not about valid ICU with {{", () => {
    const { t, warnings } = setup();
    expect(t("oldSyntax", { name: "Bob" })).toEqual("Hello {{name}}");
    t("oldSyntax", { name: "Bob" });
    expect(t("rows", { count: 2 })).toEqual("2 rows");
    expect(warnings()).toHaveLength(1);
    expect(warnings()[0]).toMatch(/key "oldSyntax" .*could not be parsed.*i18next interpolation like \{\{name\}\}/);
  });

  it("warns about $t() nesting", () => {
    const { t, warnings } = setup();
    expect(t("nested")).toEqual("see $t(friend)");
    expect(warnings()).toHaveLength(1);
    expect(warnings()[0]).toMatch(/key "nested" .*does not support nesting/);
  });

  it("warns when a key resolves to an object", () => {
    const { t, warnings } = setup();
    expect(t("list", { returnObjects: true })).toEqual({ a: "x", b: "y" });
    expect(warnings()).toHaveLength(1);
    expect(warnings()[0]).toMatch(/key "list" .*object or array.*returnObjects/);
  });

  it("warns about parse and format errors that parseErrorHandler swallows", () => {
    const { t, warnings } = setup({ resources: { en: { translation: { broken: "Hi {name", greet: "Hi {name}" } } } });
    expect(t("broken")).toEqual("Hi {name");
    expect(t("greet")).toEqual("Hi {name}");
    expect(warnings()).toHaveLength(2);
    expect(warnings()[0]).toMatch(/key "broken" .*could not be parsed: /);
    expect(warnings()[1]).toMatch(/key "greet" .*could not be formatted: /);
  });

  it("stays silent without debug", () => {
    const { t, warnings, icu } = setup({ debug: false, interpolation: { escapeValue: true } });
    t("photos", { count: 2 });
    t("friend", { context: "male" });
    t("oldSyntax");
    t("nested");
    expect(warnings()).toHaveLength(0);
    expect(icu.warned.size).toBe(0); // the checks did not even run
  });
});
