import { notFound } from "next/navigation";

import EngineModelPage from "@/components/categories/engine-parts/model/Main";
import MachineryBrandPage from "@/components/categories/machinery/brand/Main";

import { getEngineModelBySlug } from "@/sanity/lib/getEngineModelBySlug";
import { getMachineryBrandBySlug } from "@/sanity/lib/getMachineryBrandBySlug";
import CTA from "@/components/ui/CTA";

type Props = {
    params: Promise<{
        slug: string;
        itemSlug: string;
        subItemSlug: string;
    }>;
};

export default async function CategorySubItemPage({
    params,
}: Props) {
    const {
        slug,
        itemSlug,
        subItemSlug,
    } = await params;

    /**
     * Engine Parts → Model
     */
    if (slug === "engine-parts") {
        const model =
            await getEngineModelBySlug(
                subItemSlug
            );

        if (!model) {
            notFound();
        }

        return (
            <>
                <EngineModelPage
                    model={model}
                    itemSlug={itemSlug}
                    subItemSlug={subItemSlug}
                />
                <CTA />
            </>
        );
    }

    /**
     * Machinery → Brand
     */
    if (slug === "machinery") {
        const brand =
            await getMachineryBrandBySlug(
                subItemSlug
            );

        if (!brand) {
            notFound();
        }

        return (
            <>
                <MachineryBrandPage
                    brand={brand}
                    itemSlug={itemSlug}
                />
                <CTA />
            </>
        );
    }

    notFound();
}