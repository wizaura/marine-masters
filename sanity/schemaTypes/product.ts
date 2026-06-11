import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "partNumber",
      title: "Part Number",
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
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),

    defineField({
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
    }),

    defineField({
      name: "model",
      title: "Model",
      type: "reference",
      to: [{ type: "model" }],
    }),

    defineField({
      name: "partCategory",
      title: "Part Category",
      type: "reference",
      to: [{ type: "partCategory" }],
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});