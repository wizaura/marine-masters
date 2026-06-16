import { notFound } from "next/navigation";

import ProductPage from "@/components/product/Main";

import { getEngineProduct } from "@/sanity/lib/getEngineProducts";
import { getMachineryProduct } from "@/sanity/lib/getMachineryProducts";

import CTA from "@/components/ui/CTA";

type Props = {
    params: Promise<{
        slug: string;
        itemSlug: string;
        subItemSlug: string;
        productSlug: string;
    }>;
};

export default async function ProductDetailPage({
    params,
}: Props) {
    const {
        slug,
        itemSlug,
        subItemSlug,
        productSlug,
    } = await params;

    let product = null;

    if (slug === "engine-parts") {
        product = await getEngineProduct(
            itemSlug,
            subItemSlug,
            productSlug
        );
    }

    if (slug === "machinery") {
        product = await getMachineryProduct(
            itemSlug,
            subItemSlug,
            productSlug
        );
    }

    if (!product) {
        notFound();
    }

    return (
        <>
            <ProductPage
                product={product}
                subItemSlug={subItemSlug}
            />

            <CTA />
        </>
    );
}