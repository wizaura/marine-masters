import { defineField, defineType } from "sanity";

export default defineType({
  name: "model",
  title: "Engine Model",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Model Name",
      type: "string",
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
      name: "brand",
      title: "Brand",
      type: "reference",
      to: [{ type: "brand" }],
    }),
  ],
});