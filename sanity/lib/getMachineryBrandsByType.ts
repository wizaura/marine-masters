import { client } from "./client";

export async function getMachineryBrandsByType(
    machineryTypeId: string,
    search = ""
) {
    return client.fetch(
        `
        *[
            _type == "machineryBrand" &&
            machineryType._ref == $machineryTypeId &&
            (
                $search == "" ||
                name match "*" + $search + "*"
            )
        ]
        | order(name asc){
            _id,
            name,
            slug,
            logo,

            machineryType->{
                slug
            },

            "modelsCount": count(
                *[
                    _type == "machineryModel" &&
                    brand._ref == ^._id
                ]
            )
        }
        `,
        {
            machineryTypeId,
            search,
        }
    );
}