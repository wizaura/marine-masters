import type { MetadataRoute } from "next";

import { getBlogsForSitemap } from "@/sanity/lib/sitemap/getBlogsForSitemap";
import { getCategoriesForSitemap } from "@/sanity/lib/sitemap/getCategoriesForSitemap";
import { getEngineBrandsForSitemap } from "@/sanity/lib/sitemap/getEngineBrandsForSitemap";
import { getEngineModelsForSitemap } from "@/sanity/lib/sitemap/getEngineModelsForSitemap";
import { getEngineProductsForSitemap } from "@/sanity/lib/sitemap/getEngineProductsForSitemap";
import { getMachineryTypesForSitemap } from "@/sanity/lib/sitemap/getMachineryTypesForSitemap";
import { getMachineryBrandsForSitemap } from "@/sanity/lib/sitemap/getMachineryBrandsForSitemap";
import { getMachineryProductsForSitemap } from "@/sanity/lib/sitemap/getMachineryProductsForSitemap";

const BASE_URL = "https://shipsparesworldwide.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const [
        blogs,
        categories,
        engineBrands,
        engineModels,
        engineProducts,
        machineryTypes,
        machineryBrands,
        machineryProducts,
    ] = await Promise.all([
        getBlogsForSitemap(),
        getCategoriesForSitemap(),
        getEngineBrandsForSitemap(),
        getEngineModelsForSitemap(),
        getEngineProductsForSitemap(),
        getMachineryTypesForSitemap(),
        getMachineryBrandsForSitemap(),
        getMachineryProductsForSitemap(),
    ]);

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/categories`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${BASE_URL}/categories/supply`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/blogs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
    ];

    const categoryPages: MetadataRoute.Sitemap = categories.map((category: any) => ({
        url: `${BASE_URL}/categories/${category.slug}`,
        lastModified: category._updatedAt,
        changeFrequency: "weekly",
        priority: 0.9,
    }));

    const blogPages: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
        url: `${BASE_URL}/blogs/${blog.slug}`,
        lastModified: blog._updatedAt,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const engineBrandPages: MetadataRoute.Sitemap = engineBrands.map((brand: any) => ({
        url: `${BASE_URL}/categories/engine-parts/${brand.slug}`,
        lastModified: brand._updatedAt,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const engineModelPages: MetadataRoute.Sitemap = engineModels.map((model: any) => ({
        url: `${BASE_URL}/categories/engine-parts/${model.brand}/${model.slug}`,
        lastModified: model._updatedAt,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const engineProductPages: MetadataRoute.Sitemap = engineProducts.map((product: any) => ({
        url: `${BASE_URL}/categories/engine-parts/${product.brand}/${product.model}/${product.slug}`,
        lastModified: product._updatedAt,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const machineryTypePages: MetadataRoute.Sitemap = machineryTypes.map((type: any) => ({
        url: `${BASE_URL}/categories/machinery/${type.slug}`,
        lastModified: type._updatedAt,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const machineryBrandPages: MetadataRoute.Sitemap = machineryBrands.map((brand: any) => ({
        url: `${BASE_URL}/categories/machinery/${brand.type}/${brand.slug}`,
        lastModified: brand._updatedAt,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    const machineryProductPages: MetadataRoute.Sitemap = machineryProducts.map((product: any) => ({
        url: `${BASE_URL}/categories/machinery/${product.type}/${product.brand}/${product.slug}`,
        lastModified: product._updatedAt,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        ...staticPages,
        ...categoryPages,
        ...blogPages,
        ...engineBrandPages,
        ...engineModelPages,
        ...engineProductPages,
        ...machineryTypePages,
        ...machineryBrandPages,
        ...machineryProductPages,
    ];
}