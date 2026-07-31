import MachineryTypeHero from "./Hero";
import MachineryBrandsSection from "./MachineryBrandSection";

export default function MachineryTypePage({
    machineryType,
    search,
}: {
    machineryType: any;
    search: string;
}) {
    return (
        <>
            <MachineryTypeHero
                machineryType={machineryType}
            />

            <MachineryBrandsSection
                machineryType={machineryType}
                search={search}
            />
        </>
    );
}