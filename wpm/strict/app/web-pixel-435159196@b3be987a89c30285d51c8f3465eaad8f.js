(() => {
    var N = Object.create;
    var g = Object.defineProperty;
    var O = Object.getOwnPropertyDescriptor;
    var u = Object.getOwnPropertyNames;
    var v = Object.getPrototypeOf,
        w = Object.prototype.hasOwnProperty;
    var s = (t, e) => () => (t && (e = t(t = 0)), e);
    var A = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var C = (t, e, i, r) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let o of u(e)) !w.call(t, o) && o !== i && g(t, o, {
                get: () => e[o],
                enumerable: !(r = O(e, o)) || r.enumerable
            });
        return t
    };
    var P = (t, e, i) => (i = t != null ? N(v(t)) : {}, C(e || !t || !t.__esModule ? g(i, "default", {
        value: t,
        enumerable: !0
    }) : i, t));
    var l = (t, e, i) => new Promise((r, o) => {
        var p = n => {
                try {
                    c(i.next(n))
                } catch (f) {
                    o(f)
                }
            },
            S = n => {
                try {
                    c(i.throw(n))
                } catch (f) {
                    o(f)
                }
            },
            c = n => n.done ? r(n.value) : Promise.resolve(n.value).then(p, S);
        c((i = i.apply(t, e)).next())
    });
    var m, x = s(() => {
        m = "WebPixel::Render"
    });
    var a, y = s(() => {
        x();
        a = t => shopify.extend(m, t)
    });
    var E = s(() => {
        y()
    });
    var d = s(() => {
        E()
    });
    var T = A(_ => {
        "use strict";
        d();
        var b = t => l(_, null, function*() {
            let r = (yield
                    import (t.settings.config_url)).default,
                o = r.script_src_web_pixel_strict_app;
            if (o) {
                let {
                    handler: p
                } = yield
                import (o);
                yield p(t, r)
            }
        });
        a(t => void b(t))
    });
    var B = P(T());
})();