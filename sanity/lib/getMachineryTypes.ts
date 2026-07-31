import { client } from "./client";

export async function getMachineryTypes(
    search = ""
) {
    return client.fetch(
        `
        *[
            _type == "machineryType" &&
            (
                $search == "" ||
                title match "*" + $search + "*"
            )
        ]
        | order(order asc, title asc){
            _id,
            title,
            slug,
            description,
            image,

            "brandsCount": count(
                *[
                    _type == "machineryBrand" &&
                    machineryType._ref == ^._id
                ]
            )
        }
        `,
        { search }
    );
}