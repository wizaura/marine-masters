import MachineryTypeHero from "./Hero";
import MachineryBrandsSection from "./MachineryBrandSection";

export default function MachineryTypePage({
    machineryType,
}: {
    machineryType: any;
}) {
    return (
        <>
            <MachineryTypeHero
                machineryType={machineryType}
            />

            <MachineryBrandsSection
                machineryType={machineryType}
            />
        </>
    );
}