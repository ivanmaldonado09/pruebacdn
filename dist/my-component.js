/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, mt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Y = () => {
}, Sr = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), fn = (e) => e.startsWith("onUpdate:"), X = Object.assign, ro = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Cr = Object.prototype.hasOwnProperty, j = (e, t) => Cr.call(e, t), T = Array.isArray, st = (e) => Nn(e) === "[object Map]", hs = (e) => Nn(e) === "[object Set]", $ = (e) => typeof e == "function", G = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", io = (e) => (k(e) || $(e)) && $(e.then) && $(e.catch), gs = Object.prototype.toString, Nn = (e) => gs.call(e), co = (e) => Nn(e).slice(8, -1), ms = (e) => Nn(e) === "[object Object]", lo = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $t = /* @__PURE__ */ Ue(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Tr = /* @__PURE__ */ Ue(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, $r = /-(\w)/g, Ne = bn(
  (e) => e.replace($r, (t, n) => n ? n.toUpperCase() : "")
), Ir = /\B([A-Z])/g, ze = bn(
  (e) => e.replace(Ir, "-$1").toLowerCase()
), yn = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), nt = bn(
  (e) => e ? `on${yn(e)}` : ""
), rt = (e, t) => !Object.is(e, t), wt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ft = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Pr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Po;
const Wt = () => Po || (Po = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = G(o) ? Fr(o) : fo(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (G(e) || k(e))
    return e;
}
const Ar = /;(?![^(]*\))/g, Mr = /:([^]+)/, Rr = /\/\*[^]*?\*\//g;
function Fr(e) {
  const t = {};
  return e.replace(Rr, "").split(Ar).forEach((n) => {
    if (n) {
      const o = n.split(Mr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function uo(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = uo(e[n]);
      o && (t += o + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const jr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Hr = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Lr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ur = /* @__PURE__ */ Ue(jr), Br = /* @__PURE__ */ Ue(Hr), Kr = /* @__PURE__ */ Ue(Lr), Wr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", kr = /* @__PURE__ */ Ue(Wr);
function _s(e) {
  return !!e || e === "";
}
const vs = (e) => !!(e && e.__v_isRef === !0), Es = (e) => G(e) ? e : e == null ? "" : T(e) || k(e) && (e.toString === gs || !$(e.toString)) ? vs(e) ? Es(e.value) : JSON.stringify(e, Ns, 2) : String(e), Ns = (e, t) => vs(t) ? Ns(e, t.value) : st(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[Pn(o, r) + " =>"] = s, n),
    {}
  )
} : hs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pn(n))
} : Qe(t) ? Pn(t) : k(t) && !T(t) && !ms(t) ? String(t) : t, Pn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Me(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let fe;
class Gr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = fe, !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = fe;
      try {
        return fe = this, t();
      } finally {
        fe = n;
      }
    } else process.env.NODE_ENV !== "production" && Me("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = fe, fe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (fe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function qr() {
  return fe;
}
let H;
const An = /* @__PURE__ */ new WeakSet();
class bs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, fe && fe.active && fe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, An.has(this) && (An.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Os(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ao(this), Ds(this);
    const t = H, n = be;
    H = this, be = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && H !== this && Me(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ws(this), H = t, be = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ho(t);
      this.deps = this.depsTail = void 0, Ao(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? An.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wn(this) && this.run();
  }
  get dirty() {
    return Wn(this);
  }
}
let ys = 0, It, Pt;
function Os(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Pt, Pt = e;
    return;
  }
  e.next = It, It = e;
}
function ao() {
  ys++;
}
function po() {
  if (--ys > 0)
    return;
  if (Pt) {
    let t = Pt;
    for (Pt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; It; ) {
    let t = It;
    for (It = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ds(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ws(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), ho(o), Jr(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function Wn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (xs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function xs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jt) || (e.globalVersion = jt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = H, o = be;
  H = e, be = !0;
  try {
    Ds(e);
    const s = e.fn(e._value);
    (t.version === 0 || rt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    H = n, be = o, ws(e), e.flags &= -3;
  }
}
function ho(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ho(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Jr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let be = !0;
const Vs = [];
function Oe() {
  Vs.push(be), be = !1;
}
function De() {
  const e = Vs.pop();
  be = e === void 0 ? !0 : e;
}
function Ao(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = H;
    H = void 0;
    try {
      t();
    } finally {
      H = n;
    }
  }
}
let jt = 0;
class Yr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ss {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!H || !be || H === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== H)
      n = this.activeLink = new Yr(H, this), H.deps ? (n.prevDep = H.depsTail, H.depsTail.nextDep = n, H.depsTail = n) : H.deps = H.depsTail = n, Cs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = H.depsTail, n.nextDep = void 0, H.depsTail.nextDep = n, H.depsTail = n, H.deps === n && (H.deps = o);
    }
    return process.env.NODE_ENV !== "production" && H.onTrack && H.onTrack(
      X(
        {
          effect: H
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, jt++, this.notify(t);
  }
  notify(t) {
    ao();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            X(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      po();
    }
  }
}
function Cs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Cs(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const kn = /* @__PURE__ */ new WeakMap(), it = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Gn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Ht = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function J(e, t, n) {
  if (be && H) {
    let o = kn.get(e);
    o || kn.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new Ss()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function Ie(e, t, n, o, s, r) {
  const i = kn.get(e);
  if (!i) {
    jt++;
    return;
  }
  const l = (u) => {
    u && (process.env.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : u.trigger());
  };
  if (ao(), t === "clear")
    i.forEach(l);
  else {
    const u = T(e), h = u && lo(n);
    if (u && n === "length") {
      const p = Number(o);
      i.forEach((a, g) => {
        (g === "length" || g === Ht || !Qe(g) && g >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), h && l(i.get(Ht)), t) {
        case "add":
          u ? h && l(i.get("length")) : (l(i.get(it)), st(e) && l(i.get(Gn)));
          break;
        case "delete":
          u || (l(i.get(it)), st(e) && l(i.get(Gn)));
          break;
        case "set":
          st(e) && l(i.get(it));
          break;
      }
  }
  po();
}
function pt(e) {
  const t = A(e);
  return t === e ? t : (J(t, "iterate", Ht), ge(e) ? t : t.map(de));
}
function go(e) {
  return J(e = A(e), "iterate", Ht), e;
}
const zr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mn(this, Symbol.iterator, de);
  },
  concat(...e) {
    return pt(this).concat(
      ...e.map((t) => T(t) ? pt(t) : t)
    );
  },
  entries() {
    return Mn(this, "entries", (e) => (e[1] = de(e[1]), e));
  },
  every(e, t) {
    return je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return je(this, "filter", e, t, (n) => n.map(de), arguments);
  },
  find(e, t) {
    return je(this, "find", e, t, de, arguments);
  },
  findIndex(e, t) {
    return je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return je(this, "findLast", e, t, de, arguments);
  },
  findLastIndex(e, t) {
    return je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Rn(this, "includes", e);
  },
  indexOf(...e) {
    return Rn(this, "indexOf", e);
  },
  join(e) {
    return pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Rn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xt(this, "pop");
  },
  push(...e) {
    return xt(this, "push", e);
  },
  reduce(e, ...t) {
    return Mo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Mo(this, "reduceRight", e, t);
  },
  shift() {
    return xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xt(this, "splice", e);
  },
  toReversed() {
    return pt(this).toReversed();
  },
  toSorted(e) {
    return pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return xt(this, "unshift", e);
  },
  values() {
    return Mn(this, "values", de);
  }
};
function Mn(e, t, n) {
  const o = go(e), s = o[t]();
  return o !== e && !ge(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = n(r.value)), r;
  }), s;
}
const Xr = Array.prototype;
function je(e, t, n, o, s, r) {
  const i = go(e), l = i !== e && !ge(e), u = i[t];
  if (u !== Xr[t]) {
    const a = u.apply(e, r);
    return l ? de(a) : a;
  }
  let h = n;
  i !== e && (l ? h = function(a, g) {
    return n.call(this, de(a), g, e);
  } : n.length > 2 && (h = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const p = u.call(i, h, o);
  return l && s ? s(p) : p;
}
function Mo(e, t, n, o) {
  const s = go(e);
  let r = n;
  return s !== e && (ge(e) ? n.length > 3 && (r = function(i, l, u) {
    return n.call(this, i, l, u, e);
  }) : r = function(i, l, u) {
    return n.call(this, i, de(l), u, e);
  }), s[t](r, ...o);
}
function Rn(e, t, n) {
  const o = A(e);
  J(o, "iterate", Ht);
  const s = o[t](...n);
  return (s === -1 || s === !1) && un(n[0]) ? (n[0] = A(n[0]), o[t](...n)) : s;
}
function xt(e, t, n = []) {
  Oe(), ao();
  const o = A(e)[t].apply(e, n);
  return po(), De(), o;
}
const Zr = /* @__PURE__ */ Ue("__proto__,__v_isRef,__isVue"), Ts = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function Qr(e) {
  Qe(e) || (e = String(e));
  const t = A(this);
  return J(t, "has", e), t.hasOwnProperty(e);
}
class $s {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? Fs : Rs : r ? Ms : As).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = T(t);
    if (!s) {
      let u;
      if (i && (u = zr[n]))
        return u;
      if (n === "hasOwnProperty")
        return Qr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      z(t) ? t : o
    );
    return (Qe(n) ? Ts.has(n) : Zr(n)) || (s || J(t, "get", n), r) ? l : z(l) ? i && lo(n) ? l : l.value : k(l) ? s ? js(l) : mo(l) : l;
  }
}
class Is extends $s {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Xe(r);
      if (!ge(o) && !Xe(o) && (r = A(r), o = A(o)), !T(t) && z(r) && !z(o))
        return u ? !1 : (r.value = o, !0);
    }
    const i = T(t) && lo(n) ? Number(n) < t.length : j(t, n), l = Reflect.set(
      t,
      n,
      o,
      z(t) ? t : s
    );
    return t === A(s) && (i ? rt(o, r) && Ie(t, "set", n, o, r) : Ie(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = j(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Ie(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Qe(n) || !Ts.has(n)) && J(t, "has", n), o;
  }
  ownKeys(t) {
    return J(
      t,
      "iterate",
      T(t) ? "length" : it
    ), Reflect.ownKeys(t);
  }
}
class Ps extends $s {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Me(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Me(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ei = /* @__PURE__ */ new Is(), ti = /* @__PURE__ */ new Ps(), ni = /* @__PURE__ */ new Is(!0), oi = /* @__PURE__ */ new Ps(!0), qn = (e) => e, Xt = (e) => Reflect.getPrototypeOf(e);
function si(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = A(s), i = st(r), l = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, h = s[e](...o), p = n ? qn : t ? Jn : de;
    return !t && J(
      r,
      "iterate",
      u ? Gn : it
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = h.next();
        return g ? { value: a, done: g } : {
          value: l ? [p(a[0]), p(a[1])] : p(a),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Zt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Me(
        `${yn(e)} operation ${n}failed: target is readonly.`,
        A(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ri(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = A(r), l = A(s);
      e || (rt(s, l) && J(i, "get", s), J(i, "get", l));
      const { has: u } = Xt(i), h = t ? qn : e ? Jn : de;
      if (u.call(i, s))
        return h(r.get(s));
      if (u.call(i, l))
        return h(r.get(l));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && J(A(s), "iterate", it), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw, i = A(r), l = A(s);
      return e || (rt(s, l) && J(i, "has", s), J(i, "has", l)), s === l ? r.has(s) : r.has(s) || r.has(l);
    },
    forEach(s, r) {
      const i = this, l = i.__v_raw, u = A(l), h = t ? qn : e ? Jn : de;
      return !e && J(u, "iterate", it), l.forEach((p, a) => s.call(r, h(p), h(a), i));
    }
  };
  return X(
    n,
    e ? {
      add: Zt("add"),
      set: Zt("set"),
      delete: Zt("delete"),
      clear: Zt("clear")
    } : {
      add(s) {
        !t && !ge(s) && !Xe(s) && (s = A(s));
        const r = A(this);
        return Xt(r).has.call(r, s) || (r.add(s), Ie(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !ge(r) && !Xe(r) && (r = A(r));
        const i = A(this), { has: l, get: u } = Xt(i);
        let h = l.call(i, s);
        h ? process.env.NODE_ENV !== "production" && Ro(i, l, s) : (s = A(s), h = l.call(i, s));
        const p = u.call(i, s);
        return i.set(s, r), h ? rt(r, p) && Ie(i, "set", s, r, p) : Ie(i, "add", s, r), this;
      },
      delete(s) {
        const r = A(this), { has: i, get: l } = Xt(r);
        let u = i.call(r, s);
        u ? process.env.NODE_ENV !== "production" && Ro(r, i, s) : (s = A(s), u = i.call(r, s));
        const h = l ? l.call(r, s) : void 0, p = r.delete(s);
        return u && Ie(r, "delete", s, void 0, h), p;
      },
      clear() {
        const s = A(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? st(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return r && Ie(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = si(s, e, t);
  }), n;
}
function On(e, t) {
  const n = ri(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    j(n, s) && s in o ? n : o,
    s,
    r
  );
}
const ii = {
  get: /* @__PURE__ */ On(!1, !1)
}, ci = {
  get: /* @__PURE__ */ On(!1, !0)
}, li = {
  get: /* @__PURE__ */ On(!0, !1)
}, fi = {
  get: /* @__PURE__ */ On(!0, !0)
};
function Ro(e, t, n) {
  const o = A(n);
  if (o !== n && t.call(e, o)) {
    const s = co(e);
    Me(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const As = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Rs = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap();
function ui(e) {
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
function ai(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ui(co(e));
}
function mo(e) {
  return Xe(e) ? e : Dn(
    e,
    !1,
    ei,
    ii,
    As
  );
}
function pi(e) {
  return Dn(
    e,
    !1,
    ni,
    ci,
    Ms
  );
}
function js(e) {
  return Dn(
    e,
    !0,
    ti,
    li,
    Rs
  );
}
function Pe(e) {
  return Dn(
    e,
    !0,
    oi,
    fi,
    Fs
  );
}
function Dn(e, t, n, o, s) {
  if (!k(e))
    return process.env.NODE_ENV !== "production" && Me(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = ai(e);
  if (r === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, l), l;
}
function _t(e) {
  return Xe(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
function ge(e) {
  return !!(e && e.__v_isShallow);
}
function un(e) {
  return e ? !!e.__v_raw : !1;
}
function A(e) {
  const t = e && e.__v_raw;
  return t ? A(t) : e;
}
function di(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && Ft(e, "__v_skip", !0), e;
}
const de = (e) => k(e) ? mo(e) : e, Jn = (e) => k(e) ? js(e) : e;
function z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function hi(e) {
  return z(e) ? e.value : e;
}
const gi = {
  get: (e, t, n) => t === "__v_raw" ? e : hi(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return z(s) && !z(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Hs(e) {
  return _t(e) ? e : new Proxy(e, gi);
}
class mi {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ss(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    H !== this)
      return Os(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return xs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Me("Write operation failed: computed value is readonly");
  }
}
function _i(e, t, n = !1) {
  let o, s;
  $(e) ? o = e : (o = e.get, s = e.set);
  const r = new mi(o, s, n);
  return process.env.NODE_ENV, r;
}
const Qt = {}, an = /* @__PURE__ */ new WeakMap();
let ot;
function vi(e, t = !1, n = ot) {
  if (n) {
    let o = an.get(n);
    o || an.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Me(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ei(e, t, n = B) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: l, call: u } = n, h = (C) => {
    (n.onWarn || Me)(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (C) => s ? C : ge(C) || s === !1 || s === 0 ? Je(C, 1) : Je(C);
  let a, g, w, V, P = !1, ee = !1;
  if (z(e) ? (g = () => e.value, P = ge(e)) : _t(e) ? (g = () => p(e), P = !0) : T(e) ? (ee = !0, P = e.some((C) => _t(C) || ge(C)), g = () => e.map((C) => {
    if (z(C))
      return C.value;
    if (_t(C))
      return p(C);
    if ($(C))
      return u ? u(C, 2) : C();
    process.env.NODE_ENV !== "production" && h(C);
  })) : $(e) ? t ? g = u ? () => u(e, 2) : e : g = () => {
    if (w) {
      Oe();
      try {
        w();
      } finally {
        De();
      }
    }
    const C = ot;
    ot = a;
    try {
      return u ? u(e, 3, [V]) : e(V);
    } finally {
      ot = C;
    }
  } : (g = Y, process.env.NODE_ENV !== "production" && h(e)), t && s) {
    const C = g, Z = s === !0 ? 1 / 0 : s;
    g = () => Je(C(), Z);
  }
  const K = qr(), q = () => {
    a.stop(), K && K.active && ro(K.effects, a);
  };
  if (r && t) {
    const C = t;
    t = (...Z) => {
      C(...Z), q();
    };
  }
  let L = ee ? new Array(e.length).fill(Qt) : Qt;
  const ae = (C) => {
    if (!(!(a.flags & 1) || !a.dirty && !C))
      if (t) {
        const Z = a.run();
        if (s || P || (ee ? Z.some((me, te) => rt(me, L[te])) : rt(Z, L))) {
          w && w();
          const me = ot;
          ot = a;
          try {
            const te = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              L === Qt ? void 0 : ee && L[0] === Qt ? [] : L,
              V
            ];
            L = Z, u ? u(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            ot = me;
          }
        }
      } else
        a.run();
  };
  return l && l(ae), a = new bs(g), a.scheduler = i ? () => i(ae, !1) : ae, V = (C) => vi(C, !1, a), w = a.onStop = () => {
    const C = an.get(a);
    if (C) {
      if (u)
        u(C, 4);
      else
        for (const Z of C) Z();
      an.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ae(!0) : L = a.run() : i ? i(ae.bind(null, !0), !0) : a.run(), q.pause = a.pause.bind(a), q.resume = a.resume.bind(a), q.stop = q, q;
}
function Je(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, z(e))
    Je(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      Je(e[o], t, n);
  else if (hs(e) || st(e))
    e.forEach((o) => {
      Je(o, t, n);
    });
  else if (ms(e)) {
    for (const o in e)
      Je(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Je(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ct = [];
function en(e) {
  ct.push(e);
}
function tn() {
  ct.pop();
}
let Fn = !1;
function y(e, ...t) {
  if (Fn) return;
  Fn = !0, Oe();
  const n = ct.length ? ct[ct.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Ni();
  if (o)
    Nt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Cn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...bi(s)), console.warn(...r);
  }
  De(), Fn = !1;
}
function Ni() {
  let e = ct[ct.length - 1];
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
function bi(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...yi(n));
  }), t;
}
function yi({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Cn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Oi(e.props), r] : [s + r];
}
function Oi(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ls(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ls(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : z(t) ? (t = Ls(e, A(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = A(t), n ? t : [`${e}=`, t]);
}
const _o = {
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
function Nt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    kt(s, t, n);
  }
}
function Re(e, t, n, o) {
  if ($(e)) {
    const s = Nt(e, t, n, o);
    return s && io(s) && s.catch((r) => {
      kt(r, t, n);
    }), s;
  }
  if (T(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(Re(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && y(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function kt(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || B;
  if (t) {
    let l = t.parent;
    const u = t.proxy, h = process.env.NODE_ENV !== "production" ? _o[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Oe(), Nt(r, null, 10, [
        e,
        u,
        h
      ]), De();
      return;
    }
  }
  Di(e, n, s, o, i);
}
function Di(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = _o[t];
    if (n && en(n), y(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && tn(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const se = [];
let Te = -1;
const vt = [];
let Ge = null, gt = 0;
const Us = /* @__PURE__ */ Promise.resolve();
let pn = null;
const wi = 100;
function xi(e) {
  const t = pn || Us;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vi(e) {
  let t = Te + 1, n = se.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = se[o], r = Lt(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function wn(e) {
  if (!(e.flags & 1)) {
    const t = Lt(e), n = se[se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Lt(n) ? se.push(e) : se.splice(Vi(t), 0, e), e.flags |= 1, Bs();
  }
}
function Bs() {
  pn || (pn = Us.then(ks));
}
function Ks(e) {
  T(e) ? vt.push(...e) : Ge && e.id === -1 ? Ge.splice(gt + 1, 0, e) : e.flags & 1 || (vt.push(e), e.flags |= 1), Bs();
}
function Fo(e, t, n = Te + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < se.length; n++) {
    const o = se[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && vo(t, o))
        continue;
      se.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Ws(e) {
  if (vt.length) {
    const t = [...new Set(vt)].sort(
      (n, o) => Lt(n) - Lt(o)
    );
    if (vt.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), gt = 0; gt < Ge.length; gt++) {
      const n = Ge[gt];
      process.env.NODE_ENV !== "production" && vo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Ge = null, gt = 0;
  }
}
const Lt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ks(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => vo(e, n) : Y;
  try {
    for (Te = 0; Te < se.length; Te++) {
      const n = se[Te];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Nt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Te < se.length; Te++) {
      const n = se[Te];
      n && (n.flags &= -2);
    }
    Te = -1, se.length = 0, Ws(e), pn = null, (se.length || vt.length) && ks(e);
  }
}
function vo(e, t) {
  const n = e.get(t) || 0;
  if (n > wi) {
    const o = t.i, s = o && Or(o.type);
    return kt(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ae = !1;
const nn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Wt().__VUE_HMR_RUNTIME__ = {
  createRecord: jn(Gs),
  rerender: jn(Ti),
  reload: jn($i)
});
const ut = /* @__PURE__ */ new Map();
function Si(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (Gs(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function Ci(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function Gs(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: dn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function dn(e) {
  return Dr(e) ? e.__vccOpts : e;
}
function Ti(e, t) {
  const n = ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, dn(o.type).render = t), o.renderCache = [], Ae = !0, o.update(), Ae = !1;
  }));
}
function $i(e, t) {
  const n = ut.get(e);
  if (!n) return;
  t = dn(t), jo(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = dn(r.type);
    let l = nn.get(i);
    l || (i !== n.initialDef && jo(i, t), nn.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? wn(() => {
      Ae = !0, r.parent.update(), Ae = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  Ks(() => {
    nn.clear();
  });
}
function jo(e, t) {
  X(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function jn(e) {
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
let Ee, Ct = [], Yn = !1;
function Gt(e, ...t) {
  Ee ? Ee.emit(e, ...t) : Yn || Ct.push({ event: e, args: t });
}
function Eo(e, t) {
  var n, o;
  Ee = e, Ee ? (Ee.enabled = !0, Ct.forEach(({ event: s, args: r }) => Ee.emit(s, ...r)), Ct = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Eo(r, t);
  }), setTimeout(() => {
    Ee || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Yn = !0, Ct = []);
  }, 3e3)) : (Yn = !0, Ct = []);
}
function Ii(e, t) {
  Gt("app:init", e, t, {
    Fragment: $e,
    Text: qt,
    Comment: ye,
    Static: rn
  });
}
function Pi(e) {
  Gt("app:unmount", e);
}
const Ai = /* @__PURE__ */ No(
  "component:added"
  /* COMPONENT_ADDED */
), qs = /* @__PURE__ */ No(
  "component:updated"
  /* COMPONENT_UPDATED */
), Mi = /* @__PURE__ */ No(
  "component:removed"
  /* COMPONENT_REMOVED */
), Ri = (e) => {
  Ee && typeof Ee.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ee.cleanupBuffer(e) && Mi(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function No(e) {
  return (t) => {
    Gt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Fi = /* @__PURE__ */ Js(
  "perf:start"
  /* PERFORMANCE_START */
), ji = /* @__PURE__ */ Js(
  "perf:end"
  /* PERFORMANCE_END */
);
function Js(e) {
  return (t, n, o) => {
    Gt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Hi(e, t, n) {
  Gt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ue = null, Ys = null;
function hn(e) {
  const t = ue;
  return ue = e, Ys = e && e.type.__scopeId || null, t;
}
function Li(e, t = ue, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && zo(-1);
    const r = hn(t);
    let i;
    try {
      i = e(...s);
    } finally {
      hn(r), o._d && zo(1);
    }
    return process.env.NODE_ENV !== "production" && qs(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function zs(e) {
  Tr(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function et(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let u = l.dir[o];
    u && (Oe(), Re(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), De());
  }
}
const Ui = Symbol("_vte"), Bi = (e) => e.__isTeleport;
function bo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, bo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Xs(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Ki = /* @__PURE__ */ new WeakSet();
function At(e, t, n, o, s = !1) {
  if (T(e)) {
    e.forEach(
      (V, P) => At(
        V,
        t && (T(t) ? t[P] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Mt(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && At(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? So(o.component) : o.el, i = s ? null : r, { i: l, r: u } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, p = l.refs === B ? l.refs = {} : l.refs, a = l.setupState, g = A(a), w = a === B ? () => !1 : (V) => process.env.NODE_ENV !== "production" && (j(g, V) && !z(g[V]) && y(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), Ki.has(g[V])) ? !1 : j(g, V);
  if (h != null && h !== u && (G(h) ? (p[h] = null, w(h) && (a[h] = null)) : z(h) && (h.value = null)), $(u))
    Nt(u, l, 12, [i, p]);
  else {
    const V = G(u), P = z(u);
    if (V || P) {
      const ee = () => {
        if (e.f) {
          const K = V ? w(u) ? a[u] : p[u] : u.value;
          s ? T(K) && ro(K, r) : T(K) ? K.includes(r) || K.push(r) : V ? (p[u] = [r], w(u) && (a[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else V ? (p[u] = i, w(u) && (a[u] = i)) : P ? (u.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
      };
      i ? (ee.id = -1, pe(ee, n)) : ee();
    } else process.env.NODE_ENV !== "production" && y("Invalid template ref type:", u, `(${typeof u})`);
  }
}
Wt().requestIdleCallback;
Wt().cancelIdleCallback;
const Mt = (e) => !!e.type.__asyncLoader, yo = (e) => e.type.__isKeepAlive;
function Wi(e, t) {
  Zs(e, "a", t);
}
function ki(e, t) {
  Zs(e, "da", t);
}
function Zs(e, t, n = Q) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (xn(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      yo(s.parent.vnode) && Gi(o, t, n, s), s = s.parent;
  }
}
function Gi(e, t, n, o) {
  const s = xn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Qs(() => {
    ro(o[t], s);
  }, n);
}
function xn(e, t, n = Q, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Oe();
      const l = Jt(n), u = Re(t, n, e, i);
      return l(), De(), u;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = nt(_o[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Be = (e) => (t, n = Q) => {
  (!Bt || e === "sp") && xn(e, (...o) => t(...o), n);
}, qi = Be("bm"), Ji = Be("m"), Yi = Be(
  "bu"
), zi = Be("u"), Xi = Be(
  "bum"
), Qs = Be("um"), Zi = Be(
  "sp"
), Qi = Be("rtg"), ec = Be("rtc");
function tc(e, t = Q) {
  xn("ec", e, t);
}
const nc = Symbol.for("v-ndc"), zn = (e) => e ? br(e) ? So(e) : zn(e.parent) : null, lt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ X(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Pe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Pe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Pe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Pe(e.refs) : e.refs,
    $parent: (e) => zn(e.parent),
    $root: (e) => zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => nr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xi.bind(e.proxy)),
    $watch: (e) => Mc.bind(e)
  })
), Oo = (e) => e === "_" || e === "$", Hn = (e, t) => e !== B && !e.__isScriptSetup && j(e, t), er = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Hn(o, t))
          return i[t] = 1, o[t];
        if (s !== B && j(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && j(h, t)
        )
          return i[t] = 3, r[t];
        if (n !== B && j(n, t))
          return i[t] = 4, n[t];
        Xn && (i[t] = 0);
      }
    }
    const p = lt[t];
    let a, g;
    if (p)
      return t === "$attrs" ? (J(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && _n()) : process.env.NODE_ENV !== "production" && t === "$slots" && J(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== B && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, j(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && ue && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== B && Oo(t[0]) && j(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ue && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Hn(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && j(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== B && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== B && j(e, i) || Hn(t, i) || (l = r[0]) && j(l, i) || j(o, i) || j(lt, i) || j(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (er.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function oc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(lt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => lt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Y
    });
  }), t;
}
function sc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Y
    });
  });
}
function rc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(A(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Oo(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Y
      });
    }
  });
}
function Ho(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ic() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Xn = !0;
function cc(e) {
  const t = nr(e), n = e.proxy, o = e.ctx;
  Xn = !1, t.beforeCreate && Lo(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: u,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: g,
    beforeUpdate: w,
    updated: V,
    activated: P,
    deactivated: ee,
    beforeDestroy: K,
    beforeUnmount: q,
    destroyed: L,
    unmounted: ae,
    render: C,
    renderTracked: Z,
    renderTriggered: me,
    errorCaptured: te,
    serverPrefetch: re,
    // public API
    expose: Fe,
    inheritAttrs: Ke,
    // assets
    components: _e,
    directives: Yt,
    filters: Co
  } = t, We = process.env.NODE_ENV !== "production" ? ic() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const M in R)
        We("Props", M);
  }
  if (h && lc(h, o, We), i)
    for (const R in i) {
      const M = i[R];
      $(M) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: M.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = M.bind(n), process.env.NODE_ENV !== "production" && We("Methods", R)) : process.env.NODE_ENV !== "production" && y(
        `Method "${R}" has type "${typeof M}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !$(s) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && io(R) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !k(R))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = mo(R), process.env.NODE_ENV !== "production")
      for (const M in R)
        We("Data", M), Oo(M[0]) || Object.defineProperty(o, M, {
          configurable: !0,
          enumerable: !0,
          get: () => R[M],
          set: Y
        });
  }
  if (Xn = !0, r)
    for (const R in r) {
      const M = r[R], we = $(M) ? M.bind(n, n) : $(M.get) ? M.get.bind(n, n) : Y;
      process.env.NODE_ENV !== "production" && we === Y && y(`Computed property "${R}" has no getter.`);
      const Tn = !$(M) && $(M.set) ? M.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : Y, bt = fl({
        get: we,
        set: Tn
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => bt.value,
        set: (at) => bt.value = at
      }), process.env.NODE_ENV !== "production" && We("Computed", R);
    }
  if (l)
    for (const R in l)
      tr(l[R], o, n, R);
  if (u) {
    const R = $(u) ? u.call(n) : u;
    Reflect.ownKeys(R).forEach((M) => {
      hc(M, R[M]);
    });
  }
  p && Lo(p, e, "c");
  function ie(R, M) {
    T(M) ? M.forEach((we) => R(we.bind(n))) : M && R(M.bind(n));
  }
  if (ie(qi, a), ie(Ji, g), ie(Yi, w), ie(zi, V), ie(Wi, P), ie(ki, ee), ie(tc, te), ie(ec, Z), ie(Qi, me), ie(Xi, q), ie(Qs, ae), ie(Zi, re), T(Fe))
    if (Fe.length) {
      const R = e.exposed || (e.exposed = {});
      Fe.forEach((M) => {
        Object.defineProperty(R, M, {
          get: () => n[M],
          set: (we) => n[M] = we
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Y && (e.render = C), Ke != null && (e.inheritAttrs = Ke), _e && (e.components = _e), Yt && (e.directives = Yt), re && Xs(e);
}
function lc(e, t, n = Y) {
  T(e) && (e = Zn(e));
  for (const o in e) {
    const s = e[o];
    let r;
    k(s) ? "default" in s ? r = on(
      s.from || o,
      s.default,
      !0
    ) : r = on(s.from || o) : r = on(s), z(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Lo(e, t, n) {
  Re(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function tr(e, t, n, o) {
  let s = o.includes(".") ? hr(n, o) : () => n[o];
  if (G(e)) {
    const r = t[e];
    $(r) ? Un(s, r) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    Un(s, e.bind(n));
  else if (k(e))
    if (T(e))
      e.forEach((r) => tr(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? Un(s, r, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function nr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let u;
  return l ? u = l : !s.length && !n && !o ? u = t : (u = {}, s.length && s.forEach(
    (h) => gn(u, h, i, !0)
  ), gn(u, t, i)), k(t) && r.set(t, u), u;
}
function gn(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && gn(e, r, n, !0), s && s.forEach(
    (i) => gn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = fc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const fc = {
  data: Uo,
  props: Bo,
  emits: Bo,
  // objects
  methods: Tt,
  computed: Tt,
  // lifecycle
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  // assets
  components: Tt,
  directives: Tt,
  // watch
  watch: ac,
  // provide / inject
  provide: Uo,
  inject: uc
};
function Uo(e, t) {
  return t ? e ? function() {
    return X(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function uc(e, t) {
  return Tt(Zn(e), Zn(t));
}
function Zn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? X(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Bo(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : X(
    /* @__PURE__ */ Object.create(null),
    Ho(e),
    Ho(t ?? {})
  ) : t;
}
function ac(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = X(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = oe(e[o], t[o]);
  return n;
}
function or() {
  return {
    app: null,
    config: {
      isNativeTag: Sr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let pc = 0;
function dc(e, t) {
  return function(o, s = null) {
    $(o) || (o = X({}, o)), s != null && !k(s) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), s = null);
    const r = or(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const h = r.app = {
      _uid: pc++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: es,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && $(p.install) ? (i.add(p), p.install(h, ...a)) : $(p) ? (i.add(p), p(h, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), h;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && oo(p, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[p] && y(`Component "${p}" has already been registered in target app.`), r.components[p] = a, h) : r.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && zs(p), a ? (process.env.NODE_ENV !== "production" && r.directives[p] && y(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, h) : r.directives[p];
      },
      mount(p, a, g) {
        if (u)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const w = h._ceVNode || ft(o, s);
          return w.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const V = Ze(w);
            V.el = null, e(V, p, g);
          }), e(w, p, g), u = !0, h._container = p, p.__vue_app__ = h, process.env.NODE_ENV !== "production" && (h._instance = w.component, Ii(h, es)), So(w.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        u ? (Re(
          l,
          h._instance,
          16
        ), e(null, h._container), process.env.NODE_ENV !== "production" && (h._instance = null, Pi(h)), delete h._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (j(r.provides, p) ? y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = a, h;
      },
      runWithContext(p) {
        const a = Et;
        Et = h;
        try {
          return p();
        } finally {
          Et = a;
        }
      }
    };
    return h;
  };
}
let Et = null;
function hc(e, t) {
  if (!Q)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = Q.provides;
    const o = Q.parent && Q.parent.provides;
    o === n && (n = Q.provides = Object.create(o)), n[e] = t;
  }
}
function on(e, t, n = !1) {
  const o = Q || ue;
  if (o || Et) {
    let s = Et ? Et._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const sr = {}, rr = () => Object.create(sr), ir = (e) => Object.getPrototypeOf(e) === sr;
function gc(e, t, n, o = !1) {
  const s = {}, r = rr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), cr(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && fr(t || {}, s, e), n ? e.props = o ? s : pi(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function mc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function _c(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = A(s), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && mc(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let g = p[a];
        if (Vn(e.emitsOptions, g))
          continue;
        const w = t[g];
        if (u)
          if (j(r, g))
            w !== r[g] && (r[g] = w, h = !0);
          else {
            const V = Ne(g);
            s[V] = Qn(
              u,
              l,
              V,
              w,
              e,
              !1
            );
          }
        else
          w !== r[g] && (r[g] = w, h = !0);
      }
    }
  } else {
    cr(e, t, s, r) && (h = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !j(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = ze(a)) === a || !j(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (s[a] = Qn(
        u,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (r !== l)
      for (const a in r)
        (!t || !j(t, a)) && (delete r[a], h = !0);
  }
  h && Ie(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && fr(t || {}, s, e);
}
function cr(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let u in t) {
      if ($t(u))
        continue;
      const h = t[u];
      let p;
      s && j(s, p = Ne(u)) ? !r || !r.includes(p) ? n[p] = h : (l || (l = {}))[p] = h : Vn(e.emitsOptions, u) || (!(u in o) || h !== o[u]) && (o[u] = h, i = !0);
    }
  if (r) {
    const u = A(n), h = l || B;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = Qn(
        s,
        u,
        a,
        h[a],
        e,
        !j(h, a)
      );
    }
  }
  return i;
}
function Qn(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = j(i, "default");
    if (l && o === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && $(u)) {
        const { propsDefaults: h } = s;
        if (n in h)
          o = h[n];
        else {
          const p = Jt(s);
          o = h[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        o = u;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === ze(n)) && (o = !0));
  }
  return o;
}
const vc = /* @__PURE__ */ new WeakMap();
function lr(e, t, n = !1) {
  const o = n ? vc : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let u = !1;
  if (!$(e)) {
    const p = (a) => {
      u = !0;
      const [g, w] = lr(a, t, !0);
      X(i, g), w && l.push(...w);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return k(e) && o.set(e, mt), mt;
  if (T(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !G(r[p]) && y("props must be strings when using array syntax.", r[p]);
      const a = Ne(r[p]);
      Ko(a) && (i[a] = B);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !k(r) && y("invalid props options", r);
    for (const p in r) {
      const a = Ne(p);
      if (Ko(a)) {
        const g = r[p], w = i[a] = T(g) || $(g) ? { type: g } : X({}, g), V = w.type;
        let P = !1, ee = !0;
        if (T(V))
          for (let K = 0; K < V.length; ++K) {
            const q = V[K], L = $(q) && q.name;
            if (L === "Boolean") {
              P = !0;
              break;
            } else L === "String" && (ee = !1);
          }
        else
          P = $(V) && V.name === "Boolean";
        w[
          0
          /* shouldCast */
        ] = P, w[
          1
          /* shouldCastTrue */
        ] = ee, (P || j(w, "default")) && l.push(a);
      }
    }
  }
  const h = [i, l];
  return k(e) && o.set(e, h), h;
}
function Ko(e) {
  return e[0] !== "$" && !$t(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ec(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function fr(e, t, n) {
  const o = A(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => Ne(i));
  for (const i in s) {
    let l = s[i];
    l != null && Nc(
      i,
      o[i],
      l,
      process.env.NODE_ENV !== "production" ? Pe(o) : o,
      !r.includes(i)
    );
  }
}
function Nc(e, t, n, o, s) {
  const { type: r, required: i, validator: l, skipCheck: u } = n;
  if (i && s) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !u) {
      let h = !1;
      const p = T(r) ? r : [r], a = [];
      for (let g = 0; g < p.length && !h; g++) {
        const { valid: w, expectedType: V } = yc(t, p[g]);
        a.push(V || ""), h = w;
      }
      if (!h) {
        y(Oc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const bc = /* @__PURE__ */ Ue(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function yc(e, t) {
  let n;
  const o = Ec(t);
  if (o === "null")
    n = e === null;
  else if (bc(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = k(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Oc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(yn).join(" | ")}`;
  const s = n[0], r = co(t), i = Wo(t, s), l = Wo(t, r);
  return n.length === 1 && ko(s) && !Dc(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, ko(r) && (o += `with value ${l}.`), o;
}
function Wo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ko(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Dc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Do = (e) => e[0] === "_" || e === "$stable", wo = (e) => T(e) ? e.map(ve) : [ve(e)], wc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Li((...s) => (process.env.NODE_ENV !== "production" && Q && !(n === null && ue) && !(n && n.root !== Q.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), wo(t(...s))), n);
  return o._c = !1, o;
}, ur = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (Do(s)) continue;
    const r = e[s];
    if ($(r))
      t[s] = wc(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = wo(r);
      t[s] = () => i;
    }
  }
}, ar = (e, t) => {
  process.env.NODE_ENV !== "production" && !yo(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = wo(t);
  e.slots.default = () => n;
}, eo = (e, t, n) => {
  for (const o in t)
    (n || !Do(o)) && (e[o] = t[o]);
}, xc = (e, t, n) => {
  const o = e.slots = rr();
  if (e.vnode.shapeFlag & 32) {
    const s = t.__;
    s && Ft(o, "__", s, !0);
    const r = t._;
    r ? (eo(o, t, n), n && Ft(o, "_", r, !0)) : ur(t, o);
  } else t && ar(e, t);
}, Vc = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = B;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ae ? (eo(s, t, n), Ie(e, "set", "$slots")) : n && l === 1 ? r = !1 : eo(s, t, n) : (r = !t.$stable, ur(t, s)), i = t;
  } else t && (ar(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !Do(l) && i[l] == null && delete s[l];
};
let Vt, Ye;
function dt(e, t) {
  e.appContext.config.performance && mn() && Ye.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Fi(e, t, mn() ? Ye.now() : Date.now());
}
function ht(e, t) {
  if (e.appContext.config.performance && mn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Ye.mark(o), Ye.measure(
      `<${Cn(e, e.type)}> ${t}`,
      n,
      o
    ), Ye.clearMarks(n), Ye.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && ji(e, t, mn() ? Ye.now() : Date.now());
}
function mn() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, Ye = window.performance) : Vt = !1), Vt;
}
function Sc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const pe = Bc;
function Cc(e) {
  return Tc(e);
}
function Tc(e, t) {
  Sc();
  const n = Wt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Eo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: u,
    setText: h,
    setElementText: p,
    parentNode: a,
    nextSibling: g,
    setScopeId: w = Y,
    insertStaticContent: V
  } = e, P = (c, f, d, v = null, m = null, _ = null, O = void 0, b = null, N = process.env.NODE_ENV !== "production" && Ae ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !St(c, f) && (v = zt(c), ke(c, m, _, !0), c = null), f.patchFlag === -2 && (N = !1, f.dynamicChildren = null);
    const { type: E, ref: S, shapeFlag: D } = f;
    switch (E) {
      case qt:
        ee(c, f, d, v);
        break;
      case ye:
        K(c, f, d, v);
        break;
      case rn:
        c == null ? q(f, d, v, O) : process.env.NODE_ENV !== "production" && L(c, f, d, O);
        break;
      case $e:
        Yt(
          c,
          f,
          d,
          v,
          m,
          _,
          O,
          b,
          N
        );
        break;
      default:
        D & 1 ? Z(
          c,
          f,
          d,
          v,
          m,
          _,
          O,
          b,
          N
        ) : D & 6 ? Co(
          c,
          f,
          d,
          v,
          m,
          _,
          O,
          b,
          N
        ) : D & 64 || D & 128 ? E.process(
          c,
          f,
          d,
          v,
          m,
          _,
          O,
          b,
          N,
          Ot
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", E, `(${typeof E})`);
    }
    S != null && m ? At(S, c && c.ref, _, f || c, !f) : S == null && c && c.ref != null && At(c.ref, null, _, c, !0);
  }, ee = (c, f, d, v) => {
    if (c == null)
      o(
        f.el = l(f.children),
        d,
        v
      );
    else {
      const m = f.el = c.el;
      f.children !== c.children && h(m, f.children);
    }
  }, K = (c, f, d, v) => {
    c == null ? o(
      f.el = u(f.children || ""),
      d,
      v
    ) : f.el = c.el;
  }, q = (c, f, d, v) => {
    [c.el, c.anchor] = V(
      c.children,
      f,
      d,
      v,
      c.el,
      c.anchor
    );
  }, L = (c, f, d, v) => {
    if (f.children !== c.children) {
      const m = g(c.anchor);
      C(c), [f.el, f.anchor] = V(
        f.children,
        d,
        m,
        v
      );
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, ae = ({ el: c, anchor: f }, d, v) => {
    let m;
    for (; c && c !== f; )
      m = g(c), o(c, d, v), c = m;
    o(f, d, v);
  }, C = ({ el: c, anchor: f }) => {
    let d;
    for (; c && c !== f; )
      d = g(c), s(c), c = d;
    s(f);
  }, Z = (c, f, d, v, m, _, O, b, N) => {
    f.type === "svg" ? O = "svg" : f.type === "math" && (O = "mathml"), c == null ? me(
      f,
      d,
      v,
      m,
      _,
      O,
      b,
      N
    ) : Fe(
      c,
      f,
      m,
      _,
      O,
      b,
      N
    );
  }, me = (c, f, d, v, m, _, O, b) => {
    let N, E;
    const { props: S, shapeFlag: D, transition: x, dirs: I } = c;
    if (N = c.el = i(
      c.type,
      _,
      S && S.is,
      S
    ), D & 8 ? p(N, c.children) : D & 16 && re(
      c.children,
      N,
      null,
      v,
      m,
      Ln(c, _),
      O,
      b
    ), I && et(c, null, v, "created"), te(N, c, c.scopeId, O, v), S) {
      for (const W in S)
        W !== "value" && !$t(W) && r(N, W, null, S[W], _, v);
      "value" in S && r(N, "value", null, S.value, _), (E = S.onVnodeBeforeMount) && Ce(E, v, c);
    }
    process.env.NODE_ENV !== "production" && (Ft(N, "__vnode", c, !0), Ft(N, "__vueParentComponent", v, !0)), I && et(c, null, v, "beforeMount");
    const F = $c(m, x);
    F && x.beforeEnter(N), o(N, f, d), ((E = S && S.onVnodeMounted) || F || I) && pe(() => {
      E && Ce(E, v, c), F && x.enter(N), I && et(c, null, v, "mounted");
    }, m);
  }, te = (c, f, d, v, m) => {
    if (d && w(c, d), v)
      for (let _ = 0; _ < v.length; _++)
        w(c, v[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = xo(_.children) || _), f === _ || _r(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const O = m.vnode;
        te(
          c,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, re = (c, f, d, v, m, _, O, b, N = 0) => {
    for (let E = N; E < c.length; E++) {
      const S = c[E] = b ? qe(c[E]) : ve(c[E]);
      P(
        null,
        S,
        f,
        d,
        v,
        m,
        _,
        O,
        b
      );
    }
  }, Fe = (c, f, d, v, m, _, O) => {
    const b = f.el = c.el;
    process.env.NODE_ENV !== "production" && (b.__vnode = f);
    let { patchFlag: N, dynamicChildren: E, dirs: S } = f;
    N |= c.patchFlag & 16;
    const D = c.props || B, x = f.props || B;
    let I;
    if (d && tt(d, !1), (I = x.onVnodeBeforeUpdate) && Ce(I, d, f, c), S && et(f, c, d, "beforeUpdate"), d && tt(d, !0), process.env.NODE_ENV !== "production" && Ae && (N = 0, O = !1, E = null), (D.innerHTML && x.innerHTML == null || D.textContent && x.textContent == null) && p(b, ""), E ? (Ke(
      c.dynamicChildren,
      E,
      b,
      d,
      v,
      Ln(f, m),
      _
    ), process.env.NODE_ENV !== "production" && sn(c, f)) : O || we(
      c,
      f,
      b,
      null,
      d,
      v,
      Ln(f, m),
      _,
      !1
    ), N > 0) {
      if (N & 16)
        _e(b, D, x, d, m);
      else if (N & 2 && D.class !== x.class && r(b, "class", null, x.class, m), N & 4 && r(b, "style", D.style, x.style, m), N & 8) {
        const F = f.dynamicProps;
        for (let W = 0; W < F.length; W++) {
          const U = F[W], ce = D[U], le = x[U];
          (le !== ce || U === "value") && r(b, U, ce, le, m, d);
        }
      }
      N & 1 && c.children !== f.children && p(b, f.children);
    } else !O && E == null && _e(b, D, x, d, m);
    ((I = x.onVnodeUpdated) || S) && pe(() => {
      I && Ce(I, d, f, c), S && et(f, c, d, "updated");
    }, v);
  }, Ke = (c, f, d, v, m, _, O) => {
    for (let b = 0; b < f.length; b++) {
      const N = c[b], E = f[b], S = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !St(N, E) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? a(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      P(
        N,
        E,
        S,
        null,
        v,
        m,
        _,
        O,
        !0
      );
    }
  }, _e = (c, f, d, v, m) => {
    if (f !== d) {
      if (f !== B)
        for (const _ in f)
          !$t(_) && !(_ in d) && r(
            c,
            _,
            f[_],
            null,
            m,
            v
          );
      for (const _ in d) {
        if ($t(_)) continue;
        const O = d[_], b = f[_];
        O !== b && _ !== "value" && r(c, _, b, O, m, v);
      }
      "value" in d && r(c, "value", f.value, d.value, m);
    }
  }, Yt = (c, f, d, v, m, _, O, b, N) => {
    const E = f.el = c ? c.el : l(""), S = f.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: x, slotScopeIds: I } = f;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ae || D & 2048) && (D = 0, N = !1, x = null), I && (b = b ? b.concat(I) : I), c == null ? (o(E, d, v), o(S, d, v), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      d,
      S,
      m,
      _,
      O,
      b,
      N
    )) : D > 0 && D & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Ke(
      c.dynamicChildren,
      x,
      d,
      m,
      _,
      O,
      b
    ), process.env.NODE_ENV !== "production" ? sn(c, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && sn(
        c,
        f,
        !0
        /* shallow */
      )
    )) : we(
      c,
      f,
      d,
      S,
      m,
      _,
      O,
      b,
      N
    );
  }, Co = (c, f, d, v, m, _, O, b, N) => {
    f.slotScopeIds = b, c == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      d,
      v,
      O,
      N
    ) : We(
      f,
      d,
      v,
      m,
      _,
      O,
      N
    ) : ie(c, f, N);
  }, We = (c, f, d, v, m, _, O) => {
    const b = c.component = Qc(
      c,
      v,
      m
    );
    if (process.env.NODE_ENV !== "production" && b.type.__hmrId && Si(b), process.env.NODE_ENV !== "production" && (en(c), dt(b, "mount")), yo(c) && (b.ctx.renderer = Ot), process.env.NODE_ENV !== "production" && dt(b, "init"), nl(b, !1, O), process.env.NODE_ENV !== "production" && ht(b, "init"), process.env.NODE_ENV !== "production" && Ae && (c.el = null), b.asyncDep) {
      if (m && m.registerDep(b, R, O), !c.el) {
        const N = b.subTree = ft(ye);
        K(null, N, f, d);
      }
    } else
      R(
        b,
        c,
        f,
        d,
        m,
        _,
        O
      );
    process.env.NODE_ENV !== "production" && (tn(), ht(b, "mount"));
  }, ie = (c, f, d) => {
    const v = f.component = c.component;
    if (Lc(c, f, d))
      if (v.asyncDep && !v.asyncResolved) {
        process.env.NODE_ENV !== "production" && en(f), M(v, f, d), process.env.NODE_ENV !== "production" && tn();
        return;
      } else
        v.next = f, v.update();
    else
      f.el = c.el, v.vnode = f;
  }, R = (c, f, d, v, m, _, O) => {
    const b = () => {
      if (c.isMounted) {
        let { next: D, bu: x, u: I, parent: F, vnode: W } = c;
        {
          const Ve = pr(c);
          if (Ve) {
            D && (D.el = W.el, M(c, D, O)), Ve.asyncDep.then(() => {
              c.isUnmounted || b();
            });
            return;
          }
        }
        let U = D, ce;
        process.env.NODE_ENV !== "production" && en(D || c.vnode), tt(c, !1), D ? (D.el = W.el, M(c, D, O)) : D = W, x && wt(x), (ce = D.props && D.props.onVnodeBeforeUpdate) && Ce(ce, F, D, W), tt(c, !0), process.env.NODE_ENV !== "production" && dt(c, "render");
        const le = qo(c);
        process.env.NODE_ENV !== "production" && ht(c, "render");
        const xe = c.subTree;
        c.subTree = le, process.env.NODE_ENV !== "production" && dt(c, "patch"), P(
          xe,
          le,
          // parent may have changed if it's in a teleport
          a(xe.el),
          // anchor may have changed if it's in a fragment
          zt(xe),
          c,
          m,
          _
        ), process.env.NODE_ENV !== "production" && ht(c, "patch"), D.el = le.el, U === null && Uc(c, le.el), I && pe(I, m), (ce = D.props && D.props.onVnodeUpdated) && pe(
          () => Ce(ce, F, D, W),
          m
        ), process.env.NODE_ENV !== "production" && qs(c), process.env.NODE_ENV !== "production" && tn();
      } else {
        let D;
        const { el: x, props: I } = f, { bm: F, m: W, parent: U, root: ce, type: le } = c, xe = Mt(f);
        tt(c, !1), F && wt(F), !xe && (D = I && I.onVnodeBeforeMount) && Ce(D, U, f), tt(c, !0);
        {
          ce.ce && // @ts-expect-error _def is private
          ce.ce._def.shadowRoot !== !1 && ce.ce._injectChildStyle(le), process.env.NODE_ENV !== "production" && dt(c, "render");
          const Ve = c.subTree = qo(c);
          process.env.NODE_ENV !== "production" && ht(c, "render"), process.env.NODE_ENV !== "production" && dt(c, "patch"), P(
            null,
            Ve,
            d,
            v,
            c,
            m,
            _
          ), process.env.NODE_ENV !== "production" && ht(c, "patch"), f.el = Ve.el;
        }
        if (W && pe(W, m), !xe && (D = I && I.onVnodeMounted)) {
          const Ve = f;
          pe(
            () => Ce(D, U, Ve),
            m
          );
        }
        (f.shapeFlag & 256 || U && Mt(U.vnode) && U.vnode.shapeFlag & 256) && c.a && pe(c.a, m), c.isMounted = !0, process.env.NODE_ENV !== "production" && Ai(c), f = d = v = null;
      }
    };
    c.scope.on();
    const N = c.effect = new bs(b);
    c.scope.off();
    const E = c.update = N.run.bind(N), S = c.job = N.runIfDirty.bind(N);
    S.i = c, S.id = c.uid, N.scheduler = () => wn(S), tt(c, !0), process.env.NODE_ENV !== "production" && (N.onTrack = c.rtc ? (D) => wt(c.rtc, D) : void 0, N.onTrigger = c.rtg ? (D) => wt(c.rtg, D) : void 0), E();
  }, M = (c, f, d) => {
    f.component = c;
    const v = c.vnode.props;
    c.vnode = f, c.next = null, _c(c, f.props, v, d), Vc(c, f.children, d), Oe(), Fo(c), De();
  }, we = (c, f, d, v, m, _, O, b, N = !1) => {
    const E = c && c.children, S = c ? c.shapeFlag : 0, D = f.children, { patchFlag: x, shapeFlag: I } = f;
    if (x > 0) {
      if (x & 128) {
        bt(
          E,
          D,
          d,
          v,
          m,
          _,
          O,
          b,
          N
        );
        return;
      } else if (x & 256) {
        Tn(
          E,
          D,
          d,
          v,
          m,
          _,
          O,
          b,
          N
        );
        return;
      }
    }
    I & 8 ? (S & 16 && yt(E, m, _), D !== E && p(d, D)) : S & 16 ? I & 16 ? bt(
      E,
      D,
      d,
      v,
      m,
      _,
      O,
      b,
      N
    ) : yt(E, m, _, !0) : (S & 8 && p(d, ""), I & 16 && re(
      D,
      d,
      v,
      m,
      _,
      O,
      b,
      N
    ));
  }, Tn = (c, f, d, v, m, _, O, b, N) => {
    c = c || mt, f = f || mt;
    const E = c.length, S = f.length, D = Math.min(E, S);
    let x;
    for (x = 0; x < D; x++) {
      const I = f[x] = N ? qe(f[x]) : ve(f[x]);
      P(
        c[x],
        I,
        d,
        null,
        m,
        _,
        O,
        b,
        N
      );
    }
    E > S ? yt(
      c,
      m,
      _,
      !0,
      !1,
      D
    ) : re(
      f,
      d,
      v,
      m,
      _,
      O,
      b,
      N,
      D
    );
  }, bt = (c, f, d, v, m, _, O, b, N) => {
    let E = 0;
    const S = f.length;
    let D = c.length - 1, x = S - 1;
    for (; E <= D && E <= x; ) {
      const I = c[E], F = f[E] = N ? qe(f[E]) : ve(f[E]);
      if (St(I, F))
        P(
          I,
          F,
          d,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      E++;
    }
    for (; E <= D && E <= x; ) {
      const I = c[D], F = f[x] = N ? qe(f[x]) : ve(f[x]);
      if (St(I, F))
        P(
          I,
          F,
          d,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      D--, x--;
    }
    if (E > D) {
      if (E <= x) {
        const I = x + 1, F = I < S ? f[I].el : v;
        for (; E <= x; )
          P(
            null,
            f[E] = N ? qe(f[E]) : ve(f[E]),
            d,
            F,
            m,
            _,
            O,
            b,
            N
          ), E++;
      }
    } else if (E > x)
      for (; E <= D; )
        ke(c[E], m, _, !0), E++;
    else {
      const I = E, F = E, W = /* @__PURE__ */ new Map();
      for (E = F; E <= x; E++) {
        const ne = f[E] = N ? qe(f[E]) : ve(f[E]);
        ne.key != null && (process.env.NODE_ENV !== "production" && W.has(ne.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), W.set(ne.key, E));
      }
      let U, ce = 0;
      const le = x - F + 1;
      let xe = !1, Ve = 0;
      const Dt = new Array(le);
      for (E = 0; E < le; E++) Dt[E] = 0;
      for (E = I; E <= D; E++) {
        const ne = c[E];
        if (ce >= le) {
          ke(ne, m, _, !0);
          continue;
        }
        let Se;
        if (ne.key != null)
          Se = W.get(ne.key);
        else
          for (U = F; U <= x; U++)
            if (Dt[U - F] === 0 && St(ne, f[U])) {
              Se = U;
              break;
            }
        Se === void 0 ? ke(ne, m, _, !0) : (Dt[Se - F] = E + 1, Se >= Ve ? Ve = Se : xe = !0, P(
          ne,
          f[Se],
          d,
          null,
          m,
          _,
          O,
          b,
          N
        ), ce++);
      }
      const $o = xe ? Ic(Dt) : mt;
      for (U = $o.length - 1, E = le - 1; E >= 0; E--) {
        const ne = F + E, Se = f[ne], Io = ne + 1 < S ? f[ne + 1].el : v;
        Dt[E] === 0 ? P(
          null,
          Se,
          d,
          Io,
          m,
          _,
          O,
          b,
          N
        ) : xe && (U < 0 || E !== $o[U] ? at(Se, d, Io, 2) : U--);
      }
    }
  }, at = (c, f, d, v, m = null) => {
    const { el: _, type: O, transition: b, children: N, shapeFlag: E } = c;
    if (E & 6) {
      at(c.component.subTree, f, d, v);
      return;
    }
    if (E & 128) {
      c.suspense.move(f, d, v);
      return;
    }
    if (E & 64) {
      O.move(c, f, d, Ot);
      return;
    }
    if (O === $e) {
      o(_, f, d);
      for (let D = 0; D < N.length; D++)
        at(N[D], f, d, v);
      o(c.anchor, f, d);
      return;
    }
    if (O === rn) {
      ae(c, f, d);
      return;
    }
    if (v !== 2 && E & 1 && b)
      if (v === 0)
        b.beforeEnter(_), o(_, f, d), pe(() => b.enter(_), m);
      else {
        const { leave: D, delayLeave: x, afterLeave: I } = b, F = () => {
          c.ctx.isUnmounted ? s(_) : o(_, f, d);
        }, W = () => {
          D(_, () => {
            F(), I && I();
          });
        };
        x ? x(_, F, W) : W();
      }
    else
      o(_, f, d);
  }, ke = (c, f, d, v = !1, m = !1) => {
    const {
      type: _,
      props: O,
      ref: b,
      children: N,
      dynamicChildren: E,
      shapeFlag: S,
      patchFlag: D,
      dirs: x,
      cacheIndex: I
    } = c;
    if (D === -2 && (m = !1), b != null && (Oe(), At(b, null, d, c, !0), De()), I != null && (f.renderCache[I] = void 0), S & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const F = S & 1 && x, W = !Mt(c);
    let U;
    if (W && (U = O && O.onVnodeBeforeUnmount) && Ce(U, f, c), S & 6)
      Vr(c.component, d, v);
    else {
      if (S & 128) {
        c.suspense.unmount(d, v);
        return;
      }
      F && et(c, null, f, "beforeUnmount"), S & 64 ? c.type.remove(
        c,
        f,
        d,
        Ot,
        v
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== $e || D > 0 && D & 64) ? yt(
        E,
        f,
        d,
        !1,
        !0
      ) : (_ === $e && D & 384 || !m && S & 16) && yt(N, f, d), v && $n(c);
    }
    (W && (U = O && O.onVnodeUnmounted) || F) && pe(() => {
      U && Ce(U, f, c), F && et(c, null, f, "unmounted");
    }, d);
  }, $n = (c) => {
    const { type: f, el: d, anchor: v, transition: m } = c;
    if (f === $e) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && m && !m.persisted ? c.children.forEach((O) => {
        O.type === ye ? s(O.el) : $n(O);
      }) : xr(d, v);
      return;
    }
    if (f === rn) {
      C(c);
      return;
    }
    const _ = () => {
      s(d), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: b } = m, N = () => O(d, _);
      b ? b(c.el, _, N) : N();
    } else
      _();
  }, xr = (c, f) => {
    let d;
    for (; c !== f; )
      d = g(c), s(c), c = d;
    s(f);
  }, Vr = (c, f, d) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && Ci(c);
    const {
      bum: v,
      scope: m,
      job: _,
      subTree: O,
      um: b,
      m: N,
      a: E,
      parent: S,
      slots: { __: D }
    } = c;
    Go(N), Go(E), v && wt(v), S && T(D) && D.forEach((x) => {
      S.renderCache[x] = void 0;
    }), m.stop(), _ && (_.flags |= 8, ke(O, c, f, d)), b && pe(b, f), pe(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), process.env.NODE_ENV !== "production" && Ri(c);
  }, yt = (c, f, d, v = !1, m = !1, _ = 0) => {
    for (let O = _; O < c.length; O++)
      ke(c[O], f, d, v, m);
  }, zt = (c) => {
    if (c.shapeFlag & 6)
      return zt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = g(c.anchor || c.el), d = f && f[Ui];
    return d ? g(d) : f;
  };
  let In = !1;
  const To = (c, f, d) => {
    c == null ? f._vnode && ke(f._vnode, null, null, !0) : P(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      d
    ), f._vnode = c, In || (In = !0, Fo(), Ws(), In = !1);
  }, Ot = {
    p: P,
    um: ke,
    m: at,
    r: $n,
    mt: We,
    mc: re,
    pc: we,
    pbc: Ke,
    n: zt,
    o: e
  };
  return {
    render: To,
    hydrate: void 0,
    createApp: dc(To)
  };
}
function Ln({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function tt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $c(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sn(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (T(o) && T(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = qe(s[r]), l.el = i.el), !n && l.patchFlag !== -2 && sn(i, l)), l.type === qt && (l.el = i.el), l.type === ye && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Ic(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const h = e[o];
    if (h !== 0) {
      if (s = n[n.length - 1], e[s] < h) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < h ? r = l + 1 : i = l;
      h < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function pr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : pr(t);
}
function Go(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Pc = Symbol.for("v-scx"), Ac = () => {
  {
    const e = on(Pc);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Un(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), dr(e, t, n);
}
function dr(e, t, n = B) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = X({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = y);
  const u = t && o || !t && r !== "post";
  let h;
  if (Bt) {
    if (r === "sync") {
      const w = Ac();
      h = w.__watcherHandles || (w.__watcherHandles = []);
    } else if (!u) {
      const w = () => {
      };
      return w.stop = Y, w.resume = Y, w.pause = Y, w;
    }
  }
  const p = Q;
  l.call = (w, V, P) => Re(w, p, V, P);
  let a = !1;
  r === "post" ? l.scheduler = (w) => {
    pe(w, p && p.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (w, V) => {
    V ? w() : wn(w);
  }), l.augmentJob = (w) => {
    t && (w.flags |= 4), a && (w.flags |= 2, p && (w.id = p.uid, w.i = p));
  };
  const g = Ei(e, t, l);
  return Bt && (h ? h.push(g) : u && g()), g;
}
function Mc(e, t, n) {
  const o = this.proxy, s = G(e) ? e.includes(".") ? hr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const i = Jt(this), l = dr(s, r.bind(o), n);
  return i(), l;
}
function hr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const Rc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ne(t)}Modifiers`] || e[`${ze(t)}Modifiers`];
function Fc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(nt(Ne(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${nt(Ne(t))}" prop.`
        );
      else {
        const g = p[t];
        $(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && Rc(o, t.slice(7));
  if (i && (i.trim && (s = n.map((p) => G(p) ? p.trim() : p)), i.number && (s = n.map(Pr))), process.env.NODE_ENV !== "production" && Hi(e, t, s), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[nt(p)] && y(
      `Event "${p}" is emitted in component ${Cn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ze(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = o[l = nt(t)] || // also try camelCase event handler (#2249)
  o[l = nt(Ne(t))];
  !u && r && (u = o[l = nt(ze(t))]), u && Re(
    u,
    e,
    6,
    s
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Re(
      h,
      e,
      6,
      s
    );
  }
}
function gr(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!$(e)) {
    const u = (h) => {
      const p = gr(h, t, !0);
      p && (l = !0, X(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !l ? (k(e) && o.set(e, null), null) : (T(r) ? r.forEach((u) => i[u] = null) : X(i, r), k(e) && o.set(e, i), i);
}
function Vn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, ze(t)) || j(e, t));
}
let to = !1;
function _n() {
  to = !0;
}
function qo(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: u,
    render: h,
    renderCache: p,
    props: a,
    data: g,
    setupState: w,
    ctx: V,
    inheritAttrs: P
  } = e, ee = hn(e);
  let K, q;
  process.env.NODE_ENV !== "production" && (to = !1);
  try {
    if (n.shapeFlag & 4) {
      const C = s || o, Z = process.env.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(C, {
        get(me, te, re) {
          return y(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(me, te, re);
        }
      }) : C;
      K = ve(
        h.call(
          Z,
          C,
          p,
          process.env.NODE_ENV !== "production" ? Pe(a) : a,
          w,
          g,
          V
        )
      ), q = l;
    } else {
      const C = t;
      process.env.NODE_ENV !== "production" && l === a && _n(), K = ve(
        C.length > 1 ? C(
          process.env.NODE_ENV !== "production" ? Pe(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return _n(), Pe(l);
            },
            slots: i,
            emit: u
          } : { attrs: l, slots: i, emit: u }
        ) : C(
          process.env.NODE_ENV !== "production" ? Pe(a) : a,
          null
        )
      ), q = t.props ? l : jc(l);
    }
  } catch (C) {
    Rt.length = 0, kt(C, e, 1), K = ft(ye);
  }
  let L = K, ae;
  if (process.env.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([L, ae] = mr(K)), q && P !== !1) {
    const C = Object.keys(q), { shapeFlag: Z } = L;
    if (C.length) {
      if (Z & 7)
        r && C.some(fn) && (q = Hc(
          q,
          r
        )), L = Ze(L, q, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !to && L.type !== ye) {
        const me = Object.keys(l), te = [], re = [];
        for (let Fe = 0, Ke = me.length; Fe < Ke; Fe++) {
          const _e = me[Fe];
          Kt(_e) ? fn(_e) || te.push(_e[2].toLowerCase() + _e.slice(3)) : re.push(_e);
        }
        re.length && y(
          `Extraneous non-props attributes (${re.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && y(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Jo(L) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = Ze(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Jo(L) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), bo(L, n.transition)), process.env.NODE_ENV !== "production" && ae ? ae(L) : K = L, hn(ee), K;
}
const mr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = xo(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return mr(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ve(o), i];
};
function xo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (Sn(s)) {
      if (s.type !== ye || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return xo(n.children);
      }
    } else
      return;
  }
  return n;
}
const jc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Hc = (e, t) => {
  const n = {};
  for (const o in e)
    (!fn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Jo = (e) => e.shapeFlag & 7 || e.type === ye;
function Lc(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: u } = t, h = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && Ae || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Yo(o, i, h) : !!i;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const g = p[a];
        if (i[g] !== o[g] && !Vn(h, g))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Yo(o, i, h) : !0 : !!i;
  return !1;
}
function Yo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !Vn(n, r))
      return !0;
  }
  return !1;
}
function Uc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const _r = (e) => e.__isSuspense;
function Bc(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Ks(e);
}
const $e = Symbol.for("v-fgt"), qt = Symbol.for("v-txt"), ye = Symbol.for("v-cmt"), rn = Symbol.for("v-stc"), Rt = [];
let he = null;
function Kc(e = !1) {
  Rt.push(he = e ? null : []);
}
function Wc() {
  Rt.pop(), he = Rt[Rt.length - 1] || null;
}
let Ut = 1;
function zo(e, t = !1) {
  Ut += e, e < 0 && he && t && (he.hasOnce = !0);
}
function kc(e) {
  return e.dynamicChildren = Ut > 0 ? he || mt : null, Wc(), Ut > 0 && he && he.push(e), e;
}
function Gc(e, t, n, o, s, r) {
  return kc(
    vn(
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
function Sn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = nn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const qc = (...e) => Er(
  ...e
), vr = ({ key: e }) => e ?? null, cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || z(e) || $(e) ? { i: ue, r: e, k: t, f: !!n } : e : null);
function vn(e, t = null, n = null, o = 0, s = null, r = e === $e ? 0 : 1, i = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vr(t),
    ref: t && cn(t),
    scopeId: Ys,
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
    ctx: ue
  };
  return l ? (Vo(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= G(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && y("VNode created with invalid key (NaN). VNode type:", u.type), Ut > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && he.push(u), u;
}
const ft = process.env.NODE_ENV !== "production" ? qc : Er;
function Er(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === nc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = ye), Sn(e)) {
    const l = Ze(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vo(l, n), Ut > 0 && !r && he && (l.shapeFlag & 6 ? he[he.indexOf(e)] = l : he.push(l)), l.patchFlag = -2, l;
  }
  if (Dr(e) && (e = e.__vccOpts), t) {
    t = Jc(t);
    let { class: l, style: u } = t;
    l && !G(l) && (t.class = uo(l)), k(u) && (un(u) && !T(u) && (u = X({}, u)), t.style = fo(u));
  }
  const i = G(e) ? 1 : _r(e) ? 128 : Bi(e) ? 64 : k(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && un(e) && (e = A(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), vn(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function Jc(e) {
  return e ? un(e) || ir(e) ? X({}, e) : e : null;
}
function Ze(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: u } = e, h = t ? zc(s || {}, t) : s, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && vr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? T(r) ? r.concat(cn(t)) : [r, cn(t)] : cn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && T(l) ? l.map(Nr) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $e ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Ze(e.ssContent),
    ssFallback: e.ssFallback && Ze(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && bo(
    p,
    u.clone(p)
  ), p;
}
function Nr(e) {
  const t = Ze(e);
  return T(e.children) && (t.children = e.children.map(Nr)), t;
}
function Yc(e = " ", t = 0) {
  return ft(qt, null, e, t);
}
function ve(e) {
  return e == null || typeof e == "boolean" ? ft(ye) : T(e) ? ft(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Sn(e) ? qe(e) : ft(qt, null, String(e));
}
function qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ze(e);
}
function Vo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Vo(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !ir(t) ? t._ctx = ue : s === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: ue }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Yc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function zc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = uo([t.class, o.class]));
      else if (s === "style")
        t.style = fo([t.style, o.style]);
      else if (Kt(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(T(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function Ce(e, t, n, o = null) {
  Re(e, t, 7, [
    n,
    o
  ]);
}
const Xc = or();
let Zc = 0;
function Qc(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Xc, r = {
    uid: Zc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Gr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: lr(o, s),
    emitsOptions: gr(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = oc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Fc.bind(null, r), e.ce && e.ce(r), r;
}
let Q = null;
const el = () => Q || ue;
let En, no;
{
  const e = Wt(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  En = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Q = n
  ), no = t(
    "__VUE_SSR_SETTERS__",
    (n) => Bt = n
  );
}
const Jt = (e) => {
  const t = Q;
  return En(e), e.scope.on(), () => {
    e.scope.off(), En(t);
  };
}, Xo = () => {
  Q && Q.scope.off(), En(null);
}, tl = /* @__PURE__ */ Ue("slot,component");
function oo(e, { isNativeTag: t }) {
  (tl(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function br(e) {
  return e.vnode.shapeFlag & 4;
}
let Bt = !1;
function nl(e, t = !1, n = !1) {
  t && no(t);
  const { props: o, children: s } = e.vnode, r = br(e);
  gc(e, o, r, t), xc(e, s, n || t);
  const i = r ? ol(e, t) : void 0;
  return t && no(!1), i;
}
function ol(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && oo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        oo(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        zs(r[i]);
    }
    o.compilerOptions && sl() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, er), process.env.NODE_ENV !== "production" && sc(e);
  const { setup: s } = o;
  if (s) {
    Oe();
    const r = e.setupContext = s.length > 1 ? il(e) : null, i = Jt(e), l = Nt(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Pe(e.props) : e.props,
        r
      ]
    ), u = io(l);
    if (De(), i(), (u || e.sp) && !Mt(e) && Xs(e), u) {
      if (l.then(Xo, Xo), t)
        return l.then((h) => {
          Zo(e, h, t);
        }).catch((h) => {
          kt(h, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Zo(e, l, t);
  } else
    yr(e, t);
}
function Zo(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (process.env.NODE_ENV !== "production" && Sn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Hs(t), process.env.NODE_ENV !== "production" && rc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), yr(e, n);
}
const sl = () => !0;
function yr(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || Y);
  {
    const s = Jt(e);
    Oe();
    try {
      cc(e);
    } finally {
      De(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === Y && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", o));
}
const Qo = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return _n(), J(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return J(e, "get", ""), e[t];
  }
};
function rl(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return J(e, "get", "$slots"), t[n];
    }
  });
}
function il(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : z(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Qo));
      },
      get slots() {
        return o || (o = rl(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Qo),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function So(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hs(di(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in lt)
        return lt[n](e);
    },
    has(t, n) {
      return n in t || n in lt;
    }
  })) : e.proxy;
}
const cl = /(?:^|[-_])(\w)/g, ll = (e) => e.replace(cl, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Or(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Cn(e, t, n = !1) {
  let o = Or(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? ll(o) : n ? "App" : "Anonymous";
}
function Dr(e) {
  return $(e) && "__vccOpts" in e;
}
const fl = (e, t) => {
  const n = _i(e, t, Bt);
  if (process.env.NODE_ENV !== "production") {
    const o = el();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function ul() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!k(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (z(a)) {
        Oe();
        const g = a.value;
        return De(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (_t(a))
          return [
            "div",
            {},
            ["span", e, ge(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${Xe(a) ? " (readonly)" : ""}`
          ];
        if (Xe(a))
          return [
            "div",
            {},
            ["span", e, ge(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const g = [];
    a.type.props && a.props && g.push(i("props", A(a.props))), a.setupState !== B && g.push(i("setup", a.setupState)), a.data !== B && g.push(i("data", A(a.data)));
    const w = u(a, "computed");
    w && g.push(i("computed", w));
    const V = u(a, "inject");
    return V && g.push(i("injected", V)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function i(a, g) {
    return g = X({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((w) => [
          "div",
          {},
          ["span", o, w + ": "],
          l(g[w], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : k(a) ? ["object", { object: g ? A(a) : a }] : ["span", n, String(a)];
  }
  function u(a, g) {
    const w = a.type;
    if ($(w))
      return;
    const V = {};
    for (const P in a.ctx)
      h(w, P, g) && (V[P] = a.ctx[P]);
    return V;
  }
  function h(a, g, w) {
    const V = a[w];
    if (T(V) && V.includes(g) || k(V) && g in V || a.extends && h(a.extends, g, w) || a.mixins && a.mixins.some((P) => h(P, g, w)))
      return !0;
  }
  function p(a) {
    return ge(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const es = "3.5.17", Le = process.env.NODE_ENV !== "production" ? y : Y;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let so;
const ts = typeof window < "u" && window.trustedTypes;
if (ts)
  try {
    so = /* @__PURE__ */ ts.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Le(`Error creating trusted types policy: ${e}`);
  }
const wr = so ? (e) => so.createHTML(e) : (e) => e, al = "http://www.w3.org/2000/svg", pl = "http://www.w3.org/1998/Math/MathML", He = typeof document < "u" ? document : null, ns = He && /* @__PURE__ */ He.createElement("template"), dl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? He.createElementNS(al, e) : t === "mathml" ? He.createElementNS(pl, e) : n ? He.createElement(e, { is: n }) : He.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => He.createTextNode(e),
  createComment: (e) => He.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => He.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      ns.innerHTML = wr(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ns.content;
      if (o === "svg" || o === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, hl = Symbol("_vtc");
function gl(e, t, n) {
  const o = e[hl];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const os = Symbol("_vod"), ml = Symbol("_vsh");
process.env.NODE_ENV;
const _l = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), vl = /(^|;)\s*display\s*:/;
function El(e, t, n) {
  const o = e.style, s = G(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (G(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && ln(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && ln(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), ln(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[_l];
      i && (n += ";" + i), o.cssText = n, r = vl.test(n);
    }
  } else t && e.removeAttribute("style");
  os in e && (e[os] = r ? o.display : "", e[ml] && (o.display = "none"));
}
const Nl = /[^\\];\s*$/, ss = /\s*!important$/;
function ln(e, t, n) {
  if (T(n))
    n.forEach((o) => ln(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Nl.test(n) && Le(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = bl(e, t);
    ss.test(n) ? e.setProperty(
      ze(o),
      n.replace(ss, ""),
      "important"
    ) : e[o] = n;
  }
}
const rs = ["Webkit", "Moz", "ms"], Bn = {};
function bl(e, t) {
  const n = Bn[t];
  if (n)
    return n;
  let o = Ne(t);
  if (o !== "filter" && o in e)
    return Bn[t] = o;
  o = yn(o);
  for (let s = 0; s < rs.length; s++) {
    const r = rs[s] + o;
    if (r in e)
      return Bn[t] = r;
  }
  return t;
}
const is = "http://www.w3.org/1999/xlink";
function cs(e, t, n, o, s, r = kr(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(is, t.slice(6, t.length)) : e.setAttributeNS(is, t, n) : n == null || r && !_s(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Qe(n) ? String(n) : n
  );
}
function ls(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? wr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = _s(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && Le(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(s || t);
}
function yl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ol(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const fs = Symbol("_vei");
function Dl(e, t, n, o, s = null) {
  const r = e[fs] || (e[fs] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? as(o, t) : o;
  else {
    const [l, u] = wl(t);
    if (o) {
      const h = r[t] = Sl(
        process.env.NODE_ENV !== "production" ? as(o, t) : o,
        s
      );
      yl(e, l, h, u);
    } else i && (Ol(e, l, i, u), r[t] = void 0);
  }
}
const us = /(?:Once|Passive|Capture)$/;
function wl(e) {
  let t;
  if (us.test(e)) {
    t = {};
    let o;
    for (; o = e.match(us); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ze(e.slice(2)), t];
}
let Kn = 0;
const xl = /* @__PURE__ */ Promise.resolve(), Vl = () => Kn || (xl.then(() => Kn = 0), Kn = Date.now());
function Sl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Re(
      Cl(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Vl(), n;
}
function as(e, t) {
  return $(e) || T(e) ? e : (Le(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Y);
}
function Cl(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const ps = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tl = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? gl(e, o, i) : t === "style" ? El(e, n, o) : Kt(t) ? fn(t) || Dl(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $l(e, t, o, i)) ? (ls(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && cs(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(o)) ? ls(e, Ne(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), cs(e, t, o, i));
};
function $l(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ps(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return ps(t) && G(n) ? !1 : t in e;
}
const Il = /* @__PURE__ */ X({ patchProp: Tl }, dl);
let ds;
function Pl() {
  return ds || (ds = Cc(Il));
}
const Al = (...e) => {
  const t = Pl().createApp(...e);
  process.env.NODE_ENV !== "production" && (Rl(t), Fl(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = jl(o);
    if (!s) return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, Ml(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function Ml(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Rl(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ur(t) || Br(t) || Kr(t),
    writable: !1
  });
}
function Fl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Le(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Le(o), n;
      },
      set() {
        Le(o);
      }
    });
  }
}
function jl(e) {
  if (G(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Le(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Le(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Hl() {
  ul();
}
process.env.NODE_ENV !== "production" && Hl();
const Ll = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, Ul = {
  name: "MyComponent",
  props: {
    title: {
      type: String,
      default: "Hola desde mi componente!"
    }
  }
}, Bl = { class: "my-component" };
function Kl(e, t, n, o, s, r) {
  return Kc(), Gc("div", Bl, [
    vn("h2", null, Es(n.title), 1),
    vn("button", {
      onClick: t[0] || (t[0] = (i) => e.$emit("on-submit"))
    }, "Emitir evento")
  ]);
}
const Wl = /* @__PURE__ */ Ll(Ul, [["render", Kl], ["__scopeId", "data-v-0b4c6bdf"]]), kl = Al(Wl);
kl.mount("#app");
