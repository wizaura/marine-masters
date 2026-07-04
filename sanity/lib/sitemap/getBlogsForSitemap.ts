// sanity/lib/sitemap/getBlogsForSitemap.ts

import { client } from "../client";

export async function getBlogsForSitemap() {
  return client.fetch(`
    *[_type=="blog"]{
      "slug":slug.current,
      _updatedAt
    }
  `);
}