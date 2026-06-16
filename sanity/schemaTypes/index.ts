import { type SchemaTypeDefinition } from "sanity";

import category from "./category";

import engineBrand from "./engineBrand";
import engineModel from "./engineModel";
import partType from "./partType";

import machineryType from "./machineryType";
import machineryBrand from "./machineryBrand";
import machineryModel from "./machineryModel";

import product from "./product";
import blog from "./blog";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,

    engineBrand,
    engineModel,
    partType,

    machineryType,
    machineryBrand,
    machineryModel,

    product,

    blog,
  ],
};