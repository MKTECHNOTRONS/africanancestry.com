(() => {
    var j = Object.defineProperty;
    var N = Object.getOwnPropertySymbols;
    var q = Object.prototype.hasOwnProperty,
        $ = Object.prototype.propertyIsEnumerable;
    var T = (i, e, t) => e in i ? j(i, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : i[e] = t,
        x = (i, e) => {
            for (var t in e || (e = {})) q.call(e, t) && T(i, t, e[t]);
            if (N)
                for (var t of N(e)) $.call(e, t) && T(i, t, e[t]);
            return i
        };
    var c = (i, e, t) => T(i, typeof e != "symbol" ? e + "" : e, t);
    var a = (i, e, t) => new Promise((n, s) => {
        var l = m => {
                try {
                    g(t.next(m))
                } catch (r) {
                    s(r)
                }
            },
            u = m => {
                try {
                    g(t.throw(m))
                } catch (r) {
                    s(r)
                }
            },
            g = m => m.done ? n(m.value) : Promise.resolve(m.value).then(l, u);
        g((t = t.apply(i, e)).next())
    });
    var O = "WebPixel::Render";
    var P = i => shopify.extend(O, i);
    var F = (r => (r.AFFILIATE_ID = "up_uppromote_aid", r.AFFILIATE_HASH_CODE = "up_uppromote_hs", r.SOURCE = "up_uppromote_source", r.LAST_CLICK = "up_uppromote_lc", r.RECEIVED = "up_uppromote_received", r.SUB_ID = "up_uppromote_sub_id", r.OLD_AFFILIATE_ID = "scaaf_aid", r.OLD_SOURCE = "scaaf_sca_source_secomus", r.OLD_LAST_CLICK = "scaaf_c_c", r))(F || {}),
        o = F;
    var U = (r => (r.OLD_RECEIVED = "scaaf_received", r.AFFILIATE_ID = "up_uppromote_aid", r.AFFILIATE_HASH_CODE = "up_uppromote_hs", r.SOURCE = "up_uppromote_source", r.LAST_CLICK = "up_uppromote_lc", r.RECEIVED = "up_uppromote_received", r.SUB_ID = "up_uppromote_sub_id", r.EXPIRE_TIME = "up_uppromote_expire_time", r.PENDING_EVENT = "up_uppromote_pending_event", r))(U || {}),
        p = U;

    function f(i) {
        console.log(`%c \u25BA UpPromote Affiliate Marketing [WebPixel] - ${i}`, "background-color: #092C4C; color: #fff; padding: 5px;")
    }
    var w = class {
            constructor(e, t) {
                c(this, "search");
                c(this, "extApi");
                this.search = new URLSearchParams(e), this.extApi = t
            }
            getAffiliateId() {
                let e = this.search.get("sca_ref");
                return Number(e.split(".")[0])
            }
            getHashCode() {
                return this.search.get("sca_ref").split(".")[1]
            }
            getMyshopifyDomain() {
                return this.extApi.init.data.shop.myshopifyDomain
            }
            getSource() {
                return this.search.get("sca_source")
            }
            getSubId(e) {
                return this.search.get(`sub_id${e}`)
            }
            __toObject() {
                return {
                    affiliate_id: this.getAffiliateId(),
                    hash_code: this.getHashCode(),
                    shopify_domain: this.getMyshopifyDomain(),
                    source: this.getSource(),
                    sub_id1: this.getSubId(1),
                    sub_id2: this.getSubId(2),
                    sub_id3: this.getSubId(3),
                    sub_id4: this.getSubId(4),
                    sub_id5: this.getSubId(5)
                }
            }
            __fromCookie() {
                return a(this, null, function*() {
                    let e = this.extApi.browser.cookie,
                        t = this.extApi.browser.localStorage;
                    if (yield e.get(o.AFFILIATE_ID)) return {
                        cookie_from: "Pixel",
                        affiliate_id: yield e.get(o.AFFILIATE_ID), hash_code: yield e.get(o.AFFILIATE_HASH_CODE), shopify_domain: this.getMyshopifyDomain(), source: yield e.get(o.SOURCE), last_click: yield e.get(o.LAST_CLICK), sub_id1: yield e.get(o.SUB_ID + "1"), sub_id2: yield e.get(o.SUB_ID + "2"), sub_id3: yield e.get(o.SUB_ID + "3"), sub_id4: yield e.get(o.SUB_ID + "4"), sub_id5: yield e.get(o.SUB_ID + "5")
                    };
                    if (yield t.getItem(p.AFFILIATE_ID)) {
                        let n = Number(yield t.getItem(p.EXPIRE_TIME));
                        return new Date().getTime() > n ? (f("Cookie expired!"), {}) : {
                            cookie_from: "Pixel",
                            affiliate_id: yield t.getItem(p.AFFILIATE_ID), hash_code: yield t.getItem(p.AFFILIATE_HASH_CODE), shopify_domain: this.getMyshopifyDomain(), source: yield t.getItem(p.SOURCE), last_click: yield t.getItem(p.LAST_CLICK), sub_id1: yield t.getItem(p.SUB_ID + "1"), sub_id2: yield t.getItem(p.SUB_ID + "2"), sub_id3: yield t.getItem(p.SUB_ID + "3"), sub_id4: yield t.getItem(p.SUB_ID + "4"), sub_id5: yield t.getItem(p.SUB_ID + "5")
                        }
                    }
                    return (yield e.get(o.OLD_AFFILIATE_ID)) ? {
                        cookie_from: "ScriptTag",
                        affiliate_id: yield e.get(o.OLD_AFFILIATE_ID), hash_code: null, shopify_domain: this.getMyshopifyDomain(), source: yield e.get(o.OLD_SOURCE), last_click: yield e.get(o.OLD_LAST_CLICK)
                    } : {}
                })
            }
        },
        E = w;

    function h(i, e, t = "GET") {
        return a(this, null, function*() {
            if (["GET", "HEAD"].includes(t)) {
                let s = new URL(i),
                    l = new URLSearchParams(e),
                    u = s.searchParams,
                    g = new URLSearchParams(x(x({}, Object.fromEntries(l)), Object.fromEntries(u))),
                    m = `${s.origin}${s.pathname}?${g.toString()}`;
                return (yield(yield fetch(m, {
                    keepalive: !0
                })).json()) || null
            }
            return (yield(yield fetch(i, {
                method: t,
                headers: {
                    "content-type": "application/json",
                    accept: "application/json"
                },
                body: JSON.stringify(e),
                keepalive: !0
            })).json()) || null
        })
    }
    var J = {
            LOCAL: {
                API_ENDPOINT: "https://secomapp-affiliate.test",
                TRACKING_API: "https://uppromote-tracking.test"
            },
            TEST: {
                API_ENDPOINT: "https://af-test.uppromote.com",
                TRACKING_API: "https://pixel-test.uppromote.com"
            },
            PRODUCTION: {
                API_ENDPOINT: "https://track.uppromote.com",
                TRACKING_API: "https://pixel.uppromote.com"
            }
        },
        V = J;
    var X = "PRODUCTION",
        W = V[X];
    var S = W;
    var z = {
            LOGS: S.TRACKING_API + "/api/logs"
        },
        I = z;

    function Q(i, e, t = 360) {
        let n = new Date;
        n.setTime(n.getTime() + t * 24 * 60 * 60 * 1e3);
        let s = "expires=" + n.toUTCString();
        return i + "=" + e + ";" + s + ";path=/"
    }
    var d = Q;
    var L = class {
            constructor() {
                c(this, "_event")
            }
            handle(e) {
                return a(this, null, function*() {
                    if (this._event = e, !this.isReferralLink() || !(yield this.mustRePostClickTracking())) return;
                    let n = {
                        identifier: this.getIdentifier().__toObject(),
                        shopify_domain: this._event.getExtensionApi().init.data.shop.myshopifyDomain,
                        event: this._event.getEvent()
                    };
                    this.storeLocalTrackingVars(this.getIdentifier()).then(() => {
                        h(I.LOGS, n, "POST").then(s => {
                            s.code == "SUCCESS" && this.storeServerTrackingVars(s).then()
                        })
                    })
                })
            }
            isReferralLink() {
                return !!this.getSearchParams().get("sca_ref")
            }
            getIdentifier() {
                return new E(this._event.getEvent().context.document.location.search, this._event.getExtensionApi())
            }
            getSearchParams() {
                return new URLSearchParams(this._event.getEvent().context.document.location.search)
            }
            mustRePostClickTracking() {
                return a(this, null, function*() {
                    let e = yield this._event.getExtensionApi().browser.cookie.get(o.RECEIVED);
                    if (!e || e === "0") return !0;
                    let t = yield this._event.getExtensionApi().browser.cookie.get(o.LAST_CLICK);
                    if (!t) return !0;
                    let n = new Date().getTime(),
                        s = Number(t);
                    return n - s > 60 * 1e3
                })
            }
            storeLocalTrackingVars(e) {
                return a(this, null, function*() {
                    let t = this._event.getExtensionApi().browser.cookie,
                        n = this._event.getExtensionApi().browser.localStorage,
                        s = String(e.getAffiliateId()),
                        l = e.getHashCode(),
                        u = String(new Date().getTime()),
                        g = e.getSource();
                    s && (t.set(d(o.AFFILIATE_ID, s)).then(), n.setItem(o.AFFILIATE_ID, s).then()), l && (t.set(d(o.AFFILIATE_HASH_CODE, l)).then(), n.setItem(o.AFFILIATE_HASH_CODE, l).then()), t.set(d(o.LAST_CLICK, u)).then(), n.setItem(o.LAST_CLICK, u).then(), g && (t.set(d(o.SOURCE, g, 360)).then(), n.setItem(o.SOURCE, g).then());
                    for (let m of [1, 2, 3, 4, 5]) {
                        let r = o.SUB_ID + m,
                            _ = e.getSubId(m);
                        _ && (t.set(d(r, _, 365)).then(), n.setItem(r, _).then())
                    }
                    t.set(d(o.RECEIVED, "0")).then(), n.setItem(o.RECEIVED, "0").then()
                })
            }
            storeServerTrackingVars(e) {
                return a(this, null, function*() {
                    if (!e.data) return;
                    let t = this._event.getExtensionApi().browser.cookie,
                        n = this._event.getExtensionApi().browser.localStorage,
                        s = e.data.cookie_serialize,
                        l = new Date;
                    l.setDate(l.getDate() + s);
                    let u = d(o.AFFILIATE_ID, String(e.data.id), s),
                        g = d(o.AFFILIATE_HASH_CODE, String(e.data.hash_code), s),
                        m = d(o.LAST_CLICK, String(yield t.get(o.LAST_CLICK)), s),
                        r = yield t.get(o.SOURCE), _ = r ? d(o.SOURCE, r, s) : null, K = d(o.RECEIVED, "1", s);
                    t.set(u).then(), t.set(g).then(), t.set(m).then(), t.set(_).then(), r && t.set(_).then(), t.set(K).then(), n.setItem(o.RECEIVED, "1").then(), n.setItem(p.EXPIRE_TIME, l.getTime())
                })
            }
        },
        B = L;
    var D = class {
            constructor() {
                c(this, "event");
                c(this, "extensionApi")
            }
            handle(e) {
                this.event = e.getEvent(), this.extensionApi = e.getExtensionApi(), this.postCheckoutToken().then()
            }
            postCheckoutToken() {
                return a(this, null, function*() {
                    if (!(yield this.needPostCheckoutToken())) return;
                    let e = yield this.getTrackingBody(), t = S.API_ENDPOINT;
                    h(`${t}/api/ct_tk`, e, "POST").then().catch()
                })
            }
            getTrackingBody() {
                return a(this, null, function*() {
                    let e = {
                            aid: yield this.getAffiliateId(), ct_tk: this.getCheckoutToken(), hc: yield this.getAffiliateHashCode(), order_id: this.getOrderId(), s: this.getShopName(), shopify_domain: this.getMyShopifyDomain()
                        },
                        t = yield this.getSource();
                    return t && (e.sca_source = t), e
                })
            }
            needPostCheckoutToken() {
                return a(this, null, function*() {
                    let e = yield this.getAffiliateId(), t = yield this.getExpireTime();
                    return !e || !t ? !1 : t > new Date().getTime()
                })
            }
            getLocalStorageData(e) {
                return a(this, null, function*() {
                    let t = yield this.extensionApi.browser.localStorage.getItem(e);
                    return t || null
                })
            }
            getAffiliateId() {
                return a(this, null, function*() {
                    let e = yield this.getLocalStorageData("scaaf_aid");
                    return e ? +e : null
                })
            }
            getExpireTime() {
                return a(this, null, function*() {
                    let e = yield this.getLocalStorageData("scaaf_ep");
                    return e ? +e : null
                })
            }
            getAffiliateHashCode() {
                return a(this, null, function*() {
                    return this.getLocalStorageData("scaaf_hc")
                })
            }
            getSource() {
                return a(this, null, function*() {
                    return this.getLocalStorageData("scaaf_sca_source_secomus")
                })
            }
            getCheckoutToken() {
                return this.event.data.checkout.token
            }
            getOrderId() {
                return +this.event.data.checkout.order.id
            }
            getShopName() {
                return this.getMyShopifyDomain().replace(".myshopify.com", "")
            }
            getMyShopifyDomain() {
                return this.extensionApi.init.data.shop.myshopifyDomain
            }
        },
        G = D;
    var C = class {
        constructor() {
            c(this, "event");
            c(this, "extensionApi")
        }
        handle(e) {
            this.event = e.getEvent(), this.extensionApi = e.getExtensionApi(), this.postOrderTracking().then()
        }
        postOrderTracking() {
            return a(this, null, function*() {
                let t = yield new E(this.event.context.document.location.search, this.extensionApi).__fromCookie();
                if (!t.affiliate_id || !this.event.data.checkout.order || !(yield this.acceptedFromServer())) return;
                let s = {
                    identifier: t,
                    shopify_domain: t.shopify_domain,
                    event: this.event
                };
                h(I.LOGS, s, "POST").then()
            })
        }
        acceptedFromServer() {
            return a(this, null, function*() {
                let e = this.extensionApi.browser.cookie,
                    t = this.extensionApi.browser.localStorage;
                return (yield e.get(o.RECEIVED)) === "1" || (yield t.getItem(o.RECEIVED)) === "1" ? !0 : (yield t.getItem(p.OLD_RECEIVED)) === "true"
            })
        }
    };
    var y = class {
            constructor() {
                c(this, "_event");
                c(this, "browserLocalStorage");
                c(this, "browserCookie")
            }
            handle(e) {
                return a(this, null, function*() {
                    if (this._event = e, this.browserLocalStorage = e.getExtensionApi().browser.localStorage, this.browserCookie = e.getExtensionApi().browser.cookie, this.needStorePendingEvent() && this.isReferralLink()) {
                        this.storePendingTrackingEvent();
                        return
                    }
                    this.reTrackingPendingEvent()
                })
            }
            storePendingTrackingEvent() {
                return a(this, null, function*() {
                    if (yield this.storedPendingEvent()) return;
                    let e = new E(this._event.getEvent().context.document.location.search, this._event.getExtensionApi());
                    this.browserLocalStorage.setItem(p.PENDING_EVENT, JSON.stringify({
                        identifier: e.__toObject(),
                        event: this._event.getEvent()
                    }))
                })
            }
            reTrackingPendingEvent() {
                return a(this, null, function*() {
                    if (!(yield this.canReTrackingAffiliate())) return;
                    let e = this._event.getEvent().clientId,
                        t = yield this.browserLocalStorage.getItem(p.PENDING_EVENT), n = JSON.parse(t);
                    n.event.clientId = e, h(I.LOGS, n, "POST").then(s => {
                        s.code == "SUCCESS" && f("ReTracking success")
                    }).finally(() => {
                        this.browserLocalStorage.removeItem(p.PENDING_EVENT)
                    })
                })
            }
            isReferralLink() {
                return this._event.getEvent().context.document.location.search.includes("sca_ref=")
            }
            storedPendingEvent() {
                return a(this, null, function*() {
                    return !!(yield this.browserLocalStorage.getItem(p.PENDING_EVENT))
                })
            }
            needStorePendingEvent() {
                return !this._event.getEvent().clientId
            }
            canReTrackingAffiliate() {
                return a(this, null, function*() {
                    let e = this._event.getEvent().clientId,
                        t = yield this.browserLocalStorage.getItem(p.PENDING_EVENT);
                    return !!e && !!t
                })
            }
        },
        H = y;
    var b = {
        page_viewed: [new B, new H],
        checkout_completed: [new C, new G]
    };
    var A = class {
        findListeners(e) {
            let t = Object.keys(b).find(n => n === e);
            return t ? b[t] : []
        }
    };
    var Z = i => {
            let t = new A().findListeners(i.eventId);
            for (let n of t) n.handle(i)
        },
        R = Z;
    var v = class {
        constructor(e, t) {
            c(this, "eventId");
            c(this, "_event");
            c(this, "_extensionApi");
            this._event = e, this._extensionApi = t, this.eventId = "page_viewed"
        }
        getEvent() {
            return this._event
        }
        getExtensionApi() {
            return this._extensionApi
        }
    };
    var k = class {
        constructor(e, t) {
            c(this, "eventId");
            c(this, "_event");
            c(this, "_extensionApi");
            this._event = e, this._extensionApi = t, this.eventId = "checkout_completed"
        }
        getEvent() {
            return this._event
        }
        getExtensionApi() {
            return this._extensionApi
        }
    };

    function ee(i) {
        i.customerPrivacy.analyticsProcessingAllowed || i.customerPrivacy.marketingAllowed
    }
    var M = ee;
    f("Running...");
    P(i => {
        i.analytics.subscribe("page_viewed", e => {
            R(new v(e, i))
        }), i.analytics.subscribe("checkout_completed", e => {
            R(new k(e, i))
        }), i.customerPrivacy.subscribe("visitorConsentCollected", e => {
            M(e)
        })
    });
})();