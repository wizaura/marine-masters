import { client } from "../client";

export async function getEngineBrandsForSitemap() {
    return client.fetch(`
    *[_type=="engineBrand"]{
    "slug":slug.current,
    _updatedAt
    }
  `);
}