import { client } from "./client";

export async function getBlogs(
    page = 1,
    limit = 12
) {
    const start = (page - 1) * limit;
    const end = start + limit;

    const blogs = await client.fetch(
        `
        *[_type == "blog"]
        | order(publishedAt desc)
        [$start...$end]{
            _id,
            title,
            slug,
            excerpt,
            author,
            publishedAt,
            category,
            readingTime,
            featuredImage
        }
        `,
        {
            start,
            end,
        }
    );

    const total = await client.fetch(`
        count(*[_type == "blog"])
    `);

    return {
        blogs,
        total,
        pages: Math.ceil(total / limit),
    };
}