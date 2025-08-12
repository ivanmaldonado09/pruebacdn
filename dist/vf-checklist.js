function _n(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ar } = Object.prototype, { getPrototypeOf: kt } = Object, { iterator: rt, toStringTag: yn } = Symbol, st = /* @__PURE__ */ ((e) => (t) => {
  const n = Ar.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), B = (e) => (e = e.toLowerCase(), (t) => st(t) === e), ot = (e) => (t) => typeof t === e, { isArray: ge } = Array, Re = ot("undefined");
function Ce(e) {
  return e !== null && !Re(e) && e.constructor !== null && !Re(e.constructor) && L(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const wn = B("ArrayBuffer");
function Nr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && wn(e.buffer), t;
}
const xr = ot("string"), L = ot("function"), bn = ot("number"), Ae = (e) => e !== null && typeof e == "object", Ir = (e) => e === !0 || e === !1, ve = (e) => {
  if (st(e) !== "object")
    return !1;
  const t = kt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(yn in e) && !(rt in e);
}, Fr = (e) => {
  if (!Ae(e) || Ce(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Dr = B("Date"), Pr = B("File"), Lr = B("Blob"), kr = B("FileList"), vr = (e) => Ae(e) && L(e.pipe), Ur = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || L(e.append) && ((t = st(e)) === "formdata" || // detect form-data instance
  t === "object" && L(e.toString) && e.toString() === "[object FormData]"));
}, $r = B("URLSearchParams"), [Vr, Mr, Br, jr] = ["ReadableStream", "Request", "Response", "Headers"].map(B), qr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ne(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), ge(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    if (Ce(e))
      return;
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let a;
    for (r = 0; r < i; r++)
      a = o[r], t.call(null, e[a], a, e);
  }
}
function En(e, t) {
  if (Ce(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const se = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Sn = (e) => !Re(e) && e !== se;
function Ot() {
  const { caseless: e } = Sn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && En(t, s) || s;
    ve(t[o]) && ve(r) ? t[o] = Ot(t[o], r) : ve(r) ? t[o] = Ot({}, r) : ge(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Ne(arguments[r], n);
  return t;
}
const Hr = (e, t, n, { allOwnKeys: r } = {}) => (Ne(t, (s, o) => {
  n && L(s) ? e[o] = _n(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), zr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Kr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Jr = (e, t, n, r) => {
  let s, o, i;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !a[i] && (t[i] = e[i], a[i] = !0);
    e = n !== !1 && kt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Wr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Gr = (e) => {
  if (!e) return null;
  if (ge(e)) return e;
  let t = e.length;
  if (!bn(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Yr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && kt(Uint8Array)), Qr = (e, t) => {
  const r = (e && e[rt]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Xr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Zr = B("HTMLFormElement"), es = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Kt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ts = B("RegExp"), Rn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ne(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, ns = (e) => {
  Rn(e, (t, n) => {
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
}, rs = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return ge(e) ? r(e) : r(String(e).split(t)), n;
}, ss = () => {
}, os = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function is(e) {
  return !!(e && L(e.append) && e[yn] === "FormData" && e[rt]);
}
const as = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Ae(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (Ce(r))
        return r;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = ge(r) ? [] : {};
        return Ne(r, (i, a) => {
          const c = n(i, s + 1);
          !Re(c) && (o[a] = c);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, cs = B("AsyncFunction"), ls = (e) => e && (Ae(e) || L(e)) && L(e.then) && L(e.catch), On = ((e, t) => e ? setImmediate : t ? ((n, r) => (se.addEventListener("message", ({ source: s, data: o }) => {
  s === se && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), se.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  L(se.postMessage)
), us = typeof queueMicrotask < "u" ? queueMicrotask.bind(se) : typeof process < "u" && process.nextTick || On, fs = (e) => e != null && L(e[rt]), u = {
  isArray: ge,
  isArrayBuffer: wn,
  isBuffer: Ce,
  isFormData: Ur,
  isArrayBufferView: Nr,
  isString: xr,
  isNumber: bn,
  isBoolean: Ir,
  isObject: Ae,
  isPlainObject: ve,
  isEmptyObject: Fr,
  isReadableStream: Vr,
  isRequest: Mr,
  isResponse: Br,
  isHeaders: jr,
  isUndefined: Re,
  isDate: Dr,
  isFile: Pr,
  isBlob: Lr,
  isRegExp: ts,
  isFunction: L,
  isStream: vr,
  isURLSearchParams: $r,
  isTypedArray: Yr,
  isFileList: kr,
  forEach: Ne,
  merge: Ot,
  extend: Hr,
  trim: qr,
  stripBOM: zr,
  inherits: Kr,
  toFlatObject: Jr,
  kindOf: st,
  kindOfTest: B,
  endsWith: Wr,
  toArray: Gr,
  forEachEntry: Qr,
  matchAll: Xr,
  isHTMLForm: Zr,
  hasOwnProperty: Kt,
  hasOwnProp: Kt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Rn,
  freezeMethods: ns,
  toObjectSet: rs,
  toCamelCase: es,
  noop: ss,
  toFiniteNumber: os,
  findKey: En,
  global: se,
  isContextDefined: Sn,
  isSpecCompliantForm: is,
  toJSONObject: as,
  isAsyncFn: cs,
  isThenable: ls,
  setImmediate: On,
  asap: us,
  isIterable: fs
};
function y(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
u.inherits(y, Error, {
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
      config: u.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Tn = y.prototype, Cn = {};
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
  Cn[e] = { value: e };
});
Object.defineProperties(y, Cn);
Object.defineProperty(Tn, "isAxiosError", { value: !0 });
y.from = (e, t, n, r, s, o) => {
  const i = Object.create(Tn);
  return u.toFlatObject(e, i, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), y.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const ds = null;
function Tt(e) {
  return u.isPlainObject(e) || u.isArray(e);
}
function An(e) {
  return u.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Jt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = An(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ps(e) {
  return u.isArray(e) && !e.some(Tt);
}
const hs = u.toFlatObject(u, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function it(e, t, n) {
  if (!u.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = u.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !u.isUndefined(m[g]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(t);
  if (!u.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (u.isDate(p))
      return p.toISOString();
    if (u.isBoolean(p))
      return p.toString();
    if (!c && u.isBlob(p))
      throw new y("Blob is not supported. Use a Buffer instead.");
    return u.isArrayBuffer(p) || u.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function d(p, g, m) {
    let T = p;
    if (p && !m && typeof p == "object") {
      if (u.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), p = JSON.stringify(p);
      else if (u.isArray(p) && ps(p) || (u.isFileList(p) || u.endsWith(g, "[]")) && (T = u.toArray(p)))
        return g = An(g), T.forEach(function(x, z) {
          !(u.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Jt([g], z, o) : i === null ? g : g + "[]",
            l(x)
          );
        }), !1;
    }
    return Tt(p) ? !0 : (t.append(Jt(m, g, o), l(p)), !1);
  }
  const f = [], h = Object.assign(hs, {
    defaultVisitor: d,
    convertValue: l,
    isVisitable: Tt
  });
  function b(p, g) {
    if (!u.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(p), u.forEach(p, function(T, N) {
        (!(u.isUndefined(T) || T === null) && s.call(
          t,
          T,
          u.isString(N) ? N.trim() : N,
          g,
          h
        )) === !0 && b(T, g ? g.concat(N) : [N]);
      }), f.pop();
    }
  }
  if (!u.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Wt(e) {
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
function vt(e, t) {
  this._pairs = [], e && it(e, this, t);
}
const Nn = vt.prototype;
Nn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Nn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Wt);
  } : Wt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ms(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ms;
  u.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = u.isURLSearchParams(t) ? t.toString() : new vt(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Gt {
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
    u.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const In = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gs = typeof URLSearchParams < "u" ? URLSearchParams : vt, _s = typeof FormData < "u" ? FormData : null, ys = typeof Blob < "u" ? Blob : null, ws = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gs,
    FormData: _s,
    Blob: ys
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ut = typeof window < "u" && typeof document < "u", Ct = typeof navigator == "object" && navigator || void 0, bs = Ut && (!Ct || ["ReactNative", "NativeScript", "NS"].indexOf(Ct.product) < 0), Es = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ss = Ut && window.location.href || "http://localhost", Rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ut,
  hasStandardBrowserEnv: bs,
  hasStandardBrowserWebWorkerEnv: Es,
  navigator: Ct,
  origin: Ss
}, Symbol.toStringTag, { value: "Module" })), I = {
  ...Rs,
  ...ws
};
function Os(e, t) {
  return it(e, new I.classes.URLSearchParams(), {
    visitor: function(n, r, s, o) {
      return I.isNode && u.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function Ts(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Cs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Fn(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const a = Number.isFinite(+i), c = o >= n.length;
    return i = !i && u.isArray(s) ? s.length : i, c ? (u.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !a) : ((!s[i] || !u.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && u.isArray(s[i]) && (s[i] = Cs(s[i])), !a);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const n = {};
    return u.forEachEntry(e, (r, s) => {
      t(Ts(r), s, n, 0);
    }), n;
  }
  return null;
}
function As(e, t, n) {
  if (u.isString(e))
    try {
      return (t || JSON.parse)(e), u.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const xe = {
  transitional: In,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = u.isObject(t);
    if (o && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t))
      return s ? JSON.stringify(Fn(t)) : t;
    if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t) || u.isReadableStream(t))
      return t;
    if (u.isArrayBufferView(t))
      return t.buffer;
    if (u.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Os(t, this.formSerializer).toString();
      if ((a = u.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return it(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), As(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || xe.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (u.isResponse(t) || u.isReadableStream(t))
      return t;
    if (t && u.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (i)
          throw a.name === "SyntaxError" ? y.from(a, y.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
    FormData: I.classes.FormData,
    Blob: I.classes.Blob
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
u.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  xe.headers[e] = {};
});
const Ns = u.toObjectSet([
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
]), xs = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Ns[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Yt = Symbol("internals");
function we(e) {
  return e && String(e).trim().toLowerCase();
}
function Ue(e) {
  return e === !1 || e == null ? e : u.isArray(e) ? e.map(Ue) : String(e);
}
function Is(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Fs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function pt(e, t, n, r, s) {
  if (u.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!u.isString(t)) {
    if (u.isString(r))
      return t.indexOf(r) !== -1;
    if (u.isRegExp(r))
      return r.test(t);
  }
}
function Ds(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ps(e, t) {
  const n = u.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
let k = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(a, c, l) {
      const d = we(c);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const f = u.findKey(s, d);
      (!f || s[f] === void 0 || l === !0 || l === void 0 && s[f] !== !1) && (s[f || c] = Ue(a));
    }
    const i = (a, c) => u.forEach(a, (l, d) => o(l, d, c));
    if (u.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (u.isString(t) && (t = t.trim()) && !Fs(t))
      i(xs(t), n);
    else if (u.isObject(t) && u.isIterable(t)) {
      let a = {}, c, l;
      for (const d of t) {
        if (!u.isArray(d))
          throw TypeError("Object iterator must return a key-value pair");
        a[l = d[0]] = (c = a[l]) ? u.isArray(c) ? [...c, d[1]] : [c, d[1]] : d[1];
      }
      i(a, n);
    } else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = we(t), t) {
      const r = u.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Is(s);
        if (u.isFunction(n))
          return n.call(this, s, r);
        if (u.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = we(t), t) {
      const r = u.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || pt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = we(i), i) {
        const a = u.findKey(r, i);
        a && (!n || pt(r, r[a], a, n)) && (delete r[a], s = !0);
      }
    }
    return u.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || pt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return u.forEach(this, (s, o) => {
      const i = u.findKey(r, o);
      if (i) {
        n[i] = Ue(s), delete n[o];
        return;
      }
      const a = t ? Ds(o) : String(o).trim();
      a !== o && delete n[o], n[a] = Ue(s), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return u.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && u.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Yt] = this[Yt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const a = we(i);
      r[a] || (Ps(s, i), r[a] = !0);
    }
    return u.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
k.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(k.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
u.freezeMethods(k);
function ht(e, t) {
  const n = this || xe, r = t || n, s = k.from(r.headers);
  let o = r.data;
  return u.forEach(e, function(a) {
    o = a.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Dn(e) {
  return !!(e && e.__CANCEL__);
}
function _e(e, t, n) {
  y.call(this, e ?? "canceled", y.ERR_CANCELED, t, n), this.name = "CanceledError";
}
u.inherits(_e, y, {
  __CANCEL__: !0
});
function Pn(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new y(
    "Request failed with status code " + n.status,
    [y.ERR_BAD_REQUEST, y.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ls(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ks(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), d = r[o];
    i || (i = l), n[s] = c, r[s] = l;
    let f = o, h = 0;
    for (; f !== s; )
      h += n[f++], f = f % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), l - i < t)
      return;
    const b = d && l - d;
    return b ? Math.round(h * 1e3 / b) : void 0;
  };
}
function vs(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (l, d = Date.now()) => {
    n = d, s = null, o && (clearTimeout(o), o = null), e(...l);
  };
  return [(...l) => {
    const d = Date.now(), f = d - n;
    f >= r ? i(l, d) : (s = l, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - f)));
  }, () => s && i(s)];
}
const Be = (e, t, n = 3) => {
  let r = 0;
  const s = ks(50, 250);
  return vs((o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, c = i - r, l = s(c), d = i <= a;
    r = i;
    const f = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && d ? (a - i) / l : void 0,
      event: o,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Qt = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Xt = (e) => (...t) => u.asap(() => e(...t)), Us = I.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, I.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(I.origin),
  I.navigator && /(msie|trident)/i.test(I.navigator.userAgent)
) : () => !0, $s = I.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      u.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), u.isString(r) && i.push("path=" + r), u.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
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
function Vs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ms(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ln(e, t, n) {
  let r = !Vs(t);
  return e && (r || n == !1) ? Ms(e, t) : t;
}
const Zt = (e) => e instanceof k ? { ...e } : e;
function ae(e, t) {
  t = t || {};
  const n = {};
  function r(l, d, f, h) {
    return u.isPlainObject(l) && u.isPlainObject(d) ? u.merge.call({ caseless: h }, l, d) : u.isPlainObject(d) ? u.merge({}, d) : u.isArray(d) ? d.slice() : d;
  }
  function s(l, d, f, h) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(l))
        return r(void 0, l, f, h);
    } else return r(l, d, f, h);
  }
  function o(l, d) {
    if (!u.isUndefined(d))
      return r(void 0, d);
  }
  function i(l, d) {
    if (u.isUndefined(d)) {
      if (!u.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, d);
  }
  function a(l, d, f) {
    if (f in t)
      return r(l, d);
    if (f in e)
      return r(void 0, l);
  }
  const c = {
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
    validateStatus: a,
    headers: (l, d, f) => s(Zt(l), Zt(d), f, !0)
  };
  return u.forEach(Object.keys({ ...e, ...t }), function(d) {
    const f = c[d] || s, h = f(e[d], t[d], d);
    u.isUndefined(h) && f !== a || (n[d] = h);
  }), n;
}
const kn = (e) => {
  const t = ae({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: a } = t;
  t.headers = i = k.from(i), t.url = xn(Ln(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), a && i.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (u.isFormData(n)) {
    if (I.hasStandardBrowserEnv || I.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((c = i.getContentType()) !== !1) {
      const [l, ...d] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([l || "multipart/form-data", ...d].join("; "));
    }
  }
  if (I.hasStandardBrowserEnv && (r && u.isFunction(r) && (r = r(t)), r || r !== !1 && Us(t.url))) {
    const l = s && o && $s.read(o);
    l && i.set(s, l);
  }
  return t;
}, Bs = typeof XMLHttpRequest < "u", js = Bs && function(e) {
  return new Promise(function(n, r) {
    const s = kn(e);
    let o = s.data;
    const i = k.from(s.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = s, d, f, h, b, p;
    function g() {
      b && b(), p && p(), s.cancelToken && s.cancelToken.unsubscribe(d), s.signal && s.signal.removeEventListener("abort", d);
    }
    let m = new XMLHttpRequest();
    m.open(s.method.toUpperCase(), s.url, !0), m.timeout = s.timeout;
    function T() {
      if (!m)
        return;
      const x = k.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: x,
        config: e,
        request: m
      };
      Pn(function(ne) {
        n(ne), g();
      }, function(ne) {
        r(ne), g();
      }, P), m = null;
    }
    "onloadend" in m ? m.onloadend = T : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, m.onabort = function() {
      m && (r(new y("Request aborted", y.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      r(new y("Network Error", y.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let z = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const P = s.transitional || In;
      s.timeoutErrorMessage && (z = s.timeoutErrorMessage), r(new y(
        z,
        P.clarifyTimeoutError ? y.ETIMEDOUT : y.ECONNABORTED,
        e,
        m
      )), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && u.forEach(i.toJSON(), function(z, P) {
      m.setRequestHeader(P, z);
    }), u.isUndefined(s.withCredentials) || (m.withCredentials = !!s.withCredentials), a && a !== "json" && (m.responseType = s.responseType), l && ([h, p] = Be(l, !0), m.addEventListener("progress", h)), c && m.upload && ([f, b] = Be(c), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", b)), (s.cancelToken || s.signal) && (d = (x) => {
      m && (r(!x || x.type ? new _e(null, e, m) : x), m.abort(), m = null);
    }, s.cancelToken && s.cancelToken.subscribe(d), s.signal && (s.signal.aborted ? d() : s.signal.addEventListener("abort", d)));
    const N = Ls(s.url);
    if (N && I.protocols.indexOf(N) === -1) {
      r(new y("Unsupported protocol " + N + ":", y.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(o || null);
  });
}, qs = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(l) {
      if (!s) {
        s = !0, a();
        const d = l instanceof Error ? l : this.reason;
        r.abort(d instanceof y ? d : new _e(d instanceof Error ? d.message : d));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new y(`timeout ${t} of ms exceeded`, y.ETIMEDOUT));
    }, t);
    const a = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(o) : l.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", o));
    const { signal: c } = r;
    return c.unsubscribe = () => u.asap(a), c;
  }
}, Hs = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, zs = async function* (e, t) {
  for await (const n of Ks(e))
    yield* Hs(n, t);
}, Ks = async function* (e) {
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
}, en = (e, t, n, r) => {
  const s = zs(e, t);
  let o = 0, i, a = (c) => {
    i || (i = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: d } = await s.next();
        if (l) {
          a(), c.close();
          return;
        }
        let f = d.byteLength;
        if (n) {
          let h = o += f;
          n(h);
        }
        c.enqueue(new Uint8Array(d));
      } catch (l) {
        throw a(l), l;
      }
    },
    cancel(c) {
      return a(c), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, at = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", vn = at && typeof ReadableStream == "function", Js = at && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Un = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Ws = vn && Un(() => {
  let e = !1;
  const t = new Request(I.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), tn = 64 * 1024, At = vn && Un(() => u.isReadableStream(new Response("").body)), je = {
  stream: At && ((e) => e.body)
};
at && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !je[t] && (je[t] = u.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new y(`Response type '${t}' is not supported`, y.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Gs = async (e) => {
  if (e == null)
    return 0;
  if (u.isBlob(e))
    return e.size;
  if (u.isSpecCompliantForm(e))
    return (await new Request(I.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (u.isArrayBufferView(e) || u.isArrayBuffer(e))
    return e.byteLength;
  if (u.isURLSearchParams(e) && (e = e + ""), u.isString(e))
    return (await Js(e)).byteLength;
}, Ys = async (e, t) => {
  const n = u.toFiniteNumber(e.getContentLength());
  return n ?? Gs(t);
}, Qs = at && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: l,
    headers: d,
    withCredentials: f = "same-origin",
    fetchOptions: h
  } = kn(e);
  l = l ? (l + "").toLowerCase() : "text";
  let b = qs([s, o && o.toAbortSignal()], i), p;
  const g = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let m;
  try {
    if (c && Ws && n !== "get" && n !== "head" && (m = await Ys(d, r)) !== 0) {
      let P = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), Y;
      if (u.isFormData(r) && (Y = P.headers.get("content-type")) && d.setContentType(Y), P.body) {
        const [ne, Pe] = Qt(
          m,
          Be(Xt(c))
        );
        r = en(P.body, tn, ne, Pe);
      }
    }
    u.isString(f) || (f = f ? "include" : "omit");
    const T = "credentials" in Request.prototype;
    p = new Request(t, {
      ...h,
      signal: b,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: T ? f : void 0
    });
    let N = await fetch(p, h);
    const x = At && (l === "stream" || l === "response");
    if (At && (a || x && g)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((zt) => {
        P[zt] = N[zt];
      });
      const Y = u.toFiniteNumber(N.headers.get("content-length")), [ne, Pe] = a && Qt(
        Y,
        Be(Xt(a), !0)
      ) || [];
      N = new Response(
        en(N.body, tn, ne, () => {
          Pe && Pe(), g && g();
        }),
        P
      );
    }
    l = l || "text";
    let z = await je[u.findKey(je, l) || "text"](N, e);
    return !x && g && g(), await new Promise((P, Y) => {
      Pn(P, Y, {
        data: z,
        headers: k.from(N.headers),
        status: N.status,
        statusText: N.statusText,
        config: e,
        request: p
      });
    });
  } catch (T) {
    throw g && g(), T && T.name === "TypeError" && /Load failed|fetch/i.test(T.message) ? Object.assign(
      new y("Network Error", y.ERR_NETWORK, e, p),
      {
        cause: T.cause || T
      }
    ) : y.from(T, T && T.code, e, p);
  }
}), Nt = {
  http: ds,
  xhr: js,
  fetch: Qs
};
u.forEach(Nt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nn = (e) => `- ${e}`, Xs = (e) => u.isFunction(e) || e === null || e === !1, $n = {
  getAdapter: (e) => {
    e = u.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Xs(n) && (r = Nt[(i = String(n)).toLowerCase()], r === void 0))
        throw new y(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(nn).join(`
`) : " " + nn(o[0]) : "as no adapter specified";
      throw new y(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Nt
};
function mt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new _e(null, e);
}
function rn(e) {
  return mt(e), e.headers = k.from(e.headers), e.data = ht.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), $n.getAdapter(e.adapter || xe.adapter)(e).then(function(r) {
    return mt(e), r.data = ht.call(
      e,
      e.transformResponse,
      r
    ), r.headers = k.from(r.headers), r;
  }, function(r) {
    return Dn(r) || (mt(e), r && r.response && (r.response.data = ht.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = k.from(r.response.headers))), Promise.reject(r);
  });
}
const Vn = "1.11.0", ct = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ct[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const sn = {};
ct.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Vn + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, a) => {
    if (t === !1)
      throw new y(
        s(i, " has been removed" + (n ? " in " + n : "")),
        y.ERR_DEPRECATED
      );
    return n && !sn[i] && (sn[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, a) : !0;
  };
};
ct.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Zs(e, t, n) {
  if (typeof e != "object")
    throw new y("options must be an object", y.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const a = e[o], c = a === void 0 || i(a, o, e);
      if (c !== !0)
        throw new y("option " + o + " must be " + c, y.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new y("Unknown option " + o, y.ERR_BAD_OPTION);
  }
}
const $e = {
  assertOptions: Zs,
  validators: ct
}, j = $e.validators;
let oe = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Gt(),
      response: new Gt()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ae(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && $e.assertOptions(r, {
      silentJSONParsing: j.transitional(j.boolean),
      forcedJSONParsing: j.transitional(j.boolean),
      clarifyTimeoutError: j.transitional(j.boolean)
    }, !1), s != null && (u.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : $e.assertOptions(s, {
      encode: j.function,
      serialize: j.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), $e.assertOptions(n, {
      baseUrl: j.spelling("baseURL"),
      withXsrfToken: j.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && u.merge(
      o.common,
      o[n.method]
    );
    o && u.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = k.concat(i, o);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (c = c && g.synchronous, a.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let d, f = 0, h;
    if (!c) {
      const p = [rn.bind(this), void 0];
      for (p.unshift(...a), p.push(...l), h = p.length, d = Promise.resolve(n); f < h; )
        d = d.then(p[f++], p[f++]);
      return d;
    }
    h = a.length;
    let b = n;
    for (f = 0; f < h; ) {
      const p = a[f++], g = a[f++];
      try {
        b = p(b);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      d = rn.call(this, b);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, h = l.length; f < h; )
      d = d.then(l[f++], l[f++]);
    return d;
  }
  getUri(t) {
    t = ae(this.defaults, t);
    const n = Ln(t.baseURL, t.url, t.allowAbsoluteUrls);
    return xn(n, t.params, t.paramsSerializer);
  }
};
u.forEach(["delete", "get", "head", "options"], function(t) {
  oe.prototype[t] = function(n, r) {
    return this.request(ae(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
u.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, a) {
      return this.request(ae(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  oe.prototype[t] = n(), oe.prototype[t + "Form"] = n(!0);
});
let eo = class Mn {
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
      const i = new Promise((a) => {
        r.subscribe(a), o = a;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, a) {
      r.reason || (r.reason = new _e(o, i, a), n(r.reason));
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
      token: new Mn(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
};
function to(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function no(e) {
  return u.isObject(e) && e.isAxiosError === !0;
}
const xt = {
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
Object.entries(xt).forEach(([e, t]) => {
  xt[t] = e;
});
function Bn(e) {
  const t = new oe(e), n = _n(oe.prototype.request, t);
  return u.extend(n, oe.prototype, t, { allOwnKeys: !0 }), u.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Bn(ae(e, s));
  }, n;
}
const R = Bn(xe);
R.Axios = oe;
R.CanceledError = _e;
R.CancelToken = eo;
R.isCancel = Dn;
R.VERSION = Vn;
R.toFormData = it;
R.AxiosError = y;
R.Cancel = R.CanceledError;
R.all = function(t) {
  return Promise.all(t);
};
R.spread = to;
R.isAxiosError = no;
R.mergeConfig = ae;
R.AxiosHeaders = k;
R.formToJSON = (e) => Fn(u.isHTMLForm(e) ? new FormData(e) : e);
R.getAdapter = $n.getAdapter;
R.HttpStatusCode = xt;
R.default = R;
const {
  Axios: Ra,
  AxiosError: Oa,
  CanceledError: Ta,
  isCancel: Ca,
  CancelToken: Aa,
  VERSION: Na,
  all: xa,
  Cancel: Ia,
  isAxiosError: Fa,
  spread: Da,
  toFormData: Pa,
  AxiosHeaders: La,
  HttpStatusCode: ka,
  formToJSON: va,
  getAdapter: Ua,
  mergeConfig: $a
} = R, ro = "https://api.checklist.dev.grava.io/api", qe = R.create({
  baseURL: ro
});
function so(e) {
  e ? qe.defaults.headers.common.Authorization = `Bearer ${e}` : delete qe.defaults.headers.common.Authorization;
}
const jn = {
  getForms(e) {
    return qe.get("/forms", { params: e }).then((t) => t.data);
  },
  getFormById(e) {
    return qe.get(`/forms/${e}`).then((t) => t.data);
  }
};
var qn = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const It = qn.NODE_ENV !== "production" ? Object.freeze({}) : {}, io = qn.NODE_ENV !== "production" ? Object.freeze([]) : [], Hn = () => {
}, ao = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ie = Object.assign, co = Object.prototype.hasOwnProperty, Ft = (e, t) => co.call(e, t), O = Array.isArray, fe = (e) => Fe(e) === "[object Map]", $t = (e) => Fe(e) === "[object Set]", on = (e) => Fe(e) === "[object Date]", te = (e) => typeof e == "function", M = (e) => typeof e == "string", W = (e) => typeof e == "symbol", F = (e) => e !== null && typeof e == "object", zn = Object.prototype.toString, Fe = (e) => zn.call(e), Kn = (e) => Fe(e).slice(8, -1), lo = (e) => Fe(e) === "[object Object]", Vt = (e) => M(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, uo = /-(\w)/g, He = Jn(
  (e) => e.replace(uo, (t, n) => n ? n.toUpperCase() : "")
), ze = Jn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wn = (e, t) => !Object.is(e, t), fo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Dt = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let an;
const lt = () => an || (an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mt(e) {
  if (O(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = M(r) ? go(r) : Mt(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (M(e) || F(e))
    return e;
}
const po = /;(?![^(]*\))/g, ho = /:([^]+)/, mo = /\/\*[^]*?\*\//g;
function go(e) {
  const t = {};
  return e.replace(mo, "").split(po).forEach((n) => {
    if (n) {
      const r = n.split(ho);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ut(e) {
  let t = "";
  if (M(e))
    t = e;
  else if (O(e))
    for (let n = 0; n < e.length; n++) {
      const r = ut(e[n]);
      r && (t += r + " ");
    }
  else if (F(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function _o(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = ft(e[r], t[r]);
  return n;
}
function ft(e, t) {
  if (e === t) return !0;
  let n = on(e), r = on(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = W(e), r = W(t), n || r)
    return e === t;
  if (n = O(e), r = O(t), n || r)
    return n && r ? _o(e, t) : !1;
  if (n = F(e), r = F(t), n || r) {
    if (!n || !r)
      return !1;
    const s = Object.keys(e).length, o = Object.keys(t).length;
    if (s !== o)
      return !1;
    for (const i in e) {
      const a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (a && !c || !a && c || !ft(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function yo(e, t) {
  return e.findIndex((n) => ft(n, t));
}
const Gn = (e) => !!(e && e.__v_isRef === !0), C = (e) => M(e) ? e : e == null ? "" : O(e) || F(e) && (e.toString === zn || !te(e.toString)) ? Gn(e) ? C(e.value) : JSON.stringify(e, Yn, 2) : String(e), Yn = (e, t) => Gn(t) ? Yn(e, t.value) : fe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[gt(r, o) + " =>"] = s, n),
    {}
  )
} : $t(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gt(n))
} : W(t) ? gt(t) : F(t) && !O(t) && !lo(t) ? String(t) : t, gt = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    W(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var $ = {};
function Oe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Qn = 0, _t;
function Xn() {
  Qn++;
}
function Zn() {
  if (--Qn > 0)
    return;
  let e;
  for (; _t; ) {
    let t = _t;
    for (_t = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
const wo = /* @__PURE__ */ new WeakMap(), yt = Symbol(
  $.NODE_ENV !== "production" ? "Object iterate" : ""
), cn = Symbol(
  $.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ln = Symbol(
  $.NODE_ENV !== "production" ? "Array iterate" : ""
);
function X(e, t, n, r, s, o) {
  const i = wo.get(e);
  if (!i)
    return;
  const a = (c) => {
    c && ($.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: s,
      oldTarget: o
    }) : c.trigger());
  };
  if (Xn(), t === "clear")
    i.forEach(a);
  else {
    const c = O(e), l = c && Vt(n);
    if (c && n === "length") {
      const d = Number(r);
      i.forEach((f, h) => {
        (h === "length" || h === ln || !W(h) && h >= d) && a(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), l && a(i.get(ln)), t) {
        case "add":
          c ? l && a(i.get("length")) : (a(i.get(yt)), fe(e) && a(i.get(cn)));
          break;
        case "delete":
          c || (a(i.get(yt)), fe(e) && a(i.get(cn)));
          break;
        case "set":
          fe(e) && a(i.get(yt));
          break;
      }
  }
  Zn();
}
function ce(e) {
  const t = w(e);
  return t === e || V(e) ? t : t.map(D);
}
function dt(e) {
  return e = w(e), e;
}
const bo = {
  __proto__: null,
  [Symbol.iterator]() {
    return wt(this, Symbol.iterator, D);
  },
  concat(...e) {
    return ce(this).concat(
      ...e.map((t) => O(t) ? ce(t) : t)
    );
  },
  entries() {
    return wt(this, "entries", (e) => (e[1] = D(e[1]), e));
  },
  every(e, t) {
    return K(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return K(this, "filter", e, t, (n) => n.map(D), arguments);
  },
  find(e, t) {
    return K(this, "find", e, t, D, arguments);
  },
  findIndex(e, t) {
    return K(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return K(this, "findLast", e, t, D, arguments);
  },
  findLastIndex(e, t) {
    return K(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return K(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bt(this, "includes", e);
  },
  indexOf(...e) {
    return bt(this, "indexOf", e);
  },
  join(e) {
    return ce(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return bt(this, "lastIndexOf", e);
  },
  map(e, t) {
    return K(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return be(this, "pop");
  },
  push(...e) {
    return be(this, "push", e);
  },
  reduce(e, ...t) {
    return un(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return un(this, "reduceRight", e, t);
  },
  shift() {
    return be(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return K(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return be(this, "splice", e);
  },
  toReversed() {
    return ce(this).toReversed();
  },
  toSorted(e) {
    return ce(this).toSorted(e);
  },
  toSpliced(...e) {
    return ce(this).toSpliced(...e);
  },
  unshift(...e) {
    return be(this, "unshift", e);
  },
  values() {
    return wt(this, "values", D);
  }
};
function wt(e, t, n) {
  const r = dt(e), s = r[t]();
  return r !== e && !V(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.value && (o.value = n(o.value)), o;
  }), s;
}
const Eo = Array.prototype;
function K(e, t, n, r, s, o) {
  const i = dt(e), a = i !== e && !V(e), c = i[t];
  if (c !== Eo[t]) {
    const f = c.apply(e, o);
    return a ? D(f) : f;
  }
  let l = n;
  i !== e && (a ? l = function(f, h) {
    return n.call(this, D(f), h, e);
  } : n.length > 2 && (l = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const d = c.call(i, l, r);
  return a && s ? s(d) : d;
}
function un(e, t, n, r) {
  const s = dt(e);
  let o = n;
  return s !== e && (V(e) ? n.length > 3 && (o = function(i, a, c) {
    return n.call(this, i, a, c, e);
  }) : o = function(i, a, c) {
    return n.call(this, i, D(a), c, e);
  }), s[t](o, ...r);
}
function bt(e, t, n) {
  const r = w(e), s = r[t](...n);
  return (s === -1 || s === !1) && Ke(n[0]) ? (n[0] = w(n[0]), r[t](...n)) : s;
}
function be(e, t, n = []) {
  Xn();
  const r = w(e)[t].apply(e, n);
  return Zn(), r;
}
const So = /* @__PURE__ */ oo("__proto__,__v_isRef,__isVue"), er = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(W)
);
function Ro(e) {
  return W(e) || (e = String(e)), w(this).hasOwnProperty(e);
}
class tr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Po : sr : o ? Do : rr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = O(t);
    if (!s) {
      let c;
      if (i && (c = bo[n]))
        return c;
      if (n === "hasOwnProperty")
        return Ro;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ee(t) ? t : r
    );
    return (W(n) ? er.has(n) : So(n)) || o ? a : ee(a) ? i && Vt(n) ? a : a.value : F(a) ? s ? ir(a) : or(a) : a;
  }
}
class Oo extends tr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const c = G(o);
      if (!V(r) && !G(r) && (o = w(o), r = w(r)), !O(t) && ee(o) && !ee(r))
        return c ? !1 : (o.value = r, !0);
    }
    const i = O(t) && Vt(n) ? Number(n) < t.length : Ft(t, n), a = Reflect.set(
      t,
      n,
      r,
      ee(t) ? t : s
    );
    return t === w(s) && (i ? Wn(r, o) && X(t, "set", n, r, o) : X(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Ft(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && X(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return !W(n) || er.has(n), r;
  }
  ownKeys(t) {
    return Reflect.ownKeys(t);
  }
}
class To extends tr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return $.NODE_ENV !== "production" && Oe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return $.NODE_ENV !== "production" && Oe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Co = /* @__PURE__ */ new Oo(), Ao = /* @__PURE__ */ new To(), Pt = (e) => e, Le = (e) => Reflect.getPrototypeOf(e);
function No(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = w(s), i = fe(o), a = e === "entries" || e === Symbol.iterator && i, c = s[e](...r), l = n ? Pt : t ? Je : D;
    return {
      // iterator protocol
      next() {
        const { value: d, done: f } = c.next();
        return f ? { value: d, done: f } : {
          value: a ? [l(d[0]), l(d[1])] : l(d),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ke(e) {
  return function(...t) {
    if ($.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Oe(
        `${ze(e)} operation ${n}failed: target is readonly.`,
        w(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xo(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = w(o), a = w(s), { has: c } = Le(i), l = t ? Pt : e ? Je : D;
      if (c.call(i, s))
        return l(o.get(s));
      if (c.call(i, a))
        return l(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && (w(s), void 0), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw;
      w(o);
      const i = w(s);
      return s === i ? o.has(s) : o.has(s) || o.has(i);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw;
      w(a);
      const c = t ? Pt : e ? Je : D;
      return a.forEach((l, d) => s.call(o, c(l), c(d), i));
    }
  };
  return Ie(
    n,
    e ? {
      add: ke("add"),
      set: ke("set"),
      delete: ke("delete"),
      clear: ke("clear")
    } : {
      add(s) {
        !t && !V(s) && !G(s) && (s = w(s));
        const o = w(this);
        return Le(o).has.call(o, s) || (o.add(s), X(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !V(o) && !G(o) && (o = w(o));
        const i = w(this), { has: a, get: c } = Le(i);
        let l = a.call(i, s);
        l ? $.NODE_ENV !== "production" && fn(i, a, s) : (s = w(s), l = a.call(i, s));
        const d = c.call(i, s);
        return i.set(s, o), l ? Wn(o, d) && X(i, "set", s, o, d) : X(i, "add", s, o), this;
      },
      delete(s) {
        const o = w(this), { has: i, get: a } = Le(o);
        let c = i.call(o, s);
        c ? $.NODE_ENV !== "production" && fn(o, i, s) : (s = w(s), c = i.call(o, s));
        const l = a ? a.call(o, s) : void 0, d = o.delete(s);
        return c && X(o, "delete", s, void 0, l), d;
      },
      clear() {
        const s = w(this), o = s.size !== 0, i = $.NODE_ENV !== "production" ? fe(s) ? new Map(s) : new Set(s) : void 0, a = s.clear();
        return o && X(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = No(s, e, t);
  }), n;
}
function nr(e, t) {
  const n = xo(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    Ft(n, s) && s in r ? n : r,
    s,
    o
  );
}
const Io = {
  get: /* @__PURE__ */ nr(!1, !1)
}, Fo = {
  get: /* @__PURE__ */ nr(!0, !1)
};
function fn(e, t, n) {
  const r = w(n);
  if (r !== n && t.call(e, r)) {
    const s = Kn(e);
    Oe(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const rr = /* @__PURE__ */ new WeakMap(), Do = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap();
function Lo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ko(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Lo(Kn(e));
}
function or(e) {
  return G(e) ? e : ar(
    e,
    !1,
    Co,
    Io,
    rr
  );
}
function ir(e) {
  return ar(
    e,
    !0,
    Ao,
    Fo,
    sr
  );
}
function ar(e, t, n, r, s) {
  if (!F(e))
    return $.NODE_ENV !== "production" && Oe(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = ko(e);
  if (o === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const a = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, a), a;
}
function Bt(e) {
  return G(e) ? Bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function G(e) {
  return !!(e && e.__v_isReadonly);
}
function V(e) {
  return !!(e && e.__v_isShallow);
}
function Ke(e) {
  return e ? !!e.__v_raw : !1;
}
function w(e) {
  const t = e && e.__v_raw;
  return t ? w(t) : e;
}
const D = (e) => F(e) ? or(e) : e, Je = (e) => F(e) ? ir(e) : e;
function ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
var A = {};
const ie = [];
function vo(e) {
  ie.push(e);
}
function Uo() {
  ie.pop();
}
let Et = !1;
function H(e, ...t) {
  if (Et) return;
  Et = !0;
  const n = ie.length ? ie[ie.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = $o();
  if (r)
    jt(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, a;
          return (a = (i = o.toString) == null ? void 0 : i.call(o)) != null ? a : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${Sr(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Vo(s)), console.warn(...o);
  }
  Et = !1;
}
function $o() {
  let e = ie[ie.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Vo(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Mo(n));
  }), t;
}
function Mo({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${Sr(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...Bo(e.props), o] : [s + o];
}
function Bo(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...cr(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function cr(e, t, n) {
  return M(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ee(t) ? (t = cr(e, w(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : te(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = w(t), n ? t : [`${e}=`, t]);
}
const lr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function jt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ur(s, t, n);
  }
}
function ur(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || It;
  if (t) {
    let a = t.parent;
    const c = t.proxy, l = A.NODE_ENV !== "production" ? lr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, c, l) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      jt(o, null, 10, [
        e,
        c,
        l
      ]);
      return;
    }
  }
  jo(e, n, s, r, i);
}
function jo(e, t, n, r = !0, s = !1) {
  if (A.NODE_ENV !== "production") {
    const o = lr[t];
    if (n && vo(n), H(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Uo(), r)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const v = [];
let J = -1;
const de = [];
let Q = null, le = 0;
const fr = /* @__PURE__ */ Promise.resolve();
let We = null;
const qo = 100;
function Ho(e) {
  const t = We || fr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function zo(e) {
  let t = J + 1, n = v.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = v[r], o = Te(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Ko(e) {
  if (!(e.flags & 1)) {
    const t = Te(e), n = v[v.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Te(n) ? v.push(e) : v.splice(zo(t), 0, e), e.flags |= 1, dr();
  }
}
function dr() {
  We || (We = fr.then(pr));
}
function Jo(e) {
  O(e) ? de.push(...e) : Q && e.id === -1 ? Q.splice(le + 1, 0, e) : e.flags & 1 || (de.push(e), e.flags |= 1), dr();
}
function Wo(e) {
  if (de.length) {
    const t = [...new Set(de)].sort(
      (n, r) => Te(n) - Te(r)
    );
    if (de.length = 0, Q) {
      Q.push(...t);
      return;
    }
    for (Q = t, A.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), le = 0; le < Q.length; le++) {
      const n = Q[le];
      A.NODE_ENV !== "production" && hr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Q = null, le = 0;
  }
}
const Te = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function pr(e) {
  A.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = A.NODE_ENV !== "production" ? (n) => hr(e, n) : Hn;
  try {
    for (J = 0; J < v.length; J++) {
      const n = v[J];
      if (n && !(n.flags & 8)) {
        if (A.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), jt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; J < v.length; J++) {
      const n = v[J];
      n && (n.flags &= -2);
    }
    J = -1, v.length = 0, Wo(e), We = null, (v.length || de.length) && pr(e);
  }
}
function hr(e, t) {
  const n = e.get(t) || 0;
  if (n > qo) {
    const r = t.i, s = r && Ht(r.type);
    return ur(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const St = /* @__PURE__ */ new Map();
A.NODE_ENV !== "production" && (lt().__VUE_HMR_RUNTIME__ = {
  createRecord: Rt(Go),
  rerender: Rt(Yo),
  reload: Rt(Qo)
});
const Ge = /* @__PURE__ */ new Map();
function Go(e, t) {
  return Ge.has(e) ? !1 : (Ge.set(e, {
    initialDef: Ye(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ye(e) {
  return Rr(e) ? e.__vccOpts : e;
}
function Yo(e, t) {
  const n = Ge.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Ye(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function Qo(e, t) {
  const n = Ge.get(e);
  if (!n) return;
  t = Ye(t), dn(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = Ye(o.type);
    let a = St.get(i);
    a || (i !== n.initialDef && dn(i, t), St.set(i, a = /* @__PURE__ */ new Set())), a.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (a.add(o), o.ceReload(t.styles), a.delete(o)) : o.parent ? Ko(() => {
      o.parent.update(), a.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
  }
  Jo(() => {
    St.clear();
  });
}
function dn(e, t) {
  Ie(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Rt(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Qe = null, Xo = null;
function pe(e, t) {
  return A.NODE_ENV !== "production" && H("withDirectives can only be used inside render functions."), e;
}
const Zo = (e) => e.__isTeleport;
function mr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, mr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
lt().requestIdleCallback;
lt().cancelIdleCallback;
const ei = "components";
function me(e, t) {
  return ni(ei, e, !0, t) || e;
}
const ti = Symbol.for("v-ndc");
function ni(e, t, n = !0, r = !1) {
  const s = Er;
  if (s) {
    const o = s.type;
    {
      const a = Ht(
        o,
        !1
      );
      if (a && (a === t || a === He(t) || a === ze(He(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      pn(s[e] || o[e], t) || // global registration
      pn(s.appContext[e], t)
    );
    return !i && r ? o : (A.NODE_ENV !== "production" && n && !i && H(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), i);
  } else A.NODE_ENV !== "production" && H(
    `resolve${ze(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function pn(e, t) {
  return e && (e[t] || e[He(t)] || e[ze(He(t))]);
}
function Z(e, t, n, r) {
  let s;
  const o = n, i = O(e);
  if (i || M(e)) {
    const a = i && Bt(e);
    let c = !1, l = !1;
    a && (c = !V(e), l = G(e), e = dt(e)), s = new Array(e.length);
    for (let d = 0, f = e.length; d < f; d++)
      s[d] = t(
        c ? l ? Je(D(e[d])) : D(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    A.NODE_ENV !== "production" && !Number.isInteger(e) && H(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (F(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, c) => t(a, c, void 0, o)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let c = 0, l = a.length; c < l; c++) {
        const d = a[c];
        s[c] = t(e[d], d, c, o);
      }
    }
  else
    s = [];
  return s;
}
const ri = {};
A.NODE_ENV !== "production" && (ri.ownKeys = (e) => (H(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const si = {}, gr = (e) => Object.getPrototypeOf(e) === si, oi = (e) => e.__isSuspense, q = Symbol.for("v-fgt"), ii = Symbol.for("v-txt"), Lt = Symbol.for("v-cmt"), Ve = [];
let U = null;
function E(e = !1) {
  Ve.push(U = e ? null : []);
}
function ai() {
  Ve.pop(), U = Ve[Ve.length - 1] || null;
}
function _r(e) {
  return e.dynamicChildren = U || io, ai(), U && U.push(e), e;
}
function S(e, t, n, r, s, o) {
  return _r(
    _(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function Xe(e, t, n, r, s) {
  return _r(
    ye(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function ci(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const li = (...e) => wr(
  ...e
), yr = ({ key: e }) => e ?? null, Me = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? M(e) || ee(e) || te(e) ? { i: Qe, r: e, k: t, f: !!n } : e : null);
function _(e, t = null, n = null, r = 0, s = null, o = e === q ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yr(t),
    ref: t && Me(t),
    scopeId: Xo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Qe
  };
  return a ? (qt(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= M(n) ? 8 : 16), A.NODE_ENV !== "production" && c.key !== c.key && H("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !i && // has current parent block
  U && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && U.push(c), c;
}
const ye = A.NODE_ENV !== "production" ? li : wr;
function wr(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === ti) && (A.NODE_ENV !== "production" && !e && H(`Invalid vnode type when creating vnode: ${e}.`), e = Lt), ci(e)) {
    const a = Ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && qt(a, n), !o && U && (a.shapeFlag & 6 ? U[U.indexOf(e)] = a : U.push(a)), a.patchFlag = -2, a;
  }
  if (Rr(e) && (e = e.__vccOpts), t) {
    t = ui(t);
    let { class: a, style: c } = t;
    a && !M(a) && (t.class = ut(a)), F(c) && (Ke(c) && !O(c) && (c = Ie({}, c)), t.style = Mt(c));
  }
  const i = M(e) ? 1 : oi(e) ? 128 : Zo(e) ? 64 : F(e) ? 4 : te(e) ? 2 : 0;
  return A.NODE_ENV !== "production" && i & 4 && Ke(e) && (e = w(e), H(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), _(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function ui(e) {
  return e ? Ke(e) || gr(e) ? Ie({}, e) : e : null;
}
function Ze(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: c } = e, l = t ? fi(s || {}, t) : s, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && yr(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? O(o) ? o.concat(Me(t)) : [o, Me(t)] : Me(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: A.NODE_ENV !== "production" && i === -1 && O(a) ? a.map(br) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== q ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && mr(
    d,
    c.clone(d)
  ), d;
}
function br(e) {
  const t = Ze(e);
  return O(e.children) && (t.children = e.children.map(br)), t;
}
function et(e = " ", t = 0) {
  return ye(ii, null, e, t);
}
function re(e = "", t = !1) {
  return t ? (E(), Xe(Lt, null, e)) : ye(Lt, null, e);
}
function qt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (O(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), qt(e, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !t._ && !gr(t) && (t._ctx = Qe);
  else te(t) ? (t = { default: t, _ctx: Qe }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [et(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function fi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = ut([t.class, r.class]));
      else if (s === "style")
        t.style = Mt([t.style, r.style]);
      else if (ao(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(O(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
let Er = null;
{
  const e = lt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Er = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
const di = /(?:^|[-_])(\w)/g, pi = (e) => e.replace(di, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ht(e, t = !0) {
  return te(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Sr(e, t, n = !1) {
  let r = Ht(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? pi(r) : n ? "App" : "Anonymous";
}
function Rr(e) {
  return te(e) && "__vccOpts" in e;
}
function hi() {
  if (A.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!F(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (ee(f)) {
        const h = f.value;
        return [
          "div",
          {},
          ["span", e, d(f)],
          "<",
          a(h),
          ">"
        ];
      } else {
        if (Bt(f))
          return [
            "div",
            {},
            ["span", e, V(f) ? "ShallowReactive" : "Reactive"],
            "<",
            a(f),
            `>${G(f) ? " (readonly)" : ""}`
          ];
        if (G(f))
          return [
            "div",
            {},
            ["span", e, V(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(f),
            ">"
          ];
      }
      return null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...o(f.$)
        ];
    }
  };
  function o(f) {
    const h = [];
    f.type.props && f.props && h.push(i("props", w(f.props))), f.setupState !== It && h.push(i("setup", f.setupState)), f.data !== It && h.push(i("data", w(f.data)));
    const b = c(f, "computed");
    b && h.push(i("computed", b));
    const p = c(f, "inject");
    return p && h.push(i("injected", p)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), h;
  }
  function i(f, h) {
    return h = Ie({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((b) => [
          "div",
          {},
          ["span", r, b + ": "],
          a(h[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(f, h = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : F(f) ? ["object", { object: h ? w(f) : f }] : ["span", n, String(f)];
  }
  function c(f, h) {
    const b = f.type;
    if (te(b))
      return;
    const p = {};
    for (const g in f.ctx)
      l(b, g, h) && (p[g] = f.ctx[g]);
    return p;
  }
  function l(f, h, b) {
    const p = f[b];
    if (O(p) && p.includes(h) || F(p) && h in p || f.extends && l(f.extends, h, b) || f.mixins && f.mixins.some((g) => l(g, h, b)))
      return !0;
  }
  function d(f) {
    return V(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Or = A.NODE_ENV !== "production" ? H : Hn;
var Tr = {};
let mi;
const hn = typeof window < "u" && window.trustedTypes;
if (hn)
  try {
    mi = /* @__PURE__ */ hn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Tr.NODE_ENV !== "production" && Or(`Error creating trusted types policy: ${e}`);
  }
function ue(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const tt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return O(t) ? (n) => fo(t, n) : t;
};
function gi(e) {
  e.target.composing = !0;
}
function mn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const he = Symbol("_assign"), Se = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[he] = tt(s);
    const o = r || s.props && s.props.type === "number";
    ue(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), o && (a = Dt(a)), e[he](a);
    }), n && ue(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ue(e, "compositionstart", gi), ue(e, "compositionend", mn), ue(e, "change", mn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
    if (e[he] = tt(i), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Dt(e.value) : e.value, c = t ?? "";
    a !== c && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === c) || (e.value = c));
  }
}, _i = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const s = $t(t);
    ue(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Dt(nt(i)) : nt(i)
      );
      e[he](
        e.multiple ? s ? new Set(o) : o : o[0]
      ), e._assigning = !0, Ho(() => {
        e._assigning = !1;
      });
    }), e[he] = tt(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    gn(e, t);
  },
  beforeUpdate(e, t, n) {
    e[he] = tt(n);
  },
  updated(e, { value: t }) {
    e._assigning || gn(e, t);
  }
};
function gn(e, t) {
  const n = e.multiple, r = O(t);
  if (n && !r && !$t(t)) {
    Tr.NODE_ENV !== "production" && Or(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, o = e.options.length; s < o; s++) {
    const i = e.options[s], a = nt(i);
    if (n)
      if (r) {
        const c = typeof a;
        c === "string" || c === "number" ? i.selected = t.some((l) => String(l) === String(a)) : i.selected = yo(t, a) > -1;
      } else
        i.selected = t.has(a);
    else if (ft(nt(i), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function nt(e) {
  return "_value" in e ? e._value : e.value;
}
var yi = {};
function wi() {
  hi();
}
yi.NODE_ENV !== "production" && wi();
const bi = "data:image/svg+xml,%3csvg%20width='512'%20height='512'%20viewBox='0%200%20512%20512'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M256%200C114.6%200%200%20114.6%200%20256C0%20397.4%20114.6%20512%20256%20512C397.4%20512%20512%20397.4%20512%20256C512%20114.6%20397.4%200%20256%200ZM352%20280H280V352C280%20365.2%20269.2%20376%20256.9%20376C242.8%20376%20232%20365.2%20232%20352V280H160C146.8%20280%20136%20269.2%20136%20256C136%20242.8%20146.8%20232%20160%20232H232V160C232%20146.8%20242.8%20136%20256%20136C269.2%20136%20280%20146.8%20280%20160V232H352C365.2%20232%20376%20242.8%20376%20256C376%20269.2%20365.2%20280%20352%20280Z'%20fill='black'/%3e%3c/svg%3e", De = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Ei = {
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
    jn.getForms({ state: "enabled", type: this.typeForm || void 0 }).then((e) => {
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
}, Si = { class: "form-selector-card" }, Ri = { class: "form-title" }, Oi = { class: "form-label" }, Ti = {
  value: "",
  disabled: ""
}, Ci = ["value"], Ai = { class: "btn-add-container" };
function Ni(e, t, n, r, s, o) {
  return E(), S("div", Si, [
    _("h3", Ri, C(e.translateTerm("SELECT_FORM_TITLE")), 1),
    _("label", Oi, C(e.translateTerm("SELECT_FORM_LABEL")), 1),
    pe(_("select", {
      "onUpdate:modelValue": t[0] || (t[0] = (i) => s.selectedId = i),
      class: "form-select"
    }, [
      _("option", Ti, C(e.translateTerm("SELECT_FORM_OPTION_PLACEHOLDER")), 1),
      (E(!0), S(q, null, Z(s.forms, (i) => (E(), S("option", {
        key: i.id,
        value: i.id
      }, C(i.name), 9, Ci))), 128))
    ], 512), [
      [_i, s.selectedId]
    ]),
    _("div", Ai, [
      _("button", {
        class: "btn-add",
        onClick: t[1] || (t[1] = (...i) => o.emitSelected && o.emitSelected(...i))
      }, [
        t[2] || (t[2] = _("img", {
          src: bi,
          alt: "plus"
        }, null, -1)),
        et(" " + C(e.translateTerm("GENERAL_ADD")), 1)
      ])
    ])
  ]);
}
const xi = /* @__PURE__ */ De(Ei, [["render", Ni], ["__scopeId", "data-v-6a3747fb"]]), Ee = {
  initialize() {
    return R.get("/config.json").then((e) => {
      localStorage.setItem("config", JSON.stringify(e.data)), localStorage.getItem("DICTIONARY_LANGUAGE") === null && localStorage.setItem("DICTIONARY_LANGUAGE", e.data.DEFAULT_LANGUAGE);
    }).catch((e) => {
      console.error("initialize configurations error", e);
    });
  },
  getConfiguration(e) {
    const t = localStorage.getItem("config");
    return JSON.parse(t)[e];
  }
}, Cr = {
  limitCharactersShort: Ee.getConfiguration("LIMIT_CHARACTERS_SHORT"),
  limitCharactersMedium: Ee.getConfiguration("LIMIT_CHARACTERS_MEDIUM"),
  limitCharactersComment: Ee.getConfiguration("LIMIT_CHARACTERS_COMMENT"),
  limitCharactersLarge: Ee.getConfiguration("LIMIT_CHARACTERS_LARGE"),
  limitCharactersTextExpanded: Ee.getConfiguration("LIMIT_CHARACTERS_TEXTEXPANDED"),
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
}, Ii = {
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
      utils: Cr
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
}, Fi = { class: "select-questions-multiple-option" }, Di = { class: "title-question" }, Pi = { class: "container-checkbox" }, Li = { class: "checkbox-items-container" }, ki = ["for"], vi = ["id", "checked", "onChange"], Ui = { class: "inputQuestionItem" }, $i = { class: "limit-characters multiple-questions" };
function Vi(e, t, n, r, s, o) {
  const i = me("translate");
  return E(), S("div", Fi, [
    _("h4", Di, C(`${n.titleLabel} ${n.inputRequired ? "*" : ""}`), 1),
    _("div", Pi, [
      _("div", Li, [
        (E(!0), S(q, null, Z(n.options, (a) => (E(), S("div", {
          class: "checkbox-item",
          key: a
        }, [
          _("label", {
            for: "option-" + a.id
          }, C(a.key), 9, ki),
          _("input", {
            id: "option-" + a.id,
            type: "checkbox",
            checked: o.validateIfChecked(a),
            onChange: (c) => o.checkedValue(a)
          }, null, 40, vi)
        ]))), 128))
      ]),
      _("div", Ui, [
        _("label", null, [
          ye(i, {
            lang: s.lang,
            code: "LABEL_OBSERVATION"
          }, null, 8, ["lang"])
        ]),
        pe(_("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (a) => s.value = a),
          type: "text",
          maxlength: 100,
          class: "input-characters-large"
        }, null, 512), [
          [Se, s.value]
        ]),
        _("span", $i, C(s.value ? s.value.length : 0) + " / 100 ", 1)
      ])
    ])
  ]);
}
const Mi = /* @__PURE__ */ De(Ii, [["render", Vi]]), Bi = {
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
      utils: Cr,
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
}, ji = { class: "select-questions-unique-option" }, qi = { class: "title-question" }, Hi = { class: "container-checkbox" }, zi = { class: "checkbox-items-container" }, Ki = ["id", "name", "checked", "onChange"], Ji = ["for"], Wi = { class: "inputQuestionItem" }, Gi = { class: "limit-characters multiple-questions" };
function Yi(e, t, n, r, s, o) {
  const i = me("translate");
  return E(), S("div", ji, [
    _("h4", qi, C(`${n.titleLabel} ${n.inputRequired ? "*" : ""}`), 1),
    _("div", Hi, [
      _("div", zi, [
        (E(!0), S(q, null, Z(n.options, (a) => (E(), S("div", {
          class: ut(n.options.length > 3 ? "flex-25" : "flex-33"),
          key: a.id
        }, [
          _("input", {
            id: "option-" + a.id,
            type: "radio",
            name: "option-" + n.inputId,
            checked: o.validateIfChecked(a),
            onChange: (c) => o.checkedValue(a)
          }, null, 40, Ki),
          _("label", {
            for: "option-" + a.id
          }, C(n.iche2b ? `${a.key} - ${a.value}` : `${a.key}`), 9, Ji)
        ], 2))), 128))
      ]),
      _("div", Wi, [
        _("label", null, [
          ye(i, {
            lang: s.lang,
            code: "LABEL_OBSERVATION"
          }, null, 8, ["lang"])
        ]),
        pe(_("input", {
          "onUpdate:modelValue": t[0] || (t[0] = (a) => s.value = a),
          type: "text",
          maxlength: 100,
          class: "input-characters-large"
        }, null, 512), [
          [Se, s.value]
        ]),
        _("span", Gi, C(s.value ? s.value.length : 0) + " / 100 ", 1)
      ])
    ])
  ]);
}
const Qi = /* @__PURE__ */ De(Bi, [["render", Yi]]), Xi = "data:image/svg+xml,%3csvg%20width='576'%20height='385'%20viewBox='0%200%20576%20385'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M512%200.0146484H205.3C188.3%200.0146484%20172%206.76465%20160%2018.7646L9.375%20169.415C-3.125%20181.915%20-3.125%20202.165%209.375%20214.665L160%20365.315C172%20377.315%20188.3%20384.015%20205.3%20384.015H512C547.38%20384.015%20576%20355.395%20576%20320.015V64.0146C576%2028.6446%20547.4%200.0146484%20512%200.0146484ZM432.1%20239.015C441.475%20248.39%20441.475%20263.575%20432.1%20272.955C422.719%20282.336%20407.54%20282.328%20398.16%20272.955L352%20225.915L304.97%20272.945C295.589%20282.326%20280.41%20282.318%20271.03%20272.945C261.655%20263.57%20261.655%20248.385%20271.03%20239.005L318.06%20191.975L271%20144.115C261.625%20134.74%20261.625%20119.555%20271%20110.175C280.375%20100.795%20295.56%20100.8%20304.94%20110.175L352%20158.115L399.03%20111.085C408.405%20101.71%20423.59%20101.71%20432.97%20111.085C442.35%20120.46%20442.345%20135.645%20432.97%20145.025L385.94%20192.055L432.1%20239.015Z'%20fill='%23C14953'/%3e%3c/svg%3e", Zi = {
  name: "FormRenderer",
  components: {
    SelectQuestionsMultipleOption: Mi,
    SelectQuestionsUnique: Qi
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
                for (let a = 1; a <= o; a++)
                  this.tableAnswers[n.id][`${i}-${a}`] = "";
            } else
              this.answers[n.id] = "";
          });
        });
      }
    }
  }
}, ea = { class: "form-card" }, ta = { class: "form-header" }, na = { class: "form-title" }, ra = { class: "form-subtitle" }, sa = { class: "section-title" }, oa = { key: 0 }, ia = { key: 0 }, aa = ["onUpdate:modelValue"], ca = {
  key: 2,
  class: "table-wrapper"
}, la = { class: "input-table" }, ua = ["onUpdate:modelValue"], fa = {
  key: 3,
  class: "textarea-wrapper"
}, da = { key: 0 }, pa = ["onUpdate:modelValue"], ha = { class: "btn-save-wrapper" }, ma = { class: "btn-save" };
function ga(e, t, n, r, s, o) {
  const i = me("SelectQuestionsUnique"), a = me("SelectQuestionsMultipleOption");
  return E(), S("div", ea, [
    _("div", ta, [
      _("h3", na, C(n.formData.name), 1),
      _("button", {
        class: "h5-img",
        onClick: t[0] || (t[0] = (c) => e.$emit("remove-form", n.formData.id))
      }, [
        t[1] || (t[1] = _("img", {
          src: Xi,
          alt: "delete"
        }, null, -1)),
        _("h5", null, C(e.translateTerm("GENERAL_DELETE_PREFILL_FORM")), 1)
      ])
    ]),
    _("p", ra, C(e.translateTerm("GENERAL_PREFILL_FORM")), 1),
    (E(!0), S(q, null, Z(o.orderedSections, (c) => (E(), S("div", {
      key: c.id,
      class: "form-section"
    }, [
      _("h4", sa, C(c.name), 1),
      (E(!0), S(q, null, Z(o.orderedInputs(c.inputs), (l) => (E(), S("div", {
        key: l.id,
        class: "form-item"
      }, [
        l.value === "TL" ? (E(), S("div", oa, [
          _("label", null, [
            et(C(l.key) + " ", 1),
            l.required ? (E(), S("span", ia, "*")) : re("", !0)
          ]),
          pe(_("input", {
            "onUpdate:modelValue": (d) => s.answers[l.id] = d,
            class: "input-text",
            type: "text"
          }, null, 8, aa), [
            [Se, s.answers[l.id]]
          ])
        ])) : re("", !0),
        l.value === "OU" ? (E(), Xe(i, {
          key: 1,
          options: l.options,
          "title-label": l.key,
          "input-id": l.id,
          "input-required": l.required,
          answers: s.answers[l.id],
          "onUpdate:answers": (d) => s.answers[l.id] = d,
          class: "select-questions-unique-option"
        }, null, 8, ["options", "title-label", "input-id", "input-required", "answers", "onUpdate:answers"])) : re("", !0),
        l.value === "table" ? (E(), S("div", ca, [
          _("label", null, C(l.key), 1),
          _("table", la, [
            _("tbody", null, [
              (E(!0), S(q, null, Z(l.tableRows, (d) => (E(), S("tr", { key: d }, [
                (E(!0), S(q, null, Z(l.tableColumns, (f) => (E(), S("td", { key: f }, [
                  pe(_("input", {
                    type: "text",
                    class: "input-cell",
                    "onUpdate:modelValue": (h) => s.tableAnswers[l.id][`${d}-${f}`] = h
                  }, null, 8, ua), [
                    [Se, s.tableAnswers[l.id][`${d}-${f}`]]
                  ])
                ]))), 128))
              ]))), 128))
            ])
          ])
        ])) : re("", !0),
        l.value === "TE" ? (E(), S("div", fa, [
          _("label", null, [
            et(C(l.key) + " ", 1),
            l.required ? (E(), S("span", da, "*")) : re("", !0)
          ]),
          pe(_("textarea", {
            "onUpdate:modelValue": (d) => s.answers[l.id] = d,
            class: "textarea"
          }, null, 8, pa), [
            [Se, s.answers[l.id]]
          ])
        ])) : re("", !0),
        l.value === "OM" ? (E(), Xe(a, {
          key: 4,
          options: l.options,
          "title-label": l.key,
          "input-id": l.id,
          "input-required": l.required,
          answers: s.answers[l.id],
          "onUpdate:answers": (d) => s.answers[l.id] = d,
          class: "select-questions-multiple-option"
        }, null, 8, ["options", "title-label", "input-id", "input-required", "answers", "onUpdate:answers"])) : re("", !0)
      ]))), 128))
    ]))), 128)),
    _("div", ha, [
      _("button", ma, C(e.translateTerm("GENERAL_SAVE")), 1)
    ])
  ]);
}
const _a = /* @__PURE__ */ De(Zi, [["render", ga], ["__scopeId", "data-v-530b3596"]]), ya = {
  name: "VfChecklist",
  components: { FormSelect: xi, FormRenderer: _a },
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
    so(this.userToken);
  },
  methods: {
    loadForm(e) {
      jn.getFormById(e).then((t) => {
        this.forms.some((n) => n.id === t.id) || this.forms.push(t);
      }).catch((t) => console.error("Error cargando formulario:", t));
    },
    removeForm(e) {
      this.forms = this.forms.filter((t) => t.id !== e);
    }
  }
}, wa = { class: "vf-checklist-wrapper" };
function ba(e, t, n, r, s, o) {
  const i = me("FormSelect"), a = me("FormRenderer");
  return E(), S("div", wa, [
    ye(i, {
      typeForm: n.moduleCode,
      lang: s.lang,
      onFormSelected: o.loadForm
    }, null, 8, ["typeForm", "lang", "onFormSelected"]),
    (E(!0), S(q, null, Z(s.forms, (c) => (E(), Xe(a, {
      key: c.id,
      "form-data": c,
      onRemoveForm: o.removeForm
    }, null, 8, ["form-data", "onRemoveForm"]))), 128))
  ]);
}
const Va = /* @__PURE__ */ De(ya, [["render", ba], ["__scopeId", "data-v-11389f74"]]);
export {
  Va as default
};
