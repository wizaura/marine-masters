import { client } from "./client";

export async function getPartTypes() {
    return client.fetch(`
        *[_type == "partType"] | order(title asc) {
            _id,
            title,
            slug,
            image,
            description
        }
    `);
}