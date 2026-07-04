import { client } from "../client";

export async function getMachineryBrandsForSitemap() {
    return client.fetch(`
        *[_type=="machineryBrand"]{
        "slug":slug.current,
        "type":machineryType->slug.current,
        _updatedAt
        }
    `)
}