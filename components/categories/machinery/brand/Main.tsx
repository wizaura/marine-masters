import MachineryBrandHero from "./Hero";
import MachineryModelsGrid from "./ModelsGrid";
import MachineryCTA from "./MachineryBrandCTA";
import OtherMachineryBrands from "./OtherBrands";

export default function MachineryBrandPage({
    brand,
    itemSlug,
}: {
    brand: any;
    itemSlug: string;
}) {
    return (
        <>
            <MachineryBrandHero brand={brand} />

            <MachineryModelsGrid
                brand={brand}
                itemSlug={itemSlug}
            />
            <OtherMachineryBrands
                machineryTypeId={
                    brand.machineryType._id
                }
                currentBrandId={
                    brand._id
                }
                itemSlug={itemSlug}
            />
            <MachineryCTA />
        </>
    );
}