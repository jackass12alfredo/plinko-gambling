import {
  c as j,
  b as w,
  t as X,
  d as tt,
  n as te,
} from "../chunks/disclose-version.DG_wKHNx.js";
import {
  h as Tr,
  E as ia,
  aL as sa,
  aM as la,
  D as Ee,
  A as ca,
  x as Lr,
  ar as da,
  G as ua,
  n as _t,
  aN as fa,
  au as Er,
  aj as Mr,
  aO as va,
  aP as ga,
  av as pa,
  az as an,
  aQ as vr,
  aJ as pt,
  w as ke,
  aR as ne,
  aS as ot,
  B as I,
  y as Oe,
  O as Me,
  K as k,
  J as F,
  L as E,
  M as le,
  aT as rt,
  U as ee,
  I as q,
  aK as Ze,
  N as Re,
  P as It,
  aU as Jn,
  ap as ha,
  R as lo,
} from "../chunks/runtime.CRzpIxTj.js";
import {
  a as we,
  r as er,
  c as Bt,
  b as Rr,
  s as Tt,
} from "../chunks/attributes.sb3KhuBb.js";
import { a as ma, s as dt } from "../chunks/render.GGGqqLGV.js";
import {
  k as Dr,
  s as be,
  a as De,
  e as Ht,
  i as Zt,
  l as qt,
  m as co,
  w as uo,
  t as fo,
  C as ba,
  g as wa,
  n as Vn,
  D as ya,
  B as zt,
  R as Hn,
  j as xa,
  o as Wt,
  q as _a,
  h as Fr,
  r as Nr,
  p as Aa,
  u as Ca,
  L as ka,
  P as Oa,
} from "../chunks/Plinko.TQHBosXl.js";
import { b as Be, c as He } from "../chunks/this.CD3I1zip.js";
import { m as Te, d as Mn } from "../chunks/svelte-head.C6Z01pUe.js";
import {
  l as he,
  s as We,
  c as P,
  i as W,
  a as pe,
  e as vo,
  b as Ue,
  r as gr,
  p as Qe,
  m as tr,
} from "../chunks/props.BhccrgCE.js";
import { i as Ve } from "../chunks/legacy.CsABeypI.js";
import {
  d as Yt,
  g as go,
  w as ft,
  r as jt,
  a as zr,
} from "../chunks/index.BQLiqD8v.js";
import { o as Pa, a as Sa, c as Ta } from "../chunks/7.I1qvw0HI.js";
import { s as Zn } from "../chunks/snippet.DaUXKxkQ.js";
function Vt(t, e, n) {
  var r = t.__className,
    a = La(e);
  Tr && t.className === a
    ? (t.__className = a)
    : (r !== a || (Tr && t.className !== a)) &&
      (e == null && !n ? t.removeAttribute("class") : (t.className = a),
      (t.__className = a));
}
function La(t, e) {
  return (t ?? "") + "";
}
const Ea = () => performance.now(),
  bt = {
    tick: (t) => requestAnimationFrame(t),
    now: () => Ea(),
    tasks: new Set(),
  };
function po() {
  const t = bt.now();
  bt.tasks.forEach((e) => {
    e.c(t) || (bt.tasks.delete(e), e.f());
  }),
    bt.tasks.size !== 0 && bt.tick(po);
}
function Ma(t) {
  let e;
  return (
    bt.tasks.size === 0 && bt.tick(po),
    {
      promise: new Promise((n) => {
        bt.tasks.add((e = { c: t, f: n }));
      }),
      abort() {
        bt.tasks.delete(e);
      },
    }
  );
}
function gn(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function Ra(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1
    ? e[0]
    : e[0] +
        e
          .slice(1)
          .map((n) => n[0].toUpperCase() + n.slice(1))
          .join("");
}
function Ir(t) {
  const e = {},
    n = t.split(";");
  for (const r of n) {
    const [a, i] = r.split(":");
    if (!a || i === void 0) break;
    const o = Ra(a.trim());
    e[o] = i.trim();
  }
  return e;
}
const Da = (t) => t;
function at(t, e, n, r) {
  var a = (t & va) !== 0,
    i = (t & ga) !== 0,
    o = a && i,
    s = (t & fa) !== 0,
    l = o ? "both" : a ? "in" : "out",
    c,
    p = e.inert,
    f,
    h;
  function g() {
    var x = pa,
      b = Lr;
    Er(null), Mr(null);
    try {
      return (
        c ?? (c = n()(e, (r == null ? void 0 : r()) ?? {}, { direction: l }))
      );
    } finally {
      Er(x), Mr(b);
    }
  }
  var v = {
      is_global: s,
      in() {
        var x;
        if (((e.inert = p), !a)) {
          h == null || h.abort(),
            (x = h == null ? void 0 : h.reset) == null || x.call(h);
          return;
        }
        i || f == null || f.abort(),
          gn(e, "introstart"),
          (f = nr(e, g(), h, 1, () => {
            gn(e, "introend"), f == null || f.abort(), (f = c = void 0);
          }));
      },
      out(x) {
        if (!i) {
          x == null || x(), (c = void 0);
          return;
        }
        (e.inert = !0),
          gn(e, "outrostart"),
          (h = nr(e, g(), f, 0, () => {
            gn(e, "outroend"), x == null || x();
          }));
      },
      stop: () => {
        f == null || f.abort(), h == null || h.abort();
      },
    },
    m = Lr;
  if (((m.transitions ?? (m.transitions = [])).push(v), a && ma)) {
    var _ = s;
    if (!_) {
      for (var y = m.parent; y && y.f & ia; )
        for (; (y = y.parent) && !(y.f & sa); );
      _ = !y || (y.f & la) !== 0;
    }
    _ &&
      Ee(() => {
        ca(() => v.in());
      });
  }
}
function nr(t, e, n, r, a) {
  var i = r === 1;
  if (da(e)) {
    var o,
      s = !1;
    return (
      ua(() => {
        if (!s) {
          var _ = e({ direction: i ? "in" : "out" });
          o = nr(t, _, n, r, a);
        }
      }),
      {
        abort: () => {
          (s = !0), o == null || o.abort();
        },
        deactivate: () => o.deactivate(),
        reset: () => o.reset(),
        t: () => o.t(),
      }
    );
  }
  if ((n == null || n.deactivate(), !(e != null && e.duration)))
    return a(), { abort: _t, deactivate: _t, reset: _t, t: () => r };
  const { delay: l = 0, css: c, tick: p, easing: f = Da } = e;
  var h = [];
  if (i && n === void 0 && (p && p(0, 1), c)) {
    var g = Ir(c(0, 1));
    h.push(g, g);
  }
  var v = () => 1 - r,
    m = t.animate(h, { duration: l });
  return (
    (m.onfinish = () => {
      var _ = (n == null ? void 0 : n.t()) ?? 1 - r;
      n == null || n.abort();
      var y = r - _,
        x = e.duration * Math.abs(y),
        b = [];
      if (x > 0) {
        if (c)
          for (
            var C = Math.ceil(x / 16.666666666666668), S = 0;
            S <= C;
            S += 1
          ) {
            var M = _ + y * f(S / C),
              N = c(M, 1 - M);
            b.push(Ir(N));
          }
        (v = () => {
          var T = m.currentTime;
          return _ + y * f(T / x);
        }),
          p &&
            Ma(() => {
              if (m.playState !== "running") return !1;
              var T = v();
              return p(T, 1 - T), !0;
            });
      }
      (m = t.animate(b, { duration: x, fill: "forwards" })),
        (m.onfinish = () => {
          (v = () => r), p == null || p(r, 1 - r), a();
        });
    }),
    {
      abort: () => {
        m && (m.cancel(), (m.effect = null), (m.onfinish = _t));
      },
      deactivate: () => {
        a = _t;
      },
      reset: () => {
        r === 0 && (p == null || p(1, 0));
      },
      t: () => v(),
    }
  );
}
const Fa = "" + new URL("../assets/logo.Bq7oLjZC.svg", import.meta.url).href;
function Na(t) {
  const e = t - 1;
  return e * e * e + 1;
}
const za = { y: -8, start: 0.9, duration: 200 };
function rn(t, e) {
  const n = getComputedStyle(t),
    r = n.transform === "none" ? "" : n.transform,
    a = { ...za, ...e },
    i = (o) =>
      Object.keys(o).reduce(
        (s, l) => (o[l] === void 0 ? s : `${s}${l}:${o[l]};`),
        ""
      );
  return {
    duration: a.duration,
    delay: 0,
    css: (o) => {
      const s = Dr(o, [0, 1], [a.y, 0]),
        l = Dr(o, [0, 1], [a.start, 1]);
      return i({
        transform: `${r} translate3d(0, ${s}px, 0) scale(${l})`,
        opacity: o,
      });
    },
    easing: Na,
  };
}
function Ia(t) {
  return t[t.length - 1];
}
function Mt(t) {
  return Object.keys(t).reduce(
    (e, n) => (t[n] === void 0 ? e : e + `${n}:${t[n]};`),
    ""
  );
}
function Wn(t) {
  return t ? !0 : void 0;
}
Mt({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)",
});
function ho(t) {
  if (t !== null) return "";
}
function Br(t) {
  function e(n) {
    return n(t), () => {};
  }
  return { subscribe: e };
}
const pn = (t) =>
    new Proxy(t, {
      get(e, n, r) {
        return Reflect.get(e, n, r);
      },
      ownKeys(e) {
        return Reflect.ownKeys(e).filter((n) => n !== "action");
      },
    }),
  Vr = (t) => typeof t == "function";
et("empty");
function et(t, e) {
  const { stores: n, action: r, returned: a } = e ?? {},
    i = (() => {
      if (n && a)
        return Yt(n, (s) => {
          const l = a(s);
          if (Vr(l)) {
            const c = (...p) =>
              pn({ ...l(...p), [`data-melt-${t}`]: "", action: r ?? Ne });
            return (c.action = r ?? Ne), c;
          }
          return pn({ ...l, [`data-melt-${t}`]: "", action: r ?? Ne });
        });
      {
        const s = a,
          l = s == null ? void 0 : s();
        if (Vr(l)) {
          const c = (...p) =>
            pn({ ...l(...p), [`data-melt-${t}`]: "", action: r ?? Ne });
          return (c.action = r ?? Ne), Br(c);
        }
        return Br(pn({ ...l, [`data-melt-${t}`]: "", action: r ?? Ne }));
      }
    })(),
    o = r ?? (() => {});
  return (o.subscribe = i.subscribe), o;
}
function pr(t) {
  const e = (i) => (i ? `${t}-${i}` : t),
    n = (i) => `data-melt-${t}${i ? `-${i}` : ""}`,
    r = (i) => `[data-melt-${t}${i ? `-${i}` : ""}]`;
  return {
    name: e,
    attribute: n,
    selector: r,
    getEl: (i) => document.querySelector(r(i)),
  };
}
const _n = typeof document < "u",
  mo = (t) => typeof t == "function";
function Ba(t) {
  return t instanceof Document;
}
function cn(t) {
  return t instanceof Element;
}
function nt(t) {
  return t instanceof HTMLElement;
}
function Hr(t) {
  return t.pointerType === "touch";
}
function Va(t) {
  return t !== null && typeof t == "object";
}
function Ha(t) {
  return Va(t) && "subscribe" in t;
}
function ut(...t) {
  return (...e) => {
    for (const n of t) typeof n == "function" && n(...e);
  };
}
function Ne() {}
function Je(t, e, n, r) {
  const a = Array.isArray(e) ? e : [e];
  return (
    a.forEach((i) => t.addEventListener(i, n, r)),
    () => {
      a.forEach((i) => t.removeEventListener(i, n, r));
    }
  );
}
function qe(t, e, n, r) {
  const a = Array.isArray(e) ? e : [e];
  if (typeof n == "function") {
    const i = Wa((o) => n(o));
    return (
      a.forEach((o) => t.addEventListener(o, i, r)),
      () => {
        a.forEach((o) => t.removeEventListener(o, i, r));
      }
    );
  }
  return () => void 0;
}
function Za(t) {
  const e = t.currentTarget;
  if (!nt(e)) return null;
  const n = new CustomEvent(`m-${t.type}`, {
    detail: { originalEvent: t },
    cancelable: !0,
  });
  return e.dispatchEvent(n), n;
}
function Wa(t) {
  return (e) => {
    const n = Za(e);
    if (!(n != null && n.defaultPrevented)) return t(e);
  };
}
const ja = (t) => {
    try {
      Pa(t);
    } catch {
      return t;
    }
  },
  Ua = (t) => {
    try {
      Sa(t);
    } catch {
      return t;
    }
  };
function Rn(t, ...e) {
  const n = {};
  for (const r of Object.keys(t)) e.includes(r) || (n[r] = t[r]);
  return n;
}
function Ga(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function dn(t) {
  return { ...t, get: () => go(t) };
}
dn.writable = function (t) {
  const e = ft(t);
  let n = t;
  return {
    subscribe: e.subscribe,
    set(r) {
      e.set(r), (n = r);
    },
    update(r) {
      const a = r(n);
      e.set(a), (n = a);
    },
    get() {
      return n;
    },
  };
};
dn.derived = function (t, e) {
  const n = new Map(),
    r = () => {
      const i = Array.isArray(t) ? t.map((o) => o.get()) : t.get();
      return e(i);
    };
  return {
    get: r,
    subscribe: (i) => {
      const o = [];
      return (
        (Array.isArray(t) ? t : [t]).forEach((l) => {
          o.push(
            l.subscribe(() => {
              i(r());
            })
          );
        }),
        i(r()),
        n.set(i, o),
        () => {
          const l = n.get(i);
          if (l) for (const c of l) c();
          n.delete(i);
        }
      );
    },
  };
};
const hr = (t, e) => {
  const n = dn(t),
    r = (i, o) => {
      n.update((s) => {
        const l = i(s);
        let c = l;
        return e && (c = e({ curr: s, next: l })), o == null || o(c), c;
      });
    };
  return {
    ...n,
    update: r,
    set: (i) => {
      r(() => i);
    },
  };
};
function bo(t) {
  return new Promise((e) => setTimeout(e, t));
}
let qa = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",
  Ya = (t = 21) => {
    let e = "",
      n = t;
    for (; n--; ) e += qa[(Math.random() * 64) | 0];
    return e;
  };
function Ka() {
  return Ya(10);
}
function wo(t) {
  return t.reduce((e, n) => ((e[n] = Ka()), e), {});
}
const At = {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    A: "a",
    P: "p",
  },
  yo = () => typeof window < "u";
function $a() {
  const t = navigator.userAgentData;
  return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
const xo = (t) => yo() && t.test($a().toLowerCase()),
  Qa = () => yo() && !!navigator.maxTouchPoints,
  Xa = () => xo(/^mac/) && !Qa(),
  Ja = () => xo(/mac|iphone|ipad|ipod/i),
  ei = () => Ja() && !Xa();
function ti(t) {
  const e = t.slice();
  return e.sort(ri), ni(e);
}
function ni(t) {
  if (t.length <= 1) return t.slice();
  const e = [];
  for (let r = 0; r < t.length; r++) {
    const a = t[r];
    for (; e.length >= 2; ) {
      const i = e[e.length - 1],
        o = e[e.length - 2];
      if ((i.x - o.x) * (a.y - o.y) >= (i.y - o.y) * (a.x - o.x)) e.pop();
      else break;
    }
    e.push(a);
  }
  e.pop();
  const n = [];
  for (let r = t.length - 1; r >= 0; r--) {
    const a = t[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        o = n[n.length - 2];
      if ((i.x - o.x) * (a.y - o.y) >= (i.y - o.y) * (a.x - o.x)) n.pop();
      else break;
    }
    n.push(a);
  }
  return (
    n.pop(),
    e.length == 1 && n.length == 1 && e[0].x == n[0].x && e[0].y == n[0].y
      ? e
      : e.concat(n)
  );
}
function ri(t, e) {
  return t.x < e.x ? -1 : t.x > e.x ? 1 : t.y < e.y ? -1 : t.y > e.y ? 1 : 0;
}
function oi(t) {
  const e = t.getBoundingClientRect();
  return [
    { x: e.left, y: e.top },
    { x: e.right, y: e.top },
    { x: e.right, y: e.bottom },
    { x: e.left, y: e.bottom },
  ];
}
function ai(t) {
  const e = t.flatMap((n) => oi(n));
  return ti(e);
}
function ii(t, e) {
  let n = !1;
  for (let r = 0, a = e.length - 1; r < e.length; a = r++) {
    const i = e[r].x,
      o = e[r].y,
      s = e[a].x,
      l = e[a].y;
    o > t.y != l > t.y && t.x < ((s - i) * (t.y - o)) / (l - o) + i && (n = !n);
  }
  return n;
}
const jn = "data-melt-scroll-lock";
function Zr(t, e) {
  if (!t) return;
  const n = t.style.cssText;
  return (
    Object.assign(t.style, e),
    () => {
      t.style.cssText = n;
    }
  );
}
function si(t, e, n) {
  if (!t) return;
  const r = t.style.getPropertyValue(e);
  return (
    t.style.setProperty(e, n),
    () => {
      r ? t.style.setProperty(e, r) : t.style.removeProperty(e);
    }
  );
}
function li(t) {
  const e = t.getBoundingClientRect().left;
  return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight";
}
function ci(t) {
  const e = document,
    n = e.defaultView ?? window,
    { documentElement: r, body: a } = e;
  if (a.hasAttribute(jn)) return Ne;
  a.setAttribute(jn, "");
  const o = n.innerWidth - r.clientWidth,
    s = () => si(r, "--scrollbar-width", `${o}px`),
    l = li(r),
    c = n.getComputedStyle(a)[l],
    p = () => Zr(a, { overflow: "hidden", [l]: `calc(${c} + ${o}px)` }),
    f = () => {
      const { scrollX: g, scrollY: v, visualViewport: m } = n,
        _ = (m == null ? void 0 : m.offsetLeft) ?? 0,
        y = (m == null ? void 0 : m.offsetTop) ?? 0,
        x = Zr(a, {
          position: "fixed",
          overflow: "hidden",
          top: `${-(v - Math.floor(y))}px`,
          left: `${-(g - Math.floor(_))}px`,
          right: "0",
          [l]: `calc(${c} + ${o}px)`,
        });
      return () => {
        x == null || x(), n.scrollTo(g, v);
      };
    },
    h = [s(), ei() ? f() : p()];
  return () => {
    h.forEach((g) => (g == null ? void 0 : g())), a.removeAttribute(jn);
  };
}
function di(t) {
  const { open: e, forceVisible: n, activeTrigger: r } = t;
  return Yt([e, n, r], ([a, i, o]) => (a || i) && o !== null);
}
function Rt(t, e) {
  let n;
  const r = Yt(t, (i) => {
      n == null || n(), (n = e(i));
    }).subscribe(Ne),
    a = () => {
      r(), n == null || n();
    };
  return Ua(a), a;
}
function sn(t) {
  const e = {};
  return (
    Object.keys(t).forEach((n) => {
      const r = n,
        a = t[r];
      e[r] = dn(ft(a));
    }),
    e
  );
}
function ui(t) {
  let e = t.parentElement;
  for (; nt(e) && !e.hasAttribute("data-portal"); ) e = e.parentElement;
  return e || "body";
}
function rr(t, e) {
  return e !== void 0 ? e : ui(t) === "body" ? document.body : null;
}
async function Wr(t) {
  const { prop: e, defaultEl: n } = t;
  if ((await Promise.all([bo(1), an]), e === void 0)) {
    n == null || n.focus();
    return;
  }
  const r = mo(e) ? e(n) : e;
  if (typeof r == "string") {
    const a = document.querySelector(r);
    if (!nt(a)) return;
    a.focus();
  } else nt(r) && r.focus();
}
jt(void 0, (t) => {
  function e(r) {
    t(r), t(void 0);
  }
  return Je(document, "pointerup", e, { passive: !1, capture: !0 });
});
const fi = jt(void 0, (t) => {
    function e(r) {
      r && r.key === At.ESCAPE && t(r), t(void 0);
    }
    return Je(document, "keydown", e, { passive: !1 });
  }),
  _o = (t, e = {}) => {
    let n = Ne;
    function r(a = {}) {
      n();
      const i = { enabled: !0, ...a },
        o = Ha(i.enabled) ? i.enabled : jt(i.enabled);
      n = ut(
        fi.subscribe((s) => {
          var c;
          if (!s || !go(o)) return;
          const l = s.target;
          if (!(!nt(l) || l.closest("[data-escapee]") !== t)) {
            if ((s.preventDefault(), i.ignore)) {
              if (mo(i.ignore)) {
                if (i.ignore(s)) return;
              } else if (
                Array.isArray(i.ignore) &&
                i.ignore.length > 0 &&
                i.ignore.some((p) => p && l === p)
              )
                return;
            }
            (c = i.handler) == null || c.call(i, s);
          }
        }),
        Rt(o, (s) => {
          s ? (t.dataset.escapee = "") : delete t.dataset.escapee;
        })
      );
    }
    return (
      r(e),
      {
        update: r,
        destroy() {
          t.removeAttribute("data-escapee"), n();
        },
      }
    );
  },
  Ct = Math.min,
  $e = Math.max,
  An = Math.round,
  hn = Math.floor,
  kt = (t) => ({ x: t, y: t }),
  vi = { left: "right", right: "left", bottom: "top", top: "bottom" },
  gi = { start: "end", end: "start" };
function or(t, e, n) {
  return $e(t, Ct(e, n));
}
function Kt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ot(t) {
  return t.split("-")[0];
}
function $t(t) {
  return t.split("-")[1];
}
function Ao(t) {
  return t === "x" ? "y" : "x";
}
function mr(t) {
  return t === "y" ? "height" : "width";
}
function un(t) {
  return ["top", "bottom"].includes(Ot(t)) ? "y" : "x";
}
function br(t) {
  return Ao(un(t));
}
function pi(t, e, n) {
  n === void 0 && (n = !1);
  const r = $t(t),
    a = br(t),
    i = mr(a);
  let o =
    a === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return e.reference[i] > e.floating[i] && (o = Cn(o)), [o, Cn(o)];
}
function hi(t) {
  const e = Cn(t);
  return [ar(t), e, ar(e)];
}
function ar(t) {
  return t.replace(/start|end/g, (e) => gi[e]);
}
function mi(t, e, n) {
  const r = ["left", "right"],
    a = ["right", "left"],
    i = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? (e ? a : r) : e ? r : a;
    case "left":
    case "right":
      return e ? i : o;
    default:
      return [];
  }
}
function bi(t, e, n, r) {
  const a = $t(t);
  let i = mi(Ot(t), n === "start", r);
  return (
    a && ((i = i.map((o) => o + "-" + a)), e && (i = i.concat(i.map(ar)))), i
  );
}
function Cn(t) {
  return t.replace(/left|right|bottom|top/g, (e) => vi[e]);
}
function wi(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Co(t) {
  return typeof t != "number"
    ? wi(t)
    : { top: t, right: t, bottom: t, left: t };
}
function kn(t) {
  const { x: e, y: n, width: r, height: a } = t;
  return {
    width: r,
    height: a,
    top: n,
    left: e,
    right: e + r,
    bottom: n + a,
    x: e,
    y: n,
  };
}
function jr(t, e, n) {
  let { reference: r, floating: a } = t;
  const i = un(e),
    o = br(e),
    s = mr(o),
    l = Ot(e),
    c = i === "y",
    p = r.x + r.width / 2 - a.width / 2,
    f = r.y + r.height / 2 - a.height / 2,
    h = r[s] / 2 - a[s] / 2;
  let g;
  switch (l) {
    case "top":
      g = { x: p, y: r.y - a.height };
      break;
    case "bottom":
      g = { x: p, y: r.y + r.height };
      break;
    case "right":
      g = { x: r.x + r.width, y: f };
      break;
    case "left":
      g = { x: r.x - a.width, y: f };
      break;
    default:
      g = { x: r.x, y: r.y };
  }
  switch ($t(e)) {
    case "start":
      g[o] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      g[o] += h * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const yi = async (t, e, n) => {
  const {
      placement: r = "bottom",
      strategy: a = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    s = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let c = await o.getElementRects({ reference: t, floating: e, strategy: a }),
    { x: p, y: f } = jr(c, r, l),
    h = r,
    g = {},
    v = 0;
  for (let m = 0; m < s.length; m++) {
    const { name: _, fn: y } = s[m],
      {
        x,
        y: b,
        data: C,
        reset: S,
      } = await y({
        x: p,
        y: f,
        initialPlacement: r,
        placement: h,
        strategy: a,
        middlewareData: g,
        rects: c,
        platform: o,
        elements: { reference: t, floating: e },
      });
    (p = x ?? p),
      (f = b ?? f),
      (g = { ...g, [_]: { ...g[_], ...C } }),
      S &&
        v <= 50 &&
        (v++,
        typeof S == "object" &&
          (S.placement && (h = S.placement),
          S.rects &&
            (c =
              S.rects === !0
                ? await o.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: a,
                  })
                : S.rects),
          ({ x: p, y: f } = jr(c, h, l))),
        (m = -1));
  }
  return { x: p, y: f, placement: h, strategy: a, middlewareData: g };
};
async function wr(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: r, y: a, platform: i, rects: o, elements: s, strategy: l } = t,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: p = "viewport",
      elementContext: f = "floating",
      altBoundary: h = !1,
      padding: g = 0,
    } = Kt(e, t),
    v = Co(g),
    _ = s[h ? (f === "floating" ? "reference" : "floating") : f],
    y = kn(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(_))) == null ||
          n
            ? _
            : _.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(s.floating))),
        boundary: c,
        rootBoundary: p,
        strategy: l,
      })
    ),
    x =
      f === "floating"
        ? { x: r, y: a, width: o.floating.width, height: o.floating.height }
        : o.reference,
    b = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(s.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(b)))
      ? (await (i.getScale == null ? void 0 : i.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = kn(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: x,
            offsetParent: b,
            strategy: l,
          })
        : x
    );
  return {
    top: (y.top - S.top + v.top) / C.y,
    bottom: (S.bottom - y.bottom + v.bottom) / C.y,
    left: (y.left - S.left + v.left) / C.x,
    right: (S.right - y.right + v.right) / C.x,
  };
}
const xi = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const {
          x: n,
          y: r,
          placement: a,
          rects: i,
          platform: o,
          elements: s,
          middlewareData: l,
        } = e,
        { element: c, padding: p = 0 } = Kt(t, e) || {};
      if (c == null) return {};
      const f = Co(p),
        h = { x: n, y: r },
        g = br(a),
        v = mr(g),
        m = await o.getDimensions(c),
        _ = g === "y",
        y = _ ? "top" : "left",
        x = _ ? "bottom" : "right",
        b = _ ? "clientHeight" : "clientWidth",
        C = i.reference[v] + i.reference[g] - h[g] - i.floating[v],
        S = h[g] - i.reference[g],
        M = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
      let N = M ? M[b] : 0;
      (!N || !(await (o.isElement == null ? void 0 : o.isElement(M)))) &&
        (N = s.floating[b] || i.floating[v]);
      const T = C / 2 - S / 2,
        z = N / 2 - m[v] / 2 - 1,
        U = Ct(f[y], z),
        O = Ct(f[x], z),
        u = U,
        d = N - m[v] - O,
        A = N / 2 - m[v] / 2 + T,
        R = or(u, A, d),
        D =
          !l.arrow &&
          $t(a) != null &&
          A !== R &&
          i.reference[v] / 2 - (A < u ? U : O) - m[v] / 2 < 0,
        V = D ? (A < u ? A - u : A - d) : 0;
      return {
        [g]: h[g] + V,
        data: {
          [g]: R,
          centerOffset: A - R - V,
          ...(D && { alignmentOffset: V }),
        },
        reset: D,
      };
    },
  }),
  _i = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(e) {
          var n, r;
          const {
              placement: a,
              middlewareData: i,
              rects: o,
              initialPlacement: s,
              platform: l,
              elements: c,
            } = e,
            {
              mainAxis: p = !0,
              crossAxis: f = !0,
              fallbackPlacements: h,
              fallbackStrategy: g = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: m = !0,
              ..._
            } = Kt(t, e);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const y = Ot(a),
            x = Ot(s) === s,
            b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            C = h || (x || !m ? [Cn(s)] : hi(s));
          !h && v !== "none" && C.push(...bi(s, m, v, b));
          const S = [s, ...C],
            M = await wr(e, _),
            N = [];
          let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((p && N.push(M[y]), f)) {
            const u = pi(a, o, b);
            N.push(M[u[0]], M[u[1]]);
          }
          if (
            ((T = [...T, { placement: a, overflows: N }]),
            !N.every((u) => u <= 0))
          ) {
            var z, U;
            const u = (((z = i.flip) == null ? void 0 : z.index) || 0) + 1,
              d = S[u];
            if (d)
              return {
                data: { index: u, overflows: T },
                reset: { placement: d },
              };
            let A =
              (U = T.filter((R) => R.overflows[0] <= 0).sort(
                (R, D) => R.overflows[1] - D.overflows[1]
              )[0]) == null
                ? void 0
                : U.placement;
            if (!A)
              switch (g) {
                case "bestFit": {
                  var O;
                  const R =
                    (O = T.map((D) => [
                      D.placement,
                      D.overflows
                        .filter((V) => V > 0)
                        .reduce((V, L) => V + L, 0),
                    ]).sort((D, V) => D[1] - V[1])[0]) == null
                      ? void 0
                      : O[0];
                  R && (A = R);
                  break;
                }
                case "initialPlacement":
                  A = s;
                  break;
              }
            if (a !== A) return { reset: { placement: A } };
          }
          return {};
        },
      }
    );
  };
async function Ai(t, e) {
  const { placement: n, platform: r, elements: a } = t,
    i = await (r.isRTL == null ? void 0 : r.isRTL(a.floating)),
    o = Ot(n),
    s = $t(n),
    l = un(n) === "y",
    c = ["left", "top"].includes(o) ? -1 : 1,
    p = i && l ? -1 : 1,
    f = Kt(e, t);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: v,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    s && typeof v == "number" && (g = s === "end" ? v * -1 : v),
    l ? { x: g * p, y: h * c } : { x: h * c, y: g * p }
  );
}
const Ci = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(e) {
          var n, r;
          const { x: a, y: i, placement: o, middlewareData: s } = e,
            l = await Ai(e, t);
          return o === ((n = s.offset) == null ? void 0 : n.placement) &&
            (r = s.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: a + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  ki = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: n, y: r, placement: a } = e,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: s = {
                fn: (_) => {
                  let { x: y, y: x } = _;
                  return { x: y, y: x };
                },
              },
              ...l
            } = Kt(t, e),
            c = { x: n, y: r },
            p = await wr(e, l),
            f = un(Ot(a)),
            h = Ao(f);
          let g = c[h],
            v = c[f];
          if (i) {
            const _ = h === "y" ? "top" : "left",
              y = h === "y" ? "bottom" : "right",
              x = g + p[_],
              b = g - p[y];
            g = or(x, g, b);
          }
          if (o) {
            const _ = f === "y" ? "top" : "left",
              y = f === "y" ? "bottom" : "right",
              x = v + p[_],
              b = v - p[y];
            v = or(x, v, b);
          }
          const m = s.fn({ ...e, [h]: g, [f]: v });
          return { ...m, data: { x: m.x - n, y: m.y - r } };
        },
      }
    );
  },
  Oi = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(e) {
          const { placement: n, rects: r, platform: a, elements: i } = e,
            { apply: o = () => {}, ...s } = Kt(t, e),
            l = await wr(e, s),
            c = Ot(n),
            p = $t(n),
            f = un(n) === "y",
            { width: h, height: g } = r.floating;
          let v, m;
          c === "top" || c === "bottom"
            ? ((v = c),
              (m =
                p ===
                ((await (a.isRTL == null ? void 0 : a.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = c), (v = p === "end" ? "top" : "bottom"));
          const _ = g - l[v],
            y = h - l[m],
            x = !e.middlewareData.shift;
          let b = _,
            C = y;
          if (f) {
            const M = h - l.left - l.right;
            C = p || x ? Ct(y, M) : M;
          } else {
            const M = g - l.top - l.bottom;
            b = p || x ? Ct(_, M) : M;
          }
          if (x && !p) {
            const M = $e(l.left, 0),
              N = $e(l.right, 0),
              T = $e(l.top, 0),
              z = $e(l.bottom, 0);
            f
              ? (C = h - 2 * (M !== 0 || N !== 0 ? M + N : $e(l.left, l.right)))
              : (b =
                  g - 2 * (T !== 0 || z !== 0 ? T + z : $e(l.top, l.bottom)));
          }
          await o({ ...e, availableWidth: C, availableHeight: b });
          const S = await a.getDimensions(i.floating);
          return h !== S.width || g !== S.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Qt(t) {
  return ko(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Xe(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function wt(t) {
  var e;
  return (e = (ko(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function ko(t) {
  return t instanceof Node || t instanceof Xe(t).Node;
}
function vt(t) {
  return t instanceof Element || t instanceof Xe(t).Element;
}
function gt(t) {
  return t instanceof HTMLElement || t instanceof Xe(t).HTMLElement;
}
function Ur(t) {
  return typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof Xe(t).ShadowRoot;
}
function fn(t) {
  const { overflow: e, overflowX: n, overflowY: r, display: a } = it(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + r + n) &&
    !["inline", "contents"].includes(a)
  );
}
function Pi(t) {
  return ["table", "td", "th"].includes(Qt(t));
}
function yr(t) {
  const e = xr(),
    n = it(t);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!e && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!e && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function Si(t) {
  let e = Pt(t);
  for (; gt(e) && !Gt(e); ) {
    if (yr(e)) return e;
    e = Pt(e);
  }
  return null;
}
function xr() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Gt(t) {
  return ["html", "body", "#document"].includes(Qt(t));
}
function it(t) {
  return Xe(t).getComputedStyle(t);
}
function Dn(t) {
  return vt(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function Pt(t) {
  if (Qt(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (Ur(t) && t.host) || wt(t);
  return Ur(e) ? e.host : e;
}
function Oo(t) {
  const e = Pt(t);
  return Gt(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : gt(e) && fn(e)
    ? e
    : Oo(e);
}
function ln(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const a = Oo(t),
    i = a === ((r = t.ownerDocument) == null ? void 0 : r.body),
    o = Xe(a);
  return i
    ? e.concat(
        o,
        o.visualViewport || [],
        fn(a) ? a : [],
        o.frameElement && n ? ln(o.frameElement) : []
      )
    : e.concat(a, ln(a, [], n));
}
function Po(t) {
  const e = it(t);
  let n = parseFloat(e.width) || 0,
    r = parseFloat(e.height) || 0;
  const a = gt(t),
    i = a ? t.offsetWidth : n,
    o = a ? t.offsetHeight : r,
    s = An(n) !== i || An(r) !== o;
  return s && ((n = i), (r = o)), { width: n, height: r, $: s };
}
function _r(t) {
  return vt(t) ? t : t.contextElement;
}
function Ut(t) {
  const e = _r(t);
  if (!gt(e)) return kt(1);
  const n = e.getBoundingClientRect(),
    { width: r, height: a, $: i } = Po(e);
  let o = (i ? An(n.width) : n.width) / r,
    s = (i ? An(n.height) : n.height) / a;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: o, y: s }
  );
}
const Ti = kt(0);
function So(t) {
  const e = Xe(t);
  return !xr() || !e.visualViewport
    ? Ti
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Li(t, e, n) {
  return e === void 0 && (e = !1), !n || (e && n !== Xe(t)) ? !1 : e;
}
function Dt(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const a = t.getBoundingClientRect(),
    i = _r(t);
  let o = kt(1);
  e && (r ? vt(r) && (o = Ut(r)) : (o = Ut(t)));
  const s = Li(i, n, r) ? So(i) : kt(0);
  let l = (a.left + s.x) / o.x,
    c = (a.top + s.y) / o.y,
    p = a.width / o.x,
    f = a.height / o.y;
  if (i) {
    const h = Xe(i),
      g = r && vt(r) ? Xe(r) : r;
    let v = h,
      m = v.frameElement;
    for (; m && r && g !== v; ) {
      const _ = Ut(m),
        y = m.getBoundingClientRect(),
        x = it(m),
        b = y.left + (m.clientLeft + parseFloat(x.paddingLeft)) * _.x,
        C = y.top + (m.clientTop + parseFloat(x.paddingTop)) * _.y;
      (l *= _.x),
        (c *= _.y),
        (p *= _.x),
        (f *= _.y),
        (l += b),
        (c += C),
        (v = Xe(m)),
        (m = v.frameElement);
    }
  }
  return kn({ width: p, height: f, x: l, y: c });
}
const Ei = [":popover-open", ":modal"];
function Ar(t) {
  return Ei.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Mi(t) {
  let { elements: e, rect: n, offsetParent: r, strategy: a } = t;
  const i = a === "fixed",
    o = wt(r),
    s = e ? Ar(e.floating) : !1;
  if (r === o || (s && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = kt(1);
  const p = kt(0),
    f = gt(r);
  if (
    (f || (!f && !i)) &&
    ((Qt(r) !== "body" || fn(o)) && (l = Dn(r)), gt(r))
  ) {
    const h = Dt(r);
    (c = Ut(r)), (p.x = h.x + r.clientLeft), (p.y = h.y + r.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + p.x,
    y: n.y * c.y - l.scrollTop * c.y + p.y,
  };
}
function Ri(t) {
  return Array.from(t.getClientRects());
}
function To(t) {
  return Dt(wt(t)).left + Dn(t).scrollLeft;
}
function Di(t) {
  const e = wt(t),
    n = Dn(t),
    r = t.ownerDocument.body,
    a = $e(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth),
    i = $e(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + To(t);
  const s = -n.scrollTop;
  return (
    it(r).direction === "rtl" && (o += $e(e.clientWidth, r.clientWidth) - a),
    { width: a, height: i, x: o, y: s }
  );
}
function Fi(t, e) {
  const n = Xe(t),
    r = wt(t),
    a = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    s = 0,
    l = 0;
  if (a) {
    (i = a.width), (o = a.height);
    const c = xr();
    (!c || (c && e === "fixed")) && ((s = a.offsetLeft), (l = a.offsetTop));
  }
  return { width: i, height: o, x: s, y: l };
}
function Ni(t, e) {
  const n = Dt(t, !0, e === "fixed"),
    r = n.top + t.clientTop,
    a = n.left + t.clientLeft,
    i = gt(t) ? Ut(t) : kt(1),
    o = t.clientWidth * i.x,
    s = t.clientHeight * i.y,
    l = a * i.x,
    c = r * i.y;
  return { width: o, height: s, x: l, y: c };
}
function Gr(t, e, n) {
  let r;
  if (e === "viewport") r = Fi(t, n);
  else if (e === "document") r = Di(wt(t));
  else if (vt(e)) r = Ni(e, n);
  else {
    const a = So(t);
    r = { ...e, x: e.x - a.x, y: e.y - a.y };
  }
  return kn(r);
}
function Lo(t, e) {
  const n = Pt(t);
  return n === e || !vt(n) || Gt(n)
    ? !1
    : it(n).position === "fixed" || Lo(n, e);
}
function zi(t, e) {
  const n = e.get(t);
  if (n) return n;
  let r = ln(t, [], !1).filter((s) => vt(s) && Qt(s) !== "body"),
    a = null;
  const i = it(t).position === "fixed";
  let o = i ? Pt(t) : t;
  for (; vt(o) && !Gt(o); ) {
    const s = it(o),
      l = yr(o);
    !l && s.position === "fixed" && (a = null),
      (
        i
          ? !l && !a
          : (!l &&
              s.position === "static" &&
              !!a &&
              ["absolute", "fixed"].includes(a.position)) ||
            (fn(o) && !l && Lo(t, o))
      )
        ? (r = r.filter((p) => p !== o))
        : (a = s),
      (o = Pt(o));
  }
  return e.set(t, r), r;
}
function Ii(t) {
  let { element: e, boundary: n, rootBoundary: r, strategy: a } = t;
  const o = [
      ...(n === "clippingAncestors"
        ? Ar(e)
          ? []
          : zi(e, this._c)
        : [].concat(n)),
      r,
    ],
    s = o[0],
    l = o.reduce((c, p) => {
      const f = Gr(e, p, a);
      return (
        (c.top = $e(f.top, c.top)),
        (c.right = Ct(f.right, c.right)),
        (c.bottom = Ct(f.bottom, c.bottom)),
        (c.left = $e(f.left, c.left)),
        c
      );
    }, Gr(e, s, a));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function Bi(t) {
  const { width: e, height: n } = Po(t);
  return { width: e, height: n };
}
function Vi(t, e, n) {
  const r = gt(e),
    a = wt(e),
    i = n === "fixed",
    o = Dt(t, !0, i, e);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const l = kt(0);
  if (r || (!r && !i))
    if (((Qt(e) !== "body" || fn(a)) && (s = Dn(e)), r)) {
      const f = Dt(e, !0, i, e);
      (l.x = f.x + e.clientLeft), (l.y = f.y + e.clientTop);
    } else a && (l.x = To(a));
  const c = o.left + s.scrollLeft - l.x,
    p = o.top + s.scrollTop - l.y;
  return { x: c, y: p, width: o.width, height: o.height };
}
function Un(t) {
  return it(t).position === "static";
}
function qr(t, e) {
  return !gt(t) || it(t).position === "fixed"
    ? null
    : e
    ? e(t)
    : t.offsetParent;
}
function Eo(t, e) {
  const n = Xe(t);
  if (Ar(t)) return n;
  if (!gt(t)) {
    let a = Pt(t);
    for (; a && !Gt(a); ) {
      if (vt(a) && !Un(a)) return a;
      a = Pt(a);
    }
    return n;
  }
  let r = qr(t, e);
  for (; r && Pi(r) && Un(r); ) r = qr(r, e);
  return r && Gt(r) && Un(r) && !yr(r) ? n : r || Si(t) || n;
}
const Hi = async function (t) {
  const e = this.getOffsetParent || Eo,
    n = this.getDimensions,
    r = await n(t.floating);
  return {
    reference: Vi(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Zi(t) {
  return it(t).direction === "rtl";
}
const Wi = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mi,
  getDocumentElement: wt,
  getClippingRect: Ii,
  getOffsetParent: Eo,
  getElementRects: Hi,
  getClientRects: Ri,
  getDimensions: Bi,
  getScale: Ut,
  isElement: vt,
  isRTL: Zi,
};
function ji(t, e) {
  let n = null,
    r;
  const a = wt(t);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null);
  }
  function o(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), i();
    const { left: c, top: p, width: f, height: h } = t.getBoundingClientRect();
    if ((s || e(), !f || !h)) return;
    const g = hn(p),
      v = hn(a.clientWidth - (c + f)),
      m = hn(a.clientHeight - (p + h)),
      _ = hn(c),
      x = {
        rootMargin: -g + "px " + -v + "px " + -m + "px " + -_ + "px",
        threshold: $e(0, Ct(1, l)) || 1,
      };
    let b = !0;
    function C(S) {
      const M = S[0].intersectionRatio;
      if (M !== l) {
        if (!b) return o();
        M
          ? o(!1, M)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...x, root: a.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, x);
    }
    n.observe(t);
  }
  return o(!0), i;
}
function Ui(t, e, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: a = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: s = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = _r(t),
    p = a || i ? [...(c ? ln(c) : []), ...ln(e)] : [];
  p.forEach((y) => {
    a && y.addEventListener("scroll", n, { passive: !0 }),
      i && y.addEventListener("resize", n);
  });
  const f = c && s ? ji(c, n) : null;
  let h = -1,
    g = null;
  o &&
    ((g = new ResizeObserver((y) => {
      let [x] = y;
      x &&
        x.target === c &&
        g &&
        (g.unobserve(e),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var b;
          (b = g) == null || b.observe(e);
        }))),
        n();
    })),
    c && !l && g.observe(c),
    g.observe(e));
  let v,
    m = l ? Dt(t) : null;
  l && _();
  function _() {
    const y = Dt(t);
    m &&
      (y.x !== m.x ||
        y.y !== m.y ||
        y.width !== m.width ||
        y.height !== m.height) &&
      n(),
      (m = y),
      (v = requestAnimationFrame(_));
  }
  return (
    n(),
    () => {
      var y;
      p.forEach((x) => {
        a && x.removeEventListener("scroll", n),
          i && x.removeEventListener("resize", n);
      }),
        f == null || f(),
        (y = g) == null || y.disconnect(),
        (g = null),
        l && cancelAnimationFrame(v);
    }
  );
}
const Gi = Ci,
  qi = ki,
  Yi = _i,
  Ki = Oi,
  $i = xi,
  Qi = (t, e, n) => {
    const r = new Map(),
      a = { platform: Wi, ...n },
      i = { ...a.platform, _c: r };
    return yi(t, e, { ...a, platform: i });
  },
  Xi = {
    strategy: "absolute",
    placement: "top",
    gutter: 5,
    flip: !0,
    sameWidth: !1,
    overflowPadding: 8,
  },
  Ji = {
    bottom: "rotate(45deg)",
    left: "rotate(135deg)",
    top: "rotate(225deg)",
    right: "rotate(315deg)",
  };
function Mo(t, e, n = {}) {
  if (!e || !t || n === null) return { destroy: Ne };
  const r = { ...Xi, ...n },
    a = e.querySelector("[data-arrow=true]"),
    i = [];
  r.flip && i.push(Yi({ boundary: r.boundary, padding: r.overflowPadding }));
  const o = nt(a) ? a.offsetHeight / 2 : 0;
  if (r.gutter || r.offset) {
    const l = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (l == null ? void 0 : l.mainAxis) != null && (l.mainAxis += o),
      i.push(Gi(l));
  }
  i.push(
    qi({
      boundary: r.boundary,
      crossAxis: r.overlap,
      padding: r.overflowPadding,
    })
  ),
    a && i.push($i({ element: a, padding: 8 })),
    i.push(
      Ki({
        padding: r.overflowPadding,
        apply({ rects: l, availableHeight: c, availableWidth: p }) {
          r.sameWidth &&
            Object.assign(e.style, {
              width: `${Math.round(l.reference.width)}px`,
              minWidth: "unset",
            }),
            r.fitViewport &&
              Object.assign(e.style, {
                maxWidth: `${p}px`,
                maxHeight: `${c}px`,
              });
        },
      })
    );
  function s() {
    if (!t || !e || (nt(t) && !t.ownerDocument.documentElement.contains(t)))
      return;
    const { placement: l, strategy: c } = r;
    Qi(t, e, { placement: l, middleware: i, strategy: c }).then((p) => {
      const f = Math.round(p.x),
        h = Math.round(p.y),
        [g, v] = es(p.placement);
      if (
        (e.setAttribute("data-side", g),
        e.setAttribute("data-align", v),
        Object.assign(e.style, {
          position: r.strategy,
          top: `${h}px`,
          left: `${f}px`,
        }),
        nt(a) && p.middlewareData.arrow)
      ) {
        const { x: m, y: _ } = p.middlewareData.arrow,
          y = p.placement.split("-")[0];
        a.setAttribute("data-side", y),
          Object.assign(a.style, {
            position: "absolute",
            left: m != null ? `${m}px` : "",
            top: _ != null ? `${_}px` : "",
            [y]: `calc(100% - ${o}px)`,
            transform: Ji[y],
            backgroundColor: "inherit",
            zIndex: "inherit",
          });
      }
      return p;
    });
  }
  return (
    Object.assign(e.style, { position: r.strategy }), { destroy: Ui(t, e, s) }
  );
}
function es(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var Ro = [
    "input:not([inert])",
    "select:not([inert])",
    "textarea:not([inert])",
    "a[href]:not([inert])",
    "button:not([inert])",
    "[tabindex]:not(slot):not([inert])",
    "audio[controls]:not([inert])",
    "video[controls]:not([inert])",
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    "details>summary:first-of-type:not([inert])",
    "details:not([inert])",
  ],
  On = Ro.join(","),
  Do = typeof Element > "u",
  Ft = Do
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  Pn =
    !Do && Element.prototype.getRootNode
      ? function (t) {
          var e;
          return t == null || (e = t.getRootNode) === null || e === void 0
            ? void 0
            : e.call(t);
        }
      : function (t) {
          return t == null ? void 0 : t.ownerDocument;
        },
  Sn = function t(e, n) {
    var r;
    n === void 0 && (n = !0);
    var a =
        e == null || (r = e.getAttribute) === null || r === void 0
          ? void 0
          : r.call(e, "inert"),
      i = a === "" || a === "true",
      o = i || (n && e && t(e.parentNode));
    return o;
  },
  ts = function (e) {
    var n,
      r =
        e == null || (n = e.getAttribute) === null || n === void 0
          ? void 0
          : n.call(e, "contenteditable");
    return r === "" || r === "true";
  },
  Fo = function (e, n, r) {
    if (Sn(e)) return [];
    var a = Array.prototype.slice.apply(e.querySelectorAll(On));
    return n && Ft.call(e, On) && a.unshift(e), (a = a.filter(r)), a;
  },
  No = function t(e, n, r) {
    for (var a = [], i = Array.from(e); i.length; ) {
      var o = i.shift();
      if (!Sn(o, !1))
        if (o.tagName === "SLOT") {
          var s = o.assignedElements(),
            l = s.length ? s : o.children,
            c = t(l, !0, r);
          r.flatten
            ? a.push.apply(a, c)
            : a.push({ scopeParent: o, candidates: c });
        } else {
          var p = Ft.call(o, On);
          p && r.filter(o) && (n || !e.includes(o)) && a.push(o);
          var f =
              o.shadowRoot ||
              (typeof r.getShadowRoot == "function" && r.getShadowRoot(o)),
            h = !Sn(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
          if (f && h) {
            var g = t(f === !0 ? o.children : f.children, !0, r);
            r.flatten
              ? a.push.apply(a, g)
              : a.push({ scopeParent: o, candidates: g });
          } else i.unshift.apply(i, o.children);
        }
    }
    return a;
  },
  zo = function (e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
  },
  Lt = function (e) {
    if (!e) throw new Error("No node provided");
    return e.tabIndex < 0 &&
      (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || ts(e)) &&
      !zo(e)
      ? 0
      : e.tabIndex;
  },
  ns = function (e, n) {
    var r = Lt(e);
    return r < 0 && n && !zo(e) ? 0 : r;
  },
  rs = function (e, n) {
    return e.tabIndex === n.tabIndex
      ? e.documentOrder - n.documentOrder
      : e.tabIndex - n.tabIndex;
  },
  Io = function (e) {
    return e.tagName === "INPUT";
  },
  os = function (e) {
    return Io(e) && e.type === "hidden";
  },
  as = function (e) {
    var n =
      e.tagName === "DETAILS" &&
      Array.prototype.slice.apply(e.children).some(function (r) {
        return r.tagName === "SUMMARY";
      });
    return n;
  },
  is = function (e, n) {
    for (var r = 0; r < e.length; r++)
      if (e[r].checked && e[r].form === n) return e[r];
  },
  ss = function (e) {
    if (!e.name) return !0;
    var n = e.form || Pn(e),
      r = function (s) {
        return n.querySelectorAll('input[type="radio"][name="' + s + '"]');
      },
      a;
    if (
      typeof window < "u" &&
      typeof window.CSS < "u" &&
      typeof window.CSS.escape == "function"
    )
      a = r(window.CSS.escape(e.name));
    else
      try {
        a = r(e.name);
      } catch (o) {
        return (
          console.error(
            "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
            o.message
          ),
          !1
        );
      }
    var i = is(a, e.form);
    return !i || i === e;
  },
  ls = function (e) {
    return Io(e) && e.type === "radio";
  },
  cs = function (e) {
    return ls(e) && !ss(e);
  },
  ds = function (e) {
    var n,
      r = e && Pn(e),
      a = (n = r) === null || n === void 0 ? void 0 : n.host,
      i = !1;
    if (r && r !== e) {
      var o, s, l;
      for (
        i = !!(
          ((o = a) !== null &&
            o !== void 0 &&
            (s = o.ownerDocument) !== null &&
            s !== void 0 &&
            s.contains(a)) ||
          (e != null &&
            (l = e.ownerDocument) !== null &&
            l !== void 0 &&
            l.contains(e))
        );
        !i && a;

      ) {
        var c, p, f;
        (r = Pn(a)),
          (a = (c = r) === null || c === void 0 ? void 0 : c.host),
          (i = !!(
            (p = a) !== null &&
            p !== void 0 &&
            (f = p.ownerDocument) !== null &&
            f !== void 0 &&
            f.contains(a)
          ));
      }
    }
    return i;
  },
  Yr = function (e) {
    var n = e.getBoundingClientRect(),
      r = n.width,
      a = n.height;
    return r === 0 && a === 0;
  },
  us = function (e, n) {
    var r = n.displayCheck,
      a = n.getShadowRoot;
    if (getComputedStyle(e).visibility === "hidden") return !0;
    var i = Ft.call(e, "details>summary:first-of-type"),
      o = i ? e.parentElement : e;
    if (Ft.call(o, "details:not([open]) *")) return !0;
    if (!r || r === "full" || r === "legacy-full") {
      if (typeof a == "function") {
        for (var s = e; e; ) {
          var l = e.parentElement,
            c = Pn(e);
          if (l && !l.shadowRoot && a(l) === !0) return Yr(e);
          e.assignedSlot
            ? (e = e.assignedSlot)
            : !l && c !== e.ownerDocument
            ? (e = c.host)
            : (e = l);
        }
        e = s;
      }
      if (ds(e)) return !e.getClientRects().length;
      if (r !== "legacy-full") return !0;
    } else if (r === "non-zero-area") return Yr(e);
    return !1;
  },
  fs = function (e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
      for (var n = e.parentElement; n; ) {
        if (n.tagName === "FIELDSET" && n.disabled) {
          for (var r = 0; r < n.children.length; r++) {
            var a = n.children.item(r);
            if (a.tagName === "LEGEND")
              return Ft.call(n, "fieldset[disabled] *") ? !0 : !a.contains(e);
          }
          return !0;
        }
        n = n.parentElement;
      }
    return !1;
  },
  Tn = function (e, n) {
    return !(n.disabled || Sn(n) || os(n) || us(n, e) || as(n) || fs(n));
  },
  ir = function (e, n) {
    return !(cs(n) || Lt(n) < 0 || !Tn(e, n));
  },
  vs = function (e) {
    var n = parseInt(e.getAttribute("tabindex"), 10);
    return !!(isNaN(n) || n >= 0);
  },
  gs = function t(e) {
    var n = [],
      r = [];
    return (
      e.forEach(function (a, i) {
        var o = !!a.scopeParent,
          s = o ? a.scopeParent : a,
          l = ns(s, o),
          c = o ? t(a.candidates) : s;
        l === 0
          ? o
            ? n.push.apply(n, c)
            : n.push(s)
          : r.push({
              documentOrder: i,
              tabIndex: l,
              item: a,
              isScope: o,
              content: c,
            });
      }),
      r
        .sort(rs)
        .reduce(function (a, i) {
          return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
        }, [])
        .concat(n)
    );
  },
  ps = function (e, n) {
    n = n || {};
    var r;
    return (
      n.getShadowRoot
        ? (r = No([e], n.includeContainer, {
            filter: ir.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: vs,
          }))
        : (r = Fo(e, n.includeContainer, ir.bind(null, n))),
      gs(r)
    );
  },
  hs = function (e, n) {
    n = n || {};
    var r;
    return (
      n.getShadowRoot
        ? (r = No([e], n.includeContainer, {
            filter: Tn.bind(null, n),
            flatten: !0,
            getShadowRoot: n.getShadowRoot,
          }))
        : (r = Fo(e, n.includeContainer, Tn.bind(null, n))),
      r
    );
  },
  Nt = function (e, n) {
    if (((n = n || {}), !e)) throw new Error("No node provided");
    return Ft.call(e, On) === !1 ? !1 : ir(n, e);
  },
  ms = Ro.concat("iframe").join(","),
  Gn = function (e, n) {
    if (((n = n || {}), !e)) throw new Error("No node provided");
    return Ft.call(e, ms) === !1 ? !1 : Tn(n, e);
  };
/*!
 * focus-trap 7.5.4
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function Kr(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(t, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function $r(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Kr(Object(n), !0).forEach(function (r) {
          bs(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : Kr(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function bs(t, e, n) {
  return (
    (e = ys(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function ws(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ys(t) {
  var e = ws(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Qr = {
    activateTrap: function (e, n) {
      if (e.length > 0) {
        var r = e[e.length - 1];
        r !== n && r.pause();
      }
      var a = e.indexOf(n);
      a === -1 || e.splice(a, 1), e.push(n);
    },
    deactivateTrap: function (e, n) {
      var r = e.indexOf(n);
      r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
    },
  },
  xs = function (e) {
    return (
      e.tagName &&
      e.tagName.toLowerCase() === "input" &&
      typeof e.select == "function"
    );
  },
  _s = function (e) {
    return (
      (e == null ? void 0 : e.key) === "Escape" ||
      (e == null ? void 0 : e.key) === "Esc" ||
      (e == null ? void 0 : e.keyCode) === 27
    );
  },
  on = function (e) {
    return (
      (e == null ? void 0 : e.key) === "Tab" ||
      (e == null ? void 0 : e.keyCode) === 9
    );
  },
  As = function (e) {
    return on(e) && !e.shiftKey;
  },
  Cs = function (e) {
    return on(e) && e.shiftKey;
  },
  Xr = function (e) {
    return setTimeout(e, 0);
  },
  Jr = function (e, n) {
    var r = -1;
    return (
      e.every(function (a, i) {
        return n(a) ? ((r = i), !1) : !0;
      }),
      r
    );
  },
  Jt = function (e) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
      a < n;
      a++
    )
      r[a - 1] = arguments[a];
    return typeof e == "function" ? e.apply(void 0, r) : e;
  },
  mn = function (e) {
    return e.target.shadowRoot && typeof e.composedPath == "function"
      ? e.composedPath()[0]
      : e.target;
  },
  ks = [],
  Os = function (e, n) {
    var r = (n == null ? void 0 : n.document) || document,
      a = (n == null ? void 0 : n.trapStack) || ks,
      i = $r(
        {
          returnFocusOnDeactivate: !0,
          escapeDeactivates: !0,
          delayInitialFocus: !0,
          isKeyForward: As,
          isKeyBackward: Cs,
        },
        n
      ),
      o = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0,
      },
      s,
      l = function (u, d, A) {
        return u && u[d] !== void 0 ? u[d] : i[A || d];
      },
      c = function (u, d) {
        var A =
          typeof (d == null ? void 0 : d.composedPath) == "function"
            ? d.composedPath()
            : void 0;
        return o.containerGroups.findIndex(function (R) {
          var D = R.container,
            V = R.tabbableNodes;
          return (
            D.contains(u) ||
            (A == null ? void 0 : A.includes(D)) ||
            V.find(function (L) {
              return L === u;
            })
          );
        });
      },
      p = function (u) {
        var d = i[u];
        if (typeof d == "function") {
          for (
            var A = arguments.length, R = new Array(A > 1 ? A - 1 : 0), D = 1;
            D < A;
            D++
          )
            R[D - 1] = arguments[D];
          d = d.apply(void 0, R);
        }
        if ((d === !0 && (d = void 0), !d)) {
          if (d === void 0 || d === !1) return d;
          throw new Error(
            "`".concat(
              u,
              "` was specified but was not a node, or did not return a node"
            )
          );
        }
        var V = d;
        if (typeof d == "string" && ((V = r.querySelector(d)), !V))
          throw new Error(
            "`".concat(u, "` as selector refers to no known node")
          );
        return V;
      },
      f = function () {
        var u = p("initialFocus");
        if (u === !1) return !1;
        if (u === void 0 || !Gn(u, i.tabbableOptions))
          if (c(r.activeElement) >= 0) u = r.activeElement;
          else {
            var d = o.tabbableGroups[0],
              A = d && d.firstTabbableNode;
            u = A || p("fallbackFocus");
          }
        if (!u)
          throw new Error(
            "Your focus-trap needs to have at least one focusable element"
          );
        return u;
      },
      h = function () {
        if (
          ((o.containerGroups = o.containers.map(function (u) {
            var d = ps(u, i.tabbableOptions),
              A = hs(u, i.tabbableOptions),
              R = d.length > 0 ? d[0] : void 0,
              D = d.length > 0 ? d[d.length - 1] : void 0,
              V = A.find(function (J) {
                return Nt(J);
              }),
              L = A.slice()
                .reverse()
                .find(function (J) {
                  return Nt(J);
                }),
              B = !!d.find(function (J) {
                return Lt(J) > 0;
              });
            return {
              container: u,
              tabbableNodes: d,
              focusableNodes: A,
              posTabIndexesFound: B,
              firstTabbableNode: R,
              lastTabbableNode: D,
              firstDomTabbableNode: V,
              lastDomTabbableNode: L,
              nextTabbableNode: function (re) {
                var ae =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !0,
                  Z = d.indexOf(re);
                return Z < 0
                  ? ae
                    ? A.slice(A.indexOf(re) + 1).find(function (Y) {
                        return Nt(Y);
                      })
                    : A.slice(0, A.indexOf(re))
                        .reverse()
                        .find(function (Y) {
                          return Nt(Y);
                        })
                  : d[Z + (ae ? 1 : -1)];
              },
            };
          })),
          (o.tabbableGroups = o.containerGroups.filter(function (u) {
            return u.tabbableNodes.length > 0;
          })),
          o.tabbableGroups.length <= 0 && !p("fallbackFocus"))
        )
          throw new Error(
            "Your focus-trap must have at least one container with at least one tabbable node in it at all times"
          );
        if (
          o.containerGroups.find(function (u) {
            return u.posTabIndexesFound;
          }) &&
          o.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps."
          );
      },
      g = function O(u) {
        var d = u.activeElement;
        if (d)
          return d.shadowRoot && d.shadowRoot.activeElement !== null
            ? O(d.shadowRoot)
            : d;
      },
      v = function O(u) {
        if (u !== !1 && u !== g(document)) {
          if (!u || !u.focus) {
            O(f());
            return;
          }
          u.focus({ preventScroll: !!i.preventScroll }),
            (o.mostRecentlyFocusedNode = u),
            xs(u) && u.select();
        }
      },
      m = function (u) {
        var d = p("setReturnFocus", u);
        return d || (d === !1 ? !1 : u);
      },
      _ = function (u) {
        var d = u.target,
          A = u.event,
          R = u.isBackward,
          D = R === void 0 ? !1 : R;
        (d = d || mn(A)), h();
        var V = null;
        if (o.tabbableGroups.length > 0) {
          var L = c(d, A),
            B = L >= 0 ? o.containerGroups[L] : void 0;
          if (L < 0)
            D
              ? (V =
                  o.tabbableGroups[o.tabbableGroups.length - 1]
                    .lastTabbableNode)
              : (V = o.tabbableGroups[0].firstTabbableNode);
          else if (D) {
            var J = Jr(o.tabbableGroups, function (ue) {
              var se = ue.firstTabbableNode;
              return d === se;
            });
            if (
              (J < 0 &&
                (B.container === d ||
                  (Gn(d, i.tabbableOptions) &&
                    !Nt(d, i.tabbableOptions) &&
                    !B.nextTabbableNode(d, !1))) &&
                (J = L),
              J >= 0)
            ) {
              var re = J === 0 ? o.tabbableGroups.length - 1 : J - 1,
                ae = o.tabbableGroups[re];
              V = Lt(d) >= 0 ? ae.lastTabbableNode : ae.lastDomTabbableNode;
            } else on(A) || (V = B.nextTabbableNode(d, !1));
          } else {
            var Z = Jr(o.tabbableGroups, function (ue) {
              var se = ue.lastTabbableNode;
              return d === se;
            });
            if (
              (Z < 0 &&
                (B.container === d ||
                  (Gn(d, i.tabbableOptions) &&
                    !Nt(d, i.tabbableOptions) &&
                    !B.nextTabbableNode(d))) &&
                (Z = L),
              Z >= 0)
            ) {
              var Y = Z === o.tabbableGroups.length - 1 ? 0 : Z + 1,
                Pe = o.tabbableGroups[Y];
              V = Lt(d) >= 0 ? Pe.firstTabbableNode : Pe.firstDomTabbableNode;
            } else on(A) || (V = B.nextTabbableNode(d));
          }
        } else V = p("fallbackFocus");
        return V;
      },
      y = function (u) {
        var d = mn(u);
        if (!(c(d, u) >= 0)) {
          if (Jt(i.clickOutsideDeactivates, u)) {
            s.deactivate({ returnFocus: i.returnFocusOnDeactivate });
            return;
          }
          Jt(i.allowOutsideClick, u) || u.preventDefault();
        }
      },
      x = function (u) {
        var d = mn(u),
          A = c(d, u) >= 0;
        if (A || d instanceof Document) A && (o.mostRecentlyFocusedNode = d);
        else {
          u.stopImmediatePropagation();
          var R,
            D = !0;
          if (o.mostRecentlyFocusedNode)
            if (Lt(o.mostRecentlyFocusedNode) > 0) {
              var V = c(o.mostRecentlyFocusedNode),
                L = o.containerGroups[V].tabbableNodes;
              if (L.length > 0) {
                var B = L.findIndex(function (J) {
                  return J === o.mostRecentlyFocusedNode;
                });
                B >= 0 &&
                  (i.isKeyForward(o.recentNavEvent)
                    ? B + 1 < L.length && ((R = L[B + 1]), (D = !1))
                    : B - 1 >= 0 && ((R = L[B - 1]), (D = !1)));
              }
            } else
              o.containerGroups.some(function (J) {
                return J.tabbableNodes.some(function (re) {
                  return Lt(re) > 0;
                });
              }) || (D = !1);
          else D = !1;
          D &&
            (R = _({
              target: o.mostRecentlyFocusedNode,
              isBackward: i.isKeyBackward(o.recentNavEvent),
            })),
            v(R || o.mostRecentlyFocusedNode || f());
        }
        o.recentNavEvent = void 0;
      },
      b = function (u) {
        var d =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        o.recentNavEvent = u;
        var A = _({ event: u, isBackward: d });
        A && (on(u) && u.preventDefault(), v(A));
      },
      C = function (u) {
        if (_s(u) && Jt(i.escapeDeactivates, u) !== !1) {
          u.preventDefault(), s.deactivate();
          return;
        }
        (i.isKeyForward(u) || i.isKeyBackward(u)) && b(u, i.isKeyBackward(u));
      },
      S = function (u) {
        var d = mn(u);
        c(d, u) >= 0 ||
          Jt(i.clickOutsideDeactivates, u) ||
          Jt(i.allowOutsideClick, u) ||
          (u.preventDefault(), u.stopImmediatePropagation());
      },
      M = function () {
        if (o.active)
          return (
            Qr.activateTrap(a, s),
            (o.delayInitialFocusTimer = i.delayInitialFocus
              ? Xr(function () {
                  v(f());
                })
              : v(f())),
            r.addEventListener("focusin", x, !0),
            r.addEventListener("mousedown", y, { capture: !0, passive: !1 }),
            r.addEventListener("touchstart", y, { capture: !0, passive: !1 }),
            r.addEventListener("click", S, { capture: !0, passive: !1 }),
            r.addEventListener("keydown", C, { capture: !0, passive: !1 }),
            s
          );
      },
      N = function () {
        if (o.active)
          return (
            r.removeEventListener("focusin", x, !0),
            r.removeEventListener("mousedown", y, !0),
            r.removeEventListener("touchstart", y, !0),
            r.removeEventListener("click", S, !0),
            r.removeEventListener("keydown", C, !0),
            s
          );
      },
      T = function (u) {
        var d = u.some(function (A) {
          var R = Array.from(A.removedNodes);
          return R.some(function (D) {
            return D === o.mostRecentlyFocusedNode;
          });
        });
        d && v(f());
      },
      z =
        typeof window < "u" && "MutationObserver" in window
          ? new MutationObserver(T)
          : void 0,
      U = function () {
        z &&
          (z.disconnect(),
          o.active &&
            !o.paused &&
            o.containers.map(function (u) {
              z.observe(u, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (s = {
        get active() {
          return o.active;
        },
        get paused() {
          return o.paused;
        },
        activate: function (u) {
          if (o.active) return this;
          var d = l(u, "onActivate"),
            A = l(u, "onPostActivate"),
            R = l(u, "checkCanFocusTrap");
          R || h(),
            (o.active = !0),
            (o.paused = !1),
            (o.nodeFocusedBeforeActivation = r.activeElement),
            d == null || d();
          var D = function () {
            R && h(), M(), U(), A == null || A();
          };
          return R ? (R(o.containers.concat()).then(D, D), this) : (D(), this);
        },
        deactivate: function (u) {
          if (!o.active) return this;
          var d = $r(
            {
              onDeactivate: i.onDeactivate,
              onPostDeactivate: i.onPostDeactivate,
              checkCanReturnFocus: i.checkCanReturnFocus,
            },
            u
          );
          clearTimeout(o.delayInitialFocusTimer),
            (o.delayInitialFocusTimer = void 0),
            N(),
            (o.active = !1),
            (o.paused = !1),
            U(),
            Qr.deactivateTrap(a, s);
          var A = l(d, "onDeactivate"),
            R = l(d, "onPostDeactivate"),
            D = l(d, "checkCanReturnFocus"),
            V = l(d, "returnFocus", "returnFocusOnDeactivate");
          A == null || A();
          var L = function () {
            Xr(function () {
              V && v(m(o.nodeFocusedBeforeActivation)), R == null || R();
            });
          };
          return V && D
            ? (D(m(o.nodeFocusedBeforeActivation)).then(L, L), this)
            : (L(), this);
        },
        pause: function (u) {
          if (o.paused || !o.active) return this;
          var d = l(u, "onPause"),
            A = l(u, "onPostPause");
          return (
            (o.paused = !0), d == null || d(), N(), U(), A == null || A(), this
          );
        },
        unpause: function (u) {
          if (!o.paused || !o.active) return this;
          var d = l(u, "onUnpause"),
            A = l(u, "onPostUnpause");
          return (
            (o.paused = !1),
            d == null || d(),
            h(),
            M(),
            U(),
            A == null || A(),
            this
          );
        },
        updateContainerElements: function (u) {
          var d = [].concat(u).filter(Boolean);
          return (
            (o.containers = d.map(function (A) {
              return typeof A == "string" ? r.querySelector(A) : A;
            })),
            o.active && h(),
            U(),
            this
          );
        },
      }),
      s.updateContainerElements(e),
      s
    );
  };
function Ps(t = {}) {
  let e;
  const { immediate: n, ...r } = t,
    a = ft(!1),
    i = ft(!1),
    o = (f) => (e == null ? void 0 : e.activate(f)),
    s = (f) => {
      e == null || e.deactivate(f);
    },
    l = () => {
      e && (e.pause(), i.set(!0));
    },
    c = () => {
      e && (e.unpause(), i.set(!1));
    };
  return {
    useFocusTrap: (f) => (
      (e = Os(f, {
        ...r,
        onActivate() {
          var h;
          a.set(!0), (h = t.onActivate) == null || h.call(t);
        },
        onDeactivate() {
          var h;
          a.set(!1), (h = t.onDeactivate) == null || h.call(t);
        },
      })),
      n && o(),
      {
        destroy() {
          s(), (e = void 0);
        },
      }
    ),
    hasFocus: zr(a),
    isPaused: zr(i),
    activate: o,
    deactivate: s,
    pause: l,
    unpause: c,
  };
}
const bn = [],
  Ss = (t, e) => {
    let n = Ne;
    function r() {
      const i = bn.indexOf(t);
      i >= 0 && bn.splice(i, 1);
    }
    function a(i) {
      n();
      const {
        open: o,
        onClose: s,
        shouldCloseOnInteractOutside: l,
        closeOnInteractOutside: c,
      } = i;
      bo(100).then(() => {
        o ? bn.push(t) : r();
      });
      function p() {
        return Ia(bn) === t;
      }
      function f() {
        p() && s && (s(), r());
      }
      function h(v) {
        const m = v.target;
        cn(m) &&
          m &&
          p() &&
          (v.preventDefault(),
          v.stopPropagation(),
          v.stopImmediatePropagation());
      }
      function g(v) {
        l != null &&
          l(v) &&
          p() &&
          (v.preventDefault(),
          v.stopPropagation(),
          v.stopImmediatePropagation(),
          f());
      }
      n = Es(t, {
        onInteractOutsideStart: h,
        onInteractOutside: c ? g : void 0,
        enabled: o,
      }).destroy;
    }
    return (
      a(e),
      {
        update: a,
        destroy() {
          r(), n();
        },
      }
    );
  },
  Ts = {
    floating: {},
    focusTrap: {},
    modal: {},
    escapeKeydown: {},
    portal: "body",
  },
  Ls = (t, e) => {
    t.dataset.escapee = "";
    const { anchorElement: n, open: r, options: a } = e;
    if (!n || !r || !a) return { destroy: Ne };
    const i = { ...Ts, ...a },
      o = [];
    if (
      (i.portal !== null && o.push(Cr(t, i.portal).destroy),
      o.push(Mo(n, t, i.floating).destroy),
      i.focusTrap !== null)
    ) {
      const { useFocusTrap: l } = Ps({
        immediate: !0,
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        returnFocusOnDeactivate: !1,
        fallbackFocus: t,
        ...i.focusTrap,
      });
      o.push(l(t).destroy);
    }
    i.modal !== null &&
      o.push(
        Ss(t, {
          onClose: () => {
            nt(n) && (r.set(!1), n.focus());
          },
          shouldCloseOnInteractOutside: (l) =>
            !(l.defaultPrevented || (nt(n) && n.contains(l.target))),
          ...i.modal,
        }).destroy
      ),
      i.escapeKeydown !== null &&
        o.push(
          _o(t, {
            enabled: r,
            handler: () => {
              r.set(!1);
            },
            ...i.escapeKeydown,
          }).destroy
        );
    const s = ut(...o);
    return {
      destroy() {
        s();
      },
    };
  },
  Cr = (t, e = "body") => {
    let n;
    if (!nt(e) && typeof e != "string") return { destroy: Ne };
    async function r(i) {
      if (((e = i), typeof e == "string")) {
        if (
          ((n = document.querySelector(e)),
          n === null && (await an(), (n = document.querySelector(e))),
          n === null)
        )
          throw new Error(`No element found matching css selector: "${e}"`);
      } else if (e instanceof HTMLElement) n = e;
      else
        throw new TypeError(
          `Unknown portal target type: ${
            e === null ? "null" : typeof e
          }. Allowed types: string (CSS selector) or HTMLElement.`
        );
      (t.dataset.portal = ""), n.appendChild(t), (t.hidden = !1);
    }
    function a() {
      t.remove();
    }
    return r(e), { update: r, destroy: a };
  },
  Es = (t, e) => {
    let n = Ne,
      r = Ne,
      a = !1,
      i = !1,
      o = !1;
    function s(p) {
      n(), r();
      const { onInteractOutside: f, onInteractOutsideStart: h, enabled: g } = p;
      if (!g) return;
      function v(y) {
        f && eo(y, t) && (h == null || h(y));
        const x = y.target;
        cn(x) && Bo(t, x) && (i = !0), (a = !0);
      }
      function m(y) {
        f == null || f(y);
      }
      const _ = Ms(t);
      if (typeof PointerEvent < "u") {
        const y = (x) => {
          r();
          const b = (C) => {
            l(C) && m(C), c();
          };
          if (x.pointerType === "touch") {
            r = Je(_, "click", b, { capture: !0, once: !0 });
            return;
          }
          b(x);
        };
        n = ut(Je(_, "pointerdown", v, !0), Je(_, "pointerup", y, !0));
      } else {
        const y = (b) => {
            o ? (o = !1) : l(b) && m(b), c();
          },
          x = (b) => {
            (o = !0), l(b) && m(b), c();
          };
        n = ut(
          Je(_, "mousedown", v, !0),
          Je(_, "mouseup", y, !0),
          Je(_, "touchstart", v, !0),
          Je(_, "touchend", x, !0)
        );
      }
    }
    function l(p) {
      return !!(a && !i && eo(p, t));
    }
    function c() {
      (a = !1), (i = !1);
    }
    return (
      s(e),
      {
        update: s,
        destroy() {
          n(), r();
        },
      }
    );
  };
function eo(t, e) {
  if ("button" in t && t.button > 0) return !1;
  const n = t.target;
  if (!cn(n)) return !1;
  const r = n.ownerDocument;
  return !r || !r.documentElement.contains(n) ? !1 : e && !Bo(e, n);
}
function Bo(t, e) {
  return t === e || t.contains(e);
}
function Ms(t) {
  return (t == null ? void 0 : t.ownerDocument) ?? document;
}
jt(!1), jt(!1), jt(void 0);
function Rs() {
  return {
    elements: {
      root: et("label", {
        action: (e) => ({
          destroy: qe(e, "mousedown", (r) => {
            !r.defaultPrevented && r.detail > 1 && r.preventDefault();
          }),
        }),
      }),
    },
  };
}
const Ds = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: !1,
  numberOfMonths: 1,
  pagedNavigation: !1,
  weekStartsOn: 0,
  fixedWeeks: !1,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: !1,
  readonly: !1,
  weekdayFormat: "narrow",
};
({
  ...Rn(
    Ds,
    "isDateDisabled",
    "isDateUnavailable",
    "value",
    "locale",
    "disabled",
    "readonly",
    "minValue",
    "maxValue",
    "weekdayFormat"
  ),
});
const Fs = {
    positioning: { placement: "bottom" },
    arrowSize: 8,
    defaultOpen: !1,
    disableFocusTrap: !1,
    closeOnEscape: !0,
    preventScroll: !1,
    onOpenChange: void 0,
    closeOnOutsideClick: !0,
    portal: void 0,
    forceVisible: !1,
    openFocus: void 0,
    closeFocus: void 0,
    onOutsideClick: void 0,
  },
  { name: en } = pr("popover"),
  Ns = ["trigger", "content"];
function zs(t) {
  const e = { ...Fs, ...t },
    n = sn(Rn(e, "open", "ids")),
    {
      positioning: r,
      arrowSize: a,
      disableFocusTrap: i,
      preventScroll: o,
      closeOnEscape: s,
      closeOnOutsideClick: l,
      portal: c,
      forceVisible: p,
      openFocus: f,
      closeFocus: h,
      onOutsideClick: g,
    } = n,
    v = e.open ?? ft(e.defaultOpen),
    m = hr(v, e == null ? void 0 : e.onOpenChange),
    _ = dn.writable(null),
    y = sn({ ...wo(Ns), ...e.ids });
  ja(() => {
    _.set(document.getElementById(y.trigger.get()));
  });
  function x() {
    m.set(!1);
    const O = document.getElementById(y.trigger.get());
    Wr({ prop: h.get(), defaultEl: O });
  }
  const b = di({ open: m, activeTrigger: _, forceVisible: p }),
    C = et(en("content"), {
      stores: [b, c, y.content],
      returned: ([O, u, d]) => ({
        hidden: O && _n ? void 0 : !0,
        tabindex: -1,
        style: Mt({ display: O ? void 0 : "none" }),
        id: d,
        "data-state": O ? "open" : "closed",
        "data-portal": ho(u),
      }),
      action: (O) => {
        let u = Ne;
        const d = Rt([b, _, r, i, s, l, c], ([A, R, D, V, L, B, J]) => {
          u(),
            !(!A || !R) &&
              an().then(() => {
                u(),
                  (u = Ls(O, {
                    anchorElement: R,
                    open: m,
                    options: {
                      floating: D,
                      focusTrap: V
                        ? null
                        : {
                            returnFocusOnDeactivate: !1,
                            clickOutsideDeactivates: B,
                            allowOutsideClick: !0,
                            escapeDeactivates: L,
                          },
                      modal: {
                        shouldCloseOnInteractOutside: M,
                        onClose: x,
                        open: A,
                        closeOnInteractOutside: B,
                      },
                      escapeKeydown: L
                        ? {
                            handler: () => {
                              x();
                            },
                          }
                        : null,
                      portal: rr(O, J),
                    },
                  }).destroy);
              });
        });
        return {
          destroy() {
            d(), u();
          },
        };
      },
    });
  function S(O) {
    m.update((u) => !u), O && O !== _.get() && _.set(O);
  }
  function M(O) {
    var A;
    if (((A = g.get()) == null || A(O), O.defaultPrevented)) return !1;
    const u = O.target,
      d = document.getElementById(y.trigger.get());
    return !(d && cn(u) && (u === d || d.contains(u)));
  }
  const N = et(en("trigger"), {
      stores: [b, y.content, y.trigger],
      returned: ([O, u, d]) => ({
        role: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": O ? "true" : "false",
        "data-state": to(O),
        "aria-controls": u,
        id: d,
      }),
      action: (O) => ({
        destroy: ut(
          qe(O, "click", () => {
            S(O);
          }),
          qe(O, "keydown", (d) => {
            (d.key !== At.ENTER && d.key !== At.SPACE) ||
              (d.preventDefault(), S(O));
          })
        ),
      }),
    }),
    T = et(en("overlay"), {
      stores: [b],
      returned: ([O]) => ({
        hidden: O ? void 0 : !0,
        tabindex: -1,
        style: Mt({ display: O ? void 0 : "none" }),
        "aria-hidden": "true",
        "data-state": to(O),
      }),
      action: (O) => {
        let u = Ne,
          d = Ne,
          A = Ne;
        return (
          s.get() &&
            (u = _o(O, {
              handler: () => {
                x();
              },
            }).destroy),
          (d = Rt([c], ([R]) => {
            if ((A(), R === null)) return;
            const D = rr(O, R);
            D !== null && (A = Cr(O, D).destroy);
          })),
          {
            destroy() {
              u(), d(), A();
            },
          }
        );
      },
    }),
    z = et(en("arrow"), {
      stores: a,
      returned: (O) => ({
        "data-arrow": !0,
        style: Mt({
          position: "absolute",
          width: `var(--arrow-size, ${O}px)`,
          height: `var(--arrow-size, ${O}px)`,
        }),
      }),
    }),
    U = et(en("close"), {
      returned: () => ({ type: "button" }),
      action: (O) => ({
        destroy: ut(
          qe(O, "click", (d) => {
            d.defaultPrevented || x();
          }),
          qe(O, "keydown", (d) => {
            d.defaultPrevented ||
              (d.key !== At.ENTER && d.key !== At.SPACE) ||
              (d.preventDefault(), S());
          })
        ),
      }),
    });
  return (
    Rt([m, _, o], ([O, u, d]) => {
      if (!_n) return;
      const A = [];
      if (O) {
        u ||
          an().then(() => {
            const D = document.getElementById(y.trigger.get());
            nt(D) && _.set(D);
          }),
          d && A.push(ci());
        const R = u ?? document.getElementById(y.trigger.get());
        Wr({ prop: f.get(), defaultEl: R });
      }
      return () => {
        A.forEach((R) => R());
      };
    }),
    {
      ids: y,
      elements: { trigger: N, content: C, arrow: z, close: U, overlay: T },
      states: { open: m },
      options: n,
    }
  );
}
function to(t) {
  return t ? "open" : "closed";
}
const Is = {
    defaultChecked: !1,
    disabled: !1,
    required: !1,
    name: "",
    value: "",
  },
  { name: no } = pr("switch");
function Bs(t) {
  const e = { ...Is, ...t },
    n = sn(Rn(e, "checked")),
    { disabled: r, required: a, name: i, value: o } = n,
    s = e.checked ?? ft(e.defaultChecked),
    l = hr(s, e == null ? void 0 : e.onCheckedChange);
  function c() {
    r.get() || l.update((h) => !h);
  }
  const p = et(no(), {
      stores: [l, r, a],
      returned: ([h, g, v]) => ({
        "data-disabled": Wn(g),
        disabled: Wn(g),
        "data-state": h ? "checked" : "unchecked",
        type: "button",
        role: "switch",
        "aria-checked": h ? "true" : "false",
        "aria-required": v ? "true" : void 0,
      }),
      action(h) {
        return {
          destroy: ut(
            qe(h, "click", () => {
              c();
            }),
            qe(h, "keydown", (v) => {
              (v.key !== At.ENTER && v.key !== At.SPACE) ||
                (v.preventDefault(), c());
            })
          ),
        };
      },
    }),
    f = et(no("input"), {
      stores: [l, i, a, r, o],
      returned: ([h, g, v, m, _]) => ({
        type: "checkbox",
        "aria-hidden": !0,
        hidden: !0,
        tabindex: -1,
        name: g,
        value: _,
        checked: h,
        required: v,
        disabled: Wn(m),
        style: Mt({
          position: "absolute",
          opacity: 0,
          "pointer-events": "none",
          margin: 0,
          transform: "translateX(-100%)",
        }),
      }),
    });
  return {
    elements: { root: p, input: f },
    states: { checked: l },
    options: n,
  };
}
const Vs = {
    positioning: { placement: "bottom" },
    arrowSize: 8,
    defaultOpen: !1,
    closeOnPointerDown: !0,
    openDelay: 1e3,
    closeDelay: 0,
    forceVisible: !1,
    portal: void 0,
    closeOnEscape: !0,
    disableHoverableContent: !1,
    group: void 0,
  },
  { name: qn } = pr("tooltip"),
  wn = new Map(),
  Hs = ["trigger", "content"];
function Zs(t) {
  const e = { ...Vs, ...t },
    n = sn(Rn(e, "open", "ids")),
    {
      positioning: r,
      arrowSize: a,
      closeOnPointerDown: i,
      openDelay: o,
      closeDelay: s,
      forceVisible: l,
      portal: c,
      closeOnEscape: p,
      disableHoverableContent: f,
      group: h,
    } = n,
    g = e.open ?? ft(e.defaultOpen),
    v = hr(g, e == null ? void 0 : e.onOpenChange),
    m = ft(null),
    _ = sn({ ...wo(Hs), ...e.ids });
  let y = !1;
  const x = (u) => (_n ? document.getElementById(_[u].get()) : null);
  let b = null,
    C = null;
  function S(u) {
    C && (window.clearTimeout(C), (C = null)),
      b ||
        (b = window.setTimeout(() => {
          v.set(!0), m.update((d) => d ?? u), (b = null);
        }, o.get()));
  }
  function M(u) {
    if ((b && (window.clearTimeout(b), (b = null)), u && O)) {
      m.set("pointer");
      return;
    }
    C ||
      (C = window.setTimeout(() => {
        v.set(!1), m.set(null), u && (y = !1), (C = null);
      }, s.get()));
  }
  const N = Yt([v, l], ([u, d]) => u || d),
    T = et(qn("trigger"), {
      stores: [_.content, _.trigger, v],
      returned: ([u, d, A]) => ({
        "aria-describedby": u,
        id: d,
        "data-state": A ? "open" : "closed",
      }),
      action: (u) => {
        const d = (R) => {
          p.get() &&
            R.key === At.ESCAPE &&
            (b && (window.clearTimeout(b), (b = null)), v.set(!1));
        };
        return {
          destroy: ut(
            qe(u, "pointerdown", () => {
              i.get() &&
                (v.set(!1),
                (y = !0),
                b && (window.clearTimeout(b), (b = null)));
            }),
            qe(u, "pointerenter", (R) => {
              Hr(R) || S("pointer");
            }),
            qe(u, "pointerleave", (R) => {
              Hr(R) || (b && (window.clearTimeout(b), (b = null)));
            }),
            qe(u, "focus", () => {
              y || S("focus");
            }),
            qe(u, "blur", () => M(!0)),
            qe(u, "keydown", d),
            Je(document, "keydown", d)
          ),
        };
      },
    }),
    z = et(qn("content"), {
      stores: [N, v, c, _.content],
      returned: ([u, d, A, R]) =>
        Ga({
          role: "tooltip",
          hidden: u ? void 0 : !0,
          tabindex: -1,
          style: u ? void 0 : Mt({ display: "none" }),
          id: R,
          "data-portal": ho(A),
          "data-state": d ? "open" : "closed",
        }),
      action: (u) => {
        let d = Ne,
          A = Ne;
        const R = Rt([N, r, c], ([L, B, J]) => {
          A(), d();
          const re = x("trigger");
          !L ||
            !re ||
            an().then(() => {
              A(), d();
              const ae = rr(u, J);
              ae && (A = Cr(u, ae).destroy), (d = Mo(re, u, B).destroy);
            });
        });
        function D(L) {
          if (!v.get()) return;
          const B = L.target;
          if (!cn(B) && !Ba(B)) return;
          const J = x("trigger");
          J && B.contains(J) && M();
        }
        const V = ut(
          qe(u, "pointerenter", () => S("pointer")),
          qe(u, "pointerdown", () => S("pointer")),
          Je(window, "scroll", D, { capture: !0 })
        );
        return {
          destroy() {
            V(), A(), d(), R();
          },
        };
      },
    }),
    U = et(qn("arrow"), {
      stores: a,
      returned: (u) => ({
        "data-arrow": !0,
        style: Mt({
          position: "absolute",
          width: `var(--arrow-size, ${u}px)`,
          height: `var(--arrow-size, ${u}px)`,
        }),
      }),
    });
  let O = !1;
  return (
    Rt(v, (u) => {
      const d = h.get();
      if (d === void 0 || d === !1) return;
      if (!u) {
        wn.get(d) === v && wn.delete(d);
        return;
      }
      const A = wn.get(d);
      A == null || A.set(!1), wn.set(d, v);
    }),
    Rt([v, m], ([u, d]) => {
      if (!(!u || !_n))
        return ut(
          Je(document, "mousemove", (A) => {
            const R = x("content"),
              D = x("trigger");
            if (!R || !D) return;
            const V = f.get() ? [D] : [D, R],
              L = ai(V);
            (O = ii({ x: A.clientX, y: A.clientY }, L)),
              d === "pointer" && (O || M());
          })
        );
    }),
    {
      ids: _,
      elements: { trigger: T, content: z, arrow: U },
      states: { open: v },
      options: n,
    }
  );
}
function Fn(t, e) {
  const n = {};
  return (
    e.forEach((r) => {
      n[r] = { [`data-${t}-${r}`]: "" };
    }),
    (r) => n[r]
  );
}
function vn() {
  const t = Ta();
  return (e) => {
    const { originalEvent: n } = e.detail,
      { cancelable: r } = e,
      a = n.type;
    t(
      a,
      { originalEvent: n, currentTarget: n.currentTarget },
      { cancelable: r }
    ) || e.preventDefault();
  };
}
function kr(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function Or(t) {
  return function (e, n) {
    if (n === void 0) return;
    const r = t[e];
    r && r.set(n);
  };
}
function Vo(t) {
  return (e = {}) => Ws(t, e);
}
function Ws(t, e) {
  const r = {
    ...{
      side: "bottom",
      align: "center",
      sideOffset: 0,
      alignOffset: 0,
      sameWidth: !1,
      avoidCollisions: !0,
      collisionPadding: 8,
      fitViewport: !1,
      strategy: "absolute",
      overlap: !1,
    },
    ...e,
  };
  t.update((a) => ({
    ...a,
    placement: js(r.side, r.align),
    offset: { ...a.offset, mainAxis: r.sideOffset, crossAxis: r.alignOffset },
    gutter: 0,
    sameWidth: r.sameWidth,
    flip: r.avoidCollisions,
    overflowPadding: r.collisionPadding,
    boundary: r.collisionBoundary,
    fitViewport: r.fitViewport,
    strategy: r.strategy,
    overlap: r.overlap,
  }));
}
function js(t, e) {
  return e === "center" ? t : `${t}-${e}`;
}
function Ho() {
  return { NAME: "popover", PARTS: ["arrow", "close", "content", "trigger"] };
}
function Us(t) {
  const { NAME: e, PARTS: n } = Ho(),
    r = Fn(e, n),
    a = {
      ...zs({
        positioning: { placement: "bottom", gutter: 0 },
        ...kr(t),
        forceVisible: !0,
      }),
      getAttrs: r,
    };
  return vr(e, a), { ...a, updateOption: Or(a.options) };
}
function Nn() {
  const { NAME: t } = Ho();
  return pt(t);
}
function Gs(t = 8) {
  const e = Nn();
  return e.options.arrowSize.set(t), e;
}
function qs(t) {
  const n = { ...{ side: "bottom", align: "center" }, ...t },
    {
      options: { positioning: r },
    } = Nn();
  Vo(r)(n);
}
function Ys() {
  const t = "label",
    n = Fn(t, ["root"]);
  return { NAME: t, getAttrs: n };
}
var Ks = X("<label><!></label>");
function $s(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(c, "$root", a),
    o = rt();
  let s = P(e, "asChild", 8, !1),
    l = P(e, "el", 28, () => {});
  const {
      elements: { root: c },
    } = Rs(),
    p = vn(),
    { getAttrs: f } = Ys(),
    h = f("root");
  ne(
    () => i(),
    () => {
      Me(o, i());
    }
  ),
    ne(
      () => k(o),
      () => {
        Object.assign(k(o), h);
      }
    ),
    ot(),
    Ve();
  var g = j(),
    v = I(g);
  {
    var m = (y) => {
        var x = j(),
          b = I(x);
        be(b, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(y, x);
      },
      _ = (y) => {
        var x = Ks();
        let b;
        var C = F(x);
        be(C, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          E(x),
          Be(
            x,
            (S) => l(S),
            () => l()
          ),
          De(x, (S) => {
            var M, N;
            return (N = (M = k(o)).action) == null ? void 0 : N.call(M, S);
          }),
          Ee(() => Te("m-mousedown", x, p)),
          le(() => (b = we(x, b, { ...k(o), ...r }))),
          w(y, x);
      };
    W(v, (y) => {
      s() ? y(m) : y(_, !1);
    });
  }
  w(t, g), Oe();
}
function Zo(t, e) {
  ke(e, !1);
  const n = We(),
    r = () => pe(y, "$idValues", n);
  let a = P(e, "disableFocusTrap", 24, () => {}),
    i = P(e, "closeOnEscape", 24, () => {}),
    o = P(e, "closeOnOutsideClick", 24, () => {}),
    s = P(e, "preventScroll", 24, () => {}),
    l = P(e, "portal", 24, () => {}),
    c = P(e, "open", 28, () => {}),
    p = P(e, "onOpenChange", 24, () => {}),
    f = P(e, "openFocus", 24, () => {}),
    h = P(e, "closeFocus", 24, () => {}),
    g = P(e, "onOutsideClick", 24, () => {});
  const {
      updateOption: v,
      states: { open: m },
      ids: _,
    } = Us({
      disableFocusTrap: a(),
      closeOnEscape: i(),
      closeOnOutsideClick: o(),
      preventScroll: s(),
      portal: l(),
      defaultOpen: c(),
      openFocus: f(),
      closeFocus: h(),
      onOutsideClick: g(),
      onOpenChange: ({ next: C }) => {
        var S;
        return c() !== C && ((S = p()) == null || S(C), c(C)), C;
      },
      positioning: { gutter: 0, offset: { mainAxis: 1 } },
    }),
    y = Yt([_.content, _.trigger], ([C, S]) => ({ content: C, trigger: S }));
  ne(
    () => ee(c()),
    () => {
      c() !== void 0 && m.set(c());
    }
  ),
    ne(
      () => ee(a()),
      () => {
        v("disableFocusTrap", a());
      }
    ),
    ne(
      () => ee(i()),
      () => {
        v("closeOnEscape", i());
      }
    ),
    ne(
      () => ee(o()),
      () => {
        v("closeOnOutsideClick", o());
      }
    ),
    ne(
      () => ee(s()),
      () => {
        v("preventScroll", s());
      }
    ),
    ne(
      () => ee(l()),
      () => {
        v("portal", l());
      }
    ),
    ne(
      () => ee(f()),
      () => {
        v("openFocus", f());
      }
    ),
    ne(
      () => ee(h()),
      () => {
        v("closeFocus", h());
      }
    ),
    ne(
      () => ee(g()),
      () => {
        v("onOutsideClick", g());
      }
    ),
    ot(),
    Ve();
  var x = j(),
    b = I(x);
  be(b, e, "default", {
    get ids() {
      return r();
    },
  }),
    w(t, x),
    Oe();
}
var Qs = X("<div></div>");
function Xs(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "el", "size"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(p, "$arrow", a),
    o = rt();
  let s = P(e, "asChild", 8, !1),
    l = P(e, "el", 28, () => {}),
    c = P(e, "size", 8, 8);
  const {
      elements: { arrow: p },
      getAttrs: f,
    } = Gs(c()),
    h = f("arrow");
  ne(
    () => i(),
    () => {
      Me(o, i());
    }
  ),
    ne(
      () => k(o),
      () => {
        Object.assign(k(o), h);
      }
    ),
    ot(),
    Ve();
  var g = j(),
    v = I(g);
  {
    var m = (y) => {
        var x = j(),
          b = I(x);
        be(b, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(y, x);
      },
      _ = (y) => {
        var x = Qs();
        let b;
        Be(
          x,
          (C) => l(C),
          () => l()
        ),
          De(x, (C) => {
            var S, M;
            return (M = (S = k(o)).action) == null ? void 0 : M.call(S, C);
          }),
          le(() => (b = we(x, b, { ...k(o), ...r }))),
          w(y, x);
      };
    W(v, (y) => {
      s() ? y(m) : y(_, !1);
    });
  }
  w(t, g), Oe();
}
var Js = X("<div><!></div>"),
  el = X("<div><!></div>"),
  tl = X("<div><!></div>"),
  nl = X("<div><!></div>"),
  rl = X("<div><!></div>");
function Wo(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, [
      "transition",
      "transitionConfig",
      "inTransition",
      "inTransitionConfig",
      "outTransition",
      "outTransitionConfig",
      "asChild",
      "id",
      "side",
      "align",
      "sideOffset",
      "alignOffset",
      "collisionPadding",
      "avoidCollisions",
      "collisionBoundary",
      "sameWidth",
      "fitViewport",
      "strategy",
      "overlap",
      "el",
    ]);
  ke(e, !1);
  const a = We(),
    i = () => pe(u, "$content", a),
    o = () => pe(d, "$open", a),
    s = rt();
  let l = P(e, "transition", 24, () => {}),
    c = P(e, "transitionConfig", 24, () => {}),
    p = P(e, "inTransition", 24, () => {}),
    f = P(e, "inTransitionConfig", 24, () => {}),
    h = P(e, "outTransition", 24, () => {}),
    g = P(e, "outTransitionConfig", 24, () => {}),
    v = P(e, "asChild", 8, !1),
    m = P(e, "id", 24, () => {}),
    _ = P(e, "side", 8, "bottom"),
    y = P(e, "align", 8, "center"),
    x = P(e, "sideOffset", 8, 0),
    b = P(e, "alignOffset", 8, 0),
    C = P(e, "collisionPadding", 8, 8),
    S = P(e, "avoidCollisions", 8, !0),
    M = P(e, "collisionBoundary", 24, () => {}),
    N = P(e, "sameWidth", 8, !1),
    T = P(e, "fitViewport", 8, !1),
    z = P(e, "strategy", 8, "absolute"),
    U = P(e, "overlap", 8, !1),
    O = P(e, "el", 28, () => {});
  const {
      elements: { content: u },
      states: { open: d },
      ids: A,
      getAttrs: R,
    } = Nn(),
    D = R("content");
  ne(
    () => ee(m()),
    () => {
      m() && A.content.set(m());
    }
  ),
    ne(
      () => i(),
      () => {
        Me(s, i());
      }
    ),
    ne(
      () => k(s),
      () => {
        Object.assign(k(s), D);
      }
    ),
    ne(
      () => (
        o(),
        ee(_()),
        ee(y()),
        ee(x()),
        ee(b()),
        ee(C()),
        ee(S()),
        ee(M()),
        ee(N()),
        ee(T()),
        ee(z()),
        ee(U())
      ),
      () => {
        o() &&
          qs({
            side: _(),
            align: y(),
            sideOffset: x(),
            alignOffset: b(),
            collisionPadding: C(),
            avoidCollisions: S(),
            collisionBoundary: M(),
            sameWidth: N(),
            fitViewport: T(),
            strategy: z(),
            overlap: U(),
          });
      }
    ),
    ot(),
    Ve();
  var V = j(),
    L = I(V);
  {
    var B = (re) => {
        var ae = j(),
          Z = I(ae);
        be(Z, e, "default", {
          get builder() {
            return k(s);
          },
        }),
          w(re, ae);
      },
      J = (re) => {
        var ae = j(),
          Z = I(ae);
        {
          var Y = (ue) => {
              var se = Js();
              let H;
              var Q = F(se);
              be(Q, e, "default", {
                get builder() {
                  return k(s);
                },
              }),
                E(se),
                Be(
                  se,
                  (Ye) => O(Ye),
                  () => O()
                ),
                De(se, (Ye) => {
                  var ze, ye;
                  return (ye = (ze = k(s)).action) == null
                    ? void 0
                    : ye.call(ze, Ye);
                }),
                le(() => (H = we(se, H, { ...k(s), ...r }))),
                at(3, se, l, c),
                w(ue, se);
            },
            Pe = (ue) => {
              var se = j(),
                H = I(se);
              {
                var Q = (ze) => {
                    var ye = el();
                    let Se;
                    var K = F(ye);
                    be(K, e, "default", {
                      get builder() {
                        return k(s);
                      },
                    }),
                      E(ye),
                      Be(
                        ye,
                        (me) => O(me),
                        () => O()
                      ),
                      De(ye, (me) => {
                        var fe, de;
                        return (de = (fe = k(s)).action) == null
                          ? void 0
                          : de.call(fe, me);
                      }),
                      le(() => (Se = we(ye, Se, { ...k(s), ...r }))),
                      at(1, ye, p, f),
                      at(2, ye, h, g),
                      w(ze, ye);
                  },
                  Ye = (ze) => {
                    var ye = j(),
                      Se = I(ye);
                    {
                      var K = (fe) => {
                          var de = tl();
                          let G;
                          var $ = F(de);
                          be($, e, "default", {
                            get builder() {
                              return k(s);
                            },
                          }),
                            E(de),
                            Be(
                              de,
                              (ve) => O(ve),
                              () => O()
                            ),
                            De(de, (ve) => {
                              var ge, oe;
                              return (oe = (ge = k(s)).action) == null
                                ? void 0
                                : oe.call(ge, ve);
                            }),
                            le(() => (G = we(de, G, { ...k(s), ...r }))),
                            at(1, de, p, f),
                            w(fe, de);
                        },
                        me = (fe) => {
                          var de = j(),
                            G = I(de);
                          {
                            var $ = (ge) => {
                                var oe = nl();
                                let ie;
                                var Ie = F(oe);
                                be(Ie, e, "default", {
                                  get builder() {
                                    return k(s);
                                  },
                                }),
                                  E(oe),
                                  Be(
                                    oe,
                                    (Fe) => O(Fe),
                                    () => O()
                                  ),
                                  De(oe, (Fe) => {
                                    var _e, Ae;
                                    return (Ae = (_e = k(s)).action) == null
                                      ? void 0
                                      : Ae.call(_e, Fe);
                                  }),
                                  le(
                                    () => (ie = we(oe, ie, { ...k(s), ...r }))
                                  ),
                                  at(2, oe, h, g),
                                  w(ge, oe);
                              },
                              ve = (ge) => {
                                var oe = j(),
                                  ie = I(oe);
                                {
                                  var Ie = (Fe) => {
                                    var _e = rl();
                                    let Ae;
                                    var Ge = F(_e);
                                    be(Ge, e, "default", {
                                      get builder() {
                                        return k(s);
                                      },
                                    }),
                                      E(_e),
                                      Be(
                                        _e,
                                        (Ce) => O(Ce),
                                        () => O()
                                      ),
                                      De(_e, (Ce) => {
                                        var xe, je;
                                        return (je = (xe = k(s)).action) == null
                                          ? void 0
                                          : je.call(xe, Ce);
                                      }),
                                      le(
                                        () =>
                                          (Ae = we(_e, Ae, { ...k(s), ...r }))
                                      ),
                                      w(Fe, _e);
                                  };
                                  W(
                                    ie,
                                    (Fe) => {
                                      o() && Fe(Ie);
                                    },
                                    !0
                                  );
                                }
                                w(ge, oe);
                              };
                            W(
                              G,
                              (ge) => {
                                h() && o() ? ge($) : ge(ve, !1);
                              },
                              !0
                            );
                          }
                          w(fe, de);
                        };
                      W(
                        Se,
                        (fe) => {
                          p() && o() ? fe(K) : fe(me, !1);
                        },
                        !0
                      );
                    }
                    w(ze, ye);
                  };
                W(
                  H,
                  (ze) => {
                    p() && h() && o() ? ze(Q) : ze(Ye, !1);
                  },
                  !0
                );
              }
              w(ue, se);
            };
          W(
            Z,
            (ue) => {
              l() && o() ? ue(Y) : ue(Pe, !1);
            },
            !0
          );
        }
        w(re, ae);
      };
    W(L, (re) => {
      v() && o() ? re(B) : re(J, !1);
    });
  }
  w(t, V), Oe();
}
var ol = X("<button><!></button>");
function jo(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "id", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(g, "$open", a),
    o = () => pe(h, "$trigger", a),
    s = rt(),
    l = rt();
  let c = P(e, "asChild", 8, !1),
    p = P(e, "id", 24, () => {}),
    f = P(e, "el", 28, () => {});
  const {
      elements: { trigger: h },
      states: { open: g },
      ids: v,
      getAttrs: m,
    } = Nn(),
    _ = vn(),
    y = m("trigger");
  ne(
    () => ee(p()),
    () => {
      p() && v.trigger.set(p());
    }
  ),
    ne(
      () => i(),
      () => {
        Me(s, { ...y, "aria-controls": i() ? v.content : void 0 });
      }
    ),
    ne(
      () => o(),
      () => {
        Me(l, o());
      }
    ),
    ne(
      () => (k(l), k(s)),
      () => {
        Object.assign(k(l), k(s));
      }
    ),
    ot(),
    Ve();
  var x = j(),
    b = I(x);
  {
    var C = (M) => {
        var N = j(),
          T = I(N);
        be(T, e, "default", {
          get builder() {
            return k(l);
          },
        }),
          w(M, N);
      },
      S = (M) => {
        var N = ol();
        let T;
        var z = F(N);
        be(z, e, "default", {
          get builder() {
            return k(l);
          },
        }),
          E(N),
          Be(
            N,
            (U) => f(U),
            () => f()
          ),
          De(N, (U) => {
            var O, u;
            return (u = (O = k(l)).action) == null ? void 0 : u.call(O, U);
          }),
          Ee(() => Te("m-click", N, _)),
          Ee(() => Te("m-keydown", N, _)),
          le(() => (T = we(N, T, { ...k(l), type: "button", ...r }))),
          w(M, N);
      };
    W(b, (M) => {
      c() ? M(C) : M(S, !1);
    });
  }
  w(t, x), Oe();
}
function Uo() {
  return { NAME: "switch", PARTS: ["root", "input", "thumb"] };
}
function al(t) {
  const { NAME: e, PARTS: n } = Uo(),
    r = Fn(e, n),
    a = { ...Bs(kr(t)), getAttrs: r };
  return vr(e, a), { ...a, updateOption: Or(a.options) };
}
function Go() {
  const { NAME: t } = Uo();
  return pt(t);
}
var il = X("<input>");
function sl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(g, "$value", a),
    o = () => pe(h, "$input", a),
    s = () => pe(v, "$name", a),
    l = () => pe(m, "$disabled", a),
    c = () => pe(_, "$required", a),
    p = rt();
  let f = P(e, "el", 28, () => {});
  const {
    elements: { input: h },
    options: { value: g, name: v, disabled: m, required: _ },
  } = Go();
  ne(
    () => i(),
    () => {
      Me(p, i() === void 0 || i() === "" ? "on" : i());
    }
  ),
    ot(),
    Ve();
  var y = il();
  er(y);
  let x;
  Be(
    y,
    (b) => f(b),
    () => f()
  ),
    De(y, (b) => {
      var C, S;
      return (S = (C = o()).action) == null ? void 0 : S.call(C, b);
    }),
    le(
      () =>
        (x = we(y, x, {
          ...o(),
          name: s(),
          disabled: l(),
          required: c(),
          value: k(p),
          ...r,
        }))
    ),
    w(t, y),
    Oe();
}
var ll = X("<button><!></button>"),
  cl = X("<!> <!>", 1);
function dl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, [
      "checked",
      "onCheckedChange",
      "disabled",
      "name",
      "value",
      "includeInput",
      "required",
      "asChild",
      "inputAttrs",
      "el",
    ]);
  ke(e, !1);
  const a = We(),
    i = () => pe(x, "$root", a),
    o = rt(),
    s = rt();
  let l = P(e, "checked", 28, () => {}),
    c = P(e, "onCheckedChange", 24, () => {}),
    p = P(e, "disabled", 24, () => {}),
    f = P(e, "name", 24, () => {}),
    h = P(e, "value", 24, () => {}),
    g = P(e, "includeInput", 8, !0),
    v = P(e, "required", 24, () => {}),
    m = P(e, "asChild", 8, !1),
    _ = P(e, "inputAttrs", 24, () => {}),
    y = P(e, "el", 28, () => {});
  const {
      elements: { root: x },
      states: { checked: b },
      updateOption: C,
      getAttrs: S,
    } = al({
      disabled: p(),
      name: f(),
      value: h(),
      required: v(),
      defaultChecked: l(),
      onCheckedChange: ({ next: d }) => {
        var A;
        return l() !== d && ((A = c()) == null || A(d), l(d)), d;
      },
    }),
    M = vn();
  ne(
    () => ee(l()),
    () => {
      l() !== void 0 && b.set(l());
    }
  ),
    ne(
      () => ee(p()),
      () => {
        C("disabled", p());
      }
    ),
    ne(
      () => ee(f()),
      () => {
        C("name", f());
      }
    ),
    ne(
      () => ee(h()),
      () => {
        C("value", h());
      }
    ),
    ne(
      () => ee(v()),
      () => {
        C("required", v());
      }
    ),
    ne(
      () => i(),
      () => {
        Me(o, i());
      }
    ),
    ne(
      () => ee(l()),
      () => {
        Me(s, { ...S("root"), "data-checked": l() ? "" : void 0 });
      }
    ),
    ne(
      () => (k(o), k(s)),
      () => {
        Object.assign(k(o), k(s));
      }
    ),
    ot(),
    Ve();
  var N = cl(),
    T = I(N);
  {
    var z = (d) => {
        var A = j(),
          R = I(A);
        be(R, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(d, A);
      },
      U = (d) => {
        var A = ll();
        let R;
        var D = F(A);
        be(D, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          E(A),
          Be(
            A,
            (V) => y(V),
            () => y()
          ),
          De(A, (V) => {
            var L, B;
            return (B = (L = k(o)).action) == null ? void 0 : B.call(L, V);
          }),
          Ee(() => Te("m-click", A, M)),
          Ee(() => Te("m-keydown", A, M)),
          le(() => (R = we(A, R, { ...k(o), type: "button", ...r }))),
          w(d, A);
      };
    W(T, (d) => {
      m() ? d(z) : d(U, !1);
    });
  }
  var O = q(T, 2);
  {
    var u = (d) => {
      sl(d, vo(_));
    };
    W(O, (d) => {
      g() && d(u);
    });
  }
  w(t, N), Oe();
}
var ul = X("<span></span>");
function fl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(c, "$checked", a),
    o = rt();
  let s = P(e, "asChild", 8, !1),
    l = P(e, "el", 28, () => {});
  const {
    states: { checked: c },
    getAttrs: p,
  } = Go();
  ne(
    () => i(),
    () => {
      Me(o, {
        ...p("thumb"),
        "data-state": i() ? "checked" : "unchecked",
        "data-checked": i() ? "" : void 0,
      });
    }
  ),
    ot(),
    Ve();
  var f = j(),
    h = I(f);
  {
    var g = (m) => {
        var _ = j(),
          y = I(_);
        be(y, e, "default", {
          get attrs() {
            return k(o);
          },
          get checked() {
            return i();
          },
        }),
          w(m, _);
      },
      v = (m) => {
        var _ = ul();
        let y;
        Be(
          _,
          (x) => l(x),
          () => l()
        ),
          le(() => (y = we(_, y, { ...r, ...k(o) }))),
          w(m, _);
      };
    W(h, (m) => {
      s() ? m(g) : m(v, !1);
    });
  }
  w(t, f), Oe();
}
function qo() {
  return { NAME: "tooltip", PARTS: ["arrow", "content", "trigger"] };
}
function vl(t) {
  const { NAME: e, PARTS: n } = qo(),
    r = Fn(e, n),
    a = {
      ...Zs({
        positioning: { placement: "top", gutter: 0 },
        openDelay: 700,
        ...kr(t),
        forceVisible: !0,
      }),
      getAttrs: r,
    };
  return vr(e, a), { ...a, updateOption: Or(a.options) };
}
function zn() {
  const { NAME: t } = qo();
  return pt(t);
}
function gl(t = 8) {
  const e = zn();
  return e.options.arrowSize.set(t), e;
}
function pl(t) {
  const n = { ...{ side: "top", align: "center", sideOffset: 1 }, ...t },
    {
      options: { positioning: r },
    } = zn();
  Vo(r)({ ...n });
}
function sr(t, e) {
  ke(e, !1);
  const n = We(),
    r = () => pe(_, "$idValues", n);
  let a = P(e, "closeOnEscape", 24, () => {}),
    i = P(e, "portal", 24, () => {}),
    o = P(e, "closeOnPointerDown", 24, () => {}),
    s = P(e, "openDelay", 24, () => {}),
    l = P(e, "closeDelay", 24, () => {}),
    c = P(e, "open", 28, () => {}),
    p = P(e, "onOpenChange", 24, () => {}),
    f = P(e, "disableHoverableContent", 24, () => {}),
    h = P(e, "group", 24, () => {});
  const {
      states: { open: g },
      updateOption: v,
      ids: m,
    } = vl({
      closeOnEscape: a(),
      portal: i(),
      closeOnPointerDown: o(),
      openDelay: s(),
      closeDelay: l(),
      forceVisible: !0,
      defaultOpen: c(),
      disableHoverableContent: f(),
      group: h(),
      onOpenChange: ({ next: b }) => {
        var C;
        return c() !== b && ((C = p()) == null || C(b), c(b)), b;
      },
      positioning: { gutter: 0, offset: { mainAxis: 1 } },
    }),
    _ = Yt([m.content, m.trigger], ([b, C]) => ({ content: b, trigger: C }));
  ne(
    () => ee(c()),
    () => {
      c() !== void 0 && g.set(c());
    }
  ),
    ne(
      () => ee(a()),
      () => {
        v("closeOnEscape", a());
      }
    ),
    ne(
      () => ee(i()),
      () => {
        v("portal", i());
      }
    ),
    ne(
      () => ee(o()),
      () => {
        v("closeOnPointerDown", o());
      }
    ),
    ne(
      () => ee(s()),
      () => {
        v("openDelay", s());
      }
    ),
    ne(
      () => ee(l()),
      () => {
        v("closeDelay", l());
      }
    ),
    ne(
      () => ee(h()),
      () => {
        v("group", h());
      }
    ),
    ne(
      () => ee(f()),
      () => {
        v("disableHoverableContent", f());
      }
    ),
    ot(),
    Ve();
  var y = j(),
    x = I(y);
  be(x, e, "default", {
    get ids() {
      return r();
    },
  }),
    w(t, y),
    Oe();
}
var hl = X("<div><!></div>"),
  ml = X("<div><!></div>"),
  bl = X("<div><!></div>"),
  wl = X("<div><!></div>"),
  yl = X("<div><!></div>");
function lr(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, [
      "transition",
      "transitionConfig",
      "inTransition",
      "inTransitionConfig",
      "outTransition",
      "outTransitionConfig",
      "asChild",
      "id",
      "side",
      "align",
      "sideOffset",
      "alignOffset",
      "collisionPadding",
      "avoidCollisions",
      "collisionBoundary",
      "sameWidth",
      "fitViewport",
      "strategy",
      "overlap",
      "el",
    ]);
  ke(e, !1);
  const a = We(),
    i = () => pe(u, "$content", a),
    o = () => pe(d, "$open", a),
    s = rt();
  let l = P(e, "transition", 24, () => {}),
    c = P(e, "transitionConfig", 24, () => {}),
    p = P(e, "inTransition", 24, () => {}),
    f = P(e, "inTransitionConfig", 24, () => {}),
    h = P(e, "outTransition", 24, () => {}),
    g = P(e, "outTransitionConfig", 24, () => {}),
    v = P(e, "asChild", 8, !1),
    m = P(e, "id", 24, () => {}),
    _ = P(e, "side", 8, "top"),
    y = P(e, "align", 8, "center"),
    x = P(e, "sideOffset", 8, 0),
    b = P(e, "alignOffset", 8, 0),
    C = P(e, "collisionPadding", 8, 8),
    S = P(e, "avoidCollisions", 8, !0),
    M = P(e, "collisionBoundary", 24, () => {}),
    N = P(e, "sameWidth", 8, !1),
    T = P(e, "fitViewport", 8, !1),
    z = P(e, "strategy", 8, "absolute"),
    U = P(e, "overlap", 8, !1),
    O = P(e, "el", 28, () => {});
  const {
      elements: { content: u },
      states: { open: d },
      ids: A,
      getAttrs: R,
    } = zn(),
    D = vn(),
    V = R("content");
  ne(
    () => ee(m()),
    () => {
      m() && A.content.set(m());
    }
  ),
    ne(
      () => i(),
      () => {
        Me(s, i());
      }
    ),
    ne(
      () => k(s),
      () => {
        Object.assign(k(s), V);
      }
    ),
    ne(
      () => (
        o(),
        ee(_()),
        ee(y()),
        ee(x()),
        ee(b()),
        ee(C()),
        ee(S()),
        ee(M()),
        ee(N()),
        ee(T()),
        ee(z()),
        ee(U())
      ),
      () => {
        o() &&
          pl({
            side: _(),
            align: y(),
            sideOffset: x(),
            alignOffset: b(),
            collisionPadding: C(),
            avoidCollisions: S(),
            collisionBoundary: M(),
            sameWidth: N(),
            fitViewport: T(),
            strategy: z(),
            overlap: U(),
          });
      }
    ),
    ot(),
    Ve();
  var L = j(),
    B = I(L);
  {
    var J = (ae) => {
        var Z = j(),
          Y = I(Z);
        be(Y, e, "default", {
          get builder() {
            return k(s);
          },
        }),
          w(ae, Z);
      },
      re = (ae) => {
        var Z = j(),
          Y = I(Z);
        {
          var Pe = (se) => {
              var H = hl();
              let Q;
              var Ye = F(H);
              be(Ye, e, "default", {
                get builder() {
                  return k(s);
                },
              }),
                E(H),
                Be(
                  H,
                  (ze) => O(ze),
                  () => O()
                ),
                De(H, (ze) => {
                  var ye, Se;
                  return (Se = (ye = k(s)).action) == null
                    ? void 0
                    : Se.call(ye, ze);
                }),
                Ee(() => Te("m-pointerdown", H, D)),
                Ee(() => Te("m-pointerenter", H, D)),
                le(() => (Q = we(H, Q, { ...k(s), ...r }))),
                at(3, H, l, c),
                w(se, H);
            },
            ue = (se) => {
              var H = j(),
                Q = I(H);
              {
                var Ye = (ye) => {
                    var Se = ml();
                    let K;
                    var me = F(Se);
                    be(me, e, "default", {
                      get builder() {
                        return k(s);
                      },
                    }),
                      E(Se),
                      Be(
                        Se,
                        (fe) => O(fe),
                        () => O()
                      ),
                      De(Se, (fe) => {
                        var de, G;
                        return (G = (de = k(s)).action) == null
                          ? void 0
                          : G.call(de, fe);
                      }),
                      Ee(() => Te("m-pointerdown", Se, D)),
                      Ee(() => Te("m-pointerenter", Se, D)),
                      le(() => (K = we(Se, K, { ...k(s), ...r }))),
                      at(1, Se, p, f),
                      at(2, Se, h, g),
                      w(ye, Se);
                  },
                  ze = (ye) => {
                    var Se = j(),
                      K = I(Se);
                    {
                      var me = (de) => {
                          var G = bl();
                          let $;
                          var ve = F(G);
                          be(ve, e, "default", {
                            get builder() {
                              return k(s);
                            },
                          }),
                            E(G),
                            Be(
                              G,
                              (ge) => O(ge),
                              () => O()
                            ),
                            De(G, (ge) => {
                              var oe, ie;
                              return (ie = (oe = k(s)).action) == null
                                ? void 0
                                : ie.call(oe, ge);
                            }),
                            Ee(() => Te("m-pointerdown", G, D)),
                            Ee(() => Te("m-pointerenter", G, D)),
                            le(() => ($ = we(G, $, { ...k(s), ...r }))),
                            at(1, G, p, f),
                            w(de, G);
                        },
                        fe = (de) => {
                          var G = j(),
                            $ = I(G);
                          {
                            var ve = (oe) => {
                                var ie = wl();
                                let Ie;
                                var Fe = F(ie);
                                be(Fe, e, "default", {
                                  get builder() {
                                    return k(s);
                                  },
                                }),
                                  E(ie),
                                  Be(
                                    ie,
                                    (_e) => O(_e),
                                    () => O()
                                  ),
                                  De(ie, (_e) => {
                                    var Ae, Ge;
                                    return (Ge = (Ae = k(s)).action) == null
                                      ? void 0
                                      : Ge.call(Ae, _e);
                                  }),
                                  Ee(() => Te("m-pointerdown", ie, D)),
                                  Ee(() => Te("m-pointerenter", ie, D)),
                                  le(
                                    () => (Ie = we(ie, Ie, { ...k(s), ...r }))
                                  ),
                                  at(2, ie, h, g),
                                  w(oe, ie);
                              },
                              ge = (oe) => {
                                var ie = j(),
                                  Ie = I(ie);
                                {
                                  var Fe = (_e) => {
                                    var Ae = yl();
                                    let Ge;
                                    var Ce = F(Ae);
                                    be(Ce, e, "default", {
                                      get builder() {
                                        return k(s);
                                      },
                                    }),
                                      E(Ae),
                                      Be(
                                        Ae,
                                        (xe) => O(xe),
                                        () => O()
                                      ),
                                      De(Ae, (xe) => {
                                        var je, Ke;
                                        return (Ke = (je = k(s)).action) == null
                                          ? void 0
                                          : Ke.call(je, xe);
                                      }),
                                      Ee(() => Te("m-pointerdown", Ae, D)),
                                      Ee(() => Te("m-pointerenter", Ae, D)),
                                      le(
                                        () =>
                                          (Ge = we(Ae, Ge, { ...k(s), ...r }))
                                      ),
                                      w(_e, Ae);
                                  };
                                  W(
                                    Ie,
                                    (_e) => {
                                      o() && _e(Fe);
                                    },
                                    !0
                                  );
                                }
                                w(oe, ie);
                              };
                            W(
                              $,
                              (oe) => {
                                h() && o() ? oe(ve) : oe(ge, !1);
                              },
                              !0
                            );
                          }
                          w(de, G);
                        };
                      W(
                        K,
                        (de) => {
                          p() && o() ? de(me) : de(fe, !1);
                        },
                        !0
                      );
                    }
                    w(ye, Se);
                  };
                W(
                  Q,
                  (ye) => {
                    p() && h() && o() ? ye(Ye) : ye(ze, !1);
                  },
                  !0
                );
              }
              w(se, H);
            };
          W(
            Y,
            (se) => {
              l() && o() ? se(Pe) : se(ue, !1);
            },
            !0
          );
        }
        w(ae, Z);
      };
    W(B, (ae) => {
      v() && o() ? ae(J) : ae(re, !1);
    });
  }
  w(t, L), Oe();
}
var xl = X("<button><!></button>");
function cr(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["asChild", "id", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(p, "$trigger", a),
    o = rt();
  let s = P(e, "asChild", 8, !1),
    l = P(e, "id", 24, () => {}),
    c = P(e, "el", 28, () => {});
  const {
      elements: { trigger: p },
      ids: f,
      getAttrs: h,
    } = zn(),
    g = vn(),
    v = h("trigger");
  ne(
    () => ee(l()),
    () => {
      l() && f.trigger.set(l());
    }
  ),
    ne(
      () => i(),
      () => {
        Me(o, i());
      }
    ),
    ne(
      () => k(o),
      () => {
        Object.assign(k(o), v);
      }
    ),
    ot(),
    Ve();
  var m = j(),
    _ = I(m);
  {
    var y = (b) => {
        var C = j(),
          S = I(C);
        be(S, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(b, C);
      },
      x = (b) => {
        var C = xl();
        let S;
        var M = F(C);
        be(M, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          E(C),
          Be(
            C,
            (N) => c(N),
            () => c()
          ),
          De(C, (N) => {
            var T, z;
            return (z = (T = k(o)).action) == null ? void 0 : z.call(T, N);
          }),
          Ee(() => Te("m-blur", C, g)),
          Ee(() => Te("m-focus", C, g)),
          Ee(() => Te("m-keydown", C, g)),
          Ee(() => Te("m-pointerdown", C, g)),
          Ee(() => Te("m-pointerenter", C, g)),
          Ee(() => Te("m-pointerleave", C, g)),
          le(() => (S = we(C, S, { ...k(o), type: "button", ...r }))),
          w(b, C);
      };
    W(_, (b) => {
      s() ? b(y) : b(x, !1);
    });
  }
  w(t, m), Oe();
}
var _l = X("<div></div>");
function dr(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["size", "asChild", "el"]);
  ke(e, !1);
  const a = We(),
    i = () => pe(p, "$arrow", a),
    o = rt();
  let s = P(e, "size", 8, 8),
    l = P(e, "asChild", 8, !1),
    c = P(e, "el", 28, () => {});
  const {
      elements: { arrow: p },
      getAttrs: f,
    } = gl(s()),
    h = f("arrow");
  ne(
    () => i(),
    () => {
      Me(o, i());
    }
  ),
    ne(
      () => k(o),
      () => {
        Object.assign(k(o), h);
      }
    ),
    ot(),
    Ve();
  var g = j(),
    v = I(g);
  {
    var m = (y) => {
        var x = j(),
          b = I(x);
        be(b, e, "default", {
          get builder() {
            return k(o);
          },
        }),
          w(y, x);
      },
      _ = (y) => {
        var x = _l();
        let b;
        Be(
          x,
          (C) => c(C),
          () => c()
        ),
          De(x, (C) => {
            var S, M;
            return (M = (S = k(o)).action) == null ? void 0 : M.call(S, C);
          }),
          le(() => (b = we(x, b, { ...k(o), ...r }))),
          w(y, x);
      };
    W(v, (y) => {
      l() ? y(m) : y(_, !1);
    });
  }
  w(t, g), Oe();
}
var Al = (t, e, n) => Ue(qt, e() + k(n)),
  Cl = X(
    '<button class="touch-manipulation rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:bg-green-400 active:bg-green-600 disabled:bg-neutral-600 disabled:text-neutral-400"> </button>'
  ),
  kl = X(
    '<p class="text-sm font-medium text-gray-200">Add money</p> <div class="flex gap-2"></div>',
    1
  ),
  Ol = X("<!> <!>", 1),
  Pl = X(
    '<div class="flex overflow-hidden rounded-md"><div class="flex gap-2 bg-slate-900 px-3 py-2 text-sm font-semibold tabular-nums text-white sm:text-base"><span class="select-none text-gray-500">$</span> <span class="min-w-16 text-right"> </span></div> <!></div>'
  );
function Sl(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(qt, "$balance", n);
  let a = Re(() =>
    r().toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
  const i = [100, 500, 1e3];
  var o = Pl(),
    s = F(o),
    l = q(F(s), 2),
    c = F(l, !0);
  E(l), E(s);
  var p = q(s, 2);
  He(
    p,
    () => Zo,
    (f, h) => {
      h(f, {
        children: (g, v) => {
          var m = Ol(),
            _ = I(m);
          He(
            _,
            () => jo,
            (x, b) => {
              b(x, {
                class:
                  "bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 active:bg-blue-700 sm:text-base",
                children: (C, S) => {
                  Ze();
                  var M = tt("Add");
                  w(C, M);
                },
                $$slots: { default: !0 },
              });
            }
          );
          var y = q(_, 2);
          He(
            y,
            () => Wo,
            (x, b) => {
              b(x, {
                transition: rn,
                sideOffset: 8,
                class: "z-30 max-w-lg space-y-2 rounded-md bg-slate-600 p-3",
                children: (C, S) => {
                  var M = kl(),
                    N = q(I(M), 2);
                  Ht(
                    N,
                    21,
                    () => i,
                    Zt,
                    (T, z) => {
                      var U = Cl();
                      U.__click = [Al, r, z];
                      var O = F(U);
                      E(U), le(() => dt(O, `+$${k(z) ?? ""}`)), w(T, U);
                    }
                  ),
                    E(N),
                    w(C, M);
                },
                $$slots: { default: !0 },
              });
            }
          ),
            w(g, m);
        },
        $$slots: { default: !0 },
      });
    }
  ),
    E(o),
    le(() => dt(c, k(a))),
    w(t, o),
    Oe();
}
Mn(["click"]);
const Ln = ft(!1),
  En = ft(!1);
var Tl = te(
    '<path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z"></path>'
  ),
  Ll = te(
    '<path d="M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z" opacity="0.2"></path><path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"></path>',
    1
  ),
  El = te(
    '<path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z"></path>'
  ),
  Ml = te(
    '<path d="M238,56v48a6,6,0,0,1-6,6H184a6,6,0,0,1,0-12h32.55l-30.38-27.8c-.06-.06-.12-.13-.19-.19a82,82,0,1,0-1.7,117.65,6,6,0,0,1,8.24,8.73A93.46,93.46,0,0,1,128,222h-1.28A94,94,0,1,1,194.37,61.4L226,90.35V56a6,6,0,1,1,12,0Z"></path>'
  ),
  Rl = te(
    '<path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"></path>'
  ),
  Dl = te(
    '<path d="M236,56v48a4,4,0,0,1-4,4H184a4,4,0,0,1,0-8h37.7L187.53,68.69l-.13-.12a84,84,0,1,0-1.75,120.51,4,4,0,0,1,5.5,5.82A91.43,91.43,0,0,1,128,220h-1.26A92,92,0,1,1,193,62.84l35,32.05V56a4,4,0,1,1,8,0Z"></path>'
  ),
  Fl = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function Nl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = Fl();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = Tl();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Ll();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = El();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = Ml();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Rl();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = Dl();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var zl = te(
    '<path d="M236,208a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V48a12,12,0,0,1,24,0v85.55L88.1,95a12,12,0,0,1,15.1-.57l56.22,42.16L216.1,87A12,12,0,1,1,231.9,105l-64,56a12,12,0,0,1-15.1.57L96.58,119.44,44,165.45V196H224A12,12,0,0,1,236,208Z"></path>'
  ),
  Il = te(
    '<path d="M224,64V208H32V48H208A16,16,0,0,1,224,64Z" opacity="0.2"></path><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>',
    1
  ),
  Bl = te(
    '<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,176a8,8,0,0,1,0,16H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v62.92l34.88-29.07a8,8,0,0,1,9.56-.51l43,28.69,43.41-36.18a8,8,0,0,1,10.24,12.3l-48,40a8,8,0,0,1-9.56.51l-43-28.69L64,155.75V176Z"></path>'
  ),
  Vl = te(
    '<path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0v98.78l54.05-47.3a6,6,0,0,1,7.55-.28l60.11,45.08,60.34-52.8a6,6,0,0,1,7.9,9l-64,56a6,6,0,0,1-7.55.28L96.29,111.72,38,162.72V202H224A6,6,0,0,1,230,208Z"></path>'
  ),
  Hl = te(
    '<path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"></path>'
  ),
  Zl = te(
    '<path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V151.19L93.37,101a4,4,0,0,1,5-.19l61.41,46.05L221.37,93a4,4,0,0,1,5.26,6l-64,56a4,4,0,0,1-5,.19l-61.41-46L36,161.81V204H224A4,4,0,0,1,228,208Z"></path>'
  ),
  Wl = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function Yo(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = Wl();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = zl();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Il();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = Bl();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = Vl();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Hl();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = Zl();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var Yn = { dragStart: !0 },
  ro = (t, e, n) => Math.min(Math.max(t, e), n),
  Kn = (t) => typeof t == "string",
  jl = ([t, e], n, r) => {
    const a = (i, o) => (o === 0 ? 0 : Math.ceil(i / o) * o);
    return [a(n, t), a(r, e)];
  },
  oo = (t, e) => t.some((n) => e.some((r) => n.contains(r)));
function $n(t, e) {
  if (t === void 0) return;
  if (ur(t)) return t.getBoundingClientRect();
  if (typeof t == "object") {
    const { top: r = 0, left: a = 0, right: i = 0, bottom: o = 0 } = t;
    return {
      top: r,
      right: window.innerWidth - i,
      bottom: window.innerHeight - o,
      left: a,
    };
  }
  if (t === "parent") return e.parentNode.getBoundingClientRect();
  const n = document.querySelector(t);
  if (n === null)
    throw new Error(
      "The selector provided for bound doesn't exists in the document."
    );
  return n.getBoundingClientRect();
}
var yn = (t, e, n) => t.style.setProperty(e, n),
  ur = (t) => t instanceof HTMLElement,
  Qn = (t, e = {}) => {
    let n,
      r,
      {
        bounds: a,
        axis: i = "both",
        gpuAcceleration: o = !0,
        legacyTranslate: s = !0,
        transform: l,
        applyUserSelectHack: c = !0,
        disabled: p = !1,
        ignoreMultitouch: f = !1,
        recomputeBounds: h = Yn,
        grid: g,
        position: v,
        cancel: m,
        handle: _,
        defaultClass: y = "neodrag",
        defaultClassDragging: x = "neodrag-dragging",
        defaultClassDragged: b = "neodrag-dragged",
        defaultPosition: C = { x: 0, y: 0 },
        onDragStart: S,
        onDrag: M,
        onDragEnd: N,
      } = e,
      T = !1,
      z = 0,
      U = 0,
      O = 0,
      u = 0,
      d = 0,
      A = 0,
      { x: R, y: D } = v
        ? {
            x: (v == null ? void 0 : v.x) ?? 0,
            y: (v == null ? void 0 : v.y) ?? 0,
          }
        : C;
    se(R, D);
    let V,
      L,
      B,
      J,
      re,
      ae = "",
      Z = !!v;
    h = { ...Yn, ...h };
    let Y = new Set();
    const Pe = document.body.style,
      ue = t.classList;
    function se(K = z, me = U) {
      if (!l) {
        if (s) {
          let de = `${+K}px, ${+me}px`;
          return yn(
            t,
            "transform",
            o ? `translate3d(${de}, 0)` : `translate(${de})`
          );
        }
        return yn(t, "translate", `${+K}px ${+me}px ${o ? "1px" : ""}`);
      }
      const fe = l({ offsetX: K, offsetY: me, rootNode: t });
      Kn(fe) && yn(t, "transform", fe);
    }
    const H = (K, me) => {
        const fe = { offsetX: z, offsetY: U, rootNode: t, currentNode: re };
        t.dispatchEvent(new CustomEvent(K, { detail: fe })),
          me == null || me(fe);
      },
      Q = addEventListener;
    Q("pointerdown", ze, !1),
      Q("pointerup", ye, !1),
      Q("pointermove", Se, !1),
      yn(t, "touch-action", "none");
    const Ye = () => {
      let K = t.offsetWidth / L.width;
      return isNaN(K) && (K = 1), K;
    };
    function ze(K) {
      if (p || K.button === 2) return;
      if ((Y.add(K.pointerId), f && Y.size > 1)) return K.preventDefault();
      if ((h.dragStart && (V = $n(a, t)), Kn(_) && Kn(m) && _ === m))
        throw new Error("`handle` selector can't be same as `cancel` selector");
      if (
        (ue.add(y),
        (B = (function ($, ve) {
          if (!$) return [ve];
          if (ur($)) return [$];
          if (Array.isArray($)) return $;
          const ge = ve.querySelectorAll($);
          if (ge === null)
            throw new Error(
              "Selector passed for `handle` option should be child of the element on which the action is applied"
            );
          return Array.from(ge.values());
        })(_, t)),
        (J = (function ($, ve) {
          if (!$) return [];
          if (ur($)) return [$];
          if (Array.isArray($)) return $;
          const ge = ve.querySelectorAll($);
          if (ge === null)
            throw new Error(
              "Selector passed for `cancel` option should be child of the element on which the action is applied"
            );
          return Array.from(ge.values());
        })(m, t)),
        (n = /(both|x)/.test(i)),
        (r = /(both|y)/.test(i)),
        oo(J, B))
      )
        throw new Error(
          "Element being dragged can't be a child of the element on which `cancel` is applied"
        );
      const me = K.composedPath()[0];
      if (
        !B.some(($) => {
          var ve;
          return (
            $.contains(me) ||
            ((ve = $.shadowRoot) == null ? void 0 : ve.contains(me))
          );
        }) ||
        oo(J, [me])
      )
        return;
      (re = B.length === 1 ? t : B.find(($) => $.contains(me))),
        (T = !0),
        (L = t.getBoundingClientRect()),
        c && ((ae = Pe.userSelect), (Pe.userSelect = "none")),
        H("neodrag:start", S);
      const { clientX: fe, clientY: de } = K,
        G = Ye();
      n && (O = fe - R / G),
        r && (u = de - D / G),
        V && ((d = fe - L.left), (A = de - L.top));
    }
    function ye(K) {
      Y.delete(K.pointerId),
        T &&
          (h.dragEnd && (V = $n(a, t)),
          ue.remove(x),
          ue.add(b),
          c && (Pe.userSelect = ae),
          H("neodrag:end", N),
          n && (O = z),
          r && (u = U),
          (T = !1));
    }
    function Se(K) {
      if (!T || (f && Y.size > 1)) return;
      h.drag && (V = $n(a, t)),
        ue.add(x),
        K.preventDefault(),
        (L = t.getBoundingClientRect());
      let me = K.clientX,
        fe = K.clientY;
      const de = Ye();
      if (V) {
        const G = {
          left: V.left + d,
          top: V.top + A,
          right: V.right + d - L.width,
          bottom: V.bottom + A - L.height,
        };
        (me = ro(me, G.left, G.right)), (fe = ro(fe, G.top, G.bottom));
      }
      if (Array.isArray(g)) {
        let [G, $] = g;
        if (isNaN(+G) || G < 0)
          throw new Error(
            "1st argument of `grid` must be a valid positive number"
          );
        if (isNaN(+$) || $ < 0)
          throw new Error(
            "2nd argument of `grid` must be a valid positive number"
          );
        let ve = me - O,
          ge = fe - u;
        ([ve, ge] = jl([G / de, $ / de], ve, ge)), (me = O + ve), (fe = u + ge);
      }
      n && (z = Math.round((me - O) * de)),
        r && (U = Math.round((fe - u) * de)),
        (R = z),
        (D = U),
        H("neodrag", M),
        se();
    }
    return {
      destroy: () => {
        const K = removeEventListener;
        K("pointerdown", ze, !1),
          K("pointerup", ye, !1),
          K("pointermove", Se, !1);
      },
      update: (K) => {
        var fe, de;
        (i = K.axis || "both"),
          (p = K.disabled ?? !1),
          (f = K.ignoreMultitouch ?? !1),
          (_ = K.handle),
          (a = K.bounds),
          (h = K.recomputeBounds ?? Yn),
          (m = K.cancel),
          (c = K.applyUserSelectHack ?? !0),
          (g = K.grid),
          (o = K.gpuAcceleration ?? !0),
          (s = K.legacyTranslate ?? !0),
          (l = K.transform);
        const me = ue.contains(b);
        ue.remove(y, b),
          (y = K.defaultClass ?? "neodrag"),
          (x = K.defaultClassDragging ?? "neodrag-dragging"),
          (b = K.defaultClassDragged ?? "neodrag-dragged"),
          ue.add(y),
          me && ue.add(b),
          Z &&
            ((R = z = ((fe = K.position) == null ? void 0 : fe.x) ?? z),
            (D = U = ((de = K.position) == null ? void 0 : de.y) ?? U),
            se());
      },
    };
  },
  Ul = te(
    '<path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>'
  ),
  Gl = te(
    '<path d="M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z" opacity="0.2"></path><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>',
    1
  ),
  ql = te(
    '<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>'
  ),
  Yl = te(
    '<path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path>'
  ),
  Kl = te(
    '<path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>'
  ),
  $l = te(
    '<path d="M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"></path>'
  ),
  Ql = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function Xl(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = Ql();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = Ul();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Gl();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = ql();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = Yl();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Kl();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = $l();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
function Jl(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function ec(
  t,
  {
    delay: e = 0,
    duration: n = 400,
    easing: r = Jl,
    start: a = 0,
    opacity: i = 0,
  } = {}
) {
  const o = getComputedStyle(t),
    s = +o.opacity,
    l = o.transform === "none" ? "" : o.transform,
    c = 1 - a,
    p = s * (1 - i);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (f, h) => `
			transform: ${l} scale(${1 - c * h});
			opacity: ${s - p * h}
		`,
  };
}
const Pr = "-";
function tc(t) {
  const e = rc(t),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = t;
  function a(o) {
    const s = o.split(Pr);
    return s[0] === "" && s.length !== 1 && s.shift(), Ko(s, e) || nc(o);
  }
  function i(o, s) {
    const l = n[o] || [];
    return s && r[o] ? [...l, ...r[o]] : l;
  }
  return { getClassGroupId: a, getConflictingClassGroupIds: i };
}
function Ko(t, e) {
  var o;
  if (t.length === 0) return e.classGroupId;
  const n = t[0],
    r = e.nextPart.get(n),
    a = r ? Ko(t.slice(1), r) : void 0;
  if (a) return a;
  if (e.validators.length === 0) return;
  const i = t.join(Pr);
  return (o = e.validators.find(({ validator: s }) => s(i))) == null
    ? void 0
    : o.classGroupId;
}
const ao = /^\[(.+)\]$/;
function nc(t) {
  if (ao.test(t)) {
    const e = ao.exec(t)[1],
      n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function rc(t) {
  const { theme: e, prefix: n } = t,
    r = { nextPart: new Map(), validators: [] };
  return (
    ac(Object.entries(t.classGroups), n).forEach(([i, o]) => {
      fr(o, r, i, e);
    }),
    r
  );
}
function fr(t, e, n, r) {
  t.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? e : io(e, a);
      i.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (oc(a)) {
        fr(a(r), e, n, r);
        return;
      }
      e.validators.push({ validator: a, classGroupId: n });
      return;
    }
    Object.entries(a).forEach(([i, o]) => {
      fr(o, io(e, i), n, r);
    });
  });
}
function io(t, e) {
  let n = t;
  return (
    e.split(Pr).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function oc(t) {
  return t.isThemeGetter;
}
function ac(t, e) {
  return e
    ? t.map(([n, r]) => {
        const a = r.map((i) =>
          typeof i == "string"
            ? e + i
            : typeof i == "object"
            ? Object.fromEntries(Object.entries(i).map(([o, s]) => [e + o, s]))
            : i
        );
        return [n, a];
      })
    : t;
}
function ic(t) {
  if (t < 1) return { get: () => {}, set: () => {} };
  let e = 0,
    n = new Map(),
    r = new Map();
  function a(i, o) {
    n.set(i, o), e++, e > t && ((e = 0), (r = n), (n = new Map()));
  }
  return {
    get(i) {
      let o = n.get(i);
      if (o !== void 0) return o;
      if ((o = r.get(i)) !== void 0) return a(i, o), o;
    },
    set(i, o) {
      n.has(i) ? n.set(i, o) : a(i, o);
    },
  };
}
const $o = "!";
function sc(t) {
  const e = t.separator,
    n = e.length === 1,
    r = e[0],
    a = e.length;
  return function (o) {
    const s = [];
    let l = 0,
      c = 0,
      p;
    for (let m = 0; m < o.length; m++) {
      let _ = o[m];
      if (l === 0) {
        if (_ === r && (n || o.slice(m, m + a) === e)) {
          s.push(o.slice(c, m)), (c = m + a);
          continue;
        }
        if (_ === "/") {
          p = m;
          continue;
        }
      }
      _ === "[" ? l++ : _ === "]" && l--;
    }
    const f = s.length === 0 ? o : o.substring(c),
      h = f.startsWith($o),
      g = h ? f.substring(1) : f,
      v = p && p > c ? p - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: v,
    };
  };
}
function lc(t) {
  if (t.length <= 1) return t;
  const e = [];
  let n = [];
  return (
    t.forEach((r) => {
      r[0] === "[" ? (e.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    e.push(...n.sort()),
    e
  );
}
function cc(t) {
  return { cache: ic(t.cacheSize), splitModifiers: sc(t), ...tc(t) };
}
const dc = /\s+/;
function uc(t, e) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: a,
    } = e,
    i = new Set();
  return t
    .trim()
    .split(dc)
    .map((o) => {
      const {
        modifiers: s,
        hasImportantModifier: l,
        baseClassName: c,
        maybePostfixModifierPosition: p,
      } = n(o);
      let f = r(p ? c.substring(0, p) : c),
        h = !!p;
      if (!f) {
        if (!p) return { isTailwindClass: !1, originalClassName: o };
        if (((f = r(c)), !f))
          return { isTailwindClass: !1, originalClassName: o };
        h = !1;
      }
      const g = lc(s).join(":");
      return {
        isTailwindClass: !0,
        modifierId: l ? g + $o : g,
        classGroupId: f,
        originalClassName: o,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter((o) => {
      if (!o.isTailwindClass) return !0;
      const { modifierId: s, classGroupId: l, hasPostfixModifier: c } = o,
        p = s + l;
      return i.has(p)
        ? !1
        : (i.add(p), a(l, c).forEach((f) => i.add(s + f)), !0);
    })
    .reverse()
    .map((o) => o.originalClassName)
    .join(" ");
}
function fc() {
  let t = 0,
    e,
    n,
    r = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (n = Qo(e)) && (r && (r += " "), (r += n));
  return r;
}
function Qo(t) {
  if (typeof t == "string") return t;
  let e,
    n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = Qo(t[r])) && (n && (n += " "), (n += e));
  return n;
}
function vc(t, ...e) {
  let n,
    r,
    a,
    i = o;
  function o(l) {
    const c = e.reduce((p, f) => f(p), t());
    return (n = cc(c)), (r = n.cache.get), (a = n.cache.set), (i = s), s(l);
  }
  function s(l) {
    const c = r(l);
    if (c) return c;
    const p = uc(l, n);
    return a(l, p), p;
  }
  return function () {
    return i(fc.apply(null, arguments));
  };
}
function Le(t) {
  const e = (n) => n[t] || [];
  return (e.isThemeGetter = !0), e;
}
const Xo = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  gc = /^\d+\/\d+$/,
  pc = new Set(["px", "full", "screen"]),
  hc = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  mc =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  bc = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  wc = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  yc =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function mt(t) {
  return Et(t) || pc.has(t) || gc.test(t);
}
function yt(t) {
  return Xt(t, "length", Sc);
}
function Et(t) {
  return !!t && !Number.isNaN(Number(t));
}
function xn(t) {
  return Xt(t, "number", Et);
}
function tn(t) {
  return !!t && Number.isInteger(Number(t));
}
function xc(t) {
  return t.endsWith("%") && Et(t.slice(0, -1));
}
function ce(t) {
  return Xo.test(t);
}
function xt(t) {
  return hc.test(t);
}
const _c = new Set(["length", "size", "percentage"]);
function Ac(t) {
  return Xt(t, _c, Jo);
}
function Cc(t) {
  return Xt(t, "position", Jo);
}
const kc = new Set(["image", "url"]);
function Oc(t) {
  return Xt(t, kc, Lc);
}
function Pc(t) {
  return Xt(t, "", Tc);
}
function nn() {
  return !0;
}
function Xt(t, e, n) {
  const r = Xo.exec(t);
  return r
    ? r[1]
      ? typeof e == "string"
        ? r[1] === e
        : e.has(r[1])
      : n(r[2])
    : !1;
}
function Sc(t) {
  return mc.test(t) && !bc.test(t);
}
function Jo() {
  return !1;
}
function Tc(t) {
  return wc.test(t);
}
function Lc(t) {
  return yc.test(t);
}
function Ec() {
  const t = Le("colors"),
    e = Le("spacing"),
    n = Le("blur"),
    r = Le("brightness"),
    a = Le("borderColor"),
    i = Le("borderRadius"),
    o = Le("borderSpacing"),
    s = Le("borderWidth"),
    l = Le("contrast"),
    c = Le("grayscale"),
    p = Le("hueRotate"),
    f = Le("invert"),
    h = Le("gap"),
    g = Le("gradientColorStops"),
    v = Le("gradientColorStopPositions"),
    m = Le("inset"),
    _ = Le("margin"),
    y = Le("opacity"),
    x = Le("padding"),
    b = Le("saturate"),
    C = Le("scale"),
    S = Le("sepia"),
    M = Le("skew"),
    N = Le("space"),
    T = Le("translate"),
    z = () => ["auto", "contain", "none"],
    U = () => ["auto", "hidden", "clip", "visible", "scroll"],
    O = () => ["auto", ce, e],
    u = () => [ce, e],
    d = () => ["", mt, yt],
    A = () => ["auto", Et, ce],
    R = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    D = () => ["solid", "dashed", "dotted", "double", "none"],
    V = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    L = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    B = () => ["", "0", ce],
    J = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    re = () => [Et, xn],
    ae = () => [Et, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [nn],
      spacing: [mt, yt],
      blur: ["none", "", xt, ce],
      brightness: re(),
      borderColor: [t],
      borderRadius: ["none", "", "full", xt, ce],
      borderSpacing: u(),
      borderWidth: d(),
      contrast: re(),
      grayscale: B(),
      hueRotate: ae(),
      invert: B(),
      gap: u(),
      gradientColorStops: [t],
      gradientColorStopPositions: [xc, yt],
      inset: O(),
      margin: O(),
      opacity: re(),
      padding: u(),
      saturate: re(),
      scale: re(),
      sepia: B(),
      skew: ae(),
      space: u(),
      translate: u(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", ce] }],
      container: ["container"],
      columns: [{ columns: [xt] }],
      "break-after": [{ "break-after": J() }],
      "break-before": [{ "break-before": J() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...R(), ce] }],
      overflow: [{ overflow: U() }],
      "overflow-x": [{ "overflow-x": U() }],
      "overflow-y": [{ "overflow-y": U() }],
      overscroll: [{ overscroll: z() }],
      "overscroll-x": [{ "overscroll-x": z() }],
      "overscroll-y": [{ "overscroll-y": z() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [m] }],
      "inset-x": [{ "inset-x": [m] }],
      "inset-y": [{ "inset-y": [m] }],
      start: [{ start: [m] }],
      end: [{ end: [m] }],
      top: [{ top: [m] }],
      right: [{ right: [m] }],
      bottom: [{ bottom: [m] }],
      left: [{ left: [m] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", tn, ce] }],
      basis: [{ basis: O() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", ce] }],
      grow: [{ grow: B() }],
      shrink: [{ shrink: B() }],
      order: [{ order: ["first", "last", "none", tn, ce] }],
      "grid-cols": [{ "grid-cols": [nn] }],
      "col-start-end": [{ col: ["auto", { span: ["full", tn, ce] }, ce] }],
      "col-start": [{ "col-start": A() }],
      "col-end": [{ "col-end": A() }],
      "grid-rows": [{ "grid-rows": [nn] }],
      "row-start-end": [{ row: ["auto", { span: [tn, ce] }, ce] }],
      "row-start": [{ "row-start": A() }],
      "row-end": [{ "row-end": A() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", ce] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", ce] }],
      gap: [{ gap: [h] }],
      "gap-x": [{ "gap-x": [h] }],
      "gap-y": [{ "gap-y": [h] }],
      "justify-content": [{ justify: ["normal", ...L()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...L(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...L(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [x] }],
      px: [{ px: [x] }],
      py: [{ py: [x] }],
      ps: [{ ps: [x] }],
      pe: [{ pe: [x] }],
      pt: [{ pt: [x] }],
      pr: [{ pr: [x] }],
      pb: [{ pb: [x] }],
      pl: [{ pl: [x] }],
      m: [{ m: [_] }],
      mx: [{ mx: [_] }],
      my: [{ my: [_] }],
      ms: [{ ms: [_] }],
      me: [{ me: [_] }],
      mt: [{ mt: [_] }],
      mr: [{ mr: [_] }],
      mb: [{ mb: [_] }],
      ml: [{ ml: [_] }],
      "space-x": [{ "space-x": [N] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [N] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, e] }],
      "min-w": [{ "min-w": [ce, e, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            ce,
            e,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [xt] },
            xt,
          ],
        },
      ],
      h: [{ h: [ce, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [ce, e, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [ce, e, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [ce, e, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", xt, yt] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            xn,
          ],
        },
      ],
      "font-family": [{ font: [nn] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            ce,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", Et, xn] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            mt,
            ce,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", ce] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", ce] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [t] }],
      "placeholder-opacity": [{ "placeholder-opacity": [y] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [t] }],
      "text-opacity": [{ "text-opacity": [y] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...D(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", mt, yt] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", mt, ce] }],
      "text-decoration-color": [{ decoration: [t] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: u() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            ce,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", ce] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [y] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...R(), Cc] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Ac] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Oc,
          ],
        },
      ],
      "bg-color": [{ bg: [t] }],
      "gradient-from-pos": [{ from: [v] }],
      "gradient-via-pos": [{ via: [v] }],
      "gradient-to-pos": [{ to: [v] }],
      "gradient-from": [{ from: [g] }],
      "gradient-via": [{ via: [g] }],
      "gradient-to": [{ to: [g] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [s] }],
      "border-w-x": [{ "border-x": [s] }],
      "border-w-y": [{ "border-y": [s] }],
      "border-w-s": [{ "border-s": [s] }],
      "border-w-e": [{ "border-e": [s] }],
      "border-w-t": [{ "border-t": [s] }],
      "border-w-r": [{ "border-r": [s] }],
      "border-w-b": [{ "border-b": [s] }],
      "border-w-l": [{ "border-l": [s] }],
      "border-opacity": [{ "border-opacity": [y] }],
      "border-style": [{ border: [...D(), "hidden"] }],
      "divide-x": [{ "divide-x": [s] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [s] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [y] }],
      "divide-style": [{ divide: D() }],
      "border-color": [{ border: [a] }],
      "border-color-x": [{ "border-x": [a] }],
      "border-color-y": [{ "border-y": [a] }],
      "border-color-t": [{ "border-t": [a] }],
      "border-color-r": [{ "border-r": [a] }],
      "border-color-b": [{ "border-b": [a] }],
      "border-color-l": [{ "border-l": [a] }],
      "divide-color": [{ divide: [a] }],
      "outline-style": [{ outline: ["", ...D()] }],
      "outline-offset": [{ "outline-offset": [mt, ce] }],
      "outline-w": [{ outline: [mt, yt] }],
      "outline-color": [{ outline: [t] }],
      "ring-w": [{ ring: d() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [t] }],
      "ring-opacity": [{ "ring-opacity": [y] }],
      "ring-offset-w": [{ "ring-offset": [mt, yt] }],
      "ring-offset-color": [{ "ring-offset": [t] }],
      shadow: [{ shadow: ["", "inner", "none", xt, Pc] }],
      "shadow-color": [{ shadow: [nn] }],
      opacity: [{ opacity: [y] }],
      "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": V() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [l] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", xt, ce] }],
      grayscale: [{ grayscale: [c] }],
      "hue-rotate": [{ "hue-rotate": [p] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [b] }],
      sepia: [{ sepia: [S] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [l] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [y] }],
      "backdrop-saturate": [{ "backdrop-saturate": [b] }],
      "backdrop-sepia": [{ "backdrop-sepia": [S] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [o] }],
      "border-spacing-x": [{ "border-spacing-x": [o] }],
      "border-spacing-y": [{ "border-spacing-y": [o] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            ce,
          ],
        },
      ],
      duration: [{ duration: ae() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", ce] }],
      delay: [{ delay: ae() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", ce] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [C] }],
      "scale-x": [{ "scale-x": [C] }],
      "scale-y": [{ "scale-y": [C] }],
      rotate: [{ rotate: [tn, ce] }],
      "translate-x": [{ "translate-x": [T] }],
      "translate-y": [{ "translate-y": [T] }],
      "skew-x": [{ "skew-x": [M] }],
      "skew-y": [{ "skew-y": [M] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            ce,
          ],
        },
      ],
      accent: [{ accent: ["auto", t] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            ce,
          ],
        },
      ],
      "caret-color": [{ caret: [t] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": u() }],
      "scroll-mx": [{ "scroll-mx": u() }],
      "scroll-my": [{ "scroll-my": u() }],
      "scroll-ms": [{ "scroll-ms": u() }],
      "scroll-me": [{ "scroll-me": u() }],
      "scroll-mt": [{ "scroll-mt": u() }],
      "scroll-mr": [{ "scroll-mr": u() }],
      "scroll-mb": [{ "scroll-mb": u() }],
      "scroll-ml": [{ "scroll-ml": u() }],
      "scroll-p": [{ "scroll-p": u() }],
      "scroll-px": [{ "scroll-px": u() }],
      "scroll-py": [{ "scroll-py": u() }],
      "scroll-ps": [{ "scroll-ps": u() }],
      "scroll-pe": [{ "scroll-pe": u() }],
      "scroll-pt": [{ "scroll-pt": u() }],
      "scroll-pr": [{ "scroll-pr": u() }],
      "scroll-pb": [{ "scroll-pb": u() }],
      "scroll-pl": [{ "scroll-pl": u() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", ce] },
      ],
      fill: [{ fill: [t, "none"] }],
      "stroke-w": [{ stroke: [mt, yt, xn] }],
      stroke: [{ stroke: [t, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const ct = vc(Ec);
var Mc = X(
  '<div><div class="flex"><div class="flex flex-1 cursor-move items-center gap-2 bg-slate-800 px-4 py-2"><!></div> <div class="ml-auto flex"><!> <button class="bg-slate-800 px-5 py-3 text-slate-300 transition hover:bg-red-600 hover:text-white active:bg-red-700 active:text-white"><!></button></div></div> <div class="p-4"><!></div></div>'
);
function ea(t, e) {
  ke(e, !0);
  let n = gr(e, [
      "$$slots",
      "$$events",
      "$$legacy",
      "title",
      "titleBarActions",
      "children",
      "onClose",
      "class",
    ]),
    r = It(void 0);
  var a = Mc();
  let i;
  var o = F(a),
    s = F(o),
    l = F(s);
  Zn(l, () => e.title ?? _t),
    E(s),
    Be(
      s,
      (m) => Me(r, m),
      () => k(r)
    );
  var c = q(s, 2),
    p = F(c);
  Zn(p, () => e.titleBarActions ?? _t);
  var f = q(p, 2);
  f.__click = function (...m) {
    var _;
    (_ = e.onClose) == null || _.apply(this, m);
  };
  var h = F(f);
  Xl(h, { weight: "bold" }), E(f), E(c), E(o);
  var g = q(o, 2),
    v = F(g);
  Zn(v, () => e.children ?? _t),
    E(g),
    E(a),
    De(
      a,
      (m, _) => (Qn == null ? void 0 : Qn(m, _)),
      () => ({ bounds: "body", handle: k(r) })
    ),
    le(
      () =>
        (i = we(a, i, {
          class: ct(
            "z-50 w-[15rem] overflow-hidden rounded-md bg-slate-600 drop-shadow-lg",
            e.class
          ),
          ...n,
        }))
    ),
    at(
      1,
      a,
      () => ec,
      () => ({ duration: 200 })
    ),
    w(t, a),
    Oe();
}
Mn(["click"]);
var Rc = X(
  '<div class="flex rounded-md bg-slate-900 p-4 text-sm"><div class="flex-1"><p class="font-medium text-slate-400">Profit</p> <p> </p></div> <div class="mx-4 w-0.5 bg-slate-600" aria-hidden="true"></div> <div class="flex-1 space-y-2"><div><p class="font-medium text-slate-400">Wins</p> <p class="font-semibold tabular-nums text-green-400"> </p></div> <div><p class="font-medium text-slate-400">Losses</p> <p class="font-semibold tabular-nums text-red-400"> </p></div></div></div>'
);
function Dc(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(uo, "$winRecords", n);
  let a = Re(() => r().reduce((S, { profit: M }) => S + M, 0)),
    i = Re(() => r().filter(({ profit: S }) => S >= 0).length),
    o = Re(() => r().filter(({ profit: S }) => S < 0).length),
    s = Re(() => k(i).toLocaleString("en-US")),
    l = Re(() => k(o).toLocaleString("en-US"));
  var c = Rc(),
    p = F(c),
    f = q(F(p), 2);
  const h = Re(() =>
    Bt(
      ct(
        "font-semibold tabular-nums",
        k(a) >= 0 ? "text-green-400" : "text-red-400"
      )
    )
  );
  var g = F(f, !0);
  le(() => dt(g, co(k(a)))), E(f), E(p);
  var v = q(p, 4),
    m = F(v),
    _ = q(F(m), 2),
    y = F(_, !0);
  E(_), E(m);
  var x = q(m, 2),
    b = q(F(x), 2),
    C = F(b, !0);
  E(b),
    E(x),
    E(v),
    E(c),
    le(() => {
      Vt(f, k(h), ""), dt(y, k(s)), dt(C, k(l));
    }),
    w(t, c),
    Oe();
}
var Fc = X(
  '<div class="relative rounded-md bg-slate-900 p-4 text-sm"><p class="font-medium text-slate-400">Profit History</p> <p> </p> <div class="mt-6 h-[11rem] w-[16rem]"><canvas></canvas></div></div>'
);
function Nc(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(fo, "$totalProfitHistory", n);
  let a = It(null);
  const i = "rgb(74, 222, 128)",
    o = "rgba(74, 222, 128, 0.3)",
    s = "rgb(248, 113, 113)",
    l = "rgba(248, 113, 113, 0.3)",
    c = "#1e293b",
    p = "#fff",
    f = (x, { profitHistory: b }) => {
      const C = new ba(x, {
        type: "line",
        data: {
          labels: Array(b.length).fill(0),
          datasets: [
            {
              label: "Profit",
              data: b,
              fill: { target: "origin", above: o, below: l },
              cubicInterpolationMode: "monotone",
              segment: {
                borderColor: (S) => {
                  const M = S.p0.parsed.y,
                    N = S.p1.parsed.y;
                  return N === 0 ? (M < 0 ? s : i) : N < 0 ? s : i;
                },
              },
              pointRadius: 0,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: p,
              pointHoverBorderColor: p,
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          animations: { y: { duration: 0 } },
          interaction: { intersect: !1, mode: "index" },
          plugins: { legend: { display: !1 }, tooltip: { enabled: !1 } },
          scales: {
            x: {
              border: { display: !1 },
              grid: { display: !1 },
              ticks: { display: !1 },
            },
            y: {
              border: { display: !1 },
              grid: {
                color: (S) => (S.tick.value === 0 ? c : void 0),
                lineWidth: 2,
              },
              ticks: { display: !1 },
              grace: "1%",
            },
          },
          onHover: (S, M) => {
            if (M.length) {
              const N = M[0].index;
              Me(a, Qe(r()[N]));
            }
          },
        },
      });
      return {
        update: ({ profitHistory: S }) => {
          (C.data.labels = Array(S.length).fill(0)),
            (C.data.datasets[0].data = S),
            C.update();
        },
        destroy: () => {
          C.destroy();
        },
      };
    };
  var h = Fc(),
    g = q(F(h), 2);
  const v = Re(() =>
    Bt(
      ct(
        "absolute font-semibold tabular-nums",
        k(a) !== null && (k(a) >= 0 ? "text-green-400" : "text-red-400")
      )
    )
  );
  var m = F(g, !0);
  le(() => dt(m, k(a) !== null ? co(k(a)) : "")), E(g);
  var _ = q(g, 2),
    y = F(_);
  De(
    y,
    (x, b) => (f == null ? void 0 : f(x, b)),
    () => ({ profitHistory: r() })
  ),
    E(_),
    E(h),
    le(() => Vt(g, k(v), "")),
    Te("mouseleave", y, () => Me(a, null)),
    w(t, h),
    Oe();
}
var zc = X('<!> <p class="text-sm font-medium text-white">Live Stats</p>', 1),
  Ic = X("<button><!></button>"),
  Bc = X("<!> <p>Reset Live Stats</p>", 1),
  Vc = X("<!> <!>", 1),
  Hc = X('<div class="flex flex-col gap-4"><!> <!></div>');
function Zc(t) {
  const e = We(),
    n = () => pe(En, "$isLiveStatsOpen", e);
  function r() {
    Ue(uo, []), Ue(fo, [0]);
  }
  var a = j(),
    i = I(a);
  {
    var o = (s) => {
      ea(s, {
        onClose: () => Ue(En, !1),
        class: "fixed bottom-8 right-8 w-[20rem]",
        title: (p) => {
          var f = zc(),
            h = I(f);
          Yo(h, { weight: "bold", class: "text-xl text-slate-300" }),
            Ze(2),
            w(p, f);
        },
        titleBarActions: (p) => {
          sr(p, {
            openDelay: 0,
            closeOnPointerDown: !1,
            children: (f, h) => {
              var g = Vc(),
                v = I(g);
              cr(v, {
                asChild: !0,
                children: Jn,
                $$slots: {
                  default: (_, y) => {
                    const x = ha(() => y.builder);
                    var b = Ic();
                    let C;
                    var S = F(b);
                    Nl(S, { weight: "bold" }),
                      E(b),
                      De(b, (M) => {
                        var N, T;
                        return (T = (N = k(x)).action) == null
                          ? void 0
                          : T.call(N, M);
                      }),
                      Ee(() => Te("click", b, r)),
                      le(
                        () =>
                          (C = we(b, C, {
                            ...k(x),
                            class:
                              "bg-slate-800 px-5 py-3 text-slate-300 transition hover:bg-slate-700 active:bg-slate-600",
                          }))
                      ),
                      w(_, b);
                  },
                },
              });
              var m = q(v, 2);
              lr(m, {
                transition: rn,
                sideOffset: 4,
                class:
                  "z-30 max-w-lg rounded-md bg-white p-3 text-sm font-medium text-gray-950 drop-shadow-xl",
                children: (_, y) => {
                  var x = Bc(),
                    b = I(x);
                  dr(b, {}), Ze(2), w(_, x);
                },
                $$slots: { default: !0 },
              }),
                w(f, g);
            },
            $$slots: { default: !0 },
          });
        },
        children: (p, f) => {
          var h = Hc(),
            g = F(h);
          Dc(g, {});
          var v = q(g, 2);
          Nc(v, {}), E(h), w(p, h);
        },
        $$slots: { title: !0, titleBarActions: !0, default: !0 },
      });
    };
    W(i, (s) => {
      n() && s(o);
    });
  }
  w(t, a);
}
function Wc() {
  const t = "(prefers-reduced-motion: reduce)";
  return window && window.matchMedia ? window.matchMedia(t).matches : !1;
}
var jc = te(
    '<path d="M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"></path>'
  ),
  Uc = te(
    '<path d="M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"></path><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>',
    1
  ),
  Gc = te(
    '<path d="M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"></path>'
  ),
  qc = te(
    '<path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"></path>'
  ),
  Yc = te(
    '<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path>'
  ),
  Kc = te(
    '<path d="M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"></path>'
  ),
  $c = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function ta(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = $c();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = jc();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Uc();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = Gc();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = qc();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Yc();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = Kc();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var Qc = te(
    '<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>'
  ),
  Xc = te(
    '<path d="M208,96l-80,80L48,96Z" opacity="0.2"></path><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"></path>',
    1
  ),
  Jc = te(
    '<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>'
  ),
  ed = te(
    '<path d="M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"></path>'
  ),
  td = te(
    '<path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>'
  ),
  nd = te(
    '<path d="M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"></path>'
  ),
  rd = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function od(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = rd();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = Qc();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = Xc();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = Jc();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = ed();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = td();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = nd();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var ad = X("<option> </option>"),
  id = X('<div class="relative"><select></select> <!></div>');
function so(t, e) {
  let n = P(e, "value", 15),
    r = gr(e, ["$$slots", "$$events", "$$legacy", "value", "items"]);
  var a = id(),
    i = F(a);
  let o;
  Ht(
    i,
    21,
    () => e.items,
    Zt,
    (c, p) => {
      let f = () => k(p).value,
        h = () => k(p).label;
      var g = ad(),
        v = {},
        m = F(g, !0);
      E(g),
        le(() => {
          v !== (v = f()) && (g.value = (g.__value = f()) == null ? "" : f()),
            dt(m, h());
        }),
        w(c, g);
    }
  ),
    E(i);
  var l = q(i, 2);
  od(l, { class: "absolute right-3 top-3 text-slate-500", weight: "bold" }),
    E(a),
    le(
      () =>
        (o = we(i, o, {
          class:
            "block w-full appearance-none rounded-md border-2 border-slate-600 bg-slate-900 py-2 pl-3 pr-8 text-sm text-white transition hover:cursor-pointer focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:[&:not(:disabled)]:border-slate-500",
          ...r,
        }))
    ),
    wa(i, n),
    w(t, a);
}
function sd(t, e) {
  ke(e, !0);
  let n = P(e, "checked", 15, void 0),
    r = gr(e, ["$$slots", "$$events", "$$legacy", "checked", "class"]);
  var a = j(),
    i = I(a),
    o = Re(() =>
      ct(
        "h-6 w-11 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-slate-900",
        e.class
      )
    );
  He(
    i,
    () => dl,
    (s, l) => {
      l(
        s,
        vo(
          {
            get class() {
              return k(o);
            },
          },
          () => r,
          {
            get checked() {
              return n();
            },
            set checked(c) {
              n(c);
            },
            children: (c, p) => {
              var f = j(),
                h = I(f);
              He(
                h,
                () => fl,
                (g, v) => {
                  v(g, {
                    class:
                      "pointer-events-none block size-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
                  });
                }
              ),
                w(c, f);
            },
            $$slots: { default: !0 },
          }
        )
      );
    }
  ),
    w(t, a),
    Oe();
}
var ld = X(
    '<!> <p class="text-sm font-medium text-white">Game Settings</p>',
    1
  ),
  cd = (t, e) => Ue(qt, Qe(ya)),
  dd = X(
    '<div class="flex flex-col gap-5"><div class="flex items-center gap-4"><!> <!></div> <button class="touch-manipulation self-start rounded-md bg-red-500 px-3 py-2 text-sm text-white transition-colors hover:bg-red-400 active:bg-red-600">Reset Balance</button></div>'
  );
function ud(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(Vn, "$isAnimationOn", n),
    a = () => pe(Ln, "$isGameSettingsOpen", n),
    i = () => pe(qt, "$balance", n);
  lo(() => {
    Wc() && Ue(Vn, !1);
  });
  var o = j(),
    s = I(o);
  {
    var l = (c) => {
      ea(c, {
        onClose: () => Ue(Ln, !1),
        class: "fixed bottom-8 left-8 w-[18rem]",
        title: (f) => {
          var h = ld(),
            g = I(h);
          ta(g, { weight: "fill", class: "text-xl text-slate-300" }),
            Ze(2),
            w(f, h);
        },
        children: (f, h) => {
          var g = dd(),
            v = F(g),
            m = F(v);
          sd(m, {
            id: "isAnimationOn",
            get checked() {
              return tr(), r();
            },
            set checked(x) {
              Ue(Vn, Qe(x));
            },
          });
          var _ = q(m, 2);
          He(
            _,
            () => $s,
            (x, b) => {
              b(x, {
                for: "isAnimationOn",
                class: "text-sm  text-white",
                children: (C, S) => {
                  Ze();
                  var M = tt("Animations");
                  w(C, M);
                },
                $$slots: { default: !0 },
              });
            }
          ),
            E(v);
          var y = q(v, 2);
          (y.__click = [cd, i]), E(g), w(f, g);
        },
        $$slots: { title: !0, default: !0 },
      });
    };
    W(s, (c) => {
      a() && c(l);
    });
  }
  w(t, o), Oe();
}
Mn(["click"]);
var fd = te(
    '<path d="M252,128a60,60,0,0,1-102.43,42.43l-.49-.53L89.22,102.31a36,36,0,1,0,0,51.38l3.08-3.48a12,12,0,1,1,18,15.91l-3.35,3.78-.49.53a60,60,0,1,1,0-84.86l.49.53,59.86,67.59a36,36,0,1,0,0-51.38l-3.08,3.48a12,12,0,1,1-18-15.91l3.35-3.78.49-.53A60,60,0,0,1,252,128Z"></path>'
  ),
  vd = te(
    '<path d="M225.94,161.94a48,48,0,0,1-67.88,0L128,128l30.06-33.94a48,48,0,0,1,67.88,67.88ZM30.06,94.06a48,48,0,0,0,67.88,67.88L128,128,97.94,94.06A48,48,0,0,0,30.06,94.06Z" opacity="0.2"></path><path d="M248,128a56,56,0,0,1-95.6,39.6l-.33-.35L92.12,99.55a40,40,0,1,0,0,56.9l8.52-9.62a8,8,0,1,1,12,10.61l-8.69,9.81-.33.35a56,56,0,1,1,0-79.2l.33.35,59.95,67.7a40,40,0,1,0,0-56.9l-8.52,9.62a8,8,0,1,1-12-10.61l8.69-9.81.33-.35A56,56,0,0,1,248,128Z"></path>',
    1
  ),
  gd = te(
    '<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM204.28,156.28a40,40,0,0,1-56.4.17L97.29,111.34,97,111A24,24,0,1,0,97,145c.36-.36.71-.73,1-1.1a8,8,0,1,1,12,10.6c-.55.62-1.13,1.23-1.71,1.81a40,40,0,1,1-.17-56.73l50.58,45.11.33.31A24,24,0,1,0,159,111c-.36.36-.7.72-1,1.1a8,8,0,0,1-12-10.59c.54-.62,1.12-1.24,1.71-1.82a40,40,0,0,1,56.57,56.56Z"></path>'
  ),
  pd = te(
    '<path d="M246,128a54,54,0,0,1-92.18,38.18,3.07,3.07,0,0,1-.25-.26l-60-67.74a42,42,0,1,0,0,59.64l8.57-9.67a6,6,0,1,1,9,8l-8.69,9.81a3.07,3.07,0,0,1-.25.26,54,54,0,1,1,0-76.36,3.07,3.07,0,0,1,.25.26l60,67.74a42,42,0,1,0,0-59.64l-8.57,9.67a6,6,0,1,1-9-8l8.69-9.81a3.07,3.07,0,0,1,.25-.26A54,54,0,0,1,246,128Z"></path>'
  ),
  hd = te(
    '<path d="M248,128a56,56,0,0,1-95.6,39.6l-.33-.35L92.12,99.55a40,40,0,1,0,0,56.9l8.52-9.62a8,8,0,1,1,12,10.61l-8.69,9.81-.33.35a56,56,0,1,1,0-79.2l.33.35,59.95,67.7a40,40,0,1,0,0-56.9l-8.52,9.62a8,8,0,1,1-12-10.61l8.69-9.81.33-.35A56,56,0,0,1,248,128Z"></path>'
  ),
  md = te(
    '<path d="M244,128a52,52,0,0,1-88.77,36.77l-.17-.18L95,96.8a44,44,0,1,0,0,62.4l8.6-9.72a4,4,0,0,1,6,5.3l-8.68,9.81-.17.18a52,52,0,1,1,0-73.54l.17.18,60,67.79a44,44,0,1,0,0-62.4l-8.6,9.72a4,4,0,0,1-6-5.3l8.68-9.81.17-.18A52,52,0,0,1,244,128Z"></path>'
  ),
  bd = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function wd(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = bd();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = fd();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = vd();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = gd();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = pd();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = hd();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = md();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
var yd = te(
    '<path d="M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm92-52A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128ZM128,64c-24.26,0-44,17.94-44,40v4a12,12,0,0,0,24,0v-4c0-8.82,9-16,20-16s20,7.18,20,16-9,16-20,16a12,12,0,0,0-12,12v8a12,12,0,0,0,23.73,2.56C158.31,137.88,172,122.37,172,104,172,81.94,152.26,64,128,64Z"></path>'
  ),
  xd = te(
    '<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>',
    1
  ),
  _d = te(
    '<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z"></path>'
  ),
  Ad = te(
    '<path d="M138,180a10,10,0,1,1-10-10A10,10,0,0,1,138,180ZM128,74c-21,0-38,15.25-38,34v4a6,6,0,0,0,12,0v-4c0-12.13,11.66-22,26-22s26,9.87,26,22-11.66,22-26,22a6,6,0,0,0-6,6v8a6,6,0,0,0,12,0v-2.42c18.11-2.58,32-16.66,32-33.58C166,89.25,149,74,128,74Zm102,54A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"></path>'
  ),
  Cd = te(
    '<path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>'
  ),
  kd = te(
    '<path d="M136,180a8,8,0,1,1-8-8A8,8,0,0,1,136,180ZM128,76c-19.85,0-36,14.36-36,32v4a4,4,0,0,0,8,0v-4c0-13.23,12.56-24,28-24s28,10.77,28,24-12.56,24-28,24a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-4.2c18-1.77,32-15.36,32-31.8C164,90.36,147.85,76,128,76Zm100,52A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"></path>'
  ),
  Od = te(
    '<svg><!><rect width="256" height="256" fill="none"></rect><!></svg>'
  );
function Pd(t, e) {
  const n = he(e, ["children", "$$slots", "$$events", "$$legacy"]),
    r = he(n, ["weight", "color", "size", "mirrored"]);
  ke(e, !1);
  const {
    weight: a,
    color: i,
    size: o,
    mirrored: s,
    ...l
  } = pt("iconCtx") || {};
  let c = P(e, "weight", 8, a ?? "regular"),
    p = P(e, "color", 8, i ?? "currentColor"),
    f = P(e, "size", 8, o ?? "1em"),
    h = P(e, "mirrored", 8, s || !1);
  Ve();
  var g = Od();
  let v;
  var m = F(g);
  be(m, e, "default", {});
  var _ = q(m, 2);
  {
    var y = (b) => {
        var C = yd();
        w(b, C);
      },
      x = (b) => {
        var C = j(),
          S = I(C);
        {
          var M = (T) => {
              var z = xd();
              Ze(), w(T, z);
            },
            N = (T) => {
              var z = j(),
                U = I(z);
              {
                var O = (d) => {
                    var A = _d();
                    w(d, A);
                  },
                  u = (d) => {
                    var A = j(),
                      R = I(A);
                    {
                      var D = (L) => {
                          var B = Ad();
                          w(L, B);
                        },
                        V = (L) => {
                          var B = j(),
                            J = I(B);
                          {
                            var re = (Z) => {
                                var Y = Cd();
                                w(Z, Y);
                              },
                              ae = (Z) => {
                                var Y = j(),
                                  Pe = I(Y);
                                {
                                  var ue = (H) => {
                                      var Q = kd();
                                      w(H, Q);
                                    },
                                    se = (H) => {
                                      var Q = tt();
                                      (Q.nodeValue =
                                        (console.error(
                                          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
                                        ),
                                        "")),
                                        w(H, Q);
                                    };
                                  W(
                                    Pe,
                                    (H) => {
                                      c() === "thin" ? H(ue) : H(se, !1);
                                    },
                                    !0
                                  );
                                }
                                w(Z, Y);
                              };
                            W(
                              J,
                              (Z) => {
                                c() === "regular" ? Z(re) : Z(ae, !1);
                              },
                              !0
                            );
                          }
                          w(L, B);
                        };
                      W(
                        R,
                        (L) => {
                          c() === "light" ? L(D) : L(V, !1);
                        },
                        !0
                      );
                    }
                    w(d, A);
                  };
                W(
                  U,
                  (d) => {
                    c() === "fill" ? d(O) : d(u, !1);
                  },
                  !0
                );
              }
              w(T, z);
            };
          W(
            S,
            (T) => {
              c() === "duotone" ? T(M) : T(N, !1);
            },
            !0
          );
        }
        w(b, C);
      };
    W(_, (b) => {
      c() === "bold" ? b(y) : b(x, !1);
    });
  }
  E(g),
    le(
      () =>
        (v = we(
          g,
          v,
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: f(),
            height: f(),
            fill: p(),
            transform: h() ? "scale(-1, 1)" : void 0,
            viewBox: "0 0 256 256",
            ...l,
            ...r,
          },
          void 0,
          !0
        ))
    ),
    w(t, g),
    Oe();
}
const Sd = (t, e) => {
    const n = parseFloat(t.currentTarget.value.trim());
    isNaN(n) ? (Ue(Wt, -1), Ue(Wt, 0)) : Ue(Wt, Qe(n));
  },
  Td = (t, e) => {
    const n = parseInt(t.currentTarget.value.trim());
    isNaN(n) ? (Me(e, -1), Me(e, 0)) : Me(e, Qe(n));
  };
function Ld(t, e, n, r, a, i, o, s) {
  var l;
  k(e) === zt.MANUAL
    ? (l = n()) == null || l.dropBall()
    : k(r) === null
    ? (Me(a, Qe(k(i) === 0 ? null : k(i))), Me(r, Qe(setInterval(o, _a))))
    : k(r) !== null && s();
}
var Ed = (t, e, n) => Me(e, Qe(n())),
  Md = X("<button> </button>"),
  Rd = (t, e) => {
    Ue(Wt, Qe(parseFloat((e() / 2).toFixed(2))));
  },
  Dd = (t, e) => {
    Ue(Wt, Qe(parseFloat((e() * 2).toFixed(2))));
  },
  Fd = X(
    '<p class="absolute text-xs leading-5 text-red-400">This must be greater than or equal to 0.</p>'
  ),
  Nd = X(
    `<p class="absolute text-xs leading-5 text-red-400">Can't bet more than your balance!</p>`
  ),
  zd = X("<p>Enter '0' for unlimited bets.</p> <!>", 1),
  Id = X("<!> <!>", 1),
  Bd = X(
    '<p class="text-xs leading-5 text-red-400">This must be greater than or equal to 0.</p>'
  ),
  Vd = X(
    '<div><div class="flex items-center gap-1"><label for="autoBetInput" class="text-sm font-medium text-slate-300">Number of Bets</label> <!></div> <div class="relative"><input id="autoBetInput" type="number" min="0" inputmode="numeric"> <!></div> <!></div>'
  ),
  Hd = X("<button><!></button>"),
  Zd = X("<!> <p> </p>", 1),
  Wd = X("<!> <!>", 1),
  jd = X("<button><!></button>"),
  Ud = X("<!> <p> </p>", 1),
  Gd = X("<!> <!>", 1),
  qd = X(
    `<div class="flex flex-col gap-5 bg-slate-700 p-3 lg:max-w-80"><div class="flex gap-1 rounded-full bg-slate-900 p-1"></div> <div class="relative"><label for="betAmount" class="text-sm font-medium text-slate-300">Bet Amount</label> <div class="flex"><div class="relative flex-1"><input id="betAmount" type="number" min="0" step="0.01" inputmode="decimal"> <div class="absolute left-3 top-2 select-none text-slate-500" aria-hidden="true">$</div></div> <button class="touch-manipulation bg-slate-600 px-4 font-bold diagonal-fractions text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50 hover:[&amp;:not(:disabled)]:bg-slate-500 active:[&amp;:not(:disabled)]:bg-slate-400">1/2</button> <button class="relative touch-manipulation rounded-r-md bg-slate-600 px-4 text-sm font-bold text-white transition-colors after:absolute after:left-0 after:inline-block after:h-1/2 after:w-[2px] after:bg-slate-800 after:content-[''] disabled:cursor-not-allowed disabled:opacity-50 hover:[&amp;:not(:disabled)]:bg-slate-500 active:[&amp;:not(:disabled)]:bg-slate-400">2×</button></div> <!></div> <div><label for="riskLevel" class="text-sm font-medium text-slate-300">Risk</label> <!></div> <div><label for="rowCount" class="text-sm font-medium text-slate-300">Rows</label> <!></div> <!> <button><!></button> <div class="mt-auto pt-5"><div class="flex items-center gap-4 border-t border-slate-600 pt-3"><!> <!></div></div></div>`
  );
function Yd(t, e) {
  ke(e, !0);
  const n = We(),
    r = () => pe(Wt, "$betAmount", n),
    a = () => pe(qt, "$balance", n),
    i = () => pe(Aa, "$plinkoEngine", n),
    o = () => pe(Ca, "$betAmountOfExistingBalls", n),
    s = () => pe(Fr, "$riskLevel", n),
    l = () => pe(Nr, "$rowCount", n),
    c = () => pe(Ln, "$isGameSettingsOpen", n),
    p = () => pe(En, "$isLiveStatsOpen", n);
  let f = It(Qe(zt.MANUAL)),
    h = It(0),
    g = It(null),
    v = It(null),
    m = Re(() => r() < 0),
    _ = Re(() => r() > a()),
    y = Re(() => k(h) < 0),
    x = Re(() => i() === null || k(m) || k(_) || k(y)),
    b = Re(() => Object.keys(o()).length > 0);
  function C() {
    k(v) !== null && (clearInterval(k(v)), Me(v, null));
  }
  function S() {
    var G, $;
    if (k(_)) {
      C();
      return;
    }
    if (k(g) === null) {
      (G = i()) == null || G.dropBall();
      return;
    }
    if (
      (k(g) > 0 && (($ = i()) == null || $.dropBall(), Me(g, k(g) - 1)),
      k(g) === 0 && k(v) !== null)
    ) {
      C();
      return;
    }
  }
  const M = [
      { value: zt.MANUAL, label: "Manual" },
      { value: zt.AUTO, label: "Auto" },
    ],
    N = [
      { value: Hn.LOW, label: "Low" },
      { value: Hn.MEDIUM, label: "Medium" },
      { value: Hn.HIGH, label: "High" },
    ],
    T = xa.map((G) => ({ value: G, label: G.toString() }));
  var z = qd(),
    U = F(z);
  Ht(
    U,
    21,
    () => M,
    Zt,
    (G, $) => {
      let ve = () => k($).value,
        ge = () => k($).label;
      var oe = Md();
      oe.__click = [Ed, f, ve];
      const ie = Re(() =>
        Bt(
          ct(
            "flex-1 rounded-full py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-50 hover:[&:not(:disabled)]:bg-slate-600 active:[&:not(:disabled)]:bg-slate-500",
            k(f) === ve() && "bg-slate-600"
          )
        )
      );
      var Ie = F(oe, !0);
      E(oe),
        le(() => {
          (oe.disabled = k(v) !== null), Vt(oe, k(ie), ""), dt(Ie, ge());
        }),
        w(G, oe);
    }
  ),
    E(U);
  var O = q(U, 2),
    u = q(F(O), 2),
    d = F(u),
    A = F(d);
  er(A), (A.__focusout = [Sd, r]);
  const R = Re(() =>
    Bt(
      ct(
        "w-full rounded-l-md border-2 border-slate-600 bg-slate-900 py-2 pl-7 pr-2 text-sm text-white transition-colors hover:cursor-pointer focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed  disabled:opacity-50 hover:[&:not(:disabled)]:border-slate-500",
        (k(m) || k(_)) &&
          "border-red-500 focus:border-red-400 hover:[&:not(:disabled)]:border-red-400"
      )
    )
  );
  Ze(2), E(d);
  var D = q(d, 2);
  D.__click = [Rd, r];
  var V = q(D, 2);
  (V.__click = [Dd, r]), E(u);
  var L = q(u, 2);
  {
    var B = (G) => {
        var $ = Fd();
        w(G, $);
      },
      J = (G) => {
        var $ = j(),
          ve = I($);
        {
          var ge = (oe) => {
            var ie = Nd();
            w(oe, ie);
          };
          W(
            ve,
            (oe) => {
              k(_) && oe(ge);
            },
            !0
          );
        }
        w(G, $);
      };
    W(L, (G) => {
      k(m) ? G(B) : G(J, !1);
    });
  }
  E(O);
  var re = q(O, 2),
    ae = q(F(re), 2),
    Z = Re(() => k(b) || k(v) !== null);
  so(ae, {
    id: "riskLevel",
    items: N,
    get disabled() {
      return k(Z);
    },
    get value() {
      return tr(), s();
    },
    set value(G) {
      Ue(Fr, Qe(G));
    },
  }),
    E(re);
  var Y = q(re, 2),
    Pe = q(F(Y), 2),
    ue = Re(() => k(b) || k(v) !== null);
  so(Pe, {
    id: "rowCount",
    items: T,
    get disabled() {
      return k(ue);
    },
    get value() {
      return tr(), l();
    },
    set value(G) {
      Ue(Nr, Qe(G));
    },
  }),
    E(Y);
  var se = q(Y, 2);
  {
    var H = (G) => {
      var $ = Vd(),
        ve = F($),
        ge = q(F(ve), 2);
      He(
        ge,
        () => Zo,
        (Ce, xe) => {
          xe(Ce, {
            children: (je, Ke) => {
              var st = Id(),
                lt = I(st);
              He(
                lt,
                () => jo,
                (ht, In) => {
                  In(ht, {
                    class: "p-1",
                    children: (Bn, na) => {
                      Pd(Bn, { class: "text-slate-300", weight: "bold" });
                    },
                    $$slots: { default: !0 },
                  });
                }
              );
              var St = q(lt, 2);
              He(
                St,
                () => Wo,
                (ht, In) => {
                  In(ht, {
                    transition: rn,
                    class:
                      "z-30 max-w-lg rounded-md bg-white p-3 text-sm font-medium text-gray-950 drop-shadow-xl",
                    children: (Bn, na) => {
                      var Sr = zd(),
                        ra = q(I(Sr), 2);
                      He(
                        ra,
                        () => Xs,
                        (oa, aa) => {
                          aa(oa, {});
                        }
                      ),
                        w(Bn, Sr);
                    },
                    $$slots: { default: !0 },
                  });
                }
              ),
                w(je, st);
            },
            $$slots: { default: !0 },
          });
        }
      ),
        E(ve);
      var oe = q(ve, 2),
        ie = F(oe);
      er(ie), (ie.__focusout = [Td, h]);
      const Ie = Re(() =>
        Bt(
          ct(
            "w-full rounded-md border-2 border-slate-600 bg-slate-900 py-2 pl-3 pr-8 text-sm text-white transition-colors hover:cursor-pointer focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 hover:[&:not(:disabled)]:border-slate-500",
            k(y) && "border-red-500 hover:border-red-400 focus:border-red-400"
          )
        )
      );
      var Fe = q(ie, 2);
      {
        var _e = (Ce) => {
          wd(Ce, {
            class: "absolute right-3 top-3 size-4 text-slate-400",
            weight: "bold",
          });
        };
        W(Fe, (Ce) => {
          k(h) === 0 && Ce(_e);
        });
      }
      E(oe);
      var Ae = q(oe, 2);
      {
        var Ge = (Ce) => {
          var xe = Bd();
          w(Ce, xe);
        };
        W(Ae, (Ce) => {
          k(y) && Ce(Ge);
        });
      }
      E($),
        le(() => {
          Rr(ie, k(v) === null ? k(h) : k(g) ?? 0),
            (ie.disabled = k(v) !== null),
            Vt(ie, k(Ie), "");
        }),
        w(G, $);
    };
    W(se, (G) => {
      k(f) === zt.AUTO && G(H);
    });
  }
  var Q = q(se, 2);
  Q.__click = [Ld, f, i, v, g, h, S, C];
  const Ye = Re(() =>
    Bt(
      ct(
        "touch-manipulation rounded-md bg-green-500 py-3 font-semibold text-slate-900 transition-colors hover:bg-green-400 active:bg-green-600 disabled:bg-neutral-600 disabled:text-neutral-400",
        k(v) !== null &&
          "bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600"
      )
    )
  );
  var ze = F(Q);
  {
    var ye = (G) => {
        var $ = tt("Drop Ball");
        w(G, $);
      },
      Se = (G) => {
        var $ = j(),
          ve = I($);
        {
          var ge = (ie) => {
              var Ie = tt("Start Autobet");
              w(ie, Ie);
            },
            oe = (ie) => {
              var Ie = tt("Stop Autobet");
              w(ie, Ie);
            };
          W(
            ve,
            (ie) => {
              k(v) === null ? ie(ge) : ie(oe, !1);
            },
            !0
          );
        }
        w(G, $);
      };
    W(ze, (G) => {
      k(f) === zt.MANUAL ? G(ye) : G(Se, !1);
    });
  }
  E(Q);
  var K = q(Q, 2),
    me = F(K),
    fe = F(me);
  He(
    fe,
    () => sr,
    (G, $) => {
      $(G, {
        openDelay: 0,
        closeOnPointerDown: !1,
        children: (ve, ge) => {
          var oe = Wd(),
            ie = I(oe);
          He(
            ie,
            () => cr,
            (Fe, _e) => {
              _e(Fe, {
                asChild: !0,
                children: Jn,
                $$slots: {
                  default: (Ae, Ge) => {
                    const Ce = Re(() => Ge.builder);
                    var xe = Hd(),
                      je = () => Ue(Ln, !c());
                    let Ke;
                    var st = F(xe);
                    ta(st, { class: "size-6", weight: "fill" }),
                      E(xe),
                      De(xe, (lt) => {
                        var St, ht;
                        return (ht = (St = k(Ce)).action) == null
                          ? void 0
                          : ht.call(St, lt);
                      }),
                      le(
                        () =>
                          (Ke = we(xe, Ke, {
                            ...k(Ce),
                            onclick: je,
                            class: ct(
                              "rounded-full p-2 text-slate-300 transition hover:bg-slate-600 active:bg-slate-500",
                              c() && "text-slate-100"
                            ),
                          }))
                      ),
                      w(Ae, xe);
                  },
                },
              });
            }
          );
          var Ie = q(ie, 2);
          He(
            Ie,
            () => lr,
            (Fe, _e) => {
              _e(Fe, {
                inTransition: rn,
                sideOffset: 4,
                class:
                  "z-30 max-w-lg rounded-md bg-white p-3 text-sm font-medium text-gray-950 drop-shadow-xl",
                children: (Ae, Ge) => {
                  var Ce = Zd(),
                    xe = I(Ce);
                  He(
                    xe,
                    () => dr,
                    (st, lt) => {
                      lt(st, {});
                    }
                  );
                  var je = q(xe, 2),
                    Ke = F(je);
                  E(je),
                    le(() =>
                      dt(Ke, `${(c() ? "Close" : "Open") ?? ""} Game Settings`)
                    ),
                    w(Ae, Ce);
                },
                $$slots: { default: !0 },
              });
            }
          ),
            w(ve, oe);
        },
        $$slots: { default: !0 },
      });
    }
  );
  var de = q(fe, 2);
  He(
    de,
    () => sr,
    (G, $) => {
      $(G, {
        openDelay: 0,
        closeOnPointerDown: !1,
        children: (ve, ge) => {
          var oe = Gd(),
            ie = I(oe);
          He(
            ie,
            () => cr,
            (Fe, _e) => {
              _e(Fe, {
                asChild: !0,
                children: Jn,
                $$slots: {
                  default: (Ae, Ge) => {
                    const Ce = Re(() => Ge.builder);
                    var xe = jd(),
                      je = () => Ue(En, !p());
                    let Ke;
                    var st = F(xe);
                    Yo(st, { class: "size-6", weight: "bold" }),
                      E(xe),
                      De(xe, (lt) => {
                        var St, ht;
                        return (ht = (St = k(Ce)).action) == null
                          ? void 0
                          : ht.call(St, lt);
                      }),
                      le(
                        () =>
                          (Ke = we(xe, Ke, {
                            ...k(Ce),
                            onclick: je,
                            class: ct(
                              "rounded-full p-2 text-slate-300 transition hover:bg-slate-600 active:bg-slate-500",
                              p() && "text-slate-100"
                            ),
                          }))
                      ),
                      w(Ae, xe);
                  },
                },
              });
            }
          );
          var Ie = q(ie, 2);
          He(
            Ie,
            () => lr,
            (Fe, _e) => {
              _e(Fe, {
                transition: rn,
                sideOffset: 4,
                class:
                  "z-30 max-w-lg rounded-md bg-white p-3 text-sm font-medium text-gray-950 drop-shadow-xl",
                children: (Ae, Ge) => {
                  var Ce = Ud(),
                    xe = I(Ce);
                  He(
                    xe,
                    () => dr,
                    (st, lt) => {
                      lt(st, {});
                    }
                  );
                  var je = q(xe, 2),
                    Ke = F(je);
                  E(je),
                    le(() =>
                      dt(Ke, `${(p() ? "Close" : "Open") ?? ""} Live Stats`)
                    ),
                    w(Ae, Ce);
                },
                $$slots: { default: !0 },
              });
            }
          ),
            w(ve, oe);
        },
        $$slots: { default: !0 },
      });
    }
  ),
    E(me),
    E(K),
    E(z),
    le(() => {
      Rr(A, r()),
        (A.disabled = k(v) !== null),
        Vt(A, k(R), ""),
        (D.disabled = k(v) !== null),
        (V.disabled = k(v) !== null),
        (Q.disabled = k(x)),
        Vt(Q, k(Ye), "");
    }),
    w(t, z),
    Oe();
}
Mn(["click", "focusout"]);
const Kd =
    "data:image/webp;base64,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",
  $d =
    "data:image/webp;base64,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",
  Qd =
    "data:image/webp;base64,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",
  Xn =
    "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.05746%202.77487C7.01779%201.05279%207.49757%200.19175%208.21536%200.19175C8.93314%200.19175%209.41293%201.05279%2010.3733%202.77487L10.6219%203.22054C10.8947%203.71018%2011.0312%203.955%2011.2434%204.11645C11.4556%204.27789%2011.7209%204.33777%2012.2515%204.45753L12.7335%204.56668C14.5981%204.98886%2015.5296%205.19957%2015.7517%205.91281C15.973%206.62529%2015.3379%207.36884%2014.0668%208.85519L13.7378%209.23948C13.377%209.66166%2013.1959%209.87313%2013.1148%2010.1339C13.0337%2010.3954%2013.061%2010.6773%2013.1155%2011.2405L13.1656%2011.7536C13.3573%2013.7372%2013.4536%2014.7286%2012.873%2015.169C12.2924%2015.6101%2011.4192%2015.2076%209.67443%2014.4042L9.22193%2014.1965C8.72622%2013.9676%208.47837%2013.8539%208.21536%2013.8539C7.95235%2013.8539%207.7045%2013.9676%207.20803%2014.1965L6.75705%2014.4042C5.01148%2015.2076%204.13831%2015.6093%203.55847%2015.1697C2.97712%2014.7286%203.07338%2013.7372%203.26514%2011.7536L3.31517%2011.2412C3.36974%2010.6773%203.39703%2010.3954%203.31517%2010.1346C3.23483%209.87313%203.05367%209.66166%202.69289%209.24024L2.36393%208.85519C1.09284%207.3696%200.457673%206.62604%200.678996%205.91281C0.901077%205.19957%201.83336%204.9881%203.69794%204.56668L4.18%204.45753C4.70981%204.33777%204.97434%204.27789%205.18732%204.11645C5.39955%203.955%205.53598%203.71018%205.80885%203.22054L6.05746%202.77487Z'%20fill='%23E9C711'/%3e%3c/svg%3e";
var Xd = X('<div class="showcase__rating-item"><img alt="rating"></div>'),
  Jd = X('<div class="showcase__rating-item"><img alt="rating"></div>'),
  eu = X('<div class="showcase__rating-item"><img alt="rating"></div>'),
  tu = X(
    '<div class="showcase__wrapper"><div class="showcase"><div class="showcase__link"><div class="showcase__item"><div class="showcase__img"><img alt="31 BETS"></div> <div class="showcase__title"><span>31 BETS</span></div></div> <div class="showcase__item showcase__item-right"><div class="showcase__rating"></div> <div class="showcase__btn">Toneelstuk</div></div></div></div> <div class="showcase"><div class="showcase__link"><div class="showcase__item"><div class="showcase__img"><img alt="Betmac"></div> <div class="showcase__title"><span>Betmac</span></div></div> <div class="showcase__item showcase__item-right"><div class="showcase__rating"></div> <div class="showcase__btn">Toneelstuk</div></div></div></div> <div class="showcase"><div class="showcase__link"><div class="showcase__item"><div class="showcase__img"><img alt="7Bets"></div> <div class="showcase__title"><span>7Bets</span></div></div> <div class="showcase__item showcase__item-right"><div class="showcase__rating"></div> <div class="showcase__btn">Toneelstuk</div></div></div></div></div>'
  );
function nu(t) {
  var e = tu(),
    n = F(e),
    r = F(n),
    a = F(r),
    i = F(a),
    o = F(i);
  Tt(o, "src", Kd), E(i), Ze(2), E(a);
  var s = q(a, 2),
    l = F(s);
  Ht(
    l,
    4,
    () => Array(5),
    Zt,
    (U, O) => {
      var u = Xd(),
        d = F(u);
      Tt(d, "src", Xn), E(u), w(U, u);
    }
  ),
    E(l);
  var c = q(l, 2);
  E(s), E(r), E(n);
  var p = q(n, 2),
    f = F(p),
    h = F(f),
    g = F(h),
    v = F(g);
  Tt(v, "src", $d), E(g), Ze(2), E(h);
  var m = q(h, 2),
    _ = F(m);
  Ht(
    _,
    4,
    () => Array(5),
    Zt,
    (U, O) => {
      var u = Jd(),
        d = F(u);
      Tt(d, "src", Xn), E(u), w(U, u);
    }
  ),
    E(_);
  var y = q(_, 2);
  E(m), E(f), E(p);
  var x = q(p, 2),
    b = F(x),
    C = F(b),
    S = F(C),
    M = F(S);
  Tt(M, "src", Qd), E(S), Ze(2), E(C);
  var N = q(C, 2),
    T = F(N);
  Ht(
    T,
    4,
    () => Array(5),
    Zt,
    (U, O) => {
      var u = eu(),
        d = F(u);
      Tt(d, "src", Xn), E(u), w(U, u);
    }
  ),
    E(T);
  var z = q(T, 2);
  E(N),
    E(b),
    E(x),
    E(e),
    Te(
      "click",
      c,
      () => (window.location.href = "https://applogic.top/5TRb1N")
    ),
    Te(
      "click",
      y,
      () => (window.location.href = "https://applogic.top/5TRb1N")
    ),
    Te(
      "click",
      z,
      () => (window.location.href = "https://applogic.top/5TRb1N")
    ),
    w(t, e);
}
function ru() {
  const t = window.localStorage.getItem(ka.BALANCE),
    e = parseFloat(t ?? "");
  isNaN(e) || qt.set(e);
}
var ou = X(
  `<div class="relative flex min-h-dvh w-full flex-col bg-gray-900 text-gray-100"><nav class="sticky top-0 z-10 w-full bg-gray-800 px-5 py-3 drop-shadow-md"><div class="relative mx-auto flex h-14 max-w-7xl items-center"><img alt="logo" class="h-6 sm:h-7"> <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"><!></div></div></nav> <main class="flex-1"><div class="mx-auto w-full max-w-7xl px-5"><section id="plinko-demo" class="section demo px-5 svelte-1yx83eg"><div class="mx-auto mt-5 min-w-[300px] max-w-xl drop-shadow-xl md:mt-10 lg:max-w-7xl"><div class="flex flex-col-reverse overflow-hidden rounded-lg lg:w-full lg:flex-row"><!> <div class="flex-1"><!></div></div></div></section> <section class="section showcase mx-auto px-5 mt-8 min-w-[300px] max-w-xl md:mt-10 lg:max-w-7xl svelte-1yx83eg"><!></section> <section class="prose prose-invert section description mx-auto w-full max-w-7xl svelte-1yx83eg">
<section class="prose prose-invert section description mx-auto w-full max-w-7xl svelte-1yx83eg">
<h1 id="intro">Plinko Casino: Summary and Game Guidelines</h1>
<p>Step into the thrilling universe of Plinko today! To begin, sign up on the official platform, take advantage of your introductory reward, and find detailed insights to your queries in our sections below.</p>
<h2 id="quick-info">Essential Game Details</h2>
<table>
<thead>
<tr>
<th>Aspect</th>
<th>Summary</th>
</tr>
</thead>
<tbody>
<tr>
<td>🎮 Game Variant</td>
<td>Betting, Slot Machine</td>
</tr>
<tr>
<td>💻 Supported Devices</td>
<td>Stake, Roobet, plus other gaming platforms</td>
</tr>
<tr>
<td>⚙️ Gameplay</td>
<td>Unpredictable chip descent across a pin field</td>
</tr>
<tr>
<td>🎯 Goal</td>
<td>Chip rebounds from pins, landing in a reward compartment</td>
</tr>
<tr>
<td>💵 Wager Types</td>
<td>Cash and digital currencies</td>
</tr>
<tr>
<td>🎲 Risk Options</td>
<td>Minimal, Moderate, High</td>
</tr>
<tr>
<td>🆓 Free Mode</td>
<td>Offered on most casinos</td>
</tr>
<tr>
<td>🔑 Highlights</td>
<td>Quick access, multiple styles, promotional rewards</td>
</tr>
</tbody>
</table>
<h2 id="how-to-start">Getting Started With Plinko</h2>
<ol>
<li>
<strong>Set Your Wager:</strong> Define the chip value before you play — this will influence your possible returns.
      </li>
<li>
<strong>Pick Risk:</strong> Choose between Minimal, Moderate, or High risk — each affects your reward odds and variance.
      </li>
<li>
<strong>Release the Chip:</strong> Click "Start" and observe as the chip drops through the board.
      </li>
<li>
<strong>Claim Rewards:</strong> Once the chip settles in a slot, your winnings are determined by that slot's payout ratio.
      </li>
</ol>
<h2 id="general-info">Key Information about Online Plinko</h2>
<ul>
<li>
<strong>Chance &amp; Tactics:</strong> The direction is always random, but choosing your risk brings in a layer of strategy.
      </li>
<li>
<strong>Versions:</strong> The quantity of pins and prize lanes switches between platforms; certain ones even add extra effects and mini-games.
      </li>
<li>
<strong>Digital Currency Options:</strong> Bitcoin, Ethereum, and more for speedy deposits and cashouts.
      </li>
<li>
<strong>Legitimate RNG:</strong> Authorized platforms utilize verified random generators for honest outcomes.
      </li>
<li>
<strong>Approval:</strong> Always select sites with valid authorization for security.
      </li>
</ul>
<h2 id="reviews">User Feedback</h2>
<ul>
<li>Great mix of chance and payout potential.</li>
<li>Opportunity for large rewards per chip drop.</li>
<li>User-friendly design for beginners and experts alike.</li>
</ul>
<h2 id="strategies">Hints and Tactics</h2>
<ul>
<li>
<strong>Consistent Betting:</strong> Maintain a stable wager to limit losses.
      </li>
<li>
<strong>Martingale System:</strong> Double your stake after a defeat, revert after a win. Best for sizable balances.
      </li>
<li>
<strong>Reverse Martingale:</strong> Boost your wager when you win; decrease if you lose to capitalize on runs.
      </li>
<li>
<strong>Demo Play:</strong> Try different methods in no-risk mode before betting real cash.
      </li>
<li>
<strong>Budget Control:</strong> Decide on win and loss caps so you gamble within your means.
      </li>
</ul>
<h2 id="versions">Unique Plinko Types</h2>
<ul>
<li>
<strong>Plinko Slot:</strong> Melds classic mechanics with slot extras like bonus features and special icons.
      </li>
<li>
<strong>Crypto Plinko:</strong> Greater privacy and speedy dealings using blockchain, as well as cryptocurrency perks.
      </li>
<li>
<strong>Different Developers:</strong> BGaming delivers lively visuals, Spribe brings engaging features and exclusive bonuses.
      </li>
</ul>
<h2 id="getting-started">How to Begin Playing</h2>
<ol>
<li>Pick your preferred casino by reviewing license, user ratings, and payment flexibility.</li>
<li>Create an account and verify it if needed.</li>
<li>Choose between play-for-fun and real-cash options.</li>
<li>Add funds through bank cards, e-wallets, or cryptocurrencies.</li>
<li>Select your chip amount and risk setting.</li>
<li>Release the chip and experience the excitement!</li>
</ol>
<h2 id="recommendations">Top Suggestions</h2>
<ul>
<li>Enjoy gaming responsibly by pre-setting your spend and play duration.</li>
<li>Seek out offers — welcome rewards and free rounds give extra value.</li>
<li>Always check other players' experiences before picking a casino.</li>
</ul>
<h2 id="real-money">Plinko For Cash Wins</h2>
<p>Playing for real funds brings more energy:</p>
<ul>
<li>Actual prizes depend on your bet, risk choice, and slot payout multiplier.</li>
<li>Bonuses and free spins expand opportunities by supplying additional funds.</li>
<li>Stick to reputable, authorized casinos for your protection.</li>
</ul>
<h2 id="demo-mode">Try The Demo</h2>
<p>Use demo mode to:</p>
<ul>
<li>Learn how chips react as they drop.</li>
<li>Observe how payouts shift with different risks.</li>
<li>Experiment with several approaches at no financial risk.</li>
</ul>
<h2 id="faq">FAQ</h2>
<div id="faq-items">
<h3>1. What is Plinko Casino?</h3>
<p>An online game of chance where a disk descends through pegs and rewards are given based on the final spot.</p>
<h3>2. Is it lawful?</h3>
<p>Legality varies according to your location and the casino’s regulatory status. Always review applicable laws before signing up.</p>
<h3>3. Are winnings real?</h3>
<p>Absolutely, with good luck and careful bankroll discipline.</p>
<h3>4. Does crypto make sense?</h3>
<p>Digital coins grant privacy and rapid processing, but basic crypto awareness is recommended.</p>
<h3>5. Are strategies effective?</h3>
<p>Since outcomes can’t be predicted, managing wagers and risk can help limit downturns.</p>
</div>
</section>
</section> <!></div>`
);
function mu(t, e) {
  ke(e, !0),
    lo(() => {
      ru();
    });
  var n = ou(),
    r = F(n),
    a = F(r),
    i = F(a);
  Tt(i, "src", Fa);
  var o = q(i, 2),
    s = F(o);
  Sl(s, {}), E(o), E(a), E(r);
  var l = q(r, 2),
    c = F(l),
    p = F(c),
    f = F(p),
    h = F(f),
    g = F(h);
  Yd(g, {});
  var v = q(g, 2),
    m = F(v);
  Oa(m, {}), E(v), E(h), E(f), E(p);
  var _ = q(p, 2),
    y = F(_);
  nu(y), E(_), Ze(2), E(c), E(l);
  var x = q(l, 2);
  ud(x, {});
  var b = q(x, 2);
  Zc(b), Ze(2), E(n), w(t, n), Oe();
}
export { mu as component };
