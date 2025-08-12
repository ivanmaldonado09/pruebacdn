import { createElementBlock as E, openBlock as g, createElementVNode as m, withDirectives as j, toDisplayString as T, Fragment as P, renderList as I, vModelSelect as yt, createTextVNode as be, resolveComponent as H, createVNode as Te, vModelText as W, normalizeClass as bt, createCommentVNode as B, createBlock as we } from "vue";
function He(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: wt } = Object.prototype, { getPrototypeOf: Oe } = Object, { iterator: le, toStringTag: Ve } = Symbol, ce = /* @__PURE__ */ ((e) => (t) => {
  const n = wt.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), k = (e) => (e = e.toLowerCase(), (t) => ce(t) === e), ue = (e) => (t) => typeof t === e, { isArray: V } = Array, K = ue("undefined");
function Q(e) {
  return e !== null && !K(e) && e.constructor !== null && !K(e.constructor) && L(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ze = k("ArrayBuffer");
function gt(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ze(e.buffer), t;
}
const Et = ue("string"), L = ue("function"), Je = ue("number"), X = (e) => e !== null && typeof e == "object", St = (e) => e === !0 || e === !1, ne = (e) => {
  if (ce(e) !== "object")
    return !1;
  const t = Oe(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Ve in e) && !(le in e);
}, _t = (e) => {
  if (!X(e) || Q(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Rt = k("Date"), At = k("File"), Tt = k("Blob"), Ot = k("FileList"), Ct = (e) => X(e) && L(e.pipe), xt = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || L(e.append) && ((t = ce(e)) === "formdata" || // detect form-data instance
  t === "object" && L(e.toString) && e.toString() === "[object FormData]"));
}, Lt = k("URLSearchParams"), [Nt, kt, Ft, Ut] = ["ReadableStream", "Request", "Response", "Headers"].map(k), vt = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Y(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), V(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Q(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function Ge(e, t) {
  if (Q(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, We = (e) => !K(e) && e !== q;
function ge() {
  const { caseless: e } = We(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Ge(t, s) || s;
    ne(t[o]) && ne(r) ? t[o] = ge(t[o], r) : ne(r) ? t[o] = ge({}, r) : V(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Y(arguments[r], n);
  return t;
}
const Pt = (e, t, n, { allOwnKeys: r } = {}) => (Y(t, (s, o) => {
  n && L(s) ? e[o] = He(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), It = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Dt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Bt = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && Oe(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, qt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Mt = (e) => {
  if (!e) return null;
  if (V(e)) return e;
  let t = e.length;
  if (!Je(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, $t = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Oe(Uint8Array)), jt = (e, t) => {
  const r = (e && e[le]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ht = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Vt = k("HTMLFormElement"), zt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ne = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Jt = k("RegExp"), Ke = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Y(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, Gt = (e) => {
  Ke(e, (t, n) => {
    if (L(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (L(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Wt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return V(e) ? r(e) : r(String(e).split(t)), n;
}, Kt = () => {
}, Qt = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Xt(e) {
  return !!(e && L(e.append) && e[Ve] === "FormData" && e[le]);
}
const Yt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (X(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Q(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = V(r) ? [] : {};
        return Y(r, (i, l) => {
          const d = n(i, s + 1);
          !K(d) && (o[l] = d);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Zt = k("AsyncFunction"), en = (e) => e && (X(e) || L(e)) && L(e.then) && L(e.catch), Qe = ((e, t) => e ? setImmediate : t ? ((n, r) => (q.addEventListener("message", ({ source: s, data: o }) => {
  s === q && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), q.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  L(q.postMessage)
), tn = typeof queueMicrotask < "u" ? queueMicrotask.bind(q) : typeof process < "u" && process.nextTick || Qe, nn = (e) => e != null && L(e[le]), a = {
  isArray: V,
  isArrayBuffer: ze,
  isBuffer: Q,
  isFormData: xt,
  isArrayBufferView: gt,
  isString: Et,
  isNumber: Je,
  isBoolean: St,
  isObject: X,
  isPlainObject: ne,
  isEmptyObject: _t,
  isReadableStream: Nt,
  isRequest: kt,
  isResponse: Ft,
  isHeaders: Ut,
  isUndefined: K,
  isDate: Rt,
  isFile: At,
  isBlob: Tt,
  isRegExp: Jt,
  isFunction: L,
  isStream: Ct,
  isURLSearchParams: Lt,
  isTypedArray: $t,
  isFileList: Ot,
  forEach: Y,
  merge: ge,
  extend: Pt,
  trim: vt,
  stripBOM: It,
  inherits: Dt,
  toFlatObject: Bt,
  kindOf: ce,
  kindOfTest: k,
  endsWith: qt,
  toArray: Mt,
  forEachEntry: jt,
  matchAll: Ht,
  isHTMLForm: Vt,
  hasOwnProperty: Ne,
  hasOwnProp: Ne,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ke,
  freezeMethods: Gt,
  toObjectSet: Wt,
  toCamelCase: zt,
  noop: Kt,
  toFiniteNumber: Qt,
  findKey: Ge,
  global: q,
  isContextDefined: We,
  isSpecCompliantForm: Xt,
  toJSONObject: Yt,
  isAsyncFn: Zt,
  isThenable: en,
  setImmediate: Qe,
  asap: tn,
  isIterable: nn
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
const Xe = y.prototype, Ye = {};
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
  Ye[e] = { value: e };
});
Object.defineProperties(y, Ye);
Object.defineProperty(Xe, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, o) => {
  const i = Object.create(Xe);
  return a.toFlatObject(e, i, function(d) {
    return d !== Error.prototype;
  }, (l) => l !== "isAxiosError"), y.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const rn = null;
function Ee(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ze(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ke(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ze(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function sn(e) {
  return a.isArray(e) && !e.some(Ee);
}
const on = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function de(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, p) {
    return !a.isUndefined(p[b]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, i = n.indexes, d = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null) return "";
    if (a.isDate(h))
      return h.toISOString();
    if (a.isBoolean(h))
      return h.toString();
    if (!d && a.isBlob(h))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(h) || a.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function u(h, b, p) {
    let _ = h;
    if (h && !p && typeof h == "object") {
      if (a.endsWith(b, "{}"))
        b = r ? b : b.slice(0, -2), h = JSON.stringify(h);
      else if (a.isArray(h) && sn(h) || (a.isFileList(h) || a.endsWith(b, "[]")) && (_ = a.toArray(h)))
        return b = Ze(b), _.forEach(function(O, U) {
          !(a.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ke([b], U, o) : i === null ? b : b + "[]",
            c(O)
          );
        }), !1;
    }
    return Ee(h) ? !0 : (t.append(ke(p, b, o), c(h)), !1);
  }
  const f = [], w = Object.assign(on, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Ee
  });
  function R(h, b) {
    if (!a.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      f.push(h), a.forEach(h, function(_, A) {
        (!(a.isUndefined(_) || _ === null) && s.call(
          t,
          _,
          a.isString(A) ? A.trim() : A,
          b,
          w
        )) === !0 && R(_, b ? b.concat(A) : [A]);
      }), f.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
}
function Fe(e) {
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
    return t.call(this, r, Fe);
  } : Fe;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function an(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tt(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || an;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new Ce(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ue {
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
}, ln = typeof URLSearchParams < "u" ? URLSearchParams : Ce, cn = typeof FormData < "u" ? FormData : null, un = typeof Blob < "u" ? Blob : null, dn = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ln,
    FormData: cn,
    Blob: un
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xe = typeof window < "u" && typeof document < "u", Se = typeof navigator == "object" && navigator || void 0, fn = xe && (!Se || ["ReactNative", "NativeScript", "NS"].indexOf(Se.product) < 0), hn = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pn = xe && window.location.href || "http://localhost", mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xe,
  hasStandardBrowserEnv: fn,
  hasStandardBrowserWebWorkerEnv: hn,
  navigator: Se,
  origin: pn
}, Symbol.toStringTag, { value: "Module" })), C = {
  ...mn,
  ...dn
};
function yn(e, t) {
  return de(e, new C.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return C.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function bn(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function wn(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function rt(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), d = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, d ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = wn(s[i])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(bn(r), s, n, 0);
    }), n;
  }
  return null;
}
function gn(e, t, n) {
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
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(rt(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return yn(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return de(
          l ? { "files[]": t } : t,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), gn(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Z.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? y.from(l, y.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
const En = a.toObjectSet([
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
]), Sn = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && En[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ve = Symbol("internals");
function J(e) {
  return e && String(e).trim().toLowerCase();
}
function re(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(re) : String(e);
}
function _n(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Rn = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function An(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Tn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let N = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, d, c) {
      const u = J(d);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const f = a.findKey(s, u);
      (!f || s[f] === void 0 || c === !0 || c === void 0 && s[f] !== !1) && (s[f || d] = re(l));
    }
    const i = (l, d) => a.forEach(l, (c, u) => o(c, u, d));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !Rn(t))
      i(Sn(t), n);
    else if (a.isObject(t) && a.isIterable(t)) {
      let l = {}, d, c;
      for (const u of t) {
        if (!a.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        l[c = u[0]] = (d = l[c]) ? a.isArray(d) ? [...d, u[1]] : [d, u[1]] : u[1];
      }
      i(l, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = J(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return _n(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = J(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || pe(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = J(i), i) {
        const l = a.findKey(r, i);
        l && (!n || pe(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || pe(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = re(s), delete n[o];
        return;
      }
      const l = t ? An(o) : String(o).trim();
      l !== o && delete n[o], n[l] = re(s), r[l] = !0;
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
    const r = (this[ve] = this[ve] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = J(i);
      r[l] || (Tn(s, i), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
N.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(N.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(N);
function me(e, t) {
  const n = this || Z, r = t || n, s = N.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function st(e) {
  return !!(e && e.__CANCEL__);
}
function z(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(z, y, {
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
function On(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Cn(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(d) {
    const c = Date.now(), u = r[o];
    i || (i = c), n[s] = d, r[s] = c;
    let f = o, w = 0;
    for (; f !== s; )
      w += n[f++], f = f % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - i < t)
      return;
    const R = u && c - u;
    return R ? Math.round(w * 1e3 / R) : void 0;
  };
}
function xn(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (c, u = Date.now()) => {
    n = u, s = null, o && (clearTimeout(o), o = null), e(...c);
  };
  return [(...c) => {
    const u = Date.now(), f = u - n;
    f >= r ? i(c, u) : (s = c, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - f)));
  }, () => s && i(s)];
}
const oe = (e, t, n = 3) => {
  let r = 0;
  const s = Cn(50, 250);
  return xn((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, d = i - r, c = s(d), u = i <= l;
    r = i;
    const f = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: d,
      rate: c || void 0,
      estimated: c && l && u ? (l - i) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Pe = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Ie = (e) => (...t) => a.asap(() => e(...t)), Ln = C.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, C.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(C.origin),
  C.navigator && /(msie|trident)/i.test(C.navigator.userAgent)
) : () => !0, Nn = C.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function kn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Fn(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function it(e, t, n) {
  let r = !kn(t);
  return e && (r || n == !1) ? Fn(e, t) : t;
}
const De = (e) => e instanceof N ? { ...e } : e;
function $(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, f, w) {
    return a.isPlainObject(c) && a.isPlainObject(u) ? a.merge.call({ caseless: w }, c, u) : a.isPlainObject(u) ? a.merge({}, u) : a.isArray(u) ? u.slice() : u;
  }
  function s(c, u, f, w) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return r(void 0, c, f, w);
    } else return r(c, u, f, w);
  }
  function o(c, u) {
    if (!a.isUndefined(u))
      return r(void 0, u);
  }
  function i(c, u) {
    if (a.isUndefined(u)) {
      if (!a.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, f) {
    if (f in t)
      return r(c, u);
    if (f in e)
      return r(void 0, c);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (c, u, f) => s(De(c), De(u), f, !0)
  };
  return a.forEach(Object.keys({ ...e, ...t }), function(u) {
    const f = d[u] || s, w = f(e[u], t[u], u);
    a.isUndefined(w) && f !== l || (n[u] = w);
  }), n;
}
const at = (e) => {
  const t = $({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = N.from(i), t.url = tt(it(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let d;
  if (a.isFormData(n)) {
    if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((d = i.getContentType()) !== !1) {
      const [c, ...u] = d ? d.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (C.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Ln(t.url))) {
    const c = s && o && Nn.read(o);
    c && i.set(s, c);
  }
  return t;
}, Un = typeof XMLHttpRequest < "u", vn = Un && function(e) {
  return new Promise(function(n, r) {
    const s = at(e);
    let o = s.data;
    const i = N.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: d, onDownloadProgress: c } = s, u, f, w, R, h;
    function b() {
      R && R(), h && h(), s.cancelToken && s.cancelToken.unsubscribe(u), s.signal && s.signal.removeEventListener("abort", u);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function _() {
      if (!p)
        return;
      const O = N.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), x = {
        data: !l || l === "text" || l === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: O,
        config: e,
        request: p
      };
      ot(function(D) {
        n(D), b();
      }, function(D) {
        r(D), b();
      }, x), p = null;
    }
    "onloadend" in p ? p.onloadend = _ : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, p.onabort = function() {
      p && (r(new y("Request aborted", y.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new y("Network Error", y.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let U = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const x = s.transitional || nt;
      s.timeoutErrorMessage && (U = s.timeoutErrorMessage), r(new y(
        U,
        x.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        p
      )), p = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in p && a.forEach(i.toJSON(), function(U, x) {
      p.setRequestHeader(x, U);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), l && l !== "json" && (p.responseType = s.responseType), c && ([w, h] = oe(c, !0), p.addEventListener("progress", w)), d && p.upload && ([f, R] = oe(d), p.upload.addEventListener("progress", f), p.upload.addEventListener("loadend", R)), (s.cancelToken || s.signal) && (u = (O) => {
      p && (r(!O || O.type ? new z(null, e, p) : O), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(u), s.signal && (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
    const A = On(s.url);
    if (A && C.protocols.indexOf(A) === -1) {
      r(new y("Unsupported protocol " + A + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(o || null);
  });
}, Pn = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(c) {
      if (!s) {
        s = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof y ? u : new z(u instanceof Error ? u.message : u));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: d } = r;
    return d.unsubscribe = () => a.asap(l), d;
  }
}, In = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Dn = async function* (e, t) {
  for await (const n of Bn(e))
    yield* In(n, t);
}, Bn = async function* (e) {
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
}, Be = (e, t, n, r) => {
  const s = Dn(e, t);
  let o = 0, i, l = (d) => {
    i || (i = !0, r && r(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: c, value: u } = await s.next();
        if (c) {
          l(), d.close();
          return;
        }
        let f = u.byteLength;
        if (n) {
          let w = o += f;
          n(w);
        }
        d.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(d) {
      return l(d), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, fe = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", lt = fe && typeof ReadableStream == "function", qn = fe && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ct = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Mn = lt && ct(() => {
  let e = !1;
  const t = new Request(C.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), qe = 64 * 1024, _e = lt && ct(() => a.isReadableStream(new Response("").body)), ie = {
  stream: _e && ((e) => e.body)
};
fe && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ie[t] && (ie[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
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
    return (await qn(e)).byteLength;
}, jn = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? $n(t);
}, Hn = fe && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: d,
    responseType: c,
    headers: u,
    withCredentials: f = "same-origin",
    fetchOptions: w
  } = at(e);
  c = c ? (c + "").toLowerCase() : "text";
  let R = Pn([s, o && o.toAbortSignal()], i), h;
  const b = R && R.unsubscribe && (() => {
    R.unsubscribe();
  });
  let p;
  try {
    if (d && Mn && n !== "get" && n !== "head" && (p = await jn(u, r)) !== 0) {
      let x = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), v;
      if (a.isFormData(r) && (v = x.headers.get("content-type")) && u.setContentType(v), x.body) {
        const [D, te] = Pe(
          p,
          oe(Ie(d))
        );
        r = Be(x.body, qe, D, te);
      }
    }
    a.isString(f) || (f = f ? "include" : "omit");
    const _ = "credentials" in Request.prototype;
    h = new Request(t, {
      ...w,
      signal: R,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: _ ? f : void 0
    });
    let A = await fetch(h, w);
    const O = _e && (c === "stream" || c === "response");
    if (_e && (l || O && b)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((Le) => {
        x[Le] = A[Le];
      });
      const v = a.toFiniteNumber(A.headers.get("content-length")), [D, te] = l && Pe(
        v,
        oe(Ie(l), !0)
      ) || [];
      A = new Response(
        Be(A.body, qe, D, () => {
          te && te(), b && b();
        }),
        x
      );
    }
    c = c || "text";
    let U = await ie[a.findKey(ie, c) || "text"](A, e);
    return !O && b && b(), await new Promise((x, v) => {
      ot(x, v, {
        data: U,
        headers: N.from(A.headers),
        status: A.status,
        statusText: A.statusText,
        config: e,
        request: h
      });
    });
  } catch (_) {
    throw b && b(), _ && _.name === "TypeError" && /Load failed|fetch/i.test(_.message) ? Object.assign(
      new y("Network Error", y.ERR_NETWORK, e, h),
      {
        cause: _.cause || _
      }
    ) : y.from(_, _ && _.code, e, h);
  }
}), Re = {
  http: rn,
  xhr: vn,
  fetch: Hn
};
a.forEach(Re, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Me = (e) => `- ${e}`, Vn = (e) => a.isFunction(e) || e === null || e === !1, ut = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Vn(n) && (r = Re[(i = String(n)).toLowerCase()], r === void 0))
        throw new y(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, d]) => `adapter ${l} ` + (d === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Me).join(`
`) : " " + Me(o[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Re
};
function ye(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new z(null, e);
}
function $e(e) {
  return ye(e), e.headers = N.from(e.headers), e.data = me.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ut.getAdapter(e.adapter || Z.adapter)(e).then(function(r) {
    return ye(e), r.data = me.call(
      e,
      e.transformResponse,
      r
    ), r.headers = N.from(r.headers), r;
  }, function(r) {
    return st(r) || (ye(e), r && r.response && (r.response.data = me.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = N.from(r.response.headers))), Promise.reject(r);
  });
}
const dt = "1.11.0", he = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  he[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const je = {};
he.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + dt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !je[i] && (je[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
he.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function zn(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], d = l === void 0 || i(l, o, e);
      if (d !== !0)
        throw new y("option " + o + " must be " + d, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const se = {
  assertOptions: zn,
  validators: he
}, F = se.validators;
let M = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ue(),
      response: new Ue()
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
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = $(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && se.assertOptions(r, {
      silentJSONParsing: F.transitional(F.boolean),
      forcedJSONParsing: F.transitional(F.boolean),
      clarifyTimeoutError: F.transitional(F.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : se.assertOptions(s, {
      encode: F.function,
      serialize: F.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), se.assertOptions(n, {
      baseUrl: F.spelling("baseURL"),
      withXsrfToken: F.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete o[h];
      }
    ), n.headers = N.concat(i, o);
    const l = [];
    let d = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(n) === !1 || (d = d && b.synchronous, l.unshift(b.fulfilled, b.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(b) {
      c.push(b.fulfilled, b.rejected);
    });
    let u, f = 0, w;
    if (!d) {
      const h = [$e.bind(this), void 0];
      for (h.unshift(...l), h.push(...c), w = h.length, u = Promise.resolve(n); f < w; )
        u = u.then(h[f++], h[f++]);
      return u;
    }
    w = l.length;
    let R = n;
    for (f = 0; f < w; ) {
      const h = l[f++], b = l[f++];
      try {
        R = h(R);
      } catch (p) {
        b.call(this, p);
        break;
      }
    }
    try {
      u = $e.call(this, R);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, w = c.length; f < w; )
      u = u.then(c[f++], c[f++]);
    return u;
  }
  getUri(t) {
    t = $(this.defaults, t);
    const n = it(t.baseURL, t.url, t.allowAbsoluteUrls);
    return tt(n, t.params, t.paramsSerializer);
  }
};
a.forEach(["delete", "get", "head", "options"], function(t) {
  M.prototype[t] = function(n, r) {
    return this.request($(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request($(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  M.prototype[t] = n(), M.prototype[t + "Form"] = n(!0);
});
let Jn = class ft {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new z(o, i, l), n(r.reason));
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
function Gn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Wn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Ae = {
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
Object.entries(Ae).forEach(([e, t]) => {
  Ae[t] = e;
});
function ht(e) {
  const t = new M(e), n = He(M.prototype.request, t);
  return a.extend(n, M.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return ht($(e, s));
  }, n;
}
const S = ht(Z);
S.Axios = M;
S.CanceledError = z;
S.CancelToken = Jn;
S.isCancel = st;
S.VERSION = dt;
S.toFormData = de;
S.AxiosError = y;
S.Cancel = S.CanceledError;
S.all = function(t) {
  return Promise.all(t);
};
S.spread = Gn;
S.isAxiosError = Wn;
S.mergeConfig = $;
S.AxiosHeaders = N;
S.formToJSON = (e) => rt(a.isHTMLForm(e) ? new FormData(e) : e);
S.getAdapter = ut.getAdapter;
S.HttpStatusCode = Ae;
S.default = S;
const {
  Axios: ts,
  AxiosError: ns,
  CanceledError: rs,
  isCancel: ss,
  CancelToken: os,
  VERSION: is,
  all: as,
  Cancel: ls,
  isAxiosError: cs,
  spread: us,
  toFormData: ds,
  AxiosHeaders: fs,
  HttpStatusCode: hs,
  formToJSON: ps,
  getAdapter: ms,
  mergeConfig: ys
} = S, Kn = "https://api.checklist.dev.grava.io/api", ae = S.create({
  baseURL: Kn
});
function Qn(e) {
  e ? ae.defaults.headers.common.Authorization = `Bearer ${e}` : delete ae.defaults.headers.common.Authorization;
}
const pt = {
  getForms(e) {
    return ae.get("/forms", { params: e }).then((t) => t.data);
  },
  getFormById(e) {
    return ae.get(`/forms/${e}`).then((t) => t.data);
  }
}, Xn = "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M256%200C114.6%200%200%20114.6%200%20256C0%20397.4%20114.6%20512%20256%20512C397.4%20512%20512%20397.4%20512%20256C512%20114.6%20397.4%200%20256%200ZM352%20280H280V352C280%20365.2%20269.2%20376%20256.9%20376C242.8%20376%20232%20365.2%20232%20352V280H160C146.8%20280%20136%20269.2%20136%20256C136%20242.8%20146.8%20232%20160%20232H232V160C232%20146.8%20242.8%20136%20256%20136C269.2%20136%20280%20146.8%20280%20160V232H352C365.2%20232%20376%20242.8%20376%20256C376%20269.2%20365.2%20280%20352%20280Z'%20fill='black'/%3e%3c/svg%3e", ee = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Yn = {
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
}, Zn = { class: "form-selector-card" }, er = { class: "form-title" }, tr = { class: "form-label" }, nr = {
  value: "",
  disabled: ""
}, rr = ["value"], sr = { class: "btn-add-container" };
function or(e, t, n, r, s, o) {
  return g(), E("div", Zn, [
    m("h3", er, T(e.translateTerm("SELECT_FORM_TITLE")), 1),
    m("label", tr, T(e.translateTerm("SELECT_FORM_LABEL")), 1),
    j(m("select", {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => s.selectedId = i),
      class: "form-select"
    }, [
      m("option", nr, T(e.translateTerm("SELECT_FORM_OPTION_PLACEHOLDER")), 1),
      (g(!0), E(P, null, I(s.forms, (i) => (g(), E("option", {
        key: i.id,
        value: i.id
      }, T(i.name), 9, rr))), 128))
    ], 512), [
      [yt, s.selectedId]
    ]),
    m("div", sr, [
      m("button", {
        class: "btn-add",
        onClick: t[1] || (t[1] = (...i) => o.emitSelected && o.emitSelected(...i))
      }, [
        t[2] || (t[2] = m("img", {
          src: Xn,
          alt: "plus"
        }, null, -1)),
        be(" " + T(e.translateTerm("GENERAL_ADD")), 1)
      ])
    ])
  ]);
}
const ir = /* @__PURE__ */ ee(Yn, [["render", or], ["__scopeId", "data-v-6a3747fb"]]), G = {
  initialize() {
    return S.get("/config.json").then((e) => {
      localStorage.setItem("config", JSON.stringify(e.data)), localStorage.getItem("DICTIONARY_LANGUAGE") === null && localStorage.setItem("DICTIONARY_LANGUAGE", e.data.DEFAULT_LANGUAGE);
    }).catch((e) => {
      console.error("initialize configurations error", e);
    });
  },
  getConfiguration(e) {
    const t = localStorage.getItem("config");
    return JSON.parse(t)[e];
  }
}, mt = {
  limitCharactersShort: G.getConfiguration("LIMIT_CHARACTERS_SHORT"),
  limitCharactersMedium: G.getConfiguration("LIMIT_CHARACTERS_MEDIUM"),
  limitCharactersComment: G.getConfiguration("LIMIT_CHARACTERS_COMMENT"),
  limitCharactersLarge: G.getConfiguration("LIMIT_CHARACTERS_LARGE"),
  limitCharactersTextExpanded: G.getConfiguration("LIMIT_CHARACTERS_TEXTEXPANDED"),
  formatDate(e, t) {
    let n = new Date(e);
    n = new Date(n.getTime() + n.getTimezoneOffset() * 6e4);
    let r = n.getDate();
    r < 10 && (r = `0${r}`);
    let s = n.getMonth() + 1;
    return s < 10 && (s = `0${s}`), `${r}/${s}/${n.getFullYear()}`;
  },
  lengthTextIsValid(e, t) {
    return e.length <= t;
  },
  getCurrentUrl() {
    return window.location.href;
  },
  validateRegex(e, t) {
    const n = e.replace(/^\/|\/$/g, "");
    return new RegExp(n).test(t);
  }
}, ar = {
  name: "SelectQuestionsMultipleOption",
  props: {
    titleLabel: {
      type: String
    },
    options: {
      type: Array
    },
    inputId: Number,
    answers: {
      type: Array
    },
    inputRequired: {
      type: Boolean
    }
  },
  data() {
    return {
      lang: localStorage.getItem("DICTIONARY_LANGUAGE"),
      value: "",
      utils: mt
    };
  },
  watch: {
    value(e) {
      (!this.answers || this.answers.length === 0) && this.$emit("inputObservation", e, "", this.inputId, "OM"), this.answers.forEach((t) => {
        this.$emit(
          "inputObservation",
          e,
          t.value,
          this.inputId,
          "OM"
        );
      });
    }
  },
  mounted() {
    this.value = "", this.answers && this.answers.forEach((e) => {
      this.value = e.observation, this.$emit("inputSelectSelected", e.value, this.inputId);
    });
  },
  methods: {
    checkedValue(e) {
      this.$emit("inputSelectSelected", e.value, this.inputId);
    },
    validateIfChecked(e) {
      return this.answers ? !!this.answers.find(
        (n) => n.value === e.value
      ) : !1;
    }
  }
}, lr = { class: "select-questions-multiple-option" }, cr = { class: "title-question" }, ur = { class: "container-checkbox" }, dr = { class: "checkbox-items-container" }, fr = ["for"], hr = ["id", "checked", "onChange"], pr = { class: "inputQuestionItem" }, mr = { class: "limit-characters multiple-questions" };
function yr(e, t, n, r, s, o) {
  const i = H("translate");
  return g(), E("div", lr, [
    m("h4", cr, T(`${n.titleLabel} ${n.inputRequired ? "*" : ""}`), 1),
    m("div", ur, [
      m("div", dr, [
        (g(!0), E(P, null, I(n.options, (l) => (g(), E("div", {
          class: "checkbox-item",
          key: l
        }, [
          m("label", {
            for: "option-" + l.id
          }, T(l.key), 9, fr),
          m("input", {
            id: "option-" + l.id,
            type: "checkbox",
            checked: o.validateIfChecked(l),
            onChange: (d) => o.checkedValue(l)
          }, null, 40, hr)
        ]))), 128))
      ]),
      m("div", pr, [
        m("label", null, [
          Te(i, {
            lang: s.lang,
            code: "LABEL_OBSERVATION"
          }, null, 8, ["lang"])
        ]),
        j(m("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (l) => s.value = l),
          type: "text",
          maxlength: 100,
          class: "input-characters-large"
        }, null, 512), [
          [W, s.value]
        ]),
        m("span", mr, T(s.value ? s.value.length : 0) + " / 100 ", 1)
      ])
    ])
  ]);
}
const br = /* @__PURE__ */ ee(ar, [["render", yr]]), wr = {
  name: "SelectQuestionsUnique",
  props: {
    titleLabel: {
      type: String
    },
    options: {
      type: Array
    },
    inputId: Number,
    answer: {
      type: Object
    },
    iche2b: {
      type: Object,
      default: null
    },
    inputRequired: {
      type: Boolean
    }
  },
  data() {
    return {
      lang: localStorage.getItem("DICTIONARY_LANGUAGE"),
      utils: mt,
      value: ""
    };
  },
  watch: {
    value(e) {
      this.$emit(
        "inputObservation",
        e,
        this.answer.value,
        this.inputId,
        "OU"
      );
    }
  },
  mounted() {
    this.value = this.answer ? this.answer.observation : "";
  },
  methods: {
    checkedValue(e) {
      this.$emit("inputSelectSelected", e.value, this.inputId);
    },
    validateIfChecked(e) {
      return this.answer ? e.value === this.answer.value : !1;
    }
  }
}, gr = { class: "select-questions-unique-option" }, Er = { class: "title-question" }, Sr = { class: "container-checkbox" }, _r = { class: "checkbox-items-container" }, Rr = ["id", "name", "checked", "onChange"], Ar = ["for"], Tr = { class: "inputQuestionItem" }, Or = { class: "limit-characters multiple-questions" };
function Cr(e, t, n, r, s, o) {
  const i = H("translate");
  return g(), E("div", gr, [
    m("h4", Er, T(`${n.titleLabel} ${n.inputRequired ? "*" : ""}`), 1),
    m("div", Sr, [
      m("div", _r, [
        (g(!0), E(P, null, I(n.options, (l) => (g(), E("div", {
          class: bt(n.options.length > 3 ? "flex-25" : "flex-33"),
          key: l.id
        }, [
          m("input", {
            id: "option-" + l.id,
            type: "radio",
            name: "option-" + n.inputId,
            checked: o.validateIfChecked(l),
            onChange: (d) => o.checkedValue(l)
          }, null, 40, Rr),
          m("label", {
            for: "option-" + l.id
          }, T(n.iche2b ? `${l.key} - ${l.value}` : `${l.key}`), 9, Ar)
        ], 2))), 128))
      ]),
      m("div", Tr, [
        m("label", null, [
          Te(i, {
            lang: s.lang,
            code: "LABEL_OBSERVATION"
          }, null, 8, ["lang"])
        ]),
        j(m("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (l) => s.value = l),
          type: "text",
          maxlength: 100,
          class: "input-characters-large"
        }, null, 512), [
          [W, s.value]
        ]),
        m("span", Or, T(s.value ? s.value.length : 0) + " / 100 ", 1)
      ])
    ])
  ]);
}
const xr = /* @__PURE__ */ ee(wr, [["render", Cr]]), Lr = "data:image/svg+xml,%3csvg%20width='576'%20height='385'%20viewBox='0%200%20576%20385'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M512%200.0146484H205.3C188.3%200.0146484%20172%206.76465%20160%2018.7646L9.375%20169.415C-3.125%20181.915%20-3.125%20202.165%209.375%20214.665L160%20365.315C172%20377.315%20188.3%20384.015%20205.3%20384.015H512C547.38%20384.015%20576%20355.395%20576%20320.015V64.0146C576%2028.6446%20547.4%200.0146484%20512%200.0146484ZM432.1%20239.015C441.475%20248.39%20441.475%20263.575%20432.1%20272.955C422.719%20282.336%20407.54%20282.328%20398.16%20272.955L352%20225.915L304.97%20272.945C295.589%20282.326%20280.41%20282.318%20271.03%20272.945C261.655%20263.57%20261.655%20248.385%20271.03%20239.005L318.06%20191.975L271%20144.115C261.625%20134.74%20261.625%20119.555%20271%20110.175C280.375%20100.795%20295.56%20100.8%20304.94%20110.175L352%20158.115L399.03%20111.085C408.405%20101.71%20423.59%20101.71%20432.97%20111.085C442.35%20120.46%20442.345%20135.645%20432.97%20145.025L385.94%20192.055L432.1%20239.015Z'%20fill='%23C14953'/%3e%3c/svg%3e", Nr = {
  name: "FormRenderer",
  components: {
    SelectQuestionsMultipleOption: br,
    SelectQuestionsUnique: xr
  },
  props: {
    formData: { type: Object, required: !0 }
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
              const s = Number(n.tableRows || 0), o = Number(n.tableColumns || 0);
              for (let i = 1; i <= s; i++)
                for (let l = 1; l <= o; l++)
                  this.tableAnswers[n.id][`${i}-${l}`] = "";
            } else
              this.answers[n.id] = "";
          });
        });
      }
    }
  }
}, kr = { class: "form-card" }, Fr = { class: "form-header" }, Ur = { class: "form-title" }, vr = { class: "form-subtitle" }, Pr = { class: "section-title" }, Ir = { key: 0 }, Dr = { key: 0 }, Br = ["onUpdate:modelValue"], qr = {
  key: 2,
  class: "table-wrapper"
}, Mr = { class: "input-table" }, $r = ["onUpdate:modelValue"], jr = {
  key: 3,
  class: "textarea-wrapper"
}, Hr = { key: 0 }, Vr = ["onUpdate:modelValue"], zr = { class: "btn-save-wrapper" }, Jr = { class: "btn-save" };
function Gr(e, t, n, r, s, o) {
  const i = H("SelectQuestionsUnique"), l = H("SelectQuestionsMultipleOption");
  return g(), E("div", kr, [
    m("div", Fr, [
      m("h3", Ur, T(n.formData.name), 1),
      m("button", {
        class: "h5-img",
        onClick: t[0] || (t[0] = (d) => e.$emit("remove-form", n.formData.id))
      }, [
        t[1] || (t[1] = m("img", {
          src: Lr,
          alt: "delete"
        }, null, -1)),
        m("h5", null, T(e.translateTerm("GENERAL_DELETE_PREFILL_FORM")), 1)
      ])
    ]),
    m("p", vr, T(e.translateTerm("GENERAL_PREFILL_FORM")), 1),
    (g(!0), E(P, null, I(o.orderedSections, (d) => (g(), E("div", {
      key: d.id,
      class: "form-section"
    }, [
      m("h4", Pr, T(d.name), 1),
      (g(!0), E(P, null, I(o.orderedInputs(d.inputs), (c) => (g(), E("div", {
        key: c.id,
        class: "form-item"
      }, [
        c.value === "TL" ? (g(), E("div", Ir, [
          m("label", null, [
            be(T(c.key) + " ", 1),
            c.required ? (g(), E("span", Dr, "*")) : B("", !0)
          ]),
          j(m("input", {
            "onUpdate:modelValue": (u) => s.answers[c.id] = u,
            class: "input-text",
            type: "text"
          }, null, 8, Br), [
            [W, s.answers[c.id]]
          ])
        ])) : B("", !0),
        c.value === "OU" ? (g(), we(i, {
          key: 1,
          options: c.options,
          "title-label": c.key,
          "input-id": c.id,
          "input-required": c.required,
          answers: s.answers[c.id],
          "onUpdate:answers": (u) => s.answers[c.id] = u,
          class: "select-questions-unique-option"
        }, null, 8, ["options", "title-label", "input-id", "input-required", "answers", "onUpdate:answers"])) : B("", !0),
        c.value === "table" ? (g(), E("div", qr, [
          m("label", null, T(c.key), 1),
          m("table", Mr, [
            m("tbody", null, [
              (g(!0), E(P, null, I(c.tableRows, (u) => (g(), E("tr", { key: u }, [
                (g(!0), E(P, null, I(c.tableColumns, (f) => (g(), E("td", { key: f }, [
                  j(m("input", {
                    type: "text",
                    class: "input-cell",
                    "onUpdate:modelValue": (w) => s.tableAnswers[c.id][`${u}-${f}`] = w
                  }, null, 8, $r), [
                    [W, s.tableAnswers[c.id][`${u}-${f}`]]
                  ])
                ]))), 128))
              ]))), 128))
            ])
          ])
        ])) : B("", !0),
        c.value === "TE" ? (g(), E("div", jr, [
          m("label", null, [
            be(T(c.key) + " ", 1),
            c.required ? (g(), E("span", Hr, "*")) : B("", !0)
          ]),
          j(m("textarea", {
            "onUpdate:modelValue": (u) => s.answers[c.id] = u,
            class: "textarea"
          }, null, 8, Vr), [
            [W, s.answers[c.id]]
          ])
        ])) : B("", !0),
        c.value === "OM" ? (g(), we(l, {
          key: 4,
          options: c.options,
          "title-label": c.key,
          "input-id": c.id,
          "input-required": c.required,
          answers: s.answers[c.id],
          "onUpdate:answers": (u) => s.answers[c.id] = u,
          class: "select-questions-multiple-option"
        }, null, 8, ["options", "title-label", "input-id", "input-required", "answers", "onUpdate:answers"])) : B("", !0)
      ]))), 128))
    ]))), 128)),
    m("div", zr, [
      m("button", Jr, T(e.translateTerm("GENERAL_SAVE")), 1)
    ])
  ]);
}
const Wr = /* @__PURE__ */ ee(Nr, [["render", Gr], ["__scopeId", "data-v-530b3596"]]), Kr = {
  name: "VfChecklist",
  components: { FormSelect: ir, FormRenderer: Wr },
  props: {
    moduleCode: { type: String, required: !0 },
    externalObjectId: { type: String, required: !0 },
    mode: { type: String, default: "edit" },
    userToken: { type: String, required: !0 }
  },
  data() {
    return {
      lang: localStorage.getItem("DICTIONARY_LANGUAGE") || "es",
      forms: []
    };
  },
  mounted() {
    Qn(this.userToken);
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
function Xr(e, t, n, r, s, o) {
  const i = H("FormSelect"), l = H("FormRenderer");
  return g(), E("div", Qr, [
    Te(i, {
      typeForm: n.moduleCode,
      lang: s.lang,
      onFormSelected: o.loadForm
    }, null, 8, ["typeForm", "lang", "onFormSelected"]),
    (g(!0), E(P, null, I(s.forms, (d) => (g(), we(l, {
      key: d.id,
      "form-data": d,
      onRemoveForm: o.removeForm
    }, null, 8, ["form-data", "onRemoveForm"]))), 128))
  ]);
}
const bs = /* @__PURE__ */ ee(Kr, [["render", Xr], ["__scopeId", "data-v-11389f74"]]);
export {
  bs as default
};
