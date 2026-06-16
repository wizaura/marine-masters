import { client } from "./client";

export async function getMachineryTypeBySlug(
    slug: string
) {
    return client.fetch(
        `
        *[
            _type == "machineryType" &&
            slug.current == $slug
        ][0]
        {
            _id,
            title,
            slug,
            description,
            image
        }
    `,
        { slug }
    );
}