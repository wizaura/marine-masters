import MachineryBrandsGrid from "./BrandsGrid";
import { getMachineryBrandsByType } from "@/sanity/lib/getMachineryBrandsByType";

export default async function MachineryBrandsSection({
    machineryType,
    search,
}: {
    machineryType: any;
    search: string;
}) {
    const brands =
        await getMachineryBrandsByType(
            machineryType._id,
            search
        );

    return (
        <MachineryBrandsGrid
            brands={brands}
            machineryType={machineryType}
            search={search}
        />
    );
}