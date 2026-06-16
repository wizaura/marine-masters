import Link from "next/link";

import { getMachineryModelsByBrand } from "@/sanity/lib/getMachineryModelsByBrand";

type Props = {
    brand: any;
    itemSlug: string;
};

export default async function MachineryBrandContent({
    brand,
    itemSlug,
}: Props) {
    const models =
        await getMachineryModelsByBrand(
            brand._id
        );

    return (
        <section className="bg-white px-8 py-24">
            <div className="mx-auto max-w-8xl">

                {/* Intro */}
                <div className="mb-20 grid gap-10 md:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-2xl text-neutral-500">
                            Machinery Brand
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
                            Genuine {brand.name} marine machinery and spare parts.
                        </h2>

                        <p
                            className="
                                mt-8
                                max-w-3xl
                                text-lg
                                text-neutral-600
                            "
                        >
                            Browse available equipment,
                            replacement components,
                            overhaul parts, and marine
                            auxiliary systems from{" "}
                            {brand.name}.
                        </p>

                        <div
                            className="
                                mt-12
                                border-t
                                border-neutral-200
                                pt-10
                            "
                        >
                            <p className="text-xl text-neutral-500">
                                Available Models
                            </p>

                            <h3
                                className="
                                    mt-3
                                    text-4xl
                                    font-bold
                                    leading-tight
                                "
                            >
                                {models.length} machinery models available.
                            </h3>

                            <p
                                className="
                                    mt-5
                                    max-w-3xl
                                    text-lg
                                    text-neutral-600
                                "
                            >
                                Browse supported machinery
                                models and discover genuine
                                spare parts, overhaul kits,
                                replacement components,
                                and maintenance solutions.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Models Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {models.map((model: any) => (
                        <Link
                            key={model._id}
                            href={`/categories/machinery/${itemSlug}/${model.brand.slug.current}/${model.slug.current}`}
                            className="
                                group
                                rounded-3xl
                                border
                                border-neutral-200
                                bg-white
                                px-8
                                py-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-xl
                            "
                        >
                            <h3
                                className="
                                    text-2xl
                                    font-bold
                                "
                            >
                                {model.name}
                            </h3>

                            <p
                                className="
                                    mt-4
                                    text-neutral-500
                                    transition
                                    group-hover:text-black
                                "
                            >
                                View spare parts →
                            </p>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}