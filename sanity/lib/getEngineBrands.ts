import { client } from "./client";

export async function getEngineBrands(
    search = ""
) {
    return client.fetch(
        `
        *[
            _type == "engineBrand" &&
            (
                $search == "" ||
                name match "*" + $search + "*"
            )
        ]
        | order(order asc, name asc){
            _id,
            name,
            slug,
            description,
            logo,

            "modelsCount": count(
                *[
                    _type == "engineModel" &&
                    references(^._id)
                ]
            )
        }
        `,
        { search }
    );
}