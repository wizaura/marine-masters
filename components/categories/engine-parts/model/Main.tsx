import { getPartTypesByEngineModel } from "@/sanity/lib/getPartTypesByEngineModel";
import EngineModelHero from "./Hero";
import EngineModelOverview from "./Overview";
import EngineModelPartTypes from "./PartTypes";
import OtherEngineModels from "./OtherEngineModels";
import EngineModelCTA from "./EngineModelCTA";

export default async function EngineModelPage({
    model,
    itemSlug,
    subItemSlug,
    search,
}: {
    model: any;
    itemSlug: string;
    subItemSlug: string;
    search: string;
}) {
    const partTypes = await getPartTypesByEngineModel(
        subItemSlug,
        search
    );

    return (
        <>
            <EngineModelHero model={model} />

            <EngineModelOverview
                model={model}
                search={search}
            />

            <EngineModelPartTypes
                itemSlug={itemSlug}
                subItemSlug={subItemSlug}
                partTypes={partTypes}
            />

            <OtherEngineModels model={model} />

            <EngineModelCTA />
        </>
    );
}