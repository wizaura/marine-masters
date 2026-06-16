import { client } from "./client";

export async function getRelatedBlogs(
    currentBlogId: string,
    category: string
) {
    return client.fetch(
        `
        *[
            _type == "blog" &&
            _id != $currentBlogId &&
            category == $category
        ]
        | order(publishedAt desc)[0...3]{
            _id,
            title,
            slug,
            excerpt,
            featuredImage,
            publishedAt
        }
        `,
        {
            currentBlogId,
            category,
        }
    );
}