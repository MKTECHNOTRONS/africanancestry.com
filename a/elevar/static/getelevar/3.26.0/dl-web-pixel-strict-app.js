var e = {};
e.d = (t, a) => {
    for (var r in a) e.o(a, r) && !e.o(t, r) && Object.defineProperty(t, r, {
        enumerable: !0,
        get: a[r]
    })
}, e.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
var t = {};
e.d(t, {
    y: () => em
});
let a = "___ELEVAR_GTM_SUITE--",
    r = {
        userId: `${a}userId`,
        sessionId: `${a}sessionId`,
        sessionCount: `${a}sessionCount`,
        lastCollectionPathname: `${a}lastCollectionPathname`,
        lastDlPushTimestamp: `${a}lastDlPushTimestamp`,
        userOnSignupPath: `${a}userOnSignupPath`,
        userLoggedIn: `${a}userLoggedIn`,
        cart: `${a}cart`,
        params: `${a}params`,
        cookies: `${a}cookies`,
        debug: `${a}debug`,
        checkoutInfo: `${a}checkoutInfo`
    },
    n = `${a}apexDomain`,
    o = e => null !== e ? JSON.parse(e) : {},
    i = e => JSON.stringify(e),
    s = e => null !== e ? JSON.parse(e) : {},
    c = e => JSON.stringify(e),
    l = e => !!e && Number(e) + 1800 <= Math.floor(Date.now() / 1e3),
    _ = "OTHER",
    d = async ({
        isForEvent: e,
        getLocalStorage: t,
        setLocalStorage: a,
        updateApexDomainCookie: r
    }) => {
        let n = new Date,
            o = String(Math.floor(n.getTime() / 1e3)),
            [i, s, c] = await Promise.all([t("sessionId"), t("sessionCount"), t("lastDlPushTimestamp")]),
            d = l(c);
        e && (_ = null === c ? "FIRST_EVER" : d ? "FIRST_IN_SESSION" : "OTHER");
        let u = null === i || d ? o : i,
            m = null === s ? "1" : d ? String(Number(s) + 1) : s,
            p = e ? o : c;
        return await Promise.all([a("sessionId", u), a("sessionCount", m), ...p ? [a("lastDlPushTimestamp", p)] : []]), await r ? .(), e ? {
            sessionId: u,
            sessionCount: m,
            lastDlPushTimestamp: p,
            eventState: _,
            date: n
        } : {
            sessionId: u,
            sessionCount: m
        }
    },
    u = [
        ["userId", null],
        ["sessionId", null],
        ["sessionCount", null],
        ["lastDlPushTimestamp", null],
        ["params", null],
        ["cookies", null],
        ["debug", null]
    ],
    m = async ({
        getCookie: e
    }) => {
        let t = await e(n);
        if (!t) return u;
        try {
            let e = JSON.parse(t);
            if (Array.isArray(e)) return u.map(([t]) => {
                let a = e.find(e => Array.isArray(e) && t === e[0] && ("string" == typeof e[1] || null === e[1])) ? ? null;
                return [t, a ? a[1] : null]
            });
            return u
        } catch {
            return u
        }
    },
    p = async ({
        getCookie: e,
        setLocalStorage: t
    }) => {
        let a = await m({
            getCookie: e
        });
        await Promise.all(a.map(([e, a]) => null !== a ? t(e, a) : Promise.resolve()))
    },
    E = ({
        apexDomains: e,
        location: t
    }) => e.find(e => t.hostname.endsWith(e)) ? ? null,
    I = async ({
        setCookie: e,
        getLocalStorage: t,
        apexDomain: a
    }) => {
        if (null !== a) {
            let r = await Promise.all(u.map(async ([e]) => {
                let a = await t(e);
                return [e, a]
            }));
            await e(n, JSON.stringify(r), {
                domain: a,
                expires: 365,
                secure: !0,
                sameSite: "strict"
            })
        }
    },
    O = e => {
        switch (e) {
            case "UNEXPECTED":
            case "TRANSFORM_FN_BAD_RETURN":
            case "TRANSFORM_FN_ERROR_THROWN":
            case "USERID_FN_BAD_RETURN":
            case "USERID_FN_ERROR_THROWN":
            case "MARKETID_FN_BAD_RETURN":
            case "MARKETID_FN_ERROR_THROWN":
            case "BAD_EVENT_DATA":
            case "BAD_EVENT_ORDER":
            case "DUPLICATE_EVENT":
            case "CART_RECONCILIATION_ENABLED":
            case "MISSED_CONTEXT_INVALIDATION":
            case "MISSING_GOOGLE_TAG_MANAGER":
                return "ERROR";
            case "WEB_PIXEL_LOG":
            case "CONTEXT_PUSHED":
            case "VALIDATION_PASS":
                return "INFO";
            case "CONSENT_CHECK_LIMIT_REACHED":
            case "LOCAL_STORAGE_ACCESS_DENIED":
                return "WARNING"
        }
    },
    A = e => {
        switch (e) {
            case "INFO":
                return console.log;
            case "WARNING":
                return console.warn;
            case "ERROR":
                return console.error
        }
    },
    R = (e, t) => {
        let a = O(e),
            r = A(a),
            n = e.toLowerCase();
        r(`Elevar ${a}: ${e}`, ...t ? ["\n\n", ...t] : [], `

https://docs.getelevar.com/docs/data-layer-codes#${n}`)
    };

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = arguments[t];
        for (var r in a) e[r] = a[r]
    }
    return e
}
var C = function e(t, a) {
    function r(e, r, n) {
        if ("undefined" != typeof document) {
            "number" == typeof(n = T({}, a, n)).expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)), n.expires && (n.expires = n.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var o = "";
            for (var i in n) {
                if (n[i]) o += "; " + i, !0 !== n[i] && (o += "=" + n[i].split(";")[0])
            }
            return document.cookie = e + "=" + t.write(r, e) + o
        }
    }
    return Object.create({
        set: r,
        get: function(e) {
            if ("undefined" != typeof document && (!arguments.length || e)) {
                for (var a = document.cookie ? document.cookie.split("; ") : [], r = {}, n = 0; n < a.length; n++) {
                    var o = a[n].split("="),
                        i = o.slice(1).join("=");
                    try {
                        var s = decodeURIComponent(o[0]);
                        if (r[s] = t.read(i, s), e === s) break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        },
        remove: function(e, t) {
            r(e, "", T({}, t, {
                expires: -1
            }))
        },
        withAttributes: function(t) {
            return e(this.converter, T({}, this.attributes, t))
        },
        withConverter: function(t) {
            return e(T({}, this.converter, t), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(a)
        },
        converter: {
            value: Object.freeze(t)
        }
    })
}({
    read: function(e) {
        return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
}, {
    path: "/"
});
let f = {
        COOKIE_KEY_PREFIX: "_elevar_",
        VISITOR_INFO_KEY: "_elevar_visitor_info"
    },
    S = {
        AWIN_CHANNEL_COOKIE: "AwinChannelCookie",
        BING_SID: "_uetsid",
        BING_VID: "_uetvid",
        CRITEO_USER_ID: "crto_mapped_user_id",
        CRITEO_USER_OPT_OUT: "crto_is_user_optout",
        FACEBOOK_BROWSER_ID: "_fbp",
        FACEBOOK_CLICK_ID: "_fbc",
        GOOGLE_ANALYTICS: "_ga",
        GOOGLE_ANALYTICS_GA4_PREFIX: "_ga_",
        REDDIT_UUID: "_rdt_uuid",
        SNAPCHAT_USER_ID: "_scid",
        TIKTOK_CLICK_ID: "ttclid",
        TIKTOK_COOKIE_ID: "_ttp"
    },
    g = {
        GOOGLE_CLICK_ID: "gclid",
        GOOGLE_GBRAID: "gbraid",
        GOOGLE_WBRAID: "wbraid",
        UTM_CAMPAIGN: "utm_campaign",
        UTM_CONTENT: "utm_content",
        UTM_MEDIUM: "utm_medium",
        UTM_SOURCE: "utm_source",
        UTM_TERM: "utm_term"
    },
    v = {
        APPLOVIN: "aleid",
        ASPIRE: "transaction_id",
        AWIN: "awc",
        BING: "msclkid",
        CJ: "cjevent",
        FACEBOOK: "fbclid",
        GOOGLE_ADS: "gclsrc",
        IMPACT_RADIUS: "irclickid",
        IMPACT_RADIUS_ALT_ID: "im_ref",
        ITERABLE: "iterable_campaign",
        KLAVIYO: "_kx",
        OUTBRAIN: "dicbo",
        PARTNERIZE: "clickref",
        PEPPERJAM: "clickId",
        PEPPERJAM_PUBLISHER_ID: "ev_publisherId",
        PINTEREST: "epik",
        RAKUTEN: "ranSiteID",
        REDDIT: "rdt_cid",
        SHAREASALE: "sscid",
        SNAPCHAT: "ScCid",
        TABOOLA: "tblci",
        TIKTOK: "ttclid",
        TWITTER: "twclid",
        VOLUUM: "vlmcid"
    },
    h = {
        FACEBOOK: "fbadid",
        GOOGLE: "gadid",
        PINTEREST: "padid",
        SMARTLY: "smadid",
        SNAPCHAT: "scadid",
        TIKTOK: "ttadid"
    },
    y = {
        ELEVAR_SESSION_COUNT: "session_count",
        ELEVAR_SESSION_ID: "session_id",
        ELEVAR_USER_ID: "user_id",
        MARKET_ID: "market_id",
        GOOGLE_ADS_CLICK_ID: "google_ads_click_id",
        GTM_CONSENT: "consent",
        GTM_CONSENT_V2: "consent_v2",
        RAKUTEN_TIME_STAMP: "ranSiteID_ts",
        REFERRER: "referrer",
        SMARTLY_TIME_STAMP: "smadid_ts"
    },
    b = (e, t) => btoa(t + (e.event_id ? `:${e.event_id}` : "") + (e.event ? `:${e.event}` : "")),
    D = e => e ? e.replace("gid://shopify/Market/", "") : "";

function N(e) {
    if ("object" != typeof e || null === e) return !1;
    let t = Object.getPrototypeOf(e);
    return null === t || t === Object.prototype
}
let w = Object.values(g),
    P = [...Object.values(h), ...Object.values(v)],
    L = [...w, ...P, ...Object.values(y)],
    K = e => {
        let t = g.GOOGLE_CLICK_ID,
            a = g.GOOGLE_GBRAID,
            r = g.GOOGLE_WBRAID,
            n = e.get(t),
            o = e.get(a),
            i = e.get(r);
        return n ? [
            [y.GOOGLE_ADS_CLICK_ID, `gclid:${n}`]
        ] : o ? [
            [y.GOOGLE_ADS_CLICK_ID, `gbraid:${o}`]
        ] : i ? [
            [y.GOOGLE_ADS_CLICK_ID, `wbraid:${i}`]
        ] : []
    },
    k = e => {
        let t = new URLSearchParams(e);
        return Object.fromEntries([...w, ...P].filter(e => t.has(e)).map(e => [e, t.get(e)]).concat(K(t)))
    },
    M = ["shop.app", "paypal.com", "hooks.stripe.com", "afterpay.com", "apay-us.amazon.com", "payments.amazon.co.uk", "payments.amazon.com", "payments-eu.amazon.com", "payments.amazon.de", "payments.amazon.it", "pay.klarna.com", "klarnapayments.com", "pay.google.com", "checkout.sezzle.com", "myshopify.com", "pay.shopify.com", "global-e.com", "payment.payone.com", "secure.payplug.com", "tabby.ai", "tamara.co", "paytr.com", "pend.ch", "sfy-payments.molops.net"],
    G = null,
    U = e => {
        if ("" === e.referrer) return {}; {
            let t = new URL(e.referrer),
                a = e.apexDomain ? [e.apexDomain, ...M] : M,
                r = e.referrer === G,
                n = t.hostname === location.hostname,
                o = a.some(e => t.hostname === e || t.hostname.endsWith(`.${e}`));
            return r || n || o ? {} : (G = e.referrer, {
                referrer: e.referrer
            })
        }
    },
    x = e => ({
        consent_v2: Object.fromEntries(Object.entries(e).map(([e, t]) => [e, { ...void 0 !== t.default ? {
                default: t.default
            } : {},
            ...void 0 !== t.update ? {
                update: t.update
            } : {}
        }]))
    }),
    F = e => {
        let t = Object.entries(e),
            a = f.VISITOR_INFO_KEY,
            r = t.find(([e]) => e === a);
        if (!r) return {};
        try {
            let e = r[1].replaceAll("&quot;", '"');
            return JSON.parse(e)
        } catch {
            return {}
        }
    },
    B = ({
        stale: e,
        updated: t
    }) => {
        let a = Object.fromEntries(e.filter(([e]) => w.includes(e))),
            r = t.some(([e]) => w.includes(e)),
            n = t.some(([e, t]) => e === y.REFERRER && a[e] !== t);
        return Object.fromEntries(r ? [...e.filter(([e]) => !w.includes(e)), ...t].filter(([e]) => e !== y.REFERRER) : n ? [...e, ...t].filter(([e]) => !w.includes(e)) : [...e, ...t])
    },
    $ = ({
        stale: e,
        fresh: t,
        newFiltered: a
    }) => {
        let r = h.SMARTLY in a && e[h.SMARTLY] !== t[h.SMARTLY],
            n = v.RAKUTEN in a && e[v.RAKUTEN] !== t[v.RAKUTEN];
        return { ...a,
            ...r ? {
                [y.SMARTLY_TIME_STAMP]: Math.floor(Date.now() / 1e3)
            } : y.SMARTLY_TIME_STAMP in e ? {
                [y.SMARTLY_TIME_STAMP]: e[y.SMARTLY_TIME_STAMP]
            } : {},
            ...n ? {
                [y.RAKUTEN_TIME_STAMP]: Math.floor(Date.now() / 1e3)
            } : y.RAKUTEN_TIME_STAMP in e ? {
                [y.RAKUTEN_TIME_STAMP]: e[y.RAKUTEN_TIME_STAMP]
            } : {}
        }
    },
    j = (e, t) => JSON.stringify(e) === JSON.stringify(t),
    Y = async ({
        getPersistedParams: e,
        setPersistedParams: t,
        search: a,
        referrer: r,
        apexDomain: n,
        userId: o,
        sessionId: i,
        sessionCount: s,
        marketId: c,
        rawConsentData: l,
        cartAttributes: _
    }) => {
        let d = B({
                stale: Object.entries(await e()),
                updated: Object.entries({ ...k(a),
                    ...U({
                        referrer: r,
                        apexDomain: n
                    }),
                    user_id: o,
                    session_id: i,
                    session_count: s,
                    ...c ? {
                        [y.MARKET_ID]: c
                    } : {},
                    ...l ? x(l) : {}
                })
            }),
            u = _ ? F(_) : {},
            m = ([e]) => L.includes(e),
            p = B({
                stale: Object.entries(u).filter(m),
                updated: Object.entries(d).filter(m)
            }),
            E = $({
                stale: u,
                fresh: d,
                newFiltered: p
            });
        return await t(E), Object.entries(E).some(([e, t]) => !j(t, u[e] ? ? null)) ? {
            [f.VISITOR_INFO_KEY]: JSON.stringify(E)
        } : {}
    },
    W = e => e.replace(/(?<prefix>(?:[^.]+\.){5})[^.]+\.(?<suffix>.*)/, "$<prefix>0.$<suffix>"),
    V = e => Object.fromEntries(Object.entries(e).map(([e, t]) => {
        let a = e.includes(S.GOOGLE_ANALYTICS_GA4_PREFIX) && t && t.split(".").length >= 4;
        return [e, a ? W(t) : t]
    })),
    H = [S.AWIN_CHANNEL_COOKIE, S.BING_SID, S.BING_VID, S.FACEBOOK_CLICK_ID, S.FACEBOOK_BROWSER_ID, S.GOOGLE_ANALYTICS, S.CRITEO_USER_OPT_OUT, S.CRITEO_USER_ID, S.REDDIT_UUID, S.TIKTOK_CLICK_ID, S.TIKTOK_COOKIE_ID, S.SNAPCHAT_USER_ID],
    z = e => [...H, ...Object.keys(e).filter(e => e.includes(S.GOOGLE_ANALYTICS_GA4_PREFIX))],
    J = (e, t) => Object.fromEntries(Object.entries(t).filter(([t]) => e.includes(t.replace(f.COOKIE_KEY_PREFIX, ""))).map(([e, t]) => [e.replace(f.COOKIE_KEY_PREFIX, ""), t])),
    X = async ({
        getPersistedParams: e,
        apexDomain: t,
        isConsentEnabled: a,
        freshCookies: r,
        localCookies: n
    }) => {
        let o = await e();
        if (!(!a || N(o.consent_v2) && N(o.consent_v2.ad_storage) && (!0 === o.consent_v2.ad_storage.default || !0 === o.consent_v2.ad_storage.update) && N(o.consent_v2.analytics_storage) && (!0 === o.consent_v2.analytics_storage.default || !0 === o.consent_v2.analytics_storage.update) && N(o.consent_v2.ad_personalization) && (!0 === o.consent_v2.ad_personalization.default || !0 === o.consent_v2.ad_personalization.update) && N(o.consent_v2.ad_user_data) && (!0 === o.consent_v2.ad_user_data.default || !0 === o.consent_v2.ad_user_data.update))) return [];
        let i = o[v.FACEBOOK],
            s = n[S.FACEBOOK_CLICK_ID],
            c = n[S.FACEBOOK_BROWSER_ID],
            l = `fb.1.${Date.now()}`,
            _ = "string" != typeof i || s && s.split(".")[3] === i ? null : `${l}.${i}`,
            d = c ? null : `${l}.${Math.floor(1e9+9e9*Math.random())}`;
        return (_ || !r[S.FACEBOOK_CLICK_ID] && s) && C.set(S.FACEBOOK_CLICK_ID, _ ? ? s, {
            domain: t ? ? location.hostname.replace("www.", ""),
            expires: 90,
            path: "/"
        }), (d || !r[S.FACEBOOK_BROWSER_ID] && c) && C.set(S.FACEBOOK_BROWSER_ID, d ? ? c, {
            domain: t ? ? location.hostname.replace("www.", ""),
            expires: 90,
            path: "/"
        }), [..._ ? [
            [S.FACEBOOK_CLICK_ID, _]
        ] : [], ...d ? [
            [S.FACEBOOK_BROWSER_ID, d]
        ] : []]
    },
    q = async ({
        getFreshCookies: e,
        getPersistedParams: t,
        getPersistedCookies: a,
        setPersistedCookies: r,
        apexDomain: n,
        isConsentEnabled: o,
        cartAttributes: i
    }) => {
        let s = V(await e()),
            c = z(s),
            l = V(await a()),
            _ = i ? V(J(c, i)) : {},
            d = c.map(e => {
                let t = s[e],
                    a = l[e],
                    r = _[e];
                return t !== a && void 0 !== t ? [e, t] : a !== r && void 0 !== a ? [e, a] : null
            }).filter(e => null !== e),
            u = { ...l,
                ...Object.fromEntries(d)
            },
            m = await X({
                getPersistedParams: t,
                apexDomain: n,
                isConsentEnabled: o,
                freshCookies: s,
                localCookies: u
            });
        await r({ ...u,
            ...Object.fromEntries(m)
        });
        let p = d.filter(([e]) => !m.some(([t]) => e === t));
        return Object.fromEntries([...m, ...p].map(([e, t]) => [`${f.COOKIE_KEY_PREFIX}${e}`, t]))
    },
    Z = e => e.replace("_64x64", ""),
    Q = (e, t) => p({
        setLocalStorage: (a, n) => (t({
            event: "consumeApexDomainCookie.setLocalStorage",
            context: {
                key: a,
                value: n
            }
        }), e.browser.localStorage.setItem(r[a], n)),
        getCookie: async a => {
            let r = await e.browser.cookie.get(a),
                n = C.converter.read(r, a);
            return t({
                event: "consumeApexDomainCookie.getCookie",
                context: {
                    name: a,
                    rawValue: r,
                    convertedValue: n
                }
            }), n
        }
    }),
    ee = (e, t, a) => I({
        apexDomain: t,
        getLocalStorage: async t => {
            let n = await e.browser.localStorage.getItem(r[t]);
            return a({
                event: "updateApexDomainCookie.getLocalStorage",
                context: {
                    key: t,
                    value: n
                }
            }), n
        },
        setCookie: async (t, r, n) => {
            let o = [`${t}=${C.converter.write(r,t)}`, `domain=${n.domain}`, `expires=${Date.now()+864e5*n.expires}`, ...n.secure ? ["secure"] : [], `samesite=${n.sameSite}`, "path=/"].join(";");
            a({
                event: "updateApexDomainCookie.setCookie",
                context: {
                    name: t,
                    value: r,
                    options: n,
                    builtValue: o
                }
            }), await e.browser.cookie.set(o)
        }
    }),
    et = async e => {
        let t = r.params;
        return o(await e.browser.localStorage.getItem(t))
    },
    ea = async (e, t) => {
        let a = r.params;
        await e.browser.localStorage.setItem(a, i(t))
    },
    er = async e => {
        let t = r.cookies;
        return s(await e.browser.localStorage.getItem(t))
    },
    en = async (e, t) => {
        let a = r.cookies;
        await e.browser.localStorage.setItem(a, c(t))
    },
    eo = async (e, t) => {
        let a = r.userId,
            n = await e.browser.localStorage.getItem(a);
        if (n) return n; {
            let r = t.clientId;
            return await e.browser.localStorage.setItem(a, r), r
        }
    },
    ei = async (e, t, a, n) => {
        let {
            sessionId: o,
            sessionCount: i
        } = await d({
            isForEvent: !1,
            getLocalStorage: t => e.browser.localStorage.getItem(r[t]),
            setLocalStorage: (t, a) => e.browser.localStorage.setItem(r[t], a)
        });
        return Y({
            getPersistedParams: async () => {
                let t = await et(e);
                return a({
                    event: "revalidateParams.getPersistedParams",
                    context: {
                        params: t
                    }
                }), t
            },
            setPersistedParams: t => (a({
                event: "revalidateParams.setPersistedParams",
                context: {
                    items: t
                }
            }), ea(e, t)),
            search: n.context.window.location.search,
            referrer: n.context.document.referrer,
            apexDomain: t,
            userId: await eo(e, n),
            sessionId: o,
            sessionCount: i,
            marketId: D(n.data.checkout.localization ? .market.id),
            rawConsentData: null,
            cartAttributes: null
        })
    },
    es = (e, t, a, r) => q({
        getFreshCookies: async () => {
            let t = await e.browser.cookie.get(),
                a = t ? Object.fromEntries(t.split(";").map(e => e.trim().split("=")).map(([e, t]) => [decodeURIComponent(e), C.converter.read(t, e)])) : {};
            return r({
                event: "revalidateCookies.getFreshCookies",
                context: {
                    cookieString: t,
                    cookies: a
                }
            }), a
        },
        getPersistedParams: async () => {
            let t = await et(e);
            return r({
                event: "revalidateCookies.getPersistedParams",
                context: {
                    params: t
                }
            }), t
        },
        getPersistedCookies: async () => {
            let t = await er(e);
            return r({
                event: "revalidateCookies.getPersistedCookies",
                context: {
                    cookies: t
                }
            }), t
        },
        setPersistedCookies: t => (r({
            event: "revalidateCookies.setPersistedCookies",
            context: {
                items: t
            }
        }), en(e, t)),
        apexDomain: t,
        isConsentEnabled: a,
        cartAttributes: null
    }),
    ec = async ({
        api: e,
        apexDomain: t,
        isConsentEnabled: a,
        log: r,
        event: n
    }) => (await Q(e, r), await ei(e, t, r, n), await es(e, t, a, r), await ee(e, t, r), [{
        name: f.VISITOR_INFO_KEY,
        value: JSON.stringify(await et(e))
    }, ...[...Object.entries(await er(e)).filter(e => void 0 !== e[1]).map(([e, t]) => ({
        name: `${f.COOKIE_KEY_PREFIX}${e}`,
        value: t
    }))].sort((e, t) => e.name.localeCompare(t.name))]),
    el = e => {
        switch (e) {
            case "checkout_started":
                return "dl_begin_checkout";
            case "checkout_contact_info_submitted":
                return "dl_add_contact_info";
            case "checkout_shipping_info_submitted":
                return "dl_add_shipping_info";
            case "payment_info_submitted":
                return "dl_add_payment_info";
            case "checkout_completed":
                return "dl_purchase"
        }
    },
    e_ = (e, t, a) => {
        let r = t.data.checkout,
            n = t.data.checkout.order ? .id ? .split("/").at(-1);
        return {
            event_name: el(t.name),
            event: {
                context: {
                    document_location: t.context.document.location.href,
                    document_title: t.context.document.title,
                    referrer: t.context.document.referrer
                },
                event_data: {
                    token: r.token ? ? "",
                    currency: r.currencyCode ? ? e.init.data.shop.paymentSettings.currencyCode,
                    customer: {
                        email: r.email ? ? void 0,
                        phone: r.phone ? ? void 0
                    },
                    ..."checkout_completed" === t.name && n ? {
                        order: {
                            id: n
                        }
                    } : {},
                    line_items: r.lineItems.map(e => e.variant ? {
                        id: e.id ? ? "",
                        quantity: e.quantity,
                        title: e.title ? ? void 0,
                        sellingPlanName: e.sellingPlanAllocation ? .sellingPlan.name ? ? "one-time",
                        variant: {
                            id: e.variant.id ? ? "",
                            price: e.variant.price.amount,
                            sku: e.variant.sku,
                            title: e.variant.title,
                            image: e.variant.image ? .src ? Z(e.variant.image.src) : void 0,
                            product: {
                                id: e.variant.product.id ? ? "",
                                title: e.variant.product.title,
                                vendor: e.variant.product.vendor
                            }
                        }
                    } : null).filter(e => null !== e),
                    shipping_address: {
                        phone: r.shippingAddress ? .phone ? ? void 0,
                        city: r.shippingAddress ? .city ? ? void 0,
                        country: r.shippingAddress ? .country ? ? void 0,
                        country_code: r.shippingAddress ? .countryCode ? ? void 0,
                        province: r.shippingAddress ? .province ? ? void 0,
                        province_code: r.shippingAddress ? .provinceCode ? ? void 0,
                        zip: r.shippingAddress ? .zip ? ? void 0
                    },
                    subtotal_price: r.subtotalPrice ? .amount ? ? 0,
                    total_price: r.totalPrice ? .amount ? ? 0,
                    total_tax: r.totalTax ? .amount,
                    shipping_price: r.shippingLine ? .price ? .amount
                },
                event_time: t.timestamp,
                note_attributes: a
            }
        }
    },
    ed = async ({
        api: e,
        config: t,
        apexDomain: a,
        log: r,
        event: n
    }) => {
        let o = await ec({
            api: e,
            apexDomain: a,
            isConsentEnabled: t.consent_enabled,
            log: r,
            event: n
        });
        r({
            event: "fullyManagedHandler.commonInfo",
            context: {
                event: n,
                notes: o
            }
        });
        let i = e_(e, n, o),
            s = `${i.event_name}_${n.data.checkout.token}`,
            c = b({
                event_id: s,
                event: i.event_name
            }, t.signing_key),
            l = new URLSearchParams({
                signature: c,
                source_url: n.context.document.location.href,
                timestamp: String(Math.floor(Date.now() / 1e3)),
                shop: t.shop_url
            }).toString();
        await fetch(`${t.connector_url}/base/order-notes?${l}`, {
            method: "POST",
            body: JSON.stringify(i),
            headers: {
                "Content-Type": "application/json"
            }
        }), r({
            event: "fullyManagedHandler.stashedInfo",
            context: {
                webEvent: i,
                id: s,
                signature: c,
                query: l
            }
        })
    },
    eu = ({
        api: e,
        config: t,
        apexDomain: a,
        log: r
    }) => {
        let n = n => {
            ed({
                api: e,
                config: t,
                apexDomain: a,
                log: r,
                event: n
            })
        };
        e.analytics.subscribe("checkout_started", n), e.analytics.subscribe("checkout_contact_info_submitted", n), e.analytics.subscribe("checkout_shipping_info_submitted", n), e.analytics.subscribe("payment_info_submitted", n), e.analytics.subscribe("checkout_completed", n)
    },
    em = async (e, t) => {
        try {
            let a = E({
                    apexDomains: t.apex_domains,
                    location: e.init.context.window.location
                }),
                r = await e.browser.localStorage.getItem("shopify-pixel-mode"),
                n = ({
                    event: e,
                    context: t
                }) => {
                    "verbose" === r && R("WEB_PIXEL_LOG", [{
                        event: e,
                        context: t
                    }])
                };
            if (n({
                    event: "registerHandlers.commonInfo",
                    context: { ...e
                    }
                }), "debug" === r) debugger;
            eu({
                api: e,
                config: t,
                apexDomain: a,
                log: n
            })
        } catch (e) {
            R("UNEXPECTED", [e])
        }
    };
var ep = t.y;
export {
    ep as handler
};