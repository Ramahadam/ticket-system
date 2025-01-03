var Tu = (e, t, n) => {
  if (!t.has(e)) throw TypeError('Cannot ' + n);
};
var w = (e, t, n) => (
    Tu(e, t, 'read from private field'), n ? n.call(e) : t.get(e)
  ),
  U = (e, t, n) => {
    if (t.has(e))
      throw TypeError('Cannot add the same private member more than once');
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  I = (e, t, n, r) => (
    Tu(e, t, 'write to private field'), r ? r.call(e, n) : t.set(e, n), n
  );
var io = (e, t, n, r) => ({
    set _(i) {
      I(e, t, i, n);
    },
    get _() {
      return w(e, t, r);
    },
  }),
  Y = (e, t, n) => (Tu(e, t, 'access private method'), n);
function B1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === 'childList')
        for (const a of s.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Lt =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
          ? self
          : {};
function Tv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function W1(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r
        ? Reflect.construct(t, arguments, this.constructor)
        : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var i = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Av = { exports: {} },
  Yl = {},
  Rv = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ha = Symbol.for('react.element'),
  q1 = Symbol.for('react.portal'),
  Q1 = Symbol.for('react.fragment'),
  Y1 = Symbol.for('react.strict_mode'),
  K1 = Symbol.for('react.profiler'),
  G1 = Symbol.for('react.provider'),
  X1 = Symbol.for('react.context'),
  J1 = Symbol.for('react.forward_ref'),
  Z1 = Symbol.for('react.suspense'),
  ew = Symbol.for('react.memo'),
  tw = Symbol.for('react.lazy'),
  Hh = Symbol.iterator;
function nw(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Hh && e[Hh]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Nv = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Lv = Object.assign,
  Dv = {};
function ps(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dv),
    (this.updater = n || Nv);
}
ps.prototype.isReactComponent = {};
ps.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
ps.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Iv() {}
Iv.prototype = ps.prototype;
function dd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dv),
    (this.updater = n || Nv);
}
var hd = (dd.prototype = new Iv());
hd.constructor = dd;
Lv(hd, ps.prototype);
hd.isPureReactComponent = !0;
var Bh = Array.isArray,
  Mv = Object.prototype.hasOwnProperty,
  pd = { current: null },
  $v = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fv(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = '' + t.key),
    t))
      Mv.call(t, r) && !$v.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var l = Array(o), u = 0; u < o; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: Ha,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: pd.current,
  };
}
function rw(e, t) {
  return {
    $$typeof: Ha,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function md(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ha;
}
function iw(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Wh = /\/+/g;
function Au(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? iw('' + e.key)
    : t.toString(36);
}
function Fo(e, t, n, r, i) {
  var s = typeof e;
  (s === 'undefined' || s === 'boolean') && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Ha:
          case q1:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + Au(a, 0) : r),
      Bh(i)
        ? ((n = ''),
          e != null && (n = e.replace(Wh, '$&/') + '/'),
          Fo(i, t, n, '', function (u) {
            return u;
          }))
        : i != null &&
          (md(i) &&
            (i = rw(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Wh, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === '' ? '.' : r + ':'), Bh(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var l = r + Au(s, o);
      a += Fo(s, t, n, l, i);
    }
  else if (((l = nw(e)), typeof l == 'function'))
    for (e = l.call(e), o = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + Au(s, o++)), (a += Fo(s, t, n, l, i));
  else if (s === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return a;
}
function so(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Fo(e, r, '', '', function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function sw(e) {
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
var rt = { current: null },
  zo = { transition: null },
  aw = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: zo,
    ReactCurrentOwner: pd,
  };
J.Children = {
  map: so,
  forEach: function (e, t, n) {
    so(
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
      so(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      so(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!md(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
J.Component = ps;
J.Fragment = Q1;
J.Profiler = K1;
J.PureComponent = dd;
J.StrictMode = Y1;
J.Suspense = Z1;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aw;
J.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Lv({}, e.props),
    i = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = pd.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (l in t)
      Mv.call(t, l) &&
        !$v.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    o = Array(l);
    for (var u = 0; u < l; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Ha, type: e.type, key: i, ref: s, props: r, _owner: a };
};
J.createContext = function (e) {
  return (
    (e = {
      $$typeof: X1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: G1, _context: e }),
    (e.Consumer = e)
  );
};
J.createElement = Fv;
J.createFactory = function (e) {
  var t = Fv.bind(null, e);
  return (t.type = e), t;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (e) {
  return { $$typeof: J1, render: e };
};
J.isValidElement = md;
J.lazy = function (e) {
  return { $$typeof: tw, _payload: { _status: -1, _result: e }, _init: sw };
};
J.memo = function (e, t) {
  return { $$typeof: ew, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
  var t = zo.transition;
  zo.transition = {};
  try {
    e();
  } finally {
    zo.transition = t;
  }
};
J.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
J.useCallback = function (e, t) {
  return rt.current.useCallback(e, t);
};
J.useContext = function (e) {
  return rt.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
  return rt.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
  return rt.current.useEffect(e, t);
};
J.useId = function () {
  return rt.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
  return rt.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
  return rt.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
  return rt.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
  return rt.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
  return rt.current.useReducer(e, t, n);
};
J.useRef = function (e) {
  return rt.current.useRef(e);
};
J.useState = function (e) {
  return rt.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
  return rt.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
  return rt.current.useTransition();
};
J.version = '18.2.0';
Rv.exports = J;
var C = Rv.exports;
const Ye = Tv(C),
  Tc = B1({ __proto__: null, default: Ye }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ow = C,
  lw = Symbol.for('react.element'),
  uw = Symbol.for('react.fragment'),
  cw = Object.prototype.hasOwnProperty,
  fw = ow.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dw = { key: !0, ref: !0, __self: !0, __source: !0 };
function zv(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) cw.call(t, r) && !dw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: lw,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: fw.current,
  };
}
Yl.Fragment = uw;
Yl.jsx = zv;
Yl.jsxs = zv;
Av.exports = Yl;
var h = Av.exports,
  Ac = {},
  Uv = { exports: {} },
  bt = {},
  Vv = { exports: {} },
  Hv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, W) {
    var Q = L.length;
    L.push(W);
    e: for (; 0 < Q; ) {
      var me = (Q - 1) >>> 1,
        Se = L[me];
      if (0 < i(Se, W)) (L[me] = W), (L[Q] = Se), (Q = me);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var W = L[0],
      Q = L.pop();
    if (Q !== W) {
      L[0] = Q;
      e: for (var me = 0, Se = L.length, oi = Se >>> 1; me < oi; ) {
        var Xt = 2 * (me + 1) - 1,
          Ss = L[Xt],
          Mt = Xt + 1,
          kr = L[Mt];
        if (0 > i(Ss, Q))
          Mt < Se && 0 > i(kr, Ss)
            ? ((L[me] = kr), (L[Mt] = Q), (me = Mt))
            : ((L[me] = Ss), (L[Xt] = Q), (me = Xt));
        else if (Mt < Se && 0 > i(kr, Q)) (L[me] = kr), (L[Mt] = Q), (me = Mt);
        else break e;
      }
    }
    return W;
  }
  function i(L, W) {
    var Q = L.sortIndex - W.sortIndex;
    return Q !== 0 ? Q : L.id - W.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    y = !1,
    b = !1,
    P = typeof setTimeout == 'function' ? setTimeout : null,
    v = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(L) {
    for (var W = n(u); W !== null; ) {
      if (W.callback === null) r(u);
      else if (W.startTime <= L)
        r(u), (W.sortIndex = W.expirationTime), t(l, W);
      else break;
      W = n(u);
    }
  }
  function k(L) {
    if (((b = !1), g(L), !y))
      if (n(l) !== null) (y = !0), $e(S);
      else {
        var W = n(u);
        W !== null && Pe(k, W.startTime - L);
      }
  }
  function S(L, W) {
    (y = !1), b && ((b = !1), v(O), (O = -1)), (m = !0);
    var Q = d;
    try {
      for (
        g(W), f = n(l);
        f !== null && (!(f.expirationTime > W) || (L && !Ae()));

      ) {
        var me = f.callback;
        if (typeof me == 'function') {
          (f.callback = null), (d = f.priorityLevel);
          var Se = me(f.expirationTime <= W);
          (W = e.unstable_now()),
            typeof Se == 'function' ? (f.callback = Se) : f === n(l) && r(l),
            g(W);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var oi = !0;
      else {
        var Xt = n(u);
        Xt !== null && Pe(k, Xt.startTime - W), (oi = !1);
      }
      return oi;
    } finally {
      (f = null), (d = Q), (m = !1);
    }
  }
  var T = !1,
    R = null,
    O = -1,
    B = 5,
    V = -1;
  function Ae() {
    return !(e.unstable_now() - V < B);
  }
  function q() {
    if (R !== null) {
      var L = e.unstable_now();
      V = L;
      var W = !0;
      try {
        W = R(!0, L);
      } finally {
        W ? K() : ((T = !1), (R = null));
      }
    } else T = !1;
  }
  var K;
  if (typeof p == 'function')
    K = function () {
      p(q);
    };
  else if (typeof MessageChannel < 'u') {
    var ne = new MessageChannel(),
      xe = ne.port2;
    (ne.port1.onmessage = q),
      (K = function () {
        xe.postMessage(null);
      });
  } else
    K = function () {
      P(q, 0);
    };
  function $e(L) {
    (R = L), T || ((T = !0), K());
  }
  function Pe(L, W) {
    O = P(function () {
      L(e.unstable_now());
    }, W);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), $e(S));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (B = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (L) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = d;
      }
      var Q = d;
      d = W;
      try {
        return L();
      } finally {
        d = Q;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, W) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var Q = d;
      d = L;
      try {
        return W();
      } finally {
        d = Q;
      }
    }),
    (e.unstable_scheduleCallback = function (L, W, Q) {
      var me = e.unstable_now();
      switch (
        (typeof Q == 'object' && Q !== null
          ? ((Q = Q.delay), (Q = typeof Q == 'number' && 0 < Q ? me + Q : me))
          : (Q = me),
        L)
      ) {
        case 1:
          var Se = -1;
          break;
        case 2:
          Se = 250;
          break;
        case 5:
          Se = 1073741823;
          break;
        case 4:
          Se = 1e4;
          break;
        default:
          Se = 5e3;
      }
      return (
        (Se = Q + Se),
        (L = {
          id: c++,
          callback: W,
          priorityLevel: L,
          startTime: Q,
          expirationTime: Se,
          sortIndex: -1,
        }),
        Q > me
          ? ((L.sortIndex = Q),
            t(u, L),
            n(l) === null &&
              L === n(u) &&
              (b ? (v(O), (O = -1)) : (b = !0), Pe(k, Q - me)))
          : ((L.sortIndex = Se), t(l, L), y || m || ((y = !0), $e(S))),
        L
      );
    }),
    (e.unstable_shouldYield = Ae),
    (e.unstable_wrapCallback = function (L) {
      var W = d;
      return function () {
        var Q = d;
        d = W;
        try {
          return L.apply(this, arguments);
        } finally {
          d = Q;
        }
      };
    });
})(Hv);
Vv.exports = Hv;
var hw = Vv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bv = C,
  _t = hw;
function j(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Wv = new Set(),
  aa = {};
function ei(e, t) {
  ns(e, t), ns(e + 'Capture', t);
}
function ns(e, t) {
  for (aa[e] = t, e = 0; e < t.length; e++) Wv.add(t[e]);
}
var _n = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Rc = Object.prototype.hasOwnProperty,
  pw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  qh = {},
  Qh = {};
function mw(e) {
  return Rc.call(Qh, e)
    ? !0
    : Rc.call(qh, e)
      ? !1
      : pw.test(e)
        ? (Qh[e] = !0)
        : ((qh[e] = !0), !1);
}
function vw(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function gw(e, t, n, r) {
  if (t === null || typeof t > 'u' || vw(e, t, n, r)) return !0;
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
function it(e, t, n, r, i, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var He = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    He[e] = new it(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  He[t] = new it(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  He[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  He[e] = new it(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    He[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  He[e] = new it(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  He[e] = new it(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  He[e] = new it(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  He[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var vd = /[\-:]([a-z])/g;
function gd(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(vd, gd);
    He[t] = new it(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(vd, gd);
    He[t] = new it(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(vd, gd);
  He[t] = new it(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  He[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
He.xlinkHref = new it(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  He[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yd(e, t, n, r) {
  var i = He.hasOwnProperty(t) ? He[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (gw(t, n, i, r) && (n = null),
    r || i === null
      ? mw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jn = Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ao = Symbol.for('react.element'),
  gi = Symbol.for('react.portal'),
  yi = Symbol.for('react.fragment'),
  wd = Symbol.for('react.strict_mode'),
  Nc = Symbol.for('react.profiler'),
  qv = Symbol.for('react.provider'),
  Qv = Symbol.for('react.context'),
  _d = Symbol.for('react.forward_ref'),
  Lc = Symbol.for('react.suspense'),
  Dc = Symbol.for('react.suspense_list'),
  bd = Symbol.for('react.memo'),
  Mn = Symbol.for('react.lazy'),
  Yv = Symbol.for('react.offscreen'),
  Yh = Symbol.iterator;
function Es(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Yh && e[Yh]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var we = Object.assign,
  Ru;
function Fs(e) {
  if (Ru === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ru = (t && t[1]) || '';
    }
  return (
    `
` +
    Ru +
    e
  );
}
var Nu = !1;
function Lu(e, t) {
  if (!e || Nu) return '';
  Nu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
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
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          a = i.length - 1,
          o = s.length - 1;
        1 <= a && 0 <= o && i[a] !== s[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (i[a] !== s[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || i[a] !== s[o])) {
                var l =
                  `
` + i[a].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (Nu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Fs(e) : '';
}
function yw(e) {
  switch (e.tag) {
    case 5:
      return Fs(e.type);
    case 16:
      return Fs('Lazy');
    case 13:
      return Fs('Suspense');
    case 19:
      return Fs('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Lu(e.type, !1)), e;
    case 11:
      return (e = Lu(e.type.render, !1)), e;
    case 1:
      return (e = Lu(e.type, !0)), e;
    default:
      return '';
  }
}
function Ic(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case yi:
      return 'Fragment';
    case gi:
      return 'Portal';
    case Nc:
      return 'Profiler';
    case wd:
      return 'StrictMode';
    case Lc:
      return 'Suspense';
    case Dc:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Qv:
        return (e.displayName || 'Context') + '.Consumer';
      case qv:
        return (e._context.displayName || 'Context') + '.Provider';
      case _d:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case bd:
        return (
          (t = e.displayName || null), t !== null ? t : Ic(e.type) || 'Memo'
        );
      case Mn:
        (t = e._payload), (e = e._init);
        try {
          return Ic(e(t));
        } catch {}
    }
  return null;
}
function ww(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Ic(t);
    case 8:
      return t === wd ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function hr(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Kv(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function _w(e) {
  var t = Kv(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = '' + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = '' + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function oo(e) {
  e._valueTracker || (e._valueTracker = _w(e));
}
function Gv(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Kv(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ol(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Mc(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Kh(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Xv(e, t) {
  (t = t.checked), t != null && yd(e, 'checked', t, !1);
}
function $c(e, t) {
  Xv(e, t);
  var n = hr(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Fc(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Fc(e, t.type, hr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Gh(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Fc(e, t, n) {
  (t !== 'number' || ol(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var zs = Array.isArray;
function Ni(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + hr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function zc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Xh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (zs(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: hr(n) };
}
function Jv(e, t) {
  var n = hr(t.value),
    r = hr(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Jh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Zv(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Uc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Zv(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var lo,
  eg = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        lo = lo || document.createElement('div'),
          lo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = lo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function oa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qs = {
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
  bw = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(qs).forEach(function (e) {
  bw.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qs[t] = qs[e]);
  });
});
function tg(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (qs.hasOwnProperty(e) && qs[e])
      ? ('' + t).trim()
      : t + 'px';
}
function ng(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = tg(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var kw = we(
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
function Vc(e, t) {
  if (t) {
    if (kw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(j(62));
  }
}
function Hc(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Bc = null;
function kd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Wc = null,
  Li = null,
  Di = null;
function Zh(e) {
  if ((e = qa(e))) {
    if (typeof Wc != 'function') throw Error(j(280));
    var t = e.stateNode;
    t && ((t = Zl(t)), Wc(e.stateNode, e.type, t));
  }
}
function rg(e) {
  Li ? (Di ? Di.push(e) : (Di = [e])) : (Li = e);
}
function ig() {
  if (Li) {
    var e = Li,
      t = Di;
    if (((Di = Li = null), Zh(e), t)) for (e = 0; e < t.length; e++) Zh(t[e]);
  }
}
function sg(e, t) {
  return e(t);
}
function ag() {}
var Du = !1;
function og(e, t, n) {
  if (Du) return e(t, n);
  Du = !0;
  try {
    return sg(e, t, n);
  } finally {
    (Du = !1), (Li !== null || Di !== null) && (ag(), ig());
  }
}
function la(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Zl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(j(231, t, typeof n));
  return n;
}
var qc = !1;
if (_n)
  try {
    var Cs = {};
    Object.defineProperty(Cs, 'passive', {
      get: function () {
        qc = !0;
      },
    }),
      window.addEventListener('test', Cs, Cs),
      window.removeEventListener('test', Cs, Cs);
  } catch {
    qc = !1;
  }
function xw(e, t, n, r, i, s, a, o, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Qs = !1,
  ll = null,
  ul = !1,
  Qc = null,
  Sw = {
    onError: function (e) {
      (Qs = !0), (ll = e);
    },
  };
function Ew(e, t, n, r, i, s, a, o, l) {
  (Qs = !1), (ll = null), xw.apply(Sw, arguments);
}
function Cw(e, t, n, r, i, s, a, o, l) {
  if ((Ew.apply(this, arguments), Qs)) {
    if (Qs) {
      var u = ll;
      (Qs = !1), (ll = null);
    } else throw Error(j(198));
    ul || ((ul = !0), (Qc = u));
  }
}
function ti(e) {
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
function lg(e) {
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
function ep(e) {
  if (ti(e) !== e) throw Error(j(188));
}
function Pw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ti(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return ep(i), e;
        if (s === r) return ep(i), t;
        s = s.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var a = !1, o = i.child; o; ) {
        if (o === n) {
          (a = !0), (n = i), (r = s);
          break;
        }
        if (o === r) {
          (a = !0), (r = i), (n = s);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            (a = !0), (n = s), (r = i);
            break;
          }
          if (o === r) {
            (a = !0), (r = s), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function ug(e) {
  return (e = Pw(e)), e !== null ? cg(e) : null;
}
function cg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = cg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fg = _t.unstable_scheduleCallback,
  tp = _t.unstable_cancelCallback,
  Ow = _t.unstable_shouldYield,
  jw = _t.unstable_requestPaint,
  Ce = _t.unstable_now,
  Tw = _t.unstable_getCurrentPriorityLevel,
  xd = _t.unstable_ImmediatePriority,
  dg = _t.unstable_UserBlockingPriority,
  cl = _t.unstable_NormalPriority,
  Aw = _t.unstable_LowPriority,
  hg = _t.unstable_IdlePriority,
  Kl = null,
  ln = null;
function Rw(e) {
  if (ln && typeof ln.onCommitFiberRoot == 'function')
    try {
      ln.onCommitFiberRoot(Kl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Yt = Math.clz32 ? Math.clz32 : Dw,
  Nw = Math.log,
  Lw = Math.LN2;
function Dw(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Nw(e) / Lw) | 0)) | 0;
}
var uo = 64,
  co = 4194304;
function Us(e) {
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
function fl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~i;
    o !== 0 ? (r = Us(o)) : ((s &= a), s !== 0 && (r = Us(s)));
  } else (a = n & ~i), a !== 0 ? (r = Us(a)) : s !== 0 && (r = Us(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Yt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Iw(e, t) {
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
function Mw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - Yt(s),
      o = 1 << a,
      l = i[a];
    l === -1
      ? (!(o & n) || o & r) && (i[a] = Iw(o, t))
      : l <= t && (e.expiredLanes |= o),
      (s &= ~o);
  }
}
function Yc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pg() {
  var e = uo;
  return (uo <<= 1), !(uo & 4194240) && (uo = 64), e;
}
function Iu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ba(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Yt(t)),
    (e[t] = n);
}
function $w(e, t) {
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
    var i = 31 - Yt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Sd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Yt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var oe = 0;
function mg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var vg,
  Ed,
  gg,
  yg,
  wg,
  Kc = !1,
  fo = [],
  ir = null,
  sr = null,
  ar = null,
  ua = new Map(),
  ca = new Map(),
  zn = [],
  Fw =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function np(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ir = null;
      break;
    case 'dragenter':
    case 'dragleave':
      sr = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ar = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ua.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ca.delete(t.pointerId);
  }
}
function Ps(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = qa(t)), t !== null && Ed(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function zw(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (ir = Ps(ir, e, t, n, r, i)), !0;
    case 'dragenter':
      return (sr = Ps(sr, e, t, n, r, i)), !0;
    case 'mouseover':
      return (ar = Ps(ar, e, t, n, r, i)), !0;
    case 'pointerover':
      var s = i.pointerId;
      return ua.set(s, Ps(ua.get(s) || null, e, t, n, r, i)), !0;
    case 'gotpointercapture':
      return (
        (s = i.pointerId), ca.set(s, Ps(ca.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function _g(e) {
  var t = Tr(e.target);
  if (t !== null) {
    var n = ti(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lg(n)), t !== null)) {
          (e.blockedOn = t),
            wg(e.priority, function () {
              gg(n);
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
function Uo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Gc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Bc = r), n.target.dispatchEvent(r), (Bc = null);
    } else return (t = qa(n)), t !== null && Ed(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function rp(e, t, n) {
  Uo(e) && n.delete(t);
}
function Uw() {
  (Kc = !1),
    ir !== null && Uo(ir) && (ir = null),
    sr !== null && Uo(sr) && (sr = null),
    ar !== null && Uo(ar) && (ar = null),
    ua.forEach(rp),
    ca.forEach(rp);
}
function Os(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Kc ||
      ((Kc = !0),
      _t.unstable_scheduleCallback(_t.unstable_NormalPriority, Uw)));
}
function fa(e) {
  function t(i) {
    return Os(i, e);
  }
  if (0 < fo.length) {
    Os(fo[0], e);
    for (var n = 1; n < fo.length; n++) {
      var r = fo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ir !== null && Os(ir, e),
      sr !== null && Os(sr, e),
      ar !== null && Os(ar, e),
      ua.forEach(t),
      ca.forEach(t),
      n = 0;
    n < zn.length;
    n++
  )
    (r = zn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zn.length && ((n = zn[0]), n.blockedOn === null); )
    _g(n), n.blockedOn === null && zn.shift();
}
var Ii = jn.ReactCurrentBatchConfig,
  dl = !0;
function Vw(e, t, n, r) {
  var i = oe,
    s = Ii.transition;
  Ii.transition = null;
  try {
    (oe = 1), Cd(e, t, n, r);
  } finally {
    (oe = i), (Ii.transition = s);
  }
}
function Hw(e, t, n, r) {
  var i = oe,
    s = Ii.transition;
  Ii.transition = null;
  try {
    (oe = 4), Cd(e, t, n, r);
  } finally {
    (oe = i), (Ii.transition = s);
  }
}
function Cd(e, t, n, r) {
  if (dl) {
    var i = Gc(e, t, n, r);
    if (i === null) qu(e, t, r, hl, n), np(e, r);
    else if (zw(i, e, t, n, r)) r.stopPropagation();
    else if ((np(e, r), t & 4 && -1 < Fw.indexOf(e))) {
      for (; i !== null; ) {
        var s = qa(i);
        if (
          (s !== null && vg(s),
          (s = Gc(e, t, n, r)),
          s === null && qu(e, t, r, hl, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else qu(e, t, r, null, n);
  }
}
var hl = null;
function Gc(e, t, n, r) {
  if (((hl = null), (e = kd(r)), (e = Tr(e)), e !== null))
    if (((t = ti(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (hl = e), null;
}
function bg(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Tw()) {
        case xd:
          return 1;
        case dg:
          return 4;
        case cl:
        case Aw:
          return 16;
        case hg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zn = null,
  Pd = null,
  Vo = null;
function kg() {
  if (Vo) return Vo;
  var e,
    t = Pd,
    n = t.length,
    r,
    i = 'value' in Zn ? Zn.value : Zn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++);
  return (Vo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ho(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ho() {
  return !0;
}
function ip() {
  return !1;
}
function kt(e) {
  function t(n, r, i, s, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ho
        : ip),
      (this.isPropagationStopped = ip),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ho));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ho));
      },
      persist: function () {},
      isPersistent: ho,
    }),
    t
  );
}
var ms = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Od = kt(ms),
  Wa = we({}, ms, { view: 0, detail: 0 }),
  Bw = kt(Wa),
  Mu,
  $u,
  js,
  Gl = we({}, Wa, {
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
    getModifierState: jd,
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
      return 'movementX' in e
        ? e.movementX
        : (e !== js &&
            (js && e.type === 'mousemove'
              ? ((Mu = e.screenX - js.screenX), ($u = e.screenY - js.screenY))
              : ($u = Mu = 0),
            (js = e)),
          Mu);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : $u;
    },
  }),
  sp = kt(Gl),
  Ww = we({}, Gl, { dataTransfer: 0 }),
  qw = kt(Ww),
  Qw = we({}, Wa, { relatedTarget: 0 }),
  Fu = kt(Qw),
  Yw = we({}, ms, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kw = kt(Yw),
  Gw = we({}, ms, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Xw = kt(Gw),
  Jw = we({}, ms, { data: 0 }),
  ap = kt(Jw),
  Zw = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  e2 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  t2 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function n2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = t2[e]) ? !!t[e] : !1;
}
function jd() {
  return n2;
}
var r2 = we({}, Wa, {
    key: function (e) {
      if (e.key) {
        var t = Zw[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Ho(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? e2[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jd,
    charCode: function (e) {
      return e.type === 'keypress' ? Ho(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Ho(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  i2 = kt(r2),
  s2 = we({}, Gl, {
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
  op = kt(s2),
  a2 = we({}, Wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jd,
  }),
  o2 = kt(a2),
  l2 = we({}, ms, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  u2 = kt(l2),
  c2 = we({}, Gl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  f2 = kt(c2),
  d2 = [9, 13, 27, 32],
  Td = _n && 'CompositionEvent' in window,
  Ys = null;
_n && 'documentMode' in document && (Ys = document.documentMode);
var h2 = _n && 'TextEvent' in window && !Ys,
  xg = _n && (!Td || (Ys && 8 < Ys && 11 >= Ys)),
  lp = ' ',
  up = !1;
function Sg(e, t) {
  switch (e) {
    case 'keyup':
      return d2.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Eg(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var wi = !1;
function p2(e, t) {
  switch (e) {
    case 'compositionend':
      return Eg(t);
    case 'keypress':
      return t.which !== 32 ? null : ((up = !0), lp);
    case 'textInput':
      return (e = t.data), e === lp && up ? null : e;
    default:
      return null;
  }
}
function m2(e, t) {
  if (wi)
    return e === 'compositionend' || (!Td && Sg(e, t))
      ? ((e = kg()), (Vo = Pd = Zn = null), (wi = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return xg && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var v2 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function cp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!v2[e.type] : t === 'textarea';
}
function Cg(e, t, n, r) {
  rg(r),
    (t = pl(t, 'onChange')),
    0 < t.length &&
      ((n = new Od('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ks = null,
  da = null;
function g2(e) {
  Mg(e, 0);
}
function Xl(e) {
  var t = ki(e);
  if (Gv(t)) return e;
}
function y2(e, t) {
  if (e === 'change') return t;
}
var Pg = !1;
if (_n) {
  var zu;
  if (_n) {
    var Uu = 'oninput' in document;
    if (!Uu) {
      var fp = document.createElement('div');
      fp.setAttribute('oninput', 'return;'),
        (Uu = typeof fp.oninput == 'function');
    }
    zu = Uu;
  } else zu = !1;
  Pg = zu && (!document.documentMode || 9 < document.documentMode);
}
function dp() {
  Ks && (Ks.detachEvent('onpropertychange', Og), (da = Ks = null));
}
function Og(e) {
  if (e.propertyName === 'value' && Xl(da)) {
    var t = [];
    Cg(t, da, e, kd(e)), og(g2, t);
  }
}
function w2(e, t, n) {
  e === 'focusin'
    ? (dp(), (Ks = t), (da = n), Ks.attachEvent('onpropertychange', Og))
    : e === 'focusout' && dp();
}
function _2(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Xl(da);
}
function b2(e, t) {
  if (e === 'click') return Xl(t);
}
function k2(e, t) {
  if (e === 'input' || e === 'change') return Xl(t);
}
function x2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Gt = typeof Object.is == 'function' ? Object.is : x2;
function ha(e, t) {
  if (Gt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Rc.call(t, i) || !Gt(e[i], t[i])) return !1;
  }
  return !0;
}
function hp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function pp(e, t) {
  var n = hp(e);
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
    n = hp(n);
  }
}
function jg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? jg(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Tg() {
  for (var e = window, t = ol(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ol(e.document);
  }
  return t;
}
function Ad(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function S2(e) {
  var t = Tg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    jg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ad(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = pp(n, s));
        var a = pp(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var E2 = _n && 'documentMode' in document && 11 >= document.documentMode,
  _i = null,
  Xc = null,
  Gs = null,
  Jc = !1;
function mp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Jc ||
    _i == null ||
    _i !== ol(r) ||
    ((r = _i),
    'selectionStart' in r && Ad(r)
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
    (Gs && ha(Gs, r)) ||
      ((Gs = r),
      (r = pl(Xc, 'onSelect')),
      0 < r.length &&
        ((t = new Od('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = _i))));
}
function po(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var bi = {
    animationend: po('Animation', 'AnimationEnd'),
    animationiteration: po('Animation', 'AnimationIteration'),
    animationstart: po('Animation', 'AnimationStart'),
    transitionend: po('Transition', 'TransitionEnd'),
  },
  Vu = {},
  Ag = {};
_n &&
  ((Ag = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete bi.animationend.animation,
    delete bi.animationiteration.animation,
    delete bi.animationstart.animation),
  'TransitionEvent' in window || delete bi.transitionend.transition);
function Jl(e) {
  if (Vu[e]) return Vu[e];
  if (!bi[e]) return e;
  var t = bi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ag) return (Vu[e] = t[n]);
  return e;
}
var Rg = Jl('animationend'),
  Ng = Jl('animationiteration'),
  Lg = Jl('animationstart'),
  Dg = Jl('transitionend'),
  Ig = new Map(),
  vp =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function yr(e, t) {
  Ig.set(e, t), ei(t, [e]);
}
for (var Hu = 0; Hu < vp.length; Hu++) {
  var Bu = vp[Hu],
    C2 = Bu.toLowerCase(),
    P2 = Bu[0].toUpperCase() + Bu.slice(1);
  yr(C2, 'on' + P2);
}
yr(Rg, 'onAnimationEnd');
yr(Ng, 'onAnimationIteration');
yr(Lg, 'onAnimationStart');
yr('dblclick', 'onDoubleClick');
yr('focusin', 'onFocus');
yr('focusout', 'onBlur');
yr(Dg, 'onTransitionEnd');
ns('onMouseEnter', ['mouseout', 'mouseover']);
ns('onMouseLeave', ['mouseout', 'mouseover']);
ns('onPointerEnter', ['pointerout', 'pointerover']);
ns('onPointerLeave', ['pointerout', 'pointerover']);
ei(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
ei(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
ei('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
ei(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
ei(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
ei(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Vs =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  O2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Vs));
function gp(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Cw(r, t, void 0, e), (e.currentTarget = null);
}
function Mg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            l = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), l !== s && i.isPropagationStopped())) break e;
          gp(i, o, u), (s = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (l = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          gp(i, o, u), (s = l);
        }
    }
  }
  if (ul) throw ((e = Qc), (ul = !1), (Qc = null), e);
}
function ce(e, t) {
  var n = t[rf];
  n === void 0 && (n = t[rf] = new Set());
  var r = e + '__bubble';
  n.has(r) || ($g(t, e, 2, !1), n.add(r));
}
function Wu(e, t, n) {
  var r = 0;
  t && (r |= 4), $g(n, e, r, t);
}
var mo = '_reactListening' + Math.random().toString(36).slice(2);
function pa(e) {
  if (!e[mo]) {
    (e[mo] = !0),
      Wv.forEach(function (n) {
        n !== 'selectionchange' && (O2.has(n) || Wu(n, !1, e), Wu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[mo] || ((t[mo] = !0), Wu('selectionchange', !1, t));
  }
}
function $g(e, t, n, r) {
  switch (bg(t)) {
    case 1:
      var i = Vw;
      break;
    case 4:
      i = Hw;
      break;
    default:
      i = Cd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !qc ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function qu(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = Tr(o)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = s = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  og(function () {
    var u = s,
      c = kd(n),
      f = [];
    e: {
      var d = Ig.get(e);
      if (d !== void 0) {
        var m = Od,
          y = e;
        switch (e) {
          case 'keypress':
            if (Ho(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            m = i2;
            break;
          case 'focusin':
            (y = 'focus'), (m = Fu);
            break;
          case 'focusout':
            (y = 'blur'), (m = Fu);
            break;
          case 'beforeblur':
          case 'afterblur':
            m = Fu;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            m = sp;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            m = qw;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            m = o2;
            break;
          case Rg:
          case Ng:
          case Lg:
            m = Kw;
            break;
          case Dg:
            m = u2;
            break;
          case 'scroll':
            m = Bw;
            break;
          case 'wheel':
            m = f2;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            m = Xw;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            m = op;
        }
        var b = (t & 4) !== 0,
          P = !b && e === 'scroll',
          v = b ? (d !== null ? d + 'Capture' : null) : d;
        b = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var k = g.stateNode;
          if (
            (g.tag === 5 &&
              k !== null &&
              ((g = k),
              v !== null && ((k = la(p, v)), k != null && b.push(ma(p, k, g)))),
            P)
          )
            break;
          p = p.return;
        }
        0 < b.length &&
          ((d = new m(d, y, null, n, c)), f.push({ event: d, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (m = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Bc &&
            (y = n.relatedTarget || n.fromElement) &&
            (Tr(y) || y[bn]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          m
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? Tr(y) : null),
              y !== null &&
                ((P = ti(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((b = sp),
            (k = 'onMouseLeave'),
            (v = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((b = op),
              (k = 'onPointerLeave'),
              (v = 'onPointerEnter'),
              (p = 'pointer')),
            (P = m == null ? d : ki(m)),
            (g = y == null ? d : ki(y)),
            (d = new b(k, p + 'leave', m, n, c)),
            (d.target = P),
            (d.relatedTarget = g),
            (k = null),
            Tr(c) === u &&
              ((b = new b(v, p + 'enter', y, n, c)),
              (b.target = g),
              (b.relatedTarget = P),
              (k = b)),
            (P = k),
            m && y)
          )
            t: {
              for (b = m, v = y, p = 0, g = b; g; g = ui(g)) p++;
              for (g = 0, k = v; k; k = ui(k)) g++;
              for (; 0 < p - g; ) (b = ui(b)), p--;
              for (; 0 < g - p; ) (v = ui(v)), g--;
              for (; p--; ) {
                if (b === v || (v !== null && b === v.alternate)) break t;
                (b = ui(b)), (v = ui(v));
              }
              b = null;
            }
          else b = null;
          m !== null && yp(f, d, m, b, !1),
            y !== null && P !== null && yp(f, P, y, b, !0);
        }
      }
      e: {
        if (
          ((d = u ? ki(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === 'select' || (m === 'input' && d.type === 'file'))
        )
          var S = y2;
        else if (cp(d))
          if (Pg) S = k2;
          else {
            S = _2;
            var T = w2;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = b2);
        if (S && (S = S(e, u))) {
          Cg(f, S, n, c);
          break e;
        }
        T && T(e, d, u),
          e === 'focusout' &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === 'number' &&
            Fc(d, 'number', d.value);
      }
      switch (((T = u ? ki(u) : window), e)) {
        case 'focusin':
          (cp(T) || T.contentEditable === 'true') &&
            ((_i = T), (Xc = u), (Gs = null));
          break;
        case 'focusout':
          Gs = Xc = _i = null;
          break;
        case 'mousedown':
          Jc = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Jc = !1), mp(f, n, c);
          break;
        case 'selectionchange':
          if (E2) break;
        case 'keydown':
        case 'keyup':
          mp(f, n, c);
      }
      var R;
      if (Td)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart';
              break e;
            case 'compositionend':
              O = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              O = 'onCompositionUpdate';
              break e;
          }
          O = void 0;
        }
      else
        wi
          ? Sg(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (xg &&
          n.locale !== 'ko' &&
          (wi || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && wi && (R = kg())
            : ((Zn = c),
              (Pd = 'value' in Zn ? Zn.value : Zn.textContent),
              (wi = !0))),
        (T = pl(u, O)),
        0 < T.length &&
          ((O = new ap(O, e, null, n, c)),
          f.push({ event: O, listeners: T }),
          R ? (O.data = R) : ((R = Eg(n)), R !== null && (O.data = R)))),
        (R = h2 ? p2(e, n) : m2(e, n)) &&
          ((u = pl(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new ap('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = R)));
    }
    Mg(f, t);
  });
}
function ma(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pl(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = la(e, n)),
      s != null && r.unshift(ma(e, s, i)),
      (s = la(e, t)),
      s != null && r.push(ma(e, s, i))),
      (e = e.return);
  }
  return r;
}
function ui(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function yp(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      l = o.alternate,
      u = o.stateNode;
    if (l !== null && l === r) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((l = la(n, s)), l != null && a.unshift(ma(n, l, o)))
        : i || ((l = la(n, s)), l != null && a.push(ma(n, l, o)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var j2 = /\r\n?/g,
  T2 = /\u0000|\uFFFD/g;
function wp(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      j2,
      `
`
    )
    .replace(T2, '');
}
function vo(e, t, n) {
  if (((t = wp(t)), wp(e) !== t && n)) throw Error(j(425));
}
function ml() {}
var Zc = null,
  ef = null;
function tf(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var nf = typeof setTimeout == 'function' ? setTimeout : void 0,
  A2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  _p = typeof Promise == 'function' ? Promise : void 0,
  R2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof _p < 'u'
        ? function (e) {
            return _p.resolve(null).then(e).catch(N2);
          }
        : nf;
function N2(e) {
  setTimeout(function () {
    throw e;
  });
}
function Qu(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), fa(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = i;
  } while (n);
  fa(t);
}
function or(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function bp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var vs = Math.random().toString(36).slice(2),
  sn = '__reactFiber$' + vs,
  va = '__reactProps$' + vs,
  bn = '__reactContainer$' + vs,
  rf = '__reactEvents$' + vs,
  L2 = '__reactListeners$' + vs,
  D2 = '__reactHandles$' + vs;
function Tr(e) {
  var t = e[sn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bn] || n[sn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = bp(e); e !== null; ) {
          if ((n = e[sn])) return n;
          e = bp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qa(e) {
  return (
    (e = e[sn] || e[bn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ki(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function Zl(e) {
  return e[va] || null;
}
var sf = [],
  xi = -1;
function wr(e) {
  return { current: e };
}
function he(e) {
  0 > xi || ((e.current = sf[xi]), (sf[xi] = null), xi--);
}
function ue(e, t) {
  xi++, (sf[xi] = e.current), (e.current = t);
}
var pr = {},
  Ge = wr(pr),
  ut = wr(!1),
  qr = pr;
function rs(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ct(e) {
  return (e = e.childContextTypes), e != null;
}
function vl() {
  he(ut), he(Ge);
}
function kp(e, t, n) {
  if (Ge.current !== pr) throw Error(j(168));
  ue(Ge, t), ue(ut, n);
}
function Fg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(j(108, ww(e) || 'Unknown', i));
  return we({}, n, r);
}
function gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pr),
    (qr = Ge.current),
    ue(Ge, e),
    ue(ut, ut.current),
    !0
  );
}
function xp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Fg(e, t, qr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      he(ut),
      he(Ge),
      ue(Ge, e))
    : he(ut),
    ue(ut, n);
}
var mn = null,
  eu = !1,
  Yu = !1;
function zg(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
function I2(e) {
  (eu = !0), zg(e);
}
function _r() {
  if (!Yu && mn !== null) {
    Yu = !0;
    var e = 0,
      t = oe;
    try {
      var n = mn;
      for (oe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (mn = null), (eu = !1);
    } catch (i) {
      throw (mn !== null && (mn = mn.slice(e + 1)), fg(xd, _r), i);
    } finally {
      (oe = t), (Yu = !1);
    }
  }
  return null;
}
var Si = [],
  Ei = 0,
  yl = null,
  wl = 0,
  jt = [],
  Tt = 0,
  Qr = null,
  gn = 1,
  yn = '';
function Er(e, t) {
  (Si[Ei++] = wl), (Si[Ei++] = yl), (yl = e), (wl = t);
}
function Ug(e, t, n) {
  (jt[Tt++] = gn), (jt[Tt++] = yn), (jt[Tt++] = Qr), (Qr = e);
  var r = gn;
  e = yn;
  var i = 32 - Yt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Yt(t) + i;
  if (30 < s) {
    var a = i - (i % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (gn = (1 << (32 - Yt(t) + i)) | (n << i) | r),
      (yn = s + e);
  } else (gn = (1 << s) | (n << i) | r), (yn = e);
}
function Rd(e) {
  e.return !== null && (Er(e, 1), Ug(e, 1, 0));
}
function Nd(e) {
  for (; e === yl; )
    (yl = Si[--Ei]), (Si[Ei] = null), (wl = Si[--Ei]), (Si[Ei] = null);
  for (; e === Qr; )
    (Qr = jt[--Tt]),
      (jt[Tt] = null),
      (yn = jt[--Tt]),
      (jt[Tt] = null),
      (gn = jt[--Tt]),
      (jt[Tt] = null);
}
var wt = null,
  gt = null,
  ve = !1,
  Bt = null;
function Vg(e, t) {
  var n = Rt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Sp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (wt = e), (gt = or(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (wt = e), (gt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qr !== null ? { id: gn, overflow: yn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Rt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (wt = e),
            (gt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function af(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function of(e) {
  if (ve) {
    var t = gt;
    if (t) {
      var n = t;
      if (!Sp(e, t)) {
        if (af(e)) throw Error(j(418));
        t = or(n.nextSibling);
        var r = wt;
        t && Sp(e, t)
          ? Vg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (wt = e));
      }
    } else {
      if (af(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (wt = e);
    }
  }
}
function Ep(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  wt = e;
}
function go(e) {
  if (e !== wt) return !1;
  if (!ve) return Ep(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !tf(e.type, e.memoizedProps))),
    t && (t = gt))
  ) {
    if (af(e)) throw (Hg(), Error(j(418)));
    for (; t; ) Vg(e, t), (t = or(t.nextSibling));
  }
  if ((Ep(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              gt = or(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      gt = null;
    }
  } else gt = wt ? or(e.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var e = gt; e; ) e = or(e.nextSibling);
}
function is() {
  (gt = wt = null), (ve = !1);
}
function Ld(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
var M2 = jn.ReactCurrentBatchConfig;
function zt(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var _l = wr(null),
  bl = null,
  Ci = null,
  Dd = null;
function Id() {
  Dd = Ci = bl = null;
}
function Md(e) {
  var t = _l.current;
  he(_l), (e._currentValue = t);
}
function lf(e, t, n) {
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
function Mi(e, t) {
  (bl = e),
    (Dd = Ci = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (lt = !0), (e.firstContext = null));
}
function Dt(e) {
  var t = e._currentValue;
  if (Dd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ci === null)) {
      if (bl === null) throw Error(j(308));
      (Ci = e), (bl.dependencies = { lanes: 0, firstContext: e });
    } else Ci = Ci.next = e;
  return t;
}
var Ar = null;
function $d(e) {
  Ar === null ? (Ar = [e]) : Ar.push(e);
}
function Bg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), $d(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    kn(e, r)
  );
}
function kn(e, t) {
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
var $n = !1;
function Fd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wg(e, t) {
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
function wn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function lr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      kn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), $d(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    kn(e, n)
  );
}
function Bo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sd(e, n);
  }
}
function Cp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
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
function kl(e, t, n, r) {
  var i = e.updateQueue;
  $n = !1;
  var s = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var l = o,
      u = l.next;
    (l.next = null), a === null ? (s = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (o = c.lastBaseUpdate),
      o !== a &&
        (o === null ? (c.firstBaseUpdate = u) : (o.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    (a = 0), (c = u = l = null), (o = s);
    do {
      var d = o.lane,
        m = o.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var y = e,
            b = o;
          switch (((d = t), (m = n), b.tag)) {
            case 1:
              if (((y = b.payload), typeof y == 'function')) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = b.payload),
                (d = typeof y == 'function' ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = we({}, f, d);
              break e;
            case 2:
              $n = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [o]) : d.push(o));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (l = f)) : (c = c.next = m),
          (a |= d);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (d = o),
          (o = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Kr |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function Pp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(j(191, i));
        i.call(r);
      }
    }
}
var qg = new Bv.Component().refs;
function uf(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var tu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ti(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      i = cr(e),
      s = wn(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = lr(e, s, i)),
      t !== null && (Kt(t, e, i, r), Bo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      i = cr(e),
      s = wn(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = lr(e, s, i)),
      t !== null && (Kt(t, e, i, r), Bo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = nt(),
      r = cr(e),
      i = wn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = lr(e, i, r)),
      t !== null && (Kt(t, e, r, n), Bo(t, e, r));
  },
};
function Op(e, t, n, r, i, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ha(n, r) || !ha(i, s)
        : !0
  );
}
function Qg(e, t, n) {
  var r = !1,
    i = pr,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Dt(s))
      : ((i = ct(t) ? qr : Ge.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? rs(e, i) : pr)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = tu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function jp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && tu.enqueueReplaceState(t, t.state, null);
}
function cf(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = qg), Fd(e);
  var s = t.contextType;
  typeof s == 'object' && s !== null
    ? (i.context = Dt(s))
    : ((s = ct(t) ? qr : Ge.current), (i.context = rs(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (uf(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && tu.enqueueReplaceState(i, i.state, null),
      kl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ts(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var i = r,
        s = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var o = i.refs;
            o === qg && (o = i.refs = {}),
              a === null ? delete o[s] : (o[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != 'string') throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function yo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Tp(e) {
  var t = e._init;
  return t(e._payload);
}
function Yg(e) {
  function t(v, p) {
    if (e) {
      var g = v.deletions;
      g === null ? ((v.deletions = [p]), (v.flags |= 16)) : g.push(p);
    }
  }
  function n(v, p) {
    if (!e) return null;
    for (; p !== null; ) t(v, p), (p = p.sibling);
    return null;
  }
  function r(v, p) {
    for (v = new Map(); p !== null; )
      p.key !== null ? v.set(p.key, p) : v.set(p.index, p), (p = p.sibling);
    return v;
  }
  function i(v, p) {
    return (v = fr(v, p)), (v.index = 0), (v.sibling = null), v;
  }
  function s(v, p, g) {
    return (
      (v.index = g),
      e
        ? ((g = v.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((v.flags |= 2), p) : g)
            : ((v.flags |= 2), p))
        : ((v.flags |= 1048576), p)
    );
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function o(v, p, g, k) {
    return p === null || p.tag !== 6
      ? ((p = tc(g, v.mode, k)), (p.return = v), p)
      : ((p = i(p, g)), (p.return = v), p);
  }
  function l(v, p, g, k) {
    var S = g.type;
    return S === yi
      ? c(v, p, g.props.children, k, g.key)
      : p !== null &&
          (p.elementType === S ||
            (typeof S == 'object' &&
              S !== null &&
              S.$$typeof === Mn &&
              Tp(S) === p.type))
        ? ((k = i(p, g.props)), (k.ref = Ts(v, p, g)), (k.return = v), k)
        : ((k = Go(g.type, g.key, g.props, null, v.mode, k)),
          (k.ref = Ts(v, p, g)),
          (k.return = v),
          k);
  }
  function u(v, p, g, k) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = nc(g, v.mode, k)), (p.return = v), p)
      : ((p = i(p, g.children || [])), (p.return = v), p);
  }
  function c(v, p, g, k, S) {
    return p === null || p.tag !== 7
      ? ((p = Wr(g, v.mode, k, S)), (p.return = v), p)
      : ((p = i(p, g)), (p.return = v), p);
  }
  function f(v, p, g) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = tc('' + p, v.mode, g)), (p.return = v), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case ao:
          return (
            (g = Go(p.type, p.key, p.props, null, v.mode, g)),
            (g.ref = Ts(v, null, p)),
            (g.return = v),
            g
          );
        case gi:
          return (p = nc(p, v.mode, g)), (p.return = v), p;
        case Mn:
          var k = p._init;
          return f(v, k(p._payload), g);
      }
      if (zs(p) || Es(p))
        return (p = Wr(p, v.mode, g, null)), (p.return = v), p;
      yo(v, p);
    }
    return null;
  }
  function d(v, p, g, k) {
    var S = p !== null ? p.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return S !== null ? null : o(v, p, '' + g, k);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case ao:
          return g.key === S ? l(v, p, g, k) : null;
        case gi:
          return g.key === S ? u(v, p, g, k) : null;
        case Mn:
          return (S = g._init), d(v, p, S(g._payload), k);
      }
      if (zs(g) || Es(g)) return S !== null ? null : c(v, p, g, k, null);
      yo(v, g);
    }
    return null;
  }
  function m(v, p, g, k, S) {
    if ((typeof k == 'string' && k !== '') || typeof k == 'number')
      return (v = v.get(g) || null), o(p, v, '' + k, S);
    if (typeof k == 'object' && k !== null) {
      switch (k.$$typeof) {
        case ao:
          return (v = v.get(k.key === null ? g : k.key) || null), l(p, v, k, S);
        case gi:
          return (v = v.get(k.key === null ? g : k.key) || null), u(p, v, k, S);
        case Mn:
          var T = k._init;
          return m(v, p, g, T(k._payload), S);
      }
      if (zs(k) || Es(k)) return (v = v.get(g) || null), c(p, v, k, S, null);
      yo(p, k);
    }
    return null;
  }
  function y(v, p, g, k) {
    for (
      var S = null, T = null, R = p, O = (p = 0), B = null;
      R !== null && O < g.length;
      O++
    ) {
      R.index > O ? ((B = R), (R = null)) : (B = R.sibling);
      var V = d(v, R, g[O], k);
      if (V === null) {
        R === null && (R = B);
        break;
      }
      e && R && V.alternate === null && t(v, R),
        (p = s(V, p, O)),
        T === null ? (S = V) : (T.sibling = V),
        (T = V),
        (R = B);
    }
    if (O === g.length) return n(v, R), ve && Er(v, O), S;
    if (R === null) {
      for (; O < g.length; O++)
        (R = f(v, g[O], k)),
          R !== null &&
            ((p = s(R, p, O)), T === null ? (S = R) : (T.sibling = R), (T = R));
      return ve && Er(v, O), S;
    }
    for (R = r(v, R); O < g.length; O++)
      (B = m(R, v, O, g[O], k)),
        B !== null &&
          (e && B.alternate !== null && R.delete(B.key === null ? O : B.key),
          (p = s(B, p, O)),
          T === null ? (S = B) : (T.sibling = B),
          (T = B));
    return (
      e &&
        R.forEach(function (Ae) {
          return t(v, Ae);
        }),
      ve && Er(v, O),
      S
    );
  }
  function b(v, p, g, k) {
    var S = Es(g);
    if (typeof S != 'function') throw Error(j(150));
    if (((g = S.call(g)), g == null)) throw Error(j(151));
    for (
      var T = (S = null), R = p, O = (p = 0), B = null, V = g.next();
      R !== null && !V.done;
      O++, V = g.next()
    ) {
      R.index > O ? ((B = R), (R = null)) : (B = R.sibling);
      var Ae = d(v, R, V.value, k);
      if (Ae === null) {
        R === null && (R = B);
        break;
      }
      e && R && Ae.alternate === null && t(v, R),
        (p = s(Ae, p, O)),
        T === null ? (S = Ae) : (T.sibling = Ae),
        (T = Ae),
        (R = B);
    }
    if (V.done) return n(v, R), ve && Er(v, O), S;
    if (R === null) {
      for (; !V.done; O++, V = g.next())
        (V = f(v, V.value, k)),
          V !== null &&
            ((p = s(V, p, O)), T === null ? (S = V) : (T.sibling = V), (T = V));
      return ve && Er(v, O), S;
    }
    for (R = r(v, R); !V.done; O++, V = g.next())
      (V = m(R, v, O, V.value, k)),
        V !== null &&
          (e && V.alternate !== null && R.delete(V.key === null ? O : V.key),
          (p = s(V, p, O)),
          T === null ? (S = V) : (T.sibling = V),
          (T = V));
    return (
      e &&
        R.forEach(function (q) {
          return t(v, q);
        }),
      ve && Er(v, O),
      S
    );
  }
  function P(v, p, g, k) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === yi &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case ao:
          e: {
            for (var S = g.key, T = p; T !== null; ) {
              if (T.key === S) {
                if (((S = g.type), S === yi)) {
                  if (T.tag === 7) {
                    n(v, T.sibling),
                      (p = i(T, g.props.children)),
                      (p.return = v),
                      (v = p);
                    break e;
                  }
                } else if (
                  T.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === Mn &&
                    Tp(S) === T.type)
                ) {
                  n(v, T.sibling),
                    (p = i(T, g.props)),
                    (p.ref = Ts(v, T, g)),
                    (p.return = v),
                    (v = p);
                  break e;
                }
                n(v, T);
                break;
              } else t(v, T);
              T = T.sibling;
            }
            g.type === yi
              ? ((p = Wr(g.props.children, v.mode, k, g.key)),
                (p.return = v),
                (v = p))
              : ((k = Go(g.type, g.key, g.props, null, v.mode, k)),
                (k.ref = Ts(v, p, g)),
                (k.return = v),
                (v = k));
          }
          return a(v);
        case gi:
          e: {
            for (T = g.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(v, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = v),
                    (v = p);
                  break e;
                } else {
                  n(v, p);
                  break;
                }
              else t(v, p);
              p = p.sibling;
            }
            (p = nc(g, v.mode, k)), (p.return = v), (v = p);
          }
          return a(v);
        case Mn:
          return (T = g._init), P(v, p, T(g._payload), k);
      }
      if (zs(g)) return y(v, p, g, k);
      if (Es(g)) return b(v, p, g, k);
      yo(v, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        p !== null && p.tag === 6
          ? (n(v, p.sibling), (p = i(p, g)), (p.return = v), (v = p))
          : (n(v, p), (p = tc(g, v.mode, k)), (p.return = v), (v = p)),
        a(v))
      : n(v, p);
  }
  return P;
}
var ss = Yg(!0),
  Kg = Yg(!1),
  Qa = {},
  un = wr(Qa),
  ga = wr(Qa),
  ya = wr(Qa);
function Rr(e) {
  if (e === Qa) throw Error(j(174));
  return e;
}
function zd(e, t) {
  switch ((ue(ya, t), ue(ga, e), ue(un, Qa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Uc(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Uc(t, e));
  }
  he(un), ue(un, t);
}
function as() {
  he(un), he(ga), he(ya);
}
function Gg(e) {
  Rr(ya.current);
  var t = Rr(un.current),
    n = Uc(t, e.type);
  t !== n && (ue(ga, e), ue(un, n));
}
function Ud(e) {
  ga.current === e && (he(un), he(ga));
}
var ge = wr(0);
function xl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
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
var Ku = [];
function Vd() {
  for (var e = 0; e < Ku.length; e++)
    Ku[e]._workInProgressVersionPrimary = null;
  Ku.length = 0;
}
var Wo = jn.ReactCurrentDispatcher,
  Gu = jn.ReactCurrentBatchConfig,
  Yr = 0,
  ye = null,
  Ne = null,
  Fe = null,
  Sl = !1,
  Xs = !1,
  wa = 0,
  $2 = 0;
function Be() {
  throw Error(j(321));
}
function Hd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Gt(e[n], t[n])) return !1;
  return !0;
}
function Bd(e, t, n, r, i, s) {
  if (
    ((Yr = s),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Wo.current = e === null || e.memoizedState === null ? V2 : H2),
    (e = n(r, i)),
    Xs)
  ) {
    s = 0;
    do {
      if (((Xs = !1), (wa = 0), 25 <= s)) throw Error(j(301));
      (s += 1),
        (Fe = Ne = null),
        (t.updateQueue = null),
        (Wo.current = B2),
        (e = n(r, i));
    } while (Xs);
  }
  if (
    ((Wo.current = El),
    (t = Ne !== null && Ne.next !== null),
    (Yr = 0),
    (Fe = Ne = ye = null),
    (Sl = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function Wd() {
  var e = wa !== 0;
  return (wa = 0), e;
}
function Zt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Fe === null ? (ye.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
}
function It() {
  if (Ne === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ne.next;
  var t = Fe === null ? ye.memoizedState : Fe.next;
  if (t !== null) (Fe = t), (Ne = e);
  else {
    if (e === null) throw Error(j(310));
    (Ne = e),
      (e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null,
      }),
      Fe === null ? (ye.memoizedState = Fe = e) : (Fe = Fe.next = e);
  }
  return Fe;
}
function _a(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Xu(e) {
  var t = It(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = Ne,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = s.next), (s.next = a);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var o = (a = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Yr & c) === c)
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
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((o = l = f), (a = r)) : (l = l.next = f),
          (ye.lanes |= c),
          (Kr |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (a = r) : (l.next = o),
      Gt(r, t.memoizedState) || (lt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (ye.lanes |= s), (Kr |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ju(e) {
  var t = It(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== i);
    Gt(s, t.memoizedState) || (lt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Xg() {}
function Jg(e, t) {
  var n = ye,
    r = It(),
    i = t(),
    s = !Gt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (lt = !0)),
    (r = r.queue),
    qd(ty.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ba(9, ey.bind(null, n, r, i, t), void 0, null),
      ze === null)
    )
      throw Error(j(349));
    Yr & 30 || Zg(n, t, i);
  }
  return i;
}
function Zg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ey(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ny(t) && ry(e);
}
function ty(e, t, n) {
  return n(function () {
    ny(t) && ry(e);
  });
}
function ny(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gt(e, n);
  } catch {
    return !0;
  }
}
function ry(e) {
  var t = kn(e, 1);
  t !== null && Kt(t, e, 1, -1);
}
function Ap(e) {
  var t = Zt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _a,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = U2.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function ba(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function iy() {
  return It().memoizedState;
}
function qo(e, t, n, r) {
  var i = Zt();
  (ye.flags |= e),
    (i.memoizedState = ba(1 | t, n, void 0, r === void 0 ? null : r));
}
function nu(e, t, n, r) {
  var i = It();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Ne !== null) {
    var a = Ne.memoizedState;
    if (((s = a.destroy), r !== null && Hd(r, a.deps))) {
      i.memoizedState = ba(t, n, s, r);
      return;
    }
  }
  (ye.flags |= e), (i.memoizedState = ba(1 | t, n, s, r));
}
function Rp(e, t) {
  return qo(8390656, 8, e, t);
}
function qd(e, t) {
  return nu(2048, 8, e, t);
}
function sy(e, t) {
  return nu(4, 2, e, t);
}
function ay(e, t) {
  return nu(4, 4, e, t);
}
function oy(e, t) {
  if (typeof t == 'function')
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
function ly(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), nu(4, 4, oy.bind(null, t, e), n)
  );
}
function Qd() {}
function uy(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function cy(e, t) {
  var n = It();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fy(e, t, n) {
  return Yr & 21
    ? (Gt(n, t) || ((n = pg()), (ye.lanes |= n), (Kr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (lt = !0)), (e.memoizedState = n));
}
function F2(e, t) {
  var n = oe;
  (oe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Gu.transition;
  Gu.transition = {};
  try {
    e(!1), t();
  } finally {
    (oe = n), (Gu.transition = r);
  }
}
function dy() {
  return It().memoizedState;
}
function z2(e, t, n) {
  var r = cr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    hy(e))
  )
    py(t, n);
  else if (((n = Bg(e, t, n, r)), n !== null)) {
    var i = nt();
    Kt(n, e, r, i), my(n, t, r);
  }
}
function U2(e, t, n) {
  var r = cr(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (hy(e)) py(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = s(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), Gt(o, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), $d(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bg(e, t, i, r)),
      n !== null && ((i = nt()), Kt(n, e, r, i), my(n, t, r));
  }
}
function hy(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function py(e, t) {
  Xs = Sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function my(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Sd(e, n);
  }
}
var El = {
    readContext: Dt,
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
  V2 = {
    readContext: Dt,
    useCallback: function (e, t) {
      return (Zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Dt,
    useEffect: Rp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qo(4194308, 4, oy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qo(4, 2, e, t);
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
        (e = e.dispatch = z2.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ap,
    useDebugValue: Qd,
    useDeferredValue: function (e) {
      return (Zt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ap(!1),
        t = e[0];
      return (e = F2.bind(null, e[1])), (Zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        i = Zt();
      if (ve) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), ze === null)) throw Error(j(349));
        Yr & 30 || Zg(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Rp(ty.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ba(9, ey.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Zt(),
        t = ze.identifierPrefix;
      if (ve) {
        var n = yn,
          r = gn;
        (n = (r & ~(1 << (32 - Yt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = wa++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = $2++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  H2 = {
    readContext: Dt,
    useCallback: uy,
    useContext: Dt,
    useEffect: qd,
    useImperativeHandle: ly,
    useInsertionEffect: sy,
    useLayoutEffect: ay,
    useMemo: cy,
    useReducer: Xu,
    useRef: iy,
    useState: function () {
      return Xu(_a);
    },
    useDebugValue: Qd,
    useDeferredValue: function (e) {
      var t = It();
      return fy(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Xu(_a)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Xg,
    useSyncExternalStore: Jg,
    useId: dy,
    unstable_isNewReconciler: !1,
  },
  B2 = {
    readContext: Dt,
    useCallback: uy,
    useContext: Dt,
    useEffect: qd,
    useImperativeHandle: ly,
    useInsertionEffect: sy,
    useLayoutEffect: ay,
    useMemo: cy,
    useReducer: Ju,
    useRef: iy,
    useState: function () {
      return Ju(_a);
    },
    useDebugValue: Qd,
    useDeferredValue: function (e) {
      var t = It();
      return Ne === null ? (t.memoizedState = e) : fy(t, Ne.memoizedState, e);
    },
    useTransition: function () {
      var e = Ju(_a)[0],
        t = It().memoizedState;
      return [e, t];
    },
    useMutableSource: Xg,
    useSyncExternalStore: Jg,
    useId: dy,
    unstable_isNewReconciler: !1,
  };
function os(e, t) {
  try {
    var n = '',
      r = t;
    do (n += yw(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Zu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ff(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var W2 = typeof WeakMap == 'function' ? WeakMap : Map;
function vy(e, t, n) {
  (n = wn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pl || ((Pl = !0), (bf = r)), ff(e, t);
    }),
    n
  );
}
function gy(e, t, n) {
  (n = wn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ff(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        ff(e, t),
          typeof r != 'function' &&
            (ur === null ? (ur = new Set([this])) : ur.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : '',
        });
      }),
    n
  );
}
function Np(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new W2();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = s_.bind(null, e, t, n)), t.then(e, e));
}
function Lp(e) {
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
function Dp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = wn(-1, 1)), (t.tag = 2), lr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var q2 = jn.ReactCurrentOwner,
  lt = !1;
function et(e, t, n, r) {
  t.child = e === null ? Kg(t, null, n, r) : ss(t, e.child, n, r);
}
function Ip(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Mi(t, i),
    (r = Bd(e, t, n, r, s, i)),
    (n = Wd()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        xn(e, t, i))
      : (ve && n && Rd(t), (t.flags |= 1), et(e, t, r, i), t.child)
  );
}
function Mp(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !th(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), yy(e, t, s, r, i))
      : ((e = Go(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ha), n(a, r) && e.ref === t.ref)
    )
      return xn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = fr(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yy(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (ha(s, r) && e.ref === t.ref)
      if (((lt = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (lt = !0);
      else return (t.lanes = e.lanes), xn(e, t, i);
  }
  return df(e, t, n, r, i);
}
function wy(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(Oi, vt),
        (vt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(Oi, vt),
          (vt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        ue(Oi, vt),
        (vt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(Oi, vt),
      (vt |= r);
  return et(e, t, i, n), t.child;
}
function _y(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function df(e, t, n, r, i) {
  var s = ct(n) ? qr : Ge.current;
  return (
    (s = rs(t, s)),
    Mi(t, i),
    (n = Bd(e, t, n, r, s, i)),
    (r = Wd()),
    e !== null && !lt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        xn(e, t, i))
      : (ve && r && Rd(t), (t.flags |= 1), et(e, t, n, i), t.child)
  );
}
function $p(e, t, n, r, i) {
  if (ct(n)) {
    var s = !0;
    gl(t);
  } else s = !1;
  if ((Mi(t, i), t.stateNode === null))
    Qo(e, t), Qg(t, n, r), cf(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var l = a.context,
      u = n.contextType;
    typeof u == 'object' && u !== null
      ? (u = Dt(u))
      : ((u = ct(n) ? qr : Ge.current), (u = rs(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((o !== r || l !== u) && jp(t, a, r, u)),
      ($n = !1);
    var d = t.memoizedState;
    (a.state = d),
      kl(t, r, a, i),
      (l = t.memoizedState),
      o !== r || d !== l || ut.current || $n
        ? (typeof c == 'function' && (uf(t, n, c, r), (l = t.memoizedState)),
          (o = $n || Op(t, n, o, r, d, l, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = o))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Wg(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : zt(t.type, o)),
      (a.props = u),
      (f = t.pendingProps),
      (d = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = Dt(l))
        : ((l = ct(n) ? qr : Ge.current), (l = rs(t, l)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((o !== f || d !== l) && jp(t, a, r, l)),
      ($n = !1),
      (d = t.memoizedState),
      (a.state = d),
      kl(t, r, a, i);
    var y = t.memoizedState;
    o !== f || d !== y || ut.current || $n
      ? (typeof m == 'function' && (uf(t, n, m, r), (y = t.memoizedState)),
        (u = $n || Op(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, y, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, y, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (o === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (o === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return hf(e, t, n, r, s, i);
}
function hf(e, t, n, r, i, s) {
  _y(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && xp(t, n, !1), xn(e, t, s);
  (r = t.stateNode), (q2.current = t);
  var o =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = ss(t, e.child, null, s)), (t.child = ss(t, null, o, s)))
      : et(e, t, o, s),
    (t.memoizedState = r.state),
    i && xp(t, n, !0),
    t.child
  );
}
function by(e) {
  var t = e.stateNode;
  t.pendingContext
    ? kp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && kp(e, t.context, !1),
    zd(e, t.containerInfo);
}
function Fp(e, t, n, r, i) {
  return is(), Ld(i), (t.flags |= 256), et(e, t, n, r), t.child;
}
var pf = { dehydrated: null, treeContext: null, retryLane: 0 };
function mf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ky(e, t, n) {
  var r = t.pendingProps,
    i = ge.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ue(ge, i & 1),
    e === null)
  )
    return (
      of(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = su(a, r, 0, null)),
              (e = Wr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = mf(n)),
              (t.memoizedState = pf),
              e)
            : Yd(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return Q2(e, t, a, r, o, i, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (i = e.child), (o = i.sibling);
    var l = { mode: 'hidden', children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = fr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (s = fr(o, s)) : ((s = Wr(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? mf(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = pf),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = fr(s, { mode: 'visible', children: r.children })),
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
function Yd(e, t) {
  return (
    (t = su({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wo(e, t, n, r) {
  return (
    r !== null && Ld(r),
    ss(t, e.child, null, n),
    (e = Yd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Q2(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Zu(Error(j(422)))), wo(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = su({ mode: 'visible', children: r.children }, i, 0, null)),
          (s = Wr(s, i, a, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && ss(t, e.child, null, a),
          (t.child.memoizedState = mf(a)),
          (t.memoizedState = pf),
          s);
  if (!(t.mode & 1)) return wo(e, t, a, null);
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (s = Error(j(419))), (r = Zu(s, r, void 0)), wo(e, t, a, r);
  }
  if (((o = (a & e.childLanes) !== 0), lt || o)) {
    if (((r = ze), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), kn(e, i), Kt(r, e, i, -1));
    }
    return eh(), (r = Zu(Error(j(421)))), wo(e, t, a, r);
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = a_.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (gt = or(i.nextSibling)),
      (wt = t),
      (ve = !0),
      (Bt = null),
      e !== null &&
        ((jt[Tt++] = gn),
        (jt[Tt++] = yn),
        (jt[Tt++] = Qr),
        (gn = e.id),
        (yn = e.overflow),
        (Qr = t)),
      (t = Yd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function zp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), lf(e.return, t, n);
}
function ec(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function xy(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((et(e, t, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && zp(e, n, t);
        else if (e.tag === 19) zp(e, n, t);
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
  if ((ue(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && xl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ec(t, !1, i, n, s);
        break;
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && xl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        ec(t, !0, n, null, s);
        break;
      case 'together':
        ec(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function xn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Kr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
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
function Y2(e, t, n) {
  switch (t.tag) {
    case 3:
      by(t), is();
      break;
    case 5:
      Gg(t);
      break;
    case 1:
      ct(t.type) && gl(t);
      break;
    case 4:
      zd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ue(_l, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ky(e, t, n)
            : (ue(ge, ge.current & 1),
              (e = xn(e, t, n)),
              e !== null ? e.sibling : null);
      ue(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ue(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wy(e, t, n);
  }
  return xn(e, t, n);
}
var Sy, vf, Ey, Cy;
Sy = function (e, t) {
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
vf = function () {};
Ey = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Rr(un.current);
    var s = null;
    switch (n) {
      case 'input':
        (i = Mc(e, i)), (r = Mc(e, r)), (s = []);
        break;
      case 'select':
        (i = we({}, i, { value: void 0 })),
          (r = we({}, r, { value: void 0 })),
          (s = []);
        break;
      case 'textarea':
        (i = zc(e, i)), (r = zc(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ml);
    }
    Vc(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var o = i[u];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (aa.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((o = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== o && (l != null || o != null))
      )
        if (u === 'style')
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''));
            for (a in l)
              l.hasOwnProperty(a) &&
                o[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (o = o ? o.__html : void 0),
              l != null && o !== l && (s = s || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') ||
                (s = s || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (aa.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && ce('scroll', e),
                    s || o === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push('style', n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Cy = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function As(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
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
function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function K2(e, t, n) {
  var r = t.pendingProps;
  switch ((Nd(t), t.tag)) {
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
      return We(t), null;
    case 1:
      return ct(t.type) && vl(), We(t), null;
    case 3:
      return (
        (r = t.stateNode),
        as(),
        he(ut),
        he(Ge),
        Vd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (go(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Bt !== null && (Sf(Bt), (Bt = null)))),
        vf(e, t),
        We(t),
        null
      );
    case 5:
      Ud(t);
      var i = Rr(ya.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ey(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return We(t), null;
        }
        if (((e = Rr(un.current)), go(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[sn] = t), (r[va] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ce('cancel', r), ce('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ce('load', r);
              break;
            case 'video':
            case 'audio':
              for (i = 0; i < Vs.length; i++) ce(Vs[i], r);
              break;
            case 'source':
              ce('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ce('error', r), ce('load', r);
              break;
            case 'details':
              ce('toggle', r);
              break;
            case 'input':
              Kh(r, s), ce('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ce('invalid', r);
              break;
            case 'textarea':
              Xh(r, s), ce('invalid', r);
          }
          Vc(n, s), (i = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var o = s[a];
              a === 'children'
                ? typeof o == 'string'
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      vo(r.textContent, o, e),
                    (i = ['children', o]))
                  : typeof o == 'number' &&
                    r.textContent !== '' + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      vo(r.textContent, o, e),
                    (i = ['children', '' + o]))
                : aa.hasOwnProperty(a) &&
                  o != null &&
                  a === 'onScroll' &&
                  ce('scroll', r);
            }
          switch (n) {
            case 'input':
              oo(r), Gh(r, s, !0);
              break;
            case 'textarea':
              oo(r), Jh(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = ml);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Zv(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script><\/script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === 'select' &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[sn] = t),
            (e[va] = r),
            Sy(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Hc(n, r)), n)) {
              case 'dialog':
                ce('cancel', e), ce('close', e), (i = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ce('load', e), (i = r);
                break;
              case 'video':
              case 'audio':
                for (i = 0; i < Vs.length; i++) ce(Vs[i], e);
                i = r;
                break;
              case 'source':
                ce('error', e), (i = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ce('error', e), ce('load', e), (i = r);
                break;
              case 'details':
                ce('toggle', e), (i = r);
                break;
              case 'input':
                Kh(e, r), (i = Mc(e, r)), ce('invalid', e);
                break;
              case 'option':
                i = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = we({}, r, { value: void 0 })),
                  ce('invalid', e);
                break;
              case 'textarea':
                Xh(e, r), (i = zc(e, r)), ce('invalid', e);
                break;
              default:
                i = r;
            }
            Vc(n, i), (o = i);
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var l = o[s];
                s === 'style'
                  ? ng(e, l)
                  : s === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && eg(e, l))
                    : s === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && oa(e, l)
                        : typeof l == 'number' && oa(e, '' + l)
                      : s !== 'suppressContentEditableWarning' &&
                        s !== 'suppressHydrationWarning' &&
                        s !== 'autoFocus' &&
                        (aa.hasOwnProperty(s)
                          ? l != null && s === 'onScroll' && ce('scroll', e)
                          : l != null && yd(e, s, l, a));
              }
            switch (n) {
              case 'input':
                oo(e), Gh(e, r, !1);
                break;
              case 'textarea':
                oo(e), Jh(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + hr(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Ni(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Ni(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == 'function' && (e.onclick = ml);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
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
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) Cy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(j(166));
        if (((n = Rr(ya.current)), Rr(un.current), go(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[sn] = t),
            (s = r.nodeValue !== n) && ((e = wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                vo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[sn] = t),
            (t.stateNode = r);
      }
      return We(t), null;
    case 13:
      if (
        (he(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && gt !== null && t.mode & 1 && !(t.flags & 128))
          Hg(), is(), (t.flags |= 98560), (s = !1);
        else if (((s = go(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(j(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(j(317));
            s[sn] = t;
          } else
            is(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          We(t), (s = !1);
        } else Bt !== null && (Sf(Bt), (Bt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? De === 0 && (De = 3) : eh())),
          t.updateQueue !== null && (t.flags |= 4),
          We(t),
          null);
    case 4:
      return (
        as(), vf(e, t), e === null && pa(t.stateNode.containerInfo), We(t), null
      );
    case 10:
      return Md(t.type._context), We(t), null;
    case 17:
      return ct(t.type) && vl(), We(t), null;
    case 19:
      if ((he(ge), (s = t.memoizedState), s === null)) return We(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) As(s, !1);
        else {
          if (De !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = xl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    As(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ue(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Ce() > ls &&
            ((t.flags |= 128), (r = !0), As(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              As(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !a.alternate && !ve)
            )
              return We(t), null;
          } else
            2 * Ce() - s.renderingStartTime > ls &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), As(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = ge.current),
          ue(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (We(t), null);
    case 22:
    case 23:
      return (
        Zd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? vt & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : We(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function G2(e, t) {
  switch ((Nd(t), t.tag)) {
    case 1:
      return (
        ct(t.type) && vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        as(),
        he(ut),
        he(Ge),
        Vd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ud(t), null;
    case 13:
      if (
        (he(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        is();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return he(ge), null;
    case 4:
      return as(), null;
    case 10:
      return Md(t.type._context), null;
    case 22:
    case 23:
      return Zd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _o = !1,
  Ke = !1,
  X2 = typeof WeakSet == 'function' ? WeakSet : Set,
  $ = null;
function Pi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        be(e, t, r);
      }
    else n.current = null;
}
function gf(e, t, n) {
  try {
    n();
  } catch (r) {
    be(e, t, r);
  }
}
var Up = !1;
function J2(e, t) {
  if (((Zc = dl), (e = Tg()), Ad(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (o = a + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (o = a),
                d === s && ++c === r && (l = a),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = o === -1 || l === -1 ? null : { start: o, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ef = { focusedElem: e, selectionRange: n }, dl = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var b = y.memoizedProps,
                    P = y.memoizedState,
                    v = t.stateNode,
                    p = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : zt(t.type, b),
                      P
                    );
                  v.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
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
                throw Error(j(163));
            }
        } catch (k) {
          be(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (y = Up), (Up = !1), y;
}
function Js(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && gf(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ru(e, t) {
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
function yf(e) {
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
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Py(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Py(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[sn], delete t[va], delete t[rf], delete t[L2], delete t[D2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Oy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Oy(e.return)) return null;
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
function wf(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ml));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wf(e, t, n), e = e.sibling; e !== null; ) wf(e, t, n), (e = e.sibling);
}
function _f(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_f(e, t, n), e = e.sibling; e !== null; ) _f(e, t, n), (e = e.sibling);
}
var Ue = null,
  Vt = !1;
function An(e, t, n) {
  for (n = n.child; n !== null; ) jy(e, t, n), (n = n.sibling);
}
function jy(e, t, n) {
  if (ln && typeof ln.onCommitFiberUnmount == 'function')
    try {
      ln.onCommitFiberUnmount(Kl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ke || Pi(n, t);
    case 6:
      var r = Ue,
        i = Vt;
      (Ue = null),
        An(e, t, n),
        (Ue = r),
        (Vt = i),
        Ue !== null &&
          (Vt
            ? ((e = Ue),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ue.removeChild(n.stateNode));
      break;
    case 18:
      Ue !== null &&
        (Vt
          ? ((e = Ue),
            (n = n.stateNode),
            e.nodeType === 8
              ? Qu(e.parentNode, n)
              : e.nodeType === 1 && Qu(e, n),
            fa(e))
          : Qu(Ue, n.stateNode));
      break;
    case 4:
      (r = Ue),
        (i = Vt),
        (Ue = n.stateNode.containerInfo),
        (Vt = !0),
        An(e, t, n),
        (Ue = r),
        (Vt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && gf(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      An(e, t, n);
      break;
    case 1:
      if (
        !Ke &&
        (Pi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          be(n, t, o);
        }
      An(e, t, n);
      break;
    case 21:
      An(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ke = (r = Ke) || n.memoizedState !== null), An(e, t, n), (Ke = r))
        : An(e, t, n);
      break;
    default:
      An(e, t, n);
  }
}
function Hp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new X2()),
      t.forEach(function (r) {
        var i = o_.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function $t(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (Ue = o.stateNode), (Vt = !1);
              break e;
            case 3:
              (Ue = o.stateNode.containerInfo), (Vt = !0);
              break e;
            case 4:
              (Ue = o.stateNode.containerInfo), (Vt = !0);
              break e;
          }
          o = o.return;
        }
        if (Ue === null) throw Error(j(160));
        jy(s, a, i), (Ue = null), (Vt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        be(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ty(t, e), (t = t.sibling);
}
function Ty(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($t(t, e), Jt(e), r & 4)) {
        try {
          Js(3, e, e.return), ru(3, e);
        } catch (b) {
          be(e, e.return, b);
        }
        try {
          Js(5, e, e.return);
        } catch (b) {
          be(e, e.return, b);
        }
      }
      break;
    case 1:
      $t(t, e), Jt(e), r & 512 && n !== null && Pi(n, n.return);
      break;
    case 5:
      if (
        ($t(t, e),
        Jt(e),
        r & 512 && n !== null && Pi(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          oa(i, '');
        } catch (b) {
          be(e, e.return, b);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          o = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            o === 'input' && s.type === 'radio' && s.name != null && Xv(i, s),
              Hc(o, a);
            var u = Hc(o, s);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                f = l[a + 1];
              c === 'style'
                ? ng(i, f)
                : c === 'dangerouslySetInnerHTML'
                  ? eg(i, f)
                  : c === 'children'
                    ? oa(i, f)
                    : yd(i, c, f, u);
            }
            switch (o) {
              case 'input':
                $c(i, s);
                break;
              case 'textarea':
                Jv(i, s);
                break;
              case 'select':
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var m = s.value;
                m != null
                  ? Ni(i, !!s.multiple, m, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Ni(i, !!s.multiple, s.defaultValue, !0)
                      : Ni(i, !!s.multiple, s.multiple ? [] : '', !1));
            }
            i[va] = s;
          } catch (b) {
            be(e, e.return, b);
          }
      }
      break;
    case 6:
      if (($t(t, e), Jt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (b) {
          be(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        ($t(t, e), Jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          fa(t.containerInfo);
        } catch (b) {
          be(e, e.return, b);
        }
      break;
    case 4:
      $t(t, e), Jt(e);
      break;
    case 13:
      $t(t, e),
        Jt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Xd = Ce())),
        r & 4 && Hp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ke = (u = Ke) || c), $t(t, e), (Ke = u)) : $t(t, e),
        Jt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for ($ = e, c = e.child; c !== null; ) {
            for (f = $ = c; $ !== null; ) {
              switch (((d = $), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Js(4, d, d.return);
                  break;
                case 1:
                  Pi(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (b) {
                      be(r, n, b);
                    }
                  }
                  break;
                case 5:
                  Pi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Wp(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), ($ = m)) : Wp(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((o = f.stateNode),
                      (l = f.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (o.style.display = tg('display', a)));
              } catch (b) {
                be(e, e.return, b);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps;
              } catch (b) {
                be(e, e.return, b);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      $t(t, e), Jt(e), r & 4 && Hp(e);
      break;
    case 21:
      break;
    default:
      $t(t, e), Jt(e);
  }
}
function Jt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Oy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (oa(i, ''), (r.flags &= -33));
          var s = Vp(e);
          _f(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = Vp(e);
          wf(e, o, a);
          break;
        default:
          throw Error(j(161));
      }
    } catch (l) {
      be(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Z2(e, t, n) {
  ($ = e), Ay(e);
}
function Ay(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var i = $,
      s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || _o;
      if (!a) {
        var o = i.alternate,
          l = (o !== null && o.memoizedState !== null) || Ke;
        o = _o;
        var u = Ke;
        if (((_o = a), (Ke = l) && !u))
          for ($ = i; $ !== null; )
            (a = $),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? qp(i)
                : l !== null
                  ? ((l.return = a), ($ = l))
                  : qp(i);
        for (; s !== null; ) ($ = s), Ay(s), (s = s.sibling);
        ($ = i), (_o = o), (Ke = u);
      }
      Bp(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), ($ = s)) : Bp(e);
  }
}
function Bp(e) {
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
              Ke || ru(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ke)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : zt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Pp(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pp(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var l = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
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
                    var f = c.dehydrated;
                    f !== null && fa(f);
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
              throw Error(j(163));
          }
        Ke || (t.flags & 512 && yf(t));
      } catch (d) {
        be(t, t.return, d);
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
function Wp(e) {
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
function qp(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ru(4, t);
          } catch (l) {
            be(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              be(t, i, l);
            }
          }
          var s = t.return;
          try {
            yf(t);
          } catch (l) {
            be(t, s, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            yf(t);
          } catch (l) {
            be(t, a, l);
          }
      }
    } catch (l) {
      be(t, t.return, l);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), ($ = o);
      break;
    }
    $ = t.return;
  }
}
var e_ = Math.ceil,
  Cl = jn.ReactCurrentDispatcher,
  Kd = jn.ReactCurrentOwner,
  Nt = jn.ReactCurrentBatchConfig,
  te = 0,
  ze = null,
  Te = null,
  Ve = 0,
  vt = 0,
  Oi = wr(0),
  De = 0,
  ka = null,
  Kr = 0,
  iu = 0,
  Gd = 0,
  Zs = null,
  ot = null,
  Xd = 0,
  ls = 1 / 0,
  pn = null,
  Pl = !1,
  bf = null,
  ur = null,
  bo = !1,
  er = null,
  Ol = 0,
  ea = 0,
  kf = null,
  Yo = -1,
  Ko = 0;
function nt() {
  return te & 6 ? Ce() : Yo !== -1 ? Yo : (Yo = Ce());
}
function cr(e) {
  return e.mode & 1
    ? te & 2 && Ve !== 0
      ? Ve & -Ve
      : M2.transition !== null
        ? (Ko === 0 && (Ko = pg()), Ko)
        : ((e = oe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bg(e.type))),
          e)
    : 1;
}
function Kt(e, t, n, r) {
  if (50 < ea) throw ((ea = 0), (kf = null), Error(j(185)));
  Ba(e, n, r),
    (!(te & 2) || e !== ze) &&
      (e === ze && (!(te & 2) && (iu |= n), De === 4 && Un(e, Ve)),
      ft(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((ls = Ce() + 500), eu && _r()));
}
function ft(e, t) {
  var n = e.callbackNode;
  Mw(e, t);
  var r = fl(e, e === ze ? Ve : 0);
  if (r === 0)
    n !== null && tp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && tp(n), t === 1))
      e.tag === 0 ? I2(Qp.bind(null, e)) : zg(Qp.bind(null, e)),
        R2(function () {
          !(te & 6) && _r();
        }),
        (n = null);
    else {
      switch (mg(r)) {
        case 1:
          n = xd;
          break;
        case 4:
          n = dg;
          break;
        case 16:
          n = cl;
          break;
        case 536870912:
          n = hg;
          break;
        default:
          n = cl;
      }
      n = Fy(n, Ry.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ry(e, t) {
  if (((Yo = -1), (Ko = 0), te & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if ($i() && e.callbackNode !== n) return null;
  var r = fl(e, e === ze ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = jl(e, r);
  else {
    t = r;
    var i = te;
    te |= 2;
    var s = Ly();
    (ze !== e || Ve !== t) && ((pn = null), (ls = Ce() + 500), Br(e, t));
    do
      try {
        r_();
        break;
      } catch (o) {
        Ny(e, o);
      }
    while (!0);
    Id(),
      (Cl.current = s),
      (te = i),
      Te !== null ? (t = 0) : ((ze = null), (Ve = 0), (t = De));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Yc(e)), i !== 0 && ((r = i), (t = xf(e, i)))), t === 1)
    )
      throw ((n = ka), Br(e, 0), Un(e, r), ft(e, Ce()), n);
    if (t === 6) Un(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !t_(i) &&
          ((t = jl(e, r)),
          t === 2 && ((s = Yc(e)), s !== 0 && ((r = s), (t = xf(e, s)))),
          t === 1))
      )
        throw ((n = ka), Br(e, 0), Un(e, r), ft(e, Ce()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          Cr(e, ot, pn);
          break;
        case 3:
          if (
            (Un(e, r), (r & 130023424) === r && ((t = Xd + 500 - Ce()), 10 < t))
          ) {
            if (fl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              nt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = nf(Cr.bind(null, e, ot, pn), t);
            break;
          }
          Cr(e, ot, pn);
          break;
        case 4:
          if ((Un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Yt(r);
            (s = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~s);
          }
          if (
            ((r = i),
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
                          : 1960 * e_(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = nf(Cr.bind(null, e, ot, pn), r);
            break;
          }
          Cr(e, ot, pn);
          break;
        case 5:
          Cr(e, ot, pn);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return ft(e, Ce()), e.callbackNode === n ? Ry.bind(null, e) : null;
}
function xf(e, t) {
  var n = Zs;
  return (
    e.current.memoizedState.isDehydrated && (Br(e, t).flags |= 256),
    (e = jl(e, t)),
    e !== 2 && ((t = ot), (ot = n), t !== null && Sf(t)),
    e
  );
}
function Sf(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function t_(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Gt(s(), i)) return !1;
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
function Un(e, t) {
  for (
    t &= ~Gd,
      t &= ~iu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Qp(e) {
  if (te & 6) throw Error(j(327));
  $i();
  var t = fl(e, 0);
  if (!(t & 1)) return ft(e, Ce()), null;
  var n = jl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Yc(e);
    r !== 0 && ((t = r), (n = xf(e, r)));
  }
  if (n === 1) throw ((n = ka), Br(e, 0), Un(e, t), ft(e, Ce()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Cr(e, ot, pn),
    ft(e, Ce()),
    null
  );
}
function Jd(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((ls = Ce() + 500), eu && _r());
  }
}
function Gr(e) {
  er !== null && er.tag === 0 && !(te & 6) && $i();
  var t = te;
  te |= 1;
  var n = Nt.transition,
    r = oe;
  try {
    if (((Nt.transition = null), (oe = 1), e)) return e();
  } finally {
    (oe = r), (Nt.transition = n), (te = t), !(te & 6) && _r();
  }
}
function Zd() {
  (vt = Oi.current), he(Oi);
}
function Br(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), A2(n)), Te !== null))
    for (n = Te.return; n !== null; ) {
      var r = n;
      switch ((Nd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vl();
          break;
        case 3:
          as(), he(ut), he(Ge), Vd();
          break;
        case 5:
          Ud(r);
          break;
        case 4:
          as();
          break;
        case 13:
          he(ge);
          break;
        case 19:
          he(ge);
          break;
        case 10:
          Md(r.type._context);
          break;
        case 22:
        case 23:
          Zd();
      }
      n = n.return;
    }
  if (
    ((ze = e),
    (Te = e = fr(e.current, null)),
    (Ve = vt = t),
    (De = 0),
    (ka = null),
    (Gd = iu = Kr = 0),
    (ot = Zs = null),
    Ar !== null)
  ) {
    for (t = 0; t < Ar.length; t++)
      if (((n = Ar[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Ar = null;
  }
  return e;
}
function Ny(e, t) {
  do {
    var n = Te;
    try {
      if ((Id(), (Wo.current = El), Sl)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Sl = !1;
      }
      if (
        ((Yr = 0),
        (Fe = Ne = ye = null),
        (Xs = !1),
        (wa = 0),
        (Kd.current = null),
        n === null || n.return === null)
      ) {
        (De = 1), (ka = t), (Te = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          o = n,
          l = t;
        if (
          ((t = Ve),
          (o.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = o,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Lp(a);
          if (m !== null) {
            (m.flags &= -257),
              Dp(m, a, o, s, t),
              m.mode & 1 && Np(s, u, t),
              (t = m),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var b = new Set();
              b.add(l), (t.updateQueue = b);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Np(s, u, t), eh();
              break e;
            }
            l = Error(j(426));
          }
        } else if (ve && o.mode & 1) {
          var P = Lp(a);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              Dp(P, a, o, s, t),
              Ld(os(l, o));
            break e;
          }
        }
        (s = l = os(l, o)),
          De !== 4 && (De = 2),
          Zs === null ? (Zs = [s]) : Zs.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var v = vy(s, l, t);
              Cp(s, v);
              break e;
            case 1:
              o = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (ur === null || !ur.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var k = gy(s, o, t);
                Cp(s, k);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Iy(n);
    } catch (S) {
      (t = S), Te === n && n !== null && (Te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ly() {
  var e = Cl.current;
  return (Cl.current = El), e === null ? El : e;
}
function eh() {
  (De === 0 || De === 3 || De === 2) && (De = 4),
    ze === null || (!(Kr & 268435455) && !(iu & 268435455)) || Un(ze, Ve);
}
function jl(e, t) {
  var n = te;
  te |= 2;
  var r = Ly();
  (ze !== e || Ve !== t) && ((pn = null), Br(e, t));
  do
    try {
      n_();
      break;
    } catch (i) {
      Ny(e, i);
    }
  while (!0);
  if ((Id(), (te = n), (Cl.current = r), Te !== null)) throw Error(j(261));
  return (ze = null), (Ve = 0), De;
}
function n_() {
  for (; Te !== null; ) Dy(Te);
}
function r_() {
  for (; Te !== null && !Ow(); ) Dy(Te);
}
function Dy(e) {
  var t = $y(e.alternate, e, vt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Iy(e) : (Te = t),
    (Kd.current = null);
}
function Iy(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = G2(n, t)), n !== null)) {
        (n.flags &= 32767), (Te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (De = 6), (Te = null);
        return;
      }
    } else if (((n = K2(n, t, vt)), n !== null)) {
      Te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Te = t;
      return;
    }
    Te = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function Cr(e, t, n) {
  var r = oe,
    i = Nt.transition;
  try {
    (Nt.transition = null), (oe = 1), i_(e, t, n, r);
  } finally {
    (Nt.transition = i), (oe = r);
  }
  return null;
}
function i_(e, t, n, r) {
  do $i();
  while (er !== null);
  if (te & 6) throw Error(j(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    ($w(e, s),
    e === ze && ((Te = ze = null), (Ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      bo ||
      ((bo = !0),
      Fy(cl, function () {
        return $i(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Nt.transition), (Nt.transition = null);
    var a = oe;
    oe = 1;
    var o = te;
    (te |= 4),
      (Kd.current = null),
      J2(e, n),
      Ty(n, e),
      S2(ef),
      (dl = !!Zc),
      (ef = Zc = null),
      (e.current = n),
      Z2(n),
      jw(),
      (te = o),
      (oe = a),
      (Nt.transition = s);
  } else e.current = n;
  if (
    (bo && ((bo = !1), (er = e), (Ol = i)),
    (s = e.pendingLanes),
    s === 0 && (ur = null),
    Rw(n.stateNode),
    ft(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Pl) throw ((Pl = !1), (e = bf), (bf = null), e);
  return (
    Ol & 1 && e.tag !== 0 && $i(),
    (s = e.pendingLanes),
    s & 1 ? (e === kf ? ea++ : ((ea = 0), (kf = e))) : (ea = 0),
    _r(),
    null
  );
}
function $i() {
  if (er !== null) {
    var e = mg(Ol),
      t = Nt.transition,
      n = oe;
    try {
      if (((Nt.transition = null), (oe = 16 > e ? 16 : e), er === null))
        var r = !1;
      else {
        if (((e = er), (er = null), (Ol = 0), te & 6)) throw Error(j(331));
        var i = te;
        for (te |= 4, $ = e.current; $ !== null; ) {
          var s = $,
            a = s.child;
          if ($.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var u = o[l];
                for ($ = u; $ !== null; ) {
                  var c = $;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Js(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), ($ = f);
                  else
                    for (; $ !== null; ) {
                      c = $;
                      var d = c.sibling,
                        m = c.return;
                      if ((Py(c), c === u)) {
                        $ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), ($ = d);
                        break;
                      }
                      $ = m;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var b = y.child;
                if (b !== null) {
                  y.child = null;
                  do {
                    var P = b.sibling;
                    (b.sibling = null), (b = P);
                  } while (b !== null);
                }
              }
              $ = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), ($ = a);
          else
            e: for (; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Js(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), ($ = v);
                break e;
              }
              $ = s.return;
            }
        }
        var p = e.current;
        for ($ = p; $ !== null; ) {
          a = $;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), ($ = g);
          else
            e: for (a = p; $ !== null; ) {
              if (((o = $), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ru(9, o);
                  }
                } catch (S) {
                  be(o, o.return, S);
                }
              if (o === a) {
                $ = null;
                break e;
              }
              var k = o.sibling;
              if (k !== null) {
                (k.return = o.return), ($ = k);
                break e;
              }
              $ = o.return;
            }
        }
        if (
          ((te = i), _r(), ln && typeof ln.onPostCommitFiberRoot == 'function')
        )
          try {
            ln.onPostCommitFiberRoot(Kl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (oe = n), (Nt.transition = t);
    }
  }
  return !1;
}
function Yp(e, t, n) {
  (t = os(n, t)),
    (t = vy(e, t, 1)),
    (e = lr(e, t, 1)),
    (t = nt()),
    e !== null && (Ba(e, 1, t), ft(e, t));
}
function be(e, t, n) {
  if (e.tag === 3) Yp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Yp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (ur === null || !ur.has(r)))
        ) {
          (e = os(n, e)),
            (e = gy(t, e, 1)),
            (t = lr(t, e, 1)),
            (e = nt()),
            t !== null && (Ba(t, 1, e), ft(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function s_(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = nt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ze === e &&
      (Ve & n) === n &&
      (De === 4 || (De === 3 && (Ve & 130023424) === Ve && 500 > Ce() - Xd)
        ? Br(e, 0)
        : (Gd |= n)),
    ft(e, t);
}
function My(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = co), (co <<= 1), !(co & 130023424) && (co = 4194304))
      : (t = 1));
  var n = nt();
  (e = kn(e, t)), e !== null && (Ba(e, t, n), ft(e, n));
}
function a_(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), My(e, n);
}
function o_(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), My(e, n);
}
var $y;
$y = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ut.current) lt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (lt = !1), Y2(e, t, n);
      lt = !!(e.flags & 131072);
    }
  else (lt = !1), ve && t.flags & 1048576 && Ug(t, wl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qo(e, t), (e = t.pendingProps);
      var i = rs(t, Ge.current);
      Mi(t, n), (i = Bd(null, t, r, e, i, n));
      var s = Wd();
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ct(r) ? ((s = !0), gl(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fd(t),
            (i.updater = tu),
            (t.stateNode = i),
            (i._reactInternals = t),
            cf(t, r, e, n),
            (t = hf(null, t, r, !0, s, n)))
          : ((t.tag = 0), ve && s && Rd(t), et(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = u_(r)),
          (e = zt(r, e)),
          i)
        ) {
          case 0:
            t = df(null, t, r, e, n);
            break e;
          case 1:
            t = $p(null, t, r, e, n);
            break e;
          case 11:
            t = Ip(null, t, r, e, n);
            break e;
          case 14:
            t = Mp(null, t, r, zt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : zt(r, i)),
        df(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : zt(r, i)),
        $p(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((by(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Wg(e, t),
          kl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = os(Error(j(423)), t)), (t = Fp(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = os(Error(j(424)), t)), (t = Fp(e, t, r, n, i));
            break e;
          } else
            for (
              gt = or(t.stateNode.containerInfo.firstChild),
                wt = t,
                ve = !0,
                Bt = null,
                n = Kg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((is(), r === i)) {
            t = xn(e, t, n);
            break e;
          }
          et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gg(t),
        e === null && of(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        tf(r, i) ? (a = null) : s !== null && tf(r, s) && (t.flags |= 32),
        _y(e, t),
        et(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && of(t), null;
    case 13:
      return ky(e, t, n);
    case 4:
      return (
        zd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ss(t, null, r, n)) : et(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : zt(r, i)),
        Ip(e, t, r, i, n)
      );
    case 7:
      return et(e, t, t.pendingProps, n), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (a = i.value),
          ue(_l, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (Gt(s.value, a)) {
            if (s.children === i.children && !ut.current) {
              t = xn(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                a = s.child;
                for (var l = o.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = wn(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      lf(s.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(j(341));
                (a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  lf(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        et(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Mi(t, n),
        (i = Dt(i)),
        (r = r(i)),
        (t.flags |= 1),
        et(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = zt(r, t.pendingProps)),
        (i = zt(r.type, i)),
        Mp(e, t, r, i, n)
      );
    case 15:
      return yy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : zt(r, i)),
        Qo(e, t),
        (t.tag = 1),
        ct(r) ? ((e = !0), gl(t)) : (e = !1),
        Mi(t, n),
        Qg(t, r, i),
        cf(t, r, i, n),
        hf(null, t, r, !0, e, n)
      );
    case 19:
      return xy(e, t, n);
    case 22:
      return wy(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Fy(e, t) {
  return fg(e, t);
}
function l_(e, t, n, r) {
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
  return new l_(e, t, n, r);
}
function th(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function u_(e) {
  if (typeof e == 'function') return th(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _d)) return 11;
    if (e === bd) return 14;
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
function Go(e, t, n, r, i, s) {
  var a = 2;
  if (((r = e), typeof e == 'function')) th(e) && (a = 1);
  else if (typeof e == 'string') a = 5;
  else
    e: switch (e) {
      case yi:
        return Wr(n.children, i, s, t);
      case wd:
        (a = 8), (i |= 8);
        break;
      case Nc:
        return (
          (e = Rt(12, n, t, i | 2)), (e.elementType = Nc), (e.lanes = s), e
        );
      case Lc:
        return (e = Rt(13, n, t, i)), (e.elementType = Lc), (e.lanes = s), e;
      case Dc:
        return (e = Rt(19, n, t, i)), (e.elementType = Dc), (e.lanes = s), e;
      case Yv:
        return su(n, i, s, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case qv:
              a = 10;
              break e;
            case Qv:
              a = 9;
              break e;
            case _d:
              a = 11;
              break e;
            case bd:
              a = 14;
              break e;
            case Mn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Rt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Wr(e, t, n, r) {
  return (e = Rt(7, e, r, t)), (e.lanes = n), e;
}
function su(e, t, n, r) {
  return (
    (e = Rt(22, e, r, t)),
    (e.elementType = Yv),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function tc(e, t, n) {
  return (e = Rt(6, e, null, t)), (e.lanes = n), e;
}
function nc(e, t, n) {
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
function c_(e, t, n, r, i) {
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
    (this.eventTimes = Iu(0)),
    (this.expirationTimes = Iu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Iu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function nh(e, t, n, r, i, s, a, o, l) {
  return (
    (e = new c_(e, t, n, o, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Rt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fd(s),
    e
  );
}
function f_(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gi,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function zy(e) {
  if (!e) return pr;
  e = e._reactInternals;
  e: {
    if (ti(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ct(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ct(n)) return Fg(e, n, t);
  }
  return t;
}
function Uy(e, t, n, r, i, s, a, o, l) {
  return (
    (e = nh(n, r, !0, e, i, s, a, o, l)),
    (e.context = zy(null)),
    (n = e.current),
    (r = nt()),
    (i = cr(n)),
    (s = wn(r, i)),
    (s.callback = t ?? null),
    lr(n, s, i),
    (e.current.lanes = i),
    Ba(e, i, r),
    ft(e, r),
    e
  );
}
function au(e, t, n, r) {
  var i = t.current,
    s = nt(),
    a = cr(i);
  return (
    (n = zy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = wn(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = lr(i, t, a)),
    e !== null && (Kt(e, i, a, s), Bo(e, i, a)),
    a
  );
}
function Tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Kp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function rh(e, t) {
  Kp(e, t), (e = e.alternate) && Kp(e, t);
}
function d_() {
  return null;
}
var Vy =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ih(e) {
  this._internalRoot = e;
}
ou.prototype.render = ih.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  au(e, t, null, null);
};
ou.prototype.unmount = ih.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gr(function () {
      au(null, e, null, null);
    }),
      (t[bn] = null);
  }
};
function ou(e) {
  this._internalRoot = e;
}
ou.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++);
    zn.splice(n, 0, e), n === 0 && _g(e);
  }
};
function sh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function lu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Gp() {}
function h_(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var u = Tl(a);
        s.call(u);
      };
    }
    var a = Uy(t, r, e, 0, null, !1, !1, '', Gp);
    return (
      (e._reactRootContainer = a),
      (e[bn] = a.current),
      pa(e.nodeType === 8 ? e.parentNode : e),
      Gr(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == 'function') {
    var o = r;
    r = function () {
      var u = Tl(l);
      o.call(u);
    };
  }
  var l = nh(e, 0, !1, null, null, !1, !1, '', Gp);
  return (
    (e._reactRootContainer = l),
    (e[bn] = l.current),
    pa(e.nodeType === 8 ? e.parentNode : e),
    Gr(function () {
      au(t, l, n, r);
    }),
    l
  );
}
function uu(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == 'function') {
      var o = i;
      i = function () {
        var l = Tl(a);
        o.call(l);
      };
    }
    au(t, a, e, i);
  } else a = h_(n, t, e, i, r);
  return Tl(a);
}
vg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Us(t.pendingLanes);
        n !== 0 &&
          (Sd(t, n | 1), ft(t, Ce()), !(te & 6) && ((ls = Ce() + 500), _r()));
      }
      break;
    case 13:
      Gr(function () {
        var r = kn(e, 1);
        if (r !== null) {
          var i = nt();
          Kt(r, e, 1, i);
        }
      }),
        rh(e, 1);
  }
};
Ed = function (e) {
  if (e.tag === 13) {
    var t = kn(e, 134217728);
    if (t !== null) {
      var n = nt();
      Kt(t, e, 134217728, n);
    }
    rh(e, 134217728);
  }
};
gg = function (e) {
  if (e.tag === 13) {
    var t = cr(e),
      n = kn(e, t);
    if (n !== null) {
      var r = nt();
      Kt(n, e, t, r);
    }
    rh(e, t);
  }
};
yg = function () {
  return oe;
};
wg = function (e, t) {
  var n = oe;
  try {
    return (oe = e), t();
  } finally {
    oe = n;
  }
};
Wc = function (e, t, n) {
  switch (t) {
    case 'input':
      if (($c(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Zl(r);
            if (!i) throw Error(j(90));
            Gv(r), $c(r, i);
          }
        }
      }
      break;
    case 'textarea':
      Jv(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Ni(e, !!n.multiple, t, !1);
  }
};
sg = Jd;
ag = Gr;
var p_ = { usingClientEntryPoint: !1, Events: [qa, ki, Zl, rg, ig, Jd] },
  Rs = {
    findFiberByHostInstance: Tr,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  m_ = {
    bundleType: Rs.bundleType,
    version: Rs.version,
    rendererPackageName: Rs.rendererPackageName,
    rendererConfig: Rs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ug(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rs.findFiberByHostInstance || d_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ko.isDisabled && ko.supportsFiber)
    try {
      (Kl = ko.inject(m_)), (ln = ko);
    } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p_;
bt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sh(t)) throw Error(j(200));
  return f_(e, t, null, n);
};
bt.createRoot = function (e, t) {
  if (!sh(e)) throw Error(j(299));
  var n = !1,
    r = '',
    i = Vy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = nh(e, 1, !1, null, null, n, !1, r, i)),
    (e[bn] = t.current),
    pa(e.nodeType === 8 ? e.parentNode : e),
    new ih(t)
  );
};
bt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(j(188))
      : ((e = Object.keys(e).join(',')), Error(j(268, e)));
  return (e = ug(t)), (e = e === null ? null : e.stateNode), e;
};
bt.flushSync = function (e) {
  return Gr(e);
};
bt.hydrate = function (e, t, n) {
  if (!lu(t)) throw Error(j(200));
  return uu(null, e, t, !0, n);
};
bt.hydrateRoot = function (e, t, n) {
  if (!sh(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = '',
    a = Vy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Uy(t, null, e, 1, n ?? null, i, !1, s, a)),
    (e[bn] = t.current),
    pa(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ou(t);
};
bt.render = function (e, t, n) {
  if (!lu(t)) throw Error(j(200));
  return uu(null, e, t, !1, n);
};
bt.unmountComponentAtNode = function (e) {
  if (!lu(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (Gr(function () {
        uu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[bn] = null);
        });
      }),
      !0)
    : !1;
};
bt.unstable_batchedUpdates = Jd;
bt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!lu(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return uu(e, t, n, !1, r);
};
bt.version = '18.2.0-next-9e3b772b8-20220608';
function Hy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hy);
    } catch (e) {
      console.error(e);
    }
}
Hy(), (Uv.exports = bt);
var v_ = Uv.exports,
  Xp = v_;
(Ac.createRoot = Xp.createRoot), (Ac.hydrateRoot = Xp.hydrateRoot);
/**
 * @remix-run/router v1.0.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Al() {
  return (
    (Al = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Al.apply(this, arguments)
  );
}
var tr;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(tr || (tr = {}));
const Jp = 'popstate';
function g_(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    var s, a;
    let { pathname: o, search: l, hash: u } = r.location;
    return Ef(
      '',
      { pathname: o, search: l, hash: u },
      ((s = i.state) == null ? void 0 : s.usr) || null,
      ((a = i.state) == null ? void 0 : a.key) || 'default'
    );
  }
  function n(r, i) {
    return typeof i == 'string' ? i : Cf(i);
  }
  return w_(t, n, null, e);
}
function y_() {
  return Math.random().toString(36).substr(2, 8);
}
function Zp(e) {
  return { usr: e.state, key: e.key };
}
function Ef(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Al(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? gs(t) : t,
      { state: n, key: (t == null ? void 0 : t.key) || r || y_() }
    )
  );
}
function Cf(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function gs(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function w_(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    a = i.history,
    o = tr.Pop,
    l = null;
  function u() {
    (o = tr.Pop), l && l({ action: o, location: d.location });
  }
  function c(m, y) {
    o = tr.Push;
    let b = Ef(d.location, m, y);
    n == null || n(b, m);
    let P = Zp(b),
      v = d.createHref(b);
    try {
      a.pushState(P, '', v);
    } catch {
      i.location.assign(v);
    }
    s && l && l({ action: o, location: b });
  }
  function f(m, y) {
    o = tr.Replace;
    let b = Ef(d.location, m, y);
    n == null || n(b, m);
    let P = Zp(b),
      v = d.createHref(b);
    a.replaceState(P, '', v), s && l && l({ action: o, location: b });
  }
  let d = {
    get action() {
      return o;
    },
    get location() {
      return e(i, a);
    },
    listen(m) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(Jp, u),
        (l = m),
        () => {
          i.removeEventListener(Jp, u), (l = null);
        }
      );
    },
    createHref(m) {
      return t(i, m);
    },
    push: c,
    replace: f,
    go(m) {
      return a.go(m);
    },
  };
  return d;
}
var em;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(em || (em = {}));
function __(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? gs(t) : t,
    i = Wy(r.pathname || '/', n);
  if (i == null) return null;
  let s = By(e);
  b_(s);
  let a = null;
  for (let o = 0; a == null && o < s.length; ++o) a = T_(s[o], i);
  return a;
}
function By(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ''),
    e.forEach((i, s) => {
      let a = {
        relativePath: i.path || '',
        caseSensitive: i.caseSensitive === !0,
        childrenIndex: s,
        route: i,
      };
      a.relativePath.startsWith('/') &&
        (Xe(
          a.relativePath.startsWith(r),
          'Absolute route path "' +
            a.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            'must start with the combined path of all its parent routes.'
        ),
        (a.relativePath = a.relativePath.slice(r.length)));
      let o = dr([r, a.relativePath]),
        l = n.concat(a);
      i.children &&
        i.children.length > 0 &&
        (Xe(
          i.index !== !0,
          'Index routes must not have child routes. Please remove ' +
            ('all child routes from route path "' + o + '".')
        ),
        By(i.children, t, l, o)),
        !(i.path == null && !i.index) &&
          t.push({ path: o, score: O_(o, i.index), routesMeta: l });
    }),
    t
  );
}
function b_(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : j_(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const k_ = /^:\w+$/,
  x_ = 3,
  S_ = 2,
  E_ = 1,
  C_ = 10,
  P_ = -2,
  tm = (e) => e === '*';
function O_(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(tm) && (r += P_),
    t && (r += S_),
    n
      .filter((i) => !tm(i))
      .reduce((i, s) => i + (k_.test(s) ? x_ : s === '' ? E_ : C_), r)
  );
}
function j_(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function T_(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    s = [];
  for (let a = 0; a < n.length; ++a) {
    let o = n[a],
      l = a === n.length - 1,
      u = i === '/' ? t : t.slice(i.length) || '/',
      c = ah(
        { path: o.relativePath, caseSensitive: o.caseSensitive, end: l },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = o.route;
    s.push({
      params: r,
      pathname: dr([i, c.pathname]),
      pathnameBase: D_(dr([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== '/' && (i = dr([i, c.pathnameBase]));
  }
  return s;
}
function ah(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = A_(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    a = s.replace(/(.)\/+$/, '$1'),
    o = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      if (c === '*') {
        let d = o[f] || '';
        a = s.slice(0, s.length - d.length).replace(/(.)\/+$/, '$1');
      }
      return (u[c] = R_(o[f] || '', c)), u;
    }, {}),
    pathname: s,
    pathnameBase: a,
    pattern: e,
  };
}
function A_(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    qy(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/:(\w+)/g, (a, o) => (r.push(o), '([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : (i += n ? '\\/*$' : '(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  );
}
function R_(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      qy(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').')
      ),
      e
    );
  }
}
function Wy(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Xe(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function qy(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function N_(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? gs(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : L_(n, t)) : t,
    search: I_(r),
    hash: M_(i),
  };
}
function L_(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Qy(e, t, n, r) {
  r === void 0 && (r = !1);
  let i = typeof e == 'string' ? gs(e) : Al({}, e),
    s = e === '' || i.pathname === '',
    a = s ? '/' : i.pathname,
    o;
  if (r || a == null) o = n;
  else {
    let f = t.length - 1;
    if (a.startsWith('..')) {
      let d = a.split('/');
      for (; d[0] === '..'; ) d.shift(), (f -= 1);
      i.pathname = d.join('/');
    }
    o = f >= 0 ? t[f] : '/';
  }
  let l = N_(i, o),
    u = a && a !== '/' && a.endsWith('/'),
    c = (s || a === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l;
}
const dr = (e) => e.join('/').replace(/\/\/+/g, '/'),
  D_ = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  I_ = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  M_ = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class $_ {
  constructor(t, n, r) {
    (this.status = t), (this.statusText = n || ''), (this.data = r);
  }
}
function F_(e) {
  return e instanceof $_;
}
/**
 * React Router v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pf() {
  return (
    (Pf = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Pf.apply(this, arguments)
  );
}
function z_(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const U_ = typeof Object.is == 'function' ? Object.is : z_,
  { useState: V_, useEffect: H_, useLayoutEffect: B_, useDebugValue: W_ } = Tc;
function q_(e, t, n) {
  const r = t(),
    [{ inst: i }, s] = V_({ inst: { value: r, getSnapshot: t } });
  return (
    B_(() => {
      (i.value = r), (i.getSnapshot = t), rc(i) && s({ inst: i });
    }, [e, r, t]),
    H_(
      () => (
        rc(i) && s({ inst: i }),
        e(() => {
          rc(i) && s({ inst: i });
        })
      ),
      [e]
    ),
    W_(r),
    r
  );
}
function rc(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !U_(n, r);
  } catch {
    return !0;
  }
}
function Q_(e, t, n) {
  return t();
}
const Y_ =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  K_ = !Y_,
  G_ = K_ ? Q_ : q_;
'useSyncExternalStore' in Tc && ((e) => e.useSyncExternalStore)(Tc);
const X_ = C.createContext(null),
  J_ = C.createContext(null),
  cu = C.createContext(null),
  oh = C.createContext(null),
  fu = C.createContext(null),
  ni = C.createContext({ outlet: null, matches: [] }),
  Yy = C.createContext(null);
function Z_(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  ri() || Xe(!1);
  let { basename: r, navigator: i } = C.useContext(oh),
    { hash: s, pathname: a, search: o } = Rl(e, { relative: n }),
    l = a;
  return (
    r !== '/' && (l = a === '/' ? r : dr([r, a])),
    i.createHref({ pathname: l, search: o, hash: s })
  );
}
function ri() {
  return C.useContext(fu) != null;
}
function ys() {
  return ri() || Xe(!1), C.useContext(fu).location;
}
function eb(e) {
  ri() || Xe(!1);
  let { pathname: t } = ys();
  return C.useMemo(() => ah(e, t), [t, e]);
}
function Ky(e) {
  return e.filter(
    (t, n) =>
      n === 0 || (!t.route.index && t.pathnameBase !== e[n - 1].pathnameBase)
  );
}
function Ya() {
  ri() || Xe(!1);
  let { basename: e, navigator: t } = C.useContext(oh),
    { matches: n } = C.useContext(ni),
    { pathname: r } = ys(),
    i = JSON.stringify(Ky(n).map((o) => o.pathnameBase)),
    s = C.useRef(!1);
  return (
    C.useEffect(() => {
      s.current = !0;
    }),
    C.useCallback(
      function (o, l) {
        if ((l === void 0 && (l = {}), !s.current)) return;
        if (typeof o == 'number') {
          t.go(o);
          return;
        }
        let u = Qy(o, JSON.parse(i), r, l.relative === 'path');
        e !== '/' &&
          (u.pathname = u.pathname === '/' ? e : dr([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state, l);
      },
      [e, t, i, r]
    )
  );
}
const tb = C.createContext(null);
function nb(e) {
  let t = C.useContext(ni).outlet;
  return t && C.createElement(tb.Provider, { value: e }, t);
}
function Gy() {
  let { matches: e } = C.useContext(ni),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Rl(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = C.useContext(ni),
    { pathname: i } = ys(),
    s = JSON.stringify(Ky(r).map((a) => a.pathnameBase));
  return C.useMemo(() => Qy(e, JSON.parse(s), i, n === 'path'), [e, s, i, n]);
}
function rb(e, t) {
  ri() || Xe(!1);
  let n = C.useContext(cu),
    { matches: r } = C.useContext(ni),
    i = r[r.length - 1],
    s = i ? i.params : {};
  i && i.pathname;
  let a = i ? i.pathnameBase : '/';
  i && i.route;
  let o = ys(),
    l;
  if (t) {
    var u;
    let y = typeof t == 'string' ? gs(t) : t;
    a === '/' || ((u = y.pathname) != null && u.startsWith(a)) || Xe(!1),
      (l = y);
  } else l = o;
  let c = l.pathname || '/',
    f = a === '/' ? c : c.slice(a.length) || '/',
    d = __(e, { pathname: f }),
    m = ob(
      d &&
        d.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, s, y.params),
            pathname: dr([a, y.pathname]),
            pathnameBase: y.pathnameBase === '/' ? a : dr([a, y.pathnameBase]),
          })
        ),
      r,
      n || void 0
    );
  return t
    ? C.createElement(
        fu.Provider,
        {
          value: {
            location: Pf(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              l
            ),
            navigationType: tr.Pop,
          },
        },
        m
      )
    : m;
}
function ib() {
  let e = ub(),
    t = F_(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    i = { padding: '0.5rem', backgroundColor: r },
    s = { padding: '2px 4px', backgroundColor: r };
  return C.createElement(
    C.Fragment,
    null,
    C.createElement('h2', null, 'Unhandled Thrown Error!'),
    C.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? C.createElement('pre', { style: i }, n) : null,
    C.createElement('p', null, '💿 Hey developer 👋'),
    C.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own ',
      C.createElement('code', { style: s }, 'errorElement'),
      ' props on ',
      C.createElement('code', { style: s }, '<Route>')
    )
  );
}
class sb extends C.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? C.createElement(Yy.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function ab(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = C.useContext(X_);
  return (
    i && n.route.errorElement && (i._deepestRenderedBoundaryId = n.route.id),
    C.createElement(ni.Provider, { value: t }, r)
  );
}
function ob(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    i = n == null ? void 0 : n.errors;
  if (i != null) {
    let s = r.findIndex(
      (a) => a.route.id && (i == null ? void 0 : i[a.route.id])
    );
    s >= 0 || Xe(!1), (r = r.slice(0, Math.min(r.length, s + 1)));
  }
  return r.reduceRight((s, a, o) => {
    let l = a.route.id ? (i == null ? void 0 : i[a.route.id]) : null,
      u = n ? a.route.errorElement || C.createElement(ib, null) : null,
      c = () =>
        C.createElement(
          ab,
          {
            match: a,
            routeContext: { outlet: s, matches: t.concat(r.slice(0, o + 1)) },
          },
          l ? u : a.route.element !== void 0 ? a.route.element : s
        );
    return n && (a.route.errorElement || o === 0)
      ? C.createElement(sb, {
          location: n.location,
          component: u,
          error: l,
          children: c(),
        })
      : c();
  }, null);
}
var Of;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(Of || (Of = {}));
function lb(e) {
  let t = C.useContext(cu);
  return t || Xe(!1), t;
}
function ub() {
  var e;
  let t = C.useContext(Yy),
    n = lb(Of.UseRouteError),
    r = C.useContext(ni),
    i = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || Xe(!1),
    i.route.id || Xe(!1),
    (e = n.errors) == null ? void 0 : e[i.route.id])
  );
}
function cb(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  ri() || Xe(!1);
  let s = C.useContext(cu),
    a = Ya();
  return (
    C.useEffect(() => {
      (s && s.navigation.state !== 'idle') ||
        a(t, { replace: n, state: r, relative: i });
    }),
    null
  );
}
function du(e) {
  return nb(e.context);
}
function je(e) {
  Xe(!1);
}
function fb(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = tr.Pop,
    navigator: s,
    static: a = !1,
  } = e;
  ri() && Xe(!1);
  let o = t.replace(/^\/*/, '/'),
    l = C.useMemo(() => ({ basename: o, navigator: s, static: a }), [o, s, a]);
  typeof r == 'string' && (r = gs(r));
  let {
      pathname: u = '/',
      search: c = '',
      hash: f = '',
      state: d = null,
      key: m = 'default',
    } = r,
    y = C.useMemo(() => {
      let b = Wy(u, o);
      return b == null
        ? null
        : { pathname: b, search: c, hash: f, state: d, key: m };
    }, [o, u, c, f, d, m]);
  return y == null
    ? null
    : C.createElement(
        oh.Provider,
        { value: l },
        C.createElement(fu.Provider, {
          children: n,
          value: { location: y, navigationType: i },
        })
      );
}
function db(e) {
  let { children: t, location: n } = e,
    r = C.useContext(J_),
    i = r && !t ? r.router.routes : jf(t);
  return rb(i, n);
}
var nm;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(nm || (nm = {}));
new Promise(() => {});
function jf(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    C.Children.forEach(e, (r, i) => {
      if (!C.isValidElement(r)) return;
      if (r.type === C.Fragment) {
        n.push.apply(n, jf(r.props.children, t));
        return;
      }
      r.type !== je && Xe(!1);
      let s = [...t, i],
        a = {
          id: r.props.id || s.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (a.children = jf(r.props.children, s)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nl() {
  return (
    (Nl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nl.apply(this, arguments)
  );
}
function Xy(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function hb(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function pb(e, t) {
  return e.button === 0 && (!t || t === '_self') && !hb(e);
}
function Tf(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]);
          }, [])
    )
  );
}
function mb(e, t) {
  let n = Tf(e);
  for (let r of t.keys())
    n.has(r) ||
      t.getAll(r).forEach((i) => {
        n.append(r, i);
      });
  return n;
}
const vb = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  gb = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ];
function yb(e) {
  let { basename: t, children: n, window: r } = e,
    i = C.useRef();
  i.current == null && (i.current = g_({ window: r, v5Compat: !0 }));
  let s = i.current,
    [a, o] = C.useState({ action: s.action, location: s.location });
  return (
    C.useLayoutEffect(() => s.listen(o), [s]),
    C.createElement(fb, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
    })
  );
}
const Ka = C.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: a,
        state: o,
        target: l,
        to: u,
        preventScrollReset: c,
      } = t,
      f = Xy(t, vb),
      d = Z_(u, { relative: i }),
      m = wb(u, {
        replace: a,
        state: o,
        target: l,
        preventScrollReset: c,
        relative: i,
      });
    function y(b) {
      r && r(b), b.defaultPrevented || m(b);
    }
    return C.createElement(
      'a',
      Nl({}, f, { href: d, onClick: s ? r : y, ref: n, target: l })
    );
  }),
  ci = C.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: i = !1,
        className: s = '',
        end: a = !1,
        style: o,
        to: l,
        children: u,
      } = t,
      c = Xy(t, gb),
      f = Rl(l),
      d = eb({ path: f.pathname, end: a, caseSensitive: i }),
      m = C.useContext(cu),
      y = m == null ? void 0 : m.navigation.location,
      b = Rl(y || ''),
      v =
        C.useMemo(
          () =>
            y
              ? ah({ path: f.pathname, end: a, caseSensitive: i }, b.pathname)
              : null,
          [y, f.pathname, i, a, b.pathname]
        ) != null,
      p = d != null,
      g = p ? r : void 0,
      k;
    typeof s == 'function'
      ? (k = s({ isActive: p, isPending: v }))
      : (k = [s, p ? 'active' : null, v ? 'pending' : null]
          .filter(Boolean)
          .join(' '));
    let S = typeof o == 'function' ? o({ isActive: p, isPending: v }) : o;
    return C.createElement(
      Ka,
      Nl({}, c, { 'aria-current': g, className: k, ref: n, style: S, to: l }),
      typeof u == 'function' ? u({ isActive: p, isPending: v }) : u
    );
  });
function wb(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: a,
    } = t === void 0 ? {} : t,
    o = Ya(),
    l = ys(),
    u = Rl(e, { relative: a });
  return C.useCallback(
    (c) => {
      if (pb(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : Cf(l) === Cf(u);
        o(e, { replace: f, state: i, preventScrollReset: s, relative: a });
      }
    },
    [l, o, u, r, i, n, e, s, a]
  );
}
function lh(e) {
  let t = C.useRef(Tf(e)),
    n = ys(),
    r = C.useMemo(() => mb(n.search, t.current), [n.search]),
    i = Ya(),
    s = C.useCallback(
      (a, o) => {
        const l = Tf(typeof a == 'function' ? a(r) : a);
        i('?' + l, o);
      },
      [i, r]
    );
  return [r, s];
}
var ws = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  us = typeof window > 'u' || 'Deno' in globalThis;
function Ot() {}
function _b(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Af(e) {
  return typeof e == 'number' && e >= 0 && e !== 1 / 0;
}
function Jy(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Fi(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Wt(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function rm(e, t) {
  const {
    type: n = 'all',
    exact: r,
    fetchStatus: i,
    predicate: s,
    queryKey: a,
    stale: o,
  } = e;
  if (a) {
    if (r) {
      if (t.queryHash !== uh(a, t.options)) return !1;
    } else if (!xa(t.queryKey, a)) return !1;
  }
  if (n !== 'all') {
    const l = t.isActive();
    if ((n === 'active' && !l) || (n === 'inactive' && l)) return !1;
  }
  return !(
    (typeof o == 'boolean' && t.isStale() !== o) ||
    (i && i !== t.state.fetchStatus) ||
    (s && !s(t))
  );
}
function im(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Xr(t.options.mutationKey) !== Xr(s)) return !1;
    } else if (!xa(t.options.mutationKey, s)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function uh(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Xr)(e);
}
function Xr(e) {
  return JSON.stringify(e, (t, n) =>
    Rf(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function xa(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == 'object' && typeof t == 'object'
        ? !Object.keys(t).some((n) => !xa(e[n], t[n]))
        : !1;
}
function Zy(e, t) {
  if (e === t) return e;
  const n = sm(e) && sm(t);
  if (n || (Rf(e) && Rf(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      s = n ? t : Object.keys(t),
      a = s.length,
      o = n ? [] : {};
    let l = 0;
    for (let u = 0; u < a; u++) {
      const c = n ? u : s[u];
      ((!n && r.includes(c)) || n) && e[c] === void 0 && t[c] === void 0
        ? ((o[c] = void 0), l++)
        : ((o[c] = Zy(e[c], t[c])), o[c] === e[c] && e[c] !== void 0 && l++);
    }
    return i === a && l === i ? e : o;
  }
  return t;
}
function Ll(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function sm(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Rf(e) {
  if (!am(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !am(n) ||
    !n.hasOwnProperty('isPrototypeOf') ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function am(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function bb(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Nf(e, t, n) {
  return typeof n.structuralSharing == 'function'
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
      ? Zy(e, t)
      : t;
}
function kb(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function xb(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var e0 = Symbol(),
  t0 = (e, t) =>
    !e.queryFn && t != null && t.initialPromise
      ? () => t.initialPromise
      : !e.queryFn || e.queryFn === e0
        ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
        : e.queryFn,
  Ir,
  Wn,
  Vi,
  _v,
  Sb =
    ((_v = class extends ws {
      constructor() {
        super();
        U(this, Ir, void 0);
        U(this, Wn, void 0);
        U(this, Vi, void 0);
        I(this, Vi, (t) => {
          if (!us && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener('visibilitychange', n, !1),
              () => {
                window.removeEventListener('visibilitychange', n);
              }
            );
          }
        });
      }
      onSubscribe() {
        w(this, Wn) || this.setEventListener(w(this, Vi));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = w(this, Wn)) == null || t.call(this), I(this, Wn, void 0));
      }
      setEventListener(t) {
        var n;
        I(this, Vi, t),
          (n = w(this, Wn)) == null || n.call(this),
          I(
            this,
            Wn,
            t((r) => {
              typeof r == 'boolean' ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        w(this, Ir) !== t && (I(this, Ir, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof w(this, Ir) == 'boolean'
          ? w(this, Ir)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              'hidden';
      }
    }),
    (Ir = new WeakMap()),
    (Wn = new WeakMap()),
    (Vi = new WeakMap()),
    _v),
  ch = new Sb(),
  Hi,
  qn,
  Bi,
  bv,
  Eb =
    ((bv = class extends ws {
      constructor() {
        super();
        U(this, Hi, !0);
        U(this, qn, void 0);
        U(this, Bi, void 0);
        I(this, Bi, (t) => {
          if (!us && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener('online', n, !1),
              window.addEventListener('offline', r, !1),
              () => {
                window.removeEventListener('online', n),
                  window.removeEventListener('offline', r);
              }
            );
          }
        });
      }
      onSubscribe() {
        w(this, qn) || this.setEventListener(w(this, Bi));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = w(this, qn)) == null || t.call(this), I(this, qn, void 0));
      }
      setEventListener(t) {
        var n;
        I(this, Bi, t),
          (n = w(this, qn)) == null || n.call(this),
          I(this, qn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        w(this, Hi) !== t &&
          (I(this, Hi, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return w(this, Hi);
      }
    }),
    (Hi = new WeakMap()),
    (qn = new WeakMap()),
    (Bi = new WeakMap()),
    bv),
  Dl = new Eb();
function Cb(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function n0(e) {
  return (e ?? 'online') === 'online' ? Dl.isOnline() : !0;
}
var r0 = class {
  constructor(e) {
    (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function ic(e) {
  return e instanceof r0;
}
function i0(e) {
  let t = !1,
    n = 0,
    r = !1,
    i,
    s,
    a;
  const o = new Promise((v, p) => {
      (s = v), (a = p);
    }),
    l = (v) => {
      var p;
      r || (y(new r0(v)), (p = e.abort) == null || p.call(e));
    },
    u = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    f = () =>
      ch.isFocused() &&
      (e.networkMode === 'always' || Dl.isOnline()) &&
      e.canRun(),
    d = () => n0(e.networkMode) && e.canRun(),
    m = (v) => {
      var p;
      r ||
        ((r = !0),
        (p = e.onSuccess) == null || p.call(e, v),
        i == null || i(),
        s(v));
    },
    y = (v) => {
      var p;
      r ||
        ((r = !0),
        (p = e.onError) == null || p.call(e, v),
        i == null || i(),
        a(v));
    },
    b = () =>
      new Promise((v) => {
        var p;
        (i = (g) => {
          (r || f()) && v(g);
        }),
          (p = e.onPause) == null || p.call(e);
      }).then(() => {
        var v;
        (i = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    P = () => {
      if (r) return;
      let v;
      const p = n === 0 ? e.initialPromise : void 0;
      try {
        v = p ?? e.fn();
      } catch (g) {
        v = Promise.reject(g);
      }
      Promise.resolve(v)
        .then(m)
        .catch((g) => {
          var O;
          if (r) return;
          const k = e.retry ?? (us ? 0 : 3),
            S = e.retryDelay ?? Cb,
            T = typeof S == 'function' ? S(n, g) : S,
            R =
              k === !0 ||
              (typeof k == 'number' && n < k) ||
              (typeof k == 'function' && k(n, g));
          if (t || !R) {
            y(g);
            return;
          }
          n++,
            (O = e.onFail) == null || O.call(e, n, g),
            bb(T)
              .then(() => (f() ? void 0 : b()))
              .then(() => {
                t ? y(g) : P();
              });
        });
    };
  return {
    promise: o,
    cancel: l,
    continue: () => (i == null || i(), o),
    cancelRetry: u,
    continueRetry: c,
    canStart: d,
    start: () => (d() ? P() : b().then(P), o),
  };
}
function Pb() {
  let e = [],
    t = 0,
    n = (d) => {
      d();
    },
    r = (d) => {
      d();
    },
    i = (d) => setTimeout(d, 0);
  const s = (d) => {
      i = d;
    },
    a = (d) => {
      let m;
      t++;
      try {
        m = d();
      } finally {
        t--, t || u();
      }
      return m;
    },
    o = (d) => {
      t
        ? e.push(d)
        : i(() => {
            n(d);
          });
    },
    l =
      (d) =>
      (...m) => {
        o(() => {
          d(...m);
        });
      },
    u = () => {
      const d = e;
      (e = []),
        d.length &&
          i(() => {
            r(() => {
              d.forEach((m) => {
                n(m);
              });
            });
          });
    };
  return {
    batch: a,
    batchCalls: l,
    schedule: o,
    setNotifyFunction: (d) => {
      n = d;
    },
    setBatchNotifyFunction: (d) => {
      r = d;
    },
    setScheduler: s,
  };
}
var Le = Pb(),
  Mr,
  kv,
  s0 =
    ((kv = class {
      constructor() {
        U(this, Mr, void 0);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          Af(this.gcTime) &&
            I(
              this,
              Mr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (us ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        w(this, Mr) && (clearTimeout(w(this, Mr)), I(this, Mr, void 0));
      }
    }),
    (Mr = new WeakMap()),
    kv),
  Wi,
  qi,
  Pt,
  qe,
  Aa,
  $r,
  Ut,
  hn,
  xv,
  Ob =
    ((xv = class extends s0 {
      constructor(t) {
        super();
        U(this, Ut);
        U(this, Wi, void 0);
        U(this, qi, void 0);
        U(this, Pt, void 0);
        U(this, qe, void 0);
        U(this, Aa, void 0);
        U(this, $r, void 0);
        I(this, $r, !1),
          I(this, Aa, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          I(this, Pt, t.cache),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          I(this, Wi, t.state || jb(this.options)),
          (this.state = w(this, Wi)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = w(this, qe)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...w(this, Aa), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === 'idle' &&
          w(this, Pt).remove(this);
      }
      setData(t, n) {
        const r = Nf(this.state.data, t, this.options);
        return (
          Y(this, Ut, hn).call(this, {
            data: r,
            type: 'success',
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        Y(this, Ut, hn).call(this, {
          type: 'setState',
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, i;
        const n = (r = w(this, qe)) == null ? void 0 : r.promise;
        return (
          (i = w(this, qe)) == null || i.cancel(t),
          n ? n.then(Ot).catch(Ot) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(w(this, Wi));
      }
      isActive() {
        return this.observers.some((t) => Wt(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0 && !this.isActive();
      }
      isStale() {
        return this.state.isInvalidated
          ? !0
          : this.getObserversCount() > 0
            ? this.observers.some((t) => t.getCurrentResult().isStale)
            : this.state.data === void 0;
      }
      isStaleByTime(t = 0) {
        return (
          this.state.isInvalidated ||
          this.state.data === void 0 ||
          !Jy(this.state.dataUpdatedAt, t)
        );
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = w(this, qe)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = w(this, qe)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          w(this, Pt).notify({
            type: 'observerAdded',
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (w(this, qe) &&
              (w(this, $r)
                ? w(this, qe).cancel({ revert: !0 })
                : w(this, qe).cancelRetry()),
            this.scheduleGc()),
          w(this, Pt).notify({
            type: 'observerRemoved',
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          Y(this, Ut, hn).call(this, { type: 'invalidate' });
      }
      fetch(t, n) {
        var l, u, c;
        if (this.state.fetchStatus !== 'idle') {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (w(this, qe))
            return w(this, qe).continueRetry(), w(this, qe).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((d) => d.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          i = (f) => {
            Object.defineProperty(f, 'signal', {
              enumerable: !0,
              get: () => (I(this, $r, !0), r.signal),
            });
          },
          s = () => {
            const f = t0(this.options, n),
              d = { queryKey: this.queryKey, meta: this.meta };
            return (
              i(d),
              I(this, $r, !1),
              this.options.persister ? this.options.persister(f, d, this) : f(d)
            );
          },
          a = {
            fetchOptions: n,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: s,
          };
        i(a),
          (l = this.options.behavior) == null || l.onFetch(a, this),
          I(this, qi, this.state),
          (this.state.fetchStatus === 'idle' ||
            this.state.fetchMeta !==
              ((u = a.fetchOptions) == null ? void 0 : u.meta)) &&
            Y(this, Ut, hn).call(this, {
              type: 'fetch',
              meta: (c = a.fetchOptions) == null ? void 0 : c.meta,
            });
        const o = (f) => {
          var d, m, y, b;
          (ic(f) && f.silent) ||
            Y(this, Ut, hn).call(this, { type: 'error', error: f }),
            ic(f) ||
              ((m = (d = w(this, Pt).config).onError) == null ||
                m.call(d, f, this),
              (b = (y = w(this, Pt).config).onSettled) == null ||
                b.call(y, this.state.data, f, this)),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        };
        return (
          I(
            this,
            qe,
            i0({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var d, m, y, b;
                if (f === void 0) {
                  o(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                this.setData(f),
                  (m = (d = w(this, Pt).config).onSuccess) == null ||
                    m.call(d, f, this),
                  (b = (y = w(this, Pt).config).onSettled) == null ||
                    b.call(y, f, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: o,
              onFail: (f, d) => {
                Y(this, Ut, hn).call(this, {
                  type: 'failed',
                  failureCount: f,
                  error: d,
                });
              },
              onPause: () => {
                Y(this, Ut, hn).call(this, { type: 'pause' });
              },
              onContinue: () => {
                Y(this, Ut, hn).call(this, { type: 'continue' });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          w(this, qe).start()
        );
      }
    }),
    (Wi = new WeakMap()),
    (qi = new WeakMap()),
    (Pt = new WeakMap()),
    (qe = new WeakMap()),
    (Aa = new WeakMap()),
    ($r = new WeakMap()),
    (Ut = new WeakSet()),
    (hn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case 'failed':
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case 'pause':
            return { ...r, fetchStatus: 'paused' };
          case 'continue':
            return { ...r, fetchStatus: 'fetching' };
          case 'fetch':
            return {
              ...r,
              ...a0(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case 'success':
            return {
              ...r,
              data: t.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: 'success',
              ...(!t.manual && {
                fetchStatus: 'idle',
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
          case 'error':
            const i = t.error;
            return ic(i) && i.revert && w(this, qi)
              ? { ...w(this, qi), fetchStatus: 'idle' }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: 'idle',
                  status: 'error',
                };
          case 'invalidate':
            return { ...r, isInvalidated: !0 };
          case 'setState':
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            w(this, Pt).notify({ query: this, type: 'updated', action: t });
        });
    }),
    xv);
function a0(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: n0(t.networkMode) ? 'fetching' : 'paused',
    ...(e === void 0 && { error: null, status: 'pending' }),
  };
}
function jb(e) {
  const t =
      typeof e.initialData == 'function' ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == 'function'
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? 'success' : 'pending',
    fetchStatus: 'idle',
  };
}
var en,
  Sv,
  Tb =
    ((Sv = class extends ws {
      constructor(t = {}) {
        super();
        U(this, en, void 0);
        (this.config = t), I(this, en, new Map());
      }
      build(t, n, r) {
        const i = n.queryKey,
          s = n.queryHash ?? uh(i, n);
        let a = this.get(s);
        return (
          a ||
            ((a = new Ob({
              cache: this,
              queryKey: i,
              queryHash: s,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(a)),
          a
        );
      }
      add(t) {
        w(this, en).has(t.queryHash) ||
          (w(this, en).set(t.queryHash, t),
          this.notify({ type: 'added', query: t }));
      }
      remove(t) {
        const n = w(this, en).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && w(this, en).delete(t.queryHash),
          this.notify({ type: 'removed', query: t }));
      }
      clear() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return w(this, en).get(t);
      }
      getAll() {
        return [...w(this, en).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => rm(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => rm(t, r)) : n;
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (en = new WeakMap()),
    Sv),
  tn,
  Je,
  Fr,
  nn,
  Dn,
  Ev,
  Ab =
    ((Ev = class extends s0 {
      constructor(t) {
        super();
        U(this, nn);
        U(this, tn, void 0);
        U(this, Je, void 0);
        U(this, Fr, void 0);
        (this.mutationId = t.mutationId),
          I(this, Je, t.mutationCache),
          I(this, tn, []),
          (this.state = t.state || o0()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        w(this, tn).includes(t) ||
          (w(this, tn).push(t),
          this.clearGcTimeout(),
          w(this, Je).notify({
            type: 'observerAdded',
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        I(
          this,
          tn,
          w(this, tn).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          w(this, Je).notify({
            type: 'observerRemoved',
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        w(this, tn).length ||
          (this.state.status === 'pending'
            ? this.scheduleGc()
            : w(this, Je).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = w(this, Fr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, a, o, l, u, c, f, d, m, y, b, P, v, p, g, k, S, T, R;
        I(
          this,
          Fr,
          i0({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error('No mutationFn found')),
            onFail: (O, B) => {
              Y(this, nn, Dn).call(this, {
                type: 'failed',
                failureCount: O,
                error: B,
              });
            },
            onPause: () => {
              Y(this, nn, Dn).call(this, { type: 'pause' });
            },
            onContinue: () => {
              Y(this, nn, Dn).call(this, { type: 'continue' });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => w(this, Je).canRun(this),
          })
        );
        const n = this.state.status === 'pending',
          r = !w(this, Fr).canStart();
        try {
          if (!n) {
            Y(this, nn, Dn).call(this, {
              type: 'pending',
              variables: t,
              isPaused: r,
            }),
              await ((s = (i = w(this, Je).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const B = await ((o = (a = this.options).onMutate) == null
              ? void 0
              : o.call(a, t));
            B !== this.state.context &&
              Y(this, nn, Dn).call(this, {
                type: 'pending',
                context: B,
                variables: t,
                isPaused: r,
              });
          }
          const O = await w(this, Fr).start();
          return (
            await ((u = (l = w(this, Je).config).onSuccess) == null
              ? void 0
              : u.call(l, O, t, this.state.context, this)),
            await ((f = (c = this.options).onSuccess) == null
              ? void 0
              : f.call(c, O, t, this.state.context)),
            await ((m = (d = w(this, Je).config).onSettled) == null
              ? void 0
              : m.call(
                  d,
                  O,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((b = (y = this.options).onSettled) == null
              ? void 0
              : b.call(y, O, null, t, this.state.context)),
            Y(this, nn, Dn).call(this, { type: 'success', data: O }),
            O
          );
        } catch (O) {
          try {
            throw (
              (await ((v = (P = w(this, Je).config).onError) == null
                ? void 0
                : v.call(P, O, t, this.state.context, this)),
              await ((g = (p = this.options).onError) == null
                ? void 0
                : g.call(p, O, t, this.state.context)),
              await ((S = (k = w(this, Je).config).onSettled) == null
                ? void 0
                : S.call(
                    k,
                    void 0,
                    O,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((R = (T = this.options).onSettled) == null
                ? void 0
                : R.call(T, void 0, O, t, this.state.context)),
              O)
            );
          } finally {
            Y(this, nn, Dn).call(this, { type: 'error', error: O });
          }
        } finally {
          w(this, Je).runNext(this);
        }
      }
    }),
    (tn = new WeakMap()),
    (Je = new WeakMap()),
    (Fr = new WeakMap()),
    (nn = new WeakSet()),
    (Dn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case 'failed':
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case 'pause':
            return { ...r, isPaused: !0 };
          case 'continue':
            return { ...r, isPaused: !1 };
          case 'pending':
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: 'pending',
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case 'success':
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: 'success',
              isPaused: !1,
            };
          case 'error':
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: 'error',
            };
        }
      };
      (this.state = n(this.state)),
        Le.batch(() => {
          w(this, tn).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            w(this, Je).notify({ mutation: this, type: 'updated', action: t });
        });
    }),
    Ev);
function o0() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: 'idle',
    variables: void 0,
    submittedAt: 0,
  };
}
var pt,
  Ra,
  Cv,
  Rb =
    ((Cv = class extends ws {
      constructor(t = {}) {
        super();
        U(this, pt, void 0);
        U(this, Ra, void 0);
        (this.config = t), I(this, pt, new Map()), I(this, Ra, Date.now());
      }
      build(t, n, r) {
        const i = new Ab({
          mutationCache: this,
          mutationId: ++io(this, Ra)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(i), i;
      }
      add(t) {
        const n = xo(t),
          r = w(this, pt).get(n) ?? [];
        r.push(t),
          w(this, pt).set(n, r),
          this.notify({ type: 'added', mutation: t });
      }
      remove(t) {
        var r;
        const n = xo(t);
        if (w(this, pt).has(n)) {
          const i =
            (r = w(this, pt).get(n)) == null
              ? void 0
              : r.filter((s) => s !== t);
          i && (i.length === 0 ? w(this, pt).delete(n) : w(this, pt).set(n, i));
        }
        this.notify({ type: 'removed', mutation: t });
      }
      canRun(t) {
        var r;
        const n =
          (r = w(this, pt).get(xo(t))) == null
            ? void 0
            : r.find((i) => i.state.status === 'pending');
        return !n || n === t;
      }
      runNext(t) {
        var r;
        const n =
          (r = w(this, pt).get(xo(t))) == null
            ? void 0
            : r.find((i) => i !== t && i.state.isPaused);
        return (n == null ? void 0 : n.continue()) ?? Promise.resolve();
      }
      clear() {
        Le.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      getAll() {
        return [...w(this, pt).values()].flat();
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => im(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => im(t, n));
      }
      notify(t) {
        Le.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Le.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Ot)))
        );
      }
    }),
    (pt = new WeakMap()),
    (Ra = new WeakMap()),
    Cv);
function xo(e) {
  var t;
  return (
    ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId)
  );
}
function Nb(e) {
  return {
    onFetch: (t, n) => {
      const r = async () => {
        var y, b, P, v, p;
        const i = t.options,
          s =
            (P =
              (b = (y = t.fetchOptions) == null ? void 0 : y.meta) == null
                ? void 0
                : b.fetchMore) == null
              ? void 0
              : P.direction,
          a = ((v = t.state.data) == null ? void 0 : v.pages) || [],
          o = ((p = t.state.data) == null ? void 0 : p.pageParams) || [],
          l = { pages: [], pageParams: [] };
        let u = !1;
        const c = (g) => {
            Object.defineProperty(g, 'signal', {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (u = !0)
                  : t.signal.addEventListener('abort', () => {
                      u = !0;
                    }),
                t.signal
              ),
            });
          },
          f = t0(t.options, t.fetchOptions),
          d = async (g, k, S) => {
            if (u) return Promise.reject();
            if (k == null && g.pages.length) return Promise.resolve(g);
            const T = {
              queryKey: t.queryKey,
              pageParam: k,
              direction: S ? 'backward' : 'forward',
              meta: t.options.meta,
            };
            c(T);
            const R = await f(T),
              { maxPages: O } = t.options,
              B = S ? xb : kb;
            return {
              pages: B(g.pages, R, O),
              pageParams: B(g.pageParams, k, O),
            };
          };
        let m;
        if (s && a.length) {
          const g = s === 'backward',
            k = g ? Lb : om,
            S = { pages: a, pageParams: o },
            T = k(i, S);
          m = await d(S, T, g);
        } else {
          m = await d(l, o[0] ?? i.initialPageParam);
          const g = e ?? a.length;
          for (let k = 1; k < g; k++) {
            const S = om(i, m);
            m = await d(m, S);
          }
        }
        return m;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var i, s;
            return (s = (i = t.options).persister) == null
              ? void 0
              : s.call(
                  i,
                  r,
                  {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = r);
    },
  };
}
function om(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return e.getNextPageParam(t[r], t, n[r], n);
}
function Lb(e, { pages: t, pageParams: n }) {
  var r;
  return (r = e.getPreviousPageParam) == null
    ? void 0
    : r.call(e, t[0], t, n[0], n);
}
var _e,
  Qn,
  Yn,
  Qi,
  Yi,
  Kn,
  Ki,
  Gi,
  Pv,
  Db =
    ((Pv = class {
      constructor(e = {}) {
        U(this, _e, void 0);
        U(this, Qn, void 0);
        U(this, Yn, void 0);
        U(this, Qi, void 0);
        U(this, Yi, void 0);
        U(this, Kn, void 0);
        U(this, Ki, void 0);
        U(this, Gi, void 0);
        I(this, _e, e.queryCache || new Tb()),
          I(this, Qn, e.mutationCache || new Rb()),
          I(this, Yn, e.defaultOptions || {}),
          I(this, Qi, new Map()),
          I(this, Yi, new Map()),
          I(this, Kn, 0);
      }
      mount() {
        io(this, Kn)._++,
          w(this, Kn) === 1 &&
            (I(
              this,
              Ki,
              ch.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), w(this, _e).onFocus());
              })
            ),
            I(
              this,
              Gi,
              Dl.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), w(this, _e).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        io(this, Kn)._--,
          w(this, Kn) === 0 &&
            ((e = w(this, Ki)) == null || e.call(this),
            I(this, Ki, void 0),
            (t = w(this, Gi)) == null || t.call(this),
            I(this, Gi, void 0));
      }
      isFetching(e) {
        return w(this, _e).findAll({ ...e, fetchStatus: 'fetching' }).length;
      }
      isMutating(e) {
        return w(this, Qn).findAll({ ...e, status: 'pending' }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = w(this, _e).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.getQueryData(e.queryKey);
        if (t === void 0) return this.fetchQuery(e);
        {
          const n = this.defaultQueryOptions(e),
            r = w(this, _e).build(this, n);
          return (
            e.revalidateIfStale &&
              r.isStaleByTime(Fi(n.staleTime, r)) &&
              this.prefetchQuery(n),
            Promise.resolve(t)
          );
        }
      }
      getQueriesData(e) {
        return w(this, _e)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = w(this, _e).get(r.queryHash),
          s = i == null ? void 0 : i.state.data,
          a = _b(t, s);
        if (a !== void 0)
          return w(this, _e)
            .build(this, r)
            .setData(a, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Le.batch(() =>
          w(this, _e)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = w(this, _e).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = w(this, _e);
        Le.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = w(this, _e),
          r = { type: 'active', ...e };
        return Le.batch(
          () => (
            n.findAll(e).forEach((i) => {
              i.reset();
            }),
            this.refetchQueries(r, t)
          )
        );
      }
      cancelQueries(e = {}, t = {}) {
        const n = { revert: !0, ...t },
          r = Le.batch(() =>
            w(this, _e)
              .findAll(e)
              .map((i) => i.cancel(n))
          );
        return Promise.all(r).then(Ot).catch(Ot);
      }
      invalidateQueries(e = {}, t = {}) {
        return Le.batch(() => {
          if (
            (w(this, _e)
              .findAll(e)
              .forEach((r) => {
                r.invalidate();
              }),
            e.refetchType === 'none')
          )
            return Promise.resolve();
          const n = { ...e, type: e.refetchType ?? e.type ?? 'active' };
          return this.refetchQueries(n, t);
        });
      }
      refetchQueries(e = {}, t) {
        const n = {
            ...t,
            cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0,
          },
          r = Le.batch(() =>
            w(this, _e)
              .findAll(e)
              .filter((i) => !i.isDisabled())
              .map((i) => {
                let s = i.fetch(void 0, n);
                return (
                  n.throwOnError || (s = s.catch(Ot)),
                  i.state.fetchStatus === 'paused' ? Promise.resolve() : s
                );
              })
          );
        return Promise.all(r).then(Ot);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = w(this, _e).build(this, t);
        return n.isStaleByTime(Fi(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Ot).catch(Ot);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = Nb(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ot).catch(Ot);
      }
      resumePausedMutations() {
        return Dl.isOnline()
          ? w(this, Qn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return w(this, _e);
      }
      getMutationCache() {
        return w(this, Qn);
      }
      getDefaultOptions() {
        return w(this, Yn);
      }
      setDefaultOptions(e) {
        I(this, Yn, e);
      }
      setQueryDefaults(e, t) {
        w(this, Qi).set(Xr(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...w(this, Qi).values()];
        let n = {};
        return (
          t.forEach((r) => {
            xa(e, r.queryKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        w(this, Yi).set(Xr(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...w(this, Yi).values()];
        let n = {};
        return (
          t.forEach((r) => {
            xa(e, r.mutationKey) && (n = { ...n, ...r.defaultOptions });
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...w(this, Yn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = uh(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== 'always'),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
          t.enabled !== !0 && t.queryFn === e0 && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...w(this, Yn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        w(this, _e).clear(), w(this, Qn).clear();
      }
    }),
    (_e = new WeakMap()),
    (Qn = new WeakMap()),
    (Yn = new WeakMap()),
    (Qi = new WeakMap()),
    (Yi = new WeakMap()),
    (Kn = new WeakMap()),
    (Ki = new WeakMap()),
    (Gi = new WeakMap()),
    Pv),
  st,
  Z,
  Na,
  Ze,
  zr,
  Xi,
  rn,
  La,
  Ji,
  Zi,
  Ur,
  Vr,
  Gn,
  es,
  Hr,
  Hs,
  Da,
  Lf,
  Ia,
  Df,
  Ma,
  If,
  $a,
  Mf,
  Fa,
  $f,
  za,
  Ff,
  Ua,
  zf,
  Ql,
  l0,
  Ov,
  Ib =
    ((Ov = class extends ws {
      constructor(t, n) {
        super();
        U(this, Hr);
        U(this, Da);
        U(this, Ia);
        U(this, Ma);
        U(this, $a);
        U(this, Fa);
        U(this, za);
        U(this, Ua);
        U(this, Ql);
        U(this, st, void 0);
        U(this, Z, void 0);
        U(this, Na, void 0);
        U(this, Ze, void 0);
        U(this, zr, void 0);
        U(this, Xi, void 0);
        U(this, rn, void 0);
        U(this, La, void 0);
        U(this, Ji, void 0);
        U(this, Zi, void 0);
        U(this, Ur, void 0);
        U(this, Vr, void 0);
        U(this, Gn, void 0);
        U(this, es, new Set());
        (this.options = n),
          I(this, st, t),
          I(this, rn, null),
          this.bindMethods(),
          this.setOptions(n);
      }
      bindMethods() {
        this.refetch = this.refetch.bind(this);
      }
      onSubscribe() {
        this.listeners.size === 1 &&
          (w(this, Z).addObserver(this),
          lm(w(this, Z), this.options)
            ? Y(this, Hr, Hs).call(this)
            : this.updateResult(),
          Y(this, $a, Mf).call(this));
      }
      onUnsubscribe() {
        this.hasListeners() || this.destroy();
      }
      shouldFetchOnReconnect() {
        return Uf(w(this, Z), this.options, this.options.refetchOnReconnect);
      }
      shouldFetchOnWindowFocus() {
        return Uf(w(this, Z), this.options, this.options.refetchOnWindowFocus);
      }
      destroy() {
        (this.listeners = new Set()),
          Y(this, Fa, $f).call(this),
          Y(this, za, Ff).call(this),
          w(this, Z).removeObserver(this);
      }
      setOptions(t, n) {
        const r = this.options,
          i = w(this, Z);
        if (
          ((this.options = w(this, st).defaultQueryOptions(t)),
          this.options.enabled !== void 0 &&
            typeof this.options.enabled != 'boolean' &&
            typeof this.options.enabled != 'function' &&
            typeof Wt(this.options.enabled, w(this, Z)) != 'boolean')
        )
          throw new Error(
            'Expected enabled to be a boolean or a callback that returns a boolean'
          );
        Y(this, Ua, zf).call(this),
          w(this, Z).setOptions(this.options),
          r._defaulted &&
            !Ll(this.options, r) &&
            w(this, st)
              .getQueryCache()
              .notify({
                type: 'observerOptionsUpdated',
                query: w(this, Z),
                observer: this,
              });
        const s = this.hasListeners();
        s && um(w(this, Z), i, this.options, r) && Y(this, Hr, Hs).call(this),
          this.updateResult(n),
          s &&
            (w(this, Z) !== i ||
              Wt(this.options.enabled, w(this, Z)) !==
                Wt(r.enabled, w(this, Z)) ||
              Fi(this.options.staleTime, w(this, Z)) !==
                Fi(r.staleTime, w(this, Z))) &&
            Y(this, Da, Lf).call(this);
        const a = Y(this, Ia, Df).call(this);
        s &&
          (w(this, Z) !== i ||
            Wt(this.options.enabled, w(this, Z)) !==
              Wt(r.enabled, w(this, Z)) ||
            a !== w(this, Gn)) &&
          Y(this, Ma, If).call(this, a);
      }
      getOptimisticResult(t) {
        const n = w(this, st).getQueryCache().build(w(this, st), t),
          r = this.createResult(n, t);
        return (
          $b(this, r) &&
            (I(this, Ze, r),
            I(this, Xi, this.options),
            I(this, zr, w(this, Z).state)),
          r
        );
      }
      getCurrentResult() {
        return w(this, Ze);
      }
      trackResult(t, n) {
        const r = {};
        return (
          Object.keys(t).forEach((i) => {
            Object.defineProperty(r, i, {
              configurable: !1,
              enumerable: !0,
              get: () => (this.trackProp(i), n == null || n(i), t[i]),
            });
          }),
          r
        );
      }
      trackProp(t) {
        w(this, es).add(t);
      }
      getCurrentQuery() {
        return w(this, Z);
      }
      refetch({ ...t } = {}) {
        return this.fetch({ ...t });
      }
      fetchOptimistic(t) {
        const n = w(this, st).defaultQueryOptions(t),
          r = w(this, st).getQueryCache().build(w(this, st), n);
        return (
          (r.isFetchingOptimistic = !0),
          r.fetch().then(() => this.createResult(r, n))
        );
      }
      fetch(t) {
        return Y(this, Hr, Hs)
          .call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
          .then(() => (this.updateResult(), w(this, Ze)));
      }
      createResult(t, n) {
        var R;
        const r = w(this, Z),
          i = this.options,
          s = w(this, Ze),
          a = w(this, zr),
          o = w(this, Xi),
          u = t !== r ? t.state : w(this, Na),
          { state: c } = t;
        let f = { ...c },
          d = !1,
          m;
        if (n._optimisticResults) {
          const O = this.hasListeners(),
            B = !O && lm(t, n),
            V = O && um(t, r, n, i);
          (B || V) && (f = { ...f, ...a0(c.data, t.options) }),
            n._optimisticResults === 'isRestoring' && (f.fetchStatus = 'idle');
        }
        let { error: y, errorUpdatedAt: b, status: P } = f;
        if (n.select && f.data !== void 0)
          if (
            s &&
            f.data === (a == null ? void 0 : a.data) &&
            n.select === w(this, La)
          )
            m = w(this, Ji);
          else
            try {
              I(this, La, n.select),
                (m = n.select(f.data)),
                (m = Nf(s == null ? void 0 : s.data, m, n)),
                I(this, Ji, m),
                I(this, rn, null);
            } catch (O) {
              I(this, rn, O);
            }
        else m = f.data;
        if (n.placeholderData !== void 0 && m === void 0 && P === 'pending') {
          let O;
          if (
            s != null &&
            s.isPlaceholderData &&
            n.placeholderData === (o == null ? void 0 : o.placeholderData)
          )
            O = s.data;
          else if (
            ((O =
              typeof n.placeholderData == 'function'
                ? n.placeholderData(
                    (R = w(this, Zi)) == null ? void 0 : R.state.data,
                    w(this, Zi)
                  )
                : n.placeholderData),
            n.select && O !== void 0)
          )
            try {
              (O = n.select(O)), I(this, rn, null);
            } catch (B) {
              I(this, rn, B);
            }
          O !== void 0 &&
            ((P = 'success'),
            (m = Nf(s == null ? void 0 : s.data, O, n)),
            (d = !0));
        }
        w(this, rn) &&
          ((y = w(this, rn)),
          (m = w(this, Ji)),
          (b = Date.now()),
          (P = 'error'));
        const v = f.fetchStatus === 'fetching',
          p = P === 'pending',
          g = P === 'error',
          k = p && v,
          S = m !== void 0;
        return {
          status: P,
          fetchStatus: f.fetchStatus,
          isPending: p,
          isSuccess: P === 'success',
          isError: g,
          isInitialLoading: k,
          isLoading: k,
          data: m,
          dataUpdatedAt: f.dataUpdatedAt,
          error: y,
          errorUpdatedAt: b,
          failureCount: f.fetchFailureCount,
          failureReason: f.fetchFailureReason,
          errorUpdateCount: f.errorUpdateCount,
          isFetched: f.dataUpdateCount > 0 || f.errorUpdateCount > 0,
          isFetchedAfterMount:
            f.dataUpdateCount > u.dataUpdateCount ||
            f.errorUpdateCount > u.errorUpdateCount,
          isFetching: v,
          isRefetching: v && !p,
          isLoadingError: g && !S,
          isPaused: f.fetchStatus === 'paused',
          isPlaceholderData: d,
          isRefetchError: g && S,
          isStale: fh(t, n),
          refetch: this.refetch,
        };
      }
      updateResult(t) {
        const n = w(this, Ze),
          r = this.createResult(w(this, Z), this.options);
        if (
          (I(this, zr, w(this, Z).state),
          I(this, Xi, this.options),
          w(this, zr).data !== void 0 && I(this, Zi, w(this, Z)),
          Ll(r, n))
        )
          return;
        I(this, Ze, r);
        const i = {},
          s = () => {
            if (!n) return !0;
            const { notifyOnChangeProps: a } = this.options,
              o = typeof a == 'function' ? a() : a;
            if (o === 'all' || (!o && !w(this, es).size)) return !0;
            const l = new Set(o ?? w(this, es));
            return (
              this.options.throwOnError && l.add('error'),
              Object.keys(w(this, Ze)).some((u) => {
                const c = u;
                return w(this, Ze)[c] !== n[c] && l.has(c);
              })
            );
          };
        (t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0),
          Y(this, Ql, l0).call(this, { ...i, ...t });
      }
      onQueryUpdate() {
        this.updateResult(), this.hasListeners() && Y(this, $a, Mf).call(this);
      }
    }),
    (st = new WeakMap()),
    (Z = new WeakMap()),
    (Na = new WeakMap()),
    (Ze = new WeakMap()),
    (zr = new WeakMap()),
    (Xi = new WeakMap()),
    (rn = new WeakMap()),
    (La = new WeakMap()),
    (Ji = new WeakMap()),
    (Zi = new WeakMap()),
    (Ur = new WeakMap()),
    (Vr = new WeakMap()),
    (Gn = new WeakMap()),
    (es = new WeakMap()),
    (Hr = new WeakSet()),
    (Hs = function (t) {
      Y(this, Ua, zf).call(this);
      let n = w(this, Z).fetch(this.options, t);
      return (t != null && t.throwOnError) || (n = n.catch(Ot)), n;
    }),
    (Da = new WeakSet()),
    (Lf = function () {
      Y(this, Fa, $f).call(this);
      const t = Fi(this.options.staleTime, w(this, Z));
      if (us || w(this, Ze).isStale || !Af(t)) return;
      const r = Jy(w(this, Ze).dataUpdatedAt, t) + 1;
      I(
        this,
        Ur,
        setTimeout(() => {
          w(this, Ze).isStale || this.updateResult();
        }, r)
      );
    }),
    (Ia = new WeakSet()),
    (Df = function () {
      return (
        (typeof this.options.refetchInterval == 'function'
          ? this.options.refetchInterval(w(this, Z))
          : this.options.refetchInterval) ?? !1
      );
    }),
    (Ma = new WeakSet()),
    (If = function (t) {
      Y(this, za, Ff).call(this),
        I(this, Gn, t),
        !(
          us ||
          Wt(this.options.enabled, w(this, Z)) === !1 ||
          !Af(w(this, Gn)) ||
          w(this, Gn) === 0
        ) &&
          I(
            this,
            Vr,
            setInterval(
              () => {
                (this.options.refetchIntervalInBackground || ch.isFocused()) &&
                  Y(this, Hr, Hs).call(this);
              },
              w(this, Gn)
            )
          );
    }),
    ($a = new WeakSet()),
    (Mf = function () {
      Y(this, Da, Lf).call(this),
        Y(this, Ma, If).call(this, Y(this, Ia, Df).call(this));
    }),
    (Fa = new WeakSet()),
    ($f = function () {
      w(this, Ur) && (clearTimeout(w(this, Ur)), I(this, Ur, void 0));
    }),
    (za = new WeakSet()),
    (Ff = function () {
      w(this, Vr) && (clearInterval(w(this, Vr)), I(this, Vr, void 0));
    }),
    (Ua = new WeakSet()),
    (zf = function () {
      const t = w(this, st).getQueryCache().build(w(this, st), this.options);
      if (t === w(this, Z)) return;
      const n = w(this, Z);
      I(this, Z, t),
        I(this, Na, t.state),
        this.hasListeners() &&
          (n == null || n.removeObserver(this), t.addObserver(this));
    }),
    (Ql = new WeakSet()),
    (l0 = function (t) {
      Le.batch(() => {
        t.listeners &&
          this.listeners.forEach((n) => {
            n(w(this, Ze));
          }),
          w(this, st)
            .getQueryCache()
            .notify({ query: w(this, Z), type: 'observerResultsUpdated' });
      });
    }),
    Ov);
function Mb(e, t) {
  return (
    Wt(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === 'error' && t.retryOnMount === !1)
  );
}
function lm(e, t) {
  return Mb(e, t) || (e.state.data !== void 0 && Uf(e, t, t.refetchOnMount));
}
function Uf(e, t, n) {
  if (Wt(t.enabled, e) !== !1) {
    const r = typeof n == 'function' ? n(e) : n;
    return r === 'always' || (r !== !1 && fh(e, t));
  }
  return !1;
}
function um(e, t, n, r) {
  return (
    (e !== t || Wt(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== 'error') &&
    fh(e, n)
  );
}
function fh(e, t) {
  return Wt(t.enabled, e) !== !1 && e.isStaleByTime(Fi(t.staleTime, e));
}
function $b(e, t) {
  return !Ll(e.getCurrentResult(), t);
}
var Xn,
  Jn,
  at,
  vn,
  ts,
  Xo,
  Va,
  Vf,
  jv,
  Fb =
    ((jv = class extends ws {
      constructor(n, r) {
        super();
        U(this, ts);
        U(this, Va);
        U(this, Xn, void 0);
        U(this, Jn, void 0);
        U(this, at, void 0);
        U(this, vn, void 0);
        I(this, Xn, n),
          this.setOptions(r),
          this.bindMethods(),
          Y(this, ts, Xo).call(this);
      }
      bindMethods() {
        (this.mutate = this.mutate.bind(this)),
          (this.reset = this.reset.bind(this));
      }
      setOptions(n) {
        var i;
        const r = this.options;
        (this.options = w(this, Xn).defaultMutationOptions(n)),
          Ll(this.options, r) ||
            w(this, Xn)
              .getMutationCache()
              .notify({
                type: 'observerOptionsUpdated',
                mutation: w(this, at),
                observer: this,
              }),
          r != null &&
          r.mutationKey &&
          this.options.mutationKey &&
          Xr(r.mutationKey) !== Xr(this.options.mutationKey)
            ? this.reset()
            : ((i = w(this, at)) == null ? void 0 : i.state.status) ===
                'pending' && w(this, at).setOptions(this.options);
      }
      onUnsubscribe() {
        var n;
        this.hasListeners() ||
          (n = w(this, at)) == null ||
          n.removeObserver(this);
      }
      onMutationUpdate(n) {
        Y(this, ts, Xo).call(this), Y(this, Va, Vf).call(this, n);
      }
      getCurrentResult() {
        return w(this, Jn);
      }
      reset() {
        var n;
        (n = w(this, at)) == null || n.removeObserver(this),
          I(this, at, void 0),
          Y(this, ts, Xo).call(this),
          Y(this, Va, Vf).call(this);
      }
      mutate(n, r) {
        var i;
        return (
          I(this, vn, r),
          (i = w(this, at)) == null || i.removeObserver(this),
          I(
            this,
            at,
            w(this, Xn).getMutationCache().build(w(this, Xn), this.options)
          ),
          w(this, at).addObserver(this),
          w(this, at).execute(n)
        );
      }
    }),
    (Xn = new WeakMap()),
    (Jn = new WeakMap()),
    (at = new WeakMap()),
    (vn = new WeakMap()),
    (ts = new WeakSet()),
    (Xo = function () {
      var r;
      const n = ((r = w(this, at)) == null ? void 0 : r.state) ?? o0();
      I(this, Jn, {
        ...n,
        isPending: n.status === 'pending',
        isSuccess: n.status === 'success',
        isError: n.status === 'error',
        isIdle: n.status === 'idle',
        mutate: this.mutate,
        reset: this.reset,
      });
    }),
    (Va = new WeakSet()),
    (Vf = function (n) {
      Le.batch(() => {
        var r, i, s, a, o, l, u, c;
        if (w(this, vn) && this.hasListeners()) {
          const f = w(this, Jn).variables,
            d = w(this, Jn).context;
          (n == null ? void 0 : n.type) === 'success'
            ? ((i = (r = w(this, vn)).onSuccess) == null ||
                i.call(r, n.data, f, d),
              (a = (s = w(this, vn)).onSettled) == null ||
                a.call(s, n.data, null, f, d))
            : (n == null ? void 0 : n.type) === 'error' &&
              ((l = (o = w(this, vn)).onError) == null ||
                l.call(o, n.error, f, d),
              (c = (u = w(this, vn)).onSettled) == null ||
                c.call(u, void 0, n.error, f, d));
        }
        this.listeners.forEach((f) => {
          f(w(this, Jn));
        });
      });
    }),
    jv),
  u0 = C.createContext(void 0),
  ii = (e) => {
    const t = C.useContext(u0);
    if (e) return e;
    if (!t)
      throw new Error('No QueryClient set, use QueryClientProvider to set one');
    return t;
  },
  zb = ({ client: e, children: t }) => (
    C.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    h.jsx(u0.Provider, { value: e, children: t })
  ),
  c0 = C.createContext(!1),
  Ub = () => C.useContext(c0);
c0.Provider;
function Vb() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var Hb = C.createContext(Vb()),
  Bb = () => C.useContext(Hb);
function f0(e, t) {
  return typeof e == 'function' ? e(...t) : !!e;
}
function Wb() {}
var qb = (e, t) => {
    (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
  },
  Qb = (e) => {
    C.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  Yb = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) =>
    e.isError && !t.isReset() && !e.isFetching && r && f0(n, [e.error, r]),
  Kb = (e) => {
    e.suspense && typeof e.staleTime != 'number' && (e.staleTime = 1e3);
  },
  Gb = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending,
  Xb = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function Jb(e, t, n) {
  var u, c, f, d;
  const r = ii(n),
    i = Ub(),
    s = Bb(),
    a = r.defaultQueryOptions(e);
  (c =
    (u = r.getDefaultOptions().queries) == null
      ? void 0
      : u._experimental_beforeQuery) == null || c.call(u, a),
    (a._optimisticResults = i ? 'isRestoring' : 'optimistic'),
    Kb(a),
    qb(a, s),
    Qb(s);
  const [o] = C.useState(() => new t(r, a)),
    l = o.getOptimisticResult(a);
  if (
    (C.useSyncExternalStore(
      C.useCallback(
        (m) => {
          const y = i ? () => {} : o.subscribe(Le.batchCalls(m));
          return o.updateResult(), y;
        },
        [o, i]
      ),
      () => o.getCurrentResult(),
      () => o.getCurrentResult()
    ),
    C.useEffect(() => {
      o.setOptions(a, { listeners: !1 });
    }, [a, o]),
    Gb(a, l))
  )
    throw Xb(a, o, s);
  if (
    Yb({
      result: l,
      errorResetBoundary: s,
      throwOnError: a.throwOnError,
      query: r.getQueryCache().get(a.queryHash),
    })
  )
    throw l.error;
  return (
    (d =
      (f = r.getDefaultOptions().queries) == null
        ? void 0
        : f._experimental_afterQuery) == null || d.call(f, a, l),
    a.notifyOnChangeProps ? l : o.trackResult(l)
  );
}
function hu(e, t) {
  return Jb(e, Ib, t);
}
function dh(e, t) {
  const n = ii(t),
    [r] = C.useState(() => new Fb(n, e));
  C.useEffect(() => {
    r.setOptions(e);
  }, [r, e]);
  const i = C.useSyncExternalStore(
      C.useCallback((a) => r.subscribe(Le.batchCalls(a)), [r]),
      () => r.getCurrentResult(),
      () => r.getCurrentResult()
    ),
    s = C.useCallback(
      (a, o) => {
        r.mutate(a, o).catch(Wb);
      },
      [r]
    );
  if (i.error && f0(r.options.throwOnError, [i.error])) throw i.error;
  return { ...i, mutate: s, mutateAsync: i.mutate };
}
const Zb = 'modulepreload',
  ek = function (e) {
    return '/' + e;
  },
  cm = {},
  cs = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName('link'),
        a = document.querySelector('meta[property=csp-nonce]'),
        o =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute('nonce'));
      i = Promise.all(
        n.map((l) => {
          if (((l = ek(l)), l in cm)) return;
          cm[l] = !0;
          const u = l.endsWith('.css'),
            c = u ? '[rel="stylesheet"]' : '';
          if (!!r)
            for (let m = s.length - 1; m >= 0; m--) {
              const y = s[m];
              if (y.href === l && (!u || y.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const d = document.createElement('link');
          if (
            ((d.rel = u ? 'stylesheet' : Zb),
            u || ((d.as = 'script'), (d.crossOrigin = '')),
            (d.href = l),
            o && d.setAttribute('nonce', o),
            document.head.appendChild(d),
            u)
          )
            return new Promise((m, y) => {
              d.addEventListener('load', m),
                d.addEventListener('error', () =>
                  y(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    return i
      .then(() => t())
      .catch((s) => {
        const a = new Event('vite:preloadError', { cancelable: !0 });
        if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
          throw s;
      });
  };
var tk = function () {
  return null;
};
let nk = { data: '' },
  rk = (e) =>
    typeof window == 'object'
      ? (
          (e ? e.querySelector('#_goober') : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement('style')),
            { innerHTML: ' ', id: '_goober' }
          )
        ).firstChild
      : e || nk,
  ik = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  sk = /\/\*[^]*?\*\/|  +/g,
  fm = /\n+/g,
  Vn = (e, t) => {
    let n = '',
      r = '',
      i = '';
    for (let s in e) {
      let a = e[s];
      s[0] == '@'
        ? s[1] == 'i'
          ? (n = s + ' ' + a + ';')
          : (r +=
              s[1] == 'f'
                ? Vn(a, s)
                : s + '{' + Vn(a, s[1] == 'k' ? '' : t) + '}')
        : typeof a == 'object'
          ? (r += Vn(
              a,
              t
                ? t.replace(/([^,])+/g, (o) =>
                    s.replace(/(^:.*)|([^,])+/g, (l) =>
                      /&/.test(l) ? l.replace(/&/g, o) : o ? o + ' ' + l : l
                    )
                  )
                : s
            ))
          : a != null &&
            ((s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, '-$&').toLowerCase()),
            (i += Vn.p ? Vn.p(s, a) : s + ':' + a + ';'));
    }
    return n + (t && i ? t + '{' + i + '}' : i) + r;
  },
  fn = {},
  d0 = (e) => {
    if (typeof e == 'object') {
      let t = '';
      for (let n in e) t += n + d0(e[n]);
      return t;
    }
    return e;
  },
  ak = (e, t, n, r, i) => {
    let s = d0(e),
      a =
        fn[s] ||
        (fn[s] = ((l) => {
          let u = 0,
            c = 11;
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
          return 'go' + c;
        })(s));
    if (!fn[a]) {
      let l =
        s !== e
          ? e
          : ((u) => {
              let c,
                f,
                d = [{}];
              for (; (c = ik.exec(u.replace(sk, ''))); )
                c[4]
                  ? d.shift()
                  : c[3]
                    ? ((f = c[3].replace(fm, ' ').trim()),
                      d.unshift((d[0][f] = d[0][f] || {})))
                    : (d[0][c[1]] = c[2].replace(fm, ' ').trim());
              return d[0];
            })(e);
      fn[a] = Vn(i ? { ['@keyframes ' + a]: l } : l, n ? '' : '.' + a);
    }
    let o = n && fn.g ? fn.g : null;
    return (
      n && (fn.g = fn[a]),
      ((l, u, c, f) => {
        f
          ? (u.data = u.data.replace(f, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
      })(fn[a], t, r, o),
      a
    );
  },
  ok = (e, t, n) =>
    e.reduce((r, i, s) => {
      let a = t[s];
      if (a && a.call) {
        let o = a(n),
          l = (o && o.props && o.props.className) || (/^go/.test(o) && o);
        a = l
          ? '.' + l
          : o && typeof o == 'object'
            ? o.props
              ? ''
              : Vn(o, '')
            : o === !1
              ? ''
              : o;
      }
      return r + i + (a ?? '');
    }, '');
function pu(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return ak(
    n.unshift
      ? n.raw
        ? ok(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    rk(t.target),
    t.g,
    t.o,
    t.k
  );
}
let h0, Hf, Bf;
pu.bind({ g: 1 });
let Sn = pu.bind({ k: 1 });
function lk(e, t, n, r) {
  (Vn.p = t), (h0 = e), (Hf = n), (Bf = r);
}
function br(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function i(s, a) {
      let o = Object.assign({}, s),
        l = o.className || i.className;
      (n.p = Object.assign({ theme: Hf && Hf() }, o)),
        (n.o = / *go\d+/.test(l)),
        (o.className = pu.apply(n, r) + (l ? ' ' + l : '')),
        t && (o.ref = a);
      let u = e;
      return (
        e[0] && ((u = o.as || e), delete o.as), Bf && u[0] && Bf(o), h0(u, o)
      );
    }
    return t ? t(i) : i;
  };
}
var uk = (e) => typeof e == 'function',
  Il = (e, t) => (uk(e) ? e(t) : e),
  ck = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  p0 = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < 'u') {
        let t = matchMedia('(prefers-reduced-motion: reduce)');
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  fk = 20,
  Jo = new Map(),
  dk = 1e3,
  dm = (e) => {
    if (Jo.has(e)) return;
    let t = setTimeout(() => {
      Jo.delete(e), si({ type: 4, toastId: e });
    }, dk);
    Jo.set(e, t);
  },
  hk = (e) => {
    let t = Jo.get(e);
    t && clearTimeout(t);
  },
  Wf = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, fk) };
      case 1:
        return (
          t.toast.id && hk(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((s) =>
              s.id === t.toast.id ? { ...s, ...t.toast } : s
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((s) => s.id === n.id)
          ? Wf(e, { type: 1, toast: n })
          : Wf(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? dm(r)
            : e.toasts.forEach((s) => {
                dm(s.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((s) =>
              s.id === r || r === void 0 ? { ...s, visible: !1 } : s
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((s) => s.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let i = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((s) => ({
            ...s,
            pauseDuration: s.pauseDuration + i,
          })),
        };
    }
  },
  Zo = [],
  el = { toasts: [], pausedAt: void 0 },
  si = (e) => {
    (el = Wf(el, e)),
      Zo.forEach((t) => {
        t(el);
      });
  },
  pk = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  mk = (e = {}) => {
    let [t, n] = C.useState(el);
    C.useEffect(
      () => (
        Zo.push(n),
        () => {
          let i = Zo.indexOf(n);
          i > -1 && Zo.splice(i, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((i) => {
      var s, a;
      return {
        ...e,
        ...e[i.type],
        ...i,
        duration:
          i.duration ||
          ((s = e[i.type]) == null ? void 0 : s.duration) ||
          (e == null ? void 0 : e.duration) ||
          pk[i.type],
        style: {
          ...e.style,
          ...((a = e[i.type]) == null ? void 0 : a.style),
          ...i.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  vk = (e, t = 'blank', n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: 'status', 'aria-live': 'polite' },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || ck(),
  }),
  Ga = (e) => (t, n) => {
    let r = vk(t, e, n);
    return si({ type: 2, toast: r }), r.id;
  },
  yt = (e, t) => Ga('blank')(e, t);
yt.error = Ga('error');
yt.success = Ga('success');
yt.loading = Ga('loading');
yt.custom = Ga('custom');
yt.dismiss = (e) => {
  si({ type: 3, toastId: e });
};
yt.remove = (e) => si({ type: 4, toastId: e });
yt.promise = (e, t, n) => {
  let r = yt.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (i) => (
          yt.success(Il(t.success, i), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          i
        )
      )
      .catch((i) => {
        yt.error(Il(t.error, i), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var gk = (e, t) => {
    si({ type: 1, toast: { id: e, height: t } });
  },
  yk = () => {
    si({ type: 5, time: Date.now() });
  },
  wk = (e) => {
    let { toasts: t, pausedAt: n } = mk(e);
    C.useEffect(() => {
      if (n) return;
      let s = Date.now(),
        a = t.map((o) => {
          if (o.duration === 1 / 0) return;
          let l = (o.duration || 0) + o.pauseDuration - (s - o.createdAt);
          if (l < 0) {
            o.visible && yt.dismiss(o.id);
            return;
          }
          return setTimeout(() => yt.dismiss(o.id), l);
        });
      return () => {
        a.forEach((o) => o && clearTimeout(o));
      };
    }, [t, n]);
    let r = C.useCallback(() => {
        n && si({ type: 6, time: Date.now() });
      }, [n]),
      i = C.useCallback(
        (s, a) => {
          let {
              reverseOrder: o = !1,
              gutter: l = 8,
              defaultPosition: u,
            } = a || {},
            c = t.filter(
              (m) => (m.position || u) === (s.position || u) && m.height
            ),
            f = c.findIndex((m) => m.id === s.id),
            d = c.filter((m, y) => y < f && m.visible).length;
          return c
            .filter((m) => m.visible)
            .slice(...(o ? [d + 1] : [0, d]))
            .reduce((m, y) => m + (y.height || 0) + l, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: gk,
        startPause: yk,
        endPause: r,
        calculateOffset: i,
      },
    };
  },
  _k = Sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  bk = Sn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  kk = Sn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  xk = br('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${_k} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${bk} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || '#fff'};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${kk} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Sk = Sn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Ek = br('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || '#e0e0e0'};
  border-right-color: ${(e) => e.primary || '#616161'};
  animation: ${Sk} 1s linear infinite;
`,
  Ck = Sn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Pk = Sn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Ok = br('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ck} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Pk} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || '#fff'};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  jk = br('div')`
  position: absolute;
`,
  Tk = br('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Ak = Sn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Rk = br('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ak} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  Nk = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == 'string'
        ? C.createElement(Rk, null, t)
        : t
      : n === 'blank'
        ? null
        : C.createElement(
            Tk,
            null,
            C.createElement(Ek, { ...r }),
            n !== 'loading' &&
              C.createElement(
                jk,
                null,
                n === 'error'
                  ? C.createElement(xk, { ...r })
                  : C.createElement(Ok, { ...r })
              )
          );
  },
  Lk = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  Dk = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  Ik = '0%{opacity:0;} 100%{opacity:1;}',
  Mk = '0%{opacity:1;} 100%{opacity:0;}',
  $k = br('div')`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  Fk = br('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  zk = (e, t) => {
    let n = e.includes('top') ? 1 : -1,
      [r, i] = p0() ? [Ik, Mk] : [Lk(n), Dk(n)];
    return {
      animation: t
        ? `${Sn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${Sn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  Uk = C.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? zk(e.position || t || 'top-center', e.visible)
        : { opacity: 0 },
      s = C.createElement(Nk, { toast: e }),
      a = C.createElement(Fk, { ...e.ariaProps }, Il(e.message, e));
    return C.createElement(
      $k,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == 'function'
        ? r({ icon: s, message: a })
        : C.createElement(C.Fragment, null, s, a)
    );
  });
lk(C.createElement);
var Vk = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i,
  }) => {
    let s = C.useCallback(
      (a) => {
        if (a) {
          let o = () => {
            let l = a.getBoundingClientRect().height;
            r(e, l);
          };
          o(),
            new MutationObserver(o).observe(a, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return C.createElement('div', { ref: s, className: t, style: n }, i);
  },
  Hk = (e, t) => {
    let n = e.includes('top'),
      r = n ? { top: 0 } : { bottom: 0 },
      i = e.includes('center')
        ? { justifyContent: 'center' }
        : e.includes('right')
          ? { justifyContent: 'flex-end' }
          : {};
    return {
      left: 0,
      right: 0,
      display: 'flex',
      position: 'absolute',
      transition: p0() ? void 0 : 'all 230ms cubic-bezier(.21,1.02,.73,1)',
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i,
    };
  },
  Bk = pu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  So = 16,
  Wk = ({
    reverseOrder: e,
    position: t = 'top-center',
    toastOptions: n,
    gutter: r,
    children: i,
    containerStyle: s,
    containerClassName: a,
  }) => {
    let { toasts: o, handlers: l } = wk(n);
    return C.createElement(
      'div',
      {
        style: {
          position: 'fixed',
          zIndex: 9999,
          top: So,
          left: So,
          right: So,
          bottom: So,
          pointerEvents: 'none',
          ...s,
        },
        className: a,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      o.map((u) => {
        let c = u.position || t,
          f = l.calculateOffset(u, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          d = Hk(c, f);
        return C.createElement(
          Vk,
          {
            id: u.id,
            key: u.id,
            onHeightUpdate: l.updateHeight,
            className: u.visible ? Bk : '',
            style: d,
          },
          u.type === 'custom'
            ? Il(u.message, u)
            : i
              ? i(u)
              : C.createElement(Uk, { toast: u, position: c })
        );
      })
    );
  },
  fs = yt;
const qk = '_container_1hsrb_1',
  Qk = '_overlay_1hsrb_41',
  Yk = { container: qk, overlay: Qk },
  Kk = '_logo_3fpp2_1',
  Gk = { logo: Kk };
function Xk() {
  return h.jsx(Ka, {
    to: '/',
    className: Gk.logo,
    children: h.jsx('img', { src: '/logo.png', alt: 'Ticket system logo' }),
  });
}
const Jk = '_sidebar_1oyvs_1',
  Zk = '_tickets_1oyvs_53',
  hm = { sidebar: Jk, tickets: Zk };
var ex = {
    prefix: 'fas',
    iconName: 'calendar-days',
    icon: [
      448,
      512,
      ['calendar-alt'],
      'f073',
      'M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z',
    ],
  },
  tx = {
    prefix: 'fas',
    iconName: 'square-check',
    icon: [
      448,
      512,
      [9745, 9989, 61510, 'check-square'],
      'f14a',
      'M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z',
    ],
  },
  nx = {
    prefix: 'fas',
    iconName: 'users',
    icon: [
      640,
      512,
      [],
      'f0c0',
      'M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z',
    ],
  },
  rx = {
    prefix: 'fas',
    iconName: 'hand',
    icon: [
      512,
      512,
      [129306, 9995, 'hand-paper'],
      'f256',
      'M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z',
    ],
  },
  ix = {
    prefix: 'fas',
    iconName: 'crown',
    icon: [
      576,
      512,
      [128081],
      'f521',
      'M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z',
    ],
  },
  sx = {
    prefix: 'fas',
    iconName: 'folder-open',
    icon: [
      576,
      512,
      [128194, 128449, 61717],
      'f07c',
      'M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z',
    ],
  },
  ax = {
    prefix: 'fas',
    iconName: 'envelope-open',
    icon: [
      512,
      512,
      [62135],
      'f2b6',
      'M64 208.1L256 65.9 448 208.1v47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5V208.1zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1V448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V208.1c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z',
    ],
  },
  ox = {
    prefix: 'fas',
    iconName: 'filter',
    icon: [
      512,
      512,
      [],
      'f0b0',
      'M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z',
    ],
  },
  lx = {
    prefix: 'fas',
    iconName: 'chart-line',
    icon: [
      512,
      512,
      ['line-chart'],
      'f201',
      'M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z',
    ],
  },
  ux = {
    prefix: 'fas',
    iconName: 'user-gear',
    icon: [
      640,
      512,
      ['user-cog'],
      'f4fe',
      'M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v17.7c0 7.8 4.8 14.8 11.6 18.7c6.8 3.9 15.1 4.5 21.8 .6l13.8-7.9c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-14.4 8.3c-6.5 3.7-10 10.9-10 18.4s3.5 14.7 10 18.4l14.4 8.3c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-13.8-7.9c-6.7-3.9-15.1-3.3-21.8 .6c-6.8 3.9-11.6 10.9-11.6 18.7v17.7c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V467.8c0-7.9-4.9-14.9-11.7-18.9c-6.8-3.9-15.2-4.5-22-.6l-13.5 7.8c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l14-8.1c6.5-3.8 10.1-11.1 10.1-18.6s-3.5-14.8-10.1-18.6l-14-8.1c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l13.6 7.8c6.8 3.9 15.2 3.3 22-.6c6.9-3.9 11.7-11 11.7-18.9V218.2zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z',
    ],
  },
  cx = {
    prefix: 'fas',
    iconName: 'gear',
    icon: [
      512,
      512,
      [9881, 'cog'],
      'f013',
      'M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z',
    ],
  },
  fx = {
    prefix: 'fas',
    iconName: 'clock',
    icon: [
      512,
      512,
      [128339, 'clock-four'],
      'f017',
      'M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z',
    ],
  },
  dx = {
    prefix: 'fas',
    iconName: 'sun',
    icon: [
      512,
      512,
      [9728],
      'f185',
      'M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z',
    ],
  },
  m0 = {
    prefix: 'fas',
    iconName: 'bug',
    icon: [
      512,
      512,
      [],
      'f188',
      'M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z',
    ],
  },
  hx = {
    prefix: 'fas',
    iconName: 'bell',
    icon: [
      448,
      512,
      [128276, 61602],
      'f0f3',
      'M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z',
    ],
  },
  px = {
    prefix: 'fas',
    iconName: 'file',
    icon: [
      384,
      512,
      [128196, 128459, 61462],
      'f15b',
      'M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z',
    ],
  },
  mx = {
    prefix: 'fas',
    iconName: 'magnifying-glass',
    icon: [
      512,
      512,
      [128269, 'search'],
      'f002',
      'M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z',
    ],
  },
  vx = mx,
  gx = {
    prefix: 'fas',
    iconName: 'circle-user',
    icon: [
      512,
      512,
      [62142, 'user-circle'],
      'f2bd',
      'M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z',
    ],
  },
  yx = gx,
  wx = {
    prefix: 'fas',
    iconName: 'plus',
    icon: [
      448,
      512,
      [10133, 61543, 'add'],
      '2b',
      'M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z',
    ],
  },
  _x = {
    prefix: 'fas',
    iconName: 'xmark',
    icon: [
      384,
      512,
      [
        128473,
        10005,
        10006,
        10060,
        215,
        'close',
        'multiply',
        'remove',
        'times',
      ],
      'f00d',
      'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z',
    ],
  },
  bx = _x,
  kx = {
    prefix: 'fas',
    iconName: 'hammer',
    icon: [
      576,
      512,
      [128296],
      'f6e3',
      'M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z',
    ],
  },
  xx = {
    prefix: 'fas',
    iconName: 'up-right-and-down-left-from-center',
    icon: [
      512,
      512,
      ['expand-alt'],
      'f424',
      'M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z',
    ],
  },
  Sx = {
    prefix: 'fas',
    iconName: 'check',
    icon: [
      448,
      512,
      [10003, 10004],
      'f00c',
      'M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z',
    ],
  },
  Ex = {
    prefix: 'fas',
    iconName: 'truck-arrow-right',
    icon: [
      640,
      512,
      [],
      'e58b',
      'M0 48C0 21.5 21.5 0 48 0H368c26.5 0 48 21.5 48 48V96h50.7c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3V256v32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V48zM416 256H544V237.3L466.7 160H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM257 95c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H96c-13.3 0-24 10.7-24 24s10.7 24 24 24H262.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9L257 95z',
    ],
  };
function pm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? pm(Object(n), !0).forEach(function (r) {
          Ie(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : pm(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Ml(e) {
  '@babel/helpers - typeof';
  return (
    (Ml =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ml(e)
  );
}
function Cx(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function mm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Px(e, t, n) {
  return (
    t && mm(e.prototype, t),
    n && mm(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function Ie(e, t, n) {
  return (
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
function hh(e, t) {
  return jx(e) || Ax(e, t) || v0(e, t) || Nx();
}
function Xa(e) {
  return Ox(e) || Tx(e) || v0(e) || Rx();
}
function Ox(e) {
  if (Array.isArray(e)) return qf(e);
}
function jx(e) {
  if (Array.isArray(e)) return e;
}
function Tx(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function Ax(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (n != null) {
    var r = [],
      i = !0,
      s = !1,
      a,
      o;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (s) throw o;
      }
    }
    return r;
  }
}
function v0(e, t) {
  if (e) {
    if (typeof e == 'string') return qf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return qf(e, t);
  }
}
function qf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Rx() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vm = function () {},
  ph = {},
  g0 = {},
  y0 = null,
  w0 = { mark: vm, measure: vm };
try {
  typeof window < 'u' && (ph = window),
    typeof document < 'u' && (g0 = document),
    typeof MutationObserver < 'u' && (y0 = MutationObserver),
    typeof performance < 'u' && (w0 = performance);
} catch {}
var Lx = ph.navigator || {},
  gm = Lx.userAgent,
  ym = gm === void 0 ? '' : gm,
  mr = ph,
  pe = g0,
  wm = y0,
  Eo = w0;
mr.document;
var Tn =
    !!pe.documentElement &&
    !!pe.head &&
    typeof pe.addEventListener == 'function' &&
    typeof pe.createElement == 'function',
  _0 = ~ym.indexOf('MSIE') || ~ym.indexOf('Trident/'),
  Co,
  Po,
  Oo,
  jo,
  To,
  En = '___FONT_AWESOME___',
  Qf = 16,
  b0 = 'fa',
  k0 = 'svg-inline--fa',
  Jr = 'data-fa-i2svg',
  Yf = 'data-fa-pseudo-element',
  Dx = 'data-fa-pseudo-element-pending',
  mh = 'data-prefix',
  vh = 'data-icon',
  _m = 'fontawesome-i2svg',
  Ix = 'async',
  Mx = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'],
  x0 = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  de = 'classic',
  ke = 'sharp',
  gh = [de, ke];
function Ja(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[de];
    },
  });
}
var Sa = Ja(
    ((Co = {}),
    Ie(Co, de, {
      fa: 'solid',
      fas: 'solid',
      'fa-solid': 'solid',
      far: 'regular',
      'fa-regular': 'regular',
      fal: 'light',
      'fa-light': 'light',
      fat: 'thin',
      'fa-thin': 'thin',
      fad: 'duotone',
      'fa-duotone': 'duotone',
      fab: 'brands',
      'fa-brands': 'brands',
      fak: 'kit',
      fakd: 'kit',
      'fa-kit': 'kit',
      'fa-kit-duotone': 'kit',
    }),
    Ie(Co, ke, {
      fa: 'solid',
      fass: 'solid',
      'fa-solid': 'solid',
      fasr: 'regular',
      'fa-regular': 'regular',
      fasl: 'light',
      'fa-light': 'light',
      fast: 'thin',
      'fa-thin': 'thin',
    }),
    Co)
  ),
  Ea = Ja(
    ((Po = {}),
    Ie(Po, de, {
      solid: 'fas',
      regular: 'far',
      light: 'fal',
      thin: 'fat',
      duotone: 'fad',
      brands: 'fab',
      kit: 'fak',
    }),
    Ie(Po, ke, { solid: 'fass', regular: 'fasr', light: 'fasl', thin: 'fast' }),
    Po)
  ),
  Ca = Ja(
    ((Oo = {}),
    Ie(Oo, de, {
      fab: 'fa-brands',
      fad: 'fa-duotone',
      fak: 'fa-kit',
      fal: 'fa-light',
      far: 'fa-regular',
      fas: 'fa-solid',
      fat: 'fa-thin',
    }),
    Ie(Oo, ke, {
      fass: 'fa-solid',
      fasr: 'fa-regular',
      fasl: 'fa-light',
      fast: 'fa-thin',
    }),
    Oo)
  ),
  $x = Ja(
    ((jo = {}),
    Ie(jo, de, {
      'fa-brands': 'fab',
      'fa-duotone': 'fad',
      'fa-kit': 'fak',
      'fa-light': 'fal',
      'fa-regular': 'far',
      'fa-solid': 'fas',
      'fa-thin': 'fat',
    }),
    Ie(jo, ke, {
      'fa-solid': 'fass',
      'fa-regular': 'fasr',
      'fa-light': 'fasl',
      'fa-thin': 'fast',
    }),
    jo)
  ),
  Fx = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  S0 = 'fa-layers-text',
  zx =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  Ux = Ja(
    ((To = {}),
    Ie(To, de, {
      900: 'fas',
      400: 'far',
      normal: 'far',
      300: 'fal',
      100: 'fat',
    }),
    Ie(To, ke, { 900: 'fass', 400: 'fasr', 300: 'fasl', 100: 'fast' }),
    To)
  ),
  E0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Vx = E0.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Hx = [
    'class',
    'data-prefix',
    'data-icon',
    'data-fa-transform',
    'data-fa-mask',
  ],
  Nr = {
    GROUP: 'duotone-group',
    SWAP_OPACITY: 'swap-opacity',
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
  },
  Pa = new Set();
Object.keys(Ea[de]).map(Pa.add.bind(Pa));
Object.keys(Ea[ke]).map(Pa.add.bind(Pa));
var Bx = []
    .concat(gh, Xa(Pa), [
      '2xs',
      'xs',
      'sm',
      'lg',
      'xl',
      '2xl',
      'beat',
      'border',
      'fade',
      'beat-fade',
      'bounce',
      'flip-both',
      'flip-horizontal',
      'flip-vertical',
      'flip',
      'fw',
      'inverse',
      'layers-counter',
      'layers-text',
      'layers',
      'li',
      'pull-left',
      'pull-right',
      'pulse',
      'rotate-180',
      'rotate-270',
      'rotate-90',
      'rotate-by',
      'shake',
      'spin-pulse',
      'spin-reverse',
      'spin',
      'stack-1x',
      'stack-2x',
      'stack',
      'ul',
      Nr.GROUP,
      Nr.SWAP_OPACITY,
      Nr.PRIMARY,
      Nr.SECONDARY,
    ])
    .concat(
      E0.map(function (e) {
        return ''.concat(e, 'x');
      })
    )
    .concat(
      Vx.map(function (e) {
        return 'w-'.concat(e);
      })
    ),
  ta = mr.FontAwesomeConfig || {};
function Wx(e) {
  var t = pe.querySelector('script[' + e + ']');
  if (t) return t.getAttribute(e);
}
function qx(e) {
  return e === '' ? !0 : e === 'false' ? !1 : e === 'true' ? !0 : e;
}
if (pe && typeof pe.querySelector == 'function') {
  var Qx = [
    ['data-family-prefix', 'familyPrefix'],
    ['data-css-prefix', 'cssPrefix'],
    ['data-family-default', 'familyDefault'],
    ['data-style-default', 'styleDefault'],
    ['data-replacement-class', 'replacementClass'],
    ['data-auto-replace-svg', 'autoReplaceSvg'],
    ['data-auto-add-css', 'autoAddCss'],
    ['data-auto-a11y', 'autoA11y'],
    ['data-search-pseudo-elements', 'searchPseudoElements'],
    ['data-observe-mutations', 'observeMutations'],
    ['data-mutate-approach', 'mutateApproach'],
    ['data-keep-original-source', 'keepOriginalSource'],
    ['data-measure-performance', 'measurePerformance'],
    ['data-show-missing-icons', 'showMissingIcons'],
  ];
  Qx.forEach(function (e) {
    var t = hh(e, 2),
      n = t[0],
      r = t[1],
      i = qx(Wx(n));
    i != null && (ta[r] = i);
  });
}
var C0 = {
  styleDefault: 'solid',
  familyDefault: 'classic',
  cssPrefix: b0,
  replacementClass: k0,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: 'async',
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
ta.familyPrefix && (ta.cssPrefix = ta.familyPrefix);
var ds = M(M({}, C0), ta);
ds.autoReplaceSvg || (ds.observeMutations = !1);
var z = {};
Object.keys(C0).forEach(function (e) {
  Object.defineProperty(z, e, {
    enumerable: !0,
    set: function (n) {
      (ds[e] = n),
        na.forEach(function (r) {
          return r(z);
        });
    },
    get: function () {
      return ds[e];
    },
  });
});
Object.defineProperty(z, 'familyPrefix', {
  enumerable: !0,
  set: function (t) {
    (ds.cssPrefix = t),
      na.forEach(function (n) {
        return n(z);
      });
  },
  get: function () {
    return ds.cssPrefix;
  },
});
mr.FontAwesomeConfig = z;
var na = [];
function Yx(e) {
  return (
    na.push(e),
    function () {
      na.splice(na.indexOf(e), 1);
    }
  );
}
var Rn = Qf,
  an = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function Kx(e) {
  if (!(!e || !Tn)) {
    var t = pe.createElement('style');
    t.setAttribute('type', 'text/css'), (t.innerHTML = e);
    for (var n = pe.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var s = n[i],
        a = (s.tagName || '').toUpperCase();
      ['STYLE', 'LINK'].indexOf(a) > -1 && (r = s);
    }
    return pe.head.insertBefore(t, r), e;
  }
}
var Gx = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function Oa() {
  for (var e = 12, t = ''; e-- > 0; ) t += Gx[(Math.random() * 62) | 0];
  return t;
}
function _s(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function yh(e) {
  return e.classList
    ? _s(e.classList)
    : (e.getAttribute('class') || '').split(' ').filter(function (t) {
        return t;
      });
}
function P0(e) {
  return ''
    .concat(e)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function Xx(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + ''.concat(n, '="').concat(P0(e[n]), '" ');
    }, '')
    .trim();
}
function mu(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + ''.concat(n, ': ').concat(e[n].trim(), ';');
  }, '');
}
function wh(e) {
  return (
    e.size !== an.size ||
    e.x !== an.x ||
    e.y !== an.y ||
    e.rotate !== an.rotate ||
    e.flipX ||
    e.flipY
  );
}
function Jx(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: 'translate('.concat(n / 2, ' 256)') },
    s = 'translate('.concat(t.x * 32, ', ').concat(t.y * 32, ') '),
    a = 'scale('
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ') '),
    o = 'rotate('.concat(t.rotate, ' 0 0)'),
    l = { transform: ''.concat(s, ' ').concat(a, ' ').concat(o) },
    u = { transform: 'translate('.concat((r / 2) * -1, ' -256)') };
  return { outer: i, inner: l, path: u };
}
function Zx(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Qf : n,
    i = e.height,
    s = i === void 0 ? Qf : i,
    a = e.startCentered,
    o = a === void 0 ? !1 : a,
    l = '';
  return (
    o && _0
      ? (l += 'translate('
          .concat(t.x / Rn - r / 2, 'em, ')
          .concat(t.y / Rn - s / 2, 'em) '))
      : o
        ? (l += 'translate(calc(-50% + '
            .concat(t.x / Rn, 'em), calc(-50% + ')
            .concat(t.y / Rn, 'em)) '))
        : (l += 'translate('.concat(t.x / Rn, 'em, ').concat(t.y / Rn, 'em) ')),
    (l += 'scale('
      .concat((t.size / Rn) * (t.flipX ? -1 : 1), ', ')
      .concat((t.size / Rn) * (t.flipY ? -1 : 1), ') ')),
    (l += 'rotate('.concat(t.rotate, 'deg) ')),
    l
  );
}
var eS = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function O0() {
  var e = b0,
    t = k0,
    n = z.cssPrefix,
    r = z.replacementClass,
    i = eS;
  if (n !== e || r !== t) {
    var s = new RegExp('\\.'.concat(e, '\\-'), 'g'),
      a = new RegExp('\\--'.concat(e, '\\-'), 'g'),
      o = new RegExp('\\.'.concat(t), 'g');
    i = i
      .replace(s, '.'.concat(n, '-'))
      .replace(a, '--'.concat(n, '-'))
      .replace(o, '.'.concat(r));
  }
  return i;
}
var bm = !1;
function sc() {
  z.autoAddCss && !bm && (Kx(O0()), (bm = !0));
}
var tS = {
    mixout: function () {
      return { dom: { css: O0, insertCss: sc } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          sc();
        },
        beforeI2svg: function () {
          sc();
        },
      };
    },
  },
  Cn = mr || {};
Cn[En] || (Cn[En] = {});
Cn[En].styles || (Cn[En].styles = {});
Cn[En].hooks || (Cn[En].hooks = {});
Cn[En].shims || (Cn[En].shims = []);
var Qt = Cn[En],
  j0 = [],
  nS = function e() {
    pe.removeEventListener('DOMContentLoaded', e),
      ($l = 1),
      j0.map(function (t) {
        return t();
      });
  },
  $l = !1;
Tn &&
  (($l = (pe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    pe.readyState
  )),
  $l || pe.addEventListener('DOMContentLoaded', nS));
function rS(e) {
  Tn && ($l ? setTimeout(e, 0) : j0.push(e));
}
function Za(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    s = i === void 0 ? [] : i;
  return typeof e == 'string'
    ? P0(e)
    : '<'
        .concat(t, ' ')
        .concat(Xx(r), '>')
        .concat(s.map(Za).join(''), '</')
        .concat(t, '>');
}
function km(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var iS = function (t, n) {
    return function (r, i, s, a) {
      return t.call(n, r, i, s, a);
    };
  },
  ac = function (t, n, r, i) {
    var s = Object.keys(t),
      a = s.length,
      o = i !== void 0 ? iS(n, i) : n,
      l,
      u,
      c;
    for (
      r === void 0 ? ((l = 1), (c = t[s[0]])) : ((l = 0), (c = r));
      l < a;
      l++
    )
      (u = s[l]), (c = o(c, t[u], u, t));
    return c;
  };
function sS(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var s = e.charCodeAt(n++);
      (s & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (s & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function Kf(e) {
  var t = sS(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function aS(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function xm(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Gf(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    s = xm(t);
  typeof Qt.hooks.addPack == 'function' && !i
    ? Qt.hooks.addPack(e, xm(t))
    : (Qt.styles[e] = M(M({}, Qt.styles[e] || {}), s)),
    e === 'fas' && Gf('fa', t);
}
var Ao,
  Ro,
  No,
  ji = Qt.styles,
  oS = Qt.shims,
  lS =
    ((Ao = {}),
    Ie(Ao, de, Object.values(Ca[de])),
    Ie(Ao, ke, Object.values(Ca[ke])),
    Ao),
  _h = null,
  T0 = {},
  A0 = {},
  R0 = {},
  N0 = {},
  L0 = {},
  uS =
    ((Ro = {}),
    Ie(Ro, de, Object.keys(Sa[de])),
    Ie(Ro, ke, Object.keys(Sa[ke])),
    Ro);
function cS(e) {
  return ~Bx.indexOf(e);
}
function fS(e, t) {
  var n = t.split('-'),
    r = n[0],
    i = n.slice(1).join('-');
  return r === e && i !== '' && !cS(i) ? i : null;
}
var D0 = function () {
  var t = function (s) {
    return ac(
      ji,
      function (a, o, l) {
        return (a[l] = ac(o, s, {})), a;
      },
      {}
    );
  };
  (T0 = t(function (i, s, a) {
    if ((s[3] && (i[s[3]] = a), s[2])) {
      var o = s[2].filter(function (l) {
        return typeof l == 'number';
      });
      o.forEach(function (l) {
        i[l.toString(16)] = a;
      });
    }
    return i;
  })),
    (A0 = t(function (i, s, a) {
      if (((i[a] = a), s[2])) {
        var o = s[2].filter(function (l) {
          return typeof l == 'string';
        });
        o.forEach(function (l) {
          i[l] = a;
        });
      }
      return i;
    })),
    (L0 = t(function (i, s, a) {
      var o = s[2];
      return (
        (i[a] = a),
        o.forEach(function (l) {
          i[l] = a;
        }),
        i
      );
    }));
  var n = 'far' in ji || z.autoFetchSvg,
    r = ac(
      oS,
      function (i, s) {
        var a = s[0],
          o = s[1],
          l = s[2];
        return (
          o === 'far' && !n && (o = 'fas'),
          typeof a == 'string' && (i.names[a] = { prefix: o, iconName: l }),
          typeof a == 'number' &&
            (i.unicodes[a.toString(16)] = { prefix: o, iconName: l }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (R0 = r.names),
    (N0 = r.unicodes),
    (_h = vu(z.styleDefault, { family: z.familyDefault }));
};
Yx(function (e) {
  _h = vu(e.styleDefault, { family: z.familyDefault });
});
D0();
function bh(e, t) {
  return (T0[e] || {})[t];
}
function dS(e, t) {
  return (A0[e] || {})[t];
}
function Lr(e, t) {
  return (L0[e] || {})[t];
}
function I0(e) {
  return R0[e] || { prefix: null, iconName: null };
}
function hS(e) {
  var t = N0[e],
    n = bh('fas', e);
  return (
    t ||
    (n ? { prefix: 'fas', iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function vr() {
  return _h;
}
var kh = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function vu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? de : n,
    i = Sa[r][e],
    s = Ea[r][e] || Ea[r][i],
    a = e in Qt.styles ? e : null;
  return s || a || null;
}
var Sm =
  ((No = {}),
  Ie(No, de, Object.keys(Ca[de])),
  Ie(No, ke, Object.keys(Ca[ke])),
  No);
function gu(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    s =
      ((t = {}),
      Ie(t, de, ''.concat(z.cssPrefix, '-').concat(de)),
      Ie(t, ke, ''.concat(z.cssPrefix, '-').concat(ke)),
      t),
    a = null,
    o = de;
  (e.includes(s[de]) ||
    e.some(function (u) {
      return Sm[de].includes(u);
    })) &&
    (o = de),
    (e.includes(s[ke]) ||
      e.some(function (u) {
        return Sm[ke].includes(u);
      })) &&
      (o = ke);
  var l = e.reduce(function (u, c) {
    var f = fS(z.cssPrefix, c);
    if (
      (ji[c]
        ? ((c = lS[o].includes(c) ? $x[o][c] : c), (a = c), (u.prefix = c))
        : uS[o].indexOf(c) > -1
          ? ((a = c), (u.prefix = vu(c, { family: o })))
          : f
            ? (u.iconName = f)
            : c !== z.replacementClass &&
              c !== s[de] &&
              c !== s[ke] &&
              u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var d = a === 'fa' ? I0(u.iconName) : {},
        m = Lr(u.prefix, u.iconName);
      d.prefix && (a = null),
        (u.iconName = d.iconName || m || u.iconName),
        (u.prefix = d.prefix || u.prefix),
        u.prefix === 'far' &&
          !ji.far &&
          ji.fas &&
          !z.autoFetchSvg &&
          (u.prefix = 'fas');
    }
    return u;
  }, kh());
  return (
    (e.includes('fa-brands') || e.includes('fab')) && (l.prefix = 'fab'),
    (e.includes('fa-duotone') || e.includes('fad')) && (l.prefix = 'fad'),
    !l.prefix &&
      o === ke &&
      (ji.fass || z.autoFetchSvg) &&
      ((l.prefix = 'fass'),
      (l.iconName = Lr(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === 'fa' || a === 'fa') && (l.prefix = vr() || 'fas'),
    l
  );
}
var pS = (function () {
    function e() {
      Cx(this, e), (this.definitions = {});
    }
    return (
      Px(e, [
        {
          key: 'add',
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), s = 0;
              s < r;
              s++
            )
              i[s] = arguments[s];
            var a = i.reduce(this._pullDefinitions, {});
            Object.keys(a).forEach(function (o) {
              (n.definitions[o] = M(M({}, n.definitions[o] || {}), a[o])),
                Gf(o, a[o]);
              var l = Ca[de][o];
              l && Gf(l, a[o]), D0();
            });
          },
        },
        {
          key: 'reset',
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: '_pullDefinitions',
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (s) {
                var a = i[s],
                  o = a.prefix,
                  l = a.iconName,
                  u = a.icon,
                  c = u[2];
                n[o] || (n[o] = {}),
                  c.length > 0 &&
                    c.forEach(function (f) {
                      typeof f == 'string' && (n[o][f] = u);
                    }),
                  (n[o][l] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  Em = [],
  Ti = {},
  zi = {},
  mS = Object.keys(zi);
function vS(e, t) {
  var n = t.mixoutsTo;
  return (
    (Em = e),
    (Ti = {}),
    Object.keys(zi).forEach(function (r) {
      mS.indexOf(r) === -1 && delete zi[r];
    }),
    Em.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (a) {
          typeof i[a] == 'function' && (n[a] = i[a]),
            Ml(i[a]) === 'object' &&
              Object.keys(i[a]).forEach(function (o) {
                n[a] || (n[a] = {}), (n[a][o] = i[a][o]);
              });
        }),
        r.hooks)
      ) {
        var s = r.hooks();
        Object.keys(s).forEach(function (a) {
          Ti[a] || (Ti[a] = []), Ti[a].push(s[a]);
        });
      }
      r.provides && r.provides(zi);
    }),
    n
  );
}
function Xf(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var s = Ti[e] || [];
  return (
    s.forEach(function (a) {
      t = a.apply(null, [t].concat(r));
    }),
    t
  );
}
function Zr(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = Ti[e] || [];
  i.forEach(function (s) {
    s.apply(null, n);
  });
}
function Pn() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return zi[e] ? zi[e].apply(null, t) : void 0;
}
function Jf(e) {
  e.prefix === 'fa' && (e.prefix = 'fas');
  var t = e.iconName,
    n = e.prefix || vr();
  if (t)
    return (t = Lr(n, t) || t), km(M0.definitions, n, t) || km(Qt.styles, n, t);
}
var M0 = new pS(),
  gS = function () {
    (z.autoReplaceSvg = !1), (z.observeMutations = !1), Zr('noAuto');
  },
  yS = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Tn
        ? (Zr('beforeI2svg', t), Pn('pseudoElements2svg', t), Pn('i2svg', t))
        : Promise.reject('Operation requires a DOM of some kind.');
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      z.autoReplaceSvg === !1 && (z.autoReplaceSvg = !0),
        (z.observeMutations = !0),
        rS(function () {
          _S({ autoReplaceSvgRoot: n }), Zr('watch', t);
        });
    },
  },
  wS = {
    icon: function (t) {
      if (t === null) return null;
      if (Ml(t) === 'object' && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: Lr(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf('fa-') === 0 ? t[1].slice(3) : t[1],
          r = vu(t[0]);
        return { prefix: r, iconName: Lr(r, n) || n };
      }
      if (
        typeof t == 'string' &&
        (t.indexOf(''.concat(z.cssPrefix, '-')) > -1 || t.match(Fx))
      ) {
        var i = gu(t.split(' '), { skipLookups: !0 });
        return {
          prefix: i.prefix || vr(),
          iconName: Lr(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == 'string') {
        var s = vr();
        return { prefix: s, iconName: Lr(s, t) || t };
      }
    },
  },
  xt = {
    noAuto: gS,
    config: z,
    dom: yS,
    parse: wS,
    library: M0,
    findIconDefinition: Jf,
    toHtml: Za,
  },
  _S = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? pe : n;
    (Object.keys(Qt.styles).length > 0 || z.autoFetchSvg) &&
      Tn &&
      z.autoReplaceSvg &&
      xt.dom.i2svg({ node: r });
  };
function yu(e, t) {
  return (
    Object.defineProperty(e, 'abstract', { get: t }),
    Object.defineProperty(e, 'html', {
      get: function () {
        return e.abstract.map(function (r) {
          return Za(r);
        });
      },
    }),
    Object.defineProperty(e, 'node', {
      get: function () {
        if (Tn) {
          var r = pe.createElement('div');
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function bS(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    s = e.styles,
    a = e.transform;
  if (wh(a) && n.found && !r.found) {
    var o = n.width,
      l = n.height,
      u = { x: o / l / 2, y: 0.5 };
    i.style = mu(
      M(
        M({}, s),
        {},
        {
          'transform-origin': ''
            .concat(u.x + a.x / 16, 'em ')
            .concat(u.y + a.y / 16, 'em'),
        }
      )
    );
  }
  return [{ tag: 'svg', attributes: i, children: t }];
}
function kS(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    s = e.symbol,
    a = s === !0 ? ''.concat(t, '-').concat(z.cssPrefix, '-').concat(n) : s;
  return [
    {
      tag: 'svg',
      attributes: { style: 'display: none;' },
      children: [
        { tag: 'symbol', attributes: M(M({}, i), {}, { id: a }), children: r },
      ],
    },
  ];
}
function xh(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    s = e.iconName,
    a = e.transform,
    o = e.symbol,
    l = e.title,
    u = e.maskId,
    c = e.titleId,
    f = e.extra,
    d = e.watchable,
    m = d === void 0 ? !1 : d,
    y = r.found ? r : n,
    b = y.width,
    P = y.height,
    v = i === 'fak',
    p = [z.replacementClass, s ? ''.concat(z.cssPrefix, '-').concat(s) : '']
      .filter(function (B) {
        return f.classes.indexOf(B) === -1;
      })
      .filter(function (B) {
        return B !== '' || !!B;
      })
      .concat(f.classes)
      .join(' '),
    g = {
      children: [],
      attributes: M(
        M({}, f.attributes),
        {},
        {
          'data-prefix': i,
          'data-icon': s,
          class: p,
          role: f.attributes.role || 'img',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 '.concat(b, ' ').concat(P),
        }
      ),
    },
    k =
      v && !~f.classes.indexOf('fa-fw')
        ? { width: ''.concat((b / P) * 16 * 0.0625, 'em') }
        : {};
  m && (g.attributes[Jr] = ''),
    l &&
      (g.children.push({
        tag: 'title',
        attributes: {
          id: g.attributes['aria-labelledby'] || 'title-'.concat(c || Oa()),
        },
        children: [l],
      }),
      delete g.attributes.title);
  var S = M(
      M({}, g),
      {},
      {
        prefix: i,
        iconName: s,
        main: n,
        mask: r,
        maskId: u,
        transform: a,
        symbol: o,
        styles: M(M({}, k), f.styles),
      }
    ),
    T =
      r.found && n.found
        ? Pn('generateAbstractMask', S) || { children: [], attributes: {} }
        : Pn('generateAbstractIcon', S) || { children: [], attributes: {} },
    R = T.children,
    O = T.attributes;
  return (S.children = R), (S.attributes = O), o ? kS(S) : bS(S);
}
function Cm(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    s = e.title,
    a = e.extra,
    o = e.watchable,
    l = o === void 0 ? !1 : o,
    u = M(
      M(M({}, a.attributes), s ? { title: s } : {}),
      {},
      { class: a.classes.join(' ') }
    );
  l && (u[Jr] = '');
  var c = M({}, a.styles);
  wh(i) &&
    ((c.transform = Zx({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (c['-webkit-transform'] = c.transform));
  var f = mu(c);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: 'span', attributes: u, children: [t] }),
    s &&
      d.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [s] }),
    d
  );
}
function xS(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = M(
      M(M({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(' ') }
    ),
    s = mu(r.styles);
  s.length > 0 && (i.style = s);
  var a = [];
  return (
    a.push({ tag: 'span', attributes: i, children: [t] }),
    n &&
      a.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
    a
  );
}
var oc = Qt.styles;
function Zf(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = hh(r, 1),
    s = i[0],
    a = null;
  return (
    Array.isArray(s)
      ? (a = {
          tag: 'g',
          attributes: { class: ''.concat(z.cssPrefix, '-').concat(Nr.GROUP) },
          children: [
            {
              tag: 'path',
              attributes: {
                class: ''.concat(z.cssPrefix, '-').concat(Nr.SECONDARY),
                fill: 'currentColor',
                d: s[0],
              },
            },
            {
              tag: 'path',
              attributes: {
                class: ''.concat(z.cssPrefix, '-').concat(Nr.PRIMARY),
                fill: 'currentColor',
                d: s[1],
              },
            },
          ],
        })
      : (a = { tag: 'path', attributes: { fill: 'currentColor', d: s } }),
    { found: !0, width: t, height: n, icon: a }
  );
}
var SS = { found: !1, width: 512, height: 512 };
function ES(e, t) {
  !x0 &&
    !z.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function ed(e, t) {
  var n = t;
  return (
    t === 'fa' && z.styleDefault !== null && (t = vr()),
    new Promise(function (r, i) {
      if ((Pn('missingIconAbstract'), n === 'fa')) {
        var s = I0(e) || {};
        (e = s.iconName || e), (t = s.prefix || t);
      }
      if (e && t && oc[t] && oc[t][e]) {
        var a = oc[t][e];
        return r(Zf(a));
      }
      ES(e, t),
        r(
          M(
            M({}, SS),
            {},
            {
              icon:
                z.showMissingIcons && e ? Pn('missingIconAbstract') || {} : {},
            }
          )
        );
    })
  );
}
var Pm = function () {},
  td =
    z.measurePerformance && Eo && Eo.mark && Eo.measure
      ? Eo
      : { mark: Pm, measure: Pm },
  Bs = 'FA "6.5.1"',
  CS = function (t) {
    return (
      td.mark(''.concat(Bs, ' ').concat(t, ' begins')),
      function () {
        return $0(t);
      }
    );
  },
  $0 = function (t) {
    td.mark(''.concat(Bs, ' ').concat(t, ' ends')),
      td.measure(
        ''.concat(Bs, ' ').concat(t),
        ''.concat(Bs, ' ').concat(t, ' begins'),
        ''.concat(Bs, ' ').concat(t, ' ends')
      );
  },
  Sh = { begin: CS, end: $0 },
  tl = function () {};
function Om(e) {
  var t = e.getAttribute ? e.getAttribute(Jr) : null;
  return typeof t == 'string';
}
function PS(e) {
  var t = e.getAttribute ? e.getAttribute(mh) : null,
    n = e.getAttribute ? e.getAttribute(vh) : null;
  return t && n;
}
function OS(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(z.replacementClass)
  );
}
function jS() {
  if (z.autoReplaceSvg === !0) return nl.replace;
  var e = nl[z.autoReplaceSvg];
  return e || nl.replace;
}
function TS(e) {
  return pe.createElementNS('http://www.w3.org/2000/svg', e);
}
function AS(e) {
  return pe.createElement(e);
}
function F0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === 'svg' ? TS : AS) : n;
  if (typeof e == 'string') return pe.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (a) {
    i.setAttribute(a, e.attributes[a]);
  });
  var s = e.children || [];
  return (
    s.forEach(function (a) {
      i.appendChild(F0(a, { ceFn: r }));
    }),
    i
  );
}
function RS(e) {
  var t = ' '.concat(e.outerHTML, ' ');
  return (t = ''.concat(t, 'Font Awesome fontawesome.com ')), t;
}
var nl = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(F0(i), n);
        }),
        n.getAttribute(Jr) === null && z.keepOriginalSource)
      ) {
        var r = pe.createComment(RS(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~yh(n).indexOf(z.replacementClass)) return nl.replace(t);
    var i = new RegExp(''.concat(z.cssPrefix, '-.*'));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var s = r[0].attributes.class.split(' ').reduce(
        function (o, l) {
          return (
            l === z.replacementClass || l.match(i)
              ? o.toSvg.push(l)
              : o.toNode.push(l),
            o
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = s.toSvg.join(' ')),
        s.toNode.length === 0
          ? n.removeAttribute('class')
          : n.setAttribute('class', s.toNode.join(' '));
    }
    var a = r.map(function (o) {
      return Za(o);
    }).join(`
`);
    n.setAttribute(Jr, ''), (n.innerHTML = a);
  },
};
function jm(e) {
  e();
}
function z0(e, t) {
  var n = typeof t == 'function' ? t : tl;
  if (e.length === 0) n();
  else {
    var r = jm;
    z.mutateApproach === Ix && (r = mr.requestAnimationFrame || jm),
      r(function () {
        var i = jS(),
          s = Sh.begin('mutate');
        e.map(i), s(), n();
      });
  }
}
var Eh = !1;
function U0() {
  Eh = !0;
}
function nd() {
  Eh = !1;
}
var Fl = null;
function Tm(e) {
  if (wm && z.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? tl : t,
      r = e.nodeCallback,
      i = r === void 0 ? tl : r,
      s = e.pseudoElementsCallback,
      a = s === void 0 ? tl : s,
      o = e.observeMutationsRoot,
      l = o === void 0 ? pe : o;
    (Fl = new wm(function (u) {
      if (!Eh) {
        var c = vr();
        _s(u).forEach(function (f) {
          if (
            (f.type === 'childList' &&
              f.addedNodes.length > 0 &&
              !Om(f.addedNodes[0]) &&
              (z.searchPseudoElements && a(f.target), n(f.target)),
            f.type === 'attributes' &&
              f.target.parentNode &&
              z.searchPseudoElements &&
              a(f.target.parentNode),
            f.type === 'attributes' &&
              Om(f.target) &&
              ~Hx.indexOf(f.attributeName))
          )
            if (f.attributeName === 'class' && PS(f.target)) {
              var d = gu(yh(f.target)),
                m = d.prefix,
                y = d.iconName;
              f.target.setAttribute(mh, m || c),
                y && f.target.setAttribute(vh, y);
            } else OS(f.target) && i(f.target);
        });
      }
    })),
      Tn &&
        Fl.observe(l, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function NS() {
  Fl && Fl.disconnect();
}
function LS(e) {
  var t = e.getAttribute('style'),
    n = [];
  return (
    t &&
      (n = t.split(';').reduce(function (r, i) {
        var s = i.split(':'),
          a = s[0],
          o = s.slice(1);
        return a && o.length > 0 && (r[a] = o.join(':').trim()), r;
      }, {})),
    n
  );
}
function DS(e) {
  var t = e.getAttribute('data-prefix'),
    n = e.getAttribute('data-icon'),
    r = e.innerText !== void 0 ? e.innerText.trim() : '',
    i = gu(yh(e));
  return (
    i.prefix || (i.prefix = vr()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          dS(i.prefix, e.innerText) || bh(i.prefix, Kf(e.innerText))),
      !i.iconName &&
        z.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function IS(e) {
  var t = _s(e.attributes).reduce(function (i, s) {
      return (
        i.name !== 'class' && i.name !== 'style' && (i[s.name] = s.value), i
      );
    }, {}),
    n = e.getAttribute('title'),
    r = e.getAttribute('data-fa-title-id');
  return (
    z.autoA11y &&
      (n
        ? (t['aria-labelledby'] = ''
            .concat(z.replacementClass, '-title-')
            .concat(r || Oa()))
        : ((t['aria-hidden'] = 'true'), (t.focusable = 'false'))),
    t
  );
}
function MS() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: an,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Am(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = DS(e),
    r = n.iconName,
    i = n.prefix,
    s = n.rest,
    a = IS(e),
    o = Xf('parseNodeAttributes', {}, e),
    l = t.styleParser ? LS(e) : [];
  return M(
    {
      iconName: r,
      title: e.getAttribute('title'),
      titleId: e.getAttribute('data-fa-title-id'),
      prefix: i,
      transform: an,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: s, styles: l, attributes: a },
    },
    o
  );
}
var $S = Qt.styles;
function V0(e) {
  var t = z.autoReplaceSvg === 'nest' ? Am(e, { styleParser: !1 }) : Am(e);
  return ~t.extra.classes.indexOf(S0)
    ? Pn('generateLayersText', e, t)
    : Pn('generateSvgReplacementMutation', e, t);
}
var gr = new Set();
gh.map(function (e) {
  gr.add('fa-'.concat(e));
});
Object.keys(Sa[de]).map(gr.add.bind(gr));
Object.keys(Sa[ke]).map(gr.add.bind(gr));
gr = Xa(gr);
function Rm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Tn) return Promise.resolve();
  var n = pe.documentElement.classList,
    r = function (f) {
      return n.add(''.concat(_m, '-').concat(f));
    },
    i = function (f) {
      return n.remove(''.concat(_m, '-').concat(f));
    },
    s = z.autoFetchSvg
      ? gr
      : gh
          .map(function (c) {
            return 'fa-'.concat(c);
          })
          .concat(Object.keys($S));
  s.includes('fa') || s.push('fa');
  var a = ['.'.concat(S0, ':not([').concat(Jr, '])')]
    .concat(
      s.map(function (c) {
        return '.'.concat(c, ':not([').concat(Jr, '])');
      })
    )
    .join(', ');
  if (a.length === 0) return Promise.resolve();
  var o = [];
  try {
    o = _s(e.querySelectorAll(a));
  } catch {}
  if (o.length > 0) r('pending'), i('complete');
  else return Promise.resolve();
  var l = Sh.begin('onTree'),
    u = o.reduce(function (c, f) {
      try {
        var d = V0(f);
        d && c.push(d);
      } catch (m) {
        x0 || (m.name === 'MissingIcon' && console.error(m));
      }
      return c;
    }, []);
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (d) {
        z0(d, function () {
          r('active'),
            r('complete'),
            i('pending'),
            typeof t == 'function' && t(),
            l(),
            c();
        });
      })
      .catch(function (d) {
        l(), f(d);
      });
  });
}
function FS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  V0(e).then(function (n) {
    n && z0([n], t);
  });
}
function zS(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : Jf(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : Jf(i || {})),
      e(r, M(M({}, n), {}, { mask: i }))
    );
  };
}
var US = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? an : r,
      s = n.symbol,
      a = s === void 0 ? !1 : s,
      o = n.mask,
      l = o === void 0 ? null : o,
      u = n.maskId,
      c = u === void 0 ? null : u,
      f = n.title,
      d = f === void 0 ? null : f,
      m = n.titleId,
      y = m === void 0 ? null : m,
      b = n.classes,
      P = b === void 0 ? [] : b,
      v = n.attributes,
      p = v === void 0 ? {} : v,
      g = n.styles,
      k = g === void 0 ? {} : g;
    if (t) {
      var S = t.prefix,
        T = t.iconName,
        R = t.icon;
      return yu(M({ type: 'icon' }, t), function () {
        return (
          Zr('beforeDOMElementCreation', { iconDefinition: t, params: n }),
          z.autoA11y &&
            (d
              ? (p['aria-labelledby'] = ''
                  .concat(z.replacementClass, '-title-')
                  .concat(y || Oa()))
              : ((p['aria-hidden'] = 'true'), (p.focusable = 'false'))),
          xh({
            icons: {
              main: Zf(R),
              mask: l
                ? Zf(l.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: S,
            iconName: T,
            transform: M(M({}, an), i),
            symbol: a,
            title: d,
            maskId: c,
            titleId: y,
            extra: { attributes: p, styles: k, classes: P },
          })
        );
      });
    }
  },
  VS = {
    mixout: function () {
      return { icon: zS(US) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = Rm), (n.nodeCallback = FS), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? pe : r,
          s = n.callback,
          a = s === void 0 ? function () {} : s;
        return Rm(i, a);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            s = r.title,
            a = r.titleId,
            o = r.prefix,
            l = r.transform,
            u = r.symbol,
            c = r.mask,
            f = r.maskId,
            d = r.extra;
          return new Promise(function (m, y) {
            Promise.all([
              ed(i, o),
              c.iconName
                ? ed(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (b) {
                var P = hh(b, 2),
                  v = P[0],
                  p = P[1];
                m([
                  n,
                  xh({
                    icons: { main: v, mask: p },
                    prefix: o,
                    iconName: i,
                    transform: l,
                    symbol: u,
                    maskId: f,
                    title: s,
                    titleId: a,
                    extra: d,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(y);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            s = n.main,
            a = n.transform,
            o = n.styles,
            l = mu(o);
          l.length > 0 && (i.style = l);
          var u;
          return (
            wh(a) &&
              (u = Pn('generateAbstractTransformGrouping', {
                main: s,
                transform: a,
                containerWidth: s.width,
                iconWidth: s.width,
              })),
            r.push(u || s.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  HS = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            s = i === void 0 ? [] : i;
          return yu({ type: 'layer' }, function () {
            Zr('beforeDOMElementCreation', { assembler: n, params: r });
            var a = [];
            return (
              n(function (o) {
                Array.isArray(o)
                  ? o.map(function (l) {
                      a = a.concat(l.abstract);
                    })
                  : (a = a.concat(o.abstract));
              }),
              [
                {
                  tag: 'span',
                  attributes: {
                    class: [''.concat(z.cssPrefix, '-layers')]
                      .concat(Xa(s))
                      .join(' '),
                  },
                  children: a,
                },
              ]
            );
          });
        },
      };
    },
  },
  BS = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            s = i === void 0 ? null : i,
            a = r.classes,
            o = a === void 0 ? [] : a,
            l = r.attributes,
            u = l === void 0 ? {} : l,
            c = r.styles,
            f = c === void 0 ? {} : c;
          return yu({ type: 'counter', content: n }, function () {
            return (
              Zr('beforeDOMElementCreation', { content: n, params: r }),
              xS({
                content: n.toString(),
                title: s,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: [''.concat(z.cssPrefix, '-layers-counter')].concat(
                    Xa(o)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  WS = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            s = i === void 0 ? an : i,
            a = r.title,
            o = a === void 0 ? null : a,
            l = r.classes,
            u = l === void 0 ? [] : l,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            d = r.styles,
            m = d === void 0 ? {} : d;
          return yu({ type: 'text', content: n }, function () {
            return (
              Zr('beforeDOMElementCreation', { content: n, params: r }),
              Cm({
                content: n,
                transform: M(M({}, an), s),
                title: o,
                extra: {
                  attributes: f,
                  styles: m,
                  classes: [''.concat(z.cssPrefix, '-layers-text')].concat(
                    Xa(u)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          s = r.transform,
          a = r.extra,
          o = null,
          l = null;
        if (_0) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (o = c.width / u), (l = c.height / u);
        }
        return (
          z.autoA11y && !i && (a.attributes['aria-hidden'] = 'true'),
          Promise.resolve([
            n,
            Cm({
              content: n.innerHTML,
              width: o,
              height: l,
              transform: s,
              title: i,
              extra: a,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  qS = new RegExp('"', 'ug'),
  Nm = [1105920, 1112319];
function QS(e) {
  var t = e.replace(qS, ''),
    n = aS(t, 0),
    r = n >= Nm[0] && n <= Nm[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: Kf(i ? t[0] : t), isSecondary: r || i };
}
function Lm(e, t) {
  var n = ''.concat(Dx).concat(t.replace(':', '-'));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var s = _s(e.children),
      a = s.filter(function (R) {
        return R.getAttribute(Yf) === t;
      })[0],
      o = mr.getComputedStyle(e, t),
      l = o.getPropertyValue('font-family').match(zx),
      u = o.getPropertyValue('font-weight'),
      c = o.getPropertyValue('content');
    if (a && !l) return e.removeChild(a), r();
    if (l && c !== 'none' && c !== '') {
      var f = o.getPropertyValue('content'),
        d = ~['Sharp'].indexOf(l[2]) ? ke : de,
        m = ~[
          'Solid',
          'Regular',
          'Light',
          'Thin',
          'Duotone',
          'Brands',
          'Kit',
        ].indexOf(l[2])
          ? Ea[d][l[2].toLowerCase()]
          : Ux[d][u],
        y = QS(f),
        b = y.value,
        P = y.isSecondary,
        v = l[0].startsWith('FontAwesome'),
        p = bh(m, b),
        g = p;
      if (v) {
        var k = hS(b);
        k.iconName && k.prefix && ((p = k.iconName), (m = k.prefix));
      }
      if (
        p &&
        !P &&
        (!a || a.getAttribute(mh) !== m || a.getAttribute(vh) !== g)
      ) {
        e.setAttribute(n, g), a && e.removeChild(a);
        var S = MS(),
          T = S.extra;
        (T.attributes[Yf] = t),
          ed(p, m)
            .then(function (R) {
              var O = xh(
                  M(
                    M({}, S),
                    {},
                    {
                      icons: { main: R, mask: kh() },
                      prefix: m,
                      iconName: g,
                      extra: T,
                      watchable: !0,
                    }
                  )
                ),
                B = pe.createElementNS('http://www.w3.org/2000/svg', 'svg');
              t === '::before'
                ? e.insertBefore(B, e.firstChild)
                : e.appendChild(B),
                (B.outerHTML = O.map(function (V) {
                  return Za(V);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function YS(e) {
  return Promise.all([Lm(e, '::before'), Lm(e, '::after')]);
}
function KS(e) {
  return (
    e.parentNode !== document.head &&
    !~Mx.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Yf) &&
    (!e.parentNode || e.parentNode.tagName !== 'svg')
  );
}
function Dm(e) {
  if (Tn)
    return new Promise(function (t, n) {
      var r = _s(e.querySelectorAll('*')).filter(KS).map(YS),
        i = Sh.begin('searchPseudoElements');
      U0(),
        Promise.all(r)
          .then(function () {
            i(), nd(), t();
          })
          .catch(function () {
            i(), nd(), n();
          });
    });
}
var GS = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = Dm), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? pe : r;
        z.searchPseudoElements && Dm(i);
      };
    },
  },
  Im = !1,
  XS = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            U0(), (Im = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Tm(Xf('mutationObserverCallbacks', {}));
        },
        noAuto: function () {
          NS();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          Im
            ? nd()
            : Tm(Xf('mutationObserverCallbacks', { observeMutationsRoot: r }));
        },
      };
    },
  },
  Mm = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(' ')
      .reduce(function (r, i) {
        var s = i.toLowerCase().split('-'),
          a = s[0],
          o = s.slice(1).join('-');
        if (a && o === 'h') return (r.flipX = !0), r;
        if (a && o === 'v') return (r.flipY = !0), r;
        if (((o = parseFloat(o)), isNaN(o))) return r;
        switch (a) {
          case 'grow':
            r.size = r.size + o;
            break;
          case 'shrink':
            r.size = r.size - o;
            break;
          case 'left':
            r.x = r.x - o;
            break;
          case 'right':
            r.x = r.x + o;
            break;
          case 'up':
            r.y = r.y - o;
            break;
          case 'down':
            r.y = r.y + o;
            break;
          case 'rotate':
            r.rotate = r.rotate + o;
            break;
        }
        return r;
      }, n);
  },
  JS = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return Mm(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-transform');
          return i && (n.transform = Mm(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          s = n.containerWidth,
          a = n.iconWidth,
          o = { transform: 'translate('.concat(s / 2, ' 256)') },
          l = 'translate('.concat(i.x * 32, ', ').concat(i.y * 32, ') '),
          u = 'scale('
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ', ')
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ') '),
          c = 'rotate('.concat(i.rotate, ' 0 0)'),
          f = { transform: ''.concat(l, ' ').concat(u, ' ').concat(c) },
          d = { transform: 'translate('.concat((a / 2) * -1, ' -256)') },
          m = { outer: o, inner: f, path: d };
        return {
          tag: 'g',
          attributes: M({}, m.outer),
          children: [
            {
              tag: 'g',
              attributes: M({}, m.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: M(M({}, r.icon.attributes), m.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  lc = { x: 0, y: 0, width: '100%', height: '100%' };
function $m(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = 'black'), e
  );
}
function ZS(e) {
  return e.tag === 'g' ? e.children : [e];
}
var e4 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-mask'),
            s = i
              ? gu(
                  i.split(' ').map(function (a) {
                    return a.trim();
                  })
                )
              : kh();
          return (
            s.prefix || (s.prefix = vr()),
            (n.mask = s),
            (n.maskId = r.getAttribute('data-fa-mask-id')),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          s = n.main,
          a = n.mask,
          o = n.maskId,
          l = n.transform,
          u = s.width,
          c = s.icon,
          f = a.width,
          d = a.icon,
          m = Jx({ transform: l, containerWidth: f, iconWidth: u }),
          y = { tag: 'rect', attributes: M(M({}, lc), {}, { fill: 'white' }) },
          b = c.children ? { children: c.children.map($m) } : {},
          P = {
            tag: 'g',
            attributes: M({}, m.inner),
            children: [
              $m(
                M({ tag: c.tag, attributes: M(M({}, c.attributes), m.path) }, b)
              ),
            ],
          },
          v = { tag: 'g', attributes: M({}, m.outer), children: [P] },
          p = 'mask-'.concat(o || Oa()),
          g = 'clip-'.concat(o || Oa()),
          k = {
            tag: 'mask',
            attributes: M(
              M({}, lc),
              {},
              {
                id: p,
                maskUnits: 'userSpaceOnUse',
                maskContentUnits: 'userSpaceOnUse',
              }
            ),
            children: [y, v],
          },
          S = {
            tag: 'defs',
            children: [
              { tag: 'clipPath', attributes: { id: g }, children: ZS(d) },
              k,
            ],
          };
        return (
          r.push(S, {
            tag: 'rect',
            attributes: M(
              {
                fill: 'currentColor',
                'clip-path': 'url(#'.concat(g, ')'),
                mask: 'url(#'.concat(p, ')'),
              },
              lc
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  t4 = {
    provides: function (t) {
      var n = !1;
      mr.matchMedia &&
        (n = mr.matchMedia('(prefers-reduced-motion: reduce)').matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: 'currentColor' },
            s = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' };
          r.push({
            tag: 'path',
            attributes: M(
              M({}, i),
              {},
              {
                d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z',
              }
            ),
          });
          var a = M(M({}, s), {}, { attributeName: 'opacity' }),
            o = {
              tag: 'circle',
              attributes: M(M({}, i), {}, { cx: '256', cy: '364', r: '28' }),
              children: [],
            };
          return (
            n ||
              o.children.push(
                {
                  tag: 'animate',
                  attributes: M(
                    M({}, s),
                    {},
                    { attributeName: 'r', values: '28;14;28;28;14;28;' }
                  ),
                },
                {
                  tag: 'animate',
                  attributes: M(M({}, a), {}, { values: '1;0;1;1;0;1;' }),
                }
              ),
            r.push(o),
            r.push({
              tag: 'path',
              attributes: M(
                M({}, i),
                {},
                {
                  opacity: '1',
                  d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z',
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: 'animate',
                      attributes: M(M({}, a), {}, { values: '1;0;0;0;0;1;' }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: 'path',
                attributes: M(
                  M({}, i),
                  {},
                  {
                    opacity: '0',
                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z',
                  }
                ),
                children: [
                  {
                    tag: 'animate',
                    attributes: M(M({}, a), {}, { values: '0;0;1;1;0;0;' }),
                  },
                ],
              }),
            { tag: 'g', attributes: { class: 'missing' }, children: r }
          );
        });
    },
  },
  n4 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute('data-fa-symbol'),
            s = i === null ? !1 : i === '' ? !0 : i;
          return (n.symbol = s), n;
        },
      };
    },
  },
  r4 = [tS, VS, HS, BS, WS, GS, XS, JS, e4, t4, n4];
vS(r4, { mixoutsTo: xt });
xt.noAuto;
xt.config;
xt.library;
xt.dom;
var rd = xt.parse;
xt.findIconDefinition;
xt.toHtml;
var i4 = xt.icon;
xt.layer;
xt.text;
xt.counter;
var H0 = { exports: {} },
  s4 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  a4 = s4,
  o4 = a4;
function B0() {}
function W0() {}
W0.resetWarningCache = B0;
var l4 = function () {
  function e(r, i, s, a, o, l) {
    if (l !== o4) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((u.name = 'Invariant Violation'), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: W0,
    resetWarningCache: B0,
  };
  return (n.PropTypes = n), n;
};
H0.exports = l4();
var u4 = H0.exports;
const G = Tv(u4);
function Fm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fm(Object(n), !0).forEach(function (r) {
          Ai(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Fm(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function zl(e) {
  '@babel/helpers - typeof';
  return (
    (zl =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    zl(e)
  );
}
function Ai(e, t, n) {
  return (
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
function c4(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function f4(e, t) {
  if (e == null) return {};
  var n = c4(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function id(e) {
  return d4(e) || h4(e) || p4(e) || m4();
}
function d4(e) {
  if (Array.isArray(e)) return sd(e);
}
function h4(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function p4(e, t) {
  if (e) {
    if (typeof e == 'string') return sd(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return sd(e, t);
  }
}
function sd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function m4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function v4(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    s = e.bounce,
    a = e.shake,
    o = e.flash,
    l = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    f = e.pulse,
    d = e.fixedWidth,
    m = e.inverse,
    y = e.border,
    b = e.listItem,
    P = e.flip,
    v = e.size,
    p = e.rotation,
    g = e.pull,
    k =
      ((t = {
        'fa-beat': n,
        'fa-fade': r,
        'fa-beat-fade': i,
        'fa-bounce': s,
        'fa-shake': a,
        'fa-flash': o,
        'fa-spin': l,
        'fa-spin-reverse': c,
        'fa-spin-pulse': u,
        'fa-pulse': f,
        'fa-fw': d,
        'fa-inverse': m,
        'fa-border': y,
        'fa-li': b,
        'fa-flip': P === !0,
        'fa-flip-horizontal': P === 'horizontal' || P === 'both',
        'fa-flip-vertical': P === 'vertical' || P === 'both',
      }),
      Ai(t, 'fa-'.concat(v), typeof v < 'u' && v !== null),
      Ai(t, 'fa-rotate-'.concat(p), typeof p < 'u' && p !== null && p !== 0),
      Ai(t, 'fa-pull-'.concat(g), typeof g < 'u' && g !== null),
      Ai(t, 'fa-swap-opacity', e.swapOpacity),
      t);
  return Object.keys(k)
    .map(function (S) {
      return k[S] ? S : null;
    })
    .filter(function (S) {
      return S;
    });
}
function g4(e) {
  return (e = e - 0), e === e;
}
function q0(e) {
  return g4(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : '';
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var y4 = ['style'];
function w4(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function _4(e) {
  return e
    .split(';')
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(':'),
        i = q0(n.slice(0, r)),
        s = n.slice(r + 1).trim();
      return i.startsWith('webkit') ? (t[w4(i)] = s) : (t[i] = s), t;
    }, {});
}
function Q0(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == 'string') return t;
  var r = (t.children || []).map(function (l) {
      return Q0(e, l);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (l, u) {
        var c = t.attributes[u];
        switch (u) {
          case 'class':
            (l.attrs.className = c), delete t.attributes.class;
            break;
          case 'style':
            l.attrs.style = _4(c);
            break;
          default:
            u.indexOf('aria-') === 0 || u.indexOf('data-') === 0
              ? (l.attrs[u.toLowerCase()] = c)
              : (l.attrs[q0(u)] = c);
        }
        return l;
      },
      { attrs: {} }
    ),
    s = n.style,
    a = s === void 0 ? {} : s,
    o = f4(n, y4);
  return (
    (i.attrs.style = nr(nr({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, nr(nr({}, i.attrs), o)].concat(id(r)))
  );
}
var Y0 = !1;
try {
  Y0 = !0;
} catch {}
function b4() {
  if (!Y0 && console && typeof console.error == 'function') {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function zm(e) {
  if (e && zl(e) === 'object' && e.prefix && e.iconName && e.icon) return e;
  if (rd.icon) return rd.icon(e);
  if (e === null) return null;
  if (e && zl(e) === 'object' && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == 'string') return { prefix: 'fas', iconName: e };
}
function uc(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Ai({}, e, t)
    : {};
}
var ae = Ye.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    s = e.className,
    a = e.title,
    o = e.titleId,
    l = e.maskId,
    u = zm(n),
    c = uc('classes', [].concat(id(v4(e)), id(s.split(' ')))),
    f = uc(
      'transform',
      typeof e.transform == 'string' ? rd.transform(e.transform) : e.transform
    ),
    d = uc('mask', zm(r)),
    m = i4(
      u,
      nr(
        nr(nr(nr({}, c), f), d),
        {},
        { symbol: i, title: a, titleId: o, maskId: l }
      )
    );
  if (!m) return b4('Could not find icon', u), null;
  var y = m.abstract,
    b = { ref: t };
  return (
    Object.keys(e).forEach(function (P) {
      ae.defaultProps.hasOwnProperty(P) || (b[P] = e[P]);
    }),
    k4(y[0], b)
  );
});
ae.displayName = 'FontAwesomeIcon';
ae.propTypes = {
  beat: G.bool,
  border: G.bool,
  beatFade: G.bool,
  bounce: G.bool,
  className: G.string,
  fade: G.bool,
  flash: G.bool,
  mask: G.oneOfType([G.object, G.array, G.string]),
  maskId: G.string,
  fixedWidth: G.bool,
  inverse: G.bool,
  flip: G.oneOf([!0, !1, 'horizontal', 'vertical', 'both']),
  icon: G.oneOfType([G.object, G.array, G.string]),
  listItem: G.bool,
  pull: G.oneOf(['right', 'left']),
  pulse: G.bool,
  rotation: G.oneOf([0, 90, 180, 270]),
  shake: G.bool,
  size: G.oneOf([
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ]),
  spin: G.bool,
  spinPulse: G.bool,
  spinReverse: G.bool,
  symbol: G.oneOfType([G.bool, G.string]),
  title: G.string,
  titleId: G.string,
  transform: G.oneOfType([G.string, G.object]),
  swapOpacity: G.bool,
};
ae.defaultProps = {
  border: !1,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var k4 = Q0.bind(null, Ye.createElement);
function x4({ styles: e }) {
  return h.jsx('nav', {
    className: e.tickets,
    children: h.jsxs('ul', {
      children: [
        h.jsx('li', {
          className: 'active',
          children: h.jsxs(ci, {
            to: '/',
            children: [
              h.jsx(ae, { icon: lx }),
              h.jsx('span', { children: 'Dasboard' }),
            ],
          }),
        }),
        h.jsx('li', {
          className: '',
          children: h.jsxs(ci, {
            to: '/incidents',
            children: [
              h.jsx(ae, { icon: m0 }),
              h.jsx('span', { children: 'Incidents' }),
            ],
          }),
        }),
        h.jsx('li', {
          children: h.jsxs(ci, {
            to: '/requests',
            children: [
              h.jsx(ae, { icon: Ex }),
              h.jsx('span', { children: 'Service requests' }),
            ],
          }),
        }),
        h.jsx('li', {
          children: h.jsxs(ci, {
            to: '/changes',
            children: [
              h.jsx(ae, { icon: xx }),
              h.jsx('span', { children: 'Change requests' }),
            ],
          }),
        }),
        h.jsx('li', {
          children: h.jsxs(ci, {
            to: '/users',
            children: [
              h.jsx(ae, { icon: nx }),
              h.jsx('span', { children: 'Users' }),
            ],
          }),
        }),
        h.jsx('li', {
          children: h.jsxs(ci, {
            to: '/settings',
            children: [
              h.jsx(ae, { icon: cx }),
              h.jsx('span', { children: 'Settings' }),
            ],
          }),
        }),
      ],
    }),
  });
}
function S4() {
  return h.jsxs('aside', {
    className: hm.sidebar,
    children: [h.jsx(Xk, {}), h.jsx(x4, { styles: hm })],
  });
}
const E4 = '_message_1fkj1_1',
  C4 = { message: E4 };
function P4() {
  return h.jsxs('div', {
    className: C4.message,
    children: [
      h.jsx('p', { children: 'Welcome,' }),
      h.jsx('p', { children: 'John Doe' }),
    ],
  });
}
const O4 = '_header_49rbp_1',
  j4 = '_actions_49rbp_21',
  T4 = '_notification_49rbp_37',
  A4 = '_numMessages_49rbp_45',
  vi = { header: O4, actions: j4, notification: T4, numMessages: A4 },
  R4 = '_form_tlloz_1',
  N4 = { form: R4 };
function L4() {
  return h.jsxs('form', {
    className: N4.form,
    children: [
      h.jsx('input', {
        type: 'text',
        placeholder: 'Search for a ticket',
        autoFocus: !0,
      }),
      h.jsx(ae, { icon: vx }),
    ],
  });
}
function D4() {
  return h.jsxs('header', {
    className: vi.header,
    children: [h.jsx(P4, {}), h.jsx(L4, {}), h.jsx(I4, {})],
  });
}
function I4() {
  return h.jsxs('div', {
    className: vi.actions,
    children: [
      h.jsx(Ka, {
        to: 'users',
        className: vi.gearIcon,
        children: h.jsx(ae, { icon: ux }),
      }),
      h.jsxs('span', {
        className: vi.notification,
        children: [
          h.jsx(ae, { icon: hx }),
          h.jsx('span', { className: vi.numMessages, children: '1' }),
        ],
      }),
      h.jsx('span', {
        className: vi.darkIcon,
        children: h.jsx(ae, { icon: dx }),
      }),
    ],
  });
}
function M4() {
  return h.jsxs('div', {
    className: `${Yk.container} `,
    children: [
      h.jsx(S4, {}),
      h.jsxs('main', { children: [h.jsx(D4, {}), h.jsx(du, {})] }),
    ],
  });
}
const $4 = (e) => {
  let t;
  return (
    e
      ? (t = e)
      : typeof fetch > 'u'
        ? (t = (...n) =>
            cs(() => Promise.resolve().then(() => bs), void 0).then(
              ({ default: r }) => r(...n)
            ))
        : (t = fetch),
    (...n) => t(...n)
  );
};
class Ch extends Error {
  constructor(t, n = 'FunctionsError', r) {
    super(t), (this.name = n), (this.context = r);
  }
}
class F4 extends Ch {
  constructor(t) {
    super(
      'Failed to send a request to the Edge Function',
      'FunctionsFetchError',
      t
    );
  }
}
class z4 extends Ch {
  constructor(t) {
    super('Relay Error invoking the Edge Function', 'FunctionsRelayError', t);
  }
}
class U4 extends Ch {
  constructor(t) {
    super(
      'Edge Function returned a non-2xx status code',
      'FunctionsHttpError',
      t
    );
  }
}
var ad;
(function (e) {
  (e.Any = 'any'),
    (e.ApNortheast1 = 'ap-northeast-1'),
    (e.ApNortheast2 = 'ap-northeast-2'),
    (e.ApSouth1 = 'ap-south-1'),
    (e.ApSoutheast1 = 'ap-southeast-1'),
    (e.ApSoutheast2 = 'ap-southeast-2'),
    (e.CaCentral1 = 'ca-central-1'),
    (e.EuCentral1 = 'eu-central-1'),
    (e.EuWest1 = 'eu-west-1'),
    (e.EuWest2 = 'eu-west-2'),
    (e.EuWest3 = 'eu-west-3'),
    (e.SaEast1 = 'sa-east-1'),
    (e.UsEast1 = 'us-east-1'),
    (e.UsWest1 = 'us-west-1'),
    (e.UsWest2 = 'us-west-2');
})(ad || (ad = {}));
var V4 = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (a) {
          a(s);
        });
  }
  return new (n || (n = Promise))(function (s, a) {
    function o(c) {
      try {
        u(r.next(c));
      } catch (f) {
        a(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(o, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class H4 {
  constructor(t, { headers: n = {}, customFetch: r, region: i = ad.Any } = {}) {
    (this.url = t), (this.headers = n), (this.region = i), (this.fetch = $4(r));
  }
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  invoke(t, n = {}) {
    var r;
    return V4(this, void 0, void 0, function* () {
      try {
        const { headers: i, method: s, body: a } = n;
        let o = {},
          { region: l } = n;
        l || (l = this.region), l && l !== 'any' && (o['x-region'] = l);
        let u;
        a &&
          ((i && !Object.prototype.hasOwnProperty.call(i, 'Content-Type')) ||
            !i) &&
          ((typeof Blob < 'u' && a instanceof Blob) || a instanceof ArrayBuffer
            ? ((o['Content-Type'] = 'application/octet-stream'), (u = a))
            : typeof a == 'string'
              ? ((o['Content-Type'] = 'text/plain'), (u = a))
              : typeof FormData < 'u' && a instanceof FormData
                ? (u = a)
                : ((o['Content-Type'] = 'application/json'),
                  (u = JSON.stringify(a))));
        const c = yield this.fetch(`${this.url}/${t}`, {
            method: s || 'POST',
            headers: Object.assign(
              Object.assign(Object.assign({}, o), this.headers),
              i
            ),
            body: u,
          }).catch((y) => {
            throw new F4(y);
          }),
          f = c.headers.get('x-relay-error');
        if (f && f === 'true') throw new z4(c);
        if (!c.ok) throw new U4(c);
        let d = (
            (r = c.headers.get('Content-Type')) !== null && r !== void 0
              ? r
              : 'text/plain'
          )
            .split(';')[0]
            .trim(),
          m;
        return (
          d === 'application/json'
            ? (m = yield c.json())
            : d === 'application/octet-stream'
              ? (m = yield c.blob())
              : d === 'text/event-stream'
                ? (m = c)
                : d === 'multipart/form-data'
                  ? (m = yield c.formData())
                  : (m = yield c.text()),
          { data: m, error: null }
        );
      } catch (i) {
        return { data: null, error: i };
      }
    });
  }
}
var At = {},
  Ph = {},
  wu = {},
  eo = {},
  _u = {},
  bu = {},
  B4 = function () {
    if (typeof self < 'u') return self;
    if (typeof window < 'u') return window;
    if (typeof globalThis < 'u') return globalThis;
    throw new Error('unable to locate global object');
  },
  hs = B4();
const W4 = hs.fetch,
  K0 = hs.fetch.bind(hs),
  G0 = hs.Headers,
  q4 = hs.Request,
  Q4 = hs.Response,
  bs = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Headers: G0,
        Request: q4,
        Response: Q4,
        default: K0,
        fetch: W4,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  Y4 = W1(bs);
var Oh = {};
Object.defineProperty(Oh, '__esModule', { value: !0 });
class K4 extends Error {
  constructor(t) {
    super(t.message),
      (this.name = 'PostgrestError'),
      (this.details = t.details),
      (this.hint = t.hint),
      (this.code = t.code);
  }
}
Oh.default = K4;
var X0 =
  (Lt && Lt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(bu, '__esModule', { value: !0 });
const G4 = X0(Y4),
  X4 = X0(Oh);
let J4 = class {
  constructor(t) {
    (this.shouldThrowOnError = !1),
      (this.method = t.method),
      (this.url = t.url),
      (this.headers = t.headers),
      (this.schema = t.schema),
      (this.body = t.body),
      (this.shouldThrowOnError = t.shouldThrowOnError),
      (this.signal = t.signal),
      (this.isMaybeSingle = t.isMaybeSingle),
      t.fetch
        ? (this.fetch = t.fetch)
        : typeof fetch > 'u'
          ? (this.fetch = G4.default)
          : (this.fetch = fetch);
  }
  throwOnError() {
    return (this.shouldThrowOnError = !0), this;
  }
  then(t, n) {
    this.schema === void 0 ||
      (['GET', 'HEAD'].includes(this.method)
        ? (this.headers['Accept-Profile'] = this.schema)
        : (this.headers['Content-Profile'] = this.schema)),
      this.method !== 'GET' &&
        this.method !== 'HEAD' &&
        (this.headers['Content-Type'] = 'application/json');
    const r = this.fetch;
    let i = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal,
    }).then(async (s) => {
      var a, o, l;
      let u = null,
        c = null,
        f = null,
        d = s.status,
        m = s.statusText;
      if (s.ok) {
        if (this.method !== 'HEAD') {
          const v = await s.text();
          v === '' ||
            (this.headers.Accept === 'text/csv' ||
            (this.headers.Accept &&
              this.headers.Accept.includes('application/vnd.pgrst.plan+text'))
              ? (c = v)
              : (c = JSON.parse(v)));
        }
        const b =
            (a = this.headers.Prefer) === null || a === void 0
              ? void 0
              : a.match(/count=(exact|planned|estimated)/),
          P =
            (o = s.headers.get('content-range')) === null || o === void 0
              ? void 0
              : o.split('/');
        b && P && P.length > 1 && (f = parseInt(P[1])),
          this.isMaybeSingle &&
            this.method === 'GET' &&
            Array.isArray(c) &&
            (c.length > 1
              ? ((u = {
                  code: 'PGRST116',
                  details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                  hint: null,
                  message:
                    'JSON object requested, multiple (or no) rows returned',
                }),
                (c = null),
                (f = null),
                (d = 406),
                (m = 'Not Acceptable'))
              : c.length === 1
                ? (c = c[0])
                : (c = null));
      } else {
        const b = await s.text();
        try {
          (u = JSON.parse(b)),
            Array.isArray(u) &&
              s.status === 404 &&
              ((c = []), (u = null), (d = 200), (m = 'OK'));
        } catch {
          s.status === 404 && b === ''
            ? ((d = 204), (m = 'No Content'))
            : (u = { message: b });
        }
        if (
          (u &&
            this.isMaybeSingle &&
            !((l = u == null ? void 0 : u.details) === null || l === void 0) &&
            l.includes('0 rows') &&
            ((u = null), (d = 200), (m = 'OK')),
          u && this.shouldThrowOnError)
        )
          throw new X4.default(u);
      }
      return { error: u, data: c, count: f, status: d, statusText: m };
    });
    return (
      this.shouldThrowOnError ||
        (i = i.catch((s) => {
          var a, o, l;
          return {
            error: {
              message: `${(a = s == null ? void 0 : s.name) !== null && a !== void 0 ? a : 'FetchError'}: ${s == null ? void 0 : s.message}`,
              details: `${(o = s == null ? void 0 : s.stack) !== null && o !== void 0 ? o : ''}`,
              hint: '',
              code: `${(l = s == null ? void 0 : s.code) !== null && l !== void 0 ? l : ''}`,
            },
            data: null,
            count: null,
            status: 0,
            statusText: '',
          };
        })),
      i.then(t, n)
    );
  }
};
bu.default = J4;
var Z4 =
  (Lt && Lt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(_u, '__esModule', { value: !0 });
const e3 = Z4(bu);
let t3 = class extends e3.default {
  select(t) {
    let n = !1;
    const r = (t ?? '*')
      .split('')
      .map((i) => (/\s/.test(i) && !n ? '' : (i === '"' && (n = !n), i)))
      .join('');
    return (
      this.url.searchParams.set('select', r),
      this.headers.Prefer && (this.headers.Prefer += ','),
      (this.headers.Prefer += 'return=representation'),
      this
    );
  }
  order(
    t,
    {
      ascending: n = !0,
      nullsFirst: r,
      foreignTable: i,
      referencedTable: s = i,
    } = {}
  ) {
    const a = s ? `${s}.order` : 'order',
      o = this.url.searchParams.get(a);
    return (
      this.url.searchParams.set(
        a,
        `${o ? `${o},` : ''}${t}.${n ? 'asc' : 'desc'}${r === void 0 ? '' : r ? '.nullsfirst' : '.nullslast'}`
      ),
      this
    );
  }
  limit(t, { foreignTable: n, referencedTable: r = n } = {}) {
    const i = typeof r > 'u' ? 'limit' : `${r}.limit`;
    return this.url.searchParams.set(i, `${t}`), this;
  }
  range(t, n, { foreignTable: r, referencedTable: i = r } = {}) {
    const s = typeof i > 'u' ? 'offset' : `${i}.offset`,
      a = typeof i > 'u' ? 'limit' : `${i}.limit`;
    return (
      this.url.searchParams.set(s, `${t}`),
      this.url.searchParams.set(a, `${n - t + 1}`),
      this
    );
  }
  abortSignal(t) {
    return (this.signal = t), this;
  }
  single() {
    return (this.headers.Accept = 'application/vnd.pgrst.object+json'), this;
  }
  maybeSingle() {
    return (
      this.method === 'GET'
        ? (this.headers.Accept = 'application/json')
        : (this.headers.Accept = 'application/vnd.pgrst.object+json'),
      (this.isMaybeSingle = !0),
      this
    );
  }
  csv() {
    return (this.headers.Accept = 'text/csv'), this;
  }
  geojson() {
    return (this.headers.Accept = 'application/geo+json'), this;
  }
  explain({
    analyze: t = !1,
    verbose: n = !1,
    settings: r = !1,
    buffers: i = !1,
    wal: s = !1,
    format: a = 'text',
  } = {}) {
    var o;
    const l = [
        t ? 'analyze' : null,
        n ? 'verbose' : null,
        r ? 'settings' : null,
        i ? 'buffers' : null,
        s ? 'wal' : null,
      ]
        .filter(Boolean)
        .join('|'),
      u =
        (o = this.headers.Accept) !== null && o !== void 0
          ? o
          : 'application/json';
    return (
      (this.headers.Accept = `application/vnd.pgrst.plan+${a}; for="${u}"; options=${l};`),
      a === 'json' ? this : this
    );
  }
  rollback() {
    var t;
    return (
      ((t = this.headers.Prefer) !== null && t !== void 0 ? t : '').trim()
        .length > 0
        ? (this.headers.Prefer += ',tx=rollback')
        : (this.headers.Prefer = 'tx=rollback'),
      this
    );
  }
  returns() {
    return this;
  }
};
_u.default = t3;
var n3 =
  (Lt && Lt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(eo, '__esModule', { value: !0 });
const r3 = n3(_u);
let i3 = class extends r3.default {
  eq(t, n) {
    return this.url.searchParams.append(t, `eq.${n}`), this;
  }
  neq(t, n) {
    return this.url.searchParams.append(t, `neq.${n}`), this;
  }
  gt(t, n) {
    return this.url.searchParams.append(t, `gt.${n}`), this;
  }
  gte(t, n) {
    return this.url.searchParams.append(t, `gte.${n}`), this;
  }
  lt(t, n) {
    return this.url.searchParams.append(t, `lt.${n}`), this;
  }
  lte(t, n) {
    return this.url.searchParams.append(t, `lte.${n}`), this;
  }
  like(t, n) {
    return this.url.searchParams.append(t, `like.${n}`), this;
  }
  likeAllOf(t, n) {
    return this.url.searchParams.append(t, `like(all).{${n.join(',')}}`), this;
  }
  likeAnyOf(t, n) {
    return this.url.searchParams.append(t, `like(any).{${n.join(',')}}`), this;
  }
  ilike(t, n) {
    return this.url.searchParams.append(t, `ilike.${n}`), this;
  }
  ilikeAllOf(t, n) {
    return this.url.searchParams.append(t, `ilike(all).{${n.join(',')}}`), this;
  }
  ilikeAnyOf(t, n) {
    return this.url.searchParams.append(t, `ilike(any).{${n.join(',')}}`), this;
  }
  is(t, n) {
    return this.url.searchParams.append(t, `is.${n}`), this;
  }
  in(t, n) {
    const r = Array.from(new Set(n))
      .map((i) =>
        typeof i == 'string' && new RegExp('[,()]').test(i) ? `"${i}"` : `${i}`
      )
      .join(',');
    return this.url.searchParams.append(t, `in.(${r})`), this;
  }
  contains(t, n) {
    return (
      typeof n == 'string'
        ? this.url.searchParams.append(t, `cs.${n}`)
        : Array.isArray(n)
          ? this.url.searchParams.append(t, `cs.{${n.join(',')}}`)
          : this.url.searchParams.append(t, `cs.${JSON.stringify(n)}`),
      this
    );
  }
  containedBy(t, n) {
    return (
      typeof n == 'string'
        ? this.url.searchParams.append(t, `cd.${n}`)
        : Array.isArray(n)
          ? this.url.searchParams.append(t, `cd.{${n.join(',')}}`)
          : this.url.searchParams.append(t, `cd.${JSON.stringify(n)}`),
      this
    );
  }
  rangeGt(t, n) {
    return this.url.searchParams.append(t, `sr.${n}`), this;
  }
  rangeGte(t, n) {
    return this.url.searchParams.append(t, `nxl.${n}`), this;
  }
  rangeLt(t, n) {
    return this.url.searchParams.append(t, `sl.${n}`), this;
  }
  rangeLte(t, n) {
    return this.url.searchParams.append(t, `nxr.${n}`), this;
  }
  rangeAdjacent(t, n) {
    return this.url.searchParams.append(t, `adj.${n}`), this;
  }
  overlaps(t, n) {
    return (
      typeof n == 'string'
        ? this.url.searchParams.append(t, `ov.${n}`)
        : this.url.searchParams.append(t, `ov.{${n.join(',')}}`),
      this
    );
  }
  textSearch(t, n, { config: r, type: i } = {}) {
    let s = '';
    i === 'plain'
      ? (s = 'pl')
      : i === 'phrase'
        ? (s = 'ph')
        : i === 'websearch' && (s = 'w');
    const a = r === void 0 ? '' : `(${r})`;
    return this.url.searchParams.append(t, `${s}fts${a}.${n}`), this;
  }
  match(t) {
    return (
      Object.entries(t).forEach(([n, r]) => {
        this.url.searchParams.append(n, `eq.${r}`);
      }),
      this
    );
  }
  not(t, n, r) {
    return this.url.searchParams.append(t, `not.${n}.${r}`), this;
  }
  or(t, { foreignTable: n, referencedTable: r = n } = {}) {
    const i = r ? `${r}.or` : 'or';
    return this.url.searchParams.append(i, `(${t})`), this;
  }
  filter(t, n, r) {
    return this.url.searchParams.append(t, `${n}.${r}`), this;
  }
};
eo.default = i3;
var s3 =
  (Lt && Lt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(wu, '__esModule', { value: !0 });
const Ns = s3(eo);
let a3 = class {
  constructor(t, { headers: n = {}, schema: r, fetch: i }) {
    (this.url = t), (this.headers = n), (this.schema = r), (this.fetch = i);
  }
  select(t, { head: n = !1, count: r } = {}) {
    const i = n ? 'HEAD' : 'GET';
    let s = !1;
    const a = (t ?? '*')
      .split('')
      .map((o) => (/\s/.test(o) && !s ? '' : (o === '"' && (s = !s), o)))
      .join('');
    return (
      this.url.searchParams.set('select', a),
      r && (this.headers.Prefer = `count=${r}`),
      new Ns.default({
        method: i,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  insert(t, { count: n, defaultToNull: r = !0 } = {}) {
    const i = 'POST',
      s = [];
    if (
      (this.headers.Prefer && s.push(this.headers.Prefer),
      n && s.push(`count=${n}`),
      r || s.push('missing=default'),
      (this.headers.Prefer = s.join(',')),
      Array.isArray(t))
    ) {
      const a = t.reduce((o, l) => o.concat(Object.keys(l)), []);
      if (a.length > 0) {
        const o = [...new Set(a)].map((l) => `"${l}"`);
        this.url.searchParams.set('columns', o.join(','));
      }
    }
    return new Ns.default({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  upsert(
    t,
    {
      onConflict: n,
      ignoreDuplicates: r = !1,
      count: i,
      defaultToNull: s = !0,
    } = {}
  ) {
    const a = 'POST',
      o = [`resolution=${r ? 'ignore' : 'merge'}-duplicates`];
    if (
      (n !== void 0 && this.url.searchParams.set('on_conflict', n),
      this.headers.Prefer && o.push(this.headers.Prefer),
      i && o.push(`count=${i}`),
      s || o.push('missing=default'),
      (this.headers.Prefer = o.join(',')),
      Array.isArray(t))
    ) {
      const l = t.reduce((u, c) => u.concat(Object.keys(c)), []);
      if (l.length > 0) {
        const u = [...new Set(l)].map((c) => `"${c}"`);
        this.url.searchParams.set('columns', u.join(','));
      }
    }
    return new Ns.default({
      method: a,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: t,
      fetch: this.fetch,
      allowEmpty: !1,
    });
  }
  update(t, { count: n } = {}) {
    const r = 'PATCH',
      i = [];
    return (
      this.headers.Prefer && i.push(this.headers.Prefer),
      n && i.push(`count=${n}`),
      (this.headers.Prefer = i.join(',')),
      new Ns.default({
        method: r,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: t,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
  delete({ count: t } = {}) {
    const n = 'DELETE',
      r = [];
    return (
      t && r.push(`count=${t}`),
      this.headers.Prefer && r.unshift(this.headers.Prefer),
      (this.headers.Prefer = r.join(',')),
      new Ns.default({
        method: n,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
};
wu.default = a3;
var ku = {},
  xu = {};
Object.defineProperty(xu, '__esModule', { value: !0 });
xu.version = void 0;
xu.version = '0.0.0-automated';
Object.defineProperty(ku, '__esModule', { value: !0 });
ku.DEFAULT_HEADERS = void 0;
const o3 = xu;
ku.DEFAULT_HEADERS = { 'X-Client-Info': `postgrest-js/${o3.version}` };
var J0 =
  (Lt && Lt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Ph, '__esModule', { value: !0 });
const l3 = J0(wu),
  u3 = J0(eo),
  c3 = ku;
let f3 = class Z0 {
  constructor(t, { headers: n = {}, schema: r, fetch: i } = {}) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, c3.DEFAULT_HEADERS), n)),
      (this.schemaName = r),
      (this.fetch = i);
  }
  from(t) {
    const n = new URL(`${this.url}/${t}`);
    return new l3.default(n, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
    });
  }
  schema(t) {
    return new Z0(this.url, {
      headers: this.headers,
      schema: t,
      fetch: this.fetch,
    });
  }
  rpc(t, n = {}, { head: r = !1, get: i = !1, count: s } = {}) {
    let a;
    const o = new URL(`${this.url}/rpc/${t}`);
    let l;
    r || i
      ? ((a = r ? 'HEAD' : 'GET'),
        Object.entries(n)
          .filter(([c, f]) => f !== void 0)
          .map(([c, f]) => [c, Array.isArray(f) ? `{${f.join(',')}}` : `${f}`])
          .forEach(([c, f]) => {
            o.searchParams.append(c, f);
          }))
      : ((a = 'POST'), (l = n));
    const u = Object.assign({}, this.headers);
    return (
      s && (u.Prefer = `count=${s}`),
      new u3.default({
        method: a,
        url: o,
        headers: u,
        schema: this.schemaName,
        body: l,
        fetch: this.fetch,
        allowEmpty: !1,
      })
    );
  }
};
Ph.default = f3;
var to =
  (Lt && Lt.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(At, '__esModule', { value: !0 });
At.PostgrestBuilder =
  At.PostgrestTransformBuilder =
  At.PostgrestFilterBuilder =
  At.PostgrestQueryBuilder =
  At.PostgrestClient =
    void 0;
const e1 = to(Ph);
At.PostgrestClient = e1.default;
const t1 = to(wu);
At.PostgrestQueryBuilder = t1.default;
const n1 = to(eo);
At.PostgrestFilterBuilder = n1.default;
const r1 = to(_u);
At.PostgrestTransformBuilder = r1.default;
const i1 = to(bu);
At.PostgrestBuilder = i1.default;
var d3 = (At.default = {
  PostgrestClient: e1.default,
  PostgrestQueryBuilder: t1.default,
  PostgrestFilterBuilder: n1.default,
  PostgrestTransformBuilder: r1.default,
  PostgrestBuilder: i1.default,
});
const {
    PostgrestClient: h3,
    PostgrestQueryBuilder: w6,
    PostgrestFilterBuilder: _6,
    PostgrestTransformBuilder: b6,
    PostgrestBuilder: k6,
  } = d3,
  p3 = '2.10.2',
  m3 = { 'X-Client-Info': `realtime-js/${p3}` },
  v3 = '1.0.0',
  s1 = 1e4,
  g3 = 1e3;
var Ui;
(function (e) {
  (e[(e.connecting = 0)] = 'connecting'),
    (e[(e.open = 1)] = 'open'),
    (e[(e.closing = 2)] = 'closing'),
    (e[(e.closed = 3)] = 'closed');
})(Ui || (Ui = {}));
var ht;
(function (e) {
  (e.closed = 'closed'),
    (e.errored = 'errored'),
    (e.joined = 'joined'),
    (e.joining = 'joining'),
    (e.leaving = 'leaving');
})(ht || (ht = {}));
var Ht;
(function (e) {
  (e.close = 'phx_close'),
    (e.error = 'phx_error'),
    (e.join = 'phx_join'),
    (e.reply = 'phx_reply'),
    (e.leave = 'phx_leave'),
    (e.access_token = 'access_token');
})(Ht || (Ht = {}));
var od;
(function (e) {
  e.websocket = 'websocket';
})(od || (od = {}));
var jr;
(function (e) {
  (e.Connecting = 'connecting'),
    (e.Open = 'open'),
    (e.Closing = 'closing'),
    (e.Closed = 'closed');
})(jr || (jr = {}));
class y3 {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(t, n) {
    return t.constructor === ArrayBuffer
      ? n(this._binaryDecode(t))
      : n(typeof t == 'string' ? JSON.parse(t) : {});
  }
  _binaryDecode(t) {
    const n = new DataView(t),
      r = new TextDecoder();
    return this._decodeBroadcast(t, n, r);
  }
  _decodeBroadcast(t, n, r) {
    const i = n.getUint8(1),
      s = n.getUint8(2);
    let a = this.HEADER_LENGTH + 2;
    const o = r.decode(t.slice(a, a + i));
    a = a + i;
    const l = r.decode(t.slice(a, a + s));
    a = a + s;
    const u = JSON.parse(r.decode(t.slice(a, t.byteLength)));
    return { ref: null, topic: o, event: l, payload: u };
  }
}
class a1 {
  constructor(t, n) {
    (this.callback = t),
      (this.timerCalc = n),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = t),
      (this.timerCalc = n);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(
        () => {
          (this.tries = this.tries + 1), this.callback();
        },
        this.timerCalc(this.tries + 1)
      ));
  }
}
var le;
(function (e) {
  (e.abstime = 'abstime'),
    (e.bool = 'bool'),
    (e.date = 'date'),
    (e.daterange = 'daterange'),
    (e.float4 = 'float4'),
    (e.float8 = 'float8'),
    (e.int2 = 'int2'),
    (e.int4 = 'int4'),
    (e.int4range = 'int4range'),
    (e.int8 = 'int8'),
    (e.int8range = 'int8range'),
    (e.json = 'json'),
    (e.jsonb = 'jsonb'),
    (e.money = 'money'),
    (e.numeric = 'numeric'),
    (e.oid = 'oid'),
    (e.reltime = 'reltime'),
    (e.text = 'text'),
    (e.time = 'time'),
    (e.timestamp = 'timestamp'),
    (e.timestamptz = 'timestamptz'),
    (e.timetz = 'timetz'),
    (e.tsrange = 'tsrange'),
    (e.tstzrange = 'tstzrange');
})(le || (le = {}));
const Um = (e, t, n = {}) => {
    var r;
    const i = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
    return Object.keys(t).reduce((s, a) => ((s[a] = w3(a, e, t, i)), s), {});
  },
  w3 = (e, t, n, r) => {
    const i = t.find((o) => o.name === e),
      s = i == null ? void 0 : i.type,
      a = n[e];
    return s && !r.includes(s) ? o1(s, a) : ld(a);
  },
  o1 = (e, t) => {
    if (e.charAt(0) === '_') {
      const n = e.slice(1, e.length);
      return x3(t, n);
    }
    switch (e) {
      case le.bool:
        return _3(t);
      case le.float4:
      case le.float8:
      case le.int2:
      case le.int4:
      case le.int8:
      case le.numeric:
      case le.oid:
        return b3(t);
      case le.json:
      case le.jsonb:
        return k3(t);
      case le.timestamp:
        return S3(t);
      case le.abstime:
      case le.date:
      case le.daterange:
      case le.int4range:
      case le.int8range:
      case le.money:
      case le.reltime:
      case le.text:
      case le.time:
      case le.timestamptz:
      case le.timetz:
      case le.tsrange:
      case le.tstzrange:
        return ld(t);
      default:
        return ld(t);
    }
  },
  ld = (e) => e,
  _3 = (e) => {
    switch (e) {
      case 't':
        return !0;
      case 'f':
        return !1;
      default:
        return e;
    }
  },
  b3 = (e) => {
    if (typeof e == 'string') {
      const t = parseFloat(e);
      if (!Number.isNaN(t)) return t;
    }
    return e;
  },
  k3 = (e) => {
    if (typeof e == 'string')
      try {
        return JSON.parse(e);
      } catch (t) {
        return console.log(`JSON parse error: ${t}`), e;
      }
    return e;
  },
  x3 = (e, t) => {
    if (typeof e != 'string') return e;
    const n = e.length - 1,
      r = e[n];
    if (e[0] === '{' && r === '}') {
      let s;
      const a = e.slice(1, n);
      try {
        s = JSON.parse('[' + a + ']');
      } catch {
        s = a ? a.split(',') : [];
      }
      return s.map((o) => o1(t, o));
    }
    return e;
  },
  S3 = (e) => (typeof e == 'string' ? e.replace(' ', 'T') : e),
  l1 = (e) => {
    let t = e;
    return (
      (t = t.replace(/^ws/i, 'http')),
      (t = t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, '')),
      t.replace(/\/+$/, '')
    );
  };
class cc {
  constructor(t, n, r = {}, i = s1) {
    (this.channel = t),
      (this.event = n),
      (this.payload = r),
      (this.timeout = i),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ''),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(t) {
    (this.timeout = t),
      this._cancelRefEvent(),
      (this.ref = ''),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived('timeout') ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, n) {
    var r;
    return (
      this._hasReceived(t) &&
        n(
          (r = this.receivedResp) === null || r === void 0 ? void 0 : r.response
        ),
      this.recHooks.push({ status: t, callback: n }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const t = (n) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = n),
        this._matchReceive(n);
    };
    this.channel._on(this.refEvent, {}, t),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger('timeout', {});
      }, this.timeout));
  }
  trigger(t, n) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: t, response: n });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: t, response: n }) {
    this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(n));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var Vm;
(function (e) {
  (e.SYNC = 'sync'), (e.JOIN = 'join'), (e.LEAVE = 'leave');
})(Vm || (Vm = {}));
class ra {
  constructor(t, n) {
    (this.channel = t),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const r = (n == null ? void 0 : n.events) || {
      state: 'presence_state',
      diff: 'presence_diff',
    };
    this.channel._on(r.state, {}, (i) => {
      const { onJoin: s, onLeave: a, onSync: o } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = ra.syncState(this.state, i, s, a)),
        this.pendingDiffs.forEach((l) => {
          this.state = ra.syncDiff(this.state, l, s, a);
        }),
        (this.pendingDiffs = []),
        o();
    }),
      this.channel._on(r.diff, {}, (i) => {
        const { onJoin: s, onLeave: a, onSync: o } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(i)
          : ((this.state = ra.syncDiff(this.state, i, s, a)), o());
      }),
      this.onJoin((i, s, a) => {
        this.channel._trigger('presence', {
          event: 'join',
          key: i,
          currentPresences: s,
          newPresences: a,
        });
      }),
      this.onLeave((i, s, a) => {
        this.channel._trigger('presence', {
          event: 'leave',
          key: i,
          currentPresences: s,
          leftPresences: a,
        });
      }),
      this.onSync(() => {
        this.channel._trigger('presence', { event: 'sync' });
      });
  }
  static syncState(t, n, r, i) {
    const s = this.cloneDeep(t),
      a = this.transformState(n),
      o = {},
      l = {};
    return (
      this.map(s, (u, c) => {
        a[u] || (l[u] = c);
      }),
      this.map(a, (u, c) => {
        const f = s[u];
        if (f) {
          const d = c.map((P) => P.presence_ref),
            m = f.map((P) => P.presence_ref),
            y = c.filter((P) => m.indexOf(P.presence_ref) < 0),
            b = f.filter((P) => d.indexOf(P.presence_ref) < 0);
          y.length > 0 && (o[u] = y), b.length > 0 && (l[u] = b);
        } else o[u] = c;
      }),
      this.syncDiff(s, { joins: o, leaves: l }, r, i)
    );
  }
  static syncDiff(t, n, r, i) {
    const { joins: s, leaves: a } = {
      joins: this.transformState(n.joins),
      leaves: this.transformState(n.leaves),
    };
    return (
      r || (r = () => {}),
      i || (i = () => {}),
      this.map(s, (o, l) => {
        var u;
        const c = (u = t[o]) !== null && u !== void 0 ? u : [];
        if (((t[o] = this.cloneDeep(l)), c.length > 0)) {
          const f = t[o].map((m) => m.presence_ref),
            d = c.filter((m) => f.indexOf(m.presence_ref) < 0);
          t[o].unshift(...d);
        }
        r(o, c, l);
      }),
      this.map(a, (o, l) => {
        let u = t[o];
        if (!u) return;
        const c = l.map((f) => f.presence_ref);
        (u = u.filter((f) => c.indexOf(f.presence_ref) < 0)),
          (t[o] = u),
          i(o, u, l),
          u.length === 0 && delete t[o];
      }),
      t
    );
  }
  static map(t, n) {
    return Object.getOwnPropertyNames(t).map((r) => n(r, t[r]));
  }
  static transformState(t) {
    return (
      (t = this.cloneDeep(t)),
      Object.getOwnPropertyNames(t).reduce((n, r) => {
        const i = t[r];
        return (
          'metas' in i
            ? (n[r] = i.metas.map(
                (s) => (
                  (s.presence_ref = s.phx_ref),
                  delete s.phx_ref,
                  delete s.phx_ref_prev,
                  s
                )
              ))
            : (n[r] = i),
          n
        );
      }, {})
    );
  }
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  onJoin(t) {
    this.caller.onJoin = t;
  }
  onLeave(t) {
    this.caller.onLeave = t;
  }
  onSync(t) {
    this.caller.onSync = t;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Hm;
(function (e) {
  (e.ALL = '*'),
    (e.INSERT = 'INSERT'),
    (e.UPDATE = 'UPDATE'),
    (e.DELETE = 'DELETE');
})(Hm || (Hm = {}));
var Bm;
(function (e) {
  (e.BROADCAST = 'broadcast'),
    (e.PRESENCE = 'presence'),
    (e.POSTGRES_CHANGES = 'postgres_changes');
})(Bm || (Bm = {}));
var Wm;
(function (e) {
  (e.SUBSCRIBED = 'SUBSCRIBED'),
    (e.TIMED_OUT = 'TIMED_OUT'),
    (e.CLOSED = 'CLOSED'),
    (e.CHANNEL_ERROR = 'CHANNEL_ERROR');
})(Wm || (Wm = {}));
class jh {
  constructor(t, n = { config: {} }, r) {
    (this.topic = t),
      (this.params = n),
      (this.socket = r),
      (this.bindings = {}),
      (this.state = ht.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = t.replace(/^realtime:/i, '')),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: '' },
          private: !1,
        },
        n.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new cc(this, Ht.join, this.params, this.timeout)),
      (this.rejoinTimer = new a1(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive('ok', () => {
        (this.state = ht.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((i) => i.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`),
          (this.state = ht.closed),
          this.socket._remove(this);
      }),
      this._onError((i) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log('channel', `error ${this.topic}`, i),
          (this.state = ht.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive('timeout', () => {
        this._isJoining() &&
          (this.socket.log(
            'channel',
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = ht.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(Ht.reply, {}, (i, s) => {
        this._trigger(this._replyEventName(s), i);
      }),
      (this.presence = new ra(this)),
      (this.broadcastEndpointURL = l1(this.socket.endPoint) + '/api/broadcast');
  }
  subscribe(t, n = this.timeout) {
    var r, i;
    if ((this.socket.isConnected() || this.socket.connect(), this.joinedOnce))
      throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
    {
      const {
        config: { broadcast: s, presence: a, private: o },
      } = this.params;
      this._onError((c) => t && t('CHANNEL_ERROR', c)),
        this._onClose(() => t && t('CLOSED'));
      const l = {},
        u = {
          broadcast: s,
          presence: a,
          postgres_changes:
            (i =
              (r = this.bindings.postgres_changes) === null || r === void 0
                ? void 0
                : r.map((c) => c.filter)) !== null && i !== void 0
              ? i
              : [],
          private: o,
        };
      this.socket.accessToken && (l.access_token = this.socket.accessToken),
        this.updateJoinPayload(Object.assign({ config: u }, l)),
        (this.joinedOnce = !0),
        this._rejoin(n),
        this.joinPush
          .receive('ok', ({ postgres_changes: c }) => {
            var f;
            if (
              (this.socket.accessToken &&
                this.socket.setAuth(this.socket.accessToken),
              c === void 0)
            ) {
              t && t('SUBSCRIBED');
              return;
            } else {
              const d = this.bindings.postgres_changes,
                m =
                  (f = d == null ? void 0 : d.length) !== null && f !== void 0
                    ? f
                    : 0,
                y = [];
              for (let b = 0; b < m; b++) {
                const P = d[b],
                  {
                    filter: { event: v, schema: p, table: g, filter: k },
                  } = P,
                  S = c && c[b];
                if (
                  S &&
                  S.event === v &&
                  S.schema === p &&
                  S.table === g &&
                  S.filter === k
                )
                  y.push(Object.assign(Object.assign({}, P), { id: S.id }));
                else {
                  this.unsubscribe(),
                    t &&
                      t(
                        'CHANNEL_ERROR',
                        new Error(
                          'mismatch between server and client bindings for postgres changes'
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = y), t && t('SUBSCRIBED');
              return;
            }
          })
          .receive('error', (c) => {
            t &&
              t(
                'CHANNEL_ERROR',
                new Error(
                  JSON.stringify(Object.values(c).join(', ') || 'error')
                )
              );
          })
          .receive('timeout', () => {
            t && t('TIMED_OUT');
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, n = {}) {
    return await this.send(
      { type: 'presence', event: 'track', payload: t },
      n.timeout || this.timeout
    );
  }
  async untrack(t = {}) {
    return await this.send({ type: 'presence', event: 'untrack' }, t);
  }
  on(t, n, r) {
    return this._on(t, n, r);
  }
  async send(t, n = {}) {
    var r, i;
    if (!this._canPush() && t.type === 'broadcast') {
      const { event: s, payload: a } = t,
        o = {
          method: 'POST',
          headers: {
            Authorization: this.socket.accessToken
              ? `Bearer ${this.socket.accessToken}`
              : '',
            apikey: this.socket.apiKey ? this.socket.apiKey : '',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [{ topic: this.subTopic, event: s, payload: a }],
          }),
        };
      try {
        const l = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          o,
          (r = n.timeout) !== null && r !== void 0 ? r : this.timeout
        );
        return (
          await ((i = l.body) === null || i === void 0 ? void 0 : i.cancel()),
          l.ok ? 'ok' : 'error'
        );
      } catch (l) {
        return l.name === 'AbortError' ? 'timed out' : 'error';
      }
    } else
      return new Promise((s) => {
        var a, o, l;
        const u = this._push(t.type, t, n.timeout || this.timeout);
        t.type === 'broadcast' &&
          !(
            !(
              (l =
                (o =
                  (a = this.params) === null || a === void 0
                    ? void 0
                    : a.config) === null || o === void 0
                  ? void 0
                  : o.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          s('ok'),
          u.receive('ok', () => s('ok')),
          u.receive('error', () => s('error')),
          u.receive('timeout', () => s('timed out'));
      });
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  unsubscribe(t = this.timeout) {
    this.state = ht.leaving;
    const n = () => {
      this.socket.log('channel', `leave ${this.topic}`),
        this._trigger(Ht.close, 'leave', this._joinRef());
    };
    return (
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      new Promise((r) => {
        const i = new cc(this, Ht.leave, {}, t);
        i
          .receive('ok', () => {
            n(), r('ok');
          })
          .receive('timeout', () => {
            n(), r('timed out');
          })
          .receive('error', () => {
            r('error');
          }),
          i.send(),
          this._canPush() || i.trigger('ok', {});
      })
    );
  }
  async _fetchWithTimeout(t, n, r) {
    const i = new AbortController(),
      s = setTimeout(() => i.abort(), r),
      a = await this.socket.fetch(
        t,
        Object.assign(Object.assign({}, n), { signal: i.signal })
      );
    return clearTimeout(s), a;
  }
  _push(t, n, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new cc(this, t, n, r);
    return (
      this._canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)),
      i
    );
  }
  _onMessage(t, n, r) {
    return n;
  }
  _isMember(t) {
    return this.topic === t;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(t, n, r) {
    var i, s;
    const a = t.toLocaleLowerCase(),
      { close: o, error: l, leave: u, join: c } = Ht;
    if (r && [o, l, u, c].indexOf(a) >= 0 && r !== this._joinRef()) return;
    let d = this._onMessage(a, n, r);
    if (n && !d)
      throw 'channel onMessage callbacks must return the payload, modified or unmodified';
    ['insert', 'update', 'delete'].includes(a)
      ? (i = this.bindings.postgres_changes) === null ||
        i === void 0 ||
        i
          .filter((m) => {
            var y, b, P;
            return (
              ((y = m.filter) === null || y === void 0 ? void 0 : y.event) ===
                '*' ||
              ((P =
                (b = m.filter) === null || b === void 0 ? void 0 : b.event) ===
                null || P === void 0
                ? void 0
                : P.toLocaleLowerCase()) === a
            );
          })
          .map((m) => m.callback(d, r))
      : (s = this.bindings[a]) === null ||
        s === void 0 ||
        s
          .filter((m) => {
            var y, b, P, v, p, g;
            if (['broadcast', 'presence', 'postgres_changes'].includes(a))
              if ('id' in m) {
                const k = m.id,
                  S =
                    (y = m.filter) === null || y === void 0 ? void 0 : y.event;
                return (
                  k &&
                  ((b = n.ids) === null || b === void 0
                    ? void 0
                    : b.includes(k)) &&
                  (S === '*' ||
                    (S == null ? void 0 : S.toLocaleLowerCase()) ===
                      ((P = n.data) === null || P === void 0
                        ? void 0
                        : P.type.toLocaleLowerCase()))
                );
              } else {
                const k =
                  (p =
                    (v = m == null ? void 0 : m.filter) === null || v === void 0
                      ? void 0
                      : v.event) === null || p === void 0
                    ? void 0
                    : p.toLocaleLowerCase();
                return (
                  k === '*' ||
                  k ===
                    ((g = n == null ? void 0 : n.event) === null || g === void 0
                      ? void 0
                      : g.toLocaleLowerCase())
                );
              }
            else return m.type.toLocaleLowerCase() === a;
          })
          .map((m) => {
            if (typeof d == 'object' && 'ids' in d) {
              const y = d.data,
                {
                  schema: b,
                  table: P,
                  commit_timestamp: v,
                  type: p,
                  errors: g,
                } = y;
              d = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: b,
                    table: P,
                    commit_timestamp: v,
                    eventType: p,
                    new: {},
                    old: {},
                    errors: g,
                  }
                ),
                this._getPayloadRecords(y)
              );
            }
            m.callback(d, r);
          });
  }
  _isClosed() {
    return this.state === ht.closed;
  }
  _isJoined() {
    return this.state === ht.joined;
  }
  _isJoining() {
    return this.state === ht.joining;
  }
  _isLeaving() {
    return this.state === ht.leaving;
  }
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  _on(t, n, r) {
    const i = t.toLocaleLowerCase(),
      s = { type: i, filter: n, callback: r };
    return (
      this.bindings[i] ? this.bindings[i].push(s) : (this.bindings[i] = [s]),
      this
    );
  }
  _off(t, n) {
    const r = t.toLocaleLowerCase();
    return (
      (this.bindings[r] = this.bindings[r].filter((i) => {
        var s;
        return !(
          ((s = i.type) === null || s === void 0
            ? void 0
            : s.toLocaleLowerCase()) === r && jh.isEqual(i.filter, n)
        );
      })),
      this
    );
  }
  static isEqual(t, n) {
    if (Object.keys(t).length !== Object.keys(n).length) return !1;
    for (const r in t) if (t[r] !== n[r]) return !1;
    return !0;
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(t) {
    this._on(Ht.close, {}, t);
  }
  _onError(t) {
    this._on(Ht.error, {}, (n) => t(n));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(t = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = ht.joining),
      this.joinPush.resend(t));
  }
  _getPayloadRecords(t) {
    const n = { new: {}, old: {} };
    return (
      (t.type === 'INSERT' || t.type === 'UPDATE') &&
        (n.new = Um(t.columns, t.record)),
      (t.type === 'UPDATE' || t.type === 'DELETE') &&
        (n.old = Um(t.columns, t.old_record)),
      n
    );
  }
}
const E3 = () => {},
  C3 = typeof WebSocket < 'u';
class P3 {
  constructor(t, n) {
    var r;
    (this.accessToken = null),
      (this.apiKey = null),
      (this.channels = []),
      (this.endPoint = ''),
      (this.httpEndpoint = ''),
      (this.headers = m3),
      (this.params = {}),
      (this.timeout = s1),
      (this.heartbeatIntervalMs = 3e4),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.ref = 0),
      (this.logger = E3),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new y3()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this._resolveFetch = (s) => {
        let a;
        return (
          s
            ? (a = s)
            : typeof fetch > 'u'
              ? (a = (...o) =>
                  cs(() => Promise.resolve().then(() => bs), void 0).then(
                    ({ default: l }) => l(...o)
                  ))
              : (a = fetch),
          (...o) => a(...o)
        );
      }),
      (this.endPoint = `${t}/${od.websocket}`),
      (this.httpEndpoint = l1(t)),
      n != null && n.transport
        ? (this.transport = n.transport)
        : (this.transport = null),
      n != null && n.params && (this.params = n.params),
      n != null &&
        n.headers &&
        (this.headers = Object.assign(
          Object.assign({}, this.headers),
          n.headers
        )),
      n != null && n.timeout && (this.timeout = n.timeout),
      n != null && n.logger && (this.logger = n.logger),
      n != null &&
        n.heartbeatIntervalMs &&
        (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
    const i =
      (r = n == null ? void 0 : n.params) === null || r === void 0
        ? void 0
        : r.apikey;
    i && ((this.accessToken = i), (this.apiKey = i)),
      (this.reconnectAfterMs =
        n != null && n.reconnectAfterMs
          ? n.reconnectAfterMs
          : (s) => [1e3, 2e3, 5e3, 1e4][s - 1] || 1e4),
      (this.encode =
        n != null && n.encode ? n.encode : (s, a) => a(JSON.stringify(s))),
      (this.decode =
        n != null && n.decode
          ? n.decode
          : this.serializer.decode.bind(this.serializer)),
      (this.reconnectTimer = new a1(async () => {
        this.disconnect(), this.connect();
      }, this.reconnectAfterMs)),
      (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch));
  }
  connect() {
    if (!this.conn) {
      if (this.transport) {
        this.conn = new this.transport(this._endPointURL(), void 0, {
          headers: this.headers,
        });
        return;
      }
      if (C3) {
        (this.conn = new WebSocket(this._endPointURL())),
          this.setupConnection();
        return;
      }
      (this.conn = new O3(this._endPointURL(), void 0, {
        close: () => {
          this.conn = null;
        },
      })),
        cs(() => import('./browser-DDzXY4PW.js').then((t) => t.b), []).then(
          ({ default: t }) => {
            (this.conn = new t(this._endPointURL(), void 0, {
              headers: this.headers,
            })),
              this.setupConnection();
          }
        );
    }
  }
  disconnect(t, n) {
    this.conn &&
      ((this.conn.onclose = function () {}),
      t ? this.conn.close(t, n ?? '') : this.conn.close(),
      (this.conn = null),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.reset());
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(t) {
    const n = await t.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), n;
  }
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((n) => n.unsubscribe()));
    return this.disconnect(), t;
  }
  log(t, n, r) {
    this.logger(t, n, r);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Ui.connecting:
        return jr.Connecting;
      case Ui.open:
        return jr.Open;
      case Ui.closing:
        return jr.Closing;
      default:
        return jr.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === jr.Open;
  }
  channel(t, n = { config: {} }) {
    const r = new jh(`realtime:${t}`, n, this);
    return this.channels.push(r), r;
  }
  push(t) {
    const { topic: n, event: r, payload: i, ref: s } = t,
      a = () => {
        this.encode(t, (o) => {
          var l;
          (l = this.conn) === null || l === void 0 || l.send(o);
        });
      };
    this.log('push', `${n} ${r} (${s})`, i),
      this.isConnected() ? a() : this.sendBuffer.push(a);
  }
  setAuth(t) {
    (this.accessToken = t),
      this.channels.forEach((n) => {
        t && n.updateJoinPayload({ access_token: t }),
          n.joinedOnce &&
            n._isJoined() &&
            n._push(Ht.access_token, { access_token: t });
      });
  }
  _makeRef() {
    let t = this.ref + 1;
    return (
      t === this.ref ? (this.ref = 0) : (this.ref = t), this.ref.toString()
    );
  }
  _leaveOpenTopic(t) {
    let n = this.channels.find(
      (r) => r.topic === t && (r._isJoined() || r._isJoining())
    );
    n &&
      (this.log('transport', `leaving duplicate topic "${t}"`),
      n.unsubscribe());
  }
  _remove(t) {
    this.channels = this.channels.filter((n) => n._joinRef() !== t._joinRef());
  }
  setupConnection() {
    this.conn &&
      ((this.conn.binaryType = 'arraybuffer'),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (t) => this._onConnError(t)),
      (this.conn.onmessage = (t) => this._onConnMessage(t)),
      (this.conn.onclose = (t) => this._onConnClose(t)));
  }
  _endPointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: v3 })
    );
  }
  _onConnMessage(t) {
    this.decode(t.data, (n) => {
      let { topic: r, event: i, payload: s, ref: a } = n;
      ((a && a === this.pendingHeartbeatRef) ||
        i === (s == null ? void 0 : s.type)) &&
        (this.pendingHeartbeatRef = null),
        this.log(
          'receive',
          `${s.status || ''} ${r} ${i} ${(a && '(' + a + ')') || ''}`,
          s
        ),
        this.channels
          .filter((o) => o._isMember(r))
          .forEach((o) => o._trigger(i, s, a)),
        this.stateChangeCallbacks.message.forEach((o) => o(n));
    });
  }
  _onConnOpen() {
    this.log('transport', `connected to ${this._endPointURL()}`),
      this._flushSendBuffer(),
      this.reconnectTimer.reset(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this._sendHeartbeat(),
        this.heartbeatIntervalMs
      )),
      this.stateChangeCallbacks.open.forEach((t) => t());
  }
  _onConnClose(t) {
    this.log('transport', 'close', t),
      this._triggerChanError(),
      this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      this.reconnectTimer.scheduleTimeout(),
      this.stateChangeCallbacks.close.forEach((n) => n(t));
  }
  _onConnError(t) {
    this.log('transport', t.message),
      this._triggerChanError(),
      this.stateChangeCallbacks.error.forEach((n) => n(t));
  }
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(Ht.error));
  }
  _appendParams(t, n) {
    if (Object.keys(n).length === 0) return t;
    const r = t.match(/\?/) ? '&' : '?',
      i = new URLSearchParams(n);
    return `${t}${r}${i}`;
  }
  _flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
  }
  _sendHeartbeat() {
    var t;
    if (this.isConnected()) {
      if (this.pendingHeartbeatRef) {
        (this.pendingHeartbeatRef = null),
          this.log(
            'transport',
            'heartbeat timeout. Attempting to re-establish connection'
          ),
          (t = this.conn) === null ||
            t === void 0 ||
            t.close(g3, 'hearbeat timeout');
        return;
      }
      (this.pendingHeartbeatRef = this._makeRef()),
        this.push({
          topic: 'phoenix',
          event: 'heartbeat',
          payload: {},
          ref: this.pendingHeartbeatRef,
        }),
        this.setAuth(this.accessToken);
    }
  }
}
class O3 {
  constructor(t, n, r) {
    (this.binaryType = 'arraybuffer'),
      (this.onclose = () => {}),
      (this.onerror = () => {}),
      (this.onmessage = () => {}),
      (this.onopen = () => {}),
      (this.readyState = Ui.connecting),
      (this.send = () => {}),
      (this.url = null),
      (this.url = t),
      (this.close = r.close);
  }
}
class Th extends Error {
  constructor(t) {
    super(t), (this.__isStorageError = !0), (this.name = 'StorageError');
  }
}
function Qe(e) {
  return typeof e == 'object' && e !== null && '__isStorageError' in e;
}
class j3 extends Th {
  constructor(t, n) {
    super(t), (this.name = 'StorageApiError'), (this.status = n);
  }
  toJSON() {
    return { name: this.name, message: this.message, status: this.status };
  }
}
class qm extends Th {
  constructor(t, n) {
    super(t), (this.name = 'StorageUnknownError'), (this.originalError = n);
  }
}
var T3 = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (a) {
          a(s);
        });
  }
  return new (n || (n = Promise))(function (s, a) {
    function o(c) {
      try {
        u(r.next(c));
      } catch (f) {
        a(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(o, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const u1 = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > 'u'
          ? (t = (...n) =>
              cs(() => Promise.resolve().then(() => bs), void 0).then(
                ({ default: r }) => r(...n)
              ))
          : (t = fetch),
      (...n) => t(...n)
    );
  },
  A3 = () =>
    T3(void 0, void 0, void 0, function* () {
      return typeof Response > 'u'
        ? (yield cs(() => Promise.resolve().then(() => bs), void 0)).Response
        : Response;
    });
var ks = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (a) {
          a(s);
        });
  }
  return new (n || (n = Promise))(function (s, a) {
    function o(c) {
      try {
        u(r.next(c));
      } catch (f) {
        a(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(o, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const fc = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  R3 = (e, t) =>
    ks(void 0, void 0, void 0, function* () {
      const n = yield A3();
      e instanceof n
        ? e
            .json()
            .then((r) => {
              t(new j3(fc(r), e.status || 500));
            })
            .catch((r) => {
              t(new qm(fc(r), r));
            })
        : t(new qm(fc(e), e));
    }),
  N3 = (e, t, n, r) => {
    const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
    return e === 'GET'
      ? i
      : ((i.headers = Object.assign(
          { 'Content-Type': 'application/json' },
          t == null ? void 0 : t.headers
        )),
        (i.body = JSON.stringify(r)),
        Object.assign(Object.assign({}, i), n));
  };
function Su(e, t, n, r, i, s) {
  return ks(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      e(n, N3(t, r, i, s))
        .then((l) => {
          if (!l.ok) throw l;
          return r != null && r.noResolveJson ? l : l.json();
        })
        .then((l) => a(l))
        .catch((l) => R3(l, o));
    });
  });
}
function ud(e, t, n, r) {
  return ks(this, void 0, void 0, function* () {
    return Su(e, 'GET', t, n, r);
  });
}
function Fn(e, t, n, r, i) {
  return ks(this, void 0, void 0, function* () {
    return Su(e, 'POST', t, r, i, n);
  });
}
function L3(e, t, n, r, i) {
  return ks(this, void 0, void 0, function* () {
    return Su(e, 'PUT', t, r, i, n);
  });
}
function c1(e, t, n, r, i) {
  return ks(this, void 0, void 0, function* () {
    return Su(e, 'DELETE', t, r, i, n);
  });
}
var St = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (a) {
          a(s);
        });
  }
  return new (n || (n = Promise))(function (s, a) {
    function o(c) {
      try {
        u(r.next(c));
      } catch (f) {
        a(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(o, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const D3 = { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } },
  Qm = {
    cacheControl: '3600',
    contentType: 'text/plain;charset=UTF-8',
    upsert: !1,
  };
class I3 {
  constructor(t, n = {}, r, i) {
    (this.url = t),
      (this.headers = n),
      (this.bucketId = r),
      (this.fetch = u1(i));
  }
  uploadOrUpdate(t, n, r, i) {
    return St(this, void 0, void 0, function* () {
      try {
        let s;
        const a = Object.assign(Object.assign({}, Qm), i),
          o = Object.assign(
            Object.assign({}, this.headers),
            t === 'POST' && { 'x-upsert': String(a.upsert) }
          );
        typeof Blob < 'u' && r instanceof Blob
          ? ((s = new FormData()),
            s.append('cacheControl', a.cacheControl),
            s.append('', r))
          : typeof FormData < 'u' && r instanceof FormData
            ? ((s = r), s.append('cacheControl', a.cacheControl))
            : ((s = r),
              (o['cache-control'] = `max-age=${a.cacheControl}`),
              (o['content-type'] = a.contentType));
        const l = this._removeEmptyFolders(n),
          u = this._getFinalPath(l),
          c = yield this.fetch(
            `${this.url}/object/${u}`,
            Object.assign(
              { method: t, body: s, headers: o },
              a != null && a.duplex ? { duplex: a.duplex } : {}
            )
          ),
          f = yield c.json();
        return c.ok
          ? { data: { path: l, id: f.Id, fullPath: f.Key }, error: null }
          : { data: null, error: f };
      } catch (s) {
        if (Qe(s)) return { data: null, error: s };
        throw s;
      }
    });
  }
  upload(t, n, r) {
    return St(this, void 0, void 0, function* () {
      return this.uploadOrUpdate('POST', t, n, r);
    });
  }
  uploadToSignedUrl(t, n, r, i) {
    return St(this, void 0, void 0, function* () {
      const s = this._removeEmptyFolders(t),
        a = this._getFinalPath(s),
        o = new URL(this.url + `/object/upload/sign/${a}`);
      o.searchParams.set('token', n);
      try {
        let l;
        const u = Object.assign({ upsert: Qm.upsert }, i),
          c = Object.assign(Object.assign({}, this.headers), {
            'x-upsert': String(u.upsert),
          });
        typeof Blob < 'u' && r instanceof Blob
          ? ((l = new FormData()),
            l.append('cacheControl', u.cacheControl),
            l.append('', r))
          : typeof FormData < 'u' && r instanceof FormData
            ? ((l = r), l.append('cacheControl', u.cacheControl))
            : ((l = r),
              (c['cache-control'] = `max-age=${u.cacheControl}`),
              (c['content-type'] = u.contentType));
        const f = yield this.fetch(o.toString(), {
            method: 'PUT',
            body: l,
            headers: c,
          }),
          d = yield f.json();
        return f.ok
          ? { data: { path: s, fullPath: d.Key }, error: null }
          : { data: null, error: d };
      } catch (l) {
        if (Qe(l)) return { data: null, error: l };
        throw l;
      }
    });
  }
  createSignedUploadUrl(t, n) {
    return St(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(t);
        const i = Object.assign({}, this.headers);
        n != null && n.upsert && (i['x-upsert'] = 'true');
        const s = yield Fn(
            this.fetch,
            `${this.url}/object/upload/sign/${r}`,
            {},
            { headers: i }
          ),
          a = new URL(this.url + s.url),
          o = a.searchParams.get('token');
        if (!o) throw new Th('No token returned by API');
        return {
          data: { signedUrl: a.toString(), path: t, token: o },
          error: null,
        };
      } catch (r) {
        if (Qe(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  update(t, n, r) {
    return St(this, void 0, void 0, function* () {
      return this.uploadOrUpdate('PUT', t, n, r);
    });
  }
  move(t, n, r) {
    return St(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Fn(
            this.fetch,
            `${this.url}/object/move`,
            {
              bucketId: this.bucketId,
              sourceKey: t,
              destinationKey: n,
              destinationBucket: r == null ? void 0 : r.destinationBucket,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (i) {
        if (Qe(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  copy(t, n, r) {
    return St(this, void 0, void 0, function* () {
      try {
        return {
          data: {
            path: (yield Fn(
              this.fetch,
              `${this.url}/object/copy`,
              {
                bucketId: this.bucketId,
                sourceKey: t,
                destinationKey: n,
                destinationBucket: r == null ? void 0 : r.destinationBucket,
              },
              { headers: this.headers }
            )).Key,
          },
          error: null,
        };
      } catch (i) {
        if (Qe(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  createSignedUrl(t, n, r) {
    return St(this, void 0, void 0, function* () {
      try {
        let i = this._getFinalPath(t),
          s = yield Fn(
            this.fetch,
            `${this.url}/object/sign/${i}`,
            Object.assign(
              { expiresIn: n },
              r != null && r.transform ? { transform: r.transform } : {}
            ),
            { headers: this.headers }
          );
        const a =
          r != null && r.download
            ? `&download=${r.download === !0 ? '' : r.download}`
            : '';
        return (
          (s = { signedUrl: encodeURI(`${this.url}${s.signedURL}${a}`) }),
          { data: s, error: null }
        );
      } catch (i) {
        if (Qe(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  createSignedUrls(t, n, r) {
    return St(this, void 0, void 0, function* () {
      try {
        const i = yield Fn(
            this.fetch,
            `${this.url}/object/sign/${this.bucketId}`,
            { expiresIn: n, paths: t },
            { headers: this.headers }
          ),
          s =
            r != null && r.download
              ? `&download=${r.download === !0 ? '' : r.download}`
              : '';
        return {
          data: i.map((a) =>
            Object.assign(Object.assign({}, a), {
              signedUrl: a.signedURL
                ? encodeURI(`${this.url}${a.signedURL}${s}`)
                : null,
            })
          ),
          error: null,
        };
      } catch (i) {
        if (Qe(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  download(t, n) {
    return St(this, void 0, void 0, function* () {
      const i =
          typeof (n == null ? void 0 : n.transform) < 'u'
            ? 'render/image/authenticated'
            : 'object',
        s = this.transformOptsToQueryString(
          (n == null ? void 0 : n.transform) || {}
        ),
        a = s ? `?${s}` : '';
      try {
        const o = this._getFinalPath(t);
        return {
          data: yield (yield ud(this.fetch, `${this.url}/${i}/${o}${a}`, {
            headers: this.headers,
            noResolveJson: !0,
          })).blob(),
          error: null,
        };
      } catch (o) {
        if (Qe(o)) return { data: null, error: o };
        throw o;
      }
    });
  }
  getPublicUrl(t, n) {
    const r = this._getFinalPath(t),
      i = [],
      s =
        n != null && n.download
          ? `download=${n.download === !0 ? '' : n.download}`
          : '';
    s !== '' && i.push(s);
    const o =
        typeof (n == null ? void 0 : n.transform) < 'u'
          ? 'render/image'
          : 'object',
      l = this.transformOptsToQueryString(
        (n == null ? void 0 : n.transform) || {}
      );
    l !== '' && i.push(l);
    let u = i.join('&');
    return (
      u !== '' && (u = `?${u}`),
      { data: { publicUrl: encodeURI(`${this.url}/${o}/public/${r}${u}`) } }
    );
  }
  remove(t) {
    return St(this, void 0, void 0, function* () {
      try {
        return {
          data: yield c1(
            this.fetch,
            `${this.url}/object/${this.bucketId}`,
            { prefixes: t },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (Qe(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  list(t, n, r) {
    return St(this, void 0, void 0, function* () {
      try {
        const i = Object.assign(Object.assign(Object.assign({}, D3), n), {
          prefix: t || '',
        });
        return {
          data: yield Fn(
            this.fetch,
            `${this.url}/object/list/${this.bucketId}`,
            i,
            { headers: this.headers },
            r
          ),
          error: null,
        };
      } catch (i) {
        if (Qe(i)) return { data: null, error: i };
        throw i;
      }
    });
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
  }
  transformOptsToQueryString(t) {
    const n = [];
    return (
      t.width && n.push(`width=${t.width}`),
      t.height && n.push(`height=${t.height}`),
      t.resize && n.push(`resize=${t.resize}`),
      t.format && n.push(`format=${t.format}`),
      t.quality && n.push(`quality=${t.quality}`),
      n.join('&')
    );
  }
}
const M3 = '2.6.0',
  $3 = { 'X-Client-Info': `storage-js/${M3}` };
var fi = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (a) {
          a(s);
        });
  }
  return new (n || (n = Promise))(function (s, a) {
    function o(c) {
      try {
        u(r.next(c));
      } catch (f) {
        a(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(o, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class F3 {
  constructor(t, n = {}, r) {
    (this.url = t),
      (this.headers = Object.assign(Object.assign({}, $3), n)),
      (this.fetch = u1(r));
  }
  listBuckets() {
    return fi(this, void 0, void 0, function* () {
      try {
        return {
          data: yield ud(this.fetch, `${this.url}/bucket`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (t) {
        if (Qe(t)) return { data: null, error: t };
        throw t;
      }
    });
  }
  getBucket(t) {
    return fi(this, void 0, void 0, function* () {
      try {
        return {
          data: yield ud(this.fetch, `${this.url}/bucket/${t}`, {
            headers: this.headers,
          }),
          error: null,
        };
      } catch (n) {
        if (Qe(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  createBucket(t, n = { public: !1 }) {
    return fi(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Fn(
            this.fetch,
            `${this.url}/bucket`,
            {
              id: t,
              name: t,
              public: n.public,
              file_size_limit: n.fileSizeLimit,
              allowed_mime_types: n.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (Qe(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  updateBucket(t, n) {
    return fi(this, void 0, void 0, function* () {
      try {
        return {
          data: yield L3(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {
              id: t,
              name: t,
              public: n.public,
              file_size_limit: n.fileSizeLimit,
              allowed_mime_types: n.allowedMimeTypes,
            },
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (r) {
        if (Qe(r)) return { data: null, error: r };
        throw r;
      }
    });
  }
  emptyBucket(t) {
    return fi(this, void 0, void 0, function* () {
      try {
        return {
          data: yield Fn(
            this.fetch,
            `${this.url}/bucket/${t}/empty`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (Qe(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  deleteBucket(t) {
    return fi(this, void 0, void 0, function* () {
      try {
        return {
          data: yield c1(
            this.fetch,
            `${this.url}/bucket/${t}`,
            {},
            { headers: this.headers }
          ),
          error: null,
        };
      } catch (n) {
        if (Qe(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
}
class z3 extends F3 {
  constructor(t, n = {}, r) {
    super(t, n, r);
  }
  from(t) {
    return new I3(this.url, this.headers, t, this.fetch);
  }
}
const U3 = '2.44.3';
let Ws = '';
typeof Deno < 'u'
  ? (Ws = 'deno')
  : typeof document < 'u'
    ? (Ws = 'web')
    : typeof navigator < 'u' && navigator.product === 'ReactNative'
      ? (Ws = 'react-native')
      : (Ws = 'node');
const V3 = { 'X-Client-Info': `supabase-js-${Ws}/${U3}` },
  H3 = { headers: V3 },
  B3 = { schema: 'public' },
  W3 = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: 'implicit',
  },
  q3 = {};
var Q3 = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (a) {
          a(s);
        });
  }
  return new (n || (n = Promise))(function (s, a) {
    function o(c) {
      try {
        u(r.next(c));
      } catch (f) {
        a(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(o, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
const Y3 = (e) => {
    let t;
    return (
      e ? (t = e) : typeof fetch > 'u' ? (t = K0) : (t = fetch),
      (...n) => t(...n)
    );
  },
  K3 = () => (typeof Headers > 'u' ? G0 : Headers),
  G3 = (e, t, n) => {
    const r = Y3(n),
      i = K3();
    return (s, a) =>
      Q3(void 0, void 0, void 0, function* () {
        var o;
        const l = (o = yield t()) !== null && o !== void 0 ? o : e;
        let u = new i(a == null ? void 0 : a.headers);
        return (
          u.has('apikey') || u.set('apikey', e),
          u.has('Authorization') || u.set('Authorization', `Bearer ${l}`),
          r(s, Object.assign(Object.assign({}, a), { headers: u }))
        );
      });
  };
function X3(e) {
  return e.replace(/\/$/, '');
}
function J3(e, t) {
  const { db: n, auth: r, realtime: i, global: s } = e,
    { db: a, auth: o, realtime: l, global: u } = t;
  return {
    db: Object.assign(Object.assign({}, a), n),
    auth: Object.assign(Object.assign({}, o), r),
    realtime: Object.assign(Object.assign({}, l), i),
    global: Object.assign(Object.assign({}, u), s),
  };
}
const f1 = '2.64.2',
  Z3 = 'http://localhost:9999',
  eE = 'supabase.auth.token',
  tE = { 'X-Client-Info': `gotrue-js/${f1}` },
  Ym = 10,
  cd = 'X-Supabase-Api-Version',
  d1 = {
    '2024-01-01': {
      timestamp: Date.parse('2024-01-01T00:00:00.0Z'),
      name: '2024-01-01',
    },
  };
function nE(e) {
  return Math.round(Date.now() / 1e3) + e;
}
function rE() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
    const t = (Math.random() * 16) | 0;
    return (e == 'x' ? t : (t & 3) | 8).toString(16);
  });
}
const Ft = () => typeof document < 'u',
  xr = { tested: !1, writable: !1 },
  ia = () => {
    if (!Ft()) return !1;
    try {
      if (typeof globalThis.localStorage != 'object') return !1;
    } catch {
      return !1;
    }
    if (xr.tested) return xr.writable;
    const e = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(e, e),
        globalThis.localStorage.removeItem(e),
        (xr.tested = !0),
        (xr.writable = !0);
    } catch {
      (xr.tested = !0), (xr.writable = !1);
    }
    return xr.writable;
  };
function dc(e) {
  const t = {},
    n = new URL(e);
  if (n.hash && n.hash[0] === '#')
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((i, s) => {
        t[s] = i;
      });
    } catch {}
  return (
    n.searchParams.forEach((r, i) => {
      t[i] = r;
    }),
    t
  );
}
const h1 = (e) => {
    let t;
    return (
      e
        ? (t = e)
        : typeof fetch > 'u'
          ? (t = (...n) =>
              cs(() => Promise.resolve().then(() => bs), void 0).then(
                ({ default: r }) => r(...n)
              ))
          : (t = fetch),
      (...n) => t(...n)
    );
  },
  iE = (e) =>
    typeof e == 'object' &&
    e !== null &&
    'status' in e &&
    'ok' in e &&
    'json' in e &&
    typeof e.json == 'function',
  p1 = async (e, t, n) => {
    await e.setItem(t, JSON.stringify(n));
  },
  Lo = async (e, t) => {
    const n = await e.getItem(t);
    if (!n) return null;
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  },
  hc = async (e, t) => {
    await e.removeItem(t);
  };
function sE(e) {
  const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  let n = '',
    r,
    i,
    s,
    a,
    o,
    l,
    u,
    c = 0;
  for (e = e.replace('-', '+').replace('_', '/'); c < e.length; )
    (a = t.indexOf(e.charAt(c++))),
      (o = t.indexOf(e.charAt(c++))),
      (l = t.indexOf(e.charAt(c++))),
      (u = t.indexOf(e.charAt(c++))),
      (r = (a << 2) | (o >> 4)),
      (i = ((o & 15) << 4) | (l >> 2)),
      (s = ((l & 3) << 6) | u),
      (n = n + String.fromCharCode(r)),
      l != 64 && i != 0 && (n = n + String.fromCharCode(i)),
      u != 64 && s != 0 && (n = n + String.fromCharCode(s));
  return n;
}
class Eu {
  constructor() {
    this.promise = new Eu.promiseConstructor((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
}
Eu.promiseConstructor = Promise;
function Km(e) {
  const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
    n = e.split('.');
  if (n.length !== 3) throw new Error('JWT is not valid: not a JWT structure');
  if (!t.test(n[1]))
    throw new Error('JWT is not valid: payload is not in base64url format');
  const r = n[1];
  return JSON.parse(sE(r));
}
async function aE(e) {
  return await new Promise((t) => {
    setTimeout(() => t(null), e);
  });
}
function oE(e, t) {
  return new Promise((r, i) => {
    (async () => {
      for (let s = 0; s < 1 / 0; s++)
        try {
          const a = await e(s);
          if (!t(s, null, a)) {
            r(a);
            return;
          }
        } catch (a) {
          if (!t(s, a)) {
            i(a);
            return;
          }
        }
    })();
  });
}
function lE(e) {
  return ('0' + e.toString(16)).substr(-2);
}
function uE() {
  const t = new Uint32Array(56);
  if (typeof crypto > 'u') {
    const n =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~',
      r = n.length;
    let i = '';
    for (let s = 0; s < 56; s++) i += n.charAt(Math.floor(Math.random() * r));
    return i;
  }
  return crypto.getRandomValues(t), Array.from(t, lE).join('');
}
async function cE(e) {
  const n = new TextEncoder().encode(e),
    r = await crypto.subtle.digest('SHA-256', n),
    i = new Uint8Array(r);
  return Array.from(i)
    .map((s) => String.fromCharCode(s))
    .join('');
}
function fE(e) {
  return btoa(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
async function dE(e) {
  if (
    !(
      typeof crypto < 'u' &&
      typeof crypto.subtle < 'u' &&
      typeof TextEncoder < 'u'
    )
  )
    return (
      console.warn(
        'WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.'
      ),
      e
    );
  const n = await cE(e);
  return fE(n);
}
async function di(e, t, n = !1) {
  const r = uE();
  let i = r;
  n && (i += '/PASSWORD_RECOVERY'), await p1(e, `${t}-code-verifier`, i);
  const s = await dE(r);
  return [s, r === s ? 'plain' : 's256'];
}
const hE = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function pE(e) {
  const t = e.headers.get(cd);
  if (!t || !t.match(hE)) return null;
  try {
    return new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
class Ah extends Error {
  constructor(t, n, r) {
    super(t),
      (this.__isAuthError = !0),
      (this.name = 'AuthError'),
      (this.status = n),
      (this.code = r);
  }
}
function X(e) {
  return typeof e == 'object' && e !== null && '__isAuthError' in e;
}
class mE extends Ah {
  constructor(t, n, r) {
    super(t, n, r),
      (this.name = 'AuthApiError'),
      (this.status = n),
      (this.code = r);
  }
}
function vE(e) {
  return X(e) && e.name === 'AuthApiError';
}
class m1 extends Ah {
  constructor(t, n) {
    super(t), (this.name = 'AuthUnknownError'), (this.originalError = n);
  }
}
class ai extends Ah {
  constructor(t, n, r, i) {
    super(t, r, i), (this.name = n), (this.status = r);
  }
}
class Sr extends ai {
  constructor() {
    super('Auth session missing!', 'AuthSessionMissingError', 400, void 0);
  }
}
class pc extends ai {
  constructor() {
    super(
      'Auth session or user missing',
      'AuthInvalidTokenResponseError',
      500,
      void 0
    );
  }
}
class Do extends ai {
  constructor(t) {
    super(t, 'AuthInvalidCredentialsError', 400, void 0);
  }
}
class Io extends ai {
  constructor(t, n = null) {
    super(t, 'AuthImplicitGrantRedirectError', 500, void 0),
      (this.details = null),
      (this.details = n);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class Gm extends ai {
  constructor(t, n = null) {
    super(t, 'AuthPKCEGrantCodeExchangeError', 500, void 0),
      (this.details = null),
      (this.details = n);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class fd extends ai {
  constructor(t, n) {
    super(t, 'AuthRetryableFetchError', n, void 0);
  }
}
function mc(e) {
  return X(e) && e.name === 'AuthRetryableFetchError';
}
class Xm extends ai {
  constructor(t, n, r) {
    super(t, 'AuthWeakPasswordError', n, 'weak_password'), (this.reasons = r);
  }
}
var gE = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
};
const Pr = (e) =>
    e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
  yE = [502, 503, 504];
async function Jm(e) {
  var t;
  if (!iE(e)) throw new fd(Pr(e), 0);
  if (yE.includes(e.status)) throw new fd(Pr(e), e.status);
  let n;
  try {
    n = await e.json();
  } catch (s) {
    throw new m1(Pr(s), s);
  }
  let r;
  const i = pE(e);
  if (
    (i &&
    i.getTime() >= d1['2024-01-01'].timestamp &&
    typeof n == 'object' &&
    n &&
    typeof n.code == 'string'
      ? (r = n.code)
      : typeof n == 'object' &&
        n &&
        typeof n.error_code == 'string' &&
        (r = n.error_code),
    r)
  ) {
    if (r === 'weak_password')
      throw new Xm(
        Pr(n),
        e.status,
        ((t = n.weak_password) === null || t === void 0 ? void 0 : t.reasons) ||
          []
      );
  } else if (
    typeof n == 'object' &&
    n &&
    typeof n.weak_password == 'object' &&
    n.weak_password &&
    Array.isArray(n.weak_password.reasons) &&
    n.weak_password.reasons.length &&
    n.weak_password.reasons.reduce((s, a) => s && typeof a == 'string', !0)
  )
    throw new Xm(Pr(n), e.status, n.weak_password.reasons);
  throw new mE(Pr(n), e.status || 500, r);
}
const wE = (e, t, n, r) => {
  const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
  return e === 'GET'
    ? i
    : ((i.headers = Object.assign(
        { 'Content-Type': 'application/json;charset=UTF-8' },
        t == null ? void 0 : t.headers
      )),
      (i.body = JSON.stringify(r)),
      Object.assign(Object.assign({}, i), n));
};
async function ee(e, t, n, r) {
  var i;
  const s = Object.assign({}, r == null ? void 0 : r.headers);
  s[cd] || (s[cd] = d1['2024-01-01'].name),
    r != null && r.jwt && (s.Authorization = `Bearer ${r.jwt}`);
  const a =
    (i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
  r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
  const o = Object.keys(a).length
      ? '?' + new URLSearchParams(a).toString()
      : '',
    l = await _E(
      e,
      t,
      n + o,
      { headers: s, noResolveJson: r == null ? void 0 : r.noResolveJson },
      {},
      r == null ? void 0 : r.body
    );
  return r != null && r.xform
    ? r == null
      ? void 0
      : r.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function _E(e, t, n, r, i, s) {
  const a = wE(t, r, i, s);
  let o;
  try {
    o = await e(n, Object.assign({}, a));
  } catch (l) {
    throw (console.error(l), new fd(Pr(l), 0));
  }
  if ((o.ok || (await Jm(o)), r != null && r.noResolveJson)) return o;
  try {
    return await o.json();
  } catch (l) {
    await Jm(l);
  }
}
function In(e) {
  var t;
  let n = null;
  SE(e) &&
    ((n = Object.assign({}, e)),
    e.expires_at || (n.expires_at = nE(e.expires_in)));
  const r = (t = e.user) !== null && t !== void 0 ? t : e;
  return { data: { session: n, user: r }, error: null };
}
function Zm(e) {
  const t = In(e);
  return (
    !t.error &&
      e.weak_password &&
      typeof e.weak_password == 'object' &&
      Array.isArray(e.weak_password.reasons) &&
      e.weak_password.reasons.length &&
      e.weak_password.message &&
      typeof e.weak_password.message == 'string' &&
      e.weak_password.reasons.reduce((n, r) => n && typeof r == 'string', !0) &&
      (t.data.weak_password = e.weak_password),
    t
  );
}
function Hn(e) {
  var t;
  return {
    data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
    error: null,
  };
}
function bE(e) {
  return { data: e, error: null };
}
function kE(e) {
  const {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: i,
      verification_type: s,
    } = e,
    a = gE(e, [
      'action_link',
      'email_otp',
      'hashed_token',
      'redirect_to',
      'verification_type',
    ]),
    o = {
      action_link: t,
      email_otp: n,
      hashed_token: r,
      redirect_to: i,
      verification_type: s,
    },
    l = Object.assign({}, a);
  return { data: { properties: o, user: l }, error: null };
}
function xE(e) {
  return e;
}
function SE(e) {
  return e.access_token && e.refresh_token && e.expires_in;
}
var EE = function (e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
};
class CE {
  constructor({ url: t = '', headers: n = {}, fetch: r }) {
    (this.url = t),
      (this.headers = n),
      (this.fetch = h1(r)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      });
  }
  async signOut(t, n = 'global') {
    try {
      return (
        await ee(this.fetch, 'POST', `${this.url}/logout?scope=${n}`, {
          headers: this.headers,
          jwt: t,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (X(r)) return { data: null, error: r };
      throw r;
    }
  }
  async inviteUserByEmail(t, n = {}) {
    try {
      return await ee(this.fetch, 'POST', `${this.url}/invite`, {
        body: { email: t, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: Hn,
      });
    } catch (r) {
      if (X(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async generateLink(t) {
    try {
      const { options: n } = t,
        r = EE(t, ['options']),
        i = Object.assign(Object.assign({}, r), n);
      return (
        'newEmail' in r &&
          ((i.new_email = r == null ? void 0 : r.newEmail), delete i.newEmail),
        await ee(this.fetch, 'POST', `${this.url}/admin/generate_link`, {
          body: i,
          headers: this.headers,
          xform: kE,
          redirectTo: n == null ? void 0 : n.redirectTo,
        })
      );
    } catch (n) {
      if (X(n)) return { data: { properties: null, user: null }, error: n };
      throw n;
    }
  }
  async createUser(t) {
    try {
      return await ee(this.fetch, 'POST', `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Hn,
      });
    } catch (n) {
      if (X(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async listUsers(t) {
    var n, r, i, s, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await ee(this.fetch, 'GET', `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (r =
                (n = t == null ? void 0 : t.page) === null || n === void 0
                  ? void 0
                  : n.toString()) !== null && r !== void 0
                ? r
                : '',
            per_page:
              (s =
                (i = t == null ? void 0 : t.perPage) === null || i === void 0
                  ? void 0
                  : i.toString()) !== null && s !== void 0
                ? s
                : '',
          },
          xform: xE,
        });
      if (c.error) throw c.error;
      const f = await c.json(),
        d =
          (a = c.headers.get('x-total-count')) !== null && a !== void 0 ? a : 0,
        m =
          (l =
            (o = c.headers.get('link')) === null || o === void 0
              ? void 0
              : o.split(',')) !== null && l !== void 0
            ? l
            : [];
      return (
        m.length > 0 &&
          (m.forEach((y) => {
            const b = parseInt(y.split(';')[0].split('=')[1].substring(0, 1)),
              P = JSON.parse(y.split(';')[1].split('=')[1]);
            u[`${P}Page`] = b;
          }),
          (u.total = parseInt(d))),
        { data: Object.assign(Object.assign({}, f), u), error: null }
      );
    } catch (u) {
      if (X(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(t) {
    try {
      return await ee(this.fetch, 'GET', `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Hn,
      });
    } catch (n) {
      if (X(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUserById(t, n) {
    try {
      return await ee(this.fetch, 'PUT', `${this.url}/admin/users/${t}`, {
        body: n,
        headers: this.headers,
        xform: Hn,
      });
    } catch (r) {
      if (X(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async deleteUser(t, n = !1) {
    try {
      return await ee(this.fetch, 'DELETE', `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: { should_soft_delete: n },
        xform: Hn,
      });
    } catch (r) {
      if (X(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(t) {
    try {
      const { data: n, error: r } = await ee(
        this.fetch,
        'GET',
        `${this.url}/admin/users/${t.userId}/factors`,
        {
          headers: this.headers,
          xform: (i) => ({ data: { factors: i }, error: null }),
        }
      );
      return { data: n, error: r };
    } catch (n) {
      if (X(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(t) {
    try {
      return {
        data: await ee(
          this.fetch,
          'DELETE',
          `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (n) {
      if (X(n)) return { data: null, error: n };
      throw n;
    }
  }
}
const PE = {
  getItem: (e) => (ia() ? globalThis.localStorage.getItem(e) : null),
  setItem: (e, t) => {
    ia() && globalThis.localStorage.setItem(e, t);
  },
  removeItem: (e) => {
    ia() && globalThis.localStorage.removeItem(e);
  },
};
function ev(e = {}) {
  return {
    getItem: (t) => e[t] || null,
    setItem: (t, n) => {
      e[t] = n;
    },
    removeItem: (t) => {
      delete e[t];
    },
  };
}
function OE() {
  if (typeof globalThis != 'object')
    try {
      Object.defineProperty(Object.prototype, '__magic__', {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < 'u' && (self.globalThis = self);
    }
}
const hi = {
  debug: !!(
    globalThis &&
    ia() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem('supabase.gotrue-js.locks.debug') === 'true'
  ),
};
class v1 extends Error {
  constructor(t) {
    super(t), (this.isAcquireTimeout = !0);
  }
}
class jE extends v1 {}
async function TE(e, t, n) {
  hi.debug &&
    console.log('@supabase/gotrue-js: navigatorLock: acquire lock', e, t);
  const r = new globalThis.AbortController();
  return (
    t > 0 &&
      setTimeout(() => {
        r.abort(),
          hi.debug &&
            console.log(
              '@supabase/gotrue-js: navigatorLock acquire timed out',
              e
            );
      }, t),
    await globalThis.navigator.locks.request(
      e,
      t === 0
        ? { mode: 'exclusive', ifAvailable: !0 }
        : { mode: 'exclusive', signal: r.signal },
      async (i) => {
        if (i) {
          hi.debug &&
            console.log(
              '@supabase/gotrue-js: navigatorLock: acquired',
              e,
              i.name
            );
          try {
            return await n();
          } finally {
            hi.debug &&
              console.log(
                '@supabase/gotrue-js: navigatorLock: released',
                e,
                i.name
              );
          }
        } else {
          if (t === 0)
            throw (
              (hi.debug &&
                console.log(
                  '@supabase/gotrue-js: navigatorLock: not immediately available',
                  e
                ),
              new jE(
                `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
              ))
            );
          if (hi.debug)
            try {
              const s = await globalThis.navigator.locks.query();
              console.log(
                '@supabase/gotrue-js: Navigator LockManager state',
                JSON.stringify(s, null, '  ')
              );
            } catch (s) {
              console.warn(
                '@supabase/gotrue-js: Error when querying Navigator LockManager state',
                s
              );
            }
          return (
            console.warn(
              '@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request'
            ),
            await n()
          );
        }
      }
    )
  );
}
OE();
const AE = {
    url: Z3,
    storageKey: eE,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: tE,
    flowType: 'implicit',
    debug: !1,
    hasCustomAuthorizationHeader: !1,
  },
  Ls = 30 * 1e3,
  tv = 3;
async function nv(e, t, n) {
  return await n();
}
class ja {
  constructor(t) {
    var n, r;
    (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log),
      (this.instanceID = ja.nextInstanceID),
      (ja.nextInstanceID += 1),
      this.instanceID > 0 &&
        Ft() &&
        console.warn(
          'Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.'
        );
    const i = Object.assign(Object.assign({}, AE), t);
    if (
      ((this.logDebugMessages = !!i.debug),
      typeof i.debug == 'function' && (this.logger = i.debug),
      (this.persistSession = i.persistSession),
      (this.storageKey = i.storageKey),
      (this.autoRefreshToken = i.autoRefreshToken),
      (this.admin = new CE({ url: i.url, headers: i.headers, fetch: i.fetch })),
      (this.url = i.url),
      (this.headers = i.headers),
      (this.fetch = h1(i.fetch)),
      (this.lock = i.lock || nv),
      (this.detectSessionInUrl = i.detectSessionInUrl),
      (this.flowType = i.flowType),
      (this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader),
      i.lock
        ? (this.lock = i.lock)
        : Ft() &&
            !(
              (n = globalThis == null ? void 0 : globalThis.navigator) ===
                null || n === void 0
            ) &&
            n.locks
          ? (this.lock = TE)
          : (this.lock = nv),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
      }),
      this.persistSession
        ? i.storage
          ? (this.storage = i.storage)
          : ia()
            ? (this.storage = PE)
            : ((this.memoryStorage = {}),
              (this.storage = ev(this.memoryStorage)))
        : ((this.memoryStorage = {}), (this.storage = ev(this.memoryStorage))),
      Ft() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (s) {
        console.error(
          'Failed to create a new BroadcastChannel, multi-tab state changes will not be available',
          s
        );
      }
      (r = this.broadcastChannel) === null ||
        r === void 0 ||
        r.addEventListener('message', async (s) => {
          this._debug(
            'received broadcast notification from other tab or client',
            s
          ),
            await this._notifyAllSubscribers(s.data.event, s.data.session, !1);
        });
    }
    this.initialize();
  }
  _debug(...t) {
    return (
      this.logDebugMessages &&
        this.logger(
          `GoTrueClient@${this.instanceID} (${f1}) ${new Date().toISOString()}`,
          ...t
        ),
      this
    );
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(-1, async () => await this._initialize()))()),
        await this.initializePromise);
  }
  async _initialize() {
    try {
      const t = Ft() ? await this._isPKCEFlow() : !1;
      if (
        (this._debug('#_initialize()', 'begin', 'is PKCE flow', t),
        t || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
      ) {
        const { data: n, error: r } = await this._getSessionFromURL(t);
        if (r)
          return (
            this._debug(
              '#_initialize()',
              'error detecting session from URL',
              r
            ),
            (r == null ? void 0 : r.message) === 'Identity is already linked' ||
            (r == null ? void 0 : r.message) ===
              'Identity is already linked to another user'
              ? { error: r }
              : (await this._removeSession(), { error: r })
          );
        const { session: i, redirectType: s } = n;
        return (
          this._debug(
            '#_initialize()',
            'detected session in URL',
            i,
            'redirect type',
            s
          ),
          await this._saveSession(i),
          setTimeout(async () => {
            s === 'recovery'
              ? await this._notifyAllSubscribers('PASSWORD_RECOVERY', i)
              : await this._notifyAllSubscribers('SIGNED_IN', i);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (t) {
      return X(t)
        ? { error: t }
        : { error: new m1('Unexpected error during initialization', t) };
    } finally {
      await this._handleVisibilityChange(),
        this._debug('#_initialize()', 'end');
    }
  }
  async signInAnonymously(t) {
    var n, r, i;
    try {
      await this._removeSession();
      const s = await ee(this.fetch, 'POST', `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (r =
                (n = t == null ? void 0 : t.options) === null || n === void 0
                  ? void 0
                  : n.data) !== null && r !== void 0
                ? r
                : {},
            gotrue_meta_security: {
              captcha_token:
                (i = t == null ? void 0 : t.options) === null || i === void 0
                  ? void 0
                  : i.captchaToken,
            },
          },
          xform: In,
        }),
        { data: a, error: o } = s;
      if (o || !a) return { data: { user: null, session: null }, error: o };
      const l = a.session,
        u = a.user;
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers('SIGNED_IN', l)),
        { data: { user: u, session: l }, error: null }
      );
    } catch (s) {
      if (X(s)) return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  async signUp(t) {
    var n, r, i;
    try {
      await this._removeSession();
      let s;
      if ('email' in t) {
        const { email: c, password: f, options: d } = t;
        let m = null,
          y = null;
        this.flowType === 'pkce' &&
          ([m, y] = await di(this.storage, this.storageKey)),
          (s = await ee(this.fetch, 'POST', `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: d == null ? void 0 : d.emailRedirectTo,
            body: {
              email: c,
              password: f,
              data:
                (n = d == null ? void 0 : d.data) !== null && n !== void 0
                  ? n
                  : {},
              gotrue_meta_security: {
                captcha_token: d == null ? void 0 : d.captchaToken,
              },
              code_challenge: m,
              code_challenge_method: y,
            },
            xform: In,
          }));
      } else if ('phone' in t) {
        const { phone: c, password: f, options: d } = t;
        s = await ee(this.fetch, 'POST', `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: f,
            data:
              (r = d == null ? void 0 : d.data) !== null && r !== void 0
                ? r
                : {},
            channel:
              (i = d == null ? void 0 : d.channel) !== null && i !== void 0
                ? i
                : 'sms',
            gotrue_meta_security: {
              captcha_token: d == null ? void 0 : d.captchaToken,
            },
          },
          xform: In,
        });
      } else
        throw new Do(
          'You must provide either an email or phone number and a password'
        );
      const { data: a, error: o } = s;
      if (o || !a) return { data: { user: null, session: null }, error: o };
      const l = a.session,
        u = a.user;
      return (
        a.session &&
          (await this._saveSession(a.session),
          await this._notifyAllSubscribers('SIGNED_IN', l)),
        { data: { user: u, session: l }, error: null }
      );
    } catch (s) {
      if (X(s)) return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  async signInWithPassword(t) {
    try {
      await this._removeSession();
      let n;
      if ('email' in t) {
        const { email: s, password: a, options: o } = t;
        n = await ee(
          this.fetch,
          'POST',
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: s,
              password: a,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            xform: Zm,
          }
        );
      } else if ('phone' in t) {
        const { phone: s, password: a, options: o } = t;
        n = await ee(
          this.fetch,
          'POST',
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: s,
              password: a,
              gotrue_meta_security: {
                captcha_token: o == null ? void 0 : o.captchaToken,
              },
            },
            xform: Zm,
          }
        );
      } else
        throw new Do(
          'You must provide either an email or phone number and a password'
        );
      const { data: r, error: i } = n;
      return i
        ? { data: { user: null, session: null }, error: i }
        : !r || !r.session || !r.user
          ? { data: { user: null, session: null }, error: new pc() }
          : (r.session &&
              (await this._saveSession(r.session),
              await this._notifyAllSubscribers('SIGNED_IN', r.session)),
            {
              data: Object.assign(
                { user: r.user, session: r.session },
                r.weak_password ? { weakPassword: r.weak_password } : null
              ),
              error: i,
            });
    } catch (n) {
      if (X(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async signInWithOAuth(t) {
    var n, r, i, s;
    return (
      await this._removeSession(),
      await this._handleProviderSignIn(t.provider, {
        redirectTo:
          (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo,
        scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
        queryParams:
          (i = t.options) === null || i === void 0 ? void 0 : i.queryParams,
        skipBrowserRedirect:
          (s = t.options) === null || s === void 0
            ? void 0
            : s.skipBrowserRedirect,
      })
    );
  }
  async exchangeCodeForSession(t) {
    return (
      await this.initializePromise,
      this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
    );
  }
  async _exchangeCodeForSession(t) {
    const n = await Lo(this.storage, `${this.storageKey}-code-verifier`),
      [r, i] = (n ?? '').split('/'),
      { data: s, error: a } = await ee(
        this.fetch,
        'POST',
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: t, code_verifier: r },
          xform: In,
        }
      );
    return (
      await hc(this.storage, `${this.storageKey}-code-verifier`),
      a
        ? { data: { user: null, session: null, redirectType: null }, error: a }
        : !s || !s.session || !s.user
          ? {
              data: { user: null, session: null, redirectType: null },
              error: new pc(),
            }
          : (s.session &&
              (await this._saveSession(s.session),
              await this._notifyAllSubscribers('SIGNED_IN', s.session)),
            {
              data: Object.assign(Object.assign({}, s), {
                redirectType: i ?? null,
              }),
              error: a,
            })
    );
  }
  async signInWithIdToken(t) {
    await this._removeSession();
    try {
      const {
          options: n,
          provider: r,
          token: i,
          access_token: s,
          nonce: a,
        } = t,
        o = await ee(
          this.fetch,
          'POST',
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: r,
              id_token: i,
              access_token: s,
              nonce: a,
              gotrue_meta_security: {
                captcha_token: n == null ? void 0 : n.captchaToken,
              },
            },
            xform: In,
          }
        ),
        { data: l, error: u } = o;
      return u
        ? { data: { user: null, session: null }, error: u }
        : !l || !l.session || !l.user
          ? { data: { user: null, session: null }, error: new pc() }
          : (l.session &&
              (await this._saveSession(l.session),
              await this._notifyAllSubscribers('SIGNED_IN', l.session)),
            { data: l, error: u });
    } catch (n) {
      if (X(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async signInWithOtp(t) {
    var n, r, i, s, a;
    try {
      if ((await this._removeSession(), 'email' in t)) {
        const { email: o, options: l } = t;
        let u = null,
          c = null;
        this.flowType === 'pkce' &&
          ([u, c] = await di(this.storage, this.storageKey));
        const { error: f } = await ee(this.fetch, 'POST', `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data:
              (n = l == null ? void 0 : l.data) !== null && n !== void 0
                ? n
                : {},
            create_user:
              (r = l == null ? void 0 : l.shouldCreateUser) !== null &&
              r !== void 0
                ? r
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: c,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return { data: { user: null, session: null }, error: f };
      }
      if ('phone' in t) {
        const { phone: o, options: l } = t,
          { data: u, error: c } = await ee(
            this.fetch,
            'POST',
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: o,
                data:
                  (i = l == null ? void 0 : l.data) !== null && i !== void 0
                    ? i
                    : {},
                create_user:
                  (s = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  s !== void 0
                    ? s
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (a = l == null ? void 0 : l.channel) !== null && a !== void 0
                    ? a
                    : 'sms',
              },
            }
          );
        return {
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: c,
        };
      }
      throw new Do('You must provide either an email or phone number.');
    } catch (o) {
      if (X(o)) return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  async verifyOtp(t) {
    var n, r;
    try {
      t.type !== 'email_change' &&
        t.type !== 'phone_change' &&
        (await this._removeSession());
      let i, s;
      'options' in t &&
        ((i = (n = t.options) === null || n === void 0 ? void 0 : n.redirectTo),
        (s =
          (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken));
      const { data: a, error: o } = await ee(
        this.fetch,
        'POST',
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, t), {
            gotrue_meta_security: { captcha_token: s },
          }),
          redirectTo: i,
          xform: In,
        }
      );
      if (o) throw o;
      if (!a) throw new Error('An error occurred on token verification.');
      const l = a.session,
        u = a.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            t.type == 'recovery' ? 'PASSWORD_RECOVERY' : 'SIGNED_IN',
            l
          )),
        { data: { user: u, session: l }, error: null }
      );
    } catch (i) {
      if (X(i)) return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  async signInWithSSO(t) {
    var n, r, i;
    try {
      await this._removeSession();
      let s = null,
        a = null;
      return (
        this.flowType === 'pkce' &&
          ([s, a] = await di(this.storage, this.storageKey)),
        await ee(this.fetch, 'POST', `${this.url}/sso`, {
          body: Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {},
                    'providerId' in t ? { provider_id: t.providerId } : null
                  ),
                  'domain' in t ? { domain: t.domain } : null
                ),
                {
                  redirect_to:
                    (r =
                      (n = t.options) === null || n === void 0
                        ? void 0
                        : n.redirectTo) !== null && r !== void 0
                      ? r
                      : void 0,
                }
              ),
              !(
                (i = t == null ? void 0 : t.options) === null || i === void 0
              ) && i.captchaToken
                ? {
                    gotrue_meta_security: {
                      captcha_token: t.options.captchaToken,
                    },
                  }
                : null
            ),
            {
              skip_http_redirect: !0,
              code_challenge: s,
              code_challenge_method: a,
            }
          ),
          headers: this.headers,
          xform: bE,
        })
      );
    } catch (s) {
      if (X(s)) return { data: null, error: s };
      throw s;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._reauthenticate())
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const {
          data: { session: n },
          error: r,
        } = t;
        if (r) throw r;
        if (!n) throw new Sr();
        const { error: i } = await ee(
          this.fetch,
          'GET',
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: n.access_token }
        );
        return { data: { user: null, session: null }, error: i };
      });
    } catch (t) {
      if (X(t)) return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  async resend(t) {
    try {
      t.type != 'email_change' &&
        t.type != 'phone_change' &&
        (await this._removeSession());
      const n = `${this.url}/resend`;
      if ('email' in t) {
        const { email: r, type: i, options: s } = t,
          { error: a } = await ee(this.fetch, 'POST', n, {
            headers: this.headers,
            body: {
              email: r,
              type: i,
              gotrue_meta_security: {
                captcha_token: s == null ? void 0 : s.captchaToken,
              },
            },
            redirectTo: s == null ? void 0 : s.emailRedirectTo,
          });
        return { data: { user: null, session: null }, error: a };
      } else if ('phone' in t) {
        const { phone: r, type: i, options: s } = t,
          { data: a, error: o } = await ee(this.fetch, 'POST', n, {
            headers: this.headers,
            body: {
              phone: r,
              type: i,
              gotrue_meta_security: {
                captcha_token: s == null ? void 0 : s.captchaToken,
              },
            },
          });
        return {
          data: {
            user: null,
            session: null,
            messageId: a == null ? void 0 : a.message_id,
          },
          error: o,
        };
      }
      throw new Do(
        'You must provide either an email or phone number and a type'
      );
    } catch (n) {
      if (X(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => this._useSession(async (n) => n))
    );
  }
  async _acquireLock(t, n) {
    this._debug('#_acquireLock', 'begin', t);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          i = (async () => (await r, await n()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await i;
              } catch {}
            })()
          ),
          i
        );
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug(
          '#_acquireLock',
          'lock acquired for storage key',
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const r = n();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await r;
                } catch {}
              })()
            ),
              await r;
            this.pendingInLock.length;

          ) {
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
          }
          return await r;
        } finally {
          this._debug(
            '#_acquireLock',
            'lock released for storage key',
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug('#_acquireLock', 'end');
    }
  }
  async _useSession(t) {
    this._debug('#_useSession', 'begin');
    try {
      const n = await this.__loadSession();
      return await t(n);
    } finally {
      this._debug('#_useSession', 'end');
    }
  }
  async __loadSession() {
    this._debug('#__loadSession()', 'begin'),
      this.lockAcquired ||
        this._debug(
          '#__loadSession()',
          'used outside of an acquired lock!',
          new Error().stack
        );
    try {
      let t = null;
      const n = await Lo(this.storage, this.storageKey);
      if (
        (this._debug('#getSession()', 'session from storage', n),
        n !== null &&
          (this._isValidSession(n)
            ? (t = n)
            : (this._debug(
                '#getSession()',
                'session from storage is not valid'
              ),
              await this._removeSession())),
        !t)
      )
        return { data: { session: null }, error: null };
      const r = t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1;
      if (
        (this._debug(
          '#__loadSession()',
          `session has${r ? '' : ' not'} expired`,
          'expires_at',
          t.expires_at
        ),
        !r)
      ) {
        if (this.storage.isServer) {
          const a = this.suppressGetSessionWarning;
          t = new Proxy(t, {
            get(l, u, c) {
              return (
                !a &&
                  u === 'user' &&
                  console.warn(
                    'Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.'
                  ),
                Reflect.get(l, u, c)
              );
            },
          });
        }
        return { data: { session: t }, error: null };
      }
      const { session: i, error: s } = await this._callRefreshToken(
        t.refresh_token
      );
      return s
        ? { data: { session: null }, error: s }
        : { data: { session: i }, error: null };
    } finally {
      this._debug('#__loadSession()', 'end');
    }
  }
  async getUser(t) {
    return t
      ? await this._getUser(t)
      : (await this.initializePromise,
        await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(t) {
    try {
      return t
        ? await ee(this.fetch, 'GET', `${this.url}/user`, {
            headers: this.headers,
            jwt: t,
            xform: Hn,
          })
        : await this._useSession(async (n) => {
            var r, i, s;
            const { data: a, error: o } = n;
            if (o) throw o;
            return !(
              !((r = a.session) === null || r === void 0) && r.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new Sr() }
              : await ee(this.fetch, 'GET', `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (s =
                      (i = a.session) === null || i === void 0
                        ? void 0
                        : i.access_token) !== null && s !== void 0
                      ? s
                      : void 0,
                  xform: Hn,
                });
          });
    } catch (n) {
      if (X(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async updateUser(t, n = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._updateUser(t, n))
    );
  }
  async _updateUser(t, n = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: i, error: s } = r;
        if (s) throw s;
        if (!i.session) throw new Sr();
        const a = i.session;
        let o = null,
          l = null;
        this.flowType === 'pkce' &&
          t.email != null &&
          ([o, l] = await di(this.storage, this.storageKey));
        const { data: u, error: c } = await ee(
          this.fetch,
          'PUT',
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: n == null ? void 0 : n.emailRedirectTo,
            body: Object.assign(Object.assign({}, t), {
              code_challenge: o,
              code_challenge_method: l,
            }),
            jwt: a.access_token,
            xform: Hn,
          }
        );
        if (c) throw c;
        return (
          (a.user = u.user),
          await this._saveSession(a),
          await this._notifyAllSubscribers('USER_UPDATED', a),
          { data: { user: a.user }, error: null }
        );
      });
    } catch (r) {
      if (X(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  _decodeJWT(t) {
    return Km(t);
  }
  async setSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._setSession(t))
    );
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token) throw new Sr();
      const n = Date.now() / 1e3;
      let r = n,
        i = !0,
        s = null;
      const a = Km(t.access_token);
      if ((a.exp && ((r = a.exp), (i = r <= n)), i)) {
        const { session: o, error: l } = await this._callRefreshToken(
          t.refresh_token
        );
        if (l) return { data: { user: null, session: null }, error: l };
        if (!o) return { data: { user: null, session: null }, error: null };
        s = o;
      } else {
        const { data: o, error: l } = await this._getUser(t.access_token);
        if (l) throw l;
        (s = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: o.user,
          token_type: 'bearer',
          expires_in: r - n,
          expires_at: r,
        }),
          await this._saveSession(s),
          await this._notifyAllSubscribers('SIGNED_IN', s);
      }
      return { data: { user: s.user, session: s }, error: null };
    } catch (n) {
      if (X(n)) return { data: { session: null, user: null }, error: n };
      throw n;
    }
  }
  async refreshSession(t) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._refreshSession(t))
    );
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!t) {
          const { data: a, error: o } = n;
          if (o) throw o;
          t = (r = a.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(t != null && t.refresh_token)) throw new Sr();
        const { session: i, error: s } = await this._callRefreshToken(
          t.refresh_token
        );
        return s
          ? { data: { user: null, session: null }, error: s }
          : i
            ? { data: { user: i.user, session: i }, error: null }
            : { data: { user: null, session: null }, error: null };
      });
    } catch (n) {
      if (X(n)) return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  async _getSessionFromURL(t) {
    try {
      if (!Ft()) throw new Io('No browser detected.');
      if (this.flowType === 'implicit' && !this._isImplicitGrantFlow())
        throw new Io('Not a valid implicit grant flow url.');
      if (this.flowType == 'pkce' && !t)
        throw new Gm('Not a valid PKCE flow url.');
      const n = dc(window.location.href);
      if (t) {
        if (!n.code) throw new Gm('No code detected.');
        const { data: p, error: g } = await this._exchangeCodeForSession(
          n.code
        );
        if (g) throw g;
        const k = new URL(window.location.href);
        return (
          k.searchParams.delete('code'),
          window.history.replaceState(window.history.state, '', k.toString()),
          { data: { session: p.session, redirectType: null }, error: null }
        );
      }
      if (n.error || n.error_description || n.error_code)
        throw new Io(
          n.error_description ||
            'Error in URL with unspecified error_description',
          {
            error: n.error || 'unspecified_error',
            code: n.error_code || 'unspecified_code',
          }
        );
      const {
        provider_token: r,
        provider_refresh_token: i,
        access_token: s,
        refresh_token: a,
        expires_in: o,
        expires_at: l,
        token_type: u,
      } = n;
      if (!s || !o || !a || !u) throw new Io('No session defined in URL');
      const c = Math.round(Date.now() / 1e3),
        f = parseInt(o);
      let d = c + f;
      l && (d = parseInt(l));
      const m = d - c;
      m * 1e3 <= Ls &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${f}s`
        );
      const y = d - f;
      c - y >= 120
        ? console.warn(
            '@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale',
            y,
            d,
            c
          )
        : c - y < 0 &&
          console.warn(
            '@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew',
            y,
            d,
            c
          );
      const { data: b, error: P } = await this._getUser(s);
      if (P) throw P;
      const v = {
        provider_token: r,
        provider_refresh_token: i,
        access_token: s,
        expires_in: f,
        expires_at: d,
        refresh_token: a,
        token_type: u,
        user: b.user,
      };
      return (
        (window.location.hash = ''),
        this._debug('#_getSessionFromURL()', 'clearing window.location.hash'),
        { data: { session: v, redirectType: n.type }, error: null }
      );
    } catch (n) {
      if (X(n))
        return { data: { session: null, redirectType: null }, error: n };
      throw n;
    }
  }
  _isImplicitGrantFlow() {
    const t = dc(window.location.href);
    return !!(Ft() && (t.access_token || t.error_description));
  }
  async _isPKCEFlow() {
    const t = dc(window.location.href),
      n = await Lo(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && n);
  }
  async signOut(t = { scope: 'global' }) {
    return (
      await this.initializePromise,
      await this._acquireLock(-1, async () => await this._signOut(t))
    );
  }
  async _signOut({ scope: t } = { scope: 'global' }) {
    return await this._useSession(async (n) => {
      var r;
      const { data: i, error: s } = n;
      if (s) return { error: s };
      const a =
        (r = i.session) === null || r === void 0 ? void 0 : r.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, t);
        if (
          o &&
          !(vE(o) && (o.status === 404 || o.status === 401 || o.status === 403))
        )
          return { error: o };
      }
      return (
        t !== 'others' &&
          (await this._removeSession(),
          await hc(this.storage, `${this.storageKey}-code-verifier`),
          await this._notifyAllSubscribers('SIGNED_OUT', null)),
        { error: null }
      );
    });
  }
  onAuthStateChange(t) {
    const n = rE(),
      r = {
        id: n,
        callback: t,
        unsubscribe: () => {
          this._debug(
            '#unsubscribe()',
            'state change callback with id removed',
            n
          ),
            this.stateChangeEmitters.delete(n);
        },
      };
    return (
      this._debug('#onAuthStateChange()', 'registered callback with id', n),
      this.stateChangeEmitters.set(n, r),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(-1, async () => {
          this._emitInitialSession(n);
        })
      ))(),
      { data: { subscription: r } }
    );
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (n) => {
      var r, i;
      try {
        const {
          data: { session: s },
          error: a,
        } = n;
        if (a) throw a;
        await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0
          ? void 0
          : r.callback('INITIAL_SESSION', s)),
          this._debug('INITIAL_SESSION', 'callback id', t, 'session', s);
      } catch (s) {
        await ((i = this.stateChangeEmitters.get(t)) === null || i === void 0
          ? void 0
          : i.callback('INITIAL_SESSION', null)),
          this._debug('INITIAL_SESSION', 'callback id', t, 'error', s),
          console.error(s);
      }
    });
  }
  async resetPasswordForEmail(t, n = {}) {
    let r = null,
      i = null;
    this.flowType === 'pkce' &&
      ([r, i] = await di(this.storage, this.storageKey, !0));
    try {
      return await ee(this.fetch, 'POST', `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: r,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: n.captchaToken },
        },
        headers: this.headers,
        redirectTo: n.redirectTo,
      });
    } catch (s) {
      if (X(s)) return { data: null, error: s };
      throw s;
    }
  }
  async getUserIdentities() {
    var t;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r) throw r;
      return {
        data: {
          identities: (t = n.user.identities) !== null && t !== void 0 ? t : [],
        },
        error: null,
      };
    } catch (n) {
      if (X(n)) return { data: null, error: n };
      throw n;
    }
  }
  async linkIdentity(t) {
    var n;
    try {
      const { data: r, error: i } = await this._useSession(async (s) => {
        var a, o, l, u, c;
        const { data: f, error: d } = s;
        if (d) throw d;
        const m = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          t.provider,
          {
            redirectTo:
              (a = t.options) === null || a === void 0 ? void 0 : a.redirectTo,
            scopes:
              (o = t.options) === null || o === void 0 ? void 0 : o.scopes,
            queryParams:
              (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await ee(this.fetch, 'GET', m, {
          headers: this.headers,
          jwt:
            (c =
              (u = f.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && c !== void 0
              ? c
              : void 0,
        });
      });
      if (i) throw i;
      return (
        Ft() &&
          !(
            !((n = t.options) === null || n === void 0) && n.skipBrowserRedirect
          ) &&
          window.location.assign(r == null ? void 0 : r.url),
        {
          data: { provider: t.provider, url: r == null ? void 0 : r.url },
          error: null,
        }
      );
    } catch (r) {
      if (X(r)) return { data: { provider: t.provider, url: null }, error: r };
      throw r;
    }
  }
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: s, error: a } = n;
        if (a) throw a;
        return await ee(
          this.fetch,
          'DELETE',
          `${this.url}/user/identities/${t.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (i =
                (r = s.session) === null || r === void 0
                  ? void 0
                  : r.access_token) !== null && i !== void 0
                ? i
                : void 0,
          }
        );
      });
    } catch (n) {
      if (X(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _refreshAccessToken(t) {
    const n = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(n, 'begin');
    try {
      const r = Date.now();
      return await oE(
        async (i) => (
          i > 0 && (await aE(200 * Math.pow(2, i - 1))),
          this._debug(n, 'refreshing attempt', i),
          await ee(
            this.fetch,
            'POST',
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: t }, headers: this.headers, xform: In }
          )
        ),
        (i, s) => {
          const a = 200 * Math.pow(2, i);
          return s && mc(s) && Date.now() + a - r < Ls;
        }
      );
    } catch (r) {
      if ((this._debug(n, 'error', r), X(r)))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(n, 'end');
    }
  }
  _isValidSession(t) {
    return (
      typeof t == 'object' &&
      t !== null &&
      'access_token' in t &&
      'refresh_token' in t &&
      'expires_at' in t
    );
  }
  async _handleProviderSignIn(t, n) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams,
    });
    return (
      this._debug(
        '#_handleProviderSignIn()',
        'provider',
        t,
        'options',
        n,
        'url',
        r
      ),
      Ft() && !n.skipBrowserRedirect && window.location.assign(r),
      { data: { provider: t, url: r }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var t;
    const n = '#_recoverAndRefresh()';
    this._debug(n, 'begin');
    try {
      const r = await Lo(this.storage, this.storageKey);
      if (
        (this._debug(n, 'session from storage', r), !this._isValidSession(r))
      ) {
        this._debug(n, 'session is not valid'),
          r !== null && (await this._removeSession());
        return;
      }
      const i = Math.round(Date.now() / 1e3),
        s = ((t = r.expires_at) !== null && t !== void 0 ? t : 1 / 0) < i + Ym;
      if (
        (this._debug(
          n,
          `session has${s ? '' : ' not'} expired with margin of ${Ym}s`
        ),
        s)
      ) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: a } = await this._callRefreshToken(r.refresh_token);
          a &&
            (console.error(a),
            mc(a) ||
              (this._debug(
                n,
                'refresh failed with a non-retryable error, removing the session',
                a
              ),
              await this._removeSession()));
        }
      } else await this._notifyAllSubscribers('SIGNED_IN', r);
    } catch (r) {
      this._debug(n, 'error', r), console.error(r);
      return;
    } finally {
      this._debug(n, 'end');
    }
  }
  async _callRefreshToken(t) {
    var n, r;
    if (!t) throw new Sr();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(i, 'begin');
    try {
      this.refreshingDeferred = new Eu();
      const { data: s, error: a } = await this._refreshAccessToken(t);
      if (a) throw a;
      if (!s.session) throw new Sr();
      await this._saveSession(s.session),
        await this._notifyAllSubscribers('TOKEN_REFRESHED', s.session);
      const o = { session: s.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (s) {
      if ((this._debug(i, 'error', s), X(s))) {
        const a = { session: null, error: s };
        return (
          mc(s) ||
            (await this._removeSession(),
            await this._notifyAllSubscribers('SIGNED_OUT', null)),
          (n = this.refreshingDeferred) === null ||
            n === void 0 ||
            n.resolve(a),
          a
        );
      }
      throw (
        ((r = this.refreshingDeferred) === null || r === void 0 || r.reject(s),
        s)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(i, 'end');
    }
  }
  async _notifyAllSubscribers(t, n, r = !0) {
    const i = `#_notifyAllSubscribers(${t})`;
    this._debug(i, 'begin', n, `broadcast = ${r}`);
    try {
      this.broadcastChannel &&
        r &&
        this.broadcastChannel.postMessage({ event: t, session: n });
      const s = [],
        a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
          try {
            await o.callback(t, n);
          } catch (l) {
            s.push(l);
          }
        });
      if ((await Promise.all(a), s.length > 0)) {
        for (let o = 0; o < s.length; o += 1) console.error(s[o]);
        throw s[0];
      }
    } finally {
      this._debug(i, 'end');
    }
  }
  async _saveSession(t) {
    this._debug('#_saveSession()', t),
      (this.suppressGetSessionWarning = !0),
      await p1(this.storage, this.storageKey, t);
  }
  async _removeSession() {
    this._debug('#_removeSession()'), await hc(this.storage, this.storageKey);
  }
  _removeVisibilityChangedCallback() {
    this._debug('#_removeVisibilityChangedCallback()');
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t &&
        Ft() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener('visibilitychange', t);
    } catch (n) {
      console.error('removing visibilitychange callback failed', n);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug('#_startAutoRefresh()');
    const t = setInterval(() => this._autoRefreshTokenTick(), Ls);
    (this.autoRefreshTicker = t),
      t && typeof t == 'object' && typeof t.unref == 'function'
        ? t.unref()
        : typeof Deno < 'u' &&
          typeof Deno.unrefTimer == 'function' &&
          Deno.unrefTimer(t),
      setTimeout(async () => {
        await this.initializePromise, await this._autoRefreshTokenTick();
      }, 0);
  }
  async _stopAutoRefresh() {
    this._debug('#_stopAutoRefresh()');
    const t = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), t && clearInterval(t);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug('#_autoRefreshTokenTick()', 'begin');
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (n) => {
              const {
                data: { session: r },
              } = n;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug('#_autoRefreshTokenTick()', 'no session');
                return;
              }
              const i = Math.floor((r.expires_at * 1e3 - t) / Ls);
              this._debug(
                '#_autoRefreshTokenTick()',
                `access token expires in ${i} ticks, a tick lasts ${Ls}ms, refresh threshold is ${tv} ticks`
              ),
                i <= tv && (await this._callRefreshToken(r.refresh_token));
            });
          } catch (n) {
            console.error(
              'Auto refresh tick failed with error. This is likely a transient error.',
              n
            );
          }
        } finally {
          this._debug('#_autoRefreshTokenTick()', 'end');
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof v1)
        this._debug('auto refresh token tick lock not available');
      else throw t;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug('#_handleVisibilityChange()'),
      !Ft() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () =>
        await this._onVisibilityChanged(!1)),
        window == null ||
          window.addEventListener(
            'visibilitychange',
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error('_handleVisibilityChange', t);
    }
  }
  async _onVisibilityChanged(t) {
    const n = `#_onVisibilityChanged(${t})`;
    this._debug(n, 'visibilityState', document.visibilityState),
      document.visibilityState === 'visible'
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          t ||
            (await this.initializePromise,
            await this._acquireLock(-1, async () => {
              if (document.visibilityState !== 'visible') {
                this._debug(
                  n,
                  'acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting'
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === 'hidden' &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(t, n, r) {
    const i = [`provider=${encodeURIComponent(n)}`];
    if (
      (r != null &&
        r.redirectTo &&
        i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
      r != null && r.scopes && i.push(`scopes=${encodeURIComponent(r.scopes)}`),
      this.flowType === 'pkce')
    ) {
      const [s, a] = await di(this.storage, this.storageKey),
        o = new URLSearchParams({
          code_challenge: `${encodeURIComponent(s)}`,
          code_challenge_method: `${encodeURIComponent(a)}`,
        });
      i.push(o.toString());
    }
    if (r != null && r.queryParams) {
      const s = new URLSearchParams(r.queryParams);
      i.push(s.toString());
    }
    return (
      r != null &&
        r.skipBrowserRedirect &&
        i.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
      `${t}?${i.join('&')}`
    );
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: i, error: s } = n;
        return s
          ? { data: null, error: s }
          : await ee(
              this.fetch,
              'DELETE',
              `${this.url}/factors/${t.factorId}`,
              {
                headers: this.headers,
                jwt:
                  (r = i == null ? void 0 : i.session) === null || r === void 0
                    ? void 0
                    : r.access_token,
              }
            );
      });
    } catch (n) {
      if (X(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: s, error: a } = n;
        if (a) return { data: null, error: a };
        const { data: o, error: l } = await ee(
          this.fetch,
          'POST',
          `${this.url}/factors`,
          {
            body: {
              friendly_name: t.friendlyName,
              factor_type: t.factorType,
              issuer: t.issuer,
            },
            headers: this.headers,
            jwt:
              (r = s == null ? void 0 : s.session) === null || r === void 0
                ? void 0
                : r.access_token,
          }
        );
        return l
          ? { data: null, error: l }
          : (!((i = o == null ? void 0 : o.totp) === null || i === void 0) &&
              i.qr_code &&
              (o.totp.qr_code = `data:image/svg+xml;utf-8,${o.totp.qr_code}`),
            { data: o, error: null });
      });
    } catch (n) {
      if (X(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _verify(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: i, error: s } = n;
          if (s) return { data: null, error: s };
          const { data: a, error: o } = await ee(
            this.fetch,
            'POST',
            `${this.url}/factors/${t.factorId}/verify`,
            {
              body: { code: t.code, challenge_id: t.challengeId },
              headers: this.headers,
              jwt:
                (r = i == null ? void 0 : i.session) === null || r === void 0
                  ? void 0
                  : r.access_token,
            }
          );
          return o
            ? { data: null, error: o }
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                  a
                )
              ),
              await this._notifyAllSubscribers('MFA_CHALLENGE_VERIFIED', a),
              { data: a, error: o });
        });
      } catch (n) {
        if (X(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: i, error: s } = n;
          return s
            ? { data: null, error: s }
            : await ee(
                this.fetch,
                'POST',
                `${this.url}/factors/${t.factorId}/challenge`,
                {
                  headers: this.headers,
                  jwt:
                    (r = i == null ? void 0 : i.session) === null ||
                    r === void 0
                      ? void 0
                      : r.access_token,
                }
              );
        });
      } catch (n) {
        if (X(n)) return { data: null, error: n };
        throw n;
      }
    });
  }
  async _challengeAndVerify(t) {
    const { data: n, error: r } = await this._challenge({
      factorId: t.factorId,
    });
    return r
      ? { data: null, error: r }
      : await this._verify({
          factorId: t.factorId,
          challengeId: n.id,
          code: t.code,
        });
  }
  async _listFactors() {
    const {
      data: { user: t },
      error: n,
    } = await this.getUser();
    if (n) return { data: null, error: n };
    const r = (t == null ? void 0 : t.factors) || [],
      i = r.filter((s) => s.factor_type === 'totp' && s.status === 'verified');
    return { data: { all: r, totp: i }, error: null };
  }
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(
      -1,
      async () =>
        await this._useSession(async (t) => {
          var n, r;
          const {
            data: { session: i },
            error: s,
          } = t;
          if (s) return { data: null, error: s };
          if (!i)
            return {
              data: {
                currentLevel: null,
                nextLevel: null,
                currentAuthenticationMethods: [],
              },
              error: null,
            };
          const a = this._decodeJWT(i.access_token);
          let o = null;
          a.aal && (o = a.aal);
          let l = o;
          ((r =
            (n = i.user.factors) === null || n === void 0
              ? void 0
              : n.filter((f) => f.status === 'verified')) !== null &&
          r !== void 0
            ? r
            : []
          ).length > 0 && (l = 'aal2');
          const c = a.amr || [];
          return {
            data: {
              currentLevel: o,
              nextLevel: l,
              currentAuthenticationMethods: c,
            },
            error: null,
          };
        })
    );
  }
}
ja.nextInstanceID = 0;
const RE = ja;
class NE extends RE {
  constructor(t) {
    super(t);
  }
}
var LE = function (e, t, n, r) {
  function i(s) {
    return s instanceof n
      ? s
      : new n(function (a) {
          a(s);
        });
  }
  return new (n || (n = Promise))(function (s, a) {
    function o(c) {
      try {
        u(r.next(c));
      } catch (f) {
        a(f);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (f) {
        a(f);
      }
    }
    function u(c) {
      c.done ? s(c.value) : i(c.value).then(o, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
};
class DE {
  constructor(t, n, r) {
    var i, s, a;
    if (((this.supabaseUrl = t), (this.supabaseKey = n), !t))
      throw new Error('supabaseUrl is required.');
    if (!n) throw new Error('supabaseKey is required.');
    const o = X3(t);
    (this.realtimeUrl = `${o}/realtime/v1`.replace(/^http/i, 'ws')),
      (this.authUrl = `${o}/auth/v1`),
      (this.storageUrl = `${o}/storage/v1`),
      (this.functionsUrl = `${o}/functions/v1`);
    const l = `sb-${new URL(this.authUrl).hostname.split('.')[0]}-auth-token`,
      u = {
        db: B3,
        realtime: q3,
        auth: Object.assign(Object.assign({}, W3), { storageKey: l }),
        global: H3,
      },
      c = J3(r ?? {}, u);
    (this.storageKey =
      (i = c.auth.storageKey) !== null && i !== void 0 ? i : ''),
      (this.headers = (s = c.global.headers) !== null && s !== void 0 ? s : {}),
      (this.auth = this._initSupabaseAuthClient(
        (a = c.auth) !== null && a !== void 0 ? a : {},
        this.headers,
        c.global.fetch
      )),
      (this.fetch = G3(n, this._getAccessToken.bind(this), c.global.fetch)),
      (this.realtime = this._initRealtimeClient(
        Object.assign({ headers: this.headers }, c.realtime)
      )),
      (this.rest = new h3(`${o}/rest/v1`, {
        headers: this.headers,
        schema: c.db.schema,
        fetch: this.fetch,
      })),
      this._listenForAuthEvents();
  }
  get functions() {
    return new H4(this.functionsUrl, {
      headers: this.headers,
      customFetch: this.fetch,
    });
  }
  get storage() {
    return new z3(this.storageUrl, this.headers, this.fetch);
  }
  from(t) {
    return this.rest.from(t);
  }
  schema(t) {
    return this.rest.schema(t);
  }
  rpc(t, n = {}, r = {}) {
    return this.rest.rpc(t, n, r);
  }
  channel(t, n = { config: {} }) {
    return this.realtime.channel(t, n);
  }
  getChannels() {
    return this.realtime.getChannels();
  }
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var t, n;
    return LE(this, void 0, void 0, function* () {
      const { data: r } = yield this.auth.getSession();
      return (n =
        (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !==
        null && n !== void 0
        ? n
        : null;
    });
  }
  _initSupabaseAuthClient(
    {
      autoRefreshToken: t,
      persistSession: n,
      detectSessionInUrl: r,
      storage: i,
      storageKey: s,
      flowType: a,
      debug: o,
    },
    l,
    u
  ) {
    var c;
    const f = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`,
    };
    return new NE({
      url: this.authUrl,
      headers: Object.assign(Object.assign({}, f), l),
      storageKey: s,
      autoRefreshToken: t,
      persistSession: n,
      detectSessionInUrl: r,
      storage: i,
      flowType: a,
      debug: o,
      fetch: u,
      hasCustomAuthorizationHeader:
        (c = 'Authorization' in this.headers) !== null && c !== void 0 ? c : !1,
    });
  }
  _initRealtimeClient(t) {
    return new P3(
      this.realtimeUrl,
      Object.assign(Object.assign({}, t), {
        params: Object.assign(
          { apikey: this.supabaseKey },
          t == null ? void 0 : t.params
        ),
      })
    );
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((n, r) => {
      this._handleTokenChanged(
        n,
        'CLIENT',
        r == null ? void 0 : r.access_token
      );
    });
  }
  _handleTokenChanged(t, n, r) {
    (t === 'TOKEN_REFRESHED' || t === 'SIGNED_IN') &&
    this.changedAccessToken !== r
      ? (this.realtime.setAuth(r ?? null), (this.changedAccessToken = r))
      : t === 'SIGNED_OUT' &&
        (this.realtime.setAuth(this.supabaseKey),
        n == 'STORAGE' && this.auth.signOut(),
        (this.changedAccessToken = void 0));
  }
}
const IE = (e, t, n) => new DE(e, t, n),
  g1 = 'https://ljwjpevbbljiavjherqp.supabase.co',
  ME =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxqd2pwZXZiYmxqaWF2amhlcnFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3MTkxOTcsImV4cCI6MjAzNjI5NTE5N30.Vffu55LsP4ClSsq2cBk-EMtoCH6tij_51CDr9SlPOWI',
  On = IE(g1, ME);
async function $E({ filterByStatus: e, columnName: t, sortBy: n }) {
  let r = On.from('incidents').select('*');
  (e == null ? void 0 : e.length) > 0 && (r = r.in(t, e)),
    n && (r = r.order(n.field, { ascending: n.direction === 'asc' }));
  const { data: i, error: s } = await r;
  if (s)
    throw (
      (console.error(s.message),
      new Error(`Couldn't load incidents data ${s.message}`))
    );
  return i;
}
async function y1(e) {
  let { data: t, error: n } = await On.from('incidents')
    .select('*')
    .eq('id', e);
  if (n) throw (console.error(n), new Error("Couldn't load incident data"));
  return t;
}
async function FE(e, t) {
  const n = await y1(t),
    r = n == null ? void 0 : n.at(0).notes,
    { data: i, error: s } = await On.from('incidents')
      .update({ ...e, notes: r ? [...r, e.notes.at(0)] : e.notes })
      .eq('id', t)
      .select();
  if (s) throw (console.error(s), new Error("Couldn't load incident data"));
  return i;
}
async function zE(e) {
  var o;
  const n = `/${`${Math.random()}-${(o = e == null ? void 0 : e.file) == null ? void 0 : o.name}`.replaceAll('/', '')}`,
    r = `${g1}/storage/v1/object/public/files/${n}`;
  console.log(r);
  let i = On.from('incidents');
  if ((e.file || (i = await i.insert([e]).select('id')), e.file)) {
    i = await i.insert([{ ...e, file: r }]).select('id');
    const { error: l } = await On.storage.from('files').upload(n, e.file);
    if (l)
      throw (
        (await i.delete().eq('id', s[0].id),
        console.error(l),
        new Error(
          'File could not be uploaded and incident could not be created'
        ))
      );
  }
  const { data: s, error: a } = i;
  if (a) throw new Error('Could not create incident due to an error');
  return s[0].id;
}
function w1() {
  const e = 'status',
    [t] = lh(),
    n = t == null ? void 0 : t.getAll(e),
    r = t.get('sortBy') || 'priority-asc',
    [i, s] = r.split('-'),
    a = { field: i, direction: s },
    o = ii(),
    {
      isLoading: l,
      data: u,
      error: c,
    } = hu({
      queryKey: ['incidents', n, a],
      queryFn: () => $E({ filterByStatus: n, sortBy: a, columnName: e }),
      onSuccess: () => {
        o.invalidateQueries({ queryKey: ['incidents', n, a] });
      },
    });
  return { isLoading: l, incidents: u, error: c };
}
const UE = '_card_t3xpw_1',
  VE = '_icon_t3xpw_45',
  HE = '_open_t3xpw_81',
  BE = '_pending_t3xpw_93',
  WE = '_close_t3xpw_101',
  vc = { card: UE, icon: VE, open: HE, pending: BE, close: WE };
function gc({ ticket: e, status: t, total: n, icon: r = '' }) {
  const i = t;
  return h.jsxs('div', {
    className: vc.card,
    children: [
      h.jsx('div', { className: `${vc.icon} ${vc[i]}`, children: r }),
      h.jsxs('div', {
        children: [
          h.jsxs('span', { children: [t, ' ', e] }),
          h.jsx('span', { children: n }),
        ],
      }),
    ],
  });
}
const qE = '_cards_1b4o7_1',
  QE = { cards: qE };
function YE({ tickets: e }) {
  const t = e.filter((i) => i.status === 'loged').length,
    n = e.filter((i) => i.status === 'progress').length,
    r = e.filter((i) => i.status === 'fulfiled').length;
  return h.jsxs('div', {
    className: QE.cards,
    children: [
      h.jsx(gc, {
        ticket: 'incidents',
        total: t,
        status: 'open',
        icon: h.jsx(ae, { icon: ax, className: 'fa' }),
      }),
      h.jsx(gc, {
        ticket: 'incidents',
        total: n,
        status: 'pending',
        icon: h.jsx(ae, { icon: fx }),
      }),
      h.jsx(gc, {
        ticket: 'incidents',
        total: r,
        status: 'close',
        icon: h.jsx(ae, { icon: tx }),
      }),
    ],
  });
}
function Rh({ error: e }) {
  return h.jsx('div', { children: e.message });
}
const KE = '_loader_1yts6_3',
  GE = '_l3_1yts6_1',
  XE = '_center_1yts6_31',
  yc = { loader: KE, l3: GE, center: XE };
function xs({ position: e }) {
  return e === 'center'
    ? h.jsx('div', { className: `${yc.loader} ${yc.center}` })
    : h.jsx('div', { className: yc.loader });
}
function JE() {
  const { isLoading: e, error: t, incidents: n } = w1();
  return t
    ? h.jsx(Rh, { error: t })
    : e
      ? h.jsx(xs, {})
      : h.jsxs('div', {
          children: [
            h.jsx('h1', { children: 'Dashboard' }),
            h.jsx(YE, { tickets: n }),
          ],
        });
}
function ZE() {
  return h.jsx('div', { children: 'Page not found' });
}
const eC = '_loginPage_1y91d_1',
  tC = '_login_1y91d_1',
  nC = '_form_1y91d_39',
  wc = { loginPage: eC, login: tC, form: nC };
function rC() {
  return h.jsx('div', {
    className: wc.loginPage,
    children: h.jsx('div', {
      className: wc.login,
      children: h.jsxs('form', {
        className: wc.form,
        children: [
          h.jsx('h1', { children: 'Login ' }),
          h.jsx('input', {
            type: 'text',
            name: 'username',
            id: 'username',
            placeholder: 'Enter username',
          }),
          h.jsx('input', {
            type: 'password',
            name: 'password',
            id: 'password',
            placeholder: 'Enter password',
          }),
          h.jsx('button', { className: 'btn btn--primary', children: 'Login' }),
        ],
      }),
    }),
  });
}
const iC = '_wrapper_9fm54_1',
  rv = { wrapper: iC };
function sC() {
  const e = Ya(),
    t = ii(),
    { mutate: n, isPending: r } = dh({
      mutationFn: zE,
      mutationKey: ['incidents'],
      onSuccess: (i) => {
        fs.success('Ticket has been created successfuly'),
          t.invalidateQueries({ queryKey: ['incidents'] }),
          e(`/incidents/${i}`);
      },
      onError: (i) => {
        console.error(i), fs.error('Ticket could not be created');
      },
    });
  return { createIncident: n, isCreating: r };
}
var no = (e) => e.type === 'checkbox',
  Ri = (e) => e instanceof Date,
  tt = (e) => e == null;
const _1 = (e) => typeof e == 'object';
var Me = (e) => !tt(e) && !Array.isArray(e) && _1(e) && !Ri(e),
  aC = (e) =>
    Me(e) && e.target ? (no(e.target) ? e.target.checked : e.target.value) : e,
  oC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  lC = (e, t) => e.has(oC(t)),
  uC = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Me(t) && t.hasOwnProperty('isPrototypeOf');
  },
  Nh =
    typeof window < 'u' &&
    typeof window.HTMLElement < 'u' &&
    typeof document < 'u';
function Ct(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (
    !(Nh && (e instanceof Blob || e instanceof FileList)) &&
    (n || Me(e))
  )
    if (((t = n ? [] : {}), !n && !uC(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Ct(e[r]));
  else return e;
  return t;
}
var Cu = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  Ee = (e) => e === void 0,
  F = (e, t, n) => {
    if (!t || !Me(e)) return n;
    const r = Cu(t.split(/[,[\].]+?/)).reduce((i, s) => (tt(i) ? i : i[s]), e);
    return Ee(r) || r === e ? (Ee(e[t]) ? n : e[t]) : r;
  },
  Bn = (e) => typeof e == 'boolean',
  Lh = (e) => /^\w*$/.test(e),
  b1 = (e) => Cu(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  fe = (e, t, n) => {
    let r = -1;
    const i = Lh(t) ? [t] : b1(t),
      s = i.length,
      a = s - 1;
    for (; ++r < s; ) {
      const o = i[r];
      let l = n;
      if (r !== a) {
        const u = e[o];
        l = Me(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
      }
      if (o === '__proto__') return;
      (e[o] = l), (e = e[o]);
    }
    return e;
  };
const iv = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  qt = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  dn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  };
Ye.createContext(null);
var cC = (e, t, n, r = !0) => {
    const i = { defaultValues: t._defaultValues };
    for (const s in e)
      Object.defineProperty(i, s, {
        get: () => {
          const a = s;
          return (
            t._proxyFormState[a] !== qt.all &&
              (t._proxyFormState[a] = !r || qt.all),
            n && (n[a] = !0),
            e[a]
          );
        },
      });
    return i;
  },
  mt = (e) => Me(e) && !Object.keys(e).length,
  fC = (e, t, n, r) => {
    n(e);
    const { name: i, ...s } = e;
    return (
      mt(s) ||
      Object.keys(s).length >= Object.keys(t).length ||
      Object.keys(s).find((a) => t[a] === (!r || qt.all))
    );
  },
  rl = (e) => (Array.isArray(e) ? e : [e]);
function dC(e) {
  const t = Ye.useRef(e);
  (t.current = e),
    Ye.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
var on = (e) => typeof e == 'string',
  hC = (e, t, n, r, i) =>
    on(e)
      ? (r && t.watch.add(e), F(n, e, i))
      : Array.isArray(e)
        ? e.map((s) => (r && t.watch.add(s), F(n, s)))
        : (r && (t.watchAll = !0), n),
  pC = (e, t, n, r, i) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 },
        }
      : {},
  sv = (e) => ({
    isOnSubmit: !e || e === qt.onSubmit,
    isOnBlur: e === qt.onBlur,
    isOnChange: e === qt.onChange,
    isOnAll: e === qt.all,
    isOnTouch: e === qt.onTouched,
  }),
  av = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const sa = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const s = F(e, i);
    if (s) {
      const { _f: a, ...o } = s;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], i) && !r) break;
        if (a.ref && t(a.ref, a.name) && !r) break;
        sa(o, t);
      } else Me(o) && sa(o, t);
    }
  }
};
var mC = (e, t, n) => {
    const r = rl(F(e, n));
    return fe(r, 'root', t[n]), fe(e, n, r), e;
  },
  Dh = (e) => e.type === 'file',
  rr = (e) => typeof e == 'function',
  Ul = (e) => {
    if (!Nh) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  il = (e) => on(e),
  Ih = (e) => e.type === 'radio',
  Vl = (e) => e instanceof RegExp;
const ov = { value: !1, isValid: !1 },
  lv = { value: !0, isValid: !0 };
var k1 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !Ee(e[0].attributes.value)
        ? Ee(e[0].value) || e[0].value === ''
          ? lv
          : { value: e[0].value, isValid: !0 }
        : lv
      : ov;
  }
  return ov;
};
const uv = { isValid: !1, value: null };
var x1 = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        uv
      )
    : uv;
function cv(e, t, n = 'validate') {
  if (il(e) || (Array.isArray(e) && e.every(il)) || (Bn(e) && !e))
    return { type: n, message: il(e) ? e : '', ref: t };
}
var pi = (e) => (Me(e) && !Vl(e) ? e : { value: e, message: '' }),
  fv = async (e, t, n, r, i) => {
    const {
        ref: s,
        refs: a,
        required: o,
        maxLength: l,
        minLength: u,
        min: c,
        max: f,
        pattern: d,
        validate: m,
        name: y,
        valueAsNumber: b,
        mount: P,
        disabled: v,
      } = e._f,
      p = F(t, y);
    if (!P || v) return {};
    const g = a ? a[0] : s,
      k = (q) => {
        r &&
          g.reportValidity &&
          (g.setCustomValidity(Bn(q) ? '' : q || ''), g.reportValidity());
      },
      S = {},
      T = Ih(s),
      R = no(s),
      O = T || R,
      B =
        ((b || Dh(s)) && Ee(s.value) && Ee(p)) ||
        (Ul(s) && s.value === '') ||
        p === '' ||
        (Array.isArray(p) && !p.length),
      V = pC.bind(null, y, n, S),
      Ae = (q, K, ne, xe = dn.maxLength, $e = dn.minLength) => {
        const Pe = q ? K : ne;
        S[y] = {
          type: q ? xe : $e,
          message: Pe,
          ref: s,
          ...V(q ? xe : $e, Pe),
        };
      };
    if (
      i
        ? !Array.isArray(p) || !p.length
        : o &&
          ((!O && (B || tt(p))) ||
            (Bn(p) && !p) ||
            (R && !k1(a).isValid) ||
            (T && !x1(a).isValid))
    ) {
      const { value: q, message: K } = il(o)
        ? { value: !!o, message: o }
        : pi(o);
      if (
        q &&
        ((S[y] = {
          type: dn.required,
          message: K,
          ref: g,
          ...V(dn.required, K),
        }),
        !n)
      )
        return k(K), S;
    }
    if (!B && (!tt(c) || !tt(f))) {
      let q, K;
      const ne = pi(f),
        xe = pi(c);
      if (!tt(p) && !isNaN(p)) {
        const $e = s.valueAsNumber || (p && +p);
        tt(ne.value) || (q = $e > ne.value),
          tt(xe.value) || (K = $e < xe.value);
      } else {
        const $e = s.valueAsDate || new Date(p),
          Pe = (Q) => new Date(new Date().toDateString() + ' ' + Q),
          L = s.type == 'time',
          W = s.type == 'week';
        on(ne.value) &&
          p &&
          (q = L
            ? Pe(p) > Pe(ne.value)
            : W
              ? p > ne.value
              : $e > new Date(ne.value)),
          on(xe.value) &&
            p &&
            (K = L
              ? Pe(p) < Pe(xe.value)
              : W
                ? p < xe.value
                : $e < new Date(xe.value));
      }
      if ((q || K) && (Ae(!!q, ne.message, xe.message, dn.max, dn.min), !n))
        return k(S[y].message), S;
    }
    if ((l || u) && !B && (on(p) || (i && Array.isArray(p)))) {
      const q = pi(l),
        K = pi(u),
        ne = !tt(q.value) && p.length > +q.value,
        xe = !tt(K.value) && p.length < +K.value;
      if ((ne || xe) && (Ae(ne, q.message, K.message), !n))
        return k(S[y].message), S;
    }
    if (d && !B && on(p)) {
      const { value: q, message: K } = pi(d);
      if (
        Vl(q) &&
        !p.match(q) &&
        ((S[y] = { type: dn.pattern, message: K, ref: s, ...V(dn.pattern, K) }),
        !n)
      )
        return k(K), S;
    }
    if (m) {
      if (rr(m)) {
        const q = await m(p, t),
          K = cv(q, g);
        if (K && ((S[y] = { ...K, ...V(dn.validate, K.message) }), !n))
          return k(K.message), S;
      } else if (Me(m)) {
        let q = {};
        for (const K in m) {
          if (!mt(q) && !n) break;
          const ne = cv(await m[K](p, t), g, K);
          ne &&
            ((q = { ...ne, ...V(K, ne.message) }),
            k(ne.message),
            n && (S[y] = q));
        }
        if (!mt(q) && ((S[y] = { ref: g, ...q }), !n)) return S;
      }
    }
    return k(!0), S;
  };
function vC(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = Ee(e) ? r++ : e[t[r++]];
  return e;
}
function gC(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Ee(e[t])) return !1;
  return !0;
}
function Re(e, t) {
  const n = Array.isArray(t) ? t : Lh(t) ? [t] : b1(t),
    r = n.length === 1 ? e : vC(e, n),
    i = n.length - 1,
    s = n[i];
  return (
    r && delete r[s],
    i !== 0 &&
      ((Me(r) && mt(r)) || (Array.isArray(r) && gC(r))) &&
      Re(e, n.slice(0, -1)),
    e
  );
}
var _c = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (i) => {
        for (const s of e) s.next && s.next(i);
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((s) => s !== i);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  Hl = (e) => tt(e) || !_1(e);
function Dr(e, t) {
  if (Hl(e) || Hl(t)) return e === t;
  if (Ri(e) && Ri(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const i of n) {
    const s = e[i];
    if (!r.includes(i)) return !1;
    if (i !== 'ref') {
      const a = t[i];
      if (
        (Ri(s) && Ri(a)) ||
        (Me(s) && Me(a)) ||
        (Array.isArray(s) && Array.isArray(a))
          ? !Dr(s, a)
          : s !== a
      )
        return !1;
    }
  }
  return !0;
}
var S1 = (e) => e.type === 'select-multiple',
  yC = (e) => Ih(e) || no(e),
  bc = (e) => Ul(e) && e.isConnected,
  E1 = (e) => {
    for (const t in e) if (rr(e[t])) return !0;
    return !1;
  };
function Bl(e, t = {}) {
  const n = Array.isArray(e);
  if (Me(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Me(e[r]) && !E1(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), Bl(e[r], t[r]))
        : tt(e[r]) || (t[r] = !0);
  return t;
}
function C1(e, t, n) {
  const r = Array.isArray(e);
  if (Me(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || (Me(e[i]) && !E1(e[i]))
        ? Ee(t) || Hl(n[i])
          ? (n[i] = Array.isArray(e[i]) ? Bl(e[i], []) : { ...Bl(e[i]) })
          : C1(e[i], tt(t) ? {} : t[i], n[i])
        : (n[i] = !Dr(e[i], t[i]));
  return n;
}
var Mo = (e, t) => C1(e, t, Bl(t)),
  P1 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    Ee(e)
      ? e
      : t
        ? e === ''
          ? NaN
          : e && +e
        : n && on(e)
          ? new Date(e)
          : r
            ? r(e)
            : e;
function kc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Dh(t)
      ? t.files
      : Ih(t)
        ? x1(e.refs).value
        : S1(t)
          ? [...t.selectedOptions].map(({ value: n }) => n)
          : no(t)
            ? k1(e.refs).value
            : P1(Ee(t.value) ? e.ref.value : t.value, e);
}
var wC = (e, t, n, r) => {
    const i = {};
    for (const s of e) {
      const a = F(t, s);
      a && fe(i, s, a._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: r,
    };
  },
  Ds = (e) =>
    Ee(e)
      ? e
      : Vl(e)
        ? e.source
        : Me(e)
          ? Vl(e.value)
            ? e.value.source
            : e.value
          : e,
  _C = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function dv(e, t, n) {
  const r = F(e, n);
  if (r || Lh(n)) return { error: r, name: n };
  const i = n.split('.');
  for (; i.length; ) {
    const s = i.join('.'),
      a = F(t, s),
      o = F(e, s);
    if (a && !Array.isArray(a) && n !== s) return { name: n };
    if (o && o.type) return { name: s, error: o };
    i.pop();
  }
  return { name: n };
}
var bC = (e, t, n, r, i) =>
    i.isOnAll
      ? !1
      : !n && i.isOnTouch
        ? !(t || e)
        : (n ? r.isOnBlur : i.isOnBlur)
          ? !e
          : (n ? r.isOnChange : i.isOnChange)
            ? e
            : !0,
  kC = (e, t) => !Cu(F(e, t)).length && Re(e, t);
const xC = {
  mode: qt.onSubmit,
  reValidateMode: qt.onChange,
  shouldFocusError: !0,
};
function SC(e = {}) {
  let t = { ...xC, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: rr(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    i =
      Me(t.defaultValues) || Me(t.values)
        ? Ct(t.defaultValues || t.values) || {}
        : {},
    s = t.shouldUnregister ? {} : Ct(i),
    a = { action: !1, mount: !1, watch: !1 },
    o = {
      mount: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    f = { values: _c(), array: _c(), state: _c() },
    d = sv(t.mode),
    m = sv(t.reValidateMode),
    y = t.criteriaMode === qt.all,
    b = (_) => (x) => {
      clearTimeout(u), (u = setTimeout(_, x));
    },
    P = async (_) => {
      if (c.isValid || _) {
        const x = t.resolver ? mt((await O()).errors) : await V(r, !0);
        x !== n.isValid && f.state.next({ isValid: x });
      }
    },
    v = (_, x) => {
      (c.isValidating || c.validatingFields) &&
        ((_ || Array.from(o.mount)).forEach((E) => {
          E && (x ? fe(n.validatingFields, E, x) : Re(n.validatingFields, E));
        }),
        f.state.next({
          validatingFields: n.validatingFields,
          isValidating: !mt(n.validatingFields),
        }));
    },
    p = (_, x = [], E, D, N = !0, A = !0) => {
      if (D && E) {
        if (((a.action = !0), A && Array.isArray(F(r, _)))) {
          const H = E(F(r, _), D.argA, D.argB);
          N && fe(r, _, H);
        }
        if (A && Array.isArray(F(n.errors, _))) {
          const H = E(F(n.errors, _), D.argA, D.argB);
          N && fe(n.errors, _, H), kC(n.errors, _);
        }
        if (c.touchedFields && A && Array.isArray(F(n.touchedFields, _))) {
          const H = E(F(n.touchedFields, _), D.argA, D.argB);
          N && fe(n.touchedFields, _, H);
        }
        c.dirtyFields && (n.dirtyFields = Mo(i, s)),
          f.state.next({
            name: _,
            isDirty: q(_, x),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else fe(s, _, x);
    },
    g = (_, x) => {
      fe(n.errors, _, x), f.state.next({ errors: n.errors });
    },
    k = (_) => {
      (n.errors = _), f.state.next({ errors: n.errors, isValid: !1 });
    },
    S = (_, x, E, D) => {
      const N = F(r, _);
      if (N) {
        const A = F(s, _, Ee(E) ? F(i, _) : E);
        Ee(A) || (D && D.defaultChecked) || x
          ? fe(s, _, x ? A : kc(N._f))
          : xe(_, A),
          a.mount && P();
      }
    },
    T = (_, x, E, D, N) => {
      let A = !1,
        H = !1;
      const re = { name: _ },
        Oe = !!(F(r, _) && F(r, _)._f && F(r, _)._f.disabled);
      if (!E || D) {
        c.isDirty &&
          ((H = n.isDirty),
          (n.isDirty = re.isDirty = q()),
          (A = H !== re.isDirty));
        const dt = Oe || Dr(F(i, _), x);
        (H = !!(!Oe && F(n.dirtyFields, _))),
          dt || Oe ? Re(n.dirtyFields, _) : fe(n.dirtyFields, _, !0),
          (re.dirtyFields = n.dirtyFields),
          (A = A || (c.dirtyFields && H !== !dt));
      }
      if (E) {
        const dt = F(n.touchedFields, _);
        dt ||
          (fe(n.touchedFields, _, E),
          (re.touchedFields = n.touchedFields),
          (A = A || (c.touchedFields && dt !== E)));
      }
      return A && N && f.state.next(re), A ? re : {};
    },
    R = (_, x, E, D) => {
      const N = F(n.errors, _),
        A = c.isValid && Bn(x) && n.isValid !== x;
      if (
        (e.delayError && E
          ? ((l = b(() => g(_, E))), l(e.delayError))
          : (clearTimeout(u),
            (l = null),
            E ? fe(n.errors, _, E) : Re(n.errors, _)),
        (E ? !Dr(N, E) : N) || !mt(D) || A)
      ) {
        const H = {
          ...D,
          ...(A && Bn(x) ? { isValid: x } : {}),
          errors: n.errors,
          name: _,
        };
        (n = { ...n, ...H }), f.state.next(H);
      }
    },
    O = async (_) => {
      v(_, !0);
      const x = await t.resolver(
        s,
        t.context,
        wC(_ || o.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return v(_), x;
    },
    B = async (_) => {
      const { errors: x } = await O(_);
      if (_)
        for (const E of _) {
          const D = F(x, E);
          D ? fe(n.errors, E, D) : Re(n.errors, E);
        }
      else n.errors = x;
      return x;
    },
    V = async (_, x, E = { valid: !0 }) => {
      for (const D in _) {
        const N = _[D];
        if (N) {
          const { _f: A, ...H } = N;
          if (A) {
            const re = o.array.has(A.name);
            v([D], !0);
            const Oe = await fv(N, s, y, t.shouldUseNativeValidation && !x, re);
            if ((v([D]), Oe[A.name] && ((E.valid = !1), x))) break;
            !x &&
              (F(Oe, A.name)
                ? re
                  ? mC(n.errors, Oe, A.name)
                  : fe(n.errors, A.name, Oe[A.name])
                : Re(n.errors, A.name));
          }
          H && (await V(H, x, E));
        }
      }
      return E.valid;
    },
    Ae = () => {
      for (const _ of o.unMount) {
        const x = F(r, _);
        x &&
          (x._f.refs ? x._f.refs.every((E) => !bc(E)) : !bc(x._f.ref)) &&
          Mt(_);
      }
      o.unMount = new Set();
    },
    q = (_, x) => (_ && x && fe(s, _, x), !Dr(me(), i)),
    K = (_, x, E) =>
      hC(_, o, { ...(a.mount ? s : Ee(x) ? i : on(_) ? { [_]: x } : x) }, E, x),
    ne = (_) =>
      Cu(F(a.mount ? s : i, _, e.shouldUnregister ? F(i, _, []) : [])),
    xe = (_, x, E = {}) => {
      const D = F(r, _);
      let N = x;
      if (D) {
        const A = D._f;
        A &&
          (!A.disabled && fe(s, _, P1(x, A)),
          (N = Ul(A.ref) && tt(x) ? '' : x),
          S1(A.ref)
            ? [...A.ref.options].forEach(
                (H) => (H.selected = N.includes(H.value))
              )
            : A.refs
              ? no(A.ref)
                ? A.refs.length > 1
                  ? A.refs.forEach(
                      (H) =>
                        (!H.defaultChecked || !H.disabled) &&
                        (H.checked = Array.isArray(N)
                          ? !!N.find((re) => re === H.value)
                          : N === H.value)
                    )
                  : A.refs[0] && (A.refs[0].checked = !!N)
                : A.refs.forEach((H) => (H.checked = H.value === N))
              : Dh(A.ref)
                ? (A.ref.value = '')
                : ((A.ref.value = N),
                  A.ref.type || f.values.next({ name: _, values: { ...s } })));
      }
      (E.shouldDirty || E.shouldTouch) &&
        T(_, N, E.shouldTouch, E.shouldDirty, !0),
        E.shouldValidate && Q(_);
    },
    $e = (_, x, E) => {
      for (const D in x) {
        const N = x[D],
          A = `${_}.${D}`,
          H = F(r, A);
        (o.array.has(_) || !Hl(N) || (H && !H._f)) && !Ri(N)
          ? $e(A, N, E)
          : xe(A, N, E);
      }
    },
    Pe = (_, x, E = {}) => {
      const D = F(r, _),
        N = o.array.has(_),
        A = Ct(x);
      fe(s, _, A),
        N
          ? (f.array.next({ name: _, values: { ...s } }),
            (c.isDirty || c.dirtyFields) &&
              E.shouldDirty &&
              f.state.next({
                name: _,
                dirtyFields: Mo(i, s),
                isDirty: q(_, A),
              }))
          : D && !D._f && !tt(A)
            ? $e(_, A, E)
            : xe(_, A, E),
        av(_, o) && f.state.next({ ...n }),
        f.values.next({ name: a.mount ? _ : void 0, values: { ...s } });
    },
    L = async (_) => {
      a.mount = !0;
      const x = _.target;
      let E = x.name,
        D = !0;
      const N = F(r, E),
        A = () => (x.type ? kc(N._f) : aC(_)),
        H = (re) => {
          D = Number.isNaN(re) || re === F(s, E, re);
        };
      if (N) {
        let re, Oe;
        const dt = A(),
          li = _.type === iv.BLUR || _.type === iv.FOCUS_OUT,
          U1 =
            (!_C(N._f) && !t.resolver && !F(n.errors, E) && !N._f.deps) ||
            bC(li, F(n.touchedFields, E), n.isSubmitted, m, d),
          Ou = av(E, o, li);
        fe(s, E, dt),
          li
            ? (N._f.onBlur && N._f.onBlur(_), l && l(0))
            : N._f.onChange && N._f.onChange(_);
        const ju = T(E, dt, li, !1),
          V1 = !mt(ju) || Ou;
        if (
          (!li && f.values.next({ name: E, type: _.type, values: { ...s } }),
          U1)
        )
          return (
            c.isValid && P(), V1 && f.state.next({ name: E, ...(Ou ? {} : ju) })
          );
        if ((!li && Ou && f.state.next({ ...n }), t.resolver)) {
          const { errors: Uh } = await O([E]);
          if ((H(dt), D)) {
            const H1 = dv(n.errors, r, E),
              Vh = dv(Uh, r, H1.name || E);
            (re = Vh.error), (E = Vh.name), (Oe = mt(Uh));
          }
        } else
          v([E], !0),
            (re = (await fv(N, s, y, t.shouldUseNativeValidation))[E]),
            v([E]),
            H(dt),
            D && (re ? (Oe = !1) : c.isValid && (Oe = await V(r, !0)));
        D && (N._f.deps && Q(N._f.deps), R(E, Oe, re, ju));
      }
    },
    W = (_, x) => {
      if (F(n.errors, x) && _.focus) return _.focus(), 1;
    },
    Q = async (_, x = {}) => {
      let E, D;
      const N = rl(_);
      if (t.resolver) {
        const A = await B(Ee(_) ? _ : N);
        (E = mt(A)), (D = _ ? !N.some((H) => F(A, H)) : E);
      } else
        _
          ? ((D = (
              await Promise.all(
                N.map(async (A) => {
                  const H = F(r, A);
                  return await V(H && H._f ? { [A]: H } : H);
                })
              )
            ).every(Boolean)),
            !(!D && !n.isValid) && P())
          : (D = E = await V(r));
      return (
        f.state.next({
          ...(!on(_) || (c.isValid && E !== n.isValid) ? {} : { name: _ }),
          ...(t.resolver || !_ ? { isValid: E } : {}),
          errors: n.errors,
        }),
        x.shouldFocus && !D && sa(r, W, _ ? N : o.mount),
        D
      );
    },
    me = (_) => {
      const x = { ...(a.mount ? s : i) };
      return Ee(_) ? x : on(_) ? F(x, _) : _.map((E) => F(x, E));
    },
    Se = (_, x) => ({
      invalid: !!F((x || n).errors, _),
      isDirty: !!F((x || n).dirtyFields, _),
      error: F((x || n).errors, _),
      isValidating: !!F(n.validatingFields, _),
      isTouched: !!F((x || n).touchedFields, _),
    }),
    oi = (_) => {
      _ && rl(_).forEach((x) => Re(n.errors, x)),
        f.state.next({ errors: _ ? n.errors : {} });
    },
    Xt = (_, x, E) => {
      const D = (F(r, _, { _f: {} })._f || {}).ref,
        N = F(n.errors, _) || {},
        { ref: A, message: H, type: re, ...Oe } = N;
      fe(n.errors, _, { ...Oe, ...x, ref: D }),
        f.state.next({ name: _, errors: n.errors, isValid: !1 }),
        E && E.shouldFocus && D && D.focus && D.focus();
    },
    Ss = (_, x) =>
      rr(_)
        ? f.values.subscribe({ next: (E) => _(K(void 0, x), E) })
        : K(_, x, !0),
    Mt = (_, x = {}) => {
      for (const E of _ ? rl(_) : o.mount)
        o.mount.delete(E),
          o.array.delete(E),
          x.keepValue || (Re(r, E), Re(s, E)),
          !x.keepError && Re(n.errors, E),
          !x.keepDirty && Re(n.dirtyFields, E),
          !x.keepTouched && Re(n.touchedFields, E),
          !x.keepIsValidating && Re(n.validatingFields, E),
          !t.shouldUnregister && !x.keepDefaultValue && Re(i, E);
      f.values.next({ values: { ...s } }),
        f.state.next({ ...n, ...(x.keepDirty ? { isDirty: q() } : {}) }),
        !x.keepIsValid && P();
    },
    kr = ({ disabled: _, name: x, field: E, fields: D, value: N }) => {
      if ((Bn(_) && a.mount) || _) {
        const A = _ ? void 0 : Ee(N) ? kc(E ? E._f : F(D, x)._f) : N;
        fe(s, x, A), T(x, A, !1, !1, !0);
      }
    },
    Pu = (_, x = {}) => {
      let E = F(r, _);
      const D = Bn(x.disabled);
      return (
        fe(r, _, {
          ...(E || {}),
          _f: {
            ...(E && E._f ? E._f : { ref: { name: _ } }),
            name: _,
            mount: !0,
            ...x,
          },
        }),
        o.mount.add(_),
        E
          ? kr({ field: E, disabled: x.disabled, name: _, value: x.value })
          : S(_, !0, x.value),
        {
          ...(D ? { disabled: x.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!x.required,
                min: Ds(x.min),
                max: Ds(x.max),
                minLength: Ds(x.minLength),
                maxLength: Ds(x.maxLength),
                pattern: Ds(x.pattern),
              }
            : {}),
          name: _,
          onChange: L,
          onBlur: L,
          ref: (N) => {
            if (N) {
              Pu(_, x), (E = F(r, _));
              const A =
                  (Ee(N.value) &&
                    N.querySelectorAll &&
                    N.querySelectorAll('input,select,textarea')[0]) ||
                  N,
                H = yC(A),
                re = E._f.refs || [];
              if (H ? re.find((Oe) => Oe === A) : A === E._f.ref) return;
              fe(r, _, {
                _f: {
                  ...E._f,
                  ...(H
                    ? {
                        refs: [
                          ...re.filter(bc),
                          A,
                          ...(Array.isArray(F(i, _)) ? [{}] : []),
                        ],
                        ref: { type: A.type, name: _ },
                      }
                    : { ref: A }),
                },
              }),
                S(_, !1, void 0, A);
            } else
              (E = F(r, _, {})),
                E._f && (E._f.mount = !1),
                (t.shouldUnregister || x.shouldUnregister) &&
                  !(lC(o.array, _) && a.action) &&
                  o.unMount.add(_);
          },
        }
      );
    },
    Mh = () => t.shouldFocusError && sa(r, W, o.mount),
    F1 = (_) => {
      Bn(_) &&
        (f.state.next({ disabled: _ }),
        sa(
          r,
          (x, E) => {
            const D = F(r, E);
            D &&
              ((x.disabled = D._f.disabled || _),
              Array.isArray(D._f.refs) &&
                D._f.refs.forEach((N) => {
                  N.disabled = D._f.disabled || _;
                }));
          },
          0,
          !1
        ));
    },
    $h = (_, x) => async (E) => {
      let D;
      E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
      let N = Ct(s);
      if ((f.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: A, values: H } = await O();
        (n.errors = A), (N = H);
      } else await V(r);
      if ((Re(n.errors, 'root'), mt(n.errors))) {
        f.state.next({ errors: {} });
        try {
          await _(N, E);
        } catch (A) {
          D = A;
        }
      } else x && (await x({ ...n.errors }, E)), Mh(), setTimeout(Mh);
      if (
        (f.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: mt(n.errors) && !D,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        D)
      )
        throw D;
    },
    z1 = (_, x = {}) => {
      F(r, _) &&
        (Ee(x.defaultValue)
          ? Pe(_, Ct(F(i, _)))
          : (Pe(_, x.defaultValue), fe(i, _, Ct(x.defaultValue))),
        x.keepTouched || Re(n.touchedFields, _),
        x.keepDirty ||
          (Re(n.dirtyFields, _),
          (n.isDirty = x.defaultValue ? q(_, Ct(F(i, _))) : q())),
        x.keepError || (Re(n.errors, _), c.isValid && P()),
        f.state.next({ ...n }));
    },
    Fh = (_, x = {}) => {
      const E = _ ? Ct(_) : i,
        D = Ct(E),
        N = mt(_),
        A = N ? i : D;
      if ((x.keepDefaultValues || (i = E), !x.keepValues)) {
        if (x.keepDirtyValues)
          for (const H of o.mount)
            F(n.dirtyFields, H) ? fe(A, H, F(s, H)) : Pe(H, F(A, H));
        else {
          if (Nh && Ee(_))
            for (const H of o.mount) {
              const re = F(r, H);
              if (re && re._f) {
                const Oe = Array.isArray(re._f.refs)
                  ? re._f.refs[0]
                  : re._f.ref;
                if (Ul(Oe)) {
                  const dt = Oe.closest('form');
                  if (dt) {
                    dt.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (s = e.shouldUnregister ? (x.keepDefaultValues ? Ct(i) : {}) : Ct(A)),
          f.array.next({ values: { ...A } }),
          f.values.next({ values: { ...A } });
      }
      (o = {
        mount: x.keepDirtyValues ? o.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (a.mount = !c.isValid || !!x.keepIsValid || !!x.keepDirtyValues),
        (a.watch = !!e.shouldUnregister),
        f.state.next({
          submitCount: x.keepSubmitCount ? n.submitCount : 0,
          isDirty: N
            ? !1
            : x.keepDirty
              ? n.isDirty
              : !!(x.keepDefaultValues && !Dr(_, i)),
          isSubmitted: x.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: N
            ? {}
            : x.keepDirtyValues
              ? x.keepDefaultValues && s
                ? Mo(i, s)
                : n.dirtyFields
              : x.keepDefaultValues && _
                ? Mo(i, _)
                : x.keepDirty
                  ? n.dirtyFields
                  : {},
          touchedFields: x.keepTouched ? n.touchedFields : {},
          errors: x.keepErrors ? n.errors : {},
          isSubmitSuccessful: x.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    zh = (_, x) => Fh(rr(_) ? _(s) : _, x);
  return {
    control: {
      register: Pu,
      unregister: Mt,
      getFieldState: Se,
      handleSubmit: $h,
      setError: Xt,
      _executeSchema: O,
      _getWatch: K,
      _getDirty: q,
      _updateValid: P,
      _removeUnmounted: Ae,
      _updateFieldArray: p,
      _updateDisabledField: kr,
      _getFieldArray: ne,
      _reset: Fh,
      _resetDefaultValues: () =>
        rr(t.defaultValues) &&
        t.defaultValues().then((_) => {
          zh(_, t.resetOptions), f.state.next({ isLoading: !1 });
        }),
      _updateFormState: (_) => {
        n = { ...n, ..._ };
      },
      _disableForm: F1,
      _subjects: f,
      _proxyFormState: c,
      _setErrors: k,
      get _fields() {
        return r;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return a;
      },
      set _state(_) {
        a = _;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return o;
      },
      set _names(_) {
        o = _;
      },
      get _formState() {
        return n;
      },
      set _formState(_) {
        n = _;
      },
      get _options() {
        return t;
      },
      set _options(_) {
        t = { ...t, ..._ };
      },
    },
    trigger: Q,
    register: Pu,
    handleSubmit: $h,
    watch: Ss,
    setValue: Pe,
    getValues: me,
    reset: zh,
    resetField: z1,
    clearErrors: oi,
    unregister: Mt,
    setError: Xt,
    setFocus: (_, x = {}) => {
      const E = F(r, _),
        D = E && E._f;
      if (D) {
        const N = D.refs ? D.refs[0] : D.ref;
        N.focus && (N.focus(), x.shouldSelect && N.select());
      }
    },
    getFieldState: Se,
  };
}
function EC(e = {}) {
  const t = Ye.useRef(),
    n = Ye.useRef(),
    [r, i] = Ye.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: rr(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: rr(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...SC(e), formState: r });
  const s = t.current.control;
  return (
    (s._options = e),
    dC({
      subject: s._subjects.state,
      next: (a) => {
        fC(a, s._proxyFormState, s._updateFormState, !0) &&
          i({ ...s._formState });
      },
    }),
    Ye.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]),
    Ye.useEffect(() => {
      if (s._proxyFormState.isDirty) {
        const a = s._getDirty();
        a !== r.isDirty && s._subjects.state.next({ isDirty: a });
      }
    }, [s, r.isDirty]),
    Ye.useEffect(() => {
      e.values && !Dr(e.values, n.current)
        ? (s._reset(e.values, s._options.resetOptions),
          (n.current = e.values),
          i((a) => ({ ...a })))
        : s._resetDefaultValues();
    }, [e.values, s]),
    Ye.useEffect(() => {
      e.errors && s._setErrors(e.errors);
    }, [e.errors, s]),
    Ye.useEffect(() => {
      s._state.mount || (s._updateValid(), (s._state.mount = !0)),
        s._state.watch &&
          ((s._state.watch = !1), s._subjects.state.next({ ...s._formState })),
        s._removeUnmounted();
    }),
    Ye.useEffect(() => {
      e.shouldUnregister && s._subjects.values.next({ values: s._getWatch() });
    }, [e.shouldUnregister, s]),
    (t.current.formState = cC(r, s)),
    t.current
  );
}
const CC = '_createUpdate_cna8o_1',
  PC = '_icon_cna8o_21',
  OC = '_mandatory_cna8o_79',
  jC = '_file_cna8o_93',
  TC = '_fileWrapper_cna8o_121',
  Et = { createUpdate: CC, icon: PC, mandatory: OC, file: jC, fileWrapper: TC };
function ie(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || (typeof e == 'object' && t === '[object Date]')
    ? new e.constructor(+e)
    : typeof e == 'number' ||
        t === '[object Number]' ||
        typeof e == 'string' ||
        t === '[object String]'
      ? new Date(e)
      : new Date(NaN);
}
function cn(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function xc(e, t) {
  const n = ie(e);
  return isNaN(t) ? cn(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function AC(e, t) {
  const n = +ie(e);
  return cn(e, n + t);
}
const O1 = 6048e5,
  RC = 864e5,
  NC = 36e5,
  $o = 43200,
  hv = 1440;
function LC(e, t) {
  return AC(e, t * NC);
}
let DC = {};
function ro() {
  return DC;
}
function Ta(e, t) {
  var o, l, u, c;
  const n = ro(),
    r =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((l = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) ==
      null
        ? void 0
        : l.weekStartsOn) ??
      n.weekStartsOn ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : c.weekStartsOn) ??
      0,
    i = ie(e),
    s = i.getDay(),
    a = (s < r ? 7 : 0) + s - r;
  return i.setDate(i.getDate() - a), i.setHours(0, 0, 0, 0), i;
}
function Wl(e) {
  return Ta(e, { weekStartsOn: 1 });
}
function j1(e) {
  const t = ie(e),
    n = t.getFullYear(),
    r = cn(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const i = Wl(r),
    s = cn(e, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const a = Wl(s);
  return t.getTime() >= i.getTime()
    ? n + 1
    : t.getTime() >= a.getTime()
      ? n
      : n - 1;
}
function pv(e) {
  const t = ie(e);
  return t.setHours(0, 0, 0, 0), t;
}
function ql(e) {
  const t = ie(e),
    n = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function IC(e, t) {
  const n = pv(e),
    r = pv(t),
    i = +n - ql(n),
    s = +r - ql(r);
  return Math.round((i - s) / RC);
}
function MC(e) {
  const t = j1(e),
    n = cn(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Wl(n);
}
function sl(e, t) {
  const n = ie(e),
    r = ie(t),
    i = n.getTime() - r.getTime();
  return i < 0 ? -1 : i > 0 ? 1 : i;
}
function $C(e) {
  return cn(e, Date.now());
}
function FC(e) {
  return (
    e instanceof Date ||
    (typeof e == 'object' &&
      Object.prototype.toString.call(e) === '[object Date]')
  );
}
function zC(e) {
  if (!FC(e) && typeof e != 'number') return !1;
  const t = ie(e);
  return !isNaN(Number(t));
}
function UC(e, t) {
  const n = ie(e),
    r = ie(t),
    i = n.getFullYear() - r.getFullYear(),
    s = n.getMonth() - r.getMonth();
  return i * 12 + s;
}
function VC(e) {
  return (t) => {
    const r = (e ? Math[e] : Math.trunc)(t);
    return r === 0 ? 0 : r;
  };
}
function HC(e, t) {
  return +ie(e) - +ie(t);
}
function BC(e) {
  const t = ie(e);
  return t.setHours(23, 59, 59, 999), t;
}
function WC(e) {
  const t = ie(e),
    n = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
  );
}
function qC(e) {
  const t = ie(e);
  return +BC(t) == +WC(t);
}
function QC(e, t) {
  const n = ie(e),
    r = ie(t),
    i = sl(n, r),
    s = Math.abs(UC(n, r));
  let a;
  if (s < 1) a = 0;
  else {
    n.getMonth() === 1 && n.getDate() > 27 && n.setDate(30),
      n.setMonth(n.getMonth() - i * s);
    let o = sl(n, r) === -i;
    qC(ie(e)) && s === 1 && sl(e, r) === 1 && (o = !1),
      (a = i * (s - Number(o)));
  }
  return a === 0 ? 0 : a;
}
function YC(e, t, n) {
  const r = HC(e, t) / 1e3;
  return VC(n == null ? void 0 : n.roundingMethod)(r);
}
function KC(e) {
  const t = ie(e),
    n = cn(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const GC = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds',
    },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes',
    },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  XC = (e, t, n) => {
    let r;
    const i = GC[e];
    return (
      typeof i == 'string'
        ? (r = i)
        : t === 1
          ? (r = i.one)
          : (r = i.other.replace('{{count}}', t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? 'in ' + r
          : r + ' ago'
        : r
    );
  };
function Sc(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const JC = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  ZC = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a',
  },
  eP = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  tP = {
    date: Sc({ formats: JC, defaultWidth: 'full' }),
    time: Sc({ formats: ZC, defaultWidth: 'full' }),
    dateTime: Sc({ formats: eP, defaultWidth: 'full' }),
  },
  nP = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  rP = (e, t, n, r) => nP[e];
function Is(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : 'standalone';
    let i;
    if (r === 'formatting' && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth,
        o = n != null && n.width ? String(n.width) : a;
      i = e.formattingValues[o] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth,
        o = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[o] || e.values[a];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[s];
  };
}
const iP = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  sP = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  aP = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  oP = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  lP = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  uP = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  cP = (e, t) => {
    const n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + 'st';
        case 2:
          return n + 'nd';
        case 3:
          return n + 'rd';
      }
    return n + 'th';
  },
  fP = {
    ordinalNumber: cP,
    era: Is({ values: iP, defaultWidth: 'wide' }),
    quarter: Is({
      values: sP,
      defaultWidth: 'wide',
      argumentCallback: (e) => e - 1,
    }),
    month: Is({ values: aP, defaultWidth: 'wide' }),
    day: Is({ values: oP, defaultWidth: 'wide' }),
    dayPeriod: Is({
      values: lP,
      defaultWidth: 'wide',
      formattingValues: uP,
      defaultFormattingWidth: 'wide',
    }),
  };
function Ms(e) {
  return (t, n = {}) => {
    const r = n.width,
      i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      s = t.match(i);
    if (!s) return null;
    const a = s[0],
      o = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(o) ? hP(o, (f) => f.test(a)) : dP(o, (f) => f.test(a));
    let u;
    (u = e.valueCallback ? e.valueCallback(l) : l),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const c = t.slice(a.length);
    return { value: u, rest: c };
  };
}
function dP(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function hP(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function pP(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0],
      s = t.match(e.parsePattern);
    if (!s) return null;
    let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const o = t.slice(i.length);
    return { value: a, rest: o };
  };
}
const mP = /^(\d+)(th|st|nd|rd)?/i,
  vP = /\d+/i,
  gP = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  yP = { any: [/^b/i, /^(a|c)/i] },
  wP = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  _P = { any: [/1/i, /2/i, /3/i, /4/i] },
  bP = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  kP = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  xP = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  SP = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  EP = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  CP = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  PP = {
    ordinalNumber: pP({
      matchPattern: mP,
      parsePattern: vP,
      valueCallback: (e) => parseInt(e, 10),
    }),
    era: Ms({
      matchPatterns: gP,
      defaultMatchWidth: 'wide',
      parsePatterns: yP,
      defaultParseWidth: 'any',
    }),
    quarter: Ms({
      matchPatterns: wP,
      defaultMatchWidth: 'wide',
      parsePatterns: _P,
      defaultParseWidth: 'any',
      valueCallback: (e) => e + 1,
    }),
    month: Ms({
      matchPatterns: bP,
      defaultMatchWidth: 'wide',
      parsePatterns: kP,
      defaultParseWidth: 'any',
    }),
    day: Ms({
      matchPatterns: xP,
      defaultMatchWidth: 'wide',
      parsePatterns: SP,
      defaultParseWidth: 'any',
    }),
    dayPeriod: Ms({
      matchPatterns: EP,
      defaultMatchWidth: 'any',
      parsePatterns: CP,
      defaultParseWidth: 'any',
    }),
  },
  T1 = {
    code: 'en-US',
    formatDistance: XC,
    formatLong: tP,
    formatRelative: rP,
    localize: fP,
    match: PP,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
function OP(e) {
  const t = ie(e);
  return IC(t, KC(t)) + 1;
}
function jP(e) {
  const t = ie(e),
    n = +Wl(t) - +MC(t);
  return Math.round(n / O1) + 1;
}
function A1(e, t) {
  var c, f, d, m;
  const n = ie(e),
    r = n.getFullYear(),
    i = ro(),
    s =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((f = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : f.firstWeekContainsDate) ??
      i.firstWeekContainsDate ??
      ((m = (d = i.locale) == null ? void 0 : d.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      1,
    a = cn(e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const o = Ta(a, t),
    l = cn(e, 0);
  l.setFullYear(r, 0, s), l.setHours(0, 0, 0, 0);
  const u = Ta(l, t);
  return n.getTime() >= o.getTime()
    ? r + 1
    : n.getTime() >= u.getTime()
      ? r
      : r - 1;
}
function TP(e, t) {
  var o, l, u, c;
  const n = ro(),
    r =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((l = (o = t == null ? void 0 : t.locale) == null ? void 0 : o.options) ==
      null
        ? void 0
        : l.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((c = (u = n.locale) == null ? void 0 : u.options) == null
        ? void 0
        : c.firstWeekContainsDate) ??
      1,
    i = A1(e, t),
    s = cn(e, 0);
  return s.setFullYear(i, 0, r), s.setHours(0, 0, 0, 0), Ta(s, t);
}
function AP(e, t) {
  const n = ie(e),
    r = +Ta(n, t) - +TP(n, t);
  return Math.round(r / O1) + 1;
}
function se(e, t) {
  const n = e < 0 ? '-' : '',
    r = Math.abs(e).toString().padStart(t, '0');
  return n + r;
}
const Nn = {
    y(e, t) {
      const n = e.getFullYear(),
        r = n > 0 ? n : 1 - n;
      return se(t === 'yy' ? r % 100 : r, t.length);
    },
    M(e, t) {
      const n = e.getMonth();
      return t === 'M' ? String(n + 1) : se(n + 1, 2);
    },
    d(e, t) {
      return se(e.getDate(), t.length);
    },
    a(e, t) {
      const n = e.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return n.toUpperCase();
        case 'aaa':
          return n;
        case 'aaaaa':
          return n[0];
        case 'aaaa':
        default:
          return n === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h(e, t) {
      return se(e.getHours() % 12 || 12, t.length);
    },
    H(e, t) {
      return se(e.getHours(), t.length);
    },
    m(e, t) {
      return se(e.getMinutes(), t.length);
    },
    s(e, t) {
      return se(e.getSeconds(), t.length);
    },
    S(e, t) {
      const n = t.length,
        r = e.getMilliseconds(),
        i = Math.trunc(r * Math.pow(10, n - 3));
      return se(i, t.length);
    },
  },
  mi = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  mv = {
    G: function (e, t, n) {
      const r = e.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case 'G':
        case 'GG':
        case 'GGG':
          return n.era(r, { width: 'abbreviated' });
        case 'GGGGG':
          return n.era(r, { width: 'narrow' });
        case 'GGGG':
        default:
          return n.era(r, { width: 'wide' });
      }
    },
    y: function (e, t, n) {
      if (t === 'yo') {
        const r = e.getFullYear(),
          i = r > 0 ? r : 1 - r;
        return n.ordinalNumber(i, { unit: 'year' });
      }
      return Nn.y(e, t);
    },
    Y: function (e, t, n, r) {
      const i = A1(e, r),
        s = i > 0 ? i : 1 - i;
      if (t === 'YY') {
        const a = s % 100;
        return se(a, 2);
      }
      return t === 'Yo'
        ? n.ordinalNumber(s, { unit: 'year' })
        : se(s, t.length);
    },
    R: function (e, t) {
      const n = j1(e);
      return se(n, t.length);
    },
    u: function (e, t) {
      const n = e.getFullYear();
      return se(n, t.length);
    },
    Q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(r);
        case 'QQ':
          return se(r, 2);
        case 'Qo':
          return n.ordinalNumber(r, { unit: 'quarter' });
        case 'QQQ':
          return n.quarter(r, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return n.quarter(r, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return n.quarter(r, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (e, t, n) {
      const r = Math.ceil((e.getMonth() + 1) / 3);
      switch (t) {
        case 'q':
          return String(r);
        case 'qq':
          return se(r, 2);
        case 'qo':
          return n.ordinalNumber(r, { unit: 'quarter' });
        case 'qqq':
          return n.quarter(r, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return n.quarter(r, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return n.quarter(r, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case 'M':
        case 'MM':
          return Nn.M(e, t);
        case 'Mo':
          return n.ordinalNumber(r + 1, { unit: 'month' });
        case 'MMM':
          return n.month(r, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return n.month(r, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return n.month(r, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (e, t, n) {
      const r = e.getMonth();
      switch (t) {
        case 'L':
          return String(r + 1);
        case 'LL':
          return se(r + 1, 2);
        case 'Lo':
          return n.ordinalNumber(r + 1, { unit: 'month' });
        case 'LLL':
          return n.month(r, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return n.month(r, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return n.month(r, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (e, t, n, r) {
      const i = AP(e, r);
      return t === 'wo'
        ? n.ordinalNumber(i, { unit: 'week' })
        : se(i, t.length);
    },
    I: function (e, t, n) {
      const r = jP(e);
      return t === 'Io'
        ? n.ordinalNumber(r, { unit: 'week' })
        : se(r, t.length);
    },
    d: function (e, t, n) {
      return t === 'do'
        ? n.ordinalNumber(e.getDate(), { unit: 'date' })
        : Nn.d(e, t);
    },
    D: function (e, t, n) {
      const r = OP(e);
      return t === 'Do'
        ? n.ordinalNumber(r, { unit: 'dayOfYear' })
        : se(r, t.length);
    },
    E: function (e, t, n) {
      const r = e.getDay();
      switch (t) {
        case 'E':
        case 'EE':
        case 'EEE':
          return n.day(r, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return n.day(r, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return n.day(r, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return n.day(r, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (e, t, n, r) {
      const i = e.getDay(),
        s = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'e':
          return String(s);
        case 'ee':
          return se(s, 2);
        case 'eo':
          return n.ordinalNumber(s, { unit: 'day' });
        case 'eee':
          return n.day(i, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return n.day(i, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return n.day(i, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return n.day(i, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (e, t, n, r) {
      const i = e.getDay(),
        s = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'c':
          return String(s);
        case 'cc':
          return se(s, t.length);
        case 'co':
          return n.ordinalNumber(s, { unit: 'day' });
        case 'ccc':
          return n.day(i, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return n.day(i, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return n.day(i, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return n.day(i, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (e, t, n) {
      const r = e.getDay(),
        i = r === 0 ? 7 : r;
      switch (t) {
        case 'i':
          return String(i);
        case 'ii':
          return se(i, t.length);
        case 'io':
          return n.ordinalNumber(i, { unit: 'day' });
        case 'iii':
          return n.day(r, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return n.day(r, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return n.day(r, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return n.day(r, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (e, t, n) {
      const i = e.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return n.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'aaa':
          return n
            .dayPeriod(i, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'aaaaa':
          return n.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return n.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (e, t, n) {
      const r = e.getHours();
      let i;
      switch (
        (r === 12
          ? (i = mi.noon)
          : r === 0
            ? (i = mi.midnight)
            : (i = r / 12 >= 1 ? 'pm' : 'am'),
        t)
      ) {
        case 'b':
        case 'bb':
          return n.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'bbb':
          return n
            .dayPeriod(i, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'bbbbb':
          return n.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return n.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (e, t, n) {
      const r = e.getHours();
      let i;
      switch (
        (r >= 17
          ? (i = mi.evening)
          : r >= 12
            ? (i = mi.afternoon)
            : r >= 4
              ? (i = mi.morning)
              : (i = mi.night),
        t)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return n.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'BBBBB':
          return n.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return n.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (e, t, n) {
      if (t === 'ho') {
        let r = e.getHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: 'hour' });
      }
      return Nn.h(e, t);
    },
    H: function (e, t, n) {
      return t === 'Ho'
        ? n.ordinalNumber(e.getHours(), { unit: 'hour' })
        : Nn.H(e, t);
    },
    K: function (e, t, n) {
      const r = e.getHours() % 12;
      return t === 'Ko'
        ? n.ordinalNumber(r, { unit: 'hour' })
        : se(r, t.length);
    },
    k: function (e, t, n) {
      let r = e.getHours();
      return (
        r === 0 && (r = 24),
        t === 'ko' ? n.ordinalNumber(r, { unit: 'hour' }) : se(r, t.length)
      );
    },
    m: function (e, t, n) {
      return t === 'mo'
        ? n.ordinalNumber(e.getMinutes(), { unit: 'minute' })
        : Nn.m(e, t);
    },
    s: function (e, t, n) {
      return t === 'so'
        ? n.ordinalNumber(e.getSeconds(), { unit: 'second' })
        : Nn.s(e, t);
    },
    S: function (e, t) {
      return Nn.S(e, t);
    },
    X: function (e, t, n) {
      const r = e.getTimezoneOffset();
      if (r === 0) return 'Z';
      switch (t) {
        case 'X':
          return gv(r);
        case 'XXXX':
        case 'XX':
          return Or(r);
        case 'XXXXX':
        case 'XXX':
        default:
          return Or(r, ':');
      }
    },
    x: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'x':
          return gv(r);
        case 'xxxx':
        case 'xx':
          return Or(r);
        case 'xxxxx':
        case 'xxx':
        default:
          return Or(r, ':');
      }
    },
    O: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + vv(r, ':');
        case 'OOOO':
        default:
          return 'GMT' + Or(r, ':');
      }
    },
    z: function (e, t, n) {
      const r = e.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + vv(r, ':');
        case 'zzzz':
        default:
          return 'GMT' + Or(r, ':');
      }
    },
    t: function (e, t, n) {
      const r = Math.trunc(e.getTime() / 1e3);
      return se(r, t.length);
    },
    T: function (e, t, n) {
      const r = e.getTime();
      return se(r, t.length);
    },
  };
function vv(e, t = '') {
  const n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    i = Math.trunc(r / 60),
    s = r % 60;
  return s === 0 ? n + String(i) : n + String(i) + t + se(s, 2);
}
function gv(e, t) {
  return e % 60 === 0
    ? (e > 0 ? '-' : '+') + se(Math.abs(e) / 60, 2)
    : Or(e, t);
}
function Or(e, t = '') {
  const n = e > 0 ? '-' : '+',
    r = Math.abs(e),
    i = se(Math.trunc(r / 60), 2),
    s = se(r % 60, 2);
  return n + i + t + s;
}
const yv = (e, t) => {
    switch (e) {
      case 'P':
        return t.date({ width: 'short' });
      case 'PP':
        return t.date({ width: 'medium' });
      case 'PPP':
        return t.date({ width: 'long' });
      case 'PPPP':
      default:
        return t.date({ width: 'full' });
    }
  },
  R1 = (e, t) => {
    switch (e) {
      case 'p':
        return t.time({ width: 'short' });
      case 'pp':
        return t.time({ width: 'medium' });
      case 'ppp':
        return t.time({ width: 'long' });
      case 'pppp':
      default:
        return t.time({ width: 'full' });
    }
  },
  RP = (e, t) => {
    const n = e.match(/(P+)(p+)?/) || [],
      r = n[1],
      i = n[2];
    if (!i) return yv(e, t);
    let s;
    switch (r) {
      case 'P':
        s = t.dateTime({ width: 'short' });
        break;
      case 'PP':
        s = t.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        s = t.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        s = t.dateTime({ width: 'full' });
        break;
    }
    return s.replace('{{date}}', yv(r, t)).replace('{{time}}', R1(i, t));
  },
  NP = { p: R1, P: RP },
  LP = /^D+$/,
  DP = /^Y+$/,
  IP = ['D', 'DD', 'YY', 'YYYY'];
function MP(e) {
  return LP.test(e);
}
function $P(e) {
  return DP.test(e);
}
function FP(e, t, n) {
  const r = zP(e, t, n);
  if ((console.warn(r), IP.includes(e))) throw new RangeError(r);
}
function zP(e, t, n) {
  const r = e[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const UP = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  VP = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  HP = /^'([^]*?)'?$/,
  BP = /''/g,
  WP = /[a-zA-Z]/;
function qP(e, t, n) {
  var c, f, d, m, y, b, P, v;
  const r = ro(),
    i = (n == null ? void 0 : n.locale) ?? r.locale ?? T1,
    s =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((f = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : f.firstWeekContainsDate) ??
      r.firstWeekContainsDate ??
      ((m = (d = r.locale) == null ? void 0 : d.options) == null
        ? void 0
        : m.firstWeekContainsDate) ??
      1,
    a =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((b = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) ==
      null
        ? void 0
        : b.weekStartsOn) ??
      r.weekStartsOn ??
      ((v = (P = r.locale) == null ? void 0 : P.options) == null
        ? void 0
        : v.weekStartsOn) ??
      0,
    o = ie(e);
  if (!zC(o)) throw new RangeError('Invalid time value');
  let l = t
    .match(VP)
    .map((p) => {
      const g = p[0];
      if (g === 'p' || g === 'P') {
        const k = NP[g];
        return k(p, i.formatLong);
      }
      return p;
    })
    .join('')
    .match(UP)
    .map((p) => {
      if (p === "''") return { isToken: !1, value: "'" };
      const g = p[0];
      if (g === "'") return { isToken: !1, value: QP(p) };
      if (mv[g]) return { isToken: !0, value: p };
      if (g.match(WP))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
            g +
            '`'
        );
      return { isToken: !1, value: p };
    });
  i.localize.preprocessor && (l = i.localize.preprocessor(o, l));
  const u = { firstWeekContainsDate: s, weekStartsOn: a, locale: i };
  return l
    .map((p) => {
      if (!p.isToken) return p.value;
      const g = p.value;
      ((!(n != null && n.useAdditionalWeekYearTokens) && $P(g)) ||
        (!(n != null && n.useAdditionalDayOfYearTokens) && MP(g))) &&
        FP(g, t, String(e));
      const k = mv[g[0]];
      return k(o, g, i.localize, u);
    })
    .join('');
}
function QP(e) {
  const t = e.match(HP);
  return t ? t[1].replace(BP, "'") : e;
}
function YP(e, t, n) {
  const r = ro(),
    i = (n == null ? void 0 : n.locale) ?? r.locale ?? T1,
    s = 2520,
    a = sl(e, t);
  if (isNaN(a)) throw new RangeError('Invalid time value');
  const o = Object.assign({}, n, {
    addSuffix: n == null ? void 0 : n.addSuffix,
    comparison: a,
  });
  let l, u;
  a > 0 ? ((l = ie(t)), (u = ie(e))) : ((l = ie(e)), (u = ie(t)));
  const c = YC(u, l),
    f = (ql(u) - ql(l)) / 1e3,
    d = Math.round((c - f) / 60);
  let m;
  if (d < 2)
    return n != null && n.includeSeconds
      ? c < 5
        ? i.formatDistance('lessThanXSeconds', 5, o)
        : c < 10
          ? i.formatDistance('lessThanXSeconds', 10, o)
          : c < 20
            ? i.formatDistance('lessThanXSeconds', 20, o)
            : c < 40
              ? i.formatDistance('halfAMinute', 0, o)
              : c < 60
                ? i.formatDistance('lessThanXMinutes', 1, o)
                : i.formatDistance('xMinutes', 1, o)
      : d === 0
        ? i.formatDistance('lessThanXMinutes', 1, o)
        : i.formatDistance('xMinutes', d, o);
  if (d < 45) return i.formatDistance('xMinutes', d, o);
  if (d < 90) return i.formatDistance('aboutXHours', 1, o);
  if (d < hv) {
    const y = Math.round(d / 60);
    return i.formatDistance('aboutXHours', y, o);
  } else {
    if (d < s) return i.formatDistance('xDays', 1, o);
    if (d < $o) {
      const y = Math.round(d / hv);
      return i.formatDistance('xDays', y, o);
    } else if (d < $o * 2)
      return (m = Math.round(d / $o)), i.formatDistance('aboutXMonths', m, o);
  }
  if (((m = QC(u, l)), m < 12)) {
    const y = Math.round(d / $o);
    return i.formatDistance('xMonths', y, o);
  } else {
    const y = m % 12,
      b = Math.trunc(m / 12);
    return y < 3
      ? i.formatDistance('aboutXYears', b, o)
      : y < 9
        ? i.formatDistance('overXYears', b, o)
        : i.formatDistance('almostXYears', b + 1, o);
  }
}
function KP(e, t) {
  return YP(e, $C(e), t);
}
function GP(e, t, n) {
  let r;
  return (
    XP(t) ? (r = t) : (n = t),
    new Intl.DateTimeFormat(n == null ? void 0 : n.locale, r).format(ie(e))
  );
}
function XP(e) {
  return e !== void 0 && !('locale' in e);
}
function JP(e) {
  const t = new Date();
  if (e === 1) return LC(t, 4);
  if (e === 2) return xc(t, 1);
  if (e === 3) return xc(t, 3);
  if (e === 4) return xc(t, 4);
}
function ZP(e, t) {
  return [
    {
      noteId: t,
      noteValue: e.notes,
      createBy: e.engineer,
      createdAt: new Date(),
    },
  ];
}
function N1({
  createTicket: e,
  updateTicket: t,
  isLoading: n,
  ticket: r = {},
  tableName: i,
}) {
  var P, v, p, g, k, S, T, R, O, B, V, Ae, q, K;
  const s = Ya(),
    { id: a, ...o } = r,
    l = !!a,
    u = C.useId(),
    {
      register: c,
      handleSubmit: f,
      formState: { errors: d },
      getValues: m,
      reset: y,
    } = EC({ defaultValues: l ? { ...o, notes: '' } : {} });
  function b(ne) {
    if (!ne) return;
    const xe = ZP(ne, u),
      $e = new Date();
    if (a) {
      y(ne);
      const Pe = { ...ne, notes: xe, lastUpdate: $e };
      t({ ticket: Pe, editId: a });
    }
    if (!a) {
      const Pe = {
        ...ne,
        file: ne.file[0],
        notes: xe,
        lastUpdate: $e,
        priority: Number(ne.priority),
        deadline: JP(Number(ne.priority)),
      };
      e(Pe);
    }
  }
  return n
    ? h.jsx(xs, {})
    : h.jsxs('form', {
        onSubmit: f(b),
        className: Et.createUpdate,
        children: [
          h.jsxs('div', {
            className: Et.left,
            children: [
              h.jsxs('p', {
                children: [
                  h.jsx('label', {
                    htmlFor: 'subject',
                    className: Et.mandatory,
                    children: 'Subject',
                  }),
                  h.jsx('input', {
                    type: 'text',
                    ...c('subject', {
                      required: 'This feild is required.',
                      minLength: {
                        value: 5,
                        message: 'Minimum 5 characters :(',
                      },
                    }),
                    placeholder: 'short description of the issue',
                  }),
                  h.jsx('span', {
                    className: 'error',
                    children:
                      ((P = d.subject) == null ? void 0 : P.message) &&
                      ((v = d.subject) == null ? void 0 : v.message),
                  }),
                ],
              }),
              h.jsxs('p', {
                children: [
                  h.jsx('label', {
                    htmlFor: 'summary',
                    className: Et.mandatory,
                    children: 'Summary',
                  }),
                  h.jsx('textarea', {
                    ...c('summary', {
                      required: 'This feild is required.',
                      minLength: {
                        value: 5,
                        message: 'Minimum 5 characters :(',
                      },
                    }),
                    id: '',
                    cols: '30',
                    rows: '10',
                    placeholder: 'Problem summary',
                  }),
                  ' ',
                  h.jsx('span', {
                    className: 'error',
                    children:
                      ((p = d.summary) == null ? void 0 : p.message) &&
                      ((g = d.summary) == null ? void 0 : g.message),
                  }),
                ],
              }),
            ],
          }),
          h.jsxs('div', {
            className: Et.right,
            children: [
              h.jsxs('p', {
                children: [
                  h.jsx('label', {
                    htmlFor: 'priority',
                    className: Et.mandatory,
                    children: 'Priority',
                  }),
                  h.jsxs('select', {
                    defaultValue: m().priority,
                    name: 'priority',
                    ...c('priority', { required: 'This feild is required.' }),
                    children: [
                      h.jsx('option', { value: 3, children: 'Normal' }),
                      h.jsx('option', { value: 1, children: 'High' }),
                      h.jsx('option', { value: 4, children: 'Low' }),
                      h.jsx('option', { value: 2, children: 'Meduim' }),
                    ],
                  }),
                  ' ',
                  h.jsx('span', {
                    className: 'error',
                    children:
                      ((k = d.priority) == null ? void 0 : k.message) &&
                      ((S = d.priority) == null ? void 0 : S.message),
                  }),
                ],
              }),
              h.jsxs('p', {
                children: [
                  h.jsx('label', {
                    htmlFor: 'status',
                    className: Et.mandatory,
                    children: 'Status',
                  }),
                  h.jsxs('select', {
                    defaultValue: m().status,
                    ...c('status', { required: 'This feild is required.' }),
                    children: [
                      h.jsx('option', { value: 'loged', children: 'Loged' }),
                      h.jsx('option', {
                        value: 'fulfiled',
                        children: 'fulfiled',
                      }),
                      h.jsx('option', {
                        value: 'progress',
                        children: 'progress',
                      }),
                      h.jsx('option', { value: 'hold', children: 'on hold' }),
                    ],
                  }),
                  ' ',
                  h.jsx('span', {
                    className: 'error',
                    children:
                      ((T = d.status) == null ? void 0 : T.message) &&
                      ((R = d.status) == null ? void 0 : R.message),
                  }),
                ],
              }),
              h.jsx('p', {
                children:
                  i !== 'requests' &&
                  h.jsxs(h.Fragment, {
                    children: [
                      h.jsx('label', {
                        htmlFor: 'impact',
                        className: Et.mandatory,
                        children: 'Affected users',
                      }),
                      h.jsxs('select', {
                        defaultValue: m().impact,
                        ...c('impact', { required: 'This feild is required.' }),
                        children: [
                          h.jsx('option', { value: 'one', children: '1 User' }),
                          h.jsx('option', {
                            value: 'tow',
                            children: '2 users',
                          }),
                          h.jsx('option', {
                            value: 'many',
                            children: 'Many users',
                          }),
                        ],
                      }),
                      h.jsx('span', {
                        className: 'error',
                        children:
                          ((O = d.impact) == null ? void 0 : O.message) &&
                          ((B = d.impact) == null ? void 0 : B.message),
                      }),
                    ],
                  }),
              }),
            ],
          }),
          h.jsxs('div', {
            children: [
              h.jsxs('p', {
                children: [
                  h.jsx('label', {
                    htmlFor: 'requester',
                    className: Et.mandatory,
                    children: 'Requester',
                  }),
                  h.jsx('input', {
                    type: 'text',
                    placeholder: 'Entity',
                    ...c('requester', {
                      required: 'This feild is required.',
                      minLength: {
                        value: 5,
                        message: 'Minimum 5 characters :(',
                      },
                    }),
                  }),
                  ' ',
                  h.jsx('span', {
                    className: 'error',
                    children:
                      ((V = d.requester) == null ? void 0 : V.message) &&
                      ((Ae = d.requester) == null ? void 0 : Ae.message),
                  }),
                ],
              }),
              h.jsxs('p', {
                children: [
                  h.jsx('label', { htmlFor: 'solution', children: 'Solution' }),
                  h.jsx('textarea', { ...c('solution') }),
                ],
              }),
            ],
          }),
          h.jsxs('div', {
            children: [
              h.jsxs('p', {
                children: [
                  h.jsx('label', {
                    htmlFor: 'engineer',
                    className: Et.mandatory,
                    children: 'Assgin to',
                  }),
                  h.jsxs('select', {
                    defaultValue: m().engineer,
                    id: '',
                    ...c('engineer', { required: 'This feild is required.' }),
                    children: [
                      h.jsx('option', { value: 'john', children: 'John' }),
                      h.jsx('option', { value: 'peter', children: 'peter' }),
                      h.jsx('option', { value: 'adam', children: 'adam' }),
                    ],
                  }),
                  ' ',
                  h.jsx('span', {
                    className: 'error',
                    children:
                      ((q = d.engineer) == null ? void 0 : q.message) &&
                      ((K = d.engineer) == null ? void 0 : K.message),
                  }),
                ],
              }),
              h.jsxs('p', {
                children: [
                  h.jsx('label', {
                    htmlFor: 'notes',
                    children: 'Add internal note',
                  }),
                  h.jsx('textarea', { id: '', ...c('notes') }),
                ],
              }),
            ],
          }),
          h.jsx('div', {
            className: Et.file,
            children: h.jsxs('div', {
              className: Et.fileWrapper,
              children: [
                h.jsx(ae, { icon: sx }),
                h.jsxs('label', {
                  htmlFor: 'fileInput',
                  children: [
                    h.jsx('span', { children: 'Browse Files ' }),
                    'or Drag files here [ Max size: 10 MB. ]',
                  ],
                }),
                h.jsx('input', {
                  type: 'file',
                  ...c('file'),
                  placeholder: 'Browse Files',
                  accept: 'image/*,.pdf',
                  id: 'fileInput',
                }),
              ],
            }),
          }),
          h.jsxs('footer', {
            children: [
              h.jsx('input', {
                type: 'submit',
                className: 'btn btn--primary',
                value: 'Submit',
              }),
              h.jsx('a', {
                onClick: () => s(-1),
                to: '/',
                className: 'btn btn--rounded',
                children: 'Cancle',
              }),
            ],
          }),
        ],
      });
}
function e5() {
  const { createIncident: e, isCreating: t } = sC();
  return h.jsx('div', {
    className: 'container',
    children: t
      ? h.jsx(xs, {})
      : h.jsxs('div', {
          className: rv.wrapper,
          children: [
            h.jsxs('header', {
              children: [
                h.jsx(ae, { icon: m0, className: rv.icon }),
                h.jsx('h2', { children: 'Create new incident' }),
              ],
            }),
            h.jsx(N1, { createTicket: e, isCreating: t }),
          ],
        }),
  });
}
const t5 = '_normal_jtohf_85',
  n5 = '_low_jtohf_105',
  r5 = '_high_jtohf_115',
  wv = {
    'tickets-table': '_tickets-table_jtohf_1',
    normal: t5,
    low: n5,
    high: r5,
  };
function i5({ data: e, styles: t }) {
  return h.jsx('tbody', {
    children:
      e == null
        ? void 0
        : e.map((n) =>
            h.jsxs(
              'tr',
              {
                children: [
                  h.jsx('td', {
                    'data-th': 'id',
                    children: h.jsxs(Ka, {
                      to: `${n.id}`,
                      children: ['#', n.id],
                    }),
                  }),
                  h.jsxs('td', {
                    'data-th': 'Client/Company',
                    children: [
                      h.jsx(ae, { icon: yx }),
                      h.jsx('span', { children: n.requester }),
                    ],
                  }),
                  h.jsx('td', { 'data-th': 'Subject', children: n.subject }),
                  h.jsxs('td', {
                    'data-th': 'Status',
                    children: [
                      n.status.toLowerCase().includes('loged') &&
                        h.jsx(ae, { icon: ex }),
                      n.status.toLowerCase().includes('fulfiled') &&
                        h.jsx(ae, { icon: Sx }),
                      n.status.toLowerCase().includes('progress') &&
                        h.jsx(ae, { icon: kx }),
                      n.status.toLowerCase().includes('hold') &&
                        h.jsx(ae, { icon: rx }),
                      h.jsx('span', { children: n.status }),
                    ],
                  }),
                  h.jsxs('td', {
                    'data-th': 'Prority',
                    children: [
                      h.jsx('span', { children: n.priority === 1 && 'High' }),
                      h.jsx('span', { children: n.priority === 2 && 'Meduim' }),
                      h.jsx('span', { children: n.priority === 3 && 'Normal' }),
                      h.jsx('span', { children: n.priority === 4 && 'Low' }),
                      h.jsx('span', {
                        className: t.high,
                        children: n.priority === 1 && h.jsx(ae, { icon: ix }),
                      }),
                    ],
                  }),
                  h.jsx('td', {
                    'data-th': 'Deadline',
                    children: h.jsx('span', {
                      className: `${(n == null ? void 0 : n.deadline) <= 1 ? t.high : (n == null ? void 0 : n.deadline) <= 4 ? t.normal : t.low}`,
                      children:
                        n.deadline &&
                        qP(n == null ? void 0 : n.deadline, 'MM/dd/yyyy hh:mm'),
                    }),
                  }),
                  h.jsx('td', {
                    'data-th': 'Assignee',
                    children: n == null ? void 0 : n.engineer,
                  }),
                  h.jsx('td', {
                    'data-th': 'Updated',
                    children:
                      (n == null ? void 0 : n.lastUpdate) && KP(n.lastUpdate),
                  }),
                ],
              },
              n.id
            )
          ),
  });
}
function s5() {
  return h.jsx('thead', {
    children: h.jsxs('tr', {
      children: [
        h.jsx('th', { children: 'Id' }),
        h.jsx('th', {
          children: h.jsx('span', { children: 'Client/Company' }),
        }),
        h.jsx('th', { children: 'Subject' }),
        h.jsx('th', { children: h.jsx('span', { children: 'Status' }) }),
        h.jsx('th', { children: h.jsx('span', { children: 'Prority' }) }),
        h.jsx('th', { children: 'Deadline' }),
        h.jsx('th', { children: h.jsx('span', { children: 'Assignee' }) }),
        h.jsx('th', { children: 'Updated' }),
      ],
    }),
  });
}
function L1({ data: e }) {
  return h.jsxs('table', {
    className: wv['tickets-table'],
    children: [h.jsx(s5, {}), h.jsx(i5, { data: e, styles: wv })],
  });
}
function a5() {
  const { isLoading: e, error: t, incidents: n } = w1();
  return t
    ? h.jsx(Rh, { error: t })
    : e
      ? h.jsx(xs, {})
      : h.jsx('div', {
          className: 'container',
          children: h.jsx(L1, { data: n }),
        });
}
const o5 = '_container_1hq7s_1',
  l5 = '_timing_1hq7s_13',
  Ec = { container: o5, timing: l5 };
function u5() {
  let e = new Date();
  const t = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    (e = e.toLocaleDateString('en-US', t)),
    h.jsxs('div', {
      className: Ec.container,
      children: [
        h.jsx('span', { className: Ec.title, children: 'Date' }),
        h.jsxs('span', { className: Ec.timing, children: ['Today is, ', e] }),
      ],
    })
  );
}
const c5 = '_filter_d4wul_1',
  f5 = '_icon_d4wul_59',
  d5 = '_formGroup_d4wul_67',
  Cc = { filter: c5, icon: f5, formGroup: d5 },
  h5 = '_btn_1a35f_1',
  p5 = '_disabled_1a35f_31',
  m5 = '_btnPrimary_1a35f_39',
  v5 = '_btnAccent_1a35f_49',
  g5 = '_btnOutline_1a35f_81',
  Pc = { btn: h5, disabled: p5, btnPrimary: m5, btnAccent: v5, btnOutline: g5 };
function al({
  children: e,
  type: t = '',
  onClick: n = () => '',
  isDisabled: r,
}) {
  const i = (s) => {
    s.preventDefault(), n();
  };
  return h.jsx('button', {
    className: `${Pc.btn} ${Pc[t]} ${Pc[r ? 'disabled' : '']}`,
    onClick: i,
    children: e,
  });
}
const D1 = C.createContext();
function y5({ children: e }) {
  const [t, n] = C.useState([]);
  return h.jsx(D1.Provider, {
    value: { checkValues: t, setCheckValues: n },
    children: e,
  });
}
function w5() {
  const e = C.useContext(D1);
  if (e === void 0) throw new Error('Dark mode is used outside the provider');
  return e;
}
function _5({ btnType: e, ticketType: t, options: n, filterColumn: r }) {
  const [i, s] = lh(),
    [a, o] = C.useState(!1),
    { checkValues: l, setCheckValues: u } = w5(),
    c = C.useRef(null);
  function f(y) {
    c.current && !c.current.contains(y.target) && o(!1);
  }
  function d(y) {
    var P;
    const b = (P = y == null ? void 0 : y.target) == null ? void 0 : P.value;
    l.includes(b) ? u(l.filter((v) => v != b)) : u((v) => [...v, b]),
      i.set(r, l),
      s(i);
  }
  C.useEffect(() => {
    const y = new URLSearchParams();
    l.forEach((b) => {
      y.append(r, b);
    }),
      s(y);
  }, [l, r]),
    C.useEffect(
      () => (
        document.addEventListener('mousedown', f),
        () => document.removeEventListener('mousedown', f)
      )
    );
  const m = () => {
    u([]), o(!1);
  };
  return h.jsxs('div', {
    className: Cc.filter,
    ref: c,
    children: [
      h.jsxs(al, {
        type: e,
        onClick: () => o(!a),
        children: [
          h.jsx(ae, { icon: ox, className: Cc.icon }),
          h.jsx('span', { children: 'Filter' }),
        ],
      }),
      a &&
        h.jsxs('form', {
          children: [
            h.jsxs('header', {
              children: [
                h.jsx('span', { children: 'Filters' }),
                h.jsx(al, {
                  onClick: () => o(!1),
                  children: h.jsx(ae, { icon: bx }),
                }),
              ],
            }),
            n.map((y) =>
              h.jsxs(
                'div',
                {
                  className: Cc.formGroup,
                  children: [
                    h.jsx('input', {
                      type: 'checkbox',
                      name: y.value,
                      value: y.value,
                      checked: l.includes(y.value),
                      onChange: (b) => d(b),
                    }),
                    h.jsx('label', {
                      htmlFor: y.value,
                      children: `${t} ${y.label}`,
                    }),
                  ],
                },
                y.label
              )
            ),
            h.jsx(al, {
              type: 'btnAccent',
              isDisabled: !l.length,
              onClick: m,
              children: 'Clear filter',
            }),
          ],
        }),
    ],
  });
}
const b5 = '_container_qjpy0_1',
  k5 = '_flex_qjpy0_31',
  Oc = { container: b5, flex: k5 };
function x5({ options: e }) {
  const [t, n] = lh(),
    r = t.get('sortBy') || '';
  function i(s) {
    console.log(s.target.value), t.set('sortBy', s.target.value), n(t);
  }
  return h.jsx('select', {
    value: r,
    onChange: i,
    children: e.map((s) =>
      h.jsx('option', { value: s.value, children: s.label }, s.value)
    ),
  });
}
function I1({ ticketType: e }) {
  const t = [
      { label: 'loged', value: 'loged' },
      { label: 'progress', value: 'progress' },
      { label: 'hold', value: 'hold' },
      { label: 'fulfiled', value: 'fulfiled' },
    ],
    n = [
      { label: 'Sorty by status asc', value: 'status-asc' },
      { label: 'Sorty by status desc', value: 'status-desc' },
      { label: 'Sorty by priority asc', value: 'priority-asc' },
      { label: 'Sorty by priority desc', value: 'priority-desc' },
    ];
  return h.jsxs('div', {
    className: Oc.container,
    children: [
      h.jsx(u5, {}),
      h.jsxs('div', {
        className: Oc.flex,
        children: [
          h.jsx(_5, {
            btnType: 'btnOutline',
            ticketType: e,
            options: t,
            filterColumn: 'status',
          }),
          h.jsx(x5, { options: n }),
          h.jsx(al, {
            type: 'btnPrimary',
            children: h.jsxs(Ka, {
              to: 'new',
              children: [
                h.jsx(ae, { icon: wx, className: Oc.icon }),
                h.jsx('span', { children: 'New' }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function S5() {
  return h.jsxs('div', {
    children: [
      h.jsx(du, {}),
      h.jsx(I1, { ticketType: 'incidents' }),
      h.jsx(a5, {}),
    ],
  });
}
function E5() {
  const { id: e } = Gy(),
    { data: t, isLoading: n } = hu({
      queryFn: () => y1(e),
      queryKey: ['incident', e],
    });
  return { incident: t, isLoading: n };
}
const C5 = async (e) => {
  const { data: t, error: n } = await On.storage.from('files').download(e);
  if (n) {
    console.error('Error downloading file:', n.message);
    return;
  }
  const r = URL.createObjectURL(t),
    i = document.createElement('a');
  (i.href = r),
    (i.download = e),
    document.body.appendChild(i),
    i.click(),
    document.body.removeChild(i),
    URL.revokeObjectURL(r);
};
function P5({ ticket: e }) {
  const { file: t } = e.at(0),
    n = t == null ? void 0 : t.split('/').pop();
  function r(i) {
    i.preventDefault(), C5(n);
  }
  return h.jsxs('a', {
    href: `${t}`,
    onClick: r,
    children: [
      h.jsx(ae, { icon: px }),
      h.jsx('span', { children: 'Download file' }),
    ],
  });
}
const O5 = '_notes_15232_1',
  j5 = '_note_15232_1',
  T5 = '_noteDate_15232_45',
  $s = { notes: O5, note: j5, noteDate: T5 };
function A5({ ticket: e }) {
  const { notes: t = [] } = e.at(0);
  return h.jsx('div', {
    className: $s.notes,
    children:
      t == null
        ? void 0
        : t.map((n) =>
            h.jsxs(
              'div',
              {
                className: $s.note,
                children: [
                  h.jsx('p', {
                    className: $s.noteDescription,
                    children: n.noteValue,
                  }),
                  h.jsxs('p', {
                    children: [
                      h.jsx('span', {
                        className: $s.noteAuthor,
                        children: n.createdBy,
                      }),
                      h.jsx('span', {
                        className: $s.noteDate,
                        children: GP(n == null ? void 0 : n.createdAt, {
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric',
                          hour: 'numeric',
                          minute: 'numeric',
                        }),
                      }),
                    ],
                  }),
                ],
              },
              `${Math.random()}-${n == null ? void 0 : n.noteId}`
            )
          ),
  });
}
const R5 = '_wrapper_1bk4b_1',
  N5 = '_ticketContainer_1bk4b_21',
  L5 = '_btnTab_1bk4b_37',
  D5 = '_active_1bk4b_57',
  I5 = '_cols_1bk4b_67',
  M5 = '_conversation_1bk4b_79',
  $5 = '_requester_1bk4b_121',
  F5 = '_summary_1bk4b_129',
  z5 = '_rightCol_1bk4b_149',
  U5 = '_solution_1bk4b_185',
  V5 = '_conversationContainer_1bk4b_193',
  H5 = '_notes_1bk4b_205',
  B5 = '_note_1bk4b_205',
  W5 = '_fileWrapper_1bk4b_299',
  Ln = {
    wrapper: R5,
    ticketContainer: N5,
    btnTab: L5,
    active: D5,
    cols: I5,
    conversation: M5,
    requester: $5,
    summary: F5,
    rightCol: z5,
    solution: U5,
    conversationContainer: V5,
    notes: H5,
    note: B5,
    fileWrapper: W5,
  };
function M1({
  activeTab: e,
  setActiveTab: t,
  isLoading: n,
  ticket: r,
  updateTicket: i,
  tableName: s,
}) {
  return h.jsx('div', {
    className: `container ${Ln.ticketContainer}`,
    children: h.jsxs('div', {
      className: Ln.wrapper,
      children: [
        h.jsxs('menu', {
          children: [
            h.jsx('button', {
              className: ` ${Ln.btnTab} ${e === 0 && Ln.active}`,
              onClick: () => t(0),
              children: 'Ticket',
            }),
            h.jsx('button', {
              className: ` ${Ln.btnTab} ${e === 1 && Ln.active}`,
              onClick: () => t(1),
              children: 'Attachements',
            }),
            h.jsx('button', {
              className: ` ${Ln.btnTab} ${e === 2 && Ln.active}`,
              onClick: () => t(2),
              children: 'Notes',
            }),
          ],
        }),
        n
          ? h.jsx(xs, {})
          : h.jsxs('div', {
              children: [
                e === 0 &&
                  h.jsx(N1, {
                    ticket: r == null ? void 0 : r[0],
                    updateTicket: i,
                    isLoading: n,
                    tableName: s,
                  }),
                e === 1 && h.jsx(P5, { ticket: r }),
                e === 2 && h.jsx(A5, { ticket: r }),
              ],
            }),
      ],
    }),
  });
}
function q5() {
  const e = ii(),
    { mutate: t, isPending: n } = dh({
      mutationFn: ({ ticket: r, editId: i }) => FE(r, i),
      mutationKey: ({ editId: r }) => ['incident', r],
      onSuccess: (r, { editId: i }) => {
        fs.success('Ticket has been updated successfuly'),
          e.invalidateQueries({ queryKey: ['incident', i] });
      },
      onError: () => {
        fs.error('Ticket could not be updated');
      },
    });
  return { updateIncident: t, isPending: n };
}
function Q5() {
  const [e, t] = C.useState(0),
    { incident: n, isLoading: r } = E5(),
    { updateIncident: i, isPending: s } = q5();
  return h.jsx(M1, {
    activeTab: e,
    setActiveTab: t,
    ticket: n,
    isLoading: r || s,
    updateTicket: i,
  });
}
async function Y5() {
  let e = On.from('requests').select('*');
  const { data: t, error: n } = await e;
  if (n)
    throw (
      (console.error(n.message),
      new Error(`Couldn't load service requests data ${n.message}`))
    );
  return t;
}
async function $1(e) {
  let { data: t, error: n } = await On.from('requests').select('*').eq('id', e);
  if (n)
    throw (console.error(n), new Error("Could't load service request data"));
  return t;
}
async function K5(e, t) {
  const n = await $1(t),
    r = n == null ? void 0 : n.at(0).notes,
    { data: i, error: s } = await On.from('requests')
      .update({ ...e, notes: r ? [...r, e.notes.at(0)] : e.notes })
      .eq('id', t)
      .select();
  if (s) throw (console.error(s), new Error("Could't load reqeust data"));
  return i;
}
function G5() {
  const { id: e } = Gy(),
    t = ii(),
    {
      isLoading: n,
      error: r,
      data: i,
    } = hu({
      queryKey: ['serviceRequests', e],
      queryFn: () => $1(e),
      onSuccess: () => {
        t.invalidateQueries({ queryKey: ['serviceRequests', e] });
      },
    });
  return { isLoading: n, error: r, serviceRequest: i };
}
function X5() {
  const e = ii(),
    { mutate: t, isPending: n } = dh({
      mutationFn: ({ ticket: r, editId: i }) => K5(r, i),
      mutationKey: ['serviceRequests'],
      onSuccess: () => {
        fs.success('Ticket has been updated successfuly'),
          e.invalidateQueries({ queryKey: ['serviceRequests'] });
      },
      onError: () => {
        fs.error('Ticket could not be updated');
      },
    });
  return { updateServiceReqeust: t, isPending: n };
}
function J5() {
  const [e, t] = C.useState(0),
    { serviceRequest: n, isLoading: r } = G5(),
    { updateServiceReqeust: i, isPending: s } = X5();
  return h.jsx(M1, {
    activeTab: e,
    setActiveTab: t,
    ticket: n,
    isLoading: r || s,
    updateTicket: i,
    tableName: 'requests',
  });
}
function Z5() {
  return h.jsx('div', { children: 'create service request' });
}
function e6() {
  const {
    isLoading: e,
    data: t,
    error: n,
  } = hu({ queryKey: ['serviceRequests'], queryFn: Y5 });
  return { isLoading: e, serviceRequests: t, error: n };
}
function t6() {
  const { isLoading: e, error: t, serviceRequests: n } = e6();
  return t
    ? h.jsx(Rh, { error: t })
    : e
      ? h.jsx(xs, {})
      : h.jsx('div', {
          className: 'container',
          children: h.jsx(L1, { data: n }),
        });
}
function n6() {
  return h.jsxs('div', {
    children: [
      h.jsx(du, {}),
      h.jsx(I1, { ticketType: 'reqeusts' }),
      h.jsx(t6, {}),
    ],
  });
}
function r6() {
  return h.jsx('div', { children: 'Change requests' });
}
function i6() {
  return h.jsx('div', {});
}
function s6() {
  return h.jsx('div', {});
}
function a6() {
  return h.jsx('div', { children: 'users page' });
}
function o6() {
  return h.jsx('div', { children: 'Settings' });
}
function jc() {
  return h.jsx('div', { children: h.jsx(du, {}) });
}
const l6 = new Db({ defaultOptions: { queries: { staleTime: 0 } } });
function u6() {
  return h.jsxs(zb, {
    client: l6,
    children: [
      h.jsx(tk, { initialIsOpen: !1 }),
      h.jsx(y5, {
        children: h.jsx(yb, {
          children: h.jsxs(db, {
            children: [
              h.jsxs(je, {
                element: h.jsx(M4, {}),
                children: [
                  h.jsx(je, {
                    index: !0,
                    element: h.jsx(cb, { replace: !0, to: 'dashboard' }),
                  }),
                  h.jsx(je, { path: 'dashboard', element: h.jsx(JE, {}) }),
                  h.jsxs(je, {
                    path: 'incidents',
                    element: h.jsx(jc, {}),
                    children: [
                      h.jsx(je, { index: !0, element: h.jsx(S5, {}) }),
                      h.jsx(je, { path: ':id', element: h.jsx(Q5, {}) }),
                      h.jsx(je, { path: 'new', element: h.jsx(e5, {}) }),
                    ],
                  }),
                  h.jsxs(je, {
                    path: 'requests',
                    element: h.jsx(jc, {}),
                    children: [
                      h.jsx(je, { index: !0, element: h.jsx(n6, {}) }),
                      h.jsx(je, { path: ':id', element: h.jsx(J5, {}) }),
                      h.jsx(je, { path: 'new', element: h.jsx(Z5, {}) }),
                    ],
                  }),
                  h.jsxs(je, {
                    path: 'changes',
                    element: h.jsx(jc, {}),
                    children: [
                      h.jsx(je, { index: !0, element: h.jsx(r6, {}) }),
                      h.jsx(je, { path: ':id', element: h.jsx(i6, {}) }),
                      h.jsx(je, { path: 'new', element: h.jsx(s6, {}) }),
                    ],
                  }),
                  h.jsx(je, { path: 'users', element: h.jsx(a6, {}) }),
                  h.jsx(je, { path: 'settings', element: h.jsx(o6, {}) }),
                ],
              }),
              h.jsx(je, { path: 'login', element: h.jsx(rC, {}) }),
              h.jsx(je, { path: '*', element: h.jsx(ZE, {}) }),
            ],
          }),
        }),
      }),
      h.jsx(Wk, {
        position: 'top-center',
        reverseOrder: !1,
        gutter: 8,
        containerClassName: '',
        containerStyle: {},
        toastOptions: {
          className: '',
          duration: 8e3,
          style: { color: '#062b4b', fontWeight: '500' },
          success: {
            duration: 3e3,
            theme: { primary: 'green', secondary: 'black' },
          },
        },
      }),
    ],
  });
}
Ac.createRoot(document.getElementById('root')).render(
  h.jsx(Ye.StrictMode, { children: h.jsx(u6, {}) })
);
export { Tv as g };
