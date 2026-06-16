import Link from "next/link";

import { getMachineryBrandsByType } from "@/sanity/lib/getMachineryBrandsByType";

type Props = {
    machineryTypeId: string;
    currentBrandId: string;
    itemSlug: string;
};

export default async function OtherMachineryBrands({
    machineryTypeId,
    currentBrandId,
    itemSlug,
}: Props) {
    const brands =
        await getMachineryBrandsByType(
            machineryTypeId
        );

    const otherBrands = brands.filter(
        (brand: any) =>
            brand._id !== currentBrandId
    );

    if (otherBrands.length === 0) {
        return null;
    }

    return (
        <section className="bg-[#f3f3f3] px-8 py-24">
            <div className="mx-auto max-w-8xl">

                <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-2xl text-neutral-500">
                            Explore More
                        </p>
                    </div>

                    <div>

                        <h2
                            className="
                                text-4xl
                                font-bold
                                leading-tight
                                lg:text-6xl
                            "
                        >
                            Looking for other brands?
                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-3xl
                                text-lg
                                text-neutral-600
                            "
                        >
                            Browse additional manufacturers
                            available within this machinery
                            category.
                        </p>

                        <div
                            className="
                                mt-12
                                flex
                                flex-wrap
                                gap-4
                            "
                        >
                            {otherBrands.map(
                                (brand: any) => (
                                    <Link
                                        key={brand._id}
                                        href={`/categories/machinery/${itemSlug}/${brand.slug.current}`}
                                        className="
                                            rounded-full
                                            border
                                            border-neutral-300
                                            bg-white
                                            px-6
                                            py-3
                                            font-medium
                                            transition
                                            hover:border-black
                                            hover:bg-black
                                            hover:text-white
                                        "
                                    >
                                        {brand.name}
                                    </Link>
                                )
                            )}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}