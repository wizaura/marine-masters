import EngineModelHero from "./Hero";
import EngineModelOverview from "./Overview";
import EngineModelPartTypes from "./PartTypes";
import EngineModelCTA from "./EngineModelCTA";
import OtherEngineModels from "./OtherEngineModels";

export default function EngineModelPage({
    model,
    itemSlug,
    subItemSlug,
}: {
    model: any;
    itemSlug: string;
    subItemSlug: string;
}) {
    return (
        <>
            <EngineModelHero model={model}/>

            <EngineModelOverview model={model} />

            <EngineModelPartTypes itemSlug={itemSlug} subItemSlug={subItemSlug}/>

            <OtherEngineModels model={model} />

            <EngineModelCTA />
        </>
    );
}