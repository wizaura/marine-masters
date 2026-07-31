import BrandHero from "./Hero";
import EngineModelsGrid from "./ModelsGrid";
import { getModelsByBrand } from "@/sanity/lib/getModelsByBrand";

export default async function EngineBrandPage({
    brand,
    search = "",
}: {
    brand: any;
    search?: string;
}) {
    const models = await getModelsByBrand(
        brand._id,
        search
    );

    return (
        <>
            <BrandHero brand={brand} />

            <EngineModelsGrid
                models={models}
                search={search}
                description={brand.description}
            />
        </>
    );
}