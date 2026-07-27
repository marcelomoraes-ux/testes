window.SimpleCore = window.SimpleCore || new SimpleCore;
class ShopifyStorefrontService {
    constructor() {
        this.client = null, window.SimpleCore._helpers.checkVariable("axios").then(exists => {
            exists && (this.client = window.axios.create({
                baseURL: "https://cs-simpleorganic.myshopify.com/api/2025-01/graphql.json",
                headers: {
                    "X-Shopify-Storefront-Access-Token": "eb17bc07b3ca47a31a325371e00be0be",
                    "Content-Type": "application/json"
                }
            }))
        })
    }
    async getPublishedProductsWithMetafields() {
        const query = `
      query {
        products(first: 250, query: "published_status:published") {
          edges {
            node {
              title
              tags
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              featuredImage{
                url
              }
              variants(first:1){
                edges {
                  node {
                    id
                  }
                }
              }
              handle
              availability: metafield(namespace: "availability", key: "segments") {
                value
              }
              tagline: metafield(namespace: "custom_fields", key: "tagline") {
                value
              }
              quiz_category: metafield(namespace: "custom", key: "categoria_quiz") {
                value
              }
              products_to_avoid: metafield(namespace: "custom", key: "produtos_incompat_veis") {
                value
              }
              skin_type: metafield(namespace: "attributes", key: "skin_type") {
                value
              }
              skin_needs: metafield(namespace: "attributes", key: "skin_needs") {
                value
              }
              skin_characteristics: metafield(namespace: "attributes", key: "skin_characteristics") {
                value
              }
            }
          }
        }
      }
    `;
        try {
            return (await this.client.post("", {
                query
            })).data.data.products.edges.map(({
                node
            }) => {
                const metafields = {};
                node ? .metafields ? .forEach(mf => {
                    metafields[`${mf.namespace}.${mf.key}`] = mf.value
                });
                const variants = node.variants.edges.map(v => ({
                    id: v.node.id.replace("gid://shopify/ProductVariant/", "")
                }));
                return {
                    title: node.title,
                    price: +node.priceRange.minVariantPrice.amount,
                    metafields,
                    tags: node.tags,
                    handle: node.handle,
                    variants,
                    image: {
                        src: node.featuredImage.url
                    },
                    tagline: node ? .tagline ? .value,
                    availability: node.availability ? JSON.parse(node.availability.value) : null,
                    products_to_avoid: node.products_to_avoid ? JSON.parse(node.products_to_avoid.value) : null,
                    quiz_category: node.quiz_category ? JSON.parse(node.quiz_category.value) : null,
                    skin_characteristics: node.skin_characteristics ? JSON.parse(node.skin_characteristics.value) : null,
                    skin_needs: node.skin_needs ? JSON.parse(node.skin_needs.value) : null,
                    skin_type: node.skin_type ? JSON.parse(node.skin_type.value) : null
                }
            })
        } catch (error) {
            throw console.error("Failed to fetch products:", error.message), error
        }
    }
}
window.SimpleCore.shopifyStorefront = new ShopifyStorefrontService;
//# sourceMappingURL=/cdn/shop/t/275/assets/services.shopify-storefront.js.map?v=123992007015677965241781206502