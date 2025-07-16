var re = {};
const W = re.NODE_ENV !== "production" ? Object.freeze({}) : {}, Oe = re.NODE_ENV !== "production" ? Object.freeze([]) : [], ke = () => {
}, Re = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), z = Object.assign, m = Array.isArray, Ve = (e) => Q(e) === "[object Map]", xe = (e) => Q(e) === "[object Set]", w = (e) => typeof e == "function", E = (e) => typeof e == "string", G = (e) => typeof e == "symbol", N = (e) => e !== null && typeof e == "object", se = Object.prototype.toString, Q = (e) => se.call(e), Fe = (e) => Q(e) === "[object Object]";
let ne;
const j = () => ne || (ne = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function X(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = E(o) ? De(o) : X(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (E(e) || N(e))
    return e;
}
const Ie = /;(?![^(]*\))/g, $e = /:([^]+)/, Te = /\/\*[^]*?\*\//g;
function De(e) {
  const t = {};
  return e.replace(Te, "").split(Ie).forEach((n) => {
    if (n) {
      const o = n.split($e);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Z(e) {
  let t = "";
  if (E(e))
    t = e;
  else if (m(e))
    for (let n = 0; n < e.length; n++) {
      const o = Z(e[n]);
      o && (t += o + " ");
    }
  else if (N(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ie = (e) => !!(e && e.__v_isRef === !0), ce = (e) => E(e) ? e : e == null ? "" : m(e) || N(e) && (e.toString === se || !w(e.toString)) ? ie(e) ? ce(e.value) : JSON.stringify(e, le, 2) : String(e), le = (e, t) => ie(t) ? le(e, t.value) : Ve(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[H(o, r) + " =>"] = s, n),
    {}
  )
} : xe(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => H(n))
} : G(t) ? H(t) : N(t) && !m(t) && !Fe(t) ? String(t) : t, H = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    G(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(G)
);
function ue(e) {
  return K(e) ? ue(e.__v_raw) : !!(e && e.__v_isReactive);
}
function K(e) {
  return !!(e && e.__v_isReadonly);
}
function U(e) {
  return !!(e && e.__v_isShallow);
}
function L(e) {
  return e ? !!e.__v_raw : !1;
}
function C(e) {
  const t = e && e.__v_raw;
  return t ? C(t) : e;
}
function v(e) {
  return e ? e.__v_isRef === !0 : !1;
}
var f = {};
const O = [];
function Me(e) {
  O.push(e);
}
function Pe() {
  O.pop();
}
let J = !1;
function x(e, ...t) {
  if (J) return;
  J = !0;
  const n = O.length ? O[O.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Ae();
  if (o)
    ee(
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
          ({ vnode: r }) => `at <${we(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...ze(s)), console.warn(...r);
  }
  J = !1;
}
function Ae() {
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
function ze(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...je(n));
  }), t;
}
function je({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${we(
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
  return E(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : v(t) ? (t = ae(e, C(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : w(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = C(t), n ? t : [`${e}=`, t]);
}
const fe = {
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
function ee(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    pe(s, t, n);
  }
}
function pe(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || W;
  if (t) {
    let l = t.parent;
    const u = t.proxy, g = f.NODE_ENV !== "production" ? fe[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const y = l.ec;
      if (y) {
        for (let i = 0; i < y.length; i++)
          if (y[i](e, u, g) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      ee(r, null, 10, [
        e,
        u,
        g
      ]);
      return;
    }
  }
  Ue(e, n, s, o, c);
}
function Ue(e, t, n, o = !0, s = !1) {
  if (f.NODE_ENV !== "production") {
    const r = fe[t];
    if (n && Me(n), x(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Pe(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const d = [];
let S = -1;
const R = [];
let b = null, k = 0;
const Je = /* @__PURE__ */ Promise.resolve();
let Y = null;
const Be = 100;
function qe(e) {
  let t = S + 1, n = d.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = d[o], r = F(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function We(e) {
  if (!(e.flags & 1)) {
    const t = F(e), n = d[d.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= F(n) ? d.push(e) : d.splice(qe(t), 0, e), e.flags |= 1, de();
  }
}
function de() {
  Y || (Y = Je.then(me));
}
function Ke(e) {
  m(e) ? R.push(...e) : b && e.id === -1 ? b.splice(k + 1, 0, e) : e.flags & 1 || (R.push(e), e.flags |= 1), de();
}
function Le(e) {
  if (R.length) {
    const t = [...new Set(R)].sort(
      (n, o) => F(n) - F(o)
    );
    if (R.length = 0, b) {
      b.push(...t);
      return;
    }
    for (b = t, f.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), k = 0; k < b.length; k++) {
      const n = b[k];
      f.NODE_ENV !== "production" && he(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    b = null, k = 0;
  }
}
const F = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function me(e) {
  f.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = f.NODE_ENV !== "production" ? (n) => he(e, n) : ke;
  try {
    for (S = 0; S < d.length; S++) {
      const n = d[S];
      if (n && !(n.flags & 8)) {
        if (f.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ee(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; S < d.length; S++) {
      const n = d[S];
      n && (n.flags &= -2);
    }
    S = -1, d.length = 0, Le(e), Y = null, (d.length || R.length) && me(e);
  }
}
function he(e, t) {
  const n = e.get(t) || 0;
  if (n > Be) {
    const o = t.i, s = o && be(o.type);
    return pe(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const B = /* @__PURE__ */ new Map();
f.NODE_ENV !== "production" && (j().__VUE_HMR_RUNTIME__ = {
  createRecord: q(Ye),
  rerender: q(Ge),
  reload: q(Qe)
});
const T = /* @__PURE__ */ new Map();
function Ye(e, t) {
  return T.has(e) ? !1 : (T.set(e, {
    initialDef: D(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function D(e) {
  return Ce(e) ? e.__vccOpts : e;
}
function Ge(e, t) {
  const n = T.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, D(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function Qe(e, t) {
  const n = T.get(e);
  if (!n) return;
  t = D(t), oe(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], c = D(r.type);
    let l = B.get(c);
    l || (c !== n.initialDef && oe(c, t), B.set(c, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? We(() => {
      r.parent.update(), l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(c);
  }
  Ke(() => {
    B.clear();
  });
}
function oe(e, t) {
  z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function q(e) {
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
let M = null, Xe = null;
const Ze = (e) => e.__isTeleport;
function ge(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ge(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
j().requestIdleCallback;
j().cancelIdleCallback;
const ve = Symbol.for("v-ndc"), et = {};
f.NODE_ENV !== "production" && (et.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const tt = {}, _e = (e) => Object.getPrototypeOf(e) === tt, nt = (e) => e.__isSuspense, ye = Symbol.for("v-fgt"), ot = Symbol.for("v-txt"), rt = Symbol.for("v-cmt"), I = [];
let h = null;
function st(e = !1) {
  I.push(h = e ? null : []);
}
function it() {
  I.pop(), h = I[I.length - 1] || null;
}
function ct(e) {
  return e.dynamicChildren = h || Oe, it(), h && h.push(e), e;
}
function lt(e, t, n, o, s, r) {
  return ct(
    P(
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
function ut(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const at = (...e) => Ne(
  ...e
), Se = ({ key: e }) => e ?? null, $ = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? E(e) || v(e) || w(e) ? { i: M, r: e, k: t, f: !!n } : e : null);
function P(e, t = null, n = null, o = 0, s = null, r = e === ye ? 0 : 1, c = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Se(t),
    ref: t && $(t),
    scopeId: Xe,
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
  return l ? (te(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= E(n) ? 8 : 16), f.NODE_ENV !== "production" && u.key !== u.key && x("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !c && // has current parent block
  h && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && h.push(u), u;
}
const ft = f.NODE_ENV !== "production" ? at : Ne;
function Ne(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === ve) && (f.NODE_ENV !== "production" && !e && x(`Invalid vnode type when creating vnode: ${e}.`), e = rt), ut(e)) {
    const l = A(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && te(l, n), !r && h && (l.shapeFlag & 6 ? h[h.indexOf(e)] = l : h.push(l)), l.patchFlag = -2, l;
  }
  if (Ce(e) && (e = e.__vccOpts), t) {
    t = pt(t);
    let { class: l, style: u } = t;
    l && !E(l) && (t.class = Z(l)), N(u) && (L(u) && !m(u) && (u = z({}, u)), t.style = X(u));
  }
  const c = E(e) ? 1 : nt(e) ? 128 : Ze(e) ? 64 : N(e) ? 4 : w(e) ? 2 : 0;
  return f.NODE_ENV !== "production" && c & 4 && L(e) && (e = C(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), P(
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
function pt(e) {
  return e ? L(e) || _e(e) ? z({}, e) : e : null;
}
function A(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: c, children: l, transition: u } = e, g = t ? mt(s || {}, t) : s, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && Se(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? m(r) ? r.concat($(t)) : [r, $(t)] : $(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f.NODE_ENV !== "production" && c === -1 && m(l) ? l.map(Ee) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && A(e.ssContent),
    ssFallback: e.ssFallback && A(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && ge(
    y,
    u.clone(y)
  ), y;
}
function Ee(e) {
  const t = A(e);
  return m(e.children) && (t.children = e.children.map(Ee)), t;
}
function dt(e = " ", t = 0) {
  return ft(ot, null, e, t);
}
function te(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (m(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), te(e, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !t._ && !_e(t) && (t._ctx = M);
  else w(t) ? (t = { default: t, _ctx: M }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [dt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Z([t.class, o.class]));
      else if (s === "style")
        t.style = X([t.style, o.style]);
      else if (Re(s)) {
        const r = t[s], c = o[s];
        c && r !== c && !(m(r) && r.includes(c)) && (t[s] = r ? [].concat(r, c) : c);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
{
  const e = j(), t = (n, o) => {
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
const ht = /(?:^|[-_])(\w)/g, gt = (e) => e.replace(ht, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function be(e, t = !0) {
  return w(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function we(e, t, n = !1) {
  let o = be(t);
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
function Ce(e) {
  return w(e) && "__vccOpts" in e;
}
function _t() {
  if (f.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(i) {
      if (!N(i))
        return null;
      if (i.__isVue)
        return ["div", e, "VueInstance"];
      if (v(i)) {
        const a = i.value;
        return [
          "div",
          {},
          ["span", e, y(i)],
          "<",
          l(a),
          ">"
        ];
      } else {
        if (ue(i))
          return [
            "div",
            {},
            ["span", e, U(i) ? "ShallowReactive" : "Reactive"],
            "<",
            l(i),
            `>${K(i) ? " (readonly)" : ""}`
          ];
        if (K(i))
          return [
            "div",
            {},
            ["span", e, U(i) ? "ShallowReadonly" : "Readonly"],
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
    i.type.props && i.props && a.push(c("props", C(i.props))), i.setupState !== W && a.push(c("setup", i.setupState)), i.data !== W && a.push(c("data", C(i.data)));
    const p = u(i, "computed");
    p && a.push(c("computed", p));
    const _ = u(i, "inject");
    return _ && a.push(c("injected", _)), a.push([
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
    return a = z({}, a), Object.keys(a).length ? [
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
        ...Object.keys(a).map((p) => [
          "div",
          {},
          ["span", o, p + ": "],
          l(a[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(i, a = !0) {
    return typeof i == "number" ? ["span", t, i] : typeof i == "string" ? ["span", n, JSON.stringify(i)] : typeof i == "boolean" ? ["span", o, i] : N(i) ? ["object", { object: a ? C(i) : i }] : ["span", n, String(i)];
  }
  function u(i, a) {
    const p = i.type;
    if (w(p))
      return;
    const _ = {};
    for (const V in i.ctx)
      g(p, V, a) && (_[V] = i.ctx[V]);
    return _;
  }
  function g(i, a, p) {
    const _ = i[p];
    if (m(_) && _.includes(a) || N(_) && a in _ || i.extends && g(i.extends, a, p) || i.mixins && i.mixins.some((V) => g(V, a, p)))
      return !0;
  }
  function y(i) {
    return U(i) ? "ShallowRef" : i.effect ? "ComputedRef" : "Ref";
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
  name: "MyComponent",
  props: {
    title: {
      type: String,
      default: "Hola desde mi componente!"
    }
  }
}, bt = { class: "my-component" };
function wt(e, t, n, o, s, r) {
  return st(), lt("div", bt, [
    P("h2", null, ce(n.title), 1),
    P("button", {
      onClick: t[0] || (t[0] = (c) => e.$emit("on-submit"))
    }, "Emitir evento")
  ]);
}
const Ct = /* @__PURE__ */ Nt(Et, [["render", wt], ["__scopeId", "data-v-04e536c2"]]);
export {
  Ct as default
};
