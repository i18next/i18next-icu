(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.i18nextICU = factory());
})(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  // Keys that must never be traversed when walking a string/array path into an
  // object, otherwise a crafted path such as `__proto__.polluted` walks straight
  // into Object.prototype. Mirrors the guard shipped to the same setPath/pushPath
  // walker in i18next-fs-backend 2.6.6 and i18next-http-middleware 3.9.7.
  var UNSAFE_KEYS = ['__proto__', 'constructor', 'prototype'];
  function getLastOfPath(object, path, Empty) {
    function cleanKey(key) {
      return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
    }
    function canNotTraverseDeeper() {
      return !object || typeof object === 'string';
    }
    var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
    while (stack.length > 1) {
      if (canNotTraverseDeeper()) return {};
      var key = cleanKey(stack.shift());
      if (UNSAFE_KEYS.indexOf(key) > -1) return {};
      if (!object[key] && Empty) object[key] = new Empty();
      object = object[key];
    }
    if (canNotTraverseDeeper()) return {};
    var k = cleanKey(stack.shift());
    if (UNSAFE_KEYS.indexOf(k) > -1) return {};
    return {
      obj: object,
      k: k
    };
  }
  function setPath(object, path, newValue) {
    var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;
    if (obj === undefined) return; // unsafe path, drop silently

    obj[k] = newValue;
  }
  function getPath(object, path) {
    var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;
    if (!obj) return undefined;
    return obj[k];
  }
  var arr = [];
  var each = arr.forEach;
  var slice = arr.slice;
  function defaults(obj) {
    each.call(slice.call(arguments, 1), function (source) {
      if (source) {
        // iterate own keys only (skip inherited/polluted props) and refuse to
        // copy prototype keys, so a polluted source can't seed Object.prototype.
        for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
          var prop = _Object$keys[_i];
          if (UNSAFE_KEYS.indexOf(prop) > -1) continue;
          if (obj[prop] === undefined) obj[prop] = source[prop];
        }
      }
    });
    return obj;
  }

  //#region packages/fast-memoize/index.ts
  function memoize(fn, options) {
  	const cache = options && options.cache ? options.cache : cacheDefault;
  	const serializer = options && options.serializer ? options.serializer : serializerDefault;
  	return (options && options.strategy ? options.strategy : strategyDefault)(fn, {
  		cache,
  		serializer
  	});
  }
  function isPrimitive(value) {
  	return value == null || typeof value === "number" || typeof value === "boolean";
  }
  function monadic(fn, cache, serializer, arg) {
  	const cacheKey = isPrimitive(arg) ? arg : serializer(arg);
  	let computedValue = cache.get(cacheKey);
  	if (typeof computedValue === "undefined") {
  		computedValue = fn.call(this, arg);
  		cache.set(cacheKey, computedValue);
  	}
  	return computedValue;
  }
  function variadic(fn, cache, serializer) {
  	const args = Array.prototype.slice.call(arguments, 3);
  	const cacheKey = serializer(args);
  	let computedValue = cache.get(cacheKey);
  	if (typeof computedValue === "undefined") {
  		computedValue = fn.apply(this, args);
  		cache.set(cacheKey, computedValue);
  	}
  	return computedValue;
  }
  function assemble(fn, context, strategy, cache, serialize) {
  	return strategy.bind(context, fn, cache, serialize);
  }
  function strategyDefault(fn, options) {
  	const strategy = fn.length === 1 ? monadic : variadic;
  	return assemble(fn, this, strategy, options.cache.create(), options.serializer);
  }
  function strategyVariadic(fn, options) {
  	return assemble(fn, this, variadic, options.cache.create(), options.serializer);
  }
  function strategyMonadic(fn, options) {
  	return assemble(fn, this, monadic, options.cache.create(), options.serializer);
  }
  const serializerDefault = function() {
  	return JSON.stringify(arguments);
  };
  var ObjectWithoutPrototypeCache = class {
  	constructor() {
  		this.cache = Object.create(null);
  	}
  	get(key) {
  		return this.cache[key];
  	}
  	set(key, value) {
  		this.cache[key] = value;
  	}
  };
  const cacheDefault = { create: function create() {
  	return new ObjectWithoutPrototypeCache();
  } };
  const strategies = {
  	variadic: strategyVariadic,
  	monadic: strategyMonadic
  };

  //#region packages/icu-skeleton-parser/date-time.ts
  /**
  * https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
  * Credit: https://github.com/caridy/intl-datetimeformat-pattern/blob/master/index.js
  * with some tweaks
  */
  const DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  /**
  * Parse Date time skeleton into Intl.DateTimeFormatOptions
  * Ref: https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
  * @public
  * @param skeleton skeleton string
  */
  function parseDateTimeSkeleton(skeleton) {
  	const result = {};
  	skeleton.replace(DATE_TIME_REGEX, (match) => {
  		const len = match.length;
  		switch (match[0]) {
  			case "G":
  				result.era = len === 4 ? "long" : len === 5 ? "narrow" : "short";
  				break;
  			case "y":
  				result.year = len === 2 ? "2-digit" : "numeric";
  				break;
  			case "Y":
  			case "u":
  			case "U":
  			case "r": throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
  			case "q":
  			case "Q": throw new RangeError("`q/Q` (quarter) patterns are not supported");
  			case "M":
  			case "L":
  				result.month = [
  					"numeric",
  					"2-digit",
  					"short",
  					"long",
  					"narrow"
  				][len - 1];
  				break;
  			case "w":
  			case "W": throw new RangeError("`w/W` (week) patterns are not supported");
  			case "d":
  				result.day = ["numeric", "2-digit"][len - 1];
  				break;
  			case "D":
  			case "F":
  			case "g": throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
  			case "E":
  				result.weekday = len === 4 ? "long" : len === 5 ? "narrow" : "short";
  				break;
  			case "e":
  				if (len < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
  				result.weekday = [
  					"short",
  					"long",
  					"narrow",
  					"short"
  				][len - 3];
  				break;
  			case "c":
  				if (len < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
  				result.weekday = [
  					"short",
  					"long",
  					"narrow",
  					"short"
  				][len - 3];
  				break;
  			case "a":
  				result.hour12 = true;
  				break;
  			case "b":
  			case "B": throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
  			case "h":
  				result.hourCycle = "h12";
  				result.hour = ["numeric", "2-digit"][len - 1];
  				break;
  			case "H":
  				result.hourCycle = "h23";
  				result.hour = ["numeric", "2-digit"][len - 1];
  				break;
  			case "K":
  				result.hourCycle = "h11";
  				result.hour = ["numeric", "2-digit"][len - 1];
  				break;
  			case "k":
  				result.hourCycle = "h24";
  				result.hour = ["numeric", "2-digit"][len - 1];
  				break;
  			case "j":
  			case "J":
  			case "C": throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
  			case "m":
  				result.minute = ["numeric", "2-digit"][len - 1];
  				break;
  			case "s":
  				result.second = ["numeric", "2-digit"][len - 1];
  				break;
  			case "S":
  			case "A": throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
  			case "z":
  				result.timeZoneName = len < 4 ? "short" : "long";
  				break;
  			case "Z":
  			case "O":
  			case "v":
  			case "V":
  			case "X":
  			case "x": throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
  		}
  		return "";
  	});
  	return result;
  }
  //#endregion
  //#region node_modules/.aspect_rules_js/@formatjs_generated+unicode@0.0.0/node_modules/@formatjs_generated/unicode/icu-skeleton-parser-regex.js
  const WHITE_SPACE_REGEX = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  //#endregion
  //#region packages/icu-skeleton-parser/number.ts
  function parseNumberSkeletonFromString(skeleton) {
  	if (skeleton.length === 0) throw new Error("Number skeleton cannot be empty");
  	const stringTokens = skeleton.split(WHITE_SPACE_REGEX).filter((x) => x.length > 0);
  	const tokens = [];
  	for (const stringToken of stringTokens) {
  		let stemAndOptions = stringToken.split("/");
  		if (stemAndOptions.length === 0) throw new Error("Invalid number skeleton");
  		const [stem, ...options] = stemAndOptions;
  		for (const option of options) if (option.length === 0) throw new Error("Invalid number skeleton");
  		tokens.push({
  			stem,
  			options
  		});
  	}
  	return tokens;
  }
  function icuUnitToEcma(unit) {
  	return unit.replace(/^(.*?)-/, "");
  }
  const FRACTION_PRECISION_REGEX = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
  const SIGNIFICANT_PRECISION_REGEX = /^(@+)?(\+|#+)?[rs]?$/g;
  const INTEGER_WIDTH_REGEX = /(\*)(0+)|(#+)(0+)|(0+)/g;
  const CONCISE_INTEGER_WIDTH_REGEX = /^(0+)$/;
  function parseSignificantPrecision(str) {
  	const result = {};
  	if (str[str.length - 1] === "r") result.roundingPriority = "morePrecision";
  	else if (str[str.length - 1] === "s") result.roundingPriority = "lessPrecision";
  	str.replace(SIGNIFICANT_PRECISION_REGEX, function(_, g1, g2) {
  		if (typeof g2 !== "string") {
  			result.minimumSignificantDigits = g1.length;
  			result.maximumSignificantDigits = g1.length;
  		} else if (g2 === "+") result.minimumSignificantDigits = g1.length;
  		else if (g1[0] === "#") result.maximumSignificantDigits = g1.length;
  		else {
  			result.minimumSignificantDigits = g1.length;
  			result.maximumSignificantDigits = g1.length + (typeof g2 === "string" ? g2.length : 0);
  		}
  		return "";
  	});
  	return result;
  }
  function parseSign(str) {
  	switch (str) {
  		case "sign-auto": return { signDisplay: "auto" };
  		case "sign-accounting":
  		case "()": return { currencySign: "accounting" };
  		case "sign-always":
  		case "+!": return { signDisplay: "always" };
  		case "sign-accounting-always":
  		case "()!": return {
  			signDisplay: "always",
  			currencySign: "accounting"
  		};
  		case "sign-except-zero":
  		case "+?": return { signDisplay: "exceptZero" };
  		case "sign-accounting-except-zero":
  		case "()?": return {
  			signDisplay: "exceptZero",
  			currencySign: "accounting"
  		};
  		case "sign-never":
  		case "+_": return { signDisplay: "never" };
  	}
  }
  function parseConciseScientificAndEngineeringStem(stem) {
  	let result;
  	if (stem[0] === "E" && stem[1] === "E") {
  		result = { notation: "engineering" };
  		stem = stem.slice(2);
  	} else if (stem[0] === "E") {
  		result = { notation: "scientific" };
  		stem = stem.slice(1);
  	}
  	if (result) {
  		const signDisplay = stem.slice(0, 2);
  		if (signDisplay === "+!") {
  			result.signDisplay = "always";
  			stem = stem.slice(2);
  		} else if (signDisplay === "+?") {
  			result.signDisplay = "exceptZero";
  			stem = stem.slice(2);
  		}
  		if (!CONCISE_INTEGER_WIDTH_REGEX.test(stem)) throw new Error("Malformed concise eng/scientific notation");
  		result.minimumIntegerDigits = stem.length;
  	}
  	return result;
  }
  function parseNotationOptions(opt) {
  	const result = {};
  	const signOpts = parseSign(opt);
  	if (signOpts) return signOpts;
  	return result;
  }
  /**
  * https://github.com/unicode-org/icu/blob/master/docs/userguide/format_parse/numbers/skeletons.md#skeleton-stems-and-options
  */
  function parseNumberSkeleton(tokens) {
  	let result = {};
  	for (const token of tokens) {
  		switch (token.stem) {
  			case "percent":
  			case "%":
  				result.style = "percent";
  				continue;
  			case "%x100":
  				result.style = "percent";
  				result.scale = 100;
  				continue;
  			case "currency":
  				result.style = "currency";
  				result.currency = token.options[0];
  				continue;
  			case "group-off":
  			case ",_":
  				result.useGrouping = false;
  				continue;
  			case "precision-integer":
  			case ".":
  				result.maximumFractionDigits = 0;
  				continue;
  			case "measure-unit":
  			case "unit":
  				result.style = "unit";
  				result.unit = icuUnitToEcma(token.options[0]);
  				continue;
  			case "compact-short":
  			case "K":
  				result.notation = "compact";
  				result.compactDisplay = "short";
  				continue;
  			case "compact-long":
  			case "KK":
  				result.notation = "compact";
  				result.compactDisplay = "long";
  				continue;
  			case "scientific":
  				result = {
  					...result,
  					notation: "scientific",
  					...token.options.reduce((all, opt) => ({
  						...all,
  						...parseNotationOptions(opt)
  					}), {})
  				};
  				continue;
  			case "engineering":
  				result = {
  					...result,
  					notation: "engineering",
  					...token.options.reduce((all, opt) => ({
  						...all,
  						...parseNotationOptions(opt)
  					}), {})
  				};
  				continue;
  			case "notation-simple":
  				result.notation = "standard";
  				continue;
  			case "unit-width-narrow":
  				result.currencyDisplay = "narrowSymbol";
  				result.unitDisplay = "narrow";
  				continue;
  			case "unit-width-short":
  				result.currencyDisplay = "code";
  				result.unitDisplay = "short";
  				continue;
  			case "unit-width-full-name":
  				result.currencyDisplay = "name";
  				result.unitDisplay = "long";
  				continue;
  			case "unit-width-iso-code":
  				result.currencyDisplay = "symbol";
  				continue;
  			case "scale":
  				result.scale = parseFloat(token.options[0]);
  				continue;
  			case "rounding-mode-floor":
  				result.roundingMode = "floor";
  				continue;
  			case "rounding-mode-ceiling":
  				result.roundingMode = "ceil";
  				continue;
  			case "rounding-mode-down":
  				result.roundingMode = "trunc";
  				continue;
  			case "rounding-mode-up":
  				result.roundingMode = "expand";
  				continue;
  			case "rounding-mode-half-even":
  				result.roundingMode = "halfEven";
  				continue;
  			case "rounding-mode-half-down":
  				result.roundingMode = "halfTrunc";
  				continue;
  			case "rounding-mode-half-up":
  				result.roundingMode = "halfExpand";
  				continue;
  			case "integer-width":
  				if (token.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
  				token.options[0].replace(INTEGER_WIDTH_REGEX, function(_, g1, g2, g3, g4, g5) {
  					if (g1) result.minimumIntegerDigits = g2.length;
  					else if (g3 && g4) throw new Error("We currently do not support maximum integer digits");
  					else if (g5) throw new Error("We currently do not support exact integer digits");
  					return "";
  				});
  				continue;
  		}
  		if (CONCISE_INTEGER_WIDTH_REGEX.test(token.stem)) {
  			result.minimumIntegerDigits = token.stem.length;
  			continue;
  		}
  		if (FRACTION_PRECISION_REGEX.test(token.stem)) {
  			if (token.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
  			token.stem.replace(FRACTION_PRECISION_REGEX, function(_, g1, g2, g3, g4, g5) {
  				if (g2 === "*") result.minimumFractionDigits = g1.length;
  				else if (g3 && g3[0] === "#") result.maximumFractionDigits = g3.length;
  				else if (g4 && g5) {
  					result.minimumFractionDigits = g4.length;
  					result.maximumFractionDigits = g4.length + g5.length;
  				} else {
  					result.minimumFractionDigits = g1.length;
  					result.maximumFractionDigits = g1.length;
  				}
  				return "";
  			});
  			const opt = token.options[0];
  			if (opt === "w") result = {
  				...result,
  				trailingZeroDisplay: "stripIfInteger"
  			};
  			else if (opt) result = {
  				...result,
  				...parseSignificantPrecision(opt)
  			};
  			continue;
  		}
  		if (SIGNIFICANT_PRECISION_REGEX.test(token.stem)) {
  			result = {
  				...result,
  				...parseSignificantPrecision(token.stem)
  			};
  			continue;
  		}
  		const signOpts = parseSign(token.stem);
  		if (signOpts) result = {
  			...result,
  			...signOpts
  		};
  		const conciseScientificAndEngineeringOpts = parseConciseScientificAndEngineeringStem(token.stem);
  		if (conciseScientificAndEngineeringOpts) result = {
  			...result,
  			...conciseScientificAndEngineeringOpts
  		};
  	}
  	return result;
  }

  //#region packages/icu-messageformat-parser/error.ts
  let ErrorKind = /* @__PURE__ */ function(ErrorKind) {
  	/** Argument is unclosed (e.g. `{0`) */
  	ErrorKind[ErrorKind["EXPECT_ARGUMENT_CLOSING_BRACE"] = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
  	/** Argument is empty (e.g. `{}`). */
  	ErrorKind[ErrorKind["EMPTY_ARGUMENT"] = 2] = "EMPTY_ARGUMENT";
  	/** Argument is malformed (e.g. `{foo!}``) */
  	ErrorKind[ErrorKind["MALFORMED_ARGUMENT"] = 3] = "MALFORMED_ARGUMENT";
  	/** Expect an argument type (e.g. `{foo,}`) */
  	ErrorKind[ErrorKind["EXPECT_ARGUMENT_TYPE"] = 4] = "EXPECT_ARGUMENT_TYPE";
  	/** Unsupported argument type (e.g. `{foo,foo}`) */
  	ErrorKind[ErrorKind["INVALID_ARGUMENT_TYPE"] = 5] = "INVALID_ARGUMENT_TYPE";
  	/** Expect an argument style (e.g. `{foo, number, }`) */
  	ErrorKind[ErrorKind["EXPECT_ARGUMENT_STYLE"] = 6] = "EXPECT_ARGUMENT_STYLE";
  	/** The number skeleton is invalid. */
  	ErrorKind[ErrorKind["INVALID_NUMBER_SKELETON"] = 7] = "INVALID_NUMBER_SKELETON";
  	/** The date time skeleton is invalid. */
  	ErrorKind[ErrorKind["INVALID_DATE_TIME_SKELETON"] = 8] = "INVALID_DATE_TIME_SKELETON";
  	/** Exepct a number skeleton following the `::` (e.g. `{foo, number, ::}`) */
  	ErrorKind[ErrorKind["EXPECT_NUMBER_SKELETON"] = 9] = "EXPECT_NUMBER_SKELETON";
  	/** Exepct a date time skeleton following the `::` (e.g. `{foo, date, ::}`) */
  	ErrorKind[ErrorKind["EXPECT_DATE_TIME_SKELETON"] = 10] = "EXPECT_DATE_TIME_SKELETON";
  	/** Unmatched apostrophes in the argument style (e.g. `{foo, number, 'test`) */
  	ErrorKind[ErrorKind["UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"] = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
  	/** Missing select argument options (e.g. `{foo, select}`) */
  	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_OPTIONS"] = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
  	/** Expecting an offset value in `plural` or `selectordinal` argument (e.g `{foo, plural, offset}`) */
  	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"] = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
  	/** Offset value in `plural` or `selectordinal` is invalid (e.g. `{foo, plural, offset: x}`) */
  	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"] = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
  	/** Expecting a selector in `select` argument (e.g `{foo, select}`) */
  	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR"] = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
  	/** Expecting a selector in `plural` or `selectordinal` argument (e.g `{foo, plural}`) */
  	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR"] = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
  	/** Expecting a message fragment after the `select` selector (e.g. `{foo, select, apple}`) */
  	ErrorKind[ErrorKind["EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"] = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
  	/**
  	* Expecting a message fragment after the `plural` or `selectordinal` selector
  	* (e.g. `{foo, plural, one}`)
  	*/
  	ErrorKind[ErrorKind["EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"] = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
  	/** Selector in `plural` or `selectordinal` is malformed (e.g. `{foo, plural, =x {#}}`) */
  	ErrorKind[ErrorKind["INVALID_PLURAL_ARGUMENT_SELECTOR"] = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
  	/**
  	* Duplicate selectors in `plural` or `selectordinal` argument.
  	* (e.g. {foo, plural, one {#} one {#}})
  	*/
  	ErrorKind[ErrorKind["DUPLICATE_PLURAL_ARGUMENT_SELECTOR"] = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
  	/** Duplicate selectors in `select` argument.
  	* (e.g. {foo, select, apple {apple} apple {apple}})
  	*/
  	ErrorKind[ErrorKind["DUPLICATE_SELECT_ARGUMENT_SELECTOR"] = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
  	/** Plural or select argument option must have `other` clause. */
  	ErrorKind[ErrorKind["MISSING_OTHER_CLAUSE"] = 22] = "MISSING_OTHER_CLAUSE";
  	/** The tag is malformed. (e.g. `<bold!>foo</bold!>) */
  	ErrorKind[ErrorKind["INVALID_TAG"] = 23] = "INVALID_TAG";
  	/** The tag name is invalid. (e.g. `<123>foo</123>`) */
  	ErrorKind[ErrorKind["INVALID_TAG_NAME"] = 25] = "INVALID_TAG_NAME";
  	/** The closing tag does not match the opening tag. (e.g. `<bold>foo</italic>`) */
  	ErrorKind[ErrorKind["UNMATCHED_CLOSING_TAG"] = 26] = "UNMATCHED_CLOSING_TAG";
  	/** The opening tag has unmatched closing tag. (e.g. `<bold>foo`) */
  	ErrorKind[ErrorKind["UNCLOSED_TAG"] = 27] = "UNCLOSED_TAG";
  	return ErrorKind;
  }({});
  /**
  * Type Guards
  */
  function isLiteralElement(el) {
  	return el.type === 0;
  }
  function isArgumentElement(el) {
  	return el.type === 1;
  }
  function isNumberElement(el) {
  	return el.type === 2;
  }
  function isDateElement(el) {
  	return el.type === 3;
  }
  function isTimeElement(el) {
  	return el.type === 4;
  }
  function isSelectElement(el) {
  	return el.type === 5;
  }
  function isPluralElement(el) {
  	return el.type === 6;
  }
  function isPoundElement(el) {
  	return el.type === 7;
  }
  function isTagElement(el) {
  	return el.type === 8;
  }
  function isNumberSkeleton(el) {
  	return !!(el && typeof el === "object" && el.type === 0);
  }
  function isDateTimeSkeleton(el) {
  	return !!(el && typeof el === "object" && el.type === 1);
  }
  //#endregion
  //#region node_modules/.aspect_rules_js/@formatjs_generated+unicode@0.0.0/node_modules/@formatjs_generated/unicode/icu-messageformat-parser-regex.js
  const SPACE_SEPARATOR_REGEX = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
  const IDENTIFIER_PREFIX_REGEX = /([^\t-\r -\/:-@\[-\^`\{-~\x85\xA0-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u1680\u2000-\u200A\u2010-\u2029\u202F-\u203E\u2041-\u2053\u2055-\u205F\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3000-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]*)/g;
  //#endregion
  //#region node_modules/.aspect_rules_js/@formatjs_generated+cldr.core@0.0.0/node_modules/@formatjs_generated/cldr.core/time-data.js
  const timeData = {
  	"001": ["H", "h"],
  	"419": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"AC": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"AD": ["H", "hB"],
  	"AE": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"AF": [
  		"H",
  		"hb",
  		"hB",
  		"h"
  	],
  	"AG": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"AI": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"AL": [
  		"h",
  		"H",
  		"hB"
  	],
  	"AM": ["H", "hB"],
  	"AO": ["H", "hB"],
  	"AR": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"AS": ["h", "H"],
  	"AT": ["H", "hB"],
  	"AU": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"AW": ["H", "hB"],
  	"AX": ["H"],
  	"AZ": [
  		"H",
  		"hB",
  		"h"
  	],
  	"BA": [
  		"H",
  		"hB",
  		"h"
  	],
  	"BB": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"BD": [
  		"h",
  		"hB",
  		"H"
  	],
  	"BE": ["H", "hB"],
  	"BF": ["H", "hB"],
  	"BG": [
  		"H",
  		"hB",
  		"h"
  	],
  	"BH": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"BI": ["H", "h"],
  	"BJ": ["H", "hB"],
  	"BL": ["H", "hB"],
  	"BM": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"BN": [
  		"hb",
  		"hB",
  		"h",
  		"H"
  	],
  	"BO": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"BQ": ["H"],
  	"BR": ["H", "hB"],
  	"BS": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"BT": ["h", "H"],
  	"BW": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"BY": ["H", "h"],
  	"BZ": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"CA": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"CC": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"CD": ["hB", "H"],
  	"CF": [
  		"H",
  		"h",
  		"hB"
  	],
  	"CG": ["H", "hB"],
  	"CH": [
  		"H",
  		"hB",
  		"h"
  	],
  	"CI": ["H", "hB"],
  	"CK": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"CL": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"CM": [
  		"H",
  		"h",
  		"hB"
  	],
  	"CN": [
  		"H",
  		"hB",
  		"hb",
  		"h"
  	],
  	"CO": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"CP": ["H"],
  	"CR": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"CU": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"CV": ["H", "hB"],
  	"CW": ["H", "hB"],
  	"CX": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"CY": [
  		"h",
  		"H",
  		"hb",
  		"hB"
  	],
  	"CZ": ["H"],
  	"DE": ["H", "hB"],
  	"DG": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"DJ": ["h", "H"],
  	"DK": ["H"],
  	"DM": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"DO": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"DZ": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"EA": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"EC": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"EE": ["H", "hB"],
  	"EG": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"EH": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"ER": ["h", "H"],
  	"ES": [
  		"H",
  		"hB",
  		"h",
  		"hb"
  	],
  	"ET": [
  		"hB",
  		"hb",
  		"h",
  		"H"
  	],
  	"FI": ["H"],
  	"FJ": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"FK": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"FM": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"FO": ["H", "h"],
  	"FR": ["H", "hB"],
  	"GA": ["H", "hB"],
  	"GB": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"GD": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"GE": [
  		"H",
  		"hB",
  		"h"
  	],
  	"GF": ["H", "hB"],
  	"GG": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"GH": ["h", "H"],
  	"GI": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"GL": ["H", "h"],
  	"GM": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"GN": ["H", "hB"],
  	"GP": ["H", "hB"],
  	"GQ": [
  		"H",
  		"hB",
  		"h",
  		"hb"
  	],
  	"GR": [
  		"h",
  		"H",
  		"hb",
  		"hB"
  	],
  	"GS": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"GT": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"GU": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"GW": ["H", "hB"],
  	"GY": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"HK": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"HN": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"HR": ["H", "hB"],
  	"HU": ["H", "h"],
  	"IC": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"ID": ["H"],
  	"IE": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"IL": ["H", "hB"],
  	"IM": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"IN": ["h", "H"],
  	"IO": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"IQ": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"IR": ["hB", "H"],
  	"IS": ["H"],
  	"IT": ["H", "hB"],
  	"JE": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"JM": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"JO": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"JP": [
  		"H",
  		"K",
  		"h"
  	],
  	"KE": [
  		"hB",
  		"hb",
  		"H",
  		"h"
  	],
  	"KG": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"KH": [
  		"hB",
  		"h",
  		"H",
  		"hb"
  	],
  	"KI": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"KM": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"KN": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"KP": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"KR": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"KW": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"KY": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"KZ": ["H", "hB"],
  	"LA": [
  		"H",
  		"hb",
  		"hB",
  		"h"
  	],
  	"LB": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"LC": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"LI": [
  		"H",
  		"hB",
  		"h"
  	],
  	"LK": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"LR": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"LS": ["h", "H"],
  	"LT": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"LU": [
  		"H",
  		"h",
  		"hB"
  	],
  	"LV": [
  		"H",
  		"hB",
  		"hb",
  		"h"
  	],
  	"LY": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"MA": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"MC": ["H", "hB"],
  	"MD": ["H", "hB"],
  	"ME": [
  		"H",
  		"hB",
  		"h"
  	],
  	"MF": ["H", "hB"],
  	"MG": ["H", "h"],
  	"MH": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"MK": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"ML": ["H"],
  	"MM": [
  		"hB",
  		"hb",
  		"H",
  		"h"
  	],
  	"MN": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"MO": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"MP": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"MQ": ["H", "hB"],
  	"MR": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"MS": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"MT": ["H", "h"],
  	"MU": ["H", "h"],
  	"MV": ["H", "h"],
  	"MW": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"MX": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"MY": [
  		"hb",
  		"hB",
  		"h",
  		"H"
  	],
  	"MZ": ["H", "hB"],
  	"NA": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"NC": ["H", "hB"],
  	"NE": ["H"],
  	"NF": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"NG": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"NI": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"NL": ["H", "hB"],
  	"NO": ["H", "h"],
  	"NP": [
  		"H",
  		"h",
  		"hB"
  	],
  	"NR": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"NU": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"NZ": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"OM": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"PA": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"PE": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"PF": [
  		"H",
  		"h",
  		"hB"
  	],
  	"PG": ["h", "H"],
  	"PH": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"PK": [
  		"h",
  		"hB",
  		"H"
  	],
  	"PL": ["H", "h"],
  	"PM": ["H", "hB"],
  	"PN": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"PR": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"PS": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"PT": ["H", "hB"],
  	"PW": ["h", "H"],
  	"PY": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"QA": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"RE": ["H", "hB"],
  	"RO": ["H", "hB"],
  	"RS": [
  		"H",
  		"hB",
  		"h"
  	],
  	"RU": ["H"],
  	"RW": ["H", "h"],
  	"SA": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"SB": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"SC": [
  		"H",
  		"h",
  		"hB"
  	],
  	"SD": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"SE": ["H"],
  	"SG": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"SH": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"SI": ["H", "hB"],
  	"SJ": ["H"],
  	"SK": ["H"],
  	"SL": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"SM": [
  		"H",
  		"h",
  		"hB"
  	],
  	"SN": [
  		"H",
  		"h",
  		"hB"
  	],
  	"SO": ["h", "H"],
  	"SR": ["H", "hB"],
  	"SS": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"ST": ["H", "hB"],
  	"SV": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"SX": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"SY": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"SZ": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"TA": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"TC": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"TD": [
  		"h",
  		"H",
  		"hB"
  	],
  	"TF": [
  		"H",
  		"h",
  		"hB"
  	],
  	"TG": ["H", "hB"],
  	"TH": ["H", "h"],
  	"TJ": ["H", "h"],
  	"TL": [
  		"H",
  		"hB",
  		"hb",
  		"h"
  	],
  	"TM": ["H", "h"],
  	"TN": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"TO": ["h", "H"],
  	"TR": ["H", "hB"],
  	"TT": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"TW": [
  		"hB",
  		"hb",
  		"h",
  		"H"
  	],
  	"TZ": [
  		"hB",
  		"hb",
  		"H",
  		"h"
  	],
  	"UA": [
  		"H",
  		"hB",
  		"h"
  	],
  	"UG": [
  		"hB",
  		"hb",
  		"H",
  		"h"
  	],
  	"UM": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"US": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"UY": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"UZ": [
  		"H",
  		"hB",
  		"h"
  	],
  	"VA": [
  		"H",
  		"h",
  		"hB"
  	],
  	"VC": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"VE": [
  		"h",
  		"H",
  		"hB",
  		"hb"
  	],
  	"VG": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"VI": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"VN": ["H", "h"],
  	"VU": ["h", "H"],
  	"WF": ["H", "hB"],
  	"WS": ["h", "H"],
  	"XK": [
  		"H",
  		"hB",
  		"h"
  	],
  	"YE": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"YT": ["H", "hB"],
  	"ZA": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"ZM": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"ZW": ["H", "h"],
  	"af-ZA": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"ar-001": [
  		"h",
  		"hB",
  		"hb",
  		"H"
  	],
  	"ca-ES": [
  		"H",
  		"h",
  		"hB"
  	],
  	"en-001": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"en-HK": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"en-IL": [
  		"H",
  		"h",
  		"hb",
  		"hB"
  	],
  	"en-MY": [
  		"h",
  		"hb",
  		"H",
  		"hB"
  	],
  	"es-BR": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"es-ES": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"es-GQ": [
  		"H",
  		"h",
  		"hB",
  		"hb"
  	],
  	"fr-CA": [
  		"H",
  		"h",
  		"hB"
  	],
  	"gl-ES": [
  		"H",
  		"h",
  		"hB"
  	],
  	"gu-IN": [
  		"hB",
  		"hb",
  		"h",
  		"H"
  	],
  	"hi-IN": [
  		"hB",
  		"h",
  		"H"
  	],
  	"it-CH": [
  		"H",
  		"h",
  		"hB"
  	],
  	"it-IT": [
  		"H",
  		"h",
  		"hB"
  	],
  	"kn-IN": [
  		"hB",
  		"h",
  		"H"
  	],
  	"ku-SY": ["H", "hB"],
  	"ml-IN": [
  		"hB",
  		"h",
  		"H"
  	],
  	"mr-IN": [
  		"hB",
  		"hb",
  		"h",
  		"H"
  	],
  	"pa-IN": [
  		"hB",
  		"hb",
  		"h",
  		"H"
  	],
  	"ta-IN": [
  		"hB",
  		"h",
  		"hb",
  		"H"
  	],
  	"te-IN": [
  		"hB",
  		"h",
  		"H"
  	],
  	"zu-ZA": [
  		"H",
  		"hB",
  		"hb",
  		"h"
  	]
  };
  //#endregion
  //#region packages/icu-messageformat-parser/date-time-pattern-generator.ts
  /**
  * Returns the best matching date time pattern if a date time skeleton
  * pattern is provided with a locale. Follows the Unicode specification:
  * https://www.unicode.org/reports/tr35/tr35-dates.html#table-mapping-requested-time-skeletons-to-patterns
  * @param skeleton date time skeleton pattern that possibly includes j, J or C
  * @param locale
  */
  function getBestPattern(skeleton, locale) {
  	let skeletonCopy = "";
  	for (let patternPos = 0; patternPos < skeleton.length; patternPos++) {
  		const patternChar = skeleton.charAt(patternPos);
  		if (patternChar === "j") {
  			let extraLength = 0;
  			while (patternPos + 1 < skeleton.length && skeleton.charAt(patternPos + 1) === patternChar) {
  				extraLength++;
  				patternPos++;
  			}
  			let hourLen = 1 + (extraLength & 1);
  			let dayPeriodLen = extraLength < 2 ? 1 : 3 + (extraLength >> 1);
  			let dayPeriodChar = "a";
  			let hourChar = getDefaultHourSymbolFromLocale(locale);
  			if (hourChar == "H" || hourChar == "k") dayPeriodLen = 0;
  			while (dayPeriodLen-- > 0) skeletonCopy += dayPeriodChar;
  			while (hourLen-- > 0) skeletonCopy = hourChar + skeletonCopy;
  		} else if (patternChar === "J") skeletonCopy += "H";
  		else skeletonCopy += patternChar;
  	}
  	return skeletonCopy;
  }
  /**
  * Maps the [hour cycle type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle)
  * of the given `locale` to the corresponding time pattern.
  * @param locale
  */
  function getDefaultHourSymbolFromLocale(locale) {
  	let hourCycle = locale.hourCycle;
  	if (hourCycle === void 0) {
  		const localeWithHourCycles = locale;
  		hourCycle = localeWithHourCycles.getHourCycles?.()[0] ?? localeWithHourCycles.hourCycles?.[0];
  	}
  	if (hourCycle) switch (hourCycle) {
  		case "h24": return "k";
  		case "h23": return "H";
  		case "h12": return "h";
  		case "h11": return "K";
  		default: throw new Error("Invalid hourCycle");
  	}
  	const languageTag = locale.language;
  	let regionTag;
  	if (languageTag !== "root") regionTag = locale.maximize().region;
  	return (timeData[`${languageTag}-${regionTag}`] || timeData[regionTag || ""] || timeData[languageTag || ""] || timeData[`${languageTag}-001`] || timeData["001"])[0].charAt(0);
  }
  //#endregion
  //#region packages/icu-messageformat-parser/parser.ts
  const SPACE_SEPARATOR_START_REGEX = new RegExp(`^${SPACE_SEPARATOR_REGEX.source}*`);
  const SPACE_SEPARATOR_END_REGEX = new RegExp(`${SPACE_SEPARATOR_REGEX.source}*$`);
  function createLocation(start, end) {
  	return {
  		start,
  		end
  	};
  }
  const hasNativeFromEntries = !!Object.fromEntries;
  const hasTrimStart = !!String.prototype.trimStart;
  const hasTrimEnd = !!String.prototype.trimEnd;
  const fromEntries = hasNativeFromEntries ? Object.fromEntries : function fromEntries(entries) {
  	const obj = {};
  	for (const [k, v] of entries) obj[k] = v;
  	return obj;
  };
  const trimStart = hasTrimStart ? function trimStart(s) {
  	return s.trimStart();
  } : function trimStart(s) {
  	return s.replace(SPACE_SEPARATOR_START_REGEX, "");
  };
  const trimEnd = hasTrimEnd ? function trimEnd(s) {
  	return s.trimEnd();
  } : function trimEnd(s) {
  	return s.replace(SPACE_SEPARATOR_END_REGEX, "");
  };
  let IDENTIFIER_PREFIX_RE = createIdentifierPrefixRegex();
  function createIdentifierPrefixRegex() {
  	try {
  		const regex = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  		if (regex.exec("a ")?.[1] === "a") return regex;
  	} catch {}
  	return IDENTIFIER_PREFIX_REGEX;
  }
  function matchIdentifierAtIndex(s, index) {
  	IDENTIFIER_PREFIX_RE.lastIndex = index;
  	return IDENTIFIER_PREFIX_RE.exec(s)[1] ?? "";
  }
  function plainTopLevelEndPosition(message) {
  	if (message.length === 0) return null;
  	let line = 1;
  	let column = 1;
  	for (let offset = 0; offset < message.length;) {
  		const code = message.charCodeAt(offset);
  		switch (code) {
  			case 35:
  			case 39:
  			case 60:
  			case 123:
  			case 125: return null;
  		}
  		if (code === 10) {
  			line++;
  			column = 1;
  			offset++;
  		} else {
  			column++;
  			if (code >= 55296 && code <= 56319 && offset + 1 < message.length) {
  				const next = message.charCodeAt(offset + 1);
  				offset += next >= 56320 && next <= 57343 ? 2 : 1;
  			} else offset++;
  		}
  	}
  	return {
  		offset: message.length,
  		line,
  		column
  	};
  }
  var Parser = class {
  	constructor(message, options = {}) {
  		this.message = message;
  		this.position = {
  			offset: 0,
  			line: 1,
  			column: 1
  		};
  		this.ignoreTag = !!options.ignoreTag;
  		this.locale = options.locale;
  		this.requiresOtherClause = !!options.requiresOtherClause;
  		this.shouldParseSkeletons = !!options.shouldParseSkeletons;
  	}
  	parse() {
  		if (this.offset() !== 0) throw Error("parser can only be used once");
  		if (this.message.length > 0) {
  			const firstCode = this.message.charCodeAt(0);
  			if (firstCode !== 35 && firstCode !== 39 && firstCode !== 60 && firstCode !== 123 && firstCode !== 125) {
  				const plainEndPosition = plainTopLevelEndPosition(this.message);
  				if (plainEndPosition) {
  					const start = this.clonePosition();
  					this.position = plainEndPosition;
  					return {
  						val: [{
  							type: 0,
  							value: this.message,
  							location: createLocation(start, this.clonePosition())
  						}],
  						err: null
  					};
  				}
  			}
  		}
  		return this.parseMessage(0, "", false);
  	}
  	parseMessage(nestingLevel, parentArgType, expectingCloseTag) {
  		let elements = [];
  		while (!this.isEOF()) {
  			const char = this.char();
  			if (char === 123) {
  				const result = this.parseArgument(nestingLevel, expectingCloseTag);
  				if (result.err) return result;
  				elements.push(result.val);
  			} else if (char === 125 && nestingLevel > 0) break;
  			else if (char === 35 && (parentArgType === "plural" || parentArgType === "selectordinal")) {
  				const position = this.clonePosition();
  				this.bump();
  				elements.push({
  					type: 7,
  					location: createLocation(position, this.clonePosition())
  				});
  			} else if (char === 60 && !this.ignoreTag && this.peek() === 47) {
  				if (expectingCloseTag) break;
  				else return this.error(26, createLocation(this.clonePosition(), this.clonePosition()));
  			} else if (char === 60 && !this.ignoreTag && _isAlpha(this.peek() || 0)) {
  				const result = this.parseTag(nestingLevel, parentArgType);
  				if (result.err) return result;
  				elements.push(result.val);
  			} else {
  				const result = this.parseLiteral(nestingLevel, parentArgType);
  				if (result.err) return result;
  				elements.push(result.val);
  			}
  		}
  		return {
  			val: elements,
  			err: null
  		};
  	}
  	/**
  	* A tag name must start with an ASCII lower/upper case letter. The grammar is based on the
  	* [custom element name][] except that a dash is NOT always mandatory and uppercase letters
  	* are accepted:
  	*
  	* ```
  	* tag ::= "<" tagName (whitespace)* "/>" | "<" tagName (whitespace)* ">" message "</" tagName (whitespace)* ">"
  	* tagName ::= [a-z] (PENChar)*
  	* PENChar ::=
  	*     "-" | "." | [0-9] | "_" | [a-z] | [A-Z] | #xB7 | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x37D] |
  	*     [#x37F-#x1FFF] | [#x200C-#x200D] | [#x203F-#x2040] | [#x2070-#x218F] | [#x2C00-#x2FEF] |
  	*     [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
  	* ```
  	*
  	* [custom element name]: https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
  	* NOTE: We're a bit more lax here since HTML technically does not allow uppercase HTML element but we do
  	* since other tag-based engines like React allow it
  	*/
  	parseTag(nestingLevel, parentArgType) {
  		const startPosition = this.clonePosition();
  		this.bump();
  		const tagName = this.parseTagName();
  		this.bumpSpace();
  		if (this.bumpIf("/>")) return {
  			val: {
  				type: 0,
  				value: `<${tagName}/>`,
  				location: createLocation(startPosition, this.clonePosition())
  			},
  			err: null
  		};
  		else if (this.bumpIf(">")) {
  			const childrenResult = this.parseMessage(nestingLevel + 1, parentArgType, true);
  			if (childrenResult.err) return childrenResult;
  			const children = childrenResult.val;
  			const endTagStartPosition = this.clonePosition();
  			if (this.bumpIf("</")) {
  				if (this.isEOF() || !_isAlpha(this.char())) return this.error(23, createLocation(endTagStartPosition, this.clonePosition()));
  				const closingTagNameStartPosition = this.clonePosition();
  				if (tagName !== this.parseTagName()) return this.error(26, createLocation(closingTagNameStartPosition, this.clonePosition()));
  				this.bumpSpace();
  				if (!this.bumpIf(">")) return this.error(23, createLocation(endTagStartPosition, this.clonePosition()));
  				return {
  					val: {
  						type: 8,
  						value: tagName,
  						children,
  						location: createLocation(startPosition, this.clonePosition())
  					},
  					err: null
  				};
  			} else return this.error(27, createLocation(startPosition, this.clonePosition()));
  		} else return this.error(23, createLocation(startPosition, this.clonePosition()));
  	}
  	/**
  	* This method assumes that the caller has peeked ahead for the first tag character.
  	*/
  	parseTagName() {
  		const startOffset = this.offset();
  		this.bump();
  		while (!this.isEOF() && _isPotentialElementNameChar(this.char())) this.bump();
  		return this.message.slice(startOffset, this.offset());
  	}
  	parseLiteral(nestingLevel, parentArgType) {
  		const start = this.clonePosition();
  		let value = "";
  		while (true) {
  			const parseQuoteResult = this.tryParseQuote(parentArgType);
  			if (parseQuoteResult) {
  				value += parseQuoteResult;
  				continue;
  			}
  			const parseUnquotedResult = this.tryParseUnquoted(nestingLevel, parentArgType);
  			if (parseUnquotedResult) {
  				value += parseUnquotedResult;
  				continue;
  			}
  			const parseLeftAngleResult = this.tryParseLeftAngleBracket();
  			if (parseLeftAngleResult) {
  				value += parseLeftAngleResult;
  				continue;
  			}
  			break;
  		}
  		const location = createLocation(start, this.clonePosition());
  		return {
  			val: {
  				type: 0,
  				value,
  				location
  			},
  			err: null
  		};
  	}
  	tryParseLeftAngleBracket() {
  		if (!this.isEOF() && this.char() === 60 && (this.ignoreTag || !_isAlphaOrSlash(this.peek() || 0))) {
  			this.bump();
  			return "<";
  		}
  		return null;
  	}
  	/**
  	* Starting with ICU 4.8, an ASCII apostrophe only starts quoted text if it immediately precedes
  	* a character that requires quoting (that is, "only where needed"), and works the same in
  	* nested messages as on the top level of the pattern. The new behavior is otherwise compatible.
  	*/
  	tryParseQuote(parentArgType) {
  		if (this.isEOF() || this.char() !== 39) return null;
  		switch (this.peek()) {
  			case 39:
  				this.bump();
  				this.bump();
  				return "'";
  			case 123:
  			case 60:
  			case 62:
  			case 125: break;
  			case 35:
  				if (parentArgType === "plural" || parentArgType === "selectordinal") break;
  				return null;
  			default: return null;
  		}
  		this.bump();
  		const codePoints = [this.char()];
  		this.bump();
  		while (!this.isEOF()) {
  			const ch = this.char();
  			if (ch === 39) {
  				if (this.peek() === 39) {
  					codePoints.push(39);
  					this.bump();
  				} else {
  					this.bump();
  					break;
  				}
  			} else codePoints.push(ch);
  			this.bump();
  		}
  		return String.fromCodePoint(...codePoints);
  	}
  	tryParseUnquoted(nestingLevel, parentArgType) {
  		if (this.isEOF()) return null;
  		const ch = this.char();
  		if (ch === 60 || ch === 123 || ch === 35 && (parentArgType === "plural" || parentArgType === "selectordinal") || ch === 125 && nestingLevel > 0) return null;
  		else {
  			this.bump();
  			return String.fromCodePoint(ch);
  		}
  	}
  	parseArgument(nestingLevel, expectingCloseTag) {
  		const openingBracePosition = this.clonePosition();
  		this.bump();
  		this.bumpSpace();
  		if (this.isEOF()) return this.error(1, createLocation(openingBracePosition, this.clonePosition()));
  		if (this.char() === 125) {
  			this.bump();
  			return this.error(2, createLocation(openingBracePosition, this.clonePosition()));
  		}
  		let value = this.parseIdentifierIfPossible().value;
  		if (!value) return this.error(3, createLocation(openingBracePosition, this.clonePosition()));
  		this.bumpSpace();
  		if (this.isEOF()) return this.error(1, createLocation(openingBracePosition, this.clonePosition()));
  		switch (this.char()) {
  			case 125:
  				this.bump();
  				return {
  					val: {
  						type: 1,
  						value,
  						location: createLocation(openingBracePosition, this.clonePosition())
  					},
  					err: null
  				};
  			case 44:
  				this.bump();
  				this.bumpSpace();
  				if (this.isEOF()) return this.error(1, createLocation(openingBracePosition, this.clonePosition()));
  				return this.parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition);
  			default: return this.error(3, createLocation(openingBracePosition, this.clonePosition()));
  		}
  	}
  	/**
  	* Advance the parser until the end of the identifier, if it is currently on
  	* an identifier character. Return an empty string otherwise.
  	*/
  	parseIdentifierIfPossible() {
  		const startingPosition = this.clonePosition();
  		const startOffset = this.offset();
  		const value = matchIdentifierAtIndex(this.message, startOffset);
  		const endOffset = startOffset + value.length;
  		this.bumpTo(endOffset);
  		return {
  			value,
  			location: createLocation(startingPosition, this.clonePosition())
  		};
  	}
  	parseArgumentOptions(nestingLevel, expectingCloseTag, value, openingBracePosition) {
  		let typeStartPosition = this.clonePosition();
  		let argType = this.parseIdentifierIfPossible().value;
  		let typeEndPosition = this.clonePosition();
  		switch (argType) {
  			case "": return this.error(4, createLocation(typeStartPosition, typeEndPosition));
  			case "number":
  			case "date":
  			case "time": {
  				this.bumpSpace();
  				let styleAndLocation = null;
  				if (this.bumpIf(",")) {
  					this.bumpSpace();
  					const styleStartPosition = this.clonePosition();
  					const result = this.parseSimpleArgStyleIfPossible();
  					if (result.err) return result;
  					const style = trimEnd(result.val);
  					if (style.length === 0) return this.error(6, createLocation(this.clonePosition(), this.clonePosition()));
  					styleAndLocation = {
  						style,
  						styleLocation: createLocation(styleStartPosition, this.clonePosition())
  					};
  				}
  				const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
  				if (argCloseResult.err) return argCloseResult;
  				const location = createLocation(openingBracePosition, this.clonePosition());
  				if (styleAndLocation && styleAndLocation.style.startsWith("::")) {
  					let skeleton = trimStart(styleAndLocation.style.slice(2));
  					if (argType === "number") {
  						const result = this.parseNumberSkeletonFromString(skeleton, styleAndLocation.styleLocation);
  						if (result.err) return result;
  						return {
  							val: {
  								type: 2,
  								value,
  								location,
  								style: result.val
  							},
  							err: null
  						};
  					} else {
  						if (skeleton.length === 0) return this.error(10, location);
  						let dateTimePattern = skeleton;
  						if (this.locale) dateTimePattern = getBestPattern(skeleton, this.locale);
  						const style = {
  							type: 1,
  							pattern: dateTimePattern,
  							location: styleAndLocation.styleLocation,
  							parsedOptions: this.shouldParseSkeletons ? parseDateTimeSkeleton(dateTimePattern) : {}
  						};
  						return {
  							val: {
  								type: argType === "date" ? 3 : 4,
  								value,
  								location,
  								style
  							},
  							err: null
  						};
  					}
  				}
  				return {
  					val: {
  						type: argType === "number" ? 2 : argType === "date" ? 3 : 4,
  						value,
  						location,
  						style: styleAndLocation?.style ?? null
  					},
  					err: null
  				};
  			}
  			case "plural":
  			case "selectordinal":
  			case "select": {
  				const typeEndPosition = this.clonePosition();
  				this.bumpSpace();
  				if (!this.bumpIf(",")) return this.error(12, createLocation(typeEndPosition, { ...typeEndPosition }));
  				this.bumpSpace();
  				let identifierAndLocation = this.parseIdentifierIfPossible();
  				let pluralOffset = 0;
  				if (argType !== "select" && identifierAndLocation.value === "offset") {
  					if (!this.bumpIf(":")) return this.error(13, createLocation(this.clonePosition(), this.clonePosition()));
  					this.bumpSpace();
  					const result = this.tryParseDecimalInteger(13, 14);
  					if (result.err) return result;
  					this.bumpSpace();
  					identifierAndLocation = this.parseIdentifierIfPossible();
  					pluralOffset = result.val;
  				}
  				const optionsResult = this.tryParsePluralOrSelectOptions(nestingLevel, argType, expectingCloseTag, identifierAndLocation);
  				if (optionsResult.err) return optionsResult;
  				const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
  				if (argCloseResult.err) return argCloseResult;
  				const location = createLocation(openingBracePosition, this.clonePosition());
  				if (argType === "select") return {
  					val: {
  						type: 5,
  						value,
  						options: fromEntries(optionsResult.val),
  						location
  					},
  					err: null
  				};
  				else return {
  					val: {
  						type: 6,
  						value,
  						options: fromEntries(optionsResult.val),
  						offset: pluralOffset,
  						pluralType: argType === "plural" ? "cardinal" : "ordinal",
  						location
  					},
  					err: null
  				};
  			}
  			default: return this.error(5, createLocation(typeStartPosition, typeEndPosition));
  		}
  	}
  	tryParseArgumentClose(openingBracePosition) {
  		if (this.isEOF() || this.char() !== 125) return this.error(1, createLocation(openingBracePosition, this.clonePosition()));
  		this.bump();
  		return {
  			val: true,
  			err: null
  		};
  	}
  	/**
  	* See: https://github.com/unicode-org/icu/blob/af7ed1f6d2298013dc303628438ec4abe1f16479/icu4c/source/common/messagepattern.cpp#L659
  	*/
  	parseSimpleArgStyleIfPossible() {
  		let nestedBraces = 0;
  		const startPosition = this.clonePosition();
  		while (!this.isEOF()) switch (this.char()) {
  			case 39: {
  				this.bump();
  				let apostrophePosition = this.clonePosition();
  				if (!this.bumpUntil("'")) return this.error(11, createLocation(apostrophePosition, this.clonePosition()));
  				this.bump();
  				break;
  			}
  			case 123:
  				nestedBraces += 1;
  				this.bump();
  				break;
  			case 125:
  				if (nestedBraces > 0) nestedBraces -= 1;
  				else return {
  					val: this.message.slice(startPosition.offset, this.offset()),
  					err: null
  				};
  				break;
  			default: this.bump();
  		}
  		return {
  			val: this.message.slice(startPosition.offset, this.offset()),
  			err: null
  		};
  	}
  	parseNumberSkeletonFromString(skeleton, location) {
  		let tokens = [];
  		try {
  			tokens = parseNumberSkeletonFromString(skeleton);
  		} catch {
  			return this.error(7, location);
  		}
  		return {
  			val: {
  				type: 0,
  				tokens,
  				location,
  				parsedOptions: this.shouldParseSkeletons ? parseNumberSkeleton(tokens) : {}
  			},
  			err: null
  		};
  	}
  	/**
  	* @param nesting_level The current nesting level of messages.
  	*     This can be positive when parsing message fragment in select or plural argument options.
  	* @param parent_arg_type The parent argument's type.
  	* @param parsed_first_identifier If provided, this is the first identifier-like selector of
  	*     the argument. It is a by-product of a previous parsing attempt.
  	* @param expecting_close_tag If true, this message is directly or indirectly nested inside
  	*     between a pair of opening and closing tags. The nested message will not parse beyond
  	*     the closing tag boundary.
  	*/
  	tryParsePluralOrSelectOptions(nestingLevel, parentArgType, expectCloseTag, parsedFirstIdentifier) {
  		let hasOtherClause = false;
  		const options = [];
  		const parsedSelectors = /* @__PURE__ */ new Set();
  		let { value: selector, location: selectorLocation } = parsedFirstIdentifier;
  		while (true) {
  			if (selector.length === 0) {
  				const startPosition = this.clonePosition();
  				if (parentArgType !== "select" && this.bumpIf("=")) {
  					const result = this.tryParseDecimalInteger(16, 19);
  					if (result.err) return result;
  					selectorLocation = createLocation(startPosition, this.clonePosition());
  					selector = this.message.slice(startPosition.offset, this.offset());
  				} else break;
  			}
  			if (parsedSelectors.has(selector)) return this.error(parentArgType === "select" ? 21 : 20, selectorLocation);
  			if (selector === "other") hasOtherClause = true;
  			this.bumpSpace();
  			const openingBracePosition = this.clonePosition();
  			if (!this.bumpIf("{")) return this.error(parentArgType === "select" ? 17 : 18, createLocation(this.clonePosition(), this.clonePosition()));
  			const fragmentResult = this.parseMessage(nestingLevel + 1, parentArgType, expectCloseTag);
  			if (fragmentResult.err) return fragmentResult;
  			const argCloseResult = this.tryParseArgumentClose(openingBracePosition);
  			if (argCloseResult.err) return argCloseResult;
  			options.push([selector, {
  				value: fragmentResult.val,
  				location: createLocation(openingBracePosition, this.clonePosition())
  			}]);
  			parsedSelectors.add(selector);
  			this.bumpSpace();
  			({value: selector, location: selectorLocation} = this.parseIdentifierIfPossible());
  		}
  		if (options.length === 0) return this.error(parentArgType === "select" ? 15 : 16, createLocation(this.clonePosition(), this.clonePosition()));
  		if (this.requiresOtherClause && !hasOtherClause) return this.error(22, createLocation(this.clonePosition(), this.clonePosition()));
  		return {
  			val: options,
  			err: null
  		};
  	}
  	tryParseDecimalInteger(expectNumberError, invalidNumberError) {
  		let sign = 1;
  		const startingPosition = this.clonePosition();
  		if (this.bumpIf("+")) ; else if (this.bumpIf("-")) sign = -1;
  		let hasDigits = false;
  		let decimal = 0;
  		while (!this.isEOF()) {
  			const ch = this.char();
  			if (ch >= 48 && ch <= 57) {
  				hasDigits = true;
  				decimal = decimal * 10 + (ch - 48);
  				this.bump();
  			} else break;
  		}
  		const location = createLocation(startingPosition, this.clonePosition());
  		if (!hasDigits) return this.error(expectNumberError, location);
  		decimal *= sign;
  		if (!Number.isSafeInteger(decimal)) return this.error(invalidNumberError, location);
  		return {
  			val: decimal,
  			err: null
  		};
  	}
  	offset() {
  		return this.position.offset;
  	}
  	isEOF() {
  		return this.offset() === this.message.length;
  	}
  	clonePosition() {
  		return {
  			offset: this.position.offset,
  			line: this.position.line,
  			column: this.position.column
  		};
  	}
  	/**
  	* Return the code point at the current position of the parser.
  	* Throws if the index is out of bound.
  	*/
  	char() {
  		const offset = this.position.offset;
  		if (offset >= this.message.length) throw Error("out of bound");
  		const code = this.message.codePointAt(offset);
  		if (code === void 0) throw Error(`Offset ${offset} is at invalid UTF-16 code unit boundary`);
  		return code;
  	}
  	error(kind, location) {
  		return {
  			val: null,
  			err: {
  				kind,
  				message: this.message,
  				location
  			}
  		};
  	}
  	/** Bump the parser to the next UTF-16 code unit. */
  	bump() {
  		if (this.isEOF()) return;
  		const code = this.char();
  		if (code === 10) {
  			this.position.line += 1;
  			this.position.column = 1;
  			this.position.offset += 1;
  		} else {
  			this.position.column += 1;
  			this.position.offset += code < 65536 ? 1 : 2;
  		}
  	}
  	/**
  	* If the substring starting at the current position of the parser has
  	* the given prefix, then bump the parser to the character immediately
  	* following the prefix and return true. Otherwise, don't bump the parser
  	* and return false.
  	*/
  	bumpIf(prefix) {
  		const offset = this.offset();
  		if (this.message.slice(offset, offset + prefix.length) === prefix) {
  			for (let i = 0; i < prefix.length; i++) this.bump();
  			return true;
  		}
  		return false;
  	}
  	/**
  	* Bump the parser until the pattern character is found and return `true`.
  	* Otherwise bump to the end of the file and return `false`.
  	*/
  	bumpUntil(pattern) {
  		const currentOffset = this.offset();
  		const index = this.message.indexOf(pattern, currentOffset);
  		if (index >= 0) {
  			this.bumpTo(index);
  			return true;
  		} else {
  			this.bumpTo(this.message.length);
  			return false;
  		}
  	}
  	/**
  	* Bump the parser to the target offset.
  	* If target offset is beyond the end of the input, bump the parser to the end of the input.
  	*/
  	bumpTo(targetOffset) {
  		if (this.offset() > targetOffset) throw Error(`targetOffset ${targetOffset} must be greater than or equal to the current offset ${this.offset()}`);
  		targetOffset = Math.min(targetOffset, this.message.length);
  		while (true) {
  			const offset = this.offset();
  			if (offset === targetOffset) break;
  			if (offset > targetOffset) throw Error(`targetOffset ${targetOffset} is at invalid UTF-16 code unit boundary`);
  			this.bump();
  			if (this.isEOF()) break;
  		}
  	}
  	/** advance the parser through all whitespace to the next non-whitespace code unit. */
  	bumpSpace() {
  		while (!this.isEOF() && _isWhiteSpace(this.char())) this.bump();
  	}
  	/**
  	* Peek at the *next* Unicode codepoint in the input without advancing the parser.
  	* If the input has been exhausted, then this returns null.
  	*/
  	peek() {
  		if (this.isEOF()) return null;
  		const code = this.char();
  		const offset = this.offset();
  		return this.message.charCodeAt(offset + (code >= 65536 ? 2 : 1)) ?? null;
  	}
  };
  /**
  * This check if codepoint is alphabet (lower & uppercase)
  * @param codepoint
  * @returns
  */
  function _isAlpha(codepoint) {
  	return codepoint >= 97 && codepoint <= 122 || codepoint >= 65 && codepoint <= 90;
  }
  function _isAlphaOrSlash(codepoint) {
  	return _isAlpha(codepoint) || codepoint === 47;
  }
  /** See `parseTag` function docs. */
  function _isPotentialElementNameChar(c) {
  	return c === 45 || c === 46 || c >= 48 && c <= 57 || c === 95 || c >= 97 && c <= 122 || c >= 65 && c <= 90 || c == 183 || c >= 192 && c <= 214 || c >= 216 && c <= 246 || c >= 248 && c <= 893 || c >= 895 && c <= 8191 || c >= 8204 && c <= 8205 || c >= 8255 && c <= 8256 || c >= 8304 && c <= 8591 || c >= 11264 && c <= 12271 || c >= 12289 && c <= 55295 || c >= 63744 && c <= 64975 || c >= 65008 && c <= 65533 || c >= 65536 && c <= 983039;
  }
  /**
  * Code point equivalent of regex `\p{White_Space}`.
  * From: https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt
  */
  function _isWhiteSpace(c) {
  	return c >= 9 && c <= 13 || c === 32 || c === 133 || c >= 8206 && c <= 8207 || c === 8232 || c === 8233;
  }
  //#endregion
  //#region packages/icu-messageformat-parser/index.ts
  function pruneLocation(els) {
  	els.forEach((el) => {
  		delete el.location;
  		if (isSelectElement(el) || isPluralElement(el)) for (const k in el.options) {
  			delete el.options[k].location;
  			pruneLocation(el.options[k].value);
  		}
  		else if (isNumberElement(el) && isNumberSkeleton(el.style)) delete el.style.location;
  		else if ((isDateElement(el) || isTimeElement(el)) && isDateTimeSkeleton(el.style)) delete el.style.location;
  		else if (isTagElement(el)) pruneLocation(el.children);
  	});
  }
  function parse(message, opts = {}) {
  	opts = {
  		shouldParseSkeletons: true,
  		requiresOtherClause: true,
  		...opts
  	};
  	const result = new Parser(message, opts).parse();
  	if (result.err) {
  		const error = SyntaxError(ErrorKind[result.err.kind]);
  		error.location = result.err.location;
  		error.originalMessage = result.err.message;
  		throw error;
  	}
  	if (!opts?.captureLocation) pruneLocation(result.val);
  	return result.val;
  }

  var FormatError = class extends Error {
  	constructor(msg, code, originalMessage) {
  		super(msg);
  		this.code = code;
  		this.originalMessage = originalMessage;
  	}
  	toString() {
  		return `[formatjs Error: ${this.code}] ${this.message}`;
  	}
  };
  var InvalidValueError = class extends FormatError {
  	constructor(variableId, value, options, originalMessage) {
  		super(`Invalid values for "${variableId}": "${value}". Options are "${Object.keys(options).join("\", \"")}"`, "INVALID_VALUE", originalMessage);
  	}
  };
  var InvalidValueTypeError = class extends FormatError {
  	constructor(value, type, originalMessage) {
  		super(`Value for "${value}" must be of type ${type}`, "INVALID_VALUE", originalMessage);
  	}
  };
  var MissingValueError = class extends FormatError {
  	constructor(variableId, originalMessage) {
  		super(`The intl string context variable "${variableId}" was not provided to the string "${originalMessage}"`, "MISSING_VALUE", originalMessage);
  	}
  };
  function mergeLiteral(parts) {
  	if (parts.length < 2) return parts;
  	return parts.reduce((all, part) => {
  		const lastPart = all[all.length - 1];
  		if (!lastPart || lastPart.type !== 0 || part.type !== 0) all.push(part);
  		else lastPart.value += part.value;
  		return all;
  	}, []);
  }
  function isFormatXMLElementFn(el) {
  	return typeof el === "function";
  }
  function formatToParts(els, locales, formatters, formats, values, currentPluralValue, originalMessage) {
  	if (els.length === 1 && isLiteralElement(els[0])) return [{
  		type: 0,
  		value: els[0].value
  	}];
  	const result = [];
  	for (const el of els) {
  		if (isLiteralElement(el)) {
  			result.push({
  				type: 0,
  				value: el.value
  			});
  			continue;
  		}
  		if (isPoundElement(el)) {
  			if (typeof currentPluralValue === "number") result.push({
  				type: 0,
  				value: formatters.getNumberFormat(locales).format(currentPluralValue)
  			});
  			continue;
  		}
  		const { value: varName } = el;
  		if (!(values && varName in values)) throw new MissingValueError(varName, originalMessage);
  		let value = values[varName];
  		if (isArgumentElement(el)) {
  			if (!value || typeof value === "string" || typeof value === "number" || typeof value === "bigint") value = typeof value === "string" || typeof value === "number" || typeof value === "bigint" ? String(value) : "";
  			result.push({
  				type: typeof value === "string" ? 0 : 1,
  				value
  			});
  			continue;
  		}
  		if (isDateElement(el)) {
  			const style = typeof el.style === "string" ? formats.date[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : void 0;
  			result.push({
  				type: 0,
  				value: formatters.getDateTimeFormat(locales, style).format(value)
  			});
  			continue;
  		}
  		if (isTimeElement(el)) {
  			const style = typeof el.style === "string" ? formats.time[el.style] : isDateTimeSkeleton(el.style) ? el.style.parsedOptions : formats.time.medium;
  			result.push({
  				type: 0,
  				value: formatters.getDateTimeFormat(locales, style).format(value)
  			});
  			continue;
  		}
  		if (isNumberElement(el)) {
  			const style = typeof el.style === "string" ? formats.number[el.style] : isNumberSkeleton(el.style) ? el.style.parsedOptions : void 0;
  			if (style && style.scale) {
  				const scale = style.scale || 1;
  				if (typeof value === "bigint") {
  					if (!Number.isInteger(scale)) throw new TypeError(`Cannot apply fractional scale ${scale} to bigint value. Scale must be an integer when formatting bigint.`);
  					value = value * BigInt(scale);
  				} else value = value * scale;
  			}
  			result.push({
  				type: 0,
  				value: formatters.getNumberFormat(locales, style).format(value)
  			});
  			continue;
  		}
  		if (isTagElement(el)) {
  			const { children, value } = el;
  			const formatFn = values[value];
  			if (!isFormatXMLElementFn(formatFn)) throw new InvalidValueTypeError(value, "function", originalMessage);
  			let chunks = formatFn(formatToParts(children, locales, formatters, formats, values, currentPluralValue).map((p) => p.value));
  			if (!Array.isArray(chunks)) chunks = [chunks];
  			result.push(...chunks.map((c) => {
  				return {
  					type: typeof c === "string" ? 0 : 1,
  					value: c
  				};
  			}));
  		}
  		if (isSelectElement(el)) {
  			const key = value;
  			const opt = (Object.prototype.hasOwnProperty.call(el.options, key) ? el.options[key] : void 0) || el.options.other;
  			if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
  			result.push(...formatToParts(opt.value, locales, formatters, formats, values));
  			continue;
  		}
  		if (isPluralElement(el)) {
  			const exactKey = `=${value}`;
  			let opt = Object.prototype.hasOwnProperty.call(el.options, exactKey) ? el.options[exactKey] : void 0;
  			if (!opt) {
  				if (!Intl.PluralRules) throw new FormatError(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, "MISSING_INTL_API", originalMessage);
  				const numericValue = typeof value === "bigint" ? Number(value) : value;
  				const rule = formatters.getPluralRules(locales, { type: el.pluralType }).select(numericValue - (el.offset || 0));
  				opt = (Object.prototype.hasOwnProperty.call(el.options, rule) ? el.options[rule] : void 0) || el.options.other;
  			}
  			if (!opt) throw new InvalidValueError(el.value, value, Object.keys(el.options), originalMessage);
  			const numericValue = typeof value === "bigint" ? Number(value) : value;
  			result.push(...formatToParts(opt.value, locales, formatters, formats, values, numericValue - (el.offset || 0)));
  			continue;
  		}
  	}
  	return mergeLiteral(result);
  }
  //#endregion
  //#region packages/intl-messageformat/core.ts
  function mergeConfig(c1, c2) {
  	if (!c2) return c1;
  	return {
  		...c1,
  		...c2,
  		...Object.keys(c1).reduce((all, k) => {
  			all[k] = {
  				...c1[k],
  				...c2[k]
  			};
  			return all;
  		}, {})
  	};
  }
  function mergeConfigs(defaultConfig, configs) {
  	if (!configs) return defaultConfig;
  	return Object.keys(defaultConfig).reduce((all, k) => {
  		all[k] = mergeConfig(defaultConfig[k], configs[k]);
  		return all;
  	}, { ...defaultConfig });
  }
  function createFastMemoizeCache(store) {
  	return { create() {
  		return {
  			get(key) {
  				return store[key];
  			},
  			set(key, value) {
  				store[key] = value;
  			}
  		};
  	} };
  }
  function createDefaultFormatters(cache = {
  	number: {},
  	dateTime: {},
  	pluralRules: {}
  }) {
  	return {
  		getNumberFormat: memoize((...args) => new Intl.NumberFormat(...args), {
  			cache: createFastMemoizeCache(cache.number),
  			strategy: strategies.variadic
  		}),
  		getDateTimeFormat: memoize((...args) => new Intl.DateTimeFormat(...args), {
  			cache: createFastMemoizeCache(cache.dateTime),
  			strategy: strategies.variadic
  		}),
  		getPluralRules: memoize((...args) => new Intl.PluralRules(...args), {
  			cache: createFastMemoizeCache(cache.pluralRules),
  			strategy: strategies.variadic
  		})
  	};
  }
  var IntlMessageFormat = class IntlMessageFormat {
  	constructor(message, locales = IntlMessageFormat.defaultLocale, overrideFormats, opts) {
  		this.formatterCache = {
  			number: {},
  			dateTime: {},
  			pluralRules: {}
  		};
  		this.format = ((values) => {
  			const parts = this.formatToParts(values);
  			if (parts.length === 1) return parts[0].value;
  			const result = parts.reduce((all, part) => {
  				if (!all.length || part.type !== 0 || typeof all[all.length - 1] !== "string") all.push(part.value);
  				else all[all.length - 1] += part.value;
  				return all;
  			}, []);
  			if (result.length <= 1) return result[0] || "";
  			return result;
  		});
  		this.formatToParts = ((values) => formatToParts(this.ast, this.locales, this.formatters, this.formats, values, void 0, this.message));
  		this.resolvedOptions = () => ({ locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0] });
  		this.getAst = () => this.ast;
  		this.locales = locales;
  		this.resolvedLocale = IntlMessageFormat.resolveLocale(locales);
  		if (typeof message === "string") {
  			this.message = message;
  			if (!IntlMessageFormat.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
  			const { ...parseOpts } = opts || {};
  			this.ast = IntlMessageFormat.__parse(message, {
  				...parseOpts,
  				locale: this.resolvedLocale
  			});
  		} else this.ast = message;
  		if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
  		this.formats = mergeConfigs(IntlMessageFormat.formats, overrideFormats);
  		this.formatters = opts && opts.formatters || createDefaultFormatters(this.formatterCache);
  	}
  	static {
  		this.memoizedDefaultLocale = null;
  	}
  	static get defaultLocale() {
  		if (!IntlMessageFormat.memoizedDefaultLocale) IntlMessageFormat.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale;
  		return IntlMessageFormat.memoizedDefaultLocale;
  	}
  	static {
  		this.resolveLocale = (locales) => {
  			if (typeof Intl.Locale === "undefined") return;
  			const supportedLocales = Intl.NumberFormat.supportedLocalesOf(locales);
  			if (supportedLocales.length > 0) return new Intl.Locale(supportedLocales[0]);
  			return new Intl.Locale(typeof locales === "string" ? locales : locales[0]);
  		};
  	}
  	static {
  		this.__parse = parse;
  	}
  	static {
  		this.formats = {
  			number: {
  				integer: { maximumFractionDigits: 0 },
  				currency: { style: "currency" },
  				percent: { style: "percent" }
  			},
  			date: {
  				short: {
  					month: "numeric",
  					day: "numeric",
  					year: "2-digit"
  				},
  				medium: {
  					month: "short",
  					day: "numeric",
  					year: "numeric"
  				},
  				long: {
  					month: "long",
  					day: "numeric",
  					year: "numeric"
  				},
  				full: {
  					weekday: "long",
  					month: "long",
  					day: "numeric",
  					year: "numeric"
  				}
  			},
  			time: {
  				short: {
  					hour: "numeric",
  					minute: "numeric"
  				},
  				medium: {
  					hour: "numeric",
  					minute: "numeric",
  					second: "numeric"
  				},
  				long: {
  					hour: "numeric",
  					minute: "numeric",
  					second: "numeric",
  					timeZoneName: "short"
  				},
  				full: {
  					hour: "numeric",
  					minute: "numeric",
  					second: "numeric",
  					timeZoneName: "short"
  				}
  			}
  		};
  	}
  };
  //#endregion
  //#region packages/intl-messageformat/index.ts
  var intl_messageformat_default = IntlMessageFormat;

  function getDefaults() {
    return {
      memoize: true,
      memoizeFallback: false,
      bindI18n: '',
      bindI18nStore: '',
      parseErrorHandler: function parseErrorHandler(err, key, res, options) {
        return res;
      },
      parseLngForICU: function parseLngForICU(lng) {
        return lng;
      },
      escapeVariables: false
    };
  }
  var ICU = /*#__PURE__*/function () {
    function ICU(options) {
      _classCallCheck(this, ICU);
      this.type = 'i18nFormat';
      this.mem = {};
      this.init(null, options);
    }
    _createClass(ICU, [{
      key: "init",
      value: function init(i18next, options) {
        var _this = this;
        var i18nextOptions = i18next && i18next.options && i18next.options.i18nFormat || {};
        this.options = defaults(i18nextOptions, options, this.options || {}, getDefaults());
        this.formats = this.options.formats;
        if (i18next) {
          var _this$options = this.options,
            bindI18n = _this$options.bindI18n,
            bindI18nStore = _this$options.bindI18nStore,
            memoize = _this$options.memoize;
          i18next.IntlMessageFormat = intl_messageformat_default;
          i18next.ICU = this;
          if (memoize) {
            if (bindI18n) {
              i18next.on(bindI18n, function () {
                return _this.clearCache();
              });
            }
            if (bindI18nStore) {
              i18next.store.on(bindI18nStore, function () {
                return _this.clearCache();
              });
            }
          }
        }
      }
    }, {
      key: "addUserDefinedFormats",
      value: function addUserDefinedFormats(formats) {
        this.formats = this.formats ? _objectSpread2(_objectSpread2({}, this.formats), formats) : formats;
      }
    }, {
      key: "parse",
      value: function parse(res, options, lng, ns, key, info) {
        var hadSuccessfulLookup = info && info.resolved && info.resolved.res;
        var memKey = this.options.memoize && "".concat(lng, ".").concat(ns, ".").concat(key.replace(/\./g, '###'));
        var fc;
        if (this.options.memoize) {
          fc = getPath(this.mem, memKey);
        }
        try {
          if (!fc) {
            var transformedLng = this.options.parseLngForICU(lng);
            // without ignoreTag, react-i18next <Trans> translations with <0></0> placeholders
            // will fail to parse, as IntlMessageFormat expects them to be defined in the
            // options passed to fc.format() as { 0: (children) => string }
            // but the replacement of placeholders is done in react-i18next
            fc = new intl_messageformat_default(res, transformedLng, this.formats, {
              ignoreTag: true
            });
            if (this.options.memoize && (this.options.memoizeFallback || !info || hadSuccessfulLookup)) setPath(this.mem, memKey, fc);
          }
          return fc.format(this.escapeVariableValues(options));
        } catch (err) {
          return this.options.parseErrorHandler(err, key, res, options);
        }
      }
    }, {
      key: "addLookupKeys",
      value: function addLookupKeys(finalKeys, _key, _code, _ns, _options) {
        // no additional keys needed for select or plural
        // so there is no need to add keys to that finalKeys array
        return finalKeys;
      }
    }, {
      key: "clearCache",
      value: function clearCache() {
        this.mem = {};
      }
    }, {
      key: "escapeVariableValues",
      value: function escapeVariableValues(options) {
        if (!this.options.escapeVariables || !options || _typeof(options) !== 'object') {
          return options;
        }
        var escaped = {};
        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (typeof value === 'string') {
            // Escape HTML special characters that could interfere with ICU parsing
            escaped[key] = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
          } else {
            escaped[key] = value;
          }
        }
        return escaped;
      }
    }]);
    return ICU;
  }();
  ICU.type = 'i18nFormat';

  return ICU;

}));
