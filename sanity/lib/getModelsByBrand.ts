import { client } from "./client";

export async function getModelsByBrand(
    brandId: string,
    search = ""
) {
    return client.fetch(
        `
        *[
            _type == "engineModel" &&
            brand._ref == $brandId &&
            (
                $search == "" ||
                name match "*" + $search + "*"
            )
        ]
        | order(name asc){
            _id,
            name,
            slug,
            brand->{
                slug
            }
        }
        `,
        {
            brandId,
            search,
        }
    );
}