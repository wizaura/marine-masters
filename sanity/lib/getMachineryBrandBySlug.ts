import { client } from "./client";

export async function getMachineryBrandBySlug(
    slug: string
) {
    return client.fetch(
        `
        *[
            _type == "machineryBrand" &&
            slug.current == $slug
        ][0]{
            _id,
            name,
            slug,
            logo,

            machineryType->{
                _id,
                title,
                slug
            }
        }
        `,
        { slug }
    );
}