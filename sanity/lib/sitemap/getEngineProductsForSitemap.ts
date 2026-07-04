import { client } from "../client";

export async function getEngineProductsForSitemap() {
    return client.fetch(`
        *[_type=="product" && defined(engineModel)]{
        "slug":slug.current,
        "model":engineModel->slug.current,
        "brand":engineModel->brand->slug.current,
        _updatedAt
    }
  `)
}