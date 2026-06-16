import { defineField, defineType } from "sanity";

export default defineType({
    name: "engineModel",
    title: "Engine Model",
    type: "document",

    fields: [
        defineField({
            name: "name",
            title: "Model Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "brand",
            title: "Engine Brand",
            type: "reference",
            to: [{ type: "engineBrand" }],
        }),

        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],

    preview: {
        select: {
            title: "name",
            subtitle: "brand.name",
        },
    },
});