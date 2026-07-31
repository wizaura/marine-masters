import { client } from "./client";

export async function getMachineryModelsByBrand(
    brandId: string,
    search = ""
) {
    return client.fetch(
        `
        *[
            _type == "machineryModel" &&
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
                _id,
                name,
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