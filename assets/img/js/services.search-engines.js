class SearchProvider {
    loadScript(src, integrity, crossorigin) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return
            }
            const script = document.createElement("script");
            script.src = src, integrity && (script.integrity = integrity), crossorigin && (script.crossOrigin = crossorigin), script.async = !0, script.onload = resolve, script.onerror = reject, document.head.appendChild(script)
        })
    }
    async fetchResults(query) {
        throw new Error("Method 'search' must be implemented.")
    }
    async search(query) {
        return await this.fetchResults(query)
    }
}
class SearchaniseProvider extends SearchProvider {
    async fetchResults(query) {
        const searchAPI = `https://searchserverapi.com/getwidgets?api_key=8E3b6m6D1H&q=${encodeURIComponent(query)}&queryCorrection=true&maxResults=12&startIndex=0&items=true&pages=true&facets=false&categories=true&suggestions=true&vendors=false&tags=false&pageStartIndex=0&pagesMaxResults=5&categoryStartIndex=0&categoriesMaxResults=5&suggestionsMaxResults=5&recentlyViewedProducts=5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570%2C5641915793570&recentlyAddedToCartProducts=&recentlyPurchasedProducts=&vendorsMaxResults=3&tagsMaxResults=3&output=json`,
            response = await axios.get(searchAPI),
            pages = response.data.pages || [],
            suggestions = response.data.suggestions || [],
            items = response.data.items || [];
        return {
            suggestions,
            pages: pages.map(page => ({
                title: page.title,
                url: page.link,
                image: page.image_link
            })),
            items: items.map(item => ({
                title: item.title,
                compare_at_price: item.compare_at_price,
                price: item.price,
                quantity: +item.quantity,
                url: item.link,
                image: item.image_link,
                tagline: item.metafield_3215151bbd4cfd66676f3abb4660934f || "",
                variant_id: item.add_to_cart_id,
                sort_index: +item.total_reviews
            }))
        }
    }
}
class AlgoliaProvider extends SearchProvider {
    constructor() {
        super(), this.client = null, this.index = null, this.suggestions_index = null, this.pages_index = null, this.scriptLoaded = this.init()
    }
    async init() {
        await this.loadScript("https://cdn.jsdelivr.net/npm/algoliasearch@4.24.0/dist/algoliasearch-lite.umd.js", "sha256-b2n6oSgG4C1stMT/yc/ChGszs9EY/Mhs6oltEjQbFCQ=", "anonymous");
        const algoliasearch = window.algoliasearch;
        this.client = algoliasearch("YLMY8Z5EF4", "d59d196219b9fafa2533e06b8699d4b0"), this.index = this.client.initIndex("shopify_products"), this.suggestions_index = this.client.initIndex("shopify_products_query_suggestions"), this.pages_index = this.client.initIndex("shopify_articles")
    }
    async fetchResults(query) {
        await this.scriptLoaded;
        const [searchProductsResponse, searchSuggestionsResponse, searchPagesResponse] = await Promise.all([this.index.search(query, {
            hitsPerPage: 24
        }), this.suggestions_index.search(query, {
            hitsPerPage: 12
        }), this.pages_index.search(query, {
            hitsPerPage: 12
        })]), hits = searchProductsResponse.hits || [], suggestions = searchSuggestionsResponse.hits || [], pages = searchPagesResponse.hits || [];
        return {
            suggestions: suggestions.map(suggestion => suggestion.query),
            pages: pages.map(page => ({
                title: page.title,
                url: `/blogs/simple-blog/${page.handle}`,
                image: page.image
            })),
            items: hits.filter(h => !h.tags.includes("hidden_product")).sort((a, b) => {
                const hasLowPriority = (product_categories = []) => {
                    let categories = product_categories.map(str => str.toLowerCase());
                    return categories.includes("brinde") || categories.includes("marketplace") || categories.includes("kit")
                };
                return hasLowPriority(a ? .meta ? .attributes ? .category) - hasLowPriority(b ? .meta ? .attributes ? .category)
            }).map(hit => (hit.meta.custom_fields = hit.meta.custom_fields || {}, {
                title: hit.title,
                compare_at_price: hit.compare_at_price,
                price: hit.price,
                quantity: hit.inventory_quantity,
                url: `/products/${hit.handle}`,
                image: hit.image,
                tagline: hit.meta.custom_fields.tagline || "",
                variant_id: hit.objectID,
                sort_index: 0
            }))
        }
    }
}
class SearchProviderFactory {
    static createProvider(providerType) {
        switch (providerType) {
            case "searchanise":
                return new SearchaniseProvider;
            case "algolia":
                return new AlgoliaProvider;
            default:
                throw new Error("Invalid provider type")
        }
    }
}
window.SimpleCore._helpers.triggerEvent("search-engine:loaded");
//# sourceMappingURL=/cdn/shop/t/275/assets/services.search-engines.js.map?v=173091876293057365601781206501