import { client } from "./client";

export async function getUpdates() {
    return client.fetch(`
        *[_type == "product"]
        | order(_createdAt desc)[0...24]{
            _id,
            _createdAt,
            title,
            slug,
            shortDescription,
            condition,
            image,

            engineModel->{
                slug,
                name,
                brand->{
                    slug,
                    name
                }
            },

            machineryType->{
                slug,
                title
            },

            machineryBrand->{
                slug,
                name
            }
        }
    `);
}