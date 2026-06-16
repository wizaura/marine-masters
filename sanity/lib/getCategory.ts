import { client } from "./client";

export async function getCategory(slug: string) {
    return client.fetch(
        `
        *[_type == "category" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            description,
            image,
            heroTitle,
            heroDescription,
            heroImage,
            introTitle,
            introDescription,
            categoryType
        }
        `,
        { slug }
    );
}