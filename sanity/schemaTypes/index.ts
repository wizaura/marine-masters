import { type SchemaTypeDefinition } from "sanity";

import category from "./category";
import brand from "./brand";
import model from "./model";
import partCategory from "./partCategory";
import product from "./product";
import blog from "./blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    brand,
    model,
    partCategory,
    product,
    blog,
  ],
};