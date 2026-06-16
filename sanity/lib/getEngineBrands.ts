import { client } from "./client";

export async function getEngineBrands() {
    return client.fetch(`
        *[_type == "engineBrand"] | order(name asc) {
            _id,
            name,
            slug,
            description,
            logo,
            "modelsCount": count(
                *[_type == "engineModel" && references(^._id)]
            )
        }
    `);
}