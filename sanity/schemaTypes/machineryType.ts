import { defineField, defineType } from "sanity";

export default defineType({
  name: "machineryType",
  title: "Machinery Type",
  type: "document",

  fields: [
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 1,
      validation: (Rule) => Rule.required().integer().min(1),
    }),
    
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});