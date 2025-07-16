/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const q = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, ke = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], se = () => {
}, Re = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), j = Object.assign, d = Array.isArray, De = (e) => X(e) === "[object Map]", Te = (e) => X(e) === "[object Set]", b = (e) => typeof e == "function", N = (e) => typeof e == "string", Q = (e) => typeof e == "symbol", E = (e) => e !== null && typeof e == "object", ie = Object.prototype.toString, X = (e) => ie.call(e), xe = (e) => X(e) === "[object Object]";
let oe;
const U = () => oe || (oe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Z(e) {
  if (d(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = N(o) ? Pe(o) : Z(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (N(e) || E(e))
    return e;
}
const Fe = /;(?![^(]*\))/g, Ie = /:([^]+)/, $e = /\/\*[^]*?\*\//g;
function Pe(e) {
  const t = {};
  return e.replace($e, "").split(Fe).forEach((n) => {
    if (n) {
      const o = n.split(Ie);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function v(e) {
  let t = "";
  if (N(e))
    t = e;
  else if (d(e))
    for (let n = 0; n < e.length; n++) {
      const o = v(e[n]);
      o && (t += o + " ");
    }
  else if (E(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ce = (e) => !!(e && e.__v_isRef === !0), le = (e) => N(e) ? e : e == null ? "" : d(e) || E(e) && (e.toString === ie || !b(e.toString)) ? ce(e) ? le(e.value) : JSON.stringify(e, ue, 2) : String(e), ue = (e, t) => ce(t) ? ue(e, t.value) : De(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[z(o, r) + " =>"] = s, n),
    {}
  )
} : Te(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => z(n))
} : Q(t) ? z(t) : E(t) && !d(t) && !xe(t) ? String(t) : t, z = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Q(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
);
Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Q)
);
function ae(e) {
  return W(e) ? ae(e.__v_raw) : !!(e && e.__v_isReactive);
}
function W(e) {
  return !!(e && e.__v_isReadonly);
}
function J(e) {
  return !!(e && e.__v_isShallow);
}
function Y(e) {
  return e ? !!e.__v_raw : !1;
}
function O(e) {
  const t = e && e.__v_raw;
  return t ? O(t) : e;
}
function ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const w = [];
function Me(e) {
  w.push(e);
}
function Ae() {
  w.pop();
}
let L = !1;
function R(e, ...t) {
  if (L) return;
  L = !0;
  const n = w.length ? w[w.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = He();
  if (o)
    te(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var c, l;
          return (l = (c = r.toString) == null ? void 0 : c.call(r)) != null ? l : JSON.stringify(r);
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
  L = !1;
}
function He() {
  let e = w[w.length - 1];
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
  return e.props ? [s, ...ze(e.props), r] : [s + r];
}
function ze(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...fe(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function fe(e, t, n) {
  return N(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ee(t) ? (t = fe(e, O(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : b(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = O(t), n ? t : [`${e}=`, t]);
}
const pe = {
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
function te(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    de(s, t, n);
  }
}
function de(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || q;
  if (t) {
    let l = t.parent;
    const u = t.proxy, _ = process.env.NODE_ENV !== "production" ? pe[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const g = l.ec;
      if (g) {
        for (let i = 0; i < g.length; i++)
          if (g[i](e, u, _) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      te(r, null, 10, [
        e,
        u,
        _
      ]);
      return;
    }
  }
  Je(e, n, s, o, c);
}
function Je(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = pe[t];
    if (n && Me(n), R(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Ae(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const p = [];
let y = -1;
const k = [];
let S = null, C = 0;
const Le = /* @__PURE__ */ Promise.resolve();
let G = null;
const Be = 100;
function Ke(e) {
  let t = y + 1, n = p.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = p[o], r = T(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function qe(e) {
  if (!(e.flags & 1)) {
    const t = T(e), n = p[p.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= T(n) ? p.push(e) : p.splice(Ke(t), 0, e), e.flags |= 1, me();
  }
}
function me() {
  G || (G = Le.then(_e));
}
function We(e) {
  d(e) ? k.push(...e) : S && e.id === -1 ? S.splice(C + 1, 0, e) : e.flags & 1 || (k.push(e), e.flags |= 1), me();
}
function Ye(e) {
  if (k.length) {
    const t = [...new Set(k)].sort(
      (n, o) => T(n) - T(o)
    );
    if (k.length = 0, S) {
      S.push(...t);
      return;
    }
    for (S = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), C = 0; C < S.length; C++) {
      const n = S[C];
      process.env.NODE_ENV !== "production" && he(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    S = null, C = 0;
  }
}
const T = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _e(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => he(e, n) : se;
  try {
    for (y = 0; y < p.length; y++) {
      const n = p[y];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), te(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; y < p.length; y++) {
      const n = p[y];
      n && (n.flags &= -2);
    }
    y = -1, p.length = 0, Ye(e), G = null, (p.length || k.length) && _e(e);
  }
}
function he(e, t) {
  const n = e.get(t) || 0;
  if (n > Be) {
    const o = t.i, s = o && we(o.type);
    return de(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const B = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (U().__VUE_HMR_RUNTIME__ = {
  createRecord: K(Ge),
  rerender: K(Qe),
  reload: K(Xe)
});
const $ = /* @__PURE__ */ new Map();
function Ge(e, t) {
  return $.has(e) ? !1 : ($.set(e, {
    initialDef: P(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function P(e) {
  return Ve(e) ? e.__vccOpts : e;
}
function Qe(e, t) {
  const n = $.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, P(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function Xe(e, t) {
  const n = $.get(e);
  if (!n) return;
  t = P(t), re(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], c = P(r.type);
    let l = B.get(c);
    l || (c !== n.initialDef && re(c, t), B.set(c, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? qe(() => {
      r.parent.update(), l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(c);
  }
  We(() => {
    B.clear();
  });
}
function re(e, t) {
  j(e, t);
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
let V, x = [];
function ge(e, t) {
  var n, o;
  V = e, V ? (V.enabled = !0, x.forEach(({ event: s, args: r }) => V.emit(s, ...r)), x = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    ge(r, t);
  }), setTimeout(() => {
    V || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, x = []);
  }, 3e3)) : x = [];
}
let M = null, Ze = null;
const ve = (e) => e.__isTeleport;
function ye(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ye(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
U().requestIdleCallback;
U().cancelIdleCallback;
const et = Symbol.for("v-ndc"), tt = {};
process.env.NODE_ENV !== "production" && (tt.ownKeys = (e) => (R(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const nt = {}, Ee = (e) => Object.getPrototypeOf(e) === nt, ot = (e) => e.__isSuspense, Ne = Symbol.for("v-fgt"), rt = Symbol.for("v-txt"), st = Symbol.for("v-cmt"), F = [];
let m = null;
function it(e = !1) {
  F.push(m = e ? null : []);
}
function ct() {
  F.pop(), m = F[F.length - 1] || null;
}
function lt(e) {
  return e.dynamicChildren = m || ke, ct(), m && m.push(e), e;
}
function ut(e, t, n, o, s, r) {
  return lt(
    A(
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
function at(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ft = (...e) => be(
  ...e
), Se = ({ key: e }) => e ?? null, I = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? N(e) || ee(e) || b(e) ? { i: M, r: e, k: t, f: !!n } : e : null);
function A(e, t = null, n = null, o = 0, s = null, r = e === Ne ? 0 : 1, c = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Se(t),
    ref: t && I(t),
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
    ctx: M
  };
  return l ? (ne(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= N(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && R("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !c && // has current parent block
  m && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && m.push(u), u;
}
const pt = process.env.NODE_ENV !== "production" ? ft : be;
function be(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === et) && (process.env.NODE_ENV !== "production" && !e && R(`Invalid vnode type when creating vnode: ${e}.`), e = st), at(e)) {
    const l = H(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ne(l, n), !r && m && (l.shapeFlag & 6 ? m[m.indexOf(e)] = l : m.push(l)), l.patchFlag = -2, l;
  }
  if (Ve(e) && (e = e.__vccOpts), t) {
    t = dt(t);
    let { class: l, style: u } = t;
    l && !N(l) && (t.class = v(l)), E(u) && (Y(u) && !d(u) && (u = j({}, u)), t.style = Z(u));
  }
  const c = N(e) ? 1 : ot(e) ? 128 : ve(e) ? 64 : E(e) ? 4 : b(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && c & 4 && Y(e) && (e = O(e), R(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), A(
    e,
    t,
    n,
    o,
    s,
    c,
    r,
    !0
  );
}
function dt(e) {
  return e ? Y(e) || Ee(e) ? j({}, e) : e : null;
}
function H(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: c, children: l, transition: u } = e, _ = t ? _t(s || {}, t) : s, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && Se(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? d(r) ? r.concat(I(t)) : [r, I(t)] : I(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && c === -1 && d(l) ? l.map(Oe) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ne ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && H(e.ssContent),
    ssFallback: e.ssFallback && H(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && ye(
    g,
    u.clone(g)
  ), g;
}
function Oe(e) {
  const t = H(e);
  return d(e.children) && (t.children = e.children.map(Oe)), t;
}
function mt(e = " ", t = 0) {
  return pt(rt, null, e, t);
}
function ne(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (d(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ne(e, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !t._ && !Ee(t) && (t._ctx = M);
  else b(t) ? (t = { default: t, _ctx: M }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [mt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _t(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = v([t.class, o.class]));
      else if (s === "style")
        t.style = Z([t.style, o.style]);
      else if (Re(s)) {
        const r = t[s], c = o[s];
        c && r !== c && !(d(r) && r.includes(c)) && (t[s] = r ? [].concat(r, c) : c);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
{
  const e = U(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((c) => c(r)) : s[0](r);
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
process.env.NODE_ENV;
const ht = /(?:^|[-_])(\w)/g, gt = (e) => e.replace(ht, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function we(e, t = !0) {
  return b(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ce(e, t, n = !1) {
  let o = we(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const c in r)
        if (r[c] === t)
          return c;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? gt(o) : n ? "App" : "Anonymous";
}
function Ve(e) {
  return b(e) && "__vccOpts" in e;
}
function yt() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(i) {
      if (!E(i))
        return null;
      if (i.__isVue)
        return ["div", e, "VueInstance"];
      if (ee(i)) {
        const a = i.value;
        return [
          "div",
          {},
          ["span", e, g(i)],
          "<",
          l(a),
          ">"
        ];
      } else {
        if (ae(i))
          return [
            "div",
            {},
            ["span", e, J(i) ? "ShallowReactive" : "Reactive"],
            "<",
            l(i),
            `>${W(i) ? " (readonly)" : ""}`
          ];
        if (W(i))
          return [
            "div",
            {},
            ["span", e, J(i) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(i),
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
    const a = [];
    i.type.props && i.props && a.push(c("props", O(i.props))), i.setupState !== q && a.push(c("setup", i.setupState)), i.data !== q && a.push(c("data", O(i.data)));
    const f = u(i, "computed");
    f && a.push(c("computed", f));
    const h = u(i, "inject");
    return h && a.push(c("injected", h)), a.push([
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
    ]), a;
  }
  function c(i, a) {
    return a = j({}, a), Object.keys(a).length ? [
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
        ...Object.keys(a).map((f) => [
          "div",
          {},
          ["span", o, f + ": "],
          l(a[f], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(i, a = !0) {
    return typeof i == "number" ? ["span", t, i] : typeof i == "string" ? ["span", n, JSON.stringify(i)] : typeof i == "boolean" ? ["span", o, i] : E(i) ? ["object", { object: a ? O(i) : i }] : ["span", n, String(i)];
  }
  function u(i, a) {
    const f = i.type;
    if (b(f))
      return;
    const h = {};
    for (const D in i.ctx)
      _(f, D, a) && (h[D] = i.ctx[D]);
    return h;
  }
  function _(i, a, f) {
    const h = i[f];
    if (d(h) && h.includes(a) || E(h) && a in h || i.extends && _(i.extends, a, f) || i.mixins && i.mixins.some((D) => _(D, a, f)))
      return !0;
  }
  function g(i) {
    return J(i) ? "ShallowRef" : i.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Et() {
  yt();
}
process.env.NODE_ENV !== "production" && Et();
const Nt = ".my-component[data-v-aa237979]{border:2px dashed blue;padding:1rem}", St = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, bt = {
  name: "MyComponent",
  props: {
    title: {
      type: String,
      default: "Hola desde MyComponent!"
    }
  }
}, Ot = { class: "my-component" };
function wt(e, t, n, o, s, r) {
  return it(), ut("div", Ot, [
    A("h2", null, le(n.title), 1),
    A("button", {
      onClick: t[0] || (t[0] = (c) => e.$emit("onSubmit"))
    }, "Emitir evento")
  ]);
}
const Ct = /* @__PURE__ */ St(bt, [["render", wt], ["styles", [Nt]], ["__scopeId", "data-v-aa237979"]]);
export {
  Ct as default
};
