import { defineField, defineType } from "sanity";

export default defineType({
  name: "machineryBrand",
  title: "Machinery Brand",
  type: "document",

  fields: [
    defineField({
      name: "name",
      title: "Brand Name",
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
      name: "machineryType",
      title: "Machinery Type",
      type: "reference",
      to: [{ type: "machineryType" }],
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
  ],
});