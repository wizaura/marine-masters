import { defineField, defineType } from "sanity";

export default defineType({
    name: "category",
    title: "Category",
    type: "document",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
            },
        }),

        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),

        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),

        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
        }),

        defineField({
            name: "heroDescription",
            title: "Hero Description",
            type: "text",
        }),

        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
        }),

        defineField({
            name: "introTitle",
            title: "Intro Title",
            type: "string",
        }),

        defineField({
            name: "introDescription",
            title: "Intro Description",
            type: "text",
        }),
    ],
});