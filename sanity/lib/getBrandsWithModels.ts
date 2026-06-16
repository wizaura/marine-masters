import { client } from "./client";

export async function getBrandsWithModels() {
    return client.fetch(`
        *[_type == "brand"]{
            _id,
            title,
            "slug": slug.current,
            engineModels[]->{
                _id,
                title,
                "slug": slug.current
            }
        }
    `);
}