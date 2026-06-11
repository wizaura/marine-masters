import { client } from "./client";
import { categoriesQuery } from "./queries";

export async function getCategories() {
  return client.fetch(categoriesQuery);
}