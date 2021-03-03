/*! For license information please see 2.754cacda.chunk.js.LICENSE.txt */
(this.webpackJsonpcraft = this.webpackJsonpcraft || []).push([
    [2],
    [
        function (e, t, n) {
            "use strict";
            e.exports = n(7);
        },
        function (e, t, n) {
            "use strict";
            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            function i(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var l, a = e[Symbol.iterator](); !(r = (l = a.next()).done) && (n.push(l.value), !t || n.length !== t); r = !0);
                            } catch (u) {
                                (i = !0), (o = u);
                            } finally {
                                try {
                                    r || null == a.return || a.return();
                                } finally {
                                    if (i) throw o;
                                }
                            }
                            return n;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ("string" === typeof e) return r(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
                        }
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            n.d(t, "a", function () {
                return i;
            });
        },
        function (e, t, n) {
            e.exports = (function () {
                "use strict";
                var e = navigator.userAgent,
                    t = navigator.platform,
                    n = /gecko\/\d/i.test(e),
                    r = /MSIE \d/.test(e),
                    i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),
                    o = /Edge\/(\d+)/.exec(e),
                    l = r || i || o,
                    a = l && (r ? document.documentMode || 6 : +(o || i)[1]),
                    u = !o && /WebKit\//.test(e),
                    s = u && /Qt\/\d+\.\d+/.test(e),
                    c = !o && /Chrome\//.test(e),
                    f = /Opera\//.test(e),
                    d = /Apple Computer/.test(navigator.vendor),
                    p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),
                    h = /PhantomJS/.test(e),
                    m = !o && /AppleWebKit/.test(e) && /Mobile\/\w+/.test(e),
                    g = /Android/.test(e),
                    v = m || g || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),
                    y = m || /Mac/.test(t),
                    b = /\bCrOS\b/.test(e),
                    w = /win/i.test(t),
                    x = f && e.match(/Version\/(\d*\.\d*)/);
                x && (x = Number(x[1])), x && x >= 15 && ((f = !1), (u = !0));
                var k = y && (s || (f && (null == x || x < 12.11))),
                    C = n || (l && a >= 9);
                function S(e) {
                    return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
                }
                var T,
                    E = function (e, t) {
                        var n = e.className,
                            r = S(t).exec(n);
                        if (r) {
                            var i = n.slice(r.index + r[0].length);
                            e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
                        }
                    };
                function L(e) {
                    for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
                    return e;
                }
                function M(e, t) {
                    return L(e).appendChild(t);
                }
                function N(e, t, n, r) {
                    var i = document.createElement(e);
                    if ((n && (i.className = n), r && (i.style.cssText = r), "string" == typeof t)) i.appendChild(document.createTextNode(t));
                    else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
                    return i;
                }
                function O(e, t, n, r) {
                    var i = N(e, t, n, r);
                    return i.setAttribute("role", "presentation"), i;
                }
                function P(e, t) {
                    if ((3 == t.nodeType && (t = t.parentNode), e.contains)) return e.contains(t);
                    do {
                        if ((11 == t.nodeType && (t = t.host), t == e)) return !0;
                    } while ((t = t.parentNode));
                }
                function D() {
                    var e;
                    try {
                        e = document.activeElement;
                    } catch (t) {
                        e = document.body || null;
                    }
                    for (; e && e.shadowRoot && e.shadowRoot.activeElement; ) e = e.shadowRoot.activeElement;
                    return e;
                }
                function A(e, t) {
                    var n = e.className;
                    S(t).test(n) || (e.className += (n ? " " : "") + t);
                }
                function z(e, t) {
                    for (var n = e.split(" "), r = 0; r < n.length; r++) n[r] && !S(n[r]).test(t) && (t += " " + n[r]);
                    return t;
                }
                T = document.createRange
                    ? function (e, t, n, r) {
                          var i = document.createRange();
                          return i.setEnd(r || e, n), i.setStart(e, t), i;
                      }
                    : function (e, t, n) {
                          var r = document.body.createTextRange();
                          try {
                              r.moveToElementText(e.parentNode);
                          } catch (i) {
                              return r;
                          }
                          return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
                      };
                var F = function (e) {
                    e.select();
                };
                function I(e) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    return function () {
                        return e.apply(null, t);
                    };
                }
                function _(e, t, n) {
                    for (var r in (t || (t = {}), e)) !e.hasOwnProperty(r) || (!1 === n && t.hasOwnProperty(r)) || (t[r] = e[r]);
                    return t;
                }
                function R(e, t, n, r, i) {
                    null == t && -1 == (t = e.search(/[^\s\u00a0]/)) && (t = e.length);
                    for (var o = r || 0, l = i || 0; ; ) {
                        var a = e.indexOf("\t", o);
                        if (a < 0 || a >= t) return l + (t - o);
                        (l += a - o), (l += n - (l % n)), (o = a + 1);
                    }
                }
                m
                    ? (F = function (e) {
                          (e.selectionStart = 0), (e.selectionEnd = e.value.length);
                      })
                    : l &&
                      (F = function (e) {
                          try {
                              e.select();
                          } catch (t) {}
                      });
                var W = function () {
                    (this.id = null), (this.f = null), (this.time = 0), (this.handler = I(this.onTimeout, this));
                };
                function H(e, t) {
                    for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
                    return -1;
                }
                (W.prototype.onTimeout = function (e) {
                    (e.id = 0), e.time <= +new Date() ? e.f() : setTimeout(e.handler, e.time - +new Date());
                }),
                    (W.prototype.set = function (e, t) {
                        this.f = t;
                        var n = +new Date() + e;
                        (!this.id || n < this.time) && (clearTimeout(this.id), (this.id = setTimeout(this.handler, e)), (this.time = n));
                    });
                var B = {
                        toString: function () {
                            return "CodeMirror.Pass";
                        },
                    },
                    U = { scroll: !1 },
                    j = { origin: "*mouse" },
                    V = { origin: "+move" };
                function K(e, t, n) {
                    for (var r = 0, i = 0; ; ) {
                        var o = e.indexOf("\t", r);
                        -1 == o && (o = e.length);
                        var l = o - r;
                        if (o == e.length || i + l >= t) return r + Math.min(l, t - i);
                        if (((i += o - r), (r = o + 1), (i += n - (i % n)) >= t)) return r;
                    }
                }
                var $ = [""];
                function G(e) {
                    for (; $.length <= e; ) $.push(q($) + " ");
                    return $[e];
                }
                function q(e) {
                    return e[e.length - 1];
                }
                function Q(e, t) {
                    for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
                    return n;
                }
                function X() {}
                function Y(e, t) {
                    var n;
                    return Object.create ? (n = Object.create(e)) : ((X.prototype = e), (n = new X())), t && _(t, n), n;
                }
                var Z = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
                function J(e) {
                    return /\w/.test(e) || (e > "\x80" && (e.toUpperCase() != e.toLowerCase() || Z.test(e)));
                }
                function ee(e, t) {
                    return t ? !!(t.source.indexOf("\\w") > -1 && J(e)) || t.test(e) : J(e);
                }
                function te(e) {
                    for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
                    return !0;
                }
                var ne = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
                function re(e) {
                    return e.charCodeAt(0) >= 768 && ne.test(e);
                }
                function ie(e, t, n) {
                    for (; (n < 0 ? t > 0 : t < e.length) && re(e.charAt(t)); ) t += n;
                    return t;
                }
                function oe(e, t, n) {
                    for (var r = t > n ? -1 : 1; ; ) {
                        if (t == n) return t;
                        var i = (t + n) / 2,
                            o = r < 0 ? Math.ceil(i) : Math.floor(i);
                        if (o == t) return e(o) ? t : n;
                        e(o) ? (n = o) : (t = o + r);
                    }
                }
                var le = null;
                function ae(e, t, n) {
                    var r;
                    le = null;
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.from < t && o.to > t) return i;
                        o.to == t && (o.from != o.to && "before" == n ? (r = i) : (le = i)), o.from == t && (o.from != o.to && "before" != n ? (r = i) : (le = i));
                    }
                    return null != r ? r : le;
                }
                var ue = (function () {
                    var e = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                        t = /[stwN]/,
                        n = /[LRr]/,
                        r = /[Lb1n]/,
                        i = /[1n]/;
                    function o(e, t, n) {
                        (this.level = e), (this.from = t), (this.to = n);
                    }
                    return function (l, a) {
                        var u = "ltr" == a ? "L" : "R";
                        if (0 == l.length || ("ltr" == a && !e.test(l))) return !1;
                        for (var s, c = l.length, f = [], d = 0; d < c; ++d)
                            f.push(
                                (s = l.charCodeAt(d)) <= 247
                                    ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(s)
                                    : 1424 <= s && s <= 1524
                                    ? "R"
                                    : 1536 <= s && s <= 1785
                                    ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(s - 1536)
                                    : 1774 <= s && s <= 2220
                                    ? "r"
                                    : 8192 <= s && s <= 8203
                                    ? "w"
                                    : 8204 == s
                                    ? "b"
                                    : "L"
                            );
                        for (var p = 0, h = u; p < c; ++p) {
                            var m = f[p];
                            "m" == m ? (f[p] = h) : (h = m);
                        }
                        for (var g = 0, v = u; g < c; ++g) {
                            var y = f[g];
                            "1" == y && "r" == v ? (f[g] = "n") : n.test(y) && ((v = y), "r" == y && (f[g] = "R"));
                        }
                        for (var b = 1, w = f[0]; b < c - 1; ++b) {
                            var x = f[b];
                            "+" == x && "1" == w && "1" == f[b + 1] ? (f[b] = "1") : "," != x || w != f[b + 1] || ("1" != w && "n" != w) || (f[b] = w), (w = x);
                        }
                        for (var k = 0; k < c; ++k) {
                            var C = f[k];
                            if ("," == C) f[k] = "N";
                            else if ("%" == C) {
                                var S = void 0;
                                for (S = k + 1; S < c && "%" == f[S]; ++S);
                                for (var T = (k && "!" == f[k - 1]) || (S < c && "1" == f[S]) ? "1" : "N", E = k; E < S; ++E) f[E] = T;
                                k = S - 1;
                            }
                        }
                        for (var L = 0, M = u; L < c; ++L) {
                            var N = f[L];
                            "L" == M && "1" == N ? (f[L] = "L") : n.test(N) && (M = N);
                        }
                        for (var O = 0; O < c; ++O)
                            if (t.test(f[O])) {
                                var P = void 0;
                                for (P = O + 1; P < c && t.test(f[P]); ++P);
                                for (var D = "L" == (O ? f[O - 1] : u), A = D == ("L" == (P < c ? f[P] : u)) ? (D ? "L" : "R") : u, z = O; z < P; ++z) f[z] = A;
                                O = P - 1;
                            }
                        for (var F, I = [], _ = 0; _ < c; )
                            if (r.test(f[_])) {
                                var R = _;
                                for (++_; _ < c && r.test(f[_]); ++_);
                                I.push(new o(0, R, _));
                            } else {
                                var W = _,
                                    H = I.length,
                                    B = "rtl" == a ? 1 : 0;
                                for (++_; _ < c && "L" != f[_]; ++_);
                                for (var U = W; U < _; )
                                    if (i.test(f[U])) {
                                        W < U && (I.splice(H, 0, new o(1, W, U)), (H += B));
                                        var j = U;
                                        for (++U; U < _ && i.test(f[U]); ++U);
                                        I.splice(H, 0, new o(2, j, U)), (H += B), (W = U);
                                    } else ++U;
                                W < _ && I.splice(H, 0, new o(1, W, _));
                            }
                        return "ltr" == a && (1 == I[0].level && (F = l.match(/^\s+/)) && ((I[0].from = F[0].length), I.unshift(new o(0, 0, F[0].length))), 1 == q(I).level && (F = l.match(/\s+$/)) && ((q(I).to -= F[0].length), I.push(new o(0, c - F[0].length, c)))), "rtl" == a ? I.reverse() : I;
                    };
                })();
                function se(e, t) {
                    var n = e.order;
                    return null == n && (n = e.order = ue(e.text, t)), n;
                }
                var ce = [],
                    fe = function (e, t, n) {
                        if (e.addEventListener) e.addEventListener(t, n, !1);
                        else if (e.attachEvent) e.attachEvent("on" + t, n);
                        else {
                            var r = e._handlers || (e._handlers = {});
                            r[t] = (r[t] || ce).concat(n);
                        }
                    };
                function de(e, t) {
                    return (e._handlers && e._handlers[t]) || ce;
                }
                function pe(e, t, n) {
                    if (e.removeEventListener) e.removeEventListener(t, n, !1);
                    else if (e.detachEvent) e.detachEvent("on" + t, n);
                    else {
                        var r = e._handlers,
                            i = r && r[t];
                        if (i) {
                            var o = H(i, n);
                            o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
                        }
                    }
                }
                function he(e, t) {
                    var n = de(e, t);
                    if (n.length) for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i) n[i].apply(null, r);
                }
                function me(e, t, n) {
                    return (
                        "string" == typeof t &&
                            (t = {
                                type: t,
                                preventDefault: function () {
                                    this.defaultPrevented = !0;
                                },
                            }),
                        he(e, n || t.type, e, t),
                        xe(t) || t.codemirrorIgnore
                    );
                }
                function ge(e) {
                    var t = e._handlers && e._handlers.cursorActivity;
                    if (t) for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r) -1 == H(n, t[r]) && n.push(t[r]);
                }
                function ve(e, t) {
                    return de(e, t).length > 0;
                }
                function ye(e) {
                    (e.prototype.on = function (e, t) {
                        fe(this, e, t);
                    }),
                        (e.prototype.off = function (e, t) {
                            pe(this, e, t);
                        });
                }
                function be(e) {
                    e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
                }
                function we(e) {
                    e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
                }
                function xe(e) {
                    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
                }
                function ke(e) {
                    be(e), we(e);
                }
                function Ce(e) {
                    return e.target || e.srcElement;
                }
                function Se(e) {
                    var t = e.which;
                    return null == t && (1 & e.button ? (t = 1) : 2 & e.button ? (t = 3) : 4 & e.button && (t = 2)), y && e.ctrlKey && 1 == t && (t = 3), t;
                }
                var Te,
                    Ee,
                    Le = (function () {
                        if (l && a < 9) return !1;
                        var e = N("div");
                        return "draggable" in e || "dragDrop" in e;
                    })();
                function Me(e) {
                    if (null == Te) {
                        var t = N("span", "\u200b");
                        M(e, N("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Te = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(l && a < 8));
                    }
                    var n = Te ? N("span", "\u200b") : N("span", "\xa0", null, "display: inline-block; width: 1px; margin-right: -1px");
                    return n.setAttribute("cm-text", ""), n;
                }
                function Ne(e) {
                    if (null != Ee) return Ee;
                    var t = M(e, document.createTextNode("A\u062eA")),
                        n = T(t, 0, 1).getBoundingClientRect(),
                        r = T(t, 1, 2).getBoundingClientRect();
                    return L(e), !(!n || n.left == n.right) && (Ee = r.right - n.right < 3);
                }
                var Oe =
                        3 != "\n\nb".split(/\n/).length
                            ? function (e) {
                                  for (var t = 0, n = [], r = e.length; t <= r; ) {
                                      var i = e.indexOf("\n", t);
                                      -1 == i && (i = e.length);
                                      var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                                          l = o.indexOf("\r");
                                      -1 != l ? (n.push(o.slice(0, l)), (t += l + 1)) : (n.push(o), (t = i + 1));
                                  }
                                  return n;
                              }
                            : function (e) {
                                  return e.split(/\r\n?|\n/);
                              },
                    Pe = window.getSelection
                        ? function (e) {
                              try {
                                  return e.selectionStart != e.selectionEnd;
                              } catch (t) {
                                  return !1;
                              }
                          }
                        : function (e) {
                              var t;
                              try {
                                  t = e.ownerDocument.selection.createRange();
                              } catch (n) {}
                              return !(!t || t.parentElement() != e) && 0 != t.compareEndPoints("StartToEnd", t);
                          },
                    De = (function () {
                        var e = N("div");
                        return "oncopy" in e || (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
                    })(),
                    Ae = null,
                    ze = {},
                    Fe = {};
                function Ie(e, t) {
                    arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), (ze[e] = t);
                }
                function _e(e) {
                    if ("string" == typeof e && Fe.hasOwnProperty(e)) e = Fe[e];
                    else if (e && "string" == typeof e.name && Fe.hasOwnProperty(e.name)) {
                        var t = Fe[e.name];
                        "string" == typeof t && (t = { name: t }), ((e = Y(t, e)).name = t.name);
                    } else {
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e)) return _e("application/xml");
                        if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e)) return _e("application/json");
                    }
                    return "string" == typeof e ? { name: e } : e || { name: "null" };
                }
                function Re(e, t) {
                    t = _e(t);
                    var n = ze[t.name];
                    if (!n) return Re(e, "text/plain");
                    var r = n(e, t);
                    if (We.hasOwnProperty(t.name)) {
                        var i = We[t.name];
                        for (var o in i) i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]), (r[o] = i[o]));
                    }
                    if (((r.name = t.name), t.helperType && (r.helperType = t.helperType), t.modeProps)) for (var l in t.modeProps) r[l] = t.modeProps[l];
                    return r;
                }
                var We = {};
                function He(e, t) {
                    _(t, We.hasOwnProperty(e) ? We[e] : (We[e] = {}));
                }
                function Be(e, t) {
                    if (!0 === t) return t;
                    if (e.copyState) return e.copyState(t);
                    var n = {};
                    for (var r in t) {
                        var i = t[r];
                        i instanceof Array && (i = i.concat([])), (n[r] = i);
                    }
                    return n;
                }
                function Ue(e, t) {
                    for (var n; e.innerMode && (n = e.innerMode(t)) && n.mode != e; ) (t = n.state), (e = n.mode);
                    return n || { mode: e, state: t };
                }
                function je(e, t, n) {
                    return !e.startState || e.startState(t, n);
                }
                var Ve = function (e, t, n) {
                    (this.pos = this.start = 0), (this.string = e), (this.tabSize = t || 8), (this.lastColumnPos = this.lastColumnValue = 0), (this.lineStart = 0), (this.lineOracle = n);
                };
                function Ke(e, t) {
                    if ((t -= e.first) < 0 || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");
                    for (var n = e; !n.lines; )
                        for (var r = 0; ; ++r) {
                            var i = n.children[r],
                                o = i.chunkSize();
                            if (t < o) {
                                n = i;
                                break;
                            }
                            t -= o;
                        }
                    return n.lines[t];
                }
                function $e(e, t, n) {
                    var r = [],
                        i = t.line;
                    return (
                        e.iter(t.line, n.line + 1, function (e) {
                            var o = e.text;
                            i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
                        }),
                        r
                    );
                }
                function Ge(e, t, n) {
                    var r = [];
                    return (
                        e.iter(t, n, function (e) {
                            r.push(e.text);
                        }),
                        r
                    );
                }
                function qe(e, t) {
                    var n = t - e.height;
                    if (n) for (var r = e; r; r = r.parent) r.height += n;
                }
                function Qe(e) {
                    if (null == e.parent) return null;
                    for (var t = e.parent, n = H(t.lines, e), r = t.parent; r; t = r, r = r.parent) for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
                    return n + t.first;
                }
                function Xe(e, t) {
                    var n = e.first;
                    e: do {
                        for (var r = 0; r < e.children.length; ++r) {
                            var i = e.children[r],
                                o = i.height;
                            if (t < o) {
                                e = i;
                                continue e;
                            }
                            (t -= o), (n += i.chunkSize());
                        }
                        return n;
                    } while (!e.lines);
                    for (var l = 0; l < e.lines.length; ++l) {
                        var a = e.lines[l].height;
                        if (t < a) break;
                        t -= a;
                    }
                    return n + l;
                }
                function Ye(e, t) {
                    return t >= e.first && t < e.first + e.size;
                }
                function Ze(e, t) {
                    return String(e.lineNumberFormatter(t + e.firstLineNumber));
                }
                function Je(e, t, n) {
                    if ((void 0 === n && (n = null), !(this instanceof Je))) return new Je(e, t, n);
                    (this.line = e), (this.ch = t), (this.sticky = n);
                }
                function et(e, t) {
                    return e.line - t.line || e.ch - t.ch;
                }
                function tt(e, t) {
                    return e.sticky == t.sticky && 0 == et(e, t);
                }
                function nt(e) {
                    return Je(e.line, e.ch);
                }
                function rt(e, t) {
                    return et(e, t) < 0 ? t : e;
                }
                function it(e, t) {
                    return et(e, t) < 0 ? e : t;
                }
                function ot(e, t) {
                    return Math.max(e.first, Math.min(t, e.first + e.size - 1));
                }
                function lt(e, t) {
                    if (t.line < e.first) return Je(e.first, 0);
                    var n = e.first + e.size - 1;
                    return t.line > n
                        ? Je(n, Ke(e, n).text.length)
                        : (function (e, t) {
                              var n = e.ch;
                              return null == n || n > t ? Je(e.line, t) : n < 0 ? Je(e.line, 0) : e;
                          })(t, Ke(e, t.line).text.length);
                }
                function at(e, t) {
                    for (var n = [], r = 0; r < t.length; r++) n[r] = lt(e, t[r]);
                    return n;
                }
                (Ve.prototype.eol = function () {
                    return this.pos >= this.string.length;
                }),
                    (Ve.prototype.sol = function () {
                        return this.pos == this.lineStart;
                    }),
                    (Ve.prototype.peek = function () {
                        return this.string.charAt(this.pos) || void 0;
                    }),
                    (Ve.prototype.next = function () {
                        if (this.pos < this.string.length) return this.string.charAt(this.pos++);
                    }),
                    (Ve.prototype.eat = function (e) {
                        var t = this.string.charAt(this.pos);
                        if ("string" == typeof e ? t == e : t && (e.test ? e.test(t) : e(t))) return ++this.pos, t;
                    }),
                    (Ve.prototype.eatWhile = function (e) {
                        for (var t = this.pos; this.eat(e); );
                        return this.pos > t;
                    }),
                    (Ve.prototype.eatSpace = function () {
                        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
                        return this.pos > e;
                    }),
                    (Ve.prototype.skipToEnd = function () {
                        this.pos = this.string.length;
                    }),
                    (Ve.prototype.skipTo = function (e) {
                        var t = this.string.indexOf(e, this.pos);
                        if (t > -1) return (this.pos = t), !0;
                    }),
                    (Ve.prototype.backUp = function (e) {
                        this.pos -= e;
                    }),
                    (Ve.prototype.column = function () {
                        return this.lastColumnPos < this.start && ((this.lastColumnValue = R(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue)), (this.lastColumnPos = this.start)), this.lastColumnValue - (this.lineStart ? R(this.string, this.lineStart, this.tabSize) : 0);
                    }),
                    (Ve.prototype.indentation = function () {
                        return R(this.string, null, this.tabSize) - (this.lineStart ? R(this.string, this.lineStart, this.tabSize) : 0);
                    }),
                    (Ve.prototype.match = function (e, t, n) {
                        if ("string" != typeof e) {
                            var r = this.string.slice(this.pos).match(e);
                            return r && r.index > 0 ? null : (r && !1 !== t && (this.pos += r[0].length), r);
                        }
                        var i = function (e) {
                            return n ? e.toLowerCase() : e;
                        };
                        if (i(this.string.substr(this.pos, e.length)) == i(e)) return !1 !== t && (this.pos += e.length), !0;
                    }),
                    (Ve.prototype.current = function () {
                        return this.string.slice(this.start, this.pos);
                    }),
                    (Ve.prototype.hideFirstChars = function (e, t) {
                        this.lineStart += e;
                        try {
                            return t();
                        } finally {
                            this.lineStart -= e;
                        }
                    }),
                    (Ve.prototype.lookAhead = function (e) {
                        var t = this.lineOracle;
                        return t && t.lookAhead(e);
                    }),
                    (Ve.prototype.baseToken = function () {
                        var e = this.lineOracle;
                        return e && e.baseToken(this.pos);
                    });
                var ut = function (e, t) {
                        (this.state = e), (this.lookAhead = t);
                    },
                    st = function (e, t, n, r) {
                        (this.state = t), (this.doc = e), (this.line = n), (this.maxLookAhead = r || 0), (this.baseTokens = null), (this.baseTokenPos = 1);
                    };
                function ct(e, t, n, r) {
                    var i = [e.state.modeGen],
                        o = {};
                    bt(
                        e,
                        t.text,
                        e.doc.mode,
                        n,
                        function (e, t) {
                            return i.push(e, t);
                        },
                        o,
                        r
                    );
                    for (
                        var l = n.state,
                            a = function (r) {
                                n.baseTokens = i;
                                var a = e.state.overlays[r],
                                    u = 1,
                                    s = 0;
                                (n.state = !0),
                                    bt(
                                        e,
                                        t.text,
                                        a.mode,
                                        n,
                                        function (e, t) {
                                            for (var n = u; s < e; ) {
                                                var r = i[u];
                                                r > e && i.splice(u, 1, e, i[u + 1], r), (u += 2), (s = Math.min(e, r));
                                            }
                                            if (t)
                                                if (a.opaque) i.splice(n, u - n, e, "overlay " + t), (u = n + 2);
                                                else
                                                    for (; n < u; n += 2) {
                                                        var o = i[n + 1];
                                                        i[n + 1] = (o ? o + " " : "") + "overlay " + t;
                                                    }
                                        },
                                        o
                                    ),
                                    (n.state = l),
                                    (n.baseTokens = null),
                                    (n.baseTokenPos = 1);
                            },
                            u = 0;
                        u < e.state.overlays.length;
                        ++u
                    )
                        a(u);
                    return { styles: i, classes: o.bgClass || o.textClass ? o : null };
                }
                function ft(e, t, n) {
                    if (!t.styles || t.styles[0] != e.state.modeGen) {
                        var r = dt(e, Qe(t)),
                            i = t.text.length > e.options.maxHighlightLength && Be(e.doc.mode, r.state),
                            o = ct(e, t, r);
                        i && (r.state = i), (t.stateAfter = r.save(!i)), (t.styles = o.styles), o.classes ? (t.styleClasses = o.classes) : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
                    }
                    return t.styles;
                }
                function dt(e, t, n) {
                    var r = e.doc,
                        i = e.display;
                    if (!r.mode.startState) return new st(r, !0, t);
                    var o = (function (e, t, n) {
                            for (var r, i, o = e.doc, l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > l; --a) {
                                if (a <= o.first) return o.first;
                                var u = Ke(o, a - 1),
                                    s = u.stateAfter;
                                if (s && (!n || a + (s instanceof ut ? s.lookAhead : 0) <= o.modeFrontier)) return a;
                                var c = R(u.text, null, e.options.tabSize);
                                (null == i || r > c) && ((i = a - 1), (r = c));
                            }
                            return i;
                        })(e, t, n),
                        l = o > r.first && Ke(r, o - 1).stateAfter,
                        a = l ? st.fromSaved(r, l, o) : new st(r, je(r.mode), o);
                    return (
                        r.iter(o, t, function (n) {
                            pt(e, n.text, a);
                            var r = a.line;
                            (n.stateAfter = r == t - 1 || r % 5 == 0 || (r >= i.viewFrom && r < i.viewTo) ? a.save() : null), a.nextLine();
                        }),
                        n && (r.modeFrontier = a.line),
                        a
                    );
                }
                function pt(e, t, n, r) {
                    var i = e.doc.mode,
                        o = new Ve(t, e.options.tabSize, n);
                    for (o.start = o.pos = r || 0, "" == t && ht(i, n.state); !o.eol(); ) mt(i, o, n.state), (o.start = o.pos);
                }
                function ht(e, t) {
                    if (e.blankLine) return e.blankLine(t);
                    if (e.innerMode) {
                        var n = Ue(e, t);
                        return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
                    }
                }
                function mt(e, t, n, r) {
                    for (var i = 0; i < 10; i++) {
                        r && (r[0] = Ue(e, n).mode);
                        var o = e.token(t, n);
                        if (t.pos > t.start) return o;
                    }
                    throw new Error("Mode " + e.name + " failed to advance stream.");
                }
                (st.prototype.lookAhead = function (e) {
                    var t = this.doc.getLine(this.line + e);
                    return null != t && e > this.maxLookAhead && (this.maxLookAhead = e), t;
                }),
                    (st.prototype.baseToken = function (e) {
                        if (!this.baseTokens) return null;
                        for (; this.baseTokens[this.baseTokenPos] <= e; ) this.baseTokenPos += 2;
                        var t = this.baseTokens[this.baseTokenPos + 1];
                        return { type: t && t.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e };
                    }),
                    (st.prototype.nextLine = function () {
                        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
                    }),
                    (st.fromSaved = function (e, t, n) {
                        return t instanceof ut ? new st(e, Be(e.mode, t.state), n, t.lookAhead) : new st(e, Be(e.mode, t), n);
                    }),
                    (st.prototype.save = function (e) {
                        var t = !1 !== e ? Be(this.doc.mode, this.state) : this.state;
                        return this.maxLookAhead > 0 ? new ut(t, this.maxLookAhead) : t;
                    });
                var gt = function (e, t, n) {
                    (this.start = e.start), (this.end = e.pos), (this.string = e.current()), (this.type = t || null), (this.state = n);
                };
                function vt(e, t, n, r) {
                    var i,
                        o,
                        l = e.doc,
                        a = l.mode,
                        u = Ke(l, (t = lt(l, t)).line),
                        s = dt(e, t.line, n),
                        c = new Ve(u.text, e.options.tabSize, s);
                    for (r && (o = []); (r || c.pos < t.ch) && !c.eol(); ) (c.start = c.pos), (i = mt(a, c, s.state)), r && o.push(new gt(c, i, Be(l.mode, s.state)));
                    return r ? o : new gt(c, i, s.state);
                }
                function yt(e, t) {
                    if (e)
                        for (;;) {
                            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                            if (!n) break;
                            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                            var r = n[1] ? "bgClass" : "textClass";
                            null == t[r] ? (t[r] = n[2]) : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2]);
                        }
                    return e;
                }
                function bt(e, t, n, r, i, o, l) {
                    var a = n.flattenSpans;
                    null == a && (a = e.options.flattenSpans);
                    var u,
                        s = 0,
                        c = null,
                        f = new Ve(t, e.options.tabSize, r),
                        d = e.options.addModeClass && [null];
                    for ("" == t && yt(ht(n, r.state), o); !f.eol(); ) {
                        if ((f.pos > e.options.maxHighlightLength ? ((a = !1), l && pt(e, t, r, f.pos), (f.pos = t.length), (u = null)) : (u = yt(mt(n, f, r.state, d), o)), d)) {
                            var p = d[0].name;
                            p && (u = "m-" + (u ? p + " " + u : p));
                        }
                        if (!a || c != u) {
                            for (; s < f.start; ) i((s = Math.min(f.start, s + 5e3)), c);
                            c = u;
                        }
                        f.start = f.pos;
                    }
                    for (; s < f.pos; ) {
                        var h = Math.min(f.pos, s + 5e3);
                        i(h, c), (s = h);
                    }
                }
                var wt = !1,
                    xt = !1;
                function kt(e, t, n) {
                    (this.marker = e), (this.from = t), (this.to = n);
                }
                function Ct(e, t) {
                    if (e)
                        for (var n = 0; n < e.length; ++n) {
                            var r = e[n];
                            if (r.marker == t) return r;
                        }
                }
                function St(e, t) {
                    for (var n, r = 0; r < e.length; ++r) e[r] != t && (n || (n = [])).push(e[r]);
                    return n;
                }
                function Tt(e, t) {
                    if (t.full) return null;
                    var n = Ye(e, t.from.line) && Ke(e, t.from.line).markedSpans,
                        r = Ye(e, t.to.line) && Ke(e, t.to.line).markedSpans;
                    if (!n && !r) return null;
                    var i = t.from.ch,
                        o = t.to.ch,
                        l = 0 == et(t.from, t.to),
                        a = (function (e, t, n) {
                            var r;
                            if (e)
                                for (var i = 0; i < e.length; ++i) {
                                    var o = e[i],
                                        l = o.marker;
                                    if (null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t) || (o.from == t && "bookmark" == l.type && (!n || !o.marker.insertLeft))) {
                                        var a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                                        (r || (r = [])).push(new kt(l, o.from, a ? null : o.to));
                                    }
                                }
                            return r;
                        })(n, i, l),
                        u = (function (e, t, n) {
                            var r;
                            if (e)
                                for (var i = 0; i < e.length; ++i) {
                                    var o = e[i],
                                        l = o.marker;
                                    if (null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t) || (o.from == t && "bookmark" == l.type && (!n || o.marker.insertLeft))) {
                                        var a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                                        (r || (r = [])).push(new kt(l, a ? null : o.from - t, null == o.to ? null : o.to - t));
                                    }
                                }
                            return r;
                        })(r, o, l),
                        s = 1 == t.text.length,
                        c = q(t.text).length + (s ? i : 0);
                    if (a)
                        for (var f = 0; f < a.length; ++f) {
                            var d = a[f];
                            if (null == d.to) {
                                var p = Ct(u, d.marker);
                                p ? s && (d.to = null == p.to ? null : p.to + c) : (d.to = i);
                            }
                        }
                    if (u)
                        for (var h = 0; h < u.length; ++h) {
                            var m = u[h];
                            null != m.to && (m.to += c), null == m.from ? Ct(a, m.marker) || ((m.from = c), s && (a || (a = [])).push(m)) : ((m.from += c), s && (a || (a = [])).push(m));
                        }
                    a && (a = Et(a)), u && u != a && (u = Et(u));
                    var g = [a];
                    if (!s) {
                        var v,
                            y = t.text.length - 2;
                        if (y > 0 && a) for (var b = 0; b < a.length; ++b) null == a[b].to && (v || (v = [])).push(new kt(a[b].marker, null, null));
                        for (var w = 0; w < y; ++w) g.push(v);
                        g.push(u);
                    }
                    return g;
                }
                function Et(e) {
                    for (var t = 0; t < e.length; ++t) {
                        var n = e[t];
                        null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && e.splice(t--, 1);
                    }
                    return e.length ? e : null;
                }
                function Lt(e) {
                    var t = e.markedSpans;
                    if (t) {
                        for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
                        e.markedSpans = null;
                    }
                }
                function Mt(e, t) {
                    if (t) {
                        for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
                        e.markedSpans = t;
                    }
                }
                function Nt(e) {
                    return e.inclusiveLeft ? -1 : 0;
                }
                function Ot(e) {
                    return e.inclusiveRight ? 1 : 0;
                }
                function Pt(e, t) {
                    var n = e.lines.length - t.lines.length;
                    if (0 != n) return n;
                    var r = e.find(),
                        i = t.find(),
                        o = et(r.from, i.from) || Nt(e) - Nt(t);
                    if (o) return -o;
                    var l = et(r.to, i.to) || Ot(e) - Ot(t);
                    return l || t.id - e.id;
                }
                function Dt(e, t) {
                    var n,
                        r = xt && e.markedSpans;
                    if (r) for (var i = void 0, o = 0; o < r.length; ++o) (i = r[o]).marker.collapsed && null == (t ? i.from : i.to) && (!n || Pt(n, i.marker) < 0) && (n = i.marker);
                    return n;
                }
                function At(e) {
                    return Dt(e, !0);
                }
                function zt(e) {
                    return Dt(e, !1);
                }
                function Ft(e, t) {
                    var n,
                        r = xt && e.markedSpans;
                    if (r)
                        for (var i = 0; i < r.length; ++i) {
                            var o = r[i];
                            o.marker.collapsed && (null == o.from || o.from < t) && (null == o.to || o.to > t) && (!n || Pt(n, o.marker) < 0) && (n = o.marker);
                        }
                    return n;
                }
                function It(e, t, n, r, i) {
                    var o = Ke(e, t),
                        l = xt && o.markedSpans;
                    if (l)
                        for (var a = 0; a < l.length; ++a) {
                            var u = l[a];
                            if (u.marker.collapsed) {
                                var s = u.marker.find(0),
                                    c = et(s.from, n) || Nt(u.marker) - Nt(i),
                                    f = et(s.to, r) || Ot(u.marker) - Ot(i);
                                if (!((c >= 0 && f <= 0) || (c <= 0 && f >= 0)) && ((c <= 0 && (u.marker.inclusiveRight && i.inclusiveLeft ? et(s.to, n) >= 0 : et(s.to, n) > 0)) || (c >= 0 && (u.marker.inclusiveRight && i.inclusiveLeft ? et(s.from, r) <= 0 : et(s.from, r) < 0)))) return !0;
                            }
                        }
                }
                function _t(e) {
                    for (var t; (t = At(e)); ) e = t.find(-1, !0).line;
                    return e;
                }
                function Rt(e, t) {
                    var n = Ke(e, t),
                        r = _t(n);
                    return n == r ? t : Qe(r);
                }
                function Wt(e, t) {
                    if (t > e.lastLine()) return t;
                    var n,
                        r = Ke(e, t);
                    if (!Ht(e, r)) return t;
                    for (; (n = zt(r)); ) r = n.find(1, !0).line;
                    return Qe(r) + 1;
                }
                function Ht(e, t) {
                    var n = xt && t.markedSpans;
                    if (n)
                        for (var r = void 0, i = 0; i < n.length; ++i)
                            if ((r = n[i]).marker.collapsed) {
                                if (null == r.from) return !0;
                                if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && Bt(e, t, r)) return !0;
                            }
                }
                function Bt(e, t, n) {
                    if (null == n.to) {
                        var r = n.marker.find(1, !0);
                        return Bt(e, r.line, Ct(r.line.markedSpans, n.marker));
                    }
                    if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
                    for (var i = void 0, o = 0; o < t.markedSpans.length; ++o) if ((i = t.markedSpans[o]).marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Bt(e, t, i)) return !0;
                }
                function Ut(e) {
                    for (var t = 0, n = (e = _t(e)).parent, r = 0; r < n.lines.length; ++r) {
                        var i = n.lines[r];
                        if (i == e) break;
                        t += i.height;
                    }
                    for (var o = n.parent; o; o = (n = o).parent)
                        for (var l = 0; l < o.children.length; ++l) {
                            var a = o.children[l];
                            if (a == n) break;
                            t += a.height;
                        }
                    return t;
                }
                function jt(e) {
                    if (0 == e.height) return 0;
                    for (var t, n = e.text.length, r = e; (t = At(r)); ) {
                        var i = t.find(0, !0);
                        (r = i.from.line), (n += i.from.ch - i.to.ch);
                    }
                    for (r = e; (t = zt(r)); ) {
                        var o = t.find(0, !0);
                        (n -= r.text.length - o.from.ch), (n += (r = o.to.line).text.length - o.to.ch);
                    }
                    return n;
                }
                function Vt(e) {
                    var t = e.display,
                        n = e.doc;
                    (t.maxLine = Ke(n, n.first)),
                        (t.maxLineLength = jt(t.maxLine)),
                        (t.maxLineChanged = !0),
                        n.iter(function (e) {
                            var n = jt(e);
                            n > t.maxLineLength && ((t.maxLineLength = n), (t.maxLine = e));
                        });
                }
                var Kt = function (e, t, n) {
                    (this.text = e), Mt(this, t), (this.height = n ? n(this) : 1);
                };
                function $t(e) {
                    (e.parent = null), Lt(e);
                }
                (Kt.prototype.lineNo = function () {
                    return Qe(this);
                }),
                    ye(Kt);
                var Gt = {},
                    qt = {};
                function Qt(e, t) {
                    if (!e || /^\s*$/.test(e)) return null;
                    var n = t.addModeClass ? qt : Gt;
                    return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
                }
                function Xt(e, t) {
                    var n = O("span", null, null, u ? "padding-right: .1px" : null),
                        r = { pre: O("pre", [n], "CodeMirror-line"), content: n, col: 0, pos: 0, cm: e, trailingSpace: !1, splitSpaces: e.getOption("lineWrapping") };
                    t.measure = {};
                    for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
                        var o = i ? t.rest[i - 1] : t.line,
                            l = void 0;
                        (r.pos = 0),
                            (r.addToken = Zt),
                            Ne(e.display.measure) && (l = se(o, e.doc.direction)) && (r.addToken = Jt(r.addToken, l)),
                            (r.map = []),
                            tn(o, r, ft(e, o, t != e.display.externalMeasured && Qe(o))),
                            o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = z(o.styleClasses.bgClass, r.bgClass || "")), o.styleClasses.textClass && (r.textClass = z(o.styleClasses.textClass, r.textClass || ""))),
                            0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Me(e.display.measure))),
                            0 == i ? ((t.measure.map = r.map), (t.measure.cache = {})) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
                    }
                    if (u) {
                        var a = r.content.lastChild;
                        (/\bcm-tab\b/.test(a.className) || (a.querySelector && a.querySelector(".cm-tab"))) && (r.content.className = "cm-tab-wrap-hack");
                    }
                    return he(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = z(r.pre.className, r.textClass || "")), r;
                }
                function Yt(e) {
                    var t = N("span", "\u2022", "cm-invalidchar");
                    return (t.title = "\\u" + e.charCodeAt(0).toString(16)), t.setAttribute("aria-label", t.title), t;
                }
                function Zt(e, t, n, r, i, o, u) {
                    if (t) {
                        var s,
                            c = e.splitSpaces
                                ? (function (e, t) {
                                      if (e.length > 1 && !/  /.test(e)) return e;
                                      for (var n = t, r = "", i = 0; i < e.length; i++) {
                                          var o = e.charAt(i);
                                          " " != o || !n || (i != e.length - 1 && 32 != e.charCodeAt(i + 1)) || (o = "\xa0"), (r += o), (n = " " == o);
                                      }
                                      return r;
                                  })(t, e.trailingSpace)
                                : t,
                            f = e.cm.state.specialChars,
                            d = !1;
                        if (f.test(t)) {
                            s = document.createDocumentFragment();
                            for (var p = 0; ; ) {
                                f.lastIndex = p;
                                var h = f.exec(t),
                                    m = h ? h.index - p : t.length - p;
                                if (m) {
                                    var g = document.createTextNode(c.slice(p, p + m));
                                    l && a < 9 ? s.appendChild(N("span", [g])) : s.appendChild(g), e.map.push(e.pos, e.pos + m, g), (e.col += m), (e.pos += m);
                                }
                                if (!h) break;
                                p += m + 1;
                                var v = void 0;
                                if ("\t" == h[0]) {
                                    var y = e.cm.options.tabSize,
                                        b = y - (e.col % y);
                                    (v = s.appendChild(N("span", G(b), "cm-tab"))).setAttribute("role", "presentation"), v.setAttribute("cm-text", "\t"), (e.col += b);
                                } else "\r" == h[0] || "\n" == h[0] ? ((v = s.appendChild(N("span", "\r" == h[0] ? "\u240d" : "\u2424", "cm-invalidchar"))).setAttribute("cm-text", h[0]), (e.col += 1)) : ((v = e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text", h[0]), l && a < 9 ? s.appendChild(N("span", [v])) : s.appendChild(v), (e.col += 1));
                                e.map.push(e.pos, e.pos + 1, v), e.pos++;
                            }
                        } else (e.col += t.length), (s = document.createTextNode(c)), e.map.push(e.pos, e.pos + t.length, s), l && a < 9 && (d = !0), (e.pos += t.length);
                        if (((e.trailingSpace = 32 == c.charCodeAt(t.length - 1)), n || r || i || d || o)) {
                            var w = n || "";
                            r && (w += r), i && (w += i);
                            var x = N("span", [s], w, o);
                            if (u) for (var k in u) u.hasOwnProperty(k) && "style" != k && "class" != k && x.setAttribute(k, u[k]);
                            return e.content.appendChild(x);
                        }
                        e.content.appendChild(s);
                    }
                }
                function Jt(e, t) {
                    return function (n, r, i, o, l, a, u) {
                        i = i ? i + " cm-force-border" : "cm-force-border";
                        for (var s = n.pos, c = s + r.length; ; ) {
                            for (var f = void 0, d = 0; d < t.length && !((f = t[d]).to > s && f.from <= s); d++);
                            if (f.to >= c) return e(n, r, i, o, l, a, u);
                            e(n, r.slice(0, f.to - s), i, o, null, a, u), (o = null), (r = r.slice(f.to - s)), (s = f.to);
                        }
                    };
                }
                function en(e, t, n, r) {
                    var i = !r && n.widgetNode;
                    i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), (e.pos += t), (e.trailingSpace = !1);
                }
                function tn(e, t, n) {
                    var r = e.markedSpans,
                        i = e.text,
                        o = 0;
                    if (r)
                        for (var l, a, u, s, c, f, d, p = i.length, h = 0, m = 1, g = "", v = 0; ; ) {
                            if (v == h) {
                                (u = s = c = a = ""), (d = null), (f = null), (v = 1 / 0);
                                for (var y = [], b = void 0, w = 0; w < r.length; ++w) {
                                    var x = r[w],
                                        k = x.marker;
                                    if ("bookmark" == k.type && x.from == h && k.widgetNode) y.push(k);
                                    else if (x.from <= h && (null == x.to || x.to > h || (k.collapsed && x.to == h && x.from == h))) {
                                        if ((null != x.to && x.to != h && v > x.to && ((v = x.to), (s = "")), k.className && (u += " " + k.className), k.css && (a = (a ? a + ";" : "") + k.css), k.startStyle && x.from == h && (c += " " + k.startStyle), k.endStyle && x.to == v && (b || (b = [])).push(k.endStyle, x.to), k.title && ((d || (d = {})).title = k.title), k.attributes)) for (var C in k.attributes) (d || (d = {}))[C] = k.attributes[C];
                                        k.collapsed && (!f || Pt(f.marker, k) < 0) && (f = x);
                                    } else x.from > h && v > x.from && (v = x.from);
                                }
                                if (b) for (var S = 0; S < b.length; S += 2) b[S + 1] == v && (s += " " + b[S]);
                                if (!f || f.from == h) for (var T = 0; T < y.length; ++T) en(t, 0, y[T]);
                                if (f && (f.from || 0) == h) {
                                    if ((en(t, (null == f.to ? p + 1 : f.to) - h, f.marker, null == f.from), null == f.to)) return;
                                    f.to == h && (f = !1);
                                }
                            }
                            if (h >= p) break;
                            for (var E = Math.min(p, v); ; ) {
                                if (g) {
                                    var L = h + g.length;
                                    if (!f) {
                                        var M = L > E ? g.slice(0, E - h) : g;
                                        t.addToken(t, M, l ? l + u : u, c, h + M.length == v ? s : "", a, d);
                                    }
                                    if (L >= E) {
                                        (g = g.slice(E - h)), (h = E);
                                        break;
                                    }
                                    (h = L), (c = "");
                                }
                                (g = i.slice(o, (o = n[m++]))), (l = Qt(n[m++], t.cm.options));
                            }
                        }
                    else for (var N = 1; N < n.length; N += 2) t.addToken(t, i.slice(o, (o = n[N])), Qt(n[N + 1], t.cm.options));
                }
                function nn(e, t, n) {
                    (this.line = t),
                        (this.rest = (function (e) {
                            for (var t, n; (t = zt(e)); ) (e = t.find(1, !0).line), (n || (n = [])).push(e);
                            return n;
                        })(t)),
                        (this.size = this.rest ? Qe(q(this.rest)) - n + 1 : 1),
                        (this.node = this.text = null),
                        (this.hidden = Ht(e, t));
                }
                function rn(e, t, n) {
                    for (var r, i = [], o = t; o < n; o = r) {
                        var l = new nn(e.doc, Ke(e.doc, o), o);
                        (r = o + l.size), i.push(l);
                    }
                    return i;
                }
                var on = null,
                    ln = null;
                function an(e, t) {
                    var n = de(e, t);
                    if (n.length) {
                        var r,
                            i = Array.prototype.slice.call(arguments, 2);
                        on ? (r = on.delayedCallbacks) : ln ? (r = ln) : ((r = ln = []), setTimeout(un, 0));
                        for (
                            var o = function (e) {
                                    r.push(function () {
                                        return n[e].apply(null, i);
                                    });
                                },
                                l = 0;
                            l < n.length;
                            ++l
                        )
                            o(l);
                    }
                }
                function un() {
                    var e = ln;
                    ln = null;
                    for (var t = 0; t < e.length; ++t) e[t]();
                }
                function sn(e, t, n, r) {
                    for (var i = 0; i < t.changes.length; i++) {
                        var o = t.changes[i];
                        "text" == o ? dn(e, t) : "gutter" == o ? hn(e, t, n, r) : "class" == o ? pn(e, t) : "widget" == o && mn(e, t, r);
                    }
                    t.changes = null;
                }
                function cn(e) {
                    return e.node == e.text && ((e.node = N("div", null, null, "position: relative")), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), l && a < 8 && (e.node.style.zIndex = 2)), e.node;
                }
                function fn(e, t) {
                    var n = e.display.externalMeasured;
                    return n && n.line == t.line ? ((e.display.externalMeasured = null), (t.measure = n.measure), n.built) : Xt(e, t);
                }
                function dn(e, t) {
                    var n = t.text.className,
                        r = fn(e, t);
                    t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), (t.text = r.pre), r.bgClass != t.bgClass || r.textClass != t.textClass ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), pn(e, t)) : n && (t.text.className = n);
                }
                function pn(e, t) {
                    !(function (e, t) {
                        var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
                        if ((n && (n += " CodeMirror-linebackground"), t.background)) n ? (t.background.className = n) : (t.background.parentNode.removeChild(t.background), (t.background = null));
                        else if (n) {
                            var r = cn(t);
                            (t.background = r.insertBefore(N("div", null, n), r.firstChild)), e.display.input.setUneditable(t.background);
                        }
                    })(e, t),
                        t.line.wrapClass ? (cn(t).className = t.line.wrapClass) : t.node != t.text && (t.node.className = "");
                    var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
                    t.text.className = n || "";
                }
                function hn(e, t, n, r) {
                    if ((t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)), t.gutterBackground && (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)), t.line.gutterClass)) {
                        var i = cn(t);
                        (t.gutterBackground = N("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px")), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text);
                    }
                    var o = t.line.gutterMarkers;
                    if (e.options.lineNumbers || o) {
                        var l = cn(t),
                            a = (t.gutter = N("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px"));
                        if ((e.display.input.setUneditable(a), l.insertBefore(a, t.text), t.line.gutterClass && (a.className += " " + t.line.gutterClass), !e.options.lineNumbers || (o && o["CodeMirror-linenumbers"]) || (t.lineNumber = a.appendChild(N("div", Ze(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), o))
                            for (var u = 0; u < e.display.gutterSpecs.length; ++u) {
                                var s = e.display.gutterSpecs[u].className,
                                    c = o.hasOwnProperty(s) && o[s];
                                c && a.appendChild(N("div", [c], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[s] + "px; width: " + r.gutterWidth[s] + "px"));
                            }
                    }
                }
                function mn(e, t, n) {
                    t.alignable && (t.alignable = null);
                    for (var r = S("CodeMirror-linewidget"), i = t.node.firstChild, o = void 0; i; i = o) (o = i.nextSibling), r.test(i.className) && t.node.removeChild(i);
                    vn(e, t, n);
                }
                function gn(e, t, n, r) {
                    var i = fn(e, t);
                    return (t.text = t.node = i.pre), i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), pn(e, t), hn(e, t, n, r), vn(e, t, r), t.node;
                }
                function vn(e, t, n) {
                    if ((yn(e, t.line, t, n, !0), t.rest)) for (var r = 0; r < t.rest.length; r++) yn(e, t.rest[r], t, n, !1);
                }
                function yn(e, t, n, r, i) {
                    if (t.widgets)
                        for (var o = cn(n), l = 0, a = t.widgets; l < a.length; ++l) {
                            var u = a[l],
                                s = N("div", [u.node], "CodeMirror-linewidget" + (u.className ? " " + u.className : ""));
                            u.handleMouseEvents || s.setAttribute("cm-ignore-events", "true"), bn(u, s, n, r), e.display.input.setUneditable(s), i && u.above ? o.insertBefore(s, n.gutter || n.text) : o.appendChild(s), an(u, "redraw");
                        }
                }
                function bn(e, t, n, r) {
                    if (e.noHScroll) {
                        (n.alignable || (n.alignable = [])).push(t);
                        var i = r.wrapperWidth;
                        (t.style.left = r.fixedPos + "px"), e.coverGutter || ((i -= r.gutterTotalWidth), (t.style.paddingLeft = r.gutterTotalWidth + "px")), (t.style.width = i + "px");
                    }
                    e.coverGutter && ((t.style.zIndex = 5), (t.style.position = "relative"), e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
                }
                function wn(e) {
                    if (null != e.height) return e.height;
                    var t = e.doc.cm;
                    if (!t) return 0;
                    if (!P(document.body, e.node)) {
                        var n = "position: relative;";
                        e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), M(t.display.measure, N("div", [e.node], null, n));
                    }
                    return (e.height = e.node.parentNode.offsetHeight);
                }
                function xn(e, t) {
                    for (var n = Ce(t); n != e.wrapper; n = n.parentNode) if (!n || (1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events")) || (n.parentNode == e.sizer && n != e.mover)) return !0;
                }
                function kn(e) {
                    return e.lineSpace.offsetTop;
                }
                function Cn(e) {
                    return e.mover.offsetHeight - e.lineSpace.offsetHeight;
                }
                function Sn(e) {
                    if (e.cachedPaddingH) return e.cachedPaddingH;
                    var t = M(e.measure, N("pre", "x", "CodeMirror-line-like")),
                        n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
                        r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };
                    return isNaN(r.left) || isNaN(r.right) || (e.cachedPaddingH = r), r;
                }
                function Tn(e) {
                    return 50 - e.display.nativeBarWidth;
                }
                function En(e) {
                    return e.display.scroller.clientWidth - Tn(e) - e.display.barWidth;
                }
                function Ln(e) {
                    return e.display.scroller.clientHeight - Tn(e) - e.display.barHeight;
                }
                function Mn(e, t, n) {
                    if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
                    for (var r = 0; r < e.rest.length; r++) if (e.rest[r] == t) return { map: e.measure.maps[r], cache: e.measure.caches[r] };
                    for (var i = 0; i < e.rest.length; i++) if (Qe(e.rest[i]) > n) return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
                }
                function Nn(e, t, n, r) {
                    return Dn(e, Pn(e, t), n, r);
                }
                function On(e, t) {
                    if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[sr(e, t)];
                    var n = e.display.externalMeasured;
                    return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0;
                }
                function Pn(e, t) {
                    var n = Qe(t),
                        r = On(e, n);
                    r && !r.text ? (r = null) : r && r.changes && (sn(e, r, n, ir(e)), (e.curOp.forceUpdate = !0)),
                        r ||
                            (r = (function (e, t) {
                                var n = Qe((t = _t(t))),
                                    r = (e.display.externalMeasured = new nn(e.doc, t, n));
                                r.lineN = n;
                                var i = (r.built = Xt(e, r));
                                return (r.text = i.pre), M(e.display.lineMeasure, i.pre), r;
                            })(e, t));
                    var i = Mn(r, t, n);
                    return { line: t, view: r, rect: null, map: i.map, cache: i.cache, before: i.before, hasHeights: !1 };
                }
                function Dn(e, t, n, r, i) {
                    t.before && (n = -1);
                    var o,
                        u = n + (r || "");
                    return (
                        t.cache.hasOwnProperty(u)
                            ? (o = t.cache[u])
                            : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
                              t.hasHeights ||
                                  ((function (e, t, n) {
                                      var r = e.options.lineWrapping,
                                          i = r && En(e);
                                      if (!t.measure.heights || (r && t.measure.width != i)) {
                                          var o = (t.measure.heights = []);
                                          if (r) {
                                              t.measure.width = i;
                                              for (var l = t.text.firstChild.getClientRects(), a = 0; a < l.length - 1; a++) {
                                                  var u = l[a],
                                                      s = l[a + 1];
                                                  Math.abs(u.bottom - s.bottom) > 2 && o.push((u.bottom + s.top) / 2 - n.top);
                                              }
                                          }
                                          o.push(n.bottom - n.top);
                                      }
                                  })(e, t.view, t.rect),
                                  (t.hasHeights = !0)),
                              (o = (function (e, t, n, r) {
                                  var i,
                                      o = Fn(t.map, n, r),
                                      u = o.node,
                                      s = o.start,
                                      c = o.end,
                                      f = o.collapse;
                                  if (3 == u.nodeType) {
                                      for (var d = 0; d < 4; d++) {
                                          for (; s && re(t.line.text.charAt(o.coverStart + s)); ) --s;
                                          for (; o.coverStart + c < o.coverEnd && re(t.line.text.charAt(o.coverStart + c)); ) ++c;
                                          if ((i = l && a < 9 && 0 == s && c == o.coverEnd - o.coverStart ? u.parentNode.getBoundingClientRect() : In(T(u, s, c).getClientRects(), r)).left || i.right || 0 == s) break;
                                          (c = s), (s -= 1), (f = "right");
                                      }
                                      l &&
                                          a < 11 &&
                                          (i = (function (e, t) {
                                              if (
                                                  !window.screen ||
                                                  null == screen.logicalXDPI ||
                                                  screen.logicalXDPI == screen.deviceXDPI ||
                                                  !(function (e) {
                                                      if (null != Ae) return Ae;
                                                      var t = M(e, N("span", "x")),
                                                          n = t.getBoundingClientRect(),
                                                          r = T(t, 0, 1).getBoundingClientRect();
                                                      return (Ae = Math.abs(n.left - r.left) > 1);
                                                  })(e)
                                              )
                                                  return t;
                                              var n = screen.logicalXDPI / screen.deviceXDPI,
                                                  r = screen.logicalYDPI / screen.deviceYDPI;
                                              return { left: t.left * n, right: t.right * n, top: t.top * r, bottom: t.bottom * r };
                                          })(e.display.measure, i));
                                  } else {
                                      var p;
                                      s > 0 && (f = r = "right"), (i = e.options.lineWrapping && (p = u.getClientRects()).length > 1 ? p["right" == r ? p.length - 1 : 0] : u.getBoundingClientRect());
                                  }
                                  if (l && a < 9 && !s && (!i || (!i.left && !i.right))) {
                                      var h = u.parentNode.getClientRects()[0];
                                      i = h ? { left: h.left, right: h.left + rr(e.display), top: h.top, bottom: h.bottom } : zn;
                                  }
                                  for (var m = i.top - t.rect.top, g = i.bottom - t.rect.top, v = (m + g) / 2, y = t.view.measure.heights, b = 0; b < y.length - 1 && !(v < y[b]); b++);
                                  var w = b ? y[b - 1] : 0,
                                      x = y[b],
                                      k = { left: ("right" == f ? i.right : i.left) - t.rect.left, right: ("left" == f ? i.left : i.right) - t.rect.left, top: w, bottom: x };
                                  return i.left || i.right || (k.bogus = !0), e.options.singleCursorHeightPerLine || ((k.rtop = m), (k.rbottom = g)), k;
                              })(e, t, n, r)).bogus || (t.cache[u] = o)),
                        { left: o.left, right: o.right, top: i ? o.rtop : o.top, bottom: i ? o.rbottom : o.bottom }
                    );
                }
                var An,
                    zn = { left: 0, right: 0, top: 0, bottom: 0 };
                function Fn(e, t, n) {
                    for (var r, i, o, l, a, u, s = 0; s < e.length; s += 3)
                        if (((a = e[s]), (u = e[s + 1]), t < a ? ((i = 0), (o = 1), (l = "left")) : t < u ? (o = 1 + (i = t - a)) : (s == e.length - 3 || (t == u && e[s + 3] > t)) && ((i = (o = u - a) - 1), t >= u && (l = "right")), null != i)) {
                            if (((r = e[s + 2]), a == u && n == (r.insertLeft ? "left" : "right") && (l = n), "left" == n && 0 == i)) for (; s && e[s - 2] == e[s - 3] && e[s - 1].insertLeft; ) (r = e[2 + (s -= 3)]), (l = "left");
                            if ("right" == n && i == u - a) for (; s < e.length - 3 && e[s + 3] == e[s + 4] && !e[s + 5].insertLeft; ) (r = e[(s += 3) + 2]), (l = "right");
                            break;
                        }
                    return { node: r, start: i, end: o, collapse: l, coverStart: a, coverEnd: u };
                }
                function In(e, t) {
                    var n = zn;
                    if ("left" == t) for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
                    else for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
                    return n;
                }
                function _n(e) {
                    if (e.measure && ((e.measure.cache = {}), (e.measure.heights = null), e.rest)) for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
                }
                function Rn(e) {
                    (e.display.externalMeasure = null), L(e.display.lineMeasure);
                    for (var t = 0; t < e.display.view.length; t++) _n(e.display.view[t]);
                }
                function Wn(e) {
                    Rn(e), (e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null), e.options.lineWrapping || (e.display.maxLineChanged = !0), (e.display.lineNumChars = null);
                }
                function Hn() {
                    return c && g ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft;
                }
                function Bn() {
                    return c && g ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop;
                }
                function Un(e) {
                    var t = 0;
                    if (e.widgets) for (var n = 0; n < e.widgets.length; ++n) e.widgets[n].above && (t += wn(e.widgets[n]));
                    return t;
                }
                function jn(e, t, n, r, i) {
                    if (!i) {
                        var o = Un(t);
                        (n.top += o), (n.bottom += o);
                    }
                    if ("line" == r) return n;
                    r || (r = "local");
                    var l = Ut(t);
                    if (("local" == r ? (l += kn(e.display)) : (l -= e.display.viewOffset), "page" == r || "window" == r)) {
                        var a = e.display.lineSpace.getBoundingClientRect();
                        l += a.top + ("window" == r ? 0 : Bn());
                        var u = a.left + ("window" == r ? 0 : Hn());
                        (n.left += u), (n.right += u);
                    }
                    return (n.top += l), (n.bottom += l), n;
                }
                function Vn(e, t, n) {
                    if ("div" == n) return t;
                    var r = t.left,
                        i = t.top;
                    if ("page" == n) (r -= Hn()), (i -= Bn());
                    else if ("local" == n || !n) {
                        var o = e.display.sizer.getBoundingClientRect();
                        (r += o.left), (i += o.top);
                    }
                    var l = e.display.lineSpace.getBoundingClientRect();
                    return { left: r - l.left, top: i - l.top };
                }
                function Kn(e, t, n, r, i) {
                    return r || (r = Ke(e.doc, t.line)), jn(e, r, Nn(e, r, t.ch, i), n);
                }
                function $n(e, t, n, r, i, o) {
                    function l(t, l) {
                        var a = Dn(e, i, t, l ? "right" : "left", o);
                        return l ? (a.left = a.right) : (a.right = a.left), jn(e, r, a, n);
                    }
                    (r = r || Ke(e.doc, t.line)), i || (i = Pn(e, r));
                    var a = se(r, e.doc.direction),
                        u = t.ch,
                        s = t.sticky;
                    if ((u >= r.text.length ? ((u = r.text.length), (s = "before")) : u <= 0 && ((u = 0), (s = "after")), !a)) return l("before" == s ? u - 1 : u, "before" == s);
                    function c(e, t, n) {
                        return l(n ? e - 1 : e, (1 == a[t].level) != n);
                    }
                    var f = ae(a, u, s),
                        d = le,
                        p = c(u, f, "before" == s);
                    return null != d && (p.other = c(u, d, "before" != s)), p;
                }
                function Gn(e, t) {
                    var n = 0;
                    (t = lt(e.doc, t)), e.options.lineWrapping || (n = rr(e.display) * t.ch);
                    var r = Ke(e.doc, t.line),
                        i = Ut(r) + kn(e.display);
                    return { left: n, right: n, top: i, bottom: i + r.height };
                }
                function qn(e, t, n, r, i) {
                    var o = Je(e, t, n);
                    return (o.xRel = i), r && (o.outside = r), o;
                }
                function Qn(e, t, n) {
                    var r = e.doc;
                    if ((n += e.display.viewOffset) < 0) return qn(r.first, 0, null, -1, -1);
                    var i = Xe(r, n),
                        o = r.first + r.size - 1;
                    if (i > o) return qn(r.first + r.size - 1, Ke(r, o).text.length, null, 1, 1);
                    t < 0 && (t = 0);
                    for (var l = Ke(r, i); ; ) {
                        var a = Jn(e, l, i, t, n),
                            u = Ft(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
                        if (!u) return a;
                        var s = u.find(1);
                        if (s.line == i) return s;
                        l = Ke(r, (i = s.line));
                    }
                }
                function Xn(e, t, n, r) {
                    r -= Un(t);
                    var i = t.text.length,
                        o = oe(
                            function (t) {
                                return Dn(e, n, t - 1).bottom <= r;
                            },
                            i,
                            0
                        );
                    return {
                        begin: o,
                        end: (i = oe(
                            function (t) {
                                return Dn(e, n, t).top > r;
                            },
                            o,
                            i
                        )),
                    };
                }
                function Yn(e, t, n, r) {
                    return n || (n = Pn(e, t)), Xn(e, t, n, jn(e, t, Dn(e, n, r), "line").top);
                }
                function Zn(e, t, n, r) {
                    return !(e.bottom <= n) && (e.top > n || (r ? e.left : e.right) > t);
                }
                function Jn(e, t, n, r, i) {
                    i -= Ut(t);
                    var o = Pn(e, t),
                        l = Un(t),
                        a = 0,
                        u = t.text.length,
                        s = !0,
                        c = se(t, e.doc.direction);
                    if (c) {
                        var f = (e.options.lineWrapping ? tr : er)(e, t, n, o, c, r, i);
                        (a = (s = 1 != f.level) ? f.from : f.to - 1), (u = s ? f.to : f.from - 1);
                    }
                    var d,
                        p,
                        h = null,
                        m = null,
                        g = oe(
                            function (t) {
                                var n = Dn(e, o, t);
                                return (n.top += l), (n.bottom += l), !!Zn(n, r, i, !1) && (n.top <= i && n.left <= r && ((h = t), (m = n)), !0);
                            },
                            a,
                            u
                        ),
                        v = !1;
                    if (m) {
                        var y = r - m.left < m.right - r,
                            b = y == s;
                        (g = h + (b ? 0 : 1)), (p = b ? "after" : "before"), (d = y ? m.left : m.right);
                    } else {
                        s || (g != u && g != a) || g++, (p = 0 == g ? "after" : g == t.text.length ? "before" : Dn(e, o, g - (s ? 1 : 0)).bottom + l <= i == s ? "after" : "before");
                        var w = $n(e, Je(n, g, p), "line", t, o);
                        (d = w.left), (v = i < w.top ? -1 : i >= w.bottom ? 1 : 0);
                    }
                    return qn(n, (g = ie(t.text, g, 1)), p, v, r - d);
                }
                function er(e, t, n, r, i, o, l) {
                    var a = oe(
                            function (a) {
                                var u = i[a],
                                    s = 1 != u.level;
                                return Zn($n(e, Je(n, s ? u.to : u.from, s ? "before" : "after"), "line", t, r), o, l, !0);
                            },
                            0,
                            i.length - 1
                        ),
                        u = i[a];
                    if (a > 0) {
                        var s = 1 != u.level,
                            c = $n(e, Je(n, s ? u.from : u.to, s ? "after" : "before"), "line", t, r);
                        Zn(c, o, l, !0) && c.top > l && (u = i[a - 1]);
                    }
                    return u;
                }
                function tr(e, t, n, r, i, o, l) {
                    var a = Xn(e, t, r, l),
                        u = a.begin,
                        s = a.end;
                    /\s/.test(t.text.charAt(s - 1)) && s--;
                    for (var c = null, f = null, d = 0; d < i.length; d++) {
                        var p = i[d];
                        if (!(p.from >= s || p.to <= u)) {
                            var h = Dn(e, r, 1 != p.level ? Math.min(s, p.to) - 1 : Math.max(u, p.from)).right,
                                m = h < o ? o - h + 1e9 : h - o;
                            (!c || f > m) && ((c = p), (f = m));
                        }
                    }
                    return c || (c = i[i.length - 1]), c.from < u && (c = { from: u, to: c.to, level: c.level }), c.to > s && (c = { from: c.from, to: s, level: c.level }), c;
                }
                function nr(e) {
                    if (null != e.cachedTextHeight) return e.cachedTextHeight;
                    if (null == An) {
                        An = N("pre", null, "CodeMirror-line-like");
                        for (var t = 0; t < 49; ++t) An.appendChild(document.createTextNode("x")), An.appendChild(N("br"));
                        An.appendChild(document.createTextNode("x"));
                    }
                    M(e.measure, An);
                    var n = An.offsetHeight / 50;
                    return n > 3 && (e.cachedTextHeight = n), L(e.measure), n || 1;
                }
                function rr(e) {
                    if (null != e.cachedCharWidth) return e.cachedCharWidth;
                    var t = N("span", "xxxxxxxxxx"),
                        n = N("pre", [t], "CodeMirror-line-like");
                    M(e.measure, n);
                    var r = t.getBoundingClientRect(),
                        i = (r.right - r.left) / 10;
                    return i > 2 && (e.cachedCharWidth = i), i || 10;
                }
                function ir(e) {
                    for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) {
                        var a = e.display.gutterSpecs[l].className;
                        (n[a] = o.offsetLeft + o.clientLeft + i), (r[a] = o.clientWidth);
                    }
                    return { fixedPos: or(t), gutterTotalWidth: t.gutters.offsetWidth, gutterLeft: n, gutterWidth: r, wrapperWidth: t.wrapper.clientWidth };
                }
                function or(e) {
                    return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
                }
                function lr(e) {
                    var t = nr(e.display),
                        n = e.options.lineWrapping,
                        r = n && Math.max(5, e.display.scroller.clientWidth / rr(e.display) - 3);
                    return function (i) {
                        if (Ht(e.doc, i)) return 0;
                        var o = 0;
                        if (i.widgets) for (var l = 0; l < i.widgets.length; l++) i.widgets[l].height && (o += i.widgets[l].height);
                        return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
                    };
                }
                function ar(e) {
                    var t = e.doc,
                        n = lr(e);
                    t.iter(function (e) {
                        var t = n(e);
                        t != e.height && qe(e, t);
                    });
                }
                function ur(e, t, n, r) {
                    var i = e.display;
                    if (!n && "true" == Ce(t).getAttribute("cm-not-content")) return null;
                    var o,
                        l,
                        a = i.lineSpace.getBoundingClientRect();
                    try {
                        (o = t.clientX - a.left), (l = t.clientY - a.top);
                    } catch (f) {
                        return null;
                    }
                    var u,
                        s = Qn(e, o, l);
                    if (r && s.xRel > 0 && (u = Ke(e.doc, s.line).text).length == s.ch) {
                        var c = R(u, u.length, e.options.tabSize) - u.length;
                        s = Je(s.line, Math.max(0, Math.round((o - Sn(e.display).left) / rr(e.display)) - c));
                    }
                    return s;
                }
                function sr(e, t) {
                    if (t >= e.display.viewTo) return null;
                    if ((t -= e.display.viewFrom) < 0) return null;
                    for (var n = e.display.view, r = 0; r < n.length; r++) if ((t -= n[r].size) < 0) return r;
                }
                function cr(e, t, n, r) {
                    null == t && (t = e.doc.first), null == n && (n = e.doc.first + e.doc.size), r || (r = 0);
                    var i = e.display;
                    if ((r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), (e.curOp.viewChanged = !0), t >= i.viewTo)) xt && Rt(e.doc, t) < i.viewTo && dr(e);
                    else if (n <= i.viewFrom) xt && Wt(e.doc, n + r) > i.viewFrom ? dr(e) : ((i.viewFrom += r), (i.viewTo += r));
                    else if (t <= i.viewFrom && n >= i.viewTo) dr(e);
                    else if (t <= i.viewFrom) {
                        var o = pr(e, n, n + r, 1);
                        o ? ((i.view = i.view.slice(o.index)), (i.viewFrom = o.lineN), (i.viewTo += r)) : dr(e);
                    } else if (n >= i.viewTo) {
                        var l = pr(e, t, t, -1);
                        l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : dr(e);
                    } else {
                        var a = pr(e, t, t, -1),
                            u = pr(e, n, n + r, 1);
                        a && u ? ((i.view = i.view.slice(0, a.index).concat(rn(e, a.lineN, u.lineN)).concat(i.view.slice(u.index))), (i.viewTo += r)) : dr(e);
                    }
                    var s = i.externalMeasured;
                    s && (n < s.lineN ? (s.lineN += r) : t < s.lineN + s.size && (i.externalMeasured = null));
                }
                function fr(e, t, n) {
                    e.curOp.viewChanged = !0;
                    var r = e.display,
                        i = e.display.externalMeasured;
                    if ((i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo))) {
                        var o = r.view[sr(e, t)];
                        if (null != o.node) {
                            var l = o.changes || (o.changes = []);
                            -1 == H(l, n) && l.push(n);
                        }
                    }
                }
                function dr(e) {
                    (e.display.viewFrom = e.display.viewTo = e.doc.first), (e.display.view = []), (e.display.viewOffset = 0);
                }
                function pr(e, t, n, r) {
                    var i,
                        o = sr(e, t),
                        l = e.display.view;
                    if (!xt || n == e.doc.first + e.doc.size) return { index: o, lineN: n };
                    for (var a = e.display.viewFrom, u = 0; u < o; u++) a += l[u].size;
                    if (a != t) {
                        if (r > 0) {
                            if (o == l.length - 1) return null;
                            (i = a + l[o].size - t), o++;
                        } else i = a - t;
                        (t += i), (n += i);
                    }
                    for (; Rt(e.doc, n) != n; ) {
                        if (o == (r < 0 ? 0 : l.length - 1)) return null;
                        (n += r * l[o - (r < 0 ? 1 : 0)].size), (o += r);
                    }
                    return { index: o, lineN: n };
                }
                function hr(e) {
                    for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
                        var i = t[r];
                        i.hidden || (i.node && !i.changes) || ++n;
                    }
                    return n;
                }
                function mr(e) {
                    e.display.input.showSelection(e.display.input.prepareSelection());
                }
                function gr(e, t) {
                    void 0 === t && (t = !0);
                    for (var n = e.doc, r = {}, i = (r.cursors = document.createDocumentFragment()), o = (r.selection = document.createDocumentFragment()), l = 0; l < n.sel.ranges.length; l++)
                        if (t || l != n.sel.primIndex) {
                            var a = n.sel.ranges[l];
                            if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
                                var u = a.empty();
                                (u || e.options.showCursorWhenSelecting) && vr(e, a.head, i), u || br(e, a, o);
                            }
                        }
                    return r;
                }
                function vr(e, t, n) {
                    var r = $n(e, t, "div", null, null, !e.options.singleCursorHeightPerLine),
                        i = n.appendChild(N("div", "\xa0", "CodeMirror-cursor"));
                    if (((i.style.left = r.left + "px"), (i.style.top = r.top + "px"), (i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px"), r.other)) {
                        var o = n.appendChild(N("div", "\xa0", "CodeMirror-cursor CodeMirror-secondarycursor"));
                        (o.style.display = ""), (o.style.left = r.other.left + "px"), (o.style.top = r.other.top + "px"), (o.style.height = 0.85 * (r.other.bottom - r.other.top) + "px");
                    }
                }
                function yr(e, t) {
                    return e.top - t.top || e.left - t.left;
                }
                function br(e, t, n) {
                    var r = e.display,
                        i = e.doc,
                        o = document.createDocumentFragment(),
                        l = Sn(e.display),
                        a = l.left,
                        u = Math.max(r.sizerWidth, En(e) - r.sizer.offsetLeft) - l.right,
                        s = "ltr" == i.direction;
                    function c(e, t, n, r) {
                        t < 0 && (t = 0), (t = Math.round(t)), (r = Math.round(r)), o.appendChild(N("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? u - e : n) + "px;\n                             height: " + (r - t) + "px"));
                    }
                    function f(t, n, r) {
                        var o,
                            l,
                            f = Ke(i, t),
                            d = f.text.length;
                        function p(n, r) {
                            return Kn(e, Je(t, n), "div", f, r);
                        }
                        function h(t, n, r) {
                            var i = Yn(e, f, null, t),
                                o = ("ltr" == n) == ("after" == r) ? "left" : "right";
                            return p("after" == r ? i.begin : i.end - (/\s/.test(f.text.charAt(i.end - 1)) ? 2 : 1), o)[o];
                        }
                        var m = se(f, i.direction);
                        return (
                            (function (e, t, n, r) {
                                if (!e) return r(t, n, "ltr", 0);
                                for (var i = !1, o = 0; o < e.length; ++o) {
                                    var l = e[o];
                                    ((l.from < n && l.to > t) || (t == n && l.to == t)) && (r(Math.max(l.from, t), Math.min(l.to, n), 1 == l.level ? "rtl" : "ltr", o), (i = !0));
                                }
                                i || r(t, n, "ltr");
                            })(m, n || 0, null == r ? d : r, function (e, t, i, f) {
                                var g = "ltr" == i,
                                    v = p(e, g ? "left" : "right"),
                                    y = p(t - 1, g ? "right" : "left"),
                                    b = null == n && 0 == e,
                                    w = null == r && t == d,
                                    x = 0 == f,
                                    k = !m || f == m.length - 1;
                                if (y.top - v.top <= 3) {
                                    var C = (s ? w : b) && k,
                                        S = (s ? b : w) && x ? a : (g ? v : y).left,
                                        T = C ? u : (g ? y : v).right;
                                    c(S, v.top, T - S, v.bottom);
                                } else {
                                    var E, L, M, N;
                                    g ? ((E = s && b && x ? a : v.left), (L = s ? u : h(e, i, "before")), (M = s ? a : h(t, i, "after")), (N = s && w && k ? u : y.right)) : ((E = s ? h(e, i, "before") : a), (L = !s && b && x ? u : v.right), (M = !s && w && k ? a : y.left), (N = s ? h(t, i, "after") : u)), c(E, v.top, L - E, v.bottom), v.bottom < y.top && c(a, v.bottom, null, y.top), c(M, y.top, N - M, y.bottom);
                                }
                                (!o || yr(v, o) < 0) && (o = v), yr(y, o) < 0 && (o = y), (!l || yr(v, l) < 0) && (l = v), yr(y, l) < 0 && (l = y);
                            }),
                            { start: o, end: l }
                        );
                    }
                    var d = t.from(),
                        p = t.to();
                    if (d.line == p.line) f(d.line, d.ch, p.ch);
                    else {
                        var h = Ke(i, d.line),
                            m = Ke(i, p.line),
                            g = _t(h) == _t(m),
                            v = f(d.line, d.ch, g ? h.text.length + 1 : null).end,
                            y = f(p.line, g ? 0 : null, p.ch).start;
                        g && (v.top < y.top - 2 ? (c(v.right, v.top, null, v.bottom), c(a, y.top, y.left, y.bottom)) : c(v.right, v.top, y.left - v.right, v.bottom)), v.bottom < y.top && c(a, v.bottom, null, y.top);
                    }
                    n.appendChild(o);
                }
                function wr(e) {
                    if (e.state.focused) {
                        var t = e.display;
                        clearInterval(t.blinker);
                        var n = !0;
                        (t.cursorDiv.style.visibility = ""),
                            e.options.cursorBlinkRate > 0
                                ? (t.blinker = setInterval(function () {
                                      return (t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden");
                                  }, e.options.cursorBlinkRate))
                                : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
                    }
                }
                function xr(e) {
                    e.state.focused || (e.display.input.focus(), Cr(e));
                }
                function kr(e) {
                    (e.state.delayingBlurEvent = !0),
                        setTimeout(function () {
                            e.state.delayingBlurEvent && ((e.state.delayingBlurEvent = !1), Sr(e));
                        }, 100);
                }
                function Cr(e, t) {
                    e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
                        "nocursor" != e.options.readOnly &&
                            (e.state.focused ||
                                (he(e, "focus", e, t),
                                (e.state.focused = !0),
                                A(e.display.wrapper, "CodeMirror-focused"),
                                e.curOp ||
                                    e.display.selForContextMenu == e.doc.sel ||
                                    (e.display.input.reset(),
                                    u &&
                                        setTimeout(function () {
                                            return e.display.input.reset(!0);
                                        }, 20)),
                                e.display.input.receivedFocus()),
                            wr(e));
                }
                function Sr(e, t) {
                    e.state.delayingBlurEvent ||
                        (e.state.focused && (he(e, "blur", e, t), (e.state.focused = !1), E(e.display.wrapper, "CodeMirror-focused")),
                        clearInterval(e.display.blinker),
                        setTimeout(function () {
                            e.state.focused || (e.display.shift = !1);
                        }, 150));
                }
                function Tr(e) {
                    for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
                        var i = t.view[r],
                            o = e.options.lineWrapping,
                            u = void 0,
                            s = 0;
                        if (!i.hidden) {
                            if (l && a < 8) {
                                var c = i.node.offsetTop + i.node.offsetHeight;
                                (u = c - n), (n = c);
                            } else {
                                var f = i.node.getBoundingClientRect();
                                (u = f.bottom - f.top), !o && i.text.firstChild && (s = i.text.firstChild.getBoundingClientRect().right - f.left - 1);
                            }
                            var d = i.line.height - u;
                            if ((d > 0.005 || d < -0.005) && (qe(i.line, u), Er(i.line), i.rest)) for (var p = 0; p < i.rest.length; p++) Er(i.rest[p]);
                            if (s > e.display.sizerWidth) {
                                var h = Math.ceil(s / rr(e.display));
                                h > e.display.maxLineLength && ((e.display.maxLineLength = h), (e.display.maxLine = i.line), (e.display.maxLineChanged = !0));
                            }
                        }
                    }
                }
                function Er(e) {
                    if (e.widgets)
                        for (var t = 0; t < e.widgets.length; ++t) {
                            var n = e.widgets[t],
                                r = n.node.parentNode;
                            r && (n.height = r.offsetHeight);
                        }
                }
                function Lr(e, t, n) {
                    var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
                    r = Math.floor(r - kn(e));
                    var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight,
                        o = Xe(t, r),
                        l = Xe(t, i);
                    if (n && n.ensure) {
                        var a = n.ensure.from.line,
                            u = n.ensure.to.line;
                        a < o ? ((o = a), (l = Xe(t, Ut(Ke(t, a)) + e.wrapper.clientHeight))) : Math.min(u, t.lastLine()) >= l && ((o = Xe(t, Ut(Ke(t, u)) - e.wrapper.clientHeight)), (l = u));
                    }
                    return { from: o, to: Math.max(l, o + 1) };
                }
                function Mr(e, t) {
                    var n = e.display,
                        r = nr(e.display);
                    t.top < 0 && (t.top = 0);
                    var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop,
                        o = Ln(e),
                        l = {};
                    t.bottom - t.top > o && (t.bottom = t.top + o);
                    var a = e.doc.height + Cn(n),
                        u = t.top < r,
                        s = t.bottom > a - r;
                    if (t.top < i) l.scrollTop = u ? 0 : t.top;
                    else if (t.bottom > i + o) {
                        var c = Math.min(t.top, (s ? a : t.bottom) - o);
                        c != i && (l.scrollTop = c);
                    }
                    var f = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft,
                        d = En(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0),
                        p = t.right - t.left > d;
                    return p && (t.right = t.left + d), t.left < 10 ? (l.scrollLeft = 0) : t.left < f ? (l.scrollLeft = Math.max(0, t.left - (p ? 0 : 10))) : t.right > d + f - 3 && (l.scrollLeft = t.right + (p ? 0 : 10) - d), l;
                }
                function Nr(e, t) {
                    null != t && (Dr(e), (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t));
                }
                function Or(e) {
                    Dr(e);
                    var t = e.getCursor();
                    e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
                }
                function Pr(e, t, n) {
                    (null == t && null == n) || Dr(e), null != t && (e.curOp.scrollLeft = t), null != n && (e.curOp.scrollTop = n);
                }
                function Dr(e) {
                    var t = e.curOp.scrollToPos;
                    t && ((e.curOp.scrollToPos = null), Ar(e, Gn(e, t.from), Gn(e, t.to), t.margin));
                }
                function Ar(e, t, n, r) {
                    var i = Mr(e, { left: Math.min(t.left, n.left), top: Math.min(t.top, n.top) - r, right: Math.max(t.right, n.right), bottom: Math.max(t.bottom, n.bottom) + r });
                    Pr(e, i.scrollLeft, i.scrollTop);
                }
                function zr(e, t) {
                    Math.abs(e.doc.scrollTop - t) < 2 || (n || ai(e, { top: t }), Fr(e, t, !0), n && ai(e), ni(e, 100));
                }
                function Fr(e, t, n) {
                    (t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t))), (e.display.scroller.scrollTop != t || n) && ((e.doc.scrollTop = t), e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
                }
                function Ir(e, t, n, r) {
                    (t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth))), ((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) || ((e.doc.scrollLeft = t), ci(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
                }
                function _r(e) {
                    var t = e.display,
                        n = t.gutters.offsetWidth,
                        r = Math.round(e.doc.height + Cn(e.display));
                    return { clientHeight: t.scroller.clientHeight, viewHeight: t.wrapper.clientHeight, scrollWidth: t.scroller.scrollWidth, clientWidth: t.scroller.clientWidth, viewWidth: t.wrapper.clientWidth, barLeft: e.options.fixedGutter ? n : 0, docHeight: r, scrollHeight: r + Tn(e) + t.barHeight, nativeBarWidth: t.nativeBarWidth, gutterWidth: n };
                }
                var Rr = function (e, t, n) {
                    this.cm = n;
                    var r = (this.vert = N("div", [N("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")),
                        i = (this.horiz = N("div", [N("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar"));
                    (r.tabIndex = i.tabIndex = -1),
                        e(r),
                        e(i),
                        fe(r, "scroll", function () {
                            r.clientHeight && t(r.scrollTop, "vertical");
                        }),
                        fe(i, "scroll", function () {
                            i.clientWidth && t(i.scrollLeft, "horizontal");
                        }),
                        (this.checkedZeroWidth = !1),
                        l && a < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
                };
                (Rr.prototype.update = function (e) {
                    var t = e.scrollWidth > e.clientWidth + 1,
                        n = e.scrollHeight > e.clientHeight + 1,
                        r = e.nativeBarWidth;
                    if (n) {
                        (this.vert.style.display = "block"), (this.vert.style.bottom = t ? r + "px" : "0");
                        var i = e.viewHeight - (t ? r : 0);
                        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
                    } else (this.vert.style.display = ""), (this.vert.firstChild.style.height = "0");
                    if (t) {
                        (this.horiz.style.display = "block"), (this.horiz.style.right = n ? r + "px" : "0"), (this.horiz.style.left = e.barLeft + "px");
                        var o = e.viewWidth - e.barLeft - (n ? r : 0);
                        this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px";
                    } else (this.horiz.style.display = ""), (this.horiz.firstChild.style.width = "0");
                    return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(), (this.checkedZeroWidth = !0)), { right: n ? r : 0, bottom: t ? r : 0 };
                }),
                    (Rr.prototype.setScrollLeft = function (e) {
                        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
                    }),
                    (Rr.prototype.setScrollTop = function (e) {
                        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
                    }),
                    (Rr.prototype.zeroWidthHack = function () {
                        var e = y && !p ? "12px" : "18px";
                        (this.horiz.style.height = this.vert.style.width = e), (this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none"), (this.disableHoriz = new W()), (this.disableVert = new W());
                    }),
                    (Rr.prototype.enableZeroWidthBar = function (e, t, n) {
                        (e.style.pointerEvents = "auto"),
                            t.set(1e3, function r() {
                                var i = e.getBoundingClientRect();
                                ("vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1)) != e ? (e.style.pointerEvents = "none") : t.set(1e3, r);
                            });
                    }),
                    (Rr.prototype.clear = function () {
                        var e = this.horiz.parentNode;
                        e.removeChild(this.horiz), e.removeChild(this.vert);
                    });
                var Wr = function () {};
                function Hr(e, t) {
                    t || (t = _r(e));
                    var n = e.display.barWidth,
                        r = e.display.barHeight;
                    Br(e, t);
                    for (var i = 0; (i < 4 && n != e.display.barWidth) || r != e.display.barHeight; i++) n != e.display.barWidth && e.options.lineWrapping && Tr(e), Br(e, _r(e)), (n = e.display.barWidth), (r = e.display.barHeight);
                }
                function Br(e, t) {
                    var n = e.display,
                        r = n.scrollbars.update(t);
                    (n.sizer.style.paddingRight = (n.barWidth = r.right) + "px"),
                        (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px"),
                        (n.heightForcer.style.borderBottom = r.bottom + "px solid transparent"),
                        r.right && r.bottom ? ((n.scrollbarFiller.style.display = "block"), (n.scrollbarFiller.style.height = r.bottom + "px"), (n.scrollbarFiller.style.width = r.right + "px")) : (n.scrollbarFiller.style.display = ""),
                        r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? ((n.gutterFiller.style.display = "block"), (n.gutterFiller.style.height = r.bottom + "px"), (n.gutterFiller.style.width = t.gutterWidth + "px")) : (n.gutterFiller.style.display = "");
                }
                (Wr.prototype.update = function () {
                    return { bottom: 0, right: 0 };
                }),
                    (Wr.prototype.setScrollLeft = function () {}),
                    (Wr.prototype.setScrollTop = function () {}),
                    (Wr.prototype.clear = function () {});
                var Ur = { native: Rr, null: Wr };
                function jr(e) {
                    e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && E(e.display.wrapper, e.display.scrollbars.addClass)),
                        (e.display.scrollbars = new Ur[e.options.scrollbarStyle](
                            function (t) {
                                e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
                                    fe(t, "mousedown", function () {
                                        e.state.focused &&
                                            setTimeout(function () {
                                                return e.display.input.focus();
                                            }, 0);
                                    }),
                                    t.setAttribute("cm-not-content", "true");
                            },
                            function (t, n) {
                                "horizontal" == n ? Ir(e, t) : zr(e, t);
                            },
                            e
                        )),
                        e.display.scrollbars.addClass && A(e.display.wrapper, e.display.scrollbars.addClass);
                }
                var Vr = 0;
                function Kr(e) {
                    var t;
                    (e.curOp = { cm: e, viewChanged: !1, startHeight: e.doc.height, forceUpdate: !1, updateInput: 0, typing: !1, changeObjs: null, cursorActivityHandlers: null, cursorActivityCalled: 0, selectionChanged: !1, updateMaxLine: !1, scrollLeft: null, scrollTop: null, scrollToPos: null, focus: !1, id: ++Vr }), (t = e.curOp), on ? on.ops.push(t) : (t.ownsGroup = on = { ops: [t], delayedCallbacks: [] });
                }
                function $r(e) {
                    var t = e.curOp;
                    t &&
                        (function (e, t) {
                            var n = e.ownsGroup;
                            if (n)
                                try {
                                    !(function (e) {
                                        var t = e.delayedCallbacks,
                                            n = 0;
                                        do {
                                            for (; n < t.length; n++) t[n].call(null);
                                            for (var r = 0; r < e.ops.length; r++) {
                                                var i = e.ops[r];
                                                if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; ) i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
                                            }
                                        } while (n < t.length);
                                    })(n);
                                } finally {
                                    (on = null), t(n);
                                }
                        })(t, function (e) {
                            for (var t = 0; t < e.ops.length; t++) e.ops[t].cm.curOp = null;
                            !(function (e) {
                                for (var t = e.ops, n = 0; n < t.length; n++) Gr(t[n]);
                                for (var r = 0; r < t.length; r++) qr(t[r]);
                                for (var i = 0; i < t.length; i++) Qr(t[i]);
                                for (var o = 0; o < t.length; o++) Xr(t[o]);
                                for (var l = 0; l < t.length; l++) Yr(t[l]);
                            })(e);
                        });
                }
                function Gr(e) {
                    var t = e.cm,
                        n = t.display;
                    !(function (e) {
                        var t = e.display;
                        !t.scrollbarsClipped && t.scroller.offsetWidth && ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth), (t.heightForcer.style.height = Tn(e) + "px"), (t.sizer.style.marginBottom = -t.nativeBarWidth + "px"), (t.sizer.style.borderRightWidth = Tn(e) + "px"), (t.scrollbarsClipped = !0));
                    })(t),
                        e.updateMaxLine && Vt(t),
                        (e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || (e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo)) || (n.maxLineChanged && t.options.lineWrapping)),
                        (e.update = e.mustUpdate && new ii(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate));
                }
                function qr(e) {
                    e.updatedDisplay = e.mustUpdate && oi(e.cm, e.update);
                }
                function Qr(e) {
                    var t = e.cm,
                        n = t.display;
                    e.updatedDisplay && Tr(t), (e.barMeasure = _r(t)), n.maxLineChanged && !t.options.lineWrapping && ((e.adjustWidthTo = Nn(t, n.maxLine, n.maxLine.text.length).left + 3), (t.display.sizerWidth = e.adjustWidthTo), (e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Tn(t) + t.display.barWidth)), (e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - En(t)))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
                }
                function Xr(e) {
                    var t = e.cm;
                    null != e.adjustWidthTo && ((t.display.sizer.style.minWidth = e.adjustWidthTo + "px"), e.maxScrollLeft < t.doc.scrollLeft && Ir(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), (t.display.maxLineChanged = !1));
                    var n = e.focus && e.focus == D();
                    e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Hr(t, e.barMeasure), e.updatedDisplay && si(t, e.barMeasure), e.selectionChanged && wr(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && xr(e.cm);
                }
                function Yr(e) {
                    var t = e.cm,
                        n = t.display,
                        r = t.doc;
                    e.updatedDisplay && li(t, e.update),
                        null == n.wheelStartX || (null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos) || (n.wheelStartX = n.wheelStartY = null),
                        null != e.scrollTop && Fr(t, e.scrollTop, e.forceScroll),
                        null != e.scrollLeft && Ir(t, e.scrollLeft, !0, !0),
                        e.scrollToPos &&
                            (function (e, t) {
                                if (!me(e, "scrollCursorIntoView")) {
                                    var n = e.display,
                                        r = n.sizer.getBoundingClientRect(),
                                        i = null;
                                    if ((t.top + r.top < 0 ? (i = !0) : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !h)) {
                                        var o = N("div", "\u200b", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - kn(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Tn(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                                        e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
                                    }
                                }
                            })(
                                t,
                                (function (e, t, n, r) {
                                    var i;
                                    null == r && (r = 0), e.options.lineWrapping || t != n || (n = "before" == (t = t.ch ? Je(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t).sticky ? Je(t.line, t.ch + 1, "before") : t);
                                    for (var o = 0; o < 5; o++) {
                                        var l = !1,
                                            a = $n(e, t),
                                            u = n && n != t ? $n(e, n) : a,
                                            s = Mr(e, (i = { left: Math.min(a.left, u.left), top: Math.min(a.top, u.top) - r, right: Math.max(a.left, u.left), bottom: Math.max(a.bottom, u.bottom) + r })),
                                            c = e.doc.scrollTop,
                                            f = e.doc.scrollLeft;
                                        if ((null != s.scrollTop && (zr(e, s.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (l = !0)), null != s.scrollLeft && (Ir(e, s.scrollLeft), Math.abs(e.doc.scrollLeft - f) > 1 && (l = !0)), !l)) break;
                                    }
                                    return i;
                                })(t, lt(r, e.scrollToPos.from), lt(r, e.scrollToPos.to), e.scrollToPos.margin)
                            );
                    var i = e.maybeHiddenMarkers,
                        o = e.maybeUnhiddenMarkers;
                    if (i) for (var l = 0; l < i.length; ++l) i[l].lines.length || he(i[l], "hide");
                    if (o) for (var a = 0; a < o.length; ++a) o[a].lines.length && he(o[a], "unhide");
                    n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && he(t, "changes", t, e.changeObjs), e.update && e.update.finish();
                }
                function Zr(e, t) {
                    if (e.curOp) return t();
                    Kr(e);
                    try {
                        return t();
                    } finally {
                        $r(e);
                    }
                }
                function Jr(e, t) {
                    return function () {
                        if (e.curOp) return t.apply(e, arguments);
                        Kr(e);
                        try {
                            return t.apply(e, arguments);
                        } finally {
                            $r(e);
                        }
                    };
                }
                function ei(e) {
                    return function () {
                        if (this.curOp) return e.apply(this, arguments);
                        Kr(this);
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            $r(this);
                        }
                    };
                }
                function ti(e) {
                    return function () {
                        var t = this.cm;
                        if (!t || t.curOp) return e.apply(this, arguments);
                        Kr(t);
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            $r(t);
                        }
                    };
                }
                function ni(e, t) {
                    e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, I(ri, e));
                }
                function ri(e) {
                    var t = e.doc;
                    if (!(t.highlightFrontier >= e.display.viewTo)) {
                        var n = +new Date() + e.options.workTime,
                            r = dt(e, t.highlightFrontier),
                            i = [];
                        t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
                            if (r.line >= e.display.viewFrom) {
                                var l = o.styles,
                                    a = o.text.length > e.options.maxHighlightLength ? Be(t.mode, r.state) : null,
                                    u = ct(e, o, r, !0);
                                a && (r.state = a), (o.styles = u.styles);
                                var s = o.styleClasses,
                                    c = u.classes;
                                c ? (o.styleClasses = c) : s && (o.styleClasses = null);
                                for (var f = !l || l.length != o.styles.length || (s != c && (!s || !c || s.bgClass != c.bgClass || s.textClass != c.textClass)), d = 0; !f && d < l.length; ++d) f = l[d] != o.styles[d];
                                f && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
                            } else o.text.length <= e.options.maxHighlightLength && pt(e, o.text, r), (o.stateAfter = r.line % 5 == 0 ? r.save() : null), r.nextLine();
                            if (+new Date() > n) return ni(e, e.options.workDelay), !0;
                        }),
                            (t.highlightFrontier = r.line),
                            (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
                            i.length &&
                                Zr(e, function () {
                                    for (var t = 0; t < i.length; t++) fr(e, i[t], "text");
                                });
                    }
                }
                var ii = function (e, t, n) {
                    var r = e.display;
                    (this.viewport = t), (this.visible = Lr(r, e.doc, t)), (this.editorIsHidden = !r.wrapper.offsetWidth), (this.wrapperHeight = r.wrapper.clientHeight), (this.wrapperWidth = r.wrapper.clientWidth), (this.oldDisplayWidth = En(e)), (this.force = n), (this.dims = ir(e)), (this.events = []);
                };
                function oi(e, t) {
                    var n = e.display,
                        r = e.doc;
                    if (t.editorIsHidden) return dr(e), !1;
                    if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == hr(e)) return !1;
                    fi(e) && (dr(e), (t.dims = ir(e)));
                    var i = r.first + r.size,
                        o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
                        l = Math.min(i, t.visible.to + e.options.viewportMargin);
                    n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)), n.viewTo > l && n.viewTo - l < 20 && (l = Math.min(i, n.viewTo)), xt && ((o = Rt(e.doc, o)), (l = Wt(e.doc, l)));
                    var a = o != n.viewFrom || l != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
                    !(function (e, t, n) {
                        var r = e.display;
                        0 == r.view.length || t >= r.viewTo || n <= r.viewFrom ? ((r.view = rn(e, t, n)), (r.viewFrom = t)) : (r.viewFrom > t ? (r.view = rn(e, t, r.viewFrom).concat(r.view)) : r.viewFrom < t && (r.view = r.view.slice(sr(e, t))), (r.viewFrom = t), r.viewTo < n ? (r.view = r.view.concat(rn(e, r.viewTo, n))) : r.viewTo > n && (r.view = r.view.slice(0, sr(e, n)))), (r.viewTo = n);
                    })(e, o, l),
                        (n.viewOffset = Ut(Ke(e.doc, n.viewFrom))),
                        (e.display.mover.style.top = n.viewOffset + "px");
                    var s = hr(e);
                    if (!a && 0 == s && !t.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo)) return !1;
                    var c = (function (e) {
                        if (e.hasFocus()) return null;
                        var t = D();
                        if (!t || !P(e.display.lineDiv, t)) return null;
                        var n = { activeElt: t };
                        if (window.getSelection) {
                            var r = window.getSelection();
                            r.anchorNode && r.extend && P(e.display.lineDiv, r.anchorNode) && ((n.anchorNode = r.anchorNode), (n.anchorOffset = r.anchorOffset), (n.focusNode = r.focusNode), (n.focusOffset = r.focusOffset));
                        }
                        return n;
                    })(e);
                    return (
                        s > 4 && (n.lineDiv.style.display = "none"),
                        (function (e, t, n) {
                            var r = e.display,
                                i = e.options.lineNumbers,
                                o = r.lineDiv,
                                l = o.firstChild;
                            function a(t) {
                                var n = t.nextSibling;
                                return u && y && e.display.currentWheelTarget == t ? (t.style.display = "none") : t.parentNode.removeChild(t), n;
                            }
                            for (var s = r.view, c = r.viewFrom, f = 0; f < s.length; f++) {
                                var d = s[f];
                                if (d.hidden);
                                else if (d.node && d.node.parentNode == o) {
                                    for (; l != d.node; ) l = a(l);
                                    var p = i && null != t && t <= c && d.lineNumber;
                                    d.changes && (H(d.changes, "gutter") > -1 && (p = !1), sn(e, d, c, n)), p && (L(d.lineNumber), d.lineNumber.appendChild(document.createTextNode(Ze(e.options, c)))), (l = d.node.nextSibling);
                                } else {
                                    var h = gn(e, d, c, n);
                                    o.insertBefore(h, l);
                                }
                                c += d.size;
                            }
                            for (; l; ) l = a(l);
                        })(e, n.updateLineNumbers, t.dims),
                        s > 4 && (n.lineDiv.style.display = ""),
                        (n.renderedView = n.view),
                        (function (e) {
                            if (e && e.activeElt && e.activeElt != D() && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && P(document.body, e.anchorNode) && P(document.body, e.focusNode))) {
                                var t = window.getSelection(),
                                    n = document.createRange();
                                n.setEnd(e.anchorNode, e.anchorOffset), n.collapse(!1), t.removeAllRanges(), t.addRange(n), t.extend(e.focusNode, e.focusOffset);
                            }
                        })(c),
                        L(n.cursorDiv),
                        L(n.selectionDiv),
                        (n.gutters.style.height = n.sizer.style.minHeight = 0),
                        a && ((n.lastWrapHeight = t.wrapperHeight), (n.lastWrapWidth = t.wrapperWidth), ni(e, 400)),
                        (n.updateLineNumbers = null),
                        !0
                    );
                }
                function li(e, t) {
                    for (var n = t.viewport, r = !0; ; r = !1) {
                        if (r && e.options.lineWrapping && t.oldDisplayWidth != En(e)) r && (t.visible = Lr(e.display, e.doc, n));
                        else if ((n && null != n.top && (n = { top: Math.min(e.doc.height + Cn(e.display) - Ln(e), n.top) }), (t.visible = Lr(e.display, e.doc, n)), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)) break;
                        if (!oi(e, t)) break;
                        Tr(e);
                        var i = _r(e);
                        mr(e), Hr(e, i), si(e, i), (t.force = !1);
                    }
                    t.signal(e, "update", e), (e.display.viewFrom == e.display.reportedViewFrom && e.display.viewTo == e.display.reportedViewTo) || (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), (e.display.reportedViewFrom = e.display.viewFrom), (e.display.reportedViewTo = e.display.viewTo));
                }
                function ai(e, t) {
                    var n = new ii(e, t);
                    if (oi(e, n)) {
                        Tr(e), li(e, n);
                        var r = _r(e);
                        mr(e), Hr(e, r), si(e, r), n.finish();
                    }
                }
                function ui(e) {
                    var t = e.gutters.offsetWidth;
                    e.sizer.style.marginLeft = t + "px";
                }
                function si(e, t) {
                    (e.display.sizer.style.minHeight = t.docHeight + "px"), (e.display.heightForcer.style.top = t.docHeight + "px"), (e.display.gutters.style.height = t.docHeight + e.display.barHeight + Tn(e) + "px");
                }
                function ci(e) {
                    var t = e.display,
                        n = t.view;
                    if (t.alignWidgets || (t.gutters.firstChild && e.options.fixedGutter)) {
                        for (var r = or(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", l = 0; l < n.length; l++)
                            if (!n[l].hidden) {
                                e.options.fixedGutter && (n[l].gutter && (n[l].gutter.style.left = o), n[l].gutterBackground && (n[l].gutterBackground.style.left = o));
                                var a = n[l].alignable;
                                if (a) for (var u = 0; u < a.length; u++) a[u].style.left = o;
                            }
                        e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
                    }
                }
                function fi(e) {
                    if (!e.options.lineNumbers) return !1;
                    var t = e.doc,
                        n = Ze(e.options, t.first + t.size - 1),
                        r = e.display;
                    if (n.length != r.lineNumChars) {
                        var i = r.measure.appendChild(N("div", [N("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                            o = i.firstChild.offsetWidth,
                            l = i.offsetWidth - o;
                        return (r.lineGutter.style.width = ""), (r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - l) + 1), (r.lineNumWidth = r.lineNumInnerWidth + l), (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1), (r.lineGutter.style.width = r.lineNumWidth + "px"), ui(e.display), !0;
                    }
                    return !1;
                }
                function di(e, t) {
                    for (var n = [], r = !1, i = 0; i < e.length; i++) {
                        var o = e[i],
                            l = null;
                        if (("string" != typeof o && ((l = o.style), (o = o.className)), "CodeMirror-linenumbers" == o)) {
                            if (!t) continue;
                            r = !0;
                        }
                        n.push({ className: o, style: l });
                    }
                    return t && !r && n.push({ className: "CodeMirror-linenumbers", style: null }), n;
                }
                function pi(e) {
                    var t = e.gutters,
                        n = e.gutterSpecs;
                    L(t), (e.lineGutter = null);
                    for (var r = 0; r < n.length; ++r) {
                        var i = n[r],
                            o = i.className,
                            l = i.style,
                            a = t.appendChild(N("div", null, "CodeMirror-gutter " + o));
                        l && (a.style.cssText = l), "CodeMirror-linenumbers" == o && ((e.lineGutter = a), (a.style.width = (e.lineNumWidth || 1) + "px"));
                    }
                    (t.style.display = n.length ? "" : "none"), ui(e);
                }
                function hi(e) {
                    pi(e.display), cr(e), ci(e);
                }
                function mi(e, t, r, i) {
                    var o = this;
                    (this.input = r),
                        (o.scrollbarFiller = N("div", null, "CodeMirror-scrollbar-filler")),
                        o.scrollbarFiller.setAttribute("cm-not-content", "true"),
                        (o.gutterFiller = N("div", null, "CodeMirror-gutter-filler")),
                        o.gutterFiller.setAttribute("cm-not-content", "true"),
                        (o.lineDiv = O("div", null, "CodeMirror-code")),
                        (o.selectionDiv = N("div", null, null, "position: relative; z-index: 1")),
                        (o.cursorDiv = N("div", null, "CodeMirror-cursors")),
                        (o.measure = N("div", null, "CodeMirror-measure")),
                        (o.lineMeasure = N("div", null, "CodeMirror-measure")),
                        (o.lineSpace = O("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none"));
                    var s = O("div", [o.lineSpace], "CodeMirror-lines");
                    (o.mover = N("div", [s], null, "position: relative")),
                        (o.sizer = N("div", [o.mover], "CodeMirror-sizer")),
                        (o.sizerWidth = null),
                        (o.heightForcer = N("div", null, null, "position: absolute; height: 50px; width: 1px;")),
                        (o.gutters = N("div", null, "CodeMirror-gutters")),
                        (o.lineGutter = null),
                        (o.scroller = N("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll")),
                        o.scroller.setAttribute("tabIndex", "-1"),
                        (o.wrapper = N("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror")),
                        l && a < 8 && ((o.gutters.style.zIndex = -1), (o.scroller.style.paddingRight = 0)),
                        u || (n && v) || (o.scroller.draggable = !0),
                        e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
                        (o.viewFrom = o.viewTo = t.first),
                        (o.reportedViewFrom = o.reportedViewTo = t.first),
                        (o.view = []),
                        (o.renderedView = null),
                        (o.externalMeasured = null),
                        (o.viewOffset = 0),
                        (o.lastWrapHeight = o.lastWrapWidth = 0),
                        (o.updateLineNumbers = null),
                        (o.nativeBarWidth = o.barHeight = o.barWidth = 0),
                        (o.scrollbarsClipped = !1),
                        (o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null),
                        (o.alignWidgets = !1),
                        (o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null),
                        (o.maxLine = null),
                        (o.maxLineLength = 0),
                        (o.maxLineChanged = !1),
                        (o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null),
                        (o.shift = !1),
                        (o.selForContextMenu = null),
                        (o.activeTouch = null),
                        (o.gutterSpecs = di(i.gutters, i.lineNumbers)),
                        pi(o),
                        r.init(o);
                }
                (ii.prototype.signal = function (e, t) {
                    ve(e, t) && this.events.push(arguments);
                }),
                    (ii.prototype.finish = function () {
                        for (var e = 0; e < this.events.length; e++) he.apply(null, this.events[e]);
                    });
                var gi = 0,
                    vi = null;
                function yi(e) {
                    var t = e.wheelDeltaX,
                        n = e.wheelDeltaY;
                    return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == n && e.detail && e.axis == e.VERTICAL_AXIS ? (n = e.detail) : null == n && (n = e.wheelDelta), { x: t, y: n };
                }
                function bi(e) {
                    var t = yi(e);
                    return (t.x *= vi), (t.y *= vi), t;
                }
                function wi(e, t) {
                    var r = yi(t),
                        i = r.x,
                        o = r.y,
                        l = e.display,
                        a = l.scroller,
                        s = a.scrollWidth > a.clientWidth,
                        c = a.scrollHeight > a.clientHeight;
                    if ((i && s) || (o && c)) {
                        if (o && y && u)
                            e: for (var d = t.target, p = l.view; d != a; d = d.parentNode)
                                for (var h = 0; h < p.length; h++)
                                    if (p[h].node == d) {
                                        e.display.currentWheelTarget = d;
                                        break e;
                                    }
                        if (i && !n && !f && null != vi) return o && c && zr(e, Math.max(0, a.scrollTop + o * vi)), Ir(e, Math.max(0, a.scrollLeft + i * vi)), (!o || (o && c)) && be(t), void (l.wheelStartX = null);
                        if (o && null != vi) {
                            var m = o * vi,
                                g = e.doc.scrollTop,
                                v = g + l.wrapper.clientHeight;
                            m < 0 ? (g = Math.max(0, g + m - 50)) : (v = Math.min(e.doc.height, v + m + 50)), ai(e, { top: g, bottom: v });
                        }
                        gi < 20 &&
                            (null == l.wheelStartX
                                ? ((l.wheelStartX = a.scrollLeft),
                                  (l.wheelStartY = a.scrollTop),
                                  (l.wheelDX = i),
                                  (l.wheelDY = o),
                                  setTimeout(function () {
                                      if (null != l.wheelStartX) {
                                          var e = a.scrollLeft - l.wheelStartX,
                                              t = a.scrollTop - l.wheelStartY,
                                              n = (t && l.wheelDY && t / l.wheelDY) || (e && l.wheelDX && e / l.wheelDX);
                                          (l.wheelStartX = l.wheelStartY = null), n && ((vi = (vi * gi + n) / (gi + 1)), ++gi);
                                      }
                                  }, 200))
                                : ((l.wheelDX += i), (l.wheelDY += o)));
                    }
                }
                l ? (vi = -0.53) : n ? (vi = 15) : c ? (vi = -0.7) : d && (vi = -1 / 3);
                var xi = function (e, t) {
                    (this.ranges = e), (this.primIndex = t);
                };
                (xi.prototype.primary = function () {
                    return this.ranges[this.primIndex];
                }),
                    (xi.prototype.equals = function (e) {
                        if (e == this) return !0;
                        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;
                        for (var t = 0; t < this.ranges.length; t++) {
                            var n = this.ranges[t],
                                r = e.ranges[t];
                            if (!tt(n.anchor, r.anchor) || !tt(n.head, r.head)) return !1;
                        }
                        return !0;
                    }),
                    (xi.prototype.deepCopy = function () {
                        for (var e = [], t = 0; t < this.ranges.length; t++) e[t] = new ki(nt(this.ranges[t].anchor), nt(this.ranges[t].head));
                        return new xi(e, this.primIndex);
                    }),
                    (xi.prototype.somethingSelected = function () {
                        for (var e = 0; e < this.ranges.length; e++) if (!this.ranges[e].empty()) return !0;
                        return !1;
                    }),
                    (xi.prototype.contains = function (e, t) {
                        t || (t = e);
                        for (var n = 0; n < this.ranges.length; n++) {
                            var r = this.ranges[n];
                            if (et(t, r.from()) >= 0 && et(e, r.to()) <= 0) return n;
                        }
                        return -1;
                    });
                var ki = function (e, t) {
                    (this.anchor = e), (this.head = t);
                };
                function Ci(e, t, n) {
                    var r = e && e.options.selectionsMayTouch,
                        i = t[n];
                    t.sort(function (e, t) {
                        return et(e.from(), t.from());
                    }),
                        (n = H(t, i));
                    for (var o = 1; o < t.length; o++) {
                        var l = t[o],
                            a = t[o - 1],
                            u = et(a.to(), l.from());
                        if (r && !l.empty() ? u > 0 : u >= 0) {
                            var s = it(a.from(), l.from()),
                                c = rt(a.to(), l.to()),
                                f = a.empty() ? l.from() == l.head : a.from() == a.head;
                            o <= n && --n, t.splice(--o, 2, new ki(f ? c : s, f ? s : c));
                        }
                    }
                    return new xi(t, n);
                }
                function Si(e, t) {
                    return new xi([new ki(e, t || e)], 0);
                }
                function Ti(e) {
                    return e.text ? Je(e.from.line + e.text.length - 1, q(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
                }
                function Ei(e, t) {
                    if (et(e, t.from) < 0) return e;
                    if (et(e, t.to) <= 0) return Ti(t);
                    var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                        r = e.ch;
                    return e.line == t.to.line && (r += Ti(t).ch - t.to.ch), Je(n, r);
                }
                function Li(e, t) {
                    for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
                        var i = e.sel.ranges[r];
                        n.push(new ki(Ei(i.anchor, t), Ei(i.head, t)));
                    }
                    return Ci(e.cm, n, e.sel.primIndex);
                }
                function Mi(e, t, n) {
                    return e.line == t.line ? Je(n.line, e.ch - t.ch + n.ch) : Je(n.line + (e.line - t.line), e.ch);
                }
                function Ni(e) {
                    (e.doc.mode = Re(e.options, e.doc.modeOption)), Oi(e);
                }
                function Oi(e) {
                    e.doc.iter(function (e) {
                        e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
                    }),
                        (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
                        ni(e, 100),
                        e.state.modeGen++,
                        e.curOp && cr(e);
                }
                function Pi(e, t) {
                    return 0 == t.from.ch && 0 == t.to.ch && "" == q(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
                }
                function Di(e, t, n, r) {
                    function i(e) {
                        return n ? n[e] : null;
                    }
                    function o(e, n, i) {
                        !(function (e, t, n, r) {
                            (e.text = t), e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Lt(e), Mt(e, n);
                            var i = r ? r(e) : 1;
                            i != e.height && qe(e, i);
                        })(e, n, i, r),
                            an(e, "change", e, t);
                    }
                    function l(e, t) {
                        for (var n = [], o = e; o < t; ++o) n.push(new Kt(s[o], i(o), r));
                        return n;
                    }
                    var a = t.from,
                        u = t.to,
                        s = t.text,
                        c = Ke(e, a.line),
                        f = Ke(e, u.line),
                        d = q(s),
                        p = i(s.length - 1),
                        h = u.line - a.line;
                    if (t.full) e.insert(0, l(0, s.length)), e.remove(s.length, e.size - s.length);
                    else if (Pi(e, t)) {
                        var m = l(0, s.length - 1);
                        o(f, f.text, p), h && e.remove(a.line, h), m.length && e.insert(a.line, m);
                    } else if (c == f)
                        if (1 == s.length) o(c, c.text.slice(0, a.ch) + d + c.text.slice(u.ch), p);
                        else {
                            var g = l(1, s.length - 1);
                            g.push(new Kt(d + c.text.slice(u.ch), p, r)), o(c, c.text.slice(0, a.ch) + s[0], i(0)), e.insert(a.line + 1, g);
                        }
                    else if (1 == s.length) o(c, c.text.slice(0, a.ch) + s[0] + f.text.slice(u.ch), i(0)), e.remove(a.line + 1, h);
                    else {
                        o(c, c.text.slice(0, a.ch) + s[0], i(0)), o(f, d + f.text.slice(u.ch), p);
                        var v = l(1, s.length - 1);
                        h > 1 && e.remove(a.line + 1, h - 1), e.insert(a.line + 1, v);
                    }
                    an(e, "change", e, t);
                }
                function Ai(e, t, n) {
                    !(function e(r, i, o) {
                        if (r.linked)
                            for (var l = 0; l < r.linked.length; ++l) {
                                var a = r.linked[l];
                                if (a.doc != i) {
                                    var u = o && a.sharedHist;
                                    (n && !u) || (t(a.doc, u), e(a.doc, r, u));
                                }
                            }
                    })(e, null, !0);
                }
                function zi(e, t) {
                    if (t.cm) throw new Error("This document is already in use.");
                    (e.doc = t), (t.cm = e), ar(e), Ni(e), Fi(e), e.options.lineWrapping || Vt(e), (e.options.mode = t.modeOption), cr(e);
                }
                function Fi(e) {
                    ("rtl" == e.doc.direction ? A : E)(e.display.lineDiv, "CodeMirror-rtl");
                }
                function Ii(e) {
                    (this.done = []), (this.undone = []), (this.undoDepth = 1 / 0), (this.lastModTime = this.lastSelTime = 0), (this.lastOp = this.lastSelOp = null), (this.lastOrigin = this.lastSelOrigin = null), (this.generation = this.maxGeneration = e || 1);
                }
                function _i(e, t) {
                    var n = { from: nt(t.from), to: Ti(t), text: $e(e, t.from, t.to) };
                    return (
                        Ui(e, n, t.from.line, t.to.line + 1),
                        Ai(
                            e,
                            function (e) {
                                return Ui(e, n, t.from.line, t.to.line + 1);
                            },
                            !0
                        ),
                        n
                    );
                }
                function Ri(e) {
                    for (; e.length && q(e).ranges; ) e.pop();
                }
                function Wi(e, t, n, r) {
                    var i = e.history;
                    i.undone.length = 0;
                    var o,
                        l,
                        a = +new Date();
                    if (
                        (i.lastOp == r || (i.lastOrigin == t.origin && t.origin && (("+" == t.origin.charAt(0) && i.lastModTime > a - (e.cm ? e.cm.options.historyEventDelay : 500)) || "*" == t.origin.charAt(0)))) &&
                        (o = (function (e, t) {
                            return t ? (Ri(e.done), q(e.done)) : e.done.length && !q(e.done).ranges ? q(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), q(e.done)) : void 0;
                        })(i, i.lastOp == r))
                    )
                        (l = q(o.changes)), 0 == et(t.from, t.to) && 0 == et(t.from, l.to) ? (l.to = Ti(t)) : o.changes.push(_i(e, t));
                    else {
                        var u = q(i.done);
                        for ((u && u.ranges) || Bi(e.sel, i.done), o = { changes: [_i(e, t)], generation: i.generation }, i.done.push(o); i.done.length > i.undoDepth; ) i.done.shift(), i.done[0].ranges || i.done.shift();
                    }
                    i.done.push(n), (i.generation = ++i.maxGeneration), (i.lastModTime = i.lastSelTime = a), (i.lastOp = i.lastSelOp = r), (i.lastOrigin = i.lastSelOrigin = t.origin), l || he(e, "historyAdded");
                }
                function Hi(e, t, n, r) {
                    var i = e.history,
                        o = r && r.origin;
                    n == i.lastSelOp ||
                    (o &&
                        i.lastSelOrigin == o &&
                        ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
                            (function (e, t, n, r) {
                                var i = t.charAt(0);
                                return "*" == i || ("+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500));
                            })(e, o, q(i.done), t)))
                        ? (i.done[i.done.length - 1] = t)
                        : Bi(t, i.done),
                        (i.lastSelTime = +new Date()),
                        (i.lastSelOrigin = o),
                        (i.lastSelOp = n),
                        r && !1 !== r.clearRedo && Ri(i.undone);
                }
                function Bi(e, t) {
                    var n = q(t);
                    (n && n.ranges && n.equals(e)) || t.push(e);
                }
                function Ui(e, t, n, r) {
                    var i = t["spans_" + e.id],
                        o = 0;
                    e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (n) {
                        n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans), ++o;
                    });
                }
                function ji(e) {
                    if (!e) return null;
                    for (var t, n = 0; n < e.length; ++n) e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
                    return t ? (t.length ? t : null) : e;
                }
                function Vi(e, t) {
                    var n = (function (e, t) {
                            var n = t["spans_" + e.id];
                            if (!n) return null;
                            for (var r = [], i = 0; i < t.text.length; ++i) r.push(ji(n[i]));
                            return r;
                        })(e, t),
                        r = Tt(e, t);
                    if (!n) return r;
                    if (!r) return n;
                    for (var i = 0; i < n.length; ++i) {
                        var o = n[i],
                            l = r[i];
                        if (o && l)
                            e: for (var a = 0; a < l.length; ++a) {
                                for (var u = l[a], s = 0; s < o.length; ++s) if (o[s].marker == u.marker) continue e;
                                o.push(u);
                            }
                        else l && (n[i] = l);
                    }
                    return n;
                }
                function Ki(e, t, n) {
                    for (var r = [], i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (o.ranges) r.push(n ? xi.prototype.deepCopy.call(o) : o);
                        else {
                            var l = o.changes,
                                a = [];
                            r.push({ changes: a });
                            for (var u = 0; u < l.length; ++u) {
                                var s = l[u],
                                    c = void 0;
                                if ((a.push({ from: s.from, to: s.to, text: s.text }), t)) for (var f in s) (c = f.match(/^spans_(\d+)$/)) && H(t, Number(c[1])) > -1 && ((q(a)[f] = s[f]), delete s[f]);
                            }
                        }
                    }
                    return r;
                }
                function $i(e, t, n, r) {
                    if (r) {
                        var i = e.anchor;
                        if (n) {
                            var o = et(t, i) < 0;
                            o != et(n, i) < 0 ? ((i = t), (t = n)) : o != et(t, n) < 0 && (t = n);
                        }
                        return new ki(i, t);
                    }
                    return new ki(n || t, t);
                }
                function Gi(e, t, n, r, i) {
                    null == i && (i = e.cm && (e.cm.display.shift || e.extend)), Zi(e, new xi([$i(e.sel.primary(), t, n, i)], 0), r);
                }
                function qi(e, t, n) {
                    for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++) r[o] = $i(e.sel.ranges[o], t[o], null, i);
                    Zi(e, Ci(e.cm, r, e.sel.primIndex), n);
                }
                function Qi(e, t, n, r) {
                    var i = e.sel.ranges.slice(0);
                    (i[t] = n), Zi(e, Ci(e.cm, i, e.sel.primIndex), r);
                }
                function Xi(e, t, n, r) {
                    Zi(e, Si(t, n), r);
                }
                function Yi(e, t, n) {
                    var r = e.history.done,
                        i = q(r);
                    i && i.ranges ? ((r[r.length - 1] = t), Ji(e, t, n)) : Zi(e, t, n);
                }
                function Zi(e, t, n) {
                    Ji(e, t, n), Hi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
                }
                function Ji(e, t, n) {
                    (ve(e, "beforeSelectionChange") || (e.cm && ve(e.cm, "beforeSelectionChange"))) &&
                        (t = (function (e, t, n) {
                            var r = {
                                ranges: t.ranges,
                                update: function (t) {
                                    this.ranges = [];
                                    for (var n = 0; n < t.length; n++) this.ranges[n] = new ki(lt(e, t[n].anchor), lt(e, t[n].head));
                                },
                                origin: n && n.origin,
                            };
                            return he(e, "beforeSelectionChange", e, r), e.cm && he(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? Ci(e.cm, r.ranges, r.ranges.length - 1) : t;
                        })(e, t, n));
                    var r = (n && n.bias) || (et(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
                    eo(e, no(e, t, r, !0)), (n && !1 === n.scroll) || !e.cm || Or(e.cm);
                }
                function eo(e, t) {
                    t.equals(e.sel) || ((e.sel = t), e.cm && ((e.cm.curOp.updateInput = 1), (e.cm.curOp.selectionChanged = !0), ge(e.cm)), an(e, "cursorActivity", e));
                }
                function to(e) {
                    eo(e, no(e, e.sel, null, !1));
                }
                function no(e, t, n, r) {
                    for (var i, o = 0; o < t.ranges.length; o++) {
                        var l = t.ranges[o],
                            a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
                            u = io(e, l.anchor, a && a.anchor, n, r),
                            s = io(e, l.head, a && a.head, n, r);
                        (i || u != l.anchor || s != l.head) && (i || (i = t.ranges.slice(0, o)), (i[o] = new ki(u, s)));
                    }
                    return i ? Ci(e.cm, i, t.primIndex) : t;
                }
                function ro(e, t, n, r, i) {
                    var o = Ke(e, t.line);
                    if (o.markedSpans)
                        for (var l = 0; l < o.markedSpans.length; ++l) {
                            var a = o.markedSpans[l],
                                u = a.marker,
                                s = "selectLeft" in u ? !u.selectLeft : u.inclusiveLeft,
                                c = "selectRight" in u ? !u.selectRight : u.inclusiveRight;
                            if ((null == a.from || (s ? a.from <= t.ch : a.from < t.ch)) && (null == a.to || (c ? a.to >= t.ch : a.to > t.ch))) {
                                if (i && (he(u, "beforeCursorEnter"), u.explicitlyCleared)) {
                                    if (o.markedSpans) {
                                        --l;
                                        continue;
                                    }
                                    break;
                                }
                                if (!u.atomic) continue;
                                if (n) {
                                    var f = u.find(r < 0 ? 1 : -1),
                                        d = void 0;
                                    if (((r < 0 ? c : s) && (f = oo(e, f, -r, f && f.line == t.line ? o : null)), f && f.line == t.line && (d = et(f, n)) && (r < 0 ? d < 0 : d > 0))) return ro(e, f, t, r, i);
                                }
                                var p = u.find(r < 0 ? -1 : 1);
                                return (r < 0 ? s : c) && (p = oo(e, p, r, p.line == t.line ? o : null)), p ? ro(e, p, t, r, i) : null;
                            }
                        }
                    return t;
                }
                function io(e, t, n, r, i) {
                    var o = r || 1,
                        l = ro(e, t, n, o, i) || (!i && ro(e, t, n, o, !0)) || ro(e, t, n, -o, i) || (!i && ro(e, t, n, -o, !0));
                    return l || ((e.cantEdit = !0), Je(e.first, 0));
                }
                function oo(e, t, n, r) {
                    return n < 0 && 0 == t.ch ? (t.line > e.first ? lt(e, Je(t.line - 1)) : null) : n > 0 && t.ch == (r || Ke(e, t.line)).text.length ? (t.line < e.first + e.size - 1 ? Je(t.line + 1, 0) : null) : new Je(t.line, t.ch + n);
                }
                function lo(e) {
                    e.setSelection(Je(e.firstLine(), 0), Je(e.lastLine()), U);
                }
                function ao(e, t, n) {
                    var r = {
                        canceled: !1,
                        from: t.from,
                        to: t.to,
                        text: t.text,
                        origin: t.origin,
                        cancel: function () {
                            return (r.canceled = !0);
                        },
                    };
                    return (
                        n &&
                            (r.update = function (t, n, i, o) {
                                t && (r.from = lt(e, t)), n && (r.to = lt(e, n)), i && (r.text = i), void 0 !== o && (r.origin = o);
                            }),
                        he(e, "beforeChange", e, r),
                        e.cm && he(e.cm, "beforeChange", e.cm, r),
                        r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin }
                    );
                }
                function uo(e, t, n) {
                    if (e.cm) {
                        if (!e.cm.curOp) return Jr(e.cm, uo)(e, t, n);
                        if (e.cm.state.suppressEdits) return;
                    }
                    if (!(ve(e, "beforeChange") || (e.cm && ve(e.cm, "beforeChange"))) || (t = ao(e, t, !0))) {
                        var r =
                            wt &&
                            !n &&
                            (function (e, t, n) {
                                var r = null;
                                if (
                                    (e.iter(t.line, n.line + 1, function (e) {
                                        if (e.markedSpans)
                                            for (var t = 0; t < e.markedSpans.length; ++t) {
                                                var n = e.markedSpans[t].marker;
                                                !n.readOnly || (r && -1 != H(r, n)) || (r || (r = [])).push(n);
                                            }
                                    }),
                                    !r)
                                )
                                    return null;
                                for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
                                    for (var l = r[o], a = l.find(0), u = 0; u < i.length; ++u) {
                                        var s = i[u];
                                        if (!(et(s.to, a.from) < 0 || et(s.from, a.to) > 0)) {
                                            var c = [u, 1],
                                                f = et(s.from, a.from),
                                                d = et(s.to, a.to);
                                            (f < 0 || (!l.inclusiveLeft && !f)) && c.push({ from: s.from, to: a.from }), (d > 0 || (!l.inclusiveRight && !d)) && c.push({ from: a.to, to: s.to }), i.splice.apply(i, c), (u += c.length - 3);
                                        }
                                    }
                                return i;
                            })(e, t.from, t.to);
                        if (r) for (var i = r.length - 1; i >= 0; --i) so(e, { from: r[i].from, to: r[i].to, text: i ? [""] : t.text, origin: t.origin });
                        else so(e, t);
                    }
                }
                function so(e, t) {
                    if (1 != t.text.length || "" != t.text[0] || 0 != et(t.from, t.to)) {
                        var n = Li(e, t);
                        Wi(e, t, n, e.cm ? e.cm.curOp.id : NaN), po(e, t, n, Tt(e, t));
                        var r = [];
                        Ai(e, function (e, n) {
                            n || -1 != H(r, e.history) || (vo(e.history, t), r.push(e.history)), po(e, t, null, Tt(e, t));
                        });
                    }
                }
                function co(e, t, n) {
                    var r = e.cm && e.cm.state.suppressEdits;
                    if (!r || n) {
                        for (var i, o = e.history, l = e.sel, a = "undo" == t ? o.done : o.undone, u = "undo" == t ? o.undone : o.done, s = 0; s < a.length && ((i = a[s]), n ? !i.ranges || i.equals(e.sel) : i.ranges); s++);
                        if (s != a.length) {
                            for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                                if (!(i = a.pop()).ranges) {
                                    if (r) return void a.push(i);
                                    break;
                                }
                                if ((Bi(i, u), n && !i.equals(e.sel))) return void Zi(e, i, { clearRedo: !1 });
                                l = i;
                            }
                            var c = [];
                            Bi(l, u), u.push({ changes: c, generation: o.generation }), (o.generation = i.generation || ++o.maxGeneration);
                            for (
                                var f = ve(e, "beforeChange") || (e.cm && ve(e.cm, "beforeChange")),
                                    d = function (n) {
                                        var r = i.changes[n];
                                        if (((r.origin = t), f && !ao(e, r, !1))) return (a.length = 0), {};
                                        c.push(_i(e, r));
                                        var o = n ? Li(e, r) : q(a);
                                        po(e, r, o, Vi(e, r)), !n && e.cm && e.cm.scrollIntoView({ from: r.from, to: Ti(r) });
                                        var l = [];
                                        Ai(e, function (e, t) {
                                            t || -1 != H(l, e.history) || (vo(e.history, r), l.push(e.history)), po(e, r, null, Vi(e, r));
                                        });
                                    },
                                    p = i.changes.length - 1;
                                p >= 0;
                                --p
                            ) {
                                var h = d(p);
                                if (h) return h.v;
                            }
                        }
                    }
                }
                function fo(e, t) {
                    if (
                        0 != t &&
                        ((e.first += t),
                        (e.sel = new xi(
                            Q(e.sel.ranges, function (e) {
                                return new ki(Je(e.anchor.line + t, e.anchor.ch), Je(e.head.line + t, e.head.ch));
                            }),
                            e.sel.primIndex
                        )),
                        e.cm)
                    ) {
                        cr(e.cm, e.first, e.first - t, t);
                        for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++) fr(e.cm, r, "gutter");
                    }
                }
                function po(e, t, n, r) {
                    if (e.cm && !e.cm.curOp) return Jr(e.cm, po)(e, t, n, r);
                    if (t.to.line < e.first) fo(e, t.text.length - 1 - (t.to.line - t.from.line));
                    else if (!(t.from.line > e.lastLine())) {
                        if (t.from.line < e.first) {
                            var i = t.text.length - 1 - (e.first - t.from.line);
                            fo(e, i), (t = { from: Je(e.first, 0), to: Je(t.to.line + i, t.to.ch), text: [q(t.text)], origin: t.origin });
                        }
                        var o = e.lastLine();
                        t.to.line > o && (t = { from: t.from, to: Je(o, Ke(e, o).text.length), text: [t.text[0]], origin: t.origin }),
                            (t.removed = $e(e, t.from, t.to)),
                            n || (n = Li(e, t)),
                            e.cm
                                ? (function (e, t, n) {
                                      var r = e.doc,
                                          i = e.display,
                                          o = t.from,
                                          l = t.to,
                                          a = !1,
                                          u = o.line;
                                      e.options.lineWrapping ||
                                          ((u = Qe(_t(Ke(r, o.line)))),
                                          r.iter(u, l.line + 1, function (e) {
                                              if (e == i.maxLine) return (a = !0), !0;
                                          })),
                                          r.sel.contains(t.from, t.to) > -1 && ge(e),
                                          Di(r, t, n, lr(e)),
                                          e.options.lineWrapping ||
                                              (r.iter(u, o.line + t.text.length, function (e) {
                                                  var t = jt(e);
                                                  t > i.maxLineLength && ((i.maxLine = e), (i.maxLineLength = t), (i.maxLineChanged = !0), (a = !1));
                                              }),
                                              a && (e.curOp.updateMaxLine = !0)),
                                          (function (e, t) {
                                              if (((e.modeFrontier = Math.min(e.modeFrontier, t)), !(e.highlightFrontier < t - 10))) {
                                                  for (var n = e.first, r = t - 1; r > n; r--) {
                                                      var i = Ke(e, r).stateAfter;
                                                      if (i && (!(i instanceof ut) || r + i.lookAhead < t)) {
                                                          n = r + 1;
                                                          break;
                                                      }
                                                  }
                                                  e.highlightFrontier = Math.min(e.highlightFrontier, n);
                                              }
                                          })(r, o.line),
                                          ni(e, 400);
                                      var s = t.text.length - (l.line - o.line) - 1;
                                      t.full ? cr(e) : o.line != l.line || 1 != t.text.length || Pi(e.doc, t) ? cr(e, o.line, l.line + 1, s) : fr(e, o.line, "text");
                                      var c = ve(e, "changes"),
                                          f = ve(e, "change");
                                      if (f || c) {
                                          var d = { from: o, to: l, text: t.text, removed: t.removed, origin: t.origin };
                                          f && an(e, "change", e, d), c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d);
                                      }
                                      e.display.selForContextMenu = null;
                                  })(e.cm, t, r)
                                : Di(e, t, r),
                            Ji(e, n, U),
                            e.cantEdit && io(e, Je(e.firstLine(), 0)) && (e.cantEdit = !1);
                    }
                }
                function ho(e, t, n, r, i) {
                    var o;
                    r || (r = n), et(r, n) < 0 && ((n = (o = [r, n])[0]), (r = o[1])), "string" == typeof t && (t = e.splitLines(t)), uo(e, { from: n, to: r, text: t, origin: i });
                }
                function mo(e, t, n, r) {
                    n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
                }
                function go(e, t, n, r) {
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i],
                            l = !0;
                        if (o.ranges) {
                            o.copied || ((o = e[i] = o.deepCopy()).copied = !0);
                            for (var a = 0; a < o.ranges.length; a++) mo(o.ranges[a].anchor, t, n, r), mo(o.ranges[a].head, t, n, r);
                        } else {
                            for (var u = 0; u < o.changes.length; ++u) {
                                var s = o.changes[u];
                                if (n < s.from.line) (s.from = Je(s.from.line + r, s.from.ch)), (s.to = Je(s.to.line + r, s.to.ch));
                                else if (t <= s.to.line) {
                                    l = !1;
                                    break;
                                }
                            }
                            l || (e.splice(0, i + 1), (i = 0));
                        }
                    }
                }
                function vo(e, t) {
                    var n = t.from.line,
                        r = t.to.line,
                        i = t.text.length - (r - n) - 1;
                    go(e.done, n, r, i), go(e.undone, n, r, i);
                }
                function yo(e, t, n, r) {
                    var i = t,
                        o = t;
                    return "number" == typeof t ? (o = Ke(e, ot(e, t))) : (i = Qe(t)), null == i ? null : (r(o, i) && e.cm && fr(e.cm, i, n), o);
                }
                function bo(e) {
                    (this.lines = e), (this.parent = null);
                    for (var t = 0, n = 0; n < e.length; ++n) (e[n].parent = this), (t += e[n].height);
                    this.height = t;
                }
                function wo(e) {
                    this.children = e;
                    for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
                        var i = e[r];
                        (t += i.chunkSize()), (n += i.height), (i.parent = this);
                    }
                    (this.size = t), (this.height = n), (this.parent = null);
                }
                (ki.prototype.from = function () {
                    return it(this.anchor, this.head);
                }),
                    (ki.prototype.to = function () {
                        return rt(this.anchor, this.head);
                    }),
                    (ki.prototype.empty = function () {
                        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
                    }),
                    (bo.prototype = {
                        chunkSize: function () {
                            return this.lines.length;
                        },
                        removeInner: function (e, t) {
                            for (var n = e, r = e + t; n < r; ++n) {
                                var i = this.lines[n];
                                (this.height -= i.height), $t(i), an(i, "delete");
                            }
                            this.lines.splice(e, t);
                        },
                        collapse: function (e) {
                            e.push.apply(e, this.lines);
                        },
                        insertInner: function (e, t, n) {
                            (this.height += n), (this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)));
                            for (var r = 0; r < t.length; ++r) t[r].parent = this;
                        },
                        iterN: function (e, t, n) {
                            for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
                        },
                    }),
                    (wo.prototype = {
                        chunkSize: function () {
                            return this.size;
                        },
                        removeInner: function (e, t) {
                            this.size -= t;
                            for (var n = 0; n < this.children.length; ++n) {
                                var r = this.children[n],
                                    i = r.chunkSize();
                                if (e < i) {
                                    var o = Math.min(t, i - e),
                                        l = r.height;
                                    if ((r.removeInner(e, o), (this.height -= l - r.height), i == o && (this.children.splice(n--, 1), (r.parent = null)), 0 == (t -= o))) break;
                                    e = 0;
                                } else e -= i;
                            }
                            if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof bo))) {
                                var a = [];
                                this.collapse(a), (this.children = [new bo(a)]), (this.children[0].parent = this);
                            }
                        },
                        collapse: function (e) {
                            for (var t = 0; t < this.children.length; ++t) this.children[t].collapse(e);
                        },
                        insertInner: function (e, t, n) {
                            (this.size += t.length), (this.height += n);
                            for (var r = 0; r < this.children.length; ++r) {
                                var i = this.children[r],
                                    o = i.chunkSize();
                                if (e <= o) {
                                    if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
                                        for (var l = (i.lines.length % 25) + 25, a = l; a < i.lines.length; ) {
                                            var u = new bo(i.lines.slice(a, (a += 25)));
                                            (i.height -= u.height), this.children.splice(++r, 0, u), (u.parent = this);
                                        }
                                        (i.lines = i.lines.slice(0, l)), this.maybeSpill();
                                    }
                                    break;
                                }
                                e -= o;
                            }
                        },
                        maybeSpill: function () {
                            if (!(this.children.length <= 10)) {
                                var e = this;
                                do {
                                    var t = new wo(e.children.splice(e.children.length - 5, 5));
                                    if (e.parent) {
                                        (e.size -= t.size), (e.height -= t.height);
                                        var n = H(e.parent.children, e);
                                        e.parent.children.splice(n + 1, 0, t);
                                    } else {
                                        var r = new wo(e.children);
                                        (r.parent = e), (e.children = [r, t]), (e = r);
                                    }
                                    t.parent = e.parent;
                                } while (e.children.length > 10);
                                e.parent.maybeSpill();
                            }
                        },
                        iterN: function (e, t, n) {
                            for (var r = 0; r < this.children.length; ++r) {
                                var i = this.children[r],
                                    o = i.chunkSize();
                                if (e < o) {
                                    var l = Math.min(t, o - e);
                                    if (i.iterN(e, l, n)) return !0;
                                    if (0 == (t -= l)) break;
                                    e = 0;
                                } else e -= o;
                            }
                        },
                    });
                var xo = function (e, t, n) {
                    if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
                    (this.doc = e), (this.node = t);
                };
                function ko(e, t, n) {
                    Ut(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Nr(e, n);
                }
                (xo.prototype.clear = function () {
                    var e = this.doc.cm,
                        t = this.line.widgets,
                        n = this.line,
                        r = Qe(n);
                    if (null != r && t) {
                        for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
                        t.length || (n.widgets = null);
                        var o = wn(this);
                        qe(n, Math.max(0, n.height - o)),
                            e &&
                                (Zr(e, function () {
                                    ko(e, n, -o), fr(e, r, "widget");
                                }),
                                an(e, "lineWidgetCleared", e, this, r));
                    }
                }),
                    (xo.prototype.changed = function () {
                        var e = this,
                            t = this.height,
                            n = this.doc.cm,
                            r = this.line;
                        this.height = null;
                        var i = wn(this) - t;
                        i &&
                            (Ht(this.doc, r) || qe(r, r.height + i),
                            n &&
                                Zr(n, function () {
                                    (n.curOp.forceUpdate = !0), ko(n, r, i), an(n, "lineWidgetChanged", n, e, Qe(r));
                                }));
                    }),
                    ye(xo);
                var Co = 0,
                    So = function (e, t) {
                        (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++Co);
                    };
                function To(e, t, n, r, i) {
                    if (r && r.shared)
                        return (function (e, t, n, r, i) {
                            (r = _(r)).shared = !1;
                            var o = [To(e, t, n, r, i)],
                                l = o[0],
                                a = r.widgetNode;
                            return (
                                Ai(e, function (e) {
                                    a && (r.widgetNode = a.cloneNode(!0)), o.push(To(e, lt(e, t), lt(e, n), r, i));
                                    for (var u = 0; u < e.linked.length; ++u) if (e.linked[u].isParent) return;
                                    l = q(o);
                                }),
                                new Eo(o, l)
                            );
                        })(e, t, n, r, i);
                    if (e.cm && !e.cm.curOp) return Jr(e.cm, To)(e, t, n, r, i);
                    var o = new So(e, i),
                        l = et(t, n);
                    if ((r && _(r, o, !1), l > 0 || (0 == l && !1 !== o.clearWhenEmpty))) return o;
                    if ((o.replacedWith && ((o.collapsed = !0), (o.widgetNode = O("span", [o.replacedWith], "CodeMirror-widget")), r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed)) {
                        if (It(e, t.line, t, n, o) || (t.line != n.line && It(e, n.line, t, n, o))) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                        xt = !0;
                    }
                    o.addToHistory && Wi(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
                    var a,
                        u = t.line,
                        s = e.cm;
                    if (
                        (e.iter(u, n.line + 1, function (e) {
                            s && o.collapsed && !s.options.lineWrapping && _t(e) == s.display.maxLine && (a = !0),
                                o.collapsed && u != t.line && qe(e, 0),
                                (function (e, t) {
                                    (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]), t.marker.attachLine(e);
                                })(e, new kt(o, u == t.line ? t.ch : null, u == n.line ? n.ch : null)),
                                ++u;
                        }),
                        o.collapsed &&
                            e.iter(t.line, n.line + 1, function (t) {
                                Ht(e, t) && qe(t, 0);
                            }),
                        o.clearOnEnter &&
                            fe(o, "beforeCursorEnter", function () {
                                return o.clear();
                            }),
                        o.readOnly && ((wt = !0), (e.history.done.length || e.history.undone.length) && e.clearHistory()),
                        o.collapsed && ((o.id = ++Co), (o.atomic = !0)),
                        s)
                    ) {
                        if ((a && (s.curOp.updateMaxLine = !0), o.collapsed)) cr(s, t.line, n.line + 1);
                        else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title) for (var c = t.line; c <= n.line; c++) fr(s, c, "text");
                        o.atomic && to(s.doc), an(s, "markerAdded", s, o);
                    }
                    return o;
                }
                (So.prototype.clear = function () {
                    if (!this.explicitlyCleared) {
                        var e = this.doc.cm,
                            t = e && !e.curOp;
                        if ((t && Kr(e), ve(this, "clear"))) {
                            var n = this.find();
                            n && an(this, "clear", n.from, n.to);
                        }
                        for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                            var l = this.lines[o],
                                a = Ct(l.markedSpans, this);
                            e && !this.collapsed ? fr(e, Qe(l), "text") : e && (null != a.to && (i = Qe(l)), null != a.from && (r = Qe(l))), (l.markedSpans = St(l.markedSpans, a)), null == a.from && this.collapsed && !Ht(this.doc, l) && e && qe(l, nr(e.display));
                        }
                        if (e && this.collapsed && !e.options.lineWrapping)
                            for (var u = 0; u < this.lines.length; ++u) {
                                var s = _t(this.lines[u]),
                                    c = jt(s);
                                c > e.display.maxLineLength && ((e.display.maxLine = s), (e.display.maxLineLength = c), (e.display.maxLineChanged = !0));
                            }
                        null != r && e && this.collapsed && cr(e, r, i + 1), (this.lines.length = 0), (this.explicitlyCleared = !0), this.atomic && this.doc.cantEdit && ((this.doc.cantEdit = !1), e && to(e.doc)), e && an(e, "markerCleared", e, this, r, i), t && $r(e), this.parent && this.parent.clear();
                    }
                }),
                    (So.prototype.find = function (e, t) {
                        var n, r;
                        null == e && "bookmark" == this.type && (e = 1);
                        for (var i = 0; i < this.lines.length; ++i) {
                            var o = this.lines[i],
                                l = Ct(o.markedSpans, this);
                            if (null != l.from && ((n = Je(t ? o : Qe(o), l.from)), -1 == e)) return n;
                            if (null != l.to && ((r = Je(t ? o : Qe(o), l.to)), 1 == e)) return r;
                        }
                        return n && { from: n, to: r };
                    }),
                    (So.prototype.changed = function () {
                        var e = this,
                            t = this.find(-1, !0),
                            n = this,
                            r = this.doc.cm;
                        t &&
                            r &&
                            Zr(r, function () {
                                var i = t.line,
                                    o = Qe(t.line),
                                    l = On(r, o);
                                if ((l && (_n(l), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)), (r.curOp.updateMaxLine = !0), !Ht(n.doc, i) && null != n.height)) {
                                    var a = n.height;
                                    n.height = null;
                                    var u = wn(n) - a;
                                    u && qe(i, i.height + u);
                                }
                                an(r, "markerChanged", r, e);
                            });
                    }),
                    (So.prototype.attachLine = function (e) {
                        if (!this.lines.length && this.doc.cm) {
                            var t = this.doc.cm.curOp;
                            (t.maybeHiddenMarkers && -1 != H(t.maybeHiddenMarkers, this)) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
                        }
                        this.lines.push(e);
                    }),
                    (So.prototype.detachLine = function (e) {
                        if ((this.lines.splice(H(this.lines, e), 1), !this.lines.length && this.doc.cm)) {
                            var t = this.doc.cm.curOp;
                            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
                        }
                    }),
                    ye(So);
                var Eo = function (e, t) {
                    (this.markers = e), (this.primary = t);
                    for (var n = 0; n < e.length; ++n) e[n].parent = this;
                };
                function Lo(e) {
                    return e.findMarks(Je(e.first, 0), e.clipPos(Je(e.lastLine())), function (e) {
                        return e.parent;
                    });
                }
                function Mo(e) {
                    for (
                        var t = function (t) {
                                var n = e[t],
                                    r = [n.primary.doc];
                                Ai(n.primary.doc, function (e) {
                                    return r.push(e);
                                });
                                for (var i = 0; i < n.markers.length; i++) {
                                    var o = n.markers[i];
                                    -1 == H(r, o.doc) && ((o.parent = null), n.markers.splice(i--, 1));
                                }
                            },
                            n = 0;
                        n < e.length;
                        n++
                    )
                        t(n);
                }
                (Eo.prototype.clear = function () {
                    if (!this.explicitlyCleared) {
                        this.explicitlyCleared = !0;
                        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                        an(this, "clear");
                    }
                }),
                    (Eo.prototype.find = function (e, t) {
                        return this.primary.find(e, t);
                    }),
                    ye(Eo);
                var No = 0,
                    Oo = function e(t, n, r, i, o) {
                        if (!(this instanceof e)) return new e(t, n, r, i, o);
                        null == r && (r = 0), wo.call(this, [new bo([new Kt("", null)])]), (this.first = r), (this.scrollTop = this.scrollLeft = 0), (this.cantEdit = !1), (this.cleanGeneration = 1), (this.modeFrontier = this.highlightFrontier = r);
                        var l = Je(r, 0);
                        (this.sel = Si(l)), (this.history = new Ii(null)), (this.id = ++No), (this.modeOption = n), (this.lineSep = i), (this.direction = "rtl" == o ? "rtl" : "ltr"), (this.extend = !1), "string" == typeof t && (t = this.splitLines(t)), Di(this, { from: l, to: l, text: t }), Zi(this, Si(l), U);
                    };
                (Oo.prototype = Y(wo.prototype, {
                    constructor: Oo,
                    iter: function (e, t, n) {
                        n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
                    },
                    insert: function (e, t) {
                        for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
                        this.insertInner(e - this.first, t, n);
                    },
                    remove: function (e, t) {
                        this.removeInner(e - this.first, t);
                    },
                    getValue: function (e) {
                        var t = Ge(this, this.first, this.first + this.size);
                        return !1 === e ? t : t.join(e || this.lineSeparator());
                    },
                    setValue: ti(function (e) {
                        var t = Je(this.first, 0),
                            n = this.first + this.size - 1;
                        uo(this, { from: t, to: Je(n, Ke(this, n).text.length), text: this.splitLines(e), origin: "setValue", full: !0 }, !0), this.cm && Pr(this.cm, 0, 0), Zi(this, Si(t), U);
                    }),
                    replaceRange: function (e, t, n, r) {
                        ho(this, e, (t = lt(this, t)), (n = n ? lt(this, n) : t), r);
                    },
                    getRange: function (e, t, n) {
                        var r = $e(this, lt(this, e), lt(this, t));
                        return !1 === n ? r : r.join(n || this.lineSeparator());
                    },
                    getLine: function (e) {
                        var t = this.getLineHandle(e);
                        return t && t.text;
                    },
                    getLineHandle: function (e) {
                        if (Ye(this, e)) return Ke(this, e);
                    },
                    getLineNumber: function (e) {
                        return Qe(e);
                    },
                    getLineHandleVisualStart: function (e) {
                        return "number" == typeof e && (e = Ke(this, e)), _t(e);
                    },
                    lineCount: function () {
                        return this.size;
                    },
                    firstLine: function () {
                        return this.first;
                    },
                    lastLine: function () {
                        return this.first + this.size - 1;
                    },
                    clipPos: function (e) {
                        return lt(this, e);
                    },
                    getCursor: function (e) {
                        var t = this.sel.primary();
                        return null == e || "head" == e ? t.head : "anchor" == e ? t.anchor : "end" == e || "to" == e || !1 === e ? t.to() : t.from();
                    },
                    listSelections: function () {
                        return this.sel.ranges;
                    },
                    somethingSelected: function () {
                        return this.sel.somethingSelected();
                    },
                    setCursor: ti(function (e, t, n) {
                        Xi(this, lt(this, "number" == typeof e ? Je(e, t || 0) : e), null, n);
                    }),
                    setSelection: ti(function (e, t, n) {
                        Xi(this, lt(this, e), lt(this, t || e), n);
                    }),
                    extendSelection: ti(function (e, t, n) {
                        Gi(this, lt(this, e), t && lt(this, t), n);
                    }),
                    extendSelections: ti(function (e, t) {
                        qi(this, at(this, e), t);
                    }),
                    extendSelectionsBy: ti(function (e, t) {
                        qi(this, at(this, Q(this.sel.ranges, e)), t);
                    }),
                    setSelections: ti(function (e, t, n) {
                        if (e.length) {
                            for (var r = [], i = 0; i < e.length; i++) r[i] = new ki(lt(this, e[i].anchor), lt(this, e[i].head));
                            null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), Zi(this, Ci(this.cm, r, t), n);
                        }
                    }),
                    addSelection: ti(function (e, t, n) {
                        var r = this.sel.ranges.slice(0);
                        r.push(new ki(lt(this, e), lt(this, t || e))), Zi(this, Ci(this.cm, r, r.length - 1), n);
                    }),
                    getSelection: function (e) {
                        for (var t, n = this.sel.ranges, r = 0; r < n.length; r++) {
                            var i = $e(this, n[r].from(), n[r].to());
                            t = t ? t.concat(i) : i;
                        }
                        return !1 === e ? t : t.join(e || this.lineSeparator());
                    },
                    getSelections: function (e) {
                        for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                            var i = $e(this, n[r].from(), n[r].to());
                            !1 !== e && (i = i.join(e || this.lineSeparator())), (t[r] = i);
                        }
                        return t;
                    },
                    replaceSelection: function (e, t, n) {
                        for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
                        this.replaceSelections(r, t, n || "+input");
                    },
                    replaceSelections: ti(function (e, t, n) {
                        for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                            var l = i.ranges[o];
                            r[o] = { from: l.from(), to: l.to(), text: this.splitLines(e[o]), origin: n };
                        }
                        for (
                            var a =
                                    t &&
                                    "end" != t &&
                                    (function (e, t, n) {
                                        for (var r = [], i = Je(e.first, 0), o = i, l = 0; l < t.length; l++) {
                                            var a = t[l],
                                                u = Mi(a.from, i, o),
                                                s = Mi(Ti(a), i, o);
                                            if (((i = a.to), (o = s), "around" == n)) {
                                                var c = e.sel.ranges[l],
                                                    f = et(c.head, c.anchor) < 0;
                                                r[l] = new ki(f ? s : u, f ? u : s);
                                            } else r[l] = new ki(u, u);
                                        }
                                        return new xi(r, e.sel.primIndex);
                                    })(this, r, t),
                                u = r.length - 1;
                            u >= 0;
                            u--
                        )
                            uo(this, r[u]);
                        a ? Yi(this, a) : this.cm && Or(this.cm);
                    }),
                    undo: ti(function () {
                        co(this, "undo");
                    }),
                    redo: ti(function () {
                        co(this, "redo");
                    }),
                    undoSelection: ti(function () {
                        co(this, "undo", !0);
                    }),
                    redoSelection: ti(function () {
                        co(this, "redo", !0);
                    }),
                    setExtending: function (e) {
                        this.extend = e;
                    },
                    getExtending: function () {
                        return this.extend;
                    },
                    historySize: function () {
                        for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++) e.done[r].ranges || ++t;
                        for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
                        return { undo: t, redo: n };
                    },
                    clearHistory: function () {
                        var e = this;
                        (this.history = new Ii(this.history.maxGeneration)),
                            Ai(
                                this,
                                function (t) {
                                    return (t.history = e.history);
                                },
                                !0
                            );
                    },
                    markClean: function () {
                        this.cleanGeneration = this.changeGeneration(!0);
                    },
                    changeGeneration: function (e) {
                        return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
                    },
                    isClean: function (e) {
                        return this.history.generation == (e || this.cleanGeneration);
                    },
                    getHistory: function () {
                        return { done: Ki(this.history.done), undone: Ki(this.history.undone) };
                    },
                    setHistory: function (e) {
                        var t = (this.history = new Ii(this.history.maxGeneration));
                        (t.done = Ki(e.done.slice(0), null, !0)), (t.undone = Ki(e.undone.slice(0), null, !0));
                    },
                    setGutterMarker: ti(function (e, t, n) {
                        return yo(this, e, "gutter", function (e) {
                            var r = e.gutterMarkers || (e.gutterMarkers = {});
                            return (r[t] = n), !n && te(r) && (e.gutterMarkers = null), !0;
                        });
                    }),
                    clearGutter: ti(function (e) {
                        var t = this;
                        this.iter(function (n) {
                            n.gutterMarkers &&
                                n.gutterMarkers[e] &&
                                yo(t, n, "gutter", function () {
                                    return (n.gutterMarkers[e] = null), te(n.gutterMarkers) && (n.gutterMarkers = null), !0;
                                });
                        });
                    }),
                    lineInfo: function (e) {
                        var t;
                        if ("number" == typeof e) {
                            if (!Ye(this, e)) return null;
                            if (((t = e), !(e = Ke(this, e)))) return null;
                        } else if (null == (t = Qe(e))) return null;
                        return { line: t, handle: e, text: e.text, gutterMarkers: e.gutterMarkers, textClass: e.textClass, bgClass: e.bgClass, wrapClass: e.wrapClass, widgets: e.widgets };
                    },
                    addLineClass: ti(function (e, t, n) {
                        return yo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                            var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";
                            if (e[r]) {
                                if (S(n).test(e[r])) return !1;
                                e[r] += " " + n;
                            } else e[r] = n;
                            return !0;
                        });
                    }),
                    removeLineClass: ti(function (e, t, n) {
                        return yo(this, e, "gutter" == t ? "gutter" : "class", function (e) {
                            var r = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
                                i = e[r];
                            if (!i) return !1;
                            if (null == n) e[r] = null;
                            else {
                                var o = i.match(S(n));
                                if (!o) return !1;
                                var l = o.index + o[0].length;
                                e[r] = i.slice(0, o.index) + (o.index && l != i.length ? " " : "") + i.slice(l) || null;
                            }
                            return !0;
                        });
                    }),
                    addLineWidget: ti(function (e, t, n) {
                        return (function (e, t, n, r) {
                            var i = new xo(e, n, r),
                                o = e.cm;
                            return (
                                o && i.noHScroll && (o.display.alignWidgets = !0),
                                yo(e, t, "widget", function (t) {
                                    var n = t.widgets || (t.widgets = []);
                                    if ((null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), (i.line = t), o && !Ht(e, t))) {
                                        var r = Ut(t) < e.scrollTop;
                                        qe(t, t.height + wn(i)), r && Nr(o, i.height), (o.curOp.forceUpdate = !0);
                                    }
                                    return !0;
                                }),
                                o && an(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : Qe(t)),
                                i
                            );
                        })(this, e, t, n);
                    }),
                    removeLineWidget: function (e) {
                        e.clear();
                    },
                    markText: function (e, t, n) {
                        return To(this, lt(this, e), lt(this, t), n, (n && n.type) || "range");
                    },
                    setBookmark: function (e, t) {
                        var n = { replacedWith: t && (null == t.nodeType ? t.widget : t), insertLeft: t && t.insertLeft, clearWhenEmpty: !1, shared: t && t.shared, handleMouseEvents: t && t.handleMouseEvents };
                        return To(this, (e = lt(this, e)), e, n, "bookmark");
                    },
                    findMarksAt: function (e) {
                        var t = [],
                            n = Ke(this, (e = lt(this, e)).line).markedSpans;
                        if (n)
                            for (var r = 0; r < n.length; ++r) {
                                var i = n[r];
                                (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
                            }
                        return t;
                    },
                    findMarks: function (e, t, n) {
                        (e = lt(this, e)), (t = lt(this, t));
                        var r = [],
                            i = e.line;
                        return (
                            this.iter(e.line, t.line + 1, function (o) {
                                var l = o.markedSpans;
                                if (l)
                                    for (var a = 0; a < l.length; a++) {
                                        var u = l[a];
                                        (null != u.to && i == e.line && e.ch >= u.to) || (null == u.from && i != e.line) || (null != u.from && i == t.line && u.from >= t.ch) || (n && !n(u.marker)) || r.push(u.marker.parent || u.marker);
                                    }
                                ++i;
                            }),
                            r
                        );
                    },
                    getAllMarks: function () {
                        var e = [];
                        return (
                            this.iter(function (t) {
                                var n = t.markedSpans;
                                if (n) for (var r = 0; r < n.length; ++r) null != n[r].from && e.push(n[r].marker);
                            }),
                            e
                        );
                    },
                    posFromIndex: function (e) {
                        var t,
                            n = this.first,
                            r = this.lineSeparator().length;
                        return (
                            this.iter(function (i) {
                                var o = i.text.length + r;
                                if (o > e) return (t = e), !0;
                                (e -= o), ++n;
                            }),
                            lt(this, Je(n, t))
                        );
                    },
                    indexFromPos: function (e) {
                        var t = (e = lt(this, e)).ch;
                        if (e.line < this.first || e.ch < 0) return 0;
                        var n = this.lineSeparator().length;
                        return (
                            this.iter(this.first, e.line, function (e) {
                                t += e.text.length + n;
                            }),
                            t
                        );
                    },
                    copy: function (e) {
                        var t = new Oo(Ge(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
                        return (t.scrollTop = this.scrollTop), (t.scrollLeft = this.scrollLeft), (t.sel = this.sel), (t.extend = !1), e && ((t.history.undoDepth = this.history.undoDepth), t.setHistory(this.getHistory())), t;
                    },
                    linkedDoc: function (e) {
                        e || (e = {});
                        var t = this.first,
                            n = this.first + this.size;
                        null != e.from && e.from > t && (t = e.from), null != e.to && e.to < n && (n = e.to);
                        var r = new Oo(Ge(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
                        return (
                            e.sharedHist && (r.history = this.history),
                            (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }),
                            (r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
                            (function (e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n],
                                        i = r.find(),
                                        o = e.clipPos(i.from),
                                        l = e.clipPos(i.to);
                                    if (et(o, l)) {
                                        var a = To(e, o, l, r.primary, r.primary.type);
                                        r.markers.push(a), (a.parent = r);
                                    }
                                }
                            })(r, Lo(this)),
                            r
                        );
                    },
                    unlinkDoc: function (e) {
                        if ((e instanceof El && (e = e.doc), this.linked))
                            for (var t = 0; t < this.linked.length; ++t)
                                if (this.linked[t].doc == e) {
                                    this.linked.splice(t, 1), e.unlinkDoc(this), Mo(Lo(this));
                                    break;
                                }
                        if (e.history == this.history) {
                            var n = [e.id];
                            Ai(
                                e,
                                function (e) {
                                    return n.push(e.id);
                                },
                                !0
                            ),
                                (e.history = new Ii(null)),
                                (e.history.done = Ki(this.history.done, n)),
                                (e.history.undone = Ki(this.history.undone, n));
                        }
                    },
                    iterLinkedDocs: function (e) {
                        Ai(this, e);
                    },
                    getMode: function () {
                        return this.mode;
                    },
                    getEditor: function () {
                        return this.cm;
                    },
                    splitLines: function (e) {
                        return this.lineSep ? e.split(this.lineSep) : Oe(e);
                    },
                    lineSeparator: function () {
                        return this.lineSep || "\n";
                    },
                    setDirection: ti(function (e) {
                        var t;
                        "rtl" != e && (e = "ltr"),
                            e != this.direction &&
                                ((this.direction = e),
                                this.iter(function (e) {
                                    return (e.order = null);
                                }),
                                this.cm &&
                                    Zr((t = this.cm), function () {
                                        Fi(t), cr(t);
                                    }));
                    }),
                })).eachLine = Oo.prototype.iter;
                var Po = 0;
                function Do(e) {
                    var t = this;
                    if ((Ao(t), !me(t, e) && !xn(t.display, e))) {
                        be(e), l && (Po = +new Date());
                        var n = ur(t, e, !0),
                            r = e.dataTransfer.files;
                        if (n && !t.isReadOnly())
                            if (r && r.length && window.FileReader && window.File)
                                for (
                                    var i = r.length,
                                        o = Array(i),
                                        a = 0,
                                        u = function () {
                                            ++a == i &&
                                                Jr(t, function () {
                                                    var e = {
                                                        from: (n = lt(t.doc, n)),
                                                        to: n,
                                                        text: t.doc.splitLines(
                                                            o
                                                                .filter(function (e) {
                                                                    return null != e;
                                                                })
                                                                .join(t.doc.lineSeparator())
                                                        ),
                                                        origin: "paste",
                                                    };
                                                    uo(t.doc, e), Yi(t.doc, Si(lt(t.doc, n), lt(t.doc, Ti(e))));
                                                })();
                                        },
                                        s = function (e, n) {
                                            if (t.options.allowDropFileTypes && -1 == H(t.options.allowDropFileTypes, e.type)) u();
                                            else {
                                                var r = new FileReader();
                                                (r.onerror = function () {
                                                    return u();
                                                }),
                                                    (r.onload = function () {
                                                        var e = r.result;
                                                        /[\x00-\x08\x0e-\x1f]{2}/.test(e) || (o[n] = e), u();
                                                    }),
                                                    r.readAsText(e);
                                            }
                                        },
                                        c = 0;
                                    c < r.length;
                                    c++
                                )
                                    s(r[c], c);
                            else {
                                if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                                    return (
                                        t.state.draggingText(e),
                                        void setTimeout(function () {
                                            return t.display.input.focus();
                                        }, 20)
                                    );
                                try {
                                    var f = e.dataTransfer.getData("Text");
                                    if (f) {
                                        var d;
                                        if ((t.state.draggingText && !t.state.draggingText.copy && (d = t.listSelections()), Ji(t.doc, Si(n, n)), d)) for (var p = 0; p < d.length; ++p) ho(t.doc, "", d[p].anchor, d[p].head, "drag");
                                        t.replaceSelection(f, "around", "paste"), t.display.input.focus();
                                    }
                                } catch (h) {}
                            }
                    }
                }
                function Ao(e) {
                    e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), (e.display.dragCursor = null));
                }
                function zo(e) {
                    if (document.getElementsByClassName) {
                        for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
                            var i = t[r].CodeMirror;
                            i && n.push(i);
                        }
                        n.length &&
                            n[0].operation(function () {
                                for (var t = 0; t < n.length; t++) e(n[t]);
                            });
                    }
                }
                var Fo = !1;
                function Io() {
                    Fo ||
                        ((function () {
                            var e;
                            fe(window, "resize", function () {
                                null == e &&
                                    (e = setTimeout(function () {
                                        (e = null), zo(_o);
                                    }, 100));
                            }),
                                fe(window, "blur", function () {
                                    return zo(Sr);
                                });
                        })(),
                        (Fo = !0));
                }
                function _o(e) {
                    var t = e.display;
                    (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null), (t.scrollbarsClipped = !1), e.setSize();
                }
                for (
                    var Ro = {
                            3: "Pause",
                            8: "Backspace",
                            9: "Tab",
                            13: "Enter",
                            16: "Shift",
                            17: "Ctrl",
                            18: "Alt",
                            19: "Pause",
                            20: "CapsLock",
                            27: "Esc",
                            32: "Space",
                            33: "PageUp",
                            34: "PageDown",
                            35: "End",
                            36: "Home",
                            37: "Left",
                            38: "Up",
                            39: "Right",
                            40: "Down",
                            44: "PrintScrn",
                            45: "Insert",
                            46: "Delete",
                            59: ";",
                            61: "=",
                            91: "Mod",
                            92: "Mod",
                            93: "Mod",
                            106: "*",
                            107: "=",
                            109: "-",
                            110: ".",
                            111: "/",
                            145: "ScrollLock",
                            173: "-",
                            186: ";",
                            187: "=",
                            188: ",",
                            189: "-",
                            190: ".",
                            191: "/",
                            192: "`",
                            219: "[",
                            220: "\\",
                            221: "]",
                            222: "'",
                            224: "Mod",
                            63232: "Up",
                            63233: "Down",
                            63234: "Left",
                            63235: "Right",
                            63272: "Delete",
                            63273: "Home",
                            63275: "End",
                            63276: "PageUp",
                            63277: "PageDown",
                            63302: "Insert",
                        },
                        Wo = 0;
                    Wo < 10;
                    Wo++
                )
                    Ro[Wo + 48] = Ro[Wo + 96] = String(Wo);
                for (var Ho = 65; Ho <= 90; Ho++) Ro[Ho] = String.fromCharCode(Ho);
                for (var Bo = 1; Bo <= 12; Bo++) Ro[Bo + 111] = Ro[Bo + 63235] = "F" + Bo;
                var Uo = {};
                function jo(e) {
                    var t,
                        n,
                        r,
                        i,
                        o = e.split(/-(?!$)/);
                    e = o[o.length - 1];
                    for (var l = 0; l < o.length - 1; l++) {
                        var a = o[l];
                        if (/^(cmd|meta|m)$/i.test(a)) i = !0;
                        else if (/^a(lt)?$/i.test(a)) t = !0;
                        else if (/^(c|ctrl|control)$/i.test(a)) n = !0;
                        else {
                            if (!/^s(hift)?$/i.test(a)) throw new Error("Unrecognized modifier name: " + a);
                            r = !0;
                        }
                    }
                    return t && (e = "Alt-" + e), n && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), r && (e = "Shift-" + e), e;
                }
                function Vo(e) {
                    var t = {};
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var r = e[n];
                            if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
                            if ("..." == r) {
                                delete e[n];
                                continue;
                            }
                            for (var i = Q(n.split(" "), jo), o = 0; o < i.length; o++) {
                                var l = void 0,
                                    a = void 0;
                                o == i.length - 1 ? ((a = i.join(" ")), (l = r)) : ((a = i.slice(0, o + 1).join(" ")), (l = "..."));
                                var u = t[a];
                                if (u) {
                                    if (u != l) throw new Error("Inconsistent bindings for " + a);
                                } else t[a] = l;
                            }
                            delete e[n];
                        }
                    for (var s in t) e[s] = t[s];
                    return e;
                }
                function Ko(e, t, n, r) {
                    var i = (t = Qo(t)).call ? t.call(e, r) : t[e];
                    if (!1 === i) return "nothing";
                    if ("..." === i) return "multi";
                    if (null != i && n(i)) return "handled";
                    if (t.fallthrough) {
                        if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Ko(e, t.fallthrough, n, r);
                        for (var o = 0; o < t.fallthrough.length; o++) {
                            var l = Ko(e, t.fallthrough[o], n, r);
                            if (l) return l;
                        }
                    }
                }
                function $o(e) {
                    var t = "string" == typeof e ? e : Ro[e.keyCode];
                    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
                }
                function Go(e, t, n) {
                    var r = e;
                    return t.altKey && "Alt" != r && (e = "Alt-" + e), (k ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e), (k ? t.ctrlKey : t.metaKey) && "Mod" != r && (e = "Cmd-" + e), !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e), e;
                }
                function qo(e, t) {
                    if (f && 34 == e.keyCode && e.char) return !1;
                    var n = Ro[e.keyCode];
                    return null != n && !e.altGraphKey && (3 == e.keyCode && e.code && (n = e.code), Go(n, e, t));
                }
                function Qo(e) {
                    return "string" == typeof e ? Uo[e] : e;
                }
                function Xo(e, t) {
                    for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                        for (var o = t(n[i]); r.length && et(o.from, q(r).to) <= 0; ) {
                            var l = r.pop();
                            if (et(l.from, o.from) < 0) {
                                o.from = l.from;
                                break;
                            }
                        }
                        r.push(o);
                    }
                    Zr(e, function () {
                        for (var t = r.length - 1; t >= 0; t--) ho(e.doc, "", r[t].from, r[t].to, "+delete");
                        Or(e);
                    });
                }
                function Yo(e, t, n) {
                    var r = ie(e.text, t + n, n);
                    return r < 0 || r > e.text.length ? null : r;
                }
                function Zo(e, t, n) {
                    var r = Yo(e, t.ch, n);
                    return null == r ? null : new Je(t.line, r, n < 0 ? "after" : "before");
                }
                function Jo(e, t, n, r, i) {
                    if (e) {
                        "rtl" == t.doc.direction && (i = -i);
                        var o = se(n, t.doc.direction);
                        if (o) {
                            var l,
                                a = i < 0 ? q(o) : o[0],
                                u = i < 0 == (1 == a.level) ? "after" : "before";
                            if (a.level > 0 || "rtl" == t.doc.direction) {
                                var s = Pn(t, n);
                                l = i < 0 ? n.text.length - 1 : 0;
                                var c = Dn(t, s, l).top;
                                (l = oe(
                                    function (e) {
                                        return Dn(t, s, e).top == c;
                                    },
                                    i < 0 == (1 == a.level) ? a.from : a.to - 1,
                                    l
                                )),
                                    "before" == u && (l = Yo(n, l, 1));
                            } else l = i < 0 ? a.to : a.from;
                            return new Je(r, l, u);
                        }
                    }
                    return new Je(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
                }
                (Uo.basic = { Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", "Shift-Backspace": "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite", Esc: "singleSelection" }),
                    (Uo.pcDefault = {
                        "Ctrl-A": "selectAll",
                        "Ctrl-D": "deleteLine",
                        "Ctrl-Z": "undo",
                        "Shift-Ctrl-Z": "redo",
                        "Ctrl-Y": "redo",
                        "Ctrl-Home": "goDocStart",
                        "Ctrl-End": "goDocEnd",
                        "Ctrl-Up": "goLineUp",
                        "Ctrl-Down": "goLineDown",
                        "Ctrl-Left": "goGroupLeft",
                        "Ctrl-Right": "goGroupRight",
                        "Alt-Left": "goLineStart",
                        "Alt-Right": "goLineEnd",
                        "Ctrl-Backspace": "delGroupBefore",
                        "Ctrl-Delete": "delGroupAfter",
                        "Ctrl-S": "save",
                        "Ctrl-F": "find",
                        "Ctrl-G": "findNext",
                        "Shift-Ctrl-G": "findPrev",
                        "Shift-Ctrl-F": "replace",
                        "Shift-Ctrl-R": "replaceAll",
                        "Ctrl-[": "indentLess",
                        "Ctrl-]": "indentMore",
                        "Ctrl-U": "undoSelection",
                        "Shift-Ctrl-U": "redoSelection",
                        "Alt-U": "redoSelection",
                        fallthrough: "basic",
                    }),
                    (Uo.emacsy = { "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars", "Ctrl-O": "openLine" }),
                    (Uo.macDefault = {
                        "Cmd-A": "selectAll",
                        "Cmd-D": "deleteLine",
                        "Cmd-Z": "undo",
                        "Shift-Cmd-Z": "redo",
                        "Cmd-Y": "redo",
                        "Cmd-Home": "goDocStart",
                        "Cmd-Up": "goDocStart",
                        "Cmd-End": "goDocEnd",
                        "Cmd-Down": "goDocEnd",
                        "Alt-Left": "goGroupLeft",
                        "Alt-Right": "goGroupRight",
                        "Cmd-Left": "goLineLeft",
                        "Cmd-Right": "goLineRight",
                        "Alt-Backspace": "delGroupBefore",
                        "Ctrl-Alt-Backspace": "delGroupAfter",
                        "Alt-Delete": "delGroupAfter",
                        "Cmd-S": "save",
                        "Cmd-F": "find",
                        "Cmd-G": "findNext",
                        "Shift-Cmd-G": "findPrev",
                        "Cmd-Alt-F": "replace",
                        "Shift-Cmd-Alt-F": "replaceAll",
                        "Cmd-[": "indentLess",
                        "Cmd-]": "indentMore",
                        "Cmd-Backspace": "delWrappedLineLeft",
                        "Cmd-Delete": "delWrappedLineRight",
                        "Cmd-U": "undoSelection",
                        "Shift-Cmd-U": "redoSelection",
                        "Ctrl-Up": "goDocStart",
                        "Ctrl-Down": "goDocEnd",
                        fallthrough: ["basic", "emacsy"],
                    }),
                    (Uo.default = y ? Uo.macDefault : Uo.pcDefault);
                var el = {
                    selectAll: lo,
                    singleSelection: function (e) {
                        return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), U);
                    },
                    killLine: function (e) {
                        return Xo(e, function (t) {
                            if (t.empty()) {
                                var n = Ke(e.doc, t.head.line).text.length;
                                return t.head.ch == n && t.head.line < e.lastLine() ? { from: t.head, to: Je(t.head.line + 1, 0) } : { from: t.head, to: Je(t.head.line, n) };
                            }
                            return { from: t.from(), to: t.to() };
                        });
                    },
                    deleteLine: function (e) {
                        return Xo(e, function (t) {
                            return { from: Je(t.from().line, 0), to: lt(e.doc, Je(t.to().line + 1, 0)) };
                        });
                    },
                    delLineLeft: function (e) {
                        return Xo(e, function (e) {
                            return { from: Je(e.from().line, 0), to: e.from() };
                        });
                    },
                    delWrappedLineLeft: function (e) {
                        return Xo(e, function (t) {
                            var n = e.charCoords(t.head, "div").top + 5;
                            return { from: e.coordsChar({ left: 0, top: n }, "div"), to: t.from() };
                        });
                    },
                    delWrappedLineRight: function (e) {
                        return Xo(e, function (t) {
                            var n = e.charCoords(t.head, "div").top + 5,
                                r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
                            return { from: t.from(), to: r };
                        });
                    },
                    undo: function (e) {
                        return e.undo();
                    },
                    redo: function (e) {
                        return e.redo();
                    },
                    undoSelection: function (e) {
                        return e.undoSelection();
                    },
                    redoSelection: function (e) {
                        return e.redoSelection();
                    },
                    goDocStart: function (e) {
                        return e.extendSelection(Je(e.firstLine(), 0));
                    },
                    goDocEnd: function (e) {
                        return e.extendSelection(Je(e.lastLine()));
                    },
                    goLineStart: function (e) {
                        return e.extendSelectionsBy(
                            function (t) {
                                return tl(e, t.head.line);
                            },
                            { origin: "+move", bias: 1 }
                        );
                    },
                    goLineStartSmart: function (e) {
                        return e.extendSelectionsBy(
                            function (t) {
                                return nl(e, t.head);
                            },
                            { origin: "+move", bias: 1 }
                        );
                    },
                    goLineEnd: function (e) {
                        return e.extendSelectionsBy(
                            function (t) {
                                return (function (e, t) {
                                    var n = Ke(e.doc, t),
                                        r = (function (e) {
                                            for (var t; (t = zt(e)); ) e = t.find(1, !0).line;
                                            return e;
                                        })(n);
                                    return r != n && (t = Qe(r)), Jo(!0, e, n, t, -1);
                                })(e, t.head.line);
                            },
                            { origin: "+move", bias: -1 }
                        );
                    },
                    goLineRight: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var n = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
                        }, V);
                    },
                    goLineLeft: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var n = e.cursorCoords(t.head, "div").top + 5;
                            return e.coordsChar({ left: 0, top: n }, "div");
                        }, V);
                    },
                    goLineLeftSmart: function (e) {
                        return e.extendSelectionsBy(function (t) {
                            var n = e.cursorCoords(t.head, "div").top + 5,
                                r = e.coordsChar({ left: 0, top: n }, "div");
                            return r.ch < e.getLine(r.line).search(/\S/) ? nl(e, t.head) : r;
                        }, V);
                    },
                    goLineUp: function (e) {
                        return e.moveV(-1, "line");
                    },
                    goLineDown: function (e) {
                        return e.moveV(1, "line");
                    },
                    goPageUp: function (e) {
                        return e.moveV(-1, "page");
                    },
                    goPageDown: function (e) {
                        return e.moveV(1, "page");
                    },
                    goCharLeft: function (e) {
                        return e.moveH(-1, "char");
                    },
                    goCharRight: function (e) {
                        return e.moveH(1, "char");
                    },
                    goColumnLeft: function (e) {
                        return e.moveH(-1, "column");
                    },
                    goColumnRight: function (e) {
                        return e.moveH(1, "column");
                    },
                    goWordLeft: function (e) {
                        return e.moveH(-1, "word");
                    },
                    goGroupRight: function (e) {
                        return e.moveH(1, "group");
                    },
                    goGroupLeft: function (e) {
                        return e.moveH(-1, "group");
                    },
                    goWordRight: function (e) {
                        return e.moveH(1, "word");
                    },
                    delCharBefore: function (e) {
                        return e.deleteH(-1, "char");
                    },
                    delCharAfter: function (e) {
                        return e.deleteH(1, "char");
                    },
                    delWordBefore: function (e) {
                        return e.deleteH(-1, "word");
                    },
                    delWordAfter: function (e) {
                        return e.deleteH(1, "word");
                    },
                    delGroupBefore: function (e) {
                        return e.deleteH(-1, "group");
                    },
                    delGroupAfter: function (e) {
                        return e.deleteH(1, "group");
                    },
                    indentAuto: function (e) {
                        return e.indentSelection("smart");
                    },
                    indentMore: function (e) {
                        return e.indentSelection("add");
                    },
                    indentLess: function (e) {
                        return e.indentSelection("subtract");
                    },
                    insertTab: function (e) {
                        return e.replaceSelection("\t");
                    },
                    insertSoftTab: function (e) {
                        for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                            var o = n[i].from(),
                                l = R(e.getLine(o.line), o.ch, r);
                            t.push(G(r - (l % r)));
                        }
                        e.replaceSelections(t);
                    },
                    defaultTab: function (e) {
                        e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
                    },
                    transposeChars: function (e) {
                        return Zr(e, function () {
                            for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                                if (t[r].empty()) {
                                    var i = t[r].head,
                                        o = Ke(e.doc, i.line).text;
                                    if (o)
                                        if ((i.ch == o.length && (i = new Je(i.line, i.ch - 1)), i.ch > 0)) (i = new Je(i.line, i.ch + 1)), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), Je(i.line, i.ch - 2), i, "+transpose");
                                        else if (i.line > e.doc.first) {
                                            var l = Ke(e.doc, i.line - 1).text;
                                            l && ((i = new Je(i.line, 1)), e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + l.charAt(l.length - 1), Je(i.line - 1, l.length - 1), i, "+transpose"));
                                        }
                                    n.push(new ki(i, i));
                                }
                            e.setSelections(n);
                        });
                    },
                    newlineAndIndent: function (e) {
                        return Zr(e, function () {
                            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--) e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                            t = e.listSelections();
                            for (var r = 0; r < t.length; r++) e.indentLine(t[r].from().line, null, !0);
                            Or(e);
                        });
                    },
                    openLine: function (e) {
                        return e.replaceSelection("\n", "start");
                    },
                    toggleOverwrite: function (e) {
                        return e.toggleOverwrite();
                    },
                };
                function tl(e, t) {
                    var n = Ke(e.doc, t),
                        r = _t(n);
                    return r != n && (t = Qe(r)), Jo(!0, e, r, t, 1);
                }
                function nl(e, t) {
                    var n = tl(e, t.line),
                        r = Ke(e.doc, n.line),
                        i = se(r, e.doc.direction);
                    if (!i || 0 == i[0].level) {
                        var o = Math.max(n.ch, r.text.search(/\S/)),
                            l = t.line == n.line && t.ch <= o && t.ch;
                        return Je(n.line, l ? 0 : o, n.sticky);
                    }
                    return n;
                }
                function rl(e, t, n) {
                    if ("string" == typeof t && !(t = el[t])) return !1;
                    e.display.input.ensurePolled();
                    var r = e.display.shift,
                        i = !1;
                    try {
                        e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), (i = t(e) != B);
                    } finally {
                        (e.display.shift = r), (e.state.suppressEdits = !1);
                    }
                    return i;
                }
                var il = new W();
                function ol(e, t, n, r) {
                    var i = e.state.keySeq;
                    if (i) {
                        if ($o(t)) return "handled";
                        if (
                            (/\'$/.test(t)
                                ? (e.state.keySeq = null)
                                : il.set(50, function () {
                                      e.state.keySeq == i && ((e.state.keySeq = null), e.display.input.reset());
                                  }),
                            ll(e, i + " " + t, n, r))
                        )
                            return !0;
                    }
                    return ll(e, t, n, r);
                }
                function ll(e, t, n, r) {
                    var i = (function (e, t, n) {
                        for (var r = 0; r < e.state.keyMaps.length; r++) {
                            var i = Ko(t, e.state.keyMaps[r], n, e);
                            if (i) return i;
                        }
                        return (e.options.extraKeys && Ko(t, e.options.extraKeys, n, e)) || Ko(t, e.options.keyMap, n, e);
                    })(e, t, r);
                    return "multi" == i && (e.state.keySeq = t), "handled" == i && an(e, "keyHandled", e, t, n), ("handled" != i && "multi" != i) || (be(n), wr(e)), !!i;
                }
                function al(e, t) {
                    var n = qo(t, !0);
                    return (
                        !!n &&
                        (t.shiftKey && !e.state.keySeq
                            ? ol(e, "Shift-" + n, t, function (t) {
                                  return rl(e, t, !0);
                              }) ||
                              ol(e, n, t, function (t) {
                                  if ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) return rl(e, t);
                              })
                            : ol(e, n, t, function (t) {
                                  return rl(e, t);
                              }))
                    );
                }
                var ul = null;
                function sl(e) {
                    var t = this;
                    if ((!e.target || e.target == t.display.input.getField()) && ((t.curOp.focus = D()), !me(t, e))) {
                        l && a < 11 && 27 == e.keyCode && (e.returnValue = !1);
                        var r = e.keyCode;
                        t.display.shift = 16 == r || e.shiftKey;
                        var i = al(t, e);
                        f && ((ul = i ? r : null), i || 88 != r || De || !(y ? e.metaKey : e.ctrlKey) || t.replaceSelection("", null, "cut")),
                            n && !y && !i && 46 == r && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"),
                            18 != r ||
                                /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) ||
                                (function (e) {
                                    var t = e.display.lineDiv;
                                    function n(e) {
                                        (18 != e.keyCode && e.altKey) || (E(t, "CodeMirror-crosshair"), pe(document, "keyup", n), pe(document, "mouseover", n));
                                    }
                                    A(t, "CodeMirror-crosshair"), fe(document, "keyup", n), fe(document, "mouseover", n);
                                })(t);
                    }
                }
                function cl(e) {
                    16 == e.keyCode && (this.doc.sel.shift = !1), me(this, e);
                }
                function fl(e) {
                    var t = this;
                    if ((!e.target || e.target == t.display.input.getField()) && !(xn(t.display, e) || me(t, e) || (e.ctrlKey && !e.altKey) || (y && e.metaKey))) {
                        var n = e.keyCode,
                            r = e.charCode;
                        if (f && n == ul) return (ul = null), void be(e);
                        if (!f || (e.which && !(e.which < 10)) || !al(t, e)) {
                            var i = String.fromCharCode(null == r ? n : r);
                            "\b" != i &&
                                ((function (e, t, n) {
                                    return ol(e, "'" + n + "'", t, function (t) {
                                        return rl(e, t, !0);
                                    });
                                })(t, e, i) ||
                                    t.display.input.onKeyPress(e));
                        }
                    }
                }
                var dl,
                    pl,
                    hl = function (e, t, n) {
                        (this.time = e), (this.pos = t), (this.button = n);
                    };
                function ml(e) {
                    var t = this,
                        n = t.display;
                    if (!(me(t, e) || (n.activeTouch && n.input.supportsTouch())))
                        if ((n.input.ensurePolled(), (n.shift = e.shiftKey), xn(n, e)))
                            u ||
                                ((n.scroller.draggable = !1),
                                setTimeout(function () {
                                    return (n.scroller.draggable = !0);
                                }, 100));
                        else if (!yl(t, e)) {
                            var r = ur(t, e),
                                i = Se(e),
                                o = r
                                    ? (function (e, t) {
                                          var n = +new Date();
                                          return pl && pl.compare(n, e, t) ? ((dl = pl = null), "triple") : dl && dl.compare(n, e, t) ? ((pl = new hl(n, e, t)), (dl = null), "double") : ((dl = new hl(n, e, t)), (pl = null), "single");
                                      })(r, i)
                                    : "single";
                            window.focus(),
                                1 == i && t.state.selectingText && t.state.selectingText(e),
                                (r &&
                                    (function (e, t, n, r, i) {
                                        var o = "Click";
                                        return (
                                            "double" == r ? (o = "Double" + o) : "triple" == r && (o = "Triple" + o),
                                            ol(e, Go((o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o), i), i, function (t) {
                                                if (("string" == typeof t && (t = el[t]), !t)) return !1;
                                                var r = !1;
                                                try {
                                                    e.isReadOnly() && (e.state.suppressEdits = !0), (r = t(e, n) != B);
                                                } finally {
                                                    e.state.suppressEdits = !1;
                                                }
                                                return r;
                                            })
                                        );
                                    })(t, i, r, o, e)) ||
                                    (1 == i
                                        ? r
                                            ? (function (e, t, n, r) {
                                                  l ? setTimeout(I(xr, e), 0) : (e.curOp.focus = D());
                                                  var i,
                                                      o = (function (e, t, n) {
                                                          var r = e.getOption("configureMouse"),
                                                              i = r ? r(e, t, n) : {};
                                                          if (null == i.unit) {
                                                              var o = b ? n.shiftKey && n.metaKey : n.altKey;
                                                              i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line";
                                                          }
                                                          return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), null == i.addNew && (i.addNew = y ? n.metaKey : n.ctrlKey), null == i.moveOnDrag && (i.moveOnDrag = !(y ? n.altKey : n.ctrlKey)), i;
                                                      })(e, n, r),
                                                      s = e.doc.sel;
                                                  e.options.dragDrop && Le && !e.isReadOnly() && "single" == n && (i = s.contains(t)) > -1 && (et((i = s.ranges[i]).from(), t) < 0 || t.xRel > 0) && (et(i.to(), t) > 0 || t.xRel < 0)
                                                      ? (function (e, t, n, r) {
                                                            var i = e.display,
                                                                o = !1,
                                                                s = Jr(e, function (t) {
                                                                    u && (i.scroller.draggable = !1),
                                                                        (e.state.draggingText = !1),
                                                                        pe(i.wrapper.ownerDocument, "mouseup", s),
                                                                        pe(i.wrapper.ownerDocument, "mousemove", c),
                                                                        pe(i.scroller, "dragstart", f),
                                                                        pe(i.scroller, "drop", s),
                                                                        o ||
                                                                            (be(t),
                                                                            r.addNew || Gi(e.doc, n, null, null, r.extend),
                                                                            (u && !d) || (l && 9 == a)
                                                                                ? setTimeout(function () {
                                                                                      i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus();
                                                                                  }, 20)
                                                                                : i.input.focus());
                                                                }),
                                                                c = function (e) {
                                                                    o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10;
                                                                },
                                                                f = function () {
                                                                    return (o = !0);
                                                                };
                                                            u && (i.scroller.draggable = !0),
                                                                (e.state.draggingText = s),
                                                                (s.copy = !r.moveOnDrag),
                                                                i.scroller.dragDrop && i.scroller.dragDrop(),
                                                                fe(i.wrapper.ownerDocument, "mouseup", s),
                                                                fe(i.wrapper.ownerDocument, "mousemove", c),
                                                                fe(i.scroller, "dragstart", f),
                                                                fe(i.scroller, "drop", s),
                                                                kr(e),
                                                                setTimeout(function () {
                                                                    return i.input.focus();
                                                                }, 20);
                                                        })(e, r, t, o)
                                                      : (function (e, t, n, r) {
                                                            var i = e.display,
                                                                o = e.doc;
                                                            be(t);
                                                            var l,
                                                                a,
                                                                u = o.sel,
                                                                s = u.ranges;
                                                            if ((r.addNew && !r.extend ? ((a = o.sel.contains(n)), (l = a > -1 ? s[a] : new ki(n, n))) : ((l = o.sel.primary()), (a = o.sel.primIndex)), "rectangle" == r.unit)) r.addNew || (l = new ki(n, n)), (n = ur(e, t, !0, !0)), (a = -1);
                                                            else {
                                                                var c = gl(e, n, r.unit);
                                                                l = r.extend ? $i(l, c.anchor, c.head, r.extend) : c;
                                                            }
                                                            r.addNew ? (-1 == a ? ((a = s.length), Zi(o, Ci(e, s.concat([l]), a), { scroll: !1, origin: "*mouse" })) : s.length > 1 && s[a].empty() && "char" == r.unit && !r.extend ? (Zi(o, Ci(e, s.slice(0, a).concat(s.slice(a + 1)), 0), { scroll: !1, origin: "*mouse" }), (u = o.sel)) : Qi(o, a, l, j)) : ((a = 0), Zi(o, new xi([l], 0), j), (u = o.sel));
                                                            var f = n;
                                                            function d(t) {
                                                                if (0 != et(f, t))
                                                                    if (((f = t), "rectangle" == r.unit)) {
                                                                        for (var i = [], s = e.options.tabSize, c = R(Ke(o, n.line).text, n.ch, s), d = R(Ke(o, t.line).text, t.ch, s), p = Math.min(c, d), h = Math.max(c, d), m = Math.min(n.line, t.line), g = Math.min(e.lastLine(), Math.max(n.line, t.line)); m <= g; m++) {
                                                                            var v = Ke(o, m).text,
                                                                                y = K(v, p, s);
                                                                            p == h ? i.push(new ki(Je(m, y), Je(m, y))) : v.length > y && i.push(new ki(Je(m, y), Je(m, K(v, h, s))));
                                                                        }
                                                                        i.length || i.push(new ki(n, n)), Zi(o, Ci(e, u.ranges.slice(0, a).concat(i), a), { origin: "*mouse", scroll: !1 }), e.scrollIntoView(t);
                                                                    } else {
                                                                        var b,
                                                                            w = l,
                                                                            x = gl(e, t, r.unit),
                                                                            k = w.anchor;
                                                                        et(x.anchor, k) > 0 ? ((b = x.head), (k = it(w.from(), x.anchor))) : ((b = x.anchor), (k = rt(w.to(), x.head)));
                                                                        var C = u.ranges.slice(0);
                                                                        (C[a] = (function (e, t) {
                                                                            var n = t.anchor,
                                                                                r = t.head,
                                                                                i = Ke(e.doc, n.line);
                                                                            if (0 == et(n, r) && n.sticky == r.sticky) return t;
                                                                            var o = se(i);
                                                                            if (!o) return t;
                                                                            var l = ae(o, n.ch, n.sticky),
                                                                                a = o[l];
                                                                            if (a.from != n.ch && a.to != n.ch) return t;
                                                                            var u,
                                                                                s = l + ((a.from == n.ch) == (1 != a.level) ? 0 : 1);
                                                                            if (0 == s || s == o.length) return t;
                                                                            if (r.line != n.line) u = (r.line - n.line) * ("ltr" == e.doc.direction ? 1 : -1) > 0;
                                                                            else {
                                                                                var c = ae(o, r.ch, r.sticky),
                                                                                    f = c - l || (r.ch - n.ch) * (1 == a.level ? -1 : 1);
                                                                                u = c == s - 1 || c == s ? f < 0 : f > 0;
                                                                            }
                                                                            var d = o[s + (u ? -1 : 0)],
                                                                                p = u == (1 == d.level),
                                                                                h = p ? d.from : d.to,
                                                                                m = p ? "after" : "before";
                                                                            return n.ch == h && n.sticky == m ? t : new ki(new Je(n.line, h, m), r);
                                                                        })(e, new ki(lt(o, k), b))),
                                                                            Zi(o, Ci(e, C, a), j);
                                                                    }
                                                            }
                                                            var p = i.wrapper.getBoundingClientRect(),
                                                                h = 0;
                                                            function m(t) {
                                                                (e.state.selectingText = !1), (h = 1 / 0), t && (be(t), i.input.focus()), pe(i.wrapper.ownerDocument, "mousemove", g), pe(i.wrapper.ownerDocument, "mouseup", v), (o.history.lastSelOrigin = null);
                                                            }
                                                            var g = Jr(e, function (t) {
                                                                    0 !== t.buttons && Se(t)
                                                                        ? (function t(n) {
                                                                              var l = ++h,
                                                                                  a = ur(e, n, !0, "rectangle" == r.unit);
                                                                              if (a)
                                                                                  if (0 != et(a, f)) {
                                                                                      (e.curOp.focus = D()), d(a);
                                                                                      var u = Lr(i, o);
                                                                                      (a.line >= u.to || a.line < u.from) &&
                                                                                          setTimeout(
                                                                                              Jr(e, function () {
                                                                                                  h == l && t(n);
                                                                                              }),
                                                                                              150
                                                                                          );
                                                                                  } else {
                                                                                      var s = n.clientY < p.top ? -20 : n.clientY > p.bottom ? 20 : 0;
                                                                                      s &&
                                                                                          setTimeout(
                                                                                              Jr(e, function () {
                                                                                                  h == l && ((i.scroller.scrollTop += s), t(n));
                                                                                              }),
                                                                                              50
                                                                                          );
                                                                                  }
                                                                          })(t)
                                                                        : m(t);
                                                                }),
                                                                v = Jr(e, m);
                                                            (e.state.selectingText = v), fe(i.wrapper.ownerDocument, "mousemove", g), fe(i.wrapper.ownerDocument, "mouseup", v);
                                                        })(e, r, t, o);
                                              })(t, r, o, e)
                                            : Ce(e) == n.scroller && be(e)
                                        : 2 == i
                                        ? (r && Gi(t.doc, r),
                                          setTimeout(function () {
                                              return n.input.focus();
                                          }, 20))
                                        : 3 == i && (C ? t.display.input.onContextMenu(e) : kr(t)));
                        }
                }
                function gl(e, t, n) {
                    if ("char" == n) return new ki(t, t);
                    if ("word" == n) return e.findWordAt(t);
                    if ("line" == n) return new ki(Je(t.line, 0), lt(e.doc, Je(t.line + 1, 0)));
                    var r = n(e, t);
                    return new ki(r.from, r.to);
                }
                function vl(e, t, n, r) {
                    var i, o;
                    if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
                    else
                        try {
                            (i = t.clientX), (o = t.clientY);
                        } catch (c) {
                            return !1;
                        }
                    if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
                    r && be(t);
                    var l = e.display,
                        a = l.lineDiv.getBoundingClientRect();
                    if (o > a.bottom || !ve(e, n)) return xe(t);
                    o -= a.top - l.viewOffset;
                    for (var u = 0; u < e.display.gutterSpecs.length; ++u) {
                        var s = l.gutters.childNodes[u];
                        if (s && s.getBoundingClientRect().right >= i) return he(e, n, e, Xe(e.doc, o), e.display.gutterSpecs[u].className, t), xe(t);
                    }
                }
                function yl(e, t) {
                    return vl(e, t, "gutterClick", !0);
                }
                function bl(e, t) {
                    xn(e.display, t) ||
                        (function (e, t) {
                            return !!ve(e, "gutterContextMenu") && vl(e, t, "gutterContextMenu", !1);
                        })(e, t) ||
                        me(e, t, "contextmenu") ||
                        C ||
                        e.display.input.onContextMenu(t);
                }
                function wl(e) {
                    (e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-")), Wn(e);
                }
                hl.prototype.compare = function (e, t, n) {
                    return this.time + 400 > e && 0 == et(t, this.pos) && n == this.button;
                };
                var xl = {
                        toString: function () {
                            return "CodeMirror.Init";
                        },
                    },
                    kl = {},
                    Cl = {};
                function Sl(e, t, n) {
                    if (!t != !(n && n != xl)) {
                        var r = e.display.dragFunctions,
                            i = t ? fe : pe;
                        i(e.display.scroller, "dragstart", r.start), i(e.display.scroller, "dragenter", r.enter), i(e.display.scroller, "dragover", r.over), i(e.display.scroller, "dragleave", r.leave), i(e.display.scroller, "drop", r.drop);
                    }
                }
                function Tl(e) {
                    e.options.lineWrapping ? (A(e.display.wrapper, "CodeMirror-wrap"), (e.display.sizer.style.minWidth = ""), (e.display.sizerWidth = null)) : (E(e.display.wrapper, "CodeMirror-wrap"), Vt(e)),
                        ar(e),
                        cr(e),
                        Wn(e),
                        setTimeout(function () {
                            return Hr(e);
                        }, 100);
                }
                function El(e, t) {
                    var n = this;
                    if (!(this instanceof El)) return new El(e, t);
                    (this.options = t = t ? _(t) : {}), _(kl, t, !1);
                    var r = t.value;
                    "string" == typeof r ? (r = new Oo(r, t.mode, null, t.lineSeparator, t.direction)) : t.mode && (r.modeOption = t.mode), (this.doc = r);
                    var i = new El.inputStyles[t.inputStyle](this),
                        o = (this.display = new mi(e, r, i, t));
                    for (var s in ((o.wrapper.CodeMirror = this),
                    wl(this),
                    t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
                    jr(this),
                    (this.state = { keyMaps: [], overlays: [], modeGen: 0, overwrite: !1, delayingBlurEvent: !1, focused: !1, suppressEdits: !1, pasteIncoming: -1, cutIncoming: -1, selectingText: !1, draggingText: !1, highlight: new W(), keySeq: null, specialChars: null }),
                    t.autofocus && !v && o.input.focus(),
                    l &&
                        a < 11 &&
                        setTimeout(function () {
                            return n.display.input.reset(!0);
                        }, 20),
                    (function (e) {
                        var t = e.display;
                        fe(t.scroller, "mousedown", Jr(e, ml)),
                            fe(
                                t.scroller,
                                "dblclick",
                                l && a < 11
                                    ? Jr(e, function (t) {
                                          if (!me(e, t)) {
                                              var n = ur(e, t);
                                              if (n && !yl(e, t) && !xn(e.display, t)) {
                                                  be(t);
                                                  var r = e.findWordAt(n);
                                                  Gi(e.doc, r.anchor, r.head);
                                              }
                                          }
                                      })
                                    : function (t) {
                                          return me(e, t) || be(t);
                                      }
                            ),
                            fe(t.scroller, "contextmenu", function (t) {
                                return bl(e, t);
                            }),
                            fe(t.input.getField(), "contextmenu", function (n) {
                                t.scroller.contains(n.target) || bl(e, n);
                            });
                        var n,
                            r = { end: 0 };
                        function i() {
                            t.activeTouch &&
                                ((n = setTimeout(function () {
                                    return (t.activeTouch = null);
                                }, 1e3)),
                                ((r = t.activeTouch).end = +new Date()));
                        }
                        function o(e, t) {
                            if (null == t.left) return !0;
                            var n = t.left - e.left,
                                r = t.top - e.top;
                            return n * n + r * r > 400;
                        }
                        fe(t.scroller, "touchstart", function (i) {
                            if (
                                !me(e, i) &&
                                !(function (e) {
                                    if (1 != e.touches.length) return !1;
                                    var t = e.touches[0];
                                    return t.radiusX <= 1 && t.radiusY <= 1;
                                })(i) &&
                                !yl(e, i)
                            ) {
                                t.input.ensurePolled(), clearTimeout(n);
                                var o = +new Date();
                                (t.activeTouch = { start: o, moved: !1, prev: o - r.end <= 300 ? r : null }), 1 == i.touches.length && ((t.activeTouch.left = i.touches[0].pageX), (t.activeTouch.top = i.touches[0].pageY));
                            }
                        }),
                            fe(t.scroller, "touchmove", function () {
                                t.activeTouch && (t.activeTouch.moved = !0);
                            }),
                            fe(t.scroller, "touchend", function (n) {
                                var r = t.activeTouch;
                                if (r && !xn(t, n) && null != r.left && !r.moved && new Date() - r.start < 300) {
                                    var l,
                                        a = e.coordsChar(t.activeTouch, "page");
                                    (l = !r.prev || o(r, r.prev) ? new ki(a, a) : !r.prev.prev || o(r, r.prev.prev) ? e.findWordAt(a) : new ki(Je(a.line, 0), lt(e.doc, Je(a.line + 1, 0)))), e.setSelection(l.anchor, l.head), e.focus(), be(n);
                                }
                                i();
                            }),
                            fe(t.scroller, "touchcancel", i),
                            fe(t.scroller, "scroll", function () {
                                t.scroller.clientHeight && (zr(e, t.scroller.scrollTop), Ir(e, t.scroller.scrollLeft, !0), he(e, "scroll", e));
                            }),
                            fe(t.scroller, "mousewheel", function (t) {
                                return wi(e, t);
                            }),
                            fe(t.scroller, "DOMMouseScroll", function (t) {
                                return wi(e, t);
                            }),
                            fe(t.wrapper, "scroll", function () {
                                return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
                            }),
                            (t.dragFunctions = {
                                enter: function (t) {
                                    me(e, t) || ke(t);
                                },
                                over: function (t) {
                                    me(e, t) ||
                                        ((function (e, t) {
                                            var n = ur(e, t);
                                            if (n) {
                                                var r = document.createDocumentFragment();
                                                vr(e, n, r), e.display.dragCursor || ((e.display.dragCursor = N("div", null, "CodeMirror-cursors CodeMirror-dragcursors")), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), M(e.display.dragCursor, r);
                                            }
                                        })(e, t),
                                        ke(t));
                                },
                                start: function (t) {
                                    return (function (e, t) {
                                        if (l && (!e.state.draggingText || +new Date() - Po < 100)) ke(t);
                                        else if (!me(e, t) && !xn(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), (t.dataTransfer.effectAllowed = "copyMove"), t.dataTransfer.setDragImage && !d)) {
                                            var n = N("img", null, null, "position: fixed; left: 0; top: 0;");
                                            (n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), f && ((n.width = n.height = 1), e.display.wrapper.appendChild(n), (n._top = n.offsetTop)), t.dataTransfer.setDragImage(n, 0, 0), f && n.parentNode.removeChild(n);
                                        }
                                    })(e, t);
                                },
                                drop: Jr(e, Do),
                                leave: function (t) {
                                    me(e, t) || Ao(e);
                                },
                            });
                        var u = t.input.getField();
                        fe(u, "keyup", function (t) {
                            return cl.call(e, t);
                        }),
                            fe(u, "keydown", Jr(e, sl)),
                            fe(u, "keypress", Jr(e, fl)),
                            fe(u, "focus", function (t) {
                                return Cr(e, t);
                            }),
                            fe(u, "blur", function (t) {
                                return Sr(e, t);
                            });
                    })(this),
                    Io(),
                    Kr(this),
                    (this.curOp.forceUpdate = !0),
                    zi(this, r),
                    (t.autofocus && !v) || this.hasFocus() ? setTimeout(I(Cr, this), 20) : Sr(this),
                    Cl))
                        Cl.hasOwnProperty(s) && Cl[s](this, t[s], xl);
                    fi(this), t.finishInit && t.finishInit(this);
                    for (var c = 0; c < Ll.length; ++c) Ll[c](this);
                    $r(this), u && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto");
                }
                (El.defaults = kl), (El.optionHandlers = Cl);
                var Ll = [];
                function Ml(e, t, n, r) {
                    var i,
                        o = e.doc;
                    null == n && (n = "add"), "smart" == n && (o.mode.indent ? (i = dt(e, t).state) : (n = "prev"));
                    var l = e.options.tabSize,
                        a = Ke(o, t),
                        u = R(a.text, null, l);
                    a.stateAfter && (a.stateAfter = null);
                    var s,
                        c = a.text.match(/^\s*/)[0];
                    if (r || /\S/.test(a.text)) {
                        if ("smart" == n && ((s = o.mode.indent(i, a.text.slice(c.length), a.text)) == B || s > 150)) {
                            if (!r) return;
                            n = "prev";
                        }
                    } else (s = 0), (n = "not");
                    "prev" == n ? (s = t > o.first ? R(Ke(o, t - 1).text, null, l) : 0) : "add" == n ? (s = u + e.options.indentUnit) : "subtract" == n ? (s = u - e.options.indentUnit) : "number" == typeof n && (s = u + n), (s = Math.max(0, s));
                    var f = "",
                        d = 0;
                    if (e.options.indentWithTabs) for (var p = Math.floor(s / l); p; --p) (d += l), (f += "\t");
                    if ((d < s && (f += G(s - d)), f != c)) return ho(o, f, Je(t, 0), Je(t, c.length), "+input"), (a.stateAfter = null), !0;
                    for (var h = 0; h < o.sel.ranges.length; h++) {
                        var m = o.sel.ranges[h];
                        if (m.head.line == t && m.head.ch < c.length) {
                            var g = Je(t, c.length);
                            Qi(o, h, new ki(g, g));
                            break;
                        }
                    }
                }
                El.defineInitHook = function (e) {
                    return Ll.push(e);
                };
                var Nl = null;
                function Ol(e) {
                    Nl = e;
                }
                function Pl(e, t, n, r, i) {
                    var o = e.doc;
                    (e.display.shift = !1), r || (r = o.sel);
                    var l = +new Date() - 200,
                        a = "paste" == i || e.state.pasteIncoming > l,
                        u = Oe(t),
                        s = null;
                    if (a && r.ranges.length > 1)
                        if (Nl && Nl.text.join("\n") == t) {
                            if (r.ranges.length % Nl.text.length == 0) {
                                s = [];
                                for (var c = 0; c < Nl.text.length; c++) s.push(o.splitLines(Nl.text[c]));
                            }
                        } else
                            u.length == r.ranges.length &&
                                e.options.pasteLinesPerSelection &&
                                (s = Q(u, function (e) {
                                    return [e];
                                }));
                    for (var f = e.curOp.updateInput, d = r.ranges.length - 1; d >= 0; d--) {
                        var p = r.ranges[d],
                            h = p.from(),
                            m = p.to();
                        p.empty() && (n && n > 0 ? (h = Je(h.line, h.ch - n)) : e.state.overwrite && !a ? (m = Je(m.line, Math.min(Ke(o, m.line).text.length, m.ch + q(u).length))) : a && Nl && Nl.lineWise && Nl.text.join("\n") == u.join("\n") && (h = m = Je(h.line, 0)));
                        var g = { from: h, to: m, text: s ? s[d % s.length] : u, origin: i || (a ? "paste" : e.state.cutIncoming > l ? "cut" : "+input") };
                        uo(e.doc, g), an(e, "inputRead", e, g);
                    }
                    t && !a && Al(e, t), Or(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = f), (e.curOp.typing = !0), (e.state.pasteIncoming = e.state.cutIncoming = -1);
                }
                function Dl(e, t) {
                    var n = e.clipboardData && e.clipboardData.getData("Text");
                    if (n)
                        return (
                            e.preventDefault(),
                            t.isReadOnly() ||
                                t.options.disableInput ||
                                Zr(t, function () {
                                    return Pl(t, n, 0, null, "paste");
                                }),
                            !0
                        );
                }
                function Al(e, t) {
                    if (e.options.electricChars && e.options.smartIndent)
                        for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                            var i = n.ranges[r];
                            if (!(i.head.ch > 100 || (r && n.ranges[r - 1].head.line == i.head.line))) {
                                var o = e.getModeAt(i.head),
                                    l = !1;
                                if (o.electricChars) {
                                    for (var a = 0; a < o.electricChars.length; a++)
                                        if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                                            l = Ml(e, i.head.line, "smart");
                                            break;
                                        }
                                } else o.electricInput && o.electricInput.test(Ke(e.doc, i.head.line).text.slice(0, i.head.ch)) && (l = Ml(e, i.head.line, "smart"));
                                l && an(e, "electricInput", e, i.head.line);
                            }
                        }
                }
                function zl(e) {
                    for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
                        var i = e.doc.sel.ranges[r].head.line,
                            o = { anchor: Je(i, 0), head: Je(i + 1, 0) };
                        n.push(o), t.push(e.getRange(o.anchor, o.head));
                    }
                    return { text: t, ranges: n };
                }
                function Fl(e, t, n, r) {
                    e.setAttribute("autocorrect", n ? "" : "off"), e.setAttribute("autocapitalize", r ? "" : "off"), e.setAttribute("spellcheck", !!t);
                }
                function Il() {
                    var e = N("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),
                        t = N("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                    return u ? (e.style.width = "1000px") : e.setAttribute("wrap", "off"), m && (e.style.border = "1px solid black"), Fl(e), t;
                }
                function _l(e, t, n, r, i) {
                    var o = t,
                        l = n,
                        a = Ke(e, t.line),
                        u = i && "rtl" == e.direction ? -n : n;
                    function s(r) {
                        var o;
                        if (
                            null ==
                            (o = i
                                ? (function (e, t, n, r) {
                                      var i = se(t, e.doc.direction);
                                      if (!i) return Zo(t, n, r);
                                      n.ch >= t.text.length ? ((n.ch = t.text.length), (n.sticky = "before")) : n.ch <= 0 && ((n.ch = 0), (n.sticky = "after"));
                                      var o = ae(i, n.ch, n.sticky),
                                          l = i[o];
                                      if ("ltr" == e.doc.direction && l.level % 2 == 0 && (r > 0 ? l.to > n.ch : l.from < n.ch)) return Zo(t, n, r);
                                      var a,
                                          u = function (e, n) {
                                              return Yo(t, e instanceof Je ? e.ch : e, n);
                                          },
                                          s = function (n) {
                                              return e.options.lineWrapping ? ((a = a || Pn(e, t)), Yn(e, t, a, n)) : { begin: 0, end: t.text.length };
                                          },
                                          c = s("before" == n.sticky ? u(n, -1) : n.ch);
                                      if ("rtl" == e.doc.direction || 1 == l.level) {
                                          var f = (1 == l.level) == r < 0,
                                              d = u(n, f ? 1 : -1);
                                          if (null != d && (f ? d <= l.to && d <= c.end : d >= l.from && d >= c.begin)) {
                                              var p = f ? "before" : "after";
                                              return new Je(n.line, d, p);
                                          }
                                      }
                                      var h = function (e, t, r) {
                                              for (
                                                  var o = function (e, t) {
                                                      return t ? new Je(n.line, u(e, 1), "before") : new Je(n.line, e, "after");
                                                  };
                                                  e >= 0 && e < i.length;
                                                  e += t
                                              ) {
                                                  var l = i[e],
                                                      a = t > 0 == (1 != l.level),
                                                      s = a ? r.begin : u(r.end, -1);
                                                  if (l.from <= s && s < l.to) return o(s, a);
                                                  if (((s = a ? l.from : u(l.to, -1)), r.begin <= s && s < r.end)) return o(s, a);
                                              }
                                          },
                                          m = h(o + r, r, c);
                                      if (m) return m;
                                      var g = r > 0 ? c.end : u(c.begin, -1);
                                      return null == g || (r > 0 && g == t.text.length) || !(m = h(r > 0 ? 0 : i.length - 1, r, s(g))) ? null : m;
                                  })(e.cm, a, t, n)
                                : Zo(a, t, n))
                        ) {
                            if (
                                r ||
                                !(function () {
                                    var n = t.line + u;
                                    return !(n < e.first || n >= e.first + e.size) && ((t = new Je(n, t.ch, t.sticky)), (a = Ke(e, n)));
                                })()
                            )
                                return !1;
                            t = Jo(i, e.cm, a, t.line, u);
                        } else t = o;
                        return !0;
                    }
                    if ("char" == r) s();
                    else if ("column" == r) s(!0);
                    else if ("word" == r || "group" == r)
                        for (var c = null, f = "group" == r, d = e.cm && e.cm.getHelper(t, "wordChars"), p = !0; !(n < 0) || s(!p); p = !1) {
                            var h = a.text.charAt(t.ch) || "\n",
                                m = ee(h, d) ? "w" : f && "\n" == h ? "n" : !f || /\s/.test(h) ? null : "p";
                            if ((!f || p || m || (m = "s"), c && c != m)) {
                                n < 0 && ((n = 1), s(), (t.sticky = "after"));
                                break;
                            }
                            if ((m && (c = m), n > 0 && !s(!p))) break;
                        }
                    var g = io(e, t, o, l, !0);
                    return tt(o, g) && (g.hitSide = !0), g;
                }
                function Rl(e, t, n, r) {
                    var i,
                        o,
                        l = e.doc,
                        a = t.left;
                    if ("page" == r) {
                        var u = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight),
                            s = Math.max(u - 0.5 * nr(e.display), 3);
                        i = (n > 0 ? t.bottom : t.top) + n * s;
                    } else "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
                    for (; (o = Qn(e, a, i)).outside; ) {
                        if (n < 0 ? i <= 0 : i >= l.height) {
                            o.hitSide = !0;
                            break;
                        }
                        i += 5 * n;
                    }
                    return o;
                }
                var Wl = function (e) {
                    (this.cm = e), (this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null), (this.polling = new W()), (this.composing = null), (this.gracePeriod = !1), (this.readDOMTimeout = null);
                };
                function Hl(e, t) {
                    var n = On(e, t.line);
                    if (!n || n.hidden) return null;
                    var r = Ke(e.doc, t.line),
                        i = Mn(n, r, t.line),
                        o = se(r, e.doc.direction),
                        l = "left";
                    o && (l = ae(o, t.ch) % 2 ? "right" : "left");
                    var a = Fn(i.map, t.ch, l);
                    return (a.offset = "right" == a.collapse ? a.end : a.start), a;
                }
                function Bl(e, t) {
                    return t && (e.bad = !0), e;
                }
                function Ul(e, t, n) {
                    var r;
                    if (t == e.display.lineDiv) {
                        if (!(r = e.display.lineDiv.childNodes[n])) return Bl(e.clipPos(Je(e.display.viewTo - 1)), !0);
                        (t = null), (n = 0);
                    } else
                        for (r = t; ; r = r.parentNode) {
                            if (!r || r == e.display.lineDiv) return null;
                            if (r.parentNode && r.parentNode == e.display.lineDiv) break;
                        }
                    for (var i = 0; i < e.display.view.length; i++) {
                        var o = e.display.view[i];
                        if (o.node == r) return jl(o, t, n);
                    }
                }
                function jl(e, t, n) {
                    var r = e.text.firstChild,
                        i = !1;
                    if (!t || !P(r, t)) return Bl(Je(Qe(e.line), 0), !0);
                    if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
                        var o = e.rest ? q(e.rest) : e.line;
                        return Bl(Je(Qe(o), o.text.length), i);
                    }
                    var l = 3 == t.nodeType ? t : null,
                        a = t;
                    for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || ((l = t.firstChild), n && (n = l.nodeValue.length)); a.parentNode != r; ) a = a.parentNode;
                    var u = e.measure,
                        s = u.maps;
                    function c(t, n, r) {
                        for (var i = -1; i < (s ? s.length : 0); i++)
                            for (var o = i < 0 ? u.map : s[i], l = 0; l < o.length; l += 3) {
                                var a = o[l + 2];
                                if (a == t || a == n) {
                                    var c = Qe(i < 0 ? e.line : e.rest[i]),
                                        f = o[l] + r;
                                    return (r < 0 || a != t) && (f = o[l + (r ? 1 : 0)]), Je(c, f);
                                }
                            }
                    }
                    var f = c(l, a, n);
                    if (f) return Bl(f, i);
                    for (var d = a.nextSibling, p = l ? l.nodeValue.length - n : 0; d; d = d.nextSibling) {
                        if ((f = c(d, d.firstChild, 0))) return Bl(Je(f.line, f.ch - p), i);
                        p += d.textContent.length;
                    }
                    for (var h = a.previousSibling, m = n; h; h = h.previousSibling) {
                        if ((f = c(h, h.firstChild, -1))) return Bl(Je(f.line, f.ch + m), i);
                        m += h.textContent.length;
                    }
                }
                (Wl.prototype.init = function (e) {
                    var t = this,
                        n = this,
                        r = n.cm,
                        i = (n.div = e.lineDiv);
                    function o(e) {
                        for (var t = e.target; t; t = t.parentNode) {
                            if (t == i) return !0;
                            if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) break;
                        }
                        return !1;
                    }
                    function l(e) {
                        if (o(e) && !me(r, e)) {
                            if (r.somethingSelected()) Ol({ lineWise: !1, text: r.getSelections() }), "cut" == e.type && r.replaceSelection("", null, "cut");
                            else {
                                if (!r.options.lineWiseCopyCut) return;
                                var t = zl(r);
                                Ol({ lineWise: !0, text: t.text }),
                                    "cut" == e.type &&
                                        r.operation(function () {
                                            r.setSelections(t.ranges, 0, U), r.replaceSelection("", null, "cut");
                                        });
                            }
                            if (e.clipboardData) {
                                e.clipboardData.clearData();
                                var l = Nl.text.join("\n");
                                if ((e.clipboardData.setData("Text", l), e.clipboardData.getData("Text") == l)) return void e.preventDefault();
                            }
                            var a = Il(),
                                u = a.firstChild;
                            r.display.lineSpace.insertBefore(a, r.display.lineSpace.firstChild), (u.value = Nl.text.join("\n"));
                            var s = document.activeElement;
                            F(u),
                                setTimeout(function () {
                                    r.display.lineSpace.removeChild(a), s.focus(), s == i && n.showPrimarySelection();
                                }, 50);
                        }
                    }
                    Fl(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize),
                        fe(i, "paste", function (e) {
                            !o(e) ||
                                me(r, e) ||
                                Dl(e, r) ||
                                (a <= 11 &&
                                    setTimeout(
                                        Jr(r, function () {
                                            return t.updateFromDOM();
                                        }),
                                        20
                                    ));
                        }),
                        fe(i, "compositionstart", function (e) {
                            t.composing = { data: e.data, done: !1 };
                        }),
                        fe(i, "compositionupdate", function (e) {
                            t.composing || (t.composing = { data: e.data, done: !1 });
                        }),
                        fe(i, "compositionend", function (e) {
                            t.composing && (e.data != t.composing.data && t.readFromDOMSoon(), (t.composing.done = !0));
                        }),
                        fe(i, "touchstart", function () {
                            return n.forceCompositionEnd();
                        }),
                        fe(i, "input", function () {
                            t.composing || t.readFromDOMSoon();
                        }),
                        fe(i, "copy", l),
                        fe(i, "cut", l);
                }),
                    (Wl.prototype.screenReaderLabelChanged = function (e) {
                        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
                    }),
                    (Wl.prototype.prepareSelection = function () {
                        var e = gr(this.cm, !1);
                        return (e.focus = document.activeElement == this.div), e;
                    }),
                    (Wl.prototype.showSelection = function (e, t) {
                        e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
                    }),
                    (Wl.prototype.getSelection = function () {
                        return this.cm.display.wrapper.ownerDocument.getSelection();
                    }),
                    (Wl.prototype.showPrimarySelection = function () {
                        var e = this.getSelection(),
                            t = this.cm,
                            r = t.doc.sel.primary(),
                            i = r.from(),
                            o = r.to();
                        if (t.display.viewTo == t.display.viewFrom || i.line >= t.display.viewTo || o.line < t.display.viewFrom) e.removeAllRanges();
                        else {
                            var l = Ul(t, e.anchorNode, e.anchorOffset),
                                a = Ul(t, e.focusNode, e.focusOffset);
                            if (!l || l.bad || !a || a.bad || 0 != et(it(l, a), i) || 0 != et(rt(l, a), o)) {
                                var u = t.display.view,
                                    s = (i.line >= t.display.viewFrom && Hl(t, i)) || { node: u[0].measure.map[2], offset: 0 },
                                    c = o.line < t.display.viewTo && Hl(t, o);
                                if (!c) {
                                    var f = u[u.length - 1].measure,
                                        d = f.maps ? f.maps[f.maps.length - 1] : f.map;
                                    c = { node: d[d.length - 1], offset: d[d.length - 2] - d[d.length - 3] };
                                }
                                if (s && c) {
                                    var p,
                                        h = e.rangeCount && e.getRangeAt(0);
                                    try {
                                        p = T(s.node, s.offset, c.offset, c.node);
                                    } catch (m) {}
                                    p && (!n && t.state.focused ? (e.collapse(s.node, s.offset), p.collapsed || (e.removeAllRanges(), e.addRange(p))) : (e.removeAllRanges(), e.addRange(p)), h && null == e.anchorNode ? e.addRange(h) : n && this.startGracePeriod()), this.rememberSelection();
                                } else e.removeAllRanges();
                            }
                        }
                    }),
                    (Wl.prototype.startGracePeriod = function () {
                        var e = this;
                        clearTimeout(this.gracePeriod),
                            (this.gracePeriod = setTimeout(function () {
                                (e.gracePeriod = !1),
                                    e.selectionChanged() &&
                                        e.cm.operation(function () {
                                            return (e.cm.curOp.selectionChanged = !0);
                                        });
                            }, 20));
                    }),
                    (Wl.prototype.showMultipleSelections = function (e) {
                        M(this.cm.display.cursorDiv, e.cursors), M(this.cm.display.selectionDiv, e.selection);
                    }),
                    (Wl.prototype.rememberSelection = function () {
                        var e = this.getSelection();
                        (this.lastAnchorNode = e.anchorNode), (this.lastAnchorOffset = e.anchorOffset), (this.lastFocusNode = e.focusNode), (this.lastFocusOffset = e.focusOffset);
                    }),
                    (Wl.prototype.selectionInEditor = function () {
                        var e = this.getSelection();
                        if (!e.rangeCount) return !1;
                        var t = e.getRangeAt(0).commonAncestorContainer;
                        return P(this.div, t);
                    }),
                    (Wl.prototype.focus = function () {
                        "nocursor" != this.cm.options.readOnly && ((this.selectionInEditor() && document.activeElement == this.div) || this.showSelection(this.prepareSelection(), !0), this.div.focus());
                    }),
                    (Wl.prototype.blur = function () {
                        this.div.blur();
                    }),
                    (Wl.prototype.getField = function () {
                        return this.div;
                    }),
                    (Wl.prototype.supportsTouch = function () {
                        return !0;
                    }),
                    (Wl.prototype.receivedFocus = function () {
                        var e = this;
                        this.selectionInEditor()
                            ? this.pollSelection()
                            : Zr(this.cm, function () {
                                  return (e.cm.curOp.selectionChanged = !0);
                              }),
                            this.polling.set(this.cm.options.pollInterval, function t() {
                                e.cm.state.focused && (e.pollSelection(), e.polling.set(e.cm.options.pollInterval, t));
                            });
                    }),
                    (Wl.prototype.selectionChanged = function () {
                        var e = this.getSelection();
                        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
                    }),
                    (Wl.prototype.pollSelection = function () {
                        if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                            var e = this.getSelection(),
                                t = this.cm;
                            if (
                                g &&
                                c &&
                                this.cm.display.gutterSpecs.length &&
                                (function (e) {
                                    for (var t = e; t; t = t.parentNode) if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
                                    return !1;
                                })(e.anchorNode)
                            )
                                return this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus();
                            if (!this.composing) {
                                this.rememberSelection();
                                var n = Ul(t, e.anchorNode, e.anchorOffset),
                                    r = Ul(t, e.focusNode, e.focusOffset);
                                n &&
                                    r &&
                                    Zr(t, function () {
                                        Zi(t.doc, Si(n, r), U), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
                                    });
                            }
                        }
                    }),
                    (Wl.prototype.pollContent = function () {
                        null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
                        var e,
                            t,
                            n,
                            r = this.cm,
                            i = r.display,
                            o = r.doc.sel.primary(),
                            l = o.from(),
                            a = o.to();
                        if ((0 == l.ch && l.line > r.firstLine() && (l = Je(l.line - 1, Ke(r.doc, l.line - 1).length)), a.ch == Ke(r.doc, a.line).text.length && a.line < r.lastLine() && (a = Je(a.line + 1, 0)), l.line < i.viewFrom || a.line > i.viewTo - 1)) return !1;
                        l.line == i.viewFrom || 0 == (e = sr(r, l.line)) ? ((t = Qe(i.view[0].line)), (n = i.view[0].node)) : ((t = Qe(i.view[e].line)), (n = i.view[e - 1].node.nextSibling));
                        var u,
                            s,
                            c = sr(r, a.line);
                        if ((c == i.view.length - 1 ? ((u = i.viewTo - 1), (s = i.lineDiv.lastChild)) : ((u = Qe(i.view[c + 1].line) - 1), (s = i.view[c + 1].node.previousSibling)), !n)) return !1;
                        for (
                            var f = r.doc.splitLines(
                                    (function (e, t, n, r, i) {
                                        var o = "",
                                            l = !1,
                                            a = e.doc.lineSeparator(),
                                            u = !1;
                                        function s() {
                                            l && ((o += a), u && (o += a), (l = u = !1));
                                        }
                                        function c(e) {
                                            e && (s(), (o += e));
                                        }
                                        function f(t) {
                                            if (1 == t.nodeType) {
                                                var n = t.getAttribute("cm-text");
                                                if (n) return void c(n);
                                                var o,
                                                    d = t.getAttribute("cm-marker");
                                                if (d) {
                                                    var p = e.findMarks(
                                                        Je(r, 0),
                                                        Je(i + 1, 0),
                                                        ((g = +d),
                                                        function (e) {
                                                            return e.id == g;
                                                        })
                                                    );
                                                    return void (p.length && (o = p[0].find(0)) && c($e(e.doc, o.from, o.to).join(a)));
                                                }
                                                if ("false" == t.getAttribute("contenteditable")) return;
                                                var h = /^(pre|div|p|li|table|br)$/i.test(t.nodeName);
                                                if (!/^br$/i.test(t.nodeName) && 0 == t.textContent.length) return;
                                                h && s();
                                                for (var m = 0; m < t.childNodes.length; m++) f(t.childNodes[m]);
                                                /^(pre|p)$/i.test(t.nodeName) && (u = !0), h && (l = !0);
                                            } else 3 == t.nodeType && c(t.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                                            var g;
                                        }
                                        for (; f(t), t != n; ) (t = t.nextSibling), (u = !1);
                                        return o;
                                    })(r, n, s, t, u)
                                ),
                                d = $e(r.doc, Je(t, 0), Je(u, Ke(r.doc, u).text.length));
                            f.length > 1 && d.length > 1;

                        )
                            if (q(f) == q(d)) f.pop(), d.pop(), u--;
                            else {
                                if (f[0] != d[0]) break;
                                f.shift(), d.shift(), t++;
                            }
                        for (var p = 0, h = 0, m = f[0], g = d[0], v = Math.min(m.length, g.length); p < v && m.charCodeAt(p) == g.charCodeAt(p); ) ++p;
                        for (var y = q(f), b = q(d), w = Math.min(y.length - (1 == f.length ? p : 0), b.length - (1 == d.length ? p : 0)); h < w && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1); ) ++h;
                        if (1 == f.length && 1 == d.length && t == l.line) for (; p && p > l.ch && y.charCodeAt(y.length - h - 1) == b.charCodeAt(b.length - h - 1); ) p--, h++;
                        (f[f.length - 1] = y.slice(0, y.length - h).replace(/^\u200b+/, "")), (f[0] = f[0].slice(p).replace(/\u200b+$/, ""));
                        var x = Je(t, p),
                            k = Je(u, d.length ? q(d).length - h : 0);
                        return f.length > 1 || f[0] || et(x, k) ? (ho(r.doc, f, x, k, "+input"), !0) : void 0;
                    }),
                    (Wl.prototype.ensurePolled = function () {
                        this.forceCompositionEnd();
                    }),
                    (Wl.prototype.reset = function () {
                        this.forceCompositionEnd();
                    }),
                    (Wl.prototype.forceCompositionEnd = function () {
                        this.composing && (clearTimeout(this.readDOMTimeout), (this.composing = null), this.updateFromDOM(), this.div.blur(), this.div.focus());
                    }),
                    (Wl.prototype.readFromDOMSoon = function () {
                        var e = this;
                        null == this.readDOMTimeout &&
                            (this.readDOMTimeout = setTimeout(function () {
                                if (((e.readDOMTimeout = null), e.composing)) {
                                    if (!e.composing.done) return;
                                    e.composing = null;
                                }
                                e.updateFromDOM();
                            }, 80));
                    }),
                    (Wl.prototype.updateFromDOM = function () {
                        var e = this;
                        (!this.cm.isReadOnly() && this.pollContent()) ||
                            Zr(this.cm, function () {
                                return cr(e.cm);
                            });
                    }),
                    (Wl.prototype.setUneditable = function (e) {
                        e.contentEditable = "false";
                    }),
                    (Wl.prototype.onKeyPress = function (e) {
                        0 == e.charCode || this.composing || (e.preventDefault(), this.cm.isReadOnly() || Jr(this.cm, Pl)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0));
                    }),
                    (Wl.prototype.readOnlyChanged = function (e) {
                        this.div.contentEditable = String("nocursor" != e);
                    }),
                    (Wl.prototype.onContextMenu = function () {}),
                    (Wl.prototype.resetPosition = function () {}),
                    (Wl.prototype.needsContentAttribute = !0);
                var Vl = function (e) {
                    (this.cm = e), (this.prevInput = ""), (this.pollingFast = !1), (this.polling = new W()), (this.hasSelection = !1), (this.composing = null);
                };
                (Vl.prototype.init = function (e) {
                    var t = this,
                        n = this,
                        r = this.cm;
                    this.createField(e);
                    var i = this.textarea;
                    function o(e) {
                        if (!me(r, e)) {
                            if (r.somethingSelected()) Ol({ lineWise: !1, text: r.getSelections() });
                            else {
                                if (!r.options.lineWiseCopyCut) return;
                                var t = zl(r);
                                Ol({ lineWise: !0, text: t.text }), "cut" == e.type ? r.setSelections(t.ranges, null, U) : ((n.prevInput = ""), (i.value = t.text.join("\n")), F(i));
                            }
                            "cut" == e.type && (r.state.cutIncoming = +new Date());
                        }
                    }
                    e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
                        m && (i.style.width = "0px"),
                        fe(i, "input", function () {
                            l && a >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
                        }),
                        fe(i, "paste", function (e) {
                            me(r, e) || Dl(e, r) || ((r.state.pasteIncoming = +new Date()), n.fastPoll());
                        }),
                        fe(i, "cut", o),
                        fe(i, "copy", o),
                        fe(e.scroller, "paste", function (t) {
                            if (!xn(e, t) && !me(r, t)) {
                                if (!i.dispatchEvent) return (r.state.pasteIncoming = +new Date()), void n.focus();
                                var o = new Event("paste");
                                (o.clipboardData = t.clipboardData), i.dispatchEvent(o);
                            }
                        }),
                        fe(e.lineSpace, "selectstart", function (t) {
                            xn(e, t) || be(t);
                        }),
                        fe(i, "compositionstart", function () {
                            var e = r.getCursor("from");
                            n.composing && n.composing.range.clear(), (n.composing = { start: e, range: r.markText(e, r.getCursor("to"), { className: "CodeMirror-composing" }) });
                        }),
                        fe(i, "compositionend", function () {
                            n.composing && (n.poll(), n.composing.range.clear(), (n.composing = null));
                        });
                }),
                    (Vl.prototype.createField = function (e) {
                        (this.wrapper = Il()), (this.textarea = this.wrapper.firstChild);
                    }),
                    (Vl.prototype.screenReaderLabelChanged = function (e) {
                        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
                    }),
                    (Vl.prototype.prepareSelection = function () {
                        var e = this.cm,
                            t = e.display,
                            n = e.doc,
                            r = gr(e);
                        if (e.options.moveInputWithCursor) {
                            var i = $n(e, n.sel.primary().head, "div"),
                                o = t.wrapper.getBoundingClientRect(),
                                l = t.lineDiv.getBoundingClientRect();
                            (r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top))), (r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left)));
                        }
                        return r;
                    }),
                    (Vl.prototype.showSelection = function (e) {
                        var t = this.cm.display;
                        M(t.cursorDiv, e.cursors), M(t.selectionDiv, e.selection), null != e.teTop && ((this.wrapper.style.top = e.teTop + "px"), (this.wrapper.style.left = e.teLeft + "px"));
                    }),
                    (Vl.prototype.reset = function (e) {
                        if (!this.contextMenuPending && !this.composing) {
                            var t = this.cm;
                            if (t.somethingSelected()) {
                                this.prevInput = "";
                                var n = t.getSelection();
                                (this.textarea.value = n), t.state.focused && F(this.textarea), l && a >= 9 && (this.hasSelection = n);
                            } else e || ((this.prevInput = this.textarea.value = ""), l && a >= 9 && (this.hasSelection = null));
                        }
                    }),
                    (Vl.prototype.getField = function () {
                        return this.textarea;
                    }),
                    (Vl.prototype.supportsTouch = function () {
                        return !1;
                    }),
                    (Vl.prototype.focus = function () {
                        if ("nocursor" != this.cm.options.readOnly && (!v || D() != this.textarea))
                            try {
                                this.textarea.focus();
                            } catch (e) {}
                    }),
                    (Vl.prototype.blur = function () {
                        this.textarea.blur();
                    }),
                    (Vl.prototype.resetPosition = function () {
                        this.wrapper.style.top = this.wrapper.style.left = 0;
                    }),
                    (Vl.prototype.receivedFocus = function () {
                        this.slowPoll();
                    }),
                    (Vl.prototype.slowPoll = function () {
                        var e = this;
                        this.pollingFast ||
                            this.polling.set(this.cm.options.pollInterval, function () {
                                e.poll(), e.cm.state.focused && e.slowPoll();
                            });
                    }),
                    (Vl.prototype.fastPoll = function () {
                        var e = !1,
                            t = this;
                        (t.pollingFast = !0),
                            t.polling.set(20, function n() {
                                t.poll() || e ? ((t.pollingFast = !1), t.slowPoll()) : ((e = !0), t.polling.set(60, n));
                            });
                    }),
                    (Vl.prototype.poll = function () {
                        var e = this,
                            t = this.cm,
                            n = this.textarea,
                            r = this.prevInput;
                        if (this.contextMenuPending || !t.state.focused || (Pe(n) && !r && !this.composing) || t.isReadOnly() || t.options.disableInput || t.state.keySeq) return !1;
                        var i = n.value;
                        if (i == r && !t.somethingSelected()) return !1;
                        if ((l && a >= 9 && this.hasSelection === i) || (y && /[\uf700-\uf7ff]/.test(i))) return t.display.input.reset(), !1;
                        if (t.doc.sel == t.display.selForContextMenu) {
                            var o = i.charCodeAt(0);
                            if ((8203 != o || r || (r = "\u200b"), 8666 == o)) return this.reset(), this.cm.execCommand("undo");
                        }
                        for (var u = 0, s = Math.min(r.length, i.length); u < s && r.charCodeAt(u) == i.charCodeAt(u); ) ++u;
                        return (
                            Zr(t, function () {
                                Pl(t, i.slice(u), r.length - u, null, e.composing ? "*compose" : null), i.length > 1e3 || i.indexOf("\n") > -1 ? (n.value = e.prevInput = "") : (e.prevInput = i), e.composing && (e.composing.range.clear(), (e.composing.range = t.markText(e.composing.start, t.getCursor("to"), { className: "CodeMirror-composing" })));
                            }),
                            !0
                        );
                    }),
                    (Vl.prototype.ensurePolled = function () {
                        this.pollingFast && this.poll() && (this.pollingFast = !1);
                    }),
                    (Vl.prototype.onKeyPress = function () {
                        l && a >= 9 && (this.hasSelection = null), this.fastPoll();
                    }),
                    (Vl.prototype.onContextMenu = function (e) {
                        var t = this,
                            n = t.cm,
                            r = n.display,
                            i = t.textarea;
                        t.contextMenuPending && t.contextMenuPending();
                        var o = ur(n, e),
                            s = r.scroller.scrollTop;
                        if (o && !f) {
                            n.options.resetSelectionOnContextMenu && -1 == n.doc.sel.contains(o) && Jr(n, Zi)(n.doc, Si(o), U);
                            var c,
                                d = i.style.cssText,
                                p = t.wrapper.style.cssText,
                                h = t.wrapper.offsetParent.getBoundingClientRect();
                            (t.wrapper.style.cssText = "position: static"),
                                (i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - h.top - 5) + "px; left: " + (e.clientX - h.left - 5) + "px;\n      z-index: 1000; background: " + (l ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);"),
                                u && (c = window.scrollY),
                                r.input.focus(),
                                u && window.scrollTo(null, c),
                                r.input.reset(),
                                n.somethingSelected() || (i.value = t.prevInput = " "),
                                (t.contextMenuPending = g),
                                (r.selForContextMenu = n.doc.sel),
                                clearTimeout(r.detectingSelectAll),
                                l && a >= 9 && m(),
                                C
                                    ? (ke(e),
                                      fe(window, "mouseup", function e() {
                                          pe(window, "mouseup", e), setTimeout(g, 20);
                                      }))
                                    : setTimeout(g, 50);
                        }
                        function m() {
                            if (null != i.selectionStart) {
                                var e = n.somethingSelected(),
                                    o = "\u200b" + (e ? i.value : "");
                                (i.value = "\u21da"), (i.value = o), (t.prevInput = e ? "" : "\u200b"), (i.selectionStart = 1), (i.selectionEnd = o.length), (r.selForContextMenu = n.doc.sel);
                            }
                        }
                        function g() {
                            if (t.contextMenuPending == g && ((t.contextMenuPending = !1), (t.wrapper.style.cssText = p), (i.style.cssText = d), l && a < 9 && r.scrollbars.setScrollTop((r.scroller.scrollTop = s)), null != i.selectionStart)) {
                                (!l || (l && a < 9)) && m();
                                var e = 0;
                                r.detectingSelectAll = setTimeout(function o() {
                                    r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "\u200b" == t.prevInput ? Jr(n, lo)(n) : e++ < 10 ? (r.detectingSelectAll = setTimeout(o, 500)) : ((r.selForContextMenu = null), r.input.reset());
                                }, 200);
                            }
                        }
                    }),
                    (Vl.prototype.readOnlyChanged = function (e) {
                        e || this.reset(), (this.textarea.disabled = "nocursor" == e);
                    }),
                    (Vl.prototype.setUneditable = function () {}),
                    (Vl.prototype.needsContentAttribute = !1),
                    (function (e) {
                        var t = e.optionHandlers;
                        function n(n, r, i, o) {
                            (e.defaults[n] = r),
                                i &&
                                    (t[n] = o
                                        ? function (e, t, n) {
                                              n != xl && i(e, t, n);
                                          }
                                        : i);
                        }
                        (e.defineOption = n),
                            (e.Init = xl),
                            n(
                                "value",
                                "",
                                function (e, t) {
                                    return e.setValue(t);
                                },
                                !0
                            ),
                            n(
                                "mode",
                                null,
                                function (e, t) {
                                    (e.doc.modeOption = t), Ni(e);
                                },
                                !0
                            ),
                            n("indentUnit", 2, Ni, !0),
                            n("indentWithTabs", !1),
                            n("smartIndent", !0),
                            n(
                                "tabSize",
                                4,
                                function (e) {
                                    Oi(e), Wn(e), cr(e);
                                },
                                !0
                            ),
                            n("lineSeparator", null, function (e, t) {
                                if (((e.doc.lineSep = t), t)) {
                                    var n = [],
                                        r = e.doc.first;
                                    e.doc.iter(function (e) {
                                        for (var i = 0; ; ) {
                                            var o = e.text.indexOf(t, i);
                                            if (-1 == o) break;
                                            (i = o + t.length), n.push(Je(r, o));
                                        }
                                        r++;
                                    });
                                    for (var i = n.length - 1; i >= 0; i--) ho(e.doc, t, n[i], Je(n[i].line, n[i].ch + t.length));
                                }
                            }),
                            n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (e, t, n) {
                                (e.state.specialChars = new RegExp(t.source + (t.test("\t") ? "" : "|\t"), "g")), n != xl && e.refresh();
                            }),
                            n(
                                "specialCharPlaceholder",
                                Yt,
                                function (e) {
                                    return e.refresh();
                                },
                                !0
                            ),
                            n("electricChars", !0),
                            n(
                                "inputStyle",
                                v ? "contenteditable" : "textarea",
                                function () {
                                    throw new Error("inputStyle can not (yet) be changed in a running editor");
                                },
                                !0
                            ),
                            n(
                                "spellcheck",
                                !1,
                                function (e, t) {
                                    return (e.getInputField().spellcheck = t);
                                },
                                !0
                            ),
                            n(
                                "autocorrect",
                                !1,
                                function (e, t) {
                                    return (e.getInputField().autocorrect = t);
                                },
                                !0
                            ),
                            n(
                                "autocapitalize",
                                !1,
                                function (e, t) {
                                    return (e.getInputField().autocapitalize = t);
                                },
                                !0
                            ),
                            n("rtlMoveVisually", !w),
                            n("wholeLineUpdateBefore", !0),
                            n(
                                "theme",
                                "default",
                                function (e) {
                                    wl(e), hi(e);
                                },
                                !0
                            ),
                            n("keyMap", "default", function (e, t, n) {
                                var r = Qo(t),
                                    i = n != xl && Qo(n);
                                i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null);
                            }),
                            n("extraKeys", null),
                            n("configureMouse", null),
                            n("lineWrapping", !1, Tl, !0),
                            n(
                                "gutters",
                                [],
                                function (e, t) {
                                    (e.display.gutterSpecs = di(t, e.options.lineNumbers)), hi(e);
                                },
                                !0
                            ),
                            n(
                                "fixedGutter",
                                !0,
                                function (e, t) {
                                    (e.display.gutters.style.left = t ? or(e.display) + "px" : "0"), e.refresh();
                                },
                                !0
                            ),
                            n(
                                "coverGutterNextToScrollbar",
                                !1,
                                function (e) {
                                    return Hr(e);
                                },
                                !0
                            ),
                            n(
                                "scrollbarStyle",
                                "native",
                                function (e) {
                                    jr(e), Hr(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
                                },
                                !0
                            ),
                            n(
                                "lineNumbers",
                                !1,
                                function (e, t) {
                                    (e.display.gutterSpecs = di(e.options.gutters, t)), hi(e);
                                },
                                !0
                            ),
                            n("firstLineNumber", 1, hi, !0),
                            n(
                                "lineNumberFormatter",
                                function (e) {
                                    return e;
                                },
                                hi,
                                !0
                            ),
                            n("showCursorWhenSelecting", !1, mr, !0),
                            n("resetSelectionOnContextMenu", !0),
                            n("lineWiseCopyCut", !0),
                            n("pasteLinesPerSelection", !0),
                            n("selectionsMayTouch", !1),
                            n("readOnly", !1, function (e, t) {
                                "nocursor" == t && (Sr(e), e.display.input.blur()), e.display.input.readOnlyChanged(t);
                            }),
                            n("screenReaderLabel", null, function (e, t) {
                                (t = "" === t ? null : t), e.display.input.screenReaderLabelChanged(t);
                            }),
                            n(
                                "disableInput",
                                !1,
                                function (e, t) {
                                    t || e.display.input.reset();
                                },
                                !0
                            ),
                            n("dragDrop", !0, Sl),
                            n("allowDropFileTypes", null),
                            n("cursorBlinkRate", 530),
                            n("cursorScrollMargin", 0),
                            n("cursorHeight", 1, mr, !0),
                            n("singleCursorHeightPerLine", !0, mr, !0),
                            n("workTime", 100),
                            n("workDelay", 100),
                            n("flattenSpans", !0, Oi, !0),
                            n("addModeClass", !1, Oi, !0),
                            n("pollInterval", 100),
                            n("undoDepth", 200, function (e, t) {
                                return (e.doc.history.undoDepth = t);
                            }),
                            n("historyEventDelay", 1250),
                            n(
                                "viewportMargin",
                                10,
                                function (e) {
                                    return e.refresh();
                                },
                                !0
                            ),
                            n("maxHighlightLength", 1e4, Oi, !0),
                            n("moveInputWithCursor", !0, function (e, t) {
                                t || e.display.input.resetPosition();
                            }),
                            n("tabindex", null, function (e, t) {
                                return (e.display.input.getField().tabIndex = t || "");
                            }),
                            n("autofocus", null),
                            n(
                                "direction",
                                "ltr",
                                function (e, t) {
                                    return e.doc.setDirection(t);
                                },
                                !0
                            ),
                            n("phrases", null);
                    })(El),
                    (function (e) {
                        var t = e.optionHandlers,
                            n = (e.helpers = {});
                        (e.prototype = {
                            constructor: e,
                            focus: function () {
                                window.focus(), this.display.input.focus();
                            },
                            setOption: function (e, n) {
                                var r = this.options,
                                    i = r[e];
                                (r[e] == n && "mode" != e) || ((r[e] = n), t.hasOwnProperty(e) && Jr(this, t[e])(this, n, i), he(this, "optionChange", this, e));
                            },
                            getOption: function (e) {
                                return this.options[e];
                            },
                            getDoc: function () {
                                return this.doc;
                            },
                            addKeyMap: function (e, t) {
                                this.state.keyMaps[t ? "push" : "unshift"](Qo(e));
                            },
                            removeKeyMap: function (e) {
                                for (var t = this.state.keyMaps, n = 0; n < t.length; ++n) if (t[n] == e || t[n].name == e) return t.splice(n, 1), !0;
                            },
                            addOverlay: ei(function (t, n) {
                                var r = t.token ? t : e.getMode(this.options, t);
                                if (r.startState) throw new Error("Overlays may not be stateful.");
                                !(function (e, t, n) {
                                    for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
                                    e.splice(r, 0, t);
                                })(this.state.overlays, { mode: r, modeSpec: t, opaque: n && n.opaque, priority: (n && n.priority) || 0 }, function (e) {
                                    return e.priority;
                                }),
                                    this.state.modeGen++,
                                    cr(this);
                            }),
                            removeOverlay: ei(function (e) {
                                for (var t = this.state.overlays, n = 0; n < t.length; ++n) {
                                    var r = t[n].modeSpec;
                                    if (r == e || ("string" == typeof e && r.name == e)) return t.splice(n, 1), this.state.modeGen++, void cr(this);
                                }
                            }),
                            indentLine: ei(function (e, t, n) {
                                "string" != typeof t && "number" != typeof t && (t = null == t ? (this.options.smartIndent ? "smart" : "prev") : t ? "add" : "subtract"), Ye(this.doc, e) && Ml(this, e, t, n);
                            }),
                            indentSelection: ei(function (e) {
                                for (var t = this.doc.sel.ranges, n = -1, r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    if (i.empty()) i.head.line > n && (Ml(this, i.head.line, e, !0), (n = i.head.line), r == this.doc.sel.primIndex && Or(this));
                                    else {
                                        var o = i.from(),
                                            l = i.to(),
                                            a = Math.max(n, o.line);
                                        n = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;
                                        for (var u = a; u < n; ++u) Ml(this, u, e);
                                        var s = this.doc.sel.ranges;
                                        0 == o.ch && t.length == s.length && s[r].from().ch > 0 && Qi(this.doc, r, new ki(o, s[r].to()), U);
                                    }
                                }
                            }),
                            getTokenAt: function (e, t) {
                                return vt(this, e, t);
                            },
                            getLineTokens: function (e, t) {
                                return vt(this, Je(e), t, !0);
                            },
                            getTokenTypeAt: function (e) {
                                e = lt(this.doc, e);
                                var t,
                                    n = ft(this, Ke(this.doc, e.line)),
                                    r = 0,
                                    i = (n.length - 1) / 2,
                                    o = e.ch;
                                if (0 == o) t = n[2];
                                else
                                    for (;;) {
                                        var l = (r + i) >> 1;
                                        if ((l ? n[2 * l - 1] : 0) >= o) i = l;
                                        else {
                                            if (!(n[2 * l + 1] < o)) {
                                                t = n[2 * l + 2];
                                                break;
                                            }
                                            r = l + 1;
                                        }
                                    }
                                var a = t ? t.indexOf("overlay ") : -1;
                                return a < 0 ? t : 0 == a ? null : t.slice(0, a - 1);
                            },
                            getModeAt: function (t) {
                                var n = this.doc.mode;
                                return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n;
                            },
                            getHelper: function (e, t) {
                                return this.getHelpers(e, t)[0];
                            },
                            getHelpers: function (e, t) {
                                var r = [];
                                if (!n.hasOwnProperty(t)) return r;
                                var i = n[t],
                                    o = this.getModeAt(e);
                                if ("string" == typeof o[t]) i[o[t]] && r.push(i[o[t]]);
                                else if (o[t])
                                    for (var l = 0; l < o[t].length; l++) {
                                        var a = i[o[t][l]];
                                        a && r.push(a);
                                    }
                                else o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
                                for (var u = 0; u < i._global.length; u++) {
                                    var s = i._global[u];
                                    s.pred(o, this) && -1 == H(r, s.val) && r.push(s.val);
                                }
                                return r;
                            },
                            getStateAfter: function (e, t) {
                                var n = this.doc;
                                return dt(this, (e = ot(n, null == e ? n.first + n.size - 1 : e)) + 1, t).state;
                            },
                            cursorCoords: function (e, t) {
                                var n = this.doc.sel.primary();
                                return $n(this, null == e ? n.head : "object" == typeof e ? lt(this.doc, e) : e ? n.from() : n.to(), t || "page");
                            },
                            charCoords: function (e, t) {
                                return Kn(this, lt(this.doc, e), t || "page");
                            },
                            coordsChar: function (e, t) {
                                return Qn(this, (e = Vn(this, e, t || "page")).left, e.top);
                            },
                            lineAtHeight: function (e, t) {
                                return (e = Vn(this, { top: e, left: 0 }, t || "page").top), Xe(this.doc, e + this.display.viewOffset);
                            },
                            heightAtLine: function (e, t, n) {
                                var r,
                                    i = !1;
                                if ("number" == typeof e) {
                                    var o = this.doc.first + this.doc.size - 1;
                                    e < this.doc.first ? (e = this.doc.first) : e > o && ((e = o), (i = !0)), (r = Ke(this.doc, e));
                                } else r = e;
                                return jn(this, r, { top: 0, left: 0 }, t || "page", n || i).top + (i ? this.doc.height - Ut(r) : 0);
                            },
                            defaultTextHeight: function () {
                                return nr(this.display);
                            },
                            defaultCharWidth: function () {
                                return rr(this.display);
                            },
                            getViewport: function () {
                                return { from: this.display.viewFrom, to: this.display.viewTo };
                            },
                            addWidget: function (e, t, n, r, i) {
                                var o = this.display,
                                    l = (e = $n(this, lt(this.doc, e))).bottom,
                                    a = e.left;
                                if (((t.style.position = "absolute"), t.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t), o.sizer.appendChild(t), "over" == r)) l = e.top;
                                else if ("above" == r || "near" == r) {
                                    var u = Math.max(o.wrapper.clientHeight, this.doc.height),
                                        s = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                                    ("above" == r || e.bottom + t.offsetHeight > u) && e.top > t.offsetHeight ? (l = e.top - t.offsetHeight) : e.bottom + t.offsetHeight <= u && (l = e.bottom), a + t.offsetWidth > s && (a = s - t.offsetWidth);
                                }
                                (t.style.top = l + "px"),
                                    (t.style.left = t.style.right = ""),
                                    "right" == i ? ((a = o.sizer.clientWidth - t.offsetWidth), (t.style.right = "0px")) : ("left" == i ? (a = 0) : "middle" == i && (a = (o.sizer.clientWidth - t.offsetWidth) / 2), (t.style.left = a + "px")),
                                    n &&
                                        (function (e, t) {
                                            var n = Mr(e, t);
                                            null != n.scrollTop && zr(e, n.scrollTop), null != n.scrollLeft && Ir(e, n.scrollLeft);
                                        })(this, { left: a, top: l, right: a + t.offsetWidth, bottom: l + t.offsetHeight });
                            },
                            triggerOnKeyDown: ei(sl),
                            triggerOnKeyPress: ei(fl),
                            triggerOnKeyUp: cl,
                            triggerOnMouseDown: ei(ml),
                            execCommand: function (e) {
                                if (el.hasOwnProperty(e)) return el[e].call(null, this);
                            },
                            triggerElectric: ei(function (e) {
                                Al(this, e);
                            }),
                            findPosH: function (e, t, n, r) {
                                var i = 1;
                                t < 0 && ((i = -1), (t = -t));
                                for (var o = lt(this.doc, e), l = 0; l < t && !(o = _l(this.doc, o, i, n, r)).hitSide; ++l);
                                return o;
                            },
                            moveH: ei(function (e, t) {
                                var n = this;
                                this.extendSelectionsBy(function (r) {
                                    return n.display.shift || n.doc.extend || r.empty() ? _l(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to();
                                }, V);
                            }),
                            deleteH: ei(function (e, t) {
                                var n = this.doc.sel,
                                    r = this.doc;
                                n.somethingSelected()
                                    ? r.replaceSelection("", null, "+delete")
                                    : Xo(this, function (n) {
                                          var i = _l(r, n.head, e, t, !1);
                                          return e < 0 ? { from: i, to: n.head } : { from: n.head, to: i };
                                      });
                            }),
                            findPosV: function (e, t, n, r) {
                                var i = 1,
                                    o = r;
                                t < 0 && ((i = -1), (t = -t));
                                for (var l = lt(this.doc, e), a = 0; a < t; ++a) {
                                    var u = $n(this, l, "div");
                                    if ((null == o ? (o = u.left) : (u.left = o), (l = Rl(this, u, i, n)).hitSide)) break;
                                }
                                return l;
                            },
                            moveV: ei(function (e, t) {
                                var n = this,
                                    r = this.doc,
                                    i = [],
                                    o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                                if (
                                    (r.extendSelectionsBy(function (l) {
                                        if (o) return e < 0 ? l.from() : l.to();
                                        var a = $n(n, l.head, "div");
                                        null != l.goalColumn && (a.left = l.goalColumn), i.push(a.left);
                                        var u = Rl(n, a, e, t);
                                        return "page" == t && l == r.sel.primary() && Nr(n, Kn(n, u, "div").top - a.top), u;
                                    }, V),
                                    i.length)
                                )
                                    for (var l = 0; l < r.sel.ranges.length; l++) r.sel.ranges[l].goalColumn = i[l];
                            }),
                            findWordAt: function (e) {
                                var t = Ke(this.doc, e.line).text,
                                    n = e.ch,
                                    r = e.ch;
                                if (t) {
                                    var i = this.getHelper(e, "wordChars");
                                    ("before" != e.sticky && r != t.length) || !n ? ++r : --n;
                                    for (
                                        var o = t.charAt(n),
                                            l = ee(o, i)
                                                ? function (e) {
                                                      return ee(e, i);
                                                  }
                                                : /\s/.test(o)
                                                ? function (e) {
                                                      return /\s/.test(e);
                                                  }
                                                : function (e) {
                                                      return !/\s/.test(e) && !ee(e);
                                                  };
                                        n > 0 && l(t.charAt(n - 1));

                                    )
                                        --n;
                                    for (; r < t.length && l(t.charAt(r)); ) ++r;
                                }
                                return new ki(Je(e.line, n), Je(e.line, r));
                            },
                            toggleOverwrite: function (e) {
                                (null != e && e == this.state.overwrite) || ((this.state.overwrite = !this.state.overwrite) ? A(this.display.cursorDiv, "CodeMirror-overwrite") : E(this.display.cursorDiv, "CodeMirror-overwrite"), he(this, "overwriteToggle", this, this.state.overwrite));
                            },
                            hasFocus: function () {
                                return this.display.input.getField() == D();
                            },
                            isReadOnly: function () {
                                return !(!this.options.readOnly && !this.doc.cantEdit);
                            },
                            scrollTo: ei(function (e, t) {
                                Pr(this, e, t);
                            }),
                            getScrollInfo: function () {
                                var e = this.display.scroller;
                                return { left: e.scrollLeft, top: e.scrollTop, height: e.scrollHeight - Tn(this) - this.display.barHeight, width: e.scrollWidth - Tn(this) - this.display.barWidth, clientHeight: Ln(this), clientWidth: En(this) };
                            },
                            scrollIntoView: ei(function (e, t) {
                                null == e ? ((e = { from: this.doc.sel.primary().head, to: null }), null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? (e = { from: Je(e, 0), to: null }) : null == e.from && (e = { from: e, to: null }),
                                    e.to || (e.to = e.from),
                                    (e.margin = t || 0),
                                    null != e.from.line
                                        ? (function (e, t) {
                                              Dr(e), (e.curOp.scrollToPos = t);
                                          })(this, e)
                                        : Ar(this, e.from, e.to, e.margin);
                            }),
                            setSize: ei(function (e, t) {
                                var n = this,
                                    r = function (e) {
                                        return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
                                    };
                                null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && Rn(this);
                                var i = this.display.viewFrom;
                                this.doc.iter(i, this.display.viewTo, function (e) {
                                    if (e.widgets)
                                        for (var t = 0; t < e.widgets.length; t++)
                                            if (e.widgets[t].noHScroll) {
                                                fr(n, i, "widget");
                                                break;
                                            }
                                    ++i;
                                }),
                                    (this.curOp.forceUpdate = !0),
                                    he(this, "refresh", this);
                            }),
                            operation: function (e) {
                                return Zr(this, e);
                            },
                            startOperation: function () {
                                return Kr(this);
                            },
                            endOperation: function () {
                                return $r(this);
                            },
                            refresh: ei(function () {
                                var e = this.display.cachedTextHeight;
                                cr(this), (this.curOp.forceUpdate = !0), Wn(this), Pr(this, this.doc.scrollLeft, this.doc.scrollTop), ui(this.display), (null == e || Math.abs(e - nr(this.display)) > 0.5 || this.options.lineWrapping) && ar(this), he(this, "refresh", this);
                            }),
                            swapDoc: ei(function (e) {
                                var t = this.doc;
                                return (t.cm = null), this.state.selectingText && this.state.selectingText(), zi(this, e), Wn(this), this.display.input.reset(), Pr(this, e.scrollLeft, e.scrollTop), (this.curOp.forceScroll = !0), an(this, "swapDoc", this, t), t;
                            }),
                            phrase: function (e) {
                                var t = this.options.phrases;
                                return t && Object.prototype.hasOwnProperty.call(t, e) ? t[e] : e;
                            },
                            getInputField: function () {
                                return this.display.input.getField();
                            },
                            getWrapperElement: function () {
                                return this.display.wrapper;
                            },
                            getScrollerElement: function () {
                                return this.display.scroller;
                            },
                            getGutterElement: function () {
                                return this.display.gutters;
                            },
                        }),
                            ye(e),
                            (e.registerHelper = function (t, r, i) {
                                n.hasOwnProperty(t) || (n[t] = e[t] = { _global: [] }), (n[t][r] = i);
                            }),
                            (e.registerGlobalHelper = function (t, r, i, o) {
                                e.registerHelper(t, r, o), n[t]._global.push({ pred: i, val: o });
                            });
                    })(El);
                var Kl = "iter insert remove copy getEditor constructor".split(" ");
                for (var $l in Oo.prototype)
                    Oo.prototype.hasOwnProperty($l) &&
                        H(Kl, $l) < 0 &&
                        (El.prototype[$l] = (function (e) {
                            return function () {
                                return e.apply(this.doc, arguments);
                            };
                        })(Oo.prototype[$l]));
                return (
                    ye(Oo),
                    (El.inputStyles = { textarea: Vl, contenteditable: Wl }),
                    (El.defineMode = function (e) {
                        El.defaults.mode || "null" == e || (El.defaults.mode = e), Ie.apply(this, arguments);
                    }),
                    (El.defineMIME = function (e, t) {
                        Fe[e] = t;
                    }),
                    El.defineMode("null", function () {
                        return {
                            token: function (e) {
                                return e.skipToEnd();
                            },
                        };
                    }),
                    El.defineMIME("text/plain", "null"),
                    (El.defineExtension = function (e, t) {
                        El.prototype[e] = t;
                    }),
                    (El.defineDocExtension = function (e, t) {
                        Oo.prototype[e] = t;
                    }),
                    (El.fromTextArea = function (e, t) {
                        if ((((t = t ? _(t) : {}).value = e.value), !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), null == t.autofocus)) {
                            var n = D();
                            t.autofocus = n == e || (null != e.getAttribute("autofocus") && n == document.body);
                        }
                        function r() {
                            e.value = a.getValue();
                        }
                        var i;
                        if (e.form && (fe(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
                            var o = e.form;
                            i = o.submit;
                            try {
                                var l = (o.submit = function () {
                                    r(), (o.submit = i), o.submit(), (o.submit = l);
                                });
                            } catch (u) {}
                        }
                        (t.finishInit = function (n) {
                            (n.save = r),
                                (n.getTextArea = function () {
                                    return e;
                                }),
                                (n.toTextArea = function () {
                                    (n.toTextArea = isNaN), r(), e.parentNode.removeChild(n.getWrapperElement()), (e.style.display = ""), e.form && (pe(e.form, "submit", r), t.leaveSubmitMethodAlone || "function" != typeof e.form.submit || (e.form.submit = i));
                                });
                        }),
                            (e.style.display = "none");
                        var a = El(function (t) {
                            return e.parentNode.insertBefore(t, e.nextSibling);
                        }, t);
                        return a;
                    }),
                    (function (e) {
                        (e.off = pe),
                            (e.on = fe),
                            (e.wheelEventPixels = bi),
                            (e.Doc = Oo),
                            (e.splitLines = Oe),
                            (e.countColumn = R),
                            (e.findColumn = K),
                            (e.isWordChar = J),
                            (e.Pass = B),
                            (e.signal = he),
                            (e.Line = Kt),
                            (e.changeEnd = Ti),
                            (e.scrollbarModel = Ur),
                            (e.Pos = Je),
                            (e.cmpPos = et),
                            (e.modes = ze),
                            (e.mimeModes = Fe),
                            (e.resolveMode = _e),
                            (e.getMode = Re),
                            (e.modeExtensions = We),
                            (e.extendMode = He),
                            (e.copyState = Be),
                            (e.startState = je),
                            (e.innerMode = Ue),
                            (e.commands = el),
                            (e.keyMap = Uo),
                            (e.keyName = qo),
                            (e.isModifierKey = $o),
                            (e.lookupKey = Ko),
                            (e.normalizeKeyMap = Vo),
                            (e.StringStream = Ve),
                            (e.SharedTextMarker = Eo),
                            (e.TextMarker = So),
                            (e.LineWidget = xo),
                            (e.e_preventDefault = be),
                            (e.e_stopPropagation = we),
                            (e.e_stop = ke),
                            (e.addClass = A),
                            (e.contains = P),
                            (e.rmClass = E),
                            (e.keyNames = Ro);
                    })(El),
                    (El.version = "5.57.0"),
                    El
                );
            })();
        },
        function (e, t, n) {
            "use strict";
            var r = Object.getOwnPropertySymbols,
                i = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable;
            function l(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e);
            }
            e.exports = (function () {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                    if (
                        "0123456789" !==
                        Object.getOwnPropertyNames(t)
                            .map(function (e) {
                                return t[e];
                            })
                            .join("")
                    )
                        return !1;
                    var r = {};
                    return (
                        "abcdefghijklmnopqrst".split("").forEach(function (e) {
                            r[e] = e;
                        }),
                        "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    );
                } catch (i) {
                    return !1;
                }
            })()
                ? Object.assign
                : function (e, t) {
                      for (var n, a, u = l(e), s = 1; s < arguments.length; s++) {
                          for (var c in (n = Object(arguments[s]))) i.call(n, c) && (u[c] = n[c]);
                          if (r) {
                              a = r(n);
                              for (var f = 0; f < a.length; f++) o.call(n, a[f]) && (u[a[f]] = n[a[f]]);
                          }
                      }
                      return u;
                  };
        },
        function (e, t, n) {
            "use strict";
            !(function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
                    0;
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                    } catch (t) {
                        console.error(t);
                    }
                }
            })(),
                (e.exports = n(8));
        },
        function (e, t, n) {
            "use strict";
            (function (e) {
                function r() {
                    return (r =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                            }
                            return e;
                        }).apply(this, arguments);
                }
                function i(e) {
                    return (i =
                        "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              })(e);
                }
                var o = (function () {
                    var e = function (t, n) {
                        return (e =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function (e, t) {
                                    e.__proto__ = t;
                                }) ||
                            function (e, t) {
                                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                            })(t, n);
                    };
                    return function (t, n) {
                        function r() {
                            this.constructor = t;
                        }
                        e(t, n), (t.prototype = null === n ? Object.create(n) : ((r.prototype = n.prototype), new r()));
                    };
                })();
                Object.defineProperty(t, "__esModule", { value: !0 }), (t.UnControlled = t.Controlled = void 0);
                var l,
                    a = n(0),
                    u = "undefined" === typeof navigator || !0 === e.PREVENT_CODEMIRROR_RENDER;
                u || (l = n(2));
                var s = (function () {
                        function e() {}
                        return (
                            (e.equals = function (e, t) {
                                var n = this,
                                    r = Object.keys,
                                    o = i(e),
                                    l = i(t);
                                return e && t && "object" === o && o === l
                                    ? r(e).length === r(t).length &&
                                          r(e).every(function (r) {
                                              return n.equals(e[r], t[r]);
                                          })
                                    : e === t;
                            }),
                            e
                        );
                    })(),
                    c = (function () {
                        function e(e, t) {
                            (this.editor = e), (this.props = t);
                        }
                        return (
                            (e.prototype.delegateCursor = function (e, t, n) {
                                var r = this.editor.getDoc();
                                n && this.editor.focus(), t ? r.setCursor(e) : r.setCursor(e, null, { scroll: !1 });
                            }),
                            (e.prototype.delegateScroll = function (e) {
                                this.editor.scrollTo(e.x, e.y);
                            }),
                            (e.prototype.delegateSelection = function (e, t) {
                                this.editor.getDoc().setSelections(e), t && this.editor.focus();
                            }),
                            (e.prototype.apply = function (e) {
                                e && e.selection && e.selection.ranges && this.delegateSelection(e.selection.ranges, e.selection.focus || !1), e && e.cursor && this.delegateCursor(e.cursor, e.autoScroll || !1, this.editor.getOption("autofocus") || !1), e && e.scroll && this.delegateScroll(e.scroll);
                            }),
                            (e.prototype.applyNext = function (e, t, n) {
                                e && e.selection && e.selection.ranges && t && t.selection && t.selection.ranges && !s.equals(e.selection.ranges, t.selection.ranges) && this.delegateSelection(t.selection.ranges, t.selection.focus || !1), e && e.cursor && t && t.cursor && !s.equals(e.cursor, t.cursor) && this.delegateCursor(n.cursor || t.cursor, t.autoScroll || !1, t.autoCursor || !1), e && e.scroll && t && t.scroll && !s.equals(e.scroll, t.scroll) && this.delegateScroll(t.scroll);
                            }),
                            (e.prototype.applyUserDefined = function (e, t) {
                                t && t.cursor && this.delegateCursor(t.cursor, e.autoScroll || !1, this.editor.getOption("autofocus") || !1);
                            }),
                            (e.prototype.wire = function (e) {
                                var t = this;
                                Object.keys(e || {})
                                    .filter(function (e) {
                                        return /^on/.test(e);
                                    })
                                    .forEach(function (e) {
                                        switch (e) {
                                            case "onBlur":
                                                t.editor.on("blur", function (e, n) {
                                                    t.props.onBlur(t.editor, n);
                                                });
                                                break;
                                            case "onContextMenu":
                                                t.editor.on("contextmenu", function (e, n) {
                                                    t.props.onContextMenu(t.editor, n);
                                                });
                                                break;
                                            case "onCopy":
                                                t.editor.on("copy", function (e, n) {
                                                    t.props.onCopy(t.editor, n);
                                                });
                                                break;
                                            case "onCursor":
                                                t.editor.on("cursorActivity", function (e) {
                                                    t.props.onCursor(t.editor, t.editor.getDoc().getCursor());
                                                });
                                                break;
                                            case "onCursorActivity":
                                                t.editor.on("cursorActivity", function (e) {
                                                    t.props.onCursorActivity(t.editor);
                                                });
                                                break;
                                            case "onCut":
                                                t.editor.on("cut", function (e, n) {
                                                    t.props.onCut(t.editor, n);
                                                });
                                                break;
                                            case "onDblClick":
                                                t.editor.on("dblclick", function (e, n) {
                                                    t.props.onDblClick(t.editor, n);
                                                });
                                                break;
                                            case "onDragEnter":
                                                t.editor.on("dragenter", function (e, n) {
                                                    t.props.onDragEnter(t.editor, n);
                                                });
                                                break;
                                            case "onDragLeave":
                                                t.editor.on("dragleave", function (e, n) {
                                                    t.props.onDragLeave(t.editor, n);
                                                });
                                                break;
                                            case "onDragOver":
                                                t.editor.on("dragover", function (e, n) {
                                                    t.props.onDragOver(t.editor, n);
                                                });
                                                break;
                                            case "onDragStart":
                                                t.editor.on("dragstart", function (e, n) {
                                                    t.props.onDragStart(t.editor, n);
                                                });
                                                break;
                                            case "onDrop":
                                                t.editor.on("drop", function (e, n) {
                                                    t.props.onDrop(t.editor, n);
                                                });
                                                break;
                                            case "onFocus":
                                                t.editor.on("focus", function (e, n) {
                                                    t.props.onFocus(t.editor, n);
                                                });
                                                break;
                                            case "onGutterClick":
                                                t.editor.on("gutterClick", function (e, n, r, i) {
                                                    t.props.onGutterClick(t.editor, n, r, i);
                                                });
                                                break;
                                            case "onInputRead":
                                                t.editor.on("inputRead", function (e, n) {
                                                    t.props.onInputRead(t.editor, n);
                                                });
                                                break;
                                            case "onKeyDown":
                                                t.editor.on("keydown", function (e, n) {
                                                    t.props.onKeyDown(t.editor, n);
                                                });
                                                break;
                                            case "onKeyHandled":
                                                t.editor.on("keyHandled", function (e, n, r) {
                                                    t.props.onKeyHandled(t.editor, n, r);
                                                });
                                                break;
                                            case "onKeyPress":
                                                t.editor.on("keypress", function (e, n) {
                                                    t.props.onKeyPress(t.editor, n);
                                                });
                                                break;
                                            case "onKeyUp":
                                                t.editor.on("keyup", function (e, n) {
                                                    t.props.onKeyUp(t.editor, n);
                                                });
                                                break;
                                            case "onMouseDown":
                                                t.editor.on("mousedown", function (e, n) {
                                                    t.props.onMouseDown(t.editor, n);
                                                });
                                                break;
                                            case "onPaste":
                                                t.editor.on("paste", function (e, n) {
                                                    t.props.onPaste(t.editor, n);
                                                });
                                                break;
                                            case "onRenderLine":
                                                t.editor.on("renderLine", function (e, n, r) {
                                                    t.props.onRenderLine(t.editor, n, r);
                                                });
                                                break;
                                            case "onScroll":
                                                t.editor.on("scroll", function (e) {
                                                    t.props.onScroll(t.editor, t.editor.getScrollInfo());
                                                });
                                                break;
                                            case "onSelection":
                                                t.editor.on("beforeSelectionChange", function (e, n) {
                                                    t.props.onSelection(t.editor, n);
                                                });
                                                break;
                                            case "onTouchStart":
                                                t.editor.on("touchstart", function (e, n) {
                                                    t.props.onTouchStart(t.editor, n);
                                                });
                                                break;
                                            case "onUpdate":
                                                t.editor.on("update", function (e) {
                                                    t.props.onUpdate(t.editor);
                                                });
                                                break;
                                            case "onViewportChange":
                                                t.editor.on("viewportChange", function (e, n, r) {
                                                    t.props.onViewportChange(t.editor, n, r);
                                                });
                                        }
                                    });
                            }),
                            e
                        );
                    })(),
                    f = (function (e) {
                        function t(t) {
                            var n = e.call(this, t) || this;
                            return (
                                u ||
                                    ((n.applied = !1),
                                    (n.appliedNext = !1),
                                    (n.appliedUserDefined = !1),
                                    (n.deferred = null),
                                    (n.emulating = !1),
                                    (n.hydrated = !1),
                                    (n.initCb = function () {
                                        n.props.editorDidConfigure && n.props.editorDidConfigure(n.editor);
                                    }),
                                    (n.mounted = !1)),
                                n
                            );
                        }
                        return (
                            o(t, e),
                            (t.prototype.hydrate = function (e) {
                                var t = this,
                                    n = e && e.options ? e.options : {},
                                    i = r({}, l.defaults, this.editor.options, n);
                                Object.keys(i).some(function (e) {
                                    return t.editor.getOption(e) !== i[e];
                                }) &&
                                    Object.keys(i).forEach(function (e) {
                                        n.hasOwnProperty(e) && t.editor.getOption(e) !== i[e] && (t.editor.setOption(e, i[e]), t.mirror.setOption(e, i[e]));
                                    }),
                                    this.hydrated || (this.deferred ? this.resolveChange(e.value) : this.initChange(e.value || "")),
                                    (this.hydrated = !0);
                            }),
                            (t.prototype.initChange = function (e) {
                                this.emulating = !0;
                                var t = this.editor.getDoc(),
                                    n = t.lastLine(),
                                    r = t.getLine(t.lastLine()).length;
                                t.replaceRange(e || "", { line: 0, ch: 0 }, { line: n, ch: r }), this.mirror.setValue(e), t.clearHistory(), this.mirror.clearHistory(), (this.emulating = !1);
                            }),
                            (t.prototype.resolveChange = function (e) {
                                this.emulating = !0;
                                var t = this.editor.getDoc();
                                if (("undo" === this.deferred.origin ? t.undo() : "redo" === this.deferred.origin ? t.redo() : t.replaceRange(this.deferred.text, this.deferred.from, this.deferred.to, this.deferred.origin), e && e !== t.getValue())) {
                                    var n = t.getCursor();
                                    t.setValue(e), t.setCursor(n);
                                }
                                (this.emulating = !1), (this.deferred = null);
                            }),
                            (t.prototype.mirrorChange = function (e) {
                                var t = this.editor.getDoc();
                                return "undo" === e.origin ? (t.setHistory(this.mirror.getHistory()), this.mirror.undo()) : "redo" === e.origin ? (t.setHistory(this.mirror.getHistory()), this.mirror.redo()) : this.mirror.replaceRange(e.text, e.from, e.to, e.origin), this.mirror.getValue();
                            }),
                            (t.prototype.componentDidMount = function () {
                                var e = this;
                                u ||
                                    (this.props.defineMode && this.props.defineMode.name && this.props.defineMode.fn && l.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                                    (this.editor = l(this.ref, this.props.options)),
                                    (this.shared = new c(this.editor, this.props)),
                                    (this.mirror = l(function () {}, this.props.options)),
                                    this.editor.on("electricInput", function () {
                                        e.mirror.setHistory(e.editor.getDoc().getHistory());
                                    }),
                                    this.editor.on("cursorActivity", function () {
                                        e.mirror.setCursor(e.editor.getDoc().getCursor());
                                    }),
                                    this.editor.on("beforeChange", function (t, n) {
                                        if (!e.emulating) {
                                            n.cancel(), (e.deferred = n);
                                            var r = e.mirrorChange(e.deferred);
                                            e.props.onBeforeChange && e.props.onBeforeChange(e.editor, e.deferred, r);
                                        }
                                    }),
                                    this.editor.on("change", function (t, n) {
                                        e.mounted && e.props.onChange && e.props.onChange(e.editor, n, e.editor.getValue());
                                    }),
                                    this.hydrate(this.props),
                                    this.shared.apply(this.props),
                                    (this.applied = !0),
                                    (this.mounted = !0),
                                    this.shared.wire(this.props),
                                    this.editor.getOption("autofocus") && this.editor.focus(),
                                    this.props.editorDidMount && this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
                            }),
                            (t.prototype.componentDidUpdate = function (e) {
                                if (!u) {
                                    var t = { cursor: null };
                                    this.props.value !== e.value && (this.hydrated = !1), this.props.autoCursor || void 0 === this.props.autoCursor || (t.cursor = this.editor.getDoc().getCursor()), this.hydrate(this.props), this.appliedNext || (this.shared.applyNext(e, this.props, t), (this.appliedNext = !0)), this.shared.applyUserDefined(e, t), (this.appliedUserDefined = !0);
                                }
                            }),
                            (t.prototype.componentWillUnmount = function () {
                                u || (this.props.editorWillUnmount && this.props.editorWillUnmount(l));
                            }),
                            (t.prototype.shouldComponentUpdate = function (e, t) {
                                return !u;
                            }),
                            (t.prototype.render = function () {
                                var e = this;
                                if (u) return null;
                                var t = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2";
                                return a.createElement("div", {
                                    className: t,
                                    ref: function (t) {
                                        return (e.ref = t);
                                    },
                                });
                            }),
                            t
                        );
                    })(a.Component);
                t.Controlled = f;
                var d = (function (e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return (
                            u ||
                                ((n.applied = !1),
                                (n.appliedUserDefined = !1),
                                (n.continueChange = !1),
                                (n.detached = !1),
                                (n.hydrated = !1),
                                (n.initCb = function () {
                                    n.props.editorDidConfigure && n.props.editorDidConfigure(n.editor);
                                }),
                                (n.mounted = !1),
                                (n.onBeforeChangeCb = function () {
                                    n.continueChange = !0;
                                })),
                            n
                        );
                    }
                    return (
                        o(t, e),
                        (t.prototype.hydrate = function (e) {
                            var t = this,
                                n = e && e.options ? e.options : {},
                                i = r({}, l.defaults, this.editor.options, n);
                            if (
                                (Object.keys(i).some(function (e) {
                                    return t.editor.getOption(e) !== i[e];
                                }) &&
                                    Object.keys(i).forEach(function (e) {
                                        n.hasOwnProperty(e) && t.editor.getOption(e) !== i[e] && t.editor.setOption(e, i[e]);
                                    }),
                                !this.hydrated)
                            ) {
                                var o = this.editor.getDoc(),
                                    a = o.lastLine(),
                                    u = o.getLine(o.lastLine()).length;
                                o.replaceRange(e.value || "", { line: 0, ch: 0 }, { line: a, ch: u });
                            }
                            this.hydrated = !0;
                        }),
                        (t.prototype.componentDidMount = function () {
                            var e = this;
                            u ||
                                ((this.detached = !0 === this.props.detach),
                                this.props.defineMode && this.props.defineMode.name && this.props.defineMode.fn && l.defineMode(this.props.defineMode.name, this.props.defineMode.fn),
                                (this.editor = l(this.ref, this.props.options)),
                                (this.shared = new c(this.editor, this.props)),
                                this.editor.on("beforeChange", function (t, n) {
                                    e.props.onBeforeChange && e.props.onBeforeChange(e.editor, n, e.editor.getValue(), e.onBeforeChangeCb);
                                }),
                                this.editor.on("change", function (t, n) {
                                    e.mounted && e.props.onChange && (e.props.onBeforeChange ? e.continueChange && e.props.onChange(e.editor, n, e.editor.getValue()) : e.props.onChange(e.editor, n, e.editor.getValue()));
                                }),
                                this.hydrate(this.props),
                                this.shared.apply(this.props),
                                (this.applied = !0),
                                (this.mounted = !0),
                                this.shared.wire(this.props),
                                this.editor.getDoc().clearHistory(),
                                this.props.editorDidMount && this.props.editorDidMount(this.editor, this.editor.getValue(), this.initCb));
                        }),
                        (t.prototype.componentDidUpdate = function (e) {
                            if ((this.detached && !1 === this.props.detach && ((this.detached = !1), e.editorDidAttach && e.editorDidAttach(this.editor)), this.detached || !0 !== this.props.detach || ((this.detached = !0), e.editorDidDetach && e.editorDidDetach(this.editor)), !u && !this.detached)) {
                                var t = { cursor: null };
                                this.props.value !== e.value && ((this.hydrated = !1), (this.applied = !1), (this.appliedUserDefined = !1)), e.autoCursor || void 0 === e.autoCursor || (t.cursor = this.editor.getDoc().getCursor()), this.hydrate(this.props), this.applied || (this.shared.apply(e), (this.applied = !0)), this.appliedUserDefined || (this.shared.applyUserDefined(e, t), (this.appliedUserDefined = !0));
                            }
                        }),
                        (t.prototype.componentWillUnmount = function () {
                            u || (this.props.editorWillUnmount && this.props.editorWillUnmount(l));
                        }),
                        (t.prototype.shouldComponentUpdate = function (e, t) {
                            var n = !0;
                            return u && (n = !1), this.detached && e.detach && (n = !1), n;
                        }),
                        (t.prototype.render = function () {
                            var e = this;
                            if (u) return null;
                            var t = this.props.className ? "react-codemirror2 " + this.props.className : "react-codemirror2";
                            return a.createElement("div", {
                                className: t,
                                ref: function (t) {
                                    return (e.ref = t);
                                },
                            });
                        }),
                        t
                    );
                })(a.Component);
                t.UnControlled = d;
            }.call(this, n(19)));
        },
        ,
        function (e, t, n) {
            "use strict";
            var r = n(3),
                i = "function" === typeof Symbol && Symbol.for,
                o = i ? Symbol.for("react.element") : 60103,
                l = i ? Symbol.for("react.portal") : 60106,
                a = i ? Symbol.for("react.fragment") : 60107,
                u = i ? Symbol.for("react.strict_mode") : 60108,
                s = i ? Symbol.for("react.profiler") : 60114,
                c = i ? Symbol.for("react.provider") : 60109,
                f = i ? Symbol.for("react.context") : 60110,
                d = i ? Symbol.for("react.forward_ref") : 60112,
                p = i ? Symbol.for("react.suspense") : 60113,
                h = i ? Symbol.for("react.memo") : 60115,
                m = i ? Symbol.for("react.lazy") : 60116,
                g = "function" === typeof Symbol && Symbol.iterator;
            function v(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            var y = {
                    isMounted: function () {
                        return !1;
                    },
                    enqueueForceUpdate: function () {},
                    enqueueReplaceState: function () {},
                    enqueueSetState: function () {},
                },
                b = {};
            function w(e, t, n) {
                (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || y);
            }
            function x() {}
            function k(e, t, n) {
                (this.props = e), (this.context = t), (this.refs = b), (this.updater = n || y);
            }
            (w.prototype.isReactComponent = {}),
                (w.prototype.setState = function (e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(v(85));
                    this.updater.enqueueSetState(this, e, t, "setState");
                }),
                (w.prototype.forceUpdate = function (e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
                }),
                (x.prototype = w.prototype);
            var C = (k.prototype = new x());
            (C.constructor = k), r(C, w.prototype), (C.isPureReactComponent = !0);
            var S = { current: null },
                T = Object.prototype.hasOwnProperty,
                E = { key: !0, ref: !0, __self: !0, __source: !0 };
            function L(e, t, n) {
                var r,
                    i = {},
                    l = null,
                    a = null;
                if (null != t) for (r in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (l = "" + t.key), t)) T.call(t, r) && !E.hasOwnProperty(r) && (i[r] = t[r]);
                var u = arguments.length - 2;
                if (1 === u) i.children = n;
                else if (1 < u) {
                    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
                    i.children = s;
                }
                if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
                return { $$typeof: o, type: e, key: l, ref: a, props: i, _owner: S.current };
            }
            function M(e) {
                return "object" === typeof e && null !== e && e.$$typeof === o;
            }
            var N = /\/+/g,
                O = [];
            function P(e, t, n, r) {
                if (O.length) {
                    var i = O.pop();
                    return (i.result = e), (i.keyPrefix = t), (i.func = n), (i.context = r), (i.count = 0), i;
                }
                return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
            }
            function D(e) {
                (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), 10 > O.length && O.push(e);
            }
            function A(e, t, n) {
                return null == e
                    ? 0
                    : (function e(t, n, r, i) {
                          var a = typeof t;
                          ("undefined" !== a && "boolean" !== a) || (t = null);
                          var u = !1;
                          if (null === t) u = !0;
                          else
                              switch (a) {
                                  case "string":
                                  case "number":
                                      u = !0;
                                      break;
                                  case "object":
                                      switch (t.$$typeof) {
                                          case o:
                                          case l:
                                              u = !0;
                                      }
                              }
                          if (u) return r(i, t, "" === n ? "." + z(t, 0) : n), 1;
                          if (((u = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                              for (var s = 0; s < t.length; s++) {
                                  var c = n + z((a = t[s]), s);
                                  u += e(a, c, r, i);
                              }
                          else if ((null === t || "object" !== typeof t ? (c = null) : (c = "function" === typeof (c = (g && t[g]) || t["@@iterator"]) ? c : null), "function" === typeof c)) for (t = c.call(t), s = 0; !(a = t.next()).done; ) u += e((a = a.value), (c = n + z(a, s++)), r, i);
                          else if ("object" === a) throw ((r = "" + t), Error(v(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "")));
                          return u;
                      })(e, "", t, n);
            }
            function z(e, t) {
                return "object" === typeof e && null !== e && null != e.key
                    ? (function (e) {
                          var t = { "=": "=0", ":": "=2" };
                          return (
                              "$" +
                              ("" + e).replace(/[=:]/g, function (e) {
                                  return t[e];
                              })
                          );
                      })(e.key)
                    : t.toString(36);
            }
            function F(e, t) {
                e.func.call(e.context, t, e.count++);
            }
            function I(e, t, n) {
                var r = e.result,
                    i = e.keyPrefix;
                (e = e.func.call(e.context, t, e.count++)),
                    Array.isArray(e)
                        ? _(e, r, n, function (e) {
                              return e;
                          })
                        : null != e &&
                          (M(e) &&
                              (e = (function (e, t) {
                                  return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                              })(e, i + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(N, "$&/") + "/") + n)),
                          r.push(e));
            }
            function _(e, t, n, r, i) {
                var o = "";
                null != n && (o = ("" + n).replace(N, "$&/") + "/"), A(e, I, (t = P(t, o, r, i))), D(t);
            }
            var R = { current: null };
            function W() {
                var e = R.current;
                if (null === e) throw Error(v(321));
                return e;
            }
            var H = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: S, IsSomeRendererActing: { current: !1 }, assign: r };
            (t.Children = {
                map: function (e, t, n) {
                    if (null == e) return e;
                    var r = [];
                    return _(e, r, null, t, n), r;
                },
                forEach: function (e, t, n) {
                    if (null == e) return e;
                    A(e, F, (t = P(null, null, t, n))), D(t);
                },
                count: function (e) {
                    return A(
                        e,
                        function () {
                            return null;
                        },
                        null
                    );
                },
                toArray: function (e) {
                    var t = [];
                    return (
                        _(e, t, null, function (e) {
                            return e;
                        }),
                        t
                    );
                },
                only: function (e) {
                    if (!M(e)) throw Error(v(143));
                    return e;
                },
            }),
                (t.Component = w),
                (t.Fragment = a),
                (t.Profiler = s),
                (t.PureComponent = k),
                (t.StrictMode = u),
                (t.Suspense = p),
                (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H),
                (t.cloneElement = function (e, t, n) {
                    if (null === e || void 0 === e) throw Error(v(267, e));
                    var i = r({}, e.props),
                        l = e.key,
                        a = e.ref,
                        u = e._owner;
                    if (null != t) {
                        if ((void 0 !== t.ref && ((a = t.ref), (u = S.current)), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps)) var s = e.type.defaultProps;
                        for (c in t) T.call(t, c) && !E.hasOwnProperty(c) && (i[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
                    }
                    var c = arguments.length - 2;
                    if (1 === c) i.children = n;
                    else if (1 < c) {
                        s = Array(c);
                        for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
                        i.children = s;
                    }
                    return { $$typeof: o, type: e.type, key: l, ref: a, props: i, _owner: u };
                }),
                (t.createContext = function (e, t) {
                    return void 0 === t && (t = null), ((e = { $$typeof: f, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }).Provider = { $$typeof: c, _context: e }), (e.Consumer = e);
                }),
                (t.createElement = L),
                (t.createFactory = function (e) {
                    var t = L.bind(null, e);
                    return (t.type = e), t;
                }),
                (t.createRef = function () {
                    return { current: null };
                }),
                (t.forwardRef = function (e) {
                    return { $$typeof: d, render: e };
                }),
                (t.isValidElement = M),
                (t.lazy = function (e) {
                    return { $$typeof: m, _ctor: e, _status: -1, _result: null };
                }),
                (t.memo = function (e, t) {
                    return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
                }),
                (t.useCallback = function (e, t) {
                    return W().useCallback(e, t);
                }),
                (t.useContext = function (e, t) {
                    return W().useContext(e, t);
                }),
                (t.useDebugValue = function () {}),
                (t.useEffect = function (e, t) {
                    return W().useEffect(e, t);
                }),
                (t.useImperativeHandle = function (e, t, n) {
                    return W().useImperativeHandle(e, t, n);
                }),
                (t.useLayoutEffect = function (e, t) {
                    return W().useLayoutEffect(e, t);
                }),
                (t.useMemo = function (e, t) {
                    return W().useMemo(e, t);
                }),
                (t.useReducer = function (e, t, n) {
                    return W().useReducer(e, t, n);
                }),
                (t.useRef = function (e) {
                    return W().useRef(e);
                }),
                (t.useState = function (e) {
                    return W().useState(e);
                }),
                (t.version = "16.13.1");
        },
        function (e, t, n) {
            "use strict";
            var r = n(0),
                i = n(3),
                o = n(9);
            function l(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            if (!r) throw Error(l(227));
            function a(e, t, n, r, i, o, l, a, u) {
                var s = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, s);
                } catch (c) {
                    this.onError(c);
                }
            }
            var u = !1,
                s = null,
                c = !1,
                f = null,
                d = {
                    onError: function (e) {
                        (u = !0), (s = e);
                    },
                };
            function p(e, t, n, r, i, o, l, c, f) {
                (u = !1), (s = null), a.apply(d, arguments);
            }
            var h = null,
                m = null,
                g = null;
            function v(e, t, n) {
                var r = e.type || "unknown-event";
                (e.currentTarget = g(n)),
                    (function (e, t, n, r, i, o, a, d, h) {
                        if ((p.apply(this, arguments), u)) {
                            if (!u) throw Error(l(198));
                            var m = s;
                            (u = !1), (s = null), c || ((c = !0), (f = m));
                        }
                    })(r, t, void 0, e),
                    (e.currentTarget = null);
            }
            var y = null,
                b = {};
            function w() {
                if (y)
                    for (var e in b) {
                        var t = b[e],
                            n = y.indexOf(e);
                        if (!(-1 < n)) throw Error(l(96, e));
                        if (!k[n]) {
                            if (!t.extractEvents) throw Error(l(97, e));
                            for (var r in ((k[n] = t), (n = t.eventTypes))) {
                                var i = void 0,
                                    o = n[r],
                                    a = t,
                                    u = r;
                                if (C.hasOwnProperty(u)) throw Error(l(99, u));
                                C[u] = o;
                                var s = o.phasedRegistrationNames;
                                if (s) {
                                    for (i in s) s.hasOwnProperty(i) && x(s[i], a, u);
                                    i = !0;
                                } else o.registrationName ? (x(o.registrationName, a, u), (i = !0)) : (i = !1);
                                if (!i) throw Error(l(98, r, e));
                            }
                        }
                    }
            }
            function x(e, t, n) {
                if (S[e]) throw Error(l(100, e));
                (S[e] = t), (T[e] = t.eventTypes[n].dependencies);
            }
            var k = [],
                C = {},
                S = {},
                T = {};
            function E(e) {
                var t,
                    n = !1;
                for (t in e)
                    if (e.hasOwnProperty(t)) {
                        var r = e[t];
                        if (!b.hasOwnProperty(t) || b[t] !== r) {
                            if (b[t]) throw Error(l(102, t));
                            (b[t] = r), (n = !0);
                        }
                    }
                n && w();
            }
            var L = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                M = null,
                N = null,
                O = null;
            function P(e) {
                if ((e = m(e))) {
                    if ("function" !== typeof M) throw Error(l(280));
                    var t = e.stateNode;
                    t && ((t = h(t)), M(e.stateNode, e.type, t));
                }
            }
            function D(e) {
                N ? (O ? O.push(e) : (O = [e])) : (N = e);
            }
            function A() {
                if (N) {
                    var e = N,
                        t = O;
                    if (((O = N = null), P(e), t)) for (e = 0; e < t.length; e++) P(t[e]);
                }
            }
            function z(e, t) {
                return e(t);
            }
            function F(e, t, n, r, i) {
                return e(t, n, r, i);
            }
            function I() {}
            var _ = z,
                R = !1,
                W = !1;
            function H() {
                (null === N && null === O) || (I(), A());
            }
            function B(e, t, n) {
                if (W) return e(t, n);
                W = !0;
                try {
                    return _(e, t, n);
                } finally {
                    (W = !1), H();
                }
            }
            var U = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                j = Object.prototype.hasOwnProperty,
                V = {},
                K = {};
            function $(e, t, n, r, i, o) {
                (this.acceptsBooleans = 2 === t || 3 === t || 4 === t), (this.attributeName = r), (this.attributeNamespace = i), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = o);
            }
            var G = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
                G[e] = new $(e, 0, !1, e, null, !1);
            }),
                [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"],
                ].forEach(function (e) {
                    var t = e[0];
                    G[t] = new $(t, 1, !1, e[1], null, !1);
                }),
                ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
                    G[e] = new $(e, 2, !1, e.toLowerCase(), null, !1);
                }),
                ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
                    G[e] = new $(e, 2, !1, e, null, !1);
                }),
                "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
                    G[e] = new $(e, 3, !1, e.toLowerCase(), null, !1);
                }),
                ["checked", "multiple", "muted", "selected"].forEach(function (e) {
                    G[e] = new $(e, 3, !0, e, null, !1);
                }),
                ["capture", "download"].forEach(function (e) {
                    G[e] = new $(e, 4, !1, e, null, !1);
                }),
                ["cols", "rows", "size", "span"].forEach(function (e) {
                    G[e] = new $(e, 6, !1, e, null, !1);
                }),
                ["rowSpan", "start"].forEach(function (e) {
                    G[e] = new $(e, 5, !1, e.toLowerCase(), null, !1);
                });
            var q = /[\-:]([a-z])/g;
            function Q(e) {
                return e[1].toUpperCase();
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stopColor stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset strokeLinecap strokeLinejoin stroke-miterlimit stroke-opacity strokeWidth text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
                .split(" ")
                .forEach(function (e) {
                    var t = e.replace(q, Q);
                    G[t] = new $(t, 1, !1, e, null, !1);
                }),
                "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
                    var t = e.replace(q, Q);
                    G[t] = new $(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
                }),
                ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
                    var t = e.replace(q, Q);
                    G[t] = new $(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
                }),
                ["tabIndex", "crossOrigin"].forEach(function (e) {
                    G[e] = new $(e, 1, !1, e.toLowerCase(), null, !1);
                }),
                (G.xlinkHref = new $("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0)),
                ["src", "href", "action", "formAction"].forEach(function (e) {
                    G[e] = new $(e, 1, !1, e.toLowerCase(), null, !0);
                });
            var X = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            function Y(e, t, n, r) {
                var i = G.hasOwnProperty(t) ? G[t] : null;
                (null !== i ? 0 === i.type : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
                    ((function (e, t, n, r) {
                        if (
                            null === t ||
                            "undefined" === typeof t ||
                            (function (e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1;
                                }
                            })(e, t, n, r)
                        )
                            return !0;
                        if (r) return !1;
                        if (null !== n)
                            switch (n.type) {
                                case 3:
                                    return !t;
                                case 4:
                                    return !1 === t;
                                case 5:
                                    return isNaN(t);
                                case 6:
                                    return isNaN(t) || 1 > t;
                            }
                        return !1;
                    })(t, n, i, r) && (n = null),
                    r || null === i
                        ? (function (e) {
                              return !!j.call(K, e) || (!j.call(V, e) && (U.test(e) ? (K[e] = !0) : ((V[e] = !0), !1)));
                          })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
                        : i.mustUseProperty
                        ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
                        : ((t = i.attributeName), (r = i.attributeNamespace), null === n ? e.removeAttribute(t) : ((n = 3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
            }
            X.hasOwnProperty("ReactCurrentDispatcher") || (X.ReactCurrentDispatcher = { current: null }), X.hasOwnProperty("ReactCurrentBatchConfig") || (X.ReactCurrentBatchConfig = { suspense: null });
            var Z = /^(.*)[\\\/]/,
                J = "function" === typeof Symbol && Symbol.for,
                ee = J ? Symbol.for("react.element") : 60103,
                te = J ? Symbol.for("react.portal") : 60106,
                ne = J ? Symbol.for("react.fragment") : 60107,
                re = J ? Symbol.for("react.strict_mode") : 60108,
                ie = J ? Symbol.for("react.profiler") : 60114,
                oe = J ? Symbol.for("react.provider") : 60109,
                le = J ? Symbol.for("react.context") : 60110,
                ae = J ? Symbol.for("react.concurrent_mode") : 60111,
                ue = J ? Symbol.for("react.forward_ref") : 60112,
                se = J ? Symbol.for("react.suspense") : 60113,
                ce = J ? Symbol.for("react.suspense_list") : 60120,
                fe = J ? Symbol.for("react.memo") : 60115,
                de = J ? Symbol.for("react.lazy") : 60116,
                pe = J ? Symbol.for("react.block") : 60121,
                he = "function" === typeof Symbol && Symbol.iterator;
            function me(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = (he && e[he]) || e["@@iterator"]) ? e : null;
            }
            function ge(e) {
                if (null == e) return null;
                if ("function" === typeof e) return e.displayName || e.name || null;
                if ("string" === typeof e) return e;
                switch (e) {
                    case ne:
                        return "Fragment";
                    case te:
                        return "Portal";
                    case ie:
                        return "Profiler";
                    case re:
                        return "StrictMode";
                    case se:
                        return "Suspense";
                    case ce:
                        return "SuspenseList";
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                        case le:
                            return "Context.Consumer";
                        case oe:
                            return "Context.Provider";
                        case ue:
                            var t = e.render;
                            return (t = t.displayName || t.name || ""), e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case fe:
                            return ge(e.type);
                        case pe:
                            return ge(e.render);
                        case de:
                            if ((e = 1 === e._status ? e._result : null)) return ge(e);
                    }
                return null;
            }
            function ve(e) {
                var t = "";
                do {
                    e: switch (e.tag) {
                        case 3:
                        case 4:
                        case 6:
                        case 7:
                        case 10:
                        case 9:
                            var n = "";
                            break e;
                        default:
                            var r = e._debugOwner,
                                i = e._debugSource,
                                o = ge(e.type);
                            (n = null), r && (n = ge(r.type)), (r = o), (o = ""), i ? (o = " (at " + i.fileName.replace(Z, "") + ":" + i.lineNumber + ")") : n && (o = " (created by " + n + ")"), (n = "\n    in " + (r || "Unknown") + o);
                    }
                    (t += n), (e = e.return);
                } while (e);
                return t;
            }
            function ye(e) {
                switch (typeof e) {
                    case "boolean":
                    case "number":
                    case "object":
                    case "string":
                    case "undefined":
                        return e;
                    default:
                        return "";
                }
            }
            function be(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
            }
            function we(e) {
                e._valueTracker ||
                    (e._valueTracker = (function (e) {
                        var t = be(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var i = n.get,
                                o = n.set;
                            return (
                                Object.defineProperty(e, t, {
                                    configurable: !0,
                                    get: function () {
                                        return i.call(this);
                                    },
                                    set: function (e) {
                                        (r = "" + e), o.call(this, e);
                                    },
                                }),
                                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                                {
                                    getValue: function () {
                                        return r;
                                    },
                                    setValue: function (e) {
                                        r = "" + e;
                                    },
                                    stopTracking: function () {
                                        (e._valueTracker = null), delete e[t];
                                    },
                                }
                            );
                        }
                    })(e));
            }
            function xe(e) {
                if (!e) return !1;
                var t = e._valueTracker;
                if (!t) return !0;
                var n = t.getValue(),
                    r = "";
                return e && (r = be(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
            }
            function ke(e, t) {
                var n = t.checked;
                return i({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked });
            }
            function Ce(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue,
                    r = null != t.checked ? t.checked : t.defaultChecked;
                (n = ye(null != t.value ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value });
            }
            function Se(e, t) {
                null != (t = t.checked) && Y(e, "checked", t, !1);
            }
            function Te(e, t) {
                Se(e, t);
                var n = ye(t.value),
                    r = t.type;
                if (null != n) "number" === r ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? Le(e, t.type, n) : t.hasOwnProperty("defaultValue") && Le(e, t.type, ye(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
            }
            function Ee(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
                    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
                }
                "" !== (n = e.name) && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), "" !== n && (e.name = n);
            }
            function Le(e, t, n) {
                ("number" === t && e.ownerDocument.activeElement === e) || (null == n ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
            }
            function Me(e, t) {
                return (
                    (e = i({ children: void 0 }, t)),
                    (t = (function (e) {
                        var t = "";
                        return (
                            r.Children.forEach(e, function (e) {
                                null != e && (t += e);
                            }),
                            t
                        );
                    })(t.children)) && (e.children = t),
                    e
                );
            }
            function Ne(e, t, n, r) {
                if (((e = e.options), t)) {
                    t = {};
                    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
                    for (n = 0; n < e.length; n++) (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
                } else {
                    for (n = "" + ye(n), t = null, i = 0; i < e.length; i++) {
                        if (e[i].value === n) return (e[i].selected = !0), void (r && (e[i].defaultSelected = !0));
                        null !== t || e[i].disabled || (t = e[i]);
                    }
                    null !== t && (t.selected = !0);
                }
            }
            function Oe(e, t) {
                if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
                return i({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
            }
            function Pe(e, t) {
                var n = t.value;
                if (null == n) {
                    if (((n = t.children), (t = t.defaultValue), null != n)) {
                        if (null != t) throw Error(l(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length)) throw Error(l(93));
                            n = n[0];
                        }
                        t = n;
                    }
                    null == t && (t = ""), (n = t);
                }
                e._wrapperState = { initialValue: ye(n) };
            }
            function De(e, t) {
                var n = ye(t.value),
                    r = ye(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
            }
            function Ae(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
            }
            var ze = "http://www.w3.org/1999/xhtml",
                Fe = "http://www.w3.org/2000/svg";
            function Ie(e) {
                switch (e) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml";
                }
            }
            function _e(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? Ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
            }
            var Re,
                We = (function (e) {
                    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
                        ? function (t, n, r, i) {
                              MSApp.execUnsafeLocalFunction(function () {
                                  return e(t, n);
                              });
                          }
                        : e;
                })(function (e, t) {
                    if (e.namespaceURI !== Fe || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((Re = Re || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Re.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
                        for (; t.firstChild; ) e.appendChild(t.firstChild);
                    }
                });
            function He(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
                }
                e.textContent = t;
            }
            function Be(e, t) {
                var n = {};
                return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
            }
            var Ue = { animationend: Be("Animation", "AnimationEnd"), animationiteration: Be("Animation", "AnimationIteration"), animationstart: Be("Animation", "AnimationStart"), transitionend: Be("Transition", "TransitionEnd") },
                je = {},
                Ve = {};
            function Ke(e) {
                if (je[e]) return je[e];
                if (!Ue[e]) return e;
                var t,
                    n = Ue[e];
                for (t in n) if (n.hasOwnProperty(t) && t in Ve) return (je[e] = n[t]);
                return e;
            }
            L && ((Ve = document.createElement("div").style), "AnimationEvent" in window || (delete Ue.animationend.animation, delete Ue.animationiteration.animation, delete Ue.animationstart.animation), "TransitionEvent" in window || delete Ue.transitionend.transition);
            var $e = Ke("animationend"),
                Ge = Ke("animationiteration"),
                qe = Ke("animationstart"),
                Qe = Ke("transitionend"),
                Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Ye = new ("function" === typeof WeakMap ? WeakMap : Map)();
            function Ze(e) {
                var t = Ye.get(e);
                return void 0 === t && ((t = new Map()), Ye.set(e, t)), t;
            }
            function Je(e) {
                var t = e,
                    n = e;
                if (e.alternate) for (; t.return; ) t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
                    } while (e);
                }
                return 3 === t.tag ? n : null;
            }
            function et(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
                }
                return null;
            }
            function tt(e) {
                if (Je(e) !== e) throw Error(l(188));
            }
            function nt(e) {
                if (
                    !(e = (function (e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Je(e))) throw Error(l(188));
                            return t !== e ? null : e;
                        }
                        for (var n = e, r = t; ; ) {
                            var i = n.return;
                            if (null === i) break;
                            var o = i.alternate;
                            if (null === o) {
                                if (null !== (r = i.return)) {
                                    n = r;
                                    continue;
                                }
                                break;
                            }
                            if (i.child === o.child) {
                                for (o = i.child; o; ) {
                                    if (o === n) return tt(i), e;
                                    if (o === r) return tt(i), t;
                                    o = o.sibling;
                                }
                                throw Error(l(188));
                            }
                            if (n.return !== r.return) (n = i), (r = o);
                            else {
                                for (var a = !1, u = i.child; u; ) {
                                    if (u === n) {
                                        (a = !0), (n = i), (r = o);
                                        break;
                                    }
                                    if (u === r) {
                                        (a = !0), (r = i), (n = o);
                                        break;
                                    }
                                    u = u.sibling;
                                }
                                if (!a) {
                                    for (u = o.child; u; ) {
                                        if (u === n) {
                                            (a = !0), (n = o), (r = i);
                                            break;
                                        }
                                        if (u === r) {
                                            (a = !0), (r = o), (n = i);
                                            break;
                                        }
                                        u = u.sibling;
                                    }
                                    if (!a) throw Error(l(189));
                                }
                            }
                            if (n.alternate !== r) throw Error(l(190));
                        }
                        if (3 !== n.tag) throw Error(l(188));
                        return n.stateNode.current === n ? e : t;
                    })(e))
                )
                    return null;
                for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) (t.child.return = t), (t = t.child);
                    else {
                        if (t === e) break;
                        for (; !t.sibling; ) {
                            if (!t.return || t.return === e) return null;
                            t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                    }
                }
                return null;
            }
            function rt(e, t) {
                if (null == t) throw Error(l(30));
                return null == e ? t : Array.isArray(e) ? (Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e)) : Array.isArray(t) ? [e].concat(t) : [e, t];
            }
            function it(e, t, n) {
                Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
            }
            var ot = null;
            function lt(e) {
                if (e) {
                    var t = e._dispatchListeners,
                        n = e._dispatchInstances;
                    if (Array.isArray(t)) for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) v(e, t[r], n[r]);
                    else t && v(e, t, n);
                    (e._dispatchListeners = null), (e._dispatchInstances = null), e.isPersistent() || e.constructor.release(e);
                }
            }
            function at(e) {
                if ((null !== e && (ot = rt(ot, e)), (e = ot), (ot = null), e)) {
                    if ((it(e, lt), ot)) throw Error(l(95));
                    if (c) throw ((e = f), (c = !1), (f = null), e);
                }
            }
            function ut(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
            }
            function st(e) {
                if (!L) return !1;
                var t = (e = "on" + e) in document;
                return t || ((t = document.createElement("div")).setAttribute(e, "return;"), (t = "function" === typeof t[e])), t;
            }
            var ct = [];
            function ft(e) {
                (e.topLevelType = null), (e.nativeEvent = null), (e.targetInst = null), (e.ancestors.length = 0), 10 > ct.length && ct.push(e);
            }
            function dt(e, t, n, r) {
                if (ct.length) {
                    var i = ct.pop();
                    return (i.topLevelType = e), (i.eventSystemFlags = r), (i.nativeEvent = t), (i.targetInst = n), i;
                }
                return { topLevelType: e, eventSystemFlags: r, nativeEvent: t, targetInst: n, ancestors: [] };
            }
            function pt(e) {
                var t = e.targetInst,
                    n = t;
                do {
                    if (!n) {
                        e.ancestors.push(n);
                        break;
                    }
                    var r = n;
                    if (3 === r.tag) r = r.stateNode.containerInfo;
                    else {
                        for (; r.return; ) r = r.return;
                        r = 3 !== r.tag ? null : r.stateNode.containerInfo;
                    }
                    if (!r) break;
                    (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = Ln(r));
                } while (n);
                for (n = 0; n < e.ancestors.length; n++) {
                    t = e.ancestors[n];
                    var i = ut(e.nativeEvent);
                    r = e.topLevelType;
                    var o = e.nativeEvent,
                        l = e.eventSystemFlags;
                    0 === n && (l |= 64);
                    for (var a = null, u = 0; u < k.length; u++) {
                        var s = k[u];
                        s && (s = s.extractEvents(r, t, o, i, l)) && (a = rt(a, s));
                    }
                    at(a);
                }
            }
            function ht(e, t, n) {
                if (!n.has(e)) {
                    switch (e) {
                        case "scroll":
                            qt(t, "scroll", !0);
                            break;
                        case "focus":
                        case "blur":
                            qt(t, "focus", !0), qt(t, "blur", !0), n.set("blur", null), n.set("focus", null);
                            break;
                        case "cancel":
                        case "close":
                            st(e) && qt(t, e, !0);
                            break;
                        case "invalid":
                        case "submit":
                        case "reset":
                            break;
                        default:
                            -1 === Xe.indexOf(e) && Gt(e, t);
                    }
                    n.set(e, null);
                }
            }
            var mt,
                gt,
                vt,
                yt = !1,
                bt = [],
                wt = null,
                xt = null,
                kt = null,
                Ct = new Map(),
                St = new Map(),
                Tt = [],
                Et = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
                Lt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
            function Mt(e, t, n, r, i) {
                return { blockedOn: e, topLevelType: t, eventSystemFlags: 32 | n, nativeEvent: i, container: r };
            }
            function Nt(e, t) {
                switch (e) {
                    case "focus":
                    case "blur":
                        wt = null;
                        break;
                    case "dragenter":
                    case "dragleave":
                        xt = null;
                        break;
                    case "mouseover":
                    case "mouseout":
                        kt = null;
                        break;
                    case "pointerover":
                    case "pointerout":
                        Ct.delete(t.pointerId);
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                        St.delete(t.pointerId);
                }
            }
            function Ot(e, t, n, r, i, o) {
                return null === e || e.nativeEvent !== o ? ((e = Mt(t, n, r, i, o)), null !== t && null !== (t = Mn(t)) && gt(t), e) : ((e.eventSystemFlags |= r), e);
            }
            function Pt(e) {
                var t = Ln(e.target);
                if (null !== t) {
                    var n = Je(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = et(n)))
                                return (
                                    (e.blockedOn = t),
                                    void o.unstable_runWithPriority(e.priority, function () {
                                        vt(n);
                                    })
                                );
                        } else if (3 === t && n.stateNode.hydrate) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
                }
                e.blockedOn = null;
            }
            function Dt(e) {
                if (null !== e.blockedOn) return !1;
                var t = Zt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                if (null !== t) {
                    var n = Mn(t);
                    return null !== n && gt(n), (e.blockedOn = t), !1;
                }
                return !0;
            }
            function At(e, t, n) {
                Dt(e) && n.delete(t);
            }
            function zt() {
                for (yt = !1; 0 < bt.length; ) {
                    var e = bt[0];
                    if (null !== e.blockedOn) {
                        null !== (e = Mn(e.blockedOn)) && mt(e);
                        break;
                    }
                    var t = Zt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                    null !== t ? (e.blockedOn = t) : bt.shift();
                }
                null !== wt && Dt(wt) && (wt = null), null !== xt && Dt(xt) && (xt = null), null !== kt && Dt(kt) && (kt = null), Ct.forEach(At), St.forEach(At);
            }
            function Ft(e, t) {
                e.blockedOn === t && ((e.blockedOn = null), yt || ((yt = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, zt)));
            }
            function It(e) {
                function t(t) {
                    return Ft(t, e);
                }
                if (0 < bt.length) {
                    Ft(bt[0], e);
                    for (var n = 1; n < bt.length; n++) {
                        var r = bt[n];
                        r.blockedOn === e && (r.blockedOn = null);
                    }
                }
                for (null !== wt && Ft(wt, e), null !== xt && Ft(xt, e), null !== kt && Ft(kt, e), Ct.forEach(t), St.forEach(t), n = 0; n < Tt.length; n++) (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; ) Pt(n), null === n.blockedOn && Tt.shift();
            }
            var _t = {},
                Rt = new Map(),
                Wt = new Map(),
                Ht = [
                    "abort",
                    "abort",
                    $e,
                    "animationEnd",
                    Ge,
                    "animationIteration",
                    qe,
                    "animationStart",
                    "canplay",
                    "canPlay",
                    "canplaythrough",
                    "canPlayThrough",
                    "durationchange",
                    "durationChange",
                    "emptied",
                    "emptied",
                    "encrypted",
                    "encrypted",
                    "ended",
                    "ended",
                    "error",
                    "error",
                    "gotpointercapture",
                    "gotPointerCapture",
                    "load",
                    "load",
                    "loadeddata",
                    "loadedData",
                    "loadedmetadata",
                    "loadedMetadata",
                    "loadstart",
                    "loadStart",
                    "lostpointercapture",
                    "lostPointerCapture",
                    "playing",
                    "playing",
                    "progress",
                    "progress",
                    "seeking",
                    "seeking",
                    "stalled",
                    "stalled",
                    "suspend",
                    "suspend",
                    "timeupdate",
                    "timeUpdate",
                    Qe,
                    "transitionEnd",
                    "waiting",
                    "waiting",
                ];
            function Bt(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n],
                        i = e[n + 1],
                        o = "on" + (i[0].toUpperCase() + i.slice(1));
                    (o = { phasedRegistrationNames: { bubbled: o, captured: o + "Capture" }, dependencies: [r], eventPriority: t }), Wt.set(r, t), Rt.set(r, o), (_t[i] = o);
                }
            }
            Bt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),
                Bt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
                Bt(Ht, 2);
            for (var Ut = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), jt = 0; jt < Ut.length; jt++) Wt.set(Ut[jt], 0);
            var Vt = o.unstable_UserBlockingPriority,
                Kt = o.unstable_runWithPriority,
                $t = !0;
            function Gt(e, t) {
                qt(t, e, !1);
            }
            function qt(e, t, n) {
                var r = Wt.get(t);
                switch (void 0 === r ? 2 : r) {
                    case 0:
                        r = Qt.bind(null, t, 1, e);
                        break;
                    case 1:
                        r = Xt.bind(null, t, 1, e);
                        break;
                    default:
                        r = Yt.bind(null, t, 1, e);
                }
                n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
            }
            function Qt(e, t, n, r) {
                R || I();
                var i = Yt,
                    o = R;
                R = !0;
                try {
                    F(i, e, t, n, r);
                } finally {
                    (R = o) || H();
                }
            }
            function Xt(e, t, n, r) {
                Kt(Vt, Yt.bind(null, e, t, n, r));
            }
            function Yt(e, t, n, r) {
                if ($t)
                    if (0 < bt.length && -1 < Et.indexOf(e)) (e = Mt(null, e, t, n, r)), bt.push(e);
                    else {
                        var i = Zt(e, t, n, r);
                        if (null === i) Nt(e, r);
                        else if (-1 < Et.indexOf(e)) (e = Mt(i, e, t, n, r)), bt.push(e);
                        else if (
                            !(function (e, t, n, r, i) {
                                switch (t) {
                                    case "focus":
                                        return (wt = Ot(wt, e, t, n, r, i)), !0;
                                    case "dragenter":
                                        return (xt = Ot(xt, e, t, n, r, i)), !0;
                                    case "mouseover":
                                        return (kt = Ot(kt, e, t, n, r, i)), !0;
                                    case "pointerover":
                                        var o = i.pointerId;
                                        return Ct.set(o, Ot(Ct.get(o) || null, e, t, n, r, i)), !0;
                                    case "gotpointercapture":
                                        return (o = i.pointerId), St.set(o, Ot(St.get(o) || null, e, t, n, r, i)), !0;
                                }
                                return !1;
                            })(i, e, t, n, r)
                        ) {
                            Nt(e, r), (e = dt(e, r, null, t));
                            try {
                                B(pt, e);
                            } finally {
                                ft(e);
                            }
                        }
                    }
            }
            function Zt(e, t, n, r) {
                if (null !== (n = Ln((n = ut(r))))) {
                    var i = Je(n);
                    if (null === i) n = null;
                    else {
                        var o = i.tag;
                        if (13 === o) {
                            if (null !== (n = et(i))) return n;
                            n = null;
                        } else if (3 === o) {
                            if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                            n = null;
                        } else i !== n && (n = null);
                    }
                }
                e = dt(e, r, n, t);
                try {
                    B(pt, e);
                } finally {
                    ft(e);
                }
                return null;
            }
            var Jt = {
                    animationIterationCount: !0,
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
                en = ["Webkit", "ms", "Moz", "O"];
            function tn(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || (Jt.hasOwnProperty(e) && Jt[e]) ? ("" + t).trim() : t + "px";
            }
            function nn(e, t) {
                for (var n in ((e = e.style), t))
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--"),
                            i = tn(n, t[n], r);
                        "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
                    }
            }
            Object.keys(Jt).forEach(function (e) {
                en.forEach(function (t) {
                    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jt[t] = Jt[e]);
                });
            });
            var rn = i({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
            function on(e, t) {
                if (t) {
                    if (rn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(l(137, e, ""));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children) throw Error(l(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(l(61));
                    }
                    if (null != t.style && "object" !== typeof t.style) throw Error(l(62, ""));
                }
            }
            function ln(e, t) {
                if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
            var an = ze;
            function un(e, t) {
                var n = Ze((e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument));
                t = T[t];
                for (var r = 0; r < t.length; r++) ht(t[r], e, n);
            }
            function sn() {}
            function cn(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return e.activeElement || e.body;
                } catch (t) {
                    return e.body;
                }
            }
            function fn(e) {
                for (; e && e.firstChild; ) e = e.firstChild;
                return e;
            }
            function dn(e, t) {
                var n,
                    r = fn(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
                        e = n;
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e;
                            }
                            r = r.parentNode;
                        }
                        r = void 0;
                    }
                    r = fn(r);
                }
            }
            function pn() {
                for (var e = window, t = cn(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href;
                    } catch (r) {
                        n = !1;
                    }
                    if (!n) break;
                    t = cn((e = t.contentWindow).document);
                }
                return t;
            }
            function hn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && (("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type)) || "textarea" === t || "true" === e.contentEditable);
            }
            var mn = null,
                gn = null;
            function vn(e, t) {
                switch (e) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        return !!t.autoFocus;
                }
                return !1;
            }
            function yn(e, t) {
                return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || ("object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html);
            }
            var bn = "function" === typeof setTimeout ? setTimeout : void 0,
                wn = "function" === typeof clearTimeout ? clearTimeout : void 0;
            function xn(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t) break;
                }
                return e;
            }
            function kn(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t) return e;
                            t--;
                        } else "/$" === n && t++;
                    }
                    e = e.previousSibling;
                }
                return null;
            }
            var Cn = Math.random().toString(36).slice(2),
                Sn = "__reactInternalInstance$" + Cn,
                Tn = "__reactEventHandlers$" + Cn,
                En = "__reactContainere$" + Cn;
            function Ln(e) {
                var t = e[Sn];
                if (t) return t;
                for (var n = e.parentNode; n; ) {
                    if ((t = n[En] || n[Sn])) {
                        if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                            for (e = kn(e); null !== e; ) {
                                if ((n = e[Sn])) return n;
                                e = kn(e);
                            }
                        return t;
                    }
                    n = (e = n).parentNode;
                }
                return null;
            }
            function Mn(e) {
                return !(e = e[Sn] || e[En]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
            }
            function Nn(e) {
                if (5 === e.tag || 6 === e.tag) return e.stateNode;
                throw Error(l(33));
            }
            function On(e) {
                return e[Tn] || null;
            }
            function Pn(e) {
                do {
                    e = e.return;
                } while (e && 5 !== e.tag);
                return e || null;
            }
            function Dn(e, t) {
                var n = e.stateNode;
                if (!n) return null;
                var r = h(n);
                if (!r) return null;
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
                        (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), (e = !r);
                        break e;
                    default:
                        e = !1;
                }
                if (e) return null;
                if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
                return n;
            }
            function An(e, t, n) {
                (t = Dn(e, n.dispatchConfig.phasedRegistrationNames[t])) && ((n._dispatchListeners = rt(n._dispatchListeners, t)), (n._dispatchInstances = rt(n._dispatchInstances, e)));
            }
            function zn(e) {
                if (e && e.dispatchConfig.phasedRegistrationNames) {
                    for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Pn(t));
                    for (t = n.length; 0 < t--; ) An(n[t], "captured", e);
                    for (t = 0; t < n.length; t++) An(n[t], "bubbled", e);
                }
            }
            function Fn(e, t, n) {
                e && n && n.dispatchConfig.registrationName && (t = Dn(e, n.dispatchConfig.registrationName)) && ((n._dispatchListeners = rt(n._dispatchListeners, t)), (n._dispatchInstances = rt(n._dispatchInstances, e)));
            }
            function In(e) {
                e && e.dispatchConfig.registrationName && Fn(e._targetInst, null, e);
            }
            function _n(e) {
                it(e, zn);
            }
            var Rn = null,
                Wn = null,
                Hn = null;
            function Bn() {
                if (Hn) return Hn;
                var e,
                    t,
                    n = Wn,
                    r = n.length,
                    i = "value" in Rn ? Rn.value : Rn.textContent,
                    o = i.length;
                for (e = 0; e < r && n[e] === i[e]; e++);
                var l = r - e;
                for (t = 1; t <= l && n[r - t] === i[o - t]; t++);
                return (Hn = i.slice(e, 1 < t ? 1 - t : void 0));
            }
            function Un() {
                return !0;
            }
            function jn() {
                return !1;
            }
            function Vn(e, t, n, r) {
                for (var i in ((this.dispatchConfig = e), (this._targetInst = t), (this.nativeEvent = n), (e = this.constructor.Interface))) e.hasOwnProperty(i) && ((t = e[i]) ? (this[i] = t(n)) : "target" === i ? (this.target = r) : (this[i] = n[i]));
                return (this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Un : jn), (this.isPropagationStopped = jn), this;
            }
            function Kn(e, t, n, r) {
                if (this.eventPool.length) {
                    var i = this.eventPool.pop();
                    return this.call(i, e, t, n, r), i;
                }
                return new this(e, t, n, r);
            }
            function $n(e) {
                if (!(e instanceof this)) throw Error(l(279));
                e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
            }
            function Gn(e) {
                (e.eventPool = []), (e.getPooled = Kn), (e.release = $n);
            }
            i(Vn.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var e = this.nativeEvent;
                    e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), (this.isDefaultPrevented = Un));
                },
                stopPropagation: function () {
                    var e = this.nativeEvent;
                    e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), (this.isPropagationStopped = Un));
                },
                persist: function () {
                    this.isPersistent = Un;
                },
                isPersistent: jn,
                destructor: function () {
                    var e,
                        t = this.constructor.Interface;
                    for (e in t) this[e] = null;
                    (this.nativeEvent = this._targetInst = this.dispatchConfig = null), (this.isPropagationStopped = this.isDefaultPrevented = jn), (this._dispatchInstances = this._dispatchListeners = null);
                },
            }),
                (Vn.Interface = {
                    type: null,
                    target: null,
                    currentTarget: function () {
                        return null;
                    },
                    eventPhase: null,
                    bubbles: null,
                    cancelable: null,
                    timeStamp: function (e) {
                        return e.timeStamp || Date.now();
                    },
                    defaultPrevented: null,
                    isTrusted: null,
                }),
                (Vn.extend = function (e) {
                    function t() {}
                    function n() {
                        return r.apply(this, arguments);
                    }
                    var r = this;
                    t.prototype = r.prototype;
                    var o = new t();
                    return i(o, n.prototype), (n.prototype = o), (n.prototype.constructor = n), (n.Interface = i({}, r.Interface, e)), (n.extend = r.extend), Gn(n), n;
                }),
                Gn(Vn);
            var qn = Vn.extend({ data: null }),
                Qn = Vn.extend({ data: null }),
                Xn = [9, 13, 27, 32],
                Yn = L && "CompositionEvent" in window,
                Zn = null;
            L && "documentMode" in document && (Zn = document.documentMode);
            var Jn = L && "TextEvent" in window && !Zn,
                er = L && (!Yn || (Zn && 8 < Zn && 11 >= Zn)),
                tr = String.fromCharCode(32),
                nr = {
                    beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] },
                    compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") },
                    compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart", captured: "onCompositionStartCapture" }, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") },
                    compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") },
                },
                rr = !1;
            function ir(e, t) {
                switch (e) {
                    case "keyup":
                        return -1 !== Xn.indexOf(t.keyCode);
                    case "keydown":
                        return 229 !== t.keyCode;
                    case "keypress":
                    case "mousedown":
                    case "blur":
                        return !0;
                    default:
                        return !1;
                }
            }
            function or(e) {
                return "object" === typeof (e = e.detail) && "data" in e ? e.data : null;
            }
            var lr = !1;
            var ar = {
                    eventTypes: nr,
                    extractEvents: function (e, t, n, r) {
                        var i;
                        if (Yn)
                            e: {
                                switch (e) {
                                    case "compositionstart":
                                        var o = nr.compositionStart;
                                        break e;
                                    case "compositionend":
                                        o = nr.compositionEnd;
                                        break e;
                                    case "compositionupdate":
                                        o = nr.compositionUpdate;
                                        break e;
                                }
                                o = void 0;
                            }
                        else lr ? ir(e, n) && (o = nr.compositionEnd) : "keydown" === e && 229 === n.keyCode && (o = nr.compositionStart);
                        return (
                            o ? (er && "ko" !== n.locale && (lr || o !== nr.compositionStart ? o === nr.compositionEnd && lr && (i = Bn()) : ((Wn = "value" in (Rn = r) ? Rn.value : Rn.textContent), (lr = !0))), (o = qn.getPooled(o, t, n, r)), i ? (o.data = i) : null !== (i = or(n)) && (o.data = i), _n(o), (i = o)) : (i = null),
                            (e = Jn
                                ? (function (e, t) {
                                      switch (e) {
                                          case "compositionend":
                                              return or(t);
                                          case "keypress":
                                              return 32 !== t.which ? null : ((rr = !0), tr);
                                          case "textInput":
                                              return (e = t.data) === tr && rr ? null : e;
                                          default:
                                              return null;
                                      }
                                  })(e, n)
                                : (function (e, t) {
                                      if (lr) return "compositionend" === e || (!Yn && ir(e, t)) ? ((e = Bn()), (Hn = Wn = Rn = null), (lr = !1), e) : null;
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
                                              return er && "ko" !== t.locale ? null : t.data;
                                          default:
                                              return null;
                                      }
                                  })(e, n))
                                ? (((t = Qn.getPooled(nr.beforeInput, t, n, r)).data = e), _n(t))
                                : (t = null),
                            null === i ? t : null === t ? i : [i, t]
                        );
                    },
                },
                ur = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
            function sr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!ur[e.type] : "textarea" === t;
            }
            var cr = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
            function fr(e, t, n) {
                return ((e = Vn.getPooled(cr.change, e, t, n)).type = "change"), D(n), _n(e), e;
            }
            var dr = null,
                pr = null;
            function hr(e) {
                at(e);
            }
            function mr(e) {
                if (xe(Nn(e))) return e;
            }
            function gr(e, t) {
                if ("change" === e) return t;
            }
            var vr = !1;
            function yr() {
                dr && (dr.detachEvent("onpropertychange", br), (pr = dr = null));
            }
            function br(e) {
                if ("value" === e.propertyName && mr(pr))
                    if (((e = fr(pr, e, ut(e))), R)) at(e);
                    else {
                        R = !0;
                        try {
                            z(hr, e);
                        } finally {
                            (R = !1), H();
                        }
                    }
            }
            function wr(e, t, n) {
                "focus" === e ? (yr(), (pr = n), (dr = t).attachEvent("onpropertychange", br)) : "blur" === e && yr();
            }
            function xr(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e) return mr(pr);
            }
            function kr(e, t) {
                if ("click" === e) return mr(t);
            }
            function Cr(e, t) {
                if ("input" === e || "change" === e) return mr(t);
            }
            L && (vr = st("input") && (!document.documentMode || 9 < document.documentMode));
            var Sr = {
                    eventTypes: cr,
                    _isInputEventSupported: vr,
                    extractEvents: function (e, t, n, r) {
                        var i = t ? Nn(t) : window,
                            o = i.nodeName && i.nodeName.toLowerCase();
                        if ("select" === o || ("input" === o && "file" === i.type)) var l = gr;
                        else if (sr(i))
                            if (vr) l = Cr;
                            else {
                                l = xr;
                                var a = wr;
                            }
                        else (o = i.nodeName) && "input" === o.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (l = kr);
                        if (l && (l = l(e, t))) return fr(l, n, r);
                        a && a(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && Le(i, "number", i.value);
                    },
                },
                Tr = Vn.extend({ view: null, detail: null }),
                Er = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
            function Lr(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Er[e]) && !!t[e];
            }
            function Mr() {
                return Lr;
            }
            var Nr = 0,
                Or = 0,
                Pr = !1,
                Dr = !1,
                Ar = Tr.extend({
                    screenX: null,
                    screenY: null,
                    clientX: null,
                    clientY: null,
                    pageX: null,
                    pageY: null,
                    ctrlKey: null,
                    shiftKey: null,
                    altKey: null,
                    metaKey: null,
                    getModifierState: Mr,
                    button: null,
                    buttons: null,
                    relatedTarget: function (e) {
                        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
                    },
                    movementX: function (e) {
                        if ("movementX" in e) return e.movementX;
                        var t = Nr;
                        return (Nr = e.screenX), Pr ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Pr = !0), 0);
                    },
                    movementY: function (e) {
                        if ("movementY" in e) return e.movementY;
                        var t = Or;
                        return (Or = e.screenY), Dr ? ("mousemove" === e.type ? e.screenY - t : 0) : ((Dr = !0), 0);
                    },
                }),
                zr = Ar.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }),
                Fr = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: { registrationName: "onPointerLeave", dependencies: ["pointerout", "pointerover"] } },
                Ir = {
                    eventTypes: Fr,
                    extractEvents: function (e, t, n, r, i) {
                        var o = "mouseover" === e || "pointerover" === e,
                            l = "mouseout" === e || "pointerout" === e;
                        if ((o && 0 === (32 & i) && (n.relatedTarget || n.fromElement)) || (!l && !o)) return null;
                        ((o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window), l) ? ((l = t), null !== (t = (t = n.relatedTarget || n.toElement) ? Ln(t) : null) && (t !== Je(t) || (5 !== t.tag && 6 !== t.tag)) && (t = null)) : (l = null);
                        if (l === t) return null;
                        if ("mouseout" === e || "mouseover" === e)
                            var a = Ar,
                                u = Fr.mouseLeave,
                                s = Fr.mouseEnter,
                                c = "mouse";
                        else ("pointerout" !== e && "pointerover" !== e) || ((a = zr), (u = Fr.pointerLeave), (s = Fr.pointerEnter), (c = "pointer"));
                        if (((e = null == l ? o : Nn(l)), (o = null == t ? o : Nn(t)), ((u = a.getPooled(u, l, n, r)).type = c + "leave"), (u.target = e), (u.relatedTarget = o), ((n = a.getPooled(s, t, n, r)).type = c + "enter"), (n.target = o), (n.relatedTarget = e), (c = t), (r = l) && c))
                            e: {
                                for (s = c, l = 0, e = a = r; e; e = Pn(e)) l++;
                                for (e = 0, t = s; t; t = Pn(t)) e++;
                                for (; 0 < l - e; ) (a = Pn(a)), l--;
                                for (; 0 < e - l; ) (s = Pn(s)), e--;
                                for (; l--; ) {
                                    if (a === s || a === s.alternate) break e;
                                    (a = Pn(a)), (s = Pn(s));
                                }
                                a = null;
                            }
                        else a = null;
                        for (s = a, a = []; r && r !== s && (null === (l = r.alternate) || l !== s); ) a.push(r), (r = Pn(r));
                        for (r = []; c && c !== s && (null === (l = c.alternate) || l !== s); ) r.push(c), (c = Pn(c));
                        for (c = 0; c < a.length; c++) Fn(a[c], "bubbled", u);
                        for (c = r.length; 0 < c--; ) Fn(r[c], "captured", n);
                        return 0 === (64 & i) ? [u] : [u, n];
                    },
                };
            var _r =
                    "function" === typeof Object.is
                        ? Object.is
                        : function (e, t) {
                              return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
                          },
                Rr = Object.prototype.hasOwnProperty;
            function Wr(e, t) {
                if (_r(e, t)) return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) if (!Rr.call(t, n[r]) || !_r(e[n[r]], t[n[r]])) return !1;
                return !0;
            }
            var Hr = L && "documentMode" in document && 11 >= document.documentMode,
                Br = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } },
                Ur = null,
                jr = null,
                Vr = null,
                Kr = !1;
            function $r(e, t) {
                var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                return Kr || null == Ur || Ur !== cn(n) ? null : ("selectionStart" in (n = Ur) && hn(n) ? (n = { start: n.selectionStart, end: n.selectionEnd }) : (n = { anchorNode: (n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()).anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Vr && Wr(Vr, n) ? null : ((Vr = n), ((e = Vn.getPooled(Br.select, jr, e, t)).type = "select"), (e.target = Ur), _n(e), e));
            }
            var Gr = {
                    eventTypes: Br,
                    extractEvents: function (e, t, n, r, i, o) {
                        if (!(o = !(i = o || (r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument)))) {
                            e: {
                                (i = Ze(i)), (o = T.onSelect);
                                for (var l = 0; l < o.length; l++)
                                    if (!i.has(o[l])) {
                                        i = !1;
                                        break e;
                                    }
                                i = !0;
                            }
                            o = !i;
                        }
                        if (o) return null;
                        switch (((i = t ? Nn(t) : window), e)) {
                            case "focus":
                                (sr(i) || "true" === i.contentEditable) && ((Ur = i), (jr = t), (Vr = null));
                                break;
                            case "blur":
                                Vr = jr = Ur = null;
                                break;
                            case "mousedown":
                                Kr = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                return (Kr = !1), $r(n, r);
                            case "selectionchange":
                                if (Hr) break;
                            case "keydown":
                            case "keyup":
                                return $r(n, r);
                        }
                        return null;
                    },
                },
                qr = Vn.extend({ animationName: null, elapsedTime: null, pseudoElement: null }),
                Qr = Vn.extend({
                    clipboardData: function (e) {
                        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
                    },
                }),
                Xr = Tr.extend({ relatedTarget: null });
            function Yr(e) {
                var t = e.keyCode;
                return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t), 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
            }
            var Zr = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
                Jr = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
                ei = Tr.extend({
                    key: function (e) {
                        if (e.key) {
                            var t = Zr[e.key] || e.key;
                            if ("Unidentified" !== t) return t;
                        }
                        return "keypress" === e.type ? (13 === (e = Yr(e)) ? "Enter" : String.fromCharCode(e)) : "keydown" === e.type || "keyup" === e.type ? Jr[e.keyCode] || "Unidentified" : "";
                    },
                    location: null,
                    ctrlKey: null,
                    shiftKey: null,
                    altKey: null,
                    metaKey: null,
                    repeat: null,
                    locale: null,
                    getModifierState: Mr,
                    charCode: function (e) {
                        return "keypress" === e.type ? Yr(e) : 0;
                    },
                    keyCode: function (e) {
                        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                    },
                    which: function (e) {
                        return "keypress" === e.type ? Yr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
                    },
                }),
                ti = Ar.extend({ dataTransfer: null }),
                ni = Tr.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Mr }),
                ri = Vn.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }),
                ii = Ar.extend({
                    deltaX: function (e) {
                        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
                    },
                    deltaY: function (e) {
                        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
                    },
                    deltaZ: null,
                    deltaMode: null,
                }),
                oi = {
                    eventTypes: _t,
                    extractEvents: function (e, t, n, r) {
                        var i = Rt.get(e);
                        if (!i) return null;
                        switch (e) {
                            case "keypress":
                                if (0 === Yr(n)) return null;
                            case "keydown":
                            case "keyup":
                                e = ei;
                                break;
                            case "blur":
                            case "focus":
                                e = Xr;
                                break;
                            case "click":
                                if (2 === n.button) return null;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                e = Ar;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                e = ti;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                e = ni;
                                break;
                            case $e:
                            case Ge:
                            case qe:
                                e = qr;
                                break;
                            case Qe:
                                e = ri;
                                break;
                            case "scroll":
                                e = Tr;
                                break;
                            case "wheel":
                                e = ii;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                e = Qr;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                e = zr;
                                break;
                            default:
                                e = Vn;
                        }
                        return _n((t = e.getPooled(i, t, n, r))), t;
                    },
                };
            if (y) throw Error(l(101));
            (y = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "))), w(), (h = On), (m = Mn), (g = Nn), E({ SimpleEventPlugin: oi, EnterLeaveEventPlugin: Ir, ChangeEventPlugin: Sr, SelectEventPlugin: Gr, BeforeInputEventPlugin: ar });
            var li = [],
                ai = -1;
            function ui(e) {
                0 > ai || ((e.current = li[ai]), (li[ai] = null), ai--);
            }
            function si(e, t) {
                ai++, (li[ai] = e.current), (e.current = t);
            }
            var ci = {},
                fi = { current: ci },
                di = { current: !1 },
                pi = ci;
            function hi(e, t) {
                var n = e.type.contextTypes;
                if (!n) return ci;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                var i,
                    o = {};
                for (i in n) o[i] = t[i];
                return r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = o)), o;
            }
            function mi(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e;
            }
            function gi() {
                ui(di), ui(fi);
            }
            function vi(e, t, n) {
                if (fi.current !== ci) throw Error(l(168));
                si(fi, t), si(di, n);
            }
            function yi(e, t, n) {
                var r = e.stateNode;
                if (((e = t.childContextTypes), "function" !== typeof r.getChildContext)) return n;
                for (var o in (r = r.getChildContext())) if (!(o in e)) throw Error(l(108, ge(t) || "Unknown", o));
                return i({}, n, {}, r);
            }
            function bi(e) {
                return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ci), (pi = fi.current), si(fi, e), si(di, di.current), !0;
            }
            function wi(e, t, n) {
                var r = e.stateNode;
                if (!r) throw Error(l(169));
                n ? ((e = yi(e, t, pi)), (r.__reactInternalMemoizedMergedChildContext = e), ui(di), ui(fi), si(fi, e)) : ui(di), si(di, n);
            }
            var xi = o.unstable_runWithPriority,
                ki = o.unstable_scheduleCallback,
                Ci = o.unstable_cancelCallback,
                Si = o.unstable_requestPaint,
                Ti = o.unstable_now,
                Ei = o.unstable_getCurrentPriorityLevel,
                Li = o.unstable_ImmediatePriority,
                Mi = o.unstable_UserBlockingPriority,
                Ni = o.unstable_NormalPriority,
                Oi = o.unstable_LowPriority,
                Pi = o.unstable_IdlePriority,
                Di = {},
                Ai = o.unstable_shouldYield,
                zi = void 0 !== Si ? Si : function () {},
                Fi = null,
                Ii = null,
                _i = !1,
                Ri = Ti(),
                Wi =
                    1e4 > Ri
                        ? Ti
                        : function () {
                              return Ti() - Ri;
                          };
            function Hi() {
                switch (Ei()) {
                    case Li:
                        return 99;
                    case Mi:
                        return 98;
                    case Ni:
                        return 97;
                    case Oi:
                        return 96;
                    case Pi:
                        return 95;
                    default:
                        throw Error(l(332));
                }
            }
            function Bi(e) {
                switch (e) {
                    case 99:
                        return Li;
                    case 98:
                        return Mi;
                    case 97:
                        return Ni;
                    case 96:
                        return Oi;
                    case 95:
                        return Pi;
                    default:
                        throw Error(l(332));
                }
            }
            function Ui(e, t) {
                return (e = Bi(e)), xi(e, t);
            }
            function ji(e, t, n) {
                return (e = Bi(e)), ki(e, t, n);
            }
            function Vi(e) {
                return null === Fi ? ((Fi = [e]), (Ii = ki(Li, $i))) : Fi.push(e), Di;
            }
            function Ki() {
                if (null !== Ii) {
                    var e = Ii;
                    (Ii = null), Ci(e);
                }
                $i();
            }
            function $i() {
                if (!_i && null !== Fi) {
                    _i = !0;
                    var e = 0;
                    try {
                        var t = Fi;
                        Ui(99, function () {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0);
                                } while (null !== n);
                            }
                        }),
                            (Fi = null);
                    } catch (n) {
                        throw (null !== Fi && (Fi = Fi.slice(e + 1)), ki(Li, Ki), n);
                    } finally {
                        _i = !1;
                    }
                }
            }
            function Gi(e, t, n) {
                return 1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n;
            }
            function qi(e, t) {
                if (e && e.defaultProps) for (var n in ((t = i({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
                return t;
            }
            var Qi = { current: null },
                Xi = null,
                Yi = null,
                Zi = null;
            function Ji() {
                Zi = Yi = Xi = null;
            }
            function eo(e) {
                var t = Qi.current;
                ui(Qi), (e.type._context._currentValue = t);
            }
            function to(e, t) {
                for (; null !== e; ) {
                    var n = e.alternate;
                    if (e.childExpirationTime < t) (e.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
                    else {
                        if (!(null !== n && n.childExpirationTime < t)) break;
                        n.childExpirationTime = t;
                    }
                    e = e.return;
                }
            }
            function no(e, t) {
                (Xi = e), (Zi = Yi = null), null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Ol = !0), (e.firstContext = null));
            }
            function ro(e, t) {
                if (Zi !== e && !1 !== t && 0 !== t)
                    if ((("number" === typeof t && 1073741823 !== t) || ((Zi = e), (t = 1073741823)), (t = { context: e, observedBits: t, next: null }), null === Yi)) {
                        if (null === Xi) throw Error(l(308));
                        (Yi = t), (Xi.dependencies = { expirationTime: 0, firstContext: t, responders: null });
                    } else Yi = Yi.next = t;
                return e._currentValue;
            }
            var io = !1;
            function oo(e) {
                e.updateQueue = { baseState: e.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
            }
            function lo(e, t) {
                (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, baseQueue: e.baseQueue, shared: e.shared, effects: e.effects });
            }
            function ao(e, t) {
                return ((e = { expirationTime: e, suspenseConfig: t, tag: 0, payload: null, callback: null, next: null }).next = e);
            }
            function uo(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
                }
            }
            function so(e, t) {
                var n = e.alternate;
                null !== n && lo(n, e), null === (n = (e = e.updateQueue).baseQueue) ? ((e.baseQueue = t.next = t), (t.next = t)) : ((t.next = n.next), (n.next = t));
            }
            function co(e, t, n, r) {
                var o = e.updateQueue;
                io = !1;
                var l = o.baseQueue,
                    a = o.shared.pending;
                if (null !== a) {
                    if (null !== l) {
                        var u = l.next;
                        (l.next = a.next), (a.next = u);
                    }
                    (l = a), (o.shared.pending = null), null !== (u = e.alternate) && null !== (u = u.updateQueue) && (u.baseQueue = a);
                }
                if (null !== l) {
                    u = l.next;
                    var s = o.baseState,
                        c = 0,
                        f = null,
                        d = null,
                        p = null;
                    if (null !== u)
                        for (var h = u; ; ) {
                            if ((a = h.expirationTime) < r) {
                                var m = { expirationTime: h.expirationTime, suspenseConfig: h.suspenseConfig, tag: h.tag, payload: h.payload, callback: h.callback, next: null };
                                null === p ? ((d = p = m), (f = s)) : (p = p.next = m), a > c && (c = a);
                            } else {
                                null !== p && (p = p.next = { expirationTime: 1073741823, suspenseConfig: h.suspenseConfig, tag: h.tag, payload: h.payload, callback: h.callback, next: null }), ou(a, h.suspenseConfig);
                                e: {
                                    var g = e,
                                        v = h;
                                    switch (((a = t), (m = n), v.tag)) {
                                        case 1:
                                            if ("function" === typeof (g = v.payload)) {
                                                s = g.call(m, s, a);
                                                break e;
                                            }
                                            s = g;
                                            break e;
                                        case 3:
                                            g.effectTag = (-4097 & g.effectTag) | 64;
                                        case 0:
                                            if (null === (a = "function" === typeof (g = v.payload) ? g.call(m, s, a) : g) || void 0 === a) break e;
                                            s = i({}, s, a);
                                            break e;
                                        case 2:
                                            io = !0;
                                    }
                                }
                                null !== h.callback && ((e.effectTag |= 32), null === (a = o.effects) ? (o.effects = [h]) : a.push(h));
                            }
                            if (null === (h = h.next) || h === u) {
                                if (null === (a = o.shared.pending)) break;
                                (h = l.next = a.next), (a.next = u), (o.baseQueue = l = a), (o.shared.pending = null);
                            }
                        }
                    null === p ? (f = s) : (p.next = d), (o.baseState = f), (o.baseQueue = p), lu(c), (e.expirationTime = c), (e.memoizedState = s);
                }
            }
            function fo(e, t, n) {
                if (((e = t.effects), (t.effects = null), null !== e))
                    for (t = 0; t < e.length; t++) {
                        var r = e[t],
                            i = r.callback;
                        if (null !== i) {
                            if (((r.callback = null), (r = i), (i = n), "function" !== typeof r)) throw Error(l(191, r));
                            r.call(i);
                        }
                    }
            }
            var po = X.ReactCurrentBatchConfig,
                ho = new r.Component().refs;
            function mo(e, t, n, r) {
                (n = null === (n = n(r, (t = e.memoizedState))) || void 0 === n ? t : i({}, t, n)), (e.memoizedState = n), 0 === e.expirationTime && (e.updateQueue.baseState = n);
            }
            var go = {
                isMounted: function (e) {
                    return !!(e = e._reactInternalFiber) && Je(e) === e;
                },
                enqueueSetState: function (e, t, n) {
                    e = e._reactInternalFiber;
                    var r = $a(),
                        i = po.suspense;
                    ((i = ao((r = Ga(r, e, i)), i)).payload = t), void 0 !== n && null !== n && (i.callback = n), uo(e, i), qa(e, r);
                },
                enqueueReplaceState: function (e, t, n) {
                    e = e._reactInternalFiber;
                    var r = $a(),
                        i = po.suspense;
                    ((i = ao((r = Ga(r, e, i)), i)).tag = 1), (i.payload = t), void 0 !== n && null !== n && (i.callback = n), uo(e, i), qa(e, r);
                },
                enqueueForceUpdate: function (e, t) {
                    e = e._reactInternalFiber;
                    var n = $a(),
                        r = po.suspense;
                    ((r = ao((n = Ga(n, e, r)), r)).tag = 2), void 0 !== t && null !== t && (r.callback = t), uo(e, r), qa(e, n);
                },
            };
            function vo(e, t, n, r, i, o, l) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, l) : !t.prototype || !t.prototype.isPureReactComponent || !Wr(n, r) || !Wr(i, o);
            }
            function yo(e, t, n) {
                var r = !1,
                    i = ci,
                    o = t.contextType;
                return "object" === typeof o && null !== o ? (o = ro(o)) : ((i = mi(t) ? pi : fi.current), (o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? hi(e, i) : ci)), (t = new t(n, o)), (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null), (t.updater = go), (e.stateNode = t), (t._reactInternalFiber = e), r && (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = o)), t;
            }
            function bo(e, t, n, r) {
                (e = t.state), "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && go.enqueueReplaceState(t, t.state, null);
            }
            function wo(e, t, n, r) {
                var i = e.stateNode;
                (i.props = n), (i.state = e.memoizedState), (i.refs = ho), oo(e);
                var o = t.contextType;
                "object" === typeof o && null !== o ? (i.context = ro(o)) : ((o = mi(t) ? pi : fi.current), (i.context = hi(e, o))),
                    co(e, n, i, r),
                    (i.state = e.memoizedState),
                    "function" === typeof (o = t.getDerivedStateFromProps) && (mo(e, t, o, n), (i.state = e.memoizedState)),
                    "function" === typeof t.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || ("function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount) || ((t = i.state), "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && go.enqueueReplaceState(i, i.state, null), co(e, n, i, r), (i.state = e.memoizedState)),
                    "function" === typeof i.componentDidMount && (e.effectTag |= 4);
            }
            var xo = Array.isArray;
            function ko(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if ((n = n._owner)) {
                            if (1 !== n.tag) throw Error(l(309));
                            var r = n.stateNode;
                        }
                        if (!r) throw Error(l(147, e));
                        var i = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i
                            ? t.ref
                            : (((t = function (e) {
                                  var t = r.refs;
                                  t === ho && (t = r.refs = {}), null === e ? delete t[i] : (t[i] = e);
                              })._stringRef = i),
                              t);
                    }
                    if ("string" !== typeof e) throw Error(l(284));
                    if (!n._owner) throw Error(l(290, e));
                }
                return e;
            }
            function Co(e, t) {
                if ("textarea" !== e.type) throw Error(l(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""));
            }
            function So(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n), (n.nextEffect = null), (n.effectTag = 8);
                    }
                }
                function n(n, r) {
                    if (!e) return null;
                    for (; null !== r; ) t(n, r), (r = r.sibling);
                    return null;
                }
                function r(e, t) {
                    for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
                    return e;
                }
                function i(e, t) {
                    return ((e = Eu(e, t)).index = 0), (e.sibling = null), e;
                }
                function o(t, n, r) {
                    return (t.index = r), e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.effectTag = 2), n) : r) : ((t.effectTag = 2), n)) : n;
                }
                function a(t) {
                    return e && null === t.alternate && (t.effectTag = 2), t;
                }
                function u(e, t, n, r) {
                    return null === t || 6 !== t.tag ? (((t = Nu(n, e.mode, r)).return = e), t) : (((t = i(t, n)).return = e), t);
                }
                function s(e, t, n, r) {
                    return null !== t && t.elementType === n.type ? (((r = i(t, n.props)).ref = ko(e, t, n)), (r.return = e), r) : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = ko(e, t, n)), (r.return = e), r);
                }
                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (((t = Ou(n, e.mode, r)).return = e), t) : (((t = i(t, n.children || [])).return = e), t);
                }
                function f(e, t, n, r, o) {
                    return null === t || 7 !== t.tag ? (((t = Mu(n, e.mode, r, o)).return = e), t) : (((t = i(t, n)).return = e), t);
                }
                function d(e, t, n) {
                    if ("string" === typeof t || "number" === typeof t) return ((t = Nu("" + t, e.mode, n)).return = e), t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case ee:
                                return ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = ko(e, null, t)), (n.return = e), n;
                            case te:
                                return ((t = Ou(t, e.mode, n)).return = e), t;
                        }
                        if (xo(t) || me(t)) return ((t = Mu(t, e.mode, n, null)).return = e), t;
                        Co(e, t);
                    }
                    return null;
                }
                function p(e, t, n, r) {
                    var i = null !== t ? t.key : null;
                    if ("string" === typeof n || "number" === typeof n) return null !== i ? null : u(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case ee:
                                return n.key === i ? (n.type === ne ? f(e, t, n.props.children, r, i) : s(e, t, n, r)) : null;
                            case te:
                                return n.key === i ? c(e, t, n, r) : null;
                        }
                        if (xo(n) || me(n)) return null !== i ? null : f(e, t, n, r, null);
                        Co(e, n);
                    }
                    return null;
                }
                function h(e, t, n, r, i) {
                    if ("string" === typeof r || "number" === typeof r) return u(t, (e = e.get(n) || null), "" + r, i);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case ee:
                                return (e = e.get(null === r.key ? n : r.key) || null), r.type === ne ? f(t, e, r.props.children, i, r.key) : s(t, e, r, i);
                            case te:
                                return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, i);
                        }
                        if (xo(r) || me(r)) return f(t, (e = e.get(n) || null), r, i, null);
                        Co(t, r);
                    }
                    return null;
                }
                function m(i, l, a, u) {
                    for (var s = null, c = null, f = l, m = (l = 0), g = null; null !== f && m < a.length; m++) {
                        f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
                        var v = p(i, f, a[m], u);
                        if (null === v) {
                            null === f && (f = g);
                            break;
                        }
                        e && f && null === v.alternate && t(i, f), (l = o(v, l, m)), null === c ? (s = v) : (c.sibling = v), (c = v), (f = g);
                    }
                    if (m === a.length) return n(i, f), s;
                    if (null === f) {
                        for (; m < a.length; m++) null !== (f = d(i, a[m], u)) && ((l = o(f, l, m)), null === c ? (s = f) : (c.sibling = f), (c = f));
                        return s;
                    }
                    for (f = r(i, f); m < a.length; m++) null !== (g = h(f, i, m, a[m], u)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), (l = o(g, l, m)), null === c ? (s = g) : (c.sibling = g), (c = g));
                    return (
                        e &&
                            f.forEach(function (e) {
                                return t(i, e);
                            }),
                        s
                    );
                }
                function g(i, a, u, s) {
                    var c = me(u);
                    if ("function" !== typeof c) throw Error(l(150));
                    if (null == (u = c.call(u))) throw Error(l(151));
                    for (var f = (c = null), m = a, g = (a = 0), v = null, y = u.next(); null !== m && !y.done; g++, y = u.next()) {
                        m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
                        var b = p(i, m, y.value, s);
                        if (null === b) {
                            null === m && (m = v);
                            break;
                        }
                        e && m && null === b.alternate && t(i, m), (a = o(b, a, g)), null === f ? (c = b) : (f.sibling = b), (f = b), (m = v);
                    }
                    if (y.done) return n(i, m), c;
                    if (null === m) {
                        for (; !y.done; g++, y = u.next()) null !== (y = d(i, y.value, s)) && ((a = o(y, a, g)), null === f ? (c = y) : (f.sibling = y), (f = y));
                        return c;
                    }
                    for (m = r(i, m); !y.done; g++, y = u.next()) null !== (y = h(m, i, g, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), (a = o(y, a, g)), null === f ? (c = y) : (f.sibling = y), (f = y));
                    return (
                        e &&
                            m.forEach(function (e) {
                                return t(i, e);
                            }),
                        c
                    );
                }
                return function (e, r, o, u) {
                    var s = "object" === typeof o && null !== o && o.type === ne && null === o.key;
                    s && (o = o.props.children);
                    var c = "object" === typeof o && null !== o;
                    if (c)
                        switch (o.$$typeof) {
                            case ee:
                                e: {
                                    for (c = o.key, s = r; null !== s; ) {
                                        if (s.key === c) {
                                            switch (s.tag) {
                                                case 7:
                                                    if (o.type === ne) {
                                                        n(e, s.sibling), ((r = i(s, o.props.children)).return = e), (e = r);
                                                        break e;
                                                    }
                                                    break;
                                                default:
                                                    if (s.elementType === o.type) {
                                                        n(e, s.sibling), ((r = i(s, o.props)).ref = ko(e, s, o)), (r.return = e), (e = r);
                                                        break e;
                                                    }
                                            }
                                            n(e, s);
                                            break;
                                        }
                                        t(e, s), (s = s.sibling);
                                    }
                                    o.type === ne ? (((r = Mu(o.props.children, e.mode, u, o.key)).return = e), (e = r)) : (((u = Lu(o.type, o.key, o.props, null, e.mode, u)).ref = ko(e, r, o)), (u.return = e), (e = u));
                                }
                                return a(e);
                            case te:
                                e: {
                                    for (s = o.key; null !== r; ) {
                                        if (r.key === s) {
                                            if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                                n(e, r.sibling), ((r = i(r, o.children || [])).return = e), (e = r);
                                                break e;
                                            }
                                            n(e, r);
                                            break;
                                        }
                                        t(e, r), (r = r.sibling);
                                    }
                                    ((r = Ou(o, e.mode, u)).return = e), (e = r);
                                }
                                return a(e);
                        }
                    if ("string" === typeof o || "number" === typeof o) return (o = "" + o), null !== r && 6 === r.tag ? (n(e, r.sibling), ((r = i(r, o)).return = e), (e = r)) : (n(e, r), ((r = Nu(o, e.mode, u)).return = e), (e = r)), a(e);
                    if (xo(o)) return m(e, r, o, u);
                    if (me(o)) return g(e, r, o, u);
                    if ((c && Co(e, o), "undefined" === typeof o && !s))
                        switch (e.tag) {
                            case 1:
                            case 0:
                                throw ((e = e.type), Error(l(152, e.displayName || e.name || "Component")));
                        }
                    return n(e, r);
                };
            }
            var To = So(!0),
                Eo = So(!1),
                Lo = {},
                Mo = { current: Lo },
                No = { current: Lo },
                Oo = { current: Lo };
            function Po(e) {
                if (e === Lo) throw Error(l(174));
                return e;
            }
            function Do(e, t) {
                switch ((si(Oo, t), si(No, e), si(Mo, Lo), (e = t.nodeType))) {
                    case 9:
                    case 11:
                        t = (t = t.documentElement) ? t.namespaceURI : _e(null, "");
                        break;
                    default:
                        t = _e((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
                }
                ui(Mo), si(Mo, t);
            }
            function Ao() {
                ui(Mo), ui(No), ui(Oo);
            }
            function zo(e) {
                Po(Oo.current);
                var t = Po(Mo.current),
                    n = _e(t, e.type);
                t !== n && (si(No, e), si(Mo, n));
            }
            function Fo(e) {
                No.current === e && (ui(Mo), ui(No));
            }
            var Io = { current: 0 };
            function _o(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (64 & t.effectTag)) return t;
                    } else if (null !== t.child) {
                        (t.child.return = t), (t = t.child);
                        continue;
                    }
                    if (t === e) break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                }
                return null;
            }
            function Ro(e, t) {
                return { responder: e, props: t };
            }
            var Wo = X.ReactCurrentDispatcher,
                Ho = X.ReactCurrentBatchConfig,
                Bo = 0,
                Uo = null,
                jo = null,
                Vo = null,
                Ko = !1;
            function $o() {
                throw Error(l(321));
            }
            function Go(e, t) {
                if (null === t) return !1;
                for (var n = 0; n < t.length && n < e.length; n++) if (!_r(e[n], t[n])) return !1;
                return !0;
            }
            function qo(e, t, n, r, i, o) {
                if (((Bo = o), (Uo = t), (t.memoizedState = null), (t.updateQueue = null), (t.expirationTime = 0), (Wo.current = null === e || null === e.memoizedState ? vl : yl), (e = n(r, i)), t.expirationTime === Bo)) {
                    o = 0;
                    do {
                        if (((t.expirationTime = 0), !(25 > o))) throw Error(l(301));
                        (o += 1), (Vo = jo = null), (t.updateQueue = null), (Wo.current = bl), (e = n(r, i));
                    } while (t.expirationTime === Bo);
                }
                if (((Wo.current = gl), (t = null !== jo && null !== jo.next), (Bo = 0), (Vo = jo = Uo = null), (Ko = !1), t)) throw Error(l(300));
                return e;
            }
            function Qo() {
                var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
                return null === Vo ? (Uo.memoizedState = Vo = e) : (Vo = Vo.next = e), Vo;
            }
            function Xo() {
                if (null === jo) {
                    var e = Uo.alternate;
                    e = null !== e ? e.memoizedState : null;
                } else e = jo.next;
                var t = null === Vo ? Uo.memoizedState : Vo.next;
                if (null !== t) (Vo = t), (jo = e);
                else {
                    if (null === e) throw Error(l(310));
                    (e = { memoizedState: (jo = e).memoizedState, baseState: jo.baseState, baseQueue: jo.baseQueue, queue: jo.queue, next: null }), null === Vo ? (Uo.memoizedState = Vo = e) : (Vo = Vo.next = e);
                }
                return Vo;
            }
            function Yo(e, t) {
                return "function" === typeof t ? t(e) : t;
            }
            function Zo(e) {
                var t = Xo(),
                    n = t.queue;
                if (null === n) throw Error(l(311));
                n.lastRenderedReducer = e;
                var r = jo,
                    i = r.baseQueue,
                    o = n.pending;
                if (null !== o) {
                    if (null !== i) {
                        var a = i.next;
                        (i.next = o.next), (o.next = a);
                    }
                    (r.baseQueue = i = o), (n.pending = null);
                }
                if (null !== i) {
                    (i = i.next), (r = r.baseState);
                    var u = (a = o = null),
                        s = i;
                    do {
                        var c = s.expirationTime;
                        if (c < Bo) {
                            var f = { expirationTime: s.expirationTime, suspenseConfig: s.suspenseConfig, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null };
                            null === u ? ((a = u = f), (o = r)) : (u = u.next = f), c > Uo.expirationTime && ((Uo.expirationTime = c), lu(c));
                        } else null !== u && (u = u.next = { expirationTime: 1073741823, suspenseConfig: s.suspenseConfig, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }), ou(c, s.suspenseConfig), (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
                        s = s.next;
                    } while (null !== s && s !== i);
                    null === u ? (o = r) : (u.next = a), _r(r, t.memoizedState) || (Ol = !0), (t.memoizedState = r), (t.baseState = o), (t.baseQueue = u), (n.lastRenderedState = r);
                }
                return [t.memoizedState, n.dispatch];
            }
            function Jo(e) {
                var t = Xo(),
                    n = t.queue;
                if (null === n) throw Error(l(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch,
                    i = n.pending,
                    o = t.memoizedState;
                if (null !== i) {
                    n.pending = null;
                    var a = (i = i.next);
                    do {
                        (o = e(o, a.action)), (a = a.next);
                    } while (a !== i);
                    _r(o, t.memoizedState) || (Ol = !0), (t.memoizedState = o), null === t.baseQueue && (t.baseState = o), (n.lastRenderedState = o);
                }
                return [o, r];
            }
            function el(e) {
                var t = Qo();
                return "function" === typeof e && (e = e()), (t.memoizedState = t.baseState = e), (e = (e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Yo, lastRenderedState: e }).dispatch = ml.bind(null, Uo, e)), [t.memoizedState, e];
            }
            function tl(e, t, n, r) {
                return (e = { tag: e, create: t, destroy: n, deps: r, next: null }), null === (t = Uo.updateQueue) ? ((t = { lastEffect: null }), (Uo.updateQueue = t), (t.lastEffect = e.next = e)) : null === (n = t.lastEffect) ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)), e;
            }
            function nl() {
                return Xo().memoizedState;
            }
            function rl(e, t, n, r) {
                var i = Qo();
                (Uo.effectTag |= e), (i.memoizedState = tl(1 | t, n, void 0, void 0 === r ? null : r));
            }
            function il(e, t, n, r) {
                var i = Xo();
                r = void 0 === r ? null : r;
                var o = void 0;
                if (null !== jo) {
                    var l = jo.memoizedState;
                    if (((o = l.destroy), null !== r && Go(r, l.deps))) return void tl(t, n, o, r);
                }
                (Uo.effectTag |= e), (i.memoizedState = tl(1 | t, n, o, r));
            }
            function ol(e, t) {
                return rl(516, 4, e, t);
            }
            function ll(e, t) {
                return il(516, 4, e, t);
            }
            function al(e, t) {
                return il(4, 2, e, t);
            }
            function ul(e, t) {
                return "function" === typeof t
                    ? ((e = e()),
                      t(e),
                      function () {
                          t(null);
                      })
                    : null !== t && void 0 !== t
                    ? ((e = e()),
                      (t.current = e),
                      function () {
                          t.current = null;
                      })
                    : void 0;
            }
            function sl(e, t, n) {
                return (n = null !== n && void 0 !== n ? n.concat([e]) : null), il(4, 2, ul.bind(null, t, e), n);
            }
            function cl() {}
            function fl(e, t) {
                return (Qo().memoizedState = [e, void 0 === t ? null : t]), e;
            }
            function dl(e, t) {
                var n = Xo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Go(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
            }
            function pl(e, t) {
                var n = Xo();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Go(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
            }
            function hl(e, t, n) {
                var r = Hi();
                Ui(98 > r ? 98 : r, function () {
                    e(!0);
                }),
                    Ui(97 < r ? 97 : r, function () {
                        var r = Ho.suspense;
                        Ho.suspense = void 0 === t ? null : t;
                        try {
                            e(!1), n();
                        } finally {
                            Ho.suspense = r;
                        }
                    });
            }
            function ml(e, t, n) {
                var r = $a(),
                    i = po.suspense;
                i = { expirationTime: (r = Ga(r, e, i)), suspenseConfig: i, action: n, eagerReducer: null, eagerState: null, next: null };
                var o = t.pending;
                if ((null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)), (t.pending = i), (o = e.alternate), e === Uo || (null !== o && o === Uo))) (Ko = !0), (i.expirationTime = Bo), (Uo.expirationTime = Bo);
                else {
                    if (0 === e.expirationTime && (null === o || 0 === o.expirationTime) && null !== (o = t.lastRenderedReducer))
                        try {
                            var l = t.lastRenderedState,
                                a = o(l, n);
                            if (((i.eagerReducer = o), (i.eagerState = a), _r(a, l))) return;
                        } catch (u) {}
                    qa(e, r);
                }
            }
            var gl = { readContext: ro, useCallback: $o, useContext: $o, useEffect: $o, useImperativeHandle: $o, useLayoutEffect: $o, useMemo: $o, useReducer: $o, useRef: $o, useState: $o, useDebugValue: $o, useResponder: $o, useDeferredValue: $o, useTransition: $o },
                vl = {
                    readContext: ro,
                    useCallback: fl,
                    useContext: ro,
                    useEffect: ol,
                    useImperativeHandle: function (e, t, n) {
                        return (n = null !== n && void 0 !== n ? n.concat([e]) : null), rl(4, 2, ul.bind(null, t, e), n);
                    },
                    useLayoutEffect: function (e, t) {
                        return rl(4, 2, e, t);
                    },
                    useMemo: function (e, t) {
                        var n = Qo();
                        return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
                    },
                    useReducer: function (e, t, n) {
                        var r = Qo();
                        return (t = void 0 !== n ? n(t) : t), (r.memoizedState = r.baseState = t), (e = (e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }).dispatch = ml.bind(null, Uo, e)), [r.memoizedState, e];
                    },
                    useRef: function (e) {
                        return (e = { current: e }), (Qo().memoizedState = e);
                    },
                    useState: el,
                    useDebugValue: cl,
                    useResponder: Ro,
                    useDeferredValue: function (e, t) {
                        var n = el(e),
                            r = n[0],
                            i = n[1];
                        return (
                            ol(
                                function () {
                                    var n = Ho.suspense;
                                    Ho.suspense = void 0 === t ? null : t;
                                    try {
                                        i(e);
                                    } finally {
                                        Ho.suspense = n;
                                    }
                                },
                                [e, t]
                            ),
                            r
                        );
                    },
                    useTransition: function (e) {
                        var t = el(!1),
                            n = t[0];
                        return (t = t[1]), [fl(hl.bind(null, t, e), [t, e]), n];
                    },
                },
                yl = {
                    readContext: ro,
                    useCallback: dl,
                    useContext: ro,
                    useEffect: ll,
                    useImperativeHandle: sl,
                    useLayoutEffect: al,
                    useMemo: pl,
                    useReducer: Zo,
                    useRef: nl,
                    useState: function () {
                        return Zo(Yo);
                    },
                    useDebugValue: cl,
                    useResponder: Ro,
                    useDeferredValue: function (e, t) {
                        var n = Zo(Yo),
                            r = n[0],
                            i = n[1];
                        return (
                            ll(
                                function () {
                                    var n = Ho.suspense;
                                    Ho.suspense = void 0 === t ? null : t;
                                    try {
                                        i(e);
                                    } finally {
                                        Ho.suspense = n;
                                    }
                                },
                                [e, t]
                            ),
                            r
                        );
                    },
                    useTransition: function (e) {
                        var t = Zo(Yo),
                            n = t[0];
                        return (t = t[1]), [dl(hl.bind(null, t, e), [t, e]), n];
                    },
                },
                bl = {
                    readContext: ro,
                    useCallback: dl,
                    useContext: ro,
                    useEffect: ll,
                    useImperativeHandle: sl,
                    useLayoutEffect: al,
                    useMemo: pl,
                    useReducer: Jo,
                    useRef: nl,
                    useState: function () {
                        return Jo(Yo);
                    },
                    useDebugValue: cl,
                    useResponder: Ro,
                    useDeferredValue: function (e, t) {
                        var n = Jo(Yo),
                            r = n[0],
                            i = n[1];
                        return (
                            ll(
                                function () {
                                    var n = Ho.suspense;
                                    Ho.suspense = void 0 === t ? null : t;
                                    try {
                                        i(e);
                                    } finally {
                                        Ho.suspense = n;
                                    }
                                },
                                [e, t]
                            ),
                            r
                        );
                    },
                    useTransition: function (e) {
                        var t = Jo(Yo),
                            n = t[0];
                        return (t = t[1]), [dl(hl.bind(null, t, e), [t, e]), n];
                    },
                },
                wl = null,
                xl = null,
                kl = !1;
            function Cl(e, t) {
                var n = Su(5, null, null, 0);
                (n.elementType = "DELETED"), (n.type = "DELETED"), (n.stateNode = t), (n.return = e), (n.effectTag = 8), null !== e.lastEffect ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n)) : (e.firstEffect = e.lastEffect = n);
            }
            function Sl(e, t) {
                switch (e.tag) {
                    case 5:
                        var n = e.type;
                        return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && ((e.stateNode = t), !0);
                    case 6:
                        return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
                    case 13:
                    default:
                        return !1;
                }
            }
            function Tl(e) {
                if (kl) {
                    var t = xl;
                    if (t) {
                        var n = t;
                        if (!Sl(e, t)) {
                            if (!(t = xn(n.nextSibling)) || !Sl(e, t)) return (e.effectTag = (-1025 & e.effectTag) | 2), (kl = !1), void (wl = e);
                            Cl(wl, n);
                        }
                        (wl = e), (xl = xn(t.firstChild));
                    } else (e.effectTag = (-1025 & e.effectTag) | 2), (kl = !1), (wl = e);
                }
            }
            function El(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
                wl = e;
            }
            function Ll(e) {
                if (e !== wl) return !1;
                if (!kl) return El(e), (kl = !0), !1;
                var t = e.type;
                if (5 !== e.tag || ("head" !== t && "body" !== t && !yn(t, e.memoizedProps))) for (t = xl; t; ) Cl(e, t), (t = xn(t.nextSibling));
                if ((El(e), 13 === e.tag)) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
                    e: {
                        for (e = e.nextSibling, t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        xl = xn(e.nextSibling);
                                        break e;
                                    }
                                    t--;
                                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                            }
                            e = e.nextSibling;
                        }
                        xl = null;
                    }
                } else xl = wl ? xn(e.stateNode.nextSibling) : null;
                return !0;
            }
            function Ml() {
                (xl = wl = null), (kl = !1);
            }
            var Nl = X.ReactCurrentOwner,
                Ol = !1;
            function Pl(e, t, n, r) {
                t.child = null === e ? Eo(t, null, n, r) : To(t, e.child, n, r);
            }
            function Dl(e, t, n, r, i) {
                n = n.render;
                var o = t.ref;
                return no(t, i), (r = qo(e, t, n, r, o, i)), null === e || Ol ? ((t.effectTag |= 1), Pl(e, t, r, i), t.child) : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= i && (e.expirationTime = 0), ql(e, t, i));
            }
            function Al(e, t, n, r, i, o) {
                if (null === e) {
                    var l = n.type;
                    return "function" !== typeof l || Tu(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? (((e = Lu(n.type, null, r, null, t.mode, o)).ref = t.ref), (e.return = t), (t.child = e)) : ((t.tag = 15), (t.type = l), zl(e, t, l, r, i, o));
                }
                return (l = e.child), i < o && ((i = l.memoizedProps), (n = null !== (n = n.compare) ? n : Wr)(i, r) && e.ref === t.ref) ? ql(e, t, o) : ((t.effectTag |= 1), ((e = Eu(l, r)).ref = t.ref), (e.return = t), (t.child = e));
            }
            function zl(e, t, n, r, i, o) {
                return null !== e && Wr(e.memoizedProps, r) && e.ref === t.ref && ((Ol = !1), i < o) ? ((t.expirationTime = e.expirationTime), ql(e, t, o)) : Il(e, t, n, r, o);
            }
            function Fl(e, t) {
                var n = t.ref;
                ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.effectTag |= 128);
            }
            function Il(e, t, n, r, i) {
                var o = mi(n) ? pi : fi.current;
                return (o = hi(t, o)), no(t, i), (n = qo(e, t, n, r, o, i)), null === e || Ol ? ((t.effectTag |= 1), Pl(e, t, n, i), t.child) : ((t.updateQueue = e.updateQueue), (t.effectTag &= -517), e.expirationTime <= i && (e.expirationTime = 0), ql(e, t, i));
            }
            function _l(e, t, n, r, i) {
                if (mi(n)) {
                    var o = !0;
                    bi(t);
                } else o = !1;
                if ((no(t, i), null === t.stateNode)) null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)), yo(t, n, r), wo(t, n, r, i), (r = !0);
                else if (null === e) {
                    var l = t.stateNode,
                        a = t.memoizedProps;
                    l.props = a;
                    var u = l.context,
                        s = n.contextType;
                    "object" === typeof s && null !== s ? (s = ro(s)) : (s = hi(t, (s = mi(n) ? pi : fi.current)));
                    var c = n.getDerivedStateFromProps,
                        f = "function" === typeof c || "function" === typeof l.getSnapshotBeforeUpdate;
                    f || ("function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps) || ((a !== r || u !== s) && bo(t, l, r, s)), (io = !1);
                    var d = t.memoizedState;
                    (l.state = d),
                        co(t, r, l, i),
                        (u = t.memoizedState),
                        a !== r || d !== u || di.current || io
                            ? ("function" === typeof c && (mo(t, n, c, r), (u = t.memoizedState)),
                              (a = io || vo(t, n, a, r, d, u, s)) ? (f || ("function" !== typeof l.UNSAFE_componentWillMount && "function" !== typeof l.componentWillMount) || ("function" === typeof l.componentWillMount && l.componentWillMount(), "function" === typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" === typeof l.componentDidMount && (t.effectTag |= 4)) : ("function" === typeof l.componentDidMount && (t.effectTag |= 4), (t.memoizedProps = r), (t.memoizedState = u)),
                              (l.props = r),
                              (l.state = u),
                              (l.context = s),
                              (r = a))
                            : ("function" === typeof l.componentDidMount && (t.effectTag |= 4), (r = !1));
                } else
                    (l = t.stateNode),
                        lo(e, t),
                        (a = t.memoizedProps),
                        (l.props = t.type === t.elementType ? a : qi(t.type, a)),
                        (u = l.context),
                        "object" === typeof (s = n.contextType) && null !== s ? (s = ro(s)) : (s = hi(t, (s = mi(n) ? pi : fi.current))),
                        (f = "function" === typeof (c = n.getDerivedStateFromProps) || "function" === typeof l.getSnapshotBeforeUpdate) || ("function" !== typeof l.UNSAFE_componentWillReceiveProps && "function" !== typeof l.componentWillReceiveProps) || ((a !== r || u !== s) && bo(t, l, r, s)),
                        (io = !1),
                        (u = t.memoizedState),
                        (l.state = u),
                        co(t, r, l, i),
                        (d = t.memoizedState),
                        a !== r || u !== d || di.current || io
                            ? ("function" === typeof c && (mo(t, n, c, r), (d = t.memoizedState)),
                              (c = io || vo(t, n, a, r, u, d, s))
                                  ? (f || ("function" !== typeof l.UNSAFE_componentWillUpdate && "function" !== typeof l.componentWillUpdate) || ("function" === typeof l.componentWillUpdate && l.componentWillUpdate(r, d, s), "function" === typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, d, s)), "function" === typeof l.componentDidUpdate && (t.effectTag |= 4), "function" === typeof l.getSnapshotBeforeUpdate && (t.effectTag |= 256))
                                  : ("function" !== typeof l.componentDidUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 256), (t.memoizedProps = r), (t.memoizedState = d)),
                              (l.props = r),
                              (l.state = d),
                              (l.context = s),
                              (r = c))
                            : ("function" !== typeof l.componentDidUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 4), "function" !== typeof l.getSnapshotBeforeUpdate || (a === e.memoizedProps && u === e.memoizedState) || (t.effectTag |= 256), (r = !1));
                return Rl(e, t, n, r, o, i);
            }
            function Rl(e, t, n, r, i, o) {
                Fl(e, t);
                var l = 0 !== (64 & t.effectTag);
                if (!r && !l) return i && wi(t, n, !1), ql(e, t, o);
                (r = t.stateNode), (Nl.current = t);
                var a = l && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return (t.effectTag |= 1), null !== e && l ? ((t.child = To(t, e.child, null, o)), (t.child = To(t, null, a, o))) : Pl(e, t, a, o), (t.memoizedState = r.state), i && wi(t, n, !0), t.child;
            }
            function Wl(e) {
                var t = e.stateNode;
                t.pendingContext ? vi(0, t.pendingContext, t.pendingContext !== t.context) : t.context && vi(0, t.context, !1), Do(e, t.containerInfo);
            }
            var Hl,
                Bl,
                Ul,
                jl = { dehydrated: null, retryTime: 0 };
            function Vl(e, t, n) {
                var r,
                    i = t.mode,
                    o = t.pendingProps,
                    l = Io.current,
                    a = !1;
                if (((r = 0 !== (64 & t.effectTag)) || (r = 0 !== (2 & l) && (null === e || null !== e.memoizedState)), r ? ((a = !0), (t.effectTag &= -65)) : (null !== e && null === e.memoizedState) || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (l |= 1), si(Io, 1 & l), null === e)) {
                    if ((void 0 !== o.fallback && Tl(t), a)) {
                        if (((a = o.fallback), ((o = Mu(null, i, 0, null)).return = t), 0 === (2 & t.mode))) for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e; ) (e.return = o), (e = e.sibling);
                        return ((n = Mu(a, i, n, null)).return = t), (o.sibling = n), (t.memoizedState = jl), (t.child = o), n;
                    }
                    return (i = o.children), (t.memoizedState = null), (t.child = Eo(t, null, i, n));
                }
                if (null !== e.memoizedState) {
                    if (((i = (e = e.child).sibling), a)) {
                        if (((o = o.fallback), ((n = Eu(e, e.pendingProps)).return = t), 0 === (2 & t.mode) && (a = null !== t.memoizedState ? t.child.child : t.child) !== e.child)) for (n.child = a; null !== a; ) (a.return = n), (a = a.sibling);
                        return ((i = Eu(i, o)).return = t), (n.sibling = i), (n.childExpirationTime = 0), (t.memoizedState = jl), (t.child = n), i;
                    }
                    return (n = To(t, e.child, o.children, n)), (t.memoizedState = null), (t.child = n);
                }
                if (((e = e.child), a)) {
                    if (((a = o.fallback), ((o = Mu(null, i, 0, null)).return = t), (o.child = e), null !== e && (e.return = o), 0 === (2 & t.mode))) for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e; ) (e.return = o), (e = e.sibling);
                    return ((n = Mu(a, i, n, null)).return = t), (o.sibling = n), (n.effectTag |= 2), (o.childExpirationTime = 0), (t.memoizedState = jl), (t.child = o), n;
                }
                return (t.memoizedState = null), (t.child = To(t, e, o.children, n));
            }
            function Kl(e, t) {
                e.expirationTime < t && (e.expirationTime = t);
                var n = e.alternate;
                null !== n && n.expirationTime < t && (n.expirationTime = t), to(e.return, t);
            }
            function $l(e, t, n, r, i, o) {
                var l = e.memoizedState;
                null === l ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailExpiration: 0, tailMode: i, lastEffect: o }) : ((l.isBackwards = t), (l.rendering = null), (l.renderingStartTime = 0), (l.last = r), (l.tail = n), (l.tailExpiration = 0), (l.tailMode = i), (l.lastEffect = o));
            }
            function Gl(e, t, n) {
                var r = t.pendingProps,
                    i = r.revealOrder,
                    o = r.tail;
                if ((Pl(e, t, r.children, n), 0 !== (2 & (r = Io.current)))) (r = (1 & r) | 2), (t.effectTag |= 64);
                else {
                    if (null !== e && 0 !== (64 & e.effectTag))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag) null !== e.memoizedState && Kl(e, n);
                            else if (19 === e.tag) Kl(e, n);
                            else if (null !== e.child) {
                                (e.child.return = e), (e = e.child);
                                continue;
                            }
                            if (e === t) break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return;
                            }
                            (e.sibling.return = e.return), (e = e.sibling);
                        }
                    r &= 1;
                }
                if ((si(Io, r), 0 === (2 & t.mode))) t.memoizedState = null;
                else
                    switch (i) {
                        case "forwards":
                            for (n = t.child, i = null; null !== n; ) null !== (e = n.alternate) && null === _o(e) && (i = n), (n = n.sibling);
                            null === (n = i) ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), $l(t, !1, i, n, o, t.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, i = t.child, t.child = null; null !== i; ) {
                                if (null !== (e = i.alternate) && null === _o(e)) {
                                    t.child = i;
                                    break;
                                }
                                (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                            }
                            $l(t, !0, n, null, o, t.lastEffect);
                            break;
                        case "together":
                            $l(t, !1, null, null, void 0, t.lastEffect);
                            break;
                        default:
                            t.memoizedState = null;
                    }
                return t.child;
            }
            function ql(e, t, n) {
                null !== e && (t.dependencies = e.dependencies);
                var r = t.expirationTime;
                if ((0 !== r && lu(r), t.childExpirationTime < n)) return null;
                if (null !== e && t.child !== e.child) throw Error(l(153));
                if (null !== t.child) {
                    for (n = Eu((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; ) (e = e.sibling), ((n = n.sibling = Eu(e, e.pendingProps)).return = t);
                    n.sibling = null;
                }
                return t.child;
            }
            function Ql(e, t) {
                switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                        null === n ? (e.tail = null) : (n.sibling = null);
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                        null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
                }
            }
            function Xl(e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
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
                        return null;
                    case 1:
                        return mi(t.type) && gi(), null;
                    case 3:
                        return Ao(), ui(di), ui(fi), (n = t.stateNode).pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)), (null !== e && null !== e.child) || !Ll(t) || (t.effectTag |= 4), null;
                    case 5:
                        Fo(t), (n = Po(Oo.current));
                        var o = t.type;
                        if (null !== e && null != t.stateNode) Bl(e, t, o, r, n), e.ref !== t.ref && (t.effectTag |= 128);
                        else {
                            if (!r) {
                                if (null === t.stateNode) throw Error(l(166));
                                return null;
                            }
                            if (((e = Po(Mo.current)), Ll(t))) {
                                (r = t.stateNode), (o = t.type);
                                var a = t.memoizedProps;
                                switch (((r[Sn] = t), (r[Tn] = a), o)) {
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Gt("load", r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (e = 0; e < Xe.length; e++) Gt(Xe[e], r);
                                        break;
                                    case "source":
                                        Gt("error", r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Gt("error", r), Gt("load", r);
                                        break;
                                    case "form":
                                        Gt("reset", r), Gt("submit", r);
                                        break;
                                    case "details":
                                        Gt("toggle", r);
                                        break;
                                    case "input":
                                        Ce(r, a), Gt("invalid", r), un(n, "onChange");
                                        break;
                                    case "select":
                                        (r._wrapperState = { wasMultiple: !!a.multiple }), Gt("invalid", r), un(n, "onChange");
                                        break;
                                    case "textarea":
                                        Pe(r, a), Gt("invalid", r), un(n, "onChange");
                                }
                                for (var u in (on(o, a), (e = null), a))
                                    if (a.hasOwnProperty(u)) {
                                        var s = a[u];
                                        "children" === u ? ("string" === typeof s ? r.textContent !== s && (e = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (e = ["children", "" + s])) : S.hasOwnProperty(u) && null != s && un(n, u);
                                    }
                                switch (o) {
                                    case "input":
                                        we(r), Ee(r, a, !0);
                                        break;
                                    case "textarea":
                                        we(r), Ae(r);
                                        break;
                                    case "select":
                                    case "option":
                                        break;
                                    default:
                                        "function" === typeof a.onClick && (r.onclick = sn);
                                }
                                (n = e), (t.updateQueue = n), null !== n && (t.effectTag |= 4);
                            } else {
                                switch (((u = 9 === n.nodeType ? n : n.ownerDocument), e === an && (e = Ie(o)), e === an ? ("script" === o ? (((e = u.createElement("div")).innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild))) : "string" === typeof r.is ? (e = u.createElement(o, { is: r.is })) : ((e = u.createElement(o)), "select" === o && ((u = e), r.multiple ? (u.multiple = !0) : r.size && (u.size = r.size)))) : (e = u.createElementNS(e, o)), (e[Sn] = t), (e[Tn] = r), Hl(e, t), (t.stateNode = e), (u = ln(o, r)), o)) {
                                    case "iframe":
                                    case "object":
                                    case "embed":
                                        Gt("load", e), (s = r);
                                        break;
                                    case "video":
                                    case "audio":
                                        for (s = 0; s < Xe.length; s++) Gt(Xe[s], e);
                                        s = r;
                                        break;
                                    case "source":
                                        Gt("error", e), (s = r);
                                        break;
                                    case "img":
                                    case "image":
                                    case "link":
                                        Gt("error", e), Gt("load", e), (s = r);
                                        break;
                                    case "form":
                                        Gt("reset", e), Gt("submit", e), (s = r);
                                        break;
                                    case "details":
                                        Gt("toggle", e), (s = r);
                                        break;
                                    case "input":
                                        Ce(e, r), (s = ke(e, r)), Gt("invalid", e), un(n, "onChange");
                                        break;
                                    case "option":
                                        s = Me(e, r);
                                        break;
                                    case "select":
                                        (e._wrapperState = { wasMultiple: !!r.multiple }), (s = i({}, r, { value: void 0 })), Gt("invalid", e), un(n, "onChange");
                                        break;
                                    case "textarea":
                                        Pe(e, r), (s = Oe(e, r)), Gt("invalid", e), un(n, "onChange");
                                        break;
                                    default:
                                        s = r;
                                }
                                on(o, s);
                                var c = s;
                                for (a in c)
                                    if (c.hasOwnProperty(a)) {
                                        var f = c[a];
                                        "style" === a ? nn(e, f) : "dangerouslySetInnerHTML" === a ? null != (f = f ? f.__html : void 0) && We(e, f) : "children" === a ? ("string" === typeof f ? ("textarea" !== o || "" !== f) && He(e, f) : "number" === typeof f && He(e, "" + f)) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (S.hasOwnProperty(a) ? null != f && un(n, a) : null != f && Y(e, a, f, u));
                                    }
                                switch (o) {
                                    case "input":
                                        we(e), Ee(e, r, !1);
                                        break;
                                    case "textarea":
                                        we(e), Ae(e);
                                        break;
                                    case "option":
                                        null != r.value && e.setAttribute("value", "" + ye(r.value));
                                        break;
                                    case "select":
                                        (e.multiple = !!r.multiple), null != (n = r.value) ? Ne(e, !!r.multiple, n, !1) : null != r.defaultValue && Ne(e, !!r.multiple, r.defaultValue, !0);
                                        break;
                                    default:
                                        "function" === typeof s.onClick && (e.onclick = sn);
                                }
                                vn(o, r) && (t.effectTag |= 4);
                            }
                            null !== t.ref && (t.effectTag |= 128);
                        }
                        return null;
                    case 6:
                        if (e && null != t.stateNode) Ul(0, t, e.memoizedProps, r);
                        else {
                            if ("string" !== typeof r && null === t.stateNode) throw Error(l(166));
                            (n = Po(Oo.current)), Po(Mo.current), Ll(t) ? ((n = t.stateNode), (r = t.memoizedProps), (n[Sn] = t), n.nodeValue !== r && (t.effectTag |= 4)) : (((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Sn] = t), (t.stateNode = n));
                        }
                        return null;
                    case 13:
                        return (
                            ui(Io),
                            (r = t.memoizedState),
                            0 !== (64 & t.effectTag)
                                ? ((t.expirationTime = n), t)
                                : ((n = null !== r),
                                  (r = !1),
                                  null === e ? void 0 !== t.memoizedProps.fallback && Ll(t) : ((r = null !== (o = e.memoizedState)), n || null === o || (null !== (o = e.child.sibling) && (null !== (a = t.firstEffect) ? ((t.firstEffect = o), (o.nextEffect = a)) : ((t.firstEffect = t.lastEffect = o), (o.nextEffect = null)), (o.effectTag = 8)))),
                                  n && !r && 0 !== (2 & t.mode) && ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 !== (1 & Io.current) ? La === wa && (La = xa) : ((La !== wa && La !== xa) || (La = ka), 0 !== Da && null !== Sa && (Au(Sa, Ea), zu(Sa, Da)))),
                                  (n || r) && (t.effectTag |= 4),
                                  null)
                        );
                    case 4:
                        return Ao(), null;
                    case 10:
                        return eo(t), null;
                    case 17:
                        return mi(t.type) && gi(), null;
                    case 19:
                        if ((ui(Io), null === (r = t.memoizedState))) return null;
                        if (((o = 0 !== (64 & t.effectTag)), null === (a = r.rendering))) {
                            if (o) Ql(r, !1);
                            else if (La !== wa || (null !== e && 0 !== (64 & e.effectTag)))
                                for (a = t.child; null !== a; ) {
                                    if (null !== (e = _o(a))) {
                                        for (t.effectTag |= 64, Ql(r, !1), null !== (o = e.updateQueue) && ((t.updateQueue = o), (t.effectTag |= 4)), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = t.child; null !== r; )
                                            (a = n),
                                                ((o = r).effectTag &= 2),
                                                (o.nextEffect = null),
                                                (o.firstEffect = null),
                                                (o.lastEffect = null),
                                                null === (e = o.alternate)
                                                    ? ((o.childExpirationTime = 0), (o.expirationTime = a), (o.child = null), (o.memoizedProps = null), (o.memoizedState = null), (o.updateQueue = null), (o.dependencies = null))
                                                    : ((o.childExpirationTime = e.childExpirationTime), (o.expirationTime = e.expirationTime), (o.child = e.child), (o.memoizedProps = e.memoizedProps), (o.memoizedState = e.memoizedState), (o.updateQueue = e.updateQueue), (a = e.dependencies), (o.dependencies = null === a ? null : { expirationTime: a.expirationTime, firstContext: a.firstContext, responders: a.responders })),
                                                (r = r.sibling);
                                        return si(Io, (1 & Io.current) | 2), t.child;
                                    }
                                    a = a.sibling;
                                }
                        } else {
                            if (!o)
                                if (null !== (e = _o(a))) {
                                    if (((t.effectTag |= 64), (o = !0), null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.effectTag |= 4)), Ql(r, !0), null === r.tail && "hidden" === r.tailMode && !a.alternate)) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                                } else 2 * Wi() - r.renderingStartTime > r.tailExpiration && 1 < n && ((t.effectTag |= 64), (o = !0), Ql(r, !1), (t.expirationTime = t.childExpirationTime = n - 1));
                            r.isBackwards ? ((a.sibling = t.child), (t.child = a)) : (null !== (n = r.last) ? (n.sibling = a) : (t.child = a), (r.last = a));
                        }
                        return null !== r.tail ? (0 === r.tailExpiration && (r.tailExpiration = Wi() + 500), (n = r.tail), (r.rendering = n), (r.tail = n.sibling), (r.lastEffect = t.lastEffect), (r.renderingStartTime = Wi()), (n.sibling = null), (t = Io.current), si(Io, o ? (1 & t) | 2 : 1 & t), n) : null;
                }
                throw Error(l(156, t.tag));
            }
            function Yl(e) {
                switch (e.tag) {
                    case 1:
                        mi(e.type) && gi();
                        var t = e.effectTag;
                        return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
                    case 3:
                        if ((Ao(), ui(di), ui(fi), 0 !== (64 & (t = e.effectTag)))) throw Error(l(285));
                        return (e.effectTag = (-4097 & t) | 64), e;
                    case 5:
                        return Fo(e), null;
                    case 13:
                        return ui(Io), 4096 & (t = e.effectTag) ? ((e.effectTag = (-4097 & t) | 64), e) : null;
                    case 19:
                        return ui(Io), null;
                    case 4:
                        return Ao(), null;
                    case 10:
                        return eo(e), null;
                    default:
                        return null;
                }
            }
            function Zl(e, t) {
                return { value: e, source: t, stack: ve(t) };
            }
            (Hl = function (e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        (n.child.return = n), (n = n.child);
                        continue;
                    }
                    if (n === t) break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t) return;
                        n = n.return;
                    }
                    (n.sibling.return = n.return), (n = n.sibling);
                }
            }),
                (Bl = function (e, t, n, r, o) {
                    var l = e.memoizedProps;
                    if (l !== r) {
                        var a,
                            u,
                            s = t.stateNode;
                        switch ((Po(Mo.current), (e = null), n)) {
                            case "input":
                                (l = ke(s, l)), (r = ke(s, r)), (e = []);
                                break;
                            case "option":
                                (l = Me(s, l)), (r = Me(s, r)), (e = []);
                                break;
                            case "select":
                                (l = i({}, l, { value: void 0 })), (r = i({}, r, { value: void 0 })), (e = []);
                                break;
                            case "textarea":
                                (l = Oe(s, l)), (r = Oe(s, r)), (e = []);
                                break;
                            default:
                                "function" !== typeof l.onClick && "function" === typeof r.onClick && (s.onclick = sn);
                        }
                        for (a in (on(n, r), (n = null), l))
                            if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && null != l[a])
                                if ("style" === a) for (u in (s = l[a])) s.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
                                else "dangerouslySetInnerHTML" !== a && "children" !== a && "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (S.hasOwnProperty(a) ? e || (e = []) : (e = e || []).push(a, null));
                        for (a in r) {
                            var c = r[a];
                            if (((s = null != l ? l[a] : void 0), r.hasOwnProperty(a) && c !== s && (null != c || null != s)))
                                if ("style" === a)
                                    if (s) {
                                        for (u in s) !s.hasOwnProperty(u) || (c && c.hasOwnProperty(u)) || (n || (n = {}), (n[u] = ""));
                                        for (u in c) c.hasOwnProperty(u) && s[u] !== c[u] && (n || (n = {}), (n[u] = c[u]));
                                    } else n || (e || (e = []), e.push(a, n)), (n = c);
                                else "dangerouslySetInnerHTML" === a ? ((c = c ? c.__html : void 0), (s = s ? s.__html : void 0), null != c && s !== c && (e = e || []).push(a, c)) : "children" === a ? s === c || ("string" !== typeof c && "number" !== typeof c) || (e = e || []).push(a, "" + c) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && (S.hasOwnProperty(a) ? (null != c && un(o, a), e || s === c || (e = [])) : (e = e || []).push(a, c));
                        }
                        n && (e = e || []).push("style", n), (o = e), (t.updateQueue = o) && (t.effectTag |= 4);
                    }
                }),
                (Ul = function (e, t, n, r) {
                    n !== r && (t.effectTag |= 4);
                });
            var Jl = "function" === typeof WeakSet ? WeakSet : Set;
            function ea(e, t) {
                var n = t.source,
                    r = t.stack;
                null === r && null !== n && (r = ve(n)), null !== n && ge(n.type), (t = t.value), null !== e && 1 === e.tag && ge(e.type);
                try {
                    console.error(t);
                } catch (i) {
                    setTimeout(function () {
                        throw i;
                    });
                }
            }
            function ta(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" === typeof t)
                        try {
                            t(null);
                        } catch (n) {
                            yu(e, n);
                        }
                    else t.current = null;
            }
            function na(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return;
                    case 1:
                        if (256 & t.effectTag && null !== e) {
                            var n = e.memoizedProps,
                                r = e.memoizedState;
                            (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : qi(t.type, n), r)), (e.__reactInternalSnapshotBeforeUpdate = t);
                        }
                        return;
                    case 3:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        return;
                }
                throw Error(l(163));
            }
            function ra(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                    var n = (t = t.next);
                    do {
                        if ((n.tag & e) === e) {
                            var r = n.destroy;
                            (n.destroy = void 0), void 0 !== r && r();
                        }
                        n = n.next;
                    } while (n !== t);
                }
            }
            function ia(e, t) {
                if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
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
            function oa(e, t, n) {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        return void ia(3, n);
                    case 1:
                        if (((e = n.stateNode), 4 & n.effectTag))
                            if (null === t) e.componentDidMount();
                            else {
                                var r = n.elementType === n.type ? t.memoizedProps : qi(n.type, t.memoizedProps);
                                e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate);
                            }
                        return void (null !== (t = n.updateQueue) && fo(n, t, e));
                    case 3:
                        if (null !== (t = n.updateQueue)) {
                            if (((e = null), null !== n.child))
                                switch (n.child.tag) {
                                    case 5:
                                        e = n.child.stateNode;
                                        break;
                                    case 1:
                                        e = n.child.stateNode;
                                }
                            fo(n, t, e);
                        }
                        return;
                    case 5:
                        return (e = n.stateNode), void (null === t && 4 & n.effectTag && vn(n.type, n.memoizedProps) && e.focus());
                    case 6:
                    case 4:
                    case 12:
                        return;
                    case 13:
                        return void (null === n.memoizedState && ((n = n.alternate), null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && It(n)))));
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                        return;
                }
                throw Error(l(163));
            }
            function la(e, t, n) {
                switch (("function" === typeof ku && ku(t), t.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                            var r = e.next;
                            Ui(97 < n ? 97 : n, function () {
                                var e = r;
                                do {
                                    var n = e.destroy;
                                    if (void 0 !== n) {
                                        var i = t;
                                        try {
                                            n();
                                        } catch (o) {
                                            yu(i, o);
                                        }
                                    }
                                    e = e.next;
                                } while (e !== r);
                            });
                        }
                        break;
                    case 1:
                        ta(t),
                            "function" === typeof (n = t.stateNode).componentWillUnmount &&
                                (function (e, t) {
                                    try {
                                        (t.props = e.memoizedProps), (t.state = e.memoizedState), t.componentWillUnmount();
                                    } catch (n) {
                                        yu(e, n);
                                    }
                                })(t, n);
                        break;
                    case 5:
                        ta(t);
                        break;
                    case 4:
                        ca(e, t, n);
                }
            }
            function aa(e) {
                var t = e.alternate;
                (e.return = null), (e.child = null), (e.memoizedState = null), (e.updateQueue = null), (e.dependencies = null), (e.alternate = null), (e.firstEffect = null), (e.lastEffect = null), (e.pendingProps = null), (e.memoizedProps = null), (e.stateNode = null), null !== t && aa(t);
            }
            function ua(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag;
            }
            function sa(e) {
                e: {
                    for (var t = e.return; null !== t; ) {
                        if (ua(t)) {
                            var n = t;
                            break e;
                        }
                        t = t.return;
                    }
                    throw Error(l(160));
                }
                switch (((t = n.stateNode), n.tag)) {
                    case 5:
                        var r = !1;
                        break;
                    case 3:
                    case 4:
                        (t = t.containerInfo), (r = !0);
                        break;
                    default:
                        throw Error(l(161));
                }
                16 & n.effectTag && (He(t, ""), (n.effectTag &= -17));
                e: t: for (n = e; ; ) {
                    for (; null === n.sibling; ) {
                        if (null === n.return || ua(n.return)) {
                            n = null;
                            break e;
                        }
                        n = n.return;
                    }
                    for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
                        if (2 & n.effectTag) continue t;
                        if (null === n.child || 4 === n.tag) continue t;
                        (n.child.return = n), (n = n.child);
                    }
                    if (!(2 & n.effectTag)) {
                        n = n.stateNode;
                        break e;
                    }
                }
                r
                    ? (function e(t, n, r) {
                          var i = t.tag,
                              o = 5 === i || 6 === i;
                          if (o) (t = o ? t.stateNode : t.stateNode.instance), n ? (8 === r.nodeType ? r.parentNode.insertBefore(t, n) : r.insertBefore(t, n)) : (8 === r.nodeType ? (n = r.parentNode).insertBefore(t, r) : (n = r).appendChild(t), (null !== (r = r._reactRootContainer) && void 0 !== r) || null !== n.onclick || (n.onclick = sn));
                          else if (4 !== i && null !== (t = t.child)) for (e(t, n, r), t = t.sibling; null !== t; ) e(t, n, r), (t = t.sibling);
                      })(e, n, t)
                    : (function e(t, n, r) {
                          var i = t.tag,
                              o = 5 === i || 6 === i;
                          if (o) (t = o ? t.stateNode : t.stateNode.instance), n ? r.insertBefore(t, n) : r.appendChild(t);
                          else if (4 !== i && null !== (t = t.child)) for (e(t, n, r), t = t.sibling; null !== t; ) e(t, n, r), (t = t.sibling);
                      })(e, n, t);
            }
            function ca(e, t, n) {
                for (var r, i, o = t, a = !1; ; ) {
                    if (!a) {
                        a = o.return;
                        e: for (;;) {
                            if (null === a) throw Error(l(160));
                            switch (((r = a.stateNode), a.tag)) {
                                case 5:
                                    i = !1;
                                    break e;
                                case 3:
                                case 4:
                                    (r = r.containerInfo), (i = !0);
                                    break e;
                            }
                            a = a.return;
                        }
                        a = !0;
                    }
                    if (5 === o.tag || 6 === o.tag) {
                        e: for (var u = e, s = o, c = n, f = s; ; )
                            if ((la(u, f, c), null !== f.child && 4 !== f.tag)) (f.child.return = f), (f = f.child);
                            else {
                                if (f === s) break e;
                                for (; null === f.sibling; ) {
                                    if (null === f.return || f.return === s) break e;
                                    f = f.return;
                                }
                                (f.sibling.return = f.return), (f = f.sibling);
                            }
                        i ? ((u = r), (s = o.stateNode), 8 === u.nodeType ? u.parentNode.removeChild(s) : u.removeChild(s)) : r.removeChild(o.stateNode);
                    } else if (4 === o.tag) {
                        if (null !== o.child) {
                            (r = o.stateNode.containerInfo), (i = !0), (o.child.return = o), (o = o.child);
                            continue;
                        }
                    } else if ((la(e, o, n), null !== o.child)) {
                        (o.child.return = o), (o = o.child);
                        continue;
                    }
                    if (o === t) break;
                    for (; null === o.sibling; ) {
                        if (null === o.return || o.return === t) return;
                        4 === (o = o.return).tag && (a = !1);
                    }
                    (o.sibling.return = o.return), (o = o.sibling);
                }
            }
            function fa(e, t) {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        return void ra(3, t);
                    case 1:
                        return;
                    case 5:
                        var n = t.stateNode;
                        if (null != n) {
                            var r = t.memoizedProps,
                                i = null !== e ? e.memoizedProps : r;
                            e = t.type;
                            var o = t.updateQueue;
                            if (((t.updateQueue = null), null !== o)) {
                                for (n[Tn] = r, "input" === e && "radio" === r.type && null != r.name && Se(n, r), ln(e, i), t = ln(e, r), i = 0; i < o.length; i += 2) {
                                    var a = o[i],
                                        u = o[i + 1];
                                    "style" === a ? nn(n, u) : "dangerouslySetInnerHTML" === a ? We(n, u) : "children" === a ? He(n, u) : Y(n, a, u, t);
                                }
                                switch (e) {
                                    case "input":
                                        Te(n, r);
                                        break;
                                    case "textarea":
                                        De(n, r);
                                        break;
                                    case "select":
                                        (t = n._wrapperState.wasMultiple), (n._wrapperState.wasMultiple = !!r.multiple), null != (e = r.value) ? Ne(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Ne(n, !!r.multiple, r.defaultValue, !0) : Ne(n, !!r.multiple, r.multiple ? [] : "", !1));
                                }
                            }
                        }
                        return;
                    case 6:
                        if (null === t.stateNode) throw Error(l(162));
                        return void (t.stateNode.nodeValue = t.memoizedProps);
                    case 3:
                        return void ((t = t.stateNode).hydrate && ((t.hydrate = !1), It(t.containerInfo)));
                    case 12:
                        return;
                    case 13:
                        if (((n = t), null === t.memoizedState ? (r = !1) : ((r = !0), (n = t.child), (za = Wi())), null !== n))
                            e: for (e = n; ; ) {
                                if (5 === e.tag) (o = e.stateNode), r ? ("function" === typeof (o = o.style).setProperty ? o.setProperty("display", "none", "important") : (o.display = "none")) : ((o = e.stateNode), (i = void 0 !== (i = e.memoizedProps.style) && null !== i && i.hasOwnProperty("display") ? i.display : null), (o.style.display = tn("display", i)));
                                else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                                else {
                                    if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                                        ((o = e.child.sibling).return = e), (e = o);
                                        continue;
                                    }
                                    if (null !== e.child) {
                                        (e.child.return = e), (e = e.child);
                                        continue;
                                    }
                                }
                                if (e === n) break;
                                for (; null === e.sibling; ) {
                                    if (null === e.return || e.return === n) break e;
                                    e = e.return;
                                }
                                (e.sibling.return = e.return), (e = e.sibling);
                            }
                        return void da(t);
                    case 19:
                        return void da(t);
                    case 17:
                        return;
                }
                throw Error(l(163));
            }
            function da(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new Jl()),
                        t.forEach(function (t) {
                            var r = wu.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r));
                        });
                }
            }
            var pa = "function" === typeof WeakMap ? WeakMap : Map;
            function ha(e, t, n) {
                ((n = ao(n, null)).tag = 3), (n.payload = { element: null });
                var r = t.value;
                return (
                    (n.callback = function () {
                        Ia || ((Ia = !0), (_a = r)), ea(e, t);
                    }),
                    n
                );
            }
            function ma(e, t, n) {
                (n = ao(n, null)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var i = t.value;
                    n.payload = function () {
                        return ea(e, t), r(i);
                    };
                }
                var o = e.stateNode;
                return (
                    null !== o &&
                        "function" === typeof o.componentDidCatch &&
                        (n.callback = function () {
                            "function" !== typeof r && (null === Ra ? (Ra = new Set([this])) : Ra.add(this), ea(e, t));
                            var n = t.stack;
                            this.componentDidCatch(t.value, { componentStack: null !== n ? n : "" });
                        }),
                    n
                );
            }
            var ga,
                va = Math.ceil,
                ya = X.ReactCurrentDispatcher,
                ba = X.ReactCurrentOwner,
                wa = 0,
                xa = 3,
                ka = 4,
                Ca = 0,
                Sa = null,
                Ta = null,
                Ea = 0,
                La = wa,
                Ma = null,
                Na = 1073741823,
                Oa = 1073741823,
                Pa = null,
                Da = 0,
                Aa = !1,
                za = 0,
                Fa = null,
                Ia = !1,
                _a = null,
                Ra = null,
                Wa = !1,
                Ha = null,
                Ba = 90,
                Ua = null,
                ja = 0,
                Va = null,
                Ka = 0;
            function $a() {
                return 0 !== (48 & Ca) ? 1073741821 - ((Wi() / 10) | 0) : 0 !== Ka ? Ka : (Ka = 1073741821 - ((Wi() / 10) | 0));
            }
            function Ga(e, t, n) {
                if (0 === (2 & (t = t.mode))) return 1073741823;
                var r = Hi();
                if (0 === (4 & t)) return 99 === r ? 1073741823 : 1073741822;
                if (0 !== (16 & Ca)) return Ea;
                if (null !== n) e = Gi(e, 0 | n.timeoutMs || 5e3, 250);
                else
                    switch (r) {
                        case 99:
                            e = 1073741823;
                            break;
                        case 98:
                            e = Gi(e, 150, 100);
                            break;
                        case 97:
                        case 96:
                            e = Gi(e, 5e3, 250);
                            break;
                        case 95:
                            e = 2;
                            break;
                        default:
                            throw Error(l(326));
                    }
                return null !== Sa && e === Ea && --e, e;
            }
            function qa(e, t) {
                if (50 < ja) throw ((ja = 0), (Va = null), Error(l(185)));
                if (null !== (e = Qa(e, t))) {
                    var n = Hi();
                    1073741823 === t ? (0 !== (8 & Ca) && 0 === (48 & Ca) ? Ja(e) : (Ya(e), 0 === Ca && Ki())) : Ya(e), 0 === (4 & Ca) || (98 !== n && 99 !== n) || (null === Ua ? (Ua = new Map([[e, t]])) : (void 0 === (n = Ua.get(e)) || n > t) && Ua.set(e, t));
                }
            }
            function Qa(e, t) {
                e.expirationTime < t && (e.expirationTime = t);
                var n = e.alternate;
                null !== n && n.expirationTime < t && (n.expirationTime = t);
                var r = e.return,
                    i = null;
                if (null === r && 3 === e.tag) i = e.stateNode;
                else
                    for (; null !== r; ) {
                        if (((n = r.alternate), r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag)) {
                            i = r.stateNode;
                            break;
                        }
                        r = r.return;
                    }
                return null !== i && (Sa === i && (lu(t), La === ka && Au(i, Ea)), zu(i, t)), i;
            }
            function Xa(e) {
                var t = e.lastExpiredTime;
                if (0 !== t) return t;
                if (!Du(e, (t = e.firstPendingTime))) return t;
                var n = e.lastPingedTime;
                return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e;
            }
            function Ya(e) {
                if (0 !== e.lastExpiredTime) (e.callbackExpirationTime = 1073741823), (e.callbackPriority = 99), (e.callbackNode = Vi(Ja.bind(null, e)));
                else {
                    var t = Xa(e),
                        n = e.callbackNode;
                    if (0 === t) null !== n && ((e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90));
                    else {
                        var r = $a();
                        if ((1073741823 === t ? (r = 99) : 1 === t || 2 === t ? (r = 95) : (r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95), null !== n)) {
                            var i = e.callbackPriority;
                            if (e.callbackExpirationTime === t && i >= r) return;
                            n !== Di && Ci(n);
                        }
                        (e.callbackExpirationTime = t), (e.callbackPriority = r), (t = 1073741823 === t ? Vi(Ja.bind(null, e)) : ji(r, Za.bind(null, e), { timeout: 10 * (1073741821 - t) - Wi() })), (e.callbackNode = t);
                    }
                }
            }
            function Za(e, t) {
                if (((Ka = 0), t)) return Fu(e, (t = $a())), Ya(e), null;
                var n = Xa(e);
                if (0 !== n) {
                    if (((t = e.callbackNode), 0 !== (48 & Ca))) throw Error(l(327));
                    if ((mu(), (e === Sa && n === Ea) || nu(e, n), null !== Ta)) {
                        var r = Ca;
                        Ca |= 16;
                        for (var i = iu(); ; )
                            try {
                                uu();
                                break;
                            } catch (u) {
                                ru(e, u);
                            }
                        if ((Ji(), (Ca = r), (ya.current = i), 1 === La)) throw ((t = Ma), nu(e, n), Au(e, n), Ya(e), t);
                        if (null === Ta)
                            switch (((i = e.finishedWork = e.current.alternate), (e.finishedExpirationTime = n), (r = La), (Sa = null), r)) {
                                case wa:
                                case 1:
                                    throw Error(l(345));
                                case 2:
                                    Fu(e, 2 < n ? 2 : n);
                                    break;
                                case xa:
                                    if ((Au(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fu(i)), 1073741823 === Na && 10 < (i = za + 500 - Wi()))) {
                                        if (Aa) {
                                            var o = e.lastPingedTime;
                                            if (0 === o || o >= n) {
                                                (e.lastPingedTime = n), nu(e, n);
                                                break;
                                            }
                                        }
                                        if (0 !== (o = Xa(e)) && o !== n) break;
                                        if (0 !== r && r !== n) {
                                            e.lastPingedTime = r;
                                            break;
                                        }
                                        e.timeoutHandle = bn(du.bind(null, e), i);
                                        break;
                                    }
                                    du(e);
                                    break;
                                case ka:
                                    if ((Au(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = fu(i)), Aa && (0 === (i = e.lastPingedTime) || i >= n))) {
                                        (e.lastPingedTime = n), nu(e, n);
                                        break;
                                    }
                                    if (0 !== (i = Xa(e)) && i !== n) break;
                                    if (0 !== r && r !== n) {
                                        e.lastPingedTime = r;
                                        break;
                                    }
                                    if ((1073741823 !== Oa ? (r = 10 * (1073741821 - Oa) - Wi()) : 1073741823 === Na ? (r = 0) : ((r = 10 * (1073741821 - Na) - 5e3), 0 > (r = (i = Wi()) - r) && (r = 0), (n = 10 * (1073741821 - n) - i) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * va(r / 1960)) - r) && (r = n)), 10 < r)) {
                                        e.timeoutHandle = bn(du.bind(null, e), r);
                                        break;
                                    }
                                    du(e);
                                    break;
                                case 5:
                                    if (1073741823 !== Na && null !== Pa) {
                                        o = Na;
                                        var a = Pa;
                                        if ((0 >= (r = 0 | a.busyMinDurationMs) ? (r = 0) : ((i = 0 | a.busyDelayMs), (r = (o = Wi() - (10 * (1073741821 - o) - (0 | a.timeoutMs || 5e3))) <= i ? 0 : i + r - o)), 10 < r)) {
                                            Au(e, n), (e.timeoutHandle = bn(du.bind(null, e), r));
                                            break;
                                        }
                                    }
                                    du(e);
                                    break;
                                default:
                                    throw Error(l(329));
                            }
                        if ((Ya(e), e.callbackNode === t)) return Za.bind(null, e);
                    }
                }
                return null;
            }
            function Ja(e) {
                var t = e.lastExpiredTime;
                if (((t = 0 !== t ? t : 1073741823), 0 !== (48 & Ca))) throw Error(l(327));
                if ((mu(), (e === Sa && t === Ea) || nu(e, t), null !== Ta)) {
                    var n = Ca;
                    Ca |= 16;
                    for (var r = iu(); ; )
                        try {
                            au();
                            break;
                        } catch (i) {
                            ru(e, i);
                        }
                    if ((Ji(), (Ca = n), (ya.current = r), 1 === La)) throw ((n = Ma), nu(e, t), Au(e, t), Ya(e), n);
                    if (null !== Ta) throw Error(l(261));
                    (e.finishedWork = e.current.alternate), (e.finishedExpirationTime = t), (Sa = null), du(e), Ya(e);
                }
                return null;
            }
            function eu(e, t) {
                var n = Ca;
                Ca |= 1;
                try {
                    return e(t);
                } finally {
                    0 === (Ca = n) && Ki();
                }
            }
            function tu(e, t) {
                var n = Ca;
                (Ca &= -2), (Ca |= 8);
                try {
                    return e(t);
                } finally {
                    0 === (Ca = n) && Ki();
                }
            }
            function nu(e, t) {
                (e.finishedWork = null), (e.finishedExpirationTime = 0);
                var n = e.timeoutHandle;
                if ((-1 !== n && ((e.timeoutHandle = -1), wn(n)), null !== Ta))
                    for (n = Ta.return; null !== n; ) {
                        var r = n;
                        switch (r.tag) {
                            case 1:
                                null !== (r = r.type.childContextTypes) && void 0 !== r && gi();
                                break;
                            case 3:
                                Ao(), ui(di), ui(fi);
                                break;
                            case 5:
                                Fo(r);
                                break;
                            case 4:
                                Ao();
                                break;
                            case 13:
                            case 19:
                                ui(Io);
                                break;
                            case 10:
                                eo(r);
                        }
                        n = n.return;
                    }
                (Sa = e), (Ta = Eu(e.current, null)), (Ea = t), (La = wa), (Ma = null), (Oa = Na = 1073741823), (Pa = null), (Da = 0), (Aa = !1);
            }
            function ru(e, t) {
                for (;;) {
                    try {
                        if ((Ji(), (Wo.current = gl), Ko))
                            for (var n = Uo.memoizedState; null !== n; ) {
                                var r = n.queue;
                                null !== r && (r.pending = null), (n = n.next);
                            }
                        if (((Bo = 0), (Vo = jo = Uo = null), (Ko = !1), null === Ta || null === Ta.return)) return (La = 1), (Ma = t), (Ta = null);
                        e: {
                            var i = e,
                                o = Ta.return,
                                l = Ta,
                                a = t;
                            if (((t = Ea), (l.effectTag |= 2048), (l.firstEffect = l.lastEffect = null), null !== a && "object" === typeof a && "function" === typeof a.then)) {
                                var u = a;
                                if (0 === (2 & l.mode)) {
                                    var s = l.alternate;
                                    s ? ((l.updateQueue = s.updateQueue), (l.memoizedState = s.memoizedState), (l.expirationTime = s.expirationTime)) : ((l.updateQueue = null), (l.memoizedState = null));
                                }
                                var c = 0 !== (1 & Io.current),
                                    f = o;
                                do {
                                    var d;
                                    if ((d = 13 === f.tag)) {
                                        var p = f.memoizedState;
                                        if (null !== p) d = null !== p.dehydrated;
                                        else {
                                            var h = f.memoizedProps;
                                            d = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !c);
                                        }
                                    }
                                    if (d) {
                                        var m = f.updateQueue;
                                        if (null === m) {
                                            var g = new Set();
                                            g.add(u), (f.updateQueue = g);
                                        } else m.add(u);
                                        if (0 === (2 & f.mode)) {
                                            if (((f.effectTag |= 64), (l.effectTag &= -2981), 1 === l.tag))
                                                if (null === l.alternate) l.tag = 17;
                                                else {
                                                    var v = ao(1073741823, null);
                                                    (v.tag = 2), uo(l, v);
                                                }
                                            l.expirationTime = 1073741823;
                                            break e;
                                        }
                                        (a = void 0), (l = t);
                                        var y = i.pingCache;
                                        if ((null === y ? ((y = i.pingCache = new pa()), (a = new Set()), y.set(u, a)) : void 0 === (a = y.get(u)) && ((a = new Set()), y.set(u, a)), !a.has(l))) {
                                            a.add(l);
                                            var b = bu.bind(null, i, u, l);
                                            u.then(b, b);
                                        }
                                        (f.effectTag |= 4096), (f.expirationTime = t);
                                        break e;
                                    }
                                    f = f.return;
                                } while (null !== f);
                                a = Error((ge(l.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ve(l));
                            }
                            5 !== La && (La = 2), (a = Zl(a, l)), (f = o);
                            do {
                                switch (f.tag) {
                                    case 3:
                                        (u = a), (f.effectTag |= 4096), (f.expirationTime = t), so(f, ha(f, u, t));
                                        break e;
                                    case 1:
                                        u = a;
                                        var w = f.type,
                                            x = f.stateNode;
                                        if (0 === (64 & f.effectTag) && ("function" === typeof w.getDerivedStateFromError || (null !== x && "function" === typeof x.componentDidCatch && (null === Ra || !Ra.has(x))))) {
                                            (f.effectTag |= 4096), (f.expirationTime = t), so(f, ma(f, u, t));
                                            break e;
                                        }
                                }
                                f = f.return;
                            } while (null !== f);
                        }
                        Ta = cu(Ta);
                    } catch (k) {
                        t = k;
                        continue;
                    }
                    break;
                }
            }
            function iu() {
                var e = ya.current;
                return (ya.current = gl), null === e ? gl : e;
            }
            function ou(e, t) {
                e < Na && 2 < e && (Na = e), null !== t && e < Oa && 2 < e && ((Oa = e), (Pa = t));
            }
            function lu(e) {
                e > Da && (Da = e);
            }
            function au() {
                for (; null !== Ta; ) Ta = su(Ta);
            }
            function uu() {
                for (; null !== Ta && !Ai(); ) Ta = su(Ta);
            }
            function su(e) {
                var t = ga(e.alternate, e, Ea);
                return (e.memoizedProps = e.pendingProps), null === t && (t = cu(e)), (ba.current = null), t;
            }
            function cu(e) {
                Ta = e;
                do {
                    var t = Ta.alternate;
                    if (((e = Ta.return), 0 === (2048 & Ta.effectTag))) {
                        if (((t = Xl(t, Ta, Ea)), 1 === Ea || 1 !== Ta.childExpirationTime)) {
                            for (var n = 0, r = Ta.child; null !== r; ) {
                                var i = r.expirationTime,
                                    o = r.childExpirationTime;
                                i > n && (n = i), o > n && (n = o), (r = r.sibling);
                            }
                            Ta.childExpirationTime = n;
                        }
                        if (null !== t) return t;
                        null !== e && 0 === (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Ta.firstEffect), null !== Ta.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Ta.firstEffect), (e.lastEffect = Ta.lastEffect)), 1 < Ta.effectTag && (null !== e.lastEffect ? (e.lastEffect.nextEffect = Ta) : (e.firstEffect = Ta), (e.lastEffect = Ta)));
                    } else {
                        if (null !== (t = Yl(Ta))) return (t.effectTag &= 2047), t;
                        null !== e && ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
                    }
                    if (null !== (t = Ta.sibling)) return t;
                    Ta = e;
                } while (null !== Ta);
                return La === wa && (La = 5), null;
            }
            function fu(e) {
                var t = e.expirationTime;
                return t > (e = e.childExpirationTime) ? t : e;
            }
            function du(e) {
                var t = Hi();
                return Ui(99, pu.bind(null, e, t)), null;
            }
            function pu(e, t) {
                do {
                    mu();
                } while (null !== Ha);
                if (0 !== (48 & Ca)) throw Error(l(327));
                var n = e.finishedWork,
                    r = e.finishedExpirationTime;
                if (null === n) return null;
                if (((e.finishedWork = null), (e.finishedExpirationTime = 0), n === e.current)) throw Error(l(177));
                (e.callbackNode = null), (e.callbackExpirationTime = 0), (e.callbackPriority = 90), (e.nextKnownPendingLevel = 0);
                var i = fu(n);
                if (((e.firstPendingTime = i), r <= e.lastSuspendedTime ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0) : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Sa && ((Ta = Sa = null), (Ea = 0)), 1 < n.effectTag ? (null !== n.lastEffect ? ((n.lastEffect.nextEffect = n), (i = n.firstEffect)) : (i = n)) : (i = n.firstEffect), null !== i)) {
                    var o = Ca;
                    (Ca |= 32), (ba.current = null), (mn = $t);
                    var a = pn();
                    if (hn(a)) {
                        if ("selectionStart" in a) var u = { start: a.selectionStart, end: a.selectionEnd };
                        else
                            e: {
                                var s = (u = ((u = a.ownerDocument) && u.defaultView) || window).getSelection && u.getSelection();
                                if (s && 0 !== s.rangeCount) {
                                    u = s.anchorNode;
                                    var c = s.anchorOffset,
                                        f = s.focusNode;
                                    s = s.focusOffset;
                                    try {
                                        u.nodeType, f.nodeType;
                                    } catch (E) {
                                        u = null;
                                        break e;
                                    }
                                    var d = 0,
                                        p = -1,
                                        h = -1,
                                        m = 0,
                                        g = 0,
                                        v = a,
                                        y = null;
                                    t: for (;;) {
                                        for (var b; v !== u || (0 !== c && 3 !== v.nodeType) || (p = d + c), v !== f || (0 !== s && 3 !== v.nodeType) || (h = d + s), 3 === v.nodeType && (d += v.nodeValue.length), null !== (b = v.firstChild); ) (y = v), (v = b);
                                        for (;;) {
                                            if (v === a) break t;
                                            if ((y === u && ++m === c && (p = d), y === f && ++g === s && (h = d), null !== (b = v.nextSibling))) break;
                                            y = (v = y).parentNode;
                                        }
                                        v = b;
                                    }
                                    u = -1 === p || -1 === h ? null : { start: p, end: h };
                                } else u = null;
                            }
                        u = u || { start: 0, end: 0 };
                    } else u = null;
                    (gn = { activeElementDetached: null, focusedElem: a, selectionRange: u }), ($t = !1), (Fa = i);
                    do {
                        try {
                            hu();
                        } catch (E) {
                            if (null === Fa) throw Error(l(330));
                            yu(Fa, E), (Fa = Fa.nextEffect);
                        }
                    } while (null !== Fa);
                    Fa = i;
                    do {
                        try {
                            for (a = e, u = t; null !== Fa; ) {
                                var w = Fa.effectTag;
                                if ((16 & w && He(Fa.stateNode, ""), 128 & w)) {
                                    var x = Fa.alternate;
                                    if (null !== x) {
                                        var k = x.ref;
                                        null !== k && ("function" === typeof k ? k(null) : (k.current = null));
                                    }
                                }
                                switch (1038 & w) {
                                    case 2:
                                        sa(Fa), (Fa.effectTag &= -3);
                                        break;
                                    case 6:
                                        sa(Fa), (Fa.effectTag &= -3), fa(Fa.alternate, Fa);
                                        break;
                                    case 1024:
                                        Fa.effectTag &= -1025;
                                        break;
                                    case 1028:
                                        (Fa.effectTag &= -1025), fa(Fa.alternate, Fa);
                                        break;
                                    case 4:
                                        fa(Fa.alternate, Fa);
                                        break;
                                    case 8:
                                        ca(a, (c = Fa), u), aa(c);
                                }
                                Fa = Fa.nextEffect;
                            }
                        } catch (E) {
                            if (null === Fa) throw Error(l(330));
                            yu(Fa, E), (Fa = Fa.nextEffect);
                        }
                    } while (null !== Fa);
                    if (
                        ((k = gn),
                        (x = pn()),
                        (w = k.focusedElem),
                        (u = k.selectionRange),
                        x !== w &&
                            w &&
                            w.ownerDocument &&
                            (function e(t, n) {
                                return !(!t || !n) && (t === n || ((!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n)))));
                            })(w.ownerDocument.documentElement, w))
                    ) {
                        null !== u &&
                            hn(w) &&
                            ((x = u.start),
                            void 0 === (k = u.end) && (k = x),
                            "selectionStart" in w
                                ? ((w.selectionStart = x), (w.selectionEnd = Math.min(k, w.value.length)))
                                : (k = ((x = w.ownerDocument || document) && x.defaultView) || window).getSelection &&
                                  ((k = k.getSelection()), (c = w.textContent.length), (a = Math.min(u.start, c)), (u = void 0 === u.end ? a : Math.min(u.end, c)), !k.extend && a > u && ((c = u), (u = a), (a = c)), (c = dn(w, a)), (f = dn(w, u)), c && f && (1 !== k.rangeCount || k.anchorNode !== c.node || k.anchorOffset !== c.offset || k.focusNode !== f.node || k.focusOffset !== f.offset) && ((x = x.createRange()).setStart(c.node, c.offset), k.removeAllRanges(), a > u ? (k.addRange(x), k.extend(f.node, f.offset)) : (x.setEnd(f.node, f.offset), k.addRange(x))))),
                            (x = []);
                        for (k = w; (k = k.parentNode); ) 1 === k.nodeType && x.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
                        for ("function" === typeof w.focus && w.focus(), w = 0; w < x.length; w++) ((k = x[w]).element.scrollLeft = k.left), (k.element.scrollTop = k.top);
                    }
                    ($t = !!mn), (gn = mn = null), (e.current = n), (Fa = i);
                    do {
                        try {
                            for (w = e; null !== Fa; ) {
                                var C = Fa.effectTag;
                                if ((36 & C && oa(w, Fa.alternate, Fa), 128 & C)) {
                                    x = void 0;
                                    var S = Fa.ref;
                                    if (null !== S) {
                                        var T = Fa.stateNode;
                                        switch (Fa.tag) {
                                            case 5:
                                                x = T;
                                                break;
                                            default:
                                                x = T;
                                        }
                                        "function" === typeof S ? S(x) : (S.current = x);
                                    }
                                }
                                Fa = Fa.nextEffect;
                            }
                        } catch (E) {
                            if (null === Fa) throw Error(l(330));
                            yu(Fa, E), (Fa = Fa.nextEffect);
                        }
                    } while (null !== Fa);
                    (Fa = null), zi(), (Ca = o);
                } else e.current = n;
                if (Wa) (Wa = !1), (Ha = e), (Ba = t);
                else for (Fa = i; null !== Fa; ) (t = Fa.nextEffect), (Fa.nextEffect = null), (Fa = t);
                if ((0 === (t = e.firstPendingTime) && (Ra = null), 1073741823 === t ? (e === Va ? ja++ : ((ja = 0), (Va = e))) : (ja = 0), "function" === typeof xu && xu(n.stateNode, r), Ya(e), Ia)) throw ((Ia = !1), (e = _a), (_a = null), e);
                return 0 !== (8 & Ca) || Ki(), null;
            }
            function hu() {
                for (; null !== Fa; ) {
                    var e = Fa.effectTag;
                    0 !== (256 & e) && na(Fa.alternate, Fa),
                        0 === (512 & e) ||
                            Wa ||
                            ((Wa = !0),
                            ji(97, function () {
                                return mu(), null;
                            })),
                        (Fa = Fa.nextEffect);
                }
            }
            function mu() {
                if (90 !== Ba) {
                    var e = 97 < Ba ? 97 : Ba;
                    return (Ba = 90), Ui(e, gu);
                }
            }
            function gu() {
                if (null === Ha) return !1;
                var e = Ha;
                if (((Ha = null), 0 !== (48 & Ca))) throw Error(l(331));
                var t = Ca;
                for (Ca |= 32, e = e.current.firstEffect; null !== e; ) {
                    try {
                        var n = e;
                        if (0 !== (512 & n.effectTag))
                            switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 22:
                                    ra(5, n), ia(5, n);
                            }
                    } catch (r) {
                        if (null === e) throw Error(l(330));
                        yu(e, r);
                    }
                    (n = e.nextEffect), (e.nextEffect = null), (e = n);
                }
                return (Ca = t), Ki(), !0;
            }
            function vu(e, t, n) {
                uo(e, (t = ha(e, (t = Zl(n, t)), 1073741823))), null !== (e = Qa(e, 1073741823)) && Ya(e);
            }
            function yu(e, t) {
                if (3 === e.tag) vu(e, e, t);
                else
                    for (var n = e.return; null !== n; ) {
                        if (3 === n.tag) {
                            vu(n, e, t);
                            break;
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" === typeof n.type.getDerivedStateFromError || ("function" === typeof r.componentDidCatch && (null === Ra || !Ra.has(r)))) {
                                uo(n, (e = ma(n, (e = Zl(t, e)), 1073741823))), null !== (n = Qa(n, 1073741823)) && Ya(n);
                                break;
                            }
                        }
                        n = n.return;
                    }
            }
            function bu(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t), Sa === e && Ea === n ? (La === ka || (La === xa && 1073741823 === Na && Wi() - za < 500) ? nu(e, Ea) : (Aa = !0)) : Du(e, n) && ((0 !== (t = e.lastPingedTime) && t < n) || ((e.lastPingedTime = n), Ya(e)));
            }
            function wu(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t), 0 === (t = 0) && (t = Ga((t = $a()), e, null)), null !== (e = Qa(e, t)) && Ya(e);
            }
            ga = function (e, t, n) {
                var r = t.expirationTime;
                if (null !== e) {
                    var i = t.pendingProps;
                    if (e.memoizedProps !== i || di.current) Ol = !0;
                    else {
                        if (r < n) {
                            switch (((Ol = !1), t.tag)) {
                                case 3:
                                    Wl(t), Ml();
                                    break;
                                case 5:
                                    if ((zo(t), 4 & t.mode && 1 !== n && i.hidden)) return (t.expirationTime = t.childExpirationTime = 1), null;
                                    break;
                                case 1:
                                    mi(t.type) && bi(t);
                                    break;
                                case 4:
                                    Do(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    (r = t.memoizedProps.value), (i = t.type._context), si(Qi, i._currentValue), (i._currentValue = r);
                                    break;
                                case 13:
                                    if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? Vl(e, t, n) : (si(Io, 1 & Io.current), null !== (t = ql(e, t, n)) ? t.sibling : null);
                                    si(Io, 1 & Io.current);
                                    break;
                                case 19:
                                    if (((r = t.childExpirationTime >= n), 0 !== (64 & e.effectTag))) {
                                        if (r) return Gl(e, t, n);
                                        t.effectTag |= 64;
                                    }
                                    if ((null !== (i = t.memoizedState) && ((i.rendering = null), (i.tail = null)), si(Io, Io.current), !r)) return null;
                            }
                            return ql(e, t, n);
                        }
                        Ol = !1;
                    }
                } else Ol = !1;
                switch (((t.expirationTime = 0), t.tag)) {
                    case 2:
                        if (((r = t.type), null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)), (e = t.pendingProps), (i = hi(t, fi.current)), no(t, n), (i = qo(null, t, r, e, i, n)), (t.effectTag |= 1), "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof)) {
                            if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), mi(r))) {
                                var o = !0;
                                bi(t);
                            } else o = !1;
                            (t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null), oo(t);
                            var a = r.getDerivedStateFromProps;
                            "function" === typeof a && mo(t, r, a, e), (i.updater = go), (t.stateNode = i), (i._reactInternalFiber = t), wo(t, r, e, n), (t = Rl(null, t, r, !0, o, n));
                        } else (t.tag = 0), Pl(null, t, i, n), (t = t.child);
                        return t;
                    case 16:
                        e: {
                            if (
                                ((i = t.elementType),
                                null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
                                (e = t.pendingProps),
                                (function (e) {
                                    if (-1 === e._status) {
                                        e._status = 0;
                                        var t = e._ctor;
                                        (t = t()),
                                            (e._result = t),
                                            t.then(
                                                function (t) {
                                                    0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                                                },
                                                function (t) {
                                                    0 === e._status && ((e._status = 2), (e._result = t));
                                                }
                                            );
                                    }
                                })(i),
                                1 !== i._status)
                            )
                                throw i._result;
                            switch (
                                ((i = i._result),
                                (t.type = i),
                                (o = t.tag = (function (e) {
                                    if ("function" === typeof e) return Tu(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === ue) return 11;
                                        if (e === fe) return 14;
                                    }
                                    return 2;
                                })(i)),
                                (e = qi(i, e)),
                                o)
                            ) {
                                case 0:
                                    t = Il(null, t, i, e, n);
                                    break e;
                                case 1:
                                    t = _l(null, t, i, e, n);
                                    break e;
                                case 11:
                                    t = Dl(null, t, i, e, n);
                                    break e;
                                case 14:
                                    t = Al(null, t, i, qi(i.type, e), r, n);
                                    break e;
                            }
                            throw Error(l(306, i, ""));
                        }
                        return t;
                    case 0:
                        return (r = t.type), (i = t.pendingProps), Il(e, t, r, (i = t.elementType === r ? i : qi(r, i)), n);
                    case 1:
                        return (r = t.type), (i = t.pendingProps), _l(e, t, r, (i = t.elementType === r ? i : qi(r, i)), n);
                    case 3:
                        if ((Wl(t), (r = t.updateQueue), null === e || null === r)) throw Error(l(282));
                        if (((r = t.pendingProps), (i = null !== (i = t.memoizedState) ? i.element : null), lo(e, t), co(t, r, null, n), (r = t.memoizedState.element) === i)) Ml(), (t = ql(e, t, n));
                        else {
                            if (((i = t.stateNode.hydrate) && ((xl = xn(t.stateNode.containerInfo.firstChild)), (wl = t), (i = kl = !0)), i)) for (n = Eo(t, null, r, n), t.child = n; n; ) (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
                            else Pl(e, t, r, n), Ml();
                            t = t.child;
                        }
                        return t;
                    case 5:
                        return zo(t), null === e && Tl(t), (r = t.type), (i = t.pendingProps), (o = null !== e ? e.memoizedProps : null), (a = i.children), yn(r, i) ? (a = null) : null !== o && yn(r, o) && (t.effectTag |= 16), Fl(e, t), 4 & t.mode && 1 !== n && i.hidden ? ((t.expirationTime = t.childExpirationTime = 1), (t = null)) : (Pl(e, t, a, n), (t = t.child)), t;
                    case 6:
                        return null === e && Tl(t), null;
                    case 13:
                        return Vl(e, t, n);
                    case 4:
                        return Do(t, t.stateNode.containerInfo), (r = t.pendingProps), null === e ? (t.child = To(t, null, r, n)) : Pl(e, t, r, n), t.child;
                    case 11:
                        return (r = t.type), (i = t.pendingProps), Dl(e, t, r, (i = t.elementType === r ? i : qi(r, i)), n);
                    case 7:
                        return Pl(e, t, t.pendingProps, n), t.child;
                    case 8:
                    case 12:
                        return Pl(e, t, t.pendingProps.children, n), t.child;
                    case 10:
                        e: {
                            (r = t.type._context), (i = t.pendingProps), (a = t.memoizedProps), (o = i.value);
                            var u = t.type._context;
                            if ((si(Qi, u._currentValue), (u._currentValue = o), null !== a))
                                if (((u = a.value), 0 === (o = _r(u, o) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(u, o) : 1073741823)))) {
                                    if (a.children === i.children && !di.current) {
                                        t = ql(e, t, n);
                                        break e;
                                    }
                                } else
                                    for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                                        var s = u.dependencies;
                                        if (null !== s) {
                                            a = u.child;
                                            for (var c = s.firstContext; null !== c; ) {
                                                if (c.context === r && 0 !== (c.observedBits & o)) {
                                                    1 === u.tag && (((c = ao(n, null)).tag = 2), uo(u, c)), u.expirationTime < n && (u.expirationTime = n), null !== (c = u.alternate) && c.expirationTime < n && (c.expirationTime = n), to(u.return, n), s.expirationTime < n && (s.expirationTime = n);
                                                    break;
                                                }
                                                c = c.next;
                                            }
                                        } else a = 10 === u.tag && u.type === t.type ? null : u.child;
                                        if (null !== a) a.return = u;
                                        else
                                            for (a = u; null !== a; ) {
                                                if (a === t) {
                                                    a = null;
                                                    break;
                                                }
                                                if (null !== (u = a.sibling)) {
                                                    (u.return = a.return), (a = u);
                                                    break;
                                                }
                                                a = a.return;
                                            }
                                        u = a;
                                    }
                            Pl(e, t, i.children, n), (t = t.child);
                        }
                        return t;
                    case 9:
                        return (i = t.type), (r = (o = t.pendingProps).children), no(t, n), (r = r((i = ro(i, o.unstable_observedBits)))), (t.effectTag |= 1), Pl(e, t, r, n), t.child;
                    case 14:
                        return (o = qi((i = t.type), t.pendingProps)), Al(e, t, i, (o = qi(i.type, o)), r, n);
                    case 15:
                        return zl(e, t, t.type, t.pendingProps, r, n);
                    case 17:
                        return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : qi(r, i)), null !== e && ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)), (t.tag = 1), mi(r) ? ((e = !0), bi(t)) : (e = !1), no(t, n), yo(t, r, i), wo(t, r, i, n), Rl(null, t, r, !0, e, n);
                    case 19:
                        return Gl(e, t, n);
                }
                throw Error(l(156, t.tag));
            };
            var xu = null,
                ku = null;
            function Cu(e, t, n, r) {
                (this.tag = e), (this.key = n), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = r), (this.effectTag = 0), (this.lastEffect = this.firstEffect = this.nextEffect = null), (this.childExpirationTime = this.expirationTime = 0), (this.alternate = null);
            }
            function Su(e, t, n, r) {
                return new Cu(e, t, n, r);
            }
            function Tu(e) {
                return !(!(e = e.prototype) || !e.isReactComponent);
            }
            function Eu(e, t) {
                var n = e.alternate;
                return (
                    null === n ? (((n = Su(e.tag, t, e.key, e.mode)).elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n)) : ((n.pendingProps = t), (n.effectTag = 0), (n.nextEffect = null), (n.firstEffect = null), (n.lastEffect = null)),
                    (n.childExpirationTime = e.childExpirationTime),
                    (n.expirationTime = e.expirationTime),
                    (n.child = e.child),
                    (n.memoizedProps = e.memoizedProps),
                    (n.memoizedState = e.memoizedState),
                    (n.updateQueue = e.updateQueue),
                    (t = e.dependencies),
                    (n.dependencies = null === t ? null : { expirationTime: t.expirationTime, firstContext: t.firstContext, responders: t.responders }),
                    (n.sibling = e.sibling),
                    (n.index = e.index),
                    (n.ref = e.ref),
                    n
                );
            }
            function Lu(e, t, n, r, i, o) {
                var a = 2;
                if (((r = e), "function" === typeof e)) Tu(e) && (a = 1);
                else if ("string" === typeof e) a = 5;
                else
                    e: switch (e) {
                        case ne:
                            return Mu(n.children, i, o, t);
                        case ae:
                            (a = 8), (i |= 7);
                            break;
                        case re:
                            (a = 8), (i |= 1);
                            break;
                        case ie:
                            return ((e = Su(12, n, t, 8 | i)).elementType = ie), (e.type = ie), (e.expirationTime = o), e;
                        case se:
                            return ((e = Su(13, n, t, i)).type = se), (e.elementType = se), (e.expirationTime = o), e;
                        case ce:
                            return ((e = Su(19, n, t, i)).elementType = ce), (e.expirationTime = o), e;
                        default:
                            if ("object" === typeof e && null !== e)
                                switch (e.$$typeof) {
                                    case oe:
                                        a = 10;
                                        break e;
                                    case le:
                                        a = 9;
                                        break e;
                                    case ue:
                                        a = 11;
                                        break e;
                                    case fe:
                                        a = 14;
                                        break e;
                                    case de:
                                        (a = 16), (r = null);
                                        break e;
                                    case pe:
                                        a = 22;
                                        break e;
                                }
                            throw Error(l(130, null == e ? e : typeof e, ""));
                    }
                return ((t = Su(a, n, t, i)).elementType = e), (t.type = r), (t.expirationTime = o), t;
            }
            function Mu(e, t, n, r) {
                return ((e = Su(7, e, r, t)).expirationTime = n), e;
            }
            function Nu(e, t, n) {
                return ((e = Su(6, e, null, t)).expirationTime = n), e;
            }
            function Ou(e, t, n) {
                return ((t = Su(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
            }
            function Pu(e, t, n) {
                (this.tag = t), (this.current = null), (this.containerInfo = e), (this.pingCache = this.pendingChildren = null), (this.finishedExpirationTime = 0), (this.finishedWork = null), (this.timeoutHandle = -1), (this.pendingContext = this.context = null), (this.hydrate = n), (this.callbackNode = null), (this.callbackPriority = 90), (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
            }
            function Du(e, t) {
                var n = e.firstSuspendedTime;
                return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
            }
            function Au(e, t) {
                var n = e.firstSuspendedTime,
                    r = e.lastSuspendedTime;
                n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
            }
            function zu(e, t) {
                t > e.firstPendingTime && (e.firstPendingTime = t);
                var n = e.firstSuspendedTime;
                0 !== n && (t >= n ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0) : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
            }
            function Fu(e, t) {
                var n = e.lastExpiredTime;
                (0 === n || n > t) && (e.lastExpiredTime = t);
            }
            function Iu(e, t, n, r) {
                var i = t.current,
                    o = $a(),
                    a = po.suspense;
                o = Ga(o, i, a);
                e: if (n) {
                    t: {
                        if (Je((n = n._reactInternalFiber)) !== n || 1 !== n.tag) throw Error(l(170));
                        var u = n;
                        do {
                            switch (u.tag) {
                                case 3:
                                    u = u.stateNode.context;
                                    break t;
                                case 1:
                                    if (mi(u.type)) {
                                        u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break t;
                                    }
                            }
                            u = u.return;
                        } while (null !== u);
                        throw Error(l(171));
                    }
                    if (1 === n.tag) {
                        var s = n.type;
                        if (mi(s)) {
                            n = yi(n, s, u);
                            break e;
                        }
                    }
                    n = u;
                } else n = ci;
                return null === t.context ? (t.context = n) : (t.pendingContext = n), ((t = ao(o, a)).payload = { element: e }), null !== (r = void 0 === r ? null : r) && (t.callback = r), uo(i, t), qa(i, o), o;
            }
            function _u(e) {
                if (!(e = e.current).child) return null;
                switch (e.child.tag) {
                    case 5:
                    default:
                        return e.child.stateNode;
                }
            }
            function Ru(e, t) {
                null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t);
            }
            function Wu(e, t) {
                Ru(e, t), (e = e.alternate) && Ru(e, t);
            }
            function Hu(e, t, n) {
                var r = new Pu(e, t, (n = null != n && !0 === n.hydrate)),
                    i = Su(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
                (r.current = i),
                    (i.stateNode = r),
                    oo(i),
                    (e[En] = r.current),
                    n &&
                        0 !== t &&
                        (function (e, t) {
                            var n = Ze(t);
                            Et.forEach(function (e) {
                                ht(e, t, n);
                            }),
                                Lt.forEach(function (e) {
                                    ht(e, t, n);
                                });
                        })(0, 9 === e.nodeType ? e : e.ownerDocument),
                    (this._internalRoot = r);
            }
            function Bu(e) {
                return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)));
            }
            function Uu(e, t, n, r, i) {
                var o = n._reactRootContainer;
                if (o) {
                    var l = o._internalRoot;
                    if ("function" === typeof i) {
                        var a = i;
                        i = function () {
                            var e = _u(l);
                            a.call(e);
                        };
                    }
                    Iu(t, l, e, i);
                } else {
                    if (
                        ((o = n._reactRootContainer = (function (e, t) {
                            if ((t || (t = !(!(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)) for (var n; (n = e.lastChild); ) e.removeChild(n);
                            return new Hu(e, 0, t ? { hydrate: !0 } : void 0);
                        })(n, r)),
                        (l = o._internalRoot),
                        "function" === typeof i)
                    ) {
                        var u = i;
                        i = function () {
                            var e = _u(l);
                            u.call(e);
                        };
                    }
                    tu(function () {
                        Iu(t, l, e, i);
                    });
                }
                return _u(l);
            }
            function ju(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return { $$typeof: te, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
            }
            function Vu(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!Bu(t)) throw Error(l(200));
                return ju(e, t, null, n);
            }
            (Hu.prototype.render = function (e) {
                Iu(e, this._internalRoot, null, null);
            }),
                (Hu.prototype.unmount = function () {
                    var e = this._internalRoot,
                        t = e.containerInfo;
                    Iu(null, e, null, function () {
                        t[En] = null;
                    });
                }),
                (mt = function (e) {
                    if (13 === e.tag) {
                        var t = Gi($a(), 150, 100);
                        qa(e, t), Wu(e, t);
                    }
                }),
                (gt = function (e) {
                    13 === e.tag && (qa(e, 3), Wu(e, 3));
                }),
                (vt = function (e) {
                    if (13 === e.tag) {
                        var t = $a();
                        qa(e, (t = Ga(t, e, null))), Wu(e, t);
                    }
                }),
                (M = function (e, t, n) {
                    switch (t) {
                        case "input":
                            if ((Te(e, n), (t = n.name), "radio" === n.type && null != t)) {
                                for (n = e; n.parentNode; ) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var i = On(r);
                                        if (!i) throw Error(l(90));
                                        xe(r), Te(r, i);
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            De(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && Ne(e, !!n.multiple, t, !1);
                    }
                }),
                (z = eu),
                (F = function (e, t, n, r, i) {
                    var o = Ca;
                    Ca |= 4;
                    try {
                        return Ui(98, e.bind(null, t, n, r, i));
                    } finally {
                        0 === (Ca = o) && Ki();
                    }
                }),
                (I = function () {
                    0 === (49 & Ca) &&
                        ((function () {
                            if (null !== Ua) {
                                var e = Ua;
                                (Ua = null),
                                    e.forEach(function (e, t) {
                                        Fu(t, e), Ya(t);
                                    }),
                                    Ki();
                            }
                        })(),
                        mu());
                }),
                (_ = function (e, t) {
                    var n = Ca;
                    Ca |= 2;
                    try {
                        return e(t);
                    } finally {
                        0 === (Ca = n) && Ki();
                    }
                });
            var Ku = {
                Events: [
                    Mn,
                    Nn,
                    On,
                    E,
                    C,
                    _n,
                    function (e) {
                        it(e, In);
                    },
                    D,
                    A,
                    Yt,
                    at,
                    mu,
                    { current: !1 },
                ],
            };
            !(function (e) {
                var t = e.findFiberByHostInstance;
                (function (e) {
                    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (t.isDisabled || !t.supportsFiber) return !0;
                    try {
                        var n = t.inject(e);
                        (xu = function (e) {
                            try {
                                t.onCommitFiberRoot(n, e, void 0, 64 === (64 & e.current.effectTag));
                            } catch (r) {}
                        }),
                            (ku = function (e) {
                                try {
                                    t.onCommitFiberUnmount(n, e);
                                } catch (r) {}
                            });
                    } catch (r) {}
                })(
                    i({}, e, {
                        overrideHookState: null,
                        overrideProps: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: X.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function (e) {
                            return null === (e = nt(e)) ? null : e.stateNode;
                        },
                        findFiberByHostInstance: function (e) {
                            return t ? t(e) : null;
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                    })
                );
            })({ findFiberByHostInstance: Ln, bundleType: 0, version: "16.13.1", rendererPackageName: "react-dom" }),
                (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ku),
                (t.createPortal = Vu),
                (t.findDOMNode = function (e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternalFiber;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(l(188));
                        throw Error(l(268, Object.keys(e)));
                    }
                    return (e = null === (e = nt(t)) ? null : e.stateNode);
                }),
                (t.flushSync = function (e, t) {
                    if (0 !== (48 & Ca)) throw Error(l(187));
                    var n = Ca;
                    Ca |= 1;
                    try {
                        return Ui(99, e.bind(null, t));
                    } finally {
                        (Ca = n), Ki();
                    }
                }),
                (t.hydrate = function (e, t, n) {
                    if (!Bu(t)) throw Error(l(200));
                    return Uu(null, e, t, !0, n);
                }),
                (t.render = function (e, t, n) {
                    if (!Bu(t)) throw Error(l(200));
                    return Uu(null, e, t, !1, n);
                }),
                (t.unmountComponentAtNode = function (e) {
                    if (!Bu(e)) throw Error(l(40));
                    return (
                        !!e._reactRootContainer &&
                        (tu(function () {
                            Uu(null, null, e, !1, function () {
                                (e._reactRootContainer = null), (e[En] = null);
                            });
                        }),
                        !0)
                    );
                }),
                (t.unstable_batchedUpdates = eu),
                (t.unstable_createPortal = function (e, t) {
                    return Vu(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
                }),
                (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
                    if (!Bu(n)) throw Error(l(200));
                    if (null == e || void 0 === e._reactInternalFiber) throw Error(l(38));
                    return Uu(e, t, n, !1, r);
                }),
                (t.version = "16.13.1");
        },
        function (e, t, n) {
            "use strict";
            e.exports = n(10);
        },
        function (e, t, n) {
            "use strict";
            var r, i, o, l, a;
            if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                var u = null,
                    s = null,
                    c = function e() {
                        if (null !== u)
                            try {
                                var n = t.unstable_now();
                                u(!0, n), (u = null);
                            } catch (r) {
                                throw (setTimeout(e, 0), r);
                            }
                    },
                    f = Date.now();
                (t.unstable_now = function () {
                    return Date.now() - f;
                }),
                    (r = function (e) {
                        null !== u ? setTimeout(r, 0, e) : ((u = e), setTimeout(c, 0));
                    }),
                    (i = function (e, t) {
                        s = setTimeout(e, t);
                    }),
                    (o = function () {
                        clearTimeout(s);
                    }),
                    (l = function () {
                        return !1;
                    }),
                    (a = t.unstable_forceFrameRate = function () {});
            } else {
                var d = window.performance,
                    p = window.Date,
                    h = window.setTimeout,
                    m = window.clearTimeout;
                if ("undefined" !== typeof console) {
                    var g = window.cancelAnimationFrame;
                    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
                }
                if ("object" === typeof d && "function" === typeof d.now)
                    t.unstable_now = function () {
                        return d.now();
                    };
                else {
                    var v = p.now();
                    t.unstable_now = function () {
                        return p.now() - v;
                    };
                }
                var y = !1,
                    b = null,
                    w = -1,
                    x = 5,
                    k = 0;
                (l = function () {
                    return t.unstable_now() >= k;
                }),
                    (a = function () {}),
                    (t.unstable_forceFrameRate = function (e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : (x = 0 < e ? Math.floor(1e3 / e) : 5);
                    });
                var C = new MessageChannel(),
                    S = C.port2;
                (C.port1.onmessage = function () {
                    if (null !== b) {
                        var e = t.unstable_now();
                        k = e + x;
                        try {
                            b(!0, e) ? S.postMessage(null) : ((y = !1), (b = null));
                        } catch (n) {
                            throw (S.postMessage(null), n);
                        }
                    } else y = !1;
                }),
                    (r = function (e) {
                        (b = e), y || ((y = !0), S.postMessage(null));
                    }),
                    (i = function (e, n) {
                        w = h(function () {
                            e(t.unstable_now());
                        }, n);
                    }),
                    (o = function () {
                        m(w), (w = -1);
                    });
            }
            function T(e, t) {
                var n = e.length;
                e.push(t);
                e: for (;;) {
                    var r = (n - 1) >>> 1,
                        i = e[r];
                    if (!(void 0 !== i && 0 < M(i, t))) break e;
                    (e[r] = t), (e[n] = i), (n = r);
                }
            }
            function E(e) {
                return void 0 === (e = e[0]) ? null : e;
            }
            function L(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, i = e.length; r < i; ) {
                            var o = 2 * (r + 1) - 1,
                                l = e[o],
                                a = o + 1,
                                u = e[a];
                            if (void 0 !== l && 0 > M(l, n)) void 0 !== u && 0 > M(u, l) ? ((e[r] = u), (e[a] = n), (r = a)) : ((e[r] = l), (e[o] = n), (r = o));
                            else {
                                if (!(void 0 !== u && 0 > M(u, n))) break e;
                                (e[r] = u), (e[a] = n), (r = a);
                            }
                        }
                    }
                    return t;
                }
                return null;
            }
            function M(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id;
            }
            var N = [],
                O = [],
                P = 1,
                D = null,
                A = 3,
                z = !1,
                F = !1,
                I = !1;
            function _(e) {
                for (var t = E(O); null !== t; ) {
                    if (null === t.callback) L(O);
                    else {
                        if (!(t.startTime <= e)) break;
                        L(O), (t.sortIndex = t.expirationTime), T(N, t);
                    }
                    t = E(O);
                }
            }
            function R(e) {
                if (((I = !1), _(e), !F))
                    if (null !== E(N)) (F = !0), r(W);
                    else {
                        var t = E(O);
                        null !== t && i(R, t.startTime - e);
                    }
            }
            function W(e, n) {
                (F = !1), I && ((I = !1), o()), (z = !0);
                var r = A;
                try {
                    for (_(n), D = E(N); null !== D && (!(D.expirationTime > n) || (e && !l())); ) {
                        var a = D.callback;
                        if (null !== a) {
                            (D.callback = null), (A = D.priorityLevel);
                            var u = a(D.expirationTime <= n);
                            (n = t.unstable_now()), "function" === typeof u ? (D.callback = u) : D === E(N) && L(N), _(n);
                        } else L(N);
                        D = E(N);
                    }
                    if (null !== D) var s = !0;
                    else {
                        var c = E(O);
                        null !== c && i(R, c.startTime - n), (s = !1);
                    }
                    return s;
                } finally {
                    (D = null), (A = r), (z = !1);
                }
            }
            function H(e) {
                switch (e) {
                    case 1:
                        return -1;
                    case 2:
                        return 250;
                    case 5:
                        return 1073741823;
                    case 4:
                        return 1e4;
                    default:
                        return 5e3;
                }
            }
            var B = a;
            (t.unstable_IdlePriority = 5),
                (t.unstable_ImmediatePriority = 1),
                (t.unstable_LowPriority = 4),
                (t.unstable_NormalPriority = 3),
                (t.unstable_Profiling = null),
                (t.unstable_UserBlockingPriority = 2),
                (t.unstable_cancelCallback = function (e) {
                    e.callback = null;
                }),
                (t.unstable_continueExecution = function () {
                    F || z || ((F = !0), r(W));
                }),
                (t.unstable_getCurrentPriorityLevel = function () {
                    return A;
                }),
                (t.unstable_getFirstCallbackNode = function () {
                    return E(N);
                }),
                (t.unstable_next = function (e) {
                    switch (A) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = A;
                    }
                    var n = A;
                    A = t;
                    try {
                        return e();
                    } finally {
                        A = n;
                    }
                }),
                (t.unstable_pauseExecution = function () {}),
                (t.unstable_requestPaint = B),
                (t.unstable_runWithPriority = function (e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3;
                    }
                    var n = A;
                    A = e;
                    try {
                        return t();
                    } finally {
                        A = n;
                    }
                }),
                (t.unstable_scheduleCallback = function (e, n, l) {
                    var a = t.unstable_now();
                    if ("object" === typeof l && null !== l) {
                        var u = l.delay;
                        (u = "number" === typeof u && 0 < u ? a + u : a), (l = "number" === typeof l.timeout ? l.timeout : H(e));
                    } else (l = H(e)), (u = a);
                    return (e = { id: P++, callback: n, priorityLevel: e, startTime: u, expirationTime: (l = u + l), sortIndex: -1 }), u > a ? ((e.sortIndex = u), T(O, e), null === E(N) && e === E(O) && (I ? o() : (I = !0), i(R, u - a))) : ((e.sortIndex = l), T(N, e), F || z || ((F = !0), r(W))), e;
                }),
                (t.unstable_shouldYield = function () {
                    var e = t.unstable_now();
                    _(e);
                    var n = E(N);
                    return (n !== D && null !== D && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < D.expirationTime) || l();
                }),
                (t.unstable_wrapCallback = function (e) {
                    var t = A;
                    return function () {
                        var n = A;
                        A = t;
                        try {
                            return e.apply(this, arguments);
                        } finally {
                            A = n;
                        }
                    };
                });
        },
        ,
        function (e, t, n) {},
        function (e, t, n) {},
        function (e, t, n) {
            !(function (e) {
                "use strict";
                var t = {
                        autoSelfClosers: { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, frame: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0, menuitem: !0 },
                        implicitlyClosed: { dd: !0, li: !0, optgroup: !0, option: !0, p: !0, rp: !0, rt: !0, tbody: !0, td: !0, tfoot: !0, th: !0, tr: !0 },
                        contextGrabbers: {
                            dd: { dd: !0, dt: !0 },
                            dt: { dd: !0, dt: !0 },
                            li: { li: !0 },
                            option: { option: !0, optgroup: !0 },
                            optgroup: { optgroup: !0 },
                            p: { address: !0, article: !0, aside: !0, blockquote: !0, dir: !0, div: !0, dl: !0, fieldset: !0, footer: !0, form: !0, h1: !0, h2: !0, h3: !0, h4: !0, h5: !0, h6: !0, header: !0, hgroup: !0, hr: !0, menu: !0, nav: !0, ol: !0, p: !0, pre: !0, section: !0, table: !0, ul: !0 },
                            rp: { rp: !0, rt: !0 },
                            rt: { rp: !0, rt: !0 },
                            tbody: { tbody: !0, tfoot: !0 },
                            td: { td: !0, th: !0 },
                            tfoot: { tbody: !0 },
                            th: { td: !0, th: !0 },
                            thead: { tbody: !0, tfoot: !0 },
                            tr: { tr: !0 },
                        },
                        doNotIndent: { pre: !0 },
                        allowUnquoted: !0,
                        allowMissing: !0,
                        caseFold: !0,
                    },
                    n = { autoSelfClosers: {}, implicitlyClosed: {}, contextGrabbers: {}, doNotIndent: {}, allowUnquoted: !1, allowMissing: !1, allowMissingTagName: !1, caseFold: !1 };
                e.defineMode("xml", function (r, i) {
                    var o,
                        l,
                        a = r.indentUnit,
                        u = {},
                        s = i.htmlMode ? t : n;
                    for (var c in s) u[c] = s[c];
                    for (var c in i) u[c] = i[c];
                    function f(e, t) {
                        function n(n) {
                            return (t.tokenize = n), n(e, t);
                        }
                        var r = e.next();
                        return "<" == r
                            ? e.eat("!")
                                ? e.eat("[")
                                    ? e.match("CDATA[")
                                        ? n(p("atom", "]]>"))
                                        : null
                                    : e.match("--")
                                    ? n(p("comment", "--\x3e"))
                                    : e.match("DOCTYPE", !0, !0)
                                    ? (e.eatWhile(/[\w\._\-]/),
                                      n(
                                          (function e(t) {
                                              return function (n, r) {
                                                  for (var i; null != (i = n.next()); ) {
                                                      if ("<" == i) return (r.tokenize = e(t + 1)), r.tokenize(n, r);
                                                      if (">" == i) {
                                                          if (1 == t) {
                                                              r.tokenize = f;
                                                              break;
                                                          }
                                                          return (r.tokenize = e(t - 1)), r.tokenize(n, r);
                                                      }
                                                  }
                                                  return "meta";
                                              };
                                          })(1)
                                      ))
                                    : null
                                : e.eat("?")
                                ? (e.eatWhile(/[\w\._\-]/), (t.tokenize = p("meta", "?>")), "meta")
                                : ((o = e.eat("/") ? "closeTag" : "openTag"), (t.tokenize = d), "tag bracket")
                            : "&" == r
                            ? (e.eat("#") ? (e.eat("x") ? e.eatWhile(/[a-fA-F\d]/) && e.eat(";") : e.eatWhile(/[\d]/) && e.eat(";")) : e.eatWhile(/[\w\.\-:]/) && e.eat(";"))
                                ? "atom"
                                : "error"
                            : (e.eatWhile(/[^&<]/), null);
                    }
                    function d(e, t) {
                        var n = e.next();
                        if (">" == n || ("/" == n && e.eat(">"))) return (t.tokenize = f), (o = ">" == n ? "endTag" : "selfcloseTag"), "tag bracket";
                        if ("=" == n) return (o = "equals"), null;
                        if ("<" == n) {
                            (t.tokenize = f), (t.state = v), (t.tagName = t.tagStart = null);
                            var r = t.tokenize(e, t);
                            return r ? r + " tag error" : "tag error";
                        }
                        return /[\'\"]/.test(n)
                            ? ((t.tokenize = (function (e) {
                                  var t = function (t, n) {
                                      for (; !t.eol(); )
                                          if (t.next() == e) {
                                              n.tokenize = d;
                                              break;
                                          }
                                      return "string";
                                  };
                                  return (t.isInAttribute = !0), t;
                              })(n)),
                              (t.stringStartCol = e.column()),
                              t.tokenize(e, t))
                            : (e.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
                    }
                    function p(e, t) {
                        return function (n, r) {
                            for (; !n.eol(); ) {
                                if (n.match(t)) {
                                    r.tokenize = f;
                                    break;
                                }
                                n.next();
                            }
                            return e;
                        };
                    }
                    function h(e, t, n) {
                        (this.prev = e.context), (this.tagName = t), (this.indent = e.indented), (this.startOfLine = n), (u.doNotIndent.hasOwnProperty(t) || (e.context && e.context.noIndent)) && (this.noIndent = !0);
                    }
                    function m(e) {
                        e.context && (e.context = e.context.prev);
                    }
                    function g(e, t) {
                        for (var n; ; ) {
                            if (!e.context) return;
                            if (((n = e.context.tagName), !u.contextGrabbers.hasOwnProperty(n) || !u.contextGrabbers[n].hasOwnProperty(t))) return;
                            m(e);
                        }
                    }
                    function v(e, t, n) {
                        return "openTag" == e ? ((n.tagStart = t.column()), y) : "closeTag" == e ? b : v;
                    }
                    function y(e, t, n) {
                        return "word" == e ? ((n.tagName = t.current()), (l = "tag"), k) : u.allowMissingTagName && "endTag" == e ? ((l = "tag bracket"), k(e, 0, n)) : ((l = "error"), y);
                    }
                    function b(e, t, n) {
                        if ("word" == e) {
                            var r = t.current();
                            return n.context && n.context.tagName != r && u.implicitlyClosed.hasOwnProperty(n.context.tagName) && m(n), (n.context && n.context.tagName == r) || !1 === u.matchClosing ? ((l = "tag"), w) : ((l = "tag error"), x);
                        }
                        return u.allowMissingTagName && "endTag" == e ? ((l = "tag bracket"), w(e, 0, n)) : ((l = "error"), x);
                    }
                    function w(e, t, n) {
                        return "endTag" != e ? ((l = "error"), w) : (m(n), v);
                    }
                    function x(e, t, n) {
                        return (l = "error"), w(e, 0, n);
                    }
                    function k(e, t, n) {
                        if ("word" == e) return (l = "attribute"), C;
                        if ("endTag" == e || "selfcloseTag" == e) {
                            var r = n.tagName,
                                i = n.tagStart;
                            return (n.tagName = n.tagStart = null), "selfcloseTag" == e || u.autoSelfClosers.hasOwnProperty(r) ? g(n, r) : (g(n, r), (n.context = new h(n, r, i == n.indented))), v;
                        }
                        return (l = "error"), k;
                    }
                    function C(e, t, n) {
                        return "equals" == e ? S : (u.allowMissing || (l = "error"), k(e, 0, n));
                    }
                    function S(e, t, n) {
                        return "string" == e ? T : "word" == e && u.allowUnquoted ? ((l = "string"), k) : ((l = "error"), k(e, 0, n));
                    }
                    function T(e, t, n) {
                        return "string" == e ? T : k(e, 0, n);
                    }
                    return (
                        (f.isInText = !0),
                        {
                            startState: function (e) {
                                var t = { tokenize: f, state: v, indented: e || 0, tagName: null, tagStart: null, context: null };
                                return null != e && (t.baseIndent = e), t;
                            },
                            token: function (e, t) {
                                if ((!t.tagName && e.sol() && (t.indented = e.indentation()), e.eatSpace())) return null;
                                o = null;
                                var n = t.tokenize(e, t);
                                return (n || o) && "comment" != n && ((l = null), (t.state = t.state(o || n, e, t)), l && (n = "error" == l ? n + " error" : l)), n;
                            },
                            indent: function (t, n, r) {
                                var i = t.context;
                                if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + a;
                                if (i && i.noIndent) return e.Pass;
                                if (t.tokenize != d && t.tokenize != f) return r ? r.match(/^(\s*)/)[0].length : 0;
                                if (t.tagName) return !1 !== u.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + a * (u.multilineTagIndentFactor || 1);
                                if (u.alignCDATA && /<!\[CDATA\[/.test(n)) return 0;
                                var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                                if (o && o[1])
                                    for (; i; ) {
                                        if (i.tagName == o[2]) {
                                            i = i.prev;
                                            break;
                                        }
                                        if (!u.implicitlyClosed.hasOwnProperty(i.tagName)) break;
                                        i = i.prev;
                                    }
                                else if (o)
                                    for (; i; ) {
                                        var l = u.contextGrabbers[i.tagName];
                                        if (!l || !l.hasOwnProperty(o[2])) break;
                                        i = i.prev;
                                    }
                                for (; i && i.prev && !i.startOfLine; ) i = i.prev;
                                return i ? i.indent + a : t.baseIndent || 0;
                            },
                            electricInput: /<\/[\s\w:]+>$/,
                            blockCommentStart: "\x3c!--",
                            blockCommentEnd: "--\x3e",
                            configuration: u.htmlMode ? "html" : "xml",
                            helperType: u.htmlMode ? "html" : "xml",
                            skipAttribute: function (e) {
                                e.state == S && (e.state = k);
                            },
                            xmlCurrentTag: function (e) {
                                return e.tagName ? { name: e.tagName, close: "closeTag" == e.type } : null;
                            },
                            xmlCurrentContext: function (e) {
                                for (var t = [], n = e.context; n; n = n.prev) n.tagName && t.push(n.tagName);
                                return t.reverse();
                            },
                        }
                    );
                }),
                    e.defineMIME("text/xml", "xml"),
                    e.defineMIME("application/xml", "xml"),
                    e.mimeModes.hasOwnProperty("text/html") || e.defineMIME("text/html", { name: "xml", htmlMode: !0 });
            })(n(2));
        },
        function (e, t, n) {
            !(function (e) {
                "use strict";
                e.defineMode("javascript", function (t, n) {
                    var r,
                        i,
                        o = t.indentUnit,
                        l = n.statementIndent,
                        a = n.jsonld,
                        u = n.json || a,
                        s = n.typescript,
                        c = n.wordCharacters || /[\w$\xa1-\uffff]/,
                        f = (function () {
                            function e(e) {
                                return { type: e, style: "keyword" };
                            }
                            var t = e("keyword a"),
                                n = e("keyword b"),
                                r = e("keyword c"),
                                i = e("keyword d"),
                                o = e("operator"),
                                l = { type: "atom", style: "atom" };
                            return {
                                if: e("if"),
                                while: t,
                                with: t,
                                else: n,
                                do: n,
                                try: n,
                                finally: n,
                                return: i,
                                break: i,
                                continue: i,
                                new: e("new"),
                                delete: r,
                                void: r,
                                throw: r,
                                debugger: e("debugger"),
                                var: e("var"),
                                const: e("var"),
                                let: e("var"),
                                function: e("function"),
                                catch: e("catch"),
                                for: e("for"),
                                switch: e("switch"),
                                case: e("case"),
                                default: e("default"),
                                in: o,
                                typeof: o,
                                instanceof: o,
                                true: l,
                                false: l,
                                null: l,
                                undefined: l,
                                NaN: l,
                                Infinity: l,
                                this: e("this"),
                                class: e("class"),
                                super: e("atom"),
                                yield: r,
                                export: e("export"),
                                import: e("import"),
                                extends: r,
                                await: r,
                            };
                        })(),
                        d = /[+\-*&%=<>!?|~^@]/,
                        p = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
                    function h(e, t, n) {
                        return (r = e), (i = n), t;
                    }
                    function m(e, t) {
                        var n,
                            r = e.next();
                        if ('"' == r || "'" == r)
                            return (
                                (t.tokenize =
                                    ((n = r),
                                    function (e, t) {
                                        var r,
                                            i = !1;
                                        if (a && "@" == e.peek() && e.match(p)) return (t.tokenize = m), h("jsonld-keyword", "meta");
                                        for (; null != (r = e.next()) && (r != n || i); ) i = !i && "\\" == r;
                                        return i || (t.tokenize = m), h("string", "string");
                                    })),
                                t.tokenize(e, t)
                            );
                        if ("." == r && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return h("number", "number");
                        if ("." == r && e.match("..")) return h("spread", "meta");
                        if (/[\[\]{}\(\),;\:\.]/.test(r)) return h(r);
                        if ("=" == r && e.eat(">")) return h("=>", "operator");
                        if ("0" == r && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return h("number", "number");
                        if (/\d/.test(r)) return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), h("number", "number");
                        if ("/" == r)
                            return e.eat("*")
                                ? ((t.tokenize = g), g(e, t))
                                : e.eat("/")
                                ? (e.skipToEnd(), h("comment", "comment"))
                                : Ge(e, t, 1)
                                ? ((function (e) {
                                      for (var t, n = !1, r = !1; null != (t = e.next()); ) {
                                          if (!n) {
                                              if ("/" == t && !r) return;
                                              "[" == t ? (r = !0) : r && "]" == t && (r = !1);
                                          }
                                          n = !n && "\\" == t;
                                      }
                                  })(e),
                                  e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                                  h("regexp", "string-2"))
                                : (e.eat("="), h("operator", "operator", e.current()));
                        if ("`" == r) return (t.tokenize = v), v(e, t);
                        if ("#" == r && "!" == e.peek()) return e.skipToEnd(), h("meta", "meta");
                        if ("#" == r && e.eatWhile(c)) return h("variable", "property");
                        if (("<" == r && e.match("!--")) || ("-" == r && e.match("->") && !/\S/.test(e.string.slice(0, e.start)))) return e.skipToEnd(), h("comment", "comment");
                        if (d.test(r)) return (">" == r && t.lexical && ">" == t.lexical.type) || (e.eat("=") ? ("!" != r && "=" != r) || e.eat("=") : /[<>*+\-]/.test(r) && (e.eat(r), ">" == r && e.eat(r))), "?" == r && e.eat(".") ? h(".") : h("operator", "operator", e.current());
                        if (c.test(r)) {
                            e.eatWhile(c);
                            var i = e.current();
                            if ("." != t.lastType) {
                                if (f.propertyIsEnumerable(i)) {
                                    var o = f[i];
                                    return h(o.type, o.style, i);
                                }
                                if ("async" == i && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return h("async", "keyword", i);
                            }
                            return h("variable", "variable", i);
                        }
                    }
                    function g(e, t) {
                        for (var n, r = !1; (n = e.next()); ) {
                            if ("/" == n && r) {
                                t.tokenize = m;
                                break;
                            }
                            r = "*" == n;
                        }
                        return h("comment", "comment");
                    }
                    function v(e, t) {
                        for (var n, r = !1; null != (n = e.next()); ) {
                            if (!r && ("`" == n || ("$" == n && e.eat("{")))) {
                                t.tokenize = m;
                                break;
                            }
                            r = !r && "\\" == n;
                        }
                        return h("quasi", "string-2", e.current());
                    }
                    function y(e, t) {
                        t.fatArrowAt && (t.fatArrowAt = null);
                        var n = e.string.indexOf("=>", e.start);
                        if (!(n < 0)) {
                            if (s) {
                                var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n));
                                r && (n = r.index);
                            }
                            for (var i = 0, o = !1, l = n - 1; l >= 0; --l) {
                                var a = e.string.charAt(l),
                                    u = "([{}])".indexOf(a);
                                if (u >= 0 && u < 3) {
                                    if (!i) {
                                        ++l;
                                        break;
                                    }
                                    if (0 == --i) {
                                        "(" == a && (o = !0);
                                        break;
                                    }
                                } else if (u >= 3 && u < 6) ++i;
                                else if (c.test(a)) o = !0;
                                else if (/["'\/`]/.test(a))
                                    for (; ; --l) {
                                        if (0 == l) return;
                                        if (e.string.charAt(l - 1) == a && "\\" != e.string.charAt(l - 2)) {
                                            l--;
                                            break;
                                        }
                                    }
                                else if (o && !i) {
                                    ++l;
                                    break;
                                }
                            }
                            o && !i && (t.fatArrowAt = l);
                        }
                    }
                    var b = { atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, "jsonld-keyword": !0 };
                    function w(e, t, n, r, i, o) {
                        (this.indented = e), (this.column = t), (this.type = n), (this.prev = i), (this.info = o), null != r && (this.align = r);
                    }
                    function x(e, t) {
                        for (var n = e.localVars; n; n = n.next) if (n.name == t) return !0;
                        for (var r = e.context; r; r = r.prev) for (n = r.vars; n; n = n.next) if (n.name == t) return !0;
                    }
                    var k = { state: null, column: null, marked: null, cc: null };
                    function C() {
                        for (var e = arguments.length - 1; e >= 0; e--) k.cc.push(arguments[e]);
                    }
                    function S() {
                        return C.apply(null, arguments), !0;
                    }
                    function T(e, t) {
                        for (var n = t; n; n = n.next) if (n.name == e) return !0;
                        return !1;
                    }
                    function E(e) {
                        var t = k.state;
                        if (((k.marked = "def"), t.context))
                            if ("var" == t.lexical.info && t.context && t.context.block) {
                                var r = (function e(t, n) {
                                    if (n) {
                                        if (n.block) {
                                            var r = e(t, n.prev);
                                            return r ? (r == n.prev ? n : new M(r, n.vars, !0)) : null;
                                        }
                                        return T(t, n.vars) ? n : new M(n.prev, new N(t, n.vars), !1);
                                    }
                                    return null;
                                })(e, t.context);
                                if (null != r) return void (t.context = r);
                            } else if (!T(e, t.localVars)) return void (t.localVars = new N(e, t.localVars));
                        n.globalVars && !T(e, t.globalVars) && (t.globalVars = new N(e, t.globalVars));
                    }
                    function L(e) {
                        return "public" == e || "private" == e || "protected" == e || "abstract" == e || "readonly" == e;
                    }
                    function M(e, t, n) {
                        (this.prev = e), (this.vars = t), (this.block = n);
                    }
                    function N(e, t) {
                        (this.name = e), (this.next = t);
                    }
                    var O = new N("this", new N("arguments", null));
                    function P() {
                        (k.state.context = new M(k.state.context, k.state.localVars, !1)), (k.state.localVars = O);
                    }
                    function D() {
                        (k.state.context = new M(k.state.context, k.state.localVars, !0)), (k.state.localVars = null);
                    }
                    function A() {
                        (k.state.localVars = k.state.context.vars), (k.state.context = k.state.context.prev);
                    }
                    function z(e, t) {
                        var n = function () {
                            var n = k.state,
                                r = n.indented;
                            if ("stat" == n.lexical.type) r = n.lexical.indented;
                            else for (var i = n.lexical; i && ")" == i.type && i.align; i = i.prev) r = i.indented;
                            n.lexical = new w(r, k.stream.column(), e, null, n.lexical, t);
                        };
                        return (n.lex = !0), n;
                    }
                    function F() {
                        var e = k.state;
                        e.lexical.prev && (")" == e.lexical.type && (e.indented = e.lexical.indented), (e.lexical = e.lexical.prev));
                    }
                    function I(e) {
                        return function t(n) {
                            return n == e ? S() : ";" == e || "}" == n || ")" == n || "]" == n ? C() : S(t);
                        };
                    }
                    function _(e, t) {
                        return "var" == e
                            ? S(z("vardef", t), ye, I(";"), F)
                            : "keyword a" == e
                            ? S(z("form"), B, _, F)
                            : "keyword b" == e
                            ? S(z("form"), _, F)
                            : "keyword d" == e
                            ? k.stream.match(/^\s*$/, !1)
                                ? S()
                                : S(z("stat"), j, I(";"), F)
                            : "debugger" == e
                            ? S(I(";"))
                            : "{" == e
                            ? S(z("}"), D, oe, F, A)
                            : ";" == e
                            ? S()
                            : "if" == e
                            ? ("else" == k.state.lexical.info && k.state.cc[k.state.cc.length - 1] == F && k.state.cc.pop()(), S(z("form"), B, _, F, Se))
                            : "function" == e
                            ? S(Me)
                            : "for" == e
                            ? S(z("form"), Te, _, F)
                            : "class" == e || (s && "interface" == t)
                            ? ((k.marked = "keyword"), S(z("form", "class" == e ? e : t), Ae, F))
                            : "variable" == e
                            ? s && "declare" == t
                                ? ((k.marked = "keyword"), S(_))
                                : s && ("module" == t || "enum" == t || "type" == t) && k.stream.match(/^\s*\w/, !1)
                                ? ((k.marked = "keyword"), "enum" == t ? S(Ke) : "type" == t ? S(Oe, I("operator"), ce, I(";")) : S(z("form"), be, I("{"), z("}"), oe, F, F))
                                : s && "namespace" == t
                                ? ((k.marked = "keyword"), S(z("form"), W, _, F))
                                : s && "abstract" == t
                                ? ((k.marked = "keyword"), S(_))
                                : S(z("stat"), Z)
                            : "switch" == e
                            ? S(z("form"), B, I("{"), z("}", "switch"), D, oe, F, F, A)
                            : "case" == e
                            ? S(W, I(":"))
                            : "default" == e
                            ? S(I(":"))
                            : "catch" == e
                            ? S(z("form"), P, R, _, F, A)
                            : "export" == e
                            ? S(z("stat"), _e, F)
                            : "import" == e
                            ? S(z("stat"), We, F)
                            : "async" == e
                            ? S(_)
                            : "@" == t
                            ? S(W, _)
                            : C(z("stat"), W, I(";"), F);
                    }
                    function R(e) {
                        if ("(" == e) return S(Pe, I(")"));
                    }
                    function W(e, t) {
                        return U(e, t, !1);
                    }
                    function H(e, t) {
                        return U(e, t, !0);
                    }
                    function B(e) {
                        return "(" != e ? C() : S(z(")"), j, I(")"), F);
                    }
                    function U(e, t, n) {
                        if (k.state.fatArrowAt == k.stream.start) {
                            var r = n ? Q : q;
                            if ("(" == e) return S(P, z(")"), re(Pe, ")"), F, I("=>"), r, A);
                            if ("variable" == e) return C(P, be, I("=>"), r, A);
                        }
                        var i = n ? K : V;
                        return b.hasOwnProperty(e)
                            ? S(i)
                            : "function" == e
                            ? S(Me, i)
                            : "class" == e || (s && "interface" == t)
                            ? ((k.marked = "keyword"), S(z("form"), De, F))
                            : "keyword c" == e || "async" == e
                            ? S(n ? H : W)
                            : "(" == e
                            ? S(z(")"), j, I(")"), F, i)
                            : "operator" == e || "spread" == e
                            ? S(n ? H : W)
                            : "[" == e
                            ? S(z("]"), Ve, F, i)
                            : "{" == e
                            ? ie(ee, "}", null, i)
                            : "quasi" == e
                            ? C($, i)
                            : "new" == e
                            ? S(
                                  (function (e) {
                                      return function (t) {
                                          return "." == t ? S(e ? Y : X) : "variable" == t && s ? S(me, e ? K : V) : C(e ? H : W);
                                      };
                                  })(n)
                              )
                            : "import" == e
                            ? S(W)
                            : S();
                    }
                    function j(e) {
                        return e.match(/[;\}\)\],]/) ? C() : C(W);
                    }
                    function V(e, t) {
                        return "," == e ? S(j) : K(e, t, !1);
                    }
                    function K(e, t, n) {
                        var r = 0 == n ? V : K,
                            i = 0 == n ? W : H;
                        return "=>" == e ? S(P, n ? Q : q, A) : "operator" == e ? (/\+\+|--/.test(t) || (s && "!" == t) ? S(r) : s && "<" == t && k.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1) ? S(z(">"), re(ce, ">"), F, r) : "?" == t ? S(W, I(":"), i) : S(i)) : "quasi" == e ? C($, r) : ";" != e ? ("(" == e ? ie(H, ")", "call", r) : "." == e ? S(J, r) : "[" == e ? S(z("]"), j, I("]"), F, r) : s && "as" == t ? ((k.marked = "keyword"), S(ce, r)) : "regexp" == e ? ((k.state.lastType = k.marked = "operator"), k.stream.backUp(k.stream.pos - k.stream.start - 1), S(i)) : void 0) : void 0;
                    }
                    function $(e, t) {
                        return "quasi" != e ? C() : "${" != t.slice(t.length - 2) ? S($) : S(W, G);
                    }
                    function G(e) {
                        if ("}" == e) return (k.marked = "string-2"), (k.state.tokenize = v), S($);
                    }
                    function q(e) {
                        return y(k.stream, k.state), C("{" == e ? _ : W);
                    }
                    function Q(e) {
                        return y(k.stream, k.state), C("{" == e ? _ : H);
                    }
                    function X(e, t) {
                        if ("target" == t) return (k.marked = "keyword"), S(V);
                    }
                    function Y(e, t) {
                        if ("target" == t) return (k.marked = "keyword"), S(K);
                    }
                    function Z(e) {
                        return ":" == e ? S(F, _) : C(V, I(";"), F);
                    }
                    function J(e) {
                        if ("variable" == e) return (k.marked = "property"), S();
                    }
                    function ee(e, t) {
                        return "async" == e
                            ? ((k.marked = "property"), S(ee))
                            : "variable" == e || "keyword" == k.style
                            ? ((k.marked = "property"), "get" == t || "set" == t ? S(te) : (s && k.state.fatArrowAt == k.stream.start && (n = k.stream.match(/^\s*:\s*/, !1)) && (k.state.fatArrowAt = k.stream.pos + n[0].length), S(ne)))
                            : "number" == e || "string" == e
                            ? ((k.marked = a ? "property" : k.style + " property"), S(ne))
                            : "jsonld-keyword" == e
                            ? S(ne)
                            : s && L(t)
                            ? ((k.marked = "keyword"), S(ee))
                            : "[" == e
                            ? S(W, le, I("]"), ne)
                            : "spread" == e
                            ? S(H, ne)
                            : "*" == t
                            ? ((k.marked = "keyword"), S(ee))
                            : ":" == e
                            ? C(ne)
                            : void 0;
                        var n;
                    }
                    function te(e) {
                        return "variable" != e ? C(ne) : ((k.marked = "property"), S(Me));
                    }
                    function ne(e) {
                        return ":" == e ? S(H) : "(" == e ? C(Me) : void 0;
                    }
                    function re(e, t, n) {
                        function r(i, o) {
                            if (n ? n.indexOf(i) > -1 : "," == i) {
                                var l = k.state.lexical;
                                return (
                                    "call" == l.info && (l.pos = (l.pos || 0) + 1),
                                    S(function (n, r) {
                                        return n == t || r == t ? C() : C(e);
                                    }, r)
                                );
                            }
                            return i == t || o == t ? S() : n && n.indexOf(";") > -1 ? C(e) : S(I(t));
                        }
                        return function (n, i) {
                            return n == t || i == t ? S() : C(e, r);
                        };
                    }
                    function ie(e, t, n) {
                        for (var r = 3; r < arguments.length; r++) k.cc.push(arguments[r]);
                        return S(z(t, n), re(e, t), F);
                    }
                    function oe(e) {
                        return "}" == e ? S() : C(_, oe);
                    }
                    function le(e, t) {
                        if (s) {
                            if (":" == e) return S(ce);
                            if ("?" == t) return S(le);
                        }
                    }
                    function ae(e, t) {
                        if (s && (":" == e || "in" == t)) return S(ce);
                    }
                    function ue(e) {
                        if (s && ":" == e) return k.stream.match(/^\s*\w+\s+is\b/, !1) ? S(W, se, ce) : S(ce);
                    }
                    function se(e, t) {
                        if ("is" == t) return (k.marked = "keyword"), S();
                    }
                    function ce(e, t) {
                        return "keyof" == t || "typeof" == t || "infer" == t ? ((k.marked = "keyword"), S("typeof" == t ? H : ce)) : "variable" == e || "void" == t ? ((k.marked = "type"), S(he)) : "|" == t || "&" == t ? S(ce) : "string" == e || "number" == e || "atom" == e ? S(he) : "[" == e ? S(z("]"), re(ce, "]", ","), F, he) : "{" == e ? S(z("}"), re(de, "}", ",;"), F, he) : "(" == e ? S(re(pe, ")"), fe, he) : "<" == e ? S(re(ce, ">"), ce) : void 0;
                    }
                    function fe(e) {
                        if ("=>" == e) return S(ce);
                    }
                    function de(e, t) {
                        return "variable" == e || "keyword" == k.style ? ((k.marked = "property"), S(de)) : "?" == t || "number" == e || "string" == e ? S(de) : ":" == e ? S(ce) : "[" == e ? S(I("variable"), ae, I("]"), de) : "(" == e ? C(Ne, de) : void 0;
                    }
                    function pe(e, t) {
                        return ("variable" == e && k.stream.match(/^\s*[?:]/, !1)) || "?" == t ? S(pe) : ":" == e ? S(ce) : "spread" == e ? S(pe) : C(ce);
                    }
                    function he(e, t) {
                        return "<" == t ? S(z(">"), re(ce, ">"), F, he) : "|" == t || "." == e || "&" == t ? S(ce) : "[" == e ? S(ce, I("]"), he) : "extends" == t || "implements" == t ? ((k.marked = "keyword"), S(ce)) : "?" == t ? S(ce, I(":"), ce) : void 0;
                    }
                    function me(e, t) {
                        if ("<" == t) return S(z(">"), re(ce, ">"), F, he);
                    }
                    function ge() {
                        return C(ce, ve);
                    }
                    function ve(e, t) {
                        if ("=" == t) return S(ce);
                    }
                    function ye(e, t) {
                        return "enum" == t ? ((k.marked = "keyword"), S(Ke)) : C(be, le, ke, Ce);
                    }
                    function be(e, t) {
                        return s && L(t) ? ((k.marked = "keyword"), S(be)) : "variable" == e ? (E(t), S()) : "spread" == e ? S(be) : "[" == e ? ie(xe, "]") : "{" == e ? ie(we, "}") : void 0;
                    }
                    function we(e, t) {
                        return "variable" != e || k.stream.match(/^\s*:/, !1) ? ("variable" == e && (k.marked = "property"), "spread" == e ? S(be) : "}" == e ? C() : "[" == e ? S(W, I("]"), I(":"), we) : S(I(":"), be, ke)) : (E(t), S(ke));
                    }
                    function xe() {
                        return C(be, ke);
                    }
                    function ke(e, t) {
                        if ("=" == t) return S(H);
                    }
                    function Ce(e) {
                        if ("," == e) return S(ye);
                    }
                    function Se(e, t) {
                        if ("keyword b" == e && "else" == t) return S(z("form", "else"), _, F);
                    }
                    function Te(e, t) {
                        return "await" == t ? S(Te) : "(" == e ? S(z(")"), Ee, F) : void 0;
                    }
                    function Ee(e) {
                        return "var" == e ? S(ye, Le) : "variable" == e ? S(Le) : C(Le);
                    }
                    function Le(e, t) {
                        return ")" == e ? S() : ";" == e ? S(Le) : "in" == t || "of" == t ? ((k.marked = "keyword"), S(W, Le)) : C(W, Le);
                    }
                    function Me(e, t) {
                        return "*" == t ? ((k.marked = "keyword"), S(Me)) : "variable" == e ? (E(t), S(Me)) : "(" == e ? S(P, z(")"), re(Pe, ")"), F, ue, _, A) : s && "<" == t ? S(z(">"), re(ge, ">"), F, Me) : void 0;
                    }
                    function Ne(e, t) {
                        return "*" == t ? ((k.marked = "keyword"), S(Ne)) : "variable" == e ? (E(t), S(Ne)) : "(" == e ? S(P, z(")"), re(Pe, ")"), F, ue, A) : s && "<" == t ? S(z(">"), re(ge, ">"), F, Ne) : void 0;
                    }
                    function Oe(e, t) {
                        return "keyword" == e || "variable" == e ? ((k.marked = "type"), S(Oe)) : "<" == t ? S(z(">"), re(ge, ">"), F) : void 0;
                    }
                    function Pe(e, t) {
                        return "@" == t && S(W, Pe), "spread" == e ? S(Pe) : s && L(t) ? ((k.marked = "keyword"), S(Pe)) : s && "this" == e ? S(le, ke) : C(be, le, ke);
                    }
                    function De(e, t) {
                        return "variable" == e ? Ae(e, t) : ze(e, t);
                    }
                    function Ae(e, t) {
                        if ("variable" == e) return E(t), S(ze);
                    }
                    function ze(e, t) {
                        return "<" == t ? S(z(">"), re(ge, ">"), F, ze) : "extends" == t || "implements" == t || (s && "," == e) ? ("implements" == t && (k.marked = "keyword"), S(s ? ce : W, ze)) : "{" == e ? S(z("}"), Fe, F) : void 0;
                    }
                    function Fe(e, t) {
                        return "async" == e || ("variable" == e && ("static" == t || "get" == t || "set" == t || (s && L(t))) && k.stream.match(/^\s+[\w$\xa1-\uffff]/, !1)) ? ((k.marked = "keyword"), S(Fe)) : "variable" == e || "keyword" == k.style ? ((k.marked = "property"), S(Ie, Fe)) : "number" == e || "string" == e ? S(Ie, Fe) : "[" == e ? S(W, le, I("]"), Ie, Fe) : "*" == t ? ((k.marked = "keyword"), S(Fe)) : s && "(" == e ? C(Ne, Fe) : ";" == e || "," == e ? S(Fe) : "}" == e ? S() : "@" == t ? S(W, Fe) : void 0;
                    }
                    function Ie(e, t) {
                        if ("?" == t) return S(Ie);
                        if (":" == e) return S(ce, ke);
                        if ("=" == t) return S(H);
                        var n = k.state.lexical.prev;
                        return C(n && "interface" == n.info ? Ne : Me);
                    }
                    function _e(e, t) {
                        return "*" == t ? ((k.marked = "keyword"), S(je, I(";"))) : "default" == t ? ((k.marked = "keyword"), S(W, I(";"))) : "{" == e ? S(re(Re, "}"), je, I(";")) : C(_);
                    }
                    function Re(e, t) {
                        return "as" == t ? ((k.marked = "keyword"), S(I("variable"))) : "variable" == e ? C(H, Re) : void 0;
                    }
                    function We(e) {
                        return "string" == e ? S() : "(" == e ? C(W) : C(He, Be, je);
                    }
                    function He(e, t) {
                        return "{" == e ? ie(He, "}") : ("variable" == e && E(t), "*" == t && (k.marked = "keyword"), S(Ue));
                    }
                    function Be(e) {
                        if ("," == e) return S(He, Be);
                    }
                    function Ue(e, t) {
                        if ("as" == t) return (k.marked = "keyword"), S(He);
                    }
                    function je(e, t) {
                        if ("from" == t) return (k.marked = "keyword"), S(W);
                    }
                    function Ve(e) {
                        return "]" == e ? S() : C(re(H, "]"));
                    }
                    function Ke() {
                        return C(z("form"), be, I("{"), z("}"), re($e, "}"), F, F);
                    }
                    function $e() {
                        return C(be, ke);
                    }
                    function Ge(e, t, n) {
                        return (t.tokenize == m && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)) || ("quasi" == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (n || 0))));
                    }
                    return (
                        (A.lex = !0),
                        (F.lex = !0),
                        {
                            startState: function (e) {
                                var t = { tokenize: m, lastType: "sof", cc: [], lexical: new w((e || 0) - o, 0, "block", !1), localVars: n.localVars, context: n.localVars && new M(null, null, !1), indented: e || 0 };
                                return n.globalVars && "object" == typeof n.globalVars && (t.globalVars = n.globalVars), t;
                            },
                            token: function (e, t) {
                                if ((e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), (t.indented = e.indentation()), y(e, t)), t.tokenize != g && e.eatSpace())) return null;
                                var n = t.tokenize(e, t);
                                return "comment" == r
                                    ? n
                                    : ((t.lastType = "operator" != r || ("++" != i && "--" != i) ? r : "incdec"),
                                      (function (e, t, n, r, i) {
                                          var o = e.cc;
                                          for (k.state = e, k.stream = i, k.marked = null, k.cc = o, k.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0); ; )
                                              if ((o.length ? o.pop() : u ? W : _)(n, r)) {
                                                  for (; o.length && o[o.length - 1].lex; ) o.pop()();
                                                  return k.marked ? k.marked : "variable" == n && x(e, r) ? "variable-2" : t;
                                              }
                                      })(t, n, r, i, e));
                            },
                            indent: function (t, r) {
                                if (t.tokenize == g) return e.Pass;
                                if (t.tokenize != m) return 0;
                                var i,
                                    a = r && r.charAt(0),
                                    u = t.lexical;
                                if (!/^\s*else\b/.test(r))
                                    for (var s = t.cc.length - 1; s >= 0; --s) {
                                        var c = t.cc[s];
                                        if (c == F) u = u.prev;
                                        else if (c != Se) break;
                                    }
                                for (; ("stat" == u.type || "form" == u.type) && ("}" == a || ((i = t.cc[t.cc.length - 1]) && (i == V || i == K) && !/^[,\.=+\-*:?[\(]/.test(r))); ) u = u.prev;
                                l && ")" == u.type && "stat" == u.prev.type && (u = u.prev);
                                var f = u.type,
                                    p = a == f;
                                return "vardef" == f
                                    ? u.indented + ("operator" == t.lastType || "," == t.lastType ? u.info.length + 1 : 0)
                                    : "form" == f && "{" == a
                                    ? u.indented
                                    : "form" == f
                                    ? u.indented + o
                                    : "stat" == f
                                    ? u.indented +
                                      ((function (e, t) {
                                          return "operator" == e.lastType || "," == e.lastType || d.test(t.charAt(0)) || /[,.]/.test(t.charAt(0));
                                      })(t, r)
                                          ? l || o
                                          : 0)
                                    : "switch" != u.info || p || 0 == n.doubleIndentSwitch
                                    ? u.align
                                        ? u.column + (p ? 0 : 1)
                                        : u.indented + (p ? 0 : o)
                                    : u.indented + (/^(?:case|default)\b/.test(r) ? o : 2 * o);
                            },
                            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                            blockCommentStart: u ? null : "/*",
                            blockCommentEnd: u ? null : "*/",
                            blockCommentContinue: u ? null : " * ",
                            lineComment: u ? null : "//",
                            fold: "brace",
                            closeBrackets: "()[]{}''\"\"``",
                            helperType: u ? "json" : "javascript",
                            jsonldMode: a,
                            jsonMode: u,
                            expressionAllowed: Ge,
                            skipExpression: function (e) {
                                var t = e.cc[e.cc.length - 1];
                                (t != W && t != H) || e.cc.pop();
                            },
                        }
                    );
                }),
                    e.registerHelper("wordChars", "javascript", /[\w$]/),
                    e.defineMIME("text/javascript", "javascript"),
                    e.defineMIME("text/ecmascript", "javascript"),
                    e.defineMIME("application/javascript", "javascript"),
                    e.defineMIME("application/x-javascript", "javascript"),
                    e.defineMIME("application/ecmascript", "javascript"),
                    e.defineMIME("application/json", { name: "javascript", json: !0 }),
                    e.defineMIME("application/x-json", { name: "javascript", json: !0 }),
                    e.defineMIME("application/ld+json", { name: "javascript", jsonld: !0 }),
                    e.defineMIME("text/typescript", { name: "javascript", typescript: !0 }),
                    e.defineMIME("application/typescript", { name: "javascript", typescript: !0 });
            })(n(2));
        },
        function (e, t, n) {
            !(function (e) {
                var t = { pairs: "()[]{}''\"\"", closeBefore: ")]}'\":;>", triples: "", explode: "[]{}" },
                    n = e.Pos;
                function r(e, n) {
                    return "pairs" == n && "string" == typeof e ? e : "object" == typeof e && null != e[n] ? e[n] : t[n];
                }
                e.defineOption("autoCloseBrackets", !1, function (t, n, l) {
                    l && l != e.Init && (t.removeKeyMap(i), (t.state.closeBrackets = null)), n && (o(r(n, "pairs")), (t.state.closeBrackets = n), t.addKeyMap(i));
                });
                var i = {
                    Backspace: function (t) {
                        var i = a(t);
                        if (!i || t.getOption("disableInput")) return e.Pass;
                        for (var o = r(i, "pairs"), l = t.listSelections(), u = 0; u < l.length; u++) {
                            if (!l[u].empty()) return e.Pass;
                            var c = s(t, l[u].head);
                            if (!c || o.indexOf(c) % 2 != 0) return e.Pass;
                        }
                        for (u = l.length - 1; u >= 0; u--) {
                            var f = l[u].head;
                            t.replaceRange("", n(f.line, f.ch - 1), n(f.line, f.ch + 1), "+delete");
                        }
                    },
                    Enter: function (t) {
                        var n = a(t),
                            i = n && r(n, "explode");
                        if (!i || t.getOption("disableInput")) return e.Pass;
                        for (var o = t.listSelections(), l = 0; l < o.length; l++) {
                            if (!o[l].empty()) return e.Pass;
                            var u = s(t, o[l].head);
                            if (!u || i.indexOf(u) % 2 != 0) return e.Pass;
                        }
                        t.operation(function () {
                            var e = t.lineSeparator() || "\n";
                            t.replaceSelection(e + e, null), t.execCommand("goCharLeft"), (o = t.listSelections());
                            for (var n = 0; n < o.length; n++) {
                                var r = o[n].head.line;
                                t.indentLine(r, null, !0), t.indentLine(r + 1, null, !0);
                            }
                        });
                    },
                };
                function o(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e.charAt(t),
                            r = "'" + n + "'";
                        i[r] || (i[r] = l(n));
                    }
                }
                function l(t) {
                    return function (i) {
                        return (function (t, i) {
                            var o = a(t);
                            if (!o || t.getOption("disableInput")) return e.Pass;
                            var l = r(o, "pairs"),
                                s = l.indexOf(i);
                            if (-1 == s) return e.Pass;
                            for (var f, d = r(o, "closeBefore"), p = r(o, "triples"), h = l.charAt(s + 1) == i, m = t.listSelections(), g = s % 2 == 0, v = 0; v < m.length; v++) {
                                var y,
                                    b = m[v],
                                    w = b.head,
                                    x = t.getRange(w, n(w.line, w.ch + 1));
                                if (g && !b.empty()) y = "surround";
                                else if ((!h && g) || x != i)
                                    if (h && w.ch > 1 && p.indexOf(i) >= 0 && t.getRange(n(w.line, w.ch - 2), w) == i + i) {
                                        if (w.ch > 2 && /\bstring/.test(t.getTokenTypeAt(n(w.line, w.ch - 2)))) return e.Pass;
                                        y = "addFour";
                                    } else if (h) {
                                        var k = 0 == w.ch ? " " : t.getRange(n(w.line, w.ch - 1), w);
                                        if (e.isWordChar(x) || k == i || e.isWordChar(k)) return e.Pass;
                                        y = "both";
                                    } else {
                                        if (!g || !(0 === x.length || /\s/.test(x) || d.indexOf(x) > -1)) return e.Pass;
                                        y = "both";
                                    }
                                else y = h && c(t, w) ? "both" : p.indexOf(i) >= 0 && t.getRange(w, n(w.line, w.ch + 3)) == i + i + i ? "skipThree" : "skip";
                                if (f) {
                                    if (f != y) return e.Pass;
                                } else f = y;
                            }
                            var C = s % 2 ? l.charAt(s - 1) : i,
                                S = s % 2 ? i : l.charAt(s + 1);
                            t.operation(function () {
                                if ("skip" == f) t.execCommand("goCharRight");
                                else if ("skipThree" == f) for (var e = 0; e < 3; e++) t.execCommand("goCharRight");
                                else if ("surround" == f) {
                                    var n = t.getSelections();
                                    for (e = 0; e < n.length; e++) n[e] = C + n[e] + S;
                                    for (t.replaceSelections(n, "around"), n = t.listSelections().slice(), e = 0; e < n.length; e++) n[e] = u(n[e]);
                                    t.setSelections(n);
                                } else "both" == f ? (t.replaceSelection(C + S, null), t.triggerElectric(C + S), t.execCommand("goCharLeft")) : "addFour" == f && (t.replaceSelection(C + C + C + C, "before"), t.execCommand("goCharRight"));
                            });
                        })(i, t);
                    };
                }
                function a(e) {
                    var t = e.state.closeBrackets;
                    return !t || t.override ? t : e.getModeAt(e.getCursor()).closeBrackets || t;
                }
                function u(t) {
                    var r = e.cmpPos(t.anchor, t.head) > 0;
                    return { anchor: new n(t.anchor.line, t.anchor.ch + (r ? -1 : 1)), head: new n(t.head.line, t.head.ch + (r ? 1 : -1)) };
                }
                function s(e, t) {
                    var r = e.getRange(n(t.line, t.ch - 1), n(t.line, t.ch + 1));
                    return 2 == r.length ? r : null;
                }
                function c(e, t) {
                    var r = e.getTokenAt(n(t.line, t.ch + 1));
                    return /\bstring/.test(r.type) && r.start == t.ch && (0 == t.ch || !/\bstring/.test(e.getTokenTypeAt(t)));
                }
                o(t.pairs + "`");
            })(n(2));
        },
        function (e, t, n) {
            !(function (e) {
                e.defineOption("autoCloseTags", !1, function (l, a, u) {
                    if ((u != e.Init && u && l.removeKeyMap("autoCloseTags"), a)) {
                        var s = { name: "autoCloseTags" };
                        ("object" == typeof a && !1 === a.whenClosing) ||
                            (s["'/'"] = function (t) {
                                return (function (t) {
                                    return t.getOption("disableInput") ? e.Pass : r(t, !0);
                                })(t);
                            }),
                            ("object" == typeof a && !1 === a.whenOpening) ||
                                (s["'>'"] = function (r) {
                                    return (function (r) {
                                        if (r.getOption("disableInput")) return e.Pass;
                                        for (var l = r.listSelections(), a = [], u = r.getOption("autoCloseTags"), s = 0; s < l.length; s++) {
                                            if (!l[s].empty()) return e.Pass;
                                            var c = l[s].head,
                                                f = r.getTokenAt(c),
                                                d = e.innerMode(r.getMode(), f.state),
                                                p = d.state,
                                                h = d.mode.xmlCurrentTag && d.mode.xmlCurrentTag(p),
                                                m = h && h.name;
                                            if (!m) return e.Pass;
                                            var g = "html" == d.mode.configuration,
                                                v = ("object" == typeof u && u.dontCloseTags) || (g && t),
                                                y = ("object" == typeof u && u.indentTags) || (g && n);
                                            f.end > c.ch && (m = m.slice(0, m.length - f.end + c.ch));
                                            var b = m.toLowerCase();
                                            if (!m || ("string" == f.type && (f.end != c.ch || !/[\"\']/.test(f.string.charAt(f.string.length - 1)) || 1 == f.string.length)) || ("tag" == f.type && h.close) || f.string.indexOf("/") == c.ch - f.start - 1 || (v && i(v, b) > -1) || o(r, (d.mode.xmlCurrentContext && d.mode.xmlCurrentContext(p)) || [], m, c, !0)) return e.Pass;
                                            var w = "object" == typeof u && u.emptyTags;
                                            if (w && i(w, m) > -1) a[s] = { text: "/>", newPos: e.Pos(c.line, c.ch + 2) };
                                            else {
                                                var x = y && i(y, b) > -1;
                                                a[s] = { indent: x, text: ">" + (x ? "\n\n" : "") + "</" + m + ">", newPos: x ? e.Pos(c.line + 1, 0) : e.Pos(c.line, c.ch + 1) };
                                            }
                                        }
                                        var k = "object" == typeof u && u.dontIndentOnAutoClose;
                                        for (s = l.length - 1; s >= 0; s--) {
                                            var C = a[s];
                                            r.replaceRange(C.text, l[s].head, l[s].anchor, "+insert");
                                            var S = r.listSelections().slice(0);
                                            (S[s] = { head: C.newPos, anchor: C.newPos }), r.setSelections(S), !k && C.indent && (r.indentLine(C.newPos.line, null, !0), r.indentLine(C.newPos.line + 1, null, !0));
                                        }
                                    })(r);
                                }),
                            l.addKeyMap(s);
                    }
                });
                var t = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"],
                    n = ["applet", "blockquote", "body", "button", "div", "dl", "fieldset", "form", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "html", "iframe", "layer", "legend", "object", "ol", "p", "select", "table", "ul"];
                function r(t, n) {
                    for (var r = t.listSelections(), i = [], l = n ? "/" : "</", a = t.getOption("autoCloseTags"), u = "object" == typeof a && a.dontIndentOnSlash, s = 0; s < r.length; s++) {
                        if (!r[s].empty()) return e.Pass;
                        var c = r[s].head,
                            f = t.getTokenAt(c),
                            d = e.innerMode(t.getMode(), f.state),
                            p = d.state;
                        if (n && ("string" == f.type || "<" != f.string.charAt(0) || f.start != c.ch - 1)) return e.Pass;
                        var h,
                            m = "xml" != d.mode.name && "htmlmixed" == t.getMode().name;
                        if (m && "javascript" == d.mode.name) h = l + "script";
                        else if (m && "css" == d.mode.name) h = l + "style";
                        else {
                            var g = d.mode.xmlCurrentContext && d.mode.xmlCurrentContext(p);
                            if (!g || (g.length && o(t, g, g[g.length - 1], c))) return e.Pass;
                            h = l + g[g.length - 1];
                        }
                        ">" != t.getLine(c.line).charAt(f.end) && (h += ">"), (i[s] = h);
                    }
                    if ((t.replaceSelections(i), (r = t.listSelections()), !u)) for (s = 0; s < r.length; s++) (s == r.length - 1 || r[s].head.line < r[s + 1].head.line) && t.indentLine(r[s].head.line);
                }
                function i(e, t) {
                    if (e.indexOf) return e.indexOf(t);
                    for (var n = 0, r = e.length; n < r; ++n) if (e[n] == t) return n;
                    return -1;
                }
                function o(t, n, r, i, o) {
                    if (!e.scanForClosingTag) return !1;
                    var l = Math.min(t.lastLine() + 1, i.line + 500),
                        a = e.scanForClosingTag(t, i, null, l);
                    if (!a || a.tag != r) return !1;
                    for (var u = o ? 1 : 0, s = n.length - 1; s >= 0 && n[s] == r; s--) ++u;
                    for (i = a.to, s = 1; s < u; s++) {
                        var c = e.scanForClosingTag(t, i, null, l);
                        if (!c || c.tag != r) return !1;
                        i = c.to;
                    }
                    return !0;
                }
                e.commands.closeTag = function (e) {
                    return r(e);
                };
            })(n(2), n(18));
        },
        function (e, t, n) {
            !(function (e) {
                "use strict";
                var t = e.Pos;
                function n(e, t) {
                    return e.line - t.line || e.ch - t.ch;
                }
                var r = "A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
                    i = new RegExp("<(/?)([" + r + "][" + r + "-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*)", "g");
                function o(e, t, n, r) {
                    (this.line = t), (this.ch = n), (this.cm = e), (this.text = e.getLine(t)), (this.min = r ? Math.max(r.from, e.firstLine()) : e.firstLine()), (this.max = r ? Math.min(r.to - 1, e.lastLine()) : e.lastLine());
                }
                function l(e, n) {
                    var r = e.cm.getTokenTypeAt(t(e.line, n));
                    return r && /\btag\b/.test(r);
                }
                function a(e) {
                    if (!(e.line >= e.max)) return (e.ch = 0), (e.text = e.cm.getLine(++e.line)), !0;
                }
                function u(e) {
                    if (!(e.line <= e.min)) return (e.text = e.cm.getLine(--e.line)), (e.ch = e.text.length), !0;
                }
                function s(e) {
                    for (;;) {
                        var t = e.text.indexOf(">", e.ch);
                        if (-1 == t) {
                            if (a(e)) continue;
                            return;
                        }
                        if (l(e, t + 1)) {
                            var n = e.text.lastIndexOf("/", t),
                                r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
                            return (e.ch = t + 1), r ? "selfClose" : "regular";
                        }
                        e.ch = t + 1;
                    }
                }
                function c(e) {
                    for (;;) {
                        var t = e.ch ? e.text.lastIndexOf("<", e.ch - 1) : -1;
                        if (-1 == t) {
                            if (u(e)) continue;
                            return;
                        }
                        if (l(e, t + 1)) {
                            (i.lastIndex = t), (e.ch = t);
                            var n = i.exec(e.text);
                            if (n && n.index == t) return n;
                        } else e.ch = t;
                    }
                }
                function f(e) {
                    for (;;) {
                        i.lastIndex = e.ch;
                        var t = i.exec(e.text);
                        if (!t) {
                            if (a(e)) continue;
                            return;
                        }
                        if (l(e, t.index + 1)) return (e.ch = t.index + t[0].length), t;
                        e.ch = t.index + 1;
                    }
                }
                function d(e) {
                    for (;;) {
                        var t = e.ch ? e.text.lastIndexOf(">", e.ch - 1) : -1;
                        if (-1 == t) {
                            if (u(e)) continue;
                            return;
                        }
                        if (l(e, t + 1)) {
                            var n = e.text.lastIndexOf("/", t),
                                r = n > -1 && !/\S/.test(e.text.slice(n + 1, t));
                            return (e.ch = t + 1), r ? "selfClose" : "regular";
                        }
                        e.ch = t;
                    }
                }
                function p(e, n) {
                    for (var r = []; ; ) {
                        var i,
                            o = f(e),
                            l = e.line,
                            a = e.ch - (o ? o[0].length : 0);
                        if (!o || !(i = s(e))) return;
                        if ("selfClose" != i)
                            if (o[1]) {
                                for (var u = r.length - 1; u >= 0; --u)
                                    if (r[u] == o[2]) {
                                        r.length = u;
                                        break;
                                    }
                                if (u < 0 && (!n || n == o[2])) return { tag: o[2], from: t(l, a), to: t(e.line, e.ch) };
                            } else r.push(o[2]);
                    }
                }
                function h(e, n) {
                    for (var r = []; ; ) {
                        var i = d(e);
                        if (!i) return;
                        if ("selfClose" != i) {
                            var o = e.line,
                                l = e.ch,
                                a = c(e);
                            if (!a) return;
                            if (a[1]) r.push(a[2]);
                            else {
                                for (var u = r.length - 1; u >= 0; --u)
                                    if (r[u] == a[2]) {
                                        r.length = u;
                                        break;
                                    }
                                if (u < 0 && (!n || n == a[2])) return { tag: a[2], from: t(e.line, e.ch), to: t(o, l) };
                            }
                        } else c(e);
                    }
                }
                e.registerHelper("fold", "xml", function (e, r) {
                    for (var i = new o(e, r.line, 0); ; ) {
                        var l = f(i);
                        if (!l || i.line != r.line) return;
                        var a = s(i);
                        if (!a) return;
                        if (!l[1] && "selfClose" != a) {
                            var u = t(i.line, i.ch),
                                c = p(i, l[2]);
                            return c && n(c.from, u) > 0 ? { from: u, to: c.from } : null;
                        }
                    }
                }),
                    (e.findMatchingTag = function (e, r, i) {
                        var l = new o(e, r.line, r.ch, i);
                        if (-1 != l.text.indexOf(">") || -1 != l.text.indexOf("<")) {
                            var a = s(l),
                                u = a && t(l.line, l.ch),
                                f = a && c(l);
                            if (a && f && !(n(l, r) > 0)) {
                                var d = { from: t(l.line, l.ch), to: u, tag: f[2] };
                                return "selfClose" == a ? { open: d, close: null, at: "open" } : f[1] ? { open: h(l, f[2]), close: d, at: "close" } : { open: d, close: p((l = new o(e, u.line, u.ch, i)), f[2]), at: "open" };
                            }
                        }
                    }),
                    (e.findEnclosingTag = function (e, t, n, r) {
                        for (var i = new o(e, t.line, t.ch, n); ; ) {
                            var l = h(i, r);
                            if (!l) break;
                            var a = p(new o(e, t.line, t.ch, n), l.tag);
                            if (a) return { open: l, close: a };
                        }
                    }),
                    (e.scanForClosingTag = function (e, t, n, r) {
                        return p(new o(e, t.line, t.ch, r ? { from: 0, to: r } : null), n);
                    });
            })(n(2));
        },
        function (e, t) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || new Function("return this")();
            } catch (r) {
                "object" === typeof window && (n = window);
            }
            e.exports = n;
        },
    ],
]);
//# sourceMappingURL=2.754cacda.chunk.js.map
