import { client } from "./client";

export async function getMachineryModelsByBrand(
    brandId: string
) {
    return client.fetch(
        `
        *[
            _type == "machineryModel" &&
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