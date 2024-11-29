function D2(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var Ia =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Fu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var w1 = { exports: {} },
  ju = {},
  k1 = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ca = Symbol.for("react.element"),
  N2 = Symbol.for("react.portal"),
  B2 = Symbol.for("react.fragment"),
  V2 = Symbol.for("react.strict_mode"),
  W2 = Symbol.for("react.profiler"),
  U2 = Symbol.for("react.provider"),
  H2 = Symbol.for("react.context"),
  G2 = Symbol.for("react.forward_ref"),
  K2 = Symbol.for("react.suspense"),
  Y2 = Symbol.for("react.memo"),
  X2 = Symbol.for("react.lazy"),
  Pg = Symbol.iterator;
function q2(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pg && e[Pg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var C1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  P1 = Object.assign,
  T1 = {};
function wi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = T1),
    (this.updater = n || C1);
}
wi.prototype.isReactComponent = {};
wi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function _1() {}
_1.prototype = wi.prototype;
function Vh(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = T1),
    (this.updater = n || C1);
}
var Wh = (Vh.prototype = new _1());
Wh.constructor = Vh;
P1(Wh, wi.prototype);
Wh.isPureReactComponent = !0;
var Tg = Array.isArray,
  E1 = Object.prototype.hasOwnProperty,
  Uh = { current: null },
  $1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function R1(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      E1.call(t, r) && !$1.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: ca,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: Uh.current,
  };
}
function Q2(e, t) {
  return {
    $$typeof: ca,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hh(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ca;
}
function Z2(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var _g = /\/+/g;
function Bc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Z2("" + e.key)
    : t.toString(36);
}
function ml(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ca:
          case N2:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Bc(s, 0) : r),
      Tg(o)
        ? ((n = ""),
          e != null && (n = e.replace(_g, "$&/") + "/"),
          ml(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Hh(o) &&
            (o = Q2(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(_g, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Tg(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + Bc(i, a);
      s += ml(i, t, n, l, o);
    }
  else if (((l = q2(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (l = r + Bc(i, a++)), (s += ml(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Fa(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ml(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function J2(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var et = { current: null },
  gl = { transition: null },
  eP = {
    ReactCurrentDispatcher: et,
    ReactCurrentBatchConfig: gl,
    ReactCurrentOwner: Uh,
  };
function A1() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: Fa,
  forEach: function (e, t, n) {
    Fa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Fa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Fa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hh(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = wi;
V.Fragment = B2;
V.Profiler = W2;
V.PureComponent = Vh;
V.StrictMode = V2;
V.Suspense = K2;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eP;
V.act = A1;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = P1({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Uh.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      E1.call(t, l) &&
        !$1.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: ca, type: e.type, key: o, ref: i, props: r, _owner: s };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: H2,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: U2, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = R1;
V.createFactory = function (e) {
  var t = R1.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: G2, render: e };
};
V.isValidElement = Hh;
V.lazy = function (e) {
  return { $$typeof: X2, _payload: { _status: -1, _result: e }, _init: J2 };
};
V.memo = function (e, t) {
  return { $$typeof: Y2, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = gl.transition;
  gl.transition = {};
  try {
    e();
  } finally {
    gl.transition = t;
  }
};
V.unstable_act = A1;
V.useCallback = function (e, t) {
  return et.current.useCallback(e, t);
};
V.useContext = function (e) {
  return et.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return et.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return et.current.useEffect(e, t);
};
V.useId = function () {
  return et.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return et.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return et.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return et.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return et.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return et.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return et.current.useRef(e);
};
V.useState = function (e) {
  return et.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return et.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return et.current.useTransition();
};
V.version = "18.3.1";
k1.exports = V;
var b = k1.exports;
const Ut = Fu(b),
  nf = D2({ __proto__: null, default: Ut }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tP = b,
  nP = Symbol.for("react.element"),
  rP = Symbol.for("react.fragment"),
  oP = Object.prototype.hasOwnProperty,
  iP = tP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  sP = { key: !0, ref: !0, __self: !0, __source: !0 };
function M1(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) oP.call(t, r) && !sP.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: nP,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: iP.current,
  };
}
ju.Fragment = rP;
ju.jsx = M1;
ju.jsxs = M1;
w1.exports = ju;
var w = w1.exports,
  rf = {},
  z1 = { exports: {} },
  bt = {},
  I1 = { exports: {} },
  F1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, O) {
    var B = M.length;
    M.push(O);
    e: for (; 0 < B; ) {
      var ie = (B - 1) >>> 1,
        he = M[ie];
      if (0 < o(he, O)) (M[ie] = O), (M[B] = he), (B = ie);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var O = M[0],
      B = M.pop();
    if (B !== O) {
      M[0] = B;
      e: for (var ie = 0, he = M.length, K = he >>> 1; ie < K; ) {
        var kt = 2 * (ie + 1) - 1,
          Pr = M[kt],
          Xe = kt + 1,
          gn = M[Xe];
        if (0 > o(Pr, B))
          Xe < he && 0 > o(gn, Pr)
            ? ((M[ie] = gn), (M[Xe] = B), (ie = Xe))
            : ((M[ie] = Pr), (M[kt] = B), (ie = kt));
        else if (Xe < he && 0 > o(gn, B)) (M[ie] = gn), (M[Xe] = B), (ie = Xe);
        else break e;
      }
    }
    return O;
  }
  function o(M, O) {
    var B = M.sortIndex - O.sortIndex;
    return B !== 0 ? B : M.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    p = !1,
    g = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(M) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= M)
        r(u), (O.sortIndex = O.expirationTime), t(l, O);
      else break;
      O = n(u);
    }
  }
  function k(M) {
    if (((v = !1), y(M), !g))
      if (n(l) !== null) (g = !0), Vn(T);
      else {
        var O = n(u);
        O !== null && ve(k, O.startTime - M);
      }
  }
  function T(M, O) {
    (g = !1), v && ((v = !1), m(R), (R = -1)), (p = !0);
    var B = f;
    try {
      for (
        y(O), d = n(l);
        d !== null && (!(d.expirationTime > O) || (M && !oe()));

      ) {
        var ie = d.callback;
        if (typeof ie == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var he = ie(d.expirationTime <= O);
          (O = e.unstable_now()),
            typeof he == "function" ? (d.callback = he) : d === n(l) && r(l),
            y(O);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var K = !0;
      else {
        var kt = n(u);
        kt !== null && ve(k, kt.startTime - O), (K = !1);
      }
      return K;
    } finally {
      (d = null), (f = B), (p = !1);
    }
  }
  var $ = !1,
    E = null,
    R = -1,
    z = 5,
    F = -1;
  function oe() {
    return !(e.unstable_now() - F < z);
  }
  function nt() {
    if (E !== null) {
      var M = e.unstable_now();
      F = M;
      var O = !0;
      try {
        O = E(!0, M);
      } finally {
        O ? wt() : (($ = !1), (E = null));
      }
    } else $ = !1;
  }
  var wt;
  if (typeof h == "function")
    wt = function () {
      h(nt);
    };
  else if (typeof MessageChannel < "u") {
    var mn = new MessageChannel(),
      Cr = mn.port2;
    (mn.port1.onmessage = nt),
      (wt = function () {
        Cr.postMessage(null);
      });
  } else
    wt = function () {
      x(nt, 0);
    };
  function Vn(M) {
    (E = M), $ || (($ = !0), wt());
  }
  function ve(M, O) {
    R = x(function () {
      M(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), Vn(T));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var B = f;
      f = O;
      try {
        return M();
      } finally {
        f = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, O) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var B = f;
      f = M;
      try {
        return O();
      } finally {
        f = B;
      }
    }),
    (e.unstable_scheduleCallback = function (M, O, B) {
      var ie = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? ie + B : ie))
          : (B = ie),
        M)
      ) {
        case 1:
          var he = -1;
          break;
        case 2:
          he = 250;
          break;
        case 5:
          he = 1073741823;
          break;
        case 4:
          he = 1e4;
          break;
        default:
          he = 5e3;
      }
      return (
        (he = B + he),
        (M = {
          id: c++,
          callback: O,
          priorityLevel: M,
          startTime: B,
          expirationTime: he,
          sortIndex: -1,
        }),
        B > ie
          ? ((M.sortIndex = B),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (v ? (m(R), (R = -1)) : (v = !0), ve(k, B - ie)))
          : ((M.sortIndex = he), t(l, M), g || p || ((g = !0), Vn(T))),
        M
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (M) {
      var O = f;
      return function () {
        var B = f;
        f = O;
        try {
          return M.apply(this, arguments);
        } finally {
          f = B;
        }
      };
    });
})(F1);
I1.exports = F1;
var aP = I1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lP = b,
  vt = aP;
function A(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var j1 = new Set(),
  _s = {};
function lo(e, t) {
  ai(e, t), ai(e + "Capture", t);
}
function ai(e, t) {
  for (_s[e] = t, e = 0; e < t.length; e++) j1.add(t[e]);
}
var Fn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  of = Object.prototype.hasOwnProperty,
  uP =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Eg = {},
  $g = {};
function cP(e) {
  return of.call($g, e)
    ? !0
    : of.call(Eg, e)
    ? !1
    : uP.test(e)
    ? ($g[e] = !0)
    : ((Eg[e] = !0), !1);
}
function dP(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function fP(e, t, n, r) {
  if (t === null || typeof t > "u" || dP(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function tt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new tt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gh = /[\-:]([a-z])/g;
function Kh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gh, Kh);
    Ne[t] = new tt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gh, Kh);
    Ne[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gh, Kh);
  Ne[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new tt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yh(e, t, n, r) {
  var o = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (fP(t, n, o, r) && (n = null),
    r || o === null
      ? cP(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nn = lP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ja = Symbol.for("react.element"),
  wo = Symbol.for("react.portal"),
  ko = Symbol.for("react.fragment"),
  Xh = Symbol.for("react.strict_mode"),
  sf = Symbol.for("react.profiler"),
  O1 = Symbol.for("react.provider"),
  L1 = Symbol.for("react.context"),
  qh = Symbol.for("react.forward_ref"),
  af = Symbol.for("react.suspense"),
  lf = Symbol.for("react.suspense_list"),
  Qh = Symbol.for("react.memo"),
  qn = Symbol.for("react.lazy"),
  D1 = Symbol.for("react.offscreen"),
  Rg = Symbol.iterator;
function ji(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Rg && e[Rg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xe = Object.assign,
  Vc;
function qi(e) {
  if (Vc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Vc = (t && t[1]) || "";
    }
  return (
    `
` +
    Vc +
    e
  );
}
var Wc = !1;
function Uc(e, t) {
  if (!e || Wc) return "";
  Wc = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Wc = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? qi(e) : "";
}
function hP(e) {
  switch (e.tag) {
    case 5:
      return qi(e.type);
    case 16:
      return qi("Lazy");
    case 13:
      return qi("Suspense");
    case 19:
      return qi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Uc(e.type, !1)), e;
    case 11:
      return (e = Uc(e.type.render, !1)), e;
    case 1:
      return (e = Uc(e.type, !0)), e;
    default:
      return "";
  }
}
function uf(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ko:
      return "Fragment";
    case wo:
      return "Portal";
    case sf:
      return "Profiler";
    case Xh:
      return "StrictMode";
    case af:
      return "Suspense";
    case lf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case L1:
        return (e.displayName || "Context") + ".Consumer";
      case O1:
        return (e._context.displayName || "Context") + ".Provider";
      case qh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Qh:
        return (
          (t = e.displayName || null), t !== null ? t : uf(e.type) || "Memo"
        );
      case qn:
        (t = e._payload), (e = e._init);
        try {
          return uf(e(t));
        } catch {}
    }
  return null;
}
function pP(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return uf(t);
    case 8:
      return t === Xh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function mr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function N1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function mP(e) {
  var t = N1(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Oa(e) {
  e._valueTracker || (e._valueTracker = mP(e));
}
function B1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = N1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function cf(e, t) {
  var n = t.checked;
  return xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ag(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function V1(e, t) {
  (t = t.checked), t != null && Yh(e, "checked", t, !1);
}
function df(e, t) {
  V1(e, t);
  var n = mr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ff(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ff(e, t.type, mr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Mg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ff(e, t, n) {
  (t !== "number" || Gl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qi = Array.isArray;
function Ho(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function hf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function zg(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(A(92));
      if (Qi(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mr(n) };
}
function W1(e, t) {
  var n = mr(t.value),
    r = mr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ig(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function U1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? U1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var La,
  H1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        La = La || document.createElement("div"),
          La.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = La.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Es(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var us = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  gP = ["Webkit", "ms", "Moz", "O"];
Object.keys(us).forEach(function (e) {
  gP.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (us[t] = us[e]);
  });
});
function G1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (us.hasOwnProperty(e) && us[e])
    ? ("" + t).trim()
    : t + "px";
}
function K1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = G1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var vP = xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function mf(e, t) {
  if (t) {
    if (vP[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function gf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var vf = null;
function Zh(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yf = null,
  Go = null,
  Ko = null;
function Fg(e) {
  if ((e = ha(e))) {
    if (typeof yf != "function") throw Error(A(280));
    var t = e.stateNode;
    t && ((t = Bu(t)), yf(e.stateNode, e.type, t));
  }
}
function Y1(e) {
  Go ? (Ko ? Ko.push(e) : (Ko = [e])) : (Go = e);
}
function X1() {
  if (Go) {
    var e = Go,
      t = Ko;
    if (((Ko = Go = null), Fg(e), t)) for (e = 0; e < t.length; e++) Fg(t[e]);
  }
}
function q1(e, t) {
  return e(t);
}
function Q1() {}
var Hc = !1;
function Z1(e, t, n) {
  if (Hc) return e(t, n);
  Hc = !0;
  try {
    return q1(e, t, n);
  } finally {
    (Hc = !1), (Go !== null || Ko !== null) && (Q1(), X1());
  }
}
function $s(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var bf = !1;
if (Fn)
  try {
    var Oi = {};
    Object.defineProperty(Oi, "passive", {
      get: function () {
        bf = !0;
      },
    }),
      window.addEventListener("test", Oi, Oi),
      window.removeEventListener("test", Oi, Oi);
  } catch {
    bf = !1;
  }
function yP(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var cs = !1,
  Kl = null,
  Yl = !1,
  Sf = null,
  bP = {
    onError: function (e) {
      (cs = !0), (Kl = e);
    },
  };
function SP(e, t, n, r, o, i, s, a, l) {
  (cs = !1), (Kl = null), yP.apply(bP, arguments);
}
function xP(e, t, n, r, o, i, s, a, l) {
  if ((SP.apply(this, arguments), cs)) {
    if (cs) {
      var u = Kl;
      (cs = !1), (Kl = null);
    } else throw Error(A(198));
    Yl || ((Yl = !0), (Sf = u));
  }
}
function uo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function J1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function jg(e) {
  if (uo(e) !== e) throw Error(A(188));
}
function wP(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = uo(e)), t === null)) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return jg(o), e;
        if (i === r) return jg(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function eb(e) {
  return (e = wP(e)), e !== null ? tb(e) : null;
}
function tb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nb = vt.unstable_scheduleCallback,
  Og = vt.unstable_cancelCallback,
  kP = vt.unstable_shouldYield,
  CP = vt.unstable_requestPaint,
  Ce = vt.unstable_now,
  PP = vt.unstable_getCurrentPriorityLevel,
  Jh = vt.unstable_ImmediatePriority,
  rb = vt.unstable_UserBlockingPriority,
  Xl = vt.unstable_NormalPriority,
  TP = vt.unstable_LowPriority,
  ob = vt.unstable_IdlePriority,
  Ou = null,
  ln = null;
function _P(e) {
  if (ln && typeof ln.onCommitFiberRoot == "function")
    try {
      ln.onCommitFiberRoot(Ou, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ht = Math.clz32 ? Math.clz32 : RP,
  EP = Math.log,
  $P = Math.LN2;
function RP(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((EP(e) / $P) | 0)) | 0;
}
var Da = 64,
  Na = 4194304;
function Zi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Zi(a)) : ((i &= s), i !== 0 && (r = Zi(i)));
  } else (s = n & ~o), s !== 0 ? (r = Zi(s)) : i !== 0 && (r = Zi(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ht(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function AP(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function MP(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Ht(i),
      a = 1 << s,
      l = o[s];
    l === -1
      ? (!(a & n) || a & r) && (o[s] = AP(a, t))
      : l <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function xf(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ib() {
  var e = Da;
  return (Da <<= 1), !(Da & 4194240) && (Da = 64), e;
}
function Gc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function da(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ht(t)),
    (e[t] = n);
}
function zP(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Ht(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function ep(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ht(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function sb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ab,
  tp,
  lb,
  ub,
  cb,
  wf = !1,
  Ba = [],
  ir = null,
  sr = null,
  ar = null,
  Rs = new Map(),
  As = new Map(),
  Jn = [],
  IP =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Lg(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ir = null;
      break;
    case "dragenter":
    case "dragleave":
      sr = null;
      break;
    case "mouseover":
    case "mouseout":
      ar = null;
      break;
    case "pointerover":
    case "pointerout":
      Rs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      As.delete(t.pointerId);
  }
}
function Li(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ha(t)), t !== null && tp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function FP(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (ir = Li(ir, e, t, n, r, o)), !0;
    case "dragenter":
      return (sr = Li(sr, e, t, n, r, o)), !0;
    case "mouseover":
      return (ar = Li(ar, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Rs.set(i, Li(Rs.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), As.set(i, Li(As.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function db(e) {
  var t = Or(e.target);
  if (t !== null) {
    var n = uo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = J1(n)), t !== null)) {
          (e.blockedOn = t),
            cb(e.priority, function () {
              lb(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function vl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = kf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vf = r), n.target.dispatchEvent(r), (vf = null);
    } else return (t = ha(n)), t !== null && tp(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Dg(e, t, n) {
  vl(e) && n.delete(t);
}
function jP() {
  (wf = !1),
    ir !== null && vl(ir) && (ir = null),
    sr !== null && vl(sr) && (sr = null),
    ar !== null && vl(ar) && (ar = null),
    Rs.forEach(Dg),
    As.forEach(Dg);
}
function Di(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    wf ||
      ((wf = !0),
      vt.unstable_scheduleCallback(vt.unstable_NormalPriority, jP)));
}
function Ms(e) {
  function t(o) {
    return Di(o, e);
  }
  if (0 < Ba.length) {
    Di(Ba[0], e);
    for (var n = 1; n < Ba.length; n++) {
      var r = Ba[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ir !== null && Di(ir, e),
      sr !== null && Di(sr, e),
      ar !== null && Di(ar, e),
      Rs.forEach(t),
      As.forEach(t),
      n = 0;
    n < Jn.length;
    n++
  )
    (r = Jn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Jn.length && ((n = Jn[0]), n.blockedOn === null); )
    db(n), n.blockedOn === null && Jn.shift();
}
var Yo = Nn.ReactCurrentBatchConfig,
  Ql = !0;
function OP(e, t, n, r) {
  var o = ee,
    i = Yo.transition;
  Yo.transition = null;
  try {
    (ee = 1), np(e, t, n, r);
  } finally {
    (ee = o), (Yo.transition = i);
  }
}
function LP(e, t, n, r) {
  var o = ee,
    i = Yo.transition;
  Yo.transition = null;
  try {
    (ee = 4), np(e, t, n, r);
  } finally {
    (ee = o), (Yo.transition = i);
  }
}
function np(e, t, n, r) {
  if (Ql) {
    var o = kf(e, t, n, r);
    if (o === null) nd(e, t, r, Zl, n), Lg(e, r);
    else if (FP(o, e, t, n, r)) r.stopPropagation();
    else if ((Lg(e, r), t & 4 && -1 < IP.indexOf(e))) {
      for (; o !== null; ) {
        var i = ha(o);
        if (
          (i !== null && ab(i),
          (i = kf(e, t, n, r)),
          i === null && nd(e, t, r, Zl, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else nd(e, t, r, null, n);
  }
}
var Zl = null;
function kf(e, t, n, r) {
  if (((Zl = null), (e = Zh(r)), (e = Or(e)), e !== null))
    if (((t = uo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = J1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Zl = e), null;
}
function fb(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (PP()) {
        case Jh:
          return 1;
        case rb:
          return 4;
        case Xl:
        case TP:
          return 16;
        case ob:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nr = null,
  rp = null,
  yl = null;
function hb() {
  if (yl) return yl;
  var e,
    t = rp,
    n = t.length,
    r,
    o = "value" in nr ? nr.value : nr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (yl = o.slice(e, 1 < r ? 1 - r : void 0));
}
function bl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Va() {
  return !0;
}
function Ng() {
  return !1;
}
function St(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Va
        : Ng),
      (this.isPropagationStopped = Ng),
      this
    );
  }
  return (
    xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Va));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Va));
      },
      persist: function () {},
      isPersistent: Va,
    }),
    t
  );
}
var ki = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  op = St(ki),
  fa = xe({}, ki, { view: 0, detail: 0 }),
  DP = St(fa),
  Kc,
  Yc,
  Ni,
  Lu = xe({}, fa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ip,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ni &&
            (Ni && e.type === "mousemove"
              ? ((Kc = e.screenX - Ni.screenX), (Yc = e.screenY - Ni.screenY))
              : (Yc = Kc = 0),
            (Ni = e)),
          Kc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Yc;
    },
  }),
  Bg = St(Lu),
  NP = xe({}, Lu, { dataTransfer: 0 }),
  BP = St(NP),
  VP = xe({}, fa, { relatedTarget: 0 }),
  Xc = St(VP),
  WP = xe({}, ki, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  UP = St(WP),
  HP = xe({}, ki, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  GP = St(HP),
  KP = xe({}, ki, { data: 0 }),
  Vg = St(KP),
  YP = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  XP = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  qP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function QP(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qP[e]) ? !!t[e] : !1;
}
function ip() {
  return QP;
}
var ZP = xe({}, fa, {
    key: function (e) {
      if (e.key) {
        var t = YP[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = bl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? XP[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ip,
    charCode: function (e) {
      return e.type === "keypress" ? bl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? bl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  JP = St(ZP),
  eT = xe({}, Lu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Wg = St(eT),
  tT = xe({}, fa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ip,
  }),
  nT = St(tT),
  rT = xe({}, ki, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  oT = St(rT),
  iT = xe({}, Lu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  sT = St(iT),
  aT = [9, 13, 27, 32],
  sp = Fn && "CompositionEvent" in window,
  ds = null;
Fn && "documentMode" in document && (ds = document.documentMode);
var lT = Fn && "TextEvent" in window && !ds,
  pb = Fn && (!sp || (ds && 8 < ds && 11 >= ds)),
  Ug = " ",
  Hg = !1;
function mb(e, t) {
  switch (e) {
    case "keyup":
      return aT.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function gb(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Co = !1;
function uT(e, t) {
  switch (e) {
    case "compositionend":
      return gb(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hg = !0), Ug);
    case "textInput":
      return (e = t.data), e === Ug && Hg ? null : e;
    default:
      return null;
  }
}
function cT(e, t) {
  if (Co)
    return e === "compositionend" || (!sp && mb(e, t))
      ? ((e = hb()), (yl = rp = nr = null), (Co = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return pb && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dT = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Gg(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dT[e.type] : t === "textarea";
}
function vb(e, t, n, r) {
  Y1(r),
    (t = Jl(t, "onChange")),
    0 < t.length &&
      ((n = new op("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var fs = null,
  zs = null;
function fT(e) {
  Eb(e, 0);
}
function Du(e) {
  var t = _o(e);
  if (B1(t)) return e;
}
function hT(e, t) {
  if (e === "change") return t;
}
var yb = !1;
if (Fn) {
  var qc;
  if (Fn) {
    var Qc = "oninput" in document;
    if (!Qc) {
      var Kg = document.createElement("div");
      Kg.setAttribute("oninput", "return;"),
        (Qc = typeof Kg.oninput == "function");
    }
    qc = Qc;
  } else qc = !1;
  yb = qc && (!document.documentMode || 9 < document.documentMode);
}
function Yg() {
  fs && (fs.detachEvent("onpropertychange", bb), (zs = fs = null));
}
function bb(e) {
  if (e.propertyName === "value" && Du(zs)) {
    var t = [];
    vb(t, zs, e, Zh(e)), Z1(fT, t);
  }
}
function pT(e, t, n) {
  e === "focusin"
    ? (Yg(), (fs = t), (zs = n), fs.attachEvent("onpropertychange", bb))
    : e === "focusout" && Yg();
}
function mT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Du(zs);
}
function gT(e, t) {
  if (e === "click") return Du(t);
}
function vT(e, t) {
  if (e === "input" || e === "change") return Du(t);
}
function yT(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Kt = typeof Object.is == "function" ? Object.is : yT;
function Is(e, t) {
  if (Kt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!of.call(t, o) || !Kt(e[o], t[o])) return !1;
  }
  return !0;
}
function Xg(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qg(e, t) {
  var n = Xg(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xg(n);
  }
}
function Sb(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Sb(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xb() {
  for (var e = window, t = Gl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gl(e.document);
  }
  return t;
}
function ap(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function bT(e) {
  var t = xb(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Sb(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ap(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = qg(n, i));
        var s = qg(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ST = Fn && "documentMode" in document && 11 >= document.documentMode,
  Po = null,
  Cf = null,
  hs = null,
  Pf = !1;
function Qg(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pf ||
    Po == null ||
    Po !== Gl(r) ||
    ((r = Po),
    "selectionStart" in r && ap(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (hs && Is(hs, r)) ||
      ((hs = r),
      (r = Jl(Cf, "onSelect")),
      0 < r.length &&
        ((t = new op("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Po))));
}
function Wa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var To = {
    animationend: Wa("Animation", "AnimationEnd"),
    animationiteration: Wa("Animation", "AnimationIteration"),
    animationstart: Wa("Animation", "AnimationStart"),
    transitionend: Wa("Transition", "TransitionEnd"),
  },
  Zc = {},
  wb = {};
Fn &&
  ((wb = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete To.animationend.animation,
    delete To.animationiteration.animation,
    delete To.animationstart.animation),
  "TransitionEvent" in window || delete To.transitionend.transition);
function Nu(e) {
  if (Zc[e]) return Zc[e];
  if (!To[e]) return e;
  var t = To[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wb) return (Zc[e] = t[n]);
  return e;
}
var kb = Nu("animationend"),
  Cb = Nu("animationiteration"),
  Pb = Nu("animationstart"),
  Tb = Nu("transitionend"),
  _b = new Map(),
  Zg =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Sr(e, t) {
  _b.set(e, t), lo(t, [e]);
}
for (var Jc = 0; Jc < Zg.length; Jc++) {
  var ed = Zg[Jc],
    xT = ed.toLowerCase(),
    wT = ed[0].toUpperCase() + ed.slice(1);
  Sr(xT, "on" + wT);
}
Sr(kb, "onAnimationEnd");
Sr(Cb, "onAnimationIteration");
Sr(Pb, "onAnimationStart");
Sr("dblclick", "onDoubleClick");
Sr("focusin", "onFocus");
Sr("focusout", "onBlur");
Sr(Tb, "onTransitionEnd");
ai("onMouseEnter", ["mouseout", "mouseover"]);
ai("onMouseLeave", ["mouseout", "mouseover"]);
ai("onPointerEnter", ["pointerout", "pointerover"]);
ai("onPointerLeave", ["pointerout", "pointerover"]);
lo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
lo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
lo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
lo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
lo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ji =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  kT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ji));
function Jg(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), xP(r, t, void 0, e), (e.currentTarget = null);
}
function Eb(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Jg(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && o.isPropagationStopped())
          )
            break e;
          Jg(o, a, u), (i = l);
        }
    }
  }
  if (Yl) throw ((e = Sf), (Yl = !1), (Sf = null), e);
}
function ue(e, t) {
  var n = t[Rf];
  n === void 0 && (n = t[Rf] = new Set());
  var r = e + "__bubble";
  n.has(r) || ($b(t, e, 2, !1), n.add(r));
}
function td(e, t, n) {
  var r = 0;
  t && (r |= 4), $b(n, e, r, t);
}
var Ua = "_reactListening" + Math.random().toString(36).slice(2);
function Fs(e) {
  if (!e[Ua]) {
    (e[Ua] = !0),
      j1.forEach(function (n) {
        n !== "selectionchange" && (kT.has(n) || td(n, !1, e), td(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ua] || ((t[Ua] = !0), td("selectionchange", !1, t));
  }
}
function $b(e, t, n, r) {
  switch (fb(t)) {
    case 1:
      var o = OP;
      break;
    case 4:
      o = LP;
      break;
    default:
      o = np;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !bf ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function nd(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Or(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Z1(function () {
    var u = i,
      c = Zh(n),
      d = [];
    e: {
      var f = _b.get(e);
      if (f !== void 0) {
        var p = op,
          g = e;
        switch (e) {
          case "keypress":
            if (bl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = JP;
            break;
          case "focusin":
            (g = "focus"), (p = Xc);
            break;
          case "focusout":
            (g = "blur"), (p = Xc);
            break;
          case "beforeblur":
          case "afterblur":
            p = Xc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Bg;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = BP;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = nT;
            break;
          case kb:
          case Cb:
          case Pb:
            p = UP;
            break;
          case Tb:
            p = oT;
            break;
          case "scroll":
            p = DP;
            break;
          case "wheel":
            p = sT;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = GP;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Wg;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          m = v ? (f !== null ? f + "Capture" : null) : f;
        v = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var k = y.stateNode;
          if (
            (y.tag === 5 &&
              k !== null &&
              ((y = k),
              m !== null && ((k = $s(h, m)), k != null && v.push(js(h, k, y)))),
            x)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((f = new p(f, g, null, n, c)), d.push({ event: f, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          f &&
            n !== vf &&
            (g = n.relatedTarget || n.fromElement) &&
            (Or(g) || g[jn]))
        )
          break e;
        if (
          (p || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = u),
              (g = g ? Or(g) : null),
              g !== null &&
                ((x = uo(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = u)),
          p !== g)
        ) {
          if (
            ((v = Bg),
            (k = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Wg),
              (k = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (x = p == null ? f : _o(p)),
            (y = g == null ? f : _o(g)),
            (f = new v(k, h + "leave", p, n, c)),
            (f.target = x),
            (f.relatedTarget = y),
            (k = null),
            Or(c) === u &&
              ((v = new v(m, h + "enter", g, n, c)),
              (v.target = y),
              (v.relatedTarget = x),
              (k = v)),
            (x = k),
            p && g)
          )
            t: {
              for (v = p, m = g, h = 0, y = v; y; y = vo(y)) h++;
              for (y = 0, k = m; k; k = vo(k)) y++;
              for (; 0 < h - y; ) (v = vo(v)), h--;
              for (; 0 < y - h; ) (m = vo(m)), y--;
              for (; h--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = vo(v)), (m = vo(m));
              }
              v = null;
            }
          else v = null;
          p !== null && e0(d, f, p, v, !1),
            g !== null && x !== null && e0(d, x, g, v, !0);
        }
      }
      e: {
        if (
          ((f = u ? _o(u) : window),
          (p = f.nodeName && f.nodeName.toLowerCase()),
          p === "select" || (p === "input" && f.type === "file"))
        )
          var T = hT;
        else if (Gg(f))
          if (yb) T = vT;
          else {
            T = mT;
            var $ = pT;
          }
        else
          (p = f.nodeName) &&
            p.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (T = gT);
        if (T && (T = T(e, u))) {
          vb(d, T, n, c);
          break e;
        }
        $ && $(e, f, u),
          e === "focusout" &&
            ($ = f._wrapperState) &&
            $.controlled &&
            f.type === "number" &&
            ff(f, "number", f.value);
      }
      switch ((($ = u ? _o(u) : window), e)) {
        case "focusin":
          (Gg($) || $.contentEditable === "true") &&
            ((Po = $), (Cf = u), (hs = null));
          break;
        case "focusout":
          hs = Cf = Po = null;
          break;
        case "mousedown":
          Pf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Pf = !1), Qg(d, n, c);
          break;
        case "selectionchange":
          if (ST) break;
        case "keydown":
        case "keyup":
          Qg(d, n, c);
      }
      var E;
      if (sp)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Co
          ? mb(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (pb &&
          n.locale !== "ko" &&
          (Co || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Co && (E = hb())
            : ((nr = c),
              (rp = "value" in nr ? nr.value : nr.textContent),
              (Co = !0))),
        ($ = Jl(u, R)),
        0 < $.length &&
          ((R = new Vg(R, e, null, n, c)),
          d.push({ event: R, listeners: $ }),
          E ? (R.data = E) : ((E = gb(n)), E !== null && (R.data = E)))),
        (E = lT ? uT(e, n) : cT(e, n)) &&
          ((u = Jl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Vg("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Eb(d, t);
  });
}
function js(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = $s(e, n)),
      i != null && r.unshift(js(e, i, o)),
      (i = $s(e, t)),
      i != null && r.push(js(e, i, o))),
      (e = e.return);
  }
  return r;
}
function vo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function e0(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = $s(n, i)), l != null && s.unshift(js(n, l, a)))
        : o || ((l = $s(n, i)), l != null && s.push(js(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var CT = /\r\n?/g,
  PT = /\u0000|\uFFFD/g;
function t0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      CT,
      `
`
    )
    .replace(PT, "");
}
function Ha(e, t, n) {
  if (((t = t0(t)), t0(e) !== t && n)) throw Error(A(425));
}
function eu() {}
var Tf = null,
  _f = null;
function Ef(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var $f = typeof setTimeout == "function" ? setTimeout : void 0,
  TT = typeof clearTimeout == "function" ? clearTimeout : void 0,
  n0 = typeof Promise == "function" ? Promise : void 0,
  _T =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof n0 < "u"
      ? function (e) {
          return n0.resolve(null).then(e).catch(ET);
        }
      : $f;
function ET(e) {
  setTimeout(function () {
    throw e;
  });
}
function rd(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ms(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ms(t);
}
function lr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function r0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Ci = Math.random().toString(36).slice(2),
  rn = "__reactFiber$" + Ci,
  Os = "__reactProps$" + Ci,
  jn = "__reactContainer$" + Ci,
  Rf = "__reactEvents$" + Ci,
  $T = "__reactListeners$" + Ci,
  RT = "__reactHandles$" + Ci;
function Or(e) {
  var t = e[rn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[jn] || n[rn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = r0(e); e !== null; ) {
          if ((n = e[rn])) return n;
          e = r0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ha(e) {
  return (
    (e = e[rn] || e[jn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _o(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Bu(e) {
  return e[Os] || null;
}
var Af = [],
  Eo = -1;
function xr(e) {
  return { current: e };
}
function de(e) {
  0 > Eo || ((e.current = Af[Eo]), (Af[Eo] = null), Eo--);
}
function ae(e, t) {
  Eo++, (Af[Eo] = e.current), (e.current = t);
}
var gr = {},
  Ye = xr(gr),
  st = xr(!1),
  Zr = gr;
function li(e, t) {
  var n = e.type.contextTypes;
  if (!n) return gr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function at(e) {
  return (e = e.childContextTypes), e != null;
}
function tu() {
  de(st), de(Ye);
}
function o0(e, t, n) {
  if (Ye.current !== gr) throw Error(A(168));
  ae(Ye, t), ae(st, n);
}
function Rb(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, pP(e) || "Unknown", o));
  return xe({}, n, r);
}
function nu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || gr),
    (Zr = Ye.current),
    ae(Ye, e),
    ae(st, st.current),
    !0
  );
}
function i0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n
    ? ((e = Rb(e, t, Zr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      de(st),
      de(Ye),
      ae(Ye, e))
    : de(st),
    ae(st, n);
}
var xn = null,
  Vu = !1,
  od = !1;
function Ab(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function AT(e) {
  (Vu = !0), Ab(e);
}
function wr() {
  if (!od && xn !== null) {
    od = !0;
    var e = 0,
      t = ee;
    try {
      var n = xn;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xn = null), (Vu = !1);
    } catch (o) {
      throw (xn !== null && (xn = xn.slice(e + 1)), nb(Jh, wr), o);
    } finally {
      (ee = t), (od = !1);
    }
  }
  return null;
}
var $o = [],
  Ro = 0,
  ru = null,
  ou = 0,
  Et = [],
  $t = 0,
  Jr = null,
  Pn = 1,
  Tn = "";
function Mr(e, t) {
  ($o[Ro++] = ou), ($o[Ro++] = ru), (ru = e), (ou = t);
}
function Mb(e, t, n) {
  (Et[$t++] = Pn), (Et[$t++] = Tn), (Et[$t++] = Jr), (Jr = e);
  var r = Pn;
  e = Tn;
  var o = 32 - Ht(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Ht(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Pn = (1 << (32 - Ht(t) + o)) | (n << o) | r),
      (Tn = i + e);
  } else (Pn = (1 << i) | (n << o) | r), (Tn = e);
}
function lp(e) {
  e.return !== null && (Mr(e, 1), Mb(e, 1, 0));
}
function up(e) {
  for (; e === ru; )
    (ru = $o[--Ro]), ($o[Ro] = null), (ou = $o[--Ro]), ($o[Ro] = null);
  for (; e === Jr; )
    (Jr = Et[--$t]),
      (Et[$t] = null),
      (Tn = Et[--$t]),
      (Et[$t] = null),
      (Pn = Et[--$t]),
      (Et[$t] = null);
}
var pt = null,
  ht = null,
  ge = !1,
  Vt = null;
function zb(e, t) {
  var n = Rt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function s0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (pt = e), (ht = lr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (pt = e), (ht = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jr !== null ? { id: Pn, overflow: Tn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (pt = e),
            (ht = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mf(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zf(e) {
  if (ge) {
    var t = ht;
    if (t) {
      var n = t;
      if (!s0(e, t)) {
        if (Mf(e)) throw Error(A(418));
        t = lr(n.nextSibling);
        var r = pt;
        t && s0(e, t)
          ? zb(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (pt = e));
      }
    } else {
      if (Mf(e)) throw Error(A(418));
      (e.flags = (e.flags & -4097) | 2), (ge = !1), (pt = e);
    }
  }
}
function a0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  pt = e;
}
function Ga(e) {
  if (e !== pt) return !1;
  if (!ge) return a0(e), (ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ef(e.type, e.memoizedProps))),
    t && (t = ht))
  ) {
    if (Mf(e)) throw (Ib(), Error(A(418)));
    for (; t; ) zb(e, t), (t = lr(t.nextSibling));
  }
  if ((a0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ht = lr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ht = null;
    }
  } else ht = pt ? lr(e.stateNode.nextSibling) : null;
  return !0;
}
function Ib() {
  for (var e = ht; e; ) e = lr(e.nextSibling);
}
function ui() {
  (ht = pt = null), (ge = !1);
}
function cp(e) {
  Vt === null ? (Vt = [e]) : Vt.push(e);
}
var MT = Nn.ReactCurrentBatchConfig;
function Bi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Ka(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      A(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function l0(e) {
  var t = e._init;
  return t(e._payload);
}
function Fb(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function o(m, h) {
    return (m = fr(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, y, k) {
    return h === null || h.tag !== 6
      ? ((h = dd(y, m.mode, k)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function l(m, h, y, k) {
    var T = y.type;
    return T === ko
      ? c(m, h, y.props.children, k, y.key)
      : h !== null &&
        (h.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === qn &&
            l0(T) === h.type))
      ? ((k = o(h, y.props)), (k.ref = Bi(m, h, y)), (k.return = m), k)
      : ((k = Tl(y.type, y.key, y.props, null, m.mode, k)),
        (k.ref = Bi(m, h, y)),
        (k.return = m),
        k);
  }
  function u(m, h, y, k) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = fd(y, m.mode, k)), (h.return = m), h)
      : ((h = o(h, y.children || [])), (h.return = m), h);
  }
  function c(m, h, y, k, T) {
    return h === null || h.tag !== 7
      ? ((h = Ur(y, m.mode, k, T)), (h.return = m), h)
      : ((h = o(h, y)), (h.return = m), h);
  }
  function d(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = dd("" + h, m.mode, y)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ja:
          return (
            (y = Tl(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = Bi(m, null, h)),
            (y.return = m),
            y
          );
        case wo:
          return (h = fd(h, m.mode, y)), (h.return = m), h;
        case qn:
          var k = h._init;
          return d(m, k(h._payload), y);
      }
      if (Qi(h) || ji(h))
        return (h = Ur(h, m.mode, y, null)), (h.return = m), h;
      Ka(m, h);
    }
    return null;
  }
  function f(m, h, y, k) {
    var T = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return T !== null ? null : a(m, h, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ja:
          return y.key === T ? l(m, h, y, k) : null;
        case wo:
          return y.key === T ? u(m, h, y, k) : null;
        case qn:
          return (T = y._init), f(m, h, T(y._payload), k);
      }
      if (Qi(y) || ji(y)) return T !== null ? null : c(m, h, y, k, null);
      Ka(m, y);
    }
    return null;
  }
  function p(m, h, y, k, T) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (m = m.get(y) || null), a(h, m, "" + k, T);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case ja:
          return (m = m.get(k.key === null ? y : k.key) || null), l(h, m, k, T);
        case wo:
          return (m = m.get(k.key === null ? y : k.key) || null), u(h, m, k, T);
        case qn:
          var $ = k._init;
          return p(m, h, y, $(k._payload), T);
      }
      if (Qi(k) || ji(k)) return (m = m.get(y) || null), c(h, m, k, T, null);
      Ka(h, k);
    }
    return null;
  }
  function g(m, h, y, k) {
    for (
      var T = null, $ = null, E = h, R = (h = 0), z = null;
      E !== null && R < y.length;
      R++
    ) {
      E.index > R ? ((z = E), (E = null)) : (z = E.sibling);
      var F = f(m, E, y[R], k);
      if (F === null) {
        E === null && (E = z);
        break;
      }
      e && E && F.alternate === null && t(m, E),
        (h = i(F, h, R)),
        $ === null ? (T = F) : ($.sibling = F),
        ($ = F),
        (E = z);
    }
    if (R === y.length) return n(m, E), ge && Mr(m, R), T;
    if (E === null) {
      for (; R < y.length; R++)
        (E = d(m, y[R], k)),
          E !== null &&
            ((h = i(E, h, R)), $ === null ? (T = E) : ($.sibling = E), ($ = E));
      return ge && Mr(m, R), T;
    }
    for (E = r(m, E); R < y.length; R++)
      (z = p(E, m, R, y[R], k)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? R : z.key),
          (h = i(z, h, R)),
          $ === null ? (T = z) : ($.sibling = z),
          ($ = z));
    return (
      e &&
        E.forEach(function (oe) {
          return t(m, oe);
        }),
      ge && Mr(m, R),
      T
    );
  }
  function v(m, h, y, k) {
    var T = ji(y);
    if (typeof T != "function") throw Error(A(150));
    if (((y = T.call(y)), y == null)) throw Error(A(151));
    for (
      var $ = (T = null), E = h, R = (h = 0), z = null, F = y.next();
      E !== null && !F.done;
      R++, F = y.next()
    ) {
      E.index > R ? ((z = E), (E = null)) : (z = E.sibling);
      var oe = f(m, E, F.value, k);
      if (oe === null) {
        E === null && (E = z);
        break;
      }
      e && E && oe.alternate === null && t(m, E),
        (h = i(oe, h, R)),
        $ === null ? (T = oe) : ($.sibling = oe),
        ($ = oe),
        (E = z);
    }
    if (F.done) return n(m, E), ge && Mr(m, R), T;
    if (E === null) {
      for (; !F.done; R++, F = y.next())
        (F = d(m, F.value, k)),
          F !== null &&
            ((h = i(F, h, R)), $ === null ? (T = F) : ($.sibling = F), ($ = F));
      return ge && Mr(m, R), T;
    }
    for (E = r(m, E); !F.done; R++, F = y.next())
      (F = p(E, m, R, F.value, k)),
        F !== null &&
          (e && F.alternate !== null && E.delete(F.key === null ? R : F.key),
          (h = i(F, h, R)),
          $ === null ? (T = F) : ($.sibling = F),
          ($ = F));
    return (
      e &&
        E.forEach(function (nt) {
          return t(m, nt);
        }),
      ge && Mr(m, R),
      T
    );
  }
  function x(m, h, y, k) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ko &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case ja:
          e: {
            for (var T = y.key, $ = h; $ !== null; ) {
              if ($.key === T) {
                if (((T = y.type), T === ko)) {
                  if ($.tag === 7) {
                    n(m, $.sibling),
                      (h = o($, y.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  $.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === qn &&
                    l0(T) === $.type)
                ) {
                  n(m, $.sibling),
                    (h = o($, y.props)),
                    (h.ref = Bi(m, $, y)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, $);
                break;
              } else t(m, $);
              $ = $.sibling;
            }
            y.type === ko
              ? ((h = Ur(y.props.children, m.mode, k, y.key)),
                (h.return = m),
                (m = h))
              : ((k = Tl(y.type, y.key, y.props, null, m.mode, k)),
                (k.ref = Bi(m, h, y)),
                (k.return = m),
                (m = k));
          }
          return s(m);
        case wo:
          e: {
            for ($ = y.key; h !== null; ) {
              if (h.key === $)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling),
                    (h = o(h, y.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = fd(y, m.mode, k)), (h.return = m), (m = h);
          }
          return s(m);
        case qn:
          return ($ = y._init), x(m, h, $(y._payload), k);
      }
      if (Qi(y)) return g(m, h, y, k);
      if (ji(y)) return v(m, h, y, k);
      Ka(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = dd(y, m.mode, k)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return x;
}
var ci = Fb(!0),
  jb = Fb(!1),
  iu = xr(null),
  su = null,
  Ao = null,
  dp = null;
function fp() {
  dp = Ao = su = null;
}
function hp(e) {
  var t = iu.current;
  de(iu), (e._currentValue = t);
}
function If(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xo(e, t) {
  (su = e),
    (dp = Ao = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (it = !0), (e.firstContext = null));
}
function It(e) {
  var t = e._currentValue;
  if (dp !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ao === null)) {
      if (su === null) throw Error(A(308));
      (Ao = e), (su.dependencies = { lanes: 0, firstContext: e });
    } else Ao = Ao.next = e;
  return t;
}
var Lr = null;
function pp(e) {
  Lr === null ? (Lr = [e]) : Lr.push(e);
}
function Ob(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), pp(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    On(e, r)
  );
}
function On(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Qn = !1;
function mp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lb(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function $n(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ur(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), G & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      On(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), pp(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    On(e, n)
  );
}
function Sl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ep(e, n);
  }
}
function u0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function au(e, t, n, r) {
  var o = e.updateQueue;
  Qn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var d = o.baseState;
    (s = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        p = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            v = a;
          switch (((f = t), (p = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                d = g.call(p, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = v.payload),
                (f = typeof g == "function" ? g.call(p, d, f) : g),
                f == null)
              )
                break e;
              d = xe({}, d, f);
              break e;
            case 2:
              Qn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [a]) : f.push(a));
      } else
        (p = {
          eventTime: p,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (to |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function c0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(A(191, o));
        o.call(r);
      }
    }
}
var pa = {},
  un = xr(pa),
  Ls = xr(pa),
  Ds = xr(pa);
function Dr(e) {
  if (e === pa) throw Error(A(174));
  return e;
}
function gp(e, t) {
  switch ((ae(Ds, t), ae(Ls, e), ae(un, pa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pf(t, e));
  }
  de(un), ae(un, t);
}
function di() {
  de(un), de(Ls), de(Ds);
}
function Db(e) {
  Dr(Ds.current);
  var t = Dr(un.current),
    n = pf(t, e.type);
  t !== n && (ae(Ls, e), ae(un, n));
}
function vp(e) {
  Ls.current === e && (de(un), de(Ls));
}
var ye = xr(0);
function lu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var id = [];
function yp() {
  for (var e = 0; e < id.length; e++)
    id[e]._workInProgressVersionPrimary = null;
  id.length = 0;
}
var xl = Nn.ReactCurrentDispatcher,
  sd = Nn.ReactCurrentBatchConfig,
  eo = 0,
  Se = null,
  Re = null,
  ze = null,
  uu = !1,
  ps = !1,
  Ns = 0,
  zT = 0;
function Be() {
  throw Error(A(321));
}
function bp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Kt(e[n], t[n])) return !1;
  return !0;
}
function Sp(e, t, n, r, o, i) {
  if (
    ((eo = i),
    (Se = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xl.current = e === null || e.memoizedState === null ? OT : LT),
    (e = n(r, o)),
    ps)
  ) {
    i = 0;
    do {
      if (((ps = !1), (Ns = 0), 25 <= i)) throw Error(A(301));
      (i += 1),
        (ze = Re = null),
        (t.updateQueue = null),
        (xl.current = DT),
        (e = n(r, o));
    } while (ps);
  }
  if (
    ((xl.current = cu),
    (t = Re !== null && Re.next !== null),
    (eo = 0),
    (ze = Re = Se = null),
    (uu = !1),
    t)
  )
    throw Error(A(300));
  return e;
}
function xp() {
  var e = Ns !== 0;
  return (Ns = 0), e;
}
function Zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ze === null ? (Se.memoizedState = ze = e) : (ze = ze.next = e), ze;
}
function Ft() {
  if (Re === null) {
    var e = Se.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = ze === null ? Se.memoizedState : ze.next;
  if (t !== null) (ze = t), (Re = e);
  else {
    if (e === null) throw Error(A(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      ze === null ? (Se.memoizedState = ze = e) : (ze = ze.next = e);
  }
  return ze;
}
function Bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ad(e) {
  var t = Ft(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = Re,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((eo & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (Se.lanes |= c),
          (to |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Kt(r, t.memoizedState) || (it = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Se.lanes |= i), (to |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ld(e) {
  var t = Ft(),
    n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Kt(i, t.memoizedState) || (it = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Nb() {}
function Bb(e, t) {
  var n = Se,
    r = Ft(),
    o = t(),
    i = !Kt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (it = !0)),
    (r = r.queue),
    wp(Ub.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Vs(9, Wb.bind(null, n, r, o, t), void 0, null),
      Ie === null)
    )
      throw Error(A(349));
    eo & 30 || Vb(n, t, o);
  }
  return o;
}
function Vb(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Wb(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Hb(t) && Gb(e);
}
function Ub(e, t, n) {
  return n(function () {
    Hb(t) && Gb(e);
  });
}
function Hb(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Kt(e, n);
  } catch {
    return !0;
  }
}
function Gb(e) {
  var t = On(e, 1);
  t !== null && Gt(t, e, 1, -1);
}
function d0(e) {
  var t = Zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = jT.bind(null, Se, e)),
    [t.memoizedState, e]
  );
}
function Vs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Se.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Se.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Kb() {
  return Ft().memoizedState;
}
function wl(e, t, n, r) {
  var o = Zt();
  (Se.flags |= e),
    (o.memoizedState = Vs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wu(e, t, n, r) {
  var o = Ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Re !== null) {
    var s = Re.memoizedState;
    if (((i = s.destroy), r !== null && bp(r, s.deps))) {
      o.memoizedState = Vs(t, n, i, r);
      return;
    }
  }
  (Se.flags |= e), (o.memoizedState = Vs(1 | t, n, i, r));
}
function f0(e, t) {
  return wl(8390656, 8, e, t);
}
function wp(e, t) {
  return Wu(2048, 8, e, t);
}
function Yb(e, t) {
  return Wu(4, 2, e, t);
}
function Xb(e, t) {
  return Wu(4, 4, e, t);
}
function qb(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qb(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wu(4, 4, qb.bind(null, t, e), n)
  );
}
function kp() {}
function Zb(e, t) {
  var n = Ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Jb(e, t) {
  var n = Ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function eS(e, t, n) {
  return eo & 21
    ? (Kt(n, t) || ((n = ib()), (Se.lanes |= n), (to |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = n));
}
function IT(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = sd.transition;
  sd.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (sd.transition = r);
  }
}
function tS() {
  return Ft().memoizedState;
}
function FT(e, t, n) {
  var r = dr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    nS(e))
  )
    rS(t, n);
  else if (((n = Ob(e, t, n, r)), n !== null)) {
    var o = Ze();
    Gt(n, e, r, o), oS(n, t, r);
  }
}
function jT(e, t, n) {
  var r = dr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (nS(e)) rS(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Kt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((o.next = o), pp(t))
            : ((o.next = l.next), (l.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ob(e, t, o, r)),
      n !== null && ((o = Ze()), Gt(n, e, r, o), oS(n, t, r));
  }
}
function nS(e) {
  var t = e.alternate;
  return e === Se || (t !== null && t === Se);
}
function rS(e, t) {
  ps = uu = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function oS(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ep(e, n);
  }
}
var cu = {
    readContext: It,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useInsertionEffect: Be,
    useLayoutEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useMutableSource: Be,
    useSyncExternalStore: Be,
    useId: Be,
    unstable_isNewReconciler: !1,
  },
  OT = {
    readContext: It,
    useCallback: function (e, t) {
      return (Zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: It,
    useEffect: f0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        wl(4194308, 4, qb.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return wl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return wl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Zt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = FT.bind(null, Se, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: d0,
    useDebugValue: kp,
    useDeferredValue: function (e) {
      return (Zt().memoizedState = e);
    },
    useTransition: function () {
      var e = d0(!1),
        t = e[0];
      return (e = IT.bind(null, e[1])), (Zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Se,
        o = Zt();
      if (ge) {
        if (n === void 0) throw Error(A(407));
        n = n();
      } else {
        if (((n = t()), Ie === null)) throw Error(A(349));
        eo & 30 || Vb(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        f0(Ub.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Vs(9, Wb.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Zt(),
        t = Ie.identifierPrefix;
      if (ge) {
        var n = Tn,
          r = Pn;
        (n = (r & ~(1 << (32 - Ht(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ns++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = zT++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  LT = {
    readContext: It,
    useCallback: Zb,
    useContext: It,
    useEffect: wp,
    useImperativeHandle: Qb,
    useInsertionEffect: Yb,
    useLayoutEffect: Xb,
    useMemo: Jb,
    useReducer: ad,
    useRef: Kb,
    useState: function () {
      return ad(Bs);
    },
    useDebugValue: kp,
    useDeferredValue: function (e) {
      var t = Ft();
      return eS(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = ad(Bs)[0],
        t = Ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Nb,
    useSyncExternalStore: Bb,
    useId: tS,
    unstable_isNewReconciler: !1,
  },
  DT = {
    readContext: It,
    useCallback: Zb,
    useContext: It,
    useEffect: wp,
    useImperativeHandle: Qb,
    useInsertionEffect: Yb,
    useLayoutEffect: Xb,
    useMemo: Jb,
    useReducer: ld,
    useRef: Kb,
    useState: function () {
      return ld(Bs);
    },
    useDebugValue: kp,
    useDeferredValue: function (e) {
      var t = Ft();
      return Re === null ? (t.memoizedState = e) : eS(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = ld(Bs)[0],
        t = Ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Nb,
    useSyncExternalStore: Bb,
    useId: tS,
    unstable_isNewReconciler: !1,
  };
function Nt(e, t) {
  if (e && e.defaultProps) {
    (t = xe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ff(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Uu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? uo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ze(),
      o = dr(e),
      i = $n(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = ur(e, i, o)),
      t !== null && (Gt(t, e, o, r), Sl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ze(),
      o = dr(e),
      i = $n(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = ur(e, i, o)),
      t !== null && (Gt(t, e, o, r), Sl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ze(),
      r = dr(e),
      o = $n(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = ur(e, o, r)),
      t !== null && (Gt(t, e, r, n), Sl(t, e, r));
  },
};
function h0(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Is(n, r) || !Is(o, i)
      : !0
  );
}
function iS(e, t, n) {
  var r = !1,
    o = gr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = It(i))
      : ((o = at(t) ? Zr : Ye.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? li(e, o) : gr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Uu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function p0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Uu.enqueueReplaceState(t, t.state, null);
}
function jf(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), mp(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = It(i))
    : ((i = at(t) ? Zr : Ye.current), (o.context = li(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ff(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Uu.enqueueReplaceState(o, o.state, null),
      au(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function fi(e, t) {
  try {
    var n = "",
      r = t;
    do (n += hP(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ud(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Of(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var NT = typeof WeakMap == "function" ? WeakMap : Map;
function sS(e, t, n) {
  (n = $n(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      fu || ((fu = !0), (Kf = r)), Of(e, t);
    }),
    n
  );
}
function aS(e, t, n) {
  (n = $n(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Of(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Of(e, t),
          typeof r != "function" &&
            (cr === null ? (cr = new Set([this])) : cr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function m0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new NT();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = e_.bind(null, e, t, n)), t.then(e, e));
}
function g0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function v0(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $n(-1, 1)), (t.tag = 2), ur(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var BT = Nn.ReactCurrentOwner,
  it = !1;
function qe(e, t, n, r) {
  t.child = e === null ? jb(t, null, n, r) : ci(t, e.child, n, r);
}
function y0(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Xo(t, o),
    (r = Sp(e, t, n, r, i, o)),
    (n = xp()),
    e !== null && !it
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ln(e, t, o))
      : (ge && n && lp(t), (t.flags |= 1), qe(e, t, r, o), t.child)
  );
}
function b0(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ap(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), lS(e, t, i, r, o))
      : ((e = Tl(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Is), n(s, r) && e.ref === t.ref)
    )
      return Ln(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = fr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function lS(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Is(i, r) && e.ref === t.ref)
      if (((it = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (it = !0);
      else return (t.lanes = e.lanes), Ln(e, t, o);
  }
  return Lf(e, t, n, r, o);
}
function uS(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(zo, ft),
        (ft |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(zo, ft),
          (ft |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ae(zo, ft),
        (ft |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ae(zo, ft),
      (ft |= r);
  return qe(e, t, o, n), t.child;
}
function cS(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Lf(e, t, n, r, o) {
  var i = at(n) ? Zr : Ye.current;
  return (
    (i = li(t, i)),
    Xo(t, o),
    (n = Sp(e, t, n, r, i, o)),
    (r = xp()),
    e !== null && !it
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ln(e, t, o))
      : (ge && r && lp(t), (t.flags |= 1), qe(e, t, n, o), t.child)
  );
}
function S0(e, t, n, r, o) {
  if (at(n)) {
    var i = !0;
    nu(t);
  } else i = !1;
  if ((Xo(t, o), t.stateNode === null))
    kl(e, t), iS(t, n, r), jf(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = It(u))
      : ((u = at(n) ? Zr : Ye.current), (u = li(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && p0(t, s, r, u)),
      (Qn = !1);
    var f = t.memoizedState;
    (s.state = f),
      au(t, r, s, o),
      (l = t.memoizedState),
      a !== r || f !== l || st.current || Qn
        ? (typeof c == "function" && (Ff(t, n, c, r), (l = t.memoizedState)),
          (a = Qn || h0(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Lb(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Nt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = It(l))
        : ((l = at(n) ? Zr : Ye.current), (l = li(t, l)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && p0(t, s, r, l)),
      (Qn = !1),
      (f = t.memoizedState),
      (s.state = f),
      au(t, r, s, o);
    var g = t.memoizedState;
    a !== d || f !== g || st.current || Qn
      ? (typeof p == "function" && (Ff(t, n, p, r), (g = t.memoizedState)),
        (u = Qn || h0(t, n, u, r, f, g, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Df(e, t, n, r, i, o);
}
function Df(e, t, n, r, o, i) {
  cS(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && i0(t, n, !1), Ln(e, t, i);
  (r = t.stateNode), (BT.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ci(t, e.child, null, i)), (t.child = ci(t, null, a, i)))
      : qe(e, t, a, i),
    (t.memoizedState = r.state),
    o && i0(t, n, !0),
    t.child
  );
}
function dS(e) {
  var t = e.stateNode;
  t.pendingContext
    ? o0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && o0(e, t.context, !1),
    gp(e, t.containerInfo);
}
function x0(e, t, n, r, o) {
  return ui(), cp(o), (t.flags |= 256), qe(e, t, n, r), t.child;
}
var Nf = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fS(e, t, n) {
  var r = t.pendingProps,
    o = ye.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ae(ye, o & 1),
    e === null)
  )
    return (
      zf(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = Ku(s, r, 0, null)),
              (e = Ur(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Bf(n)),
              (t.memoizedState = Nf),
              e)
            : Cp(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return VT(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = fr(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = fr(a, i)) : ((i = Ur(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Bf(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Nf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = fr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Cp(e, t) {
  return (
    (t = Ku({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ya(e, t, n, r) {
  return (
    r !== null && cp(r),
    ci(t, e.child, null, n),
    (e = Cp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function VT(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ud(Error(A(422)))), Ya(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ku({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Ur(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ci(t, e.child, null, s),
        (t.child.memoizedState = Bf(s)),
        (t.memoizedState = Nf),
        i);
  if (!(t.mode & 1)) return Ya(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(A(419))), (r = ud(i, r, void 0)), Ya(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), it || a)) {
    if (((r = Ie), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), On(e, o), Gt(r, e, o, -1));
    }
    return Rp(), (r = ud(Error(A(421)))), Ya(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = t_.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ht = lr(o.nextSibling)),
      (pt = t),
      (ge = !0),
      (Vt = null),
      e !== null &&
        ((Et[$t++] = Pn),
        (Et[$t++] = Tn),
        (Et[$t++] = Jr),
        (Pn = e.id),
        (Tn = e.overflow),
        (Jr = t)),
      (t = Cp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function w0(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), If(e.return, t, n);
}
function cd(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function hS(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((qe(e, t, r.children, n), (r = ye.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && w0(e, n, t);
        else if (e.tag === 19) w0(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ae(ye, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && lu(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          cd(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && lu(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        cd(t, !0, n, null, i);
        break;
      case "together":
        cd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function kl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ln(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (to |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (
      e = t.child, n = fr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = fr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function WT(e, t, n) {
  switch (t.tag) {
    case 3:
      dS(t), ui();
      break;
    case 5:
      Db(t);
      break;
    case 1:
      at(t.type) && nu(t);
      break;
    case 4:
      gp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ae(iu, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(ye, ye.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? fS(e, t, n)
          : (ae(ye, ye.current & 1),
            (e = Ln(e, t, n)),
            e !== null ? e.sibling : null);
      ae(ye, ye.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hS(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ae(ye, ye.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), uS(e, t, n);
  }
  return Ln(e, t, n);
}
var pS, Vf, mS, gS;
pS = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vf = function () {};
mS = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Dr(un.current);
    var i = null;
    switch (n) {
      case "input":
        (o = cf(e, o)), (r = cf(e, r)), (i = []);
        break;
      case "select":
        (o = xe({}, o, { value: void 0 })),
          (r = xe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = hf(e, o)), (r = hf(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = eu);
    }
    mf(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (_s.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (_s.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ue("scroll", e),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
gS = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vi(e, t) {
  if (!ge)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function UT(e, t, n) {
  var r = t.pendingProps;
  switch ((up(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ve(t), null;
    case 1:
      return at(t.type) && tu(), Ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        di(),
        de(st),
        de(Ye),
        yp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ga(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Vt !== null && (qf(Vt), (Vt = null)))),
        Vf(e, t),
        Ve(t),
        null
      );
    case 5:
      vp(t);
      var o = Dr(Ds.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        mS(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ve(t), null;
        }
        if (((e = Dr(un.current)), Ga(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[rn] = t), (r[Os] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ue("cancel", r), ue("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ue("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Ji.length; o++) ue(Ji[o], r);
              break;
            case "source":
              ue("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ue("error", r), ue("load", r);
              break;
            case "details":
              ue("toggle", r);
              break;
            case "input":
              Ag(r, i), ue("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ue("invalid", r);
              break;
            case "textarea":
              zg(r, i), ue("invalid", r);
          }
          mf(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ha(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Ha(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : _s.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ue("scroll", r);
            }
          switch (n) {
            case "input":
              Oa(r), Mg(r, i, !0);
              break;
            case "textarea":
              Oa(r), Ig(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = eu);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = U1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[rn] = t),
            (e[Os] = r),
            pS(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = gf(n, r)), n)) {
              case "dialog":
                ue("cancel", e), ue("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ue("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ji.length; o++) ue(Ji[o], e);
                o = r;
                break;
              case "source":
                ue("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ue("error", e), ue("load", e), (o = r);
                break;
              case "details":
                ue("toggle", e), (o = r);
                break;
              case "input":
                Ag(e, r), (o = cf(e, r)), ue("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = xe({}, r, { value: void 0 })),
                  ue("invalid", e);
                break;
              case "textarea":
                zg(e, r), (o = hf(e, r)), ue("invalid", e);
                break;
              default:
                o = r;
            }
            mf(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? K1(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && H1(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Es(e, l)
                    : typeof l == "number" && Es(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (_s.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && ue("scroll", e)
                      : l != null && Yh(e, i, l, s));
              }
            switch (n) {
              case "input":
                Oa(e), Mg(e, r, !1);
                break;
              case "textarea":
                Oa(e), Ig(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ho(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ho(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = eu);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) gS(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (((n = Dr(Ds.current)), Dr(un.current), Ga(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rn] = t),
            (i = r.nodeValue !== n) && ((e = pt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ha(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ha(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rn] = t),
            (t.stateNode = r);
      }
      return Ve(t), null;
    case 13:
      if (
        (de(ye),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ge && ht !== null && t.mode & 1 && !(t.flags & 128))
          Ib(), ui(), (t.flags |= 98560), (i = !1);
        else if (((i = Ga(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(A(317));
            i[rn] = t;
          } else
            ui(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ve(t), (i = !1);
        } else Vt !== null && (qf(Vt), (Vt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ye.current & 1 ? Ae === 0 && (Ae = 3) : Rp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ve(t),
          null);
    case 4:
      return (
        di(), Vf(e, t), e === null && Fs(t.stateNode.containerInfo), Ve(t), null
      );
    case 10:
      return hp(t.type._context), Ve(t), null;
    case 17:
      return at(t.type) && tu(), Ve(t), null;
    case 19:
      if ((de(ye), (i = t.memoizedState), i === null)) return Ve(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Vi(i, !1);
        else {
          if (Ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = lu(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Vi(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ae(ye, (ye.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Ce() > hi &&
            ((t.flags |= 128), (r = !0), Vi(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = lu(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vi(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ge)
            )
              return Ve(t), null;
          } else
            2 * Ce() - i.renderingStartTime > hi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vi(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = ye.current),
          ae(ye, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ve(t), null);
    case 22:
    case 23:
      return (
        $p(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ft & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function HT(e, t) {
  switch ((up(t), t.tag)) {
    case 1:
      return (
        at(t.type) && tu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        di(),
        de(st),
        de(Ye),
        yp(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vp(t), null;
    case 13:
      if (
        (de(ye), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(A(340));
        ui();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return de(ye), null;
    case 4:
      return di(), null;
    case 10:
      return hp(t.type._context), null;
    case 22:
    case 23:
      return $p(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xa = !1,
  He = !1,
  GT = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Mo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function Wf(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var k0 = !1;
function KT(e, t) {
  if (((Tf = Ql), (e = xb()), ap(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (o !== 0 && d.nodeType !== 3) || (a = s + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (f = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === o && (a = s),
                f === i && ++c === r && (l = s),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_f = { focusedElem: e, selectionRange: n }, Ql = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    x = g.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Nt(t.type, v),
                      x
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(A(163));
            }
        } catch (k) {
          we(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (g = k0), (k0 = !1), g;
}
function ms(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Wf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Hu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Uf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function vS(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), vS(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rn], delete t[Os], delete t[Rf], delete t[$T], delete t[RT])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function C0(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yS(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = eu));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hf(e, t, n), e = e.sibling; e !== null; ) Hf(e, t, n), (e = e.sibling);
}
function Gf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gf(e, t, n), e = e.sibling; e !== null; ) Gf(e, t, n), (e = e.sibling);
}
var je = null,
  Bt = !1;
function Gn(e, t, n) {
  for (n = n.child; n !== null; ) bS(e, t, n), (n = n.sibling);
}
function bS(e, t, n) {
  if (ln && typeof ln.onCommitFiberUnmount == "function")
    try {
      ln.onCommitFiberUnmount(Ou, n);
    } catch {}
  switch (n.tag) {
    case 5:
      He || Mo(n, t);
    case 6:
      var r = je,
        o = Bt;
      (je = null),
        Gn(e, t, n),
        (je = r),
        (Bt = o),
        je !== null &&
          (Bt
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : je.removeChild(n.stateNode));
      break;
    case 18:
      je !== null &&
        (Bt
          ? ((e = je),
            (n = n.stateNode),
            e.nodeType === 8
              ? rd(e.parentNode, n)
              : e.nodeType === 1 && rd(e, n),
            Ms(e))
          : rd(je, n.stateNode));
      break;
    case 4:
      (r = je),
        (o = Bt),
        (je = n.stateNode.containerInfo),
        (Bt = !0),
        Gn(e, t, n),
        (je = r),
        (Bt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !He &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Wf(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Gn(e, t, n);
      break;
    case 1:
      if (
        !He &&
        (Mo(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          we(n, t, a);
        }
      Gn(e, t, n);
      break;
    case 21:
      Gn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((He = (r = He) || n.memoizedState !== null), Gn(e, t, n), (He = r))
        : Gn(e, t, n);
      break;
    default:
      Gn(e, t, n);
  }
}
function P0(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new GT()),
      t.forEach(function (r) {
        var o = n_.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Lt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (je = a.stateNode), (Bt = !1);
              break e;
            case 3:
              (je = a.stateNode.containerInfo), (Bt = !0);
              break e;
            case 4:
              (je = a.stateNode.containerInfo), (Bt = !0);
              break e;
          }
          a = a.return;
        }
        if (je === null) throw Error(A(160));
        bS(i, s, o), (je = null), (Bt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        we(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) SS(t, e), (t = t.sibling);
}
function SS(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Lt(t, e), Xt(e), r & 4)) {
        try {
          ms(3, e, e.return), Hu(3, e);
        } catch (v) {
          we(e, e.return, v);
        }
        try {
          ms(5, e, e.return);
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 1:
      Lt(t, e), Xt(e), r & 512 && n !== null && Mo(n, n.return);
      break;
    case 5:
      if (
        (Lt(t, e),
        Xt(e),
        r & 512 && n !== null && Mo(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Es(o, "");
        } catch (v) {
          we(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && V1(o, i),
              gf(a, s);
            var u = gf(a, i);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? K1(o, d)
                : c === "dangerouslySetInnerHTML"
                ? H1(o, d)
                : c === "children"
                ? Es(o, d)
                : Yh(o, c, d, u);
            }
            switch (a) {
              case "input":
                df(o, i);
                break;
              case "textarea":
                W1(o, i);
                break;
              case "select":
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var p = i.value;
                p != null
                  ? Ho(o, !!i.multiple, p, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ho(o, !!i.multiple, i.defaultValue, !0)
                      : Ho(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Os] = i;
          } catch (v) {
            we(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Lt(t, e), Xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(A(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          we(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Lt(t, e), Xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ms(t.containerInfo);
        } catch (v) {
          we(e, e.return, v);
        }
      break;
    case 4:
      Lt(t, e), Xt(e);
      break;
    case 13:
      Lt(t, e),
        Xt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (_p = Ce())),
        r & 4 && P0(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((He = (u = He) || c), Lt(t, e), (He = u)) : Lt(t, e),
        Xt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (d = I = c; I !== null; ) {
              switch (((f = I), (p = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ms(4, f, f.return);
                  break;
                case 1:
                  Mo(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      we(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Mo(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    _0(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = f), (I = p)) : _0(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = G1("display", s)));
              } catch (v) {
                we(e, e.return, v);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (v) {
                we(e, e.return, v);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Lt(t, e), Xt(e), r & 4 && P0(e);
      break;
    case 21:
      break;
    default:
      Lt(t, e), Xt(e);
  }
}
function Xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yS(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Es(o, ""), (r.flags &= -33));
          var i = C0(e);
          Gf(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = C0(e);
          Hf(e, a, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (l) {
      we(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function YT(e, t, n) {
  (I = e), xS(e);
}
function xS(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Xa;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || He;
        a = Xa;
        var u = He;
        if (((Xa = s), (He = l) && !u))
          for (I = o; I !== null; )
            (s = I),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? E0(o)
                : l !== null
                ? ((l.return = s), (I = l))
                : E0(o);
        for (; i !== null; ) (I = i), xS(i), (i = i.sibling);
        (I = o), (Xa = a), (He = u);
      }
      T0(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : T0(e);
  }
}
function T0(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              He || Hu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !He)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Nt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && c0(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                c0(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ms(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
        He || (t.flags & 512 && Uf(t));
      } catch (f) {
        we(t, t.return, f);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function _0(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function E0(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hu(4, t);
          } catch (l) {
            we(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              we(t, o, l);
            }
          }
          var i = t.return;
          try {
            Uf(t);
          } catch (l) {
            we(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Uf(t);
          } catch (l) {
            we(t, s, l);
          }
      }
    } catch (l) {
      we(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (I = a);
      break;
    }
    I = t.return;
  }
}
var XT = Math.ceil,
  du = Nn.ReactCurrentDispatcher,
  Pp = Nn.ReactCurrentOwner,
  Mt = Nn.ReactCurrentBatchConfig,
  G = 0,
  Ie = null,
  _e = null,
  De = 0,
  ft = 0,
  zo = xr(0),
  Ae = 0,
  Ws = null,
  to = 0,
  Gu = 0,
  Tp = 0,
  gs = null,
  rt = null,
  _p = 0,
  hi = 1 / 0,
  Sn = null,
  fu = !1,
  Kf = null,
  cr = null,
  qa = !1,
  rr = null,
  hu = 0,
  vs = 0,
  Yf = null,
  Cl = -1,
  Pl = 0;
function Ze() {
  return G & 6 ? Ce() : Cl !== -1 ? Cl : (Cl = Ce());
}
function dr(e) {
  return e.mode & 1
    ? G & 2 && De !== 0
      ? De & -De
      : MT.transition !== null
      ? (Pl === 0 && (Pl = ib()), Pl)
      : ((e = ee),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fb(e.type))),
        e)
    : 1;
}
function Gt(e, t, n, r) {
  if (50 < vs) throw ((vs = 0), (Yf = null), Error(A(185)));
  da(e, n, r),
    (!(G & 2) || e !== Ie) &&
      (e === Ie && (!(G & 2) && (Gu |= n), Ae === 4 && er(e, De)),
      lt(e, r),
      n === 1 && G === 0 && !(t.mode & 1) && ((hi = Ce() + 500), Vu && wr()));
}
function lt(e, t) {
  var n = e.callbackNode;
  MP(e, t);
  var r = ql(e, e === Ie ? De : 0);
  if (r === 0)
    n !== null && Og(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Og(n), t === 1))
      e.tag === 0 ? AT($0.bind(null, e)) : Ab($0.bind(null, e)),
        _T(function () {
          !(G & 6) && wr();
        }),
        (n = null);
    else {
      switch (sb(r)) {
        case 1:
          n = Jh;
          break;
        case 4:
          n = rb;
          break;
        case 16:
          n = Xl;
          break;
        case 536870912:
          n = ob;
          break;
        default:
          n = Xl;
      }
      n = $S(n, wS.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wS(e, t) {
  if (((Cl = -1), (Pl = 0), G & 6)) throw Error(A(327));
  var n = e.callbackNode;
  if (qo() && e.callbackNode !== n) return null;
  var r = ql(e, e === Ie ? De : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pu(e, r);
  else {
    t = r;
    var o = G;
    G |= 2;
    var i = CS();
    (Ie !== e || De !== t) && ((Sn = null), (hi = Ce() + 500), Wr(e, t));
    do
      try {
        ZT();
        break;
      } catch (a) {
        kS(e, a);
      }
    while (!0);
    fp(),
      (du.current = i),
      (G = o),
      _e !== null ? (t = 0) : ((Ie = null), (De = 0), (t = Ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = xf(e)), o !== 0 && ((r = o), (t = Xf(e, o)))), t === 1)
    )
      throw ((n = Ws), Wr(e, 0), er(e, r), lt(e, Ce()), n);
    if (t === 6) er(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !qT(o) &&
          ((t = pu(e, r)),
          t === 2 && ((i = xf(e)), i !== 0 && ((r = i), (t = Xf(e, i)))),
          t === 1))
      )
        throw ((n = Ws), Wr(e, 0), er(e, r), lt(e, Ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          zr(e, rt, Sn);
          break;
        case 3:
          if (
            (er(e, r), (r & 130023424) === r && ((t = _p + 500 - Ce()), 10 < t))
          ) {
            if (ql(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ze(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = $f(zr.bind(null, e, rt, Sn), t);
            break;
          }
          zr(e, rt, Sn);
          break;
        case 4:
          if ((er(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Ht(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * XT(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = $f(zr.bind(null, e, rt, Sn), r);
            break;
          }
          zr(e, rt, Sn);
          break;
        case 5:
          zr(e, rt, Sn);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return lt(e, Ce()), e.callbackNode === n ? wS.bind(null, e) : null;
}
function Xf(e, t) {
  var n = gs;
  return (
    e.current.memoizedState.isDehydrated && (Wr(e, t).flags |= 256),
    (e = pu(e, t)),
    e !== 2 && ((t = rt), (rt = n), t !== null && qf(t)),
    e
  );
}
function qf(e) {
  rt === null ? (rt = e) : rt.push.apply(rt, e);
}
function qT(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Kt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function er(e, t) {
  for (
    t &= ~Tp,
      t &= ~Gu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ht(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function $0(e) {
  if (G & 6) throw Error(A(327));
  qo();
  var t = ql(e, 0);
  if (!(t & 1)) return lt(e, Ce()), null;
  var n = pu(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xf(e);
    r !== 0 && ((t = r), (n = Xf(e, r)));
  }
  if (n === 1) throw ((n = Ws), Wr(e, 0), er(e, t), lt(e, Ce()), n);
  if (n === 6) throw Error(A(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zr(e, rt, Sn),
    lt(e, Ce()),
    null
  );
}
function Ep(e, t) {
  var n = G;
  G |= 1;
  try {
    return e(t);
  } finally {
    (G = n), G === 0 && ((hi = Ce() + 500), Vu && wr());
  }
}
function no(e) {
  rr !== null && rr.tag === 0 && !(G & 6) && qo();
  var t = G;
  G |= 1;
  var n = Mt.transition,
    r = ee;
  try {
    if (((Mt.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (Mt.transition = n), (G = t), !(G & 6) && wr();
  }
}
function $p() {
  (ft = zo.current), de(zo);
}
function Wr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), TT(n)), _e !== null))
    for (n = _e.return; n !== null; ) {
      var r = n;
      switch ((up(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && tu();
          break;
        case 3:
          di(), de(st), de(Ye), yp();
          break;
        case 5:
          vp(r);
          break;
        case 4:
          di();
          break;
        case 13:
          de(ye);
          break;
        case 19:
          de(ye);
          break;
        case 10:
          hp(r.type._context);
          break;
        case 22:
        case 23:
          $p();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (_e = e = fr(e.current, null)),
    (De = ft = t),
    (Ae = 0),
    (Ws = null),
    (Tp = Gu = to = 0),
    (rt = gs = null),
    Lr !== null)
  ) {
    for (t = 0; t < Lr.length; t++)
      if (((n = Lr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Lr = null;
  }
  return e;
}
function kS(e, t) {
  do {
    var n = _e;
    try {
      if ((fp(), (xl.current = cu), uu)) {
        for (var r = Se.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        uu = !1;
      }
      if (
        ((eo = 0),
        (ze = Re = Se = null),
        (ps = !1),
        (Ns = 0),
        (Pp.current = null),
        n === null || n.return === null)
      ) {
        (Ae = 1), (Ws = t), (_e = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = De),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = g0(s);
          if (p !== null) {
            (p.flags &= -257),
              v0(p, s, a, i, t),
              p.mode & 1 && m0(i, u, t),
              (t = p),
              (l = u);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              m0(i, u, t), Rp();
              break e;
            }
            l = Error(A(426));
          }
        } else if (ge && a.mode & 1) {
          var x = g0(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              v0(x, s, a, i, t),
              cp(fi(l, a));
            break e;
          }
        }
        (i = l = fi(l, a)),
          Ae !== 4 && (Ae = 2),
          gs === null ? (gs = [i]) : gs.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = sS(i, l, t);
              u0(i, m);
              break e;
            case 1:
              a = l;
              var h = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (cr === null || !cr.has(y))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var k = aS(i, a, t);
                u0(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      TS(n);
    } catch (T) {
      (t = T), _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function CS() {
  var e = du.current;
  return (du.current = cu), e === null ? cu : e;
}
function Rp() {
  (Ae === 0 || Ae === 3 || Ae === 2) && (Ae = 4),
    Ie === null || (!(to & 268435455) && !(Gu & 268435455)) || er(Ie, De);
}
function pu(e, t) {
  var n = G;
  G |= 2;
  var r = CS();
  (Ie !== e || De !== t) && ((Sn = null), Wr(e, t));
  do
    try {
      QT();
      break;
    } catch (o) {
      kS(e, o);
    }
  while (!0);
  if ((fp(), (G = n), (du.current = r), _e !== null)) throw Error(A(261));
  return (Ie = null), (De = 0), Ae;
}
function QT() {
  for (; _e !== null; ) PS(_e);
}
function ZT() {
  for (; _e !== null && !kP(); ) PS(_e);
}
function PS(e) {
  var t = ES(e.alternate, e, ft);
  (e.memoizedProps = e.pendingProps),
    t === null ? TS(e) : (_e = t),
    (Pp.current = null);
}
function TS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = HT(n, t)), n !== null)) {
        (n.flags &= 32767), (_e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ae = 6), (_e = null);
        return;
      }
    } else if (((n = UT(n, t, ft)), n !== null)) {
      _e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  Ae === 0 && (Ae = 5);
}
function zr(e, t, n) {
  var r = ee,
    o = Mt.transition;
  try {
    (Mt.transition = null), (ee = 1), JT(e, t, n, r);
  } finally {
    (Mt.transition = o), (ee = r);
  }
  return null;
}
function JT(e, t, n, r) {
  do qo();
  while (rr !== null);
  if (G & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(A(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (zP(e, i),
    e === Ie && ((_e = Ie = null), (De = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qa ||
      ((qa = !0),
      $S(Xl, function () {
        return qo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Mt.transition), (Mt.transition = null);
    var s = ee;
    ee = 1;
    var a = G;
    (G |= 4),
      (Pp.current = null),
      KT(e, n),
      SS(n, e),
      bT(_f),
      (Ql = !!Tf),
      (_f = Tf = null),
      (e.current = n),
      YT(n),
      CP(),
      (G = a),
      (ee = s),
      (Mt.transition = i);
  } else e.current = n;
  if (
    (qa && ((qa = !1), (rr = e), (hu = o)),
    (i = e.pendingLanes),
    i === 0 && (cr = null),
    _P(n.stateNode),
    lt(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (fu) throw ((fu = !1), (e = Kf), (Kf = null), e);
  return (
    hu & 1 && e.tag !== 0 && qo(),
    (i = e.pendingLanes),
    i & 1 ? (e === Yf ? vs++ : ((vs = 0), (Yf = e))) : (vs = 0),
    wr(),
    null
  );
}
function qo() {
  if (rr !== null) {
    var e = sb(hu),
      t = Mt.transition,
      n = ee;
    try {
      if (((Mt.transition = null), (ee = 16 > e ? 16 : e), rr === null))
        var r = !1;
      else {
        if (((e = rr), (rr = null), (hu = 0), G & 6)) throw Error(A(331));
        var o = G;
        for (G |= 4, I = e.current; I !== null; ) {
          var i = I,
            s = i.child;
          if (I.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ms(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (I = d);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var f = c.sibling,
                        p = c.return;
                      if ((vS(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = p), (I = f);
                        break;
                      }
                      I = p;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (I = s);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ms(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (I = m);
                break e;
              }
              I = i.return;
            }
        }
        var h = e.current;
        for (I = h; I !== null; ) {
          s = I;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (I = y);
          else
            e: for (s = h; I !== null; ) {
              if (((a = I), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hu(9, a);
                  }
                } catch (T) {
                  we(a, a.return, T);
                }
              if (a === s) {
                I = null;
                break e;
              }
              var k = a.sibling;
              if (k !== null) {
                (k.return = a.return), (I = k);
                break e;
              }
              I = a.return;
            }
        }
        if (
          ((G = o), wr(), ln && typeof ln.onPostCommitFiberRoot == "function")
        )
          try {
            ln.onPostCommitFiberRoot(Ou, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (Mt.transition = t);
    }
  }
  return !1;
}
function R0(e, t, n) {
  (t = fi(n, t)),
    (t = sS(e, t, 1)),
    (e = ur(e, t, 1)),
    (t = Ze()),
    e !== null && (da(e, 1, t), lt(e, t));
}
function we(e, t, n) {
  if (e.tag === 3) R0(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        R0(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (cr === null || !cr.has(r)))
        ) {
          (e = fi(n, e)),
            (e = aS(t, e, 1)),
            (t = ur(t, e, 1)),
            (e = Ze()),
            t !== null && (da(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function e_(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ze()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      (De & n) === n &&
      (Ae === 4 || (Ae === 3 && (De & 130023424) === De && 500 > Ce() - _p)
        ? Wr(e, 0)
        : (Tp |= n)),
    lt(e, t);
}
function _S(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Na), (Na <<= 1), !(Na & 130023424) && (Na = 4194304))
      : (t = 1));
  var n = Ze();
  (e = On(e, t)), e !== null && (da(e, t, n), lt(e, n));
}
function t_(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), _S(e, n);
}
function n_(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), _S(e, n);
}
var ES;
ES = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || st.current) it = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (it = !1), WT(e, t, n);
      it = !!(e.flags & 131072);
    }
  else (it = !1), ge && t.flags & 1048576 && Mb(t, ou, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      kl(e, t), (e = t.pendingProps);
      var o = li(t, Ye.current);
      Xo(t, n), (o = Sp(null, t, r, e, o, n));
      var i = xp();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            at(r) ? ((i = !0), nu(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            mp(t),
            (o.updater = Uu),
            (t.stateNode = o),
            (o._reactInternals = t),
            jf(t, r, e, n),
            (t = Df(null, t, r, !0, i, n)))
          : ((t.tag = 0), ge && i && lp(t), qe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (kl(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = o_(r)),
          (e = Nt(r, e)),
          o)
        ) {
          case 0:
            t = Lf(null, t, r, e, n);
            break e;
          case 1:
            t = S0(null, t, r, e, n);
            break e;
          case 11:
            t = y0(null, t, r, e, n);
            break e;
          case 14:
            t = b0(null, t, r, Nt(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        Lf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        S0(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((dS(t), e === null)) throw Error(A(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Lb(e, t),
          au(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = fi(Error(A(423)), t)), (t = x0(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = fi(Error(A(424)), t)), (t = x0(e, t, r, n, o));
            break e;
          } else
            for (
              ht = lr(t.stateNode.containerInfo.firstChild),
                pt = t,
                ge = !0,
                Vt = null,
                n = jb(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ui(), r === o)) {
            t = Ln(e, t, n);
            break e;
          }
          qe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Db(t),
        e === null && zf(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Ef(r, o) ? (s = null) : i !== null && Ef(r, i) && (t.flags |= 32),
        cS(e, t),
        qe(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && zf(t), null;
    case 13:
      return fS(e, t, n);
    case 4:
      return (
        gp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ci(t, null, r, n)) : qe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        y0(e, t, r, o, n)
      );
    case 7:
      return qe(e, t, t.pendingProps, n), t.child;
    case 8:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ae(iu, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Kt(i.value, s)) {
            if (i.children === o.children && !st.current) {
              t = Ln(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = $n(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= n),
                      (l = i.alternate),
                      l !== null && (l.lanes |= n),
                      If(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(A(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  If(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        qe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Xo(t, n),
        (o = It(o)),
        (r = r(o)),
        (t.flags |= 1),
        qe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Nt(r, t.pendingProps)),
        (o = Nt(r.type, o)),
        b0(e, t, r, o, n)
      );
    case 15:
      return lS(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Nt(r, o)),
        kl(e, t),
        (t.tag = 1),
        at(r) ? ((e = !0), nu(t)) : (e = !1),
        Xo(t, n),
        iS(t, r, o),
        jf(t, r, o, n),
        Df(null, t, r, !0, e, n)
      );
    case 19:
      return hS(e, t, n);
    case 22:
      return uS(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function $S(e, t) {
  return nb(e, t);
}
function r_(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Rt(e, t, n, r) {
  return new r_(e, t, n, r);
}
function Ap(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function o_(e) {
  if (typeof e == "function") return Ap(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qh)) return 11;
    if (e === Qh) return 14;
  }
  return 2;
}
function fr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Rt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Tl(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ap(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ko:
        return Ur(n.children, o, i, t);
      case Xh:
        (s = 8), (o |= 8);
        break;
      case sf:
        return (
          (e = Rt(12, n, t, o | 2)), (e.elementType = sf), (e.lanes = i), e
        );
      case af:
        return (e = Rt(13, n, t, o)), (e.elementType = af), (e.lanes = i), e;
      case lf:
        return (e = Rt(19, n, t, o)), (e.elementType = lf), (e.lanes = i), e;
      case D1:
        return Ku(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case O1:
              s = 10;
              break e;
            case L1:
              s = 9;
              break e;
            case qh:
              s = 11;
              break e;
            case Qh:
              s = 14;
              break e;
            case qn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(A(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Rt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ur(e, t, n, r) {
  return (e = Rt(7, e, r, t)), (e.lanes = n), e;
}
function Ku(e, t, n, r) {
  return (
    (e = Rt(22, e, r, t)),
    (e.elementType = D1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function dd(e, t, n) {
  return (e = Rt(6, e, null, t)), (e.lanes = n), e;
}
function fd(e, t, n) {
  return (
    (t = Rt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function i_(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gc(0)),
    (this.expirationTimes = Gc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Mp(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new i_(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Rt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    mp(i),
    e
  );
}
function s_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wo,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function RS(e) {
  if (!e) return gr;
  e = e._reactInternals;
  e: {
    if (uo(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (at(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (at(n)) return Rb(e, n, t);
  }
  return t;
}
function AS(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Mp(n, r, !0, e, o, i, s, a, l)),
    (e.context = RS(null)),
    (n = e.current),
    (r = Ze()),
    (o = dr(n)),
    (i = $n(r, o)),
    (i.callback = t ?? null),
    ur(n, i, o),
    (e.current.lanes = o),
    da(e, o, r),
    lt(e, r),
    e
  );
}
function Yu(e, t, n, r) {
  var o = t.current,
    i = Ze(),
    s = dr(o);
  return (
    (n = RS(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $n(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ur(o, t, s)),
    e !== null && (Gt(e, o, s, i), Sl(e, o, s)),
    s
  );
}
function mu(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function A0(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zp(e, t) {
  A0(e, t), (e = e.alternate) && A0(e, t);
}
function a_() {
  return null;
}
var MS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ip(e) {
  this._internalRoot = e;
}
Xu.prototype.render = Ip.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  Yu(e, t, null, null);
};
Xu.prototype.unmount = Ip.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    no(function () {
      Yu(null, e, null, null);
    }),
      (t[jn] = null);
  }
};
function Xu(e) {
  this._internalRoot = e;
}
Xu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ub();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++);
    Jn.splice(n, 0, e), n === 0 && db(e);
  }
};
function Fp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function M0() {}
function l_(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = mu(s);
        i.call(u);
      };
    }
    var s = AS(t, r, e, 0, null, !1, !1, "", M0);
    return (
      (e._reactRootContainer = s),
      (e[jn] = s.current),
      Fs(e.nodeType === 8 ? e.parentNode : e),
      no(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = mu(l);
      a.call(u);
    };
  }
  var l = Mp(e, 0, !1, null, null, !1, !1, "", M0);
  return (
    (e._reactRootContainer = l),
    (e[jn] = l.current),
    Fs(e.nodeType === 8 ? e.parentNode : e),
    no(function () {
      Yu(t, l, n, r);
    }),
    l
  );
}
function Qu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = mu(s);
        a.call(l);
      };
    }
    Yu(t, s, e, o);
  } else s = l_(n, t, e, o, r);
  return mu(s);
}
ab = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zi(t.pendingLanes);
        n !== 0 &&
          (ep(t, n | 1), lt(t, Ce()), !(G & 6) && ((hi = Ce() + 500), wr()));
      }
      break;
    case 13:
      no(function () {
        var r = On(e, 1);
        if (r !== null) {
          var o = Ze();
          Gt(r, e, 1, o);
        }
      }),
        zp(e, 1);
  }
};
tp = function (e) {
  if (e.tag === 13) {
    var t = On(e, 134217728);
    if (t !== null) {
      var n = Ze();
      Gt(t, e, 134217728, n);
    }
    zp(e, 134217728);
  }
};
lb = function (e) {
  if (e.tag === 13) {
    var t = dr(e),
      n = On(e, t);
    if (n !== null) {
      var r = Ze();
      Gt(n, e, t, r);
    }
    zp(e, t);
  }
};
ub = function () {
  return ee;
};
cb = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
yf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((df(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Bu(r);
            if (!o) throw Error(A(90));
            B1(r), df(r, o);
          }
        }
      }
      break;
    case "textarea":
      W1(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ho(e, !!n.multiple, t, !1);
  }
};
q1 = Ep;
Q1 = no;
var u_ = { usingClientEntryPoint: !1, Events: [ha, _o, Bu, Y1, X1, Ep] },
  Wi = {
    findFiberByHostInstance: Or,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  c_ = {
    bundleType: Wi.bundleType,
    version: Wi.version,
    rendererPackageName: Wi.rendererPackageName,
    rendererConfig: Wi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = eb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Wi.findFiberByHostInstance || a_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Qa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qa.isDisabled && Qa.supportsFiber)
    try {
      (Ou = Qa.inject(c_)), (ln = Qa);
    } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u_;
bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fp(t)) throw Error(A(200));
  return s_(e, t, null, n);
};
bt.createRoot = function (e, t) {
  if (!Fp(e)) throw Error(A(299));
  var n = !1,
    r = "",
    o = MS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Mp(e, 1, !1, null, null, n, !1, r, o)),
    (e[jn] = t.current),
    Fs(e.nodeType === 8 ? e.parentNode : e),
    new Ip(t)
  );
};
bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(A(188))
      : ((e = Object.keys(e).join(",")), Error(A(268, e)));
  return (e = eb(t)), (e = e === null ? null : e.stateNode), e;
};
bt.flushSync = function (e) {
  return no(e);
};
bt.hydrate = function (e, t, n) {
  if (!qu(t)) throw Error(A(200));
  return Qu(null, e, t, !0, n);
};
bt.hydrateRoot = function (e, t, n) {
  if (!Fp(e)) throw Error(A(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = MS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = AS(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[jn] = t.current),
    Fs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Xu(t);
};
bt.render = function (e, t, n) {
  if (!qu(t)) throw Error(A(200));
  return Qu(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function (e) {
  if (!qu(e)) throw Error(A(40));
  return e._reactRootContainer
    ? (no(function () {
        Qu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[jn] = null);
        });
      }),
      !0)
    : !1;
};
bt.unstable_batchedUpdates = Ep;
bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qu(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Qu(e, t, n, !1, r);
};
bt.version = "18.3.1-next-f1338f8080-20240426";
function zS() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zS);
    } catch (e) {
      console.error(e);
    }
}
zS(), (z1.exports = bt);
var jp = z1.exports,
  z0 = jp;
(rf.createRoot = z0.createRoot), (rf.hydrateRoot = z0.hydrateRoot);
function d_(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "nodeType" in e &&
    e.nodeType === Node.ELEMENT_NODE
  );
}
function f_() {
  return !!(globalThis != null && globalThis.document);
}
function IS(e) {
  return e.parentElement && IS(e.parentElement) ? !0 : e.hidden;
}
function h_(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function p_(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function m_(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const n = { ...e };
  for (const r of t)
    if (r != null)
      for (const o in r)
        Object.prototype.hasOwnProperty.call(r, o) &&
          (o in n && delete n[o], (n[o] = r[o]));
  return n;
}
const Jt = (e) => (e ? "" : void 0),
  hd = (e) => (e ? !0 : void 0);
function g_(e) {
  return Array.isArray(e);
}
function zt(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !g_(e);
}
function v_(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function y_(e) {
  const t = parseFloat(e.toString()),
    n = e.toString().replace(String(t), "");
  return { unitless: !n, value: t, unit: n };
}
function Qf(e) {
  if (e == null) return e;
  const { unitless: t } = y_(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
const FS = (e, t) => (parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1),
  Op = (e) => Object.fromEntries(Object.entries(e).sort(FS));
function I0(e) {
  const t = Op(e);
  return Object.assign(Object.values(t), t);
}
function b_(e) {
  const t = Object.keys(Op(e));
  return new Set(t);
}
function F0(e) {
  if (!e) return e;
  e = Qf(e) ?? e;
  const t = -0.02;
  return typeof e == "number"
    ? `${e + t}`
    : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + t}`);
}
function es(e, t) {
  const n = ["@media screen"];
  return (
    e && n.push("and", `(min-width: ${Qf(e)})`),
    t && n.push("and", `(max-width: ${Qf(t)})`),
    n.join(" ")
  );
}
function S_(e) {
  if (!e) return null;
  e.base = e.base ?? "0px";
  const t = I0(e),
    n = Object.entries(e)
      .sort(FS)
      .map(([i, s], a, l) => {
        let [, u] = l[a + 1] ?? [];
        return (
          (u = parseFloat(u) > 0 ? F0(u) : void 0),
          {
            _minW: F0(s),
            breakpoint: i,
            minW: s,
            maxW: u,
            maxWQuery: es(null, u),
            minWQuery: es(s),
            minMaxQuery: es(s, u),
          }
        );
      }),
    r = b_(e),
    o = Array.from(r.values());
  return {
    keys: r,
    normalized: t,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((a) => r.has(a));
    },
    asObject: Op(e),
    asArray: I0(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [null, ...t.map((i) => es(i)).slice(1)],
    toArrayValue(i) {
      if (!zt(i)) throw new Error("toArrayValue: value must be an object");
      const s = o.map((a) => i[a] ?? null);
      for (; v_(s) === null; ) s.pop();
      return s;
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return i.reduce((s, a, l) => {
        const u = o[l];
        return u != null && a != null && (s[u] = a), s;
      }, {});
    },
  };
}
function Nr(...e) {
  return function (n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function x_(e) {
  return b.Children.toArray(e).filter((t) => b.isValidElement(t));
}
function Lp(e) {
  const t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function w_(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Yt(e = {}) {
  const {
      name: t,
      strict: n = !0,
      hookName: r = "useContext",
      providerName: o = "Provider",
      errorMessage: i,
      defaultValue: s,
    } = e,
    a = b.createContext(s);
  a.displayName = t;
  function l() {
    var c;
    const u = b.useContext(a);
    if (!u && n) {
      const d = new Error(i ?? w_(r, o));
      throw (
        ((d.name = "ContextError"),
        (c = Error.captureStackTrace) == null || c.call(Error, d, l),
        d)
      );
    }
    return u;
  }
  return [a.Provider, l, a];
}
const fe = (...e) => e.filter(Boolean).join(" "),
  k_ = (e) => e.hasAttribute("tabindex");
function C_(e) {
  if (!d_(e) || IS(e) || p_(e)) return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0) return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls"),
  };
  return t in r ? r[t]() : h_(e) ? !0 : k_(e);
}
const P_ = [
    "input:not(:disabled):not([disabled])",
    "select:not(:disabled):not([disabled])",
    "textarea:not(:disabled):not([disabled])",
    "embed",
    "iframe",
    "object",
    "a[href]",
    "area[href]",
    "button:not(:disabled):not([disabled])",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    "*[tabindex]:not([aria-disabled])",
    "*[contenteditable]",
  ],
  T_ = P_.join(),
  __ = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function E_(e) {
  const t = Array.from(e.querySelectorAll(T_));
  return t.unshift(e), t.filter((n) => C_(n) && __(n));
}
function $_(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
const R_ = (e) => {
    const t = new WeakMap();
    return (r, o, i, s) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const a = t.get(r);
      if (a.has(o)) return a.get(o);
      const l = e(r, o, i, s);
      return a.set(o, l), l;
    };
  },
  jS = R_($_),
  A_ = (e) => e.default || e;
function Dp(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t) r in n && delete n[r];
  return n;
}
function M_(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Np(e, t) {
  return Array.isArray(e)
    ? e.map((n) => (n === null ? null : t(n)))
    : zt(e)
    ? Object.keys(e).reduce((n, r) => ((n[r] = t(e[r])), n), {})
    : e != null
    ? t(e)
    : null;
}
const z_ = (e) => typeof e == "function";
function At(e, ...t) {
  return z_(e) ? e(...t) : e;
}
function I_(e, ...t) {
  const n = Object.getOwnPropertyDescriptors(e),
    r = Object.keys(n),
    o = (s) => {
      const a = {};
      for (let l = 0; l < s.length; l++) {
        const u = s[l];
        n[u] && (Object.defineProperty(a, u, n[u]), delete n[u]);
      }
      return a;
    },
    i = (s) => o(Array.isArray(s) ? s : r.filter(s));
  return t.map(i).concat(o(r));
}
function j0(e, t, n = {}) {
  const { stop: r, getKey: o } = n;
  function i(s, a = []) {
    if (zt(s) || Array.isArray(s)) {
      const l = {};
      for (const [u, c] of Object.entries(s)) {
        const d = (o == null ? void 0 : o(u)) ?? u,
          f = [...a, d];
        if (r != null && r(s, f)) return t(s, a);
        l[d] = i(c, f);
      }
      return l;
    }
    return t(s, a);
  }
  return i(e);
}
var gu = { exports: {} };
gu.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 800,
    i = 16,
    s = 9007199254740991,
    a = "[object Arguments]",
    l = "[object Array]",
    u = "[object AsyncFunction]",
    c = "[object Boolean]",
    d = "[object Date]",
    f = "[object Error]",
    p = "[object Function]",
    g = "[object GeneratorFunction]",
    v = "[object Map]",
    x = "[object Number]",
    m = "[object Null]",
    h = "[object Object]",
    y = "[object Proxy]",
    k = "[object RegExp]",
    T = "[object Set]",
    $ = "[object String]",
    E = "[object Undefined]",
    R = "[object WeakMap]",
    z = "[object ArrayBuffer]",
    F = "[object DataView]",
    oe = "[object Float32Array]",
    nt = "[object Float64Array]",
    wt = "[object Int8Array]",
    mn = "[object Int16Array]",
    Cr = "[object Int32Array]",
    Vn = "[object Uint8Array]",
    ve = "[object Uint8ClampedArray]",
    M = "[object Uint16Array]",
    O = "[object Uint32Array]",
    B = /[\\^$.*+?()[\]{}|]/g,
    ie = /^\[object .+?Constructor\]$/,
    he = /^(?:0|[1-9]\d*)$/,
    K = {};
  (K[oe] = K[nt] = K[wt] = K[mn] = K[Cr] = K[Vn] = K[ve] = K[M] = K[O] = !0),
    (K[a] =
      K[l] =
      K[z] =
      K[c] =
      K[F] =
      K[d] =
      K[f] =
      K[p] =
      K[v] =
      K[x] =
      K[h] =
      K[k] =
      K[T] =
      K[$] =
      K[R] =
        !1);
  var kt = typeof Ia == "object" && Ia && Ia.Object === Object && Ia,
    Pr = typeof self == "object" && self && self.Object === Object && self,
    Xe = kt || Pr || Function("return this")(),
    gn = t && !t.nodeType && t,
    Tr = gn && !0 && e && !e.nodeType && e,
    Pa = Tr && Tr.exports === gn,
    Ai = Pa && kt.process,
    Ta = (function () {
      try {
        var S = Tr && Tr.require && Tr.require("util").types;
        return S || (Ai && Ai.binding && Ai.binding("util"));
      } catch {}
    })(),
    Mi = Ta && Ta.isTypedArray;
  function _c(S, P, _) {
    switch (_.length) {
      case 0:
        return S.call(P);
      case 1:
        return S.call(P, _[0]);
      case 2:
        return S.call(P, _[0], _[1]);
      case 3:
        return S.call(P, _[0], _[1], _[2]);
    }
    return S.apply(P, _);
  }
  function Ec(S, P) {
    for (var _ = -1, j = Array(S); ++_ < S; ) j[_] = P(_);
    return j;
  }
  function $c(S) {
    return function (P) {
      return S(P);
    };
  }
  function jt(S, P) {
    return S == null ? void 0 : S[P];
  }
  function Wn(S, P) {
    return function (_) {
      return S(P(_));
    };
  }
  var Un = Array.prototype,
    vn = Function.prototype,
    _r = Object.prototype,
    Rc = Xe["__core-js_shared__"],
    _a = vn.toString,
    Hn = _r.hasOwnProperty,
    ag = (function () {
      var S = /[^.]+$/.exec((Rc && Rc.keys && Rc.keys.IE_PROTO) || "");
      return S ? "Symbol(src)_1." + S : "";
    })(),
    lg = _r.toString,
    zC = _a.call(Object),
    IC = RegExp(
      "^" +
        _a
          .call(Hn)
          .replace(B, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Ea = Pa ? Xe.Buffer : void 0,
    ug = Xe.Symbol,
    cg = Xe.Uint8Array;
  Ea && Ea.allocUnsafe;
  var dg = Wn(Object.getPrototypeOf, Object),
    fg = Object.create,
    FC = _r.propertyIsEnumerable,
    jC = Un.splice,
    Er = ug ? ug.toStringTag : void 0,
    $a = (function () {
      try {
        var S = zc(Object, "defineProperty");
        return S({}, "", {}), S;
      } catch {}
    })(),
    OC = Ea ? Ea.isBuffer : void 0,
    hg = Math.max,
    LC = Date.now,
    pg = zc(Xe, "Map"),
    zi = zc(Object, "create"),
    DC = (function () {
      function S() {}
      return function (P) {
        if (!Rr(P)) return {};
        if (fg) return fg(P);
        S.prototype = P;
        var _ = new S();
        return (S.prototype = void 0), _;
      };
    })();
  function $r(S) {
    var P = -1,
      _ = S == null ? 0 : S.length;
    for (this.clear(); ++P < _; ) {
      var j = S[P];
      this.set(j[0], j[1]);
    }
  }
  function NC() {
    (this.__data__ = zi ? zi(null) : {}), (this.size = 0);
  }
  function BC(S) {
    var P = this.has(S) && delete this.__data__[S];
    return (this.size -= P ? 1 : 0), P;
  }
  function VC(S) {
    var P = this.__data__;
    if (zi) {
      var _ = P[S];
      return _ === r ? void 0 : _;
    }
    return Hn.call(P, S) ? P[S] : void 0;
  }
  function WC(S) {
    var P = this.__data__;
    return zi ? P[S] !== void 0 : Hn.call(P, S);
  }
  function UC(S, P) {
    var _ = this.__data__;
    return (
      (this.size += this.has(S) ? 0 : 1),
      (_[S] = zi && P === void 0 ? r : P),
      this
    );
  }
  ($r.prototype.clear = NC),
    ($r.prototype.delete = BC),
    ($r.prototype.get = VC),
    ($r.prototype.has = WC),
    ($r.prototype.set = UC);
  function yn(S) {
    var P = -1,
      _ = S == null ? 0 : S.length;
    for (this.clear(); ++P < _; ) {
      var j = S[P];
      this.set(j[0], j[1]);
    }
  }
  function HC() {
    (this.__data__ = []), (this.size = 0);
  }
  function GC(S) {
    var P = this.__data__,
      _ = Ra(P, S);
    if (_ < 0) return !1;
    var j = P.length - 1;
    return _ == j ? P.pop() : jC.call(P, _, 1), --this.size, !0;
  }
  function KC(S) {
    var P = this.__data__,
      _ = Ra(P, S);
    return _ < 0 ? void 0 : P[_][1];
  }
  function YC(S) {
    return Ra(this.__data__, S) > -1;
  }
  function XC(S, P) {
    var _ = this.__data__,
      j = Ra(_, S);
    return j < 0 ? (++this.size, _.push([S, P])) : (_[j][1] = P), this;
  }
  (yn.prototype.clear = HC),
    (yn.prototype.delete = GC),
    (yn.prototype.get = KC),
    (yn.prototype.has = YC),
    (yn.prototype.set = XC);
  function mo(S) {
    var P = -1,
      _ = S == null ? 0 : S.length;
    for (this.clear(); ++P < _; ) {
      var j = S[P];
      this.set(j[0], j[1]);
    }
  }
  function qC() {
    (this.size = 0),
      (this.__data__ = {
        hash: new $r(),
        map: new (pg || yn)(),
        string: new $r(),
      });
  }
  function QC(S) {
    var P = Ma(this, S).delete(S);
    return (this.size -= P ? 1 : 0), P;
  }
  function ZC(S) {
    return Ma(this, S).get(S);
  }
  function JC(S) {
    return Ma(this, S).has(S);
  }
  function e2(S, P) {
    var _ = Ma(this, S),
      j = _.size;
    return _.set(S, P), (this.size += _.size == j ? 0 : 1), this;
  }
  (mo.prototype.clear = qC),
    (mo.prototype.delete = QC),
    (mo.prototype.get = ZC),
    (mo.prototype.has = JC),
    (mo.prototype.set = e2);
  function go(S) {
    var P = (this.__data__ = new yn(S));
    this.size = P.size;
  }
  function t2() {
    (this.__data__ = new yn()), (this.size = 0);
  }
  function n2(S) {
    var P = this.__data__,
      _ = P.delete(S);
    return (this.size = P.size), _;
  }
  function r2(S) {
    return this.__data__.get(S);
  }
  function o2(S) {
    return this.__data__.has(S);
  }
  function i2(S, P) {
    var _ = this.__data__;
    if (_ instanceof yn) {
      var j = _.__data__;
      if (!pg || j.length < n - 1)
        return j.push([S, P]), (this.size = ++_.size), this;
      _ = this.__data__ = new mo(j);
    }
    return _.set(S, P), (this.size = _.size), this;
  }
  (go.prototype.clear = t2),
    (go.prototype.delete = n2),
    (go.prototype.get = r2),
    (go.prototype.has = o2),
    (go.prototype.set = i2);
  function s2(S, P) {
    var _ = jc(S),
      j = !_ && Fc(S),
      U = !_ && !j && bg(S),
      se = !_ && !j && !U && xg(S),
      pe = _ || j || U || se,
      Y = pe ? Ec(S.length, String) : [],
      me = Y.length;
    for (var Ot in S)
      (pe &&
        (Ot == "length" ||
          (U && (Ot == "offset" || Ot == "parent")) ||
          (se &&
            (Ot == "buffer" || Ot == "byteLength" || Ot == "byteOffset")) ||
          vg(Ot, me))) ||
        Y.push(Ot);
    return Y;
  }
  function Ac(S, P, _) {
    ((_ !== void 0 && !za(S[P], _)) || (_ === void 0 && !(P in S))) &&
      Mc(S, P, _);
  }
  function a2(S, P, _) {
    var j = S[P];
    (!(Hn.call(S, P) && za(j, _)) || (_ === void 0 && !(P in S))) &&
      Mc(S, P, _);
  }
  function Ra(S, P) {
    for (var _ = S.length; _--; ) if (za(S[_][0], P)) return _;
    return -1;
  }
  function Mc(S, P, _) {
    P == "__proto__" && $a
      ? $a(S, P, { configurable: !0, enumerable: !0, value: _, writable: !0 })
      : (S[P] = _);
  }
  var l2 = x2();
  function Aa(S) {
    return S == null
      ? S === void 0
        ? E
        : m
      : Er && Er in Object(S)
      ? w2(S)
      : E2(S);
  }
  function mg(S) {
    return Ii(S) && Aa(S) == a;
  }
  function u2(S) {
    if (!Rr(S) || T2(S)) return !1;
    var P = Lc(S) ? IC : ie;
    return P.test(M2(S));
  }
  function c2(S) {
    return Ii(S) && Sg(S.length) && !!K[Aa(S)];
  }
  function d2(S) {
    if (!Rr(S)) return _2(S);
    var P = yg(S),
      _ = [];
    for (var j in S) (j == "constructor" && (P || !Hn.call(S, j))) || _.push(j);
    return _;
  }
  function gg(S, P, _, j, U) {
    S !== P &&
      l2(
        P,
        function (se, pe) {
          if ((U || (U = new go()), Rr(se))) f2(S, P, pe, _, gg, j, U);
          else {
            var Y = j ? j(Ic(S, pe), se, pe + "", S, P, U) : void 0;
            Y === void 0 && (Y = se), Ac(S, pe, Y);
          }
        },
        wg
      );
  }
  function f2(S, P, _, j, U, se, pe) {
    var Y = Ic(S, _),
      me = Ic(P, _),
      Ot = pe.get(me);
    if (Ot) {
      Ac(S, _, Ot);
      return;
    }
    var ct = se ? se(Y, me, _ + "", S, P, pe) : void 0,
      Fi = ct === void 0;
    if (Fi) {
      var Dc = jc(me),
        Nc = !Dc && bg(me),
        Cg = !Dc && !Nc && xg(me);
      (ct = me),
        Dc || Nc || Cg
          ? jc(Y)
            ? (ct = Y)
            : z2(Y)
            ? (ct = y2(Y))
            : Nc
            ? ((Fi = !1), (ct = m2(me)))
            : Cg
            ? ((Fi = !1), (ct = v2(me)))
            : (ct = [])
          : I2(me) || Fc(me)
          ? ((ct = Y),
            Fc(Y) ? (ct = F2(Y)) : (!Rr(Y) || Lc(Y)) && (ct = k2(me)))
          : (Fi = !1);
    }
    Fi && (pe.set(me, ct), U(ct, me, j, se, pe), pe.delete(me)), Ac(S, _, ct);
  }
  function h2(S, P) {
    return R2($2(S, P, kg), S + "");
  }
  var p2 = $a
    ? function (S, P) {
        return $a(S, "toString", {
          configurable: !0,
          enumerable: !1,
          value: O2(P),
          writable: !0,
        });
      }
    : kg;
  function m2(S, P) {
    return S.slice();
  }
  function g2(S) {
    var P = new S.constructor(S.byteLength);
    return new cg(P).set(new cg(S)), P;
  }
  function v2(S, P) {
    var _ = g2(S.buffer);
    return new S.constructor(_, S.byteOffset, S.length);
  }
  function y2(S, P) {
    var _ = -1,
      j = S.length;
    for (P || (P = Array(j)); ++_ < j; ) P[_] = S[_];
    return P;
  }
  function b2(S, P, _, j) {
    var U = !_;
    _ || (_ = {});
    for (var se = -1, pe = P.length; ++se < pe; ) {
      var Y = P[se],
        me = void 0;
      me === void 0 && (me = S[Y]), U ? Mc(_, Y, me) : a2(_, Y, me);
    }
    return _;
  }
  function S2(S) {
    return h2(function (P, _) {
      var j = -1,
        U = _.length,
        se = U > 1 ? _[U - 1] : void 0,
        pe = U > 2 ? _[2] : void 0;
      for (
        se = S.length > 3 && typeof se == "function" ? (U--, se) : void 0,
          pe && C2(_[0], _[1], pe) && ((se = U < 3 ? void 0 : se), (U = 1)),
          P = Object(P);
        ++j < U;

      ) {
        var Y = _[j];
        Y && S(P, Y, j, se);
      }
      return P;
    });
  }
  function x2(S) {
    return function (P, _, j) {
      for (var U = -1, se = Object(P), pe = j(P), Y = pe.length; Y--; ) {
        var me = pe[++U];
        if (_(se[me], me, se) === !1) break;
      }
      return P;
    };
  }
  function Ma(S, P) {
    var _ = S.__data__;
    return P2(P) ? _[typeof P == "string" ? "string" : "hash"] : _.map;
  }
  function zc(S, P) {
    var _ = jt(S, P);
    return u2(_) ? _ : void 0;
  }
  function w2(S) {
    var P = Hn.call(S, Er),
      _ = S[Er];
    try {
      S[Er] = void 0;
      var j = !0;
    } catch {}
    var U = lg.call(S);
    return j && (P ? (S[Er] = _) : delete S[Er]), U;
  }
  function k2(S) {
    return typeof S.constructor == "function" && !yg(S) ? DC(dg(S)) : {};
  }
  function vg(S, P) {
    var _ = typeof S;
    return (
      (P = P ?? s),
      !!P &&
        (_ == "number" || (_ != "symbol" && he.test(S))) &&
        S > -1 &&
        S % 1 == 0 &&
        S < P
    );
  }
  function C2(S, P, _) {
    if (!Rr(_)) return !1;
    var j = typeof P;
    return (j == "number" ? Oc(_) && vg(P, _.length) : j == "string" && P in _)
      ? za(_[P], S)
      : !1;
  }
  function P2(S) {
    var P = typeof S;
    return P == "string" || P == "number" || P == "symbol" || P == "boolean"
      ? S !== "__proto__"
      : S === null;
  }
  function T2(S) {
    return !!ag && ag in S;
  }
  function yg(S) {
    var P = S && S.constructor,
      _ = (typeof P == "function" && P.prototype) || _r;
    return S === _;
  }
  function _2(S) {
    var P = [];
    if (S != null) for (var _ in Object(S)) P.push(_);
    return P;
  }
  function E2(S) {
    return lg.call(S);
  }
  function $2(S, P, _) {
    return (
      (P = hg(P === void 0 ? S.length - 1 : P, 0)),
      function () {
        for (
          var j = arguments, U = -1, se = hg(j.length - P, 0), pe = Array(se);
          ++U < se;

        )
          pe[U] = j[P + U];
        U = -1;
        for (var Y = Array(P + 1); ++U < P; ) Y[U] = j[U];
        return (Y[P] = _(pe)), _c(S, this, Y);
      }
    );
  }
  function Ic(S, P) {
    if (!(P === "constructor" && typeof S[P] == "function") && P != "__proto__")
      return S[P];
  }
  var R2 = A2(p2);
  function A2(S) {
    var P = 0,
      _ = 0;
    return function () {
      var j = LC(),
        U = i - (j - _);
      if (((_ = j), U > 0)) {
        if (++P >= o) return arguments[0];
      } else P = 0;
      return S.apply(void 0, arguments);
    };
  }
  function M2(S) {
    if (S != null) {
      try {
        return _a.call(S);
      } catch {}
      try {
        return S + "";
      } catch {}
    }
    return "";
  }
  function za(S, P) {
    return S === P || (S !== S && P !== P);
  }
  var Fc = mg(
      (function () {
        return arguments;
      })()
    )
      ? mg
      : function (S) {
          return Ii(S) && Hn.call(S, "callee") && !FC.call(S, "callee");
        },
    jc = Array.isArray;
  function Oc(S) {
    return S != null && Sg(S.length) && !Lc(S);
  }
  function z2(S) {
    return Ii(S) && Oc(S);
  }
  var bg = OC || L2;
  function Lc(S) {
    if (!Rr(S)) return !1;
    var P = Aa(S);
    return P == p || P == g || P == u || P == y;
  }
  function Sg(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= s;
  }
  function Rr(S) {
    var P = typeof S;
    return S != null && (P == "object" || P == "function");
  }
  function Ii(S) {
    return S != null && typeof S == "object";
  }
  function I2(S) {
    if (!Ii(S) || Aa(S) != h) return !1;
    var P = dg(S);
    if (P === null) return !0;
    var _ = Hn.call(P, "constructor") && P.constructor;
    return typeof _ == "function" && _ instanceof _ && _a.call(_) == zC;
  }
  var xg = Mi ? $c(Mi) : c2;
  function F2(S) {
    return b2(S, wg(S));
  }
  function wg(S) {
    return Oc(S) ? s2(S) : d2(S);
  }
  var j2 = S2(function (S, P, _, j) {
    gg(S, P, _, j);
  });
  function O2(S) {
    return function () {
      return S;
    };
  }
  function kg(S) {
    return S;
  }
  function L2() {
    return !1;
  }
  e.exports = j2;
})(gu, gu.exports);
var F_ = gu.exports;
const an = Fu(F_);
function Zf(e, t = []) {
  const n = b.useRef(e);
  return (
    b.useEffect(() => {
      n.current = e;
    }),
    b.useCallback((...r) => {
      var o;
      return (o = n.current) == null ? void 0 : o.call(n, ...r);
    }, t)
  );
}
function j_(e = {}) {
  const { onClose: t, onOpen: n, isOpen: r, id: o } = e,
    i = Zf(n),
    s = Zf(t),
    [a, l] = b.useState(e.defaultIsOpen || !1),
    u = r !== void 0 ? r : a,
    c = r !== void 0,
    d = b.useId(),
    f = o ?? `disclosure-${d}`,
    p = b.useCallback(() => {
      c || l(!1), s == null || s();
    }, [c, s]),
    g = b.useCallback(() => {
      c || l(!0), i == null || i();
    }, [c, i]),
    v = b.useCallback(() => {
      u ? p() : g();
    }, [u, g, p]);
  function x(h = {}) {
    return {
      ...h,
      "aria-expanded": u,
      "aria-controls": f,
      onClick(y) {
        var k;
        (k = h.onClick) == null || k.call(h, y), v();
      },
    };
  }
  function m(h = {}) {
    return { ...h, hidden: !u, id: f };
  }
  return {
    isOpen: u,
    onOpen: g,
    onClose: p,
    onToggle: v,
    isControlled: c,
    getButtonProps: x,
    getDisclosureProps: m,
  };
}
const vu =
    globalThis != null && globalThis.document ? b.useLayoutEffect : b.useEffect,
  O0 = (e, t) => {
    const n = b.useRef(!1),
      r = b.useRef(!1);
    b.useEffect(() => {
      if (n.current && r.current) return e();
      r.current = !0;
    }, t),
      b.useEffect(
        () => (
          (n.current = !0),
          () => {
            n.current = !1;
          }
        ),
        []
      );
  };
function O_(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Us(...e) {
  return (t) => {
    e.forEach((n) => {
      O_(n, t);
    });
  };
}
function L_(...e) {
  return b.useMemo(() => Us(...e), e);
}
function D_(e, t) {
  const n = Zf(e);
  b.useEffect(() => {
    if (t == null) return;
    let r = null;
    return (
      (r = window.setTimeout(() => {
        n();
      }, t)),
      () => {
        r && window.clearTimeout(r);
      }
    );
  }, [t, n]);
}
const $e = {
    open: (e, t) => `${e}[data-open], ${e}[open], ${e}[data-state=open] ${t}`,
    closed: (e, t) => `${e}[data-closed], ${e}[data-state=closed] ${t}`,
    hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
    focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
    focusVisible: (e, t) => `${e}:focus-visible ${t}`,
    focusWithin: (e, t) => `${e}:focus-within ${t}`,
    active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
    disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
    invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
    checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
    indeterminate: (e, t) =>
      `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
    readOnly: (e, t) =>
      `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
    expanded: (e, t) =>
      `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
    placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`,
  },
  qt = (e) => OS((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
  bn = (e) => OS((t) => e(t, "~ &"), "[data-peer]", ".peer"),
  OS = (e, ...t) => t.map(e).join(", "),
  Qo = {
    _hover: "&:hover, &[data-hover]",
    _active: "&:active, &[data-active]",
    _focus: "&:focus, &[data-focus]",
    _highlighted: "&[data-highlighted]",
    _focusWithin: "&:focus-within, &[data-focus-within]",
    _focusVisible: "&:focus-visible, &[data-focus-visible]",
    _disabled:
      "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
    _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
    _before: "&::before",
    _after: "&::after",
    _empty: "&:empty, &[data-empty]",
    _expanded:
      "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
    _checked: "&[aria-checked=true], &[data-checked], &[data-state=checked]",
    _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
    _pressed: "&[aria-pressed=true], &[data-pressed]",
    _invalid: "&[aria-invalid=true], &[data-invalid]",
    _valid: "&[data-valid], &[data-state=valid]",
    _loading: "&[data-loading], &[aria-busy=true]",
    _selected: "&[aria-selected=true], &[data-selected]",
    _hidden: "&[hidden], &[data-hidden]",
    _autofill: "&:-webkit-autofill",
    _even: "&:nth-of-type(even)",
    _odd: "&:nth-of-type(odd)",
    _first: "&:first-of-type",
    _firstLetter: "&::first-letter",
    _last: "&:last-of-type",
    _notFirst: "&:not(:first-of-type)",
    _notLast: "&:not(:last-of-type)",
    _visited: "&:visited",
    _activeLink: "&[aria-current=page]",
    _activeStep: "&[aria-current=step]",
    _indeterminate:
      "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
    _groupOpen: qt($e.open),
    _groupClosed: qt($e.closed),
    _groupHover: qt($e.hover),
    _peerHover: bn($e.hover),
    _groupFocus: qt($e.focus),
    _peerFocus: bn($e.focus),
    _groupFocusVisible: qt($e.focusVisible),
    _peerFocusVisible: bn($e.focusVisible),
    _groupActive: qt($e.active),
    _peerActive: bn($e.active),
    _groupDisabled: qt($e.disabled),
    _peerDisabled: bn($e.disabled),
    _groupInvalid: qt($e.invalid),
    _peerInvalid: bn($e.invalid),
    _groupChecked: qt($e.checked),
    _peerChecked: bn($e.checked),
    _groupFocusWithin: qt($e.focusWithin),
    _peerFocusWithin: bn($e.focusWithin),
    _peerPlaceholderShown: bn($e.placeholderShown),
    _placeholder: "&::placeholder, &[data-placeholder]",
    _placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
    _fullScreen: "&:fullscreen, &[data-fullscreen]",
    _selection: "&::selection",
    _rtl: "[dir=rtl] &, &[dir=rtl]",
    _ltr: "[dir=ltr] &, &[dir=ltr]",
    _mediaDark: "@media (prefers-color-scheme: dark)",
    _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
    _dark:
      ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
    _light:
      ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
    _horizontal: "&[data-orientation=horizontal]",
    _vertical: "&[data-orientation=vertical]",
    _open: "&[data-open], &[open], &[data-state=open]",
    _closed: "&[data-closed], &[data-state=closed]",
    _complete: "&[data-complete]",
    _incomplete: "&[data-incomplete]",
    _current: "&[data-current]",
  },
  LS = Object.keys(Qo),
  N_ = (e) => /!(important)?$/.test(e),
  L0 = (e) =>
    typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
  B_ = (e, t) => (n) => {
    const r = String(t),
      o = N_(r),
      i = L0(r),
      s = e ? `${e}.${i}` : i;
    let a = zt(n.__cssMap) && s in n.__cssMap ? n.__cssMap[s].varRef : t;
    return (a = L0(a)), o ? `${a} !important` : a;
  };
function Bp(e) {
  const { scale: t, transform: n, compose: r } = e;
  return (i, s) => {
    const a = B_(t, i)(s);
    let l = (n == null ? void 0 : n(a, s)) ?? a;
    return r && (l = r(l, s)), l;
  };
}
const Za =
  (...e) =>
  (t) =>
    e.reduce((n, r) => r(n), t);
function Ct(e, t) {
  return (n) => {
    const r = { property: n, scale: e };
    return (r.transform = Bp({ scale: e, transform: t })), r;
  };
}
const V_ =
  ({ rtl: e, ltr: t }) =>
  (n) =>
    n.direction === "rtl" ? e : t;
function W_(e) {
  const { property: t, scale: n, transform: r } = e;
  return {
    scale: n,
    property: V_(t),
    transform: n ? Bp({ scale: n, compose: r }) : r,
  };
}
const DS = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))",
];
function U_() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...DS,
  ].join(" ");
}
function H_() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...DS,
  ].join(" ");
}
const G_ = {
    "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
    filter: [
      "var(--chakra-blur)",
      "var(--chakra-brightness)",
      "var(--chakra-contrast)",
      "var(--chakra-grayscale)",
      "var(--chakra-hue-rotate)",
      "var(--chakra-invert)",
      "var(--chakra-saturate)",
      "var(--chakra-sepia)",
      "var(--chakra-drop-shadow)",
    ].join(" "),
  },
  K_ = {
    backdropFilter: [
      "var(--chakra-backdrop-blur)",
      "var(--chakra-backdrop-brightness)",
      "var(--chakra-backdrop-contrast)",
      "var(--chakra-backdrop-grayscale)",
      "var(--chakra-backdrop-hue-rotate)",
      "var(--chakra-backdrop-invert)",
      "var(--chakra-backdrop-opacity)",
      "var(--chakra-backdrop-saturate)",
      "var(--chakra-backdrop-sepia)",
    ].join(" "),
    "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
    "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  };
function Y_(e) {
  return {
    "--chakra-ring-offset-shadow":
      "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow":
      "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)",
    ].join(", "),
  };
}
const X_ = {
    "row-reverse": {
      space: "--chakra-space-x-reverse",
      divide: "--chakra-divide-x-reverse",
    },
    "column-reverse": {
      space: "--chakra-space-y-reverse",
      divide: "--chakra-divide-y-reverse",
    },
  },
  Jf = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  },
  q_ = new Set(Object.values(Jf)),
  eh = new Set([
    "none",
    "-moz-initial",
    "inherit",
    "initial",
    "revert",
    "unset",
  ]),
  Q_ = (e) => e.trim();
function Z_(e, t) {
  if (e == null || eh.has(e)) return e;
  if (!(th(e) || eh.has(e))) return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
    i = o == null ? void 0 : o[1],
    s = o == null ? void 0 : o[2];
  if (!i || !s) return e;
  const a = i.includes("-gradient") ? i : `${i}-gradient`,
    [l, ...u] = s.split(",").map(Q_).filter(Boolean);
  if ((u == null ? void 0 : u.length) === 0) return e;
  const c = l in Jf ? Jf[l] : l;
  u.unshift(c);
  const d = u.map((f) => {
    if (q_.has(f)) return f;
    const p = f.indexOf(" "),
      [g, v] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f],
      x = th(v) ? v : v && v.split(" "),
      m = `colors.${g}`,
      h = m in t.__cssMap ? t.__cssMap[m].varRef : g;
    return x ? [h, ...(Array.isArray(x) ? x : [x])].join(" ") : h;
  });
  return `${a}(${d.join(", ")})`;
}
const th = (e) => typeof e == "string" && e.includes("(") && e.includes(")"),
  J_ = (e, t) => Z_(e, t ?? {});
function eE(e) {
  return /^var\(--.+\)$/.test(e);
}
const tE = (e) => {
    const t = parseFloat(e.toString()),
      n = e.toString().replace(String(t), "");
    return { unitless: !n, value: t, unit: n };
  },
  Qt = (e) => (t) => `${e}(${t})`,
  W = {
    filter(e) {
      return e !== "auto" ? e : G_;
    },
    backdropFilter(e) {
      return e !== "auto" ? e : K_;
    },
    ring(e) {
      return Y_(W.px(e));
    },
    bgClip(e) {
      return e === "text"
        ? { color: "transparent", backgroundClip: "text" }
        : { backgroundClip: e };
    },
    transform(e) {
      return e === "auto" ? U_() : e === "auto-gpu" ? H_() : e;
    },
    vh(e) {
      return e === "$100vh" ? "var(--chakra-vh)" : e;
    },
    px(e) {
      if (e == null) return e;
      const { unitless: t } = tE(e);
      return t || typeof e == "number" ? `${e}px` : e;
    },
    fraction(e) {
      return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
    },
    float(e, t) {
      const n = { left: "right", right: "left" };
      return t.direction === "rtl" ? n[e] : e;
    },
    degree(e) {
      if (eE(e) || e == null) return e;
      const t = typeof e == "string" && !e.endsWith("deg");
      return typeof e == "number" || t ? `${e}deg` : e;
    },
    gradient: J_,
    blur: Qt("blur"),
    opacity: Qt("opacity"),
    brightness: Qt("brightness"),
    contrast: Qt("contrast"),
    dropShadow: Qt("drop-shadow"),
    grayscale: Qt("grayscale"),
    hueRotate: (e) => Qt("hue-rotate")(W.degree(e)),
    invert: Qt("invert"),
    saturate: Qt("saturate"),
    sepia: Qt("sepia"),
    bgImage(e) {
      return e == null || th(e) || eh.has(e) ? e : `url(${e})`;
    },
    outline(e) {
      const t = String(e) === "0" || String(e) === "none";
      return e !== null && t
        ? { outline: "2px solid transparent", outlineOffset: "2px" }
        : { outline: e };
    },
    flexDirection(e) {
      const { space: t, divide: n } = X_[e] ?? {},
        r = { flexDirection: e };
      return t && (r[t] = 1), n && (r[n] = 1), r;
    },
  },
  C = {
    borderWidths: Ct("borderWidths"),
    borderStyles: Ct("borderStyles"),
    colors: Ct("colors"),
    borders: Ct("borders"),
    gradients: Ct("gradients", W.gradient),
    radii: Ct("radii", W.px),
    space: Ct("space", Za(W.vh, W.px)),
    spaceT: Ct("space", Za(W.vh, W.px)),
    degreeT(e) {
      return { property: e, transform: W.degree };
    },
    prop(e, t, n) {
      return {
        property: e,
        scale: t,
        ...(t && { transform: Bp({ scale: t, transform: n }) }),
      };
    },
    propT(e, t) {
      return { property: e, transform: t };
    },
    sizes: Ct("sizes", Za(W.vh, W.px)),
    sizesT: Ct("sizes", Za(W.vh, W.fraction)),
    shadows: Ct("shadows"),
    logical: W_,
    blur: Ct("blur", W.blur),
  },
  _l = {
    background: C.colors("background"),
    backgroundColor: C.colors("backgroundColor"),
    backgroundImage: C.gradients("backgroundImage"),
    backgroundSize: !0,
    backgroundPosition: !0,
    backgroundRepeat: !0,
    backgroundAttachment: !0,
    backgroundClip: { transform: W.bgClip },
    bgSize: C.prop("backgroundSize"),
    bgPosition: C.prop("backgroundPosition"),
    bg: C.colors("background"),
    bgColor: C.colors("backgroundColor"),
    bgPos: C.prop("backgroundPosition"),
    bgRepeat: C.prop("backgroundRepeat"),
    bgAttachment: C.prop("backgroundAttachment"),
    bgGradient: C.gradients("backgroundImage"),
    bgClip: { transform: W.bgClip },
  };
Object.assign(_l, { bgImage: _l.backgroundImage, bgImg: _l.backgroundImage });
const X = {
  border: C.borders("border"),
  borderWidth: C.borderWidths("borderWidth"),
  borderStyle: C.borderStyles("borderStyle"),
  borderColor: C.colors("borderColor"),
  borderRadius: C.radii("borderRadius"),
  borderTop: C.borders("borderTop"),
  borderBlockStart: C.borders("borderBlockStart"),
  borderTopLeftRadius: C.radii("borderTopLeftRadius"),
  borderStartStartRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
  }),
  borderEndStartRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderBottomLeftRadius", rtl: "borderBottomRightRadius" },
  }),
  borderTopRightRadius: C.radii("borderTopRightRadius"),
  borderStartEndRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
  }),
  borderEndEndRadius: C.logical({
    scale: "radii",
    property: { ltr: "borderBottomRightRadius", rtl: "borderBottomLeftRadius" },
  }),
  borderRight: C.borders("borderRight"),
  borderInlineEnd: C.borders("borderInlineEnd"),
  borderBottom: C.borders("borderBottom"),
  borderBlockEnd: C.borders("borderBlockEnd"),
  borderBottomLeftRadius: C.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: C.radii("borderBottomRightRadius"),
  borderLeft: C.borders("borderLeft"),
  borderInlineStart: { property: "borderInlineStart", scale: "borders" },
  borderInlineStartRadius: C.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
    },
  }),
  borderInlineEndRadius: C.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
    },
  }),
  borderX: C.borders(["borderLeft", "borderRight"]),
  borderInline: C.borders("borderInline"),
  borderY: C.borders(["borderTop", "borderBottom"]),
  borderBlock: C.borders("borderBlock"),
  borderTopWidth: C.borderWidths("borderTopWidth"),
  borderBlockStartWidth: C.borderWidths("borderBlockStartWidth"),
  borderTopColor: C.colors("borderTopColor"),
  borderBlockStartColor: C.colors("borderBlockStartColor"),
  borderTopStyle: C.borderStyles("borderTopStyle"),
  borderBlockStartStyle: C.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: C.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: C.borderWidths("borderBlockEndWidth"),
  borderBottomColor: C.colors("borderBottomColor"),
  borderBlockEndColor: C.colors("borderBlockEndColor"),
  borderBottomStyle: C.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: C.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: C.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: C.borderWidths("borderInlineStartWidth"),
  borderLeftColor: C.colors("borderLeftColor"),
  borderInlineStartColor: C.colors("borderInlineStartColor"),
  borderLeftStyle: C.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: C.borderStyles("borderInlineStartStyle"),
  borderRightWidth: C.borderWidths("borderRightWidth"),
  borderInlineEndWidth: C.borderWidths("borderInlineEndWidth"),
  borderRightColor: C.colors("borderRightColor"),
  borderInlineEndColor: C.colors("borderInlineEndColor"),
  borderRightStyle: C.borderStyles("borderRightStyle"),
  borderInlineEndStyle: C.borderStyles("borderInlineEndStyle"),
  borderTopRadius: C.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: C.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
  ]),
  borderLeftRadius: C.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: C.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius",
  ]),
};
Object.assign(X, {
  rounded: X.borderRadius,
  roundedTop: X.borderTopRadius,
  roundedTopLeft: X.borderTopLeftRadius,
  roundedTopRight: X.borderTopRightRadius,
  roundedTopStart: X.borderStartStartRadius,
  roundedTopEnd: X.borderStartEndRadius,
  roundedBottom: X.borderBottomRadius,
  roundedBottomLeft: X.borderBottomLeftRadius,
  roundedBottomRight: X.borderBottomRightRadius,
  roundedBottomStart: X.borderEndStartRadius,
  roundedBottomEnd: X.borderEndEndRadius,
  roundedLeft: X.borderLeftRadius,
  roundedRight: X.borderRightRadius,
  roundedStart: X.borderInlineStartRadius,
  roundedEnd: X.borderInlineEndRadius,
  borderStart: X.borderInlineStart,
  borderEnd: X.borderInlineEnd,
  borderTopStartRadius: X.borderStartStartRadius,
  borderTopEndRadius: X.borderStartEndRadius,
  borderBottomStartRadius: X.borderEndStartRadius,
  borderBottomEndRadius: X.borderEndEndRadius,
  borderStartRadius: X.borderInlineStartRadius,
  borderEndRadius: X.borderInlineEndRadius,
  borderStartWidth: X.borderInlineStartWidth,
  borderEndWidth: X.borderInlineEndWidth,
  borderStartColor: X.borderInlineStartColor,
  borderEndColor: X.borderInlineEndColor,
  borderStartStyle: X.borderInlineStartStyle,
  borderEndStyle: X.borderInlineEndStyle,
});
const nE = {
    color: C.colors("color"),
    textColor: C.colors("color"),
    fill: C.colors("fill"),
    stroke: C.colors("stroke"),
    accentColor: C.colors("accentColor"),
    textFillColor: C.colors("textFillColor"),
  },
  yu = {
    alignItems: !0,
    alignContent: !0,
    justifyItems: !0,
    justifyContent: !0,
    flexWrap: !0,
    flexDirection: { transform: W.flexDirection },
    flex: !0,
    flexFlow: !0,
    flexGrow: !0,
    flexShrink: !0,
    flexBasis: C.sizes("flexBasis"),
    justifySelf: !0,
    alignSelf: !0,
    order: !0,
    placeItems: !0,
    placeContent: !0,
    placeSelf: !0,
    gap: C.space("gap"),
    rowGap: C.space("rowGap"),
    columnGap: C.space("columnGap"),
  };
Object.assign(yu, { flexDir: yu.flexDirection });
const Tt = {
  width: C.sizesT("width"),
  inlineSize: C.sizesT("inlineSize"),
  height: C.sizes("height"),
  blockSize: C.sizes("blockSize"),
  boxSize: C.sizes(["width", "height"]),
  minWidth: C.sizes("minWidth"),
  minInlineSize: C.sizes("minInlineSize"),
  minHeight: C.sizes("minHeight"),
  minBlockSize: C.sizes("minBlockSize"),
  maxWidth: C.sizes("maxWidth"),
  maxInlineSize: C.sizes("maxInlineSize"),
  maxHeight: C.sizes("maxHeight"),
  maxBlockSize: C.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var o, i;
      return {
        [`@media screen and (min-width: ${
          ((i = (o = t.__breakpoints) == null ? void 0 : o.get(e)) == null
            ? void 0
            : i.minW) ?? e
        })`]: { display: "none" },
      };
    },
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var o, i;
      return {
        [`@media screen and (max-width: ${
          ((i = (o = t.__breakpoints) == null ? void 0 : o.get(e)) == null
            ? void 0
            : i._minW) ?? e
        })`]: { display: "none" },
      };
    },
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: C.propT("float", W.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0,
};
Object.assign(Tt, {
  w: Tt.width,
  h: Tt.height,
  minW: Tt.minWidth,
  maxW: Tt.maxWidth,
  minH: Tt.minHeight,
  maxH: Tt.maxHeight,
  overscroll: Tt.overscrollBehavior,
  overscrollX: Tt.overscrollBehaviorX,
  overscrollY: Tt.overscrollBehaviorY,
});
const rE = {
    filter: { transform: W.filter },
    blur: C.blur("--chakra-blur"),
    brightness: C.propT("--chakra-brightness", W.brightness),
    contrast: C.propT("--chakra-contrast", W.contrast),
    hueRotate: C.propT("--chakra-hue-rotate", W.hueRotate),
    invert: C.propT("--chakra-invert", W.invert),
    saturate: C.propT("--chakra-saturate", W.saturate),
    dropShadow: C.propT("--chakra-drop-shadow", W.dropShadow),
    backdropFilter: { transform: W.backdropFilter },
    backdropBlur: C.blur("--chakra-backdrop-blur"),
    backdropBrightness: C.propT("--chakra-backdrop-brightness", W.brightness),
    backdropContrast: C.propT("--chakra-backdrop-contrast", W.contrast),
    backdropHueRotate: C.propT("--chakra-backdrop-hue-rotate", W.hueRotate),
    backdropInvert: C.propT("--chakra-backdrop-invert", W.invert),
    backdropSaturate: C.propT("--chakra-backdrop-saturate", W.saturate),
  },
  oE = {
    ring: { transform: W.ring },
    ringColor: C.colors("--chakra-ring-color"),
    ringOffset: C.prop("--chakra-ring-offset-width"),
    ringOffsetColor: C.colors("--chakra-ring-offset-color"),
    ringInset: C.prop("--chakra-ring-inset"),
  },
  iE = {
    appearance: !0,
    cursor: !0,
    resize: !0,
    userSelect: !0,
    pointerEvents: !0,
    outline: { transform: W.outline },
    outlineOffset: !0,
    outlineColor: C.colors("outlineColor"),
  },
  NS = {
    gridGap: C.space("gridGap"),
    gridColumnGap: C.space("gridColumnGap"),
    gridRowGap: C.space("gridRowGap"),
    gridColumn: !0,
    gridRow: !0,
    gridAutoFlow: !0,
    gridAutoColumns: !0,
    gridColumnStart: !0,
    gridColumnEnd: !0,
    gridRowStart: !0,
    gridRowEnd: !0,
    gridAutoRows: !0,
    gridTemplate: !0,
    gridTemplateColumns: !0,
    gridTemplateRows: !0,
    gridTemplateAreas: !0,
    gridArea: !0,
  };
function sE(e, t, n, r) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (r = 0; r < o.length && e; r += 1) e = e[o[r]];
  return e === void 0 ? n : e;
}
const aE = (e) => {
    const t = new WeakMap();
    return (r, o, i, s) => {
      if (typeof r > "u") return e(r, o, i);
      t.has(r) || t.set(r, new Map());
      const a = t.get(r);
      if (a.has(o)) return a.get(o);
      const l = e(r, o, i, s);
      return a.set(o, l), l;
    };
  },
  lE = aE(sE),
  uE = {
    border: "0px",
    clip: "rect(0, 0, 0, 0)",
    width: "1px",
    height: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute",
  },
  cE = {
    position: "static",
    width: "auto",
    height: "auto",
    clip: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
  },
  pd = (e, t, n) => {
    const r = {},
      o = lE(e, t, {});
    for (const i in o) (i in n && n[i] != null) || (r[i] = o[i]);
    return r;
  },
  dE = {
    srOnly: {
      transform(e) {
        return e === !0 ? uE : e === "focusable" ? cE : {};
      },
    },
    layerStyle: {
      processResult: !0,
      transform: (e, t, n) => pd(t, `layerStyles.${e}`, n),
    },
    textStyle: {
      processResult: !0,
      transform: (e, t, n) => pd(t, `textStyles.${e}`, n),
    },
    apply: { processResult: !0, transform: (e, t, n) => pd(t, e, n) },
  },
  ys = {
    position: !0,
    pos: C.prop("position"),
    zIndex: C.prop("zIndex", "zIndices"),
    inset: C.spaceT("inset"),
    insetX: C.spaceT(["left", "right"]),
    insetInline: C.spaceT("insetInline"),
    insetY: C.spaceT(["top", "bottom"]),
    insetBlock: C.spaceT("insetBlock"),
    top: C.spaceT("top"),
    insetBlockStart: C.spaceT("insetBlockStart"),
    bottom: C.spaceT("bottom"),
    insetBlockEnd: C.spaceT("insetBlockEnd"),
    left: C.spaceT("left"),
    insetInlineStart: C.logical({
      scale: "space",
      property: { ltr: "left", rtl: "right" },
    }),
    right: C.spaceT("right"),
    insetInlineEnd: C.logical({
      scale: "space",
      property: { ltr: "right", rtl: "left" },
    }),
  };
Object.assign(ys, {
  insetStart: ys.insetInlineStart,
  insetEnd: ys.insetInlineEnd,
});
const nh = {
  boxShadow: C.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: C.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: C.prop("backgroundBlendMode"),
  opacity: !0,
};
Object.assign(nh, { shadow: nh.boxShadow });
const ce = {
  margin: C.spaceT("margin"),
  marginTop: C.spaceT("marginTop"),
  marginBlockStart: C.spaceT("marginBlockStart"),
  marginRight: C.spaceT("marginRight"),
  marginInlineEnd: C.spaceT("marginInlineEnd"),
  marginBottom: C.spaceT("marginBottom"),
  marginBlockEnd: C.spaceT("marginBlockEnd"),
  marginLeft: C.spaceT("marginLeft"),
  marginInlineStart: C.spaceT("marginInlineStart"),
  marginX: C.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: C.spaceT("marginInline"),
  marginY: C.spaceT(["marginTop", "marginBottom"]),
  marginBlock: C.spaceT("marginBlock"),
  padding: C.space("padding"),
  paddingTop: C.space("paddingTop"),
  paddingBlockStart: C.space("paddingBlockStart"),
  paddingRight: C.space("paddingRight"),
  paddingBottom: C.space("paddingBottom"),
  paddingBlockEnd: C.space("paddingBlockEnd"),
  paddingLeft: C.space("paddingLeft"),
  paddingInlineStart: C.space("paddingInlineStart"),
  paddingInlineEnd: C.space("paddingInlineEnd"),
  paddingX: C.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: C.space("paddingInline"),
  paddingY: C.space(["paddingTop", "paddingBottom"]),
  paddingBlock: C.space("paddingBlock"),
};
Object.assign(ce, {
  m: ce.margin,
  mt: ce.marginTop,
  mr: ce.marginRight,
  me: ce.marginInlineEnd,
  marginEnd: ce.marginInlineEnd,
  mb: ce.marginBottom,
  ml: ce.marginLeft,
  ms: ce.marginInlineStart,
  marginStart: ce.marginInlineStart,
  mx: ce.marginX,
  my: ce.marginY,
  p: ce.padding,
  pt: ce.paddingTop,
  py: ce.paddingY,
  px: ce.paddingX,
  pb: ce.paddingBottom,
  pl: ce.paddingLeft,
  ps: ce.paddingInlineStart,
  paddingStart: ce.paddingInlineStart,
  pr: ce.paddingRight,
  pe: ce.paddingInlineEnd,
  paddingEnd: ce.paddingInlineEnd,
});
const fE = {
    scrollBehavior: !0,
    scrollSnapAlign: !0,
    scrollSnapStop: !0,
    scrollSnapType: !0,
    scrollMargin: C.spaceT("scrollMargin"),
    scrollMarginTop: C.spaceT("scrollMarginTop"),
    scrollMarginBottom: C.spaceT("scrollMarginBottom"),
    scrollMarginLeft: C.spaceT("scrollMarginLeft"),
    scrollMarginRight: C.spaceT("scrollMarginRight"),
    scrollMarginX: C.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginY: C.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
    scrollPadding: C.spaceT("scrollPadding"),
    scrollPaddingTop: C.spaceT("scrollPaddingTop"),
    scrollPaddingBottom: C.spaceT("scrollPaddingBottom"),
    scrollPaddingLeft: C.spaceT("scrollPaddingLeft"),
    scrollPaddingRight: C.spaceT("scrollPaddingRight"),
    scrollPaddingX: C.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingY: C.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
  },
  hE = {
    fontFamily: C.prop("fontFamily", "fonts"),
    fontSize: C.prop("fontSize", "fontSizes", W.px),
    fontWeight: C.prop("fontWeight", "fontWeights"),
    lineHeight: C.prop("lineHeight", "lineHeights"),
    letterSpacing: C.prop("letterSpacing", "letterSpacings"),
    textAlign: !0,
    fontStyle: !0,
    textIndent: !0,
    wordBreak: !0,
    overflowWrap: !0,
    textOverflow: !0,
    textTransform: !0,
    whiteSpace: !0,
    isTruncated: {
      transform(e) {
        if (e === !0)
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
      },
    },
    noOfLines: {
      static: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: "var(--chakra-line-clamp)",
      },
      property: "--chakra-line-clamp",
    },
  },
  pE = {
    textDecorationColor: C.colors("textDecorationColor"),
    textDecoration: !0,
    textDecor: { property: "textDecoration" },
    textDecorationLine: !0,
    textDecorationStyle: !0,
    textDecorationThickness: !0,
    textUnderlineOffset: !0,
    textShadow: C.shadows("textShadow"),
  },
  mE = {
    clipPath: !0,
    transform: C.propT("transform", W.transform),
    transformOrigin: !0,
    translateX: C.spaceT("--chakra-translate-x"),
    translateY: C.spaceT("--chakra-translate-y"),
    skewX: C.degreeT("--chakra-skew-x"),
    skewY: C.degreeT("--chakra-skew-y"),
    scaleX: C.prop("--chakra-scale-x"),
    scaleY: C.prop("--chakra-scale-y"),
    scale: C.prop(["--chakra-scale-x", "--chakra-scale-y"]),
    rotate: C.degreeT("--chakra-rotate"),
  },
  gE = {
    listStyleType: !0,
    listStylePosition: !0,
    listStylePos: C.prop("listStylePosition"),
    listStyleImage: !0,
    listStyleImg: C.prop("listStyleImage"),
  },
  vE = {
    transition: !0,
    transitionDelay: !0,
    animation: !0,
    willChange: !0,
    transitionDuration: C.prop("transitionDuration", "transition.duration"),
    transitionProperty: C.prop("transitionProperty", "transition.property"),
    transitionTimingFunction: C.prop(
      "transitionTimingFunction",
      "transition.easing"
    ),
  },
  Vp = an(
    {},
    _l,
    X,
    nE,
    yu,
    Tt,
    rE,
    oE,
    iE,
    NS,
    dE,
    ys,
    nh,
    ce,
    fE,
    hE,
    pE,
    mE,
    gE,
    vE
  );
Object.assign({}, ce, Tt, yu, NS, ys);
const yE = [...Object.keys(Vp), ...LS],
  bE = { ...Vp, ...Qo },
  SE = (e) => e in bE,
  xE = (e) => (t) => {
    if (!t.__breakpoints) return e;
    const { isResponsive: n, toArrayValue: r, media: o } = t.__breakpoints,
      i = {};
    for (const s in e) {
      let a = At(e[s], t);
      if (a == null) continue;
      if (((a = zt(a) && n(a) ? r(a) : a), !Array.isArray(a))) {
        i[s] = a;
        continue;
      }
      const l = a.slice(0, o.length).length;
      for (let u = 0; u < l; u += 1) {
        const c = o == null ? void 0 : o[u];
        if (!c) {
          i[s] = a[u];
          continue;
        }
        (i[c] = i[c] || {}), a[u] != null && (i[c][s] = a[u]);
      }
    }
    return i;
  };
function wE(e) {
  const t = [];
  let n = "",
    r = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "("
      ? ((r = !0), (n += i))
      : i === ")"
      ? ((r = !1), (n += i))
      : i === "," && !r
      ? (t.push(n), (n = ""))
      : (n += i);
  }
  return (n = n.trim()), n && t.push(n), t;
}
function kE(e) {
  return /^var\(--.+\)$/.test(e);
}
const CE = (e, t) => e.startsWith("--") && typeof t == "string" && !kE(t),
  PE = (e, t) => {
    if (t == null) return t;
    const n = (s) => {
        var a, l;
        return (l = (a = e.__cssMap) == null ? void 0 : a[s]) == null
          ? void 0
          : l.varRef;
      },
      r = (s) => n(s) ?? s,
      [o, i] = wE(t);
    return (t = n(o) ?? r(i) ?? r(t)), t;
  };
function TE(e) {
  const { configs: t = {}, pseudos: n = {}, theme: r } = e,
    o = (i, s = !1) => {
      var c;
      const a = At(i, r),
        l = xE(a)(r);
      let u = {};
      for (let d in l) {
        const f = l[d];
        let p = At(f, r);
        d in n && (d = n[d]), CE(d, p) && (p = PE(r, p));
        let g = t[d];
        if ((g === !0 && (g = { property: d }), zt(p))) {
          (u[d] = u[d] ?? {}), (u[d] = an({}, u[d], o(p, !0)));
          continue;
        }
        let v =
          ((c = g == null ? void 0 : g.transform) == null
            ? void 0
            : c.call(g, p, r, a)) ?? p;
        v = g != null && g.processResult ? o(v, !0) : v;
        const x = At(g == null ? void 0 : g.property, r);
        if (!s && g != null && g.static) {
          const m = At(g.static, r);
          u = an({}, u, m);
        }
        if (x && Array.isArray(x)) {
          for (const m of x) u[m] = v;
          continue;
        }
        if (x) {
          x === "&" && zt(v) ? (u = an({}, u, v)) : (u[x] = v);
          continue;
        }
        if (zt(v)) {
          u = an({}, u, v);
          continue;
        }
        u[d] = v;
      }
      return u;
    };
  return o;
}
const BS = (e) => (t) => TE({ theme: t, pseudos: Qo, configs: Vp })(e);
function le(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    },
  };
}
function _E(e, t) {
  if (Array.isArray(e)) return e;
  if (zt(e)) return t(e);
  if (e != null) return [e];
}
function EE(e, t) {
  for (let n = t + 1; n < e.length; n++) if (e[n] != null) return n;
  return -1;
}
function $E(e) {
  const t = e.__breakpoints;
  return function (r, o, i, s) {
    var f, p;
    if (!t) return;
    const a = {},
      l = _E(i, t.toArrayValue);
    if (!l) return a;
    const u = l.length,
      c = u === 1,
      d = !!r.parts;
    for (let g = 0; g < u; g++) {
      const v = t.details[g],
        x = t.details[EE(l, g)],
        m = es(v.minW, x == null ? void 0 : x._minW),
        h = At((f = r[o]) == null ? void 0 : f[l[g]], s);
      if (h) {
        if (d) {
          (p = r.parts) == null ||
            p.forEach((y) => {
              an(a, { [y]: c ? h[y] : { [m]: h[y] } });
            });
          continue;
        }
        if (!d) {
          c ? an(a, h) : (a[m] = h);
          continue;
        }
        a[m] = h;
      }
    }
    return a;
  };
}
function RE(e) {
  return (t) => {
    const { variant: n, size: r, theme: o } = t,
      i = $E(o);
    return an(
      {},
      At(e.baseStyle ?? {}, t),
      i(e, "sizes", r, t),
      i(e, "variants", n, t)
    );
  };
}
function Bn(e) {
  return Dp(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
function VS(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
const Zu = (e, ...t) => t.map(VS).join(` ${e} `).replace(/calc/g, ""),
  D0 = (...e) => `calc(${Zu("+", ...e)})`,
  N0 = (...e) => `calc(${Zu("-", ...e)})`,
  rh = (...e) => `calc(${Zu("*", ...e)})`,
  B0 = (...e) => `calc(${Zu("/", ...e)})`,
  V0 = (e) => {
    const t = VS(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : rh(t, -1);
  },
  wn = Object.assign(
    (e) => ({
      add: (...t) => wn(D0(e, ...t)),
      subtract: (...t) => wn(N0(e, ...t)),
      multiply: (...t) => wn(rh(e, ...t)),
      divide: (...t) => wn(B0(e, ...t)),
      negate: () => wn(V0(e)),
      toString: () => e.toString(),
    }),
    { add: D0, subtract: N0, multiply: rh, divide: B0, negate: V0 }
  );
function AE(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function ME(e) {
  const t = AE(e.toString());
  return IE(zE(t));
}
function zE(e) {
  return e.includes("\\.")
    ? e
    : !Number.isInteger(parseFloat(e.toString()))
    ? e.replace(".", "\\.")
    : e;
}
function IE(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function FE(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function jE(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function OE(e, t = "") {
  return ME(`--${FE(e, t)}`);
}
function D(e, t, n) {
  const r = OE(e, n);
  return { variable: r, reference: jE(r, t) };
}
function LE(e, t) {
  const n = {};
  for (const r of t) {
    if (Array.isArray(r)) {
      const [o, i] = r;
      n[o] = D(`${e}-${o}`, i);
      continue;
    }
    n[r] = D(`${e}-${r}`);
  }
  return n;
}
const DE = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints",
];
function NE(e) {
  return M_(e, DE);
}
function BE(e) {
  return e.semanticTokens;
}
function VE(e) {
  const { __cssMap: t, __cssVars: n, __breakpoints: r, ...o } = e;
  return o;
}
function WE(e) {
  const t = NE(e),
    n = BE(e),
    r = (i) => LS.includes(i) || i === "default",
    o = {};
  return (
    j0(t, (i, s) => {
      i != null && (o[s.join(".")] = { isSemantic: !1, value: i });
    }),
    j0(
      n,
      (i, s) => {
        i != null && (o[s.join(".")] = { isSemantic: !0, value: i });
      },
      { stop: (i) => Object.keys(i).every(r) }
    ),
    o
  );
}
function W0(e, t) {
  return D(String(e).replace(/\./g, "-"), void 0, t);
}
function UE(e) {
  var s;
  const t = WE(e),
    n = (s = e.config) == null ? void 0 : s.cssVarPrefix;
  let r = {};
  const o = {};
  function i(a, l) {
    const c = [String(a).split(".")[0], l].join(".");
    if (!t[c]) return l;
    const { reference: f } = W0(c, n);
    return f;
  }
  for (const [a, l] of Object.entries(t)) {
    const { isSemantic: u, value: c } = l,
      { variable: d, reference: f } = W0(a, n);
    if (!u) {
      if (a.startsWith("space")) {
        const g = a.split("."),
          [v, ...x] = g,
          m = `${v}.-${x.join(".")}`,
          h = wn.negate(c),
          y = wn.negate(f);
        o[m] = { value: h, var: d, varRef: y };
      }
      (r[d] = c), (o[a] = { value: c, var: d, varRef: f });
      continue;
    }
    const p = zt(c) ? c : { default: c };
    (r = an(
      r,
      Object.entries(p).reduce((g, [v, x]) => {
        if (!x) return g;
        const m = i(a, `${x}`);
        if (v === "default") return (g[d] = m), g;
        const h = (Qo == null ? void 0 : Qo[v]) ?? v;
        return (g[h] = { [d]: m }), g;
      }, {})
    )),
      (o[a] = { value: f, var: d, varRef: f });
  }
  return { cssVars: r, cssMap: o };
}
function HE(e) {
  const t = VE(e),
    { cssMap: n, cssVars: r } = UE(t);
  return (
    Object.assign(t, {
      __cssVars: {
        ...{
          "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-ring-offset-width": "0px",
          "--chakra-ring-offset-color": "#fff",
          "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
          "--chakra-ring-offset-shadow": "0 0 #0000",
          "--chakra-ring-shadow": "0 0 #0000",
          "--chakra-space-x-reverse": "0",
          "--chakra-space-y-reverse": "0",
        },
        ...r,
      },
      __cssMap: n,
      __breakpoints: S_(t.breakpoints),
    }),
    t
  );
}
function J(e, t = {}) {
  let n = !1;
  function r() {
    if (!n) {
      n = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...c) {
    r();
    for (const d of c) t[d] = l(d);
    return J(e, t);
  }
  function i(...c) {
    for (const d of c) d in t || (t[d] = l(d));
    return J(e, t);
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(c) {
    const p = `chakra-${(["container", "root"].includes(c ?? "") ? [e] : [e, c])
      .filter(Boolean)
      .join("__")}`;
    return { className: p, selector: `.${p}`, toString: () => c };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: s,
    classnames: a,
    get keys() {
      return Object.keys(t);
    },
    __type: {},
  };
}
const GE = J("accordion").parts("root", "container", "button", "panel", "icon"),
  KE = J("alert").parts("title", "description", "container", "icon", "spinner"),
  YE = J("avatar").parts("label", "badge", "container", "excessLabel", "group"),
  XE = J("breadcrumb").parts("link", "item", "container", "separator");
J("button").parts();
const qE = J("checkbox").parts("control", "icon", "container", "label");
J("progress").parts("track", "filledTrack", "label");
const QE = J("drawer").parts(
    "overlay",
    "dialogContainer",
    "dialog",
    "header",
    "closeButton",
    "body",
    "footer"
  ),
  ZE = J("editable").parts("preview", "input", "textarea"),
  JE = J("form").parts("container", "requiredIndicator", "helperText"),
  e5 = J("formError").parts("text", "icon"),
  t5 = J("input").parts("addon", "field", "element", "group"),
  n5 = J("list").parts("container", "item", "icon"),
  r5 = J("menu").parts(
    "button",
    "list",
    "item",
    "groupTitle",
    "icon",
    "command",
    "divider"
  ),
  o5 = J("modal").parts(
    "overlay",
    "dialogContainer",
    "dialog",
    "header",
    "closeButton",
    "body",
    "footer"
  ),
  i5 = J("numberinput").parts("root", "field", "stepperGroup", "stepper");
J("pininput").parts("field");
const s5 = J("popover").parts(
    "content",
    "header",
    "body",
    "footer",
    "popper",
    "arrow",
    "closeButton"
  ),
  a5 = J("progress").parts("label", "filledTrack", "track"),
  l5 = J("radio").parts("container", "control", "label"),
  u5 = J("select").parts("field", "icon"),
  c5 = J("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
  d5 = J("stat").parts("container", "label", "helpText", "number", "icon"),
  f5 = J("switch").parts("container", "track", "thumb", "label"),
  h5 = J("table").parts(
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "tfoot",
    "caption"
  ),
  p5 = J("tabs").parts(
    "root",
    "tab",
    "tablist",
    "tabpanel",
    "tabpanels",
    "indicator"
  ),
  m5 = J("tag").parts("container", "label", "closeButton"),
  g5 = J("card").parts("container", "header", "body", "footer");
J("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
const { definePartsStyle: v5, defineMultiStyleConfig: y5 } = le(GE.keys),
  b5 = {
    borderTopWidth: "1px",
    borderColor: "inherit",
    _last: { borderBottomWidth: "1px" },
  },
  S5 = {
    transitionProperty: "common",
    transitionDuration: "normal",
    fontSize: "md",
    _focusVisible: { boxShadow: "outline" },
    _hover: { bg: "blackAlpha.50" },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    px: "4",
    py: "2",
  },
  x5 = { pt: "2", px: "4", pb: "5" },
  w5 = { fontSize: "1.25em" },
  k5 = v5({ container: b5, button: S5, panel: x5, icon: w5 }),
  C5 = y5({ baseStyle: k5 });
function Br(e, t, n) {
  return Math.min(Math.max(e, n), t);
}
class P5 extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var ts = P5;
function Wp(e) {
  if (typeof e != "string") throw new ts(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let t = e.trim();
  t = z5.test(e) ? E5(e) : e;
  const n = $5.exec(t);
  if (n) {
    const s = Array.from(n).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(Hs(a, 2), 16)),
      parseInt(Hs(s[3] || "f", 2), 16) / 255,
    ];
  }
  const r = R5.exec(t);
  if (r) {
    const s = Array.from(r).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 16)),
      parseInt(s[3] || "ff", 16) / 255,
    ];
  }
  const o = A5.exec(t);
  if (o) {
    const s = Array.from(o).slice(1);
    return [
      ...s.slice(0, 3).map((a) => parseInt(a, 10)),
      parseFloat(s[3] || "1"),
    ];
  }
  const i = M5.exec(t);
  if (i) {
    const [s, a, l, u] = Array.from(i).slice(1).map(parseFloat);
    if (Br(0, 100, a) !== a) throw new ts(e);
    if (Br(0, 100, l) !== l) throw new ts(e);
    return [...I5(s, a, l), Number.isNaN(u) ? 1 : u];
  }
  throw new ts(e);
}
function T5(e) {
  let t = 5381,
    n = e.length;
  for (; n; ) t = (t * 33) ^ e.charCodeAt(--n);
  return (t >>> 0) % 2341;
}
const U0 = (e) => parseInt(e.replace(/_/g, ""), 36),
  _5 =
    "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm"
      .split(" ")
      .reduce((e, t) => {
        const n = U0(t.substring(0, 3)),
          r = U0(t.substring(3)).toString(16);
        let o = "";
        for (let i = 0; i < 6 - r.length; i++) o += "0";
        return (e[n] = `${o}${r}`), e;
      }, {});
function E5(e) {
  const t = e.toLowerCase().trim(),
    n = _5[T5(t)];
  if (!n) throw new ts(e);
  return `#${n}`;
}
const Hs = (e, t) =>
    Array.from(Array(t))
      .map(() => e)
      .join(""),
  $5 = new RegExp(`^#${Hs("([a-f0-9])", 3)}([a-f0-9])?$`, "i"),
  R5 = new RegExp(`^#${Hs("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"),
  A5 = new RegExp(
    `^rgba?\\(\\s*(\\d+)\\s*${Hs(
      ",\\s*(\\d+)\\s*",
      2
    )}(?:,\\s*([\\d.]+))?\\s*\\)$`,
    "i"
  ),
  M5 =
    /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
  z5 = /^[a-z]+$/i,
  H0 = (e) => Math.round(e * 255),
  I5 = (e, t, n) => {
    let r = n / 100;
    if (t === 0) return [r, r, r].map(H0);
    const o = (((e % 360) + 360) % 360) / 60,
      i = (1 - Math.abs(2 * r - 1)) * (t / 100),
      s = i * (1 - Math.abs((o % 2) - 1));
    let a = 0,
      l = 0,
      u = 0;
    o >= 0 && o < 1
      ? ((a = i), (l = s))
      : o >= 1 && o < 2
      ? ((a = s), (l = i))
      : o >= 2 && o < 3
      ? ((l = i), (u = s))
      : o >= 3 && o < 4
      ? ((l = s), (u = i))
      : o >= 4 && o < 5
      ? ((a = s), (u = i))
      : o >= 5 && o < 6 && ((a = i), (u = s));
    const c = r - i / 2,
      d = a + c,
      f = l + c,
      p = u + c;
    return [d, f, p].map(H0);
  };
function F5(e, t, n, r) {
  return `rgba(${Br(0, 255, e).toFixed()}, ${Br(0, 255, t).toFixed()}, ${Br(
    0,
    255,
    n
  ).toFixed()}, ${parseFloat(Br(0, 1, r).toFixed(3))})`;
}
function j5(e, t) {
  const [n, r, o, i] = Wp(e);
  return F5(n, r, o, i - t);
}
function O5(e) {
  const [t, n, r, o] = Wp(e);
  let i = (s) => {
    const a = Br(0, 255, s).toString(16);
    return a.length === 1 ? `0${a}` : a;
  };
  return `#${i(t)}${i(n)}${i(r)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
const L5 = (e) => Object.keys(e).length === 0;
function D5(e, t, n, r, o) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
    e = e ? e[t[r]] : o;
  return e === o ? n : e;
}
const Qe = (e, t, n) => {
    const r = D5(e, `colors.${t}`, t);
    try {
      return O5(r), r;
    } catch {
      return "#000000";
    }
  },
  N5 = (e) => {
    const [t, n, r] = Wp(e);
    return (t * 299 + n * 587 + r * 114) / 1e3;
  },
  B5 = (e) => (t) => {
    const n = Qe(t, e);
    return N5(n) < 128 ? "dark" : "light";
  },
  V5 = (e) => (t) => B5(e)(t) === "dark",
  pi = (e, t) => (n) => {
    const r = Qe(n, e);
    return j5(r, 1 - t);
  };
function G0(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`,
  };
}
const W5 = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, "0")}`;
function U5(e) {
  const t = W5();
  return !e || L5(e)
    ? t
    : e.string && e.colors
    ? G5(e.string, e.colors)
    : e.string && !e.colors
    ? H5(e.string)
    : e.colors && !e.string
    ? K5(e.colors)
    : t;
}
function H5(e) {
  let t = 0;
  if (e.length === 0) return t.toString();
  for (let r = 0; r < e.length; r += 1)
    (t = e.charCodeAt(r) + ((t << 5) - t)), (t = t & t);
  let n = "#";
  for (let r = 0; r < 3; r += 1) {
    const o = (t >> (r * 8)) & 255;
    n += `00${o.toString(16)}`.substr(-2);
  }
  return n;
}
function G5(e, t) {
  let n = 0;
  if (e.length === 0) return t[0];
  for (let r = 0; r < e.length; r += 1)
    (n = e.charCodeAt(r) + ((n << 5) - n)), (n = n & n);
  return (n = ((n % t.length) + t.length) % t.length), t[n];
}
function K5(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function L(e, t) {
  return (n) => (n.colorMode === "dark" ? t : e);
}
function Up(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t ? (t === "vertical" ? n : r) : {};
}
function WS(e) {
  return zt(e) && e.reference ? e.reference : String(e);
}
const Ju = (e, ...t) => t.map(WS).join(` ${e} `).replace(/calc/g, ""),
  K0 = (...e) => `calc(${Ju("+", ...e)})`,
  Y0 = (...e) => `calc(${Ju("-", ...e)})`,
  oh = (...e) => `calc(${Ju("*", ...e)})`,
  X0 = (...e) => `calc(${Ju("/", ...e)})`,
  q0 = (e) => {
    const t = WS(e);
    return t != null && !Number.isNaN(parseFloat(t))
      ? String(t).startsWith("-")
        ? String(t).slice(1)
        : `-${t}`
      : oh(t, -1);
  },
  kn = Object.assign(
    (e) => ({
      add: (...t) => kn(K0(e, ...t)),
      subtract: (...t) => kn(Y0(e, ...t)),
      multiply: (...t) => kn(oh(e, ...t)),
      divide: (...t) => kn(X0(e, ...t)),
      negate: () => kn(q0(e)),
      toString: () => e.toString(),
    }),
    { add: K0, subtract: Y0, multiply: oh, divide: X0, negate: q0 }
  );
function Y5(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function X5(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function US(e) {
  const t = X5(e.toString());
  return t.includes("\\.") ? e : Y5(e) ? t.replace(".", "\\.") : e;
}
function q5(e, t = "") {
  return [t, US(e)].filter(Boolean).join("-");
}
function Q5(e, t) {
  return `var(${US(e)}${t ? `, ${t}` : ""})`;
}
function Z5(e, t = "") {
  return `--${q5(e, t)}`;
}
function Me(e, t) {
  const n = Z5(e, t == null ? void 0 : t.prefix);
  return { variable: n, reference: Q5(n, J5(t == null ? void 0 : t.fallback)) };
}
function J5(e) {
  return e == null ? void 0 : e.reference;
}
const { definePartsStyle: ma, defineMultiStyleConfig: e$ } = le(KE.keys),
  mt = D("alert-fg"),
  Dn = D("alert-bg"),
  t$ = ma({
    container: { bg: Dn.reference, px: "4", py: "3" },
    title: { fontWeight: "bold", lineHeight: "6", marginEnd: "2" },
    description: { lineHeight: "6" },
    icon: {
      color: mt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "6",
    },
    spinner: {
      color: mt.reference,
      flexShrink: 0,
      marginEnd: "3",
      w: "5",
      h: "5",
    },
  });
function Hp(e) {
  const { theme: t, colorScheme: n } = e,
    r = pi(`${n}.200`, 0.16)(t);
  return { light: `colors.${n}.100`, dark: r };
}
const n$ = ma((e) => {
    const { colorScheme: t } = e,
      n = Hp(e);
    return {
      container: {
        [mt.variable]: `colors.${t}.600`,
        [Dn.variable]: n.light,
        _dark: { [mt.variable]: `colors.${t}.200`, [Dn.variable]: n.dark },
      },
    };
  }),
  r$ = ma((e) => {
    const { colorScheme: t } = e,
      n = Hp(e);
    return {
      container: {
        [mt.variable]: `colors.${t}.600`,
        [Dn.variable]: n.light,
        _dark: { [mt.variable]: `colors.${t}.200`, [Dn.variable]: n.dark },
        paddingStart: "3",
        borderStartWidth: "4px",
        borderStartColor: mt.reference,
      },
    };
  }),
  o$ = ma((e) => {
    const { colorScheme: t } = e,
      n = Hp(e);
    return {
      container: {
        [mt.variable]: `colors.${t}.600`,
        [Dn.variable]: n.light,
        _dark: { [mt.variable]: `colors.${t}.200`, [Dn.variable]: n.dark },
        pt: "2",
        borderTopWidth: "4px",
        borderTopColor: mt.reference,
      },
    };
  }),
  i$ = ma((e) => {
    const { colorScheme: t } = e;
    return {
      container: {
        [mt.variable]: "colors.white",
        [Dn.variable]: `colors.${t}.600`,
        _dark: {
          [mt.variable]: "colors.gray.900",
          [Dn.variable]: `colors.${t}.200`,
        },
        color: mt.reference,
      },
    };
  }),
  s$ = { subtle: n$, "left-accent": r$, "top-accent": o$, solid: i$ },
  a$ = e$({
    baseStyle: t$,
    variants: s$,
    defaultProps: { variant: "subtle", colorScheme: "blue" },
  }),
  HS = {
    px: "1px",
    0.5: "0.125rem",
    1: "0.25rem",
    1.5: "0.375rem",
    2: "0.5rem",
    2.5: "0.625rem",
    3: "0.75rem",
    3.5: "0.875rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
  },
  l$ = {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    prose: "60ch",
  },
  u$ = { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
  GS = { ...HS, ...l$, container: u$ },
  c$ = (e) => typeof e == "function";
function Je(e, ...t) {
  return c$(e) ? e(...t) : e;
}
const { definePartsStyle: KS, defineMultiStyleConfig: d$ } = le(YE.keys),
  Zo = D("avatar-border-color"),
  bs = D("avatar-bg"),
  Gs = D("avatar-font-size"),
  mi = D("avatar-size"),
  f$ = {
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: Zo.reference,
    [Zo.variable]: "white",
    _dark: { [Zo.variable]: "colors.gray.800" },
  },
  h$ = {
    bg: bs.reference,
    fontSize: Gs.reference,
    width: mi.reference,
    height: mi.reference,
    lineHeight: "1",
    [bs.variable]: "colors.gray.200",
    _dark: { [bs.variable]: "colors.whiteAlpha.400" },
  },
  p$ = (e) => {
    const { name: t, theme: n } = e,
      r = t ? U5({ string: t }) : "colors.gray.400",
      o = V5(r)(n);
    let i = "white";
    return (
      o || (i = "gray.800"),
      {
        bg: bs.reference,
        fontSize: Gs.reference,
        color: i,
        borderColor: Zo.reference,
        verticalAlign: "top",
        width: mi.reference,
        height: mi.reference,
        "&:not([data-loaded])": { [bs.variable]: r },
        [Zo.variable]: "colors.white",
        _dark: { [Zo.variable]: "colors.gray.800" },
      }
    );
  },
  m$ = { fontSize: Gs.reference, lineHeight: "1" },
  g$ = KS((e) => ({
    badge: Je(f$, e),
    excessLabel: Je(h$, e),
    container: Je(p$, e),
    label: m$,
  }));
function Kn(e) {
  const t = e !== "100%" ? GS[e] : void 0;
  return KS({
    container: {
      [mi.variable]: t ?? e,
      [Gs.variable]: `calc(${t ?? e} / 2.5)`,
    },
    excessLabel: {
      [mi.variable]: t ?? e,
      [Gs.variable]: `calc(${t ?? e} / 2.5)`,
    },
  });
}
const v$ = {
    "2xs": Kn(4),
    xs: Kn(6),
    sm: Kn(8),
    md: Kn(12),
    lg: Kn(16),
    xl: Kn(24),
    "2xl": Kn(32),
    full: Kn("100%"),
  },
  y$ = d$({ baseStyle: g$, sizes: v$, defaultProps: { size: "md" } }),
  Pe = LE("badge", ["bg", "color", "shadow"]),
  b$ = {
    px: 1,
    textTransform: "uppercase",
    fontSize: "xs",
    borderRadius: "sm",
    fontWeight: "bold",
    bg: Pe.bg.reference,
    color: Pe.color.reference,
    boxShadow: Pe.shadow.reference,
  },
  S$ = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = pi(`${t}.500`, 0.6)(n);
    return {
      [Pe.bg.variable]: `colors.${t}.500`,
      [Pe.color.variable]: "colors.white",
      _dark: {
        [Pe.bg.variable]: r,
        [Pe.color.variable]: "colors.whiteAlpha.800",
      },
    };
  },
  x$ = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = pi(`${t}.200`, 0.16)(n);
    return {
      [Pe.bg.variable]: `colors.${t}.100`,
      [Pe.color.variable]: `colors.${t}.800`,
      _dark: { [Pe.bg.variable]: r, [Pe.color.variable]: `colors.${t}.200` },
    };
  },
  w$ = (e) => {
    const { colorScheme: t, theme: n } = e,
      r = pi(`${t}.200`, 0.8)(n);
    return {
      [Pe.color.variable]: `colors.${t}.500`,
      _dark: { [Pe.color.variable]: r },
      [Pe.shadow.variable]: `inset 0 0 0px 1px ${Pe.color.reference}`,
    };
  },
  k$ = { solid: S$, subtle: x$, outline: w$ },
  Ss = {
    baseStyle: b$,
    variants: k$,
    defaultProps: { variant: "subtle", colorScheme: "gray" },
  },
  { defineMultiStyleConfig: C$, definePartsStyle: P$ } = le(XE.keys),
  md = D("breadcrumb-link-decor"),
  T$ = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    outline: "none",
    color: "inherit",
    textDecoration: md.reference,
    [md.variable]: "none",
    "&:not([aria-current=page])": {
      cursor: "pointer",
      _hover: { [md.variable]: "underline" },
      _focusVisible: { boxShadow: "outline" },
    },
  },
  _$ = P$({ link: T$ }),
  E$ = C$({ baseStyle: _$ }),
  $$ = {
    lineHeight: "1.2",
    borderRadius: "md",
    fontWeight: "semibold",
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: { boxShadow: "outline" },
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: { _disabled: { bg: "initial" } },
  },
  YS = (e) => {
    const { colorScheme: t, theme: n } = e;
    if (t === "gray")
      return {
        color: L("gray.800", "whiteAlpha.900")(e),
        _hover: { bg: L("gray.100", "whiteAlpha.200")(e) },
        _active: { bg: L("gray.200", "whiteAlpha.300")(e) },
      };
    const r = pi(`${t}.200`, 0.12)(n),
      o = pi(`${t}.200`, 0.24)(n);
    return {
      color: L(`${t}.600`, `${t}.200`)(e),
      bg: "transparent",
      _hover: { bg: L(`${t}.50`, r)(e) },
      _active: { bg: L(`${t}.100`, o)(e) },
    };
  },
  R$ = (e) => {
    const { colorScheme: t } = e,
      n = L("gray.200", "whiteAlpha.300")(e);
    return {
      border: "1px solid",
      borderColor: t === "gray" ? n : "currentColor",
      ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
        { marginEnd: "-1px" },
      ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
        { marginBottom: "-1px" },
      ...Je(YS, e),
    };
  },
  A$ = {
    yellow: {
      bg: "yellow.400",
      color: "black",
      hoverBg: "yellow.500",
      activeBg: "yellow.600",
    },
    cyan: {
      bg: "cyan.400",
      color: "black",
      hoverBg: "cyan.500",
      activeBg: "cyan.600",
    },
  },
  M$ = (e) => {
    const { colorScheme: t } = e;
    if (t === "gray") {
      const a = L("gray.100", "whiteAlpha.200")(e);
      return {
        bg: a,
        color: L("gray.800", "whiteAlpha.900")(e),
        _hover: {
          bg: L("gray.200", "whiteAlpha.300")(e),
          _disabled: { bg: a },
        },
        _active: { bg: L("gray.300", "whiteAlpha.400")(e) },
      };
    }
    const {
        bg: n = `${t}.500`,
        color: r = "white",
        hoverBg: o = `${t}.600`,
        activeBg: i = `${t}.700`,
      } = A$[t] ?? {},
      s = L(n, `${t}.200`)(e);
    return {
      bg: s,
      color: L(r, "gray.800")(e),
      _hover: { bg: L(o, `${t}.300`)(e), _disabled: { bg: s } },
      _active: { bg: L(i, `${t}.400`)(e) },
    };
  },
  z$ = (e) => {
    const { colorScheme: t } = e;
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: L(`${t}.500`, `${t}.200`)(e),
      _hover: {
        textDecoration: "underline",
        _disabled: { textDecoration: "none" },
      },
      _active: { color: L(`${t}.700`, `${t}.500`)(e) },
    };
  },
  I$ = {
    bg: "none",
    color: "inherit",
    display: "inline",
    lineHeight: "inherit",
    m: "0",
    p: "0",
  },
  F$ = { ghost: YS, outline: R$, solid: M$, link: z$, unstyled: I$ },
  j$ = {
    lg: { h: "12", minW: "12", fontSize: "lg", px: "6" },
    md: { h: "10", minW: "10", fontSize: "md", px: "4" },
    sm: { h: "8", minW: "8", fontSize: "sm", px: "3" },
    xs: { h: "6", minW: "6", fontSize: "xs", px: "2" },
  },
  O$ = {
    baseStyle: $$,
    variants: F$,
    sizes: j$,
    defaultProps: { variant: "solid", size: "md", colorScheme: "gray" },
  },
  { definePartsStyle: Hr, defineMultiStyleConfig: L$ } = le(g5.keys),
  bu = D("card-bg"),
  Rn = D("card-padding"),
  XS = D("card-shadow"),
  El = D("card-radius"),
  qS = D("card-border-width", "0"),
  QS = D("card-border-color"),
  D$ = Hr({
    container: {
      [bu.variable]: "colors.chakra-body-bg",
      backgroundColor: bu.reference,
      boxShadow: XS.reference,
      borderRadius: El.reference,
      color: "chakra-body-text",
      borderWidth: qS.reference,
      borderColor: QS.reference,
    },
    body: { padding: Rn.reference, flex: "1 1 0%" },
    header: { padding: Rn.reference },
    footer: { padding: Rn.reference },
  }),
  N$ = {
    sm: Hr({
      container: { [El.variable]: "radii.base", [Rn.variable]: "space.3" },
    }),
    md: Hr({
      container: { [El.variable]: "radii.md", [Rn.variable]: "space.5" },
    }),
    lg: Hr({
      container: { [El.variable]: "radii.xl", [Rn.variable]: "space.7" },
    }),
  },
  B$ = {
    elevated: Hr({
      container: {
        [XS.variable]: "shadows.base",
        _dark: { [bu.variable]: "colors.gray.700" },
      },
    }),
    outline: Hr({
      container: {
        [qS.variable]: "1px",
        [QS.variable]: "colors.chakra-border-color",
      },
    }),
    filled: Hr({ container: { [bu.variable]: "colors.chakra-subtle-bg" } }),
    unstyled: {
      body: { [Rn.variable]: 0 },
      header: { [Rn.variable]: 0 },
      footer: { [Rn.variable]: 0 },
    },
  },
  V$ = L$({
    baseStyle: D$,
    variants: B$,
    sizes: N$,
    defaultProps: { variant: "elevated", size: "md" },
  }),
  { definePartsStyle: $l, defineMultiStyleConfig: W$ } = le(qE.keys),
  xs = D("checkbox-size"),
  U$ = (e) => {
    const { colorScheme: t } = e;
    return {
      w: xs.reference,
      h: xs.reference,
      transitionProperty: "box-shadow",
      transitionDuration: "normal",
      border: "2px solid",
      borderRadius: "sm",
      borderColor: "inherit",
      color: "white",
      _checked: {
        bg: L(`${t}.500`, `${t}.200`)(e),
        borderColor: L(`${t}.500`, `${t}.200`)(e),
        color: L("white", "gray.900")(e),
        _hover: {
          bg: L(`${t}.600`, `${t}.300`)(e),
          borderColor: L(`${t}.600`, `${t}.300`)(e),
        },
        _disabled: {
          borderColor: L("gray.200", "transparent")(e),
          bg: L("gray.200", "whiteAlpha.300")(e),
          color: L("gray.500", "whiteAlpha.500")(e),
        },
      },
      _indeterminate: {
        bg: L(`${t}.500`, `${t}.200`)(e),
        borderColor: L(`${t}.500`, `${t}.200`)(e),
        color: L("white", "gray.900")(e),
      },
      _disabled: {
        bg: L("gray.100", "whiteAlpha.100")(e),
        borderColor: L("gray.100", "transparent")(e),
      },
      _focusVisible: { boxShadow: "outline" },
      _invalid: { borderColor: L("red.500", "red.300")(e) },
    };
  },
  H$ = { _disabled: { cursor: "not-allowed" } },
  G$ = { userSelect: "none", _disabled: { opacity: 0.4 } },
  K$ = { transitionProperty: "transform", transitionDuration: "normal" },
  Y$ = $l((e) => ({ icon: K$, container: H$, control: Je(U$, e), label: G$ })),
  X$ = {
    sm: $l({
      control: { [xs.variable]: "sizes.3" },
      label: { fontSize: "sm" },
      icon: { fontSize: "3xs" },
    }),
    md: $l({
      control: { [xs.variable]: "sizes.4" },
      label: { fontSize: "md" },
      icon: { fontSize: "2xs" },
    }),
    lg: $l({
      control: { [xs.variable]: "sizes.5" },
      label: { fontSize: "lg" },
      icon: { fontSize: "2xs" },
    }),
  },
  Zn = W$({
    baseStyle: Y$,
    sizes: X$,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  ws = Me("close-button-size"),
  Ui = Me("close-button-bg"),
  q$ = {
    w: [ws.reference],
    h: [ws.reference],
    borderRadius: "md",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: { opacity: 0.4, cursor: "not-allowed", boxShadow: "none" },
    _hover: {
      [Ui.variable]: "colors.blackAlpha.100",
      _dark: { [Ui.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [Ui.variable]: "colors.blackAlpha.200",
      _dark: { [Ui.variable]: "colors.whiteAlpha.200" },
    },
    _focusVisible: { boxShadow: "outline" },
    bg: Ui.reference,
  },
  Q$ = {
    lg: { [ws.variable]: "sizes.10", fontSize: "md" },
    md: { [ws.variable]: "sizes.8", fontSize: "xs" },
    sm: { [ws.variable]: "sizes.6", fontSize: "2xs" },
  },
  Z$ = { baseStyle: q$, sizes: Q$, defaultProps: { size: "md" } },
  { variants: J$, defaultProps: eR } = Ss,
  tR = {
    fontFamily: "mono",
    fontSize: "sm",
    px: "0.2em",
    borderRadius: "sm",
    bg: Pe.bg.reference,
    color: Pe.color.reference,
    boxShadow: Pe.shadow.reference,
  },
  nR = { baseStyle: tR, variants: J$, defaultProps: eR },
  rR = { w: "100%", mx: "auto", maxW: "prose", px: "4" },
  oR = { baseStyle: rR },
  iR = { opacity: 0.6, borderColor: "inherit" },
  sR = { borderStyle: "solid" },
  aR = { borderStyle: "dashed" },
  lR = { solid: sR, dashed: aR },
  uR = { baseStyle: iR, variants: lR, defaultProps: { variant: "solid" } },
  { definePartsStyle: ih, defineMultiStyleConfig: cR } = le(QE.keys),
  gd = D("drawer-bg"),
  vd = D("drawer-box-shadow");
function yo(e) {
  return ih(
    e === "full"
      ? { dialog: { maxW: "100vw", h: "100vh" } }
      : { dialog: { maxW: e } }
  );
}
const dR = { bg: "blackAlpha.600", zIndex: "modal" },
  fR = { display: "flex", zIndex: "modal", justifyContent: "center" },
  hR = (e) => {
    const { isFullHeight: t } = e;
    return {
      ...(t && { height: "100vh" }),
      zIndex: "modal",
      maxH: "100vh",
      color: "inherit",
      [gd.variable]: "colors.white",
      [vd.variable]: "shadows.lg",
      _dark: {
        [gd.variable]: "colors.gray.700",
        [vd.variable]: "shadows.dark-lg",
      },
      bg: gd.reference,
      boxShadow: vd.reference,
    };
  },
  pR = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  mR = { position: "absolute", top: "2", insetEnd: "3" },
  gR = { px: "6", py: "2", flex: "1", overflow: "auto" },
  vR = { px: "6", py: "4" },
  yR = ih((e) => ({
    overlay: dR,
    dialogContainer: fR,
    dialog: Je(hR, e),
    header: pR,
    closeButton: mR,
    body: gR,
    footer: vR,
  })),
  bR = {
    xs: yo("xs"),
    sm: yo("md"),
    md: yo("lg"),
    lg: yo("2xl"),
    xl: yo("4xl"),
    full: yo("full"),
  },
  SR = cR({ baseStyle: yR, sizes: bR, defaultProps: { size: "xs" } }),
  { definePartsStyle: xR, defineMultiStyleConfig: wR } = le(ZE.keys),
  kR = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
  },
  CR = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  PR = {
    borderRadius: "md",
    py: "1",
    transitionProperty: "common",
    transitionDuration: "normal",
    width: "full",
    _focusVisible: { boxShadow: "outline" },
    _placeholder: { opacity: 0.6 },
  },
  TR = xR({ preview: kR, input: CR, textarea: PR }),
  _R = wR({ baseStyle: TR }),
  { definePartsStyle: ER, defineMultiStyleConfig: $R } = le(JE.keys),
  Jo = D("form-control-color"),
  RR = {
    marginStart: "1",
    [Jo.variable]: "colors.red.500",
    _dark: { [Jo.variable]: "colors.red.300" },
    color: Jo.reference,
  },
  AR = {
    mt: "2",
    [Jo.variable]: "colors.gray.600",
    _dark: { [Jo.variable]: "colors.whiteAlpha.600" },
    color: Jo.reference,
    lineHeight: "normal",
    fontSize: "sm",
  },
  MR = ER({
    container: { width: "100%", position: "relative" },
    requiredIndicator: RR,
    helperText: AR,
  }),
  zR = $R({ baseStyle: MR }),
  { definePartsStyle: IR, defineMultiStyleConfig: FR } = le(e5.keys),
  ei = D("form-error-color"),
  jR = {
    [ei.variable]: "colors.red.500",
    _dark: { [ei.variable]: "colors.red.300" },
    color: ei.reference,
    mt: "2",
    fontSize: "sm",
    lineHeight: "normal",
  },
  OR = {
    marginEnd: "0.5em",
    [ei.variable]: "colors.red.500",
    _dark: { [ei.variable]: "colors.red.300" },
    color: ei.reference,
  },
  LR = IR({ text: jR, icon: OR }),
  DR = FR({ baseStyle: LR }),
  NR = {
    fontSize: "md",
    marginEnd: "3",
    mb: "2",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    opacity: 1,
    _disabled: { opacity: 0.4 },
  },
  BR = { baseStyle: NR },
  VR = { fontFamily: "heading", fontWeight: "bold" },
  WR = {
    "4xl": { fontSize: ["6xl", null, "7xl"], lineHeight: 1 },
    "3xl": { fontSize: ["5xl", null, "6xl"], lineHeight: 1 },
    "2xl": { fontSize: ["4xl", null, "5xl"], lineHeight: [1.2, null, 1] },
    xl: { fontSize: ["3xl", null, "4xl"], lineHeight: [1.33, null, 1.2] },
    lg: { fontSize: ["2xl", null, "3xl"], lineHeight: [1.33, null, 1.2] },
    md: { fontSize: "xl", lineHeight: 1.2 },
    sm: { fontSize: "md", lineHeight: 1.2 },
    xs: { fontSize: "sm", lineHeight: 1.2 },
  },
  UR = { baseStyle: VR, sizes: WR, defaultProps: { size: "xl" } },
  { definePartsStyle: _n, defineMultiStyleConfig: HR } = le(t5.keys),
  Io = D("input-height"),
  Fo = D("input-font-size"),
  jo = D("input-padding"),
  Oo = D("input-border-radius"),
  GR = _n({
    addon: {
      height: Io.reference,
      fontSize: Fo.reference,
      px: jo.reference,
      borderRadius: Oo.reference,
    },
    field: {
      width: "100%",
      height: Io.reference,
      fontSize: Fo.reference,
      px: jo.reference,
      borderRadius: Oo.reference,
      minWidth: 0,
      outline: 0,
      position: "relative",
      appearance: "none",
      transitionProperty: "common",
      transitionDuration: "normal",
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
    },
  }),
  Yn = {
    lg: {
      [Fo.variable]: "fontSizes.lg",
      [jo.variable]: "space.4",
      [Oo.variable]: "radii.md",
      [Io.variable]: "sizes.12",
    },
    md: {
      [Fo.variable]: "fontSizes.md",
      [jo.variable]: "space.4",
      [Oo.variable]: "radii.md",
      [Io.variable]: "sizes.10",
    },
    sm: {
      [Fo.variable]: "fontSizes.sm",
      [jo.variable]: "space.3",
      [Oo.variable]: "radii.sm",
      [Io.variable]: "sizes.8",
    },
    xs: {
      [Fo.variable]: "fontSizes.xs",
      [jo.variable]: "space.2",
      [Oo.variable]: "radii.sm",
      [Io.variable]: "sizes.6",
    },
  },
  KR = {
    lg: _n({ field: Yn.lg, group: Yn.lg }),
    md: _n({ field: Yn.md, group: Yn.md }),
    sm: _n({ field: Yn.sm, group: Yn.sm }),
    xs: _n({ field: Yn.xs, group: Yn.xs }),
  };
function Gp(e) {
  const { focusBorderColor: t, errorBorderColor: n } = e;
  return {
    focusBorderColor: t || L("blue.500", "blue.300")(e),
    errorBorderColor: n || L("red.500", "red.300")(e),
  };
}
const YR = _n((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Gp(e);
    return {
      field: {
        border: "1px solid",
        borderColor: "inherit",
        bg: "inherit",
        _hover: { borderColor: L("gray.300", "whiteAlpha.400")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: Qe(t, r), boxShadow: `0 0 0 1px ${Qe(t, r)}` },
        _focusVisible: {
          zIndex: 1,
          borderColor: Qe(t, n),
          boxShadow: `0 0 0 1px ${Qe(t, n)}`,
        },
      },
      addon: {
        border: "1px solid",
        borderColor: L("inherit", "whiteAlpha.50")(e),
        bg: L("gray.100", "whiteAlpha.300")(e),
      },
    };
  }),
  XR = _n((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Gp(e);
    return {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        bg: L("gray.100", "whiteAlpha.50")(e),
        _hover: { bg: L("gray.200", "whiteAlpha.100")(e) },
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: { borderColor: Qe(t, r) },
        _focusVisible: { bg: "transparent", borderColor: Qe(t, n) },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
        bg: L("gray.100", "whiteAlpha.50")(e),
      },
    };
  }),
  qR = _n((e) => {
    const { theme: t } = e,
      { focusBorderColor: n, errorBorderColor: r } = Gp(e);
    return {
      field: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
        _readOnly: { boxShadow: "none !important", userSelect: "all" },
        _invalid: {
          borderColor: Qe(t, r),
          boxShadow: `0px 1px 0px 0px ${Qe(t, r)}`,
        },
        _focusVisible: {
          borderColor: Qe(t, n),
          boxShadow: `0px 1px 0px 0px ${Qe(t, n)}`,
        },
      },
      addon: {
        borderBottom: "2px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent",
      },
    };
  }),
  QR = _n({
    field: { bg: "transparent", px: "0", height: "auto" },
    addon: { bg: "transparent", px: "0", height: "auto" },
  }),
  ZR = { outline: YR, filled: XR, flushed: qR, unstyled: QR },
  Z = HR({
    baseStyle: GR,
    sizes: KR,
    variants: ZR,
    defaultProps: { size: "md", variant: "outline" },
  }),
  yd = D("kbd-bg"),
  JR = {
    [yd.variable]: "colors.gray.100",
    _dark: { [yd.variable]: "colors.whiteAlpha.100" },
    bg: yd.reference,
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap",
  },
  eA = { baseStyle: JR },
  tA = {
    transitionProperty: "common",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    cursor: "pointer",
    textDecoration: "none",
    outline: "none",
    color: "inherit",
    _hover: { textDecoration: "underline" },
    _focusVisible: { boxShadow: "outline" },
  },
  nA = { baseStyle: tA },
  { defineMultiStyleConfig: rA, definePartsStyle: oA } = le(n5.keys),
  iA = { marginEnd: "2", display: "inline", verticalAlign: "text-bottom" },
  sA = oA({ icon: iA }),
  aA = rA({ baseStyle: sA }),
  { defineMultiStyleConfig: lA, definePartsStyle: uA } = le(r5.keys),
  en = D("menu-bg"),
  bd = D("menu-shadow"),
  cA = {
    [en.variable]: "#fff",
    [bd.variable]: "shadows.sm",
    _dark: {
      [en.variable]: "colors.gray.700",
      [bd.variable]: "shadows.dark-lg",
    },
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: "dropdown",
    borderRadius: "md",
    borderWidth: "1px",
    bg: en.reference,
    boxShadow: bd.reference,
  },
  dA = {
    py: "1.5",
    px: "3",
    transitionProperty: "background",
    transitionDuration: "ultra-fast",
    transitionTimingFunction: "ease-in",
    _focus: {
      [en.variable]: "colors.gray.100",
      _dark: { [en.variable]: "colors.whiteAlpha.100" },
    },
    _active: {
      [en.variable]: "colors.gray.200",
      _dark: { [en.variable]: "colors.whiteAlpha.200" },
    },
    _expanded: {
      [en.variable]: "colors.gray.100",
      _dark: { [en.variable]: "colors.whiteAlpha.100" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
    bg: en.reference,
  },
  fA = { mx: 4, my: 2, fontWeight: "semibold", fontSize: "sm" },
  hA = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  pA = { opacity: 0.6 },
  mA = {
    border: 0,
    borderBottom: "1px solid",
    borderColor: "inherit",
    my: "2",
    opacity: 0.6,
  },
  gA = { transitionProperty: "common", transitionDuration: "normal" },
  vA = uA({
    button: gA,
    list: cA,
    item: dA,
    groupTitle: fA,
    icon: hA,
    command: pA,
    divider: mA,
  }),
  yA = lA({ baseStyle: vA }),
  { defineMultiStyleConfig: bA, definePartsStyle: sh } = le(o5.keys),
  Sd = D("modal-bg"),
  xd = D("modal-shadow"),
  SA = { bg: "blackAlpha.600", zIndex: "modal" },
  xA = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      display: "flex",
      zIndex: "modal",
      justifyContent: "center",
      alignItems: t ? "center" : "flex-start",
      overflow: n === "inside" ? "hidden" : "auto",
      overscrollBehaviorY: "none",
    };
  },
  wA = (e) => {
    const { isCentered: t, scrollBehavior: n } = e;
    return {
      borderRadius: "md",
      color: "inherit",
      my: t ? "auto" : "16",
      mx: t ? "auto" : void 0,
      zIndex: "modal",
      maxH: n === "inside" ? "calc(100% - 7.5rem)" : void 0,
      [Sd.variable]: "colors.white",
      [xd.variable]: "shadows.lg",
      _dark: {
        [Sd.variable]: "colors.gray.700",
        [xd.variable]: "shadows.dark-lg",
      },
      bg: Sd.reference,
      boxShadow: xd.reference,
    };
  },
  kA = { px: "6", py: "4", fontSize: "xl", fontWeight: "semibold" },
  CA = { position: "absolute", top: "2", insetEnd: "3" },
  PA = (e) => {
    const { scrollBehavior: t } = e;
    return {
      px: "6",
      py: "2",
      flex: "1",
      overflow: t === "inside" ? "auto" : void 0,
    };
  },
  TA = { px: "6", py: "4" },
  _A = sh((e) => ({
    overlay: SA,
    dialogContainer: Je(xA, e),
    dialog: Je(wA, e),
    header: kA,
    closeButton: CA,
    body: Je(PA, e),
    footer: TA,
  }));
function Dt(e) {
  return sh(
    e === "full"
      ? {
          dialog: { maxW: "100vw", minH: "$100vh", my: "0", borderRadius: "0" },
        }
      : { dialog: { maxW: e } }
  );
}
const EA = {
    xs: Dt("xs"),
    sm: Dt("sm"),
    md: Dt("md"),
    lg: Dt("lg"),
    xl: Dt("xl"),
    "2xl": Dt("2xl"),
    "3xl": Dt("3xl"),
    "4xl": Dt("4xl"),
    "5xl": Dt("5xl"),
    "6xl": Dt("6xl"),
    full: Dt("full"),
  },
  $A = bA({ baseStyle: _A, sizes: EA, defaultProps: { size: "md" } }),
  ZS = {
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
    lineHeights: {
      normal: "normal",
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fonts: {
      heading:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    },
    fontSizes: {
      "3xs": "0.45rem",
      "2xs": "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  { defineMultiStyleConfig: RA, definePartsStyle: JS } = le(i5.keys),
  Kp = Me("number-input-stepper-width"),
  ex = Me("number-input-input-padding"),
  AA = kn(Kp).add("0.5rem").toString(),
  wd = Me("number-input-bg"),
  kd = Me("number-input-color"),
  Cd = Me("number-input-border-color"),
  MA = { [Kp.variable]: "sizes.6", [ex.variable]: AA },
  zA = (e) => {
    var t;
    return ((t = Je(Z.baseStyle, e)) == null ? void 0 : t.field) ?? {};
  },
  IA = { width: Kp.reference },
  FA = {
    borderStart: "1px solid",
    borderStartColor: Cd.reference,
    color: kd.reference,
    bg: wd.reference,
    [kd.variable]: "colors.chakra-body-text",
    [Cd.variable]: "colors.chakra-border-color",
    _dark: {
      [kd.variable]: "colors.whiteAlpha.800",
      [Cd.variable]: "colors.whiteAlpha.300",
    },
    _active: {
      [wd.variable]: "colors.gray.200",
      _dark: { [wd.variable]: "colors.whiteAlpha.300" },
    },
    _disabled: { opacity: 0.4, cursor: "not-allowed" },
  },
  jA = JS((e) => ({
    root: MA,
    field: Je(zA, e) ?? {},
    stepperGroup: IA,
    stepper: FA,
  }));
function Ja(e) {
  var i, s;
  const t = (i = Z.sizes) == null ? void 0 : i[e],
    n = { lg: "md", md: "md", sm: "sm", xs: "sm" },
    r = ((s = t.field) == null ? void 0 : s.fontSize) ?? "md",
    o = ZS.fontSizes[r];
  return JS({
    field: { ...t.field, paddingInlineEnd: ex.reference, verticalAlign: "top" },
    stepper: {
      fontSize: kn(o).multiply(0.75).toString(),
      _first: { borderTopEndRadius: n[e] },
      _last: { borderBottomEndRadius: n[e], mt: "-1px", borderTopWidth: 1 },
    },
  });
}
const OA = { xs: Ja("xs"), sm: Ja("sm"), md: Ja("md"), lg: Ja("lg") },
  LA = RA({
    baseStyle: jA,
    sizes: OA,
    variants: Z.variants,
    defaultProps: Z.defaultProps,
  });
var i1;
const DA = {
    ...((i1 = Z.baseStyle) == null ? void 0 : i1.field),
    textAlign: "center",
  },
  NA = {
    lg: { fontSize: "lg", w: 12, h: 12, borderRadius: "md" },
    md: { fontSize: "md", w: 10, h: 10, borderRadius: "md" },
    sm: { fontSize: "sm", w: 8, h: 8, borderRadius: "sm" },
    xs: { fontSize: "xs", w: 6, h: 6, borderRadius: "sm" },
  };
var s1;
const BA = {
    outline: (e) => {
      var t, n;
      return (
        ((n = Je((t = Z.variants) == null ? void 0 : t.outline, e)) == null
          ? void 0
          : n.field) ?? {}
      );
    },
    flushed: (e) => {
      var t, n;
      return (
        ((n = Je((t = Z.variants) == null ? void 0 : t.flushed, e)) == null
          ? void 0
          : n.field) ?? {}
      );
    },
    filled: (e) => {
      var t, n;
      return (
        ((n = Je((t = Z.variants) == null ? void 0 : t.filled, e)) == null
          ? void 0
          : n.field) ?? {}
      );
    },
    unstyled: ((s1 = Z.variants) == null ? void 0 : s1.unstyled.field) ?? {},
  },
  VA = { baseStyle: DA, sizes: NA, variants: BA, defaultProps: Z.defaultProps },
  { defineMultiStyleConfig: WA, definePartsStyle: UA } = le(s5.keys),
  el = Me("popper-bg"),
  HA = Me("popper-arrow-bg"),
  Q0 = Me("popper-arrow-shadow-color"),
  GA = { zIndex: "popover" },
  KA = {
    [el.variable]: "colors.white",
    bg: el.reference,
    [HA.variable]: el.reference,
    [Q0.variable]: "colors.gray.200",
    _dark: {
      [el.variable]: "colors.gray.700",
      [Q0.variable]: "colors.whiteAlpha.300",
    },
    width: "xs",
    border: "1px solid",
    borderColor: "inherit",
    borderRadius: "md",
    boxShadow: "sm",
    zIndex: "inherit",
    _focusVisible: { outline: 0, boxShadow: "outline" },
  },
  YA = { px: 3, py: 2, borderBottomWidth: "1px" },
  XA = { px: 3, py: 2 },
  qA = { px: 3, py: 2, borderTopWidth: "1px" },
  QA = {
    position: "absolute",
    borderRadius: "md",
    top: 1,
    insetEnd: 2,
    padding: 2,
  },
  ZA = UA({
    popper: GA,
    content: KA,
    header: YA,
    body: XA,
    footer: qA,
    closeButton: QA,
  }),
  JA = WA({ baseStyle: ZA }),
  { defineMultiStyleConfig: eM, definePartsStyle: ns } = le(a5.keys),
  tM = (e) => {
    const { colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o } = e,
      i = L(G0(), G0("1rem", "rgba(0,0,0,0.1)"))(e),
      s = L(`${t}.500`, `${t}.200`)(e),
      a = `linear-gradient(
    to right,
    transparent 0%,
    ${Qe(n, s)} 50%,
    transparent 100%
  )`;
    return { ...(!r && o && i), ...(r ? { bgImage: a } : { bgColor: s }) };
  },
  nM = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
  },
  rM = (e) => ({ bg: L("gray.100", "whiteAlpha.300")(e) }),
  oM = (e) => ({
    transitionProperty: "common",
    transitionDuration: "slow",
    ...tM(e),
  }),
  iM = ns((e) => ({ label: nM, filledTrack: oM(e), track: rM(e) })),
  sM = {
    xs: ns({ track: { h: "1" } }),
    sm: ns({ track: { h: "2" } }),
    md: ns({ track: { h: "3" } }),
    lg: ns({ track: { h: "4" } }),
  },
  aM = eM({
    sizes: sM,
    baseStyle: iM,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: lM, definePartsStyle: Rl } = le(l5.keys),
  uM = (e) => {
    var n;
    const t = (n = Je(Zn.baseStyle, e)) == null ? void 0 : n.control;
    return {
      ...t,
      borderRadius: "full",
      _checked: {
        ...(t == null ? void 0 : t._checked),
        _before: {
          content: '""',
          display: "inline-block",
          pos: "relative",
          w: "50%",
          h: "50%",
          borderRadius: "50%",
          bg: "currentColor",
        },
      },
    };
  },
  cM = Rl((e) => {
    var t, n;
    return {
      label: (t = Zn.baseStyle) == null ? void 0 : t.call(Zn, e).label,
      container: (n = Zn.baseStyle) == null ? void 0 : n.call(Zn, e).container,
      control: uM(e),
    };
  }),
  dM = {
    md: Rl({ control: { w: "4", h: "4" }, label: { fontSize: "md" } }),
    lg: Rl({ control: { w: "5", h: "5" }, label: { fontSize: "lg" } }),
    sm: Rl({ control: { width: "3", height: "3" }, label: { fontSize: "sm" } }),
  },
  fM = lM({
    baseStyle: cM,
    sizes: dM,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: hM, definePartsStyle: pM } = le(u5.keys),
  tl = D("select-bg");
var a1;
const mM = {
    ...((a1 = Z.baseStyle) == null ? void 0 : a1.field),
    appearance: "none",
    paddingBottom: "1px",
    lineHeight: "normal",
    bg: tl.reference,
    [tl.variable]: "colors.white",
    _dark: { [tl.variable]: "colors.gray.700" },
    "> option, > optgroup": { bg: tl.reference },
  },
  gM = {
    width: "6",
    height: "100%",
    insetEnd: "2",
    position: "relative",
    color: "currentColor",
    fontSize: "xl",
    _disabled: { opacity: 0.5 },
  },
  vM = pM({ field: mM, icon: gM }),
  nl = { paddingInlineEnd: "8" };
var l1, u1, c1, d1, f1, h1, p1, m1;
const yM = {
    lg: {
      ...((l1 = Z.sizes) == null ? void 0 : l1.lg),
      field: { ...((u1 = Z.sizes) == null ? void 0 : u1.lg.field), ...nl },
    },
    md: {
      ...((c1 = Z.sizes) == null ? void 0 : c1.md),
      field: { ...((d1 = Z.sizes) == null ? void 0 : d1.md.field), ...nl },
    },
    sm: {
      ...((f1 = Z.sizes) == null ? void 0 : f1.sm),
      field: { ...((h1 = Z.sizes) == null ? void 0 : h1.sm.field), ...nl },
    },
    xs: {
      ...((p1 = Z.sizes) == null ? void 0 : p1.xs),
      field: { ...((m1 = Z.sizes) == null ? void 0 : m1.xs.field), ...nl },
      icon: { insetEnd: "1" },
    },
  },
  bM = hM({
    baseStyle: vM,
    sizes: yM,
    variants: Z.variants,
    defaultProps: Z.defaultProps,
  }),
  Pd = D("skeleton-start-color"),
  Td = D("skeleton-end-color"),
  SM = {
    [Pd.variable]: "colors.gray.100",
    [Td.variable]: "colors.gray.400",
    _dark: {
      [Pd.variable]: "colors.gray.800",
      [Td.variable]: "colors.gray.600",
    },
    background: Pd.reference,
    borderColor: Td.reference,
    opacity: 0.7,
    borderRadius: "sm",
  },
  xM = { baseStyle: SM },
  _d = D("skip-link-bg"),
  wM = {
    borderRadius: "md",
    fontWeight: "semibold",
    _focusVisible: {
      boxShadow: "outline",
      padding: "4",
      position: "fixed",
      top: "6",
      insetStart: "6",
      [_d.variable]: "colors.white",
      _dark: { [_d.variable]: "colors.gray.700" },
      bg: _d.reference,
    },
  },
  kM = { baseStyle: wM },
  { defineMultiStyleConfig: CM, definePartsStyle: ec } = le(c5.keys),
  ro = D("slider-thumb-size"),
  Ks = D("slider-track-size"),
  tr = D("slider-bg"),
  PM = (e) => {
    const { orientation: t } = e;
    return {
      display: "inline-block",
      position: "relative",
      cursor: "pointer",
      _disabled: { opacity: 0.6, cursor: "default", pointerEvents: "none" },
      ...Up({
        orientation: t,
        vertical: { h: "100%", px: wn(ro.reference).divide(2).toString() },
        horizontal: { w: "100%", py: wn(ro.reference).divide(2).toString() },
      }),
    };
  },
  TM = (e) => ({
    ...Up({
      orientation: e.orientation,
      horizontal: { h: Ks.reference },
      vertical: { w: Ks.reference },
    }),
    overflow: "hidden",
    borderRadius: "sm",
    [tr.variable]: "colors.gray.200",
    _dark: { [tr.variable]: "colors.whiteAlpha.200" },
    _disabled: {
      [tr.variable]: "colors.gray.300",
      _dark: { [tr.variable]: "colors.whiteAlpha.300" },
    },
    bg: tr.reference,
  }),
  _M = (e) => {
    const { orientation: t } = e;
    return {
      ...Up({
        orientation: t,
        vertical: {
          left: "50%",
          transform: "translateX(-50%)",
          _active: { transform: "translateX(-50%) scale(1.15)" },
        },
        horizontal: {
          top: "50%",
          transform: "translateY(-50%)",
          _active: { transform: "translateY(-50%) scale(1.15)" },
        },
      }),
      w: ro.reference,
      h: ro.reference,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      outline: 0,
      zIndex: 1,
      borderRadius: "full",
      bg: "white",
      boxShadow: "base",
      border: "1px solid",
      borderColor: "transparent",
      transitionProperty: "transform",
      transitionDuration: "normal",
      _focusVisible: { boxShadow: "outline" },
      _disabled: { bg: "gray.300" },
    };
  },
  EM = (e) => {
    const { colorScheme: t } = e;
    return {
      width: "inherit",
      height: "inherit",
      [tr.variable]: `colors.${t}.500`,
      _dark: { [tr.variable]: `colors.${t}.200` },
      bg: tr.reference,
    };
  },
  $M = ec((e) => ({
    container: PM(e),
    track: TM(e),
    thumb: _M(e),
    filledTrack: EM(e),
  })),
  RM = ec({
    container: { [ro.variable]: "sizes.4", [Ks.variable]: "sizes.1" },
  }),
  AM = ec({
    container: { [ro.variable]: "sizes.3.5", [Ks.variable]: "sizes.1" },
  }),
  MM = ec({
    container: { [ro.variable]: "sizes.2.5", [Ks.variable]: "sizes.0.5" },
  }),
  zM = { lg: RM, md: AM, sm: MM },
  IM = CM({
    baseStyle: $M,
    sizes: zM,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  jr = Me("spinner-size"),
  FM = { width: [jr.reference], height: [jr.reference] },
  jM = {
    xs: { [jr.variable]: "sizes.3" },
    sm: { [jr.variable]: "sizes.4" },
    md: { [jr.variable]: "sizes.6" },
    lg: { [jr.variable]: "sizes.8" },
    xl: { [jr.variable]: "sizes.12" },
  },
  OM = { baseStyle: FM, sizes: jM, defaultProps: { size: "md" } },
  { defineMultiStyleConfig: LM, definePartsStyle: tx } = le(d5.keys),
  DM = { fontWeight: "medium" },
  NM = { opacity: 0.8, marginBottom: "2" },
  BM = { verticalAlign: "baseline", fontWeight: "semibold" },
  VM = { marginEnd: 1, w: "3.5", h: "3.5", verticalAlign: "middle" },
  WM = tx({ container: {}, label: DM, helpText: NM, number: BM, icon: VM }),
  UM = {
    md: tx({
      label: { fontSize: "sm" },
      helpText: { fontSize: "sm" },
      number: { fontSize: "2xl" },
    }),
  },
  HM = LM({ baseStyle: WM, sizes: UM, defaultProps: { size: "md" } }),
  { defineMultiStyleConfig: GM, definePartsStyle: rs } = le([
    "stepper",
    "step",
    "title",
    "description",
    "indicator",
    "separator",
    "icon",
    "number",
  ]),
  Cn = D("stepper-indicator-size"),
  Lo = D("stepper-icon-size"),
  Do = D("stepper-title-font-size"),
  os = D("stepper-description-font-size"),
  Hi = D("stepper-accent-color"),
  KM = rs(({ colorScheme: e }) => ({
    stepper: {
      display: "flex",
      justifyContent: "space-between",
      gap: "4",
      "&[data-orientation=vertical]": {
        flexDirection: "column",
        alignItems: "flex-start",
      },
      "&[data-orientation=horizontal]": {
        flexDirection: "row",
        alignItems: "center",
      },
      [Hi.variable]: `colors.${e}.500`,
      _dark: { [Hi.variable]: `colors.${e}.200` },
    },
    title: { fontSize: Do.reference, fontWeight: "medium" },
    description: { fontSize: os.reference, color: "chakra-subtle-text" },
    number: { fontSize: Do.reference },
    step: {
      flexShrink: 0,
      position: "relative",
      display: "flex",
      gap: "2",
      "&[data-orientation=horizontal]": { alignItems: "center" },
      flex: "1",
      "&:last-of-type:not([data-stretch])": { flex: "initial" },
    },
    icon: { flexShrink: 0, width: Lo.reference, height: Lo.reference },
    indicator: {
      flexShrink: 0,
      borderRadius: "full",
      width: Cn.reference,
      height: Cn.reference,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "&[data-status=active]": {
        borderWidth: "2px",
        borderColor: Hi.reference,
      },
      "&[data-status=complete]": {
        bg: Hi.reference,
        color: "chakra-inverse-text",
      },
      "&[data-status=incomplete]": { borderWidth: "2px" },
    },
    separator: {
      bg: "chakra-border-color",
      flex: "1",
      "&[data-status=complete]": { bg: Hi.reference },
      "&[data-orientation=horizontal]": {
        width: "100%",
        height: "2px",
        marginStart: "2",
      },
      "&[data-orientation=vertical]": {
        width: "2px",
        position: "absolute",
        height: "100%",
        maxHeight: `calc(100% - ${Cn.reference} - 8px)`,
        top: `calc(${Cn.reference} + 4px)`,
        insetStart: `calc(${Cn.reference} / 2 - 1px)`,
      },
    },
  })),
  YM = GM({
    baseStyle: KM,
    sizes: {
      xs: rs({
        stepper: {
          [Cn.variable]: "sizes.4",
          [Lo.variable]: "sizes.3",
          [Do.variable]: "fontSizes.xs",
          [os.variable]: "fontSizes.xs",
        },
      }),
      sm: rs({
        stepper: {
          [Cn.variable]: "sizes.6",
          [Lo.variable]: "sizes.4",
          [Do.variable]: "fontSizes.sm",
          [os.variable]: "fontSizes.xs",
        },
      }),
      md: rs({
        stepper: {
          [Cn.variable]: "sizes.8",
          [Lo.variable]: "sizes.5",
          [Do.variable]: "fontSizes.md",
          [os.variable]: "fontSizes.sm",
        },
      }),
      lg: rs({
        stepper: {
          [Cn.variable]: "sizes.10",
          [Lo.variable]: "sizes.6",
          [Do.variable]: "fontSizes.lg",
          [os.variable]: "fontSizes.md",
        },
      }),
    },
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: XM, definePartsStyle: Al } = le(f5.keys),
  ks = Me("switch-track-width"),
  Gr = Me("switch-track-height"),
  Ed = Me("switch-track-diff"),
  qM = kn.subtract(ks, Gr),
  ah = Me("switch-thumb-x"),
  Gi = Me("switch-bg"),
  QM = (e) => {
    const { colorScheme: t } = e;
    return {
      borderRadius: "full",
      p: "0.5",
      width: [ks.reference],
      height: [Gr.reference],
      transitionProperty: "common",
      transitionDuration: "fast",
      [Gi.variable]: "colors.gray.300",
      _dark: { [Gi.variable]: "colors.whiteAlpha.400" },
      _focusVisible: { boxShadow: "outline" },
      _disabled: { opacity: 0.4, cursor: "not-allowed" },
      _checked: {
        [Gi.variable]: `colors.${t}.500`,
        _dark: { [Gi.variable]: `colors.${t}.200` },
      },
      bg: Gi.reference,
    };
  },
  ZM = {
    bg: "white",
    transitionProperty: "transform",
    transitionDuration: "normal",
    borderRadius: "inherit",
    width: [Gr.reference],
    height: [Gr.reference],
    _checked: { transform: `translateX(${ah.reference})` },
  },
  JM = Al((e) => ({
    container: {
      [Ed.variable]: qM,
      [ah.variable]: Ed.reference,
      _rtl: { [ah.variable]: kn(Ed).negate().toString() },
    },
    track: QM(e),
    thumb: ZM,
  })),
  e4 = {
    sm: Al({
      container: { [ks.variable]: "1.375rem", [Gr.variable]: "sizes.3" },
    }),
    md: Al({
      container: { [ks.variable]: "1.875rem", [Gr.variable]: "sizes.4" },
    }),
    lg: Al({
      container: { [ks.variable]: "2.875rem", [Gr.variable]: "sizes.6" },
    }),
  },
  t4 = XM({
    baseStyle: JM,
    sizes: e4,
    defaultProps: { size: "md", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: n4, definePartsStyle: ti } = le(h5.keys),
  r4 = ti({
    table: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
    },
    th: {
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "wider",
      textAlign: "start",
    },
    td: { textAlign: "start" },
    caption: {
      mt: 4,
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "medium",
    },
  }),
  Su = { "&[data-is-numeric=true]": { textAlign: "end" } },
  o4 = ti((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: L("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: L(`${t}.100`, `${t}.700`)(e),
        ...Su,
      },
      td: {
        borderBottom: "1px",
        borderColor: L(`${t}.100`, `${t}.700`)(e),
        ...Su,
      },
      caption: { color: L("gray.600", "gray.100")(e) },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  i4 = ti((e) => {
    const { colorScheme: t } = e;
    return {
      th: {
        color: L("gray.600", "gray.400")(e),
        borderBottom: "1px",
        borderColor: L(`${t}.100`, `${t}.700`)(e),
        ...Su,
      },
      td: {
        borderBottom: "1px",
        borderColor: L(`${t}.100`, `${t}.700`)(e),
        ...Su,
      },
      caption: { color: L("gray.600", "gray.100")(e) },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: L(`${t}.100`, `${t}.700`)(e),
            },
            td: { background: L(`${t}.100`, `${t}.700`)(e) },
          },
        },
      },
      tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } },
    };
  }),
  s4 = { simple: o4, striped: i4, unstyled: {} },
  a4 = {
    sm: ti({
      th: { px: "4", py: "1", lineHeight: "4", fontSize: "xs" },
      td: { px: "4", py: "2", fontSize: "sm", lineHeight: "4" },
      caption: { px: "4", py: "2", fontSize: "xs" },
    }),
    md: ti({
      th: { px: "6", py: "3", lineHeight: "4", fontSize: "xs" },
      td: { px: "6", py: "4", lineHeight: "5" },
      caption: { px: "6", py: "2", fontSize: "sm" },
    }),
    lg: ti({
      th: { px: "8", py: "4", lineHeight: "5", fontSize: "sm" },
      td: { px: "8", py: "5", lineHeight: "6" },
      caption: { px: "6", py: "2", fontSize: "md" },
    }),
  },
  l4 = n4({
    baseStyle: r4,
    variants: s4,
    sizes: a4,
    defaultProps: { variant: "simple", size: "md", colorScheme: "gray" },
  }),
  ot = D("tabs-color"),
  Wt = D("tabs-bg"),
  rl = D("tabs-border-color"),
  { defineMultiStyleConfig: u4, definePartsStyle: cn } = le(p5.keys),
  c4 = (e) => {
    const { orientation: t } = e;
    return { display: t === "vertical" ? "flex" : "block" };
  },
  d4 = (e) => {
    const { isFitted: t } = e;
    return {
      flex: t ? 1 : void 0,
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: { zIndex: 1, boxShadow: "outline" },
      _disabled: { cursor: "not-allowed", opacity: 0.4 },
    };
  },
  f4 = (e) => {
    const { align: t = "start", orientation: n } = e;
    return {
      justifyContent: {
        end: "flex-end",
        center: "center",
        start: "flex-start",
      }[t],
      flexDirection: n === "vertical" ? "column" : "row",
    };
  },
  h4 = { p: 4 },
  p4 = cn((e) => ({ root: c4(e), tab: d4(e), tablist: f4(e), tabpanel: h4 })),
  m4 = {
    sm: cn({ tab: { py: 1, px: 4, fontSize: "sm" } }),
    md: cn({ tab: { fontSize: "md", py: 2, px: 4 } }),
    lg: cn({ tab: { fontSize: "lg", py: 3, px: 4 } }),
  },
  g4 = cn((e) => {
    const { colorScheme: t, orientation: n } = e,
      r = n === "vertical",
      o = r ? "borderStart" : "borderBottom",
      i = r ? "marginStart" : "marginBottom";
    return {
      tablist: { [o]: "2px solid", borderColor: "inherit" },
      tab: {
        [o]: "2px solid",
        borderColor: "transparent",
        [i]: "-2px",
        _selected: {
          [ot.variable]: `colors.${t}.600`,
          _dark: { [ot.variable]: `colors.${t}.300` },
          borderColor: "currentColor",
        },
        _active: {
          [Wt.variable]: "colors.gray.200",
          _dark: { [Wt.variable]: "colors.whiteAlpha.300" },
        },
        _disabled: { _active: { bg: "none" } },
        color: ot.reference,
        bg: Wt.reference,
      },
    };
  }),
  v4 = cn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderTopRadius: "md",
        border: "1px solid",
        borderColor: "transparent",
        mb: "-1px",
        [rl.variable]: "transparent",
        _selected: {
          [ot.variable]: `colors.${t}.600`,
          [rl.variable]: "colors.white",
          _dark: {
            [ot.variable]: `colors.${t}.300`,
            [rl.variable]: "colors.gray.800",
          },
          borderColor: "inherit",
          borderBottomColor: rl.reference,
        },
        color: ot.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  y4 = cn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        border: "1px solid",
        borderColor: "inherit",
        [Wt.variable]: "colors.gray.50",
        _dark: { [Wt.variable]: "colors.whiteAlpha.50" },
        mb: "-1px",
        _notLast: { marginEnd: "-1px" },
        _selected: {
          [Wt.variable]: "colors.white",
          [ot.variable]: `colors.${t}.600`,
          _dark: {
            [Wt.variable]: "colors.gray.800",
            [ot.variable]: `colors.${t}.300`,
          },
          borderColor: "inherit",
          borderTopColor: "currentColor",
          borderBottomColor: "transparent",
        },
        color: ot.reference,
        bg: Wt.reference,
      },
      tablist: {
        mb: "-1px",
        borderBottom: "1px solid",
        borderColor: "inherit",
      },
    };
  }),
  b4 = cn((e) => {
    const { colorScheme: t, theme: n } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        color: "gray.600",
        _selected: { color: Qe(n, `${t}.700`), bg: Qe(n, `${t}.100`) },
      },
    };
  }),
  S4 = cn((e) => {
    const { colorScheme: t } = e;
    return {
      tab: {
        borderRadius: "full",
        fontWeight: "semibold",
        [ot.variable]: "colors.gray.600",
        _dark: { [ot.variable]: "inherit" },
        _selected: {
          [ot.variable]: "colors.white",
          [Wt.variable]: `colors.${t}.600`,
          _dark: {
            [ot.variable]: "colors.gray.800",
            [Wt.variable]: `colors.${t}.300`,
          },
        },
        color: ot.reference,
        bg: Wt.reference,
      },
    };
  }),
  x4 = cn({}),
  w4 = {
    line: g4,
    enclosed: v4,
    "enclosed-colored": y4,
    "soft-rounded": b4,
    "solid-rounded": S4,
    unstyled: x4,
  },
  k4 = u4({
    baseStyle: p4,
    sizes: m4,
    variants: w4,
    defaultProps: { size: "md", variant: "line", colorScheme: "blue" },
  }),
  { defineMultiStyleConfig: C4, definePartsStyle: Kr } = le(m5.keys),
  Z0 = D("tag-bg"),
  J0 = D("tag-color"),
  $d = D("tag-shadow"),
  Ml = D("tag-min-height"),
  zl = D("tag-min-width"),
  Il = D("tag-font-size"),
  Fl = D("tag-padding-inline"),
  P4 = {
    fontWeight: "medium",
    lineHeight: 1.2,
    outline: 0,
    [J0.variable]: Pe.color.reference,
    [Z0.variable]: Pe.bg.reference,
    [$d.variable]: Pe.shadow.reference,
    color: J0.reference,
    bg: Z0.reference,
    boxShadow: $d.reference,
    borderRadius: "md",
    minH: Ml.reference,
    minW: zl.reference,
    fontSize: Il.reference,
    px: Fl.reference,
    _focusVisible: { [$d.variable]: "shadows.outline" },
  },
  T4 = { lineHeight: 1.2, overflow: "visible" },
  _4 = {
    fontSize: "lg",
    w: "5",
    h: "5",
    transitionProperty: "common",
    transitionDuration: "normal",
    borderRadius: "full",
    marginStart: "1.5",
    marginEnd: "-1",
    opacity: 0.5,
    _disabled: { opacity: 0.4 },
    _focusVisible: { boxShadow: "outline", bg: "rgba(0, 0, 0, 0.14)" },
    _hover: { opacity: 0.8 },
    _active: { opacity: 1 },
  },
  E4 = Kr({ container: P4, label: T4, closeButton: _4 }),
  $4 = {
    sm: Kr({
      container: {
        [Ml.variable]: "sizes.5",
        [zl.variable]: "sizes.5",
        [Il.variable]: "fontSizes.xs",
        [Fl.variable]: "space.2",
      },
      closeButton: { marginEnd: "-2px", marginStart: "0.35rem" },
    }),
    md: Kr({
      container: {
        [Ml.variable]: "sizes.6",
        [zl.variable]: "sizes.6",
        [Il.variable]: "fontSizes.sm",
        [Fl.variable]: "space.2",
      },
    }),
    lg: Kr({
      container: {
        [Ml.variable]: "sizes.8",
        [zl.variable]: "sizes.8",
        [Il.variable]: "fontSizes.md",
        [Fl.variable]: "space.3",
      },
    }),
  },
  R4 = {
    subtle: Kr((e) => {
      var t;
      return { container: (t = Ss.variants) == null ? void 0 : t.subtle(e) };
    }),
    solid: Kr((e) => {
      var t;
      return { container: (t = Ss.variants) == null ? void 0 : t.solid(e) };
    }),
    outline: Kr((e) => {
      var t;
      return { container: (t = Ss.variants) == null ? void 0 : t.outline(e) };
    }),
  },
  A4 = C4({
    variants: R4,
    baseStyle: E4,
    sizes: $4,
    defaultProps: { size: "md", variant: "subtle", colorScheme: "gray" },
  });
var g1;
const M4 = {
  ...((g1 = Z.baseStyle) == null ? void 0 : g1.field),
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top",
};
var v1;
const z4 = {
  outline: (e) => {
    var t;
    return ((t = Z.variants) == null ? void 0 : t.outline(e).field) ?? {};
  },
  flushed: (e) => {
    var t;
    return ((t = Z.variants) == null ? void 0 : t.flushed(e).field) ?? {};
  },
  filled: (e) => {
    var t;
    return ((t = Z.variants) == null ? void 0 : t.filled(e).field) ?? {};
  },
  unstyled: ((v1 = Z.variants) == null ? void 0 : v1.unstyled.field) ?? {},
};
var y1, b1, S1, x1;
const I4 = {
    xs: ((y1 = Z.sizes) == null ? void 0 : y1.xs.field) ?? {},
    sm: ((b1 = Z.sizes) == null ? void 0 : b1.sm.field) ?? {},
    md: ((S1 = Z.sizes) == null ? void 0 : S1.md.field) ?? {},
    lg: ((x1 = Z.sizes) == null ? void 0 : x1.lg.field) ?? {},
  },
  F4 = {
    baseStyle: M4,
    sizes: I4,
    variants: z4,
    defaultProps: { size: "md", variant: "outline" },
  },
  ol = Me("tooltip-bg"),
  Rd = Me("tooltip-fg"),
  j4 = Me("popper-arrow-bg"),
  O4 = {
    bg: ol.reference,
    color: Rd.reference,
    [ol.variable]: "colors.gray.700",
    [Rd.variable]: "colors.whiteAlpha.900",
    _dark: {
      [ol.variable]: "colors.gray.300",
      [Rd.variable]: "colors.gray.900",
    },
    [j4.variable]: ol.reference,
    px: "2",
    py: "0.5",
    borderRadius: "sm",
    fontWeight: "medium",
    fontSize: "sm",
    boxShadow: "md",
    maxW: "xs",
    zIndex: "tooltip",
  },
  L4 = { baseStyle: O4 },
  D4 = {
    Accordion: C5,
    Alert: a$,
    Avatar: y$,
    Badge: Ss,
    Breadcrumb: E$,
    Button: O$,
    Checkbox: Zn,
    CloseButton: Z$,
    Code: nR,
    Container: oR,
    Divider: uR,
    Drawer: SR,
    Editable: _R,
    Form: zR,
    FormError: DR,
    FormLabel: BR,
    Heading: UR,
    Input: Z,
    Kbd: eA,
    Link: nA,
    List: aA,
    Menu: yA,
    Modal: $A,
    NumberInput: LA,
    PinInput: VA,
    Popover: JA,
    Progress: aM,
    Radio: fM,
    Select: bM,
    Skeleton: xM,
    SkipLink: kM,
    Slider: IM,
    Spinner: OM,
    Stat: HM,
    Switch: t4,
    Table: l4,
    Tabs: k4,
    Tag: A4,
    Textarea: F4,
    Tooltip: L4,
    Card: V$,
    Stepper: YM,
  },
  N4 = {
    none: 0,
    "1px": "1px solid",
    "2px": "2px solid",
    "4px": "4px solid",
    "8px": "8px solid",
  },
  B4 = {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  V4 = {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    whiteAlpha: {
      50: "rgba(255, 255, 255, 0.04)",
      100: "rgba(255, 255, 255, 0.06)",
      200: "rgba(255, 255, 255, 0.08)",
      300: "rgba(255, 255, 255, 0.16)",
      400: "rgba(255, 255, 255, 0.24)",
      500: "rgba(255, 255, 255, 0.36)",
      600: "rgba(255, 255, 255, 0.48)",
      700: "rgba(255, 255, 255, 0.64)",
      800: "rgba(255, 255, 255, 0.80)",
      900: "rgba(255, 255, 255, 0.92)",
    },
    blackAlpha: {
      50: "rgba(0, 0, 0, 0.04)",
      100: "rgba(0, 0, 0, 0.06)",
      200: "rgba(0, 0, 0, 0.08)",
      300: "rgba(0, 0, 0, 0.16)",
      400: "rgba(0, 0, 0, 0.24)",
      500: "rgba(0, 0, 0, 0.36)",
      600: "rgba(0, 0, 0, 0.48)",
      700: "rgba(0, 0, 0, 0.64)",
      800: "rgba(0, 0, 0, 0.80)",
      900: "rgba(0, 0, 0, 0.92)",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
    red: {
      50: "#FFF5F5",
      100: "#FED7D7",
      200: "#FEB2B2",
      300: "#FC8181",
      400: "#F56565",
      500: "#E53E3E",
      600: "#C53030",
      700: "#9B2C2C",
      800: "#822727",
      900: "#63171B",
    },
    orange: {
      50: "#FFFAF0",
      100: "#FEEBC8",
      200: "#FBD38D",
      300: "#F6AD55",
      400: "#ED8936",
      500: "#DD6B20",
      600: "#C05621",
      700: "#9C4221",
      800: "#7B341E",
      900: "#652B19",
    },
    yellow: {
      50: "#FFFFF0",
      100: "#FEFCBF",
      200: "#FAF089",
      300: "#F6E05E",
      400: "#ECC94B",
      500: "#D69E2E",
      600: "#B7791F",
      700: "#975A16",
      800: "#744210",
      900: "#5F370E",
    },
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
    teal: {
      50: "#E6FFFA",
      100: "#B2F5EA",
      200: "#81E6D9",
      300: "#4FD1C5",
      400: "#38B2AC",
      500: "#319795",
      600: "#2C7A7B",
      700: "#285E61",
      800: "#234E52",
      900: "#1D4044",
    },
    blue: {
      50: "#ebf8ff",
      100: "#bee3f8",
      200: "#90cdf4",
      300: "#63b3ed",
      400: "#4299e1",
      500: "#3182ce",
      600: "#2b6cb0",
      700: "#2c5282",
      800: "#2a4365",
      900: "#1A365D",
    },
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
    purple: {
      50: "#FAF5FF",
      100: "#E9D8FD",
      200: "#D6BCFA",
      300: "#B794F4",
      400: "#9F7AEA",
      500: "#805AD5",
      600: "#6B46C1",
      700: "#553C9A",
      800: "#44337A",
      900: "#322659",
    },
    pink: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
  },
  W4 = {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  U4 = {
    xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
    "dark-lg":
      "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px",
  },
  H4 = {
    common:
      "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    colors: "background-color, border-color, color, fill, stroke",
    dimensions: "width, height",
    position: "left, right, top, bottom",
    background: "background-color, background-image, background-position",
  },
  G4 = {
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  K4 = {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  Y4 = { property: H4, easing: G4, duration: K4 },
  X4 = {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1e3,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  q4 = {
    none: 0,
    sm: "4px",
    base: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  Q4 = {
    breakpoints: B4,
    zIndices: X4,
    radii: W4,
    blur: q4,
    colors: V4,
    ...ZS,
    sizes: GS,
    shadows: U4,
    space: HS,
    borders: N4,
    transition: Y4,
  },
  Z4 = {
    colors: {
      "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
      "chakra-body-bg": { _light: "white", _dark: "gray.800" },
      "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
      "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
      "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
      "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
      "chakra-placeholder-color": {
        _light: "gray.500",
        _dark: "whiteAlpha.400",
      },
    },
  },
  J4 = {
    global: {
      body: {
        fontFamily: "body",
        color: "chakra-body-text",
        bg: "chakra-body-bg",
        transitionProperty: "background-color",
        transitionDuration: "normal",
        lineHeight: "base",
      },
      "*::placeholder": { color: "chakra-placeholder-color" },
      "*, *::before, &::after": { borderColor: "chakra-border-color" },
    },
  },
  e3 = "ltr",
  t3 = {
    useSystemColorMode: !1,
    initialColorMode: "light",
    cssVarPrefix: "chakra",
  },
  n3 = {
    semanticTokens: Z4,
    direction: e3,
    ...Q4,
    components: D4,
    styles: J4,
    config: t3,
  };
var r3 = !1;
function o3(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function i3(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var s3 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !r3 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(i3(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = o3(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          var o;
          return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  We = "-ms-",
  xu = "-moz-",
  q = "-webkit-",
  nx = "comm",
  Yp = "rule",
  Xp = "decl",
  a3 = "@import",
  rx = "@keyframes",
  l3 = "@layer",
  u3 = Math.abs,
  tc = String.fromCharCode,
  c3 = Object.assign;
function d3(e, t) {
  return Le(e, 0) ^ 45
    ? (((((((t << 2) ^ Le(e, 0)) << 2) ^ Le(e, 1)) << 2) ^ Le(e, 2)) << 2) ^
        Le(e, 3)
    : 0;
}
function ox(e) {
  return e.trim();
}
function f3(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, n) {
  return e.replace(t, n);
}
function lh(e, t) {
  return e.indexOf(t);
}
function Le(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ys(e, t, n) {
  return e.slice(t, n);
}
function tn(e) {
  return e.length;
}
function qp(e) {
  return e.length;
}
function il(e, t) {
  return t.push(e), e;
}
function h3(e, t) {
  return e.map(t).join("");
}
var nc = 1,
  gi = 1,
  ix = 0,
  ut = 0,
  Te = 0,
  Pi = "";
function rc(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: nc,
    column: gi,
    length: s,
    return: "",
  };
}
function Ki(e, t) {
  return c3(rc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function p3() {
  return Te;
}
function m3() {
  return (
    (Te = ut > 0 ? Le(Pi, --ut) : 0), gi--, Te === 10 && ((gi = 1), nc--), Te
  );
}
function gt() {
  return (
    (Te = ut < ix ? Le(Pi, ut++) : 0), gi++, Te === 10 && ((gi = 1), nc++), Te
  );
}
function dn() {
  return Le(Pi, ut);
}
function jl() {
  return ut;
}
function ga(e, t) {
  return Ys(Pi, e, t);
}
function Xs(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function sx(e) {
  return (nc = gi = 1), (ix = tn((Pi = e))), (ut = 0), [];
}
function ax(e) {
  return (Pi = ""), e;
}
function Ol(e) {
  return ox(ga(ut - 1, uh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function g3(e) {
  for (; (Te = dn()) && Te < 33; ) gt();
  return Xs(e) > 2 || Xs(Te) > 3 ? "" : " ";
}
function v3(e, t) {
  for (
    ;
    --t &&
    gt() &&
    !(Te < 48 || Te > 102 || (Te > 57 && Te < 65) || (Te > 70 && Te < 97));

  );
  return ga(e, jl() + (t < 6 && dn() == 32 && gt() == 32));
}
function uh(e) {
  for (; gt(); )
    switch (Te) {
      case e:
        return ut;
      case 34:
      case 39:
        e !== 34 && e !== 39 && uh(Te);
        break;
      case 40:
        e === 41 && uh(e);
        break;
      case 92:
        gt();
        break;
    }
  return ut;
}
function y3(e, t) {
  for (; gt() && e + Te !== 57; ) if (e + Te === 84 && dn() === 47) break;
  return "/*" + ga(t, ut - 1) + "*" + tc(e === 47 ? e : gt());
}
function b3(e) {
  for (; !Xs(dn()); ) gt();
  return ga(e, ut);
}
function S3(e) {
  return ax(Ll("", null, null, null, [""], (e = sx(e)), 0, [0], e));
}
function Ll(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0,
      c = 0,
      d = s,
      f = 0,
      p = 0,
      g = 0,
      v = 1,
      x = 1,
      m = 1,
      h = 0,
      y = "",
      k = o,
      T = i,
      $ = r,
      E = y;
    x;

  )
    switch (((g = h), (h = gt()))) {
      case 40:
        if (g != 108 && Le(E, d - 1) == 58) {
          lh((E += Q(Ol(h), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Ol(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += g3(g);
        break;
      case 92:
        E += v3(jl() - 1, 7);
        continue;
      case 47:
        switch (dn()) {
          case 42:
          case 47:
            il(x3(y3(gt(), jl()), t, n), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        a[u++] = tn(E) * m;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            m == -1 && (E = Q(E, /\f/g, "")),
              p > 0 &&
                tn(E) - d &&
                il(
                  p > 32
                    ? tv(E + ";", r, n, d - 1)
                    : tv(Q(E, " ", "") + ";", r, n, d - 2),
                  l
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (il(($ = ev(E, t, n, u, c, o, a, y, (k = []), (T = []), d)), i),
              h === 123)
            )
              if (c === 0) Ll(E, t, $, $, k, i, d, a, T);
              else
                switch (f === 99 && Le(E, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ll(
                      e,
                      $,
                      $,
                      r && il(ev(e, $, $, 0, 0, o, a, y, o, (k = []), d), T),
                      o,
                      T,
                      d,
                      a,
                      r ? k : T
                    );
                    break;
                  default:
                    Ll(E, $, $, $, [""], T, 0, a, T);
                }
        }
        (u = c = p = 0), (v = m = 1), (y = E = ""), (d = s);
        break;
      case 58:
        (d = 1 + tn(E)), (p = g);
      default:
        if (v < 1) {
          if (h == 123) --v;
          else if (h == 125 && v++ == 0 && m3() == 125) continue;
        }
        switch (((E += tc(h)), h * v)) {
          case 38:
            m = c > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (a[u++] = (tn(E) - 1) * m), (m = 1);
            break;
          case 64:
            dn() === 45 && (E += Ol(gt())),
              (f = dn()),
              (c = d = tn((y = E += b3(jl())))),
              h++;
            break;
          case 45:
            g === 45 && tn(E) == 2 && (v = 0);
        }
    }
  return i;
}
function ev(e, t, n, r, o, i, s, a, l, u, c) {
  for (
    var d = o - 1, f = o === 0 ? i : [""], p = qp(f), g = 0, v = 0, x = 0;
    g < r;
    ++g
  )
    for (var m = 0, h = Ys(e, d + 1, (d = u3((v = s[g])))), y = e; m < p; ++m)
      (y = ox(v > 0 ? f[m] + " " + h : Q(h, /&\f/g, f[m]))) && (l[x++] = y);
  return rc(e, t, n, o === 0 ? Yp : a, l, u, c);
}
function x3(e, t, n) {
  return rc(e, t, n, nx, tc(p3()), Ys(e, 2, -2), 0);
}
function tv(e, t, n, r) {
  return rc(e, t, n, Xp, Ys(e, 0, r), Ys(e, r + 1, -1), r);
}
function ni(e, t) {
  for (var n = "", r = qp(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function w3(e, t, n, r) {
  switch (e.type) {
    case l3:
      if (e.children.length) break;
    case a3:
    case Xp:
      return (e.return = e.return || e.value);
    case nx:
      return "";
    case rx:
      return (e.return = e.value + "{" + ni(e.children, r) + "}");
    case Yp:
      e.value = e.props.join(",");
  }
  return tn((n = ni(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function k3(e) {
  var t = qp(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function C3(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var nv = function (t) {
  var n = new WeakMap();
  return function (r) {
    if (n.has(r)) return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function lx(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var P3 = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = dn()), o === 38 && i === 12 && (n[r] = 1), !Xs(i);

    )
      gt();
    return ga(t, ut);
  },
  T3 = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Xs(o)) {
        case 0:
          o === 38 && dn() === 12 && (n[r] = 1), (t[r] += P3(ut - 1, n, r));
          break;
        case 2:
          t[r] += Ol(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = dn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += tc(o);
      }
    while ((o = gt()));
    return t;
  },
  _3 = function (t, n) {
    return ax(T3(sx(t), n));
  },
  rv = new WeakMap(),
  E3 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !rv.get(r)) &&
        !o
      ) {
        rv.set(t, !0);
        for (
          var i = [], s = _3(n, i), a = r.props, l = 0, u = 0;
          l < s.length;
          l++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l];
      }
    }
  },
  $3 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function ux(e, t) {
  switch (d3(e, t)) {
    case 5103:
      return q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + e + xu + e + We + e + e;
    case 6828:
    case 4268:
      return q + e + We + e + e;
    case 6165:
      return q + e + We + "flex-" + e + e;
    case 5187:
      return (
        q + e + Q(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + We + "flex-$1$2") + e
      );
    case 5443:
      return q + e + We + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        q +
        e +
        We +
        "flex-line-pack" +
        Q(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return q + e + We + Q(e, "shrink", "negative") + e;
    case 5292:
      return q + e + We + Q(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        q +
        "box-" +
        Q(e, "-grow", "") +
        q +
        e +
        We +
        Q(e, "grow", "positive") +
        e
      );
    case 4554:
      return q + Q(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    case 6187:
      return (
        Q(Q(Q(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
      return (
        Q(
          Q(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + We + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        q +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (tn(e) - 1 - t > 6)
        switch (Le(e, t + 1)) {
          case 109:
            if (Le(e, t + 4) !== 45) break;
          case 102:
            return (
              Q(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  q +
                  "$2-$3$1" +
                  xu +
                  (Le(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~lh(e, "stretch")
              ? ux(Q(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Le(e, t + 1) !== 115) break;
    case 6444:
      switch (Le(e, tn(e) - 3 - (~lh(e, "!important") && 10))) {
        case 107:
          return Q(e, ":", ":" + q) + e;
        case 101:
          return (
            Q(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                q +
                (Le(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                q +
                "$2$3$1" +
                We +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Le(e, t + 11)) {
        case 114:
          return q + e + We + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return q + e + We + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return q + e + We + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return q + e + We + e + e;
  }
  return e;
}
var R3 = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Xp:
          t.return = ux(t.value, t.length);
          break;
        case rx:
          return ni([Ki(t, { value: Q(t.value, "@", "@" + q) })], o);
        case Yp:
          if (t.length)
            return h3(t.props, function (i) {
              switch (f3(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ni(
                    [Ki(t, { props: [Q(i, /:(read-\w+)/, ":" + xu + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return ni(
                    [
                      Ki(t, {
                        props: [Q(i, /:(plac\w+)/, ":" + q + "input-$1")],
                      }),
                      Ki(t, { props: [Q(i, /:(plac\w+)/, ":" + xu + "$1")] }),
                      Ki(t, { props: [Q(i, /:(plac\w+)/, We + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  A3 = [R3],
  M3 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var x = v.getAttribute("data-emotion");
        x.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || A3,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var x = v.getAttribute("data-emotion").split(" "), m = 1;
            m < x.length;
            m++
          )
            i[x[m]] = !0;
          a.push(v);
        }
      );
    var l,
      u = [E3, $3];
    {
      var c,
        d = [
          w3,
          C3(function (v) {
            c.insert(v);
          }),
        ],
        f = k3(u.concat(o, d)),
        p = function (x) {
          return ni(S3(x), f);
        };
      l = function (x, m, h, y) {
        (c = h),
          p(x ? x + "{" + m.styles + "}" : m.styles),
          y && (g.inserted[m.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new s3({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return g.sheet.hydrate(a), g;
  };
function oo() {
  return (
    (oo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oo.apply(null, arguments)
  );
}
var cx = { exports: {} },
  te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fe = typeof Symbol == "function" && Symbol.for,
  Qp = Fe ? Symbol.for("react.element") : 60103,
  Zp = Fe ? Symbol.for("react.portal") : 60106,
  oc = Fe ? Symbol.for("react.fragment") : 60107,
  ic = Fe ? Symbol.for("react.strict_mode") : 60108,
  sc = Fe ? Symbol.for("react.profiler") : 60114,
  ac = Fe ? Symbol.for("react.provider") : 60109,
  lc = Fe ? Symbol.for("react.context") : 60110,
  Jp = Fe ? Symbol.for("react.async_mode") : 60111,
  uc = Fe ? Symbol.for("react.concurrent_mode") : 60111,
  cc = Fe ? Symbol.for("react.forward_ref") : 60112,
  dc = Fe ? Symbol.for("react.suspense") : 60113,
  z3 = Fe ? Symbol.for("react.suspense_list") : 60120,
  fc = Fe ? Symbol.for("react.memo") : 60115,
  hc = Fe ? Symbol.for("react.lazy") : 60116,
  I3 = Fe ? Symbol.for("react.block") : 60121,
  F3 = Fe ? Symbol.for("react.fundamental") : 60117,
  j3 = Fe ? Symbol.for("react.responder") : 60118,
  O3 = Fe ? Symbol.for("react.scope") : 60119;
function xt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Qp:
        switch (((e = e.type), e)) {
          case Jp:
          case uc:
          case oc:
          case sc:
          case ic:
          case dc:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case lc:
              case cc:
              case hc:
              case fc:
              case ac:
                return e;
              default:
                return t;
            }
        }
      case Zp:
        return t;
    }
  }
}
function dx(e) {
  return xt(e) === uc;
}
te.AsyncMode = Jp;
te.ConcurrentMode = uc;
te.ContextConsumer = lc;
te.ContextProvider = ac;
te.Element = Qp;
te.ForwardRef = cc;
te.Fragment = oc;
te.Lazy = hc;
te.Memo = fc;
te.Portal = Zp;
te.Profiler = sc;
te.StrictMode = ic;
te.Suspense = dc;
te.isAsyncMode = function (e) {
  return dx(e) || xt(e) === Jp;
};
te.isConcurrentMode = dx;
te.isContextConsumer = function (e) {
  return xt(e) === lc;
};
te.isContextProvider = function (e) {
  return xt(e) === ac;
};
te.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qp;
};
te.isForwardRef = function (e) {
  return xt(e) === cc;
};
te.isFragment = function (e) {
  return xt(e) === oc;
};
te.isLazy = function (e) {
  return xt(e) === hc;
};
te.isMemo = function (e) {
  return xt(e) === fc;
};
te.isPortal = function (e) {
  return xt(e) === Zp;
};
te.isProfiler = function (e) {
  return xt(e) === sc;
};
te.isStrictMode = function (e) {
  return xt(e) === ic;
};
te.isSuspense = function (e) {
  return xt(e) === dc;
};
te.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === oc ||
    e === uc ||
    e === sc ||
    e === ic ||
    e === dc ||
    e === z3 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === hc ||
        e.$$typeof === fc ||
        e.$$typeof === ac ||
        e.$$typeof === lc ||
        e.$$typeof === cc ||
        e.$$typeof === F3 ||
        e.$$typeof === j3 ||
        e.$$typeof === O3 ||
        e.$$typeof === I3))
  );
};
te.typeOf = xt;
cx.exports = te;
var L3 = cx.exports,
  fx = L3,
  D3 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  N3 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  hx = {};
hx[fx.ForwardRef] = D3;
hx[fx.Memo] = N3;
var B3 = !0;
function V3(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
    }),
    r
  );
}
var px = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || B3 === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  mx = function (t, n, r) {
    px(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function W3(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var U3 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  H3 = !1,
  G3 = /[A-Z]|^ms/g,
  K3 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  gx = function (t) {
    return t.charCodeAt(1) === 45;
  },
  ov = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ad = lx(function (e) {
    return gx(e) ? e : e.replace(G3, "-$&").toLowerCase();
  }),
  iv = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(K3, function (r, o, i) {
            return (nn = { name: o, styles: i, next: nn }), o;
          });
    }
    return U3[t] !== 1 && !gx(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  },
  Y3 =
    "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function qs(e, t, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return (nn = { name: o.name, styles: o.styles, next: nn }), o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            (nn = { name: s.name, styles: s.styles, next: nn }), (s = s.next);
        var a = i.styles + ";";
        return a;
      }
      return X3(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = nn,
          u = n(e);
        return (nn = l), qs(e, t, u);
      }
      break;
    }
  }
  var c = n;
  if (t == null) return c;
  var d = t[c];
  return d !== void 0 ? d : c;
}
function X3(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += qs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : ov(a) && (r += Ad(i) + ":" + iv(i, a) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && H3) throw new Error(Y3);
        if (
          Array.isArray(s) &&
          typeof s[0] == "string" &&
          (t == null || t[s[0]] === void 0)
        )
          for (var l = 0; l < s.length; l++)
            ov(s[l]) && (r += Ad(i) + ":" + iv(i, s[l]) + ";");
        else {
          var u = qs(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += Ad(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var sv = /label:\s*([^\s;{]+)\s*(;|$)/g,
  nn;
function em(e, t, n) {
  if (
    e.length === 1 &&
    typeof e[0] == "object" &&
    e[0] !== null &&
    e[0].styles !== void 0
  )
    return e[0];
  var r = !0,
    o = "";
  nn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0) (r = !1), (o += qs(n, t, i));
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (((o += qs(n, t, e[a])), r)) {
      var l = i;
      o += l[a];
    }
  sv.lastIndex = 0;
  for (var u = "", c; (c = sv.exec(o)) !== null; ) u += "-" + c[1];
  var d = W3(o) + u;
  return { name: d, styles: o, next: nn };
}
var q3 = function (t) {
    return t();
  },
  vx = nf.useInsertionEffect ? nf.useInsertionEffect : !1,
  Q3 = vx || q3,
  av = vx || b.useLayoutEffect,
  yx = b.createContext(typeof HTMLElement < "u" ? M3({ key: "css" }) : null);
yx.Provider;
var tm = function (t) {
    return b.forwardRef(function (n, r) {
      var o = b.useContext(yx);
      return t(n, o, r);
    });
  },
  Qs = b.createContext({}),
  Z3 = function (t, n) {
    if (typeof n == "function") {
      var r = n(t);
      return r;
    }
    return oo({}, t, n);
  },
  J3 = nv(function (e) {
    return nv(function (t) {
      return Z3(e, t);
    });
  }),
  ez = function (t) {
    var n = b.useContext(Qs);
    return (
      t.theme !== n && (n = J3(n)(t.theme)),
      b.createElement(Qs.Provider, { value: n }, t.children)
    );
  },
  pc = tm(function (e, t) {
    var n = e.styles,
      r = em([n], void 0, b.useContext(Qs)),
      o = b.useRef();
    return (
      av(
        function () {
          var i = t.key + "-global",
            s = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            l = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (s.before = t.sheet.tags[0]),
            l !== null &&
              ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
            (o.current = [s, a]),
            function () {
              s.flush();
            }
          );
        },
        [t]
      ),
      av(
        function () {
          var i = o.current,
            s = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && mx(t, r.next, !0), s.tags.length)) {
            var l = s.tags[s.tags.length - 1].nextElementSibling;
            (s.before = l), s.flush();
          }
          t.insert("", r, s, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function tz() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return em(t);
}
var nz = function () {
  var t = tz.apply(void 0, arguments),
    n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
const nm = b.createContext({});
nm.displayName = "ColorModeContext";
function va() {
  const e = b.useContext(nm);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function wu(e, t) {
  const { colorMode: n } = va();
  return n === "dark" ? t : e;
}
const sl = { light: "chakra-ui-light", dark: "chakra-ui-dark" };
function rz(e = {}) {
  const { preventTransition: t = !0, nonce: n } = e,
    r = {
      setDataset: (o) => {
        const i = t ? r.preventTransition() : void 0;
        (document.documentElement.dataset.theme = o),
          (document.documentElement.style.colorScheme = o),
          i == null || i();
      },
      setClassName(o) {
        document.body.classList.add(o ? sl.dark : sl.light),
          document.body.classList.remove(o ? sl.light : sl.dark);
      },
      query() {
        return window.matchMedia("(prefers-color-scheme: dark)");
      },
      getSystemTheme(o) {
        return r.query().matches ?? o === "dark" ? "dark" : "light";
      },
      addListener(o) {
        const i = r.query(),
          s = (a) => {
            o(a.matches ? "dark" : "light");
          };
        return (
          typeof i.addListener == "function"
            ? i.addListener(s)
            : i.addEventListener("change", s),
          () => {
            typeof i.removeListener == "function"
              ? i.removeListener(s)
              : i.removeEventListener("change", s);
          }
        );
      },
      preventTransition() {
        const o = document.createElement("style");
        return (
          o.appendChild(
            document.createTextNode(
              "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          n !== void 0 && (o.nonce = n),
          document.head.appendChild(o),
          () => {
            window.getComputedStyle(document.body),
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.head.removeChild(o);
                });
              });
          }
        );
      },
    };
  return r;
}
const oz = "chakra-ui-color-mode";
function iz(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document)) return t;
      let n;
      try {
        n = localStorage.getItem(e) || t;
      } catch {}
      return n || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {}
    },
  };
}
const sz = iz(oz),
  lv = () => {},
  az = f_() ? b.useLayoutEffect : b.useEffect;
function uv(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
const bx = tm(function (t, n) {
  const {
      value: r,
      children: o,
      options: {
        useSystemColorMode: i,
        initialColorMode: s,
        disableTransitionOnChange: a,
      } = {},
      colorModeManager: l = sz,
    } = t,
    u = s === "dark" ? "dark" : "light",
    [c, d] = b.useState(() => uv(l, u)),
    [f, p] = b.useState(() => uv(l)),
    {
      getSystemTheme: g,
      setClassName: v,
      setDataset: x,
      addListener: m,
    } = b.useMemo(
      () => rz({ preventTransition: a, nonce: n == null ? void 0 : n.nonce }),
      [a, n == null ? void 0 : n.nonce]
    ),
    h = s === "system" && !c ? f : c,
    y = b.useCallback(
      ($) => {
        const E = $ === "system" ? g() : $;
        d(E), v(E === "dark"), x(E), l.set(E);
      },
      [l, g, v, x]
    );
  az(() => {
    s === "system" && p(g());
  }, []),
    b.useEffect(() => {
      const $ = l.get();
      if ($) {
        y($);
        return;
      }
      if (s === "system") {
        y("system");
        return;
      }
      y(u);
    }, [l, u, s, y]);
  const k = b.useCallback(() => {
    y(h === "dark" ? "light" : "dark");
  }, [h, y]);
  b.useEffect(() => {
    if (i) return m(y);
  }, [i, m, y]);
  const T = b.useMemo(
    () => ({
      colorMode: r ?? h,
      toggleColorMode: r ? lv : k,
      setColorMode: r ? lv : y,
      forced: r !== void 0,
    }),
    [h, k, y, r]
  );
  return w.jsx(nm.Provider, { value: T, children: o });
});
bx.displayName = "ColorModeProvider";
const Sx = String.raw,
  xx = Sx`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,
  lz = () => w.jsx(pc, { styles: xx }),
  uz = ({ scope: e = "" }) =>
    w.jsx(pc, {
      styles: Sx`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${xx}
    `,
    });
function cz(e) {
  const { cssVarsRoot: t, theme: n, children: r } = e,
    o = b.useMemo(() => HE(n), [n]);
  return w.jsxs(ez, { theme: o, children: [w.jsx(dz, { root: t }), r] });
}
function dz({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return w.jsx(pc, { styles: (n) => ({ [t]: n.__cssVars }) });
}
Yt({
  name: "StylesContext",
  errorMessage:
    "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` ",
});
function fz() {
  const { colorMode: e } = va();
  return w.jsx(pc, {
    styles: (t) => {
      const n = jS(t, "styles.global"),
        r = At(n, { theme: t, colorMode: e });
      return r ? BS(r)(t) : void 0;
    },
  });
}
const [hz, pz] = Yt({ strict: !1, name: "PortalManagerContext" });
function wx(e) {
  const { children: t, zIndex: n } = e;
  return w.jsx(hz, { value: { zIndex: n }, children: t });
}
wx.displayName = "PortalManager";
const kx = b.createContext({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  },
});
kx.displayName = "EnvironmentContext";
function Cx(e) {
  const { children: t, environment: n, disabled: r } = e,
    o = b.useRef(null),
    i = b.useMemo(
      () =>
        n || {
          getDocument: () => {
            var a;
            return (
              ((a = o.current) == null ? void 0 : a.ownerDocument) ?? document
            );
          },
          getWindow: () => {
            var a;
            return (
              ((a = o.current) == null
                ? void 0
                : a.ownerDocument.defaultView) ?? window
            );
          },
        },
      [n]
    ),
    s = !r || !n;
  return w.jsxs(kx.Provider, {
    value: i,
    children: [
      t,
      s && w.jsx("span", { id: "__chakra_env", hidden: !0, ref: o }),
    ],
  });
}
Cx.displayName = "EnvironmentProvider";
const mz = (e) => {
  const {
      children: t,
      colorModeManager: n,
      portalZIndex: r,
      resetScope: o,
      resetCSS: i = !0,
      theme: s = {},
      environment: a,
      cssVarsRoot: l,
      disableEnvironment: u,
      disableGlobalStyle: c,
    } = e,
    d = w.jsx(Cx, { environment: a, disabled: u, children: t });
  return w.jsx(cz, {
    theme: s,
    cssVarsRoot: l,
    children: w.jsxs(bx, {
      colorModeManager: n,
      options: s.config,
      children: [
        i ? w.jsx(uz, { scope: o }) : w.jsx(lz, {}),
        !c && w.jsx(fz, {}),
        r ? w.jsx(wx, { zIndex: r, children: d }) : d,
      ],
    }),
  });
};
function gz(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, o) =>
      o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o)),
  });
}
function mc(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const ch = (e) => Array.isArray(e);
function Px(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Zs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function cv(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function rm(e, t, n, r) {
  if (typeof t == "function") {
    const [o, i] = cv(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [o, i] = cv(r);
    t = t(n !== void 0 ? n : e.custom, o, i);
  }
  return t;
}
function gc(e, t, n) {
  const r = e.getProps();
  return rm(r, t, n !== void 0 ? n : r.custom, e);
}
const om = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  im = ["initial", ...om],
  ya = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  co = new Set(ya),
  An = (e) => e * 1e3,
  Mn = (e) => e / 1e3,
  vz = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  yz = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  bz = { type: "keyframes", duration: 0.8 },
  Sz = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  xz = (e, { keyframes: t }) =>
    t.length > 2
      ? bz
      : co.has(e)
      ? e.startsWith("scale")
        ? yz(t[1])
        : vz
      : Sz;
function sm(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const wz = { skipAnimations: !1, useManualTiming: !1 },
  kz = (e) => e !== null;
function vc(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(kz),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !i || r === void 0 ? o[i] : r;
}
const Ke = (e) => e;
function Cz(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    o = !1;
  const i = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    i.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, d = !1) => {
      const p = d && r ? t : n;
      return c && i.add(u), p.has(u) || p.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), i.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        o = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        o && ((o = !1), l.process(u));
    },
  };
  return l;
}
const al = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Pz = 40;
function Tx(e, t) {
  let n = !1,
    r = !0;
  const o = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    s = al.reduce((m, h) => ((m[h] = Cz(i)), m), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: d,
      postRender: f,
    } = s,
    p = () => {
      const m = performance.now();
      (n = !1),
        (o.delta = r ? 1e3 / 60 : Math.max(Math.min(m - o.timestamp, Pz), 1)),
        (o.timestamp = m),
        (o.isProcessing = !0),
        a.process(o),
        l.process(o),
        u.process(o),
        c.process(o),
        d.process(o),
        f.process(o),
        (o.isProcessing = !1),
        n && t && ((r = !1), e(p));
    },
    g = () => {
      (n = !0), (r = !0), o.isProcessing || e(p);
    };
  return {
    schedule: al.reduce((m, h) => {
      const y = s[h];
      return (m[h] = (k, T = !1, $ = !1) => (n || g(), y.schedule(k, T, $))), m;
    }, {}),
    cancel: (m) => {
      for (let h = 0; h < al.length; h++) s[al[h]].cancel(m);
    },
    state: o,
    steps: s,
  };
}
const {
    schedule: re,
    cancel: vr,
    state: Oe,
    steps: Md,
  } = Tx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ke, !0),
  _x = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Tz = 1e-7,
  _z = 12;
function Ez(e, t, n, r, o) {
  let i,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (i = _x(s, r, o) - e), i > 0 ? (n = s) : (t = s);
  while (Math.abs(i) > Tz && ++a < _z);
  return s;
}
function ba(e, t, n, r) {
  if (e === t && n === r) return Ke;
  const o = (i) => Ez(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : _x(o(i), t, r));
}
const Ex = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  $x = (e) => (t) => 1 - e(1 - t),
  Rx = ba(0.33, 1.53, 0.69, 0.99),
  am = $x(Rx),
  Ax = Ex(am),
  Mx = (e) =>
    (e *= 2) < 1 ? 0.5 * am(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  lm = (e) => 1 - Math.sin(Math.acos(e)),
  zx = $x(lm),
  Ix = Ex(lm),
  Fx = (e) => /^0[^.\s]+$/u.test(e);
function $z(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Fx(e)
    : !0;
}
let dh = Ke;
const jx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Ox = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Lx = Ox("--"),
  Rz = Ox("var(--"),
  um = (e) => (Rz(e) ? Az.test(e.split("/*")[0].trim()) : !1),
  Az =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Mz = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function zz(e) {
  const t = Mz.exec(e);
  if (!t) return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
function Dx(e, t, n = 1) {
  const [r, o] = zz(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const s = i.trim();
    return jx(s) ? parseFloat(s) : s;
  }
  return um(o) ? Dx(o, t, n + 1) : o;
}
const yr = (e, t, n) => (n > t ? t : n < e ? e : n),
  Ti = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Js = { ...Ti, transform: (e) => yr(0, 1, e) },
  ll = { ...Ti, default: 1 },
  Sa = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Xn = Sa("deg"),
  fn = Sa("%"),
  N = Sa("px"),
  Iz = Sa("vh"),
  Fz = Sa("vw"),
  dv = {
    ...fn,
    parse: (e) => fn.parse(e) / 100,
    transform: (e) => fn.transform(e * 100),
  },
  jz = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  fv = (e) => e === Ti || e === N,
  hv = (e, t) => parseFloat(e.split(", ")[t]),
  pv =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const o = r.match(/^matrix3d\((.+)\)$/u);
      if (o) return hv(o[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? hv(i[1], e) : 0;
      }
    },
  Oz = new Set(["x", "y", "z"]),
  Lz = ya.filter((e) => !Oz.has(e));
function Dz(e) {
  const t = [];
  return (
    Lz.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const vi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: pv(4, 13),
  y: pv(5, 14),
};
vi.translateX = vi.x;
vi.translateY = vi.y;
const Nx = (e) => (t) => t.test(e),
  Nz = { test: (e) => e === "auto", parse: (e) => e },
  Bx = [Ti, N, fn, Xn, Fz, Iz, Nz],
  mv = (e) => Bx.find(Nx(e)),
  Yr = new Set();
let fh = !1,
  hh = !1;
function Vx() {
  if (hh) {
    const e = Array.from(Yr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const o = Dz(r);
      o.length && (n.set(r, o), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const o = n.get(r);
        o &&
          o.forEach(([i, s]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (hh = !1), (fh = !1), Yr.forEach((e) => e.complete()), Yr.clear();
}
function Wx() {
  Yr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (hh = !0);
  });
}
function Bz() {
  Wx(), Vx();
}
class cm {
  constructor(t, n, r, o, i, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = o),
      (this.element = i),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Yr.add(this),
          fh || ((fh = !0), re.read(Wx), re.resolveKeyframes(Vx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: o,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const s = o == null ? void 0 : o.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), o && s === void 0 && o.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Yr.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Yr.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Cs = (e) => Math.round(e * 1e5) / 1e5,
  dm = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Vz(e) {
  return e == null;
}
const Wz =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  fm = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Wz.test(n) && n.startsWith(e)) ||
      (t && !Vz(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Ux = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [o, i, s, a] = r.match(dm);
    return {
      [e]: parseFloat(o),
      [t]: parseFloat(i),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Uz = (e) => yr(0, 255, e),
  zd = { ...Ti, transform: (e) => Math.round(Uz(e)) },
  Vr = {
    test: fm("rgb", "red"),
    parse: Ux("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      zd.transform(e) +
      ", " +
      zd.transform(t) +
      ", " +
      zd.transform(n) +
      ", " +
      Cs(Js.transform(r)) +
      ")",
  };
function Hz(e) {
  let t = "",
    n = "",
    r = "",
    o = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (o = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (o = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (o += o)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: o ? parseInt(o, 16) / 255 : 1,
    }
  );
}
const ph = { test: fm("#"), parse: Hz, transform: Vr.transform },
  No = {
    test: fm("hsl", "hue"),
    parse: Ux("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      fn.transform(Cs(t)) +
      ", " +
      fn.transform(Cs(n)) +
      ", " +
      Cs(Js.transform(r)) +
      ")",
  },
  Ue = {
    test: (e) => Vr.test(e) || ph.test(e) || No.test(e),
    parse: (e) =>
      Vr.test(e) ? Vr.parse(e) : No.test(e) ? No.parse(e) : ph.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Vr.transform(e)
        : No.transform(e),
  },
  Gz =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Kz(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(dm)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Gz)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Hx = "number",
  Gx = "color",
  Yz = "var",
  Xz = "var(",
  gv = "${}",
  qz =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ea(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    o = [];
  let i = 0;
  const a = t
    .replace(
      qz,
      (l) => (
        Ue.test(l)
          ? (r.color.push(i), o.push(Gx), n.push(Ue.parse(l)))
          : l.startsWith(Xz)
          ? (r.var.push(i), o.push(Yz), n.push(l))
          : (r.number.push(i), o.push(Hx), n.push(parseFloat(l))),
        ++i,
        gv
      )
    )
    .split(gv);
  return { values: n, split: a, indexes: r, types: o };
}
function Kx(e) {
  return ea(e).values;
}
function Yx(e) {
  const { split: t, types: n } = ea(e),
    r = t.length;
  return (o) => {
    let i = "";
    for (let s = 0; s < r; s++)
      if (((i += t[s]), o[s] !== void 0)) {
        const a = n[s];
        a === Hx
          ? (i += Cs(o[s]))
          : a === Gx
          ? (i += Ue.transform(o[s]))
          : (i += o[s]);
      }
    return i;
  };
}
const Qz = (e) => (typeof e == "number" ? 0 : e);
function Zz(e) {
  const t = Kx(e);
  return Yx(e)(t.map(Qz));
}
const br = {
    test: Kz,
    parse: Kx,
    createTransformer: Yx,
    getAnimatableNone: Zz,
  },
  Jz = new Set(["brightness", "contrast", "saturate", "opacity"]);
function eI(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(dm) || [];
  if (!r) return e;
  const o = n.replace(r, "");
  let i = Jz.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + o + ")";
}
const tI = /\b([a-z-]*)\(.*?\)/gu,
  mh = {
    ...br,
    getAnimatableNone: (e) => {
      const t = e.match(tI);
      return t ? t.map(eI).join(" ") : e;
    },
  },
  nI = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    backgroundPositionX: N,
    backgroundPositionY: N,
  },
  rI = {
    rotate: Xn,
    rotateX: Xn,
    rotateY: Xn,
    rotateZ: Xn,
    scale: ll,
    scaleX: ll,
    scaleY: ll,
    scaleZ: ll,
    skew: Xn,
    skewX: Xn,
    skewY: Xn,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Js,
    originX: dv,
    originY: dv,
    originZ: N,
  },
  vv = { ...Ti, transform: Math.round },
  hm = {
    ...nI,
    ...rI,
    zIndex: vv,
    size: N,
    fillOpacity: Js,
    strokeOpacity: Js,
    numOctaves: vv,
  },
  oI = {
    ...hm,
    color: Ue,
    backgroundColor: Ue,
    outlineColor: Ue,
    fill: Ue,
    stroke: Ue,
    borderColor: Ue,
    borderTopColor: Ue,
    borderRightColor: Ue,
    borderBottomColor: Ue,
    borderLeftColor: Ue,
    filter: mh,
    WebkitFilter: mh,
  },
  pm = (e) => oI[e];
function Xx(e, t) {
  let n = pm(e);
  return (
    n !== mh && (n = br), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const iI = new Set(["auto", "none", "0"]);
function sI(e, t, n) {
  let r = 0,
    o;
  for (; r < e.length && !o; ) {
    const i = e[r];
    typeof i == "string" && !iI.has(i) && ea(i).values.length && (o = e[r]),
      r++;
  }
  if (o && n) for (const i of t) e[i] = Xx(n, o);
}
class qx extends cm {
  constructor(t, n, r, o, i) {
    super(t, n, r, o, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), um(u))) {
        const c = Dx(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !jz.has(r) || t.length !== 2)) return;
    const [o, i] = t,
      s = mv(o),
      a = mv(i);
    if (s !== a)
      if (fv(s) && fv(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let o = 0; o < t.length; o++) $z(t[o]) && r.push(o);
    r.length && sI(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = vi[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const s = o.length - 1,
      a = o[s];
    (o[s] = vi[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function mm(e) {
  return typeof e == "function";
}
let Dl;
function aI() {
  Dl = void 0;
}
const hn = {
    now: () => (
      Dl === void 0 &&
        hn.set(
          Oe.isProcessing || wz.useManualTiming
            ? Oe.timestamp
            : performance.now()
        ),
      Dl
    ),
    set: (e) => {
      (Dl = e), queueMicrotask(aI);
    },
  },
  yv = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (br.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function lI(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function uI(e, t, n, r) {
  const o = e[0];
  if (o === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    s = yv(o, t),
    a = yv(i, t);
  return !s || !a ? !1 : lI(e) || ((n === "spring" || mm(n)) && r);
}
const cI = 40;
class Qx {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: o = 0,
    repeatDelay: i = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = hn.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: o,
        repeatDelay: i,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > cI
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Bz(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = hn.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: o,
      velocity: i,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !uI(t, r, o, i))
      if (s) this.options.duration = 0;
      else {
        l == null || l(vc(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Zx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const dI = 5;
function Jx(e, t, n) {
  const r = Math.max(t - dI, 0);
  return Zx(n - e(r), t - r);
}
const Id = 0.001,
  fI = 0.01,
  hI = 10,
  pI = 0.05,
  mI = 1;
function gI({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let o,
    i,
    s = 1 - t;
  (s = yr(pI, mI, s)),
    (e = yr(fI, hI, Mn(e))),
    s < 1
      ? ((o = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            p = gh(u, s),
            g = Math.exp(-d);
          return Id - (f / p) * g;
        }),
        (i = (u) => {
          const d = u * s * e,
            f = d * n + n,
            p = Math.pow(s, 2) * Math.pow(u, 2) * e,
            g = Math.exp(-d),
            v = gh(Math.pow(u, 2), s);
          return ((-o(u) + Id > 0 ? -1 : 1) * ((f - p) * g)) / v;
        }))
      : ((o = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Id + c * d;
        }),
        (i = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = yI(o, i, a);
  if (((e = An(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const vI = 12;
function yI(e, t, n) {
  let r = n;
  for (let o = 1; o < vI; o++) r = r - e(r) / t(r);
  return r;
}
function gh(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const bI = ["duration", "bounce"],
  SI = ["stiffness", "damping", "mass"];
function bv(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function xI(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!bv(e, SI) && bv(e, bI)) {
    const n = gI(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function ew({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0],
    i = e[e.length - 1],
    s = { done: !1, value: o },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = xI({ ...r, velocity: -Mn(r.velocity || 0) }),
    p = d || 0,
    g = l / (2 * Math.sqrt(a * u)),
    v = i - o,
    x = Mn(Math.sqrt(a / u)),
    m = Math.abs(v) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (g < 1) {
    const y = gh(x, g);
    h = (k) => {
      const T = Math.exp(-g * x * k);
      return (
        i - T * (((p + g * x * v) / y) * Math.sin(y * k) + v * Math.cos(y * k))
      );
    };
  } else if (g === 1) h = (y) => i - Math.exp(-x * y) * (v + (p + x * v) * y);
  else {
    const y = x * Math.sqrt(g * g - 1);
    h = (k) => {
      const T = Math.exp(-g * x * k),
        $ = Math.min(y * k, 300);
      return (
        i - (T * ((p + g * x * v) * Math.sinh($) + y * v * Math.cosh($))) / y
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (y) => {
      const k = h(y);
      if (f) s.done = y >= c;
      else {
        let T = 0;
        g < 1 && (T = y === 0 ? An(p) : Jx(h, y, k));
        const $ = Math.abs(T) <= n,
          E = Math.abs(i - k) <= t;
        s.done = $ && E;
      }
      return (s.value = s.done ? i : k), s;
    },
  };
}
function Sv({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: o = 10,
  bounceStiffness: i = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    p = (R) => (a !== void 0 && R < a) || (l !== void 0 && R > l),
    g = (R) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - R) < Math.abs(l - R)
        ? a
        : l;
  let v = n * t;
  const x = d + v,
    m = s === void 0 ? x : s(x);
  m !== x && (v = m - d);
  const h = (R) => -v * Math.exp(-R / r),
    y = (R) => m + h(R),
    k = (R) => {
      const z = h(R),
        F = y(R);
      (f.done = Math.abs(z) <= u), (f.value = f.done ? m : F);
    };
  let T, $;
  const E = (R) => {
    p(f.value) &&
      ((T = R),
      ($ = ew({
        keyframes: [f.value, g(f.value)],
        velocity: Jx(y, R, f.value),
        damping: o,
        stiffness: i,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (R) => {
        let z = !1;
        return (
          !$ && T === void 0 && ((z = !0), k(R), E(R)),
          T !== void 0 && R >= T ? $.next(R - T) : (!z && k(R), f)
        );
      },
    }
  );
}
const wI = ba(0.42, 0, 1, 1),
  kI = ba(0, 0, 0.58, 1),
  tw = ba(0.42, 0, 0.58, 1),
  CI = (e) => Array.isArray(e) && typeof e[0] != "number",
  gm = (e) => Array.isArray(e) && typeof e[0] == "number",
  xv = {
    linear: Ke,
    easeIn: wI,
    easeInOut: tw,
    easeOut: kI,
    circIn: lm,
    circInOut: Ix,
    circOut: zx,
    backIn: am,
    backInOut: Ax,
    backOut: Rx,
    anticipate: Mx,
  },
  wv = (e) => {
    if (gm(e)) {
      dh(e.length === 4);
      const [t, n, r, o] = e;
      return ba(t, n, r, o);
    } else if (typeof e == "string") return dh(xv[e] !== void 0), xv[e];
    return e;
  },
  PI = (e, t) => (n) => t(e(n)),
  zn = (...e) => e.reduce(PI),
  yi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  be = (e, t, n) => e + (t - e) * n;
function Fd(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function TI({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let o = 0,
    i = 0,
    s = 0;
  if (!t) o = i = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (o = Fd(l, a, e + 1 / 3)), (i = Fd(l, a, e)), (s = Fd(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function ku(e, t) {
  return (n) => (n > 0 ? t : e);
}
const jd = (e, t, n) => {
    const r = e * e,
      o = n * (t * t - r) + r;
    return o < 0 ? 0 : Math.sqrt(o);
  },
  _I = [ph, Vr, No],
  EI = (e) => _I.find((t) => t.test(e));
function kv(e) {
  const t = EI(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === No && (n = TI(n)), n;
}
const Cv = (e, t) => {
    const n = kv(e),
      r = kv(t);
    if (!n || !r) return ku(e, t);
    const o = { ...n };
    return (i) => (
      (o.red = jd(n.red, r.red, i)),
      (o.green = jd(n.green, r.green, i)),
      (o.blue = jd(n.blue, r.blue, i)),
      (o.alpha = be(n.alpha, r.alpha, i)),
      Vr.transform(o)
    );
  },
  vh = new Set(["none", "hidden"]);
function $I(e, t) {
  return vh.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function RI(e, t) {
  return (n) => be(e, t, n);
}
function vm(e) {
  return typeof e == "number"
    ? RI
    : typeof e == "string"
    ? um(e)
      ? ku
      : Ue.test(e)
      ? Cv
      : zI
    : Array.isArray(e)
    ? nw
    : typeof e == "object"
    ? Ue.test(e)
      ? Cv
      : AI
    : ku;
}
function nw(e, t) {
  const n = [...e],
    r = n.length,
    o = e.map((i, s) => vm(i)(i, t[s]));
  return (i) => {
    for (let s = 0; s < r; s++) n[s] = o[s](i);
    return n;
  };
}
function AI(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = vm(e[o])(e[o], t[o]));
  return (o) => {
    for (const i in r) n[i] = r[i](o);
    return n;
  };
}
function MI(e, t) {
  var n;
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      a = e.indexes[s][o[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), o[s]++;
  }
  return r;
}
const zI = (e, t) => {
  const n = br.createTransformer(t),
    r = ea(e),
    o = ea(t);
  return r.indexes.var.length === o.indexes.var.length &&
    r.indexes.color.length === o.indexes.color.length &&
    r.indexes.number.length >= o.indexes.number.length
    ? (vh.has(e) && !o.values.length) || (vh.has(t) && !r.values.length)
      ? $I(e, t)
      : zn(nw(MI(r, o), o.values), n)
    : ku(e, t);
};
function rw(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? be(e, t, n)
    : vm(e)(e, t);
}
function II(e, t, n) {
  const r = [],
    o = n || rw,
    i = e.length - 1;
  for (let s = 0; s < i; s++) {
    let a = o(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Ke : t;
      a = zn(l, a);
    }
    r.push(a);
  }
  return r;
}
function FI(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const i = e.length;
  if ((dh(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = II(t, r, o),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = yi(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => l(yr(e[0], e[i - 1], u)) : l;
}
function jI(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = yi(0, t, r);
    e.push(be(n, 1, o));
  }
}
function OI(e) {
  const t = [0];
  return jI(t, e.length - 1), t;
}
function LI(e, t) {
  return e.map((n) => n * t);
}
function DI(e, t) {
  return e.map(() => t || tw).splice(0, e.length - 1);
}
function Cu({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const o = CI(r) ? r.map(wv) : wv(r),
    i = { done: !1, value: t[0] },
    s = LI(n && n.length === t.length ? n : OI(t), e),
    a = FI(s, t, { ease: Array.isArray(o) ? o : DI(t, o) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const Pv = 2e4;
function NI(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Pv; ) (t += n), (r = e.next(t));
  return t >= Pv ? 1 / 0 : t;
}
const BI = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => re.update(t, !0),
      stop: () => vr(t),
      now: () => (Oe.isProcessing ? Oe.timestamp : hn.now()),
    };
  },
  VI = { decay: Sv, inertia: Sv, tween: Cu, keyframes: Cu, spring: ew },
  WI = (e) => e / 100;
class ym extends Qx {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options,
      s = (o == null ? void 0 : o.KeyframeResolver) || cm,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(i, a, n, r, o)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: o = 0,
        repeatType: i,
        velocity: s = 0,
      } = this.options,
      a = mm(n) ? n : VI[n] || Cu;
    let l, u;
    a !== Cu &&
      typeof t[0] != "number" &&
      ((l = zn(WI, rw(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = NI(c));
    const { calculatedDuration: d } = c,
      f = d + o,
      p = f * (r + 1) - o;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: p,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: R } = this.options;
      return { done: !0, value: R[R.length - 1] };
    }
    const {
      finalKeyframe: o,
      generator: i,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: p,
      repeatType: g,
      repeatDelay: v,
      onUpdate: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const m = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? m < 0 : m > c;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let y = this.currentTime,
      k = i;
    if (p) {
      const R = Math.min(this.currentTime, c) / d;
      let z = Math.floor(R),
        F = R % 1;
      !F && R >= 1 && (F = 1),
        F === 1 && z--,
        (z = Math.min(z, p + 1)),
        !!(z % 2) &&
          (g === "reverse"
            ? ((F = 1 - F), v && (F -= v / d))
            : g === "mirror" && (k = s)),
        (y = yr(0, 1, F) * d);
    }
    const T = h ? { done: !1, value: l[0] } : k.next(y);
    a && (T.value = a(T.value));
    let { done: $ } = T;
    !h &&
      u !== null &&
      ($ = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const E =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && $));
    return (
      E && o !== void 0 && (T.value = vc(l, this.options, o)),
      x && x(T.value),
      E && this.finish(),
      T
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Mn(t.calculatedDuration) : 0;
  }
  get time() {
    return Mn(this.currentTime);
  }
  set time(t) {
    (t = An(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Mn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = BI, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const o = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = o - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = o)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const UI = new Set(["opacity", "clipPath", "filter", "transform"]),
  HI = 10,
  GI = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / HI), 2);
    for (let o = 0; o < r; o++) n += e(yi(0, r - 1, o)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function bm(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const KI = { linearEasing: void 0 };
function YI(e, t) {
  const n = bm(e);
  return () => {
    var r;
    return (r = KI[t]) !== null && r !== void 0 ? r : n();
  };
}
const Pu = YI(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function ow(e) {
  return !!(
    (typeof e == "function" && Pu()) ||
    !e ||
    (typeof e == "string" && (e in yh || Pu())) ||
    gm(e) ||
    (Array.isArray(e) && e.every(ow))
  );
}
const is = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  yh = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: is([0, 0.65, 0.55, 1]),
    circOut: is([0.55, 0, 1, 0.45]),
    backIn: is([0.31, 0.01, 0.66, -0.59]),
    backOut: is([0.33, 1.53, 0.69, 0.99]),
  };
function iw(e, t) {
  if (e)
    return typeof e == "function" && Pu()
      ? GI(e, t)
      : gm(e)
      ? is(e)
      : Array.isArray(e)
      ? e.map((n) => iw(n, t) || yh.easeOut)
      : yh[e];
}
function XI(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = iw(a, o);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: o,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: i + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Tv(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const qI = bm(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Tu = 10,
  QI = 2e4;
function ZI(e) {
  return mm(e.type) || e.type === "spring" || !ow(e.ease);
}
function JI(e, t) {
  const n = new ym({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let i = 0;
  for (; !r.done && i < QI; ) (r = n.sample(i)), o.push(r.value), (i += Tu);
  return { times: void 0, keyframes: o, duration: i - Tu, ease: "linear" };
}
const sw = { anticipate: Mx, backInOut: Ax, circInOut: Ix };
function eF(e) {
  return e in sw;
}
class _v extends Qx {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: i } = this.options;
    (this.resolver = new qx(
      i,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      o
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: o = 300,
      times: i,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && Pu() && eF(s) && (s = sw[s]), ZI(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: p,
          motionValue: g,
          element: v,
          ...x
        } = this.options,
        m = JI(t, x);
      (t = m.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (o = m.duration),
        (i = m.times),
        (s = m.ease),
        (a = "keyframes");
    }
    const d = XI(l.owner.current, u, t, {
      ...this.options,
      duration: o,
      times: i,
      ease: s,
    });
    return (
      (d.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Tv(d, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: f } = this.options;
            l.set(vc(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: d, duration: o, times: i, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Mn(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Mn(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = An(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ke;
      const { animation: r } = n;
      Tv(r, t);
    }
    return Ke;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: o,
      type: i,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: d,
          element: f,
          ...p
        } = this.options,
        g = new ym({
          ...p,
          keyframes: r,
          duration: o,
          type: i,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        v = An(this.time);
      u.setWithVelocity(g.sample(v - Tu).value, g.sample(v).value, Tu);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: o,
      repeatType: i,
      damping: s,
      type: a,
    } = t;
    return (
      qI() &&
      r &&
      UI.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !o &&
      i !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const tF = bm(() => window.ScrollTimeline !== void 0);
class nF {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((o) =>
      tF() && o.attachTimeline ? o.attachTimeline(t) : n(o)
    );
    return () => {
      r.forEach((o, i) => {
        o && o(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function rF({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: o,
  repeat: i,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Sm =
    (e, t, n, r = {}, o, i) =>
    (s) => {
      const a = sm(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - An(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (f) => {
          t.set(f), a.onUpdate && a.onUpdate(f);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : o,
      };
      rF(a) || (c = { ...c, ...xz(e, c) }),
        c.duration && (c.duration = An(c.duration)),
        c.repeatDelay && (c.repeatDelay = An(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let d = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (d = !0)),
        d && !i && t.get() !== void 0)
      ) {
        const f = vc(c.keyframes, a);
        if (f !== void 0)
          return (
            re.update(() => {
              c.onUpdate(f), c.onComplete();
            }),
            new nF([])
          );
      }
      return !i && _v.supports(c) ? new _v(c) : new ym(c);
    },
  oF = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  iF = (e) => (ch(e) ? e[e.length - 1] || 0 : e);
function xm(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function wm(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class km {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return xm(this.subscriptions, t), () => wm(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < o; i++) {
          const s = this.subscriptions[i];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ev = 30,
  sF = (e) => !isNaN(parseFloat(e));
class aF {
  constructor(t, n = {}) {
    (this.version = "11.11.17"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, o = !0) => {
        const i = hn.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          o &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = hn.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = sF(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new km());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            re.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = hn.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Ev
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ev);
    return Zx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function ta(e, t) {
  return new aF(e, t);
}
function lF(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ta(n));
}
function uF(e, t) {
  const n = gc(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const s in i) {
    const a = iF(i[s]);
    lF(e, s, a);
  }
}
const Cm = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  cF = "framerAppearId",
  aw = "data-" + Cm(cF);
function lw(e) {
  return e.props[aw];
}
const Ge = (e) => !!(e && e.getVelocity);
function dF(e) {
  return !!(Ge(e) && e.add);
}
function bh(e, t) {
  const n = e.getValue("willChange");
  if (dF(n)) return n.add(t);
}
function fF({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function uw(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var i;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = o && e.animationState && e.animationState.getState()[o];
  for (const d in l) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      p = l[d];
    if (p === void 0 || (c && fF(c, d))) continue;
    const g = { delay: n, ...sm(s || {}, d) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const m = lw(e);
      if (m) {
        const h = window.MotionHandoffAnimation(m, d, re);
        h !== null && ((g.startTime = h), (v = !0));
      }
    }
    bh(e, d),
      f.start(
        Sm(d, f, p, e.shouldReduceMotion && co.has(d) ? { type: !1 } : g, e, v)
      );
    const x = f.animation;
    x && u.push(x);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        re.update(() => {
          a && uF(e, a);
        });
      }),
    u
  );
}
function Sh(e, t, n = {}) {
  var r;
  const o = gc(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = o ? () => Promise.all(uw(e, o, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return hF(e, t, c + u, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function hF(e, t, n = 0, r = 0, o = 1, i) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = o === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(pF)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Sh(u, t, { ...i, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function pF(e, t) {
  return e.sortNodePosition(t);
}
function mF(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((i) => Sh(e, i, n));
    r = Promise.all(o);
  } else if (typeof t == "string") r = Sh(e, t, n);
  else {
    const o = typeof t == "function" ? gc(e, t, n.custom) : t;
    r = Promise.all(uw(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const gF = im.length;
function cw(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? cw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < gF; n++) {
    const r = im[n],
      o = e.props[r];
    (Zs(o) || o === !1) && (t[r] = o);
  }
  return t;
}
const vF = [...om].reverse(),
  yF = om.length;
function bF(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => mF(e, n, r)));
}
function SF(e) {
  let t = bF(e),
    n = $v(),
    r = !0;
  const o = (l) => (u, c) => {
    var d;
    const f = gc(
      e,
      c,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: p, transitionEnd: g, ...v } = f;
      u = { ...u, ...v, ...g };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = cw(e.parent) || {},
      d = [],
      f = new Set();
    let p = {},
      g = 1 / 0;
    for (let x = 0; x < yF; x++) {
      const m = vF[x],
        h = n[m],
        y = u[m] !== void 0 ? u[m] : c[m],
        k = Zs(y),
        T = m === l ? h.isActive : null;
      T === !1 && (g = x);
      let $ = y === c[m] && y !== u[m] && k;
      if (
        ($ && r && e.manuallyAnimateOnMount && ($ = !1),
        (h.protectedKeys = { ...p }),
        (!h.isActive && T === null) ||
          (!y && !h.prevProp) ||
          mc(y) ||
          typeof y == "boolean")
      )
        continue;
      const E = xF(h.prevProp, y);
      let R = E || (m === l && h.isActive && !$ && k) || (x > g && k),
        z = !1;
      const F = Array.isArray(y) ? y : [y];
      let oe = F.reduce(o(m), {});
      T === !1 && (oe = {});
      const { prevResolvedValues: nt = {} } = h,
        wt = { ...nt, ...oe },
        mn = (ve) => {
          (R = !0),
            f.has(ve) && ((z = !0), f.delete(ve)),
            (h.needsAnimating[ve] = !0);
          const M = e.getValue(ve);
          M && (M.liveStyle = !1);
        };
      for (const ve in wt) {
        const M = oe[ve],
          O = nt[ve];
        if (p.hasOwnProperty(ve)) continue;
        let B = !1;
        ch(M) && ch(O) ? (B = !Px(M, O)) : (B = M !== O),
          B
            ? M != null
              ? mn(ve)
              : f.add(ve)
            : M !== void 0 && f.has(ve)
            ? mn(ve)
            : (h.protectedKeys[ve] = !0);
      }
      (h.prevProp = y),
        (h.prevResolvedValues = oe),
        h.isActive && (p = { ...p, ...oe }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          (!($ && E) || z) &&
          d.push(...F.map((ve) => ({ animation: ve, options: { type: m } })));
    }
    if (f.size) {
      const x = {};
      f.forEach((m) => {
        const h = e.getBaseTarget(m),
          y = e.getValue(m);
        y && (y.liveStyle = !0), (x[m] = h ?? null);
      }),
        d.push({ animation: x });
    }
    let v = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((f) => {
        var p;
        return (p = f.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = $v()), (r = !0);
    },
  };
}
function xF(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Px(t, e) : !1;
}
function Ar(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function $v() {
  return {
    animate: Ar(!0),
    whileInView: Ar(),
    whileHover: Ar(),
    whileTap: Ar(),
    whileDrag: Ar(),
    whileFocus: Ar(),
    exit: Ar(),
  };
}
class kr {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class wF extends kr {
  constructor(t) {
    super(t), t.animationState || (t.animationState = SF(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    mc(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let kF = 0;
class CF extends kr {
  constructor() {
    super(...arguments), (this.id = kF++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const PF = { animation: { Feature: wF }, exit: { Feature: CF } },
  dw = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function yc(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const TF = (e) => (t) => dw(t) && e(t, yc(t));
function En(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function In(e, t, n, r) {
  return En(e, t, TF(n), r);
}
const Rv = (e, t) => Math.abs(e - t);
function _F(e, t) {
  const n = Rv(e.x, t.x),
    r = Rv(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class fw {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Ld(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          p = _F(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !p) return;
        const { point: g } = d,
          { timestamp: v } = Oe;
        this.history.push({ ...g, timestamp: v });
        const { onStart: x, onMove: m } = this.handlers;
        f ||
          (x && x(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Od(f, this.transformPagePoint)),
          re.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: p, onSessionEnd: g, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const x = Ld(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Od(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && p && p(d, x), g && g(d, x);
      }),
      !dw(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = o || window);
    const s = yc(t),
      a = Od(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = Oe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Ld(a, this.history)),
      (this.removeListeners = zn(
        In(this.contextWindow, "pointermove", this.handlePointerMove),
        In(this.contextWindow, "pointerup", this.handlePointerUp),
        In(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), vr(this.updatePoint);
  }
}
function Od(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Av(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ld({ point: e }, t) {
  return {
    point: e,
    delta: Av(e, hw(t)),
    offset: Av(e, EF(t)),
    velocity: $F(t, 0.1),
  };
}
function EF(e) {
  return e[0];
}
function hw(e) {
  return e[e.length - 1];
}
function $F(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const o = hw(e);
  for (; n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > An(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = Mn(o.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const s = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function pw(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Mv = pw("dragHorizontal"),
  zv = pw("dragVertical");
function mw(e) {
  let t = !1;
  if (e === "y") t = zv();
  else if (e === "x") t = Mv();
  else {
    const n = Mv(),
      r = zv();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function gw() {
  const e = mw(!0);
  return e ? (e(), !1) : !0;
}
function Bo(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const vw = 1e-4,
  RF = 1 - vw,
  AF = 1 + vw,
  yw = 0.01,
  MF = 0 - yw,
  zF = 0 + yw;
function yt(e) {
  return e.max - e.min;
}
function IF(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Iv(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = be(t.min, t.max, e.origin)),
    (e.scale = yt(n) / yt(t)),
    (e.translate = be(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= RF && e.scale <= AF) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= MF && e.translate <= zF) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Ps(e, t, n, r) {
  Iv(e.x, t.x, n.x, r ? r.originX : void 0),
    Iv(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Fv(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + yt(t));
}
function FF(e, t, n) {
  Fv(e.x, t.x, n.x), Fv(e.y, t.y, n.y);
}
function jv(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + yt(t));
}
function Ts(e, t, n) {
  jv(e.x, t.x, n.x), jv(e.y, t.y, n.y);
}
function jF(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? be(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? be(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ov(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function OF(e, { top: t, left: n, bottom: r, right: o }) {
  return { x: Ov(e.x, n, o), y: Ov(e.y, t, r) };
}
function Lv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function LF(e, t) {
  return { x: Lv(e.x, t.x), y: Lv(e.y, t.y) };
}
function DF(e, t) {
  let n = 0.5;
  const r = yt(e),
    o = yt(t);
  return (
    o > r
      ? (n = yi(t.min, t.max - r, e.min))
      : r > o && (n = yi(e.min, e.max - o, t.min)),
    yr(0, 1, n)
  );
}
function NF(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const xh = 0.35;
function BF(e = xh) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = xh),
    { x: Dv(e, "left", "right"), y: Dv(e, "top", "bottom") }
  );
}
function Dv(e, t, n) {
  return { min: Nv(e, t), max: Nv(e, n) };
}
function Nv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Bv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Vo = () => ({ x: Bv(), y: Bv() }),
  Vv = () => ({ min: 0, max: 0 }),
  ke = () => ({ x: Vv(), y: Vv() });
function _t(e) {
  return [e("x"), e("y")];
}
function bw({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function VF({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function WF(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Dd(e) {
  return e === void 0 || e === 1;
}
function wh({ scale: e, scaleX: t, scaleY: n }) {
  return !Dd(e) || !Dd(t) || !Dd(n);
}
function Ir(e) {
  return (
    wh(e) ||
    Sw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Sw(e) {
  return Wv(e.x) || Wv(e.y);
}
function Wv(e) {
  return e && e !== "0%";
}
function _u(e, t, n) {
  const r = e - n,
    o = t * r;
  return n + o;
}
function Uv(e, t, n, r, o) {
  return o !== void 0 && (e = _u(e, o, r)), _u(e, n, r) + t;
}
function kh(e, t = 0, n = 1, r, o) {
  (e.min = Uv(e.min, t, n, r, o)), (e.max = Uv(e.max, t, n, r, o));
}
function xw(e, { x: t, y: n }) {
  kh(e.x, t.translate, t.scale, t.originPoint),
    kh(e.y, n.translate, n.scale, n.originPoint);
}
const Hv = 0.999999999999,
  Gv = 1.0000000000001;
function UF(e, t, n, r = !1) {
  const o = n.length;
  if (!o) return;
  t.x = t.y = 1;
  let i, s;
  for (let a = 0; a < o; a++) {
    (i = n[a]), (s = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        Uo(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), xw(e, s)),
      r && Ir(i.latestValues) && Uo(e, i.latestValues));
  }
  t.x < Gv && t.x > Hv && (t.x = 1), t.y < Gv && t.y > Hv && (t.y = 1);
}
function Wo(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Kv(e, t, n, r, o = 0.5) {
  const i = be(e.min, e.max, o);
  kh(e, t, n, i, r);
}
function Uo(e, t) {
  Kv(e.x, t.x, t.scaleX, t.scale, t.originX),
    Kv(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function ww(e, t) {
  return bw(WF(e.getBoundingClientRect(), t));
}
function HF(e, t, n) {
  const r = ww(e, n),
    { scroll: o } = t;
  return o && (Wo(r.x, o.offset.x), Wo(r.y, o.offset.y)), r;
}
const kw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  GF = new WeakMap();
class KF {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ke()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const o = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(yc(c, "page").point);
      },
      i = (c, d) => {
        const { drag: f, dragPropagation: p, onDragStart: g } = this.getProps();
        if (
          f &&
          !p &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = mw(f)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          _t((x) => {
            let m = this.getAxisMotionValue(x).get() || 0;
            if (fn.test(m)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const y = h.layout.layoutBox[x];
                y && (m = yt(y) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[x] = m;
          }),
          g && re.postRender(() => g(c, d)),
          bh(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: p,
          onDirectionLock: g,
          onDrag: v,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: x } = d;
        if (p && this.currentDirection === null) {
          (this.currentDirection = YF(x)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, x),
          this.updateAxis("y", d.point, x),
          this.visualElement.render(),
          v && v(c, d);
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        _t((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new fw(
      t,
      {
        onSessionStart: o,
        onStart: i,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: kw(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: o } = n;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && re.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !ul(t, o, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = jF(s, this.constraints[t], this.elastic[t])),
      i.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && Bo(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && o
      ? (this.constraints = OF(o.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = BF(r)),
      i !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        _t((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = NF(o.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Bo(t)) return !1;
    const r = t.current,
      { projection: o } = this.visualElement;
    if (!o || !o.layout) return !1;
    const i = HF(r, o.root, this.visualElement.getTransformPagePoint());
    let s = LF(o.layout.layoutBox, i);
    if (n) {
      const a = n(VF(s));
      (this.hasMutatedConstraints = !!a), a && (s = bw(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: o,
        dragTransition: i,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = _t((c) => {
        if (!ul(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = o ? 200 : 1e6,
          p = o ? 40 : 1e7,
          g = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(c, g);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      bh(this.visualElement, t), r.start(Sm(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    _t((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    _t((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      o = r[n];
    return (
      o ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    _t((n) => {
      const { drag: r } = this.getProps();
      if (!ul(n, r, this.currentDirection)) return;
      const { projection: o } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: s, max: a } = o.layout.layoutBox[n];
        i.set(t[n] - be(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Bo(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    _t((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        o[s] = DF({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      _t((s) => {
        if (!ul(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(be(l, u, o[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    GF.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = In(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Bo(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: o } = this.visualElement,
      i = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()),
      re.read(r);
    const s = En(window, "resize", () => this.scalePositionWithinConstraints()),
      a = o.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (_t((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: o = !1,
        dragConstraints: i = !1,
        dragElastic: s = xh,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function ul(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function YF(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class XF extends kr {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Ke),
      (this.removeListeners = Ke),
      (this.controls = new KF(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ke);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Yv = (e) => (t, n) => {
  e && re.postRender(() => e(t, n));
};
class qF extends kr {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Ke);
  }
  onPointerDown(t) {
    this.session = new fw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: kw(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: o,
    } = this.node.getProps();
    return {
      onSessionStart: Yv(t),
      onStart: Yv(n),
      onMove: r,
      onEnd: (i, s) => {
        delete this.session, o && re.postRender(() => o(i, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = In(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const xa = b.createContext(null);
function Cw() {
  const e = b.useContext(xa);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    o = b.useId();
  b.useEffect(() => r(o), []);
  const i = b.useCallback(() => n && n(o), [o, n]);
  return !t && n ? [!1, i] : [!0];
}
function QF() {
  return ZF(b.useContext(xa));
}
function ZF(e) {
  return e === null ? !0 : e.isPresent;
}
const Pm = b.createContext({}),
  Pw = b.createContext({}),
  Nl = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Xv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Yi = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (N.test(e)) e = parseFloat(e);
        else return e;
      const n = Xv(e, t.target.x),
        r = Xv(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  JF = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        o = br.parse(e);
      if (o.length > 5) return r;
      const i = br.createTransformer(e),
        s = typeof o[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (o[0 + s] /= a), (o[1 + s] /= l);
      const u = be(a, l, 0.5);
      return (
        typeof o[2 + s] == "number" && (o[2 + s] /= u),
        typeof o[3 + s] == "number" && (o[3 + s] /= u),
        i(o)
      );
    },
  },
  Eu = {};
function ej(e) {
  Object.assign(Eu, e);
}
const { schedule: Tm, cancel: sV } = Tx(queueMicrotask, !1);
class tj extends b.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: o,
      } = this.props,
      { projection: i } = t;
    ej(nj),
      i &&
        (n.group && n.group.add(i),
        r && r.register && o && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Nl.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: o,
        isPresent: i,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = i),
        o || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? s.promote()
            : s.relegate() ||
              re.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Tm.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: o } = t;
    o &&
      (o.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(o),
      r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Tw(e) {
  const [t, n] = Cw(),
    r = b.useContext(Pm);
  return w.jsx(tj, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: b.useContext(Pw),
    isPresent: t,
    safeToRemove: n,
  });
}
const nj = {
    borderRadius: {
      ...Yi,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Yi,
    borderTopRightRadius: Yi,
    borderBottomLeftRadius: Yi,
    borderBottomRightRadius: Yi,
    boxShadow: JF,
  },
  _w = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  rj = _w.length,
  qv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Qv = (e) => typeof e == "number" || N.test(e);
function oj(e, t, n, r, o, i) {
  o
    ? ((e.opacity = be(0, n.opacity !== void 0 ? n.opacity : 1, ij(r))),
      (e.opacityExit = be(t.opacity !== void 0 ? t.opacity : 1, 0, sj(r))))
    : i &&
      (e.opacity = be(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < rj; s++) {
    const a = `border${_w[s]}Radius`;
    let l = Zv(t, a),
      u = Zv(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Qv(l) === Qv(u)
        ? ((e[a] = Math.max(be(qv(l), qv(u), r), 0)),
          (fn.test(u) || fn.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = be(t.rotate || 0, n.rotate || 0, r));
}
function Zv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ij = Ew(0, 0.5, zx),
  sj = Ew(0.5, 0.95, Ke);
function Ew(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(yi(e, t, r)));
}
function Jv(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Pt(e, t) {
  Jv(e.x, t.x), Jv(e.y, t.y);
}
function ey(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function ty(e, t, n, r, o) {
  return (
    (e -= t), (e = _u(e, 1 / n, r)), o !== void 0 && (e = _u(e, 1 / o, r)), e
  );
}
function aj(e, t = 0, n = 1, r = 0.5, o, i = e, s = e) {
  if (
    (fn.test(t) &&
      ((t = parseFloat(t)), (t = be(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = be(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = ty(e.min, t, n, a, o)),
    (e.max = ty(e.max, t, n, a, o));
}
function ny(e, t, [n, r, o], i, s) {
  aj(e, t[n], t[r], t[o], t.scale, i, s);
}
const lj = ["x", "scaleX", "originX"],
  uj = ["y", "scaleY", "originY"];
function ry(e, t, n, r) {
  ny(e.x, t, lj, n ? n.x : void 0, r ? r.x : void 0),
    ny(e.y, t, uj, n ? n.y : void 0, r ? r.y : void 0);
}
function oy(e) {
  return e.translate === 0 && e.scale === 1;
}
function $w(e) {
  return oy(e.x) && oy(e.y);
}
function iy(e, t) {
  return e.min === t.min && e.max === t.max;
}
function cj(e, t) {
  return iy(e.x, t.x) && iy(e.y, t.y);
}
function sy(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Rw(e, t) {
  return sy(e.x, t.x) && sy(e.y, t.y);
}
function ay(e) {
  return yt(e.x) / yt(e.y);
}
function ly(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class dj {
  constructor() {
    this.members = [];
  }
  add(t) {
    xm(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (wm(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0) return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const i = this.members[o];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function fj(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x,
    i = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: p,
      skewY: g,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      p && (r += `skewX(${p}deg) `),
      g && (r += `skewY(${g}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const hj = (e, t) => e.depth - t.depth;
class pj {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    xm(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    wm(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(hj),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Bl(e) {
  const t = Ge(e) ? e.get() : e;
  return oF(t) ? t.toValue() : t;
}
function mj(e, t) {
  const n = hn.now(),
    r = ({ timestamp: o }) => {
      const i = o - n;
      i >= t && (vr(r), e(i - t));
    };
  return re.read(r, !0), () => vr(r);
}
function gj(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function vj(e, t, n) {
  const r = Ge(e) ? e : ta(e);
  return r.start(Sm("", r, t, n)), r.animation;
}
const Fr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ss = typeof window < "u" && window.MotionDebug !== void 0,
  Nd = ["", "X", "Y", "Z"],
  yj = { visibility: "hidden" },
  uy = 1e3;
let bj = 0;
function Bd(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && ((n[e] = o[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Aw(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = lw(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", re, !(o || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Aw(r);
}
function Mw({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: o,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = bj++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            ss &&
              (Fr.totalNodes =
                Fr.resolvedTargetDeltas =
                Fr.recalculatedProjection =
                  0),
            this.nodes.forEach(wj),
            this.nodes.forEach(_j),
            this.nodes.forEach(Ej),
            this.nodes.forEach(kj),
            ss && window.MotionDebug.record(Fr);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new pj());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new km()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = gj(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = mj(f, 250)),
            Nl.hasAnimatedSinceResize &&
              ((Nl.hasAnimatedSinceResize = !1), this.nodes.forEach(dy));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: p,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || zj,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } =
                  c.getProps(),
                h = !this.targetLayout || !Rw(this.targetLayout, g) || p,
                y = !f && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (f && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, y);
                const k = { ...sm(v, "layout"), onPlay: x, onComplete: m };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((k.delay = 0), (k.type = !1)),
                  this.startAnimation(k);
              } else
                f || dy(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = g;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        vr(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach($j),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Aw(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(cy);
        return;
      }
      this.isUpdating || this.nodes.forEach(Pj),
        (this.isUpdating = !1),
        this.nodes.forEach(Tj),
        this.nodes.forEach(Sj),
        this.nodes.forEach(xj),
        this.clearAllSnapshots();
      const a = hn.now();
      (Oe.delta = yr(0, 1e3 / 60, a - Oe.timestamp)),
        (Oe.timestamp = a),
        (Oe.isProcessing = !0),
        Md.update.process(Oe),
        Md.preRender.process(Oe),
        Md.render.process(Oe),
        (Oe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Tm.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Cj), this.sharedNodes.forEach(Rj);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        re.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      re.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ke()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!o) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !$w(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Ir(this.latestValues) || c) &&
        (o(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        Ij(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return ke();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(Fj)
        )
      ) {
        const { scroll: c } = this.root;
        c && (Wo(l.x, c.offset.x), Wo(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = ke();
      if (
        (Pt(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Pt(l, s), Wo(l.x, d.offset.x), Wo(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = ke();
      Pt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Uo(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Ir(c.latestValues) && Uo(l, c.latestValues);
      }
      return Ir(this.latestValues) && Uo(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ke();
      Pt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Ir(u.latestValues)) continue;
        wh(u.latestValues) && u.updateSnapshot();
        const c = ke(),
          d = u.measurePageBox();
        Pt(c, d),
          ry(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Ir(this.latestValues) && ry(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Oe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Oe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ke()),
              (this.relativeTargetOrigin = ke()),
              Ts(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              Pt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ke()), (this.targetWithTransforms = ke())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                FF(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Pt(this.target, this.layout.layoutBox),
                xw(this.target, this.targetDelta))
              : Pt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ke()),
                (this.relativeTargetOrigin = ke()),
                Ts(this.relativeTargetOrigin, this.target, p.target),
                Pt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ss && Fr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          wh(this.parent.latestValues) ||
          Sw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Oe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Pt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        p = this.treeScale.y;
      UF(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ke()));
      const { target: g } = a;
      if (!g) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (ey(this.prevProjectionDelta.x, this.projectionDelta.x),
          ey(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ps(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== p ||
          !ly(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !ly(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g)),
        ss && Fr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Vo()),
        (this.projectionDelta = Vo()),
        (this.projectionDeltaWithTransform = Vo());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Vo();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = ke(),
        p = l ? l.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        v = p !== g,
        x = this.getStack(),
        m = !x || x.members.length <= 1,
        h = !!(v && !m && this.options.crossfade === !0 && !this.path.some(Mj));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (k) => {
        const T = k / 1e3;
        fy(d.x, s.x, T),
          fy(d.y, s.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ts(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Aj(this.relativeTarget, this.relativeTargetOrigin, f, T),
            y && cj(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = ke()),
            Pt(y, this.relativeTarget)),
          v &&
            ((this.animationValues = c), oj(c, u, this.latestValues, T, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (vr(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = re.update(() => {
          (Nl.hasAnimatedSinceResize = !0),
            (this.currentAnimation = vj(0, uy, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(uy),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          zw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ke();
          const d = yt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = yt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        Pt(a, l),
          Uo(a, c),
          Ps(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new dj()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Bd("z", s, u, this.animationValues);
      for (let c = 0; c < Nd.length; c++)
        Bd(`rotate${Nd[c]}`, s, u, this.animationValues),
          Bd(`skew${Nd[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return yj;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Bl(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Bl(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Ir(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = fj(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        c && (u.transform = c(f, u.transform));
      const { x: p, y: g } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const v in Eu) {
        if (f[v] === void 0) continue;
        const { correct: x, applyTo: m } = Eu[v],
          h = u.transform === "none" ? f[v] : x(f[v], d);
        if (m) {
          const y = m.length;
          for (let k = 0; k < y; k++) u[m[k]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? Bl(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(cy),
        this.root.sharedNodes.clear();
    }
  };
}
function Sj(e) {
  e.updateLayout();
}
function xj(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout,
      { animationType: i } = e.options,
      s = n.source !== e.layout.source;
    i === "size"
      ? _t((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            p = yt(f);
          (f.min = r[d].min), (f.max = f.min + p);
        })
      : zw(i, n.layoutBox, r) &&
        _t((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            p = yt(r[d]);
          (f.max = f.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + p));
        });
    const a = Vo();
    Ps(a, r, n.layoutBox);
    const l = Vo();
    s ? Ps(l, e.applyTransform(o, !0), n.measuredBox) : Ps(l, r, n.layoutBox);
    const u = !$w(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const g = ke();
          Ts(g, n.layoutBox, f.layoutBox);
          const v = ke();
          Ts(v, r, p.layoutBox),
            Rw(g, v) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = g),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function wj(e) {
  ss && Fr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function kj(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Cj(e) {
  e.clearSnapshot();
}
function cy(e) {
  e.clearMeasurements();
}
function Pj(e) {
  e.isLayoutDirty = !1;
}
function Tj(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function dy(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function _j(e) {
  e.resolveTargetDelta();
}
function Ej(e) {
  e.calcProjection();
}
function $j(e) {
  e.resetSkewAndRotation();
}
function Rj(e) {
  e.removeLeadSnapshot();
}
function fy(e, t, n) {
  (e.translate = be(t.translate, 0, n)),
    (e.scale = be(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function hy(e, t, n, r) {
  (e.min = be(t.min, n.min, r)), (e.max = be(t.max, n.max, r));
}
function Aj(e, t, n, r) {
  hy(e.x, t.x, n.x, r), hy(e.y, t.y, n.y, r);
}
function Mj(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const zj = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  py = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  my = py("applewebkit/") && !py("chrome/") ? Math.round : Ke;
function gy(e) {
  (e.min = my(e.min)), (e.max = my(e.max));
}
function Ij(e) {
  gy(e.x), gy(e.y);
}
function zw(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !IF(ay(t), ay(n), 0.2))
  );
}
function Fj(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const jj = Mw({
    attachResizeListener: (e, t) => En(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Vd = { current: void 0 },
  Iw = Mw({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Vd.current) {
        const e = new jj({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Vd.current = e);
      }
      return Vd.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Oj = {
    pan: { Feature: qF },
    drag: { Feature: XF, ProjectionNode: Iw, MeasureLayout: Tw },
  };
function vy(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    o = (i, s) => {
      if (i.pointerType === "touch" || gw()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && re.postRender(() => l(i, s));
    };
  return In(e.current, n, o, { passive: !e.getProps()[r] });
}
class Lj extends kr {
  mount() {
    this.unmount = zn(vy(this.node, !0), vy(this.node, !1));
  }
  unmount() {}
}
class Dj extends kr {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = zn(
      En(this.node.current, "focus", () => this.onFocus()),
      En(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Fw = (e, t) => (t ? (e === t ? !0 : Fw(e, t.parentElement)) : !1);
function Wd(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, yc(n));
}
class Nj extends kr {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Ke),
      (this.removeEndListeners = Ke),
      (this.removeAccessibleListeners = Ke),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          i = In(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: d,
                } = this.node.getProps(),
                f = !d && !Fw(this.node.current, a.target) ? c : u;
              f && re.update(() => f(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = In(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = zn(i, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (i) => {
            if (i.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Wd("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && re.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = En(this.node.current, "keyup", s)),
              Wd("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = En(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Wd("cancel", (i, s) => this.cancelPress(i, s));
          },
          o = En(this.node.current, "blur", r);
        this.removeAccessibleListeners = zn(n, o);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && re.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !gw()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && re.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = In(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = En(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = zn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Ch = new WeakMap(),
  Ud = new WeakMap(),
  Bj = (e) => {
    const t = Ch.get(e.target);
    t && t(e);
  },
  Vj = (e) => {
    e.forEach(Bj);
  };
function Wj({ root: e, ...t }) {
  const n = e || document;
  Ud.has(n) || Ud.set(n, {});
  const r = Ud.get(n),
    o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Vj, { root: e, ...t })), r[o];
}
function Uj(e, t, n) {
  const r = Wj(t);
  return (
    Ch.set(e, n),
    r.observe(e),
    () => {
      Ch.delete(e), r.unobserve(e);
    }
  );
}
const Hj = { some: 0, all: 1 };
class Gj extends kr {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: o = "some", once: i } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof o == "number" ? o : Hj[o],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), i && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return Uj(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Kj(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Kj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Yj = {
    inView: { Feature: Gj },
    tap: { Feature: Nj },
    focus: { Feature: Dj },
    hover: { Feature: Lj },
  },
  Xj = { layout: { ProjectionNode: Iw, MeasureLayout: Tw } },
  _m = b.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  bc = b.createContext({}),
  Em = typeof window < "u",
  jw = Em ? b.useLayoutEffect : b.useEffect,
  Ow = b.createContext({ strict: !1 });
function qj(e, t, n, r, o) {
  var i, s;
  const { visualElement: a } = b.useContext(bc),
    l = b.useContext(Ow),
    u = b.useContext(xa),
    c = b.useContext(_m).reducedMotion,
    d = b.useRef();
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const f = d.current,
    p = b.useContext(Pw);
  f &&
    !f.projection &&
    o &&
    (f.type === "html" || f.type === "svg") &&
    Qj(d.current, n, o, p);
  const g = b.useRef(!1);
  b.useInsertionEffect(() => {
    f && g.current && f.update(n, u);
  });
  const v = n[aw],
    x = b.useRef(
      !!v &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, v)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, v))
    );
  return (
    jw(() => {
      f &&
        ((g.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        Tm.render(f.render),
        x.current && f.animationState && f.animationState.animateChanges());
    }),
    b.useEffect(() => {
      f &&
        (!x.current && f.animationState && f.animationState.animateChanges(),
        x.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) === null ||
              m === void 0 ||
              m.call(window, v);
          }),
          (x.current = !1)));
    }),
    f
  );
}
function Qj(e, t, n, r) {
  const {
    layoutId: o,
    layout: i,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Lw(e.parent)
  )),
    e.projection.setOptions({
      layoutId: o,
      layout: i,
      alwaysMeasureLayout: !!s || (a && Bo(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function Lw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Lw(e.parent);
}
function Zj(e, t, n) {
  return b.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Bo(n) && (n.current = r));
    },
    [t]
  );
}
function Sc(e) {
  return mc(e.animate) || im.some((t) => Zs(e[t]));
}
function Dw(e) {
  return !!(Sc(e) || e.variants);
}
function Jj(e, t) {
  if (Sc(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Zs(n) ? n : void 0,
      animate: Zs(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function eO(e) {
  const { initial: t, animate: n } = Jj(e, b.useContext(bc));
  return b.useMemo(() => ({ initial: t, animate: n }), [yy(t), yy(n)]);
}
function yy(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const by = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  bi = {};
for (const e in by) bi[e] = { isEnabled: (t) => by[e].some((n) => !!t[n]) };
function tO(e) {
  for (const t in e) bi[t] = { ...bi[t], ...e[t] };
}
const nO = Symbol.for("motionComponentSymbol");
function rO({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: o,
}) {
  e && tO(e);
  function i(a, l) {
    let u;
    const c = { ...b.useContext(_m), ...a, layoutId: oO(a) },
      { isStatic: d } = c,
      f = eO(a),
      p = r(a, d);
    if (!d && Em) {
      iO();
      const g = sO(c);
      (u = g.MeasureLayout),
        (f.visualElement = qj(o, p, c, t, g.ProjectionNode));
    }
    return w.jsxs(bc.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? w.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        n(o, a, Zj(p, f.visualElement, l), p, d, f.visualElement),
      ],
    });
  }
  const s = b.forwardRef(i);
  return (s[nO] = o), s;
}
function oO({ layoutId: e }) {
  const t = b.useContext(Pm).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function iO(e, t) {
  b.useContext(Ow).strict;
}
function sO(e) {
  const { drag: t, layout: n } = bi;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const aO = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function $m(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(aO.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Nw(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const Bw = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Vw(e, t, n, r) {
  Nw(e, t, void 0, r);
  for (const o in t.attrs) e.setAttribute(Bw.has(o) ? o : Cm(o), t.attrs[o]);
}
function Ww(e, { layout: t, layoutId: n }) {
  return (
    co.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Eu[e] || e === "opacity"))
  );
}
function Rm(e, t, n) {
  var r;
  const { style: o } = e,
    i = {};
  for (const s in o)
    (Ge(o[s]) ||
      (t.style && Ge(t.style[s])) ||
      Ww(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[s] = o[s]);
  return i;
}
function Uw(e, t, n) {
  const r = Rm(e, t, n);
  for (const o in e)
    if (Ge(e[o]) || Ge(t[o])) {
      const i =
        ya.indexOf(o) !== -1
          ? "attr" + o.charAt(0).toUpperCase() + o.substring(1)
          : o;
      r[i] = e[o];
    }
  return r;
}
function Am(e) {
  const t = b.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function lO(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  o,
  i
) {
  const s = { latestValues: uO(r, o, i, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const Hw = (e) => (t, n) => {
  const r = b.useContext(bc),
    o = b.useContext(xa),
    i = () => lO(e, t, r, o);
  return n ? i() : Am(i);
};
function uO(e, t, n, r) {
  const o = {},
    i = r(e, {});
  for (const f in i) o[f] = Bl(i[f]);
  let { initial: s, animate: a } = e;
  const l = Sc(e),
    u = Dw(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !mc(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let p = 0; p < f.length; p++) {
      const g = rm(e, f[p]);
      if (g) {
        const { transitionEnd: v, transition: x, ...m } = g;
        for (const h in m) {
          let y = m[h];
          if (Array.isArray(y)) {
            const k = c ? y.length - 1 : 0;
            y = y[k];
          }
          y !== null && (o[h] = y);
        }
        for (const h in v) o[h] = v[h];
      }
    }
  }
  return o;
}
const Mm = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Gw = () => ({ ...Mm(), attrs: {} }),
  Kw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  cO = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  dO = ya.length;
function fO(e, t, n) {
  let r = "",
    o = !0;
  for (let i = 0; i < dO; i++) {
    const s = ya[i],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Kw(a, hm[s]);
      if (!l) {
        o = !1;
        const c = cO[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, o ? "" : r)) : o && (r = "none"), r;
}
function zm(e, t, n) {
  const { style: r, vars: o, transformOrigin: i } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (co.has(l)) {
      s = !0;
      continue;
    } else if (Lx(l)) {
      o[l] = u;
      continue;
    } else {
      const c = Kw(u, hm[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = fO(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Sy(e, t, n) {
  return typeof e == "string" ? e : N.transform(t + n * e);
}
function hO(e, t, n) {
  const r = Sy(t, e.x, e.width),
    o = Sy(n, e.y, e.height);
  return `${r} ${o}`;
}
const pO = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  mO = { offset: "strokeDashoffset", array: "strokeDasharray" };
function gO(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? pO : mO;
  e[i.offset] = N.transform(-r);
  const s = N.transform(t),
    a = N.transform(n);
  e[i.array] = `${s} ${a}`;
}
function Im(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: o,
    originY: i,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d
) {
  if ((zm(e, u, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: p, dimensions: g } = e;
  f.transform && (g && (p.transform = f.transform), delete f.transform),
    g &&
      (o !== void 0 || i !== void 0 || p.transform) &&
      (p.transformOrigin = hO(
        g,
        o !== void 0 ? o : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    s !== void 0 && gO(f, s, a, l, !1);
}
const Fm = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  vO = {
    useVisualState: Hw({
      scrapeMotionValuesFromProps: Uw,
      createRenderState: Gw,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        re.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          re.render(() => {
            Im(n, r, Fm(t.tagName), e.transformTemplate), Vw(t, n);
          });
      },
    }),
  },
  yO = {
    useVisualState: Hw({
      scrapeMotionValuesFromProps: Rm,
      createRenderState: Mm,
    }),
  };
function Yw(e, t, n) {
  for (const r in t) !Ge(t[r]) && !Ww(r, n) && (e[r] = t[r]);
}
function bO({ transformTemplate: e }, t) {
  return b.useMemo(() => {
    const n = Mm();
    return zm(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function SO(e, t) {
  const n = e.style || {},
    r = {};
  return Yw(r, n, e), Object.assign(r, bO(e, t)), r;
}
function xO(e, t) {
  const n = {},
    r = SO(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const wO = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function $u(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    wO.has(e)
  );
}
let Xw = (e) => !$u(e);
function kO(e) {
  e && (Xw = (t) => (t.startsWith("on") ? !$u(t) : e(t)));
}
try {
  kO(require("@emotion/is-prop-valid").default);
} catch {}
function CO(e, t, n) {
  const r = {};
  for (const o in e)
    (o === "values" && typeof e.values == "object") ||
      ((Xw(o) ||
        (n === !0 && $u(o)) ||
        (!t && !$u(o)) ||
        (e.draggable && o.startsWith("onDrag"))) &&
        (r[o] = e[o]));
  return r;
}
function PO(e, t, n, r) {
  const o = b.useMemo(() => {
    const i = Gw();
    return (
      Im(i, t, Fm(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    Yw(i, e.style, e), (o.style = { ...i, ...o.style });
  }
  return o;
}
function TO(e = !1) {
  return (n, r, o, { latestValues: i }, s) => {
    const l = ($m(n) ? PO : xO)(r, i, s, n),
      u = CO(r, typeof n == "string", e),
      c = n !== b.Fragment ? { ...u, ...l, ref: o } : {},
      { children: d } = r,
      f = b.useMemo(() => (Ge(d) ? d.get() : d), [d]);
    return b.createElement(n, { ...c, children: f });
  };
}
function _O(e, t) {
  return function (r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const s = {
      ...($m(r) ? vO : yO),
      preloadedFeatures: e,
      useRender: TO(o),
      createVisualElement: t,
      Component: r,
    };
    return rO(s);
  };
}
const Ph = { current: null },
  qw = { current: !1 };
function EO() {
  if (((qw.current = !0), !!Em))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ph.current = e.matches);
      e.addListener(t), t();
    } else Ph.current = !1;
}
function $O(e, t, n) {
  for (const r in t) {
    const o = t[r],
      i = n[r];
    if (Ge(o)) e.addValue(r, o);
    else if (Ge(i)) e.addValue(r, ta(o, { owner: e }));
    else if (i !== o)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, ta(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const xy = new WeakMap(),
  RO = [...Bx, Ue, br],
  AO = (e) => RO.find(Nx(e)),
  wy = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class MO {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: o,
      blockInitialAnimation: i,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = cm),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = hn.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), re.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = o),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = Sc(n)),
      (this.isVariantNode = Dw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const p = d[f];
      l[f] !== void 0 && Ge(p) && p.set(l[f], !1);
    }
  }
  mount(t) {
    (this.current = t),
      xy.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      qw.current || EO(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ph.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    xy.delete(this.current),
      this.projection && this.projection.unmount(),
      vr(this.notifyUpdate),
      vr(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = co.has(t),
      o = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && re.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        o(), i(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in bi) {
      const n = bi[t];
      if (!n) continue;
      const { isEnabled: r, Feature: o } = n;
      if (
        (!this.features[t] &&
          o &&
          r(this.props) &&
          (this.features[t] = new o(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ke();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < wy.length; r++) {
      const o = wy[r];
      this.propEventSubscriptions[o] &&
        (this.propEventSubscriptions[o](),
        delete this.propEventSubscriptions[o]);
      const i = "on" + o,
        s = t[i];
      s && (this.propEventSubscriptions[o] = this.on(o, s));
    }
    (this.prevMotionValues = $O(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ta(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let o =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      o != null &&
        (typeof o == "string" && (jx(o) || Fx(o))
          ? (o = parseFloat(o))
          : !AO(o) && br.test(n) && (o = Xx(t, n)),
        this.setBaseTarget(t, Ge(o) ? o.get() : o)),
      Ge(o) ? o.get() : o
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const s = rm(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (o = s[t]);
    }
    if (r && o !== void 0) return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ge(i)
      ? i
      : this.initialValues[t] !== void 0 && o === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new km()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Qw extends MO {
  constructor() {
    super(...arguments), (this.KeyframeResolver = qx);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function zO(e) {
  return window.getComputedStyle(e);
}
class IO extends Qw {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Nw);
  }
  readValueFromInstance(t, n) {
    if (co.has(n)) {
      const r = pm(n);
      return (r && r.default) || 0;
    } else {
      const r = zO(t),
        o = (Lx(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ww(t, n);
  }
  build(t, n, r) {
    zm(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Rm(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ge(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class FO extends Qw {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ke);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (co.has(n)) {
      const r = pm(n);
      return (r && r.default) || 0;
    }
    return (n = Bw.has(n) ? n : Cm(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Uw(t, n, r);
  }
  build(t, n, r) {
    Im(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Vw(t, n, r, o);
  }
  mount(t) {
    (this.isSVGTag = Fm(t.tagName)), super.mount(t);
  }
}
const jO = (e, t) =>
    $m(e) ? new FO(t) : new IO(t, { allowProjection: e !== b.Fragment }),
  OO = _O({ ...PF, ...Yj, ...Oj, ...Xj }, jO),
  _i = gz(OO);
class LO extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function DO({ children: e, isPresent: t }) {
  const n = b.useId(),
    r = b.useRef(null),
    o = b.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: i } = b.useContext(_m);
  return (
    b.useInsertionEffect(() => {
      const { width: s, height: a, top: l, left: u } = o.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        i && (c.nonce = i),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    w.jsx(LO, {
      isPresent: t,
      childRef: r,
      sizeRef: o,
      children: b.cloneElement(e, { ref: r }),
    })
  );
}
const NO = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: o,
  presenceAffectsLayout: i,
  mode: s,
}) => {
  const a = Am(BO),
    l = b.useId(),
    u = b.useCallback(
      (d) => {
        a.set(d, !0);
        for (const f of a.values()) if (!f) return;
        r && r();
      },
      [a, r]
    ),
    c = b.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: o,
        onExitComplete: u,
        register: (d) => (a.set(d, !1), () => a.delete(d)),
      }),
      i ? [Math.random(), u] : [n, u]
    );
  return (
    b.useMemo(() => {
      a.forEach((d, f) => a.set(f, !1));
    }, [n]),
    b.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = w.jsx(DO, { isPresent: n, children: e })),
    w.jsx(xa.Provider, { value: c, children: e })
  );
};
function BO() {
  return new Map();
}
const cl = (e) => e.key || "";
function ky(e) {
  const t = [];
  return (
    b.Children.forEach(e, (n) => {
      b.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const wa = ({
    children: e,
    exitBeforeEnter: t,
    custom: n,
    initial: r = !0,
    onExitComplete: o,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
  }) => {
    const a = b.useMemo(() => ky(e), [e]),
      l = a.map(cl),
      u = b.useRef(!0),
      c = b.useRef(a),
      d = Am(() => new Map()),
      [f, p] = b.useState(a),
      [g, v] = b.useState(a);
    jw(() => {
      (u.current = !1), (c.current = a);
      for (let h = 0; h < g.length; h++) {
        const y = cl(g[h]);
        l.includes(y) ? d.delete(y) : d.get(y) !== !0 && d.set(y, !1);
      }
    }, [g, l.length, l.join("-")]);
    const x = [];
    if (a !== f) {
      let h = [...a];
      for (let y = 0; y < g.length; y++) {
        const k = g[y],
          T = cl(k);
        l.includes(T) || (h.splice(y, 0, k), x.push(k));
      }
      s === "wait" && x.length && (h = x), v(ky(h)), p(a);
      return;
    }
    const { forceRender: m } = b.useContext(Pm);
    return w.jsx(w.Fragment, {
      children: g.map((h) => {
        const y = cl(h),
          k = a === g || l.includes(y),
          T = () => {
            if (d.has(y)) d.set(y, !0);
            else return;
            let $ = !0;
            d.forEach((E) => {
              E || ($ = !1);
            }),
              $ && (m == null || m(), v(c.current), o && o());
          };
        return w.jsx(
          NO,
          {
            isPresent: k,
            initial: !u.current || r ? void 0 : !1,
            custom: k ? void 0 : n,
            presenceAffectsLayout: i,
            mode: s,
            onExitComplete: k ? void 0 : T,
            children: h,
          },
          y
        );
      }),
    });
  },
  VO = (e, t) => e.find((n) => n.id === t);
function Cy(e, t) {
  const n = Zw(e, t),
    r = n ? e[n].findIndex((o) => o.id === t) : -1;
  return { position: n, index: r };
}
function Zw(e, t) {
  for (const [n, r] of Object.entries(e)) if (VO(r, t)) return n;
}
function WO(e) {
  const t = e.includes("right"),
    n = e.includes("left");
  let r = "center";
  return (
    t && (r = "flex-end"),
    n && (r = "flex-start"),
    { display: "flex", flexDirection: "column", alignItems: r }
  );
}
function UO(e) {
  const n = e === "top" || e === "bottom" ? "0 auto" : void 0,
    r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
    o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
    i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
    s = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: n,
    top: r,
    bottom: o,
    right: i,
    left: s,
  };
}
var HO =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  GO = lx(function (e) {
    return (
      HO.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  KO = GO,
  YO = function (t) {
    return t !== "theme";
  },
  Py = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? KO : YO;
  },
  Ty = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  XO = !1,
  qO = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      px(n, r, o),
      Q3(function () {
        return mx(n, r, o);
      }),
      null
    );
  },
  QO = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = Ty(t, n, r),
      l = a || Py(o),
      u = !l("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var f = c.length, p = 1; p < f; p++) d.push(c[p], c[0][p]);
      }
      var g = tm(function (v, x, m) {
        var h = (u && v.as) || o,
          y = "",
          k = [],
          T = v;
        if (v.theme == null) {
          T = {};
          for (var $ in v) T[$] = v[$];
          T.theme = b.useContext(Qs);
        }
        typeof v.className == "string"
          ? (y = V3(x.registered, k, v.className))
          : v.className != null && (y = v.className + " ");
        var E = em(d.concat(k), x.registered, T);
        (y += x.key + "-" + E.name), s !== void 0 && (y += " " + s);
        var R = u && a === void 0 ? Py(h) : l,
          z = {};
        for (var F in v) (u && F === "as") || (R(F) && (z[F] = v[F]));
        return (
          (z.className = y),
          m && (z.ref = m),
          b.createElement(
            b.Fragment,
            null,
            b.createElement(qO, {
              cache: x,
              serialized: E,
              isStringTag: typeof h == "string",
            }),
            b.createElement(h, z)
          )
        );
      });
      return (
        (g.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = o),
        (g.__emotion_styles = d),
        (g.__emotion_forwardProp = a),
        Object.defineProperty(g, "toString", {
          value: function () {
            return s === void 0 && XO ? "NO_COMPONENT_SELECTOR" : "." + s;
          },
        }),
        (g.withComponent = function (v, x) {
          return e(v, oo({}, n, x, { shouldForwardProp: Ty(g, x, !0) })).apply(
            void 0,
            d
          );
        }),
        g
      );
    };
  },
  ZO = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Th = QO.bind();
ZO.forEach(function (e) {
  Th[e] = Th(e);
});
const JO = new Set([
    ...yE,
    "textStyle",
    "layerStyle",
    "apply",
    "noOfLines",
    "focusBorderColor",
    "errorBorderColor",
    "as",
    "__css",
    "css",
    "sx",
  ]),
  eL = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
function tL(e) {
  return (eL.has(e) || !JO.has(e)) && e[0] !== "_";
}
const nL = A_(Th),
  rL =
    ({ baseStyle: e }) =>
    (t) => {
      const { theme: n, css: r, __css: o, sx: i, ...s } = t,
        [a] = I_(s, SE),
        l = At(e, t),
        u = m_({}, o, l, Lp(a), i),
        c = BS(u)(t.theme);
      return r ? [c, r] : c;
    };
function Hd(e, t) {
  const { baseStyle: n, ...r } = t ?? {};
  r.shouldForwardProp || (r.shouldForwardProp = tL);
  const o = rL({ baseStyle: n }),
    i = nL(e, r)(o);
  return b.forwardRef(function (l, u) {
    const { children: c, ...d } = l,
      { colorMode: f, forced: p } = va(),
      g = p ? f : void 0;
    return b.createElement(i, { ref: u, "data-theme": g, ...d }, c);
  });
}
function oL() {
  const e = new Map();
  return new Proxy(Hd, {
    apply(t, n, r) {
      return Hd(...r);
    },
    get(t, n) {
      return e.has(n) || e.set(n, Hd(n)), e.get(n);
    },
  });
}
const H = oL(),
  iL = {
    initial: (e) => {
      const { position: t } = e,
        n = ["top", "bottom"].includes(t) ? "y" : "x";
      let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
      return t === "bottom" && (r = 1), { opacity: 0, [n]: r * 24 };
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
      transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
    },
  },
  Jw = b.memo((e) => {
    const {
        id: t,
        message: n,
        onCloseComplete: r,
        onRequestRemove: o,
        requestClose: i = !1,
        position: s = "bottom",
        duration: a = 5e3,
        containerStyle: l,
        motionVariants: u = iL,
        toastSpacing: c = "0.5rem",
      } = e,
      [d, f] = b.useState(a),
      p = QF();
    O0(() => {
      p || r == null || r();
    }, [p]),
      O0(() => {
        f(a);
      }, [a]);
    const g = () => f(null),
      v = () => f(a),
      x = () => {
        p && o();
      };
    b.useEffect(() => {
      p && i && o();
    }, [p, i, o]),
      D_(x, d);
    const m = b.useMemo(
        () => ({
          pointerEvents: "auto",
          maxWidth: 560,
          minWidth: 300,
          margin: c,
          ...l,
        }),
        [l, c]
      ),
      h = b.useMemo(() => WO(s), [s]);
    return w.jsx(_i.div, {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: g,
      onHoverEnd: v,
      custom: { position: s },
      style: h,
      children: w.jsx(H.div, {
        role: "status",
        "aria-atomic": "true",
        className: "chakra-toast__inner",
        __css: m,
        children: At(n, { id: t, onClose: x }),
      }),
    });
  });
Jw.displayName = "ToastComponent";
function ne(e) {
  return b.forwardRef(e);
}
var sL = typeof Element < "u",
  aL = typeof Map == "function",
  lL = typeof Set == "function",
  uL = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Vl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, o;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Vl(e[r], t[r])) return !1;
      return !0;
    }
    var i;
    if (aL && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!Vl(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (lL && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(r = i.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (uL && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
    if (sL && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
          e.$$typeof
        ) &&
        !Vl(e[o[r]], t[o[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var cL = function (t, n) {
  try {
    return Vl(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const dL = Fu(cL);
function ek() {
  const e = b.useContext(Qs);
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
function tk() {
  const e = va(),
    t = ek();
  return { ...e, theme: t };
}
function fL(e, t, n) {
  if (t == null) return t;
  const r = (o) => {
    var i, s;
    return (s = (i = e.__cssMap) == null ? void 0 : i[o]) == null
      ? void 0
      : s.value;
  };
  return r(t) ?? r(n) ?? n;
}
function hL(e, t, n) {
  const r = Array.isArray(t) ? t : [t],
    o = Array.isArray(n) ? n : [n];
  return (i) => {
    const s = o.filter(Boolean),
      a = r.map((l, u) => {
        const c = `${e}.${l}`;
        return fL(i, c, s[u] ?? l);
      });
    return Array.isArray(t) ? a : a[0];
  };
}
function nk(e, t = {}) {
  const { styleConfig: n, ...r } = t,
    { theme: o, colorMode: i } = tk(),
    s = e ? jS(o, `components.${e}`) : void 0,
    a = n || s,
    l = an(
      { theme: o, colorMode: i },
      (a == null ? void 0 : a.defaultProps) ?? {},
      Lp(Dp(r, ["children"])),
      (c, d) => (c ? void 0 : d)
    ),
    u = b.useRef({});
  if (a) {
    const d = RE(a)(l);
    dL(u.current, d) || (u.current = d);
  }
  return u.current;
}
function fo(e, t = {}) {
  return nk(e, t);
}
function xc(e, t = {}) {
  return nk(e, t);
}
const _y = {
    path: w.jsxs("g", {
      stroke: "currentColor",
      strokeWidth: "1.5",
      children: [
        w.jsx("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
        }),
        w.jsx("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
        }),
        w.jsx("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25",
        }),
      ],
    }),
    viewBox: "0 0 24 24",
  },
  Ei = ne((e, t) => {
    const {
        as: n,
        viewBox: r,
        color: o = "currentColor",
        focusable: i = !1,
        children: s,
        className: a,
        __css: l,
        ...u
      } = e,
      c = fe("chakra-icon", a),
      d = fo("Icon", e),
      f = {
        w: "1em",
        h: "1em",
        display: "inline-block",
        lineHeight: "1em",
        flexShrink: 0,
        color: o,
        ...l,
        ...d,
      },
      p = { ref: t, focusable: i, className: c, __css: f },
      g = r ?? _y.viewBox;
    if (n && typeof n != "string") return w.jsx(H.svg, { as: n, ...p, ...u });
    const v = s ?? _y.path;
    return w.jsx(H.svg, {
      verticalAlign: "middle",
      viewBox: g,
      ...p,
      ...u,
      children: v,
    });
  });
Ei.displayName = "Icon";
function pL(e) {
  return w.jsx(Ei, {
    viewBox: "0 0 24 24",
    ...e,
    children: w.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z",
    }),
  });
}
function mL(e) {
  return w.jsx(Ei, {
    viewBox: "0 0 24 24",
    ...e,
    children: w.jsx("path", {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z",
    }),
  });
}
function Ey(e) {
  return w.jsx(Ei, {
    viewBox: "0 0 24 24",
    ...e,
    children: w.jsx("path", {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z",
    }),
  });
}
const gL = nz({
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  }),
  jm = ne((e, t) => {
    const n = fo("Spinner", e),
      {
        label: r = "Loading...",
        thickness: o = "2px",
        speed: i = "0.45s",
        emptyColor: s = "transparent",
        className: a,
        ...l
      } = Bn(e),
      u = fe("chakra-spinner", a),
      c = {
        display: "inline-block",
        borderColor: "currentColor",
        borderStyle: "solid",
        borderRadius: "99999px",
        borderWidth: o,
        borderBottomColor: s,
        borderLeftColor: s,
        animation: `${gL} ${i} linear infinite`,
        ...n,
      };
    return w.jsx(H.div, {
      ref: t,
      __css: c,
      className: u,
      ...l,
      children: r && w.jsx(H.span, { srOnly: !0, children: r }),
    });
  });
jm.displayName = "Spinner";
const [vL, Om] = Yt({
    name: "AlertContext",
    hookName: "useAlertContext",
    providerName: "<Alert />",
  }),
  [yL, Lm] = Yt({
    name: "AlertStylesContext",
    hookName: "useAlertStyles",
    providerName: "<Alert />",
  }),
  rk = {
    info: { icon: mL, colorScheme: "blue" },
    warning: { icon: Ey, colorScheme: "orange" },
    success: { icon: pL, colorScheme: "green" },
    error: { icon: Ey, colorScheme: "red" },
    loading: { icon: jm, colorScheme: "blue" },
  };
function bL(e) {
  return rk[e].colorScheme;
}
function SL(e) {
  return rk[e].icon;
}
const ok = ne(function (t, n) {
  const { status: r = "info", addRole: o = !0, ...i } = Bn(t),
    s = t.colorScheme ?? bL(r),
    a = xc("Alert", { ...t, colorScheme: s }),
    l = {
      width: "100%",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      ...a.container,
    };
  return w.jsx(vL, {
    value: { status: r },
    children: w.jsx(yL, {
      value: a,
      children: w.jsx(H.div, {
        "data-status": r,
        role: o ? "alert" : void 0,
        ref: n,
        ...i,
        className: fe("chakra-alert", t.className),
        __css: l,
      }),
    }),
  });
});
ok.displayName = "Alert";
function ik(e) {
  const { status: t } = Om(),
    n = SL(t),
    r = Lm(),
    o = t === "loading" ? r.spinner : r.icon;
  return w.jsx(H.span, {
    display: "inherit",
    "data-status": t,
    ...e,
    className: fe("chakra-alert__icon", e.className),
    __css: o,
    children: e.children || w.jsx(n, { h: "100%", w: "100%" }),
  });
}
ik.displayName = "AlertIcon";
const sk = ne(function (t, n) {
  const r = Lm(),
    { status: o } = Om();
  return w.jsx(H.div, {
    ref: n,
    "data-status": o,
    ...t,
    className: fe("chakra-alert__title", t.className),
    __css: r.title,
  });
});
sk.displayName = "AlertTitle";
const ak = ne(function (t, n) {
  const { status: r } = Om(),
    o = Lm(),
    i = { display: "inline", ...o.description };
  return w.jsx(H.div, {
    ref: n,
    "data-status": r,
    ...t,
    className: fe("chakra-alert__desc", t.className),
    __css: i,
  });
});
ak.displayName = "AlertDescription";
function xL(e) {
  return w.jsx(Ei, {
    focusable: "false",
    "aria-hidden": !0,
    ...e,
    children: w.jsx("path", {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
    }),
  });
}
const Dm = ne(function (t, n) {
  const r = fo("CloseButton", t),
    { children: o, isDisabled: i, __css: s, ...a } = Bn(t),
    l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    };
  return w.jsx(H.button, {
    type: "button",
    "aria-label": "Close",
    ref: n,
    disabled: i,
    __css: { ...l, ...r, ...s },
    ...a,
    children: o || w.jsx(xL, { width: "1em", height: "1em" }),
  });
});
Dm.displayName = "CloseButton";
const wL = (e) => {
  const {
      status: t,
      variant: n = "solid",
      id: r,
      title: o,
      isClosable: i,
      onClose: s,
      description: a,
      colorScheme: l,
      icon: u,
    } = e,
    c = r
      ? {
          root: `toast-${r}`,
          title: `toast-${r}-title`,
          description: `toast-${r}-description`,
        }
      : void 0;
  return w.jsxs(ok, {
    addRole: !1,
    status: t,
    variant: n,
    id: c == null ? void 0 : c.root,
    alignItems: "start",
    borderRadius: "md",
    boxShadow: "lg",
    paddingEnd: 8,
    textAlign: "start",
    width: "auto",
    colorScheme: l,
    children: [
      w.jsx(ik, { children: u }),
      w.jsxs(H.div, {
        flex: "1",
        maxWidth: "100%",
        children: [
          o && w.jsx(sk, { id: c == null ? void 0 : c.title, children: o }),
          a &&
            w.jsx(ak, {
              id: c == null ? void 0 : c.description,
              display: "block",
              children: a,
            }),
        ],
      }),
      i &&
        w.jsx(Dm, {
          size: "sm",
          onClick: s,
          position: "absolute",
          insetEnd: 1,
          top: 1,
        }),
    ],
  });
};
function lk(e = {}) {
  const { render: t, toastComponent: n = wL } = e;
  return (o) =>
    typeof t == "function" ? t({ ...o, ...e }) : w.jsx(n, { ...o, ...e });
}
const kL = {
    top: [],
    "top-left": [],
    "top-right": [],
    "bottom-left": [],
    bottom: [],
    "bottom-right": [],
  },
  on = CL(kL);
function CL(e) {
  let t = e;
  const n = new Set(),
    r = (o) => {
      (t = o(t)), n.forEach((i) => i());
    };
  return {
    getState: () => t,
    subscribe: (o) => (
      n.add(o),
      () => {
        r(() => e), n.delete(o);
      }
    ),
    removeToast: (o, i) => {
      r((s) => ({ ...s, [i]: s[i].filter((a) => a.id != o) }));
    },
    notify: (o, i) => {
      const s = PL(o, i),
        { position: a, id: l } = s;
      return (
        r((u) => {
          const d = a.includes("top")
            ? [s, ...(u[a] ?? [])]
            : [...(u[a] ?? []), s];
          return { ...u, [a]: d };
        }),
        l
      );
    },
    update: (o, i) => {
      o &&
        r((s) => {
          const a = { ...s },
            { position: l, index: u } = Cy(a, o);
          return (
            l && u !== -1 && (a[l][u] = { ...a[l][u], ...i, message: lk(i) }), a
          );
        });
    },
    closeAll: ({ positions: o } = {}) => {
      r((i) =>
        (
          o ?? [
            "bottom",
            "bottom-right",
            "bottom-left",
            "top",
            "top-left",
            "top-right",
          ]
        ).reduce(
          (l, u) => ((l[u] = i[u].map((c) => ({ ...c, requestClose: !0 }))), l),
          { ...i }
        )
      );
    },
    close: (o) => {
      r((i) => {
        const s = Zw(i, o);
        return s
          ? {
              ...i,
              [s]: i[s].map((a) =>
                a.id == o ? { ...a, requestClose: !0 } : a
              ),
            }
          : i;
      });
    },
    isActive: (o) => !!Cy(on.getState(), o).position,
  };
}
let $y = 0;
function PL(e, t = {}) {
  $y += 1;
  const n = t.id ?? $y,
    r = t.position ?? "bottom";
  return {
    id: n,
    message: e,
    position: r,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => on.removeToast(String(n), r),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle,
  };
}
const [uk, TL] = Yt({ strict: !1, name: "PortalContext" }),
  Nm = "chakra-portal",
  _L = ".chakra-portal",
  EL = (e) =>
    w.jsx("div", {
      className: "chakra-portal-zIndex",
      style: {
        position: "absolute",
        zIndex: e.zIndex,
        top: 0,
        left: 0,
        right: 0,
      },
      children: e.children,
    }),
  $L = (e) => {
    const { appendToParentPortal: t, children: n } = e,
      [r, o] = b.useState(null),
      i = b.useRef(null),
      [, s] = b.useState({});
    b.useEffect(() => s({}), []);
    const a = TL(),
      l = pz();
    vu(() => {
      if (!r) return;
      const c = r.ownerDocument,
        d = t ? a ?? c.body : c.body;
      if (!d) return;
      (i.current = c.createElement("div")),
        (i.current.className = Nm),
        d.appendChild(i.current),
        s({});
      const f = i.current;
      return () => {
        d.contains(f) && d.removeChild(f);
      };
    }, [r]);
    const u =
      l != null && l.zIndex
        ? w.jsx(EL, { zIndex: l == null ? void 0 : l.zIndex, children: n })
        : n;
    return i.current
      ? jp.createPortal(w.jsx(uk, { value: i.current, children: u }), i.current)
      : w.jsx("span", {
          ref: (c) => {
            c && o(c);
          },
        });
  },
  RL = (e) => {
    const { children: t, containerRef: n, appendToParentPortal: r } = e,
      o = n.current,
      i = o ?? (typeof window < "u" ? document.body : void 0),
      s = b.useMemo(() => {
        const l = o == null ? void 0 : o.ownerDocument.createElement("div");
        return l && (l.className = Nm), l;
      }, [o]),
      [, a] = b.useState({});
    return (
      vu(() => a({}), []),
      vu(() => {
        if (!(!s || !i))
          return (
            i.appendChild(s),
            () => {
              i.removeChild(s);
            }
          );
      }, [s, i]),
      i && s
        ? jp.createPortal(w.jsx(uk, { value: r ? s : null, children: t }), s)
        : null
    );
  };
function ka(e) {
  const t = { appendToParentPortal: !0, ...e },
    { containerRef: n, ...r } = t;
  return n ? w.jsx(RL, { containerRef: n, ...r }) : w.jsx($L, { ...r });
}
ka.className = Nm;
ka.selector = _L;
ka.displayName = "Portal";
const [AL, ML] = Yt({ name: "ToastOptionsContext", strict: !1 }),
  zL = (e) => {
    const t = b.useSyncExternalStore(on.subscribe, on.getState, on.getState),
      {
        motionVariants: n,
        component: r = Jw,
        portalProps: o,
        animatePresenceProps: i,
      } = e,
      a = Object.keys(t).map((l) => {
        const u = t[l];
        return w.jsx(
          "div",
          {
            role: "region",
            "aria-live": "polite",
            "aria-label": `Notifications-${l}`,
            id: `chakra-toast-manager-${l}`,
            style: UO(l),
            children: w.jsx(wa, {
              ...i,
              initial: !1,
              children: u.map((c) =>
                w.jsx(r, { motionVariants: n, ...c }, c.id)
              ),
            }),
          },
          l
        );
      });
    return w.jsx(ka, { ...o, children: a });
  },
  IL = (e) =>
    function ({ children: n, theme: r = e, toastOptions: o, ...i }) {
      return w.jsxs(mz, {
        theme: r,
        ...i,
        children: [
          w.jsx(AL, {
            value: o == null ? void 0 : o.defaultOptions,
            children: n,
          }),
          w.jsx(zL, { ...o }),
        ],
      });
    },
  FL = IL(n3),
  Ry = {
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
  },
  Xr = {
    enter: { duration: 0.2, ease: Ry.easeOut },
    exit: { duration: 0.1, ease: Ry.easeIn },
  },
  qr = {
    enter: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.enter,
    }),
    exit: (e, t) => ({
      ...e,
      delay: typeof t == "number" ? t : t == null ? void 0 : t.exit,
    }),
  };
function jL(e) {
  const {
      loading: t,
      src: n,
      srcSet: r,
      onLoad: o,
      onError: i,
      crossOrigin: s,
      sizes: a,
      ignoreFallback: l,
    } = e,
    [u, c] = b.useState("pending");
  b.useEffect(() => {
    c(n ? "loading" : "pending");
  }, [n]);
  const d = b.useRef(),
    f = b.useCallback(() => {
      if (!n) return;
      p();
      const g = new Image();
      (g.src = n),
        s && (g.crossOrigin = s),
        r && (g.srcset = r),
        a && (g.sizes = a),
        t && (g.loading = t),
        (g.onload = (v) => {
          p(), c("loaded"), o == null || o(v);
        }),
        (g.onerror = (v) => {
          p(), c("failed"), i == null || i(v);
        }),
        (d.current = g);
    }, [n, s, r, a, o, i, t]),
    p = () => {
      d.current &&
        ((d.current.onload = null),
        (d.current.onerror = null),
        (d.current = null));
    };
  return (
    vu(() => {
      if (!l)
        return (
          u === "loading" && f(),
          () => {
            p();
          }
        );
    }, [u, f, l]),
    l ? "loaded" : u
  );
}
const OL = (e, t) =>
    (e !== "loaded" && t === "beforeLoadOrError") ||
    (e === "failed" && t === "onError"),
  na = H("div");
na.displayName = "Box";
const [lV, LL] = Yt({ strict: !1, name: "ButtonGroupContext" });
function as(e) {
  const { children: t, className: n, ...r } = e,
    o = b.isValidElement(t)
      ? b.cloneElement(t, { "aria-hidden": !0, focusable: !1 })
      : t,
    i = fe("chakra-button__icon", n);
  return w.jsx(H.span, {
    display: "inline-flex",
    alignSelf: "center",
    flexShrink: 0,
    ...r,
    className: i,
    children: o,
  });
}
as.displayName = "ButtonIcon";
function _h(e) {
  const {
      label: t,
      placement: n,
      spacing: r = "0.5rem",
      children: o = w.jsx(jm, {
        color: "currentColor",
        width: "1em",
        height: "1em",
      }),
      className: i,
      __css: s,
      ...a
    } = e,
    l = fe("chakra-button__spinner", i),
    u = n === "start" ? "marginEnd" : "marginStart",
    c = b.useMemo(
      () => ({
        display: "flex",
        alignItems: "center",
        position: t ? "relative" : "absolute",
        [u]: t ? r : 0,
        fontSize: "1em",
        lineHeight: "normal",
        ...s,
      }),
      [s, t, u, r]
    );
  return w.jsx(H.div, { className: l, ...a, __css: c, children: o });
}
_h.displayName = "ButtonSpinner";
function DL(e) {
  const [t, n] = b.useState(!e);
  return {
    ref: b.useCallback((i) => {
      i && n(i.tagName === "BUTTON");
    }, []),
    type: t ? "button" : void 0,
  };
}
const io = ne((e, t) => {
  const n = LL(),
    r = fo("Button", { ...n, ...e }),
    {
      isDisabled: o = n == null ? void 0 : n.isDisabled,
      isLoading: i,
      isActive: s,
      children: a,
      leftIcon: l,
      rightIcon: u,
      loadingText: c,
      iconSpacing: d = "0.5rem",
      type: f,
      spinner: p,
      spinnerPlacement: g = "start",
      className: v,
      as: x,
      shouldWrapChildren: m,
      ...h
    } = Bn(e),
    y = b.useMemo(() => {
      const E = { ...(r == null ? void 0 : r._focus), zIndex: 1 };
      return {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        justifyContent: "center",
        userSelect: "none",
        position: "relative",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        outline: "none",
        ...r,
        ...(!!n && { _focus: E }),
      };
    }, [r, n]),
    { ref: k, type: T } = DL(x),
    $ = {
      rightIcon: u,
      leftIcon: l,
      iconSpacing: d,
      children: a,
      shouldWrapChildren: m,
    };
  return w.jsxs(H.button, {
    disabled: o || i,
    ref: L_(t, k),
    as: x,
    type: f ?? T,
    "data-active": Jt(s),
    "data-loading": Jt(i),
    __css: y,
    className: fe("chakra-button", v),
    ...h,
    children: [
      i &&
        g === "start" &&
        w.jsx(_h, {
          className: "chakra-button__spinner--start",
          label: c,
          placement: "start",
          spacing: d,
          children: p,
        }),
      i
        ? c || w.jsx(H.span, { opacity: 0, children: w.jsx(Ay, { ...$ }) })
        : w.jsx(Ay, { ...$ }),
      i &&
        g === "end" &&
        w.jsx(_h, {
          className: "chakra-button__spinner--end",
          label: c,
          placement: "end",
          spacing: d,
          children: p,
        }),
    ],
  });
});
io.displayName = "Button";
function Ay(e) {
  const {
    leftIcon: t,
    rightIcon: n,
    children: r,
    iconSpacing: o,
    shouldWrapChildren: i,
  } = e;
  return i
    ? w.jsxs("span", {
        style: { display: "contents" },
        children: [
          t && w.jsx(as, { marginEnd: o, children: t }),
          r,
          n && w.jsx(as, { marginStart: o, children: n }),
        ],
      })
    : w.jsxs(w.Fragment, {
        children: [
          t && w.jsx(as, { marginEnd: o, children: t }),
          r,
          n && w.jsx(as, { marginStart: o, children: n }),
        ],
      });
}
const Eh = ne((e, t) => {
  const { icon: n, children: r, isRound: o, "aria-label": i, ...s } = e,
    a = n || r,
    l = b.isValidElement(a)
      ? b.cloneElement(a, { "aria-hidden": !0, focusable: !1 })
      : null;
  return w.jsx(io, {
    px: "0",
    py: "0",
    borderRadius: o ? "full" : void 0,
    ref: t,
    "aria-label": i,
    ...s,
    children: l,
  });
});
Eh.displayName = "IconButton";
const [NL, BL] = Yt({
    name: "FormControlStylesContext",
    errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `,
  }),
  [VL, ck] = Yt({ strict: !1, name: "FormControlContext" });
function WL(e) {
  const {
      id: t,
      isRequired: n,
      isInvalid: r,
      isDisabled: o,
      isReadOnly: i,
      ...s
    } = e,
    a = b.useId(),
    l = t || `field-${a}`,
    u = `${l}-label`,
    c = `${l}-feedback`,
    d = `${l}-helptext`,
    [f, p] = b.useState(!1),
    [g, v] = b.useState(!1),
    [x, m] = b.useState(!1),
    h = b.useCallback(
      (E = {}, R = null) => ({
        id: d,
        ...E,
        ref: Us(R, (z) => {
          z && v(!0);
        }),
      }),
      [d]
    ),
    y = b.useCallback(
      (E = {}, R = null) => ({
        ...E,
        ref: R,
        "data-focus": Jt(x),
        "data-disabled": Jt(o),
        "data-invalid": Jt(r),
        "data-readonly": Jt(i),
        id: E.id !== void 0 ? E.id : u,
        htmlFor: E.htmlFor !== void 0 ? E.htmlFor : l,
      }),
      [l, o, x, r, i, u]
    ),
    k = b.useCallback(
      (E = {}, R = null) => ({
        id: c,
        ...E,
        ref: Us(R, (z) => {
          z && p(!0);
        }),
        "aria-live": "polite",
      }),
      [c]
    ),
    T = b.useCallback(
      (E = {}, R = null) => ({
        ...E,
        ...s,
        ref: R,
        role: "group",
        "data-focus": Jt(x),
        "data-disabled": Jt(o),
        "data-invalid": Jt(r),
        "data-readonly": Jt(i),
      }),
      [s, o, x, r, i]
    ),
    $ = b.useCallback(
      (E = {}, R = null) => ({
        ...E,
        ref: R,
        role: "presentation",
        "aria-hidden": !0,
        children: E.children || "*",
      }),
      []
    );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!i,
    isDisabled: !!o,
    isFocused: !!x,
    onFocus: () => m(!0),
    onBlur: () => m(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: g,
    setHasHelpText: v,
    id: l,
    labelId: u,
    feedbackId: c,
    helpTextId: d,
    htmlProps: s,
    getHelpTextProps: h,
    getErrorMessageProps: k,
    getRootProps: T,
    getLabelProps: y,
    getRequiredIndicatorProps: $,
  };
}
const UL = ne(function (t, n) {
  const r = xc("Form", t),
    o = Bn(t),
    { getRootProps: i, htmlProps: s, ...a } = WL(o),
    l = fe("chakra-form-control", t.className);
  return w.jsx(VL, {
    value: a,
    children: w.jsx(NL, {
      value: r,
      children: w.jsx(H.div, { ...i({}, n), className: l, __css: r.container }),
    }),
  });
});
UL.displayName = "FormControl";
const HL = ne(function (t, n) {
  const r = ck(),
    o = BL(),
    i = fe("chakra-form__helper-text", t.className);
  return w.jsx(H.div, {
    ...(r == null ? void 0 : r.getHelpTextProps(t, n)),
    __css: o.helperText,
    className: i,
  });
});
HL.displayName = "FormHelperText";
function GL(e) {
  const {
    isDisabled: t,
    isInvalid: n,
    isReadOnly: r,
    isRequired: o,
    ...i
  } = KL(e);
  return {
    ...i,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": hd(n),
    "aria-required": hd(o),
    "aria-readonly": hd(r),
  };
}
function KL(e) {
  const t = ck(),
    {
      id: n,
      disabled: r,
      readOnly: o,
      required: i,
      isRequired: s,
      isInvalid: a,
      isReadOnly: l,
      isDisabled: u,
      onFocus: c,
      onBlur: d,
      ...f
    } = e,
    p = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return (
    t != null &&
      t.hasFeedbackText &&
      t != null &&
      t.isInvalid &&
      p.push(t.feedbackId),
    t != null && t.hasHelpText && p.push(t.helpTextId),
    {
      ...f,
      "aria-describedby": p.join(" ") || void 0,
      id: n ?? (t == null ? void 0 : t.id),
      isDisabled: r ?? u ?? (t == null ? void 0 : t.isDisabled),
      isReadOnly: o ?? l ?? (t == null ? void 0 : t.isReadOnly),
      isRequired: i ?? s ?? (t == null ? void 0 : t.isRequired),
      isInvalid: a ?? (t == null ? void 0 : t.isInvalid),
      onFocus: Nr(t == null ? void 0 : t.onFocus, c),
      onBlur: Nr(t == null ? void 0 : t.onBlur, d),
    }
  );
}
const wc = ne(function (t, n) {
  const { className: r, centerContent: o, ...i } = Bn(t),
    s = fo("Container", t);
  return w.jsx(H.div, {
    ref: n,
    className: fe("chakra-container", r),
    ...i,
    __css: {
      ...s,
      ...(o && {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }),
    },
  });
});
wc.displayName = "Container";
const dk = ne(function (t, n) {
  const {
      direction: r,
      align: o,
      justify: i,
      wrap: s,
      basis: a,
      grow: l,
      shrink: u,
      ...c
    } = t,
    d = {
      display: "flex",
      flexDirection: r,
      alignItems: o,
      justifyContent: i,
      flexWrap: s,
      flexBasis: a,
      flexGrow: l,
      flexShrink: u,
    };
  return w.jsx(H.div, { ref: n, __css: d, ...c });
});
dk.displayName = "Flex";
function YL(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
var $h = "data-focus-lock",
  fk = "data-focus-lock-disabled",
  XL = "data-no-focus-lock",
  qL = "data-autofocus-inside",
  QL = "data-no-autofocus";
function Gd(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ZL(e, t) {
  var n = b.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var JL = typeof window < "u" ? b.useLayoutEffect : b.useEffect,
  My = new WeakMap();
function hk(e, t) {
  var n = ZL(null, function (r) {
    return e.forEach(function (o) {
      return Gd(o, r);
    });
  });
  return (
    JL(
      function () {
        var r = My.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (a) {
            i.has(a) || Gd(a, null);
          }),
            i.forEach(function (a) {
              o.has(a) || Gd(a, s);
            });
        }
        My.set(n, e);
      },
      [e]
    ),
    n
  );
}
var Kd = {
    width: "1px",
    height: "0px",
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: "1px",
    left: "1px",
  },
  sn = function () {
    return (
      (sn =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      sn.apply(this, arguments)
    );
  };
function pk(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function eD(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
function mk(e) {
  return e;
}
function gk(e, t) {
  t === void 0 && (t = mk);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (a) {
              return a !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (s = n);
        }
        var l = function () {
            var c = s;
            (s = []), c.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(l);
          };
        u(),
          (n = {
            push: function (c) {
              s.push(c), u();
            },
            filter: function (c) {
              return (s = s.filter(c)), n;
            },
          });
      },
    };
  return o;
}
function Bm(e, t) {
  return t === void 0 && (t = mk), gk(e, t);
}
function vk(e) {
  e === void 0 && (e = {});
  var t = gk(null);
  return (t.options = sn({ async: !0, ssr: !1 }, e)), t;
}
var yk = function (e) {
  var t = e.sideCar,
    n = pk(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return b.createElement(r, sn({}, n));
};
yk.isSideCarExport = !0;
function tD(e, t) {
  return e.useMedium(t), yk;
}
var bk = Bm({}, function (e) {
    var t = e.target,
      n = e.currentTarget;
    return { target: t, currentTarget: n };
  }),
  Sk = Bm(),
  nD = Bm(),
  rD = vk({ async: !0, ssr: typeof document < "u" }),
  oD = b.createContext(void 0),
  iD = [],
  Vm = b.forwardRef(function (t, n) {
    var r,
      o = b.useState(),
      i = o[0],
      s = o[1],
      a = b.useRef(),
      l = b.useRef(!1),
      u = b.useRef(null),
      c = b.useState({}),
      d = c[1],
      f = t.children,
      p = t.disabled,
      g = p === void 0 ? !1 : p,
      v = t.noFocusGuards,
      x = v === void 0 ? !1 : v,
      m = t.persistentFocus,
      h = m === void 0 ? !1 : m,
      y = t.crossFrame,
      k = y === void 0 ? !0 : y,
      T = t.autoFocus,
      $ = T === void 0 ? !0 : T;
    t.allowTextSelection;
    var E = t.group,
      R = t.className,
      z = t.whiteList,
      F = t.hasPositiveIndices,
      oe = t.shards,
      nt = oe === void 0 ? iD : oe,
      wt = t.as,
      mn = wt === void 0 ? "div" : wt,
      Cr = t.lockProps,
      Vn = Cr === void 0 ? {} : Cr,
      ve = t.sideCar,
      M = t.returnFocus,
      O = M === void 0 ? !1 : M,
      B = t.focusOptions,
      ie = t.onActivation,
      he = t.onDeactivation,
      K = b.useState({}),
      kt = K[0],
      Pr = b.useCallback(
        function (jt) {
          var Wn = jt.captureFocusRestore;
          if (!u.current) {
            var Un,
              vn = (Un = document) == null ? void 0 : Un.activeElement;
            (u.current = vn), vn !== document.body && (u.current = Wn(vn));
          }
          a.current && ie && ie(a.current), (l.current = !0), d();
        },
        [ie]
      ),
      Xe = b.useCallback(
        function () {
          (l.current = !1), he && he(a.current), d();
        },
        [he]
      ),
      gn = b.useCallback(
        function (jt) {
          var Wn = u.current;
          if (Wn) {
            var Un = (typeof Wn == "function" ? Wn() : Wn) || document.body,
              vn = typeof O == "function" ? O(Un) : O;
            if (vn) {
              var _r = typeof vn == "object" ? vn : void 0;
              (u.current = null),
                jt
                  ? Promise.resolve().then(function () {
                      return Un.focus(_r);
                    })
                  : Un.focus(_r);
            }
          }
        },
        [O]
      ),
      Tr = b.useCallback(function (jt) {
        l.current && bk.useMedium(jt);
      }, []),
      Pa = Sk.useMedium,
      Ai = b.useCallback(function (jt) {
        a.current !== jt && ((a.current = jt), s(jt));
      }, []),
      Ta = oo(((r = {}), (r[fk] = g && "disabled"), (r[$h] = E), r), Vn),
      Mi = x !== !0,
      _c = Mi && x !== "tail",
      Ec = hk([n, Ai]),
      $c = b.useMemo(
        function () {
          return { observed: a, shards: nt, enabled: !g, active: l.current };
        },
        [g, l.current, nt, i]
      );
    return b.createElement(
      b.Fragment,
      null,
      Mi && [
        b.createElement("div", {
          key: "guard-first",
          "data-focus-guard": !0,
          tabIndex: g ? -1 : 0,
          style: Kd,
        }),
        F
          ? b.createElement("div", {
              key: "guard-nearest",
              "data-focus-guard": !0,
              tabIndex: g ? -1 : 1,
              style: Kd,
            })
          : null,
      ],
      !g &&
        b.createElement(ve, {
          id: kt,
          sideCar: rD,
          observed: i,
          disabled: g,
          persistentFocus: h,
          crossFrame: k,
          autoFocus: $,
          whiteList: z,
          shards: nt,
          onActivation: Pr,
          onDeactivation: Xe,
          returnFocus: gn,
          focusOptions: B,
          noFocusGuards: x,
        }),
      b.createElement(
        mn,
        oo({ ref: Ec }, Ta, { className: R, onBlur: Pa, onFocus: Tr }),
        b.createElement(oD.Provider, { value: $c }, f)
      ),
      _c &&
        b.createElement("div", {
          "data-focus-guard": !0,
          tabIndex: g ? -1 : 0,
          style: Kd,
        })
    );
  });
Vm.propTypes = {};
function Rh(e, t) {
  return (
    (Rh = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Rh(e, t)
  );
}
function sD(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Rh(e, t);
}
function ra(e) {
  "@babel/helpers - typeof";
  return (
    (ra =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    ra(e)
  );
}
function aD(e, t) {
  if (ra(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ra(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function lD(e) {
  var t = aD(e, "string");
  return ra(t) == "symbol" ? t : t + "";
}
function uD(e, t, n) {
  return (
    (t = lD(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function cD(e, t) {
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function (o) {
    var i = [],
      s;
    function a() {
      (s = e(
        i.map(function (u) {
          return u.props;
        })
      )),
        t(s);
    }
    var l = (function (u) {
      sD(c, u);
      function c() {
        return u.apply(this, arguments) || this;
      }
      c.peek = function () {
        return s;
      };
      var d = c.prototype;
      return (
        (d.componentDidMount = function () {
          i.push(this), a();
        }),
        (d.componentDidUpdate = function () {
          a();
        }),
        (d.componentWillUnmount = function () {
          var p = i.indexOf(this);
          i.splice(p, 1), a();
        }),
        (d.render = function () {
          return Ut.createElement(o, this.props);
        }),
        c
      );
    })(b.PureComponent);
    return uD(l, "displayName", "SideEffect(" + n(o) + ")"), l;
  };
}
var pn = function (e) {
    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
    return t;
  },
  so = function (e) {
    return Array.isArray(e) ? e : [e];
  },
  xk = function (e) {
    return Array.isArray(e) ? e[0] : e;
  },
  dD = function (e) {
    if (e.nodeType !== Node.ELEMENT_NODE) return !1;
    var t = window.getComputedStyle(e, null);
    return !t || !t.getPropertyValue
      ? !1
      : t.getPropertyValue("display") === "none" ||
          t.getPropertyValue("visibility") === "hidden";
  },
  wk = function (e) {
    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
      ? e.parentNode.host
      : e.parentNode;
  },
  kk = function (e) {
    return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
  },
  fD = function (e) {
    return e.hasAttribute("inert");
  },
  hD = function (e, t) {
    return !e || kk(e) || (!dD(e) && !fD(e) && t(wk(e)));
  },
  Ck = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = hD(t, Ck.bind(void 0, e));
    return e.set(t, r), r;
  },
  pD = function (e, t) {
    return e && !kk(e) ? (vD(e) ? t(wk(e)) : !1) : !0;
  },
  Pk = function (e, t) {
    var n = e.get(t);
    if (n !== void 0) return n;
    var r = pD(t, Pk.bind(void 0, e));
    return e.set(t, r), r;
  },
  Tk = function (e) {
    return e.dataset;
  },
  mD = function (e) {
    return e.tagName === "BUTTON";
  },
  _k = function (e) {
    return e.tagName === "INPUT";
  },
  Ek = function (e) {
    return _k(e) && e.type === "radio";
  },
  gD = function (e) {
    return !((_k(e) || mD(e)) && (e.type === "hidden" || e.disabled));
  },
  vD = function (e) {
    var t = e.getAttribute(QL);
    return ![!0, "true", ""].includes(t);
  },
  Wm = function (e) {
    var t;
    return !!(e && !((t = Tk(e)) === null || t === void 0) && t.focusGuard);
  },
  Ah = function (e) {
    return !Wm(e);
  },
  yD = function (e) {
    return !!e;
  },
  bD = function (e, t) {
    var n = Math.max(0, e.tabIndex),
      r = Math.max(0, t.tabIndex),
      o = n - r,
      i = e.index - t.index;
    if (o) {
      if (!n) return 1;
      if (!r) return -1;
    }
    return o || i;
  },
  SD = function (e) {
    return e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
  },
  Um = function (e, t, n) {
    return pn(e)
      .map(function (r, o) {
        var i = SD(r);
        return {
          node: r,
          index: o,
          tabIndex: n && i === -1 ? ((r.dataset || {}).focusGuard ? 0 : -1) : i,
        };
      })
      .filter(function (r) {
        return !t || r.tabIndex >= 0;
      })
      .sort(bD);
  },
  xD = [
    "button:enabled",
    "select:enabled",
    "textarea:enabled",
    "input:enabled",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[tabindex]",
    "[contenteditable]",
    "[autofocus]",
  ],
  Hm = xD.join(","),
  wD = "".concat(Hm, ", [data-focus-guard]"),
  $k = function (e, t) {
    return pn((e.shadowRoot || e).children).reduce(function (n, r) {
      return n.concat(r.matches(t ? wD : Hm) ? [r] : [], $k(r));
    }, []);
  },
  kD = function (e, t) {
    var n;
    return e instanceof HTMLIFrameElement &&
      !((n = e.contentDocument) === null || n === void 0) &&
      n.body
      ? Si([e.contentDocument.body], t)
      : [e];
  },
  Si = function (e, t) {
    return e.reduce(function (n, r) {
      var o,
        i = $k(r, t),
        s = (o = []).concat.apply(
          o,
          i.map(function (a) {
            return kD(a, t);
          })
        );
      return n.concat(
        s,
        r.parentNode
          ? pn(r.parentNode.querySelectorAll(Hm)).filter(function (a) {
              return a === r;
            })
          : []
      );
    }, []);
  },
  CD = function (e) {
    var t = e.querySelectorAll("[".concat(qL, "]"));
    return pn(t)
      .map(function (n) {
        return Si([n]);
      })
      .reduce(function (n, r) {
        return n.concat(r);
      }, []);
  },
  Gm = function (e, t) {
    return pn(e)
      .filter(function (n) {
        return Ck(t, n);
      })
      .filter(function (n) {
        return gD(n);
      });
  },
  zy = function (e, t) {
    return (
      t === void 0 && (t = new Map()),
      pn(e).filter(function (n) {
        return Pk(t, n);
      })
    );
  },
  Km = function (e, t, n) {
    return Um(Gm(Si(e, n), t), !0, n);
  },
  oa = function (e, t) {
    return Um(Gm(Si(e), t), !1);
  },
  PD = function (e, t) {
    return Gm(CD(e), t);
  },
  Qr = function (e, t) {
    return e.shadowRoot
      ? Qr(e.shadowRoot, t)
      : Object.getPrototypeOf(e).contains !== void 0 &&
        Object.getPrototypeOf(e).contains.call(e, t)
      ? !0
      : pn(e.children).some(function (n) {
          var r;
          if (n instanceof HTMLIFrameElement) {
            var o =
              (r = n.contentDocument) === null || r === void 0
                ? void 0
                : r.body;
            return o ? Qr(o, t) : !1;
          }
          return Qr(n, t);
        });
  },
  TD = function (e) {
    for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
      for (var o = r + 1; o < n; o += 1) {
        var i = e[r].compareDocumentPosition(e[o]);
        (i & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o),
          (i & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
      }
    return e.filter(function (s, a) {
      return !t.has(a);
    });
  },
  Rk = function (e) {
    return e.parentNode ? Rk(e.parentNode) : e;
  },
  Ym = function (e) {
    var t = so(e);
    return t.filter(Boolean).reduce(function (n, r) {
      var o = r.getAttribute($h);
      return (
        n.push.apply(
          n,
          o
            ? TD(
                pn(
                  Rk(r).querySelectorAll(
                    "["
                      .concat($h, '="')
                      .concat(o, '"]:not([')
                      .concat(fk, '="disabled"])')
                  )
                )
              )
            : [r]
        ),
        n
      );
    }, []);
  },
  _D = function (e) {
    try {
      return e();
    } catch {
      return;
    }
  },
  ia = function (e) {
    if ((e === void 0 && (e = document), !(!e || !e.activeElement))) {
      var t = e.activeElement;
      return t.shadowRoot
        ? ia(t.shadowRoot)
        : t instanceof HTMLIFrameElement &&
          _D(function () {
            return t.contentWindow.document;
          })
        ? ia(t.contentWindow.document)
        : t;
    }
  },
  ED = function (e, t) {
    return e === t;
  },
  $D = function (e, t) {
    return !!pn(e.querySelectorAll("iframe")).some(function (n) {
      return ED(n, t);
    });
  },
  Ak = function (e, t) {
    return (
      t === void 0 && (t = ia(xk(e).ownerDocument)),
      !t || (t.dataset && t.dataset.focusGuard)
        ? !1
        : Ym(e).some(function (n) {
            return Qr(n, t) || $D(n, t);
          })
    );
  },
  RD = function (e) {
    e === void 0 && (e = document);
    var t = ia(e);
    return t
      ? pn(e.querySelectorAll("[".concat(XL, "]"))).some(function (n) {
          return Qr(n, t);
        })
      : !1;
  },
  AD = function (e, t) {
    return (
      t
        .filter(Ek)
        .filter(function (n) {
          return n.name === e.name;
        })
        .filter(function (n) {
          return n.checked;
        })[0] || e
    );
  },
  Xm = function (e, t) {
    return Ek(e) && e.name ? AD(e, t) : e;
  },
  MD = function (e) {
    var t = new Set();
    return (
      e.forEach(function (n) {
        return t.add(Xm(n, e));
      }),
      e.filter(function (n) {
        return t.has(n);
      })
    );
  },
  Iy = function (e) {
    return e[0] && e.length > 1 ? Xm(e[0], e) : e[0];
  },
  Fy = function (e, t) {
    return e.indexOf(Xm(t, e));
  },
  Mh = "NEW_FOCUS",
  zD = function (e, t, n, r, o) {
    var i = e.length,
      s = e[0],
      a = e[i - 1],
      l = Wm(r);
    if (!(r && e.indexOf(r) >= 0)) {
      var u = r !== void 0 ? n.indexOf(r) : -1,
        c = o ? n.indexOf(o) : u,
        d = o ? e.indexOf(o) : -1;
      if (u === -1) return d !== -1 ? d : Mh;
      if (d === -1) return Mh;
      var f = u - c,
        p = n.indexOf(s),
        g = n.indexOf(a),
        v = MD(n),
        x = r !== void 0 ? v.indexOf(r) : -1,
        m = x - (o ? v.indexOf(o) : u);
      if ((!f && d >= 0) || t.length === 0) return d;
      var h = Fy(e, t[0]),
        y = Fy(e, t[t.length - 1]);
      if (u <= p && l && Math.abs(f) > 1) return y;
      if (u >= g && l && Math.abs(f) > 1) return h;
      if (f && Math.abs(m) > 1) return d;
      if (u <= p) return y;
      if (u > g) return h;
      if (f) return Math.abs(f) > 1 ? d : (i + d + f) % i;
    }
  },
  ID = function (e) {
    return function (t) {
      var n,
        r = (n = Tk(t)) === null || n === void 0 ? void 0 : n.autofocus;
      return (
        t.autofocus || (r !== void 0 && r !== "false") || e.indexOf(t) >= 0
      );
    };
  },
  jy = function (e, t, n) {
    var r = e.map(function (i) {
        var s = i.node;
        return s;
      }),
      o = zy(r.filter(ID(n)));
    return o && o.length ? Iy(o) : Iy(zy(t));
  },
  zh = function (e, t) {
    return (
      t === void 0 && (t = []),
      t.push(e),
      e.parentNode && zh(e.parentNode.host || e.parentNode, t),
      t
    );
  },
  Yd = function (e, t) {
    for (var n = zh(e), r = zh(t), o = 0; o < n.length; o += 1) {
      var i = n[o];
      if (r.indexOf(i) >= 0) return i;
    }
    return !1;
  },
  Mk = function (e, t, n) {
    var r = so(e),
      o = so(t),
      i = r[0],
      s = !1;
    return (
      o.filter(Boolean).forEach(function (a) {
        (s = Yd(s || a, a) || s),
          n.filter(Boolean).forEach(function (l) {
            var u = Yd(i, l);
            u && (!s || Qr(u, s) ? (s = u) : (s = Yd(u, s)));
          });
      }),
      s
    );
  },
  Oy = function (e, t) {
    return e.reduce(function (n, r) {
      return n.concat(PD(r, t));
    }, []);
  },
  FD = function (e, t) {
    var n = new Map();
    return (
      t.forEach(function (r) {
        return n.set(r.node, r);
      }),
      e
        .map(function (r) {
          return n.get(r);
        })
        .filter(yD)
    );
  },
  jD = function (e, t) {
    var n = ia(so(e).length > 0 ? document : xk(e).ownerDocument),
      r = Ym(e).filter(Ah),
      o = Mk(n || e, e, r),
      i = new Map(),
      s = oa(r, i),
      a = s.filter(function (g) {
        var v = g.node;
        return Ah(v);
      });
    if (a[0]) {
      var l = oa([o], i).map(function (g) {
          var v = g.node;
          return v;
        }),
        u = FD(l, a),
        c = u.map(function (g) {
          var v = g.node;
          return v;
        }),
        d = u
          .filter(function (g) {
            var v = g.tabIndex;
            return v >= 0;
          })
          .map(function (g) {
            var v = g.node;
            return v;
          }),
        f = zD(c, d, l, n, t);
      if (f === Mh) {
        var p = jy(s, d, Oy(r, i)) || jy(s, c, Oy(r, i));
        if (p) return { node: p };
        console.warn("focus-lock: cannot find any node to move focus into");
        return;
      }
      return f === void 0 ? f : u[f];
    }
  },
  OD = function (e) {
    var t = Ym(e).filter(Ah),
      n = Mk(e, e, t),
      r = Um(Si([n], !0), !0, !0),
      o = Si(t, !1);
    return r.map(function (i) {
      var s = i.node,
        a = i.index;
      return { node: s, index: a, lockItem: o.indexOf(s) >= 0, guard: Wm(s) };
    });
  },
  qm = function (e, t) {
    e &&
      ("focus" in e && e.focus(t),
      "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
  },
  Xd = 0,
  qd = !1,
  zk = function (e, t, n) {
    n === void 0 && (n = {});
    var r = jD(e, t);
    if (!qd && r) {
      if (Xd > 2) {
        console.error(
          "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
        ),
          (qd = !0),
          setTimeout(function () {
            qd = !1;
          }, 1);
        return;
      }
      Xd++, qm(r.node, n.focusOptions), Xd--;
    }
  };
function Xi(e) {
  if (!e) return null;
  if (typeof WeakRef > "u")
    return function () {
      return e || null;
    };
  var t = e ? new WeakRef(e) : null;
  return function () {
    return (t == null ? void 0 : t.deref()) || null;
  };
}
var LD = function (e) {
    if (!e) return null;
    for (var t = [], n = e; n && n !== document.body; )
      t.push({
        current: Xi(n),
        parent: Xi(n.parentElement),
        left: Xi(n.previousElementSibling),
        right: Xi(n.nextElementSibling),
      }),
        (n = n.parentElement);
    return { element: Xi(e), stack: t, ownerDocument: e.ownerDocument };
  },
  DD = function (e) {
    var t, n, r, o, i;
    if (e)
      for (
        var s = e.stack, a = e.ownerDocument, l = new Map(), u = 0, c = s;
        u < c.length;
        u++
      ) {
        var d = c[u],
          f = (t = d.parent) === null || t === void 0 ? void 0 : t.call(d);
        if (f && a.contains(f)) {
          for (
            var p = (n = d.left) === null || n === void 0 ? void 0 : n.call(d),
              g = d.current(),
              v = f.contains(g) ? g : void 0,
              x = (r = d.right) === null || r === void 0 ? void 0 : r.call(d),
              m = Km([f], l),
              h =
                (i =
                  (o = v ?? (p == null ? void 0 : p.nextElementSibling)) !==
                    null && o !== void 0
                    ? o
                    : x) !== null && i !== void 0
                  ? i
                  : p;
            h;

          ) {
            for (var y = 0, k = m; y < k.length; y++) {
              var T = k[y];
              if (h != null && h.contains(T.node)) return T.node;
            }
            h = h.nextElementSibling;
          }
          if (m.length) return m[0].node;
        }
      }
  },
  Ik = function (e) {
    var t = LD(e);
    return function () {
      return DD(t);
    };
  },
  ND = function (e, t, n) {
    if (!e || !t) return console.error("no element or scope given"), {};
    var r = so(t);
    if (
      r.every(function (s) {
        return !Qr(s, e);
      })
    )
      return console.error("Active element is not contained in the scope"), {};
    var o = n ? Km(r, new Map()) : oa(r, new Map()),
      i = o.findIndex(function (s) {
        var a = s.node;
        return a === e;
      });
    if (i !== -1)
      return {
        prev: o[i - 1],
        next: o[i + 1],
        first: o[0],
        last: o[o.length - 1],
      };
  },
  BD = function (e, t) {
    var n = t ? Km(so(e), new Map()) : oa(so(e), new Map());
    return { first: n[0], last: n[n.length - 1] };
  },
  VD = function (e) {
    return Object.assign(
      { scope: document.body, cycle: !0, onlyTabbable: !0 },
      e
    );
  },
  Fk = function (e, t, n) {
    t === void 0 && (t = {});
    var r = VD(t),
      o = ND(e, r.scope, r.onlyTabbable);
    if (o) {
      var i = n(o, r.cycle);
      i && qm(i.node, r.focusOptions);
    }
  },
  WD = function (e, t) {
    t === void 0 && (t = {}),
      Fk(e, t, function (n, r) {
        var o = n.next,
          i = n.first;
        return o || (r && i);
      });
  },
  UD = function (e, t) {
    t === void 0 && (t = {}),
      Fk(e, t, function (n, r) {
        var o = n.prev,
          i = n.last;
        return o || (r && i);
      });
  },
  jk = function (e, t, n) {
    var r,
      o = BD(e, (r = t.onlyTabbable) !== null && r !== void 0 ? r : !0),
      i = o[n];
    i && qm(i.node, t.focusOptions);
  },
  HD = function (e, t) {
    t === void 0 && (t = {}), jk(e, t, "first");
  },
  GD = function (e, t) {
    t === void 0 && (t = {}), jk(e, t, "last");
  };
function Qm(e) {
  setTimeout(e, 1);
}
var KD = function (t) {
    return t && "current" in t ? t.current : t;
  },
  Ok = function () {
    return document && document.activeElement === document.body;
  },
  YD = function () {
    return Ok() || RD();
  },
  ri = null,
  dt = null,
  Ly = function () {
    return null;
  },
  oi = null,
  sa = !1,
  Zm = !1,
  XD = function () {
    return !0;
  },
  qD = function (t) {
    return (ri.whiteList || XD)(t);
  },
  QD = function (t, n) {
    oi = { observerNode: t, portaledElement: n };
  },
  ZD = function (t) {
    return oi && oi.portaledElement === t;
  };
function Dy(e, t, n, r) {
  var o = null,
    i = e;
  do {
    var s = r[i];
    if (s.guard) s.node.dataset.focusAutoGuard && (o = s);
    else if (s.lockItem) {
      if (i !== e) return;
      o = null;
    } else break;
  } while ((i += n) !== t);
  o && (o.node.tabIndex = 0);
}
var JD = function (t) {
    return t ? !!sa : sa === "meanwhile";
  },
  eN = function e(t, n, r) {
    return (
      n &&
      ((n.host === t && (!n.activeElement || r.contains(n.activeElement))) ||
        (n.parentNode && e(t, n.parentNode, r)))
    );
  },
  tN = function (t, n) {
    return n.some(function (r) {
      return eN(t, r, r);
    });
  },
  Lk = function (t) {
    return oa(t, new Map());
  },
  nN = function (t) {
    return !Lk([t.parentNode]).some(function (n) {
      return n.node === t;
    });
  },
  Ru = function () {
    var t = !1;
    if (ri) {
      var n = ri,
        r = n.observed,
        o = n.persistentFocus,
        i = n.autoFocus,
        s = n.shards,
        a = n.crossFrame,
        l = n.focusOptions,
        u = n.noFocusGuards,
        c = r || (oi && oi.portaledElement);
      if (Ok() && dt && (!document.body.contains(dt) || nN(dt))) {
        dt = null;
        var d = Ly();
        d && d.focus();
      }
      var f = document && document.activeElement;
      if (c) {
        var p = [c].concat(s.map(KD).filter(Boolean)),
          g = function () {
            if (!JD(a) || !u || !dt || Zm) return !1;
            var y = Lk(p),
              k = y.findIndex(function (T) {
                var $ = T.node;
                return $ === dt;
              });
            return k === 0 || k === y.length - 1;
          };
        if (
          ((!f || qD(f)) &&
            (o || g() || !YD() || (!dt && i)) &&
            (c &&
              !(Ak(p) || (f && tN(f, p)) || ZD(f)) &&
              (document && !dt && f && !i
                ? (f.blur && f.blur(), document.body.focus())
                : ((t = zk(p, dt, { focusOptions: l })), (oi = {}))),
            (sa = !1),
            (dt = document && document.activeElement),
            (Ly = Ik(dt))),
          document &&
            f !== document.activeElement &&
            document.querySelector("[data-focus-auto-guard]"))
        ) {
          var v = document && document.activeElement,
            x = OD(p),
            m = x
              .map(function (h) {
                var y = h.node;
                return y;
              })
              .indexOf(v);
          m > -1 &&
            (x
              .filter(function (h) {
                var y = h.guard,
                  k = h.node;
                return y && k.dataset.focusAutoGuard;
              })
              .forEach(function (h) {
                var y = h.node;
                return y.removeAttribute("tabIndex");
              }),
            Dy(m, x.length, 1, x),
            Dy(m, -1, -1, x));
        }
      }
    }
    return t;
  },
  Dk = function (t) {
    Ru() && t && (t.stopPropagation(), t.preventDefault());
  },
  Jm = function () {
    return Qm(Ru);
  },
  rN = function (t) {
    var n = t.target,
      r = t.currentTarget;
    r.contains(n) || QD(r, n);
  },
  oN = function () {
    return null;
  },
  Nk = function () {
    Zm = !0;
  },
  Bk = function () {
    (Zm = !1),
      (sa = "just"),
      Qm(function () {
        sa = "meanwhile";
      });
  },
  iN = function () {
    document.addEventListener("focusin", Dk),
      document.addEventListener("focusout", Jm),
      window.addEventListener("focus", Nk),
      window.addEventListener("blur", Bk);
  },
  sN = function () {
    document.removeEventListener("focusin", Dk),
      document.removeEventListener("focusout", Jm),
      window.removeEventListener("focus", Nk),
      window.removeEventListener("blur", Bk);
  };
function aN(e) {
  return e.filter(function (t) {
    var n = t.disabled;
    return !n;
  });
}
var Vk = {
  moveFocusInside: zk,
  focusInside: Ak,
  focusNextElement: WD,
  focusPrevElement: UD,
  focusFirstElement: HD,
  focusLastElement: GD,
  captureFocusRestore: Ik,
};
function lN(e) {
  var t = e.slice(-1)[0];
  t && !ri && iN();
  var n = ri,
    r = n && t && t.id === n.id;
  (ri = t),
    n &&
      !r &&
      (n.onDeactivation(),
      e.filter(function (o) {
        var i = o.id;
        return i === n.id;
      }).length || n.returnFocus(!t)),
    t
      ? ((dt = null),
        (!r || n.observed !== t.observed) && t.onActivation(Vk),
        Ru(),
        Qm(Ru))
      : (sN(), (dt = null));
}
bk.assignSyncMedium(rN);
Sk.assignMedium(Jm);
nD.assignMedium(function (e) {
  return e(Vk);
});
const uN = cD(aN, lN)(oN);
var Ih = b.forwardRef(function (t, n) {
    return b.createElement(Vm, oo({ sideCar: uN, ref: n }, t));
  }),
  Wk = Vm.propTypes || {};
Wk.sideCar;
YL(Wk, ["sideCar"]);
Ih.propTypes = {};
const cN = Ih.default ?? Ih,
  Uk = (e) => {
    const {
        initialFocusRef: t,
        finalFocusRef: n,
        contentRef: r,
        restoreFocus: o,
        children: i,
        isDisabled: s,
        autoFocus: a,
        persistentFocus: l,
        lockFocusAcrossFrames: u,
      } = e,
      c = b.useCallback(() => {
        t != null && t.current
          ? t.current.focus()
          : r != null &&
            r.current &&
            E_(r.current).length === 0 &&
            requestAnimationFrame(() => {
              var g;
              (g = r.current) == null || g.focus();
            });
      }, [t, r]),
      d = b.useCallback(() => {
        var p;
        (p = n == null ? void 0 : n.current) == null || p.focus();
      }, [n]),
      f = o && !n;
    return w.jsx(cN, {
      crossFrame: u,
      persistentFocus: l,
      autoFocus: a,
      disabled: s,
      onActivation: c,
      onDeactivation: d,
      returnFocus: f,
      children: i,
    });
  };
Uk.displayName = "FocusLock";
const Hk = ne(function (t, n) {
  const {
      templateAreas: r,
      gap: o,
      rowGap: i,
      columnGap: s,
      column: a,
      row: l,
      autoFlow: u,
      autoRows: c,
      templateRows: d,
      autoColumns: f,
      templateColumns: p,
      ...g
    } = t,
    v = {
      display: "grid",
      gridTemplateAreas: r,
      gridGap: o,
      gridRowGap: i,
      gridColumnGap: s,
      gridAutoColumns: f,
      gridColumn: a,
      gridRow: l,
      gridAutoFlow: u,
      gridAutoRows: c,
      gridTemplateRows: d,
      gridTemplateColumns: p,
    };
  return w.jsx(H.div, { ref: n, __css: v, ...g });
});
Hk.displayName = "Grid";
const Gk = ne(function (t, n) {
  const {
      columns: r,
      spacingX: o,
      spacingY: i,
      spacing: s,
      minChildWidth: a,
      ...l
    } = t,
    u = ek(),
    c = a ? fN(a, u) : hN(r);
  return w.jsx(Hk, {
    ref: n,
    gap: s,
    columnGap: o,
    rowGap: i,
    templateColumns: c,
    ...l,
  });
});
Gk.displayName = "SimpleGrid";
function dN(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function fN(e, t) {
  return Np(e, (n) => {
    const r = hL("sizes", n, dN(n))(t);
    return n === null ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function hN(e) {
  return Np(e, (t) => (t === null ? null : `repeat(${t}, minmax(0, 1fr))`));
}
function Kk(e) {
  const {
      viewBox: t = "0 0 24 24",
      d: n,
      displayName: r,
      defaultProps: o = {},
    } = e,
    i = b.Children.toArray(e.path),
    s = ne((a, l) =>
      w.jsx(Ei, {
        ref: l,
        viewBox: t,
        ...o,
        ...a,
        children: i.length ? i : w.jsx("path", { fill: "currentColor", d: n }),
      })
    );
  return (s.displayName = r), s;
}
const Fh = ne(function (t, n) {
  const { htmlWidth: r, htmlHeight: o, alt: i, ...s } = t;
  return w.jsx("img", { width: r, height: o, ref: n, alt: i, ...s });
});
Fh.displayName = "NativeImage";
const Yk = ne(function (t, n) {
  const {
      fallbackSrc: r,
      fallback: o,
      src: i,
      srcSet: s,
      align: a,
      fit: l,
      loading: u,
      ignoreFallback: c,
      crossOrigin: d,
      fallbackStrategy: f = "beforeLoadOrError",
      referrerPolicy: p,
      ...g
    } = t,
    v = r !== void 0 || o !== void 0,
    x = u != null || c || !v,
    m = jL({ ...t, crossOrigin: d, ignoreFallback: x }),
    h = OL(m, f),
    y = {
      ref: n,
      objectFit: l,
      objectPosition: a,
      ...(x ? g : Dp(g, ["onError", "onLoad"])),
    };
  return h
    ? o ||
        w.jsx(H.img, {
          as: Fh,
          className: "chakra-image__placeholder",
          src: r,
          ...y,
        })
    : w.jsx(H.img, {
        as: Fh,
        src: i,
        srcSet: s,
        crossOrigin: d,
        loading: u,
        referrerPolicy: p,
        className: "chakra-image",
        ...y,
      });
});
Yk.displayName = "Image";
const hr = ne(function (t, n) {
  const { htmlSize: r, ...o } = t,
    i = xc("Input", o),
    s = Bn(o),
    a = GL(s),
    l = fe("chakra-input", t.className);
  return w.jsx(H.input, {
    size: r,
    ...a,
    __css: i.field,
    ref: n,
    className: l,
  });
});
hr.displayName = "Input";
hr.id = "Input";
var pN = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  bo = new WeakMap(),
  dl = new WeakMap(),
  fl = {},
  Qd = 0,
  Xk = function (e) {
    return e && (e.host || Xk(e.parentNode));
  },
  mN = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Xk(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  gN = function (e, t, n, r) {
    var o = mN(t, Array.isArray(e) ? e : [e]);
    fl[n] || (fl[n] = new WeakMap());
    var i = fl[n],
      s = [],
      a = new Set(),
      l = new Set(o),
      u = function (d) {
        !d || a.has(d) || (a.add(d), u(d.parentNode));
      };
    o.forEach(u);
    var c = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) c(f);
          else
            try {
              var p = f.getAttribute(r),
                g = p !== null && p !== "false",
                v = (bo.get(f) || 0) + 1,
                x = (i.get(f) || 0) + 1;
              bo.set(f, v),
                i.set(f, x),
                s.push(f),
                v === 1 && g && dl.set(f, !0),
                x === 1 && f.setAttribute(n, "true"),
                g || f.setAttribute(r, "true");
            } catch (m) {
              console.error("aria-hidden: cannot operate on ", f, m);
            }
        });
    };
    return (
      c(t),
      a.clear(),
      Qd++,
      function () {
        s.forEach(function (d) {
          var f = bo.get(d) - 1,
            p = i.get(d) - 1;
          bo.set(d, f),
            i.set(d, p),
            f || (dl.has(d) || d.removeAttribute(r), dl.delete(d)),
            p || d.removeAttribute(n);
        }),
          Qd--,
          Qd ||
            ((bo = new WeakMap()),
            (bo = new WeakMap()),
            (dl = new WeakMap()),
            (fl = {}));
      }
    );
  },
  vN = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = pN(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        gN(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  yN = Object.defineProperty,
  bN = (e, t, n) =>
    t in e
      ? yN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  SN = (e, t, n) => (bN(e, t + "", n), n);
class xN {
  constructor() {
    SN(this, "modals"), (this.modals = new Set());
  }
  add(t) {
    return this.modals.add(t), this.modals.size;
  }
  remove(t) {
    this.modals.delete(t);
  }
  isTopModal(t) {
    if (!t) return !1;
    const n = Array.from(this.modals)[this.modals.size - 1];
    return t === n;
  }
}
const jh = new xN();
function qk(e, t) {
  const [n, r] = b.useState(0);
  return (
    b.useEffect(() => {
      const o = e.current;
      if (o) {
        if (t) {
          const i = jh.add(o);
          r(i);
        }
        return () => {
          jh.remove(o), r(0);
        };
      }
    }, [t, e]),
    n
  );
}
function wN(e) {
  const {
      isOpen: t,
      onClose: n,
      id: r,
      closeOnOverlayClick: o = !0,
      closeOnEsc: i = !0,
      useInert: s = !0,
      onOverlayClick: a,
      onEsc: l,
    } = e,
    u = b.useRef(null),
    c = b.useRef(null),
    [d, f, p] = CN(
      r,
      "chakra-modal",
      "chakra-modal--header",
      "chakra-modal--body"
    );
  kN(u, t && s);
  const g = qk(u, t),
    v = b.useRef(null),
    x = b.useCallback((z) => {
      v.current = z.target;
    }, []),
    m = b.useCallback(
      (z) => {
        z.key === "Escape" &&
          (z.stopPropagation(), i && (n == null || n()), l == null || l());
      },
      [i, n, l]
    ),
    [h, y] = b.useState(!1),
    [k, T] = b.useState(!1),
    $ = b.useCallback(
      (z = {}, F = null) => ({
        role: "dialog",
        ...z,
        ref: Us(F, u),
        id: d,
        tabIndex: -1,
        "aria-modal": !0,
        "aria-labelledby": h ? f : void 0,
        "aria-describedby": k ? p : void 0,
        onClick: Nr(z.onClick, (oe) => oe.stopPropagation()),
      }),
      [p, k, d, f, h]
    ),
    E = b.useCallback(
      (z) => {
        z.stopPropagation(),
          v.current === z.target &&
            jh.isTopModal(u.current) &&
            (o && (n == null || n()), a == null || a());
      },
      [n, o, a]
    ),
    R = b.useCallback(
      (z = {}, F = null) => ({
        ...z,
        ref: Us(F, c),
        onClick: Nr(z.onClick, E),
        onKeyDown: Nr(z.onKeyDown, m),
        onMouseDown: Nr(z.onMouseDown, x),
      }),
      [m, x, E]
    );
  return {
    isOpen: t,
    onClose: n,
    headerId: f,
    bodyId: p,
    setBodyMounted: T,
    setHeaderMounted: y,
    dialogRef: u,
    overlayRef: c,
    getDialogProps: $,
    getDialogContainerProps: R,
    index: g,
  };
}
function kN(e, t) {
  const n = e.current;
  b.useEffect(() => {
    if (!(!e.current || !t)) return vN(e.current);
  }, [t, e, n]);
}
function CN(e, ...t) {
  const n = b.useId(),
    r = e || n;
  return b.useMemo(() => t.map((o) => `${o}-${r}`), [r, t]);
}
const [PN, $i] = Yt({
    name: "ModalStylesContext",
    errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `,
  }),
  [TN, ao] = Yt({
    strict: !0,
    name: "ModalContext",
    errorMessage:
      "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
  }),
  Qk = (e) => {
    const t = {
        scrollBehavior: "outside",
        autoFocus: !0,
        trapFocus: !0,
        returnFocusOnClose: !0,
        blockScrollOnMount: !0,
        allowPinchZoom: !1,
        preserveScrollBarGap: !0,
        motionPreset: "scale",
        ...e,
        lockFocusAcrossFrames: e.lockFocusAcrossFrames || !0,
      },
      {
        portalProps: n,
        children: r,
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: s,
        finalFocusRef: a,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: p,
        animatePresenceProps: g,
        onCloseComplete: v,
      } = t,
      x = xc("Modal", t),
      h = {
        ...wN(t),
        autoFocus: o,
        trapFocus: i,
        initialFocusRef: s,
        finalFocusRef: a,
        returnFocusOnClose: l,
        blockScrollOnMount: u,
        allowPinchZoom: c,
        preserveScrollBarGap: d,
        motionPreset: f,
        lockFocusAcrossFrames: p,
      };
    return w.jsx(TN, {
      value: h,
      children: w.jsx(PN, {
        value: x,
        children: w.jsx(wa, {
          ...g,
          onExitComplete: v,
          children: h.isOpen && w.jsx(ka, { ...n, children: r }),
        }),
      }),
    });
  };
Qk.displayName = "Modal";
var Wl = "right-scroll-bar-position",
  Ul = "width-before-scroll-bar",
  _N = "with-scroll-bars-hidden",
  EN = "--removed-body-scroll-bar-size",
  Zk = vk(),
  Zd = function () {},
  kc = b.forwardRef(function (e, t) {
    var n = b.useRef(null),
      r = b.useState({
        onScrollCapture: Zd,
        onWheelCapture: Zd,
        onTouchMoveCapture: Zd,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      a = e.children,
      l = e.className,
      u = e.removeScrollBar,
      c = e.enabled,
      d = e.shards,
      f = e.sideCar,
      p = e.noIsolation,
      g = e.inert,
      v = e.allowPinchZoom,
      x = e.as,
      m = x === void 0 ? "div" : x,
      h = e.gapMode,
      y = pk(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      k = f,
      T = hk([n, t]),
      $ = sn(sn({}, y), o);
    return b.createElement(
      b.Fragment,
      null,
      c &&
        b.createElement(k, {
          sideCar: Zk,
          removeScrollBar: u,
          shards: d,
          noIsolation: p,
          inert: g,
          setCallbacks: i,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: h,
        }),
      s
        ? b.cloneElement(b.Children.only(a), sn(sn({}, $), { ref: T }))
        : b.createElement(m, sn({}, $, { className: l, ref: T }), a)
    );
  });
kc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
kc.classNames = { fullWidth: Ul, zeroRight: Wl };
var $N = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function RN() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = $N();
  return t && e.setAttribute("nonce", t), e;
}
function AN(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function MN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var zN = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = RN()) && (AN(t, n), MN(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  IN = function () {
    var e = zN();
    return function (t, n) {
      b.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Jk = function () {
    var e = IN(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  FN = { left: 0, top: 0, right: 0, gap: 0 },
  Jd = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  jN = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Jd(n), Jd(r), Jd(o)];
  },
  ON = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return FN;
    var t = jN(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  LN = Jk(),
  ii = "data-scroll-locked",
  DN = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          _N,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          ii,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Wl,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Ul,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Wl, " .")
        .concat(
          Wl,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ul, " .")
        .concat(
          Ul,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          ii,
          `] {
    `
        )
        .concat(EN, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Ny = function () {
    var e = parseInt(document.body.getAttribute(ii) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  NN = function () {
    b.useEffect(function () {
      return (
        document.body.setAttribute(ii, (Ny() + 1).toString()),
        function () {
          var e = Ny() - 1;
          e <= 0
            ? document.body.removeAttribute(ii)
            : document.body.setAttribute(ii, e.toString());
        }
      );
    }, []);
  },
  BN = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    NN();
    var i = b.useMemo(
      function () {
        return ON(o);
      },
      [o]
    );
    return b.createElement(LN, { styles: DN(i, !t, o, n ? "" : "!important") });
  },
  Oh = !1;
if (typeof window < "u")
  try {
    var hl = Object.defineProperty({}, "passive", {
      get: function () {
        return (Oh = !0), !0;
      },
    });
    window.addEventListener("test", hl, hl),
      window.removeEventListener("test", hl, hl);
  } catch {
    Oh = !1;
  }
var So = Oh ? { passive: !1 } : !1,
  VN = function (e) {
    return e.tagName === "TEXTAREA";
  },
  eC = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !VN(e) && n[t] === "visible")
    );
  },
  WN = function (e) {
    return eC(e, "overflowY");
  },
  UN = function (e) {
    return eC(e, "overflowX");
  },
  By = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = tC(e, r);
      if (o) {
        var i = nC(e, r),
          s = i[1],
          a = i[2];
        if (s > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  HN = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  GN = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  tC = function (e, t) {
    return e === "v" ? WN(t) : UN(t);
  },
  nC = function (e, t) {
    return e === "v" ? HN(t) : GN(t);
  },
  KN = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  YN = function (e, t, n, r, o) {
    var i = KN(e, window.getComputedStyle(t).direction),
      s = i * r,
      a = n.target,
      l = t.contains(a),
      u = !1,
      c = s > 0,
      d = 0,
      f = 0;
    do {
      var p = nC(e, a),
        g = p[0],
        v = p[1],
        x = p[2],
        m = v - x - i * g;
      (g || m) && tC(e, a) && ((d += m), (f += g)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return (
      ((c && (Math.abs(d) < 1 || !o)) || (!c && (Math.abs(f) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  pl = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Vy = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Wy = function (e) {
    return e && "current" in e ? e.current : e;
  },
  XN = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  qN = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  QN = 0,
  xo = [];
function ZN(e) {
  var t = b.useRef([]),
    n = b.useRef([0, 0]),
    r = b.useRef(),
    o = b.useState(QN++)[0],
    i = b.useState(Jk)[0],
    s = b.useRef(e);
  b.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    b.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = eD([e.lockRef.current], (e.shards || []).map(Wy), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (x) {
              return x.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (x) {
                  return x.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = b.useCallback(function (v, x) {
      if (
        ("touches" in v && v.touches.length === 2) ||
        (v.type === "wheel" && v.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var m = pl(v),
        h = n.current,
        y = "deltaX" in v ? v.deltaX : h[0] - m[0],
        k = "deltaY" in v ? v.deltaY : h[1] - m[1],
        T,
        $ = v.target,
        E = Math.abs(y) > Math.abs(k) ? "h" : "v";
      if ("touches" in v && E === "h" && $.type === "range") return !1;
      var R = By(E, $);
      if (!R) return !0;
      if ((R ? (T = E) : ((T = E === "v" ? "h" : "v"), (R = By(E, $))), !R))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (y || k) && (r.current = T), !T)
      )
        return !0;
      var z = r.current || T;
      return YN(z, x, v, z === "h" ? y : k, !0);
    }, []),
    l = b.useCallback(function (v) {
      var x = v;
      if (!(!xo.length || xo[xo.length - 1] !== i)) {
        var m = "deltaY" in x ? Vy(x) : pl(x),
          h = t.current.filter(function (T) {
            return (
              T.name === x.type &&
              (T.target === x.target || x.target === T.shadowParent) &&
              XN(T.delta, m)
            );
          })[0];
        if (h && h.should) {
          x.cancelable && x.preventDefault();
          return;
        }
        if (!h) {
          var y = (s.current.shards || [])
              .map(Wy)
              .filter(Boolean)
              .filter(function (T) {
                return T.contains(x.target);
              }),
            k = y.length > 0 ? a(x, y[0]) : !s.current.noIsolation;
          k && x.cancelable && x.preventDefault();
        }
      }
    }, []),
    u = b.useCallback(function (v, x, m, h) {
      var y = { name: v, delta: x, target: m, should: h, shadowParent: JN(m) };
      t.current.push(y),
        setTimeout(function () {
          t.current = t.current.filter(function (k) {
            return k !== y;
          });
        }, 1);
    }, []),
    c = b.useCallback(function (v) {
      (n.current = pl(v)), (r.current = void 0);
    }, []),
    d = b.useCallback(function (v) {
      u(v.type, Vy(v), v.target, a(v, e.lockRef.current));
    }, []),
    f = b.useCallback(function (v) {
      u(v.type, pl(v), v.target, a(v, e.lockRef.current));
    }, []);
  b.useEffect(function () {
    return (
      xo.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, So),
      document.addEventListener("touchmove", l, So),
      document.addEventListener("touchstart", c, So),
      function () {
        (xo = xo.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", l, So),
          document.removeEventListener("touchmove", l, So),
          document.removeEventListener("touchstart", c, So);
      }
    );
  }, []);
  var p = e.removeScrollBar,
    g = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    g ? b.createElement(i, { styles: qN(o) }) : null,
    p ? b.createElement(BN, { gapMode: e.gapMode }) : null
  );
}
function JN(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const eB = tD(Zk, ZN);
var rC = b.forwardRef(function (e, t) {
  return b.createElement(kc, sn({}, e, { ref: t, sideCar: eB }));
});
rC.classNames = kc.classNames;
function tB(e) {
  const {
      autoFocus: t,
      trapFocus: n,
      dialogRef: r,
      initialFocusRef: o,
      blockScrollOnMount: i,
      allowPinchZoom: s,
      finalFocusRef: a,
      returnFocusOnClose: l,
      preserveScrollBarGap: u,
      lockFocusAcrossFrames: c,
      isOpen: d,
    } = ao(),
    [f, p] = Cw();
  b.useEffect(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const g = qk(r, d);
  return w.jsx(Uk, {
    autoFocus: t,
    isDisabled: !n,
    initialFocusRef: o,
    finalFocusRef: a,
    restoreFocus: l,
    contentRef: r,
    lockFocusAcrossFrames: c,
    children: w.jsx(rC, {
      removeScrollBar: !u,
      allowPinchZoom: s,
      enabled: g === 1 && i,
      forwardProps: !0,
      children: e.children,
    }),
  });
}
const nB = {
    initial: ({
      offsetX: e,
      offsetY: t,
      transition: n,
      transitionEnd: r,
      delay: o,
    }) => ({
      opacity: 0,
      x: e,
      y: t,
      transition: (n == null ? void 0 : n.exit) ?? qr.exit(Xr.exit, o),
      transitionEnd: r == null ? void 0 : r.exit,
    }),
    enter: ({ transition: e, transitionEnd: t, delay: n }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: (e == null ? void 0 : e.enter) ?? qr.enter(Xr.enter, n),
      transitionEnd: t == null ? void 0 : t.enter,
    }),
    exit: ({
      offsetY: e,
      offsetX: t,
      transition: n,
      transitionEnd: r,
      reverse: o,
      delay: i,
    }) => {
      const s = { x: t, y: e };
      return {
        opacity: 0,
        transition: (n == null ? void 0 : n.exit) ?? qr.exit(Xr.exit, i),
        ...(o
          ? { ...s, transitionEnd: r == null ? void 0 : r.exit }
          : { transitionEnd: { ...s, ...(r == null ? void 0 : r.exit) } }),
      };
    },
  },
  ls = { initial: "initial", animate: "enter", exit: "exit", variants: nB },
  rB = b.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        className: s,
        offsetX: a = 0,
        offsetY: l = 8,
        transition: u,
        transitionEnd: c,
        delay: d,
        animatePresenceProps: f,
        ...p
      } = t,
      g = r ? o && r : !0,
      v = o || r ? "enter" : "exit",
      x = {
        offsetX: a,
        offsetY: l,
        reverse: i,
        transition: u,
        transitionEnd: c,
        delay: d,
      };
    return w.jsx(wa, {
      ...f,
      custom: x,
      children:
        g &&
        w.jsx(_i.div, {
          ref: n,
          className: fe("chakra-offset-slide", s),
          custom: x,
          ...ls,
          animate: v,
          ...p,
        }),
    });
  });
rB.displayName = "SlideFade";
const oB = {
    exit: ({
      reverse: e,
      initialScale: t,
      transition: n,
      transitionEnd: r,
      delay: o,
    }) => ({
      opacity: 0,
      ...(e
        ? { scale: t, transitionEnd: r == null ? void 0 : r.exit }
        : { transitionEnd: { scale: t, ...(r == null ? void 0 : r.exit) } }),
      transition: (n == null ? void 0 : n.exit) ?? qr.exit(Xr.exit, o),
    }),
    enter: ({ transitionEnd: e, transition: t, delay: n }) => ({
      opacity: 1,
      scale: 1,
      transition: (t == null ? void 0 : t.enter) ?? qr.enter(Xr.enter, n),
      transitionEnd: e == null ? void 0 : e.enter,
    }),
  },
  oC = { initial: "exit", animate: "enter", exit: "exit", variants: oB },
  iB = b.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        reverse: i = !0,
        initialScale: s = 0.95,
        className: a,
        transition: l,
        transitionEnd: u,
        delay: c,
        animatePresenceProps: d,
        ...f
      } = t,
      p = r ? o && r : !0,
      g = o || r ? "enter" : "exit",
      v = {
        initialScale: s,
        reverse: i,
        transition: l,
        transitionEnd: u,
        delay: c,
      };
    return w.jsx(wa, {
      ...d,
      custom: v,
      children:
        p &&
        w.jsx(_i.div, {
          ref: n,
          className: fe("chakra-offset-slide", a),
          ...oC,
          animate: g,
          custom: v,
          ...f,
        }),
    });
  });
iB.displayName = "ScaleFade";
const sB = {
    slideInBottom: { ...ls, custom: { offsetY: 16, reverse: !0 } },
    slideInRight: { ...ls, custom: { offsetX: 16, reverse: !0 } },
    slideInTop: { ...ls, custom: { offsetY: -16, reverse: !0 } },
    slideInLeft: { ...ls, custom: { offsetX: -16, reverse: !0 } },
    scale: { ...oC, custom: { initialScale: 0.95, reverse: !0 } },
    none: {},
  },
  aB = H(_i.section),
  lB = (e) => sB[e || "none"],
  iC = b.forwardRef((e, t) => {
    const { preset: n, motionProps: r = lB(n), ...o } = e;
    return w.jsx(aB, { ref: t, ...r, ...o });
  });
iC.displayName = "ModalTransition";
const sC = ne((e, t) => {
  const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: i,
      ...s
    } = e,
    { getDialogProps: a, getDialogContainerProps: l } = ao(),
    u = a(s, t),
    c = l(o),
    d = fe("chakra-modal__content", n),
    f = $i(),
    p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...f.dialog,
    },
    g = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer,
    },
    { motionPreset: v } = ao();
  return w.jsx(tB, {
    children: w.jsx(H.div, {
      ...c,
      className: "chakra-modal__content-container",
      tabIndex: -1,
      __css: g,
      children: w.jsx(iC, {
        preset: v,
        motionProps: i,
        className: d,
        ...u,
        __css: p,
        children: r,
      }),
    }),
  });
});
sC.displayName = "ModalContent";
const aC = ne((e, t) => {
  const { className: n, ...r } = e,
    { bodyId: o, setBodyMounted: i } = ao();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const s = fe("chakra-modal__body", n),
    a = $i();
  return w.jsx(H.div, { ref: t, className: s, id: o, ...r, __css: a.body });
});
aC.displayName = "ModalBody";
const lC = ne((e, t) => {
  const { onClick: n, className: r, ...o } = e,
    { onClose: i } = ao(),
    s = fe("chakra-modal__close-btn", r),
    a = $i();
  return w.jsx(Dm, {
    ref: t,
    __css: a.closeButton,
    className: s,
    onClick: Nr(n, (l) => {
      l.stopPropagation(), i();
    }),
    ...o,
  });
});
lC.displayName = "ModalCloseButton";
const uC = ne((e, t) => {
  const { className: n, ...r } = e,
    o = fe("chakra-modal__footer", n),
    i = $i(),
    s = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...i.footer,
    };
  return w.jsx(H.footer, { ref: t, ...r, __css: s, className: o });
});
uC.displayName = "ModalFooter";
const cC = ne((e, t) => {
  const { className: n, ...r } = e,
    { headerId: o, setHeaderMounted: i } = ao();
  b.useEffect(() => (i(!0), () => i(!1)), [i]);
  const s = fe("chakra-modal__header", n),
    a = $i(),
    l = { flex: 0, ...a.header };
  return w.jsx(H.header, { ref: t, className: s, id: o, ...r, __css: l });
});
cC.displayName = "ModalHeader";
const uB = {
    enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => ({
      opacity: 1,
      transition: (e == null ? void 0 : e.enter) ?? qr.enter(Xr.enter, n),
      transitionEnd: t == null ? void 0 : t.enter,
    }),
    exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => ({
      opacity: 0,
      transition: (e == null ? void 0 : e.exit) ?? qr.exit(Xr.exit, n),
      transitionEnd: t == null ? void 0 : t.exit,
    }),
  },
  dC = { initial: "exit", animate: "enter", exit: "exit", variants: uB },
  cB = b.forwardRef(function (t, n) {
    const {
        unmountOnExit: r,
        in: o,
        className: i,
        transition: s,
        transitionEnd: a,
        delay: l,
        animatePresenceProps: u,
        ...c
      } = t,
      d = o || r ? "enter" : "exit",
      f = r ? o && r : !0,
      p = { transition: s, transitionEnd: a, delay: l };
    return w.jsx(wa, {
      ...u,
      custom: p,
      children:
        f &&
        w.jsx(_i.div, {
          ref: n,
          className: fe("chakra-fade", i),
          custom: p,
          ...dC,
          animate: d,
          ...c,
        }),
    });
  });
cB.displayName = "Fade";
const dB = H(_i.div),
  fC = ne((e, t) => {
    const { className: n, transition: r, motionProps: o, ...i } = e,
      s = fe("chakra-modal__overlay", n),
      l = {
        pos: "fixed",
        left: "0",
        top: "0",
        w: "100vw",
        h: "100vh",
        ...$i().overlay,
      },
      { motionPreset: u } = ao(),
      d = o || (u === "none" ? {} : dC);
    return w.jsx(dB, { ...d, __css: l, ref: t, className: s, ...i });
  });
fC.displayName = "ModalOverlay";
const hC = (e) =>
  w.jsx(H.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css,
    },
  });
hC.displayName = "StackItem";
function fB(e) {
  const { spacing: t, direction: n } = e,
    r = {
      column: { my: t, mx: 0, borderLeftWidth: 0, borderBottomWidth: "1px" },
      "column-reverse": {
        my: t,
        mx: 0,
        borderLeftWidth: 0,
        borderBottomWidth: "1px",
      },
      row: { mx: t, my: 0, borderLeftWidth: "1px", borderBottomWidth: 0 },
      "row-reverse": {
        mx: t,
        my: 0,
        borderLeftWidth: "1px",
        borderBottomWidth: 0,
      },
    };
  return { "&": Np(n, (o) => r[o]) };
}
const eg = ne((e, t) => {
  const {
      isInline: n,
      direction: r,
      align: o,
      justify: i,
      spacing: s = "0.5rem",
      wrap: a,
      children: l,
      divider: u,
      className: c,
      shouldWrapChildren: d,
      ...f
    } = e,
    p = n ? "row" : r ?? "column",
    g = b.useMemo(() => fB({ spacing: s, direction: p }), [s, p]),
    v = !!u,
    x = !d && !v,
    m = b.useMemo(() => {
      const y = x_(l);
      return x
        ? y
        : y.map((k, T) => {
            const $ = typeof k.key < "u" ? k.key : T,
              E = T + 1 === y.length,
              z = d ? w.jsx(hC, { children: k }, $) : k;
            if (!v) return z;
            const F = b.cloneElement(u, { __css: g }),
              oe = E ? null : F;
            return w.jsxs(b.Fragment, { children: [z, oe] }, $);
          });
    }, [u, g, v, x, d, l]),
    h = fe("chakra-stack", c);
  return w.jsx(H.div, {
    ref: t,
    display: "flex",
    alignItems: o,
    justifyContent: i,
    flexDirection: p,
    flexWrap: a,
    gap: v ? void 0 : s,
    className: h,
    ...f,
    children: m,
  });
});
eg.displayName = "Stack";
const tg = ne((e, t) =>
  w.jsx(eg, { align: "center", ...e, direction: "row", ref: t })
);
tg.displayName = "HStack";
const aa = ne((e, t) =>
  w.jsx(eg, { align: "center", ...e, direction: "column", ref: t })
);
aa.displayName = "VStack";
function hB(e, t) {
  const n = e ?? "bottom",
    o = {
      "top-start": { ltr: "top-left", rtl: "top-right" },
      "top-end": { ltr: "top-right", rtl: "top-left" },
      "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
      "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" },
    }[n];
  return (o == null ? void 0 : o[t]) ?? n;
}
function pB(e, t) {
  const n = (o) => ({
      ...t,
      ...o,
      position: hB(
        (o == null ? void 0 : o.position) ?? (t == null ? void 0 : t.position),
        e
      ),
    }),
    r = (o) => {
      const i = n(o),
        s = lk(i);
      return on.notify(s, i);
    };
  return (
    (r.update = (o, i) => {
      on.update(o, n(i));
    }),
    (r.promise = (o, i) => {
      const s = r({ ...i.loading, status: "loading", duration: null });
      o.then((a) =>
        r.update(s, { status: "success", duration: 5e3, ...At(i.success, a) })
      ).catch((a) =>
        r.update(s, { status: "error", duration: 5e3, ...At(i.error, a) })
      );
    }),
    (r.closeAll = on.closeAll),
    (r.close = on.close),
    (r.isActive = on.isActive),
    r
  );
}
function pC(e) {
  const { theme: t } = tk(),
    n = ML();
  return b.useMemo(() => pB(t.direction, { ...n, ...e }), [e, t.direction, n]);
}
const ng = ne(function (t, n) {
  const r = fo("Heading", t),
    { className: o, ...i } = Bn(t);
  return w.jsx(H.h2, {
    ref: n,
    className: fe("chakra-heading", t.className),
    ...i,
    __css: r,
  });
});
ng.displayName = "Heading";
const si = ne(function (t, n) {
  const r = fo("Text", t),
    { className: o, align: i, decoration: s, casing: a, ...l } = Bn(t),
    u = Lp({
      textAlign: t.align,
      textDecoration: t.decoration,
      textTransform: t.casing,
    });
  return w.jsx(H.p, {
    ref: n,
    className: fe("chakra-text", t.className),
    ...u,
    ...l,
    __css: r,
  });
});
si.displayName = "Text";
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function la() {
  return (
    (la = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    la.apply(this, arguments)
  );
}
var or;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(or || (or = {}));
const Uy = "popstate";
function mB(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: a } = r.location;
    return Lh(
      "",
      { pathname: i, search: s, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Au(o);
  }
  return vB(t, n, null, e);
}
function Ee(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function mC(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function gB() {
  return Math.random().toString(36).substr(2, 8);
}
function Hy(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Lh(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    la(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Ri(t) : t,
      { state: n, key: (t && t.key) || r || gB() }
    )
  );
}
function Au(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Ri(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function vB(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    a = or.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(la({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = or.Pop;
    let x = c(),
      m = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: v.location, delta: m });
  }
  function f(x, m) {
    a = or.Push;
    let h = Lh(v.location, x, m);
    u = c() + 1;
    let y = Hy(h, u),
      k = v.createHref(h);
    try {
      s.pushState(y, "", k);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      o.location.assign(k);
    }
    i && l && l({ action: a, location: v.location, delta: 1 });
  }
  function p(x, m) {
    a = or.Replace;
    let h = Lh(v.location, x, m);
    u = c();
    let y = Hy(h, u),
      k = v.createHref(h);
    s.replaceState(y, "", k),
      i && l && l({ action: a, location: v.location, delta: 0 });
  }
  function g(x) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof x == "string" ? x : Au(x);
    return (
      (h = h.replace(/ $/, "%20")),
      Ee(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, m)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Uy, d),
        (l = x),
        () => {
          o.removeEventListener(Uy, d), (l = null);
        }
      );
    },
    createHref(x) {
      return t(o, x);
    },
    createURL: g,
    encodeLocation(x) {
      let m = g(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: p,
    go(x) {
      return s.go(x);
    },
  };
  return v;
}
var Gy;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Gy || (Gy = {}));
function yB(e, t, n) {
  return n === void 0 && (n = "/"), bB(e, t, n, !1);
}
function bB(e, t, n, r) {
  let o = typeof t == "string" ? Ri(t) : t,
    i = rg(o.pathname || "/", n);
  if (i == null) return null;
  let s = gC(e);
  SB(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = AB(i);
    a = $B(s[l], u, r);
  }
  return a;
}
function gC(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (Ee(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = pr([r, l.relativePath]),
      c = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Ee(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      gC(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: _B(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, s) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
      else for (let l of vC(i.path)) o(i, s, l);
    }),
    t
  );
}
function vC(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = vC(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? i : [i, l].join("/")))),
    o && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function SB(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : EB(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const xB = /^:[\w-]+$/,
  wB = 3,
  kB = 2,
  CB = 1,
  PB = 10,
  TB = -2,
  Ky = (e) => e === "*";
function _B(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Ky) && (r += TB),
    t && (r += kB),
    n
      .filter((o) => !Ky(o))
      .reduce((o, i) => o + (xB.test(i) ? wB : i === "" ? CB : PB), r)
  );
}
function EB(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function $B(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = i === "/" ? t : t.slice(i.length) || "/",
      d = Yy(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Yy(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(o, d.params),
      s.push({
        params: o,
        pathname: pr([i, d.pathname]),
        pathnameBase: FB(pr([i, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (i = pr([i, d.pathnameBase]));
  }
  return s;
}
function Yy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = RB(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: p } = c;
      if (f === "*") {
        let v = a[d] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const g = a[d];
      return (
        p && !g ? (u[f] = void 0) : (u[f] = (g || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function RB(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    mC(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function AB(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      mC(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function rg(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function MB(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Ri(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : zB(n, t)) : t,
    search: jB(r),
    hash: OB(o),
  };
}
function zB(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ef(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function IB(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function yC(e, t) {
  let n = IB(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function bC(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Ri(e))
    : ((o = la({}, e)),
      Ee(
        !o.pathname || !o.pathname.includes("?"),
        ef("?", "pathname", "search", o)
      ),
      Ee(
        !o.pathname || !o.pathname.includes("#"),
        ef("#", "pathname", "hash", o)
      ),
      Ee(!o.search || !o.search.includes("#"), ef("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    a;
  if (s == null) a = n;
  else {
    let d = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; ) f.shift(), (d -= 1);
      o.pathname = f.join("/");
    }
    a = d >= 0 ? t[d] : "/";
  }
  let l = MB(o, a),
    u = s && s !== "/" && s.endsWith("/"),
    c = (i || s === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const pr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  FB = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  jB = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  OB = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function LB(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const SC = ["post", "put", "patch", "delete"];
new Set(SC);
const DB = ["get", ...SC];
new Set(DB);
/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ua() {
  return (
    (ua = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ua.apply(this, arguments)
  );
}
const og = b.createContext(null),
  NB = b.createContext(null),
  ho = b.createContext(null),
  Cc = b.createContext(null),
  po = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xC = b.createContext(null);
function BB(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Ca() || Ee(!1);
  let { basename: r, navigator: o } = b.useContext(ho),
    { hash: i, pathname: s, search: a } = kC(e, { relative: n }),
    l = s;
  return (
    r !== "/" && (l = s === "/" ? r : pr([r, s])),
    o.createHref({ pathname: l, search: a, hash: i })
  );
}
function Ca() {
  return b.useContext(Cc) != null;
}
function Pc() {
  return Ca() || Ee(!1), b.useContext(Cc).location;
}
function wC(e) {
  b.useContext(ho).static || b.useLayoutEffect(e);
}
function VB() {
  let { isDataRoute: e } = b.useContext(po);
  return e ? t6() : WB();
}
function WB() {
  Ca() || Ee(!1);
  let e = b.useContext(og),
    { basename: t, future: n, navigator: r } = b.useContext(ho),
    { matches: o } = b.useContext(po),
    { pathname: i } = Pc(),
    s = JSON.stringify(yC(o, n.v7_relativeSplatPath)),
    a = b.useRef(!1);
  return (
    wC(() => {
      a.current = !0;
    }),
    b.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = bC(u, JSON.parse(s), i, c.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : pr([t, d.pathname])),
          (c.replace ? r.replace : r.push)(d, c.state, c);
      },
      [t, r, s, i, e]
    )
  );
}
function kC(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = b.useContext(ho),
    { matches: o } = b.useContext(po),
    { pathname: i } = Pc(),
    s = JSON.stringify(yC(o, r.v7_relativeSplatPath));
  return b.useMemo(() => bC(e, JSON.parse(s), i, n === "path"), [e, s, i, n]);
}
function UB(e, t) {
  return HB(e, t);
}
function HB(e, t, n, r) {
  Ca() || Ee(!1);
  let { navigator: o } = b.useContext(ho),
    { matches: i } = b.useContext(po),
    s = i[i.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Pc(),
    c;
  if (t) {
    var d;
    let x = typeof t == "string" ? Ri(t) : t;
    l === "/" || ((d = x.pathname) != null && d.startsWith(l)) || Ee(!1),
      (c = x);
  } else c = u;
  let f = c.pathname || "/",
    p = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    p = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let g = yB(e, { pathname: p }),
    v = qB(
      g &&
        g.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: pr([
              l,
              o.encodeLocation
                ? o.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : pr([
                    l,
                    o.encodeLocation
                      ? o.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? b.createElement(
        Cc.Provider,
        {
          value: {
            location: ua(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: or.Pop,
          },
        },
        v
      )
    : v;
}
function GB() {
  let e = e6(),
    t = LB(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? b.createElement("pre", { style: o }, n) : null,
    null
  );
}
const KB = b.createElement(GB, null);
class YB extends b.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          po.Provider,
          { value: this.props.routeContext },
          b.createElement(xC.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function XB(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = b.useContext(og);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(po.Provider, { value: t }, r)
  );
}
function qB(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || Ee(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: p } = n,
          g =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!p || p[d.route.id] === void 0);
        if (d.route.lazy || g) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let p,
      g = !1,
      v = null,
      x = null;
    n &&
      ((p = a && d.route.id ? a[d.route.id] : void 0),
      (v = d.route.errorElement || KB),
      l &&
        (u < 0 && f === 0
          ? ((g = !0), (x = null))
          : u === f &&
            ((g = !0), (x = d.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, f + 1)),
      h = () => {
        let y;
        return (
          p
            ? (y = v)
            : g
            ? (y = x)
            : d.route.Component
            ? (y = b.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          b.createElement(XB, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? b.createElement(YB, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var CC = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(CC || {}),
  Mu = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Mu || {});
function QB(e) {
  let t = b.useContext(og);
  return t || Ee(!1), t;
}
function ZB(e) {
  let t = b.useContext(NB);
  return t || Ee(!1), t;
}
function JB(e) {
  let t = b.useContext(po);
  return t || Ee(!1), t;
}
function PC(e) {
  let t = JB(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ee(!1), n.route.id;
}
function e6() {
  var e;
  let t = b.useContext(xC),
    n = ZB(Mu.UseRouteError),
    r = PC(Mu.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function t6() {
  let { router: e } = QB(CC.UseNavigateStable),
    t = PC(Mu.UseNavigateStable),
    n = b.useRef(!1);
  return (
    wC(() => {
      n.current = !0;
    }),
    b.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ua({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const Xy = {};
function n6(e, t) {
  Xy[t] || ((Xy[t] = !0), console.warn(t));
}
const qy = (e, t, n) =>
  n6(
    e,
    "⚠️ React Router Future Flag Warning: " +
      t +
      ". " +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + n + ".")
  );
function r6(e, t) {
  (e != null && e.v7_startTransition) ||
    qy(
      "v7_startTransition",
      "React Router will begin wrapping state updates in `React.startTransition` in v7",
      "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
    ),
    !(e != null && e.v7_relativeSplatPath) &&
      !t &&
      qy(
        "v7_relativeSplatPath",
        "Relative route resolution within Splat routes is changing in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
      );
}
function Hl(e) {
  Ee(!1);
}
function o6(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = or.Pop,
    navigator: i,
    static: s = !1,
    future: a,
  } = e;
  Ca() && Ee(!1);
  let l = t.replace(/^\/*/, "/"),
    u = b.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: s,
        future: ua({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, s]
    );
  typeof r == "string" && (r = Ri(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: p = null,
      key: g = "default",
    } = r,
    v = b.useMemo(() => {
      let x = rg(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: p, key: g },
            navigationType: o,
          };
    }, [l, c, d, f, p, g, o]);
  return v == null
    ? null
    : b.createElement(
        ho.Provider,
        { value: u },
        b.createElement(Cc.Provider, { children: n, value: v })
      );
}
function i6(e) {
  let { children: t, location: n } = e;
  return UB(Dh(t), n);
}
new Promise(() => {});
function Dh(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    b.Children.forEach(e, (r, o) => {
      if (!b.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === b.Fragment) {
        n.push.apply(n, Dh(r.props.children, i));
        return;
      }
      r.type !== Hl && Ee(!1), !r.props.index || !r.props.children || Ee(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Dh(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nh() {
  return (
    (Nh = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nh.apply(this, arguments)
  );
}
function s6(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function a6(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function l6(e, t) {
  return e.button === 0 && (!t || t === "_self") && !a6(e);
}
const u6 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  c6 = "6";
try {
  window.__reactRouterVersion = c6;
} catch {}
const d6 = "startTransition",
  Qy = nf[d6];
function f6(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = b.useRef();
  i.current == null && (i.current = mB({ window: o, v5Compat: !0 }));
  let s = i.current,
    [a, l] = b.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = b.useCallback(
      (d) => {
        u && Qy ? Qy(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    b.useLayoutEffect(() => s.listen(c), [s, c]),
    b.useEffect(() => r6(r), [r]),
    b.createElement(o6, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
const h6 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  p6 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Bh = b.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: s,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: d,
      } = t,
      f = s6(t, u6),
      { basename: p } = b.useContext(ho),
      g,
      v = !1;
    if (typeof u == "string" && p6.test(u) && ((g = u), h6))
      try {
        let y = new URL(window.location.href),
          k = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          T = rg(k.pathname, p);
        k.origin === y.origin && T != null
          ? (u = T + k.search + k.hash)
          : (v = !0);
      } catch {}
    let x = BB(u, { relative: o }),
      m = m6(u, {
        replace: s,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: o,
        viewTransition: d,
      });
    function h(y) {
      r && r(y), y.defaultPrevented || m(y);
    }
    return b.createElement(
      "a",
      Nh({}, f, { href: g || x, onClick: v || i ? r : h, ref: n, target: l })
    );
  });
var Zy;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Zy || (Zy = {}));
var Jy;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Jy || (Jy = {}));
function m6(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: s,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = VB(),
    u = Pc(),
    c = kC(e, { relative: s });
  return b.useCallback(
    (d) => {
      if (l6(d, n)) {
        d.preventDefault();
        let f = r !== void 0 ? r : Au(u) === Au(c);
        l(e, {
          replace: f,
          state: o,
          preventScrollReset: i,
          relative: s,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, o, n, e, i, s, a]
  );
}
const g6 = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  e1 = (e) => {
    let t;
    const n = new Set(),
      r = (c, d) => {
        const f = typeof c == "function" ? c(t) : c;
        if (!Object.is(f, t)) {
          const p = t;
          (t =
            d ?? (typeof f != "object" || f === null)
              ? f
              : Object.assign({}, t, f)),
            n.forEach((g) => g(t, p));
        }
      },
      o = () => t,
      l = {
        setState: r,
        getState: o,
        getInitialState: () => u,
        subscribe: (c) => (n.add(c), () => n.delete(c)),
        destroy: () => {
          (g6 ? "production" : void 0) !== "production" &&
            console.warn(
              "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
            ),
            n.clear();
        },
      },
      u = (t = e(r, o, l));
    return l;
  },
  v6 = (e) => (e ? e1(e) : e1);
var TC = { exports: {} },
  _C = {},
  EC = { exports: {} },
  $C = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xi = b;
function y6(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var b6 = typeof Object.is == "function" ? Object.is : y6,
  S6 = xi.useState,
  x6 = xi.useEffect,
  w6 = xi.useLayoutEffect,
  k6 = xi.useDebugValue;
function C6(e, t) {
  var n = t(),
    r = S6({ inst: { value: n, getSnapshot: t } }),
    o = r[0].inst,
    i = r[1];
  return (
    w6(
      function () {
        (o.value = n), (o.getSnapshot = t), tf(o) && i({ inst: o });
      },
      [e, n, t]
    ),
    x6(
      function () {
        return (
          tf(o) && i({ inst: o }),
          e(function () {
            tf(o) && i({ inst: o });
          })
        );
      },
      [e]
    ),
    k6(n),
    n
  );
}
function tf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !b6(e, n);
  } catch {
    return !0;
  }
}
function P6(e, t) {
  return t();
}
var T6 =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? P6
    : C6;
$C.useSyncExternalStore =
  xi.useSyncExternalStore !== void 0 ? xi.useSyncExternalStore : T6;
EC.exports = $C;
var _6 = EC.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc = b,
  E6 = _6;
function $6(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var R6 = typeof Object.is == "function" ? Object.is : $6,
  A6 = E6.useSyncExternalStore,
  M6 = Tc.useRef,
  z6 = Tc.useEffect,
  I6 = Tc.useMemo,
  F6 = Tc.useDebugValue;
_C.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = M6(null);
  if (i.current === null) {
    var s = { hasValue: !1, value: null };
    i.current = s;
  } else s = i.current;
  i = I6(
    function () {
      function l(p) {
        if (!u) {
          if (((u = !0), (c = p), (p = r(p)), o !== void 0 && s.hasValue)) {
            var g = s.value;
            if (o(g, p)) return (d = g);
          }
          return (d = p);
        }
        if (((g = d), R6(c, p))) return g;
        var v = r(p);
        return o !== void 0 && o(g, v) ? g : ((c = p), (d = v));
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n;
      return [
        function () {
          return l(t());
        },
        f === null
          ? void 0
          : function () {
              return l(f());
            },
      ];
    },
    [t, n, r, o]
  );
  var a = A6(e, i[0], i[1]);
  return (
    z6(
      function () {
        (s.hasValue = !0), (s.value = a);
      },
      [a]
    ),
    F6(a),
    a
  );
};
TC.exports = _C;
var j6 = TC.exports;
const O6 = Fu(j6),
  RC = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
  { useDebugValue: L6 } = Ut,
  { useSyncExternalStoreWithSelector: D6 } = O6;
let t1 = !1;
const N6 = (e) => e;
function B6(e, t = N6, n) {
  (RC ? "production" : void 0) !== "production" &&
    n &&
    !t1 &&
    (console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    ),
    (t1 = !0));
  const r = D6(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return L6(r), r;
}
const n1 = (e) => {
    (RC ? "production" : void 0) !== "production" &&
      typeof e != "function" &&
      console.warn(
        "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
      );
    const t = typeof e == "function" ? v6(e) : e,
      n = (r, o) => B6(t, r, o);
    return Object.assign(n, t), n;
  },
  V6 = (e) => (e ? n1(e) : n1),
  ig = V6((e) => ({
    products: [],
    setProducts: (t) => e({ products: t }),
    createProduct: async (t) => {
      if (!t.name || !t.image || !t.price)
        return { success: !1, message: "Please fill in all fields." };
      const r = await (
        await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(t),
        })
      ).json();
      return (
        e((o) => ({ products: [...o.products, r.data] })),
        { success: !0, message: "Product created successfully" }
      );
    },
    fetchProducts: async (t) => {
      const r = await (await fetch("/api/products")).json();
      e({ products: r.data });
    },
    deleteProduct: async (t) => {
      const r = await (
        await fetch(`api/products/${t}`, { method: "DELETE" })
      ).json();
      return r.success
        ? (e((o) => ({ products: o.products.filter((i) => i._id !== t) })),
          { success: !0, message: r.message })
        : { success: !1, message: r.message };
    },
    updateProduct: async (t, n) => {
      const o = await (
        await fetch(`/api/products/${t}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(n),
        })
      ).json();
      return o.success
        ? (e((i) => ({
            products: i.products.map((s) => (s._id === t ? o.data : s)),
          })),
          { success: !0, message: o.message })
        : { success: !1, message: o.message };
    },
  })),
  W6 = Kk({
    displayName: "DeleteIcon",
    path: w.jsx("g", {
      fill: "currentColor",
      children: w.jsx("path", {
        d: "M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z",
      }),
    }),
  }),
  U6 = Kk({
    displayName: "EditIcon",
    path: w.jsxs("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeWidth: "2",
      children: [
        w.jsx("path", {
          d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
        }),
        w.jsx("path", {
          d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
        }),
      ],
    }),
  }),
  H6 = ({ product: e }) => {
    const [t, n] = b.useState(e),
      r = wu("gray.600", "gray.200"),
      o = wu("white", "gray.800"),
      i = pC(),
      { deleteProduct: s, updateProduct: a } = ig(),
      { isOpen: l, onOpen: u, onClose: c } = j_(),
      d = async (p) => {
        const { success: g, message: v } = await s(p);
        i(
          g
            ? {
                title: "Success",
                description: v,
                status: "success",
                duration: 3e3,
                isClosable: !0,
              }
            : {
                title: "Error",
                description: v,
                status: "error",
                duration: 3e3,
                isClosable: !0,
              }
        );
      },
      f = async (p, g) => {
        const { success: v, message: x } = await a(p, g);
        c(),
          i(
            v
              ? {
                  title: "Success",
                  description: "Product updated Successfully",
                  status: "success",
                  duration: 3e3,
                  isClosable: !0,
                  position: "top",
                }
              : {
                  title: "Error",
                  description: x,
                  status: "error",
                  duration: 3e3,
                  isClosable: !0,
                  position: "top",
                }
          );
      };
    return w.jsxs(na, {
      shadow: "lg",
      rounded: "lg",
      overflow: "hidden",
      transition: "all 0.3s",
      _hover: { transform: "translateY(-5px", shadow: "xl" },
      bg: o,
      children: [
        w.jsx(Yk, {
          src: e.image,
          alt: e.name,
          h: 48,
          w: "full",
          objectFit: "cover",
        }),
        w.jsxs(na, {
          p: 4,
          children: [
            w.jsx(ng, { as: "h3", size: "md", mb: 2, children: e.name }),
            w.jsxs(si, {
              fontWeight: "bold",
              fontSize: "xl",
              color: r,
              mb: 4,
              children: ["$", e.price],
            }),
            w.jsxs(tg, {
              spacing: 2,
              children: [
                w.jsx(Eh, {
                  icon: w.jsx(U6, {}),
                  onClick: u,
                  colorScheme: "blue",
                }),
                w.jsx(Eh, {
                  icon: w.jsx(W6, {}),
                  onClick: () => d(e._id),
                  colorScheme: "red",
                }),
              ],
            }),
          ],
        }),
        w.jsxs(Qk, {
          isOpen: l,
          onClose: c,
          children: [
            w.jsx(fC, {}),
            w.jsxs(sC, {
              children: [
                w.jsx(cC, { children: "Update Product" }),
                w.jsx(lC, {}),
                w.jsx(aC, {
                  children: w.jsxs(aa, {
                    spacing: 4,
                    children: [
                      w.jsx(hr, {
                        placeholder: "Product Name",
                        name: "name",
                        value: t.name,
                        onChange: (p) => n({ ...t, name: p.target.value }),
                      }),
                      w.jsx(hr, {
                        placeholder: "Price",
                        name: "price",
                        type: "number",
                        value: t.price,
                        onChange: (p) => n({ ...t, price: p.target.value }),
                      }),
                      w.jsx(hr, {
                        placeholder: "Image URL",
                        name: "image",
                        value: t.image,
                        onChange: (p) => n({ ...t, image: p.target.value }),
                      }),
                    ],
                  }),
                }),
                w.jsxs(uC, {
                  children: [
                    w.jsx(io, {
                      colorScheme: "blue",
                      mr: 3,
                      onClick: () => f(e._id, t),
                      children: "Update",
                    }),
                    w.jsx(io, {
                      variant: "ghost",
                      onClick: c,
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  G6 = () => {
    const { fetchProducts: e, products: t } = ig();
    return (
      b.useEffect(() => {
        e();
      }, [e]),
      console.log("products", t),
      w.jsx(wc, {
        maxW: "container-xl",
        py: 12,
        children: w.jsxs(aa, {
          spacing: 8,
          children: [
            w.jsx(si, {
              fontSize: "30",
              fontWeight: "bold",
              bgGradient: "linear(to-r, cyan.400, blue.500)",
              bgClip: "text",
              textAlign: "center",
              children: "My Products",
            }),
            w.jsx(Gk, {
              columns: { base: 1, md: 2, lg: 3 },
              spacing: 10,
              w: "full",
              children: t.map((n) => w.jsx(H6, { product: n }, n._id)),
            }),
            t.length === 0 &&
              w.jsxs(si, {
                fontSize: "xl",
                textAlign: "center",
                fontWeight: "bold",
                color: "gray.500",
                children: [
                  "No Products Found 😢",
                  " ",
                  w.jsx(Bh, {
                    to: "/create",
                    children: w.jsx(si, {
                      as: "span",
                      color: "blue.500",
                      _hover: { textDecoration: "underline" },
                      children: "Create a Product",
                    }),
                  }),
                ],
              }),
          ],
        }),
      })
    );
  };
var AC = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  r1 = Ut.createContext && Ut.createContext(AC),
  K6 = ["attr", "size", "title"];
function Y6(e, t) {
  if (e == null) return {};
  var n = X6(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function X6(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function zu() {
  return (
    (zu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    zu.apply(this, arguments)
  );
}
function o1(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Iu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? o1(Object(n), !0).forEach(function (r) {
          q6(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : o1(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function q6(e, t, n) {
  return (
    (t = Q6(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Q6(e) {
  var t = Z6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Z6(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function MC(e) {
  return (
    e &&
    e.map((t, n) =>
      Ut.createElement(t.tag, Iu({ key: n }, t.attr), MC(t.child))
    )
  );
}
function sg(e) {
  return (t) =>
    Ut.createElement(J6, zu({ attr: Iu({}, e.attr) }, t), MC(e.child));
}
function J6(e) {
  var t = (n) => {
    var { attr: r, size: o, title: i } = e,
      s = Y6(e, K6),
      a = o || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      Ut.createElement(
        "svg",
        zu(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: Iu(Iu({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && Ut.createElement("title", null, i),
        e.children
      )
    );
  };
  return r1 !== void 0
    ? Ut.createElement(r1.Consumer, null, (n) => t(n))
    : t(AC);
}
function eV(e) {
  return sg({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "12", cy: "12", r: "4" }, child: [] },
      { tag: "path", attr: { d: "M12 2v2" }, child: [] },
      { tag: "path", attr: { d: "M12 20v2" }, child: [] },
      { tag: "path", attr: { d: "m4.93 4.93 1.41 1.41" }, child: [] },
      { tag: "path", attr: { d: "m17.66 17.66 1.41 1.41" }, child: [] },
      { tag: "path", attr: { d: "M2 12h2" }, child: [] },
      { tag: "path", attr: { d: "M20 12h2" }, child: [] },
      { tag: "path", attr: { d: "m6.34 17.66-1.41 1.41" }, child: [] },
      { tag: "path", attr: { d: "m19.07 4.93-1.41 1.41" }, child: [] },
    ],
  })(e);
}
function tV(e) {
  return sg({
    tag: "svg",
    attr: { viewBox: "0 0 24 24", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6Z",
          fill: "currentColor",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V19Z",
          fill: "currentColor",
        },
        child: [],
      },
    ],
  })(e);
}
function nV(e) {
  return sg({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z",
        },
        child: [],
      },
    ],
  })(e);
}
const rV = () => {
    const { colorMode: e, toggleColorMode: t } = va();
    return w.jsx(wc, {
      maxW: "1140px",
      px: 4,
      children: w.jsxs(dk, {
        h: 16,
        alignItems: "center",
        justifyContent: "space-between",
        flexDir: { base: "column", sm: "row" },
        children: [
          w.jsx(si, {
            fontSize: { base: "22", sm: "28" },
            fontWeight: "bold",
            textTransform: "uppercase",
            textAlign: "center",
            bgGradient: "linear(to-r, cyan.400, blue.500)",
            bgClip: "text",
            children: w.jsx(Bh, { to: "/", children: "Product Store 🛒" }),
          }),
          w.jsxs(tg, {
            spacing: 2,
            alignItems: "center",
            children: [
              w.jsx(Bh, {
                to: "/create",
                children: w.jsx(io, { children: w.jsx(tV, { fontSize: 20 }) }),
              }),
              w.jsx(io, {
                onClick: t,
                children:
                  e === "light"
                    ? w.jsx(nV, { size: "20" })
                    : w.jsx(eV, { size: "20" }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  oV = () => {
    const [e, t] = b.useState({ name: "", price: "", image: "" }),
      n = pC(),
      { createProduct: r } = ig(),
      o = async () => {
        const { success: i, message: s } = await r(e);
        n(
          i
            ? {
                title: "Success",
                description: s,
                status: "success",
                isClosable: !0,
              }
            : {
                title: "Error",
                description: s,
                status: "error",
                duration: 5e3,
                isClosable: !0,
              }
        ),
          t({ name: "", price: "", image: "" });
      };
    return w.jsx(wc, {
      maxW: "container.sm",
      children: w.jsxs(aa, {
        children: [
          w.jsx(ng, {
            as: "h1",
            size: "2xl",
            textAlign: "center",
            mb: 8,
            children: "Create New Product",
          }),
          w.jsx(na, {
            w: "full",
            bg: wu("white", "gray.800"),
            p: 6,
            rounded: "lg",
            shadow: "md",
            children: w.jsxs(aa, {
              spacing: 4,
              children: [
                w.jsx(hr, {
                  placeholder: "Product Name",
                  name: "name",
                  value: e.name,
                  onChange: (i) => t({ ...e, name: i.target.value }),
                }),
                w.jsx(hr, {
                  placeholder: "Price",
                  name: "price",
                  type: "number",
                  value: e.price,
                  onChange: (i) => t({ ...e, price: i.target.value }),
                }),
                w.jsx(hr, {
                  placeholder: "Image URL",
                  name: "image",
                  value: e.image,
                  onChange: (i) => t({ ...e, image: i.target.value }),
                }),
                w.jsx(io, {
                  colorScheme: "blue",
                  onClick: o,
                  w: "full",
                  children: "Add Product",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  };
function iV() {
  return w.jsxs(na, {
    minH: "100vh",
    bg: wu("gray.100", "gray.900"),
    children: [
      w.jsx(rV, {}),
      w.jsxs(i6, {
        children: [
          w.jsx(Hl, { path: "/", element: w.jsx(G6, {}) }),
          w.jsx(Hl, { path: "/create", element: w.jsx(oV, {}) }),
          w.jsx(Hl, {}),
        ],
      }),
    ],
  });
}
rf.createRoot(document.getElementById("root")).render(
  w.jsx(Ut.StrictMode, {
    children: w.jsx(f6, { children: w.jsx(FL, { children: w.jsx(iV, {}) }) }),
  })
);
