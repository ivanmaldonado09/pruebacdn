import { createElementBlock as r, openBlock as c, createElementVNode as a, toDisplayString as p } from "vue";
const d = ".my-component[data-v-aa237979]{border:2px dashed blue;padding:1rem}", l = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of e)
    o[n] = s;
  return o;
}, i = {
  name: "MyComponent",
  props: {
    title: {
      type: String,
      default: "Hola desde MyComponent!"
    }
  }
}, m = { class: "my-component" };
function _(t, e, o, n, s, u) {
  return c(), r("div", m, [
    a("h2", null, p(o.title), 1),
    a("button", {
      onClick: e[0] || (e[0] = (y) => t.$emit("onSubmit"))
    }, "Emitir evento")
  ]);
}
const v = /* @__PURE__ */ l(i, [["render", _], ["styles", [d]], ["__scopeId", "data-v-aa237979"]]);
export {
  v as default
};
