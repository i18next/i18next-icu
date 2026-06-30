// Keys that must never be traversed when walking a string/array path into an
// object, otherwise a crafted path such as `__proto__.polluted` walks straight
// into Object.prototype. Mirrors the guard shipped to the same setPath/pushPath
// walker in i18next-fs-backend 2.6.6 and i18next-http-middleware 3.9.7.
const UNSAFE_KEYS = ['__proto__', 'constructor', 'prototype'];

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return (key && key.indexOf('###') > -1) ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  const stack = (typeof path !== 'string') ? [].concat(path) : path.split('.');
  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};

    const key = cleanKey(stack.shift());
    if (UNSAFE_KEYS.indexOf(key) > -1) return {};
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  const k = cleanKey(stack.shift());
  if (UNSAFE_KEYS.indexOf(k) > -1) return {};
  return { obj: object, k };
}

export function setPath(object, path, newValue) {
  const { obj, k } = getLastOfPath(object, path, Object);
  if (obj === undefined) return; // unsafe path, drop silently

  obj[k] = newValue;
}

export function pushPath(object, path, newValue, concat) {
  const { obj, k } = getLastOfPath(object, path, Object);
  if (obj === undefined) return; // unsafe path, drop silently

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}

export function getPath(object, path) {
  const { obj, k } = getLastOfPath(object, path);

  if (!obj) return undefined;
  return obj[k];
}



let arr = [];
let each = arr.forEach;
let slice = arr.slice;

export function defaults(obj) {
  each.call(slice.call(arguments, 1), function(source) {
    if (source) {
      // iterate own keys only (skip inherited/polluted props) and refuse to
      // copy prototype keys, so a polluted source can't seed Object.prototype.
      for (const prop of Object.keys(source)) {
        if (UNSAFE_KEYS.indexOf(prop) > -1) continue;
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

export function extend(obj) {
  each.call(slice.call(arguments, 1), function(source) {
    if (source) {
      for (const prop of Object.keys(source)) {
        if (UNSAFE_KEYS.indexOf(prop) > -1) continue;
        obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
