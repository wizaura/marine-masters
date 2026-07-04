import { getEngineBrands } from "@/sanity/lib/getEngineBrands";
import EngineBrandsGrid from "./EngineBrandsGrid";
import CategoryHero from "./Hero";
import CategoryIntro from "./Intro";
import MachineryToEnginePartsCTA from "./MachineryToEnginePartsCTA";
import MachineryTypesGrid from "./MachineryTypesGrid";

interface CategoryDetailsProps {
    category: any;
}

export default async function CategoryDetails({
    category,
}: CategoryDetailsProps) {

    const isEngineParts =
        category.slug.current === "engine-parts";

    const brands = await getEngineBrands();

    return (
        <>
            <CategoryHero category={category} />

            <CategoryIntro category={category} />

            {isEngineParts ? (
                <>
                    <EngineBrandsGrid brands={brands} slug={category?.slug?.current} />
                </>
            ) : (
                <>
                    <MachineryTypesGrid />
                    <MachineryToEnginePartsCTA />
                </>
            )}
        </>
    );
}