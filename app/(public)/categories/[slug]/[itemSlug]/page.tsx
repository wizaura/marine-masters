import { notFound } from "next/navigation";

import EngineBrandPage from "@/components/categories/engine-parts/Main";
import MachineryTypePage from "@/components/categories/machinery/Main";

import { getCategoryBySlug } from "@/sanity/lib/getCategoryBySlug";
import { getBrandBySlug } from "@/sanity/lib/getBrandBySlug";
import { getMachineryTypeBySlug } from "@/sanity/lib/getMachineryTypeBySlug";
import CTA from "@/components/ui/CTA";

type Props = {
    params: Promise<{
        slug: string;
        itemSlug: string;
    }>;
};

export async function generateMetadata({
    params,
}: Props) {
    const { slug, itemSlug } = await params;

    return {
        title: itemSlug,
    };
}

export default async function CategoryItemPage({
    params,
}: Props) {
    const { slug, itemSlug } = await params;

    const category = await getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    /**
     * ENGINE PARTS
     */
    if (slug === "engine-parts") {
        const brand = await getBrandBySlug(itemSlug);

        console.log(brand, 'dfe')

        if (!brand) {
            notFound();
        }

        return (
            <>
                <EngineBrandPage
                    brand={brand}
                />
                <CTA />
            </>
        );
    }

    /**
     * MACHINERY
     */
    if (slug === "machinery") {
        const machineryType =
            await getMachineryTypeBySlug(itemSlug);

        if (!machineryType) {
            notFound();
        }

        return (
            <>
                <MachineryTypePage
                    machineryType={machineryType}
                />
                <CTA />
            </>
        );
    }

    notFound();
}