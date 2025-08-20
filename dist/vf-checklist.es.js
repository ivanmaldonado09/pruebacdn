import { createElementBlock as g, openBlock as E, createElementVNode as m, withDirectives as V, toDisplayString as S, Fragment as U, renderList as B, vModelSelect as bt, createTextVNode as be, vModelText as J, resolveComponent as oe, createCommentVNode as q, createBlock as Ee, createVNode as Et } from "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js";
function $e(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: gt } = Object.prototype, { getPrototypeOf: Te } = Object, { iterator: le, toStringTag: He } = Symbol, ce = /* @__PURE__ */ ((e) => (t) => {
  const n = gt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), k = (e) => (e = e.toLowerCase(), (t) => ce(t) === e), ue = (e) => (t) => typeof t === e, { isArray: $ } = Array, G = ue("undefined");
function K(e) {
  return e !== null && !G(e) && e.constructor !== null && !G(e.constructor) && F(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ze = k("ArrayBuffer");
function Rt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ze(e.buffer), t;
}
const St = ue("string"), F = ue("function"), Je = ue("number"), Q = (e) => e !== null && typeof e == "object", _t = (e) => e === !0 || e === !1, te = (e) => {
  if (ce(e) !== "object")
    return !1;
  const t = Te(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(He in e) && !(le in e);
}, At = (e) => {
  if (!Q(e) || K(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Ot = k("Date"), Tt = k("File"), Ct = k("Blob"), Lt = k("FileList"), Ft = (e) => Q(e) && F(e.pipe), xt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || F(e.append) && ((t = ce(e)) === "formdata" || // detect form-data instance
  t === "object" && F(e.toString) && e.toString() === "[object FormData]"));
}, kt = k("URLSearchParams"), [Nt, vt, Pt, Ut] = ["ReadableStream", "Request", "Response", "Headers"].map(k), Bt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function X(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), $(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (K(e))
      return;
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let c;
    for (r = 0; r < o; r++)
      c = i[r], t.call(null, e[c], c, e);
  }
}
function Ge(e, t) {
  if (K(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const I = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, We = (e) => !G(e) && e !== I;
function ge() {
  const { caseless: e } = We(this) && this || {}, t = {}, n = (r, s) => {
    const i = e && Ge(t, s) || s;
    te(t[i]) && te(r) ? t[i] = ge(t[i], r) : te(r) ? t[i] = ge({}, r) : $(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && X(arguments[r], n);
  return t;
}
const Dt = (e, t, n, { allOwnKeys: r } = {}) => (X(t, (s, i) => {
  n && F(s) ? e[i] = $e(s, n) : e[i] = s;
}, { allOwnKeys: r }), e), qt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), It = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Mt = (e, t, n, r) => {
  let s, i, o;
  const c = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!r || r(o, e, t)) && !c[o] && (t[o] = e[o], c[o] = !0);
    e = n !== !1 && Te(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, jt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Vt = (e) => {
  if (!e) return null;
  if ($(e)) return e;
  let t = e.length;
  if (!Je(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, $t = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Te(Uint8Array)), Ht = (e, t) => {
  const r = (e && e[le]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, zt = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Jt = k("HTMLFormElement"), Gt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), xe = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Wt = k("RegExp"), Ke = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  X(n, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (r[i] = o || s);
  }), Object.defineProperties(e, r);
}, Kt = (e) => {
  Ke(e, (t, n) => {
    if (F(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (F(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Qt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((i) => {
      n[i] = !0;
    });
  };
  return $(e) ? r(e) : r(String(e).split(t)), n;
}, Xt = () => {
}, Zt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Yt(e) {
  return !!(e && F(e.append) && e[He] === "FormData" && e[le]);
}
const en = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Q(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (K(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const i = $(r) ? [] : {};
        return X(r, (o, c) => {
          const d = n(o, s + 1);
          !G(d) && (i[c] = d);
        }), t[s] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, tn = k("AsyncFunction"), nn = (e) => e && (Q(e) || F(e)) && F(e.then) && F(e.catch), Qe = ((e, t) => e ? setImmediate : t ? ((n, r) => (I.addEventListener("message", ({ source: s, data: i }) => {
  s === I && i === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), I.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  F(I.postMessage)
), rn = typeof queueMicrotask < "u" ? queueMicrotask.bind(I) : typeof process < "u" && process.nextTick || Qe, sn = (e) => e != null && F(e[le]), a = {
  isArray: $,
  isArrayBuffer: ze,
  isBuffer: K,
  isFormData: xt,
  isArrayBufferView: Rt,
  isString: St,
  isNumber: Je,
  isBoolean: _t,
  isObject: Q,
  isPlainObject: te,
  isEmptyObject: At,
  isReadableStream: Nt,
  isRequest: vt,
  isResponse: Pt,
  isHeaders: Ut,
  isUndefined: G,
  isDate: Ot,
  isFile: Tt,
  isBlob: Ct,
  isRegExp: Wt,
  isFunction: F,
  isStream: Ft,
  isURLSearchParams: kt,
  isTypedArray: $t,
  isFileList: Lt,
  forEach: X,
  merge: ge,
  extend: Dt,
  trim: Bt,
  stripBOM: qt,
  inherits: It,
  toFlatObject: Mt,
  kindOf: ce,
  kindOfTest: k,
  endsWith: jt,
  toArray: Vt,
  forEachEntry: Ht,
  matchAll: zt,
  isHTMLForm: Jt,
  hasOwnProperty: xe,
  hasOwnProp: xe,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ke,
  freezeMethods: Kt,
  toObjectSet: Qt,
  toCamelCase: Gt,
  noop: Xt,
  toFiniteNumber: Zt,
  findKey: Ge,
  global: I,
  isContextDefined: We,
  isSpecCompliantForm: Yt,
  toJSONObject: en,
  isAsyncFn: tn,
  isThenable: nn,
  setImmediate: Qe,
  asap: rn,
  isIterable: sn
};
function y(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(y, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Xe = y.prototype, Ze = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Ze[e] = { value: e };
});
Object.defineProperties(y, Ze);
Object.defineProperty(Xe, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, i) => {
  const o = Object.create(Xe);
  return a.toFlatObject(e, o, function(d) {
    return d !== Error.prototype;
  }, (c) => c !== "isAxiosError"), y.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const on = null;
function Re(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ye(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ke(e, t, n) {
  return e ? e.concat(t).map(function(s, i) {
    return s = Ye(s), !n && i ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function an(e) {
  return a.isArray(e) && !e.some(Re);
}
const ln = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function de(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(w, p) {
    return !a.isUndefined(p[w]);
  });
  const r = n.metaTokens, s = n.visitor || u, i = n.dots, o = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(h) {
    if (h === null) return "";
    if (a.isDate(h))
      return h.toISOString();
    if (a.isBoolean(h))
      return h.toString();
    if (!d && a.isBlob(h))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, w, p) {
    let R = h;
    if (h && !p && typeof h == "object") {
      if (a.endsWith(w, "{}"))
        w = r ? w : w.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && an(h) || (a.isFileList(h) || a.endsWith(w, "[]")) && (R = a.toArray(h)))
        return w = Ye(w), R.forEach(function(T, v) {
          !(a.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? ke([w], v, i) : o === null ? w : w + "[]",
            l(T)
          );
        }), !1;
    }
    return Re(h) ? !0 : (t.append(ke(p, w, i), l(h)), !1);
  }
  const f = [], b = Object.assign(ln, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Re
  });
  function A(h, w) {
    if (!a.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + w.join("."));
      f.push(h), a.forEach(h, function(R, O) {
        (!(a.isUndefined(R) || R === null) && s.call(
          t,
          R,
          a.isString(O) ? O.trim() : O,
          w,
          b
        )) === !0 && A(R, w ? w.concat(O) : [O]);
      }), f.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return A(e), t;
}
function Ne(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Ce(e, t) {
  this._pairs = [], e && de(e, this, t);
}
const et = Ce.prototype;
et.append = function(t, n) {
  this._pairs.push([t, n]);
};
et.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Ne);
  } : Ne;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function cn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || cn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let i;
  if (s ? i = s(t, n) : i = a.isURLSearchParams(t) ? t.toString() : new Ce(t, n).toString(r), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class ve {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const nt = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, un = typeof URLSearchParams < "u" ? URLSearchParams : Ce, dn = typeof FormData < "u" ? FormData : null, fn = typeof Blob < "u" ? Blob : null, hn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: un,
    FormData: dn,
    Blob: fn
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Le = typeof window < "u" && typeof document < "u", Se = typeof navigator == "object" && navigator || void 0, pn = Le && (!Se || ["ReactNative", "NativeScript", "NS"].indexOf(Se.product) < 0), mn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", yn = Le && window.location.href || "http://localhost", wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Le,
  hasStandardBrowserEnv: pn,
  hasStandardBrowserWebWorkerEnv: mn,
  navigator: Se,
  origin: yn
}, Symbol.toStringTag, { value: "Module" })), C = {
  ...wn,
  ...hn
};
function bn(e, t) {
  return de(e, new C.classes.URLSearchParams(), {
    visitor: function(n, r, s, i) {
      return C.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function En(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function gn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function rt(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const c = Number.isFinite(+o), d = i >= n.length;
    return o = !o && a.isArray(s) ? s.length : o, d ? (a.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !c) : ((!s[o] || !a.isObject(s[o])) && (s[o] = []), t(n, r, s[o], i) && a.isArray(s[o]) && (s[o] = gn(s[o])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(En(r), s, n, 0);
    }), n;
  }
  return null;
}
function Rn(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Z = {
  transitional: nt,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, i = a.isObject(t);
    if (i && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(rt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return bn(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return de(
          c ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return i || s ? (n.setContentType("application/json", !1), Rn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Z.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (o)
          throw c.name === "SyntaxError" ? y.from(c, y.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: C.classes.FormData,
    Blob: C.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Z.headers[e] = {};
});
const Sn = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), _n = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Sn[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Pe = Symbol("internals");
function z(e) {
  return e && String(e).trim().toLowerCase();
}
function ne(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ne) : String(e);
}
function An(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const On = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pe(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Tn(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Cn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
let x = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(c, d, l) {
      const u = z(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = a.findKey(s, u);
      (!f || s[f] === void 0 || l === !0 || l === void 0 && s[f] !== !1) && (s[f || d] = ne(c));
    }
    const o = (c, d) => a.forEach(c, (l, u) => i(l, u, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (a.isString(t) && (t = t.trim()) && !On(t))
      o(_n(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let c = {}, d, l;
      for (const u of t) {
        if (!a.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        c[l = u[0]] = (d = c[l]) ? a.isArray(d) ? [...d, u[1]] : [d, u[1]] : u[1];
      }
      o(c, n);
    } else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = z(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return An(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = z(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || pe(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (o = z(o), o) {
        const c = a.findKey(r, o);
        c && (!n || pe(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || pe(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, i) => {
      const o = a.findKey(r, i);
      if (o) {
        n[o] = ne(s), delete n[i];
        return;
      }
      const c = t ? Tn(i) : String(i).trim();
      c !== i && delete n[i], n[c] = ne(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Pe] = this[Pe] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const c = z(o);
      r[c] || (Cn(s, o), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
x.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(x.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(x);
function me(e, t) {
  const n = this || Z, r = t || n, s = x.from(r.headers);
  let i = r.data;
  return a.forEach(e, function(c) {
    i = c.call(n, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function st(e) {
  return !!(e && e.__CANCEL__);
}
function H(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(H, y, {
  __CANCEL__: !0
});
function ot(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ln(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Fn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const l = Date.now(), u = r[i];
    o || (o = l), n[s] = d, r[s] = l;
    let f = i, b = 0;
    for (; f !== s; )
      b += n[f++], f = f % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), l - o < t)
      return;
    const A = u && l - u;
    return A ? Math.round(b * 1e3 / A) : void 0;
  };
}
function xn(e, t) {
  let n = 0, r = 1e3 / t, s, i;
  const o = (l, u = Date.now()) => {
    n = u, s = null, i && (clearTimeout(i), i = null), e(...l);
  };
  return [(...l) => {
    const u = Date.now(), f = u - n;
    f >= r ? o(l, u) : (s = l, i || (i = setTimeout(() => {
      i = null, o(s);
    }, r - f)));
  }, () => s && o(s)];
}
const ie = (e, t, n = 3) => {
  let r = 0;
  const s = Fn(50, 250);
  return xn((i) => {
    const o = i.loaded, c = i.lengthComputable ? i.total : void 0, d = o - r, l = s(d), u = o <= c;
    r = o;
    const f = {
      loaded: o,
      total: c,
      progress: c ? o / c : void 0,
      bytes: d,
      rate: l || void 0,
      estimated: l && c && u ? (c - o) / l : void 0,
      event: i,
      lengthComputable: c != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Ue = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Be = (e) => (...t) => a.asap(() => e(...t)), kn = C.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, C.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(C.origin),
  C.navigator && /(msie|trident)/i.test(C.navigator.userAgent)
) : () => !0, Nn = C.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), a.isString(r) && o.push("path=" + r), a.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function vn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Pn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function it(e, t, n) {
  let r = !vn(t);
  return e && (r || n == !1) ? Pn(e, t) : t;
}
const De = (e) => e instanceof x ? { ...e } : e;
function j(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, f, b) {
    return a.isPlainObject(l) && a.isPlainObject(u) ? a.merge.call({ caseless: b }, l, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(l, u, f, b) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l, f, b);
    } else return r(l, u, f, b);
  }
  function i(l, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function o(l, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function c(l, u, f) {
    if (f in t)
      return r(l, u);
    if (f in e)
      return r(void 0, l);
  }
  const d = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (l, u, f) => s(De(l), De(u), f, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(u) {
    const f = d[u] || s, b = f(e[u], t[u], u);
    a.isUndefined(b) && f !== c || (n[u] = b);
  }), n;
}
const at = (e) => {
  const t = j({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: i, headers: o, auth: c } = t;
  t.headers = o = x.from(o), t.url = tt(it(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), c && o.set(
    "Authorization",
    "Basic " + btoa((c.username || "") + ":" + (c.password ? unescape(encodeURIComponent(c.password)) : ""))
  );
  let d;
  if (a.isFormData(n)) {
    if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((d = o.getContentType()) !== !1) {
      const [l, ...u] = d ? d.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (C.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && kn(t.url))) {
    const l = s && i && Nn.read(i);
    l && o.set(s, l);
  }
  return t;
}, Un = typeof XMLHttpRequest < "u", Bn = Un && function(e) {
  return new Promise(function(n, r) {
    const s = at(e);
    let i = s.data;
    const o = x.from(s.headers).normalize();
    let { responseType: c, onUploadProgress: d, onDownloadProgress: l } = s, u, f, b, A, h;
    function w() {
      A && A(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function R() {
      if (!p)
        return;
      const T = x.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), L = {
        data: !c || c === "text" || c === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: T,
        config: e,
        request: p
      };
      ot(function(D) {
        n(D), w();
      }, function(D) {
        r(D), w();
      }, L), p = null;
    }
    "onloadend" in p ? p.onloadend = R : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, p.onabort = function() {
      p && (r(new y("Request aborted", y.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new y("Network Error", y.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let v = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const L = s.transitional || nt;
      s.timeoutErrorMessage && (v = s.timeoutErrorMessage), r(new y(
        v,
        L.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        p
      )), p = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in p && a.forEach(o.toJSON(), function(v, L) {
      p.setRequestHeader(L, v);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), c && c !== "json" && (p.responseType = s.responseType), l && ([b, h] = ie(l, !0), p.addEventListener("progress", b)), d && p.upload && ([f, A] = ie(d), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", A)), (s.cancelToken || s.signal) && (u = (T) => {
      p && (r(!T || T.type ? new H(null, e, p) : T), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const O = Ln(s.url);
    if (O && C.protocols.indexOf(O) === -1) {
      r(new y("Unsupported protocol " + O + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(i || null);
  });
}, Dn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const i = function(l) {
      if (!s) {
        s = !0, c();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof y ? u : new H(u instanceof Error ? u.message : u));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const c = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", i));
    const { signal: d } = r;
    return d.unsubscribe = () => a.asap(c), d;
  }
}, qn = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, In = async function* (e, t) {
  for await (const n of Mn(e))
    yield* qn(n, t);
}, Mn = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, qe = (e, t, n, r) => {
  const s = In(e, t);
  let i = 0, o, c = (d) => {
    o || (o = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: l, value: u } = await s.next();
        if (l) {
          c(), d.close();
          return;
        }
        let f = u.byteLength;
        if (n) {
          let b = i += f;
          n(b);
        }
        d.enqueue(new Uint8Array(u));
      } catch (l) {
        throw c(l), l;
      }
    },
    cancel(d) {
      return c(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, fe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lt = fe && typeof ReadableStream == "function", jn = fe && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ct = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Vn = lt && ct(() => {
  let e = !1;
  const t = new Request(C.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ie = 64 * 1024, _e = lt && ct(() => a.isReadableStream(new Response("").body)), ae = {
  stream: _e && ((e) => e.body)
};
fe && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ae[t] && (ae[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new y(`Response type '${t}' is not supported`, y.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const $n = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(C.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await jn(e)).byteLength;
}, Hn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? $n(t);
}, zn = fe && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: c,
    onUploadProgress: d,
    responseType: l,
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: b
  } = at(e);
  l = l ? (l + "").toLowerCase() : "text";
  let A = Dn([s, i && i.toAbortSignal()], o), h;
  const w = A && A.unsubscribe && (() => {
    A.unsubscribe();
  });
  let p;
  try {
    if (d && Vn && n !== "get" && n !== "head" && (p = await Hn(u, r)) !== 0) {
      let L = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), P;
      if (a.isFormData(r) && (P = L.headers.get("content-type")) && u.setContentType(P), L.body) {
        const [D, ee] = Ue(
          p,
          ie(Be(d))
        );
        r = qe(L.body, Ie, D, ee);
      }
    }
    a.isString(f) || (f = f ? "include" : "omit");
    const R = "credentials" in Request.prototype;
    h = new Request(t, {
      ...b,
      signal: A,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: R ? f : void 0
    });
    let O = await fetch(h, b);
    const T = _e && (l === "stream" || l === "response");
    if (_e && (c || T && w)) {
      const L = {};
      ["status", "statusText", "headers"].forEach((Fe) => {
        L[Fe] = O[Fe];
      });
      const P = a.toFiniteNumber(O.headers.get("content-length")), [D, ee] = c && Ue(
        P,
        ie(Be(c), !0)
      ) || [];
      O = new Response(
        qe(O.body, Ie, D, () => {
          ee && ee(), w && w();
        }),
        L
      );
    }
    l = l || "text";
    let v = await ae[a.findKey(ae, l) || "text"](O, e);
    return !T && w && w(), await new Promise((L, P) => {
      ot(L, P, {
        data: v,
        headers: x.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: h
      });
    });
  } catch (R) {
    throw w && w(), R && R.name === "TypeError" && /Load failed|fetch/i.test(R.message) ? Object.assign(
      new y("Network Error", y.ERR_NETWORK, e, h),
      {
        cause: R.cause || R
      }
    ) : y.from(R, R && R.code, e, h);
  }
}), Ae = {
  http: on,
  xhr: Bn,
  fetch: zn
};
a.forEach(Ae, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Me = (e) => `- ${e}`, Jn = (e) => a.isFunction(e) || e === null || e === !1, ut = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let o;
      if (r = n, !Jn(n) && (r = Ae[(o = String(n)).toLowerCase()], r === void 0))
        throw new y(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(s).map(
        ([c, d]) => `adapter ${c} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Me).join(`
`) : " " + Me(i[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ae
};
function ye(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new H(null, e);
}
function je(e) {
  return ye(e), e.headers = x.from(e.headers), e.data = me.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ut.getAdapter(e.adapter || Z.adapter)(e).then(function(r) {
    return ye(e), r.data = me.call(
      e,
      e.transformResponse,
      r
    ), r.headers = x.from(r.headers), r;
  }, function(r) {
    return st(r) || (ye(e), r && r.response && (r.response.data = me.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = x.from(r.response.headers))), Promise.reject(r);
  });
}
const dt = "1.11.0", he = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  he[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ve = {};
he.transitional = function(t, n, r) {
  function s(i, o) {
    return "[Axios v" + dt + "] Transitional option '" + i + "'" + o + (r ? ". " + r : "");
  }
  return (i, o, c) => {
    if (t === !1)
      throw new y(
        s(o, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !Ve[o] && (Ve[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, c) : !0;
  };
};
he.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Gn(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s], o = t[i];
    if (o) {
      const c = e[i], d = c === void 0 || o(c, i, e);
      if (d !== !0)
        throw new y("option " + i + " must be " + d, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + i, y.ERR_BAD_OPTION);
  }
}
const re = {
  assertOptions: Gn,
  validators: he
}, N = re.validators;
let M = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new ve(),
      response: new ve()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = j(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 && re.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : re.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), re.assertOptions(n, {
      baseUrl: N.spelling("baseURL"),
      withXsrfToken: N.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && a.merge(
      i.common,
      i[n.method]
    );
    i && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), n.headers = x.concat(o, i);
    const c = [];
    let d = !0;
    this.interceptors.request.forEach(function(w) {
      typeof w.runWhen == "function" && w.runWhen(n) === !1 || (d = d && w.synchronous, c.unshift(w.fulfilled, w.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(w) {
      l.push(w.fulfilled, w.rejected);
    });
    let u, f = 0, b;
    if (!d) {
      const h = [je.bind(this), void 0];
      for (h.unshift(...c), h.push(...l), b = h.length, u = Promise.resolve(n); f < b; )
        u = u.then(h[f++], h[f++]);
      return u;
    }
    b = c.length;
    let A = n;
    for (f = 0; f < b; ) {
      const h = c[f++], w = c[f++];
      try {
        A = h(A);
      } catch (p) {
        w.call(this, p);
        break;
      }
    }
    try {
      u = je.call(this, A);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, b = l.length; f < b; )
      u = u.then(l[f++], l[f++]);
    return u;
  }
  getUri(t) {
    t = j(this.defaults, t);
    const n = it(t.baseURL, t.url, t.allowAbsoluteUrls);
    return tt(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(n, r) {
    return this.request(j(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, o, c) {
      return this.request(j(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  M.prototype[t] = n(), M.prototype[t + "Form"] = n(!0);
});
let Wn = class ft {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((c) => {
        r.subscribe(c), i = c;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(i);
      }, o;
    }, t(function(i, o, c) {
      r.reason || (r.reason = new H(i, o, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ft(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function Kn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Qn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Oe = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Oe).forEach(([e, t]) => {
  Oe[t] = e;
});
function ht(e) {
  const t = new M(e), n = $e(M.prototype.request, t);
  return a.extend(n, M.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ht(j(e, s));
  }, n;
}
const _ = ht(Z);
_.Axios = M;
_.CanceledError = H;
_.CancelToken = Wn;
_.isCancel = st;
_.VERSION = dt;
_.toFormData = de;
_.AxiosError = y;
_.Cancel = _.CanceledError;
_.all = function(t) {
  return Promise.all(t);
};
_.spread = Kn;
_.isAxiosError = Qn;
_.mergeConfig = j;
_.AxiosHeaders = x;
_.formToJSON = (e) => rt(a.isHTMLForm(e) ? new FormData(e) : e);
_.getAdapter = ut.getAdapter;
_.HttpStatusCode = Oe;
_.default = _;
const {
  Axios: rs,
  AxiosError: ss,
  CanceledError: os,
  isCancel: is,
  CancelToken: as,
  VERSION: ls,
  all: cs,
  Cancel: us,
  isAxiosError: ds,
  spread: fs,
  toFormData: hs,
  AxiosHeaders: ps,
  HttpStatusCode: ms,
  formToJSON: ys,
  getAdapter: ws,
  mergeConfig: bs
} = _, Xn = "https://api.checklist.dev.grava.io/api", W = _.create({
  baseURL: Xn
});
function Zn(e) {
  e ? W.defaults.headers.common.Authorization = `Bearer ${e}` : delete W.defaults.headers.common.Authorization;
}
W.interceptors.response.use(
  (e) => e,
  (e) => (console.error("API Error:", e.response?.data || e.message), Promise.reject(e))
);
const pt = {
  getForms(e) {
    return W.get("/forms", { params: e }).then((t) => t.data);
  },
  getFormById(e) {
    return W.get(`/forms/${e}`).then((t) => t.data);
  }
}, Yn = "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M256%200C114.6%200%200%20114.6%200%20256C0%20397.4%20114.6%20512%20256%20512C397.4%20512%20512%20397.4%20512%20256C512%20114.6%20397.4%200%20256%200ZM352%20280H280V352C280%20365.2%20269.2%20376%20256.9%20376C242.8%20376%20232%20365.2%20232%20352V280H160C146.8%20280%20136%20269.2%20136%20256C136%20242.8%20146.8%20232%20160%20232H232V160C232%20146.8%20242.8%20136%20256%20136C269.2%20136%20280%20146.8%20280%20160V232H352C365.2%20232%20376%20242.8%20376%20256C376%20269.2%20365.2%20280%20352%20280Z'%20fill='black'/%3e%3c/svg%3e", Y = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, er = {
  name: "FormSelect",
  props: {
    typeForm: String,
    lang: String
  },
  data() {
    return {
      forms: [],
      selectedId: ""
    };
  },
  mounted() {
    pt.getForms({ state: "enabled", type: this.typeForm || void 0 }).then((e) => {
      this.forms = e.map((t) => ({ id: t.id, name: t.name }));
    }).catch(() => {
      this.forms = [];
    });
  },
  methods: {
    emitSelected() {
      this.selectedId && this.$emit("form-selected", this.selectedId);
    }
  }
}, tr = { class: "form-selector-card" }, nr = { class: "form-title" }, rr = { class: "form-label" }, sr = {
  value: "",
  disabled: ""
}, or = ["value"], ir = { class: "btn-add-container" };
function ar(e, t, n, r, s, i) {
  return E(), g("div", tr, [
    m("h3", nr, S(e.translateTerm("SELECT_FORM_TITLE")), 1),
    m("label", rr, S(e.translateTerm("SELECT_FORM_LABEL")), 1),
    V(m("select", {
      "onUpdate:modelValue": t[0] || (t[0] = (o) => s.selectedId = o),
      class: "form-select"
    }, [
      m("option", sr, S(e.translateTerm("SELECT_FORM_OPTION_PLACEHOLDER")), 1),
      (E(!0), g(U, null, B(s.forms, (o) => (E(), g("option", {
        key: o.id,
        value: o.id
      }, S(o.name), 9, or))), 128))
    ], 512), [
      [bt, s.selectedId]
    ]),
    m("div", ir, [
      m("button", {
        class: "btn-add",
        onClick: t[1] || (t[1] = (...o) => i.emitSelected && i.emitSelected(...o))
      }, [
        t[2] || (t[2] = m("img", {
          src: Yn,
          alt: "plus"
        }, null, -1)),
        be(" " + S(e.translateTerm("GENERAL_ADD")), 1)
      ])
    ])
  ]);
}
const lr = /* @__PURE__ */ Y(er, [["render", ar], ["__scopeId", "data-v-6a3747fb"]]), cr = {
  name: "SelectQuestionsMultipleOption",
  props: {
    titleLabel: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    inputId: Number,
    answers: {
      type: Array,
      default: () => []
    },
    inputRequired: {
      type: Boolean
    }
  },
  data() {
    return {
      value: ""
    };
  },
  watch: {
    value(e) {
      const t = this.answers.map((n) => ({
        ...n,
        observation: e
      }));
      this.$emit("update:answers", t);
    }
  },
  mounted() {
    this.answers && this.answers.length > 0 && (this.value = this.answers[0].observation || "");
  },
  methods: {
    checkedValue(e) {
      const t = [...this.answers || []], n = t.findIndex(
        (r) => r.value === e.value
      );
      n >= 0 ? t.splice(n, 1) : t.push({
        value: e.value,
        observation: this.value
      }), this.$emit("update:answers", t);
    },
    validateIfChecked(e) {
      return !this.answers || this.answers.length === 0 ? !1 : this.answers.some((t) => t.value === e.value);
    }
  }
}, ur = { class: "select-questions-multiple-option" }, dr = { class: "title-question" }, fr = { class: "container-checkbox" }, hr = { class: "checkbox-items-container" }, pr = ["for"], mr = ["id", "checked", "onChange"], yr = { class: "inputQuestionItem" }, wr = { class: "limit-characters multiple-questions" };
function br(e, t, n, r, s, i) {
  return E(), g("div", ur, [
    m("h4", dr, S(`${n.titleLabel} ${n.inputRequired ? "*" : ""}`), 1),
    m("div", fr, [
      m("div", hr, [
        (E(!0), g(U, null, B(n.options, (o) => (E(), g("div", {
          class: "checkbox-item",
          key: o.id
        }, [
          m("label", {
            for: "option-" + o.id
          }, S(o.key), 9, pr),
          m("input", {
            id: "option-" + o.id,
            type: "checkbox",
            checked: i.validateIfChecked(o),
            onChange: (c) => i.checkedValue(o)
          }, null, 40, mr)
        ]))), 128))
      ]),
      m("div", yr, [
        m("label", null, S(e.translateTerm("LABEL_OBSERVATION")), 1),
        V(m("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => s.value = o),
          type: "text",
          maxlength: 100,
          class: "input-characters-large"
        }, null, 512), [
          [J, s.value]
        ]),
        m("span", wr, S(s.value ? s.value.length : 0) + " / 100 ", 1)
      ])
    ])
  ]);
}
const Er = /* @__PURE__ */ Y(cr, [["render", br]]), gr = {
  name: "SelectQuestionsUnique",
  props: {
    titleLabel: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    },
    inputId: Number,
    answers: [Object, Array],
    inputRequired: {
      type: Boolean
    }
  },
  data() {
    return {
      value: ""
    };
  },
  watch: {
    value(e) {
      this.$emit("update:answers", {
        value: this.currentSelectedValue,
        observation: e
      });
    }
  },
  computed: {
    currentAnswer() {
      return Array.isArray(this.answers) ? this.answers[0] || null : this.answers || null;
    },
    currentSelectedValue() {
      return this.currentAnswer ? this.currentAnswer.value : null;
    }
  },
  mounted() {
    this.value = this.currentAnswer && this.currentAnswer.observation || "";
  },
  methods: {
    checkedValue(e) {
      this.$emit("update:answers", {
        value: e.value,
        observation: this.value
      });
    },
    validateIfChecked(e) {
      return this.currentAnswer ? e.value === this.currentAnswer.value : !1;
    }
  }
}, Rr = { class: "select-questions-unique-option" }, Sr = { class: "title-question" }, _r = { class: "container-checkbox" }, Ar = { class: "checkbox-items-container" }, Or = ["for"], Tr = ["id", "name", "checked", "onChange"], Cr = { class: "inputQuestionItem" }, Lr = { class: "limit-characters multiple-questions" };
function Fr(e, t, n, r, s, i) {
  return E(), g("div", Rr, [
    m("h4", Sr, S(`${n.titleLabel} ${n.inputRequired ? "*" : ""}`), 1),
    m("div", _r, [
      m("div", Ar, [
        (E(!0), g(U, null, B(n.options, (o) => (E(), g("div", {
          class: "checkbox-item",
          key: o.id
        }, [
          m("label", {
            for: "option-" + o.id
          }, S(o.key), 9, Or),
          m("input", {
            id: "option-" + o.id,
            type: "radio",
            name: "option-" + n.inputId,
            checked: i.validateIfChecked(o),
            onChange: (c) => i.checkedValue(o)
          }, null, 40, Tr)
        ]))), 128))
      ]),
      m("div", Cr, [
        m("label", null, S(e.translateTerm("LABEL_OBSERVATION")), 1),
        V(m("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (o) => s.value = o),
          type: "text",
          maxlength: 100,
          class: "input-characters-large"
        }, null, 512), [
          [J, s.value]
        ]),
        m("span", Lr, S(s.value ? s.value.length : 0) + " / 100 ", 1)
      ])
    ])
  ]);
}
const xr = /* @__PURE__ */ Y(gr, [["render", Fr]]), kr = {
  name: "FormRenderer",
  components: {
    SelectQuestionsMultipleOption: Er,
    SelectQuestionsUnique: xr
  },
  props: {
    formData: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      answers: {},
      tableAnswers: {}
    };
  },
  computed: {
    orderedSections() {
      return [...this.formData?.sections || []].sort((t, n) => (t.order ?? 0) - (n.order ?? 0));
    }
  },
  methods: {
    orderedInputs(e = []) {
      return [...e].sort((t, n) => (t.order ?? 0) - (n.order ?? 0));
    },
    saveForm() {
      const e = {
        formId: this.formData.id,
        answers: this.answers,
        tableAnswers: this.tableAnswers
      };
      this.$emit("form-saved", e), console.log("Form saved:", e);
    }
  },
  watch: {
    formData: {
      immediate: !0,
      handler(e) {
        this.answers = {}, this.tableAnswers = {}, !(!e || !Array.isArray(e.sections)) && e.sections.forEach((t) => {
          (t.inputs || []).forEach((n) => {
            if (n.value === "table") {
              this.tableAnswers[n.id] = {};
              const s = Number(n.tableRows || 0), i = Number(n.tableColumns || 0);
              for (let o = 1; o <= s; o++)
                for (let c = 1; c <= i; c++)
                  this.tableAnswers[n.id][`${o}-${c}`] = "";
            } else
              this.answers[n.id] = n.value === "OU" ? null : n.value === "OM" ? [] : "";
          });
        });
      }
    }
  }
}, Nr = { class: "form-card" }, vr = { class: "form-header" }, Pr = { class: "form-title" }, Ur = { class: "form-subtitle" }, Br = { class: "section-title" }, Dr = { key: 0 }, qr = { key: 0 }, Ir = ["onUpdate:modelValue"], Mr = {
  key: 2,
  class: "table-wrapper"
}, jr = { class: "input-table" }, Vr = ["onUpdate:modelValue"], $r = {
  key: 3,
  class: "textarea-wrapper"
}, Hr = { key: 0 }, zr = ["onUpdate:modelValue"], Jr = { class: "btn-save-wrapper" };
function Gr(e, t, n, r, s, i) {
  const o = oe("SelectQuestionsUnique"), c = oe("SelectQuestionsMultipleOption");
  return E(), g("div", Nr, [
    m("div", vr, [
      m("h3", Pr, S(n.formData.name), 1),
      m("button", {
        class: "h5-img",
        onClick: t[0] || (t[0] = (d) => e.$emit("remove-form", n.formData.id))
      }, [
        t[2] || (t[2] = m("svg", {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "currentColor"
        }, [
          m("path", { d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" })
        ], -1)),
        m("h5", null, S(e.translateTerm("GENERAL_DELETE_PREFILL_FORM")), 1)
      ])
    ]),
    m("p", Ur, S(e.translateTerm("GENERAL_PREFILL_FORM")), 1),
    (E(!0), g(U, null, B(i.orderedSections, (d) => (E(), g("div", {
      key: d.id,
      class: "form-section"
    }, [
      m("h4", Br, S(d.name), 1),
      (E(!0), g(U, null, B(i.orderedInputs(d.inputs), (l) => (E(), g("div", {
        key: l.id,
        class: "form-item"
      }, [
        l.value === "TL" ? (E(), g("div", Dr, [
          m("label", null, [
            be(S(l.key) + " ", 1),
            l.required ? (E(), g("span", qr, "*")) : q("", !0)
          ]),
          V(m("input", {
            "onUpdate:modelValue": (u) => s.answers[l.id] = u,
            class: "input-text",
            type: "text"
          }, null, 8, Ir), [
            [J, s.answers[l.id]]
          ])
        ])) : q("", !0),
        l.value === "OU" ? (E(), Ee(o, {
          key: 1,
          options: l.options,
          "title-label": l.key,
          "input-id": l.id,
          "input-required": l.required,
          answers: s.answers[l.id],
          "onUpdate:answers": (u) => s.answers[l.id] = u,
          class: "select-questions-unique-option"
        }, null, 8, ["options", "title-label", "input-id", "input-required", "answers", "onUpdate:answers"])) : q("", !0),
        l.value === "table" ? (E(), g("div", Mr, [
          m("label", null, S(l.key), 1),
          m("table", jr, [
            m("tbody", null, [
              (E(!0), g(U, null, B(l.tableRows, (u) => (E(), g("tr", { key: u }, [
                (E(!0), g(U, null, B(l.tableColumns, (f) => (E(), g("td", { key: f }, [
                  V(m("input", {
                    type: "text",
                    class: "input-cell",
                    "onUpdate:modelValue": (b) => s.tableAnswers[l.id][`${u}-${f}`] = b
                  }, null, 8, Vr), [
                    [J, s.tableAnswers[l.id][`${u}-${f}`]]
                  ])
                ]))), 128))
              ]))), 128))
            ])
          ])
        ])) : q("", !0),
        l.value === "TE" ? (E(), g("div", $r, [
          m("label", null, [
            be(S(l.key) + " ", 1),
            l.required ? (E(), g("span", Hr, "*")) : q("", !0)
          ]),
          V(m("textarea", {
            "onUpdate:modelValue": (u) => s.answers[l.id] = u,
            class: "textarea"
          }, null, 8, zr), [
            [J, s.answers[l.id]]
          ])
        ])) : q("", !0),
        l.value === "OM" ? (E(), Ee(c, {
          key: 4,
          options: l.options,
          "title-label": l.key,
          "input-id": l.id,
          "input-required": l.required,
          answers: s.answers[l.id],
          "onUpdate:answers": (u) => s.answers[l.id] = u,
          class: "select-questions-multiple-option"
        }, null, 8, ["options", "title-label", "input-id", "input-required", "answers", "onUpdate:answers"])) : q("", !0)
      ]))), 128))
    ]))), 128)),
    m("div", Jr, [
      m("button", {
        class: "btn-save",
        onClick: t[1] || (t[1] = (...d) => i.saveForm && i.saveForm(...d))
      }, S(e.translateTerm("GENERAL_SAVE")), 1)
    ])
  ]);
}
const Wr = /* @__PURE__ */ Y(kr, [["render", Gr]]), Kr = {
  name: "VfChecklist",
  components: {
    FormSelect: lr,
    FormRenderer: Wr
  },
  props: {
    moduleCode: {
      type: String,
      required: !0
    },
    externalObjectId: {
      type: String,
      required: !0
    },
    mode: {
      type: String,
      default: "edit"
    },
    userToken: {
      type: String,
      required: !0
    },
    language: {
      type: String,
      default: "es"
    }
  },
  data() {
    return {
      lang: this.language || localStorage.getItem("DICTIONARY_LANGUAGE") || "es",
      forms: []
    };
  },
  mounted() {
    Zn(this.userToken);
  },
  methods: {
    loadForm(e) {
      pt.getFormById(e).then((t) => {
        this.forms.some((n) => n.id === t.id) || this.forms.push(t);
      }).catch((t) => console.error("Error cargando formulario:", t));
    },
    removeForm(e) {
      this.forms = this.forms.filter((t) => t.id !== e);
    }
  }
}, Qr = { class: "vf-checklist-wrapper" };
function Xr(e, t, n, r, s, i) {
  const o = oe("FormSelect"), c = oe("FormRenderer");
  return E(), g("div", Qr, [
    Et(o, {
      typeForm: n.moduleCode,
      lang: s.lang,
      onFormSelected: i.loadForm
    }, null, 8, ["typeForm", "lang", "onFormSelected"]),
    (E(!0), g(U, null, B(s.forms, (d) => (E(), Ee(c, {
      key: d.id,
      "form-data": d,
      onRemoveForm: i.removeForm
    }, null, 8, ["form-data", "onRemoveForm"]))), 128))
  ]);
}
const se = /* @__PURE__ */ Y(Kr, [["render", Xr]]), Zr = {
  es: {
    SELECT_FORM_TITLE: "Seleccionar Formulario",
    SELECT_FORM_LABEL: "Formulario:",
    SELECT_FORM_OPTION_PLACEHOLDER: "Seleccione un formulario...",
    GENERAL_ADD: "Agregar",
    GENERAL_DELETE_PREFILL_FORM: "Eliminar formulario",
    GENERAL_PREFILL_FORM: "Formulario de pre-llenado",
    GENERAL_SAVE: "Guardar",
    LABEL_OBSERVATION: "Observación"
  },
  en: {
    SELECT_FORM_TITLE: "Select Form",
    SELECT_FORM_LABEL: "Form:",
    SELECT_FORM_OPTION_PLACEHOLDER: "Select a form...",
    GENERAL_ADD: "Add",
    GENERAL_DELETE_PREFILL_FORM: "Delete form",
    GENERAL_PREFILL_FORM: "Pre-fill form",
    GENERAL_SAVE: "Save",
    LABEL_OBSERVATION: "Observation"
  }
};
let mt = "es";
function yt(e) {
  mt = e;
}
function wt(e) {
  return Zr[mt]?.[e] || e;
}
const Yr = {
  install(e) {
    e.config.globalProperties.translateTerm = wt;
  }
}, we = {
  install(e, t = {}) {
    t.language && yt(t.language), e.use(Yr), e.component("VfChecklist", se);
  }
};
if (typeof window < "u" && window.Vue) {
  const { createApp: e, h: t } = window.Vue;
  window.VfChecklist = {
    component: se,
    plugin: we,
    install: we.install,
    createInstance: (n = {}, r = {}) => {
      const s = document.createElement("div"), i = e({
        render() {
          return t(se, n);
        }
      });
      return i.use(we, r), i.mount(s);
    },
    setLanguage: yt,
    translateTerm: wt
  }, window.VfChecklistComponent = se;
}
export {
  we as VfChecklistPlugin,
  se as default,
  yt as setLanguage,
  wt as translateTerm
};
//# sourceMappingURL=vf-checklist.es.js.map
