function sm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
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
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function am(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Jc = { exports: {} },
  _l = {},
  qc = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var so = Symbol.for("react.element"),
  um = Symbol.for("react.portal"),
  cm = Symbol.for("react.fragment"),
  dm = Symbol.for("react.strict_mode"),
  fm = Symbol.for("react.profiler"),
  pm = Symbol.for("react.provider"),
  mm = Symbol.for("react.context"),
  hm = Symbol.for("react.forward_ref"),
  gm = Symbol.for("react.suspense"),
  ym = Symbol.for("react.memo"),
  vm = Symbol.for("react.lazy"),
  lu = Symbol.iterator;
function xm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ed = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  td = Object.assign,
  nd = {};
function cr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nd),
    (this.updater = n || ed);
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rd() {}
rd.prototype = cr.prototype;
function Ws(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nd),
    (this.updater = n || ed);
}
var Ks = (Ws.prototype = new rd());
Ks.constructor = Ws;
td(Ks, cr.prototype);
Ks.isPureReactComponent = !0;
var iu = Array.isArray,
  od = Object.prototype.hasOwnProperty,
  Qs = { current: null },
  ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function id(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      od.call(t, r) && !ld.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: so,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Qs.current,
  };
}
function Sm(e, t) {
  return {
    $$typeof: so,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === so;
}
function wm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var su = /\/+/g;
function gi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? wm("" + e.key)
    : t.toString(36);
}
function Fo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case so:
          case um:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + gi(i, 0) : r),
      iu(o)
        ? ((n = ""),
          e != null && (n = e.replace(su, "$&/") + "/"),
          Fo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Gs(o) &&
            (o = Sm(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(su, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), iu(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var a = r + gi(l, s);
      i += Fo(l, t, n, a, o);
    }
  else if (((a = xm(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + gi(l, s++)), (i += Fo(l, t, n, a, o));
  else if (l === "object")
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
  return i;
}
function vo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Fo(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function km(e) {
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
var $e = { current: null },
  bo = { transition: null },
  Cm = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: bo,
    ReactCurrentOwner: Qs,
  };
L.Children = {
  map: vo,
  forEach: function (e, t, n) {
    vo(
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
      vo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = cr;
L.Fragment = cm;
L.Profiler = fm;
L.PureComponent = Ws;
L.StrictMode = dm;
L.Suspense = gm;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cm;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = td({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Qs.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      od.call(t, a) &&
        !ld.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: so, type: e.type, key: o, ref: l, props: r, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: mm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: pm, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = id;
L.createFactory = function (e) {
  var t = id.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: hm, render: e };
};
L.isValidElement = Gs;
L.lazy = function (e) {
  return { $$typeof: vm, _payload: { _status: -1, _result: e }, _init: km };
};
L.memo = function (e, t) {
  return { $$typeof: ym, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = bo.transition;
  bo.transition = {};
  try {
    e();
  } finally {
    bo.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return $e.current.useCallback(e, t);
};
L.useContext = function (e) {
  return $e.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return $e.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return $e.current.useEffect(e, t);
};
L.useId = function () {
  return $e.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return $e.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return $e.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return $e.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return $e.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return $e.current.useRef(e);
};
L.useState = function (e) {
  return $e.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return $e.current.useTransition();
};
L.version = "18.2.0";
qc.exports = L;
var T = qc.exports;
const ze = am(T),
  au = sm({ __proto__: null, default: ze }, [T]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em = T,
  Tm = Symbol.for("react.element"),
  Rm = Symbol.for("react.fragment"),
  Pm = Object.prototype.hasOwnProperty,
  _m = Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Nm = { key: !0, ref: !0, __self: !0, __source: !0 };
function sd(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Pm.call(t, r) && !Nm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Tm,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: _m.current,
  };
}
_l.Fragment = Rm;
_l.jsx = sd;
_l.jsxs = sd;
Jc.exports = _l;
var p = Jc.exports,
  Wi = {},
  ad = { exports: {} },
  Ge = {},
  ud = { exports: {} },
  cd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, M) {
    var O = _.length;
    _.push(M);
    e: for (; 0 < O; ) {
      var Y = (O - 1) >>> 1,
        ie = _[Y];
      if (0 < o(ie, M)) (_[Y] = M), (_[O] = ie), (O = Y);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var M = _[0],
      O = _.pop();
    if (O !== M) {
      _[0] = O;
      e: for (var Y = 0, ie = _.length, Rn = ie >>> 1; Y < Rn; ) {
        var _e = 2 * (Y + 1) - 1,
          Dt = _[_e],
          st = _e + 1,
          Pn = _[st];
        if (0 > o(Dt, O))
          st < ie && 0 > o(Pn, Dt)
            ? ((_[Y] = Pn), (_[st] = O), (Y = st))
            : ((_[Y] = Dt), (_[_e] = O), (Y = _e));
        else if (st < ie && 0 > o(Pn, O)) (_[Y] = Pn), (_[st] = O), (Y = st);
        else break e;
      }
    }
    return M;
  }
  function o(_, M) {
    var O = _.sortIndex - M.sortIndex;
    return O !== 0 ? O : _.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    u = [],
    m = 1,
    h = null,
    d = 3,
    x = !1,
    v = !1,
    y = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(_) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= _)
        r(u), (M.sortIndex = M.expirationTime), t(a, M);
      else break;
      M = n(u);
    }
  }
  function S(_) {
    if (((y = !1), g(_), !v))
      if (n(a) !== null) (v = !0), Be(w);
      else {
        var M = n(u);
        M !== null && Rt(S, M.startTime - _);
      }
  }
  function w(_, M) {
    (v = !1), y && ((y = !1), f(j), (j = -1)), (x = !0);
    var O = d;
    try {
      for (
        g(M), h = n(a);
        h !== null && (!(h.expirationTime > M) || (_ && !I()));

      ) {
        var Y = h.callback;
        if (typeof Y == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var ie = Y(h.expirationTime <= M);
          (M = e.unstable_now()),
            typeof ie == "function" ? (h.callback = ie) : h === n(a) && r(a),
            g(M);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var Rn = !0;
      else {
        var _e = n(u);
        _e !== null && Rt(S, _e.startTime - M), (Rn = !1);
      }
      return Rn;
    } finally {
      (h = null), (d = O), (x = !1);
    }
  }
  var E = !1,
    k = null,
    j = -1,
    z = 5,
    P = -1;
  function I() {
    return !(e.unstable_now() - P < z);
  }
  function le() {
    if (k !== null) {
      var _ = e.unstable_now();
      P = _;
      var M = !0;
      try {
        M = k(!0, _);
      } finally {
        M ? ce() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var ce;
  if (typeof c == "function")
    ce = function () {
      c(le);
    };
  else if (typeof MessageChannel < "u") {
    var Re = new MessageChannel(),
      Pe = Re.port2;
    (Re.port1.onmessage = le),
      (ce = function () {
        Pe.postMessage(null);
      });
  } else
    ce = function () {
      R(le, 0);
    };
  function Be(_) {
    (k = _), E || ((E = !0), ce());
  }
  function Rt(_, M) {
    j = R(function () {
      _(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || x || ((v = !0), Be(w));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (_) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = d;
      }
      var O = d;
      d = M;
      try {
        return _();
      } finally {
        d = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, M) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var O = d;
      d = _;
      try {
        return M();
      } finally {
        d = O;
      }
    }),
    (e.unstable_scheduleCallback = function (_, M, O) {
      var Y = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? Y + O : Y))
          : (O = Y),
        _)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = O + ie),
        (_ = {
          id: m++,
          callback: M,
          priorityLevel: _,
          startTime: O,
          expirationTime: ie,
          sortIndex: -1,
        }),
        O > Y
          ? ((_.sortIndex = O),
            t(u, _),
            n(a) === null &&
              _ === n(u) &&
              (y ? (f(j), (j = -1)) : (y = !0), Rt(S, O - Y)))
          : ((_.sortIndex = ie), t(a, _), v || x || ((v = !0), Be(w))),
        _
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (_) {
      var M = d;
      return function () {
        var O = d;
        d = M;
        try {
          return _.apply(this, arguments);
        } finally {
          d = O;
        }
      };
    });
})(cd);
ud.exports = cd;
var jm = ud.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd = T,
  Qe = jm;
function C(e) {
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
var fd = new Set(),
  Dr = {};
function En(e, t) {
  tr(e, t), tr(e + "Capture", t);
}
function tr(e, t) {
  for (Dr[e] = t, e = 0; e < t.length; e++) fd.add(t[e]);
}
var At = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ki = Object.prototype.hasOwnProperty,
  $m =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  uu = {},
  cu = {};
function Mm(e) {
  return Ki.call(cu, e)
    ? !0
    : Ki.call(uu, e)
    ? !1
    : $m.test(e)
    ? (cu[e] = !0)
    : ((uu[e] = !0), !1);
}
function Om(e, t, n, r) {
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
function Am(e, t, n, r) {
  if (t === null || typeof t > "u" || Om(e, t, n, r)) return !0;
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
function Me(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ys = /[\-:]([a-z])/g;
function Xs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ys, Xs);
    Se[t] = new Me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ys, Xs);
    Se[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ys, Xs);
  Se[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zs(e, t, n, r) {
  var o = Se.hasOwnProperty(t) ? Se[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Am(t, n, o, r) && (n = null),
    r || o === null
      ? Mm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var bt = dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xo = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  Ln = Symbol.for("react.fragment"),
  Js = Symbol.for("react.strict_mode"),
  Qi = Symbol.for("react.profiler"),
  pd = Symbol.for("react.provider"),
  md = Symbol.for("react.context"),
  qs = Symbol.for("react.forward_ref"),
  Gi = Symbol.for("react.suspense"),
  Yi = Symbol.for("react.suspense_list"),
  ea = Symbol.for("react.memo"),
  Ut = Symbol.for("react.lazy"),
  hd = Symbol.for("react.offscreen"),
  du = Symbol.iterator;
function hr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (du && e[du]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  yi;
function Rr(e) {
  if (yi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      yi = (t && t[1]) || "";
    }
  return (
    `
` +
    yi +
    e
  );
}
var vi = !1;
function xi(e, t) {
  if (!e || vi) return "";
  vi = !0;
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
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var a =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (vi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rr(e) : "";
}
function zm(e) {
  switch (e.tag) {
    case 5:
      return Rr(e.type);
    case 16:
      return Rr("Lazy");
    case 13:
      return Rr("Suspense");
    case 19:
      return Rr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xi(e.type, !1)), e;
    case 11:
      return (e = xi(e.type.render, !1)), e;
    case 1:
      return (e = xi(e.type, !0)), e;
    default:
      return "";
  }
}
function Xi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ln:
      return "Fragment";
    case zn:
      return "Portal";
    case Qi:
      return "Profiler";
    case Js:
      return "StrictMode";
    case Gi:
      return "Suspense";
    case Yi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case md:
        return (e.displayName || "Context") + ".Consumer";
      case pd:
        return (e._context.displayName || "Context") + ".Provider";
      case qs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ea:
        return (
          (t = e.displayName || null), t !== null ? t : Xi(e.type) || "Memo"
        );
      case Ut:
        (t = e._payload), (e = e._init);
        try {
          return Xi(e(t));
        } catch {}
    }
  return null;
}
function Lm(e) {
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
      return Xi(t);
    case 8:
      return t === Js ? "StrictMode" : "Mode";
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
function rn(e) {
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
function gd(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Im(e) {
  var t = gd(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function So(e) {
  e._valueTracker || (e._valueTracker = Im(e));
}
function yd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gd(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function el(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zi(e, t) {
  var n = t.checked;
  return q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function vd(e, t) {
  (t = t.checked), t != null && Zs(e, "checked", t, !1);
}
function Ji(e, t) {
  vd(e, t);
  var n = rn(t.value),
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
    ? qi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && qi(e, t.type, rn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pu(e, t, n) {
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
function qi(e, t, n) {
  (t !== "number" || el(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Pr = Array.isArray;
function Qn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function es(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function mu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Pr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: rn(n) };
}
function xd(e, t) {
  var n = rn(t.value),
    r = rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function hu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ts(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wo,
  wd = (function (e) {
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
        wo = wo || document.createElement("div"),
          wo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jr = {
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
  Fm = ["Webkit", "ms", "Moz", "O"];
Object.keys(jr).forEach(function (e) {
  Fm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jr[t] = jr[e]);
  });
});
function kd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (jr.hasOwnProperty(e) && jr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Cd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = kd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var bm = q(
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
function ns(e, t) {
  if (t) {
    if (bm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function rs(e, t) {
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
var os = null;
function ta(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ls = null,
  Gn = null,
  Yn = null;
function gu(e) {
  if ((e = co(e))) {
    if (typeof ls != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ol(t)), ls(e.stateNode, e.type, t));
  }
}
function Ed(e) {
  Gn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Gn = e);
}
function Td() {
  if (Gn) {
    var e = Gn,
      t = Yn;
    if (((Yn = Gn = null), gu(e), t)) for (e = 0; e < t.length; e++) gu(t[e]);
  }
}
function Rd(e, t) {
  return e(t);
}
function Pd() {}
var Si = !1;
function _d(e, t, n) {
  if (Si) return e(t, n);
  Si = !0;
  try {
    return Rd(e, t, n);
  } finally {
    (Si = !1), (Gn !== null || Yn !== null) && (Pd(), Td());
  }
}
function Ur(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ol(n);
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
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var is = !1;
if (At)
  try {
    var gr = {};
    Object.defineProperty(gr, "passive", {
      get: function () {
        is = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr);
  } catch {
    is = !1;
  }
function Dm(e, t, n, r, o, l, i, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (m) {
    this.onError(m);
  }
}
var $r = !1,
  tl = null,
  nl = !1,
  ss = null,
  Bm = {
    onError: function (e) {
      ($r = !0), (tl = e);
    },
  };
function Um(e, t, n, r, o, l, i, s, a) {
  ($r = !1), (tl = null), Dm.apply(Bm, arguments);
}
function Hm(e, t, n, r, o, l, i, s, a) {
  if ((Um.apply(this, arguments), $r)) {
    if ($r) {
      var u = tl;
      ($r = !1), (tl = null);
    } else throw Error(C(198));
    nl || ((nl = !0), (ss = u));
  }
}
function Tn(e) {
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
function Nd(e) {
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
function yu(e) {
  if (Tn(e) !== e) throw Error(C(188));
}
function Vm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return yu(o), e;
        if (l === r) return yu(o), t;
        l = l.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function jd(e) {
  return (e = Vm(e)), e !== null ? $d(e) : null;
}
function $d(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = $d(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Md = Qe.unstable_scheduleCallback,
  vu = Qe.unstable_cancelCallback,
  Wm = Qe.unstable_shouldYield,
  Km = Qe.unstable_requestPaint,
  re = Qe.unstable_now,
  Qm = Qe.unstable_getCurrentPriorityLevel,
  na = Qe.unstable_ImmediatePriority,
  Od = Qe.unstable_UserBlockingPriority,
  rl = Qe.unstable_NormalPriority,
  Gm = Qe.unstable_LowPriority,
  Ad = Qe.unstable_IdlePriority,
  Nl = null,
  Ct = null;
function Ym(e) {
  if (Ct && typeof Ct.onCommitFiberRoot == "function")
    try {
      Ct.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ft = Math.clz32 ? Math.clz32 : Jm,
  Xm = Math.log,
  Zm = Math.LN2;
function Jm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xm(e) / Zm) | 0)) | 0;
}
var ko = 64,
  Co = 4194304;
function _r(e) {
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
function ol(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = _r(s)) : ((l &= i), l !== 0 && (r = _r(l)));
  } else (i = n & ~o), i !== 0 ? (r = _r(i)) : l !== 0 && (r = _r(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ft(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function qm(e, t) {
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
function eh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - ft(l),
      s = 1 << i,
      a = o[i];
    a === -1
      ? (!(s & n) || s & r) && (o[i] = qm(s, t))
      : a <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function as(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function zd() {
  var e = ko;
  return (ko <<= 1), !(ko & 4194240) && (ko = 64), e;
}
function wi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ao(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ft(t)),
    (e[t] = n);
}
function th(e, t) {
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
    var o = 31 - ft(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function ra(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ft(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var U = 0;
function Ld(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Id,
  oa,
  Fd,
  bd,
  Dd,
  us = !1,
  Eo = [],
  Gt = null,
  Yt = null,
  Xt = null,
  Hr = new Map(),
  Vr = new Map(),
  Vt = [],
  nh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Gt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      Hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = co(t)), t !== null && oa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function rh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Gt = yr(Gt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Yt = yr(Yt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Xt = yr(Xt, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Hr.set(l, yr(Hr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Vr.set(l, yr(Vr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Bd(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Nd(n)), t !== null)) {
          (e.blockedOn = t),
            Dd(e.priority, function () {
              Fd(n);
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
function Do(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = cs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (os = r), n.target.dispatchEvent(r), (os = null);
    } else return (t = co(n)), t !== null && oa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Su(e, t, n) {
  Do(e) && n.delete(t);
}
function oh() {
  (us = !1),
    Gt !== null && Do(Gt) && (Gt = null),
    Yt !== null && Do(Yt) && (Yt = null),
    Xt !== null && Do(Xt) && (Xt = null),
    Hr.forEach(Su),
    Vr.forEach(Su);
}
function vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    us ||
      ((us = !0),
      Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority, oh)));
}
function Wr(e) {
  function t(o) {
    return vr(o, e);
  }
  if (0 < Eo.length) {
    vr(Eo[0], e);
    for (var n = 1; n < Eo.length; n++) {
      var r = Eo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Gt !== null && vr(Gt, e),
      Yt !== null && vr(Yt, e),
      Xt !== null && vr(Xt, e),
      Hr.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    Bd(n), n.blockedOn === null && Vt.shift();
}
var Xn = bt.ReactCurrentBatchConfig,
  ll = !0;
function lh(e, t, n, r) {
  var o = U,
    l = Xn.transition;
  Xn.transition = null;
  try {
    (U = 1), la(e, t, n, r);
  } finally {
    (U = o), (Xn.transition = l);
  }
}
function ih(e, t, n, r) {
  var o = U,
    l = Xn.transition;
  Xn.transition = null;
  try {
    (U = 4), la(e, t, n, r);
  } finally {
    (U = o), (Xn.transition = l);
  }
}
function la(e, t, n, r) {
  if (ll) {
    var o = cs(e, t, n, r);
    if (o === null) $i(e, t, r, il, n), xu(e, r);
    else if (rh(o, e, t, n, r)) r.stopPropagation();
    else if ((xu(e, r), t & 4 && -1 < nh.indexOf(e))) {
      for (; o !== null; ) {
        var l = co(o);
        if (
          (l !== null && Id(l),
          (l = cs(e, t, n, r)),
          l === null && $i(e, t, r, il, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else $i(e, t, r, null, n);
  }
}
var il = null;
function cs(e, t, n, r) {
  if (((il = null), (e = ta(r)), (e = fn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Nd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (il = e), null;
}
function Ud(e) {
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
      switch (Qm()) {
        case na:
          return 1;
        case Od:
          return 4;
        case rl:
        case Gm:
          return 16;
        case Ad:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kt = null,
  ia = null,
  Bo = null;
function Hd() {
  if (Bo) return Bo;
  var e,
    t = ia,
    n = t.length,
    r,
    o = "value" in Kt ? Kt.value : Kt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (Bo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Uo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function To() {
  return !0;
}
function wu() {
  return !1;
}
function Ye(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? To
        : wu),
      (this.isPropagationStopped = wu),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = To));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = To));
      },
      persist: function () {},
      isPersistent: To,
    }),
    t
  );
}
var dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  sa = Ye(dr),
  uo = q({}, dr, { view: 0, detail: 0 }),
  sh = Ye(uo),
  ki,
  Ci,
  xr,
  jl = q({}, uo, {
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
    getModifierState: aa,
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
        : (e !== xr &&
            (xr && e.type === "mousemove"
              ? ((ki = e.screenX - xr.screenX), (Ci = e.screenY - xr.screenY))
              : (Ci = ki = 0),
            (xr = e)),
          ki);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ci;
    },
  }),
  ku = Ye(jl),
  ah = q({}, jl, { dataTransfer: 0 }),
  uh = Ye(ah),
  ch = q({}, uo, { relatedTarget: 0 }),
  Ei = Ye(ch),
  dh = q({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fh = Ye(dh),
  ph = q({}, dr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  mh = Ye(ph),
  hh = q({}, dr, { data: 0 }),
  Cu = Ye(hh),
  gh = {
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
  yh = {
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
  vh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vh[e]) ? !!t[e] : !1;
}
function aa() {
  return xh;
}
var Sh = q({}, uo, {
    key: function (e) {
      if (e.key) {
        var t = gh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Uo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? yh[e.keyCode] || "Unidentified"
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
    getModifierState: aa,
    charCode: function (e) {
      return e.type === "keypress" ? Uo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Uo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  wh = Ye(Sh),
  kh = q({}, jl, {
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
  Eu = Ye(kh),
  Ch = q({}, uo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: aa,
  }),
  Eh = Ye(Ch),
  Th = q({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rh = Ye(Th),
  Ph = q({}, jl, {
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
  _h = Ye(Ph),
  Nh = [9, 13, 27, 32],
  ua = At && "CompositionEvent" in window,
  Mr = null;
At && "documentMode" in document && (Mr = document.documentMode);
var jh = At && "TextEvent" in window && !Mr,
  Vd = At && (!ua || (Mr && 8 < Mr && 11 >= Mr)),
  Tu = String.fromCharCode(32),
  Ru = !1;
function Wd(e, t) {
  switch (e) {
    case "keyup":
      return Nh.indexOf(t.keyCode) !== -1;
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
function Kd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var In = !1;
function $h(e, t) {
  switch (e) {
    case "compositionend":
      return Kd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ru = !0), Tu);
    case "textInput":
      return (e = t.data), e === Tu && Ru ? null : e;
    default:
      return null;
  }
}
function Mh(e, t) {
  if (In)
    return e === "compositionend" || (!ua && Wd(e, t))
      ? ((e = Hd()), (Bo = ia = Kt = null), (In = !1), e)
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
      return Vd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Oh = {
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
function Pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Oh[e.type] : t === "textarea";
}
function Qd(e, t, n, r) {
  Ed(r),
    (t = sl(t, "onChange")),
    0 < t.length &&
      ((n = new sa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Or = null,
  Kr = null;
function Ah(e) {
  of(e, 0);
}
function $l(e) {
  var t = Dn(e);
  if (yd(t)) return e;
}
function zh(e, t) {
  if (e === "change") return t;
}
var Gd = !1;
if (At) {
  var Ti;
  if (At) {
    var Ri = "oninput" in document;
    if (!Ri) {
      var _u = document.createElement("div");
      _u.setAttribute("oninput", "return;"),
        (Ri = typeof _u.oninput == "function");
    }
    Ti = Ri;
  } else Ti = !1;
  Gd = Ti && (!document.documentMode || 9 < document.documentMode);
}
function Nu() {
  Or && (Or.detachEvent("onpropertychange", Yd), (Kr = Or = null));
}
function Yd(e) {
  if (e.propertyName === "value" && $l(Kr)) {
    var t = [];
    Qd(t, Kr, e, ta(e)), _d(Ah, t);
  }
}
function Lh(e, t, n) {
  e === "focusin"
    ? (Nu(), (Or = t), (Kr = n), Or.attachEvent("onpropertychange", Yd))
    : e === "focusout" && Nu();
}
function Ih(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return $l(Kr);
}
function Fh(e, t) {
  if (e === "click") return $l(t);
}
function bh(e, t) {
  if (e === "input" || e === "change") return $l(t);
}
function Dh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var mt = typeof Object.is == "function" ? Object.is : Dh;
function Qr(e, t) {
  if (mt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ki.call(t, o) || !mt(e[o], t[o])) return !1;
  }
  return !0;
}
function ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $u(e, t) {
  var n = ju(e);
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
    n = ju(n);
  }
}
function Xd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Xd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zd() {
  for (var e = window, t = el(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = el(e.document);
  }
  return t;
}
function ca(e) {
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
function Bh(e) {
  var t = Zd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Xd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ca(n)) {
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
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = $u(n, l));
        var i = $u(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var Uh = At && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  ds = null,
  Ar = null,
  fs = !1;
function Mu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fs ||
    Fn == null ||
    Fn !== el(r) ||
    ((r = Fn),
    "selectionStart" in r && ca(r)
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
    (Ar && Qr(Ar, r)) ||
      ((Ar = r),
      (r = sl(ds, "onSelect")),
      0 < r.length &&
        ((t = new sa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fn))));
}
function Ro(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var bn = {
    animationend: Ro("Animation", "AnimationEnd"),
    animationiteration: Ro("Animation", "AnimationIteration"),
    animationstart: Ro("Animation", "AnimationStart"),
    transitionend: Ro("Transition", "TransitionEnd"),
  },
  Pi = {},
  Jd = {};
At &&
  ((Jd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bn.animationend.animation,
    delete bn.animationiteration.animation,
    delete bn.animationstart.animation),
  "TransitionEvent" in window || delete bn.transitionend.transition);
function Ml(e) {
  if (Pi[e]) return Pi[e];
  if (!bn[e]) return e;
  var t = bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jd) return (Pi[e] = t[n]);
  return e;
}
var qd = Ml("animationend"),
  ef = Ml("animationiteration"),
  tf = Ml("animationstart"),
  nf = Ml("transitionend"),
  rf = new Map(),
  Ou =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function sn(e, t) {
  rf.set(e, t), En(t, [e]);
}
for (var _i = 0; _i < Ou.length; _i++) {
  var Ni = Ou[_i],
    Hh = Ni.toLowerCase(),
    Vh = Ni[0].toUpperCase() + Ni.slice(1);
  sn(Hh, "on" + Vh);
}
sn(qd, "onAnimationEnd");
sn(ef, "onAnimationIteration");
sn(tf, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(nf, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Nr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wh = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));
function Au(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Hm(r, t, void 0, e), (e.currentTarget = null);
}
function of(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== l && o.isPropagationStopped())) break e;
          Au(o, s, u), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== l && o.isPropagationStopped())
          )
            break e;
          Au(o, s, u), (l = a);
        }
    }
  }
  if (nl) throw ((e = ss), (nl = !1), (ss = null), e);
}
function W(e, t) {
  var n = t[ys];
  n === void 0 && (n = t[ys] = new Set());
  var r = e + "__bubble";
  n.has(r) || (lf(t, e, 2, !1), n.add(r));
}
function ji(e, t, n) {
  var r = 0;
  t && (r |= 4), lf(n, e, r, t);
}
var Po = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[Po]) {
    (e[Po] = !0),
      fd.forEach(function (n) {
        n !== "selectionchange" && (Wh.has(n) || ji(n, !1, e), ji(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Po] || ((t[Po] = !0), ji("selectionchange", !1, t));
  }
}
function lf(e, t, n, r) {
  switch (Ud(t)) {
    case 1:
      var o = lh;
      break;
    case 4:
      o = ih;
      break;
    default:
      o = la;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !is ||
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
function $i(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = fn(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  _d(function () {
    var u = l,
      m = ta(n),
      h = [];
    e: {
      var d = rf.get(e);
      if (d !== void 0) {
        var x = sa,
          v = e;
        switch (e) {
          case "keypress":
            if (Uo(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = wh;
            break;
          case "focusin":
            (v = "focus"), (x = Ei);
            break;
          case "focusout":
            (v = "blur"), (x = Ei);
            break;
          case "beforeblur":
          case "afterblur":
            x = Ei;
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
            x = ku;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = uh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Eh;
            break;
          case qd:
          case ef:
          case tf:
            x = fh;
            break;
          case nf:
            x = Rh;
            break;
          case "scroll":
            x = sh;
            break;
          case "wheel":
            x = _h;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = mh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Eu;
        }
        var y = (t & 4) !== 0,
          R = !y && e === "scroll",
          f = y ? (d !== null ? d + "Capture" : null) : d;
        y = [];
        for (var c = u, g; c !== null; ) {
          g = c;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              f !== null && ((S = Ur(c, f)), S != null && y.push(Yr(c, S, g)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((d = new x(d, v, null, n, m)), h.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          d &&
            n !== os &&
            (v = n.relatedTarget || n.fromElement) &&
            (fn(v) || v[zt]))
        )
          break e;
        if (
          (x || d) &&
          ((d =
            m.window === m
              ? m
              : (d = m.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          x
            ? ((v = n.relatedTarget || n.toElement),
              (x = u),
              (v = v ? fn(v) : null),
              v !== null &&
                ((R = Tn(v)), v !== R || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((x = null), (v = u)),
          x !== v)
        ) {
          if (
            ((y = ku),
            (S = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Eu),
              (S = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (R = x == null ? d : Dn(x)),
            (g = v == null ? d : Dn(v)),
            (d = new y(S, c + "leave", x, n, m)),
            (d.target = R),
            (d.relatedTarget = g),
            (S = null),
            fn(m) === u &&
              ((y = new y(f, c + "enter", v, n, m)),
              (y.target = g),
              (y.relatedTarget = R),
              (S = y)),
            (R = S),
            x && v)
          )
            t: {
              for (y = x, f = v, c = 0, g = y; g; g = _n(g)) c++;
              for (g = 0, S = f; S; S = _n(S)) g++;
              for (; 0 < c - g; ) (y = _n(y)), c--;
              for (; 0 < g - c; ) (f = _n(f)), g--;
              for (; c--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = _n(y)), (f = _n(f));
              }
              y = null;
            }
          else y = null;
          x !== null && zu(h, d, x, y, !1),
            v !== null && R !== null && zu(h, R, v, y, !0);
        }
      }
      e: {
        if (
          ((d = u ? Dn(u) : window),
          (x = d.nodeName && d.nodeName.toLowerCase()),
          x === "select" || (x === "input" && d.type === "file"))
        )
          var w = zh;
        else if (Pu(d))
          if (Gd) w = bh;
          else {
            w = Ih;
            var E = Lh;
          }
        else
          (x = d.nodeName) &&
            x.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = Fh);
        if (w && (w = w(e, u))) {
          Qd(h, w, n, m);
          break e;
        }
        E && E(e, d, u),
          e === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            qi(d, "number", d.value);
      }
      switch (((E = u ? Dn(u) : window), e)) {
        case "focusin":
          (Pu(E) || E.contentEditable === "true") &&
            ((Fn = E), (ds = u), (Ar = null));
          break;
        case "focusout":
          Ar = ds = Fn = null;
          break;
        case "mousedown":
          fs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fs = !1), Mu(h, n, m);
          break;
        case "selectionchange":
          if (Uh) break;
        case "keydown":
        case "keyup":
          Mu(h, n, m);
      }
      var k;
      if (ua)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        In
          ? Wd(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Vd &&
          n.locale !== "ko" &&
          (In || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && In && (k = Hd())
            : ((Kt = m),
              (ia = "value" in Kt ? Kt.value : Kt.textContent),
              (In = !0))),
        (E = sl(u, j)),
        0 < E.length &&
          ((j = new Cu(j, e, null, n, m)),
          h.push({ event: j, listeners: E }),
          k ? (j.data = k) : ((k = Kd(n)), k !== null && (j.data = k)))),
        (k = jh ? $h(e, n) : Mh(e, n)) &&
          ((u = sl(u, "onBeforeInput")),
          0 < u.length &&
            ((m = new Cu("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: u }),
            (m.data = k)));
    }
    of(h, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function sl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Ur(e, n)),
      l != null && r.unshift(Yr(e, l, o)),
      (l = Ur(e, t)),
      l != null && r.push(Yr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function _n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zu(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Ur(n, l)), a != null && i.unshift(Yr(n, a, s)))
        : o || ((a = Ur(n, l)), a != null && i.push(Yr(n, a, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Kh = /\r\n?/g,
  Qh = /\u0000|\uFFFD/g;
function Lu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kh,
      `
`
    )
    .replace(Qh, "");
}
function _o(e, t, n) {
  if (((t = Lu(t)), Lu(e) !== t && n)) throw Error(C(425));
}
function al() {}
var ps = null,
  ms = null;
function hs(e, t) {
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
var gs = typeof setTimeout == "function" ? setTimeout : void 0,
  Gh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Iu = typeof Promise == "function" ? Promise : void 0,
  Yh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Iu < "u"
      ? function (e) {
          return Iu.resolve(null).then(e).catch(Xh);
        }
      : gs;
function Xh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Mi(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Wr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Wr(t);
}
function Zt(e) {
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
function Fu(e) {
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
var fr = Math.random().toString(36).slice(2),
  wt = "__reactFiber$" + fr,
  Xr = "__reactProps$" + fr,
  zt = "__reactContainer$" + fr,
  ys = "__reactEvents$" + fr,
  Zh = "__reactListeners$" + fr,
  Jh = "__reactHandles$" + fr;
function fn(e) {
  var t = e[wt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zt] || n[wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fu(e); e !== null; ) {
          if ((n = e[wt])) return n;
          e = Fu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function co(e) {
  return (
    (e = e[wt] || e[zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ol(e) {
  return e[Xr] || null;
}
var vs = [],
  Bn = -1;
function an(e) {
  return { current: e };
}
function K(e) {
  0 > Bn || ((e.current = vs[Bn]), (vs[Bn] = null), Bn--);
}
function V(e, t) {
  Bn++, (vs[Bn] = e.current), (e.current = t);
}
var on = {},
  Te = an(on),
  Ie = an(!1),
  vn = on;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return on;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function ul() {
  K(Ie), K(Te);
}
function bu(e, t, n) {
  if (Te.current !== on) throw Error(C(168));
  V(Te, t), V(Ie, n);
}
function sf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, Lm(e) || "Unknown", o));
  return q({}, n, r);
}
function cl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || on),
    (vn = Te.current),
    V(Te, e),
    V(Ie, Ie.current),
    !0
  );
}
function Du(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = sf(e, t, vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Ie),
      K(Te),
      V(Te, e))
    : K(Ie),
    V(Ie, n);
}
var Nt = null,
  Al = !1,
  Oi = !1;
function af(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function qh(e) {
  (Al = !0), af(e);
}
function un() {
  if (!Oi && Nt !== null) {
    Oi = !0;
    var e = 0,
      t = U;
    try {
      var n = Nt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Nt = null), (Al = !1);
    } catch (o) {
      throw (Nt !== null && (Nt = Nt.slice(e + 1)), Md(na, un), o);
    } finally {
      (U = t), (Oi = !1);
    }
  }
  return null;
}
var Un = [],
  Hn = 0,
  dl = null,
  fl = 0,
  Je = [],
  qe = 0,
  xn = null,
  jt = 1,
  $t = "";
function cn(e, t) {
  (Un[Hn++] = fl), (Un[Hn++] = dl), (dl = e), (fl = t);
}
function uf(e, t, n) {
  (Je[qe++] = jt), (Je[qe++] = $t), (Je[qe++] = xn), (xn = e);
  var r = jt;
  e = $t;
  var o = 32 - ft(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ft(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (jt = (1 << (32 - ft(t) + o)) | (n << o) | r),
      ($t = l + e);
  } else (jt = (1 << l) | (n << o) | r), ($t = e);
}
function da(e) {
  e.return !== null && (cn(e, 1), uf(e, 1, 0));
}
function fa(e) {
  for (; e === dl; )
    (dl = Un[--Hn]), (Un[Hn] = null), (fl = Un[--Hn]), (Un[Hn] = null);
  for (; e === xn; )
    (xn = Je[--qe]),
      (Je[qe] = null),
      ($t = Je[--qe]),
      (Je[qe] = null),
      (jt = Je[--qe]),
      (Je[qe] = null);
}
var We = null,
  Ve = null,
  G = !1,
  dt = null;
function cf(e, t) {
  var n = et(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Bu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (Ve = Zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (Ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = xn !== null ? { id: jt, overflow: $t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = et(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (Ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function xs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ss(e) {
  if (G) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!Bu(e, t)) {
        if (xs(e)) throw Error(C(418));
        t = Zt(n.nextSibling);
        var r = We;
        t && Bu(e, t)
          ? cf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (We = e));
      }
    } else {
      if (xs(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (We = e);
    }
  }
}
function Uu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function No(e) {
  if (e !== We) return !1;
  if (!G) return Uu(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hs(e.type, e.memoizedProps))),
    t && (t = Ve))
  ) {
    if (xs(e)) throw (df(), Error(C(418)));
    for (; t; ) cf(e, t), (t = Zt(t.nextSibling));
  }
  if ((Uu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = Zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = We ? Zt(e.stateNode.nextSibling) : null;
  return !0;
}
function df() {
  for (var e = Ve; e; ) e = Zt(e.nextSibling);
}
function rr() {
  (Ve = We = null), (G = !1);
}
function pa(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
var e0 = bt.ReactCurrentBatchConfig;
function ut(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var pl = an(null),
  ml = null,
  Vn = null,
  ma = null;
function ha() {
  ma = Vn = ml = null;
}
function ga(e) {
  var t = pl.current;
  K(pl), (e._currentValue = t);
}
function ws(e, t, n) {
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
function Zn(e, t) {
  (ml = e),
    (ma = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (ma !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (ml === null) throw Error(C(308));
      (Vn = e), (ml.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return t;
}
var pn = null;
function ya(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
function ff(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ya(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Lt(e, r)
  );
}
function Lt(e, t) {
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
var Ht = !1;
function va(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pf(e, t) {
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
function Mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Lt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ya(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Lt(e, n)
  );
}
function Ho(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ra(e, n);
  }
}
function Hu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function hl(e, t, n, r) {
  var o = e.updateQueue;
  Ht = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), i === null ? (l = u) : (i.next = u), (i = a);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== i &&
        (s === null ? (m.firstBaseUpdate = u) : (s.next = u),
        (m.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var h = o.baseState;
    (i = 0), (m = u = a = null), (s = l);
    do {
      var d = s.lane,
        x = s.eventTime;
      if ((r & d) === d) {
        m !== null &&
          (m = m.next =
            {
              eventTime: x,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            y = s;
          switch (((d = t), (x = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                h = v.call(x, h, d);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (d = typeof v == "function" ? v.call(x, h, d) : v),
                d == null)
              )
                break e;
              h = q({}, h, d);
              break e;
            case 2:
              Ht = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [s]) : d.push(s));
      } else
        (x = {
          eventTime: x,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((u = m = x), (a = h)) : (m = m.next = x),
          (i |= d);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (a = h),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = m),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (wn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function Vu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(C(191, o));
        o.call(r);
      }
    }
}
var mf = new dd.Component().refs;
function ks(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = en(e),
      l = Mt(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Jt(e, l, o)),
      t !== null && (pt(t, e, o, r), Ho(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = je(),
      o = en(e),
      l = Mt(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Jt(e, l, o)),
      t !== null && (pt(t, e, o, r), Ho(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = je(),
      r = en(e),
      o = Mt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Jt(e, o, r)),
      t !== null && (pt(t, e, r, n), Ho(t, e, r));
  },
};
function Wu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qr(n, r) || !Qr(o, l)
      : !0
  );
}
function hf(e, t, n) {
  var r = !1,
    o = on,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = nt(l))
      : ((o = Fe(t) ? vn : Te.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? nr(e, o) : on)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Ku(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zl.enqueueReplaceState(t, t.state, null);
}
function Cs(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = mf), va(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = nt(l))
    : ((l = Fe(t) ? vn : Te.current), (o.context = nr(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (ks(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && zl.enqueueReplaceState(o, o.state, null),
      hl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            s === mf && (s = o.refs = {}),
              i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function jo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Qu(e) {
  var t = e._init;
  return t(e._payload);
}
function gf(e) {
  function t(f, c) {
    if (e) {
      var g = f.deletions;
      g === null ? ((f.deletions = [c]), (f.flags |= 16)) : g.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function o(f, c) {
    return (f = tn(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, c, g) {
    return (
      (f.index = g),
      e
        ? ((g = f.alternate),
          g !== null
            ? ((g = g.index), g < c ? ((f.flags |= 2), c) : g)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, g, S) {
    return c === null || c.tag !== 6
      ? ((c = Di(g, f.mode, S)), (c.return = f), c)
      : ((c = o(c, g)), (c.return = f), c);
  }
  function a(f, c, g, S) {
    var w = g.type;
    return w === Ln
      ? m(f, c, g.props.children, S, g.key)
      : c !== null &&
        (c.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Ut &&
            Qu(w) === c.type))
      ? ((S = o(c, g.props)), (S.ref = Sr(f, c, g)), (S.return = f), S)
      : ((S = Yo(g.type, g.key, g.props, null, f.mode, S)),
        (S.ref = Sr(f, c, g)),
        (S.return = f),
        S);
  }
  function u(f, c, g, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== g.containerInfo ||
      c.stateNode.implementation !== g.implementation
      ? ((c = Bi(g, f.mode, S)), (c.return = f), c)
      : ((c = o(c, g.children || [])), (c.return = f), c);
  }
  function m(f, c, g, S, w) {
    return c === null || c.tag !== 7
      ? ((c = yn(g, f.mode, S, w)), (c.return = f), c)
      : ((c = o(c, g)), (c.return = f), c);
  }
  function h(f, c, g) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Di("" + c, f.mode, g)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case xo:
          return (
            (g = Yo(c.type, c.key, c.props, null, f.mode, g)),
            (g.ref = Sr(f, null, c)),
            (g.return = f),
            g
          );
        case zn:
          return (c = Bi(c, f.mode, g)), (c.return = f), c;
        case Ut:
          var S = c._init;
          return h(f, S(c._payload), g);
      }
      if (Pr(c) || hr(c))
        return (c = yn(c, f.mode, g, null)), (c.return = f), c;
      jo(f, c);
    }
    return null;
  }
  function d(f, c, g, S) {
    var w = c !== null ? c.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return w !== null ? null : s(f, c, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case xo:
          return g.key === w ? a(f, c, g, S) : null;
        case zn:
          return g.key === w ? u(f, c, g, S) : null;
        case Ut:
          return (w = g._init), d(f, c, w(g._payload), S);
      }
      if (Pr(g) || hr(g)) return w !== null ? null : m(f, c, g, S, null);
      jo(f, g);
    }
    return null;
  }
  function x(f, c, g, S, w) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (f = f.get(g) || null), s(c, f, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case xo:
          return (f = f.get(S.key === null ? g : S.key) || null), a(c, f, S, w);
        case zn:
          return (f = f.get(S.key === null ? g : S.key) || null), u(c, f, S, w);
        case Ut:
          var E = S._init;
          return x(f, c, g, E(S._payload), w);
      }
      if (Pr(S) || hr(S)) return (f = f.get(g) || null), m(c, f, S, w, null);
      jo(c, S);
    }
    return null;
  }
  function v(f, c, g, S) {
    for (
      var w = null, E = null, k = c, j = (c = 0), z = null;
      k !== null && j < g.length;
      j++
    ) {
      k.index > j ? ((z = k), (k = null)) : (z = k.sibling);
      var P = d(f, k, g[j], S);
      if (P === null) {
        k === null && (k = z);
        break;
      }
      e && k && P.alternate === null && t(f, k),
        (c = l(P, c, j)),
        E === null ? (w = P) : (E.sibling = P),
        (E = P),
        (k = z);
    }
    if (j === g.length) return n(f, k), G && cn(f, j), w;
    if (k === null) {
      for (; j < g.length; j++)
        (k = h(f, g[j], S)),
          k !== null &&
            ((c = l(k, c, j)), E === null ? (w = k) : (E.sibling = k), (E = k));
      return G && cn(f, j), w;
    }
    for (k = r(f, k); j < g.length; j++)
      (z = x(k, f, j, g[j], S)),
        z !== null &&
          (e && z.alternate !== null && k.delete(z.key === null ? j : z.key),
          (c = l(z, c, j)),
          E === null ? (w = z) : (E.sibling = z),
          (E = z));
    return (
      e &&
        k.forEach(function (I) {
          return t(f, I);
        }),
      G && cn(f, j),
      w
    );
  }
  function y(f, c, g, S) {
    var w = hr(g);
    if (typeof w != "function") throw Error(C(150));
    if (((g = w.call(g)), g == null)) throw Error(C(151));
    for (
      var E = (w = null), k = c, j = (c = 0), z = null, P = g.next();
      k !== null && !P.done;
      j++, P = g.next()
    ) {
      k.index > j ? ((z = k), (k = null)) : (z = k.sibling);
      var I = d(f, k, P.value, S);
      if (I === null) {
        k === null && (k = z);
        break;
      }
      e && k && I.alternate === null && t(f, k),
        (c = l(I, c, j)),
        E === null ? (w = I) : (E.sibling = I),
        (E = I),
        (k = z);
    }
    if (P.done) return n(f, k), G && cn(f, j), w;
    if (k === null) {
      for (; !P.done; j++, P = g.next())
        (P = h(f, P.value, S)),
          P !== null &&
            ((c = l(P, c, j)), E === null ? (w = P) : (E.sibling = P), (E = P));
      return G && cn(f, j), w;
    }
    for (k = r(f, k); !P.done; j++, P = g.next())
      (P = x(k, f, j, P.value, S)),
        P !== null &&
          (e && P.alternate !== null && k.delete(P.key === null ? j : P.key),
          (c = l(P, c, j)),
          E === null ? (w = P) : (E.sibling = P),
          (E = P));
    return (
      e &&
        k.forEach(function (le) {
          return t(f, le);
        }),
      G && cn(f, j),
      w
    );
  }
  function R(f, c, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Ln &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case xo:
          e: {
            for (var w = g.key, E = c; E !== null; ) {
              if (E.key === w) {
                if (((w = g.type), w === Ln)) {
                  if (E.tag === 7) {
                    n(f, E.sibling),
                      (c = o(E, g.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  E.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Ut &&
                    Qu(w) === E.type)
                ) {
                  n(f, E.sibling),
                    (c = o(E, g.props)),
                    (c.ref = Sr(f, E, g)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            g.type === Ln
              ? ((c = yn(g.props.children, f.mode, S, g.key)),
                (c.return = f),
                (f = c))
              : ((S = Yo(g.type, g.key, g.props, null, f.mode, S)),
                (S.ref = Sr(f, c, g)),
                (S.return = f),
                (f = S));
          }
          return i(f);
        case zn:
          e: {
            for (E = g.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === g.containerInfo &&
                  c.stateNode.implementation === g.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, g.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Bi(g, f.mode, S)), (c.return = f), (f = c);
          }
          return i(f);
        case Ut:
          return (E = g._init), R(f, c, E(g._payload), S);
      }
      if (Pr(g)) return v(f, c, g, S);
      if (hr(g)) return y(f, c, g, S);
      jo(f, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, g)), (c.return = f), (f = c))
          : (n(f, c), (c = Di(g, f.mode, S)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return R;
}
var or = gf(!0),
  yf = gf(!1),
  fo = {},
  Et = an(fo),
  Zr = an(fo),
  Jr = an(fo);
function mn(e) {
  if (e === fo) throw Error(C(174));
  return e;
}
function xa(e, t) {
  switch ((V(Jr, t), V(Zr, e), V(Et, fo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ts(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ts(t, e));
  }
  K(Et), V(Et, t);
}
function lr() {
  K(Et), K(Zr), K(Jr);
}
function vf(e) {
  mn(Jr.current);
  var t = mn(Et.current),
    n = ts(t, e.type);
  t !== n && (V(Zr, e), V(Et, n));
}
function Sa(e) {
  Zr.current === e && (K(Et), K(Zr));
}
var X = an(0);
function gl(e) {
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
var Ai = [];
function wa() {
  for (var e = 0; e < Ai.length; e++)
    Ai[e]._workInProgressVersionPrimary = null;
  Ai.length = 0;
}
var Vo = bt.ReactCurrentDispatcher,
  zi = bt.ReactCurrentBatchConfig,
  Sn = 0,
  Z = null,
  de = null,
  pe = null,
  yl = !1,
  zr = !1,
  qr = 0,
  t0 = 0;
function we() {
  throw Error(C(321));
}
function ka(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!mt(e[n], t[n])) return !1;
  return !0;
}
function Ca(e, t, n, r, o, l) {
  if (
    ((Sn = l),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vo.current = e === null || e.memoizedState === null ? l0 : i0),
    (e = n(r, o)),
    zr)
  ) {
    l = 0;
    do {
      if (((zr = !1), (qr = 0), 25 <= l)) throw Error(C(301));
      (l += 1),
        (pe = de = null),
        (t.updateQueue = null),
        (Vo.current = s0),
        (e = n(r, o));
    } while (zr);
  }
  if (
    ((Vo.current = vl),
    (t = de !== null && de.next !== null),
    (Sn = 0),
    (pe = de = Z = null),
    (yl = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Ea() {
  var e = qr !== 0;
  return (qr = 0), e;
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (Z.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function rt() {
  if (de === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = pe === null ? Z.memoizedState : pe.next;
  if (t !== null) (pe = t), (de = e);
  else {
    if (e === null) throw Error(C(310));
    (de = e),
      (e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null,
      }),
      pe === null ? (Z.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function eo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Li(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = de,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      a = null,
      u = l;
    do {
      var m = u.lane;
      if ((Sn & m) === m)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var h = {
          lane: m,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = h), (i = r)) : (a = a.next = h),
          (Z.lanes |= m),
          (wn |= m);
      }
      u = u.next;
    } while (u !== null && u !== l);
    a === null ? (i = r) : (a.next = s),
      mt(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Z.lanes |= l), (wn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ii(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    mt(l, t.memoizedState) || (Le = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function xf() {}
function Sf(e, t) {
  var n = Z,
    r = rt(),
    o = t(),
    l = !mt(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (Le = !0)),
    (r = r.queue),
    Ta(Cf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      to(9, kf.bind(null, n, r, o, t), void 0, null),
      me === null)
    )
      throw Error(C(349));
    Sn & 30 || wf(n, t, o);
  }
  return o;
}
function wf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ef(t) && Tf(e);
}
function Cf(e, t, n) {
  return n(function () {
    Ef(t) && Tf(e);
  });
}
function Ef(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !mt(e, n);
  } catch {
    return !0;
  }
}
function Tf(e) {
  var t = Lt(e, 1);
  t !== null && pt(t, e, 1, -1);
}
function Gu(e) {
  var t = vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: eo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = o0.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function to(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Rf() {
  return rt().memoizedState;
}
function Wo(e, t, n, r) {
  var o = vt();
  (Z.flags |= e),
    (o.memoizedState = to(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ll(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (de !== null) {
    var i = de.memoizedState;
    if (((l = i.destroy), r !== null && ka(r, i.deps))) {
      o.memoizedState = to(t, n, l, r);
      return;
    }
  }
  (Z.flags |= e), (o.memoizedState = to(1 | t, n, l, r));
}
function Yu(e, t) {
  return Wo(8390656, 8, e, t);
}
function Ta(e, t) {
  return Ll(2048, 8, e, t);
}
function Pf(e, t) {
  return Ll(4, 2, e, t);
}
function _f(e, t) {
  return Ll(4, 4, e, t);
}
function Nf(e, t) {
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
function jf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ll(4, 4, Nf.bind(null, t, e), n)
  );
}
function Ra() {}
function $f(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ka(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Mf(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ka(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Of(e, t, n) {
  return Sn & 21
    ? (mt(n, t) || ((n = zd()), (Z.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function n0(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = zi.transition;
  zi.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (zi.transition = r);
  }
}
function Af() {
  return rt().memoizedState;
}
function r0(e, t, n) {
  var r = en(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zf(e))
  )
    Lf(t, n);
  else if (((n = ff(e, t, n, r)), n !== null)) {
    var o = je();
    pt(n, e, r, o), If(n, t, r);
  }
}
function o0(e, t, n) {
  var r = en(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zf(e)) Lf(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), mt(s, i))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), ya(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = ff(e, t, o, r)),
      n !== null && ((o = je()), pt(n, e, r, o), If(n, t, r));
  }
}
function zf(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function Lf(e, t) {
  zr = yl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function If(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ra(e, n);
  }
}
var vl = {
    readContext: nt,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  l0 = {
    readContext: nt,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: Yu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wo(4194308, 4, Nf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = vt();
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
        (e = e.dispatch = r0.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Gu,
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e);
    },
    useTransition: function () {
      var e = Gu(!1),
        t = e[0];
      return (e = n0.bind(null, e[1])), (vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        o = vt();
      if (G) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), me === null)) throw Error(C(349));
        Sn & 30 || wf(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Yu(Cf.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        to(9, kf.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = vt(),
        t = me.identifierPrefix;
      if (G) {
        var n = $t,
          r = jt;
        (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = t0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  i0 = {
    readContext: nt,
    useCallback: $f,
    useContext: nt,
    useEffect: Ta,
    useImperativeHandle: jf,
    useInsertionEffect: Pf,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: Li,
    useRef: Rf,
    useState: function () {
      return Li(eo);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = rt();
      return Of(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Li(eo)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: Sf,
    useId: Af,
    unstable_isNewReconciler: !1,
  },
  s0 = {
    readContext: nt,
    useCallback: $f,
    useContext: nt,
    useEffect: Ta,
    useImperativeHandle: jf,
    useInsertionEffect: Pf,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: Ii,
    useRef: Rf,
    useState: function () {
      return Ii(eo);
    },
    useDebugValue: Ra,
    useDeferredValue: function (e) {
      var t = rt();
      return de === null ? (t.memoizedState = e) : Of(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Ii(eo)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: xf,
    useSyncExternalStore: Sf,
    useId: Af,
    unstable_isNewReconciler: !1,
  };
function ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += zm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Fi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Es(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var a0 = typeof WeakMap == "function" ? WeakMap : Map;
function Ff(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Sl || ((Sl = !0), (As = r)), Es(e, t);
    }),
    n
  );
}
function bf(e, t, n) {
  (n = Mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Es(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Es(e, t),
          typeof r != "function" &&
            (qt === null ? (qt = new Set([this])) : qt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new a0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = k0.bind(null, e, t, n)), t.then(e, e));
}
function Zu(e) {
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
function Ju(e, t, n, r, o) {
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
              : ((t = Mt(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var u0 = bt.ReactCurrentOwner,
  Le = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? yf(t, null, n, r) : or(t, e.child, n, r);
}
function qu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Zn(t, o),
    (r = Ca(e, t, n, r, l, o)),
    (n = Ea()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        It(e, t, o))
      : (G && n && da(t), (t.flags |= 1), Ne(e, t, r, o), t.child)
  );
}
function ec(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Aa(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Df(e, t, l, r, o))
      : ((e = Yo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qr), n(i, r) && e.ref === t.ref)
    )
      return It(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = tn(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Df(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Qr(l, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), It(e, t, o);
  }
  return Ts(e, t, n, r, o);
}
function Bf(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(Kn, Ue),
        (Ue |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(Kn, Ue),
          (Ue |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        V(Kn, Ue),
        (Ue |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(Kn, Ue),
      (Ue |= r);
  return Ne(e, t, o, n), t.child;
}
function Uf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ts(e, t, n, r, o) {
  var l = Fe(n) ? vn : Te.current;
  return (
    (l = nr(t, l)),
    Zn(t, o),
    (n = Ca(e, t, n, r, l, o)),
    (r = Ea()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        It(e, t, o))
      : (G && r && da(t), (t.flags |= 1), Ne(e, t, n, o), t.child)
  );
}
function tc(e, t, n, r, o) {
  if (Fe(n)) {
    var l = !0;
    cl(t);
  } else l = !1;
  if ((Zn(t, o), t.stateNode === null))
    Ko(e, t), hf(t, n, r), Cs(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var a = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = nt(u))
      : ((u = Fe(n) ? vn : Te.current), (u = nr(t, u)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Ku(t, i, r, u)),
      (Ht = !1);
    var d = t.memoizedState;
    (i.state = d),
      hl(t, r, i, o),
      (a = t.memoizedState),
      s !== r || d !== a || Ie.current || Ht
        ? (typeof m == "function" && (ks(t, n, m, r), (a = t.memoizedState)),
          (s = Ht || Wu(t, n, s, r, d, a, u))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = u),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      pf(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : ut(t.type, s)),
      (i.props = u),
      (h = t.pendingProps),
      (d = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = nt(a))
        : ((a = Fe(n) ? vn : Te.current), (a = nr(t, a)));
    var x = n.getDerivedStateFromProps;
    (m =
      typeof x == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== h || d !== a) && Ku(t, i, r, a)),
      (Ht = !1),
      (d = t.memoizedState),
      (i.state = d),
      hl(t, r, i, o);
    var v = t.memoizedState;
    s !== h || d !== v || Ie.current || Ht
      ? (typeof x == "function" && (ks(t, n, x, r), (v = t.memoizedState)),
        (u = Ht || Wu(t, n, u, r, d, v, a) || !1)
          ? (m ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, v, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, v, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (i.props = r),
        (i.state = v),
        (i.context = a),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Rs(e, t, n, r, l, o);
}
function Rs(e, t, n, r, o, l) {
  Uf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Du(t, n, !1), It(e, t, l);
  (r = t.stateNode), (u0.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = or(t, e.child, null, l)), (t.child = or(t, null, s, l)))
      : Ne(e, t, s, l),
    (t.memoizedState = r.state),
    o && Du(t, n, !0),
    t.child
  );
}
function Hf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bu(e, t.context, !1),
    xa(e, t.containerInfo);
}
function nc(e, t, n, r, o) {
  return rr(), pa(o), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var Ps = { dehydrated: null, treeContext: null, retryLane: 0 };
function _s(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Vf(e, t, n) {
  var r = t.pendingProps,
    o = X.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    V(X, o & 1),
    e === null)
  )
    return (
      Ss(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = bl(i, r, 0, null)),
              (e = yn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = _s(n)),
              (t.memoizedState = Ps),
              e)
            : Pa(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return c0(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = tn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = tn(s, l)) : ((l = yn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? _s(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ps),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = tn(l, { mode: "visible", children: r.children })),
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
function Pa(e, t) {
  return (
    (t = bl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $o(e, t, n, r) {
  return (
    r !== null && pa(r),
    or(t, e.child, null, n),
    (e = Pa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function c0(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fi(Error(C(422)))), $o(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = bl({ mode: "visible", children: r.children }, o, 0, null)),
        (l = yn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && or(t, e.child, null, i),
        (t.child.memoizedState = _s(i)),
        (t.memoizedState = Ps),
        l);
  if (!(t.mode & 1)) return $o(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(C(419))), (r = Fi(l, r, void 0)), $o(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), Le || s)) {
    if (((r = me), r !== null)) {
      switch (i & -i) {
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
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Lt(e, o), pt(r, e, o, -1));
    }
    return Oa(), (r = Fi(Error(C(421)))), $o(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = C0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ve = Zt(o.nextSibling)),
      (We = t),
      (G = !0),
      (dt = null),
      e !== null &&
        ((Je[qe++] = jt),
        (Je[qe++] = $t),
        (Je[qe++] = xn),
        (jt = e.id),
        ($t = e.overflow),
        (xn = t)),
      (t = Pa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ws(e.return, t, n);
}
function bi(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Wf(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Ne(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rc(e, n, t);
        else if (e.tag === 19) rc(e, n, t);
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
  if ((V(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && gl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          bi(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        bi(t, !0, n, null, l);
        break;
      case "together":
        bi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ko(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function It(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function d0(e, t, n) {
  switch (t.tag) {
    case 3:
      Hf(t), rr();
      break;
    case 5:
      vf(t);
      break;
    case 1:
      Fe(t.type) && cl(t);
      break;
    case 4:
      xa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      V(pl, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Vf(e, t, n)
          : (V(X, X.current & 1),
            (e = It(e, t, n)),
            e !== null ? e.sibling : null);
      V(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Wf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        V(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Bf(e, t, n);
  }
  return It(e, t, n);
}
var Kf, Ns, Qf, Gf;
Kf = function (e, t) {
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
Ns = function () {};
Qf = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), mn(Et.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Zi(e, o)), (r = Zi(e, r)), (l = []);
        break;
      case "select":
        (o = q({}, o, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = es(e, o)), (r = es(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = al);
    }
    ns(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Dr.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (l = l || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Dr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && W("scroll", e),
                  l || s === a || (l = []))
                : (l = l || []).push(u, a));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Gf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wr(e, t) {
  if (!G)
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
function ke(e) {
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
function f0(e, t, n) {
  var r = t.pendingProps;
  switch ((fa(t), t.tag)) {
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
      return ke(t), null;
    case 1:
      return Fe(t.type) && ul(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        lr(),
        K(Ie),
        K(Te),
        wa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (No(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), dt !== null && (Is(dt), (dt = null)))),
        Ns(e, t),
        ke(t),
        null
      );
    case 5:
      Sa(t);
      var o = mn(Jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qf(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ke(t), null;
        }
        if (((e = mn(Et.current)), No(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[wt] = t), (r[Xr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Nr.length; o++) W(Nr[o], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W("error", r), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              fu(r, l), W("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                W("invalid", r);
              break;
            case "textarea":
              mu(r, l), W("invalid", r);
          }
          ns(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      _o(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      _o(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Dr.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              So(r), pu(r, l, !0);
              break;
            case "textarea":
              So(r), hu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = al);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[wt] = t),
            (e[Xr] = r),
            Kf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = rs(n, r)), n)) {
              case "dialog":
                W("cancel", e), W("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Nr.length; o++) W(Nr[o], e);
                o = r;
                break;
              case "source":
                W("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), (o = r);
                break;
              case "details":
                W("toggle", e), (o = r);
                break;
              case "input":
                fu(e, r), (o = Zi(e, r)), W("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = q({}, r, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                mu(e, r), (o = es(e, r)), W("invalid", e);
                break;
              default:
                o = r;
            }
            ns(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var a = s[l];
                l === "style"
                  ? Cd(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && wd(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Br(e, a)
                    : typeof a == "number" && Br(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Dr.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && W("scroll", e)
                      : a != null && Zs(e, l, a, i));
              }
            switch (n) {
              case "input":
                So(e), pu(e, r, !1);
                break;
              case "textarea":
                So(e), hu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Qn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = al);
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
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) Gf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = mn(Jr.current)), mn(Et.current), No(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wt] = t),
            (l = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                _o(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _o(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wt] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (K(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ve !== null && t.mode & 1 && !(t.flags & 128))
          df(), rr(), (t.flags |= 98560), (l = !1);
        else if (((l = No(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(C(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(C(317));
            l[wt] = t;
          } else
            rr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (l = !1);
        } else dt !== null && (Is(dt), (dt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? fe === 0 && (fe = 3) : Oa())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        lr(), Ns(e, t), e === null && Gr(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return ga(t.type._context), ke(t), null;
    case 17:
      return Fe(t.type) && ul(), ke(t), null;
    case 19:
      if ((K(X), (l = t.memoizedState), l === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) wr(l, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = gl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    wr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            re() > sr &&
            ((t.flags |= 128), (r = !0), wr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !G)
            )
              return ke(t), null;
          } else
            2 * re() - l.renderingStartTime > sr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = re()),
          (t.sibling = null),
          (n = X.current),
          V(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        Ma(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ue & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function p0(e, t) {
  switch ((fa(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        lr(),
        K(Ie),
        K(Te),
        wa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Sa(t), null;
    case 13:
      if ((K(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        rr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(X), null;
    case 4:
      return lr(), null;
    case 10:
      return ga(t.type._context), null;
    case 22:
    case 23:
      return Ma(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mo = !1,
  Ee = !1,
  m0 = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function js(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var oc = !1;
function h0(e, t) {
  if (((ps = ll), (e = Zd()), ca(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            a = -1,
            u = 0,
            m = 0,
            h = e,
            d = null;
          t: for (;;) {
            for (
              var x;
              h !== n || (o !== 0 && h.nodeType !== 3) || (s = i + o),
                h !== l || (r !== 0 && h.nodeType !== 3) || (a = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (x = h.firstChild) !== null;

            )
              (d = h), (h = x);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++u === o && (s = i),
                d === l && ++m === r && (a = i),
                (x = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = x;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ms = { focusedElem: e, selectionRange: n }, ll = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    R = v.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : ut(t.type, y),
                      R
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (S) {
          ne(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (v = oc), (oc = !1), v;
}
function Lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && js(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Il(e, t) {
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
function $s(e) {
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
function Yf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Yf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wt], delete t[Xr], delete t[ys], delete t[Zh], delete t[Jh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xf(e.return)) return null;
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
function Ms(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = al));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ms(e, t, n), e = e.sibling; e !== null; ) Ms(e, t, n), (e = e.sibling);
}
function Os(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Os(e, t, n), e = e.sibling; e !== null; ) Os(e, t, n), (e = e.sibling);
}
var ye = null,
  ct = !1;
function Bt(e, t, n) {
  for (n = n.child; n !== null; ) Zf(e, t, n), (n = n.sibling);
}
function Zf(e, t, n) {
  if (Ct && typeof Ct.onCommitFiberUnmount == "function")
    try {
      Ct.onCommitFiberUnmount(Nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || Wn(n, t);
    case 6:
      var r = ye,
        o = ct;
      (ye = null),
        Bt(e, t, n),
        (ye = r),
        (ct = o),
        ye !== null &&
          (ct
            ? ((e = ye),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ye.removeChild(n.stateNode));
      break;
    case 18:
      ye !== null &&
        (ct
          ? ((e = ye),
            (n = n.stateNode),
            e.nodeType === 8
              ? Mi(e.parentNode, n)
              : e.nodeType === 1 && Mi(e, n),
            Wr(e))
          : Mi(ye, n.stateNode));
      break;
    case 4:
      (r = ye),
        (o = ct),
        (ye = n.stateNode.containerInfo),
        (ct = !0),
        Bt(e, t, n),
        (ye = r),
        (ct = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && js(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Bt(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ne(n, t, s);
        }
      Bt(e, t, n);
      break;
    case 21:
      Bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), Bt(e, t, n), (Ee = r))
        : Bt(e, t, n);
      break;
    default:
      Bt(e, t, n);
  }
}
function ic(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new m0()),
      t.forEach(function (r) {
        var o = E0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ye = s.stateNode), (ct = !1);
              break e;
            case 3:
              (ye = s.stateNode.containerInfo), (ct = !0);
              break e;
            case 4:
              (ye = s.stateNode.containerInfo), (ct = !0);
              break e;
          }
          s = s.return;
        }
        if (ye === null) throw Error(C(160));
        Zf(l, i, o), (ye = null), (ct = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        ne(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jf(t, e), (t = t.sibling);
}
function Jf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((at(t, e), yt(e), r & 4)) {
        try {
          Lr(3, e, e.return), Il(3, e);
        } catch (y) {
          ne(e, e.return, y);
        }
        try {
          Lr(5, e, e.return);
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 1:
      at(t, e), yt(e), r & 512 && n !== null && Wn(n, n.return);
      break;
    case 5:
      if (
        (at(t, e),
        yt(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Br(o, "");
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && vd(o, l),
              rs(s, i);
            var u = rs(s, l);
            for (i = 0; i < a.length; i += 2) {
              var m = a[i],
                h = a[i + 1];
              m === "style"
                ? Cd(o, h)
                : m === "dangerouslySetInnerHTML"
                ? wd(o, h)
                : m === "children"
                ? Br(o, h)
                : Zs(o, m, h, u);
            }
            switch (s) {
              case "input":
                Ji(o, l);
                break;
              case "textarea":
                xd(o, l);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var x = l.value;
                x != null
                  ? Qn(o, !!l.multiple, x, !1)
                  : d !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Qn(o, !!l.multiple, l.defaultValue, !0)
                      : Qn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Xr] = l;
          } catch (y) {
            ne(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((at(t, e), yt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (y) {
          ne(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (at(t, e), yt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wr(t.containerInfo);
        } catch (y) {
          ne(e, e.return, y);
        }
      break;
    case 4:
      at(t, e), yt(e);
      break;
    case 13:
      at(t, e),
        yt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (ja = re())),
        r & 4 && ic(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (u = Ee) || m), at(t, e), (Ee = u)) : at(t, e),
        yt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !m && e.mode & 1)
        )
          for ($ = e, m = e.child; m !== null; ) {
            for (h = $ = m; $ !== null; ) {
              switch (((d = $), (x = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lr(4, d, d.return);
                  break;
                case 1:
                  Wn(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      ne(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Wn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ac(h);
                    continue;
                  }
              }
              x !== null ? ((x.return = d), ($ = x)) : ac(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (o = h.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = h.stateNode),
                      (a = h.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = kd("display", i)));
              } catch (y) {
                ne(e, e.return, y);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (y) {
                ne(e, e.return, y);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      at(t, e), yt(e), r & 4 && ic(e);
      break;
    case 21:
      break;
    default:
      at(t, e), yt(e);
  }
}
function yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Br(o, ""), (r.flags &= -33));
          var l = lc(e);
          Os(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = lc(e);
          Ms(e, s, i);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      ne(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function g0(e, t, n) {
  ($ = e), qf(e);
}
function qf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Mo;
      if (!i) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || Ee;
        s = Mo;
        var u = Ee;
        if (((Mo = i), (Ee = a) && !u))
          for ($ = o; $ !== null; )
            (i = $),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? uc(o)
                : a !== null
                ? ((a.return = i), ($ = a))
                : uc(o);
        for (; l !== null; ) ($ = l), qf(l), (l = l.sibling);
        ($ = o), (Mo = s), (Ee = u);
      }
      sc(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), ($ = l)) : sc(e);
  }
}
function sc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || Il(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Vu(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Vu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                  var m = u.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Wr(h);
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
              throw Error(C(163));
          }
        Ee || (t.flags & 512 && $s(t));
      } catch (d) {
        ne(t, t.return, d);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function ac(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function uc(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Il(4, t);
          } catch (a) {
            ne(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ne(t, o, a);
            }
          }
          var l = t.return;
          try {
            $s(t);
          } catch (a) {
            ne(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            $s(t);
          } catch (a) {
            ne(t, i, a);
          }
      }
    } catch (a) {
      ne(t, t.return, a);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), ($ = s);
      break;
    }
    $ = t.return;
  }
}
var y0 = Math.ceil,
  xl = bt.ReactCurrentDispatcher,
  _a = bt.ReactCurrentOwner,
  tt = bt.ReactCurrentBatchConfig,
  F = 0,
  me = null,
  ue = null,
  xe = 0,
  Ue = 0,
  Kn = an(0),
  fe = 0,
  no = null,
  wn = 0,
  Fl = 0,
  Na = 0,
  Ir = null,
  Ae = null,
  ja = 0,
  sr = 1 / 0,
  _t = null,
  Sl = !1,
  As = null,
  qt = null,
  Oo = !1,
  Qt = null,
  wl = 0,
  Fr = 0,
  zs = null,
  Qo = -1,
  Go = 0;
function je() {
  return F & 6 ? re() : Qo !== -1 ? Qo : (Qo = re());
}
function en(e) {
  return e.mode & 1
    ? F & 2 && xe !== 0
      ? xe & -xe
      : e0.transition !== null
      ? (Go === 0 && (Go = zd()), Go)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ud(e.type))),
        e)
    : 1;
}
function pt(e, t, n, r) {
  if (50 < Fr) throw ((Fr = 0), (zs = null), Error(C(185)));
  ao(e, n, r),
    (!(F & 2) || e !== me) &&
      (e === me && (!(F & 2) && (Fl |= n), fe === 4 && Wt(e, xe)),
      be(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((sr = re() + 500), Al && un()));
}
function be(e, t) {
  var n = e.callbackNode;
  eh(e, t);
  var r = ol(e, e === me ? xe : 0);
  if (r === 0)
    n !== null && vu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && vu(n), t === 1))
      e.tag === 0 ? qh(cc.bind(null, e)) : af(cc.bind(null, e)),
        Yh(function () {
          !(F & 6) && un();
        }),
        (n = null);
    else {
      switch (Ld(r)) {
        case 1:
          n = na;
          break;
        case 4:
          n = Od;
          break;
        case 16:
          n = rl;
          break;
        case 536870912:
          n = Ad;
          break;
        default:
          n = rl;
      }
      n = sp(n, ep.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ep(e, t) {
  if (((Qo = -1), (Go = 0), F & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Jn() && e.callbackNode !== n) return null;
  var r = ol(e, e === me ? xe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
  else {
    t = r;
    var o = F;
    F |= 2;
    var l = np();
    (me !== e || xe !== t) && ((_t = null), (sr = re() + 500), gn(e, t));
    do
      try {
        S0();
        break;
      } catch (s) {
        tp(e, s);
      }
    while (1);
    ha(),
      (xl.current = l),
      (F = o),
      ue !== null ? (t = 0) : ((me = null), (xe = 0), (t = fe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = as(e)), o !== 0 && ((r = o), (t = Ls(e, o)))), t === 1)
    )
      throw ((n = no), gn(e, 0), Wt(e, r), be(e, re()), n);
    if (t === 6) Wt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !v0(o) &&
          ((t = kl(e, r)),
          t === 2 && ((l = as(e)), l !== 0 && ((r = l), (t = Ls(e, l)))),
          t === 1))
      )
        throw ((n = no), gn(e, 0), Wt(e, r), be(e, re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          dn(e, Ae, _t);
          break;
        case 3:
          if (
            (Wt(e, r), (r & 130023424) === r && ((t = ja + 500 - re()), 10 < t))
          ) {
            if (ol(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              je(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = gs(dn.bind(null, e, Ae, _t), t);
            break;
          }
          dn(e, Ae, _t);
          break;
        case 4:
          if ((Wt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - ft(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = re() - r),
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
                : 1960 * y0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gs(dn.bind(null, e, Ae, _t), r);
            break;
          }
          dn(e, Ae, _t);
          break;
        case 5:
          dn(e, Ae, _t);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return be(e, re()), e.callbackNode === n ? ep.bind(null, e) : null;
}
function Ls(e, t) {
  var n = Ir;
  return (
    e.current.memoizedState.isDehydrated && (gn(e, t).flags |= 256),
    (e = kl(e, t)),
    e !== 2 && ((t = Ae), (Ae = n), t !== null && Is(t)),
    e
  );
}
function Is(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function v0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!mt(l(), o)) return !1;
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
function Wt(e, t) {
  for (
    t &= ~Na,
      t &= ~Fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cc(e) {
  if (F & 6) throw Error(C(327));
  Jn();
  var t = ol(e, 0);
  if (!(t & 1)) return be(e, re()), null;
  var n = kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = as(e);
    r !== 0 && ((t = r), (n = Ls(e, r)));
  }
  if (n === 1) throw ((n = no), gn(e, 0), Wt(e, t), be(e, re()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    dn(e, Ae, _t),
    be(e, re()),
    null
  );
}
function $a(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((sr = re() + 500), Al && un());
  }
}
function kn(e) {
  Qt !== null && Qt.tag === 0 && !(F & 6) && Jn();
  var t = F;
  F |= 1;
  var n = tt.transition,
    r = U;
  try {
    if (((tt.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (tt.transition = n), (F = t), !(F & 6) && un();
  }
}
function Ma() {
  (Ue = Kn.current), K(Kn);
}
function gn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gh(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((fa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ul();
          break;
        case 3:
          lr(), K(Ie), K(Te), wa();
          break;
        case 5:
          Sa(r);
          break;
        case 4:
          lr();
          break;
        case 13:
          K(X);
          break;
        case 19:
          K(X);
          break;
        case 10:
          ga(r.type._context);
          break;
        case 22:
        case 23:
          Ma();
      }
      n = n.return;
    }
  if (
    ((me = e),
    (ue = e = tn(e.current, null)),
    (xe = Ue = t),
    (fe = 0),
    (no = null),
    (Na = Fl = wn = 0),
    (Ae = Ir = null),
    pn !== null)
  ) {
    for (t = 0; t < pn.length; t++)
      if (((n = pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    pn = null;
  }
  return e;
}
function tp(e, t) {
  do {
    var n = ue;
    try {
      if ((ha(), (Vo.current = vl), yl)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        yl = !1;
      }
      if (
        ((Sn = 0),
        (pe = de = Z = null),
        (zr = !1),
        (qr = 0),
        (_a.current = null),
        n === null || n.return === null)
      ) {
        (fe = 1), (no = t), (ue = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          a = t;
        if (
          ((t = xe),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            m = s,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = m.alternate;
            d
              ? ((m.updateQueue = d.updateQueue),
                (m.memoizedState = d.memoizedState),
                (m.lanes = d.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var x = Zu(i);
          if (x !== null) {
            (x.flags &= -257),
              Ju(x, i, s, l, t),
              x.mode & 1 && Xu(l, u, t),
              (t = x),
              (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Xu(l, u, t), Oa();
              break e;
            }
            a = Error(C(426));
          }
        } else if (G && s.mode & 1) {
          var R = Zu(i);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256),
              Ju(R, i, s, l, t),
              pa(ir(a, s));
            break e;
          }
        }
        (l = a = ir(a, s)),
          fe !== 4 && (fe = 2),
          Ir === null ? (Ir = [l]) : Ir.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = Ff(l, a, t);
              Hu(l, f);
              break e;
            case 1:
              s = a;
              var c = l.type,
                g = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (qt === null || !qt.has(g))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = bf(l, s, t);
                Hu(l, S);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      op(n);
    } catch (w) {
      (t = w), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function np() {
  var e = xl.current;
  return (xl.current = vl), e === null ? vl : e;
}
function Oa() {
  (fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    me === null || (!(wn & 268435455) && !(Fl & 268435455)) || Wt(me, xe);
}
function kl(e, t) {
  var n = F;
  F |= 2;
  var r = np();
  (me !== e || xe !== t) && ((_t = null), gn(e, t));
  do
    try {
      x0();
      break;
    } catch (o) {
      tp(e, o);
    }
  while (1);
  if ((ha(), (F = n), (xl.current = r), ue !== null)) throw Error(C(261));
  return (me = null), (xe = 0), fe;
}
function x0() {
  for (; ue !== null; ) rp(ue);
}
function S0() {
  for (; ue !== null && !Wm(); ) rp(ue);
}
function rp(e) {
  var t = ip(e.alternate, e, Ue);
  (e.memoizedProps = e.pendingProps),
    t === null ? op(e) : (ue = t),
    (_a.current = null);
}
function op(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = p0(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (fe = 6), (ue = null);
        return;
      }
    } else if (((n = f0(n, t, Ue)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function dn(e, t, n) {
  var r = U,
    o = tt.transition;
  try {
    (tt.transition = null), (U = 1), w0(e, t, n, r);
  } finally {
    (tt.transition = o), (U = r);
  }
  return null;
}
function w0(e, t, n, r) {
  do Jn();
  while (Qt !== null);
  if (F & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (th(e, l),
    e === me && ((ue = me = null), (xe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Oo ||
      ((Oo = !0),
      sp(rl, function () {
        return Jn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = tt.transition), (tt.transition = null);
    var i = U;
    U = 1;
    var s = F;
    (F |= 4),
      (_a.current = null),
      h0(e, n),
      Jf(n, e),
      Bh(ms),
      (ll = !!ps),
      (ms = ps = null),
      (e.current = n),
      g0(n),
      Km(),
      (F = s),
      (U = i),
      (tt.transition = l);
  } else e.current = n;
  if (
    (Oo && ((Oo = !1), (Qt = e), (wl = o)),
    (l = e.pendingLanes),
    l === 0 && (qt = null),
    Ym(n.stateNode),
    be(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Sl) throw ((Sl = !1), (e = As), (As = null), e);
  return (
    wl & 1 && e.tag !== 0 && Jn(),
    (l = e.pendingLanes),
    l & 1 ? (e === zs ? Fr++ : ((Fr = 0), (zs = e))) : (Fr = 0),
    un(),
    null
  );
}
function Jn() {
  if (Qt !== null) {
    var e = Ld(wl),
      t = tt.transition,
      n = U;
    try {
      if (((tt.transition = null), (U = 16 > e ? 16 : e), Qt === null))
        var r = !1;
      else {
        if (((e = Qt), (Qt = null), (wl = 0), F & 6)) throw Error(C(331));
        var o = F;
        for (F |= 4, $ = e.current; $ !== null; ) {
          var l = $,
            i = l.child;
          if ($.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for ($ = u; $ !== null; ) {
                  var m = $;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lr(8, m, l);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), ($ = h);
                  else
                    for (; $ !== null; ) {
                      m = $;
                      var d = m.sibling,
                        x = m.return;
                      if ((Yf(m), m === u)) {
                        $ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = x), ($ = d);
                        break;
                      }
                      $ = x;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var R = y.sibling;
                    (y.sibling = null), (y = R);
                  } while (y !== null);
                }
              }
              $ = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), ($ = i);
          else
            e: for (; $ !== null; ) {
              if (((l = $), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Lr(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), ($ = f);
                break e;
              }
              $ = l.return;
            }
        }
        var c = e.current;
        for ($ = c; $ !== null; ) {
          i = $;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) (g.return = i), ($ = g);
          else
            e: for (i = c; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Il(9, s);
                  }
                } catch (w) {
                  ne(s, s.return, w);
                }
              if (s === i) {
                $ = null;
                break e;
              }
              var S = s.sibling;
              if (S !== null) {
                (S.return = s.return), ($ = S);
                break e;
              }
              $ = s.return;
            }
        }
        if (
          ((F = o), un(), Ct && typeof Ct.onPostCommitFiberRoot == "function")
        )
          try {
            Ct.onPostCommitFiberRoot(Nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (tt.transition = t);
    }
  }
  return !1;
}
function dc(e, t, n) {
  (t = ir(n, t)),
    (t = Ff(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = je()),
    e !== null && (ao(e, 1, t), be(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) dc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qt === null || !qt.has(r)))
        ) {
          (e = ir(n, e)),
            (e = bf(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = je()),
            t !== null && (ao(t, 1, e), be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function k0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = je()),
    (e.pingedLanes |= e.suspendedLanes & n),
    me === e &&
      (xe & n) === n &&
      (fe === 4 || (fe === 3 && (xe & 130023424) === xe && 500 > re() - ja)
        ? gn(e, 0)
        : (Na |= n)),
    be(e, t);
}
function lp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Co), (Co <<= 1), !(Co & 130023424) && (Co = 4194304))
      : (t = 1));
  var n = je();
  (e = Lt(e, t)), e !== null && (ao(e, t, n), be(e, n));
}
function C0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), lp(e, n);
}
function E0(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), lp(e, n);
}
var ip;
ip = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), d0(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), G && t.flags & 1048576 && uf(t, fl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ko(e, t), (e = t.pendingProps);
      var o = nr(t, Te.current);
      Zn(t, n), (o = Ca(null, t, r, e, o, n));
      var l = Ea();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((l = !0), cl(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            va(t),
            (o.updater = zl),
            (t.stateNode = o),
            (o._reactInternals = t),
            Cs(t, r, e, n),
            (t = Rs(null, t, r, !0, l, n)))
          : ((t.tag = 0), G && l && da(t), Ne(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ko(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = R0(r)),
          (e = ut(r, e)),
          o)
        ) {
          case 0:
            t = Ts(null, t, r, e, n);
            break e;
          case 1:
            t = tc(null, t, r, e, n);
            break e;
          case 11:
            t = qu(null, t, r, e, n);
            break e;
          case 14:
            t = ec(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        Ts(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        tc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Hf(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          pf(e, t),
          hl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = ir(Error(C(423)), t)), (t = nc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ir(Error(C(424)), t)), (t = nc(e, t, r, n, o));
            break e;
          } else
            for (
              Ve = Zt(t.stateNode.containerInfo.firstChild),
                We = t,
                G = !0,
                dt = null,
                n = yf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((rr(), r === o)) {
            t = It(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        vf(t),
        e === null && Ss(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        hs(r, o) ? (i = null) : l !== null && hs(r, l) && (t.flags |= 32),
        Uf(e, t),
        Ne(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ss(t), null;
    case 13:
      return Vf(e, t, n);
    case 4:
      return (
        xa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = or(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        qu(e, t, r, o, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          V(pl, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (mt(l.value, i)) {
            if (l.children === o.children && !Ie.current) {
              t = It(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = Mt(-1, n & -n)), (a.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var m = u.pending;
                        m === null
                          ? (a.next = a)
                          : ((a.next = m.next), (m.next = a)),
                          (u.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      ws(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(C(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  ws(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Ne(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (o = nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = ut(r, t.pendingProps)),
        (o = ut(r.type, o)),
        ec(e, t, r, o, n)
      );
    case 15:
      return Df(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ut(r, o)),
        Ko(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), cl(t)) : (e = !1),
        Zn(t, n),
        hf(t, r, o),
        Cs(t, r, o, n),
        Rs(null, t, r, !0, e, n)
      );
    case 19:
      return Wf(e, t, n);
    case 22:
      return Bf(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function sp(e, t) {
  return Md(e, t);
}
function T0(e, t, n, r) {
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
function et(e, t, n, r) {
  return new T0(e, t, n, r);
}
function Aa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function R0(e) {
  if (typeof e == "function") return Aa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qs)) return 11;
    if (e === ea) return 14;
  }
  return 2;
}
function tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = et(e.tag, t, e.key, e.mode)),
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
function Yo(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Aa(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ln:
        return yn(n.children, o, l, t);
      case Js:
        (i = 8), (o |= 8);
        break;
      case Qi:
        return (
          (e = et(12, n, t, o | 2)), (e.elementType = Qi), (e.lanes = l), e
        );
      case Gi:
        return (e = et(13, n, t, o)), (e.elementType = Gi), (e.lanes = l), e;
      case Yi:
        return (e = et(19, n, t, o)), (e.elementType = Yi), (e.lanes = l), e;
      case hd:
        return bl(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case pd:
              i = 10;
              break e;
            case md:
              i = 9;
              break e;
            case qs:
              i = 11;
              break e;
            case ea:
              i = 14;
              break e;
            case Ut:
              (i = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = et(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function yn(e, t, n, r) {
  return (e = et(7, e, r, t)), (e.lanes = n), e;
}
function bl(e, t, n, r) {
  return (
    (e = et(22, e, r, t)),
    (e.elementType = hd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Di(e, t, n) {
  return (e = et(6, e, null, t)), (e.lanes = n), e;
}
function Bi(e, t, n) {
  return (
    (t = et(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function P0(e, t, n, r, o) {
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
    (this.eventTimes = wi(0)),
    (this.expirationTimes = wi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function za(e, t, n, r, o, l, i, s, a) {
  return (
    (e = new P0(e, t, n, s, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = et(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    va(l),
    e
  );
}
function _0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ap(e) {
  if (!e) return on;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return sf(e, n, t);
  }
  return t;
}
function up(e, t, n, r, o, l, i, s, a) {
  return (
    (e = za(n, r, !0, e, o, l, i, s, a)),
    (e.context = ap(null)),
    (n = e.current),
    (r = je()),
    (o = en(n)),
    (l = Mt(r, o)),
    (l.callback = t ?? null),
    Jt(n, l, o),
    (e.current.lanes = o),
    ao(e, o, r),
    be(e, r),
    e
  );
}
function Dl(e, t, n, r) {
  var o = t.current,
    l = je(),
    i = en(o);
  return (
    (n = ap(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mt(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jt(o, t, i)),
    e !== null && (pt(e, o, i, l), Ho(e, o, i)),
    i
  );
}
function Cl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function La(e, t) {
  fc(e, t), (e = e.alternate) && fc(e, t);
}
function N0() {
  return null;
}
var cp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ia(e) {
  this._internalRoot = e;
}
Bl.prototype.render = Ia.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Dl(e, t, null, null);
};
Bl.prototype.unmount = Ia.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    kn(function () {
      Dl(null, e, null, null);
    }),
      (t[zt] = null);
  }
};
function Bl(e) {
  this._internalRoot = e;
}
Bl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = bd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && Bd(e);
  }
};
function Fa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function pc() {}
function j0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = Cl(i);
        l.call(u);
      };
    }
    var i = up(t, r, e, 0, null, !1, !1, "", pc);
    return (
      (e._reactRootContainer = i),
      (e[zt] = i.current),
      Gr(e.nodeType === 8 ? e.parentNode : e),
      kn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Cl(a);
      s.call(u);
    };
  }
  var a = za(e, 0, !1, null, null, !1, !1, "", pc);
  return (
    (e._reactRootContainer = a),
    (e[zt] = a.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    kn(function () {
      Dl(t, a, n, r);
    }),
    a
  );
}
function Hl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = Cl(i);
        s.call(a);
      };
    }
    Dl(t, i, e, o);
  } else i = j0(n, t, e, o, r);
  return Cl(i);
}
Id = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _r(t.pendingLanes);
        n !== 0 &&
          (ra(t, n | 1), be(t, re()), !(F & 6) && ((sr = re() + 500), un()));
      }
      break;
    case 13:
      kn(function () {
        var r = Lt(e, 1);
        if (r !== null) {
          var o = je();
          pt(r, e, 1, o);
        }
      }),
        La(e, 1);
  }
};
oa = function (e) {
  if (e.tag === 13) {
    var t = Lt(e, 134217728);
    if (t !== null) {
      var n = je();
      pt(t, e, 134217728, n);
    }
    La(e, 134217728);
  }
};
Fd = function (e) {
  if (e.tag === 13) {
    var t = en(e),
      n = Lt(e, t);
    if (n !== null) {
      var r = je();
      pt(n, e, t, r);
    }
    La(e, t);
  }
};
bd = function () {
  return U;
};
Dd = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
ls = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ji(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ol(r);
            if (!o) throw Error(C(90));
            yd(r), Ji(r, o);
          }
        }
      }
      break;
    case "textarea":
      xd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qn(e, !!n.multiple, t, !1);
  }
};
Rd = $a;
Pd = kn;
var $0 = { usingClientEntryPoint: !1, Events: [co, Dn, Ol, Ed, Td, $a] },
  kr = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  M0 = {
    bundleType: kr.bundleType,
    version: kr.version,
    rendererPackageName: kr.rendererPackageName,
    rendererConfig: kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = jd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: kr.findFiberByHostInstance || N0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ao = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ao.isDisabled && Ao.supportsFiber)
    try {
      (Nl = Ao.inject(M0)), (Ct = Ao);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $0;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fa(t)) throw Error(C(200));
  return _0(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!Fa(e)) throw Error(C(299));
  var n = !1,
    r = "",
    o = cp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = za(e, 1, !1, null, null, n, !1, r, o)),
    (e[zt] = t.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    new Ia(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = jd(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return kn(e);
};
Ge.hydrate = function (e, t, n) {
  if (!Ul(t)) throw Error(C(200));
  return Hl(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!Fa(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = cp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = up(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[zt] = t.current),
    Gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Bl(t);
};
Ge.render = function (e, t, n) {
  if (!Ul(t)) throw Error(C(200));
  return Hl(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!Ul(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (kn(function () {
        Hl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = $a;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ul(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Hl(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function dp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dp);
    } catch (e) {
      console.error(e);
    }
}
dp(), (ad.exports = Ge);
var O0 = ad.exports,
  mc = O0;
(Wi.createRoot = mc.createRoot), (Wi.hydrateRoot = mc.hydrateRoot);
const A0 = "./assets/austrac-logo-73f368bc.svg",
  z0 = () =>
    p.jsx("nav", {
      children: p.jsx("div", {
        className: "Logo",
        children: p.jsx("a", {
          href: "https://www.austrac.gov.au/",
          target: "_blank",
          children: p.jsx("img", { src: A0, alt: "AUSTRAC" }),
        }),
      }),
    }),
  L0 = [
    {
      Username: "MockUser",
      Password: "MockPassword",
      FirstName: "Joe",
      Surname: "Blow",
      WorkTitle: "Chief Compliance Officer",
      AccessType: "Administrator",
      BusinessName: "BANK Limited",
      BusinessAddressLine1: "Sydney Tower, Unit 1, level 36",
      BusinessAddressLine2: "1 Sydney Street",
      Suburb: "Sydney",
      State: "NSW",
      Postcode: "2000",
      PhoneNumber: "0298765432",
    },
  ],
  I0 = [
    {
      ReceiptNumber: "8752463",
      ReportType: "TR",
      FileName: "TR-Submission-5.4.22.xml",
      SubmitMethod: "Manual",
      SubmissionDate: "05.04.2022 17:42:20",
      User: "PeterAdmin",
      ReportingEntity: "BANK Limited",
    },
    {
      ReceiptNumber: "8752464",
      ReportType: "TR",
      FileName: "TR-Submission-6.4.22.xml",
      SubmitMethod: "Manual",
      SubmissionDate: "06.04.2022 07:20:25",
      User: "MockUser",
      ReportingEntity: "BANK Limited",
    },
    {
      ReceiptNumber: "8752465",
      ReportType: "TR",
      FileName: "TR-Submission-7.4.22.xml",
      SubmitMethod: "Manual",
      SubmissionDate: "07.04.2022 12:25:04",
      User: "PeterAdmin",
      ReportingEntity: "BANK Limited",
    },
    {
      ReceiptNumber: "8752466",
      ReportType: "TR",
      FileName: "TR-Submission-8.4.22.xml",
      SubmitMethod: "Manual",
      SubmissionDate: "08.04.2022 15:12:30",
      User: "MockUser",
      ReportingEntity: "BANK Limited",
    },
  ],
  fp = T.createContext(),
  ht = () => T.useContext(fp),
  F0 = ({ children: e }) => {
    const [t, n] = T.useState(L0[0]),
      [r, o] = T.useState(!1),
      [l, i] = T.useState("Login"),
      [s, a] = T.useState(!1),
      [u, m] = T.useState(I0);
    return p.jsx(fp.Provider, {
      value: {
        currentUser: t,
        setCurrentUser: n,
        isLoggedIn: r,
        setIsLoggedIn: o,
        currentPage: l,
        setCurrentPage: i,
        isMenuExpanded: s,
        setIsMenuExpanded: a,
        tRList: u,
        setTRList: m,
      },
      children: e,
    });
  },
  b0 = () => {
    const {
        currentPage: e,
        setCurrentPage: t,
        isLoggedIn: n,
        setIsLoggedIn: r,
      } = ht(),
      o = (l) => {
        console.log(l.target.value);
      };
    return p.jsxs("div", {
      className: "LoginExistingUserContainer",
      children: [
        p.jsx("h2", { children: "Existing User" }),
        p.jsxs("form", {
          action: "",
          className: "UserLoginForm",
          children: [
            p.jsx("label", {
              name: "UserName",
              children: "User / Email Address",
            }),
            p.jsx("input", { type: "text", value: "MockUser", onChange: o }),
            p.jsx("label", { name: "Password", children: "Password" }),
            p.jsx("input", {
              type: "password",
              value: "MockPassword",
              onChange: o,
            }),
            p.jsx("button", {
              className: "GreenBtn",
              onClick: () => {
                r(!0), t("AOHome");
              },
              children: "Login",
            }),
          ],
        }),
        p.jsx("p", {
          children: p.jsx("a", {
            href: "#",
            children: "Forgot your password?",
          }),
        }),
      ],
    });
  },
  D0 = () => {
    const { setCurrentPage: e } = ht();
    return p.jsxs("div", {
      className: "LoginNewUserContainer",
      children: [
        p.jsx("h2", { children: "New User" }),
        p.jsx("button", {
          className: "GreenBtn",
          onClick: () => e("AccountDetails"),
          children: "Sign Up",
        }),
        p.jsx("p", {
          children: p.jsx("a", {
            href: "https://www.austrac.gov.au/business/new-to-austrac/check-if-you-need-enrol-or-register",
            target: "_blank",
            children: "Who needs to sign up?",
          }),
        }),
      ],
    });
  },
  B0 = ({ setCurrentPage: e }) => (
    ht(),
    p.jsxs("div", {
      className: "LoginPage",
      children: [
        p.jsxs("section", {
          children: [
            p.jsx("h1", { children: "AUSTRAC Online" }),
            p.jsxs("div", {
              className: "LoginContainer",
              children: [p.jsx(b0, {}), p.jsx(D0, { setCurrentPage: e })],
            }),
          ],
        }),
        p.jsxs("footer", {
          className: "LoginFooter",
          children: [
            p.jsx("p", {
              children:
                "If you require assistance, please contact the AUSTRAC Contact Centre on email: contact@austrac.gov.au",
            }),
            p.jsx("p", {
              children:
                "Ph (within Australia): 1300 021 037 - Ph (international): +61 2 9950 0055",
            }),
            p.jsx("p", {
              children:
                "If you need a translator in order to speak to AUSTRAC, please call the Translating and Interpreting Service on 131 450",
            }),
            p.jsx("p", {
              children: "and ask them to call AUSTRAC on 1300 021 037.",
            }),
            p.jsxs("p", {
              children: [
                "For more information about AUSTRAC, please visit the",
                p.jsx("a", {
                  href: "https://www.austrac.gov.au/",
                  target: "_blank",
                  children: " AUSTRAC website",
                }),
                ".",
              ],
            }),
          ],
        }),
      ],
    })
  ),
  U0 = { black: "#000", white: "#fff" },
  ro = U0,
  H0 = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Nn = H0,
  V0 = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  jn = V0,
  W0 = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  $n = W0,
  K0 = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Mn = K0,
  Q0 = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  On = Q0,
  G0 = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Cr = G0,
  Y0 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  X0 = Y0;
function N() {
  return (
    (N = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    N.apply(this, arguments)
  );
}
function An(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function pp(e) {
  if (!An(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = pp(e[n]);
    }),
    t
  );
}
function Ot(e, t, n = { clone: !0 }) {
  const r = n.clone ? N({}, e) : e;
  return (
    An(e) &&
      An(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (An(t[o]) && o in e && An(e[o])
            ? (r[o] = Ot(e[o], t[o], n))
            : n.clone
            ? (r[o] = An(t[o]) ? pp(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function ar(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function J(e) {
  if (typeof e != "string") throw new Error(ar(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Z0(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const J0 = typeof window < "u" ? T.useLayoutEffect : T.useEffect,
  q0 = J0;
function zo(e) {
  const t = T.useRef(e);
  return (
    q0(() => {
      t.current = e;
    }),
    T.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function hc(...e) {
  return T.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Z0(n, t);
            });
          },
    e
  );
}
let Vl = !0,
  Fs = !1,
  gc;
const eg = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function tg(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && eg[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function ng(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Vl = !0);
}
function Ui() {
  Vl = !1;
}
function rg() {
  this.visibilityState === "hidden" && Fs && (Vl = !0);
}
function og(e) {
  e.addEventListener("keydown", ng, !0),
    e.addEventListener("mousedown", Ui, !0),
    e.addEventListener("pointerdown", Ui, !0),
    e.addEventListener("touchstart", Ui, !0),
    e.addEventListener("visibilitychange", rg, !0);
}
function lg(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Vl || tg(t);
}
function ig() {
  const e = T.useCallback((o) => {
      o != null && og(o.ownerDocument);
    }, []),
    t = T.useRef(!1);
  function n() {
    return t.current
      ? ((Fs = !0),
        window.clearTimeout(gc),
        (gc = window.setTimeout(() => {
          Fs = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return lg(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function mp(e, t) {
  const n = N({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = N({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          l = t[r];
        (n[r] = {}),
          !l || !Object.keys(l)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = l)
            : ((n[r] = N({}, l)),
              Object.keys(o).forEach((i) => {
                n[r][i] = mp(o[i], l[i]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function gt(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((l, i) => {
          if (i) {
            const s = t(i);
            s !== "" && l.push(s), n && n[i] && l.push(n[i]);
          }
          return l;
        }, [])
        .join(" ");
    }),
    r
  );
}
const yc = (e) => e,
  sg = () => {
    let e = yc;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = yc;
      },
    };
  },
  ag = sg(),
  ug = ag,
  cg = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function ot(e, t, n = "Mui") {
  const r = cg[t];
  return r ? `${n}-${r}` : `${ug.generate(e)}-${t}`;
}
function lt(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = ot(e, o, n);
    }),
    r
  );
}
const hp = "$$material";
function oe(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function gp(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var dg =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  fg = gp(function (e) {
    return (
      dg.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function pg(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function mg(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var hg = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var l;
        r.tags.length === 0
          ? r.insertionPoint
            ? (l = r.insertionPoint.nextSibling)
            : r.prepend
            ? (l = r.container.firstChild)
            : (l = r.before)
          : (l = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, l),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
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
          this._insertTag(mg(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var l = pg(o);
          try {
            l.insertRule(r, l.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ce = "-ms-",
  El = "-moz-",
  b = "-webkit-",
  yp = "comm",
  ba = "rule",
  Da = "decl",
  gg = "@import",
  vp = "@keyframes",
  yg = "@layer",
  vg = Math.abs,
  Wl = String.fromCharCode,
  xg = Object.assign;
function Sg(e, t) {
  return ve(e, 0) ^ 45
    ? (((((((t << 2) ^ ve(e, 0)) << 2) ^ ve(e, 1)) << 2) ^ ve(e, 2)) << 2) ^
        ve(e, 3)
    : 0;
}
function xp(e) {
  return e.trim();
}
function wg(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function D(e, t, n) {
  return e.replace(t, n);
}
function bs(e, t) {
  return e.indexOf(t);
}
function ve(e, t) {
  return e.charCodeAt(t) | 0;
}
function oo(e, t, n) {
  return e.slice(t, n);
}
function xt(e) {
  return e.length;
}
function Ba(e) {
  return e.length;
}
function Lo(e, t) {
  return t.push(e), e;
}
function kg(e, t) {
  return e.map(t).join("");
}
var Kl = 1,
  ur = 1,
  Sp = 0,
  De = 0,
  ae = 0,
  pr = "";
function Ql(e, t, n, r, o, l, i) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: l,
    line: Kl,
    column: ur,
    length: i,
    return: "",
  };
}
function Er(e, t) {
  return xg(Ql("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Cg() {
  return ae;
}
function Eg() {
  return (
    (ae = De > 0 ? ve(pr, --De) : 0), ur--, ae === 10 && ((ur = 1), Kl--), ae
  );
}
function Ke() {
  return (
    (ae = De < Sp ? ve(pr, De++) : 0), ur++, ae === 10 && ((ur = 1), Kl++), ae
  );
}
function Tt() {
  return ve(pr, De);
}
function Xo() {
  return De;
}
function po(e, t) {
  return oo(pr, e, t);
}
function lo(e) {
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
function wp(e) {
  return (Kl = ur = 1), (Sp = xt((pr = e))), (De = 0), [];
}
function kp(e) {
  return (pr = ""), e;
}
function Zo(e) {
  return xp(po(De - 1, Ds(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Tg(e) {
  for (; (ae = Tt()) && ae < 33; ) Ke();
  return lo(e) > 2 || lo(ae) > 3 ? "" : " ";
}
function Rg(e, t) {
  for (
    ;
    --t &&
    Ke() &&
    !(ae < 48 || ae > 102 || (ae > 57 && ae < 65) || (ae > 70 && ae < 97));

  );
  return po(e, Xo() + (t < 6 && Tt() == 32 && Ke() == 32));
}
function Ds(e) {
  for (; Ke(); )
    switch (ae) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ds(ae);
        break;
      case 40:
        e === 41 && Ds(e);
        break;
      case 92:
        Ke();
        break;
    }
  return De;
}
function Pg(e, t) {
  for (; Ke() && e + ae !== 47 + 10; )
    if (e + ae === 42 + 42 && Tt() === 47) break;
  return "/*" + po(t, De - 1) + "*" + Wl(e === 47 ? e : Ke());
}
function _g(e) {
  for (; !lo(Tt()); ) Ke();
  return po(e, De);
}
function Ng(e) {
  return kp(Jo("", null, null, null, [""], (e = wp(e)), 0, [0], e));
}
function Jo(e, t, n, r, o, l, i, s, a) {
  for (
    var u = 0,
      m = 0,
      h = i,
      d = 0,
      x = 0,
      v = 0,
      y = 1,
      R = 1,
      f = 1,
      c = 0,
      g = "",
      S = o,
      w = l,
      E = r,
      k = g;
    R;

  )
    switch (((v = c), (c = Ke()))) {
      case 40:
        if (v != 108 && ve(k, h - 1) == 58) {
          bs((k += D(Zo(c), "&", "&\f")), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Zo(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += Tg(v);
        break;
      case 92:
        k += Rg(Xo() - 1, 7);
        continue;
      case 47:
        switch (Tt()) {
          case 42:
          case 47:
            Lo(jg(Pg(Ke(), Xo()), t, n), a);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * y:
        s[u++] = xt(k) * f;
      case 125 * y:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            R = 0;
          case 59 + m:
            f == -1 && (k = D(k, /\f/g, "")),
              x > 0 &&
                xt(k) - h &&
                Lo(
                  x > 32
                    ? xc(k + ";", r, n, h - 1)
                    : xc(D(k, " ", "") + ";", r, n, h - 2),
                  a
                );
            break;
          case 59:
            k += ";";
          default:
            if (
              (Lo((E = vc(k, t, n, u, m, o, s, g, (S = []), (w = []), h)), l),
              c === 123)
            )
              if (m === 0) Jo(k, t, E, E, S, l, h, s, w);
              else
                switch (d === 99 && ve(k, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Jo(
                      e,
                      E,
                      E,
                      r && Lo(vc(e, E, E, 0, 0, o, s, g, o, (S = []), h), w),
                      o,
                      w,
                      h,
                      s,
                      r ? S : w
                    );
                    break;
                  default:
                    Jo(k, E, E, E, [""], w, 0, s, w);
                }
        }
        (u = m = x = 0), (y = f = 1), (g = k = ""), (h = i);
        break;
      case 58:
        (h = 1 + xt(k)), (x = v);
      default:
        if (y < 1) {
          if (c == 123) --y;
          else if (c == 125 && y++ == 0 && Eg() == 125) continue;
        }
        switch (((k += Wl(c)), c * y)) {
          case 38:
            f = m > 0 ? 1 : ((k += "\f"), -1);
            break;
          case 44:
            (s[u++] = (xt(k) - 1) * f), (f = 1);
            break;
          case 64:
            Tt() === 45 && (k += Zo(Ke())),
              (d = Tt()),
              (m = h = xt((g = k += _g(Xo())))),
              c++;
            break;
          case 45:
            v === 45 && xt(k) == 2 && (y = 0);
        }
    }
  return l;
}
function vc(e, t, n, r, o, l, i, s, a, u, m) {
  for (
    var h = o - 1, d = o === 0 ? l : [""], x = Ba(d), v = 0, y = 0, R = 0;
    v < r;
    ++v
  )
    for (var f = 0, c = oo(e, h + 1, (h = vg((y = i[v])))), g = e; f < x; ++f)
      (g = xp(y > 0 ? d[f] + " " + c : D(c, /&\f/g, d[f]))) && (a[R++] = g);
  return Ql(e, t, n, o === 0 ? ba : s, a, u, m);
}
function jg(e, t, n) {
  return Ql(e, t, n, yp, Wl(Cg()), oo(e, 2, -2), 0);
}
function xc(e, t, n, r) {
  return Ql(e, t, n, Da, oo(e, 0, r), oo(e, r + 1, -1), r);
}
function qn(e, t) {
  for (var n = "", r = Ba(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function $g(e, t, n, r) {
  switch (e.type) {
    case yg:
      if (e.children.length) break;
    case gg:
    case Da:
      return (e.return = e.return || e.value);
    case yp:
      return "";
    case vp:
      return (e.return = e.value + "{" + qn(e.children, r) + "}");
    case ba:
      e.value = e.props.join(",");
  }
  return xt((n = qn(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Mg(e) {
  var t = Ba(e);
  return function (n, r, o, l) {
    for (var i = "", s = 0; s < t; s++) i += e[s](n, r, o, l) || "";
    return i;
  };
}
function Og(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Ag = function (t, n, r) {
    for (
      var o = 0, l = 0;
      (o = l), (l = Tt()), o === 38 && l === 12 && (n[r] = 1), !lo(l);

    )
      Ke();
    return po(t, De);
  },
  zg = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (lo(o)) {
        case 0:
          o === 38 && Tt() === 12 && (n[r] = 1), (t[r] += Ag(De - 1, n, r));
          break;
        case 2:
          t[r] += Zo(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = Tt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Wl(o);
      }
    while ((o = Ke()));
    return t;
  },
  Lg = function (t, n) {
    return kp(zg(wp(t), n));
  },
  Sc = new WeakMap(),
  Ig = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Sc.get(r)) &&
        !o
      ) {
        Sc.set(t, !0);
        for (
          var l = [], i = Lg(n, l), s = r.props, a = 0, u = 0;
          a < i.length;
          a++
        )
          for (var m = 0; m < s.length; m++, u++)
            t.props[u] = l[a] ? i[a].replace(/&\f/g, s[m]) : s[m] + " " + i[a];
      }
    }
  },
  Fg = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Cp(e, t) {
  switch (Sg(e, t)) {
    case 5103:
      return b + "print-" + e + e;
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
      return b + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return b + e + El + e + Ce + e + e;
    case 6828:
    case 4268:
      return b + e + Ce + e + e;
    case 6165:
      return b + e + Ce + "flex-" + e + e;
    case 5187:
      return (
        b + e + D(e, /(\w+).+(:[^]+)/, b + "box-$1$2" + Ce + "flex-$1$2") + e
      );
    case 5443:
      return b + e + Ce + "flex-item-" + D(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        b +
        e +
        Ce +
        "flex-line-pack" +
        D(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return b + e + Ce + D(e, "shrink", "negative") + e;
    case 5292:
      return b + e + Ce + D(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        b +
        "box-" +
        D(e, "-grow", "") +
        b +
        e +
        Ce +
        D(e, "grow", "positive") +
        e
      );
    case 4554:
      return b + D(e, /([^-])(transform)/g, "$1" + b + "$2") + e;
    case 6187:
      return (
        D(D(D(e, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, b + "$1$`$1");
    case 4968:
      return (
        D(
          D(e, /(.+:)(flex-)?(.*)/, b + "box-pack:$3" + Ce + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        b +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, b + "$1$2") + e;
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
      if (xt(e) - 1 - t > 6)
        switch (ve(e, t + 1)) {
          case 109:
            if (ve(e, t + 4) !== 45) break;
          case 102:
            return (
              D(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  b +
                  "$2-$3$1" +
                  El +
                  (ve(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~bs(e, "stretch")
              ? Cp(D(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ve(e, t + 1) !== 115) break;
    case 6444:
      switch (ve(e, xt(e) - 3 - (~bs(e, "!important") && 10))) {
        case 107:
          return D(e, ":", ":" + b) + e;
        case 101:
          return (
            D(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                b +
                (ve(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                b +
                "$2$3$1" +
                Ce +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ve(e, t + 11)) {
        case 114:
          return b + e + Ce + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return b + e + Ce + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return b + e + Ce + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return b + e + Ce + e + e;
  }
  return e;
}
var bg = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Da:
          t.return = Cp(t.value, t.length);
          break;
        case vp:
          return qn([Er(t, { value: D(t.value, "@", "@" + b) })], o);
        case ba:
          if (t.length)
            return kg(t.props, function (l) {
              switch (wg(l, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return qn(
                    [Er(t, { props: [D(l, /:(read-\w+)/, ":" + El + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return qn(
                    [
                      Er(t, {
                        props: [D(l, /:(plac\w+)/, ":" + b + "input-$1")],
                      }),
                      Er(t, { props: [D(l, /:(plac\w+)/, ":" + El + "$1")] }),
                      Er(t, { props: [D(l, /:(plac\w+)/, Ce + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  Dg = [bg],
  Bg = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (y) {
        var R = y.getAttribute("data-emotion");
        R.indexOf(" ") !== -1 &&
          (document.head.appendChild(y), y.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || Dg,
      l = {},
      i,
      s = [];
    (i = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (y) {
          for (
            var R = y.getAttribute("data-emotion").split(" "), f = 1;
            f < R.length;
            f++
          )
            l[R[f]] = !0;
          s.push(y);
        }
      );
    var a,
      u = [Ig, Fg];
    {
      var m,
        h = [
          $g,
          Og(function (y) {
            m.insert(y);
          }),
        ],
        d = Mg(u.concat(o, h)),
        x = function (R) {
          return qn(Ng(R), d);
        };
      a = function (R, f, c, g) {
        (m = c),
          x(R ? R + "{" + f.styles + "}" : f.styles),
          g && (v.inserted[f.name] = !0);
      };
    }
    var v = {
      key: n,
      sheet: new hg({
        key: n,
        container: i,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: l,
      registered: {},
      insert: a,
    };
    return v.sheet.hydrate(s), v;
  },
  Ep = { exports: {} },
  H = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var he = typeof Symbol == "function" && Symbol.for,
  Ua = he ? Symbol.for("react.element") : 60103,
  Ha = he ? Symbol.for("react.portal") : 60106,
  Gl = he ? Symbol.for("react.fragment") : 60107,
  Yl = he ? Symbol.for("react.strict_mode") : 60108,
  Xl = he ? Symbol.for("react.profiler") : 60114,
  Zl = he ? Symbol.for("react.provider") : 60109,
  Jl = he ? Symbol.for("react.context") : 60110,
  Va = he ? Symbol.for("react.async_mode") : 60111,
  ql = he ? Symbol.for("react.concurrent_mode") : 60111,
  ei = he ? Symbol.for("react.forward_ref") : 60112,
  ti = he ? Symbol.for("react.suspense") : 60113,
  Ug = he ? Symbol.for("react.suspense_list") : 60120,
  ni = he ? Symbol.for("react.memo") : 60115,
  ri = he ? Symbol.for("react.lazy") : 60116,
  Hg = he ? Symbol.for("react.block") : 60121,
  Vg = he ? Symbol.for("react.fundamental") : 60117,
  Wg = he ? Symbol.for("react.responder") : 60118,
  Kg = he ? Symbol.for("react.scope") : 60119;
function Xe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ua:
        switch (((e = e.type), e)) {
          case Va:
          case ql:
          case Gl:
          case Xl:
          case Yl:
          case ti:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Jl:
              case ei:
              case ri:
              case ni:
              case Zl:
                return e;
              default:
                return t;
            }
        }
      case Ha:
        return t;
    }
  }
}
function Tp(e) {
  return Xe(e) === ql;
}
H.AsyncMode = Va;
H.ConcurrentMode = ql;
H.ContextConsumer = Jl;
H.ContextProvider = Zl;
H.Element = Ua;
H.ForwardRef = ei;
H.Fragment = Gl;
H.Lazy = ri;
H.Memo = ni;
H.Portal = Ha;
H.Profiler = Xl;
H.StrictMode = Yl;
H.Suspense = ti;
H.isAsyncMode = function (e) {
  return Tp(e) || Xe(e) === Va;
};
H.isConcurrentMode = Tp;
H.isContextConsumer = function (e) {
  return Xe(e) === Jl;
};
H.isContextProvider = function (e) {
  return Xe(e) === Zl;
};
H.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ua;
};
H.isForwardRef = function (e) {
  return Xe(e) === ei;
};
H.isFragment = function (e) {
  return Xe(e) === Gl;
};
H.isLazy = function (e) {
  return Xe(e) === ri;
};
H.isMemo = function (e) {
  return Xe(e) === ni;
};
H.isPortal = function (e) {
  return Xe(e) === Ha;
};
H.isProfiler = function (e) {
  return Xe(e) === Xl;
};
H.isStrictMode = function (e) {
  return Xe(e) === Yl;
};
H.isSuspense = function (e) {
  return Xe(e) === ti;
};
H.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Gl ||
    e === ql ||
    e === Xl ||
    e === Yl ||
    e === ti ||
    e === Ug ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ri ||
        e.$$typeof === ni ||
        e.$$typeof === Zl ||
        e.$$typeof === Jl ||
        e.$$typeof === ei ||
        e.$$typeof === Vg ||
        e.$$typeof === Wg ||
        e.$$typeof === Kg ||
        e.$$typeof === Hg))
  );
};
H.typeOf = Xe;
Ep.exports = H;
var Qg = Ep.exports,
  Rp = Qg,
  Gg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Yg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Pp = {};
Pp[Rp.ForwardRef] = Gg;
Pp[Rp.Memo] = Yg;
var Xg = !0;
function Zg(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var _p = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || Xg === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Jg = function (t, n, r) {
    _p(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var l = n;
      do t.insert(n === l ? "." + o : "", l, t.sheet, !0), (l = l.next);
      while (l !== void 0);
    }
  };
function qg(e) {
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
var e1 = {
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
  t1 = /[A-Z]|^ms/g,
  n1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Np = function (t) {
    return t.charCodeAt(1) === 45;
  },
  wc = function (t) {
    return t != null && typeof t != "boolean";
  },
  Hi = gp(function (e) {
    return Np(e) ? e : e.replace(t1, "-$&").toLowerCase();
  }),
  kc = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(n1, function (r, o, l) {
            return (St = { name: o, styles: l, next: St }), o;
          });
    }
    return e1[t] !== 1 && !Np(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function io(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (St = { name: n.name, styles: n.styles, next: St }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (St = { name: r.name, styles: r.styles, next: St }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return r1(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = St,
          i = n(e);
        return (St = l), io(e, t, i);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function r1(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += io(e, t, n[o]) + ";";
  else
    for (var l in n) {
      var i = n[l];
      if (typeof i != "object")
        t != null && t[i] !== void 0
          ? (r += l + "{" + t[i] + "}")
          : wc(i) && (r += Hi(l) + ":" + kc(l, i) + ";");
      else if (
        Array.isArray(i) &&
        typeof i[0] == "string" &&
        (t == null || t[i[0]] === void 0)
      )
        for (var s = 0; s < i.length; s++)
          wc(i[s]) && (r += Hi(l) + ":" + kc(l, i[s]) + ";");
      else {
        var a = io(e, t, i);
        switch (l) {
          case "animation":
          case "animationName": {
            r += Hi(l) + ":" + a + ";";
            break;
          }
          default:
            r += l + "{" + a + "}";
        }
      }
    }
  return r;
}
var Cc = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  St,
  jp = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      l = "";
    St = void 0;
    var i = t[0];
    i == null || i.raw === void 0
      ? ((o = !1), (l += io(r, n, i)))
      : (l += i[0]);
    for (var s = 1; s < t.length; s++) (l += io(r, n, t[s])), o && (l += i[s]);
    Cc.lastIndex = 0;
    for (var a = "", u; (u = Cc.exec(l)) !== null; ) a += "-" + u[1];
    var m = qg(l) + a;
    return { name: m, styles: l, next: St };
  },
  o1 = function (t) {
    return t();
  },
  l1 = au["useInsertionEffect"] ? au["useInsertionEffect"] : !1,
  i1 = l1 || o1,
  $p = T.createContext(typeof HTMLElement < "u" ? Bg({ key: "css" }) : null);
$p.Provider;
var s1 = function (t) {
    return T.forwardRef(function (n, r) {
      var o = T.useContext($p);
      return t(n, o, r);
    });
  },
  Mp = T.createContext({});
function a1() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return jp(t);
}
var Wa = function () {
    var t = a1.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  u1 = fg,
  c1 = function (t) {
    return t !== "theme";
  },
  Ec = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? u1 : c1;
  },
  Tc = function (t, n, r) {
    var o;
    if (n) {
      var l = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && l
          ? function (i) {
              return t.__emotion_forwardProp(i) && l(i);
            }
          : l;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  d1 = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      _p(n, r, o),
      i1(function () {
        return Jg(n, r, o);
      }),
      null
    );
  },
  f1 = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      l,
      i;
    n !== void 0 && ((l = n.label), (i = n.target));
    var s = Tc(t, n, r),
      a = s || Ec(o),
      u = !a("as");
    return function () {
      var m = arguments,
        h =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (l !== void 0 && h.push("label:" + l + ";"),
        m[0] == null || m[0].raw === void 0)
      )
        h.push.apply(h, m);
      else {
        h.push(m[0][0]);
        for (var d = m.length, x = 1; x < d; x++) h.push(m[x], m[0][x]);
      }
      var v = s1(function (y, R, f) {
        var c = (u && y.as) || o,
          g = "",
          S = [],
          w = y;
        if (y.theme == null) {
          w = {};
          for (var E in y) w[E] = y[E];
          w.theme = T.useContext(Mp);
        }
        typeof y.className == "string"
          ? (g = Zg(R.registered, S, y.className))
          : y.className != null && (g = y.className + " ");
        var k = jp(h.concat(S), R.registered, w);
        (g += R.key + "-" + k.name), i !== void 0 && (g += " " + i);
        var j = u && s === void 0 ? Ec(c) : a,
          z = {};
        for (var P in y) (u && P === "as") || (j(P) && (z[P] = y[P]));
        return (
          (z.className = g),
          (z.ref = f),
          T.createElement(
            T.Fragment,
            null,
            T.createElement(d1, {
              cache: R,
              serialized: k,
              isStringTag: typeof c == "string",
            }),
            T.createElement(c, z)
          )
        );
      });
      return (
        (v.displayName =
          l !== void 0
            ? l
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (v.defaultProps = t.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = o),
        (v.__emotion_styles = h),
        (v.__emotion_forwardProp = s),
        Object.defineProperty(v, "toString", {
          value: function () {
            return "." + i;
          },
        }),
        (v.withComponent = function (y, R) {
          return e(y, N({}, n, R, { shouldForwardProp: Tc(v, R, !0) })).apply(
            void 0,
            h
          );
        }),
        v
      );
    };
  },
  p1 = [
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
  Bs = f1.bind();
p1.forEach(function (e) {
  Bs[e] = Bs(e);
});
/**
 * @mui/styled-engine v5.14.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function m1(e, t) {
  return Bs(e, t);
}
const h1 = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  },
  g1 = ["values", "unit", "step"],
  y1 = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => N({}, n, { [r.key]: r.val }), {})
    );
  };
function v1(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = oe(e, g1),
    l = y1(t),
    i = Object.keys(l);
  function s(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${
      (typeof t[d] == "number" ? t[d] : d) - r / 100
    }${n})`;
  }
  function u(d, x) {
    const v = i.indexOf(x);
    return `@media (min-width:${
      typeof t[d] == "number" ? t[d] : d
    }${n}) and (max-width:${
      (v !== -1 && typeof t[i[v]] == "number" ? t[i[v]] : x) - r / 100
    }${n})`;
  }
  function m(d) {
    return i.indexOf(d) + 1 < i.length ? u(d, i[i.indexOf(d) + 1]) : s(d);
  }
  function h(d) {
    const x = i.indexOf(d);
    return x === 0
      ? s(i[1])
      : x === i.length - 1
      ? a(i[x])
      : u(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return N(
    {
      keys: i,
      values: l,
      up: s,
      down: a,
      between: u,
      only: m,
      not: h,
      unit: n,
    },
    o
  );
}
const x1 = { borderRadius: 4 },
  S1 = x1;
function br(e, t) {
  return t ? Ot(e, t, { clone: !1 }) : e;
}
const Ka = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Rc = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Ka[e]}px)`,
  };
function Ft(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const l = r.breakpoints || Rc;
    return t.reduce((i, s, a) => ((i[l.up(l.keys[a])] = n(t[a])), i), {});
  }
  if (typeof t == "object") {
    const l = r.breakpoints || Rc;
    return Object.keys(t).reduce((i, s) => {
      if (Object.keys(l.values || Ka).indexOf(s) !== -1) {
        const a = l.up(s);
        i[a] = n(t[s], s);
      } else {
        const a = s;
        i[a] = t[a];
      }
      return i;
    }, {});
  }
  return n(t);
}
function w1(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const l = e.up(o);
          return (r[l] = {}), r;
        }, {})) || {}
  );
}
function k1(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function oi(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, l) => (o && o[l] ? o[l] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Tl(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = oi(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function B(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    l = (i) => {
      if (i[t] == null) return null;
      const s = i[t],
        a = i.theme,
        u = oi(a, r) || {};
      return Ft(i, s, (h) => {
        let d = Tl(u, o, h);
        return (
          h === d &&
            typeof h == "string" &&
            (d = Tl(u, o, `${t}${h === "default" ? "" : J(h)}`, h)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (l.propTypes = {}), (l.filterProps = [t]), l;
}
function C1(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const E1 = { m: "margin", p: "padding" },
  T1 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Pc = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  R1 = C1((e) => {
    if (e.length > 2)
      if (Pc[e]) e = Pc[e];
      else return [e];
    const [t, n] = e.split(""),
      r = E1[t],
      o = T1[n] || "";
    return Array.isArray(o) ? o.map((l) => r + l) : [r + o];
  }),
  Qa = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Ga = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Qa, ...Ga];
function mo(e, t, n, r) {
  var o;
  const l = (o = oi(e, t, !1)) != null ? o : n;
  return typeof l == "number"
    ? (i) => (typeof i == "string" ? i : l * i)
    : Array.isArray(l)
    ? (i) => (typeof i == "string" ? i : l[i])
    : typeof l == "function"
    ? l
    : () => {};
}
function Op(e) {
  return mo(e, "spacing", 8);
}
function ho(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function P1(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = ho(t, n)), r), {});
}
function _1(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = R1(n),
    l = P1(o, r),
    i = e[n];
  return Ft(e, i, l);
}
function Ap(e, t) {
  const n = Op(e.theme);
  return Object.keys(e)
    .map((r) => _1(e, t, r, n))
    .reduce(br, {});
}
function ee(e) {
  return Ap(e, Qa);
}
ee.propTypes = {};
ee.filterProps = Qa;
function te(e) {
  return Ap(e, Ga);
}
te.propTypes = {};
te.filterProps = Ga;
function N1(e = 8) {
  if (e.mui) return e;
  const t = Op({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((l) => {
          const i = t(l);
          return typeof i == "number" ? `${i}px` : i;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function li(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((l) => {
          r[l] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, l) => (t[l] ? br(o, t[l](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function kt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const j1 = B({ prop: "border", themeKey: "borders", transform: kt }),
  $1 = B({ prop: "borderTop", themeKey: "borders", transform: kt }),
  M1 = B({ prop: "borderRight", themeKey: "borders", transform: kt }),
  O1 = B({ prop: "borderBottom", themeKey: "borders", transform: kt }),
  A1 = B({ prop: "borderLeft", themeKey: "borders", transform: kt }),
  z1 = B({ prop: "borderColor", themeKey: "palette" }),
  L1 = B({ prop: "borderTopColor", themeKey: "palette" }),
  I1 = B({ prop: "borderRightColor", themeKey: "palette" }),
  F1 = B({ prop: "borderBottomColor", themeKey: "palette" }),
  b1 = B({ prop: "borderLeftColor", themeKey: "palette" }),
  ii = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = mo(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: ho(t, r) });
      return Ft(e, e.borderRadius, n);
    }
    return null;
  };
ii.propTypes = {};
ii.filterProps = ["borderRadius"];
li(j1, $1, M1, O1, A1, z1, L1, I1, F1, b1, ii);
const si = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = mo(e.theme, "spacing", 8),
      n = (r) => ({ gap: ho(t, r) });
    return Ft(e, e.gap, n);
  }
  return null;
};
si.propTypes = {};
si.filterProps = ["gap"];
const ai = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = mo(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: ho(t, r) });
    return Ft(e, e.columnGap, n);
  }
  return null;
};
ai.propTypes = {};
ai.filterProps = ["columnGap"];
const ui = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = mo(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: ho(t, r) });
    return Ft(e, e.rowGap, n);
  }
  return null;
};
ui.propTypes = {};
ui.filterProps = ["rowGap"];
const D1 = B({ prop: "gridColumn" }),
  B1 = B({ prop: "gridRow" }),
  U1 = B({ prop: "gridAutoFlow" }),
  H1 = B({ prop: "gridAutoColumns" }),
  V1 = B({ prop: "gridAutoRows" }),
  W1 = B({ prop: "gridTemplateColumns" }),
  K1 = B({ prop: "gridTemplateRows" }),
  Q1 = B({ prop: "gridTemplateAreas" }),
  G1 = B({ prop: "gridArea" });
li(si, ai, ui, D1, B1, U1, H1, V1, W1, K1, Q1, G1);
function er(e, t) {
  return t === "grey" ? t : e;
}
const Y1 = B({ prop: "color", themeKey: "palette", transform: er }),
  X1 = B({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: er,
  }),
  Z1 = B({ prop: "backgroundColor", themeKey: "palette", transform: er });
li(Y1, X1, Z1);
function He(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const J1 = B({ prop: "width", transform: He }),
  Ya = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (r = r.breakpoints) == null ||
            (r = r.values) == null
              ? void 0
              : r[n]) ||
            Ka[n] ||
            He(n),
        };
      };
      return Ft(e, e.maxWidth, t);
    }
    return null;
  };
Ya.filterProps = ["maxWidth"];
const q1 = B({ prop: "minWidth", transform: He }),
  ey = B({ prop: "height", transform: He }),
  ty = B({ prop: "maxHeight", transform: He }),
  ny = B({ prop: "minHeight", transform: He });
B({ prop: "size", cssProperty: "width", transform: He });
B({ prop: "size", cssProperty: "height", transform: He });
const ry = B({ prop: "boxSizing" });
li(J1, Ya, q1, ey, ty, ny, ry);
const oy = {
    border: { themeKey: "borders", transform: kt },
    borderTop: { themeKey: "borders", transform: kt },
    borderRight: { themeKey: "borders", transform: kt },
    borderBottom: { themeKey: "borders", transform: kt },
    borderLeft: { themeKey: "borders", transform: kt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: ii },
    color: { themeKey: "palette", transform: er },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: er,
    },
    backgroundColor: { themeKey: "palette", transform: er },
    p: { style: te },
    pt: { style: te },
    pr: { style: te },
    pb: { style: te },
    pl: { style: te },
    px: { style: te },
    py: { style: te },
    padding: { style: te },
    paddingTop: { style: te },
    paddingRight: { style: te },
    paddingBottom: { style: te },
    paddingLeft: { style: te },
    paddingX: { style: te },
    paddingY: { style: te },
    paddingInline: { style: te },
    paddingInlineStart: { style: te },
    paddingInlineEnd: { style: te },
    paddingBlock: { style: te },
    paddingBlockStart: { style: te },
    paddingBlockEnd: { style: te },
    m: { style: ee },
    mt: { style: ee },
    mr: { style: ee },
    mb: { style: ee },
    ml: { style: ee },
    mx: { style: ee },
    my: { style: ee },
    margin: { style: ee },
    marginTop: { style: ee },
    marginRight: { style: ee },
    marginBottom: { style: ee },
    marginLeft: { style: ee },
    marginX: { style: ee },
    marginY: { style: ee },
    marginInline: { style: ee },
    marginInlineStart: { style: ee },
    marginInlineEnd: { style: ee },
    marginBlock: { style: ee },
    marginBlockStart: { style: ee },
    marginBlockEnd: { style: ee },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: si },
    rowGap: { style: ui },
    columnGap: { style: ai },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: He },
    maxWidth: { style: Ya },
    minWidth: { transform: He },
    height: { transform: He },
    maxHeight: { transform: He },
    minHeight: { transform: He },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Xa = oy;
function ly(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function iy(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function sy() {
  function e(n, r, o, l) {
    const i = { [n]: r, theme: o },
      s = l[n];
    if (!s) return { [n]: r };
    const { cssProperty: a = n, themeKey: u, transform: m, style: h } = s;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const d = oi(o, u) || {};
    return h
      ? h(i)
      : Ft(i, r, (v) => {
          let y = Tl(d, m, v);
          return (
            v === y &&
              typeof v == "string" &&
              (y = Tl(d, m, `${n}${v === "default" ? "" : J(v)}`, v)),
            a === !1 ? y : { [a]: y }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: l = {} } = n || {};
    if (!o) return null;
    const i = (r = l.unstable_sxConfig) != null ? r : Xa;
    function s(a) {
      let u = a;
      if (typeof a == "function") u = a(l);
      else if (typeof a != "object") return a;
      if (!u) return null;
      const m = w1(l.breakpoints),
        h = Object.keys(m);
      let d = m;
      return (
        Object.keys(u).forEach((x) => {
          const v = iy(u[x], l);
          if (v != null)
            if (typeof v == "object")
              if (i[x]) d = br(d, e(x, v, l, i));
              else {
                const y = Ft({ theme: l }, v, (R) => ({ [x]: R }));
                ly(y, v) ? (d[x] = t({ sx: v, theme: l })) : (d = br(d, y));
              }
            else d = br(d, e(x, v, l, i));
        }),
        k1(h, d)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const zp = sy();
zp.filterProps = ["sx"];
const Za = zp,
  ay = ["breakpoints", "palette", "spacing", "shape"];
function Ja(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: l = {} } = e,
    i = oe(e, ay),
    s = v1(n),
    a = N1(o);
  let u = Ot(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: N({ mode: "light" }, r),
      spacing: a,
      shape: N({}, S1, l),
    },
    i
  );
  return (
    (u = t.reduce((m, h) => Ot(m, h), u)),
    (u.unstable_sxConfig = N({}, Xa, i == null ? void 0 : i.unstable_sxConfig)),
    (u.unstable_sx = function (h) {
      return Za({ sx: h, theme: this });
    }),
    u
  );
}
function uy(e) {
  return Object.keys(e).length === 0;
}
function cy(e = null) {
  const t = T.useContext(Mp);
  return !t || uy(t) ? e : t;
}
const dy = Ja();
function fy(e = dy) {
  return cy(e);
}
function Lp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Lp(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function se() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Lp(e)) && (r && (r += " "), (r += t));
  return r;
}
const py = ["variant"];
function _c(e) {
  return e.length === 0;
}
function Ip(e) {
  const { variant: t } = e,
    n = oe(e, py);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += _c(r) ? e[o] : J(e[o]))
          : (r += `${_c(r) ? o : J(o)}${J(e[o].toString())}`);
      }),
    r
  );
}
const my = [
  "name",
  "slot",
  "skipVariantsResolver",
  "skipSx",
  "overridesResolver",
];
function hy(e) {
  return Object.keys(e).length === 0;
}
function gy(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const yy = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  vy = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const l = Ip(o.props);
        r[l] = o.style;
      }),
      r
    );
  },
  xy = (e, t, n, r) => {
    var o;
    const { ownerState: l = {} } = e,
      i = [],
      s =
        n == null || (o = n.components) == null || (o = o[r]) == null
          ? void 0
          : o.variants;
    return (
      s &&
        s.forEach((a) => {
          let u = !0;
          Object.keys(a.props).forEach((m) => {
            l[m] !== a.props[m] && e[m] !== a.props[m] && (u = !1);
          }),
            u && i.push(t[Ip(a.props)]);
        }),
      i
    );
  };
function qo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Sy = Ja(),
  wy = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Tr({ defaultTheme: e, theme: t, themeId: n }) {
  return hy(t) ? e : t[n] || t;
}
function ky(e) {
  return e ? (t, n) => n[e] : null;
}
function Cy(e = {}) {
  const {
      themeId: t,
      defaultTheme: n = Sy,
      rootShouldForwardProp: r = qo,
      slotShouldForwardProp: o = qo,
    } = e,
    l = (i) =>
      Za(N({}, i, { theme: Tr(N({}, i, { defaultTheme: n, themeId: t })) }));
  return (
    (l.__mui_systemSx = !0),
    (i, s = {}) => {
      h1(i, (S) => S.filter((w) => !(w != null && w.__mui_systemSx)));
      const {
          name: a,
          slot: u,
          skipVariantsResolver: m,
          skipSx: h,
          overridesResolver: d = ky(wy(u)),
        } = s,
        x = oe(s, my),
        v = m !== void 0 ? m : (u && u !== "Root" && u !== "root") || !1,
        y = h || !1;
      let R,
        f = qo;
      u === "Root" || u === "root"
        ? (f = r)
        : u
        ? (f = o)
        : gy(i) && (f = void 0);
      const c = m1(i, N({ shouldForwardProp: f, label: R }, x)),
        g = (S, ...w) => {
          const E = w
            ? w.map((P) =>
                typeof P == "function" && P.__emotion_real !== P
                  ? (I) =>
                      P(
                        N({}, I, {
                          theme: Tr(N({}, I, { defaultTheme: n, themeId: t })),
                        })
                      )
                  : P
              )
            : [];
          let k = S;
          a &&
            d &&
            E.push((P) => {
              const I = Tr(N({}, P, { defaultTheme: n, themeId: t })),
                le = yy(a, I);
              if (le) {
                const ce = {};
                return (
                  Object.entries(le).forEach(([Re, Pe]) => {
                    ce[Re] =
                      typeof Pe == "function" ? Pe(N({}, P, { theme: I })) : Pe;
                  }),
                  d(P, ce)
                );
              }
              return null;
            }),
            a &&
              !v &&
              E.push((P) => {
                const I = Tr(N({}, P, { defaultTheme: n, themeId: t }));
                return xy(P, vy(a, I), I, a);
              }),
            y || E.push(l);
          const j = E.length - w.length;
          if (Array.isArray(S) && j > 0) {
            const P = new Array(j).fill("");
            (k = [...S, ...P]), (k.raw = [...S.raw, ...P]);
          } else
            typeof S == "function" &&
              S.__emotion_real !== S &&
              (k = (P) =>
                S(
                  N({}, P, {
                    theme: Tr(N({}, P, { defaultTheme: n, themeId: t })),
                  })
                ));
          const z = c(k, ...E);
          return i.muiName && (z.muiName = i.muiName), z;
        };
      return c.withConfig && (g.withConfig = c.withConfig), g;
    }
  );
}
function Ey(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : mp(t.components[n].defaultProps, r);
}
function Ty({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = fy(n);
  return r && (o = o[r] || o), Ey({ theme: o, name: t, props: e });
}
function qa(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function Ry(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Cn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Cn(Ry(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(ar(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(ar(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((l) => parseFloat(l))), { type: n, values: r, colorSpace: o }
  );
}
function ci(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, l) => (l < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function Py(e) {
  e = Cn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    l = r * Math.min(o, 1 - o),
    i = (u, m = (u + n / 30) % 12) =>
      o - l * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let s = "rgb";
  const a = [
    Math.round(i(0) * 255),
    Math.round(i(8) * 255),
    Math.round(i(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), a.push(t[3])), ci({ type: s, values: a })
  );
}
function Nc(e) {
  e = Cn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Cn(Py(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function _y(e, t) {
  const n = Nc(e),
    r = Nc(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ln(e, t) {
  return (
    (e = Cn(e)),
    (t = qa(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    ci(e)
  );
}
function Rl(e, t) {
  if (((e = Cn(e)), (t = qa(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return ci(e);
}
function Pl(e, t) {
  if (((e = Cn(e)), (t = qa(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return ci(e);
}
function Ny(e, t) {
  return N(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const jy = ["mode", "contrastThreshold", "tonalOffset"],
  jc = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ro.white, default: ro.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Vi = {
    text: {
      primary: ro.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: ro.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function $c(e, t, n, r) {
  const o = r.light || r,
    l = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = Pl(e.main, o))
      : t === "dark" && (e.dark = Rl(e.main, l)));
}
function $y(e = "light") {
  return e === "dark"
    ? { main: $n[200], light: $n[50], dark: $n[400] }
    : { main: $n[700], light: $n[400], dark: $n[800] };
}
function My(e = "light") {
  return e === "dark"
    ? { main: jn[200], light: jn[50], dark: jn[400] }
    : { main: jn[500], light: jn[300], dark: jn[700] };
}
function Oy(e = "light") {
  return e === "dark"
    ? { main: Nn[500], light: Nn[300], dark: Nn[700] }
    : { main: Nn[700], light: Nn[400], dark: Nn[800] };
}
function Ay(e = "light") {
  return e === "dark"
    ? { main: Mn[400], light: Mn[300], dark: Mn[700] }
    : { main: Mn[700], light: Mn[500], dark: Mn[900] };
}
function zy(e = "light") {
  return e === "dark"
    ? { main: On[400], light: On[300], dark: On[700] }
    : { main: On[800], light: On[500], dark: On[900] };
}
function Ly(e = "light") {
  return e === "dark"
    ? { main: Cr[400], light: Cr[300], dark: Cr[700] }
    : { main: "#ed6c02", light: Cr[500], dark: Cr[900] };
}
function Iy(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = oe(e, jy),
    l = e.primary || $y(t),
    i = e.secondary || My(t),
    s = e.error || Oy(t),
    a = e.info || Ay(t),
    u = e.success || zy(t),
    m = e.warning || Ly(t);
  function h(y) {
    return _y(y, Vi.text.primary) >= n ? Vi.text.primary : jc.text.primary;
  }
  const d = ({
      color: y,
      name: R,
      mainShade: f = 500,
      lightShade: c = 300,
      darkShade: g = 700,
    }) => {
      if (
        ((y = N({}, y)),
        !y.main && y[f] && (y.main = y[f]),
        !y.hasOwnProperty("main"))
      )
        throw new Error(ar(11, R ? ` (${R})` : "", f));
      if (typeof y.main != "string")
        throw new Error(ar(12, R ? ` (${R})` : "", JSON.stringify(y.main)));
      return (
        $c(y, "light", c, r),
        $c(y, "dark", g, r),
        y.contrastText || (y.contrastText = h(y.main)),
        y
      );
    },
    x = { dark: Vi, light: jc };
  return Ot(
    N(
      {
        common: N({}, ro),
        mode: t,
        primary: d({ color: l, name: "primary" }),
        secondary: d({
          color: i,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: s, name: "error" }),
        warning: d({ color: m, name: "warning" }),
        info: d({ color: a, name: "info" }),
        success: d({ color: u, name: "success" }),
        grey: X0,
        contrastThreshold: n,
        getContrastText: h,
        augmentColor: d,
        tonalOffset: r,
      },
      x[t]
    ),
    o
  );
}
const Fy = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function by(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Mc = { textTransform: "uppercase" },
  Oc = '"Roboto", "Helvetica", "Arial", sans-serif';
function Dy(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Oc,
      fontSize: o = 14,
      fontWeightLight: l = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: u = 16,
      allVariants: m,
      pxToRem: h,
    } = n,
    d = oe(n, Fy),
    x = o / 14,
    v = h || ((f) => `${(f / u) * x}rem`),
    y = (f, c, g, S, w) =>
      N(
        { fontFamily: r, fontWeight: f, fontSize: v(c), lineHeight: g },
        r === Oc ? { letterSpacing: `${by(S / c)}em` } : {},
        w,
        m
      ),
    R = {
      h1: y(l, 96, 1.167, -1.5),
      h2: y(l, 60, 1.2, -0.5),
      h3: y(i, 48, 1.167, 0),
      h4: y(i, 34, 1.235, 0.25),
      h5: y(i, 24, 1.334, 0),
      h6: y(s, 20, 1.6, 0.15),
      subtitle1: y(i, 16, 1.75, 0.15),
      subtitle2: y(s, 14, 1.57, 0.1),
      body1: y(i, 16, 1.5, 0.15),
      body2: y(i, 14, 1.43, 0.15),
      button: y(s, 14, 1.75, 0.4, Mc),
      caption: y(i, 12, 1.66, 0.4),
      overline: y(i, 12, 2.66, 1, Mc),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Ot(
    N(
      {
        htmlFontSize: u,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: l,
        fontWeightRegular: i,
        fontWeightMedium: s,
        fontWeightBold: a,
      },
      R
    ),
    d,
    { clone: !1 }
  );
}
const By = 0.2,
  Uy = 0.14,
  Hy = 0.12;
function Q(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${By})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Uy})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Hy})`,
  ].join(",");
}
const Vy = [
    "none",
    Q(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Q(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Q(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Q(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Q(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Q(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Q(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Q(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Q(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Q(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Q(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Q(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Q(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Q(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Q(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Q(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Q(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Q(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Q(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Q(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Q(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Q(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Q(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Q(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Wy = Vy,
  Ky = ["duration", "easing", "delay"],
  Qy = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Gy = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Ac(e) {
  return `${Math.round(e)}ms`;
}
function Yy(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Xy(e) {
  const t = N({}, Qy, e.easing),
    n = N({}, Gy, e.duration);
  return N(
    {
      getAutoHeightDuration: Yy,
      create: (o = ["all"], l = {}) => {
        const {
          duration: i = n.standard,
          easing: s = t.easeInOut,
          delay: a = 0,
        } = l;
        return (
          oe(l, Ky),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof i == "string" ? i : Ac(i)} ${s} ${
                  typeof a == "string" ? a : Ac(a)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const Zy = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Jy = Zy,
  qy = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function ev(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: l = {},
    } = e,
    i = oe(e, qy);
  if (e.vars) throw new Error(ar(18));
  const s = Iy(r),
    a = Ja(e);
  let u = Ot(a, {
    mixins: Ny(a.breakpoints, n),
    palette: s,
    shadows: Wy.slice(),
    typography: Dy(s, l),
    transitions: Xy(o),
    zIndex: N({}, Jy),
  });
  return (
    (u = Ot(u, i)),
    (u = t.reduce((m, h) => Ot(m, h), u)),
    (u.unstable_sxConfig = N({}, Xa, i == null ? void 0 : i.unstable_sxConfig)),
    (u.unstable_sx = function (h) {
      return Za({ sx: h, theme: this });
    }),
    u
  );
}
const tv = ev(),
  Fp = tv;
function it({ props: e, name: t }) {
  return Ty({ props: e, name: t, defaultTheme: Fp, themeId: hp });
}
const nv = (e) => qo(e) && e !== "classes",
  rv = Cy({ themeId: hp, defaultTheme: Fp, rootShouldForwardProp: nv }),
  ge = rv,
  ov = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  },
  zc = ov;
function lv(e) {
  return ot("MuiSvgIcon", e);
}
lt("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const iv = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  sv = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${J(t)}`, `fontSize${J(n)}`],
      };
    return gt(o, lv, r);
  },
  av = ge("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${J(n.color)}`],
        t[`fontSize${J(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, l, i, s, a, u, m, h, d, x, v;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (o = o.duration) == null
                  ? void 0
                  : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((l = e.typography) == null || (i = l.pxToRem) == null
            ? void 0
            : i.call(l, 20)) || "1.25rem",
        medium:
          ((s = e.typography) == null || (a = s.pxToRem) == null
            ? void 0
            : a.call(s, 24)) || "1.5rem",
        large:
          ((u = e.typography) == null || (m = u.pxToRem) == null
            ? void 0
            : m.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (h =
          (d = (e.vars || e).palette) == null || (d = d[t.color]) == null
            ? void 0
            : d.main) != null
          ? h
          : {
              action:
                (x = (e.vars || e).palette) == null || (x = x.action) == null
                  ? void 0
                  : x.active,
              disabled:
                (v = (e.vars || e).palette) == null || (v = v.action) == null
                  ? void 0
                  : v.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  bp = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: l,
        color: i = "inherit",
        component: s = "svg",
        fontSize: a = "medium",
        htmlColor: u,
        inheritViewBox: m = !1,
        titleAccess: h,
        viewBox: d = "0 0 24 24",
      } = r,
      x = oe(r, iv),
      v = T.isValidElement(o) && o.type === "svg",
      y = N({}, r, {
        color: i,
        component: s,
        fontSize: a,
        instanceFontSize: t.fontSize,
        inheritViewBox: m,
        viewBox: d,
        hasSvgAsChild: v,
      }),
      R = {};
    m || (R.viewBox = d);
    const f = sv(y);
    return p.jsxs(
      av,
      N(
        {
          as: s,
          className: se(f.root, l),
          focusable: "false",
          color: u,
          "aria-hidden": h ? void 0 : !0,
          role: h ? "img" : void 0,
          ref: n,
        },
        R,
        x,
        v && o.props,
        {
          ownerState: y,
          children: [
            v ? o.props.children : o,
            h ? p.jsx("title", { children: h }) : null,
          ],
        }
      )
    );
  });
bp.muiName = "SvgIcon";
const Lc = bp;
function go(e, t) {
  function n(r, o) {
    return p.jsx(
      Lc,
      N({ "data-testid": `${t}Icon`, ref: o }, r, { children: e })
    );
  }
  return (n.muiName = Lc.muiName), T.memo(T.forwardRef(n));
}
function Us(e, t) {
  return (
    (Us = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Us(e, t)
  );
}
function uv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Us(e, t);
}
const Ic = ze.createContext(null);
function cv(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function eu(e, t) {
  var n = function (l) {
      return t && T.isValidElement(l) ? t(l) : l;
    },
    r = Object.create(null);
  return (
    e &&
      T.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function dv(e, t) {
  (e = e || {}), (t = t || {});
  function n(m) {
    return m in t ? t[m] : e[m];
  }
  var r = Object.create(null),
    o = [];
  for (var l in e) l in t ? o.length && ((r[l] = o), (o = [])) : o.push(l);
  var i,
    s = {};
  for (var a in t) {
    if (r[a])
      for (i = 0; i < r[a].length; i++) {
        var u = r[a][i];
        s[r[a][i]] = n(u);
      }
    s[a] = n(a);
  }
  for (i = 0; i < o.length; i++) s[o[i]] = n(o[i]);
  return s;
}
function hn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function fv(e, t) {
  return eu(e.children, function (n) {
    return T.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: hn(n, "appear", e),
      enter: hn(n, "enter", e),
      exit: hn(n, "exit", e),
    });
  });
}
function pv(e, t, n) {
  var r = eu(e.children),
    o = dv(t, r);
  return (
    Object.keys(o).forEach(function (l) {
      var i = o[l];
      if (T.isValidElement(i)) {
        var s = l in t,
          a = l in r,
          u = t[l],
          m = T.isValidElement(u) && !u.props.in;
        a && (!s || m)
          ? (o[l] = T.cloneElement(i, {
              onExited: n.bind(null, i),
              in: !0,
              exit: hn(i, "exit", e),
              enter: hn(i, "enter", e),
            }))
          : !a && s && !m
          ? (o[l] = T.cloneElement(i, { in: !1 }))
          : a &&
            s &&
            T.isValidElement(u) &&
            (o[l] = T.cloneElement(i, {
              onExited: n.bind(null, i),
              in: u.props.in,
              exit: hn(i, "exit", e),
              enter: hn(i, "enter", e),
            }));
      }
    }),
    o
  );
}
var mv =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  hv = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  tu = (function (e) {
    uv(t, e);
    function t(r, o) {
      var l;
      l = e.call(this, r, o) || this;
      var i = l.handleExited.bind(cv(l));
      return (
        (l.state = {
          contextValue: { isMounting: !0 },
          handleExited: i,
          firstRender: !0,
        }),
        l
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, l) {
        var i = l.children,
          s = l.handleExited,
          a = l.firstRender;
        return { children: a ? fv(o, s) : pv(o, i, s), firstRender: !1 };
      }),
      (n.handleExited = function (o, l) {
        var i = eu(this.props.children);
        o.key in i ||
          (o.props.onExited && o.props.onExited(l),
          this.mounted &&
            this.setState(function (s) {
              var a = N({}, s.children);
              return delete a[o.key], { children: a };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          l = o.component,
          i = o.childFactory,
          s = oe(o, ["component", "childFactory"]),
          a = this.state.contextValue,
          u = mv(this.state.children).map(i);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          l === null
            ? ze.createElement(Ic.Provider, { value: a }, u)
            : ze.createElement(
                Ic.Provider,
                { value: a },
                ze.createElement(l, s, u)
              )
        );
      }),
      t
    );
  })(ze.Component);
tu.propTypes = {};
tu.defaultProps = hv;
const gv = tu;
function yv(e) {
  return ot("MuiPaper", e);
}
lt("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const vv = ["className", "component", "elevation", "square", "variant"],
  xv = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      l = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return gt(l, yv, o);
  },
  Sv = ge("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return N(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        N(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${ln(
                "#fff",
                zc(t.elevation)
              )}, ${ln("#fff", zc(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  wv = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: l = "div",
        elevation: i = 1,
        square: s = !1,
        variant: a = "elevation",
      } = r,
      u = oe(r, vv),
      m = N({}, r, { component: l, elevation: i, square: s, variant: a }),
      h = xv(m);
    return p.jsx(
      Sv,
      N({ as: l, ownerState: m, className: se(h.root, o), ref: n }, u)
    );
  }),
  Dp = wv;
function kv(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: l,
      rippleSize: i,
      in: s,
      onExited: a,
      timeout: u,
    } = e,
    [m, h] = T.useState(!1),
    d = se(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    x = { width: i, height: i, top: -(i / 2) + l, left: -(i / 2) + o },
    v = se(n.child, m && n.childLeaving, r && n.childPulsate);
  return (
    !s && !m && h(!0),
    T.useEffect(() => {
      if (!s && a != null) {
        const y = setTimeout(a, u);
        return () => {
          clearTimeout(y);
        };
      }
    }, [a, s, u]),
    p.jsx("span", {
      className: d,
      style: x,
      children: p.jsx("span", { className: v }),
    })
  );
}
const Cv = lt("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Ze = Cv,
  Ev = ["center", "classes", "className"];
let di = (e) => e,
  Fc,
  bc,
  Dc,
  Bc;
const Hs = 550,
  Tv = 80,
  Rv = Wa(
    Fc ||
      (Fc = di`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  Pv = Wa(
    bc ||
      (bc = di`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  _v = Wa(
    Dc ||
      (Dc = di`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  Nv = ge("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  jv = ge(kv, { name: "MuiTouchRipple", slot: "Ripple" })(
    Bc ||
      (Bc = di`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    Ze.rippleVisible,
    Rv,
    Hs,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ze.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Ze.child,
    Ze.childLeaving,
    Pv,
    Hs,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ze.childPulsate,
    _v,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  $v = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: l = {}, className: i } = r,
      s = oe(r, Ev),
      [a, u] = T.useState([]),
      m = T.useRef(0),
      h = T.useRef(null);
    T.useEffect(() => {
      h.current && (h.current(), (h.current = null));
    }, [a]);
    const d = T.useRef(!1),
      x = T.useRef(0),
      v = T.useRef(null),
      y = T.useRef(null);
    T.useEffect(
      () => () => {
        x.current && clearTimeout(x.current);
      },
      []
    );
    const R = T.useCallback(
        (S) => {
          const {
            pulsate: w,
            rippleX: E,
            rippleY: k,
            rippleSize: j,
            cb: z,
          } = S;
          u((P) => [
            ...P,
            p.jsx(
              jv,
              {
                classes: {
                  ripple: se(l.ripple, Ze.ripple),
                  rippleVisible: se(l.rippleVisible, Ze.rippleVisible),
                  ripplePulsate: se(l.ripplePulsate, Ze.ripplePulsate),
                  child: se(l.child, Ze.child),
                  childLeaving: se(l.childLeaving, Ze.childLeaving),
                  childPulsate: se(l.childPulsate, Ze.childPulsate),
                },
                timeout: Hs,
                pulsate: w,
                rippleX: E,
                rippleY: k,
                rippleSize: j,
              },
              m.current
            ),
          ]),
            (m.current += 1),
            (h.current = z);
        },
        [l]
      ),
      f = T.useCallback(
        (S = {}, w = {}, E = () => {}) => {
          const {
            pulsate: k = !1,
            center: j = o || w.pulsate,
            fakeElement: z = !1,
          } = w;
          if ((S == null ? void 0 : S.type) === "mousedown" && d.current) {
            d.current = !1;
            return;
          }
          (S == null ? void 0 : S.type) === "touchstart" && (d.current = !0);
          const P = z ? null : y.current,
            I = P
              ? P.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let le, ce, Re;
          if (
            j ||
            S === void 0 ||
            (S.clientX === 0 && S.clientY === 0) ||
            (!S.clientX && !S.touches)
          )
            (le = Math.round(I.width / 2)), (ce = Math.round(I.height / 2));
          else {
            const { clientX: Pe, clientY: Be } =
              S.touches && S.touches.length > 0 ? S.touches[0] : S;
            (le = Math.round(Pe - I.left)), (ce = Math.round(Be - I.top));
          }
          if (j)
            (Re = Math.sqrt((2 * I.width ** 2 + I.height ** 2) / 3)),
              Re % 2 === 0 && (Re += 1);
          else {
            const Pe =
                Math.max(Math.abs((P ? P.clientWidth : 0) - le), le) * 2 + 2,
              Be =
                Math.max(Math.abs((P ? P.clientHeight : 0) - ce), ce) * 2 + 2;
            Re = Math.sqrt(Pe ** 2 + Be ** 2);
          }
          S != null && S.touches
            ? v.current === null &&
              ((v.current = () => {
                R({
                  pulsate: k,
                  rippleX: le,
                  rippleY: ce,
                  rippleSize: Re,
                  cb: E,
                });
              }),
              (x.current = setTimeout(() => {
                v.current && (v.current(), (v.current = null));
              }, Tv)))
            : R({
                pulsate: k,
                rippleX: le,
                rippleY: ce,
                rippleSize: Re,
                cb: E,
              });
        },
        [o, R]
      ),
      c = T.useCallback(() => {
        f({}, { pulsate: !0 });
      }, [f]),
      g = T.useCallback((S, w) => {
        if (
          (clearTimeout(x.current),
          (S == null ? void 0 : S.type) === "touchend" && v.current)
        ) {
          v.current(),
            (v.current = null),
            (x.current = setTimeout(() => {
              g(S, w);
            }));
          return;
        }
        (v.current = null),
          u((E) => (E.length > 0 ? E.slice(1) : E)),
          (h.current = w);
      }, []);
    return (
      T.useImperativeHandle(n, () => ({ pulsate: c, start: f, stop: g }), [
        c,
        f,
        g,
      ]),
      p.jsx(
        Nv,
        N({ className: se(Ze.root, l.root, i), ref: y }, s, {
          children: p.jsx(gv, { component: null, exit: !0, children: a }),
        })
      )
    );
  }),
  Mv = $v;
function Ov(e) {
  return ot("MuiButtonBase", e);
}
const Av = lt("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  zv = Av,
  Lv = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  Iv = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      i = gt({ root: ["root", t && "disabled", n && "focusVisible"] }, Ov, o);
    return n && r && (i.root += ` ${r}`), i;
  },
  Fv = ge("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${zv.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  bv = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: l = !1,
        children: i,
        className: s,
        component: a = "button",
        disabled: u = !1,
        disableRipple: m = !1,
        disableTouchRipple: h = !1,
        focusRipple: d = !1,
        LinkComponent: x = "a",
        onBlur: v,
        onClick: y,
        onContextMenu: R,
        onDragLeave: f,
        onFocus: c,
        onFocusVisible: g,
        onKeyDown: S,
        onKeyUp: w,
        onMouseDown: E,
        onMouseLeave: k,
        onMouseUp: j,
        onTouchEnd: z,
        onTouchMove: P,
        onTouchStart: I,
        tabIndex: le = 0,
        TouchRippleProps: ce,
        touchRippleRef: Re,
        type: Pe,
      } = r,
      Be = oe(r, Lv),
      Rt = T.useRef(null),
      _ = T.useRef(null),
      M = hc(_, Re),
      { isFocusVisibleRef: O, onFocus: Y, onBlur: ie, ref: Rn } = ig(),
      [_e, Dt] = T.useState(!1);
    u && _e && Dt(!1),
      T.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            Dt(!0), Rt.current.focus();
          },
        }),
        []
      );
    const [st, Pn] = T.useState(!1);
    T.useEffect(() => {
      Pn(!0);
    }, []);
    const Wp = st && !m && !u;
    T.useEffect(() => {
      _e && d && !m && st && _.current.pulsate();
    }, [m, d, _e, st]);
    function Pt(A, ru, im = h) {
      return zo(
        (ou) => (ru && ru(ou), !im && _.current && _.current[A](ou), !0)
      );
    }
    const Kp = Pt("start", E),
      Qp = Pt("stop", R),
      Gp = Pt("stop", f),
      Yp = Pt("stop", j),
      Xp = Pt("stop", (A) => {
        _e && A.preventDefault(), k && k(A);
      }),
      Zp = Pt("start", I),
      Jp = Pt("stop", z),
      qp = Pt("stop", P),
      em = Pt(
        "stop",
        (A) => {
          ie(A), O.current === !1 && Dt(!1), v && v(A);
        },
        !1
      ),
      tm = zo((A) => {
        Rt.current || (Rt.current = A.currentTarget),
          Y(A),
          O.current === !0 && (Dt(!0), g && g(A)),
          c && c(A);
      }),
      mi = () => {
        const A = Rt.current;
        return a && a !== "button" && !(A.tagName === "A" && A.href);
      },
      hi = T.useRef(!1),
      nm = zo((A) => {
        d &&
          !hi.current &&
          _e &&
          _.current &&
          A.key === " " &&
          ((hi.current = !0),
          _.current.stop(A, () => {
            _.current.start(A);
          })),
          A.target === A.currentTarget &&
            mi() &&
            A.key === " " &&
            A.preventDefault(),
          S && S(A),
          A.target === A.currentTarget &&
            mi() &&
            A.key === "Enter" &&
            !u &&
            (A.preventDefault(), y && y(A));
      }),
      rm = zo((A) => {
        d &&
          A.key === " " &&
          _.current &&
          _e &&
          !A.defaultPrevented &&
          ((hi.current = !1),
          _.current.stop(A, () => {
            _.current.pulsate(A);
          })),
          w && w(A),
          y &&
            A.target === A.currentTarget &&
            mi() &&
            A.key === " " &&
            !A.defaultPrevented &&
            y(A);
      });
    let yo = a;
    yo === "button" && (Be.href || Be.to) && (yo = x);
    const mr = {};
    yo === "button"
      ? ((mr.type = Pe === void 0 ? "button" : Pe), (mr.disabled = u))
      : (!Be.href && !Be.to && (mr.role = "button"),
        u && (mr["aria-disabled"] = u));
    const om = hc(n, Rn, Rt),
      nu = N({}, r, {
        centerRipple: l,
        component: a,
        disabled: u,
        disableRipple: m,
        disableTouchRipple: h,
        focusRipple: d,
        tabIndex: le,
        focusVisible: _e,
      }),
      lm = Iv(nu);
    return p.jsxs(
      Fv,
      N(
        {
          as: yo,
          className: se(lm.root, s),
          ownerState: nu,
          onBlur: em,
          onClick: y,
          onContextMenu: Qp,
          onFocus: tm,
          onKeyDown: nm,
          onKeyUp: rm,
          onMouseDown: Kp,
          onMouseLeave: Xp,
          onMouseUp: Yp,
          onDragLeave: Gp,
          onTouchEnd: Jp,
          onTouchMove: qp,
          onTouchStart: Zp,
          ref: om,
          tabIndex: u ? -1 : le,
          type: Pe,
        },
        mr,
        Be,
        { children: [i, Wp ? p.jsx(Mv, N({ ref: M, center: l }, ce)) : null] }
      )
    );
  }),
  Dv = bv;
function Bv(e) {
  return ot("MuiAlert", e);
}
const Uv = lt("MuiAlert", [
    "root",
    "action",
    "icon",
    "message",
    "filled",
    "filledSuccess",
    "filledInfo",
    "filledWarning",
    "filledError",
    "outlined",
    "outlinedSuccess",
    "outlinedInfo",
    "outlinedWarning",
    "outlinedError",
    "standard",
    "standardSuccess",
    "standardInfo",
    "standardWarning",
    "standardError",
  ]),
  Uc = Uv;
function Hv(e) {
  return ot("MuiIconButton", e);
}
const Vv = lt("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  Wv = Vv,
  Kv = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  Qv = (e) => {
    const { classes: t, disabled: n, color: r, edge: o, size: l } = e,
      i = {
        root: [
          "root",
          n && "disabled",
          r !== "default" && `color${J(r)}`,
          o && `edge${J(o)}`,
          `size${J(l)}`,
        ],
      };
    return gt(i, Hv, t);
  },
  Gv = ge(Dv, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${J(n.color)}`],
        n.edge && t[`edge${J(n.edge)}`],
        t[`size${J(n.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      N(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          "&:hover": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : ln(e.palette.action.active, e.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        t.edge === "start" && { marginLeft: t.size === "small" ? -3 : -12 },
        t.edge === "end" && { marginRight: t.size === "small" ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) => {
      var n;
      const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
      return N(
        {},
        t.color === "inherit" && { color: "inherit" },
        t.color !== "inherit" &&
          t.color !== "default" &&
          N(
            { color: r == null ? void 0 : r.main },
            !t.disableRipple && {
              "&:hover": N(
                {},
                r && {
                  backgroundColor: e.vars
                    ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : ln(r.main, e.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } }
              ),
            }
          ),
        t.size === "small" && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === "large" && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${Wv.disabled}`]: {
            backgroundColor: "transparent",
            color: (e.vars || e).palette.action.disabled,
          },
        }
      );
    }
  ),
  Yv = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiIconButton" }),
      {
        edge: o = !1,
        children: l,
        className: i,
        color: s = "default",
        disabled: a = !1,
        disableFocusRipple: u = !1,
        size: m = "medium",
      } = r,
      h = oe(r, Kv),
      d = N({}, r, {
        edge: o,
        color: s,
        disabled: a,
        disableFocusRipple: u,
        size: m,
      }),
      x = Qv(d);
    return p.jsx(
      Gv,
      N(
        {
          className: se(x.root, i),
          centerRipple: !0,
          focusRipple: !u,
          disabled: a,
          ref: n,
          ownerState: d,
        },
        h,
        { children: l }
      )
    );
  }),
  Xv = Yv,
  Zv = go(
    p.jsx("path", {
      d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    }),
    "SuccessOutlined"
  ),
  Jv = go(
    p.jsx("path", {
      d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z",
    }),
    "ReportProblemOutlined"
  ),
  qv = go(
    p.jsx("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    }),
    "ErrorOutline"
  ),
  e2 = go(
    p.jsx("path", {
      d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z",
    }),
    "InfoOutlined"
  ),
  t2 = go(
    p.jsx("path", {
      d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    }),
    "Close"
  ),
  n2 = [
    "action",
    "children",
    "className",
    "closeText",
    "color",
    "components",
    "componentsProps",
    "icon",
    "iconMapping",
    "onClose",
    "role",
    "severity",
    "slotProps",
    "slots",
    "variant",
  ],
  r2 = (e) => {
    const { variant: t, color: n, severity: r, classes: o } = e,
      l = {
        root: ["root", `${t}${J(n || r)}`, `${t}`],
        icon: ["icon"],
        message: ["message"],
        action: ["action"],
      };
    return gt(l, Bv, o);
  },
  o2 = ge(Dp, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${J(n.color || n.severity)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light" ? Rl : Pl,
      r = e.palette.mode === "light" ? Pl : Rl,
      o = t.color || t.severity;
    return N(
      {},
      e.typography.body2,
      { backgroundColor: "transparent", display: "flex", padding: "6px 16px" },
      o &&
        t.variant === "standard" && {
          color: e.vars
            ? e.vars.palette.Alert[`${o}Color`]
            : n(e.palette[o].light, 0.6),
          backgroundColor: e.vars
            ? e.vars.palette.Alert[`${o}StandardBg`]
            : r(e.palette[o].light, 0.9),
          [`& .${Uc.icon}`]: e.vars
            ? { color: e.vars.palette.Alert[`${o}IconColor`] }
            : { color: e.palette[o].main },
        },
      o &&
        t.variant === "outlined" && {
          color: e.vars
            ? e.vars.palette.Alert[`${o}Color`]
            : n(e.palette[o].light, 0.6),
          border: `1px solid ${(e.vars || e).palette[o].light}`,
          [`& .${Uc.icon}`]: e.vars
            ? { color: e.vars.palette.Alert[`${o}IconColor`] }
            : { color: e.palette[o].main },
        },
      o &&
        t.variant === "filled" &&
        N(
          { fontWeight: e.typography.fontWeightMedium },
          e.vars
            ? {
                color: e.vars.palette.Alert[`${o}FilledColor`],
                backgroundColor: e.vars.palette.Alert[`${o}FilledBg`],
              }
            : {
                backgroundColor:
                  e.palette.mode === "dark"
                    ? e.palette[o].dark
                    : e.palette[o].main,
                color: e.palette.getContrastText(e.palette[o].main),
              }
        )
    );
  }),
  l2 = ge("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon,
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9,
  }),
  i2 = ge("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message,
  })({ padding: "8px 0", minWidth: 0, overflow: "auto" }),
  Hc = ge("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action,
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8,
  }),
  Vc = {
    success: p.jsx(Zv, { fontSize: "inherit" }),
    warning: p.jsx(Jv, { fontSize: "inherit" }),
    error: p.jsx(qv, { fontSize: "inherit" }),
    info: p.jsx(e2, { fontSize: "inherit" }),
  },
  s2 = T.forwardRef(function (t, n) {
    var r, o, l, i, s, a;
    const u = it({ props: t, name: "MuiAlert" }),
      {
        action: m,
        children: h,
        className: d,
        closeText: x = "Close",
        color: v,
        components: y = {},
        componentsProps: R = {},
        icon: f,
        iconMapping: c = Vc,
        onClose: g,
        role: S = "alert",
        severity: w = "success",
        slotProps: E = {},
        slots: k = {},
        variant: j = "standard",
      } = u,
      z = oe(u, n2),
      P = N({}, u, { color: v, severity: w, variant: j }),
      I = r2(P),
      le =
        (r = (o = k.closeButton) != null ? o : y.CloseButton) != null ? r : Xv,
      ce = (l = (i = k.closeIcon) != null ? i : y.CloseIcon) != null ? l : t2,
      Re = (s = E.closeButton) != null ? s : R.closeButton,
      Pe = (a = E.closeIcon) != null ? a : R.closeIcon;
    return p.jsxs(
      o2,
      N(
        {
          role: S,
          elevation: 0,
          ownerState: P,
          className: se(I.root, d),
          ref: n,
        },
        z,
        {
          children: [
            f !== !1
              ? p.jsx(l2, {
                  ownerState: P,
                  className: I.icon,
                  children: f || c[w] || Vc[w],
                })
              : null,
            p.jsx(i2, { ownerState: P, className: I.message, children: h }),
            m != null
              ? p.jsx(Hc, { ownerState: P, className: I.action, children: m })
              : null,
            m == null && g
              ? p.jsx(Hc, {
                  ownerState: P,
                  className: I.action,
                  children: p.jsx(
                    le,
                    N(
                      {
                        size: "small",
                        "aria-label": x,
                        title: x,
                        color: "inherit",
                        onClick: g,
                      },
                      Re,
                      { children: p.jsx(ce, N({ fontSize: "small" }, Pe)) }
                    )
                  ),
                })
              : null,
          ],
        }
      )
    );
  }),
  Bp = s2,
  a2 = T.createContext(),
  Up = a2;
function u2(e) {
  return ot("MuiTable", e);
}
lt("MuiTable", ["root", "stickyHeader"]);
const c2 = ["className", "component", "padding", "size", "stickyHeader"],
  d2 = (e) => {
    const { classes: t, stickyHeader: n } = e;
    return gt({ root: ["root", n && "stickyHeader"] }, u2, t);
  },
  f2 = ge("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.stickyHeader && t.stickyHeader];
    },
  })(({ theme: e, ownerState: t }) =>
    N(
      {
        display: "table",
        width: "100%",
        borderCollapse: "collapse",
        borderSpacing: 0,
        "& caption": N({}, e.typography.body2, {
          padding: e.spacing(2),
          color: (e.vars || e).palette.text.secondary,
          textAlign: "left",
          captionSide: "bottom",
        }),
      },
      t.stickyHeader && { borderCollapse: "separate" }
    )
  ),
  Wc = "table",
  p2 = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiTable" }),
      {
        className: o,
        component: l = Wc,
        padding: i = "normal",
        size: s = "medium",
        stickyHeader: a = !1,
      } = r,
      u = oe(r, c2),
      m = N({}, r, { component: l, padding: i, size: s, stickyHeader: a }),
      h = d2(m),
      d = T.useMemo(
        () => ({ padding: i, size: s, stickyHeader: a }),
        [i, s, a]
      );
    return p.jsx(Up.Provider, {
      value: d,
      children: p.jsx(
        f2,
        N(
          {
            as: l,
            role: l === Wc ? null : "table",
            ref: n,
            className: se(h.root, o),
            ownerState: m,
          },
          u
        )
      ),
    });
  }),
  m2 = p2,
  h2 = T.createContext(),
  fi = h2;
function g2(e) {
  return ot("MuiTableBody", e);
}
lt("MuiTableBody", ["root"]);
const y2 = ["className", "component"],
  v2 = (e) => {
    const { classes: t } = e;
    return gt({ root: ["root"] }, g2, t);
  },
  x2 = ge("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ display: "table-row-group" }),
  S2 = { variant: "body" },
  Kc = "tbody",
  w2 = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiTableBody" }),
      { className: o, component: l = Kc } = r,
      i = oe(r, y2),
      s = N({}, r, { component: l }),
      a = v2(s);
    return p.jsx(fi.Provider, {
      value: S2,
      children: p.jsx(
        x2,
        N(
          {
            className: se(a.root, o),
            as: l,
            ref: n,
            role: l === Kc ? null : "rowgroup",
            ownerState: s,
          },
          i
        )
      ),
    });
  }),
  k2 = w2;
function C2(e) {
  return ot("MuiTableCell", e);
}
const E2 = lt("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader",
  ]),
  Vs = E2,
  T2 = [
    "align",
    "className",
    "component",
    "padding",
    "scope",
    "size",
    "sortDirection",
    "variant",
  ],
  R2 = (e) => {
    const {
        classes: t,
        variant: n,
        align: r,
        padding: o,
        size: l,
        stickyHeader: i,
      } = e,
      s = {
        root: [
          "root",
          n,
          i && "stickyHeader",
          r !== "inherit" && `align${J(r)}`,
          o !== "normal" && `padding${J(o)}`,
          `size${J(l)}`,
        ],
      };
    return gt(s, C2, t);
  },
  P2 = ge("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${J(n.size)}`],
        n.padding !== "normal" && t[`padding${J(n.padding)}`],
        n.align !== "inherit" && t[`align${J(n.align)}`],
        n.stickyHeader && t.stickyHeader,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    N(
      {},
      e.typography.body2,
      {
        display: "table-cell",
        verticalAlign: "inherit",
        borderBottom: e.vars
          ? `1px solid ${e.vars.palette.TableCell.border}`
          : `1px solid
    ${
      e.palette.mode === "light"
        ? Pl(ln(e.palette.divider, 1), 0.88)
        : Rl(ln(e.palette.divider, 1), 0.68)
    }`,
        textAlign: "left",
        padding: 16,
      },
      t.variant === "head" && {
        color: (e.vars || e).palette.text.primary,
        lineHeight: e.typography.pxToRem(24),
        fontWeight: e.typography.fontWeightMedium,
      },
      t.variant === "body" && { color: (e.vars || e).palette.text.primary },
      t.variant === "footer" && {
        color: (e.vars || e).palette.text.secondary,
        lineHeight: e.typography.pxToRem(21),
        fontSize: e.typography.pxToRem(12),
      },
      t.size === "small" && {
        padding: "6px 16px",
        [`&.${Vs.paddingCheckbox}`]: {
          width: 24,
          padding: "0 12px 0 16px",
          "& > *": { padding: 0 },
        },
      },
      t.padding === "checkbox" && { width: 48, padding: "0 0 0 4px" },
      t.padding === "none" && { padding: 0 },
      t.align === "left" && { textAlign: "left" },
      t.align === "center" && { textAlign: "center" },
      t.align === "right" && {
        textAlign: "right",
        flexDirection: "row-reverse",
      },
      t.align === "justify" && { textAlign: "justify" },
      t.stickyHeader && {
        position: "sticky",
        top: 0,
        zIndex: 2,
        backgroundColor: (e.vars || e).palette.background.default,
      }
    )
  ),
  _2 = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiTableCell" }),
      {
        align: o = "inherit",
        className: l,
        component: i,
        padding: s,
        scope: a,
        size: u,
        sortDirection: m,
        variant: h,
      } = r,
      d = oe(r, T2),
      x = T.useContext(Up),
      v = T.useContext(fi),
      y = v && v.variant === "head";
    let R;
    i ? (R = i) : (R = y ? "th" : "td");
    let f = a;
    R === "td" ? (f = void 0) : !f && y && (f = "col");
    const c = h || (v && v.variant),
      g = N({}, r, {
        align: o,
        component: R,
        padding: s || (x && x.padding ? x.padding : "normal"),
        size: u || (x && x.size ? x.size : "medium"),
        sortDirection: m,
        stickyHeader: c === "head" && x && x.stickyHeader,
        variant: c,
      }),
      S = R2(g);
    let w = null;
    return (
      m && (w = m === "asc" ? "ascending" : "descending"),
      p.jsx(
        P2,
        N(
          {
            as: R,
            ref: n,
            className: se(S.root, l),
            "aria-sort": w,
            scope: f,
            ownerState: g,
          },
          d
        )
      )
    );
  }),
  N2 = _2;
function j2(e) {
  return ot("MuiTableContainer", e);
}
lt("MuiTableContainer", ["root"]);
const $2 = ["className", "component"],
  M2 = (e) => {
    const { classes: t } = e;
    return gt({ root: ["root"] }, j2, t);
  },
  O2 = ge("div", {
    name: "MuiTableContainer",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ width: "100%", overflowX: "auto" }),
  A2 = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiTableContainer" }),
      { className: o, component: l = "div" } = r,
      i = oe(r, $2),
      s = N({}, r, { component: l }),
      a = M2(s);
    return p.jsx(
      O2,
      N({ ref: n, as: l, className: se(a.root, o), ownerState: s }, i)
    );
  }),
  z2 = A2;
function L2(e) {
  return ot("MuiTableHead", e);
}
lt("MuiTableHead", ["root"]);
const I2 = ["className", "component"],
  F2 = (e) => {
    const { classes: t } = e;
    return gt({ root: ["root"] }, L2, t);
  },
  b2 = ge("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({ display: "table-header-group" }),
  D2 = { variant: "head" },
  Qc = "thead",
  B2 = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiTableHead" }),
      { className: o, component: l = Qc } = r,
      i = oe(r, I2),
      s = N({}, r, { component: l }),
      a = F2(s);
    return p.jsx(fi.Provider, {
      value: D2,
      children: p.jsx(
        b2,
        N(
          {
            as: l,
            className: se(a.root, o),
            ref: n,
            role: l === Qc ? null : "rowgroup",
            ownerState: s,
          },
          i
        )
      ),
    });
  }),
  U2 = B2;
function H2(e) {
  return ot("MuiTableRow", e);
}
const V2 = lt("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
  Gc = V2,
  W2 = ["className", "component", "hover", "selected"],
  K2 = (e) => {
    const { classes: t, selected: n, hover: r, head: o, footer: l } = e;
    return gt(
      {
        root: [
          "root",
          n && "selected",
          r && "hover",
          o && "head",
          l && "footer",
        ],
      },
      H2,
      t
    );
  },
  Q2 = ge("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.head && t.head, n.footer && t.footer];
    },
  })(({ theme: e }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${Gc.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
    },
    [`&.${Gc.selected}`]: {
      backgroundColor: e.vars
        ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
        : ln(e.palette.primary.main, e.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : ln(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
            ),
      },
    },
  })),
  Yc = "tr",
  G2 = T.forwardRef(function (t, n) {
    const r = it({ props: t, name: "MuiTableRow" }),
      { className: o, component: l = Yc, hover: i = !1, selected: s = !1 } = r,
      a = oe(r, W2),
      u = T.useContext(fi),
      m = N({}, r, {
        component: l,
        hover: i,
        selected: s,
        head: u && u.variant === "head",
        footer: u && u.variant === "footer",
      }),
      h = K2(m);
    return p.jsx(
      Q2,
      N(
        {
          as: l,
          ref: n,
          className: se(h.root, o),
          role: l === Yc ? null : "row",
          ownerState: m,
        },
        a
      )
    );
  }),
  Y2 = G2,
  X2 = () => {
    const {
        currentUser: e,
        setCurrentUser: t,
        isLoggedIn: n,
        setIsLoggedIn: r,
        setCurrentPage: o,
      } = ht(),
      [l, i] = T.useState(n),
      [s, a] = T.useState(!1),
      u = (h) => {
        t({ ...e, [h.target.name]: h.target.value });
      },
      m = (h, d) => {
        if ((h.preventDefault(), d === "submit" && n)) i(!0), a(!0);
        else if (d === "cancel" && n) i(!0);
        else if (d === "submit" && !n) o("AOHome"), r(!0);
        else if (d === "edit") i(!1), a(!1);
        else if (d === "cancel" && !n) o("Login");
        else throw new Error("unhandled condition");
      };
    return p.jsxs("div", {
      className: "AccountDetailsPage",
      children: [
        p.jsx("h1", { children: "Account Details" }),
        p.jsxs("form", {
          className: "AccountDetailsForm",
          children: [
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", { htmlFor: "Username", children: "Username" }),
                p.jsx("input", {
                  type: "text",
                  name: "Username",
                  value: e.Username,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", { htmlFor: "Password", children: "Password" }),
                p.jsx("input", {
                  type: "password",
                  name: "Password",
                  value: e.Password,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", {
                  htmlFor: "ConfirmPassword",
                  children: "Confirm Password",
                }),
                p.jsx("input", {
                  type: "password",
                  name: "ConfirmPassword",
                  value: e.Password,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", {
                  htmlFor: "FirstName",
                  children: "First Name",
                }),
                p.jsx("input", {
                  type: "text",
                  name: "FirstName",
                  value: e.FirstName,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", { htmlFor: "Surname", children: "Surname" }),
                p.jsx("input", {
                  type: "text",
                  name: "Surname",
                  value: e.Surname,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", {
                  htmlFor: "WorkTitle",
                  children: "Work Title",
                }),
                p.jsx("input", {
                  type: "text",
                  name: "WorkTitle",
                  value: e.WorkTitle,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", {
                  htmlFor: "AccessType",
                  children: "Access Type",
                }),
                p.jsxs("select", {
                  name: "AccessType",
                  value: e.AccessType,
                  disabled: l,
                  onChange: u,
                  children: [
                    p.jsx("option", {
                      value: "Administrator",
                      children: "Administrator",
                    }),
                    p.jsx("option", {
                      value: "ApprovalandSubmission",
                      children: "Approval and Submission",
                    }),
                    p.jsx("option", {
                      value: "DataEntry",
                      children: "Data Entry",
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", {
                  htmlFor: "BusinessName",
                  children: "Business Name",
                }),
                p.jsx("input", {
                  type: "text",
                  name: "BusinessName",
                  value: e.BusinessName,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", {
                  htmlFor: "BusinessAddressLine1",
                  children: "Business Address line 1",
                }),
                p.jsx("input", {
                  type: "text",
                  name: "BusinessAddressLine1",
                  value: e.BusinessAddressLine1,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", {
                  htmlFor: "BusinessAddressLine2",
                  children: "Business Address line 2",
                }),
                p.jsx("input", {
                  type: "text",
                  name: "BusinessAddressLine2",
                  value: e.BusinessAddressLine2,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", { htmlFor: "Suburb", children: "Suburb" }),
                p.jsx("input", {
                  type: "text",
                  name: "Suburb",
                  value: e.Suburb,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", { htmlFor: "State", children: "State" }),
                p.jsxs("select", {
                  name: "State",
                  disabled: l,
                  onChange: u,
                  value: e.State,
                  children: [
                    p.jsx("option", {
                      name: "State",
                      value: "NSW",
                      children: "NSW",
                    }),
                    p.jsx("option", {
                      name: "State",
                      value: "ACT",
                      children: "ACT",
                    }),
                    p.jsx("option", {
                      name: "State",
                      value: "NT",
                      children: "NT",
                    }),
                    p.jsx("option", {
                      name: "State",
                      value: "QLD",
                      children: "QLD",
                    }),
                    p.jsx("option", {
                      name: "State",
                      value: "SA",
                      children: "SA",
                    }),
                    p.jsx("option", {
                      name: "State",
                      value: "TAS",
                      children: "TAS",
                    }),
                    p.jsx("option", {
                      name: "State",
                      value: "WA",
                      children: "WA",
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", { htmlFor: "Postcode", children: "Postcode" }),
                p.jsx("input", {
                  type: "number",
                  name: "Postcode",
                  value: e.Postcode,
                  maxLength: "4",
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsxs("div", {
              className: "AccountDetailInputField",
              children: [
                p.jsx("label", {
                  htmlFor: "PhoneNumber",
                  children: "Phone Number",
                }),
                p.jsx("input", {
                  type: "number",
                  name: "PhoneNumber",
                  value: e.PhoneNumber,
                  onChange: u,
                  disabled: l,
                }),
              ],
            }),
            p.jsx("div", {
              className: "AlertContainer",
              children:
                s &&
                p.jsx(Bp, {
                  onClose: () => {
                    a(!1);
                  },
                  children: "Update successful.",
                }),
            }),
            p.jsx("div", {
              className: "AccountDetailButtons",
              children: l
                ? p.jsx("button", {
                    className: "GreenBtn",
                    onClick: (h) => m(h, "edit"),
                    children: "Edit",
                  })
                : p.jsxs(p.Fragment, {
                    children: [
                      p.jsx("button", {
                        className: "GreyBtn",
                        onClick: (h) => m(h, "cancel"),
                        children: "Cancel",
                      }),
                      p.jsx("button", {
                        className: "GreenBtn",
                        onClick: (h) => m(h, "submit"),
                        children: "Submit",
                      }),
                    ],
                  }),
            }),
          ],
        }),
      ],
    });
  };
var Hp = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Xc = ze.createContext && ze.createContext(Hp),
  nn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (nn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        nn.apply(this, arguments)
      );
    },
  Z2 =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
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
    };
function Vp(e) {
  return (
    e &&
    e.map(function (t, n) {
      return ze.createElement(t.tag, nn({ key: n }, t.attr), Vp(t.child));
    })
  );
}
function pi(e) {
  return function (t) {
    return ze.createElement(J2, nn({ attr: nn({}, e.attr) }, t), Vp(e.child));
  };
}
function J2(e) {
  var t = function (n) {
    var r = e.attr,
      o = e.size,
      l = e.title,
      i = Z2(e, ["attr", "size", "title"]),
      s = o || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      ze.createElement(
        "svg",
        nn(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: a,
            style: nn(nn({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        l && ze.createElement("title", null, l),
        e.children
      )
    );
  };
  return Xc !== void 0
    ? ze.createElement(Xc.Consumer, null, function (n) {
        return t(n);
      })
    : t(Hp);
}
function q2(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
      {
        tag: "path",
        attr: {
          d: "M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",
        },
      },
    ],
  })(e);
}
const ex = () => {
  const { currentUser: e } = ht();
  return p.jsx("div", {
    className: "AOHomePage",
    children: p.jsxs("section", {
      children: [
        p.jsxs("h1", {
          children: ["Welcome, ", e.Username, ", to AUSTRAC Online"],
        }),
        p.jsx("h2", { children: "Announcements" }),
        p.jsx("hr", {}),
        p.jsx("p", {
          children:
            "A reminder that any changes to your AUSTRAC enrolment details must be updated within 14 days.",
        }),
        p.jsx("p", {
          children:
            'To update your enrolment details, please go to "Account Details" page.',
        }),
        p.jsx("hr", {}),
        p.jsxs("a", {
          href: "https://www.austrac.gov.au/business/austrac-online",
          target: "_blank",
          children: [
            p.jsx("span", { children: "AUSTRAC Online User Guide" }),
            p.jsx(q2, {}),
          ],
        }),
      ],
    }),
  });
};
function Io(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z",
        },
      },
    ],
  })(e);
}
function tx(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z",
        },
      },
    ],
  })(e);
}
function nx(e) {
  return pi({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z",
        },
      },
    ],
  })(e);
}
const rx = () => {
    const {
      isLoggedIn: e,
      setIsLoggedIn: t,
      currentPage: n,
      setCurrentPage: r,
      isMenuExpanded: o,
      setIsMenuExpanded: l,
    } = ht();
    return p.jsxs("div", {
      className: o ? "SideMenu" : "MenuHidden SideMenu",
      children: [
        p.jsx("h3", { className: "MenuTitle", children: "Menu" }),
        p.jsx("div", {
          className: n === "AOHome" ? "SelectedBtn" : "MenuOption",
          children: p.jsxs("button", {
            className: "MenuBtn",
            onClick: () => {
              r("AOHome"), l(!1);
            },
            children: [
              "Home",
              p.jsx("span", {
                className: "MenuGoBtn",
                children: p.jsx(Io, {}),
              }),
            ],
          }),
        }),
        p.jsx("div", {
          className: n === "AccountDetails" ? "SelectedBtn" : "MenuOption",
          children: p.jsxs("button", {
            className: "MenuBtn",
            onClick: () => {
              r("AccountDetails"), l(!1);
            },
            children: [
              "Account Details",
              p.jsx("span", {
                className: "MenuGoBtn",
                children: p.jsx(Io, {}),
              }),
            ],
          }),
        }),
        p.jsx("div", {
          className: n === "TR" ? "SelectedBtn" : "MenuOption",
          children: p.jsxs("button", {
            className: "MenuBtn",
            onClick: () => {
              r("TR"), l(!1);
            },
            children: [
              "Transaction Reporting",
              p.jsx("span", {
                className: "MenuGoBtn",
                children: p.jsx(Io, {}),
              }),
            ],
          }),
        }),
        p.jsx("div", {
          className: n === "Login" ? " SelectedBtn" : "MenuOption",
          children: p.jsxs("button", {
            className: "MenuBtn",
            onClick: () => {
              t(!1), r("Login"), l(!1);
            },
            children: [
              p.jsx("span", {
                className: "MenuGoBtn",
                children: p.jsx(Io, {}),
              }),
              "Logout",
            ],
          }),
        }),
      ],
    });
  },
  ox = () => {
    const {
      isLoggedIn: e,
      setIsLoggedIn: t,
      currentPage: n,
      setCurrentPage: r,
      isMenuExpanded: o,
      setIsMenuExpanded: l,
    } = ht();
    return p.jsxs(p.Fragment, {
      children: [
        p.jsxs("div", {
          className: "MenuIcon",
          children: [
            o
              ? p.jsx(nx, { onClick: () => l(!1) })
              : p.jsx(tx, { onClick: () => l(!0) }),
            p.jsx("span", { className: "MenuIconName", children: "Menu" }),
          ],
        }),
        p.jsx(rx, {}),
      ],
    });
  },
  Oe = ge(N2)(({ theme: e }) => ({
    [`&.${Vs.head}`]: {
      backgroundColor: "#5ec4b4",
      color: e.palette.common.white,
      fontWeight: "bold",
    },
    [`&.${Vs.body}`]: { fontSize: 14 },
  })),
  Zc = ge(Y2)(({ theme: e }) => ({
    "&:nth-of-type(odd)": { backgroundColor: e.palette.action.hover },
    "&:last-child td, &:last-child th": { border: 0 },
  }));
function lx() {
  const { tRList: e, setTRList: t } = ht(),
    n = e;
  return p.jsxs(p.Fragment, {
    children: [
      p.jsx(z2, {
        component: Dp,
        children: p.jsxs(m2, {
          sx: { minWidth: 650 },
          "aria-label": "simple table",
          children: [
            p.jsx(U2, {
              children: p.jsxs(Zc, {
                children: [
                  p.jsx(Oe, { children: "Receipt Number" }),
                  p.jsx(Oe, { align: "right", children: "Report Type" }),
                  p.jsx(Oe, { align: "right", children: "File Name" }),
                  p.jsx(Oe, { align: "right", children: "Submit Method" }),
                  p.jsx(Oe, { align: "right", children: "Submission Date" }),
                  p.jsx(Oe, { align: "right", children: "User" }),
                  p.jsx(Oe, { align: "right", children: "Reporting Entity" }),
                ],
              }),
            }),
            p.jsx(k2, {
              children: n.map((r) =>
                p.jsxs(
                  Zc,
                  {
                    sx: { "&:last-child td, &:last-child th": { border: 0 } },
                    children: [
                      p.jsx(Oe, {
                        component: "th",
                        scope: "row",
                        children: r.ReceiptNumber,
                      }),
                      p.jsx(Oe, { align: "right", children: r.ReportType }),
                      p.jsx(Oe, { align: "right", children: r.FileName }),
                      p.jsx(Oe, { align: "right", children: r.SubmitMethod }),
                      p.jsx(Oe, { align: "right", children: r.SubmissionDate }),
                      p.jsx(Oe, { align: "right", children: r.User }),
                      p.jsx(Oe, {
                        align: "right",
                        children: r.ReportingEntity,
                      }),
                    ],
                  },
                  r.ReceiptNumber
                )
              ),
            }),
          ],
        }),
      }),
      p.jsx("hr", {}),
    ],
  });
}
const ix = () => {
    var m;
    const { tRList: e, setTRList: t, currentUser: n } = ht(),
      [r, o] = T.useState(
        !!((m = document.getElementById("TRUpload")) != null && m.value)
      ),
      [l, i] = T.useState(!1),
      [s, a] = T.useState(0),
      u = (h) => {
        h.preventDefault();
        const d = Math.ceil(1e6),
          x = Math.floor(9999999),
          v = Math.floor(Math.random() * (x - d) + d);
        a(v);
        let y = new Date(),
          R = y.getDate() + "." + (y.getMonth() + 1) + "." + y.getFullYear(),
          f = y.getHours() + ":" + y.getMinutes() + ":" + y.getSeconds(),
          c = R + " " + f;
        var g = document.getElementById("TRUpload").value;
        if (g) {
          var S =
              g.indexOf("\\") >= 0 ? g.lastIndexOf("\\") : g.lastIndexOf("/"),
            w = g.substring(S);
          (w.indexOf("\\") === 0 || w.indexOf("/") === 0) &&
            (w = w.substring(1));
        }
        t([
          ...e,
          {
            ReceiptNumber: v,
            ReportType: "TR",
            FileName: w,
            SubmitMethod: "Manual",
            SubmissionDate: c,
            User: n.Username,
            ReportingEntity: n.BusinessName,
          },
        ]),
          (document.getElementById("TRUpload").value = ""),
          i(!0),
          o(!1);
      };
    return p.jsx("div", {
      className: "TRPage",
      children: p.jsxs("section", {
        children: [
          p.jsx("h1", { children: "Transaction Reporting" }),
          p.jsx("h2", { children: "Upload a transaction report" }),
          p.jsxs("form", {
            className: "TRUploadForm",
            children: [
              p.jsx("label", {
                htmlFor: "TRUpload",
                className: "Instruction",
                children: "1. Select a transaction report to upload:",
              }),
              p.jsx("div", {
                children: p.jsx("input", {
                  type: "file",
                  id: "TRUpload",
                  name: "TRUpload",
                  className: "UploadInput",
                  onChange: (h) => {
                    var d;
                    o(
                      !!((d = h == null ? void 0 : h.target) != null && d.value)
                    );
                  },
                }),
              }),
              p.jsx("p", {
                children:
                  "Maximum file size is 40MB. Files larger than this must be zipped.",
              }),
              p.jsx("hr", {}),
              p.jsx("p", {
                className: "Instruction",
                children:
                  "2. Click the Submit button to transmit the file to AUSTRAC.",
              }),
              p.jsxs("div", {
                children: [
                  p.jsx("button", {
                    className: "GreenBtn",
                    id: "TRSubmit",
                    disabled: !r,
                    onClick: u,
                    children: "Submit",
                  }),
                  l &&
                    p.jsxs(Bp, {
                      onClose: () => {
                        i(!1);
                      },
                      children: ["Upload Successful. Receipt Number: ", s],
                    }),
                ],
              }),
            ],
          }),
          p.jsx("hr", {}),
          p.jsx(lx, {}),
        ],
      }),
    });
  },
  sx = () => {
    const { currentPage: e, setCurrentPage: t } = ht();
    if (e === "Login") return p.jsx(B0, {});
    if (e === "AccountDetails") return p.jsx(X2, {});
    if (e === "TR") return p.jsx(ix, {});
    if (e === "AOHome") return p.jsx(ex, {});
  };
function ax() {
  const { isLoggedIn: e } = ht();
  return p.jsxs(p.Fragment, {
    children: [p.jsx(z0, {}), e && p.jsx(ox, {}), p.jsx(sx, {})],
  });
}
Wi.createRoot(document.getElementById("root")).render(
  p.jsx(ze.StrictMode, { children: p.jsx(F0, { children: p.jsx(ax, {}) }) })
);
