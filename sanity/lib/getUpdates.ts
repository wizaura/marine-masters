import { client } from "./client";

export async function getUpdates(search = "") {
    const query = search.trim()
        ? `
        *[
            _type == "product" &&
            (
                title match "*" + $search + "*" ||
                shortDescription match "*" + $search + "*" ||
                engineModel->name match "*" + $search + "*" ||
                engineModel->brand->name match "*" + $search + "*" ||
                machineryType->title match "*" + $search + "*" ||
                machineryBrand->name match "*" + $search + "*"
            )
        ]
        | order(_createdAt desc)[0...200]{
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
                brand->{slug,name}
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
        `
        : `
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
                brand->{slug,name}
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
        `;

    return client.fetch(query, { search });
}