import { client } from "./client";

export async function getModelsByBrand(
    brandId: string
) {
    return client.fetch(
        `
        *[
            _type == "engineModel" &&
            brand._ref == $brandId
        ] | order(name asc) {
            _id,
            name,
            slug,

            brand->{
                _id,
                name,
                slug
            }
        }
        `,
        { brandId }
    );
}