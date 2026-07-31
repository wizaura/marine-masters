import MachineryBrandHero from "./Hero";
import MachineryModelsGrid from "./ModelsGrid";
import MachineryCTA from "./MachineryBrandCTA";
import OtherMachineryBrands from "./OtherBrands";
import { getMachineryModelsByBrand } from "@/sanity/lib/getMachineryModelsByBrand";

export default async  function MachineryBrandPage({
    brand,
    itemSlug,
    search,
}: {
    brand: any;
    itemSlug: string;
    search: string;
}) {

     const models = await getMachineryModelsByBrand(
        brand._id,
        search
    );

    return (
        <>
            <MachineryBrandHero brand={brand} />

            <MachineryModelsGrid
                brand={brand}
                itemSlug={itemSlug}
                models={models}
                search={search}
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