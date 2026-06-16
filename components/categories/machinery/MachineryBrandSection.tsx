// MachineryBrandsSection.tsx

import MachineryBrandsGrid from "./BrandsGrid";
import { getMachineryBrandsByType } from "@/sanity/lib/getMachineryBrandsByType";

export default async function MachineryBrandsSection({
    machineryType,
}: {
    machineryType: any;
}) {
    const brands =
        await getMachineryBrandsByType(
            machineryType._id
        );

    return (
        <MachineryBrandsGrid
            brands={brands}
            machineryType={machineryType}
        />
    );
}