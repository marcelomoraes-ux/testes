class LinkPrerenderer {
    constructor({
        selector = "a[href]",
        delay = 100,
        mobilePrefetchLinks = [],
        mobilePrerenderLinks = [],
        hoverPrerenderLinks = [],
        mobileMobileOnly = !0,
        networkAware = !0,
        useIdle = !0,
        prefetchFallbackAs = "document"
    } = {}) {
        this.selector = selector, this.delay = delay, this.priorityPageLinks = [], document.querySelector(".ProductItem__Wrapper") && (this.priorityPageLinks = [...new Set([...document.querySelectorAll(".ProductItem__Wrapper a")].map(p => p.getAttribute("href")))].splice(0, 10)), this.mobilePrefetchLinks = mobilePrefetchLinks, this.mobilePrerenderLinks = [...this.priorityPageLinks, ...mobilePrerenderLinks], this.hoverPrerenderLinks = [...this.priorityPageLinks, ...hoverPrerenderLinks], this.mobileMobileOnly = mobileMobileOnly, this.networkAware = networkAware, this.useIdle = useIdle, this.prefetchFallbackAs = prefetchFallbackAs, this.timeoutMap = new WeakMap, this.prefetched = new Set, this.init()
    }
    init() {
        if (document.addEventListener("mouseover", e => this.handleHover(e)), document.addEventListener("mouseout", e => this.clearHover(e)), !this.mobileMobileOnly || this.isMobile()) {
            const run = () => {
                this.prefetchMobilePrefetchLinks(), this.prerenderMobilePrefetchLinks()
            };
            this.useIdle && "requestIdleCallback" in window ? requestIdleCallback(run, {
                timeout: 1500
            }) : setTimeout(run, 350)
        }
    }
    handleHover(e) {
        const link = e.target.closest(this.selector);
        if (!link) return;
        const url = this.normalizeSameOriginUrl(link.href);
        if (!url || this.shouldSkipPrefetch()) return;
        const timeoutId = setTimeout(() => {
            this.matchesHoverPrerender(url) ? this.prerender(url) : this.prefetch(url), this.timeoutMap.delete(link)
        }, this.delay);
        this.timeoutMap.set(link, timeoutId)
    }
    clearHover(e) {
        const link = e.target.closest(this.selector);
        if (!link) return;
        const id = this.timeoutMap.get(link);
        id && (clearTimeout(id), this.timeoutMap.delete(link))
    }
    prefetchMobilePrefetchLinks() {
        if (!this.shouldSkipPrefetch())
            for (const href of this.mobilePrefetchLinks) {
                const url = this.normalizeSameOriginUrl(href);
                url && this.prefetch(url)
            }
    }
    prerenderMobilePrefetchLinks() {
        if (!this.shouldSkipPrefetch())
            for (const href of this.mobilePrerenderLinks) {
                const url = this.normalizeSameOriginUrl(href);
                url && this.prerender(url)
            }
    }
    prefetch(url) {
        const key = `prefetch:${url}`;
        if (this.prefetched.has(key) || document.querySelector(`link[rel="prefetch"][href="${url}"]`)) return;
        const el = document.createElement("link");
        el.rel = "prefetch", el.href = url, this.prefetchFallbackAs && (el.as = this.prefetchFallbackAs), document.head.appendChild(el), this.prefetched.add(key)
    }
    prerender(url) {
        const key = `prerender:${url}`;
        if (this.prefetched.has(key) || document.querySelector(`link[rel="prerender"][href="${url}"]`)) return;
        const el = document.createElement("link");
        el.rel = "prerender", el.href = url, document.head.appendChild(el), this.prefetched.add(key)
    }
    matchesHoverPrerender(url) {
        for (const prefix of this.hoverPrerenderLinks)
            if (typeof prefix == "string" && url == prefix) return !0;
        return !1
    }
    normalizeSameOriginUrl(href) {
        try {
            const u = new URL(href, location.href);
            return u.origin !== location.origin || u.pathname === location.pathname && (u.search === location.search || !u.search) ? null : u.pathname + u.search
        } catch {
            return null
        }
    }
    shouldSkipPrefetch() {
        if (!this.networkAware) return !1;
        const conn = navigator.connection,
            saveData = conn && conn.saveData,
            slow = conn && typeof conn.effectiveType == "string" && /(^|-)2g$|slow-2g/.test(conn.effectiveType);
        return !!(saveData || slow)
    }
    isMobile() {
        return window.matchMedia("(pointer: coarse)").matches ? !0 : Math.max(screen.width, screen.height) < 900
    }
}
new LinkPrerenderer({
    delay: 150,
    mobilePrefetchLinks: ["/", "/collections/outlet", "/products/hidratante-corporal-super-body", "/products/solucao-niacinamida", "/collections/shop-all", "/account", "/products/balm-de-olhos", "/products/solucao-gaba", "/collections/best-sellers"],
    mobilePrerenderLinks: ["/", "/collections/outlet", "/collections/shop-all", "/collections/best-sellers"],
    hoverPrerenderLinks: ["/", "/collections/outlet", "/collections/shop-all", "/collections/best-sellers"],
    mobileMobileOnly: !0,
    networkAware: !0,
    useIdle: !0
});
//# sourceMappingURL=/cdn/shop/t/275/assets/services.prerender.js.map?v=11879225926465283251781206501