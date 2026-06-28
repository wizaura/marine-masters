import BrandHero from "./Hero";
import EngineModelsGrid from "./ModelsGrid";

export default function EngineBrandPage({
    brand,
}: {
    brand: any;
}) {
    return (
        <>
            <BrandHero brand={brand} />

            <EngineModelsGrid
                brandId={brand._id}
                description={brand.description}
            />
        </>
    );
}