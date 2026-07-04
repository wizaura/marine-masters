import { client } from "../client";

export async function getMachineryProductsForSitemap() {
    return client.fetch(`
        *[_type=="product" && defined(machineryBrand)]{
        "slug":slug.current,
        "brand":machineryBrand->slug.current,
        "type":machineryType->slug.current,
        _updatedAt
        }
    `)
}