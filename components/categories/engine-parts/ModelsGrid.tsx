import Link from "next/link";

import { getModelsByBrand } from "@/sanity/lib/getModelsByBrand";

type Props = {
    brandId: string;
    description: string;
};

export default async function EngineModelsGrid({
    brandId,
    description,
}: Props) {
    const models = await getModelsByBrand(
        brandId
    );

    return (
        <section className="bg-white px-8 py-24">
            <div className="mx-auto max-w-8xl">

                <div className="mb-16 grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-2xl text-neutral-500">
                            Available Models
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
                            {models.length} engine models available.
                        </h2>

                        {description && (
                            <p
                                className="
                                    mt-8
                                    max-w-5xl
                                    text-lg
                                    text-neutral-600
                                    md:text-xl
                                "
                            >
                                {description}
                            </p>
                        )}

                        <p
                            className="
                                mt-6
                                max-w-5xl
                                text-lg
                                text-neutral-600
                            "
                        >
                            Browse supported engine models and
                            discover genuine spare parts,
                            replacement components, and
                            marine equipment.
                        </p>
                    </div>

                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {models.map((model: any) => (
                        <Link
                            key={model._id}
                            href={`/categories/engine-parts/${model.brand.slug.current}/${model.slug.current}`}
                            className="
                                group
                                rounded-3xl
                                border
                                border-neutral-200
                                bg-white
                                px-8 py-4
                                transition
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
                                "
                            >
                                View engine parts →
                            </p>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}