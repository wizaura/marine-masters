import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getModelsByBrand } from "@/sanity/lib/getModelsByBrand";

export default async function OtherEngineModels({
    model,
}: {
    model: any;
}) {
    const models = await getModelsByBrand(
        model.brand._id
    );

    const otherModels = models.filter(
        (item: any) =>
            item._id !== model._id
    );

    if (!otherModels.length) {
        return null;
    }

    return (
        <section className="bg-white px-8 py-24">
            <div className="mx-auto max-w-8xl">

                <div className="mb-16 max-w-4xl">

                    <p className="text-xl text-neutral-500">
                        Explore More
                    </p>

                    <h2
                        className="
                            mt-4
                            text-2xl
                            font-bold
                            leading-tight
                            lg:text-4xl
                        "
                    >
                        Other {model.brand.name} Models
                    </h2>

                    <p
                        className="
                            mt-6
                            text-lg
                            text-neutral-600
                        "
                    >
                        Browse additional engine
                        models from {model.brand.name}.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-10 border-t border-neutral-300">

                    {otherModels.map(
                        (item: any) => (
                            <Link
                                key={item._id}
                                href={`/categories/engine-parts/${item.brand.slug.current}/${item.slug.current}`}
                                className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-neutral-300
                                    py-8
                                "
                            >
                                <h3
                                    className="
                                        text-2xl
                                        font-semibold
                                        transition
                                        duration-300
                                        group-hover:translate-x-2
                                        lg:text-4xl
                                    "
                                >
                                    {item.name}
                                </h3>

                                <ArrowRight
                                    size={28}
                                    className="
                                        transition
                                        duration-300
                                        group-hover:translate-x-2
                                        group-hover:text-orange-500
                                    "
                                />
                            </Link>
                        )
                    )}

                </div>

            </div>
        </section>
    );
}