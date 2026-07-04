import { client } from "../client";

export async function getMachineryTypesForSitemap() {
    return client.fetch(`
        *[_type=="machineryType"]{
        "slug":slug.current,
        _updatedAt
        }
    `)
}