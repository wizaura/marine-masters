import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        isUnique: async () => true,
      },
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),

    defineField({
      name: "engineModel",
      title: "Engine Model",
      type: "reference",
      to: [{ type: "engineModel" }],
    }),

    defineField({
      name: "partType",
      title: "Part Type",
      type: "reference",
      to: [{ type: "partType" }],
    }),

    defineField({
      name: "machineryType",
      title: "Machinery Type",
      type: "reference",
      to: [{ type: "machineryType" }],
    }),

    defineField({
      name: "machineryBrand",
      title: "Machinery Brand",
      type: "reference",
      to: [{ type: "machineryBrand" }],
    }),

    defineField({
      name: "machineryModel",
      title: "Machinery Model",
      type: "reference",
      to: [{ type: "machineryModel" }],
    }),

    defineField({
      name: "condition",
      title: "Condition",
      type: "string",
      options: {
        list: [
          { title: "Genuine", value: "genuine" },
          { title: "Reconditioned", value: "reconditioned" },
          { title: "Genuine & Reconditioned", value: "genuine & reconditioned" },
        ],
      },
    }),

    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});