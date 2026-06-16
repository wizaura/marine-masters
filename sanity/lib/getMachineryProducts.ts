import { client } from "./client";

export async function getMachineryProduct(
    itemSlug: string,
    subItemSlug: string,
    productSlug: string
) {
    return client.fetch(
        `
        *[
            _type == "product" &&
            slug.current == $productSlug &&
            (
                machineryType->slug.current == $itemSlug &&
                machineryBrand->slug.current == $subItemSlug
            )       
        ][0]{
            _id,
            title,
            slug,

            shortDescription,
            description,

            condition,
            image,

            machineryType->{
                _id,
                title,
                slug
            },

            machineryBrand->{
                _id,
                name,
                slug
            },

            machineryModel->{
                _id,
                name,
                slug
            }
        }
        `,
        {
            itemSlug,
            subItemSlug,
            productSlug,
        }
    );
}