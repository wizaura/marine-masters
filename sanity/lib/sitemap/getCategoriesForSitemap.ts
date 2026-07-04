// sanity/lib/sitemap/getBlogsForSitemap.ts

import { client } from "../client";

export async function getCategoriesForSitemap() {
  return client.fetch(`
    *[_type=="category"]{
      "slug":slug.current,
      _updatedAt
    }
  `);
}