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
import { setPath, pushPath, getPath } from "../src/utils.js";

describe("prototype pollution guards", () => {
  afterEach(() => {
    // make sure no test leaks pollution into the rest of the suite
    delete Object.prototype.polluted;
    delete Object.prototype.greeting;
  });

  describe("setPath / pushPath / getPath walker", () => {
    it("setPath drops a write whose path traverses __proto__", () => {
      const store = {};
      setPath(store, "__proto__.polluted", "PWNED");
      expect(({}).polluted).toBeUndefined();
      expect(Object.prototype.polluted).toBeUndefined();
      expect(store).toEqual({});
    });

    it("setPath drops a write whose intermediate segment is constructor / prototype", () => {
      const store = {};
      setPath(store, "en.constructor.prototype.polluted", "PWNED");
      setPath(store, "en.__proto__.greeting", "PWNED");
      expect(({}).polluted).toBeUndefined();
      expect(({}).greeting).toBeUndefined();
      expect(Object.prototype.polluted).toBeUndefined();
      expect(Object.prototype.greeting).toBeUndefined();
    });

    it("setPath drops a write whose final segment is an unsafe key", () => {
      const store = {};
      setPath(store, "en.translation.__proto__", { isAdmin: true });
      expect(({}).isAdmin).toBeUndefined();
      expect(Object.prototype.isAdmin).toBeUndefined();
    });

    it("setPath still writes legitimate nested paths", () => {
      const store = {};
      setPath(store, "en.translation.greeting", "hello");
      expect(store.en.translation.greeting).toBe("hello");
    });

    it("pushPath drops a write whose path traverses an unsafe key", () => {
      const store = {};
      pushPath(store, "__proto__.polluted", "PWNED");
      expect(({}).polluted).toBeUndefined();
      expect(Object.prototype.polluted).toBeUndefined();
      expect(store).toEqual({});
    });

    it("getPath does not traverse unsafe keys", () => {
      Object.prototype.polluted = "PWNED";
      try {
        expect(getPath({}, "__proto__.polluted")).toBeUndefined();
      } finally {
        delete Object.prototype.polluted;
      }
    });
  });

  describe("parse() memoize cache", () => {
    // The memoize cache key is `${lng}.${ns}.${key}` (only the trailing key is
    // ###-escaped; lng and ns are not), and it is written into an in-memory
    // object via the same setPath walker. A prototype-name namespace segment
    // therefore reaches the walker. Same reachable segment as the namespace
    // case in the i18next-fs-backend / i18next-http-middleware advisories.
    it("does not pollute Object.prototype when the namespace is a prototype name", () => {
      const icu = new ICU();
      icu.init(null, {});
      const out = icu.parse("hello world", {}, "en", "__proto__", "greeting");
      expect(out).toBe("hello world");
      expect(({}).greeting).toBeUndefined();
      expect(Object.prototype.hasOwnProperty("greeting")).toBe(false);
    });

    it("still memoizes legitimate namespaces", () => {
      const icu = new ICU();
      icu.init(null, {});
      icu.parse("hello {name}", { name: "Tom" }, "en", "translation", "greeting");
      expect(getPath(icu.mem, "en.translation.greeting")).toBeDefined();
    });
  });
});
