import { client } from "../client";

export async function getEngineModelsForSitemap() {
    return client.fetch(`
        *[_type=="engineModel"]{
        "slug":slug.current,
        "brand":brand->slug.current,
        _updatedAt
    }
  `);
}