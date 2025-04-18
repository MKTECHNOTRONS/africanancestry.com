(() => {
    var c = "WebPixel::Render";
    var o = e => shopify.extend(c, e);
    o(({
        analytics: e,
        browser: r,
        settings: i
    }) => {
        e.subscribe("checkout_completed", t => {
            let s = {
                data: {
                    cart: t.data.checkout.lineItems.map(a => ({
                        quantity: a.quantity,
                        variant_id: a.variant.id
                    }))
                }
            };
            var p = "https://upsells.boldapps.net/v2/";
            fetch(p + i.myshopify_url + "/track_conversion_by_web_pixel", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(s),
                keepalive: !0
            })
        }), e.subscribe("product_added_to_cart", () => {
            var t = Date.now().valueOf();
            r.cookie.set("BOLD_cart_last_updated", t)
        }), e.subscribe("product_removed_from_cart", () => {
            var t = Date.now().valueOf();
            r.cookie.set("BOLD_cart_last_updated", t)
        })
    });
})();