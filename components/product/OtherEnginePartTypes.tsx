import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getPartTypesByEngineModel } from "@/sanity/lib/getPartTypesByEngineModel";

export default async function OtherEnginePartTypes({
    product,
    subItemSlug,
    
}: {
    product: any;
    subItemSlug: string;
}) {
    const partTypes = await getPartTypesByEngineModel(subItemSlug);

    const otherPartTypes = partTypes.filter(
        (part: any) =>
            part._id !==
            product.partType?._id
    );

    if (!otherPartTypes.length) {
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
                        Other Part Categories
                    </h2>

                    <p
                        className="
                            mt-6
                            text-lg
                            text-neutral-600
                        "
                    >
                        More spare parts available for{" "}
                        {product.engineModel?.name}.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-10 border-t border-neutral-300">

                    {otherPartTypes.map(
                        (part: any) => (
                            <Link
                                key={part._id}
                                href={`/categories/engine-parts/${product.engineModel.brand.slug.current}/${product.engineModel.slug.current}/${part.slug.current}`}
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
                                    {part.title}
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