import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CategoryDetails from "@/components/categories/details/Main";

import { getCategory } from "@/sanity/lib/getCategory";
import CTA from "@/components/ui/CTA";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const category = await getCategory(slug);

    if (!category) {
        return {
            title: "Category Not Found",
        };
    }

    return {
        title: `${category.title} | Marine Masters`,
        description:
            category.description ||
            category.heroDescription,
        openGraph: {
            title: category.heroTitle || category.title,
            description:
                category.heroDescription ||
                category.description,
        },
    };
}

export default async function CategoryDetailPage({
    params,
}: PageProps) {
    const { slug } = await params;

    const category = await getCategory(slug);

    if (!category) {
        notFound();
    }

    return (
        <>
            <CategoryDetails
                category={category}
            />
            <CTA />
        </>
    );
}