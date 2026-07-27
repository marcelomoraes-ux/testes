function e(e, a) {
    if (a == null || a > e.length) a = e.length;
    for (var t = 0, r = new Array(a); t < a; t++) r[t] = e[t];
    return r
}

function a(e) {
    if (Array.isArray(e)) return e
}

function t(a) {
    if (Array.isArray(a)) return e(a)
}

function r(e, a, t, r, o, n, i) {
    try {
        var c = e[n](i);
        var l = c.value
    } catch (e) {
        t(e);
        return
    }
    if (c.done) {
        a(l)
    } else {
        Promise.resolve(l).then(r, o)
    }
}

function o(e) {
    return function() {
        var a = this,
            t = arguments;
        return new Promise(function(o, n) {
            var i = e.apply(a, t);

            function c(e) {
                r(i, o, n, c, l, "next", e)
            }

            function l(e) {
                r(i, o, n, c, l, "throw", e)
            }
            c(undefined)
        })
    }
}

function n(e, a) {
    if (!(e instanceof a)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function i(e, a) {
    for (var t = 0; t < a.length; t++) {
        var r = a[t];
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) r.writable = true;
        Object.defineProperty(e, r.key, r)
    }
}

function c(e, a, t) {
    if (a) i(e.prototype, a);
    if (t) i(e, t);
    return e
}

function l(e, a, t) {
    if (a in e) {
        Object.defineProperty(e, a, {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true
        })
    } else {
        e[a] = t
    }
    return e
}

function s(e) {
    if (typeof Symbol !== "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
}

function u(e, a) {
    var t = e == null ? null : typeof Symbol !== "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (t == null) return;
    var r = [];
    var o = true;
    var n = false;
    var i, c;
    try {
        for (t = t.call(e); !(o = (i = t.next()).done); o = true) {
            r.push(i.value);
            if (a && r.length === a) break
        }
    } catch (e) {
        n = true;
        c = e
    } finally {
        try {
            if (!o && t["return"] != null) t["return"]()
        } finally {
            if (n) throw c
        }
    }
    return r
}

function d() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function m() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function v(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a] != null ? arguments[a] : {};
        var r = Object.keys(t);
        if (typeof Object.getOwnPropertySymbols === "function") {
            r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))
        }
        r.forEach(function(a) {
            l(e, a, t[a])
        })
    }
    return e
}

function h(e, a) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        if (a) {
            r = r.filter(function(a) {
                return Object.getOwnPropertyDescriptor(e, a).enumerable
            })
        }
        t.push.apply(t, r)
    }
    return t
}

function g(e, a) {
    a = a != null ? a : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
    } else {
        h(Object(a)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
        })
    }
    return e
}

function f(e, t) {
    return a(e) || u(e, t) || k(e, t) || d()
}

function p(e) {
    return t(e) || s(e) || k(e) || m()
}

function y(e) {
    "@swc/helpers - typeof";
    return e && typeof Symbol !== "undefined" && e.constructor === Symbol ? "symbol" : typeof e
}

function k(a, t) {
    if (!a) return;
    if (typeof a === "string") return e(a, t);
    var r = Object.prototype.toString.call(a).slice(8, -1);
    if (r === "Object" && a.constructor) r = a.constructor.name;
    if (r === "Map" || r === "Set") return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return e(a, t)
}

function x(e, a) {
    var t, r, o, n, i = {
        label: 0,
        sent: function() {
            if (o[0] & 1) throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return n = {
        next: c(0),
        "throw": c(1),
        "return": c(2)
    }, typeof Symbol === "function" && (n[Symbol.iterator] = function() {
        return this
    }), n;

    function c(e) {
        return function(a) {
            return l([e, a])
        }
    }

    function l(n) {
        if (t) throw new TypeError("Generator is already executing.");
        while (i) try {
            if (t = 1, r && (o = n[0] & 2 ? r["return"] : n[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, n[1])).done) return o;
            if (r = 0, o) n = [n[0] & 2, o.value];
            switch (n[0]) {
                case 0:
                case 1:
                    o = n;
                    break;
                case 4:
                    i.label++;
                    return {
                        value: n[1],
                        done: false
                    };
                case 5:
                    i.label++;
                    r = n[1];
                    n = [0];
                    continue;
                case 7:
                    n = i.ops.pop();
                    i.trys.pop();
                    continue;
                default:
                    if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (n[0] === 6 || n[0] === 2)) {
                        i = 0;
                        continue
                    }
                    if (n[0] === 3 && (!o || n[1] > o[0] && n[1] < o[3])) {
                        i.label = n[1];
                        break
                    }
                    if (n[0] === 6 && i.label < o[1]) {
                        i.label = o[1];
                        o = n;
                        break
                    }
                    if (o && i.label < o[2]) {
                        i.label = o[2];
                        i.ops.push(n);
                        break
                    }
                    if (o[2]) i.ops.pop();
                    i.trys.pop();
                    continue
            }
            n = a.call(e, i)
        } catch (e) {
            n = [6, e];
            r = 0
        } finally {
            t = o = 0
        }
        if (n[0] & 5) throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: true
        }
    }
}
var LomadeeGlobalPixel = function() {
    "use strict";
    var e = Object.defineProperty;
    var a = function(a, t) {
        return e(a, "name", {
            value: t,
            configurable: true
        })
    };
    var t = /*#__PURE__*/ function() {
        function e() {
            n(this, e);
            this.debugMode = false;
            this.DEBUG_STORAGE_KEY = "lomadeeDebug";
            this.checkDebugMode()
        }
        c(e, [{
            key: "checkDebugMode",
            value: function e() {
                var e = new URLSearchParams(window.location.search).get("lomadeeDebug");
                e !== null ? e === "true" ? (this.debugMode = true, this.saveDebugModeToStorage(true)) : e === "false" && (this.debugMode = false, this.saveDebugModeToStorage(false)) : this.debugMode = this.getDebugModeFromStorage()
            }
        }, {
            key: "saveDebugModeToStorage",
            value: function e(e) {
                try {
                    e ? localStorage.setItem(this.DEBUG_STORAGE_KEY, "true") : localStorage.removeItem(this.DEBUG_STORAGE_KEY)
                } catch (e) {
                    console.warn("Lomadee Pixel: N\xe3o foi poss\xedvel salvar configura\xe7\xe3o de debug no localStorage", e)
                }
            }
        }, {
            key: "getDebugModeFromStorage",
            value: function e() {
                try {
                    return localStorage.getItem(this.DEBUG_STORAGE_KEY) === "true"
                } catch (e) {
                    return console.warn("Lomadee Pixel: N\xe3o foi poss\xedvel ler configura\xe7\xe3o de debug do localStorage", e), false
                }
            }
        }, {
            key: "log",
            value: function e(e, a) {
                this.debugMode && (a ? console.log(e, a) : console.log(e))
            }
        }, {
            key: "error",
            value: function e(e, a) {
                a ? console.error(e, a) : console.error(e)
            }
        }, {
            key: "warn",
            value: function e(e, a) {
                this.debugMode && (a ? console.warn(e, a) : console.warn(e))
            }
        }, {
            key: "isDebugMode",
            value: function e() {
                return this.debugMode
            }
        }, {
            key: "refreshDebugMode",
            value: function e() {
                this.checkDebugMode()
            }
        }, {
            key: "setDebugMode",
            value: function e(e) {
                this.debugMode = e, this.saveDebugModeToStorage(e)
            }
        }, {
            key: "clearDebugMode",
            value: function e() {
                this.debugMode = false, this.saveDebugModeToStorage(false)
            }
        }], [{
            key: "getInstance",
            value: function a() {
                return e.instance || (e.instance = new e), e.instance
            }
        }]);
        return e
    }();
    a(t, "Logger");
    var r = t,
        i = r.getInstance();

    function l(e, a) {
        var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        try {
            var r = t.days,
                o = r === void 0 ? 30 : r,
                n = t.domain,
                c = t.path,
                l = c === void 0 ? "/" : c,
                s = t.secure,
                u = s === void 0 ? !1 : s,
                d = t.sameSite,
                m = d === void 0 ? "Lax" : d,
                v = new Date;
            v.setDate(v.getDate() + o);
            var h = ["".concat(e, "=").concat(encodeURIComponent(a)), "expires=".concat(v.toUTCString()), "path=".concat(l), "SameSite=".concat(m)];
            n && h.push("domain=".concat(n)), u && h.push("secure");
            var g = h.join("; ");
            document.cookie = g, i.log("[Cookie Utils] Cookie definido: ".concat(e), {
                cookieString: g
            })
        } catch (a) {
            console.error("[Cookie Utils] Erro ao definir cookie ".concat(e, ":"), a)
        }
    }
    a(l, "setCookie");

    function s(e) {
        try {
            var a = document.cookie;
            i.log("[Cookie Utils] Lendo cookie ".concat(e), {
                allCookies: a
            });
            var t = a.split(";"),
                r = "".concat(e, "=");
            var o = true,
                n = false,
                c = undefined;
            try {
                for (var l = t[Symbol.iterator](), s; !(o = (s = l.next()).done); o = true) {
                    var u = s.value;
                    if (u = u.trim(), u.startsWith(r)) {
                        var d = u.substring(r.length),
                            m = decodeURIComponent(d);
                        return i.log("[Cookie Utils] Cookie ".concat(e, " encontrado"), {
                            rawCookie: u,
                            rawValue: d,
                            decodedValue: m
                        }), m
                    }
                }
            } catch (e) {
                n = true;
                c = e
            } finally {
                try {
                    if (!o && l.return != null) {
                        l.return()
                    }
                } finally {
                    if (n) {
                        throw c
                    }
                }
            }
            return i.log("[Cookie Utils] Cookie ".concat(e, " n\xe3o encontrado")), null
        } catch (a) {
            return i.error("[Cookie Utils] Erro ao ler cookie ".concat(e, ":"), a), null
        }
    }
    a(s, "getCookie");

    function u(e) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        try {
            var t = a.domain,
                r = a.path,
                o = r === void 0 ? "/" : r,
                n = ["".concat(e, "="), "expires=Thu, 01 Jan 1970 00:00:00 UTC", "path=".concat(o)];
            t && n.push("domain=".concat(t));
            var c = n.join("; ");
            document.cookie = c, i.log("[Cookie Utils] Cookie removido: ".concat(e), {
                cookieString: c
            })
        } catch (a) {
            console.error("[Cookie Utils] Erro ao remover cookie ".concat(e, ":"), a)
        }
    }
    a(u, "deleteCookie");

    function d() {
        try {
            var e = window.location.hostname;
            if (i.log("[Cookie Utils] Extraindo dom\xednio de topo", {
                    hostname: e
                }), e === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(e)) return i.log("[Cookie Utils] Usando localhost/IP", {
                domain: e
            }), e;
            var a = e.split(".");
            if (a.length >= 2) {
                var t;
                if (a.length >= 4) t = ".".concat(a.slice(-3).join(".")), i.log("[Cookie Utils] Usando 3 partes para dom\xednio complexo", {
                    hostname: e,
                    parts: a,
                    topLevelDomain: t
                });
                else if (a.length === 3) {
                    var r = a[2];
                    r.length === 2 ? (t = ".".concat(a.slice(-3).join(".")), i.log("[Cookie Utils] Detectado TLD composto (pa\xeds)", {
                        hostname: e,
                        parts: a,
                        lastPart: r,
                        topLevelDomain: t
                    })) : (t = ".".concat(a.slice(-2).join(".")), i.log("[Cookie Utils] Detectado subdom\xednio simples", {
                        hostname: e,
                        parts: a,
                        lastPart: r,
                        topLevelDomain: t
                    }))
                } else t = ".".concat(a.slice(-2).join(".")), i.log("[Cookie Utils] Dom\xednio simples com 2 partes", {
                    hostname: e,
                    parts: a,
                    topLevelDomain: t
                });
                return t
            }
            return i.log("[Cookie Utils] Usando hostname como dom\xednio", {
                domain: e
            }), e
        } catch (e) {
            return i.error("[Cookie Utils] Erro ao obter dom\xednio de topo:", e), window.location.hostname
        }
    }
    a(d, "getTopLevelDomain");
    var m = {
        "Content-Type": "application/json"
    };

    function h(e, a) {
        return k.apply(this, arguments)
    }

    function k() {
        k = o(function(e, a) {
            var t, r, o, n, c, l, s;
            var u = arguments;
            return x(this, function(d) {
                switch (d.label) {
                    case 0:
                        t = u.length > 2 && u[2] !== void 0 ? u[2] : {};
                        r = t.useFetch, o = r === void 0 ? false : r, n = t.expectResponse, c = n === void 0 ? false : n;
                        d.label = 1;
                    case 1:
                        d.trys.push([1, 5, , 6]);
                        if (!(c || o)) return [3, 3];
                        i.log("[HTTP Utils] Enviando via fetch (resposta esperada)");
                        return [4, fetch(e, {
                            method: "POST",
                            headers: m,
                            body: JSON.stringify(a),
                            keepalive: !0
                        })];
                    case 2:
                        return [2, d.sent().ok];
                    case 3:
                        if (navigator.sendBeacon) {
                            i.log("[HTTP Utils] Enviando via sendBeacon (m\xe9todo preferido)");
                            l = new Blob([JSON.stringify(a)], {
                                type: "application/json"
                            });
                            if (navigator.sendBeacon(e, l)) return [2, (i.log("[HTTP Utils] Evento enviado com sucesso via sendBeacon"), !0)];
                            i.warn("[HTTP Utils] sendBeacon falhou, tentando fallback para fetch")
                        }
                        i.log("[HTTP Utils] Enviando via fetch (fallback)");
                        return [4, fetch(e, {
                            method: "POST",
                            headers: m,
                            body: JSON.stringify(a),
                            keepalive: !0
                        })];
                    case 4:
                        return [2, d.sent().ok];
                    case 5:
                        s = d.sent();
                        return [2, (console.error("[HTTP Utils] Erro ao enviar dados de analytics para ".concat(e, ":"), s), false)];
                    case 6:
                        return [2]
                }
            })
        });
        return k.apply(this, arguments)
    }
    a(h, "sendAnalyticsData");

    function b(e) {
        return E.apply(this, arguments)
    }

    function E() {
        E = o(function(e) {
            var a, t, r;
            var o = arguments;
            return x(this, function(n) {
                switch (n.label) {
                    case 0:
                        a = o.length > 1 && o[1] !== void 0 ? o[1] : {};
                        n.label = 1;
                    case 1:
                        n.trys.push([1, 4, , 5]);
                        return [4, fetch(e, {
                            method: "GET",
                            headers: v({}, m, a)
                        })];
                    case 2:
                        t = n.sent();
                        if (!t.ok) throw new Error("HTTP error! status: ".concat(t.status));
                        return [4, t.json()];
                    case 3:
                        return [2, n.sent()];
                    case 4:
                        r = n.sent();
                        throw console.error("[HTTP Utils] Erro na requisi\xe7\xe3o GET para ".concat(e, ":"), r), r;
                    case 5:
                        return [2]
                }
            })
        });
        return E.apply(this, arguments)
    }
    a(b, "getJSON");
    var L = /*#__PURE__*/ function() {
        function e() {
            n(this, e);
            this.cookieName = "lomadee-url-timeline";
            this.cookieExpireDays = 30;
            this.maxEntries = 19;
            this.timeline = null;
            i.log("[Url Timeline Tracker] Inicializando..."), this.loadTimelineFromCookie()
        }
        c(e, [{
            key: "loadTimelineFromCookie",
            value: function e() {
                try {
                    var e = s(this.cookieName);
                    if (e) try {
                        var a, t, r;
                        this.timeline = JSON.parse(e), i.log("[Url Timeline Tracker] Timeline carregada do cookie:", {
                            hasInitialContext: !!((a = this.timeline) === null || a === void 0 ? void 0 : a.initialContext),
                            entriesCount: ((r = this.timeline) === null || r === void 0 ? void 0 : (t = r.entries) === null || t === void 0 ? void 0 : t.length) || 0
                        })
                    } catch (e) {
                        i.warn("[Url Timeline Tracker] Erro ao parsear timeline do cookie, criando nova:", e), this.timeline = null
                    } else i.log("[Url Timeline Tracker] Nenhuma timeline encontrada no cookie")
                } catch (e) {
                    i.error("[Url Timeline Tracker] Erro ao carregar timeline do cookie:", e), this.timeline = null
                }
            }
        }, {
            key: "saveTimelineToCookie",
            value: function e() {
                if (!this.timeline) {
                    i.warn("[Url Timeline Tracker] Tentativa de salvar timeline vazia, ignorando");
                    return
                }
                try {
                    var e = JSON.stringify(this.timeline),
                        a = d();
                    l(this.cookieName, e, {
                        days: this.cookieExpireDays,
                        domain: a
                    }), i.log("[Url Timeline Tracker] Timeline salva no cookie com sucesso")
                } catch (e) {
                    i.error("[Url Timeline Tracker] Erro ao salvar timeline no cookie:", e)
                }
            }
        }, {
            key: "extractQueryParams",
            value: function e(e) {
                try {
                    var a = new URL(e),
                        t = {};
                    return a.searchParams.forEach(function(e, a) {
                        t[a] = e
                    }), t
                } catch (e) {
                    return i.warn("[Url Timeline Tracker] Erro ao extrair query params da URL:", e), {}
                }
            }
        }, {
            key: "hasInitialContext",
            value: function e() {
                var e;
                return !!((e = this.timeline) === null || e === void 0 ? void 0 : e.initialContext)
            }
        }, {
            key: "initialize",
            value: function e() {
                if ((typeof window === "undefined" ? "undefined" : y(window)) > "u") {
                    i.warn("[Url Timeline Tracker] window n\xe3o est\xe1 definido, n\xe3o \xe9 poss\xedvel inicializar timeline");
                    return
                }
                if (this.hasInitialContext()) {
                    i.log("[Url Timeline Tracker] Contexto inicial j\xe1 existe, ignorando inicializa\xe7\xe3o");
                    return
                }
                try {
                    var e = window.location.href,
                        a = window.location.pathname,
                        t = document.referrer || void 0,
                        r = this.extractQueryParams(e),
                        o = new Date().toISOString();
                    this.timeline = {
                        initialContext: {
                            timestamp: o,
                            url: e,
                            path: a,
                            queryParams: r,
                            referrer: t
                        },
                        entries: [],
                        lastUpdated: o
                    }, this.saveTimelineToCookie(), i.log("[Url Timeline Tracker] Contexto inicial criado com sucesso:", {
                        url: e,
                        queryParamsCount: Object.keys(r).length,
                        referrer: t
                    })
                } catch (e) {
                    i.error("[Url Timeline Tracker] Erro ao inicializar contexto inicial:", e)
                }
            }
        }, {
            key: "recordUrlChange",
            value: function e() {
                if ((typeof window === "undefined" ? "undefined" : y(window)) > "u") {
                    i.warn("[Url Timeline Tracker] window n\xe3o est\xe1 definido, n\xe3o \xe9 poss\xedvel registrar mudan\xe7a de URL");
                    return
                }
                if (!this.hasInitialContext()) {
                    i.log("[Url Timeline Tracker] Sem contexto inicial, ignorando mudan\xe7a de URL");
                    return
                }
                try {
                    var e = window.location.href,
                        a = window.location.pathname,
                        t = document.referrer || void 0,
                        r = this.extractQueryParams(e),
                        o = new Date().toISOString(),
                        n = this.timeline.entries[this.timeline.entries.length - 1];
                    if (n && n.path === a && JSON.stringify(n.queryParams) === JSON.stringify(r)) {
                        i.log("[Url Timeline Tracker] URL n\xe3o mudou significativamente, ignorando");
                        return
                    }
                    var c = {
                        timestamp: o,
                        url: e,
                        path: a,
                        queryParams: r,
                        referrer: t
                    };
                    if (this.timeline.entries.push(c), this.timeline.entries.length > this.maxEntries) {
                        var l = this.timeline.entries.shift();
                        i.log("[Url Timeline Tracker] Limite de entradas excedido, removendo entrada mais antiga:", {
                            removedTimestamp: l === null || l === void 0 ? void 0 : l.timestamp,
                            currentEntriesCount: this.timeline.entries.length
                        })
                    }
                    this.timeline.lastUpdated = o, this.saveTimelineToCookie(), i.log("[Url Timeline Tracker] Mudan\xe7a de URL registrada:", {
                        url: e,
                        path: a,
                        queryParamsCount: Object.keys(r).length,
                        totalEntries: this.timeline.entries.length
                    })
                } catch (e) {
                    i.error("[Url Timeline Tracker] Erro ao registrar mudan\xe7a de URL:", e)
                }
            }
        }, {
            key: "getTimeline",
            value: function e() {
                return this.timeline
            }
        }, {
            key: "clearTimeline",
            value: function e() {
                i.log("[Url Timeline Tracker] Limpando timeline..."), this.timeline = null;
                try {
                    var e = d();
                    u(this.cookieName, {
                        domain: e
                    }), i.log("[Url Timeline Tracker] Timeline limpa com sucesso")
                } catch (e) {
                    i.error("[Url Timeline Tracker] Erro ao limpar timeline:", e)
                }
            }
        }], [{
            key: "getInstance",
            value: function a() {
                return e.instance || (e.instance = new e), e.instance
            }
        }]);
        return e
    }();
    a(L, "UrlTimelineTracker");
    var w = L;

    function P() {
        return w.getInstance()
    }
    a(P, "initUrlTimelineTracker");
    var _ = /*#__PURE__*/ function() {
        function e() {
            n(this, e);
            this.cookieName = "lomadee-tracker";
            this.cookieExpireDays = 30;
            this.validUtmSources = ["lomadee"];
            i.log("[Lomadee Tracker] Inicializando..."), this.init()
        }
        c(e, [{
            key: "init",
            value: function e() {
                if ((typeof window === "undefined" ? "undefined" : y(window)) > "u") {
                    i.warn("[Lomadee Tracker] window n\xe3o est\xe1 definido");
                    return
                }
                i.log("[Lomadee Tracker] Verificando par\xe2metros da URL...");
                var e = new URLSearchParams(window.location.search),
                    a = this.hasValidUtmParameters(e),
                    t = e.has("lmdeeTracking");
                if (a || t) {
                    i.log("[Lomadee Tracker] Par\xe2metros v\xe1lidos encontrados");
                    var r = this.buildTrackerData(e);
                    this.saveTrackerData(r);
                    try {
                        var o = P();
                        o.hasInitialContext() || (o.initialize(), i.log("[Lomadee Tracker] Timeline de par\xe2metros de URL inicializada"))
                    } catch (e) {
                        i.error("[Lomadee Tracker] Erro ao inicializar timeline de par\xe2metros de URL:", e)
                    }
                } else i.log("[Lomadee Tracker] Nenhum par\xe2metro v\xe1lido encontrado na URL")
            }
        }, {
            key: "hasValidUtmParameters",
            value: function e(e) {
                var a = e.get("utm_source");
                return a && this.validUtmSources.includes(a) ? (i.log("[Lomadee Tracker] UTM Source encontrado: ".concat(a, " (v\xe1lido)")), true) : (a && i.log("[Lomadee Tracker] UTM Source encontrado: ".concat(a, " (inv\xe1lido)")), false)
            }
        }, {
            key: "buildTrackerData",
            value: function e(e) {
                i.log("[Lomadee Tracker] Construindo dados do tracker...");
                var a = {
                        timestamp: Date.now()
                    },
                    t = e.get("utm_source");
                t && this.validUtmSources.includes(t) && (a.utm_source = t, i.log("[Lomadee Tracker] Capturado utm_source: ".concat(t)));
                var r = e.get("utm_campaign");
                r && (a.utm_campaign = r, i.log("[Lomadee Tracker] Capturado utm_campaign: ".concat(r)));
                var o = e.get("utm_medium");
                o && (a.utm_medium = o, i.log("[Lomadee Tracker] Capturado utm_medium: ".concat(o)));
                var n = e.get("lmdeeTracking");
                return n && (a.lmdeeTracking = n, i.log("[Lomadee Tracker] Capturado lmdeeTracking: ".concat(n))), a
            }
        }, {
            key: "mergeTrackerData",
            value: function e(e, a) {
                if (i.log("[Lomadee Tracker] Fazendo merge dos dados..."), i.log("[Lomadee Tracker] Dados existentes:", e), i.log("[Lomadee Tracker] Novos dados:", a), !e) return i.log("[Lomadee Tracker] Nenhum dado existente, usando novos dados"), a;
                var t = g(v({}, e, Object.fromEntries(Object.entries(a).filter(function(e) {
                    var a = f(e, 2),
                        t = a[0],
                        r = a[1];
                    return t === "timestamp" || r != null && r !== ""
                }))), {
                    timestamp: a.timestamp
                });
                return i.log("[Lomadee Tracker] Dados ap\xf3s merge:", t), t
            }
        }, {
            key: "saveTrackerData",
            value: function e(e) {
                try {
                    i.log("[Lomadee Tracker] Salvando dados...", e);
                    var a = s(this.cookieName),
                        t = null;
                    if (a) try {
                        t = JSON.parse(a)
                    } catch (e) {
                        i.warn("[Lomadee Tracker] Erro ao parsear dados existentes, usando novos dados", e)
                    }
                    var r = this.mergeTrackerData(t, e),
                        o = JSON.stringify(r),
                        n = d();
                    l(this.cookieName, o, {
                        days: this.cookieExpireDays,
                        domain: n
                    }), i.log("[Lomadee Tracker] Dados salvos com sucesso ap\xf3s merge")
                } catch (e) {
                    i.error("[Lomadee Tracker] Erro ao salvar dados:", e)
                }
            }
        }, {
            key: "getTrackerData",
            value: function e() {
                try {
                    i.log("[Lomadee Tracker] Buscando dados armazenados...");
                    var e = s(this.cookieName);
                    if (e) try {
                        var a = JSON.parse(e);
                        return i.log("[Lomadee Tracker] Dados encontrados no cookie:", a), a
                    } catch (e) {
                        i.warn("[Lomadee Tracker] Erro ao parsear cookie, ignorando dados corrompidos")
                    }
                    var t = new URL(window.location.href),
                        r = new URLSearchParams(t.search);
                    if (this.hasValidUtmParameters(r) || r.has("lmdeeTracking")) {
                        i.log("[Lomadee Tracker] Dados v\xe1lidos encontrados na URL atual");
                        var o = this.buildTrackerData(r);
                        return this.saveTrackerData(o), o
                    }
                    return i.log("[Lomadee Tracker] Nenhum dado v\xe1lido encontrado no cookie ou URL"), null
                } catch (e) {
                    return i.error("[Lomadee Tracker] Erro ao ler dados:", e), null
                }
            }
        }, {
            key: "getUrlCode",
            value: function e() {
                i.log("[Lomadee Tracker] Extraindo urlCode do utm_campaign...");
                var e = this.getTrackerData();
                if (!(e === null || e === void 0 ? void 0 : e.utm_campaign)) return i.log("[Lomadee Tracker] utm_campaign n\xe3o encontrado"), null;
                var a = e.utm_campaign.split("_")[2] || null;
                return i.log("[Lomadee Tracker] urlCode extra\xeddo:", a), a
            }
        }, {
            key: "getAnalyticsEventId",
            value: function e() {
                i.log("[Lomadee Tracker] Extraindo analyticsEventId do utm_campaign...");
                var e = this.getTrackerData();
                if (!(e === null || e === void 0 ? void 0 : e.utm_campaign)) return i.log("[Lomadee Tracker] utm_campaign n\xe3o encontrado"), null;
                var a = e.utm_campaign.split("_")[3] || null;
                return i.log("[Lomadee Tracker] analyticsEventId extra\xeddo:", a), a
            }
        }, {
            key: "hasValidUTMsForAnalytics",
            value: function e() {
                return i.log("[Lomadee Tracker] Verificando UTMs v\xe1lidas para analytics..."), this.validateUTMsFromURL().isValid ? (i.log("[Lomadee Tracker] ✅ UTMs v\xe1lidas encontradas na URL atual"), true) : this.validateUTMsFromCookie().isValid ? (i.log("[Lomadee Tracker] ✅ UTMs v\xe1lidas encontradas no cookie (fallback)"), true) : (i.log("[Lomadee Tracker] ❌ Nenhuma UTM v\xe1lida encontrada (URL + Cookie)"), false)
            }
        }, {
            key: "validateUTMsFromURL",
            value: function e() {
                try {
                    var e = new URL(window.location.href),
                        a = new URLSearchParams(e.search),
                        t = this.hasValidUtmParameters(a),
                        r = a.has("lmdeeTracking"),
                        o = t || r,
                        n = {
                            utm_source: a.get("utm_source") || "n\xe3o encontrado",
                            utm_medium: a.get("utm_medium") || "n\xe3o encontrado",
                            utm_campaign: a.get("utm_campaign") || "n\xe3o encontrado",
                            lmdeeTracking: a.get("lmdeeTracking") || "n\xe3o encontrado",
                            hasValidUtmParameters: t,
                            hasLmdeeTracking: r,
                            isValid: o,
                            validUtmSources: this.validUtmSources
                        };
                    return i.log("[Lomadee Tracker] Valida\xe7\xe3o UTMs na URL:", n), {
                        isValid: o,
                        source: "URL",
                        details: n
                    }
                } catch (e) {
                    return i.error("[Lomadee Tracker] Erro ao validar UTMs na URL:", e), {
                        isValid: false,
                        source: "URL",
                        details: {
                            error: String(e)
                        }
                    }
                }
            }
        }, {
            key: "validateUTMsFromCookie",
            value: function e() {
                try {
                    var e = this.getTrackerData();
                    if (!e) {
                        var a = {
                            error: "Nenhum tracker data encontrado no cookie"
                        };
                        return i.log("[Lomadee Tracker] Valida\xe7\xe3o UTMs no cookie:", a), {
                            isValid: !1,
                            source: "Cookie",
                            details: a
                        }
                    }
                    var t = !!(e.utm_source && this.validUtmSources.includes(e.utm_source)),
                        r = !!(e.lmdeeTracking && e.lmdeeTracking.length > 0),
                        o = t || r,
                        n = {
                            utm_source: e.utm_source || "n\xe3o encontrado",
                            utm_medium: e.utm_medium || "n\xe3o encontrado",
                            utm_campaign: e.utm_campaign || "n\xe3o encontrado",
                            lmdeeTracking: e.lmdeeTracking || "n\xe3o encontrado",
                            hasValidUtmSource: t,
                            hasLmdeeTracking: r,
                            isValid: o,
                            validUtmSources: this.validUtmSources
                        };
                    return i.log("[Lomadee Tracker] Valida\xe7\xe3o UTMs no cookie:", n), {
                        isValid: o,
                        source: "Cookie",
                        details: n
                    }
                } catch (e) {
                    return i.error("[Lomadee Tracker] Erro ao validar UTMs no cookie:", e), {
                        isValid: false,
                        source: "Cookie",
                        details: {
                            error: String(e)
                        }
                    }
                }
            }
        }, {
            key: "clearTrackerData",
            value: function e() {
                i.log("[Lomadee Tracker] Limpando dados armazenados...");
                var e = d();
                u(this.cookieName, {
                    domain: e
                }), i.log("[Lomadee Tracker] Dados limpos com sucesso")
            }
        }], [{
            key: "getInstance",
            value: function a() {
                return e.instance || (e.instance = new e), e.instance
            }
        }]);
        return e
    }();
    a(_, "LomadeeTracker");
    var T = _;

    function I() {
        return T.getInstance()
    }
    a(I, "initTracker");
    var S = {
        API_URL: "https://analytics.lomadee.com.br",
        ENDPOINTS: {
            EVENTS: "/events",
            SESSION_ID: "/events/sessionId"
        },
        VERSION: "2.0.0",
        COOKIE_NAME: "lomadee-session-id",
        COOKIE_EXPIRE_DAYS: 30
    };
    var C = /*#__PURE__*/ function() {
        function e(a) {
            n(this, e);
            this.sessionId = null;
            this.pendingEvents = [];
            i.log("[Lomadee Analytics] Inicializando Analytics Service..."), this.config = a, this.initSessionId(), this.setupPageUnloadListeners()
        }
        c(e, [{
            key: "initSessionId",
            value: function e() {
                var e = this;
                return o(function() {
                    var a;
                    return x(this, function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                return [4, e.getSessionId()];
                            case 1:
                                e.sessionId = t.sent(), i.log("[Lomadee Analytics] Session ID inicializado:", e.sessionId);
                                return [3, 3];
                            case 2:
                                a = t.sent();
                                i.error("[Lomadee Analytics] Erro ao inicializar session ID:", a);
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "getSessionId",
            value: function e() {
                var e = this;
                return o(function() {
                    var a, t, r;
                    return x(this, function(o) {
                        switch (o.label) {
                            case 0:
                                a = s(S.COOKIE_NAME);
                                if (a) return [2, (i.log("[Lomadee Analytics] Session ID recuperado do cookie:", a), a)];
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, , 4]);
                                i.log("[Lomadee Analytics] Solicitando novo session ID da API...");
                                return [4, b("".concat(S.API_URL).concat(S.ENDPOINTS.SESSION_ID))];
                            case 2:
                                t = o.sent().sessionId;
                                if (!t) throw new Error("Session ID n\xe3o retornado pela API");
                                return [2, (l(S.COOKIE_NAME, t, {
                                    days: S.COOKIE_EXPIRE_DAYS
                                }), i.log("[Lomadee Analytics] Novo session ID obtido da API:", t), t)];
                            case 3:
                                r = o.sent();
                                return [2, (i.error("[Lomadee Analytics] Erro ao obter session ID da API:", r), e.generateFallbackSessionId())];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "generateFallbackSessionId",
            value: function e() {
                var e = "fallback_".concat(Date.now(), "_").concat(Math.random().toString(36).substr(2, 9));
                return i.log("[Lomadee Analytics] Session ID de fallback gerado:", e), l(S.COOKIE_NAME, e, {
                    days: S.COOKIE_EXPIRE_DAYS
                }), e
            }
        }, {
            key: "extractUrlCode",
            value: function e() {
                return this.config.tracker.getUrlCode() || null
            }
        }, {
            key: "buildMetadata",
            value: function e(e, a) {
                var t = {};
                e && (t.orderId = e), a && (t.triggerSource = a, i.log("[Lomadee Analytics] Trigger source inclu\xeddo no metadata:", a));
                var r = this.config.tracker.getAnalyticsEventId();
                r && (t.analyticsEventId = r, i.log("[Lomadee Analytics] Analytics Event ID inclu\xeddo no metadata:", r));
                var o = this.config.tracker.getTrackerData(),
                    n = new URL(window.location.href),
                    c = {};
                Array.from(n.searchParams.entries()).forEach(function(e) {
                    var a = f(e, 2),
                        t = a[0],
                        r = a[1];
                    c[t] = r
                }), Object.keys(c).length > 0 && (t.queryParameters = c, i.log("[Lomadee Analytics] Query parameters inclu\xeddos no metadata:", c)), o && (t.cookieData = g(v({}, o), {
                    _timestamp: o.timestamp
                }), i.log("[Lomadee Analytics] Dados do cookie inclu\xeddos no metadata:", t.cookieData));
                try {
                    var l = P().getTimeline();
                    l && (t.urlTimeline = l, i.log("[Lomadee Analytics] Timeline de par\xe2metros de URL inclu\xedda no metadata:", {
                        hasInitialContext: !!l.initialContext,
                        entriesCount: l.entries.length
                    }))
                } catch (e) {
                    i.error("[Lomadee Analytics] Erro ao incluir timeline de par\xe2metros de URL no metadata:", e)
                }
                return t
            }
        }, {
            key: "buildPayload",
            value: function e(e, a, t) {
                var r = this;
                return o(function() {
                    var o, n;
                    return x(this, function(c) {
                        switch (c.label) {
                            case 0:
                                o = r.sessionId;
                                if (o) return [3, 2];
                                return [4, r.getSessionId()];
                            case 1:
                                o = r.sessionId = c.sent();
                                c.label = 2;
                            case 2:
                                o;
                                n = {
                                    userAgent: navigator.userAgent,
                                    referer: document.referrer || null,
                                    sessionId: r.sessionId,
                                    urlCode: r.extractUrlCode() || "",
                                    pageViewPath: window.location.pathname,
                                    metadata: r.buildMetadata(a, t),
                                    type: e
                                };
                                return [2, (i.log("[Lomadee Analytics] Payload constru\xeddo:", n), n)]
                        }
                    })
                })()
            }
        }, {
            key: "sendEvent",
            value: function e(e) {
                var a = this;
                return o(function() {
                    var t;
                    return x(this, function(r) {
                        switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                i.log("[Lomadee Analytics] Enviando evento para API:", e.type), a.addToPendingEvents(e);
                                return [4, h("".concat(S.API_URL).concat(S.ENDPOINTS.EVENTS), e)];
                            case 1:
                                return [2, r.sent() ? (i.log("[Lomadee Analytics] Evento enviado com sucesso:", e.type), a.removeFromPendingEvents(e), !0) : (i.error("[Lomadee Analytics] Falha ao enviar evento:", e.type), !1)];
                            case 2:
                                t = r.sent();
                                return [2, (i.error("[Lomadee Analytics] Erro ao enviar evento:", t), false)];
                            case 3:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "sendPageView",
            value: function e(e) {
                var a = this;
                return o(function() {
                    var t, r;
                    return x(this, function(o) {
                        switch (o.label) {
                            case 0:
                                o.trys.push([0, 3, , 4]);
                                i.log("[Lomadee Analytics] Enviando evento de page view...", {
                                    triggerSource: e || "n\xe3o especificado"
                                });
                                return [4, a.buildPayload("page_view", void 0, e)];
                            case 1:
                                t = o.sent();
                                return [4, a.sendEvent(t)];
                            case 2:
                                return [2, o.sent()];
                            case 3:
                                r = o.sent();
                                return [2, (i.error("[Lomadee Analytics] Erro ao enviar page view:", r), false)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "sendConversion",
            value: function e(e, a) {
                var t = this;
                return o(function() {
                    var r, o;
                    return x(this, function(n) {
                        switch (n.label) {
                            case 0:
                                n.trys.push([0, 3, , 4]);
                                i.log("[Lomadee Analytics] Enviando evento de conversion:", {
                                    orderId: e,
                                    triggerSource: a || "n\xe3o especificado"
                                });
                                return [4, t.buildPayload("conversion", e, a)];
                            case 1:
                                r = n.sent();
                                return [4, t.sendEvent(r)];
                            case 2:
                                return [2, n.sent()];
                            case 3:
                                o = n.sent();
                                return [2, (i.error("[Lomadee Analytics] Erro ao enviar conversion:", o), false)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "updateSessionId",
            value: function e() {
                var e = this;
                return o(function() {
                    var a;
                    return x(this, function(t) {
                        switch (t.label) {
                            case 0:
                                t.trys.push([0, 2, , 3]);
                                return [4, e.getSessionId()];
                            case 1:
                                e.sessionId = t.sent(), i.log("[Lomadee Analytics] Session ID atualizado:", e.sessionId);
                                return [3, 3];
                            case 2:
                                a = t.sent();
                                i.error("[Lomadee Analytics] Erro ao atualizar session ID:", a);
                                return [3, 3];
                            case 3:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "setupPageUnloadListeners",
            value: function e() {
                var e = this;
                if ((typeof window === "undefined" ? "undefined" : y(window)) > "u") return;
                var t = a(function() {
                    e.pendingEvents.length > 0 && (i.log("[Lomadee Analytics] Enviando eventos pendentes ao sair da p\xe1gina:", e.pendingEvents.length), e.pendingEvents.forEach(function(e) {
                        h("".concat(S.API_URL).concat(S.ENDPOINTS.EVENTS), e)
                    }), e.pendingEvents = [])
                }, "sendPendingEvents");
                window.addEventListener("beforeunload", t), window.addEventListener("pagehide", t), document.addEventListener("visibilitychange", function() {
                    document.visibilityState === "hidden" && t()
                }), i.log("[Lomadee Analytics] Listeners de sa\xedda de p\xe1gina configurados")
            }
        }, {
            key: "addToPendingEvents",
            value: function e(e) {
                e.type === "conversion" && (this.pendingEvents.push(e), i.log("[Lomadee Analytics] Evento cr\xedtico adicionado \xe0 lista pendente:", e.type))
            }
        }, {
            key: "removeFromPendingEvents",
            value: function e(e) {
                var a = this.pendingEvents.findIndex(function(a) {
                    var t, r;
                    return a.type === e.type && ((t = a.metadata) === null || t === void 0 ? void 0 : t.orderId) === ((r = e.metadata) === null || r === void 0 ? void 0 : r.orderId) && a.sessionId === e.sessionId
                });
                a !== -1 && (this.pendingEvents.splice(a, 1), i.log("[Lomadee Analytics] Evento removido da lista pendente:", e.type))
            }
        }], [{
            key: "getInstance",
            value: function a(a) {
                return e.instance || (e.instance = new e(a)), e.instance
            }
        }]);
        return e
    }();
    a(C, "AnalyticsService");
    var U = C;

    function D(e) {
        return i.log("[Lomadee Analytics] Inicializando Analytics Service com config:", e), U.getInstance(e)
    }
    a(D, "initAnalyticsService");
    var A = {
        API_URL: "https://pixel-receiver.lomadee.com.br",
        ENDPOINTS: {
            ORDER: "/send",
            JOURNEY: "/pixel/journey"
        },
        VERSION: "1.0.0",
        COOKIE_NAME: "lomadee-global-pixel",
        COOKIE_EXPIRE_DAYS: 30,
        HEADERS: {
            "Content-Type": "application/json"
        }
    };
    var G = {
        name: "Gazin",
        domains: ["gazin.com.br"],
        successRoutes: ["/obrigado", "/thanks", "/success"],
        waitForDataLayer: true,
        dataLayerEvents: ["purchase"],
        extractionMethod: "dataLayer",
        maxWaitTime: 1e4,
        autoExtraction: false
    };
    var O = /*#__PURE__*/ function() {
        function e() {
            n(this, e)
        }
        c(e, [{
            key: "extract",
            value: function e() {
                var e = this;
                return o(function() {
                    var a, t;
                    return x(this, function(r) {
                        switch (r.label) {
                            case 0:
                                i.log("[Gazin Extractor] Iniciando extra\xe7\xe3o de dados...");
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, e.waitForPurchaseEvent()];
                            case 2:
                                a = r.sent();
                                return [2, a ? (i.log("[Gazin Extractor] Dados de purchase encontrados:", a), e.convertToLomadeeFormat(a)) : (i.log("[Gazin Extractor] Nenhum dado de purchase encontrado"), null)];
                            case 3:
                                t = r.sent();
                                return [2, (i.error("[Gazin Extractor] Erro ao extrair dados:", t), null)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "waitForPurchaseEvent",
            value: function e() {
                var e = this;
                return o(function() {
                    return x(this, function(a) {
                        return [2, new Promise(function(a) {
                            var t = setTimeout(function() {
                                    i.log("[Gazin Extractor] Timeout aguardando evento de purchase"), a(null)
                                }, 1e4),
                                r = e.findExistingPurchaseEvent();
                            if (r) {
                                clearTimeout(t), a(r);
                                return
                            }
                            e.monitorDataLayerChanges(function(e) {
                                clearTimeout(t), a(e)
                            })
                        })]
                    })
                })()
            }
        }, {
            key: "findExistingPurchaseEvent",
            value: function e() {
                if (!window.dataLayer || !Array.isArray(window.dataLayer)) return null;
                for (var e = window.dataLayer.length - 1; e >= 0; e--) {
                    var a;
                    var t = window.dataLayer[e];
                    if (t.event === "purchase" && ((a = t.ecommerce) === null || a === void 0 ? void 0 : a.purchase)) return t
                }
                return null
            }
        }, {
            key: "monitorDataLayerChanges",
            value: function e(e) {
                if (!window.dataLayer) {
                    i.log("[Gazin Extractor] dataLayer n\xe3o encontrado");
                    return
                }
                var a = window.dataLayer.push;
                window.dataLayer.push = function(t) {
                    var r;
                    var o = a.call(this, t);
                    return t.event === "purchase" && ((r = t.ecommerce) === null || r === void 0 ? void 0 : r.purchase) && e(t), o
                }
            }
        }, {
            key: "convertToLomadeeFormat",
            value: function e(e) {
                var a = e.ecommerce.purchase,
                    t = a.actionField.transaction_id || a.actionField.id,
                    r = this.convertItems(a.products.orders),
                    o = this.calculateSubItems(a, r),
                    n = a.actionField.revenue || 0,
                    i = this.buildMetadata(a);
                return {
                    orderId: t,
                    items: r,
                    subItems: o,
                    value: Math.floor(n * 100),
                    metadata: i
                }
            }
        }, {
            key: "convertItems",
            value: function e(e) {
                var a = this;
                var t = [];
                return e.forEach(function(e, r) {
                    e.items.forEach(function(o, n) {
                        t.push(a.convertItem(o, r, n, e))
                    })
                }), t
            }
        }, {
            key: "convertItem",
            value: function e(e, a, t, r) {
                var o = [],
                    n = [];
                if (e.color && n.push({
                        key: "color",
                        value: e.color
                    }), e.voltage && n.push({
                        key: "voltage",
                        value: e.voltage
                    }), e.freeAssembly !== void 0 && n.push({
                        key: "free_assembly",
                        value: String(e.freeAssembly)
                    }), n.push({
                        key: "sellerId",
                        value: r.seller.sellerName
                    }, {
                        key: "delivered_by",
                        value: r.seller.deliveredBy
                    }), r.seller.deliveryOptions && r.seller.deliveryOptions.length > 0) {
                    var i = r.seller.deliveryOptions[0];
                    n.push({
                        key: "estimated_delivery",
                        value: i.estimatedDelivery
                    }, {
                        key: "shipping_cost",
                        value: String(i.shippingCost)
                    })
                }
                return {
                    id: String(e.id),
                    name: e.title,
                    imageUrl: e.imageUrl || "",
                    price: Math.floor(e.itemPrice * 100),
                    listPrice: Math.floor(e.itemPrice * 100),
                    quantity: e.quantity,
                    categories: o,
                    metadata: n.filter(function(e) {
                        return e.value
                    })
                }
            }
        }, {
            key: "calculateSubItems",
            value: function e(e, a) {
                var t = [],
                    r = a.reduce(function(e, a) {
                        return e + a.price * a.quantity
                    }, 0);
                return r > 0 && t.push({
                    key: "Items",
                    value: r
                }), e.actionField.shipping && e.actionField.shipping > 0 && t.push({
                    key: "Shipping",
                    value: Math.floor(e.actionField.shipping * 100)
                }), t
            }
        }, {
            key: "buildMetadata",
            value: function e(e) {
                return [{
                    key: "gazin_transaction_id",
                    value: e.actionField.transaction_id || ""
                }, {
                    key: "gazin_id",
                    value: e.actionField.id || ""
                }, {
                    key: "affiliation",
                    value: e.actionField.affiliation || ""
                }, {
                    key: "tax",
                    value: e.actionField.tax || ""
                }].filter(function(e) {
                    return e.value
                })
            }
        }]);
        return e
    }();
    a(O, "GazinExtractor");
    var F = O;
    var M = {
        config: G,
        extractor: new F
    };
    var R = {
        name: "InspireHome",
        domains: ["inspirehome.com.br", "www.inspirehome.com.br"],
        successRoutes: ["/checkout/onepage/success/"],
        waitForDataLayer: true,
        dataLayerEvents: ["purchase"],
        extractionMethod: "dataLayer",
        maxWaitTime: 1e4,
        autoExtraction: true
    };
    var z = /*#__PURE__*/ function() {
        function e() {
            n(this, e)
        }
        c(e, [{
            key: "extract",
            value: function e() {
                var e = this;
                return o(function() {
                    var a, t;
                    return x(this, function(r) {
                        switch (r.label) {
                            case 0:
                                i.log("[Inspire Home Extractor] Iniciando extra\xe7\xe3o de dados...");
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, e.waitForPurchaseEvent()];
                            case 2:
                                a = r.sent();
                                return [2, a ? (i.log("[Inspire Home Extractor] Dados de purchase encontrados:", a), e.convertToLomadeeFormat(a)) : (i.log("[Inspire Home Extractor] Nenhum dado de purchase encontrado"), null)];
                            case 3:
                                t = r.sent();
                                return [2, (i.error("[Inspire Home Extractor] Erro ao extrair dados:", t), null)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "waitForPurchaseEvent",
            value: function e() {
                var e = this;
                return o(function() {
                    return x(this, function(a) {
                        return [2, new Promise(function(a) {
                            var t = setTimeout(function() {
                                    i.log("[Inspire Home Extractor] Timeout aguardando evento de purchase"), a(null)
                                }, 1e4),
                                r = e.findExistingPurchaseEvent();
                            if (r) {
                                clearTimeout(t), a(r);
                                return
                            }
                            e.monitorDataLayerChanges(function(e) {
                                clearTimeout(t), a(e)
                            })
                        })]
                    })
                })()
            }
        }, {
            key: "findExistingPurchaseEvent",
            value: function e() {
                if (!window.dataLayer || !Array.isArray(window.dataLayer)) return null;
                for (var e = window.dataLayer.length - 1; e >= 0; e--) {
                    var a = window.dataLayer[e];
                    if ("event" in a && a.event === "purchase" && "ecommerce" in a && a.ecommerce && "transaction_id" in a.ecommerce) return a
                }
                return null
            }
        }, {
            key: "monitorDataLayerChanges",
            value: function e(e) {
                if (!window.dataLayer) {
                    i.log("[Inspire Home Extractor] dataLayer n\xe3o encontrado");
                    return
                }
                var a = window.dataLayer.push;
                window.dataLayer.push = function(t) {
                    var r = a.call(this, t);
                    return "event" in t && t.event === "purchase" && "ecommerce" in t && t.ecommerce && "transaction_id" in t.ecommerce && e(t), r
                }
            }
        }, {
            key: "convertToLomadeeFormat",
            value: function e(e) {
                var a = e.ecommerce,
                    t = a.transaction_id,
                    r = this.convertItems(a.items),
                    o = this.calculateSubItems(a, r),
                    n = a.value,
                    i = this.buildMetadata(e);
                return {
                    orderId: t,
                    items: r,
                    subItems: o,
                    value: Math.floor(n * 100),
                    metadata: i
                }
            }
        }, {
            key: "convertItems",
            value: function e(e) {
                var a = this;
                return e.map(function(e, t) {
                    return a.convertItem(e, t)
                })
            }
        }, {
            key: "convertItem",
            value: function e(e, a) {
                var t = [];
                e.item_category && t.push({
                    id: e.item_list_id,
                    name: e.item_category,
                    metadata: []
                }), e.item_list_name && e.item_list_name !== e.item_category && t.push({
                    id: e.item_list_id,
                    name: e.item_list_name,
                    metadata: []
                });
                var r = [{
                    key: "brand",
                    value: e.item_brand
                }, {
                    key: "affiliation",
                    value: e.affiliation
                }, {
                    key: "stock_status",
                    value: e.item_stock_status
                }, {
                    key: "sale_product",
                    value: e.item_sale_product
                }, {
                    key: "reviews_count",
                    value: e.item_reviews_count
                }, {
                    key: "reviews_score",
                    value: e.item_reviews_score
                }, {
                    key: "list_id",
                    value: e.item_list_id
                }].filter(function(e) {
                    return e.value
                });
                return {
                    id: e.item_id,
                    name: e.item_name,
                    imageUrl: "",
                    price: Math.floor(e.price * 100),
                    listPrice: Math.floor(e.price * 100),
                    quantity: e.quantity,
                    categories: t,
                    metadata: r
                }
            }
        }, {
            key: "calculateSubItems",
            value: function e(e, a) {
                var t = [],
                    r = a.reduce(function(e, a) {
                        return e + a.price * a.quantity
                    }, 0);
                return r > 0 && t.push({
                    key: "Items",
                    value: r
                }), "shipping" in e && e.shipping > 0 && t.push({
                    key: "Shipping",
                    value: Math.floor(e.shipping * 100)
                }), "tax" in e && e.tax > 0 && t.push({
                    key: "Tax",
                    value: Math.floor(e.tax * 100)
                }), t
            }
        }, {
            key: "buildMetadata",
            value: function e(e) {
                var a = [{
                    key: "inspire_home_transaction_id",
                    value: e.ecommerce.transaction_id
                }, {
                    key: "wp_order_id",
                    value: e.wp_order_id || ""
                }, {
                    key: "wp_conversion_value",
                    value: e.wp_conversion_value || ""
                }, {
                    key: "currency",
                    value: e.ecommerce.currency
                }];
                return e.ecommerce.coupon && a.push({
                    key: "coupon",
                    value: e.ecommerce.coupon
                }), e.ecommerce.total_order_count && a.push({
                    key: "total_order_count",
                    value: String(e.ecommerce.total_order_count)
                }), e.ecommerce.total_lifetime_value && a.push({
                    key: "total_lifetime_value",
                    value: String(e.ecommerce.total_lifetime_value)
                }), e.pageName && a.push({
                    key: "page_name",
                    value: e.pageName
                }), e.pageType && a.push({
                    key: "page_type",
                    value: e.pageType
                }), a.filter(function(e) {
                    return e.value
                })
            }
        }]);
        return e
    }();
    a(z, "InspireHomeExtractor");
    var N = z;
    var V = {
        config: R,
        extractor: new N
    };
    var j = {
        name: "CasaBergan",
        domains: ["casabergan.com.br", "www.casabergan.com.br", "checkout.casabergan.com.br"],
        successRoutes: ["/Confirmacao", "/confirmacao", "/success"],
        waitForDataLayer: true,
        dataLayerEvents: ["purchase"],
        extractionMethod: "dataLayer",
        maxWaitTime: 1e4,
        autoExtraction: true
    };
    var B = /*#__PURE__*/ function() {
        function e() {
            n(this, e)
        }
        c(e, [{
            key: "extract",
            value: function e() {
                var e = this;
                return o(function() {
                    var a, t;
                    return x(this, function(r) {
                        switch (r.label) {
                            case 0:
                                i.log("[Casa Bergan Extractor] Iniciando extra\xe7\xe3o de dados...");
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, e.waitForPurchaseEvent()];
                            case 2:
                                a = r.sent();
                                return [2, a ? (i.log("[Casa Bergan Extractor] Dados de purchase encontrados:", a), e.convertToLomadeeFormat(a)) : (i.log("[Casa Bergan Extractor] Nenhum dado de purchase encontrado"), null)];
                            case 3:
                                t = r.sent();
                                return [2, (i.error("[Casa Bergan Extractor] Erro ao extrair dados:", t), null)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "waitForPurchaseEvent",
            value: function e() {
                var e = this;
                return o(function() {
                    return x(this, function(a) {
                        return [2, new Promise(function(a) {
                            var t = setTimeout(function() {
                                    i.log("[Casa Bergan Extractor] Timeout aguardando evento de purchase"), a(null)
                                }, 1e4),
                                r = e.findExistingPurchaseEvent();
                            if (r) {
                                clearTimeout(t), a(r);
                                return
                            }
                            e.monitorDataLayerChanges(function(e) {
                                clearTimeout(t), a(e)
                            })
                        })]
                    })
                })()
            }
        }, {
            key: "findExistingPurchaseEvent",
            value: function e() {
                if (i.log("[Casa Bergan Extractor] \uD83D\uDD0D Procurando evento purchase existente..."), !window.dataLayer || !Array.isArray(window.dataLayer)) return i.log("[Casa Bergan Extractor] ❌ DataLayer n\xe3o existe ou n\xe3o \xe9 array"), null;
                i.log("[Casa Bergan Extractor] \uD83D\uDCCA DataLayer encontrado com ".concat(window.dataLayer.length, " itens")), i.log("[Casa Bergan Extractor] \uD83D\uDCCB \xdaltimos 5 itens do dataLayer:", window.dataLayer.slice(-5));
                for (var e = window.dataLayer.length - 1; e >= 0; e--) {
                    var a = window.dataLayer[e];
                    if (i.log("[Casa Bergan Extractor] \uD83D\uDD0D Verificando item ".concat(e, ":"), a), "event" in a && a.event === "purchase")
                        if (i.log("[Casa Bergan Extractor] ✅ Evento purchase encontrado no item ".concat(e, "!")), "ecommerce" in a && a.ecommerce) {
                            if (i.log("[Casa Bergan Extractor] ✅ Ecommerce data encontrado no item ".concat(e, ":"), a.ecommerce), "transaction_id" in a.ecommerce) return i.log("[Casa Bergan Extractor] \uD83C\uDFAF Transaction ID encontrado: ".concat(a.ecommerce.transaction_id)), a;
                            i.log("[Casa Bergan Extractor] ❌ Transaction ID n\xe3o encontrado no ecommerce")
                        } else i.log("[Casa Bergan Extractor] ❌ Ecommerce data n\xe3o encontrado no evento purchase")
                }
                return i.log("[Casa Bergan Extractor] ❌ Nenhum evento purchase v\xe1lido encontrado no dataLayer"), null
            }
        }, {
            key: "monitorDataLayerChanges",
            value: function e(e) {
                if (!window.dataLayer) {
                    i.log("[Casa Bergan Extractor] ❌ dataLayer n\xe3o encontrado para monitoramento");
                    return
                }
                i.log("[Casa Bergan Extractor] \uD83D\uDC41️ Iniciando monitoramento de mudan\xe7as no dataLayer...");
                var a = window.dataLayer.push;
                window.dataLayer.push = function(t) {
                    var r = a.call(this, t);
                    return i.log("[Casa Bergan Extractor] \uD83D\uDCEC Novo item adicionado ao dataLayer:", t), "event" in t && t.event === "purchase" && (i.log("[Casa Bergan Extractor] \uD83C\uDFAF Evento purchase detectado em tempo real!"), "ecommerce" in t && t.ecommerce && "transaction_id" in t.ecommerce ? (i.log("[Casa Bergan Extractor] ✅ Purchase v\xe1lido encontrado, executando callback..."), e(t)) : i.log("[Casa Bergan Extractor] ❌ Purchase inv\xe1lido - sem ecommerce ou transaction_id")), r
                }, i.log("[Casa Bergan Extractor] ✅ Monitoramento do dataLayer configurado com sucesso")
            }
        }, {
            key: "convertToLomadeeFormat",
            value: function e(e) {
                var a = e.ecommerce,
                    t = a.transaction_id,
                    r = this.convertItems(a.items),
                    o = this.calculateSubItems(a, r),
                    n = a.value,
                    i = this.buildMetadata(e),
                    c = this.buildCustomer(a);
                return v({
                    orderId: t,
                    items: r,
                    subItems: o,
                    value: Math.floor(n * 100),
                    metadata: i
                }, c && {
                    customer: c
                })
            }
        }, {
            key: "convertItems",
            value: function e(e) {
                var a = this;
                return e.map(function(e, t) {
                    return a.convertItem(e, t)
                })
            }
        }, {
            key: "convertItem",
            value: function e(e, a) {
                var t = [];
                e.item_category && t.push({
                    id: e.item_category,
                    name: e.item_category,
                    metadata: []
                });
                var r = [{
                    key: "brand",
                    value: e.item_brand
                }, {
                    key: "category",
                    value: e.item_category
                }].filter(function(e) {
                    return e.value
                });
                return {
                    id: e.item_id,
                    name: e.item_name,
                    imageUrl: "",
                    price: Math.floor(e.price * 100),
                    listPrice: Math.floor(e.price * 100),
                    quantity: e.quantity,
                    categories: t,
                    metadata: r
                }
            }
        }, {
            key: "calculateSubItems",
            value: function e(e, a) {
                var t = [],
                    r = a.reduce(function(e, a) {
                        return e + a.price * a.quantity
                    }, 0);
                return r > 0 && t.push({
                    key: "Items",
                    value: r
                }), e.shipping > 0 && t.push({
                    key: "Shipping",
                    value: Math.floor(e.shipping * 100)
                }), t
            }
        }, {
            key: "buildCustomer",
            value: function e(e) {
                if (!e.nome && !e.email && !e.phoneNumber) return null;
                var a = {
                    firstName: e.nome || "",
                    lastName: "",
                    email: e.email || "",
                    document: "",
                    phone: e.phoneNumber || "",
                    documentType: "",
                    metadata: []
                };
                return e.cep && a.metadata.push({
                    key: "cep",
                    value: String(e.cep)
                }), a
            }
        }, {
            key: "buildMetadata",
            value: function e(e) {
                var a = [{
                    key: "casa_bergan_transaction_id",
                    value: e.ecommerce.transaction_id
                }, {
                    key: "currency",
                    value: e.ecommerce.currency
                }];
                return e.ecommerce.coupon && a.push({
                    key: "coupon",
                    value: e.ecommerce.coupon
                }), e.ecommerce.cep && a.push({
                    key: "customer_cep",
                    value: String(e.ecommerce.cep)
                }), e.ecommerce.nome && a.push({
                    key: "customer_name",
                    value: e.ecommerce.nome
                }), a.filter(function(e) {
                    return e.value
                })
            }
        }]);
        return e
    }();
    a(B, "CasaBerganExtractor");
    var q = B;
    var H = {
        config: j,
        extractor: new q
    };
    var J = {
        name: "PalacioFerramentas",
        domains: ["palacioferramentas.com.br", "www.palacioferramentas.com.br", "checkout.palacioferramentas.com.br"],
        successRoutes: ["/checkout/onepage/success/", "/success/", "/pedido-finalizado", "/obrigado"],
        waitForDataLayer: true,
        dataLayerEvents: ["purchase", "gtm.orderComplete"],
        extractionMethod: "dataLayer",
        maxWaitTime: 1e4,
        autoExtraction: true
    };
    var K = /*#__PURE__*/ function() {
        function e() {
            n(this, e)
        }
        c(e, [{
            key: "extract",
            value: function e() {
                var e = this;
                return o(function() {
                    var a, t;
                    return x(this, function(r) {
                        switch (r.label) {
                            case 0:
                                i.log("[Palacio Ferramentas Extractor] Iniciando extra\xe7\xe3o de dados...");
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, e.waitForPurchaseEvent()];
                            case 2:
                                a = r.sent();
                                return [2, a ? (i.log("[Palacio Ferramentas Extractor] Dados de purchase encontrados:", a), e.convertToLomadeeFormat(a)) : (i.log("[Palacio Ferramentas Extractor] Nenhum dado de purchase encontrado"), null)];
                            case 3:
                                t = r.sent();
                                return [2, (i.error("[Palacio Ferramentas Extractor] Erro ao extrair dados:", t), null)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "waitForPurchaseEvent",
            value: function e() {
                var e = this;
                return o(function() {
                    return x(this, function(a) {
                        return [2, new Promise(function(a) {
                            var t = setTimeout(function() {
                                    i.log("[Palacio Ferramentas Extractor] Timeout aguardando evento de purchase"), a(null)
                                }, 1e4),
                                r = e.findExistingPurchaseEvent();
                            if (r) {
                                clearTimeout(t), a(r);
                                return
                            }
                            e.monitorDataLayerChanges(function(e) {
                                clearTimeout(t), a(e)
                            })
                        })]
                    })
                })()
            }
        }, {
            key: "findExistingPurchaseEvent",
            value: function e() {
                if (i.log("[Palacio Ferramentas Extractor] \uD83D\uDD0D Procurando evento purchase existente..."), !window.dataLayer || !Array.isArray(window.dataLayer)) return i.log("[Palacio Ferramentas Extractor] ❌ DataLayer n\xe3o existe ou n\xe3o \xe9 array"), null;
                i.log("[Palacio Ferramentas Extractor] \uD83D\uDCCA DataLayer encontrado com ".concat(window.dataLayer.length, " itens")), i.log("[Palacio Ferramentas Extractor] \uD83D\uDCCB \xdaltimos 5 itens do dataLayer:", window.dataLayer.slice(-5));
                for (var e = window.dataLayer.length - 1; e >= 0; e--) {
                    var a = window.dataLayer[e];
                    if (i.log("[Palacio Ferramentas Extractor] \uD83D\uDD0D Verificando item ".concat(e, ":"), a), "event" in a && (a.event === "purchase" || a.event === "gtm.orderComplete")) {
                        if (i.log("[Palacio Ferramentas Extractor] ✅ Evento '".concat(a.event, "' encontrado no item ").concat(e, "!")), "transactionId" in a && "order" in a && a.transactionId && a.order) return i.log("[Palacio Ferramentas Extractor] ✅ Dados completos encontrados - TransactionId: ".concat(a.transactionId)), a;
                        i.log("[Palacio Ferramentas Extractor] ❌ Dados incompletos no evento ".concat(a.event))
                    }
                }
                return i.log("[Palacio Ferramentas Extractor] ❌ Nenhum evento purchase v\xe1lido encontrado no dataLayer"), null
            }
        }, {
            key: "monitorDataLayerChanges",
            value: function e(e) {
                if (!window.dataLayer) {
                    i.log("[Palacio Ferramentas Extractor] ❌ dataLayer n\xe3o encontrado para monitoramento");
                    return
                }
                i.log("[Palacio Ferramentas Extractor] \uD83D\uDC41️ Iniciando monitoramento de mudan\xe7as no dataLayer...");
                var a = window.dataLayer.push;
                window.dataLayer.push = function(t) {
                    var r = a.call(this, t);
                    return i.log("[Palacio Ferramentas Extractor] \uD83D\uDCEC Novo item adicionado ao dataLayer:", t), "event" in t && (t.event === "purchase" || t.event === "gtm.orderComplete") && (i.log("[Palacio Ferramentas Extractor] \uD83C\uDFAF Evento '".concat(t.event, "' detectado em tempo real!")), "transactionId" in t && "order" in t && t.transactionId && t.order ? (i.log("[Palacio Ferramentas Extractor] ✅ Purchase v\xe1lido encontrado, executando callback..."), e(t)) : i.log("[Palacio Ferramentas Extractor] ❌ Purchase inv\xe1lido - sem transactionId ou order")), r
                }, i.log("[Palacio Ferramentas Extractor] ✅ Monitoramento do dataLayer configurado com sucesso")
            }
        }, {
            key: "convertToLomadeeFormat",
            value: function e(e) {
                var a = e.transactionId,
                    t = this.convertItems(e.order),
                    r = this.calculateSubItems(e, t),
                    o = e.transactionTotal,
                    n = this.buildMetadata(e),
                    i = this.buildCustomer(e.order);
                return v({
                    orderId: a,
                    items: t,
                    subItems: r,
                    value: Math.floor(o * 100),
                    metadata: n
                }, i && {
                    customer: i
                })
            }
        }, {
            key: "convertItems",
            value: function e(e) {
                var a = this;
                return e.items.map(function(e, t) {
                    return a.convertItem(e, t)
                })
            }
        }, {
            key: "convertItem",
            value: function e(e, a) {
                var t = [];
                e.categories.forEach(function(a, r) {
                    t.push({
                        id: "".concat(e.sku, "_cat_").concat(r),
                        name: a,
                        metadata: []
                    })
                });
                var r = [{
                    key: "parent_sku",
                    value: e.parent_sku
                }, {
                    key: "parent_name",
                    value: e.parent_name
                }, {
                    key: "product_type",
                    value: e.product_type
                }, {
                    key: "product_id",
                    value: e.product_id
                }, {
                    key: "discount_amount",
                    value: String(e.discount_amount)
                }, {
                    key: "discount_percent",
                    value: String(e.discount_percent)
                }, {
                    key: "tax_amount",
                    value: String(e.tax_amount)
                }, {
                    key: "is_virtual",
                    value: String(e.is_virtual)
                }, {
                    key: "price_incl_tax",
                    value: String(e.price_incl_tax)
                }, {
                    key: "subtotal",
                    value: String(e.subtotal)
                }].filter(function(e) {
                    return e.value
                });
                return {
                    id: e.sku,
                    name: e.name,
                    imageUrl: "",
                    price: Math.floor(e.price * 100),
                    listPrice: Math.floor((e.price + e.discount_amount) * 100),
                    quantity: e.quantity,
                    categories: t,
                    metadata: r
                }
            }
        }, {
            key: "calculateSubItems",
            value: function e(e, a) {
                var t = [];
                return e.transactionSubTotal > 0 && t.push({
                    key: "Items",
                    value: Math.floor(e.transactionSubTotal * 100)
                }), e.transactionShipping > 0 && t.push({
                    key: "Shipping",
                    value: Math.floor(e.transactionShipping * 100)
                }), e.transactionDiscount < 0 && t.push({
                    key: "Discounts",
                    value: Math.floor(Math.abs(e.transactionDiscount) * 100)
                }), t
            }
        }, {
            key: "buildCustomer",
            value: function e(e) {
                return e.email ? {
                    firstName: "",
                    lastName: "",
                    email: e.email,
                    document: "",
                    phone: "",
                    documentType: "",
                    metadata: [{
                        key: "is_guest_checkout",
                        value: String(e.is_guest_checkout)
                    }]
                } : null
            }
        }, {
            key: "buildMetadata",
            value: function e(e) {
                var a = [{
                    key: "palacio_transaction_id",
                    value: e.transactionId
                }, {
                    key: "transaction_affiliation",
                    value: e.transactionAffiliation
                }, {
                    key: "store_name",
                    value: e.order.store_name
                }, {
                    key: "payment_method_title",
                    value: e.order.payment_method.title
                }, {
                    key: "payment_method_code",
                    value: e.order.payment_method.code
                }, {
                    key: "shipping_method_title",
                    value: e.order.shipping_method.title
                }, {
                    key: "shipping_method_code",
                    value: e.order.shipping_method.code
                }, {
                    key: "is_virtual_order",
                    value: String(e.order.is_virtual)
                }, {
                    key: "tax_amount",
                    value: String(e.transactionTax)
                }];
                return e.transactionCouponCode && a.push({
                    key: "coupon_code",
                    value: e.transactionCouponCode
                }, {
                    key: "coupon_name",
                    value: e.order.coupon_name
                }), a.filter(function(e) {
                    return e.value
                })
            }
        }]);
        return e
    }();
    a(K, "PalacioFerramentasExtractor");
    var W = K;
    var Y = {
        config: J,
        extractor: new W
    };
    var Q = /*#__PURE__*/ function() {
        function e() {
            n(this, e)
        }
        c(e, [{
            key: "extract",
            value: function e() {
                var e = this;
                return o(function() {
                    var a, t;
                    return x(this, function(r) {
                        switch (r.label) {
                            case 0:
                                i.log("[Simple Organic Extractor] Iniciando extra\xe7\xe3o de dados...");
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, e.waitForPurchaseEvent()];
                            case 2:
                                a = r.sent();
                                return [2, a ? (i.log("[Simple Organic Extractor] Dados de purchase encontrados:", a), e.convertToLomadeeFormat(a)) : (i.log("[Simple Organic Extractor] Nenhum dado de purchase encontrado"), null)];
                            case 3:
                                t = r.sent();
                                return [2, (i.error("[Simple Organic Extractor] Erro ao extrair dados:", t), null)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "waitForPurchaseEvent",
            value: function e() {
                var e = this;
                return o(function() {
                    return x(this, function(a) {
                        return [2, new Promise(function(a) {
                            var t = setTimeout(function() {
                                    i.log("[Simple Organic Extractor] Timeout aguardando evento de purchase"), a(null)
                                }, 1e4),
                                r = e.findExistingPurchaseEvent();
                            if (r) {
                                clearTimeout(t), a(r);
                                return
                            }
                            e.monitorDataLayerChanges(function(e) {
                                clearTimeout(t), a(e)
                            })
                        })]
                    })
                })()
            }
        }, {
            key: "findExistingPurchaseEvent",
            value: function e() {
                if (!window.dataLayer || !Array.isArray(window.dataLayer)) return null;
                for (var e = window.dataLayer.length - 1; e >= 0; e--) {
                    var a = window.dataLayer[e];
                    if (a.event === "evolvehub.purchase" && a.data) return a.data;
                    if (a.event === "purchase" && (a.transaction_id || a.value)) return {
                        transaction_id: a.transaction_id,
                        value: a.value,
                        currency: a.currency,
                        items: a.items
                    }
                }
                return null
            }
        }, {
            key: "monitorDataLayerChanges",
            value: function e(e) {
                if (!window.dataLayer) {
                    i.log("[Simple Organic Extractor] dataLayer n\xe3o encontrado");
                    return
                }
                var a = window.dataLayer.push;
                window.dataLayer.push = function(t) {
                    var r = a.call(this, t);
                    return t.event === "evolvehub.purchase" && t.data ? e(t.data) : t.event === "purchase" && (t.transaction_id || t.value) && e({
                        transaction_id: t.transaction_id,
                        value: t.value,
                        currency: t.currency,
                        items: t.items
                    }), r
                }
            }
        }, {
            key: "convertToLomadeeFormat",
            value: function e(e) {
                var a = this;
                var t = String(e.transaction_id || e.order_id || Date.now()),
                    r = (e.items || []).map(function(e, t) {
                        return a.convertItem(e, t)
                    }),
                    o = [],
                    n = r.reduce(function(e, a) {
                        return e + a.price * a.quantity
                    }, 0);
                n > 0 && o.push({
                    key: "Items",
                    value: Math.floor(n)
                }), e.shipping && e.shipping > 0 && o.push({
                    key: "Shipping",
                    value: Math.floor(e.shipping)
                });
                var i = [{
                    key: "simple_organic_transaction_id",
                    value: String(e.transaction_id || "")
                }, {
                    key: "simple_organic_order_id",
                    value: String(e.order_id || "")
                }, {
                    key: "simple_organic_evolvehub_id",
                    value: String(e.evolvehub_id || "")
                }];
                return e.discount_code && i.push({
                    key: "discount_code",
                    value: e.discount_code
                }), {
                    orderId: t,
                    items: r,
                    subItems: o,
                    value: Math.floor(e.value || 0),
                    metadata: i
                }
            }
        }, {
            key: "convertItem",
            value: function e(e, a) {
                var t = [];
                e.category && t.push({
                    id: e.category,
                    name: e.category,
                    metadata: []
                });
                var r = [];
                return e.variant && r.push({
                    key: "variant",
                    value: String(e.variant)
                }), e.variant_id && r.push({
                    key: "variant_id",
                    value: String(e.variant_id)
                }), e.product_id && r.push({
                    key: "product_id",
                    value: String(e.product_id)
                }), {
                    id: String(e.id || e.sku || a),
                    name: e.name || e.product_title || "Item ".concat(a + 1),
                    imageUrl: "",
                    price: Math.floor(e.price || 0),
                    listPrice: Math.floor(e.price || 0),
                    quantity: e.quantity || 1,
                    categories: t,
                    metadata: r
                }
            }
        }]);
        return e
    }();
    a(Q, "SimpleOrganicExtractor");
    var X = /*#__PURE__*/ function() {
        function e() {
            n(this, e)
        }
        c(e, [{
            key: "extract",
            value: function e() {
                var e = this;
                return o(function() {
                    var a, t;
                    return x(this, function(r) {
                        switch (r.label) {
                            case 0:
                                i.log("[Artex Extractor] Iniciando extra\xe7\xe3o de dados...");
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, e.waitForPurchaseEvent()];
                            case 2:
                                a = r.sent();
                                return [2, a ? (i.log("[Artex Extractor] Dados de purchase encontrados:", a), e.convertToLomadeeFormat(a)) : (i.log("[Artex Extractor] Nenhum dado de purchase encontrado"), null)];
                            case 3:
                                t = r.sent();
                                return [2, (i.error("[Artex Extractor] Erro ao extrair dados:", t), null)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "waitForPurchaseEvent",
            value: function e() {
                var e = this;
                return o(function() {
                    return x(this, function(a) {
                        return [2, new Promise(function(a) {
                            var t = setTimeout(function() {
                                    i.log("[Artex Extractor] Timeout aguardando evento de purchase"), a(null)
                                }, 1e4),
                                r = e.findExistingPurchaseEvent();
                            if (r) {
                                clearTimeout(t), a(r);
                                return
                            }
                            e.monitorDataLayerChanges(function(e) {
                                clearTimeout(t), a(e)
                            })
                        })]
                    })
                })()
            }
        }, {
            key: "findExistingPurchaseEvent",
            value: function e() {
                if (!window.dataLayer || !Array.isArray(window.dataLayer)) return null;
                for (var e = window.dataLayer.length - 1; e >= 0; e--) {
                    var a = window.dataLayer[e];
                    if (a.event === "purchase" && (a.order || a.ecommerce)) return a
                }
                return null
            }
        }, {
            key: "monitorDataLayerChanges",
            value: function e(e) {
                if (!window.dataLayer) {
                    i.log("[Artex Extractor] dataLayer n\xe3o encontrado");
                    return
                }
                var a = window.dataLayer.push;
                window.dataLayer.push = function(t) {
                    var r = a.call(this, t);
                    return t.event === "purchase" && (t.order || t.ecommerce) && e(t), r
                }
            }
        }, {
            key: "convertToLomadeeFormat",
            value: function e(e) {
                var a = this.getOrderId(e),
                    t = this.convertItems(e),
                    r = this.calculateSubItems(e, t),
                    o = this.getTotalValue(e),
                    n = this.buildMetadata(e);
                return {
                    orderId: a,
                    items: t,
                    subItems: r,
                    value: Math.floor(o),
                    metadata: n
                }
            }
        }, {
            key: "getOrderId",
            value: function e(e) {
                var a, t, r, o, n;
                return ((a = e.order) === null || a === void 0 ? void 0 : a.displayCode) ? e.order.displayCode : ((o = e.ecommerce) === null || o === void 0 ? void 0 : (r = o.purchase) === null || r === void 0 ? void 0 : (t = r.actionField) === null || t === void 0 ? void 0 : t.id) ? e.ecommerce.purchase.actionField.id : ((n = e.order) === null || n === void 0 ? void 0 : n.id) ? e.order.id : String(Date.now())
            }
        }, {
            key: "convertItems",
            value: function e(e) {
                var a = this;
                var t, r, o;
                var n = [];
                return ((r = e.ecommerce) === null || r === void 0 ? void 0 : (t = r.purchase) === null || t === void 0 ? void 0 : t.products) ? n = e.ecommerce.purchase.products.map(function(e, t) {
                    return a.convertEcommerceItem(e, t)
                }) : ((o = e.order) === null || o === void 0 ? void 0 : o.products) && (n = e.order.products.map(function(e, t) {
                    return a.convertOrderItem(e, t)
                })), n
            }
        }, {
            key: "convertEcommerceItem",
            value: function e(e, a) {
                var t = [];
                e.category && t.push({
                    id: e.category,
                    name: e.category,
                    metadata: []
                }), e.macroCategory && e.macroCategory !== e.category && t.push({
                    id: e.macroCategory,
                    name: e.macroCategory,
                    metadata: []
                });
                var r = [{
                    key: "brand",
                    value: e.brand || ""
                }, {
                    key: "segment",
                    value: e.segment || ""
                }, {
                    key: "color",
                    value: e.color || ""
                }, {
                    key: "size",
                    value: e.size || ""
                }, {
                    key: "variant",
                    value: e.variant || ""
                }, {
                    key: "group_key",
                    value: e.groupKey || ""
                }].filter(function(e) {
                    return e.value
                });
                return {
                    id: e.sku,
                    name: e.name || e.title || "Item ".concat(a + 1),
                    imageUrl: e.photo || "",
                    price: Math.floor((e.price || 0) * 100),
                    listPrice: Math.floor((e.priceFrom || e.price || 0) * 100),
                    quantity: e.quantity || 1,
                    categories: t,
                    metadata: r
                }
            }
        }, {
            key: "convertOrderItem",
            value: function e(e, a) {
                return {
                    id: e.sku,
                    name: "Item ".concat(a + 1),
                    imageUrl: "",
                    price: Math.floor((e.price || 0) * 100),
                    listPrice: Math.floor((e.price || 0) * 100),
                    quantity: e.quantity || 1,
                    categories: [],
                    metadata: [{
                        key: "sku",
                        value: e.sku
                    }]
                }
            }
        }, {
            key: "calculateSubItems",
            value: function e(e, a) {
                var t, r, o, n, i, c;
                var l = [],
                    s = a.reduce(function(e, a) {
                        return e + a.price * a.quantity
                    }, 0);
                s > 0 && l.push({
                    key: "Items",
                    value: s
                });
                var u = (o = e.ecommerce) === null || o === void 0 ? void 0 : (r = o.purchase) === null || r === void 0 ? void 0 : (t = r.actionField) === null || t === void 0 ? void 0 : t.shipping;
                u && u > 0 && l.push({
                    key: "Shipping",
                    value: Math.floor(u * 100)
                });
                var d = (c = e.ecommerce) === null || c === void 0 ? void 0 : (i = c.purchase) === null || i === void 0 ? void 0 : (n = i.actionField) === null || n === void 0 ? void 0 : n.discounts;
                return d && d > 0 && l.push({
                    key: "Discounts",
                    value: Math.floor(d * 100)
                }), l
            }
        }, {
            key: "getTotalValue",
            value: function e(e) {
                var a, t, r, o;
                return ((r = e.ecommerce) === null || r === void 0 ? void 0 : (t = r.purchase) === null || t === void 0 ? void 0 : (a = t.actionField) === null || a === void 0 ? void 0 : a.revenue) ? e.ecommerce.purchase.actionField.revenue * 100 : ((o = e.order) === null || o === void 0 ? void 0 : o.total) ? e.order.total : 0
            }
        }, {
            key: "buildMetadata",
            value: function e(e) {
                var a, t, r, o, n, i;
                var c = [{
                    key: "artex_order_id",
                    value: ((a = e.order) === null || a === void 0 ? void 0 : a.id) || ""
                }, {
                    key: "artex_display_code",
                    value: ((t = e.order) === null || t === void 0 ? void 0 : t.displayCode) || ""
                }, {
                    key: "artex_order_date",
                    value: ((r = e.order) === null || r === void 0 ? void 0 : r.orderDate) || ""
                }];
                if ((n = e.ecommerce) === null || n === void 0 ? void 0 : (o = n.purchase) === null || o === void 0 ? void 0 : o.actionField) {
                    var l = e.ecommerce.purchase.actionField;
                    c.push({
                        key: "payment_method",
                        value: l.paymentMethod || ""
                    }, {
                        key: "affiliation",
                        value: l.affiliation || ""
                    }, {
                        key: "coupon",
                        value: l.coupon || ""
                    }, {
                        key: "coupon_code",
                        value: l.couponCode || ""
                    })
                }
                return ((i = e.automl) === null || i === void 0 ? void 0 : i.productEventDetail) && c.push({
                    key: "artex_cart_id",
                    value: e.automl.productEventDetail.cartId || ""
                }), c.filter(function(e) {
                    return e.value
                })
            }
        }]);
        return e
    }();
    a(X, "ArtexExtractor");
    var $ = /*#__PURE__*/ function() {
        function e() {
            n(this, e)
        }
        c(e, [{
            key: "extract",
            value: function e() {
                var e = this;
                return o(function() {
                    var a, t;
                    return x(this, function(r) {
                        switch (r.label) {
                            case 0:
                                i.log("[Sieno Extractor] Iniciando extra\xe7\xe3o de dados...");
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, e.waitForPurchaseEvents()];
                            case 2:
                                a = r.sent();
                                return [2, a ? (i.log("[Sieno Extractor] Dados de purchase encontrados:", a), e.convertToLomadeeFormat(a)) : (i.log("[Sieno Extractor] Nenhum dado de purchase encontrado"), null)];
                            case 3:
                                t = r.sent();
                                return [2, (i.error("[Sieno Extractor] Erro ao extrair dados:", t), null)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "waitForPurchaseEvents",
            value: function e() {
                var e = this;
                return o(function() {
                    return x(this, function(a) {
                        return [2, new Promise(function(a) {
                            var t = setTimeout(function() {
                                    i.log("[Sieno Extractor] Timeout aguardando evento de purchase"), a(null)
                                }, 1e4),
                                r = e.findExistingPurchaseEvents();
                            if (r.purchase || r.purchaseFG) {
                                clearTimeout(t), a(r);
                                return
                            }
                            e.monitorDataLayerChanges(function(e) {
                                clearTimeout(t), a(e)
                            })
                        })]
                    })
                })()
            }
        }, {
            key: "findExistingPurchaseEvents",
            value: function e() {
                i.log("[Sieno Extractor] \uD83D\uDD0D Procurando eventos purchase existentes...");
                var e = {};
                if (!window.dataLayer || !Array.isArray(window.dataLayer)) return i.log("[Sieno Extractor] ❌ DataLayer n\xe3o existe ou n\xe3o \xe9 array"), e;
                i.log("[Sieno Extractor] \uD83D\uDCCA DataLayer encontrado com ".concat(window.dataLayer.length, " itens")), i.log("[Sieno Extractor] \uD83D\uDCCB \xdaltimos 5 itens do dataLayer:", window.dataLayer.slice(-5));
                for (var a = window.dataLayer.length - 1; a >= 0; a--) {
                    var t = window.dataLayer[a];
                    i.log("[Sieno Extractor] \uD83D\uDD0D Verificando item ".concat(a, ":"), t), "event" in t && (t.event === "purchase" && "transaction_id" in t && (i.log("[Sieno Extractor] ✅ Evento 'purchase' encontrado no item ".concat(a, "!")), e.purchase = t), t.event === "purchaseFG" && "data" in t && (i.log("[Sieno Extractor] ✅ Evento 'purchaseFG' encontrado no item ".concat(a, "!")), e.purchaseFG = t)), "items" in t && "products" in t && "transactionId" in t && (i.log("[Sieno Extractor] ✅ Dados detalhados encontrados no item ".concat(a, "!")), e.detailed = t)
                }
                return i.log("[Sieno Extractor] \uD83D\uDCCB Resultado da busca:", {
                    hasPurchase: !!e.purchase,
                    hasPurchaseFG: !!e.purchaseFG,
                    hasDetailed: !!e.detailed
                }), e
            }
        }, {
            key: "monitorDataLayerChanges",
            value: function e(e) {
                if (!window.dataLayer) {
                    i.log("[Sieno Extractor] dataLayer n\xe3o encontrado");
                    return
                }
                var a = window.dataLayer.push,
                    t = {};
                window.dataLayer.push = function(r) {
                    var o = a.call(this, r);
                    return "event" in r && (r.event === "purchase" && "transaction_id" in r && (t.purchase = r), r.event === "purchaseFG" && "data" in r && (t.purchaseFG = r)), (t.purchase || t.purchaseFG) && e(t), o
                }
            }
        }, {
            key: "convertToLomadeeFormat",
            value: function e(e) {
                var a = this.getOrderId(e),
                    t = this.convertItems(e),
                    r = this.calculateSubItems(e, t),
                    o = this.getTotalValue(e),
                    n = this.buildMetadata(e);
                return {
                    orderId: a,
                    items: t,
                    subItems: r,
                    value: Math.floor(o * 100),
                    metadata: n
                }
            }
        }, {
            key: "getOrderId",
            value: function e(e) {
                var a, t, r, o;
                return ((t = e.purchaseFG) === null || t === void 0 ? void 0 : (a = t.data) === null || a === void 0 ? void 0 : a.transaction_id) ? e.purchaseFG.data.transaction_id : ((r = e.purchase) === null || r === void 0 ? void 0 : r.transaction_id) ? e.purchase.transaction_id : ((o = e.detailed) === null || o === void 0 ? void 0 : o.transactionId) ? e.detailed.transactionId : String(Date.now())
            }
        }, {
            key: "convertItems",
            value: function e(e) {
                var a = this;
                var t, r;
                var o = [];
                return ((t = e.detailed) === null || t === void 0 ? void 0 : t.items) && e.detailed.items.length > 0 ? o = e.detailed.items.map(function(e, t) {
                    return a.convertDetailedItem(e, t)
                }) : ((r = e.detailed) === null || r === void 0 ? void 0 : r.products) && e.detailed.products.length > 0 && (o = e.detailed.products.map(function(e, t) {
                    return a.convertProductItem(e, t)
                })), o
            }
        }, {
            key: "convertDetailedItem",
            value: function e(e, a) {
                var t = [];
                e.item_category && t.push({
                    id: e.item_category,
                    name: e.item_category,
                    metadata: []
                }), e.item_category2 && t.push({
                    id: e.item_category2,
                    name: e.item_category2,
                    metadata: []
                });
                var r = [{
                    key: "brand",
                    value: e.item_brand
                }, {
                    key: "variant",
                    value: e.item_variant || ""
                }, {
                    key: "affiliation",
                    value: e.affiliation
                }, {
                    key: "currency",
                    value: e.currency
                }, {
                    key: "discount",
                    value: String(e.discount)
                }].filter(function(e) {
                    return e.value
                });
                return {
                    id: e.item_id,
                    name: e.item_name,
                    imageUrl: "",
                    price: Math.floor(e.price * 100),
                    listPrice: Math.floor((e.price + e.discount) * 100),
                    quantity: e.quantity,
                    categories: t,
                    metadata: r
                }
            }
        }, {
            key: "convertProductItem",
            value: function e(e, a) {
                var t = [{
                    id: e.productCategory,
                    name: e.productCategory,
                    metadata: []
                }];
                e.productSubCategory && t.push({
                    id: e.productSubCategory,
                    name: e.productSubCategory,
                    metadata: []
                });
                var r = [{
                    key: "brand",
                    value: e.productBrand
                }, {
                    key: "sellerId",
                    value: e.productSeller
                }, {
                    key: "type",
                    value: e.productType
                }, {
                    key: "description",
                    value: e.productDescription
                }, {
                    key: "discount",
                    value: String(e.productPriceDiscount)
                }].filter(function(e) {
                    return e.value
                });
                return {
                    id: e.productSku,
                    name: e.productName,
                    imageUrl: "",
                    price: Math.floor(e.productPrice * 100),
                    listPrice: Math.floor((e.productPrice + e.productPriceDiscount) * 100),
                    quantity: parseInt(e.productQuantity) || 1,
                    categories: t,
                    metadata: r
                }
            }
        }, {
            key: "calculateSubItems",
            value: function e(e, a) {
                var t = [],
                    r = a.reduce(function(e, a) {
                        return e + a.price * a.quantity
                    }, 0);
                r > 0 && t.push({
                    key: "Items",
                    value: r
                });
                var o = this.getShippingValue(e);
                o > 0 && t.push({
                    key: "Shipping",
                    value: Math.floor(o * 100)
                });
                var n = this.getDiscountValue(e);
                return n > 0 && t.push({
                    key: "Discounts",
                    value: Math.floor(n * 100)
                }), t
            }
        }, {
            key: "getTotalValue",
            value: function e(e) {
                var a, t, r, o;
                return ((t = e.purchaseFG) === null || t === void 0 ? void 0 : (a = t.data) === null || a === void 0 ? void 0 : a.value) ? e.purchaseFG.data.value : ((r = e.purchase) === null || r === void 0 ? void 0 : r.value) ? e.purchase.value : ((o = e.detailed) === null || o === void 0 ? void 0 : o.transactionTotal) ? e.detailed.transactionTotal : 0
            }
        }, {
            key: "getShippingValue",
            value: function e(e) {
                var a, t, r;
                return ((t = e.purchaseFG) === null || t === void 0 ? void 0 : (a = t.data) === null || a === void 0 ? void 0 : a.shipping) ? e.purchaseFG.data.shipping : ((r = e.detailed) === null || r === void 0 ? void 0 : r.transactionShipping) ? typeof e.detailed.transactionShipping == "string" ? parseFloat(e.detailed.transactionShipping) || 0 : e.detailed.transactionShipping : 0
            }
        }, {
            key: "getDiscountValue",
            value: function e(e) {
                var a, t, r;
                return ((t = e.purchaseFG) === null || t === void 0 ? void 0 : (a = t.data) === null || a === void 0 ? void 0 : a.discount) ? e.purchaseFG.data.discount : ((r = e.detailed) === null || r === void 0 ? void 0 : r.transactionDiscount) && parseFloat(e.detailed.transactionDiscount) || 0
            }
        }, {
            key: "buildMetadata",
            value: function e(e) {
                var a, t, r, o;
                var n = [];
                if (((a = e.detailed) === null || a === void 0 ? void 0 : a.transactionId) && n.push({
                        key: "sieno_transaction_id",
                        value: e.detailed.transactionId
                    }), ((t = e.detailed) === null || t === void 0 ? void 0 : t.transactionAffiliation) && n.push({
                        key: "affiliation",
                        value: e.detailed.transactionAffiliation
                    }), (r = e.purchaseFG) === null || r === void 0 ? void 0 : r.data) {
                    var i = e.purchaseFG.data;
                    n.push({
                        key: "payment_type",
                        value: i.payment_type
                    }, {
                        key: "shipping_tier",
                        value: i.shipping_tier
                    }, {
                        key: "customer_email",
                        value: i.email
                    }, {
                        key: "customer_phone",
                        value: i.phone
                    }, {
                        key: "customer_cep",
                        value: i.cep
                    }, {
                        key: "customer_city",
                        value: i.city
                    }, {
                        key: "customer_state",
                        value: i.state
                    }, {
                        key: "customer_name",
                        value: i.name
                    }, {
                        key: "customer_gender",
                        value: i.gender
                    })
                }
                if ((o = e.detailed) === null || o === void 0 ? void 0 : o.visitorDemographicInfo) {
                    var c = e.detailed.visitorDemographicInfo;
                    n.push({
                        key: "customer_age",
                        value: c.age
                    }, {
                        key: "customer_street",
                        value: c.streetCustomer
                    }, {
                        key: "customer_country",
                        value: c.countryCustomer
                    })
                }
                return n.filter(function(e) {
                    return e.value
                })
            }
        }]);
        return e
    }();
    a($, "SienoExtractor");

    function Z(e) {
        if (e == null) return 0;
        var a = typeof e == "string" ? parseFloat(e) : e;
        return Number.isNaN(a) ? 0 : Math.floor(a * 100)
    }
    a(Z, "toCents");
    var ee = /*#__PURE__*/ function() {
        function e() {
            n(this, e)
        }
        c(e, [{
            key: "extract",
            value: function e() {
                var e = this;
                return o(function() {
                    var a, t;
                    return x(this, function(r) {
                        switch (r.label) {
                            case 0:
                                i.log("[ASUS Extractor] Iniciando extra\xe7\xe3o de dados...");
                                r.label = 1;
                            case 1:
                                r.trys.push([1, 3, , 4]);
                                return [4, e.waitForPurchaseEvent()];
                            case 2:
                                a = r.sent();
                                return [2, a ? (i.log("[ASUS Extractor] Dados de purchase encontrados:", a), e.convertToLomadeeFormat(a)) : (i.log("[ASUS Extractor] Nenhum dado de purchase encontrado"), null)];
                            case 3:
                                t = r.sent();
                                return [2, (i.error("[ASUS Extractor] Erro ao extrair dados:", t), null)];
                            case 4:
                                return [2]
                        }
                    })
                })()
            }
        }, {
            key: "waitForPurchaseEvent",
            value: function e() {
                var e = this;
                return o(function() {
                    return x(this, function(a) {
                        return [2, new Promise(function(a) {
                            var t = setTimeout(function() {
                                    i.log("[ASUS Extractor] Timeout aguardando evento de purchase"), a(null)
                                }, 1e4),
                                r = e.findExistingPurchaseEvent();
                            if (r) {
                                clearTimeout(t), a(r);
                                return
                            }
                            e.monitorDataLayerChanges(function(e) {
                                clearTimeout(t), a(e)
                            })
                        })]
                    })
                })()
            }
        }, {
            key: "findExistingPurchaseEvent",
            value: function e() {
                if (!window.dataLayer || !Array.isArray(window.dataLayer)) return null;
                for (var e = window.dataLayer.length - 1; e >= 0; e--) {
                    var a = window.dataLayer[e];
                    if (a && "event" in a && a.event === "purchase") {
                        var t, r, o;
                        var n = a;
                        if ((o = n.ecommerce) === null || o === void 0 ? void 0 : (r = o.purchase) === null || r === void 0 ? void 0 : (t = r.actionField) === null || t === void 0 ? void 0 : t.id) return n
                    }
                }
                return null
            }
        }, {
            key: "monitorDataLayerChanges",
            value: function e(e) {
                if (!window.dataLayer) {
                    i.log("[ASUS Extractor] dataLayer n\xe3o encontrado");
                    return
                }
                var a = window.dataLayer.push;
                window.dataLayer.push = function(t) {
                    var r = a.call(this, t);
                    if (t && "event" in t && t.event === "purchase") {
                        var o, n, i;
                        var c = t;
                        ((i = c.ecommerce) === null || i === void 0 ? void 0 : (n = i.purchase) === null || n === void 0 ? void 0 : (o = n.actionField) === null || o === void 0 ? void 0 : o.id) && e(c)
                    }
                    return r
                }
            }
        }, {
            key: "convertToLomadeeFormat",
            value: function e(e) {
                var a = e.ecommerce.purchase,
                    t = a.actionField.id,
                    r = this.convertItems(a.products),
                    o = this.calculateSubItems(a, r),
                    n = Z(a.actionField.revenue || 0) / 100,
                    i = this.buildMetadata(e);
                return {
                    orderId: t,
                    items: r,
                    subItems: o,
                    value: Math.floor(n * 100),
                    metadata: i
                }
            }
        }, {
            key: "convertItems",
            value: function e(e) {
                var a = this;
                return e.map(function(e, t) {
                    return a.convertItem(e, t)
                })
            }
        }, {
            key: "convertItem",
            value: function e(e, a) {
                var t = [];
                e.category && String(e.category).split("/").filter(Boolean).forEach(function(a, r) {
                    t.push({
                        id: "".concat(e.id, "_cat_").concat(r),
                        name: a,
                        metadata: []
                    })
                });
                var r = [{
                    key: "brand",
                    value: e.brand || ""
                }, {
                    key: "dimension10",
                    value: e.dimension10 || ""
                }].filter(function(e) {
                    return e.value
                });
                return {
                    id: e.id,
                    name: e.name || "Item ".concat(a + 1),
                    imageUrl: "",
                    price: Z(e.price),
                    listPrice: Z(e.price),
                    quantity: Math.floor(parseFloat(e.quantity || "1")) || 1,
                    categories: t,
                    metadata: r
                }
            }
        }, {
            key: "calculateSubItems",
            value: function e(e, a) {
                var t = [],
                    r = a.reduce(function(e, a) {
                        return e + a.price * a.quantity
                    }, 0);
                r > 0 && t.push({
                    key: "Items",
                    value: r
                });
                var o = Z(e.actionField.shipping);
                o > 0 && t.push({
                    key: "Shipping",
                    value: o
                });
                var n = Z(e.actionField.tax);
                return n > 0 && t.push({
                    key: "Tax",
                    value: n
                }), t
            }
        }, {
            key: "buildMetadata",
            value: function e(e) {
                var a, t;
                var r = [];
                if ((t = e.ecommerce) === null || t === void 0 ? void 0 : (a = t.purchase) === null || a === void 0 ? void 0 : a.actionField) {
                    var o = e.ecommerce.purchase.actionField;
                    r.push({
                        key: "affiliation",
                        value: o.affiliation || ""
                    }, {
                        key: "coupon",
                        value: o.coupon || ""
                    }, {
                        key: "revenue",
                        value: o.revenue || ""
                    }, {
                        key: "shipping",
                        value: o.shipping || ""
                    }, {
                        key: "tax",
                        value: o.tax || ""
                    })
                }
                return r.filter(function(e) {
                    return e.value
                })
            }
        }]);
        return e
    }();
    a(ee, "AsusExtractor");
    var ea = [M, V, H, Y],
        et = /*#__PURE__*/ function() {
            function e() {
                n(this, e);
                this.clients = ea
            }
            c(e, [{
                key: "detect",
                value: function e(e) {
                    var a = this;
                    i.log("[Client Registry] Detectando cliente para dom\xednio: ".concat(e));
                    var t = this.clients.find(function(t) {
                        return t.config.domains.some(function(t) {
                            return a.isDomainMatch(e, t)
                        })
                    });
                    return t ? (i.log("[Client Registry] Cliente detectado: ".concat(t.config.name)), t) : (i.log("[Client Registry] Nenhum cliente detectado para o dom\xednio: ".concat(e)), null)
                }
            }, {
                key: "isSuccessRoute",
                value: function e(e, a) {
                    var t = window.location.href,
                        r = window.location.hash,
                        o = a + r;
                    return i.log('[Client Registry] Verificando rota de sucesso - Path: "'.concat(a, '" | Hash: "').concat(r, '" | PathWithHash: "').concat(o, '" | URL: "').concat(t, '"')), e.successRoutes.some(function(e) {
                        var n = false;
                        if (e.includes("#")) {
                            var c = o.includes(e),
                                l = t.includes(e);
                            n = c || l, i.log('[Client Registry] Rota com hash "'.concat(e, '": pathWithHash=').concat(c, ", url=").concat(l, " → ").concat(n ? "✅" : "❌"))
                        } else if (e.startsWith("#")) {
                            var s = r.includes(e);
                            n = s, i.log('[Client Registry] Rota de hash "'.concat(e, '": hash=').concat(s, " → ").concat(n ? "✅" : "❌"))
                        } else {
                            var u = a.includes(e),
                                d = t.includes(e);
                            n = u || d, i.log('[Client Registry] Rota normal "'.concat(e, '": pathname=').concat(u, ", url=").concat(d, " → ").concat(n ? "✅" : "❌"))
                        }
                        return n
                    })
                }
            }, {
                key: "registerClient",
                value: function e(e) {
                    this.clients.push(e), i.log("[Client Registry] Cliente registrado: ".concat(e.config.name))
                }
            }, {
                key: "getAllClients",
                value: function e() {
                    return p(this.clients)
                }
            }, {
                key: "isDomainMatch",
                value: function e(e, a) {
                    if (i.log('[Client Registry] Verificando match: "'.concat(e, '" vs "').concat(a, '"')), e === a) return i.log("[Client Registry] ✅ Match exato encontrado"), true;
                    if (e === "www.".concat(a)) return i.log("[Client Registry] ✅ Match com prefixo www encontrado"), true;
                    if (a.startsWith("checkout.") || a.startsWith("www.") || a.includes("checkout")) {
                        var t = e === a;
                        return i.log("[Client Registry] ".concat(t ? "✅" : "❌", " Match de subdom\xednio espec\xedfico: ").concat(t)), t
                    }
                    return i.log("[Client Registry] ❌ Nenhum match encontrado"), false
                }
            }], [{
                key: "getInstance",
                value: function a() {
                    return e.instance || (e.instance = new e), e.instance
                }
            }]);
            return e
        }();
    a(et, "ClientRegistry");
    var er = et,
        eo = er.getInstance();
    var en = ["0be8654f-50a4-4b87-9a2f-21d6d1d32d6c"],
        ei = {
            "06442559-4031-4a43-a3c6-a6ccefe3a39f": "https://cdn.r-mkt.com/reloope/biobran.com.br/shop-172-loader.js"
        },
        ec = /*#__PURE__*/ function() {
            function e() {
                var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    enableTimeline: true
                };
                n(this, e);
                this.tracker = I();
                this.processedOrders = new Set;
                this.isProcessing = false;
                this.pageViewSent = false;
                this.lastPageViewUrl = "";
                this.blockedStatusCache = new Map;
                this.isAutoModeEnabled = false;
                this.urlChangeListenerAdded = false;
                this.externalScriptsInjected = new Set;
                if (this.config = a, this.analytics = D({
                        tracker: this.tracker,
                        enableTimeline: false
                    }), e.initialized) {
                    i.warn("[Lomadee Global Pixel] Setup j\xe1 executado, ignorando...");
                    return
                }
                e.initialized = true, i.log("[Lomadee Global Pixel] Configurando observadores de URL..."), this.setupUrlObservers(), i.log("[Lomadee Global Pixel] Configurando analytics tracking..."), this.setupAnalyticsTracking(), this.detectAndSetupClient(), this.checkAndInjectOrganizationScripts()
            }
            c(e, [{
                key: "checkAndInjectOrganizationScripts",
                value: function e() {
                    try {
                        var e = this.tracker.getTrackerData();
                        if (!(e === null || e === void 0 ? void 0 : e.utm_campaign)) {
                            i.log("[Lomadee Global Pixel] utm_campaign n\xe3o encontrado - verifica\xe7\xe3o de scripts externos ignorada");
                            return
                        }
                        var a = f(e.utm_campaign.split("_"), 2),
                            t = a[0],
                            r = a[1];
                        if (!r) {
                            i.log("[Lomadee Global Pixel] organizationId n\xe3o encontrado no utm_campaign");
                            return
                        }
                        i.log("[Lomadee Global Pixel] \uD83D\uDD0D Verificando scripts externos para organiza\xe7\xe3o: ".concat(r));
                        var o = ei[r];
                        o ? (i.log("[Lomadee Global Pixel] ✅ Script externo encontrado para organiza\xe7\xe3o ".concat(r)), this.injectExternalScript(o, r)) : i.log("[Lomadee Global Pixel] ℹ️ Nenhum script externo configurado para marca: ".concat(r))
                    } catch (e) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao verificar scripts externos:", e)
                    }
                }
            }, {
                key: "injectExternalScript",
                value: function e(e, a) {
                    if (this.externalScriptsInjected.has(e)) {
                        i.log("[Lomadee Global Pixel] \uD83D\uDEAB Script j\xe1 foi injetado anteriormente: ".concat(e));
                        return
                    }
                    try {
                        i.log("[Lomadee Global Pixel] \uD83D\uDE80 Injetando script externo para organiza\xe7\xe3o ".concat(a, ": ").concat(e));
                        var t = document.createElement("script");
                        t.async = !0, t.src = e, t.setAttribute("data-lomadee-organization", a), t.onload = function() {
                            i.log("[Lomadee Global Pixel] ✅ Script externo carregado com sucesso: ".concat(e))
                        }, t.onerror = function() {
                            i.error("[Lomadee Global Pixel] ❌ Erro ao carregar script externo: ".concat(e))
                        }, document.head.appendChild(t), this.externalScriptsInjected.add(e), i.log("[Lomadee Global Pixel] \uD83D\uDCDD Script adicionado ao DOM: ".concat(e))
                    } catch (e) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao injetar script externo:", e)
                    }
                }
            }, {
                key: "sendPageViewOnce",
                value: function e(e) {
                    var a = this;
                    return o(function() {
                        var t, r, o, n, c, l, s, u, d;
                        return x(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    t = window.location.href;
                                    if (a.lastPageViewUrl !== t && (i.log('[Lomadee Global Pixel] \uD83D\uDD04 URL mudou (de "'.concat(a.lastPageViewUrl, '" para "').concat(t, '") - resetando controle de page view')), a.pageViewSent = false), a.pageViewSent && a.lastPageViewUrl === t) {
                                        i.log('[Lomadee Global Pixel] \uD83D\uDEAB Page view j\xe1 foi enviado para esta URL, ignorando trigger duplicado: "'.concat(e, '" | URL: "').concat(t, '"'));
                                        return [2]
                                    }
                                    if (!a.tracker.hasValidUTMsForAnalytics()) {
                                        i.log('[Lomadee Global Pixel] \uD83D\uDEAB UTMs inv\xe1lidas - page view n\xe3o enviado para trigger: "'.concat(e, '"'));
                                        return [2]
                                    }
                                    r = a.tracker.getTrackerData();
                                    if (!(r === null || r === void 0 ? void 0 : r.utm_campaign)) return [3, 3];
                                    c = f((r === null || r === void 0 ? void 0 : (o = r.utm_campaign) === null || o === void 0 ? void 0 : o.split("_")) || [], 3), l = c[0], s = c[1], u = c[2];
                                    d = l && u;
                                    if (!d) return [3, 2];
                                    i.log("[Lomadee Global Pixel] \uD83D\uDD0D Verificando bloqueio antes de analytics: affiliateId=".concat(l, ", orgId=").concat(s, ", urlCode=").concat(u));
                                    return [4, a.checkBlockedStatus(u, l, s)];
                                case 1:
                                    d = (n = m.sent()) === null || n === void 0 ? void 0 : n.disableRedirect;
                                    m.label = 2;
                                case 2:
                                    if (d) {
                                        i.log('[Lomadee Global Pixel] \uD83D\uDEAB Analytics bloqueado (disableRedirect=true) para trigger: "'.concat(e, '"'));
                                        return [2]
                                    }
                                    m.label = 3;
                                case 3:
                                    i.log('[Lomadee Global Pixel] ✅ Enviando page view \xfanico para trigger: "'.concat(e, '" | URL: "').concat(t, '"')), a.analytics.sendPageView(e), a.pageViewSent = true, a.lastPageViewUrl = t;
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "setupAnalyticsTracking",
                value: function e() {
                    var e = this;
                    if (document.readyState === "loading") {
                        var t = this;
                        var r = a( /*#__PURE__*/ o(function() {
                            return x(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        i.log("[Lomadee Global Pixel] DOMContentLoaded - tentando enviar page view");
                                        return [4, t.sendPageViewOnce("dom_content_loaded")];
                                    case 1:
                                        e.sent(), document.removeEventListener("DOMContentLoaded", r);
                                        return [2]
                                }
                            })
                        }), "handleDOMLoaded");
                        document.addEventListener("DOMContentLoaded", r, {
                            once: true
                        })
                    } else o(function() {
                        return x(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    i.log("[Lomadee Global Pixel] P\xe1gina j\xe1 carregada - tentando enviar page view");
                                    return [4, e.sendPageViewOnce("page_already_loaded")];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })()
                }
            }, {
                key: "setupUrlObservers",
                value: function e() {
                    var e = this;
                    return o(function() {
                        return x(this, function(a) {
                            i.log("[Lomadee Global Pixel] Registrando eventos de navega\xe7\xe3o..."), window.addEventListener("hashchange", function() {
                                return e.handleUrlChange()
                            }), window.addEventListener("popstate", function() {
                                return e.handleUrlChange()
                            });
                            return [2]
                        })
                    })()
                }
            }, {
                key: "handleUrlChange",
                value: function e() {
                    var e = this;
                    return o(function() {
                        return x(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    i.log("[Lomadee Global Pixel] URL mudou - tentando enviar page view");
                                    try {
                                        P().recordUrlChange()
                                    } catch (e) {
                                        i.error("[Lomadee Global Pixel] Erro ao registrar mudan\xe7a de URL na timeline:", e)
                                    }
                                    return [4, e.sendPageViewOnce("url_change")];
                                case 1:
                                    a.sent();
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "collectCookies",
                value: function e() {
                    return document.cookie
                }
            }, {
                key: "collectHeaders",
                value: function e() {
                    return ["user-agent=".concat(navigator.userAgent), "accept-language=".concat(navigator.language), "referer=".concat(document.referrer)].join("; ")
                }
            }, {
                key: "collectQueryString",
                value: function e() {
                    return window.location.search.slice(1)
                }
            }, {
                key: "checkBlockedStatus",
                value: function e(e, a, t) {
                    var r = this;
                    return o(function() {
                        var o, n, c, l, s, u, d, m, h, f, p;
                        return x(this, function(y) {
                            switch (y.label) {
                                case 0:
                                    if (t && en.includes(t)) return [2, (i.log("[Lomadee Global Pixel] \uD83D\uDD13 Bypass ativado para organiza\xe7\xe3o ".concat(t, " - valida\xe7\xe3o ignorada")), {
                                        disableRedirect: false,
                                        disableOrderProcess: false
                                    })];
                                    o = "".concat(a, "_").concat(e), n = Date.now(), c = 5 * 60 * 1e3, l = r.blockedStatusCache.get(o);
                                    if (l && n - l.timestamp < c) return [2, (i.log("[Lomadee Global Pixel] \uD83D\uDCCB Status bloqueio encontrado no cache: affiliateId=".concat(a, ", urlCode=").concat(e), {
                                        disableRedirect: l.disableRedirect,
                                        disableOrderProcess: l.disableOrderProcess
                                    }), {
                                        disableRedirect: l.disableRedirect,
                                        disableOrderProcess: l.disableOrderProcess
                                    })];
                                    y.label = 1;
                                case 1:
                                    y.trys.push([1, 4, , 5]);
                                    d = "https://link-generator.lomadee.com.br/links/blocked/".concat(e, "?affiliateId=").concat(a);
                                    i.log("[Lomadee Global Pixel] \uD83D\uDD0D Verificando status de bloqueio: ".concat(d));
                                    return [4, fetch(d, {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    })];
                                case 2:
                                    m = y.sent();
                                    if (!m.ok) return [2, (i.warn("[Lomadee Global Pixel] ⚠️ API de bloqueio retornou ".concat(m.status, ", assumindo n\xe3o bloqueado")), {
                                        disableRedirect: !1,
                                        disableOrderProcess: !1
                                    })];
                                    return [4, m.json()];
                                case 3:
                                    h = y.sent(), f = {
                                        disableRedirect: (h === null || h === void 0 ? void 0 : (s = h.data) === null || s === void 0 ? void 0 : s.disableRedirect) || !1,
                                        disableOrderProcess: (h === null || h === void 0 ? void 0 : (u = h.data) === null || u === void 0 ? void 0 : u.disableOrderProcess) || !1
                                    };
                                    return [2, (r.blockedStatusCache.set(o, g(v({}, f), {
                                        timestamp: n
                                    })), i.log("[Lomadee Global Pixel] ✅ Status de bloqueio obtido: affiliateId=".concat(a, ", urlCode=").concat(e), f), f)];
                                case 4:
                                    p = y.sent();
                                    return [2, (i.error("[Lomadee Global Pixel] ❌ Erro ao verificar status de bloqueio:", p), {
                                        disableRedirect: false,
                                        disableOrderProcess: false
                                    })];
                                case 5:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "collectEnvironmentMetadata",
                value: function e() {
                    var e = this;
                    return o(function() {
                        var a, t;
                        return x(this, function(r) {
                            a = [];
                            a.push({
                                key: "cookies",
                                value: e.collectCookies()
                            }), a.push({
                                key: "headers",
                                value: e.collectHeaders()
                            }), a.push({
                                key: "queryString",
                                value: e.collectQueryString()
                            });
                            try {
                                t = P().getTimeline();
                                t && (a.push({
                                    key: "urlTimeline",
                                    value: JSON.stringify(t)
                                }), i.log("[Lomadee Global Pixel] Timeline de par\xe2metros de URL inclu\xedda no metadata:", {
                                    hasInitialContext: !!t.initialContext,
                                    entriesCount: t.entries.length
                                }))
                            } catch (e) {
                                i.error("[Lomadee Global Pixel] Erro ao coletar timeline de par\xe2metros de URL:", e)
                            }
                            return [2, a]
                        })
                    })()
                }
            }, {
                key: "detectAndSetupClient",
                value: function e() {
                    var e = window.location.hostname,
                        a = window.location.pathname,
                        t = window.location.href;
                    i.log('[Lomadee Global Pixel] \uD83D\uDD0D DETECTANDO CLIENTE - Dom\xednio: "'.concat(e, '" | Path: "').concat(a, '" | URL completa: "').concat(t, '"'));
                    var r = eo.detect(e);
                    if (r) this.currentClient = r, this.isAutoModeEnabled = true, i.log("[Lomadee Global Pixel] ✅ Cliente detectado: ".concat(r.config.name, " para dom\xednio: ").concat(e)), i.log("[Lomadee Global Pixel] \uD83D\uDCCB Configura\xe7\xf5es do cliente:", {
                        name: r.config.name,
                        domains: r.config.domains,
                        successRoutes: r.config.successRoutes,
                        autoExtraction: r.config.autoExtraction
                    }), this.initializeClientPixel(r), this.setupAutoOrderDetection();
                    else {
                        i.log("[Lomadee Global Pixel] ❌ Nenhum cliente espec\xedfico detectado para o dom\xednio: ".concat(e));
                        var o = eo.getAllClients();
                        i.log("[Lomadee Global Pixel] \uD83D\uDCDD Clientes dispon\xedveis:", o.map(function(e) {
                            return {
                                name: e.config.name,
                                domains: e.config.domains
                            }
                        }))
                    }
                }
            }, {
                key: "initializeClientPixel",
                value: function e(e) {
                    if (i.log("[Lomadee Global Pixel] \uD83D\uDE80 Inicializando pixel para cliente: ".concat(e.config.name)), (typeof window === "undefined" ? "undefined" : y(window)) < "u" && window.dispatchEvent) {
                        var a = new CustomEvent("lomadeeClientDetected", {
                            detail: {
                                clientName: e.config.name,
                                config: e.config,
                                autoExtraction: e.config.autoExtraction
                            }
                        });
                        window.dispatchEvent(a), i.log("[Lomadee Global Pixel] \uD83D\uDCE2 Evento 'lomadeeClientDetected' disparado")
                    }
                    switch (e.config.name) {
                        case "Gazin":
                            this.initializeGazinPixel();
                            break;
                        case "Sieno":
                            this.initializeSienoPixel();
                            break;
                        case "SimpleOrganic":
                            this.initializeSimpleOrganicPixel();
                            break;
                        case "Artex":
                            this.initializeArtexPixel();
                            break;
                        case "InspireHome":
                            this.initializeInspireHomePixel();
                            break;
                        case "CasaBergan":
                            this.initializeCasaBerganPixel();
                            break;
                        case "PalacioFerramentas":
                            this.initializePalacioFerramentasPixel();
                            break;
                        default:
                            this.initializeGenericClientPixel(e);
                            break
                    }
                    i.log("[Lomadee Global Pixel] ✅ Pixel inicializado com sucesso para cliente: ".concat(e.config.name))
                }
            }, {
                key: "initializeGazinPixel",
                value: function e() {
                    if (i.log("[Lomadee Global Pixel] \uD83C\uDFEA Inicializando pixel Gazin (modo tracking-only)"), !this.isHomePage()) {
                        i.log("[Lomadee Global Pixel] \uD83D\uDEAB Gazin: Pixel n\xe3o inicializado - n\xe3o est\xe1 na home page"), i.log("[Lomadee Global Pixel] ℹ️ P\xe1gina atual: ".concat(window.location.pathname));
                        return
                    }
                    i.log("[Lomadee Global Pixel] ✅ Gazin: Est\xe1 na home page - prosseguindo com inicializa\xe7\xe3o");
                    try {
                        if (!this.analytics) throw new Error("Analytics service n\xe3o est\xe1 dispon\xedvel");
                        i.log("[Lomadee Global Pixel] \uD83D\uDCCA Gazin: Cliente detectado - page view j\xe1 enviado pelo setupAnalyticsTracking"), this.isAutoModeEnabled = !0, this.gazinPixelActive = !0, i.log("[Lomadee Global Pixel] ✅ Pixel Gazin EFETIVAMENTE inicializado na HOME - tracking ativo!")
                    } catch (e) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao inicializar pixel Gazin:", e)
                    }
                }
            }, {
                key: "initializeSienoPixel",
                value: function e() {
                    i.log("[Lomadee Global Pixel] \uD83C\uDFEA Inicializando pixel Sieno (modo completo)");
                    try {
                        this.initializeFullClientPixel("Sieno"), this.sienoPixelActive = !0, i.log("[Lomadee Global Pixel] ✅ Pixel Sieno EFETIVAMENTE inicializado!")
                    } catch (e) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao inicializar pixel Sieno:", e)
                    }
                }
            }, {
                key: "initializeSimpleOrganicPixel",
                value: function e() {
                    i.log("[Lomadee Global Pixel] \uD83C\uDFEA Inicializando pixel SimpleOrganic (modo completo)");
                    try {
                        this.initializeFullClientPixel("SimpleOrganic"), this.simpleOrganicPixelActive = !0, i.log("[Lomadee Global Pixel] ✅ Pixel SimpleOrganic EFETIVAMENTE inicializado!")
                    } catch (e) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao inicializar pixel SimpleOrganic:", e)
                    }
                }
            }, {
                key: "initializeArtexPixel",
                value: function e() {
                    i.log("[Lomadee Global Pixel] \uD83C\uDFEA Inicializando pixel Artex (modo completo)");
                    try {
                        this.initializeFullClientPixel("Artex"), this.artexPixelActive = !0, i.log("[Lomadee Global Pixel] ✅ Pixel Artex EFETIVAMENTE inicializado!")
                    } catch (e) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao inicializar pixel Artex:", e)
                    }
                }
            }, {
                key: "initializeInspireHomePixel",
                value: function e() {
                    i.log("[Lomadee Global Pixel] \uD83C\uDFEA Inicializando pixel InspireHome (modo completo)");
                    try {
                        this.initializeFullClientPixel("InspireHome"), this.inspireHomePixelActive = !0, i.log("[Lomadee Global Pixel] ✅ Pixel InspireHome EFETIVAMENTE inicializado!")
                    } catch (e) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao inicializar pixel InspireHome:", e)
                    }
                }
            }, {
                key: "initializeCasaBerganPixel",
                value: function e() {
                    i.log("[Lomadee Global Pixel] \uD83C\uDFEA Inicializando pixel CasaBergan (modo completo)");
                    try {
                        this.initializeFullClientPixel("CasaBergan"), this.casaBerganPixelActive = !0, i.log("[Lomadee Global Pixel] ✅ Pixel CasaBergan EFETIVAMENTE inicializado!")
                    } catch (e) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao inicializar pixel CasaBergan:", e)
                    }
                }
            }, {
                key: "initializePalacioFerramentasPixel",
                value: function e() {
                    i.log("[Lomadee Global Pixel] \uD83C\uDFEA Inicializando pixel PalacioFerramentas (modo completo)");
                    try {
                        this.initializeFullClientPixel("PalacioFerramentas"), this.palacioFerramentasPixelActive = !0, i.log("[Lomadee Global Pixel] ✅ Pixel PalacioFerramentas EFETIVAMENTE inicializado!")
                    } catch (e) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao inicializar pixel PalacioFerramentas:", e)
                    }
                }
            }, {
                key: "initializeGenericClientPixel",
                value: function e(e) {
                    i.log("[Lomadee Global Pixel] \uD83C\uDFEA Inicializando pixel gen\xe9rico para: ".concat(e.config.name));
                    try {
                        this.initializeFullClientPixel(e.config.name), this.genericPixelActive = !0, i.log("[Lomadee Global Pixel] ✅ Pixel gen\xe9rico EFETIVAMENTE inicializado para: ".concat(e.config.name, "!"))
                    } catch (a) {
                        i.error("[Lomadee Global Pixel] ❌ Erro ao inicializar pixel gen\xe9rico para ".concat(e.config.name, ":"), a)
                    }
                }
            }, {
                key: "initializeFullClientPixel",
                value: function e(e) {
                    if (i.log("[Lomadee Global Pixel] \uD83D\uDD27 Executando inicializa\xe7\xe3o completa para: ".concat(e)), !this.analytics) throw new Error("Analytics service n\xe3o est\xe1 dispon\xedvel");
                    i.log("[Lomadee Global Pixel] \uD83D\uDCCA ".concat(e, ": Cliente detectado - page view j\xe1 enviado pelo setupAnalyticsTracking")), this.isAutoModeEnabled = true, i.log("[Lomadee Global Pixel] ✅ ".concat(e, ": Inicializa\xe7\xe3o completa finalizada!"))
                }
            }, {
                key: "isHomePage",
                value: function e() {
                    var e = window.location.pathname,
                        a = e === "/" || e === "" || e === "/index.html" || e === "/index.php";
                    return i.log('[Lomadee Global Pixel] \uD83D\uDD0D Verifica\xe7\xe3o home page - pathname: "'.concat(e, '" | isHome: ').concat(a)), a
                }
            }, {
                key: "setupAutoOrderDetection",
                value: function e() {
                    !this.currentClient || !this.isAutoModeEnabled || (i.log("[Lomadee Global Pixel] Configurando detec\xe7\xe3o autom\xe1tica de pedidos..."), this.checkForOrderCompletion(), this.urlChangeListenerAdded || (this.setupUrlChangeListener(), this.urlChangeListenerAdded = true))
                }
            }, {
                key: "setupUrlChangeListener",
                value: function e() {
                    var e = this;
                    var a = this;
                    var t = history.pushState,
                        r = history.replaceState;
                    history.pushState = function() {
                        for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) {
                            r[o] = arguments[o]
                        }
                        t.apply(history, r);
                        try {
                            P().recordUrlChange()
                        } catch (e) {
                            i.error("[Lomadee Global Pixel] Erro ao registrar mudan\xe7a de URL na timeline (pushState):", e)
                        }
                        setTimeout(function() {
                            return a.checkForOrderCompletion()
                        }, 100)
                    }, history.replaceState = function() {
                        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) {
                            t[o] = arguments[o]
                        }
                        r.apply(history, t);
                        try {
                            P().recordUrlChange()
                        } catch (e) {
                            i.error("[Lomadee Global Pixel] Erro ao registrar mudan\xe7a de URL na timeline (replaceState):", e)
                        }
                        setTimeout(function() {
                            return a.checkForOrderCompletion()
                        }, 100)
                    }, window.addEventListener("popstate", function() {
                        try {
                            P().recordUrlChange()
                        } catch (e) {
                            i.error("[Lomadee Global Pixel] Erro ao registrar mudan\xe7a de URL na timeline (popstate):", e)
                        }
                        setTimeout(function() {
                            return e.checkForOrderCompletion()
                        }, 100)
                    }), window.addEventListener("hashchange", function() {
                        i.log("[Lomadee Global Pixel] Hash mudou, verificando rota de sucesso...");
                        try {
                            P().recordUrlChange()
                        } catch (e) {
                            i.error("[Lomadee Global Pixel] Erro ao registrar mudan\xe7a de URL na timeline (hashchange):", e)
                        }
                        setTimeout(function() {
                            return e.checkForOrderCompletion()
                        }, 100)
                    }), i.log("[Lomadee Global Pixel] Listeners de mudan\xe7a de URL (pathname + hash) configurados")
                }
            }, {
                key: "checkForOrderCompletion",
                value: function e() {
                    var e = this;
                    return o(function() {
                        var a, t, r, o, n;
                        return x(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    if (!e.currentClient || !e.isAutoModeEnabled) {
                                        i.log("[Lomadee Global Pixel] \uD83D\uDEAB checkForOrderCompletion interrompido - Cliente: ".concat(!!e.currentClient, ", AutoMode: ").concat(e.isAutoModeEnabled));
                                        return [2]
                                    }
                                    a = window.location.pathname, t = window.location.href, r = e.currentClient.config.name;
                                    i.log("[Lomadee Global Pixel] \uD83D\uDD0D VERIFICANDO ROTA DE SUCESSO [".concat(r, "]:")), i.log('  \uD83D\uDCCD Path atual: "'.concat(a, '"')), i.log('  \uD83C\uDF10 URL completa: "'.concat(t, '"')), i.log("  \uD83D\uDCDD Rotas de sucesso configuradas:", e.currentClient.config.successRoutes);
                                    o = eo.isSuccessRoute(e.currentClient.config, a);
                                    i.log("[Lomadee Global Pixel] ✅ Resultado da verifica\xe7\xe3o: ".concat(o ? "✅ \xc9 P\xc1GINA DE SUCESSO!" : "❌ N\xc3O \xe9 p\xe1gina de sucesso"));
                                    if (!o) return [3, 2];
                                    i.log("[Lomadee Global Pixel] \uD83C\uDFAF [".concat(r, "] P\xe1gina de sucesso detectada! Iniciando extra\xe7\xe3o de dados..."));
                                    return [4, e.extractAndSendOrder()];
                                case 1:
                                    n = c.sent();
                                    return [3, 3];
                                case 2:
                                    n = i.log("[Lomadee Global Pixel] \uD83D\uDD0D [".concat(r, '] Aguardando rota de sucesso. Path atual "').concat(a, '" n\xe3o corresponde \xe0s rotas configuradas.'));
                                    c.label = 3;
                                case 3:
                                    n;
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "extractAndSendOrder",
                value: function e() {
                    var e = this;
                    return o(function() {
                        var a, t, r, o, n;
                        return x(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    t = (a = e.currentClient) === null || a === void 0 ? void 0 : a.config.name;
                                    if (!e.currentClient || e.isProcessing) {
                                        i.log("[Lomadee Global Pixel] \uD83D\uDEAB EXTRA\xc7\xc3O INTERROMPIDA - Cliente: ".concat(!!e.currentClient, ", Processando: ").concat(e.isProcessing));
                                        return [2]
                                    }
                                    if (e.currentClient.config.autoExtraction === false) {
                                        i.log("[Lomadee Global Pixel] \uD83D\uDEAB [".concat(t, "] Extra\xe7\xe3o autom\xe1tica desabilitada"));
                                        return [2]
                                    }
                                    i.log("[Lomadee Global Pixel] \uD83D\uDD27 [".concat(t, "] INICIANDO EXTRA\xc7\xc3O DE DADOS...")), (typeof window === "undefined" ? "undefined" : y(window)) < "u" && window.dataLayer ? (i.log("[Lomadee Global Pixel] \uD83D\uDCCA [".concat(t, "] DataLayer atual encontrado com ").concat(window.dataLayer.length, " itens:")), i.log("[Lomadee Global Pixel] \uD83D\uDCCA [".concat(t, "] \xdaltimos 3 itens do dataLayer:"), window.dataLayer.slice(-3))) : i.log("[Lomadee Global Pixel] ⚠️ [".concat(t, "] DataLayer n\xe3o encontrado!"));
                                    c.label = 1;
                                case 1:
                                    c.trys.push([1, 6, , 7]);
                                    i.log("[Lomadee Global Pixel] ⏳ [".concat(t, "] Aguardando extra\xe7\xe3o (timeout: ").concat(e.currentClient.config.maxWaitTime, "ms)..."));
                                    return [4, e.currentClient.extractor.extract()];
                                case 2:
                                    r = c.sent();
                                    if (!r) return [3, 4];
                                    i.log("[Lomadee Global Pixel] ✅ [".concat(t, "] Dados extra\xeddos com sucesso!")), i.log("[Lomadee Global Pixel] \uD83D\uDCE6 [".concat(t, "] Dados extra\xeddos:"), {
                                        orderId: r.orderId,
                                        itemsCount: r.items.length,
                                        value: r.value,
                                        hasCustomer: !!r.customer,
                                        metadataCount: r.metadata.length
                                    });
                                    return [4, e.sendOrder(r)];
                                case 3:
                                    o = c.sent() ? i.log("[Lomadee Global Pixel] \uD83C\uDF89 [".concat(t, "] Pedido enviado automaticamente com sucesso!")) : i.log("[Lomadee Global Pixel] ❌ [".concat(t, "] Falha no envio do pedido"));
                                    return [3, 5];
                                case 4:
                                    o = i.log("[Lomadee Global Pixel] \uD83D\uDCED [".concat(t, "] Nenhum dado de pedido encontrado ap\xf3s extra\xe7\xe3o (timeout ou evento n\xe3o encontrado)"));
                                    c.label = 5;
                                case 5:
                                    o;
                                    return [3, 7];
                                case 6:
                                    n = c.sent();
                                    i.error("[Lomadee Global Pixel] ❌ [".concat(t, "] Erro ao extrair e enviar dados:"), n);
                                    return [3, 7];
                                case 7:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "sendOrder",
                value: function e(e) {
                    var a = this;
                    return o(function() {
                        var t, r, o, n, c, l, s, u, d, m, h, y, k, b, E, L, w;
                        return x(this, function(x) {
                            switch (x.label) {
                                case 0:
                                    if (a.isProcessing) return [2, (i.log("[Lomadee Global Pixel] Processamento j\xe1 em andamento, aguardando..."), false)];
                                    a.isProcessing = true;
                                    x.label = 1;
                                case 1:
                                    x.trys.push([1, 13, 14, 15]);
                                    i.log("[Lomadee Global Pixel] Inicianado envio de pedido, Recuperando dados do tracker...");
                                    o = a.tracker.getTrackerData();
                                    if (!o) return [2, (i.log("[Lomadee Global Pixel] Nenhum dado do tracker encontrado, ignorando envio de pedido"), !1)];
                                    i.log("[Lomadee Global Pixel] Send Order Dados do tracker:", {
                                        utm_campaign: o === null || o === void 0 ? void 0 : o.utm_campaign,
                                        utm_campaign_split: o === null || o === void 0 ? void 0 : (t = o.utm_campaign) === null || t === void 0 ? void 0 : t.split("_")
                                    });
                                    n = f((o === null || o === void 0 ? void 0 : (r = o.utm_campaign) === null || r === void 0 ? void 0 : r.split("_")) || [], 4), c = n[0], l = n[1], s = n[2], u = n[3];
                                    i.log("[Lomadee Global Pixel] Send Order Dados do tracker:", o);
                                    d = null;
                                    if (!(c && s)) return [3, 3];
                                    i.log("[Lomadee Global Pixel] \uD83D\uDD0D Verificando bloqueio antes de enviar pedido: affiliateId=".concat(c, ", orgId=").concat(l, ", urlCode=").concat(s));
                                    return [4, a.checkBlockedStatus(s, c, l)];
                                case 2:
                                    if (d = x.sent(), d === null || d === void 0 ? void 0 : d.disableOrderProcess) return [2, (i.log("[Lomadee Global Pixel] \uD83D\uDEAB Envio de pedido bloqueado (disableOrderProcess=true) para order: ".concat(e.orderId)), !1)];
                                    i.log("[Lomadee Global Pixel] ✅ Pedido liberado para envio (disableOrderProcess=false)");
                                    x.label = 3;
                                case 3:
                                    i.log("[Lomadee Global Pixel] Coleta de Dados do Payload:", e);
                                    return [4, a.collectEnvironmentMetadata()];
                                case 4:
                                    m = x.sent(), h = g(v(g(v({}, !e.customer && {
                                        customer: {
                                            firstName: "",
                                            lastName: "",
                                            email: "",
                                            document: "",
                                            phone: "",
                                            documentType: "",
                                            metadata: []
                                        }
                                    }, e), {
                                        items: e.items.map(function(e) {
                                            return g(v({}, e), {
                                                listPrice: Math.floor(e.listPrice),
                                                price: Math.floor(e.price)
                                            })
                                        }),
                                        organizationId: l,
                                        affiliateInfo: {
                                            affiliateId: c
                                        }
                                    }), (o === null || o === void 0 ? void 0 : o.lmdeeTracking) && {
                                        lmdeeTracking: o.lmdeeTracking
                                    }, (o === null || o === void 0 ? void 0 : o.utm_source) || (o === null || o === void 0 ? void 0 : o.utm_campaign) || (o === null || o === void 0 ? void 0 : o.utm_medium) ? {
                                        marketingData: {
                                            utmSource: (o === null || o === void 0 ? void 0 : o.utm_source) || "",
                                            utmCampaign: (o === null || o === void 0 ? void 0 : o.utm_campaign) || "",
                                            utmMedium: (o === null || o === void 0 ? void 0 : o.utm_medium) || ""
                                        }
                                    } : {}, s && {
                                        urlCode: s
                                    }, u && {
                                        analyticsEventId: u
                                    }), {
                                        metadata: p(e.metadata || []).concat(p(m))
                                    });
                                    if (i.log("[Lomadee Global Pixel] Send Order Payload:", h), a.processedOrders.has(e.orderId)) return [2, (i.log("[Lomadee Global Pixel] Pedido ".concat(e.orderId, " j\xe1 foi processado anteriormente.")), !1)];
                                    return [4, fetch("".concat(A.API_URL).concat(A.ENDPOINTS.ORDER), {
                                        method: "POST",
                                        body: JSON.stringify(h),
                                        headers: A.HEADERS
                                    })];
                                case 5:
                                    y = x.sent();
                                    if (!y.ok) throw new Error("HTTP error! status: ".concat(y.status));
                                    if (!a.tracker.hasValidUTMsForAnalytics()) return [3, 11];
                                    if (!(c && s && d)) return [3, 9];
                                    i.log("[Lomadee Global Pixel] \uD83D\uDCCB Reutilizando status de bloqueio j\xe1 verificado para conversion analytics");
                                    if (!d.disableRedirect) return [3, 6];
                                    E = i.log("[Lomadee Global Pixel] \uD83D\uDEAB Conversion analytics bloqueado (disableRedirect=true)");
                                    return [3, 8];
                                case 6:
                                    i.log("[Lomadee Global Pixel] ✅ UTMs v\xe1lidas e analytics liberado - enviando conversion event...");
                                    return [4, a.analytics.sendConversion(h.orderId, "send_order")];
                                case 7:
                                    E = x.sent();
                                    x.label = 8;
                                case 8:
                                    b = E;
                                    return [3, 10];
                                case 9:
                                    b = i.log("[Lomadee Global Pixel] ⚠️ affiliateId, trackId ou status de bloqueio n\xe3o dispon\xedveis - conversion n\xe3o enviado");
                                    x.label = 10;
                                case 10:
                                    k = b;
                                    return [3, 12];
                                case 11:
                                    k = i.log("[Lomadee Global Pixel] UTMs inv\xe1lidas - conversion event n\xe3o enviado");
                                    x.label = 12;
                                case 12:
                                    if (k, i.log("[Lomadee Global Pixel] Checkout completo processado com sucesso"), a.processedOrders.add(e.orderId), i.log("[Lomadee Global Pixel] Pedido ".concat(e.orderId, " processado com sucesso")), a.processedOrders.size > 100) {
                                        L = a.processedOrders.values().next().value;
                                        L && a.processedOrders.delete(L)
                                    }
                                    return [2, !0];
                                case 13:
                                    w = x.sent();
                                    return [2, (i.error("[Lomadee Global Pixel] Erro ao processar pedido:", w), false)];
                                case 14:
                                    a.isProcessing = false;
                                    return [7];
                                case 15:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "hasDetectedClient",
                value: function e() {
                    return !!this.currentClient
                }
            }, {
                key: "getDetectedClient",
                value: function e() {
                    var e;
                    return ((e = this.currentClient) === null || e === void 0 ? void 0 : e.config) || null
                }
            }, {
                key: "setAutoMode",
                value: function e(e) {
                    this.isAutoModeEnabled = e, i.log("[Lomadee Global Pixel] Modo autom\xe1tico ".concat(e ? "habilitado" : "desabilitado")), e && this.currentClient && this.setupAutoOrderDetection()
                }
            }, {
                key: "forceOrderCheck",
                value: function e() {
                    var e = this;
                    return o(function() {
                        return x(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    i.log("[Lomadee Global Pixel] For\xe7ando verifica\xe7\xe3o de pedido..."), i.log("[Lomadee Global Pixel] AVISO: Verifica\xe7\xe3o autom\xe1tica est\xe1 desabilitada");
                                    return [4, e.checkForOrderCompletion()];
                                case 1:
                                    a.sent();
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "extractClientData",
                value: function e() {
                    var e = this;
                    return o(function() {
                        var a;
                        return x(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!e.currentClient) return [2, (i.warn("[Lomadee Global Pixel] Nenhum cliente detectado para extra\xe7\xe3o"), null)];
                                    t.label = 1;
                                case 1:
                                    t.trys.push([1, 3, , 4]);
                                    return [4, e.currentClient.extractor.extract()];
                                case 2:
                                    return [2, t.sent()];
                                case 3:
                                    a = t.sent();
                                    return [2, (i.error("[Lomadee Global Pixel] Erro ao extrair dados:", a), null)];
                                case 4:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "isClientInitialized",
                value: function e(e) {
                    if (!e && this.currentClient && (e = this.currentClient.config.name), !e) return false;
                    switch (e) {
                        case "Gazin":
                            return !!this.gazinPixelActive;
                        case "Artex":
                            return !!this.artexPixelActive;
                        case "InspireHome":
                            return !!this.inspireHomePixelActive;
                        case "CasaBergan":
                            return !!this.casaBerganPixelActive;
                        case "PalacioFerramentas":
                            return !!this.palacioFerramentasPixelActive;
                        default:
                            return !!this.genericPixelActive
                    }
                }
            }, {
                key: "getInitializationStatus",
                value: function e() {
                    var e = this.hasDetectedClient(),
                        a = this.getDetectedClient(),
                        t = (a === null || a === void 0 ? void 0 : a.name) || null,
                        r = this.isClientInitialized(t || void 0);
                    return {
                        hasDetectedClient: e,
                        clientName: t,
                        isInitialized: r,
                        autoExtraction: (a === null || a === void 0 ? void 0 : a.autoExtraction) !== false,
                        mode: (a === null || a === void 0 ? void 0 : a.autoExtraction) === false ? "tracking-only" : "full"
                    }
                }
            }], [{
                key: "getInstance",
                value: function a() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                        enableTimeline: true
                    };
                    return e.instance || (e.instance = new e(a)), e.instance
                }
            }]);
            return e
        }();
    a(ec, "LomadeeGlobalPixel"), ec.initialized = false;
    var el = ec,
        es = el;
    if ((typeof window === "undefined" ? "undefined" : y(window)) < "u") {
        window.LomadeeGlobalPixel = el;
        try {
            i.log("[Lomadee Global Pixel] \uD83D\uDD04 Iniciando detec\xe7\xe3o autom\xe1tica de cliente...");
            var eu = el.getInstance().getInitializationStatus();
            eu.hasDetectedClient ? (i.log("[Lomadee Global Pixel] ✅ Cliente ".concat(eu.clientName, " detectado e inicializado automaticamente!")), eu.isInitialized ? i.log("[Lomadee Global Pixel] \uD83C\uDF89 Pixel ".concat(eu.clientName, " TOTALMENTE ATIVO - modo: ").concat(eu.mode, "!")) : i.warn("[Lomadee Global Pixel] ⚠️ Cliente detectado mas inicializa\xe7\xe3o falhou")) : i.log("[Lomadee Global Pixel] ℹ️ Nenhum cliente detectado para o dom\xednio atual")
        } catch (e) {
            i.error("[Lomadee Global Pixel] ❌ Erro na inicializa\xe7\xe3o autom\xe1tica:", e)
        }
    }
    if (typeof window !== "undefined" && typeof LomadeeGlobalPixel !== "undefined") {
        window.LomadeeGlobalPixel = LomadeeGlobalPixel
    }
    return es
}(); //# sourceMappingURL=pixel.js.map