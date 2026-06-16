"use client";

import Link from "next/link";
import Image from "next/image";

import SideNotch from "@/components/ui/SideNotch";

import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import FindPartsModal from "./FindEnginePartsModal";
import { getModelsByBrand } from "@/sanity/lib/getModelsByBrand";

export default function EngineBrandsGrid({ brands, slug }: { brands: any[], slug: string }) {
    const [selectedBrand, setSelectedBrand] =
        useState<any>(null);

    const [models, setModels] =
        useState<any[]>([]);

    const [loading, setLoading] =
        useState(false);

    useEffect(() => {
        async function fetchModels() {
            if (!selectedBrand) {
                setModels([]);
                return;
            }

            setLoading(true);

            try {
                const data =
                    await getModelsByBrand(
                        selectedBrand._id
                    );

                setModels(data);
            } finally {
                setLoading(false);
            }
        }

        fetchModels();
    }, [selectedBrand]);


    return (
        <>
            <section className="pb-24">
                <div className="mx-auto max-w-8xl">

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {brands.map((brand: any) => (
                            <article
                                key={brand._id}
                                onClick={() =>
                                    setSelectedBrand(
                                        brand
                                    )
                                }
                                className="
                                    group
                                    relative
                                    aspect-square
                                    cursor-pointer
                                    overflow-hidden
                                    rounded-[40px]
                                "
                            >
                                {/* Background */}

                                <Image
                                    src={
                                        brand.logo
                                            ? urlFor(
                                                brand.logo
                                            )
                                                .width(
                                                    1200
                                                )
                                                .url()
                                            : "/placeholder.jpg"
                                    }
                                    alt={brand.name}
                                    fill
                                    className="
                                        object-cover
                                        transition
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                                {/* Overlay */}

                                <div className="absolute inset-0 bg-black/50" />

                                {/* Content */}

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        flex
                                        flex-col
                                        justify-between
                                        p-8
                                    "
                                >
                                    <div>
                                        <h3
                                            className="
                                                text-3xl
                                                font-bold
                                                text-white
                                            "
                                        >
                                            {brand.name}
                                        </h3>

                                        {brand.description && (
                                            <p
                                                className="
                                                    mt-4
                                                    line-clamp-3
                                                    text-white/80
                                                "
                                            >
                                                {
                                                    brand.description
                                                }
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <p
                                            className="
                                                text-lg
                                                text-white/80
                                            "
                                        >
                                            {
                                                brand.modelsCount
                                            }{" "}
                                            Models
                                            Available
                                        </p>

                                        <div
                                            className="
                                                mt-6
                                                flex
                                                items-center
                                                gap-3
                                            "
                                        >
                                            <span
                                                className="
                                                    rounded-full
                                                    bg-white
                                                    hover:bg-gray-100
                                                    px-5
                                                    py-3
                                                    text-sm
                                                    font-semibold
                                                    text-black
                                                    transition-all
    duration-300
    hover:-translate-y-1
                                                "
                                            >
                                                Quick Find
                                            </span>

                                            <Link
                                                href={`/categories/${slug}/${brand.slug.current}`}
                                                onClick={(
                                                    e
                                                ) =>
                                                    e.stopPropagation()
                                                }
                                                className="
    rounded-full
    border
    border-white/30
    px-5
    py-3
    text-sm
    font-semibold
    text-white
    backdrop-blur
    transition-all
    duration-300
    hover:-translate-y-1
"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Side Notch */}

                                <div
                                    className="
                                        absolute
                                        inset-y-0
                                        right-0
                                        w-[100px]
                                        translate-x-full
                                        transition-all
                                        duration-500
                                        ease-out
                                        group-hover:translate-x-0
                                    "
                                >
                                    <SideNotch color="#fff" />
                                </div>
                            </article>
                        ))}

                    </div>
                </div>
            </section>

            {selectedBrand && (
                <FindPartsModal
                    brand={selectedBrand}
                    models={models}
                    open={true}
                    onClose={() =>
                        setSelectedBrand(null)
                    }
                />
            )}
        </>
    );
}