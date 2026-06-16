import { client } from "./client";

export async function getMachineryBrandsByType(
    machineryTypeId: string
) {
    return client.fetch(
        `
        *[
            _type == "machineryBrand" &&
            machineryType._ref == $machineryTypeId
        ] | order(name asc) {
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
        }
    );
}