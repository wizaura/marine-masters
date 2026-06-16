import CTA from "@/components/ui/CTA";

import ShipSupplyHero from "@/components/categories/supply/Hero";
import ShipSupplyIntro from "@/components/categories/supply/Intro";
import SupportedBrands from "@/components/categories/supply/SupportedBrands";
import MachineryCategories from "@/components/categories/supply/MachineryCategories";
import { getEngineBrands } from "@/sanity/lib/getEngineBrands";

export default async function ShipSupplyPage() {

    const brands = await getEngineBrands();

    return (
        <>
            <ShipSupplyHero />

            <ShipSupplyIntro />

            <SupportedBrands brands={brands}/>

            <MachineryCategories />

            <CTA />
        </>
    );
}