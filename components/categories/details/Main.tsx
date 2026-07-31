import { getEngineBrands } from "@/sanity/lib/getEngineBrands";
import EngineBrandsGrid from "./EngineBrandsGrid";
import CategoryHero from "./Hero";
import CategoryIntro from "./Intro";
import MachineryToEnginePartsCTA from "./MachineryToEnginePartsCTA";
import MachineryTypesGrid from "./MachineryTypesGrid";
import { getMachineryTypes } from "@/sanity/lib/getMachineryTypes";

interface CategoryDetailsProps {
    category: any;
    search: string;
}
export default async function CategoryDetails({
    category,
    search,
}: {
    category: any;
    search: string;
}) {
    const isEngineParts =
        category.slug.current === "engine-parts";

    const brands = isEngineParts
        ? await getEngineBrands(search)
        : [];

    const machineryTypes = !isEngineParts
        ? await getMachineryTypes(search)
        : [];

    return (
        <>
            <CategoryHero category={category} />

            <CategoryIntro
                category={category}
                search={search}
            />

            {isEngineParts ? (
                <EngineBrandsGrid
                    brands={brands}
                    slug={category.slug.current}
                />
            ) : (
                <>
                    <MachineryTypesGrid
                        machineryTypes={machineryTypes}
                    />
                    <MachineryToEnginePartsCTA />
                </>
            )}
        </>
    );
}