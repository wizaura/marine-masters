import { client } from "./client";

export async function getEngineProduct(
    brandSlug: string,
    modelSlug: string,
    productSlug: string
) {
    return client.fetch(
        `
        *[
            _type == "product" &&
            slug.current == $productSlug &&
            engineModel->slug.current == $modelSlug &&
            engineModel->brand->slug.current == $brandSlug
        ][0]{
            _id,
            title,
            slug,

            shortDescription,
            description,
            condition,
            image,

            engineModel->{
                _id,
                name,
                slug,

                brand->{
                    _id,
                    name,
                    slug
                }
            },

            partType->{
                _id,
                title,
                slug
            }
        }
        `,
        {
            brandSlug,
            modelSlug,
            productSlug,
        }
    );
}