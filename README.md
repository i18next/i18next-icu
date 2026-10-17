# Introduction

[![Coveralls](https://img.shields.io/coveralls/i18next/i18next-icu/master.svg?style=flat-square)](https://coveralls.io/github/i18next/i18next-icu)
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

## TypeScript

i18next's type-level interpolation extractor looks for the default `{{variable}}` syntax in your translation strings. ICU MessageFormat uses single braces — and nested-brace plurals like `{count, plural, one {{count} row} other {{count} rows}}` confuse the extractor: the first `{{` and the trailing `}}` are matched as a single interpolation, producing a phantom variable name on every `t()` call ([#85](https://github.com/i18next/i18next-icu/issues/85)).

To opt out of the i18next extractor (since `i18next` v26.2.0), set `parseInterpolation: false` in your `CustomTypeOptions`:

```ts
// i18next.d.ts
import 'i18next';

declare module 'i18next' {
  interface CustomTypeOptions {
    parseInterpolation: false;
    defaultNS: 'translation';
    resources: {
      translation: {
        key: 'You have {numPhotos, plural, =0 {no photos.} =1 {one photo.} other {# photos.}}';
      };
    };
  }
}
```

The flag is type-only; runtime interpolation is handled by `intl-messageformat` via the i18next-icu plugin and is not affected.

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
