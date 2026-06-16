import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getMachineryModelsByBrand } from "@/sanity/lib/getMachineryModelsByBrand";

export default async function OtherMachineryModels({
    product,
}: {
    product: any;
}) {
    const models =
        await getMachineryModelsByBrand(
            product.machineryBrand._id
        );

    const otherModels = models.filter(
        (model: any) =>
            model._id !==
            product.machineryModel?._id
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
                        Other {product.machineryBrand.name}{" "}
                        {product.machineryType.title} Models
                    </h2>

                    <p
                        className="
                            mt-6
                            text-lg
                            text-neutral-600
                        "
                    >
                        More{" "}
                        {product.machineryBrand.name}{" "}
                        options.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-10 border-t border-neutral-300">

                    {otherModels.map(
                        (model: any) => (
                            <Link
                                key={model._id}
                                href={`/categories/machinery/${product.machineryType.slug.current}/${product.machineryBrand.slug.current}/${model.slug.current}`}
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
                                    {model.name}
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