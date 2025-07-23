var ie = {};
const L = ie.NODE_ENV !== "production" ? Object.freeze({}) : {}, Oe = ie.NODE_ENV !== "production" ? Object.freeze([]) : [], Re = () => {
}, Ve = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), U = Object.assign, g = Array.isArray, xe = (e) => Z(e) === "[object Map]", Ie = (e) => Z(e) === "[object Set]", C = (e) => typeof e == "function", b = (e) => typeof e == "string", X = (e) => typeof e == "symbol", E = (e) => e !== null && typeof e == "object", le = Object.prototype.toString, Z = (e) => le.call(e), Fe = (e) => Z(e) === "[object Object]";
let re;
const H = () => re || (re = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function v(e) {
  if (g(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = b(o) ? Me(o) : v(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (b(e) || E(e))
    return e;
}
const Te = /;(?![^(]*\))/g, De = /:([^]+)/, $e = /\/\*[^]*?\*\//g;
function Me(e) {
  const t = {};
  return e.replace($e, "").split(Te).forEach((n) => {
    if (n) {
      const o = n.split(De);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ee(e) {
  let t = "";
  if (b(e))
    t = e;
  else if (g(e))
    for (let n = 0; n < e.length; n++) {
      const o = ee(e[n]);
      o && (t += o + " ");
    }
  else if (E(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ce = (e) => !!(e && e.__v_isRef === !0), I = (e) => b(e) ? e : e == null ? "" : g(e) || E(e) && (e.toString === le || !C(e.toString)) ? ce(e) ? I(e.value) : JSON.stringify(e, ue, 2) : String(e), ue = (e, t) => ce(t) ? ue(e, t.value) : xe(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[q(o, r) + " =>"] = s, n),
    {}
  )
} : Ie(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => q(n))
} : X(t) ? q(t) : E(t) && !g(t) && !Fe(t) ? String(t) : t, q = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    X(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(X)
);
function fe(e) {
  return Y(e) ? fe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Y(e) {
  return !!(e && e.__v_isReadonly);
}
function J(e) {
  return !!(e && e.__v_isShallow);
}
function G(e) {
  return e ? !!e.__v_raw : !1;
}
function k(e) {
  const t = e && e.__v_raw;
  return t ? k(t) : e;
}
function te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
var a = {};
const O = [];
function Pe(e) {
  O.push(e);
}
function Ae() {
  O.pop();
}
let B = !1;
function T(e, ...t) {
  if (B) return;
  B = !0;
  const n = O.length ? O[O.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = ze();
  if (o)
    ne(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var l, c;
          return (c = (l = r.toString) == null ? void 0 : l.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Ce(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...je(s)), console.warn(...r);
  }
  B = !1;
}
function ze() {
  let e = O[O.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function je(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ue(n));
  }), t;
}
function Ue({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Ce(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...He(e.props), r] : [s + r];
}
function He(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ae(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ae(e, t, n) {
  return b(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : te(t) ? (t = ae(e, k(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : C(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = k(t), n ? t : [`${e}=`, t]);
}
const de = {
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
function ne(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    pe(s, t, n);
  }
}
function pe(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: l } = t && t.appContext.config || L;
  if (t) {
    let c = t.parent;
    const u = t.proxy, _ = a.NODE_ENV !== "production" ? de[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const S = c.ec;
      if (S) {
        for (let i = 0; i < S.length; i++)
          if (S[i](e, u, _) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      ne(r, null, 10, [
        e,
        u,
        _
      ]);
      return;
    }
  }
  qe(e, n, s, o, l);
}
function qe(e, t, n, o = !0, s = !1) {
  if (a.NODE_ENV !== "production") {
    const r = de[t];
    if (n && Pe(n), T(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Ae(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const m = [];
let N = -1;
const V = [];
let w = null, R = 0;
const Je = /* @__PURE__ */ Promise.resolve();
let Q = null;
const Be = 100;
function We(e) {
  let t = N + 1, n = m.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = m[o], r = D(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Ke(e) {
  if (!(e.flags & 1)) {
    const t = D(e), n = m[m.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= D(n) ? m.push(e) : m.splice(We(t), 0, e), e.flags |= 1, me();
  }
}
function me() {
  Q || (Q = Je.then(ge));
}
function Le(e) {
  g(e) ? V.push(...e) : w && e.id === -1 ? w.splice(R + 1, 0, e) : e.flags & 1 || (V.push(e), e.flags |= 1), me();
}
function Ye(e) {
  if (V.length) {
    const t = [...new Set(V)].sort(
      (n, o) => D(n) - D(o)
    );
    if (V.length = 0, w) {
      w.push(...t);
      return;
    }
    for (w = t, a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), R = 0; R < w.length; R++) {
      const n = w[R];
      a.NODE_ENV !== "production" && he(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    w = null, R = 0;
  }
}
const D = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ge(e) {
  a.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = a.NODE_ENV !== "production" ? (n) => he(e, n) : Re;
  try {
    for (N = 0; N < m.length; N++) {
      const n = m[N];
      if (n && !(n.flags & 8)) {
        if (a.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ne(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; N < m.length; N++) {
      const n = m[N];
      n && (n.flags &= -2);
    }
    N = -1, m.length = 0, Ye(e), Q = null, (m.length || V.length) && ge(e);
  }
}
function he(e, t) {
  const n = e.get(t) || 0;
  if (n > Be) {
    const o = t.i, s = o && we(o.type);
    return pe(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const W = /* @__PURE__ */ new Map();
a.NODE_ENV !== "production" && (H().__VUE_HMR_RUNTIME__ = {
  createRecord: K(Ge),
  rerender: K(Qe),
  reload: K(Xe)
});
const P = /* @__PURE__ */ new Map();
function Ge(e, t) {
  return P.has(e) ? !1 : (P.set(e, {
    initialDef: A(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function A(e) {
  return ke(e) ? e.__vccOpts : e;
}
function Qe(e, t) {
  const n = P.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, A(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function Xe(e, t) {
  const n = P.get(e);
  if (!n) return;
  t = A(t), se(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], l = A(r.type);
    let c = W.get(l);
    c || (l !== n.initialDef && se(l, t), W.set(l, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? Ke(() => {
      r.parent.update(), c.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(l);
  }
  Le(() => {
    W.clear();
  });
}
function se(e, t) {
  U(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function K(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let z = null, Ze = null;
const ve = (e) => e.__isTeleport;
function _e(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, _e(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
H().requestIdleCallback;
H().cancelIdleCallback;
const et = Symbol.for("v-ndc"), tt = {};
a.NODE_ENV !== "production" && (tt.ownKeys = (e) => (T(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const nt = {}, ye = (e) => Object.getPrototypeOf(e) === nt, ot = (e) => e.__isSuspense, Se = Symbol.for("v-fgt"), rt = Symbol.for("v-txt"), st = Symbol.for("v-cmt"), $ = [];
let h = null;
function it(e = !1) {
  $.push(h = e ? null : []);
}
function lt() {
  $.pop(), h = $[$.length - 1] || null;
}
function ct(e) {
  return e.dynamicChildren = h || Oe, lt(), h && h.push(e), e;
}
function ut(e, t, n, o, s, r) {
  return ct(
    p(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function ft(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const at = (...e) => Ee(
  ...e
), Ne = ({ key: e }) => e ?? null, M = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? b(e) || te(e) || C(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, o = 0, s = null, r = e === Se ? 0 : 1, l = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ne(t),
    ref: t && M(t),
    scopeId: Ze,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: z
  };
  return c ? (oe(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= b(n) ? 8 : 16), a.NODE_ENV !== "production" && u.key !== u.key && T("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !l && // has current parent block
  h && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && h.push(u), u;
}
const dt = a.NODE_ENV !== "production" ? at : Ee;
function Ee(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === et) && (a.NODE_ENV !== "production" && !e && T(`Invalid vnode type when creating vnode: ${e}.`), e = st), ft(e)) {
    const c = j(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && oe(c, n), !r && h && (c.shapeFlag & 6 ? h[h.indexOf(e)] = c : h.push(c)), c.patchFlag = -2, c;
  }
  if (ke(e) && (e = e.__vccOpts), t) {
    t = pt(t);
    let { class: c, style: u } = t;
    c && !b(c) && (t.class = ee(c)), E(u) && (G(u) && !g(u) && (u = U({}, u)), t.style = v(u));
  }
  const l = b(e) ? 1 : ot(e) ? 128 : ve(e) ? 64 : E(e) ? 4 : C(e) ? 2 : 0;
  return a.NODE_ENV !== "production" && l & 4 && G(e) && (e = k(e), T(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), p(
    e,
    t,
    n,
    o,
    s,
    l,
    r,
    !0
  );
}
function pt(e) {
  return e ? G(e) || ye(e) ? U({}, e) : e : null;
}
function j(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: l, children: c, transition: u } = e, _ = t ? mt(s || {}, t) : s, S = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && Ne(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? g(r) ? r.concat(M(t)) : [r, M(t)] : M(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a.NODE_ENV !== "production" && l === -1 && g(c) ? c.map(be) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Se ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && j(e.ssContent),
    ssFallback: e.ssFallback && j(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && _e(
    S,
    u.clone(S)
  ), S;
}
function be(e) {
  const t = j(e);
  return g(e.children) && (t.children = e.children.map(be)), t;
}
function F(e = " ", t = 0) {
  return dt(rt, null, e, t);
}
function oe(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (g(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), oe(e, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !t._ && !ye(t) && (t._ctx = z);
  else C(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [F(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = ee([t.class, o.class]));
      else if (s === "style")
        t.style = v([t.style, o.style]);
      else if (Ve(s)) {
        const r = t[s], l = o[s];
        l && r !== l && !(g(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
{
  const e = H(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
const gt = /(?:^|[-_])(\w)/g, ht = (e) => e.replace(gt, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function we(e, t = !0) {
  return C(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ce(e, t, n = !1) {
  let o = we(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const l in r)
        if (r[l] === t)
          return l;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? ht(o) : n ? "App" : "Anonymous";
}
function ke(e) {
  return C(e) && "__vccOpts" in e;
}
function _t() {
  if (a.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(i) {
      if (!E(i))
        return null;
      if (i.__isVue)
        return ["div", e, "VueInstance"];
      if (te(i)) {
        const f = i.value;
        return [
          "div",
          {},
          ["span", e, S(i)],
          "<",
          c(f),
          ">"
        ];
      } else {
        if (fe(i))
          return [
            "div",
            {},
            ["span", e, J(i) ? "ShallowReactive" : "Reactive"],
            "<",
            c(i),
            `>${Y(i) ? " (readonly)" : ""}`
          ];
        if (Y(i))
          return [
            "div",
            {},
            ["span", e, J(i) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(i),
            ">"
          ];
      }
      return null;
    },
    hasBody(i) {
      return i && i.__isVue;
    },
    body(i) {
      if (i && i.__isVue)
        return [
          "div",
          {},
          ...r(i.$)
        ];
    }
  };
  function r(i) {
    const f = [];
    i.type.props && i.props && f.push(l("props", k(i.props))), i.setupState !== L && f.push(l("setup", i.setupState)), i.data !== L && f.push(l("data", k(i.data)));
    const d = u(i, "computed");
    d && f.push(l("computed", d));
    const y = u(i, "inject");
    return y && f.push(l("injected", y)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: i }]
    ]), f;
  }
  function l(i, f) {
    return f = U({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        i
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((d) => [
          "div",
          {},
          ["span", o, d + ": "],
          c(f[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(i, f = !0) {
    return typeof i == "number" ? ["span", t, i] : typeof i == "string" ? ["span", n, JSON.stringify(i)] : typeof i == "boolean" ? ["span", o, i] : E(i) ? ["object", { object: f ? k(i) : i }] : ["span", n, String(i)];
  }
  function u(i, f) {
    const d = i.type;
    if (C(d))
      return;
    const y = {};
    for (const x in i.ctx)
      _(d, x, f) && (y[x] = i.ctx[x]);
    return y;
  }
  function _(i, f, d) {
    const y = i[d];
    if (g(y) && y.includes(f) || E(y) && f in y || i.extends && _(i.extends, f, d) || i.mixins && i.mixins.some((x) => _(x, f, d)))
      return !0;
  }
  function S(i) {
    return J(i) ? "ShallowRef" : i.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
var yt = {};
function St() {
  _t();
}
yt.NODE_ENV !== "production" && St();
const Nt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Et = {
  name: "VfChecklist",
  props: {
    moduleId: {
      type: String,
      required: !0
    },
    externalId: {
      type: [String, Number],
      required: !0
    },
    mode: {
      type: String,
      required: !0
    },
    userToken: {
      type: String,
      required: !0
    }
  }
}, bt = { class: "vf-checklist" };
function wt(e, t, n, o, s, r) {
  return it(), ut("div", bt, [
    t[4] || (t[4] = p("h2", null, "Checklist Componente", -1)),
    p("ul", null, [
      p("li", null, [
        t[0] || (t[0] = p("strong", null, "Module ID:", -1)),
        F(" " + I(n.moduleId), 1)
      ]),
      p("li", null, [
        t[1] || (t[1] = p("strong", null, "External ID:", -1)),
        F(" " + I(n.externalId), 1)
      ]),
      p("li", null, [
        t[2] || (t[2] = p("strong", null, "Mode:", -1)),
        F(" " + I(n.mode), 1)
      ]),
      p("li", null, [
        t[3] || (t[3] = p("strong", null, "User Token:", -1)),
        F(" " + I(n.userToken), 1)
      ])
    ])
  ]);
}
const Ct = /* @__PURE__ */ Nt(Et, [["render", wt], ["__scopeId", "data-v-3c5fcbbc"]]);
export {
  Ct as default
};
