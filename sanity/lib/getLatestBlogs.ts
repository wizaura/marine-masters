import { client } from "./client";

export async function getLatestBlogs() {
    return client.fetch(`
        *[_type == "blog"]
        | order(publishedAt desc)
        [0...3]{
            _id,
            title,
            slug,
            excerpt,
            publishedAt,
            readingTime,
            featuredImage
        }
    `);
}