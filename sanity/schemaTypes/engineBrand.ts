import { defineField, defineType } from "sanity";

export default defineType({
  name: "engineBrand",
  title: "Engine Brand",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Brand Name",
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
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});