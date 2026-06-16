import { client } from "./client";

export async function getEngineModelBySlug(
    slug: string
) {
    return client.fetch(
        `
        *[
            _type == "engineModel" &&
            slug.current == $slug
        ][0]{
            _id,
            name,
            slug,
            description,

            brand->{
                _id,
                name,
                slug,
                logo,
            }
        }
        `,
        { slug }
    );
}