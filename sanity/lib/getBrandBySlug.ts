import { client } from "./client";

export async function getBrandBySlug(slug: string) {
    return client.fetch(
        `
        *[
            _type == "engineBrand" &&
            slug.current == $slug
        ][0]{
            _id,
            name,
            slug,
            description,
            logo
        }
        `,
        { slug }
    );
}