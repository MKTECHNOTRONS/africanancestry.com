(() => {
    var ht = Object.defineProperty,
        yt = Object.defineProperties;
    var xt = Object.getOwnPropertyDescriptors;
    var B = Object.getOwnPropertySymbols;
    var At = Object.prototype.hasOwnProperty,
        gt = Object.prototype.propertyIsEnumerable;
    var X = (t, e, r) => e in t ? ht(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : t[e] = r,
        l = (t, e) => {
            for (var r in e || (e = {})) At.call(e, r) && X(t, r, e[r]);
            if (B)
                for (var r of B(e)) gt.call(e, r) && X(t, r, e[r]);
            return t
        },
        G = (t, e) => yt(t, xt(e));
    var R = (t, e, r) => new Promise((c, o) => {
        var i = n => {
                try {
                    s(r.next(n))
                } catch (d) {
                    o(d)
                }
            },
            a = n => {
                try {
                    s(r.throw(n))
                } catch (d) {
                    o(d)
                }
            },
            s = n => n.done ? c(n.value) : Promise.resolve(n.value).then(i, a);
        s((r = r.apply(t, e)).next())
    });
    var j = "WebPixel::Render";
    var w = t => shopify.extend(j, t);

    function J(t) {
        let e = t + Vt(new Date);
        return v(e)
    }

    function Vt(t) {
        return `${t.getUTCFullYear()}-${t.getUTCMonth()+1}-${t.getUTCDate()}-${t.getUTCHours()}-${t.getUTCMinutes()}`
    }

    function v(t, e = 0) {
        let r, c, o, i, a = t.length & 3,
            s = t.length - a,
            n = 3432918353,
            d = 461845907;
        for (r = e, i = 0; i < s;) o = t.charCodeAt(i) & 255 | (t.charCodeAt(++i) & 255) << 8 | (t.charCodeAt(++i) & 255) << 16 | (t.charCodeAt(++i) & 255) << 24, ++i, o = (o & 65535) * n + (((o >>> 16) * n & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, o = (o & 65535) * d + (((o >>> 16) * d & 65535) << 16) & 4294967295, r ^= o, r = r << 13 | r >>> 19, c = (r & 65535) * 5 + (((r >>> 16) * 5 & 65535) << 16) & 4294967295, r = (c & 65535) + 27492 + (((c >>> 16) + 58964 & 65535) << 16);
        switch (o = 0, a) {
            case 3:
                o ^= (t.charCodeAt(i + 2) & 255) << 16;
            case 2:
                o ^= (t.charCodeAt(i + 1) & 255) << 8;
            case 1:
                o ^= t.charCodeAt(i) & 255, o = (o & 65535) * n + (((o >>> 16) * n & 65535) << 16) & 4294967295, o = o << 15 | o >>> 17, o = (o & 65535) * d + (((o >>> 16) * d & 65535) << 16) & 4294967295, r ^= o
        }
        return r ^= t.length, r ^= r >>> 16, r = (r & 65535) * 2246822507 + (((r >>> 16) * 2246822507 & 65535) << 16) & 4294967295, r ^= r >>> 13, r = (r & 65535) * 3266489909 + (((r >>> 16) * 3266489909 & 65535) << 16) & 4294967295, r ^= r >>> 16, r >>> 0
    }
    var z = "web-pixel",
        Q = "web-pixel",
        D = "__attentive_cart",
        Z = "__attentive_id",
        tt = "__attentive_ceid",
        et = "__attentive_domain",
        rt = "_shopify_y",
        ot = "web-pixel",
        ct = "cs",
        L = "c",
        it = "ceid",
        f = "m",
        _ = "t",
        at = "lt",
        nt = "pd",
        Y = "r",
        U = "v",
        k = "u",
        H = "tag",
        I = "uid",
        F = "p",
        W = "oc",
        M = "e";
    var dt = "cu",
        st = "c",
        ut = "v",
        Et = "d";
    var pt = "idn",
        ft = "t",
        _t = "r",
        mt = "l",
        Tt = "s";
    var Nt = [F, W, M],
        Ot = new Date().getTime();
    w(({
        settings: t,
        analytics: e,
        browser: r,
        init: c
    }) => {
        let i = {
            settings: {
                environment: t.env
            },
            analytics: e,
            browser: r,
            init: c
        };
        kt(i), e.subscribe("page_viewed", a => {
            vt(a, i)
        }), e.subscribe("product_added_to_cart", a => {
            wt(a, i)
        }), e.subscribe("product_viewed", a => {
            Pt(a, i)
        }), e.subscribe("product_variant_viewed", a => {
            Pt(a, i)
        }), e.subscribe("checkout_completed", a => {
            St(a, i)
        }), e.subscribe("checkout_started", a => {
            $(a, i)
        }), e.subscribe("checkout_contact_info_submitted", a => {
            $(a, i)
        }), e.subscribe("payment_info_submitted", a => {
            $(a, i)
        }), e.subscribe("cart_viewed", a => {
            Dt(a, i)
        }), e.subscribe("product_removed_from_cart", a => {
            Lt(a, i)
        }), e.subscribe("collection_viewed", a => {
            Yt(a, i)
        }), e.subscribe("search_submitted", a => {
            Ut(a, i)
        })
    });

    function bt(t, e) {
        let r = {
            [f]: t,
            [_]: F
        };
        return P(r, e)
    }

    function Rt(t, e, r) {
        let c = q(t),
            o = K(t),
            i = {
                [f]: G(l(l({}, c), o), {
                    products: e
                }),
                [_]: W
            };
        return P(i, r)
    }

    function $(t, e) {
        let r = K(t),
            c = q(t);
        if (c.email || c.phone) {
            let o = {
                [_]: pt,
                [f]: l(l({}, c), r)
            };
            P(o, e)
        }
    }

    function St(t, e) {
        try {
            let r = K(t),
                c = Ht(t, e),
                o = q(t);
            c.forEach(i => {
                bt(l(l(l({}, i), o), r), e).catch(a => S(a, e))
            }), Rt(t, c, e).catch(i => S(i, e))
        } catch (r) {
            S(r, e)
        }
    }

    function wt(t, e) {
        var o, i, a, s, n, d, u, E, p, T, m, C, h, y, x, A, g, V, O, b;
        let r = {
                productUrl: N((i = (o = t.data.cartLine) == null ? void 0 : o.merchandise.product.url) != null ? i : "", e),
                productId: (s = (a = t.data.cartLine) == null ? void 0 : a.merchandise.product.id) != null ? s : "",
                sku: (d = (n = t.data.cartLine) == null ? void 0 : n.merchandise.product.id) != null ? d : "",
                image: (E = (u = t.data.cartLine) == null ? void 0 : u.merchandise.image) == null ? void 0 : E.src,
                subProductId: (T = (p = t.data.cartLine) == null ? void 0 : p.merchandise.id) != null ? T : "",
                name: (C = (m = t.data.cartLine) == null ? void 0 : m.merchandise.product.title) != null ? C : "",
                category: (y = (h = t.data.cartLine) == null ? void 0 : h.merchandise.product.type) != null ? y : "",
                price: (A = (x = t.data.cartLine) == null ? void 0 : x.merchandise.price.amount) != null ? A : 0,
                currency: (V = (g = t.data.cartLine) == null ? void 0 : g.merchandise.price.currencyCode) != null ? V : "",
                quantity: Number((b = (O = t.data.cartLine) == null ? void 0 : O.quantity) != null ? b : 1)
            },
            c = {
                [_]: st,
                [f]: l({
                    [I]: t.clientId
                }, r)
            };
        P(c, e)
    }

    function vt(t, e) {
        let r = {
            [_]: ut,
            [f]: {
                [I]: t.clientId
            }
        };
        P(r, e)
    }

    function Pt(t, e) {
        var c;
        let r = {
            [_]: Et,
            [f]: {
                [I]: t.clientId,
                productUrl: N(t.data.productVariant.product.url, e),
                sku: t.data.productVariant.product.id,
                productId: t.data.productVariant.product.id,
                image: N((c = t.data.productVariant.image) == null ? void 0 : c.src, e),
                subProductId: t.data.productVariant.id,
                name: t.data.productVariant.product.title,
                category: t.data.productVariant.product.type,
                price: t.data.productVariant.price.amount,
                currency: t.data.productVariant.price.currencyCode,
                quantity: 1
            }
        };
        P(r, e)
    }

    function Dt(t, e) {
        var o, i, a, s, n, d, u, E;
        let r = ((i = (o = t.data.cart) == null ? void 0 : o.lines) == null ? void 0 : i.map(p => Ct(p, e))) || [],
            c = {
                [f]: {
                    [I]: t.clientId,
                    cartId: (a = t.data.cart) == null ? void 0 : a.id,
                    cartTotal: (d = (n = (s = t.data.cart) == null ? void 0 : s.cost) == null ? void 0 : n.totalAmount.amount) != null ? d : 0,
                    currency: (E = (u = t.data.cart) == null ? void 0 : u.cost) == null ? void 0 : E.totalAmount.currencyCode,
                    products: r
                },
                [_]: ft
            };
        return P(c, e)
    }

    function Lt(t, e) {
        var o, i, a, s, n, d, u, E, p, T, m, C, h, y, x, A, g, V, O, b;
        let r = {
                productUrl: N((i = (o = t.data.cartLine) == null ? void 0 : o.merchandise.product.url) != null ? i : "", e),
                productId: (s = (a = t.data.cartLine) == null ? void 0 : a.merchandise.product.id) != null ? s : "",
                sku: (d = (n = t.data.cartLine) == null ? void 0 : n.merchandise.product.id) != null ? d : "",
                image: (E = (u = t.data.cartLine) == null ? void 0 : u.merchandise.image) == null ? void 0 : E.src,
                subProductId: (T = (p = t.data.cartLine) == null ? void 0 : p.merchandise.id) != null ? T : "",
                name: (C = (m = t.data.cartLine) == null ? void 0 : m.merchandise.product.title) != null ? C : "",
                category: (y = (h = t.data.cartLine) == null ? void 0 : h.merchandise.product.type) != null ? y : "",
                price: (A = (x = t.data.cartLine) == null ? void 0 : x.merchandise.price.amount) != null ? A : 0,
                currency: (V = (g = t.data.cartLine) == null ? void 0 : g.merchandise.price.currencyCode) != null ? V : "",
                quantity: Number((b = (O = t.data.cartLine) == null ? void 0 : O.quantity) != null ? b : 1)
            },
            c = {
                [_]: _t,
                [f]: l({
                    [I]: t.clientId
                }, r)
            };
        P(c, e)
    }

    function lt(t, e) {
        var r;
        return {
            productUrl: N(t.product.url, e),
            sku: t.product.id,
            productId: t.product.id,
            image: N((r = t.image) == null ? void 0 : r.src, e),
            subProductId: t.id,
            name: t.product.title,
            category: t.product.type,
            price: t.price.amount,
            currency: t.price.currencyCode,
            quantity: 1
        }
    }

    function Yt(t, e) {
        var o;
        let r = ((o = t.data.collection.productVariants) == null ? void 0 : o.slice(0, 5).map(i => lt(i, e))) || [],
            c = {
                [_]: mt,
                [f]: {
                    [I]: t.clientId,
                    collectionId: t.data.collection.id,
                    collectionTitle: t.data.collection.title,
                    collectionProducts: r
                }
            };
        P(c, e)
    }

    function Ut(t, e) {
        var o;
        let r = ((o = t.data.searchResult.productVariants) == null ? void 0 : o.slice(0, 5).map(i => lt(i, e))) || [],
            c = {
                [_]: Tt,
                [f]: {
                    [I]: t.clientId,
                    query: t.data.searchResult.query,
                    products: r
                }
            };
        return P(c, e)
    }

    function kt(t) {
        return R(this, null, function*() {
            var i, a, s, n, d, u, E, p, T;
            let e = [];
            if (typeof t.init.data.cart == "object" && Array.isArray((i = t.init.data.cart) == null ? void 0 : i.lines))
                for (let m of t.init.data.cart.lines) e.push(Ct(m, t));
            let r = yield t.browser.cookie.get(rt), c = String(v(JSON.stringify(e)));
            if ((yield t.browser.localStorage.getItem(D)) !== c) try {
                let m = {
                    [_]: dt,
                    [f]: {
                        [I]: r,
                        email: (a = t.init.data.customer) == null ? void 0 : a.email,
                        phone: (s = t.init.data.customer) == null ? void 0 : s.phone,
                        cartId: (n = t.init.data.cart) == null ? void 0 : n.id,
                        cartTotal: (E = (u = (d = t.init.data.cart) == null ? void 0 : d.cost) == null ? void 0 : u.totalAmount.amount) != null ? E : 0,
                        currency: (T = (p = t.init.data.cart) == null ? void 0 : p.cost) == null ? void 0 : T.totalAmount.currencyCode,
                        products: e
                    }
                };
                P(m, t), t.browser.localStorage.setItem(D, c)
            } catch (m) {
                S(m, t)
            }
        })
    }

    function S(t, e, r = !1) {
        let c = {
            [_]: M,
            [f]: {
                message: t.message,
                name: t.name,
                stack: t.stack
            }
        };
        r ? It(c, e, !0) : P(c, e)
    }

    function P(t, e) {
        return R(this, null, function*() {
            var r, c, o, i;
            try {
                let {
                    browser: a,
                    init: s
                } = e, {
                    attnDomain: n,
                    externalId: d,
                    visitorId: u,
                    activeEventTypes: E
                } = yield Ft(a), p = (r = s.data.customer) == null ? void 0 : r.id;
                t[it] = d, t[L] = n, t[at] = Ot, t[nt] = s.context.window.location.href, t[Y] = s.context.document.referrer, t[H] = z, t[U] = Q, t[k] = u, t[f].source = ot, p && (t[f].email = (c = e.init.data.customer) == null ? void 0 : c.email, t[f].phone = (o = e.init.data.customer) == null ? void 0 : o.phone, t[f].customerId = (i = e.init.data.customer) == null ? void 0 : i.id), t[ct] = J(t[k] + t[_] + t[U] + t[Y] + t[L]);
                let T = E.includes(t[_]);
                It(t, e, T)
            } catch (a) {
                S(a, e, !0)
            }
        })
    }

    function It(t, e, r = !1) {
        let o = `https://events${e.settings.environment==="dev"?".dev":""}.attentivemobile.com`;
        r && fetch(`${o}/swp`, {
            method: "POST",
            body: JSON.stringify(t),
            keepalive: !0,
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain"
            }
        }), Nt.includes(t[_]) && (t[H] = "checkout-web-pixel", fetch(`${o}/e?${Mt(t)}`, {
            method: "POST",
            keepalive: !0,
            mode: "no-cors"
        }))
    }

    function Ct(t, e) {
        var r, c, o, i, a;
        return {
            productUrl: N((r = t.merchandise.product.url) != null ? r : "", e),
            sku: t.merchandise.product.id,
            productId: t.merchandise.product.id,
            image: (o = (c = t.merchandise.image) == null ? void 0 : c.src) != null ? o : "",
            subProductId: t.merchandise.id,
            name: t.merchandise.product.title,
            category: (i = t.merchandise.product.type) != null ? i : "",
            price: t.merchandise.price.amount,
            currency: t.merchandise.price.currencyCode,
            quantity: Number((a = t.quantity) != null ? a : 1)
        }
    }

    function Ht(t, e) {
        return t.data.checkout.lineItems.map(c => {
            var o, i, a, s, n, d, u, E, p, T, m, C, h, y, x, A, g, V;
            return {
                productUrl: N((i = (o = c.variant) == null ? void 0 : o.product.url) != null ? i : "", e),
                sku: (s = (a = c.variant) == null ? void 0 : a.product.id) != null ? s : "",
                productId: (d = (n = c.variant) == null ? void 0 : n.product.id) != null ? d : "",
                image: (p = (E = (u = c.variant) == null ? void 0 : u.image) == null ? void 0 : E.src) != null ? p : "",
                name: (T = c.title) != null ? T : "",
                price: (C = (m = c.variant) == null ? void 0 : m.price.amount) != null ? C : 0,
                currency: (h = t.data.checkout.currencyCode) != null ? h : "",
                quantity: Number((y = c.quantity) != null ? y : 1),
                subProductId: (A = (x = c.variant) == null ? void 0 : x.id) != null ? A : "",
                category: (V = (g = c.variant) == null ? void 0 : g.product.type) != null ? V : ""
            }
        })
    }

    function K(t) {
        var c, o;
        let e = t.data.checkout,
            r = ((c = e.discountApplications) != null ? c : []).filter(i => i.type === "DISCOUNT_CODE").map(i => i.title).join(",");
        return {
            checkoutId: e.token,
            cartTotal: e.totalPrice.amount,
            orderId: (o = e.order) == null ? void 0 : o.id,
            cartCurrency: e.currencyCode,
            cartCoupon: r
        }
    }

    function q(t) {
        return {
            email: t.data.checkout.email,
            phone: t.data.checkout.phone,
            [I]: t.clientId
        }
    }

    function Ft(t) {
        return R(this, null, function*() {
            var s, n, d, u, E, p;
            let e = yield Wt(t), r = (s = e == null ? void 0 : e.c) != null ? s : yield t.cookie.get(et), c = (n = e == null ? void 0 : e.ceid) != null ? n : yield t.cookie.get(tt), o = (u = (d = e == null ? void 0 : e.u) == null ? void 0 : d.val) != null ? u : yield t.cookie.get(Z), i = (E = e == null ? void 0 : e.bctu) != null ? E : "", a = ((p = e == null ? void 0 : e.swpe) != null ? p : "").split(",");
            return {
                attnDomain: r,
                externalId: c,
                visitorId: o,
                edgeTagUrl: i,
                activeEventTypes: [...a, "l", "r", "s", "t"]
            }
        })
    }

    function Wt(t) {
        return R(this, null, function*() {
            let e;
            try {
                e = JSON.parse((yield t.sessionStorage.getItem("_attn_")) || "{}")
            } catch (r) {
                e = {}
            } finally {
                return e
            }
        })
    }

    function Mt(t) {
        return Object.entries(t || {}).reduce((e, [r, c]) => (typeof c == "object" && c != null ? e.push(`${r}=${encodeURIComponent(JSON.stringify(c))}`) : (typeof c == "string" || typeof c == "number" || typeof c == "boolean") && e.push(`${r}=${encodeURIComponent(c)}`), e), []).join("&")
    }

    function N(t, e) {
        return t ? t.startsWith("//") ? `https:${t}` : t.startsWith("/") ? `${e.init.context.window.location.origin}${t}` : t : ""
    }
})();