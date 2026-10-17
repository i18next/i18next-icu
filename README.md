# Introduction

[![npm version](https://img.shields.io/npm/v/i18next-icu.svg?style=flat-square)](https://www.npmjs.com/package/i18next-icu)

This changes i18n format from i18next json to ICU using [formatjs/intl-messageformat](https://github.com/formatjs/formatjs/tree/main/packages/intl-messageformat)

## Advice

When using this module, only the ICU message format is respected, this means the i18next format interpolation will not work.
So for example instead of `Hy {{name}}!` it is `Hy {name}!`

# Getting started

Source can be loaded via [npm](https://www.npmjs.com/package/i18next-icu) or [downloaded](https://github.com/i18next/i18next-icu/blob/master/i18nextICU.min.js) from this repo.

```
# npm package
$ npm install i18next-icu
# peer dependencies
$ npm install intl-messageformat
```

Wiring up:

```js
import i18next from "i18next";
import ICU from "i18next-icu";

i18next.use(ICU).init(i18nextOptions);
```

- As with all modules you can either pass the constructor function (class) to the i18next.use or a concrete instance.
- If you don't use a module loader it will be added to `window.i18nextICU`

## Backend Options

```js
{
  // per default icu functions are parsed once and cached for subsequent calls
  // (a message changed by addResource, reloadResources or HMR is parsed again)
  memoize: true,

  // memoize if not having a lookup and just using the key fallback as value
  memoizeFallback: false,

  // which events should clear the cache, can be set to false or string of events separated by " "
  bindI18n: '',

  // which events on resourceSource should clear the cache, can be set to false or string of events separated by " "
  bindI18nStore: '',

  // Will be run when parser throws an error. Can return any string, which can be used as a fallback, in case of broken translation.
  // If omitted, the default swallows the error and returns the unsubstituted string (res)
  parseErrorHandler: (err, key, res, options) => {},

  // Transform the language code prior to ICU locale parsing, useful for supporting psuedo-locales like en-ZZ
  // If omitted, the default leaves the language code as is
  parseLngForICU: (lng) => lng,

  // Automatically escape HTML special characters in variable values to prevent ICU parsing issues
  // When true, characters like <, >, &, ", ' in variables are escaped to their HTML entities
  // This prevents strings like "user:<" from being truncated or causing parsing errors
  // Default: false (to maintain backward compatibility)
  escapeVariables: false,
}
```

Options can be passed in by setting options.i18nFormat in i18next.init:

```js
import i18next from "i18next";
import ICU from "i18next-icu";

i18next.use(ICU).init({
  i18nFormat: options
});
```

### more complete sample

```js
import i18next from "i18next";
import ICU from "i18next-icu";

i18next.use(ICU).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        key:
          "You have {numPhotos, plural, " +
          "=0 {no photos.}" +
          "=1 {one photo.}" +
          "other {# photos.}}"
      }
    }
  }
});

i18next.t("key", { numPhotos: 1000 }); // -> You have 1,000 photos.
```

## hints

Using i18next-icu - non of the i18next specific stuff will be available. You will have to rely on what intl-messageformat provides by calling the `t` function with needed options.

All extra features build around i18next plurals, interpolation, context do not get applied to messageformat based keys.

What keeps working and what does not is listed in [Using ICU or MF2](https://www.i18next.com/how-to/using-icu-or-mf2) in the i18next docs.

### debug warnings

With i18next `debug: true`, i18next-icu logs a warning through the i18next logger, once per key, when:

- a message can not be parsed or formatted (the default `parseErrorHandler` silently returns the unformatted message), with a hint if it contains i18next interpolation like `{{name}}`
- `t` is called with `count` and plural suffix keys (`key_one`, `key_other`, `key_ordinal_one`, ...) exist for that key
- `t` is called with `context` and a context key (`key_male`) exists
- a message contains `$t(` nesting
- a key resolves to an object or array (`returnObjects`, `joinArrays`)
- `interpolation.escapeValue` is on, which the plugin does not apply (logged once, not logged with `escapeVariables: true`)

Without `debug` these checks do not run.

### React Native, Hermes and other runtimes without Intl

intl-messageformat formats with the runtime's `Intl` APIs: `Intl.PluralRules` picks the `one`, `few`, `other`, ... case of `plural` and `selectordinal`, `Intl.NumberFormat` formats `#` and `{n, number}`, `Intl.DateTimeFormat` formats `{d, date}` and `{t, time}`. When an API is missing, formatting throws and the default `parseErrorHandler` returns the unformatted message (with `debug: true` the error is logged).

- **Hermes** (the default React Native engine) implements `Intl.NumberFormat` and `Intl.DateTimeFormat` on Android and iOS, but not `Intl.PluralRules` or `Intl.Locale` (see [Hermes Intl APIs](https://github.com/facebook/hermes/blob/main/doc/IntlAPIs.md)). Exact matches like `=0` and `=1` work, every other plural case returns the raw message. Polyfill both in your entry file, before i18next is initialized, with locale data for each language you ship:

  ```js
  import '@formatjs/intl-locale/polyfill.js';
  import '@formatjs/intl-pluralrules/polyfill-force.js';
  import '@formatjs/intl-pluralrules/locale-data/en.js';
  import '@formatjs/intl-pluralrules/locale-data/de.js';
  ```

- **Runtimes without `Intl`**: Hermes on React Native for Windows ([microsoft/hermes-windows#222](https://github.com/microsoft/hermes-windows/issues/222)), and on Android older Hermes builds and JavaScriptCore without the Intl variant. Without `Intl` no message can be created, so even `Hello {name}` comes back unformatted ([#66](https://github.com/i18next/i18next-icu/issues/66)); with only an `Intl.PluralRules` polyfill, plurals pick the right case but a message with `#` comes back unformatted ([#47](https://github.com/i18next/i18next-icu/issues/47)). Polyfill, in this order, `@formatjs/intl-getcanonicallocales`, `@formatjs/intl-locale`, `@formatjs/intl-pluralrules`, `@formatjs/intl-numberformat` and, for dates, `@formatjs/intl-datetimeformat`, the last three with locale data for your languages. See [FormatJS runtime requirements](https://formatjs.github.io/docs/guides/runtime-requirements/).

## TypeScript

Since `i18next` v26.5.0, set `parseInterpolation: 'icu'` in your `CustomTypeOptions` and the options of `t()` (and the `values` of react-i18next's `Trans` and `IcuTrans`) are type-checked against the ICU arguments of each message:

```ts
// i18next.d.ts
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    parseInterpolation: 'icu';
    defaultNS: 'translation';
    resources: {
      translation: {
        key: 'You have {numPhotos, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}';
      };
    };
  }
}
```

```ts
t('key', { numPhotos: 3 }); // ok
t('key', { numPhotos: 'three' }); // type error: numPhotos takes a number
t('key'); // type error: 'pass these arguments as t() options': { numPhotos: number }
```

`{name}` takes a string or number, `{n, number}`, `plural` and `selectordinal` a number, `{d, date}` and `{t, time}` a `Date`, `select` one of its cases or any string (for `other`), and arguments nested in cases are required too. `interpolationFormatTypeMap` changes a type by format name, for example `date: Date | number`. The messages need literal types, as the resources file from [i18next-cli](https://github.com/i18next/i18next-cli)'s `types` command has them; with `typeof` a JSON import every message is a `string` and the arguments are not checked.

With `i18next` v26.2.0 to v26.4.x, set `parseInterpolation: false` instead. i18next's own extractor looks for `{{variable}}`, and nested-brace plurals like `{count, plural, one {{count} row} other {{count} rows}}` would make it ask for a variable that does not exist ([#85](https://github.com/i18next/i18next-icu/issues/85)). With `false`, keys are checked but the options are not.

Both settings are type-only; runtime interpolation is handled by `intl-messageformat` via the i18next-icu plugin and is not affected.

## Migration guide

### 1.x.x -> 2.0.0

- updated `intl-messageformat` dependency. Adding locales-data is no longer needed.

---

<h3 align="center">Gold Sponsors</h3>

<p align="center">
  <a href="https://www.locize.com/?utm_source=i18next_icu_readme&utm_medium=github&utm_campaign=readme" target="_blank">
    <img src="https://raw.githubusercontent.com/i18next/i18next/master/assets/locize_sponsor_240.gif" width="240px">
  </a>
</p>
