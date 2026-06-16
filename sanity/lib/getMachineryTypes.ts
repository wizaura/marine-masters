import { client } from "./client";

export async function getMachineryTypes() {
  return client.fetch(`
    *[_type == "machineryType"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      image,

      "brandsCount": count(
        *[
          _type == "machineryBrand" &&
          machineryType._ref == ^._id
        ]
      )
    }
  `);
}