import { client } from "./client";

export async function getBlogBySlug(
    slug: string
) {
    return client.fetch(
        `
        *[
            _type == "blog" &&
            slug.current == $slug
        ][0]{
            _id,
            title,
            slug,
            excerpt,
            featuredImage,
            author,
            publishedAt,
            category,
            seoTitle,
            seoDescription,
            content
        }
        `,
        { slug }
    );
}