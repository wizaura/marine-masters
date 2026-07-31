"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import SideNotch from "@/components/ui/SideNotch";
import FindMachineryModal from "./FindMachineryModel";

import { urlFor } from "@/sanity/lib/image";
import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MachineryBrandsGrid({
    brands,
    machineryType,
    search,
}: {
    brands: any[];
    machineryType: any;
    search: string;
}) {
    const [selectedBrand, setSelectedBrand] =
        useState<any>(null);

    const [models, setModels] =
        useState<any[]>([]);

    const [loadingModels, setLoadingModels] =
        useState(false);

    const router = useRouter();

    const [query, setQuery] = useState(search);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(true);

            const params = new URLSearchParams(window.location.search);

            if (query.trim()) {
                params.set("search", query.trim());
            } else {
                params.delete("search");
            }

            router.replace(`?${params.toString()}`);
        }, 1000);

        return () => clearTimeout(timer);
    }, [query, router]);

    useEffect(() => {
        setLoading(false);
    }, [brands]);

    useEffect(() => {
        async function fetchModels() {
            if (!selectedBrand) {
                setModels([]);
                return;
            }

            setLoadingModels(true);

            try {
                const response =
                    await fetch(
                        `/api/machinery-models?brandId=${selectedBrand._id}`
                    );

                const data =
                    await response.json();

                setModels(data);
            } finally {
                setLoadingModels(false);
            }
        }

        fetchModels();
    }, [selectedBrand]);

    return (
        <>
            <section className="px-8 py-20">
                <div className="mx-auto max-w-8xl">

                    <div className="mb-16 grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                        <div>
                            <p className="text-2xl text-neutral-500">
                                Available Brands
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
                                {brands.length} trusted{" "}
                                {machineryType.title.toLowerCase()}
                                {" "}brands available.
                            </h2>

                            <div className="relative my-6 max-w-xl">
                                <Search
                                    size={20}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                />

                                <input
                                    type="search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search engine models..."
                                    className="
            h-14
            w-full
            rounded-xl
            border
            border-gray-200
            bg-white
            pl-12
            pr-12
            outline-none
            transition
            focus:border-orange-400
        "
                                />

                                {loading && (
                                    <Loader2
                                        size={18}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 animate-spin text-orange-400"
                                    />
                                )}
                            </div>

                            {machineryType.description && (
                                <p
                                    className="
                                    mt-8
                                    max-w-5xl
                                    text-lg
                                    text-neutral-600
                                    md:text-xl
                                "
                                >
                                    {machineryType.description}
                                </p>
                            )}

                            <p
                                className="
                                    mt-6
                                    max-w-3xl
                                    text-lg
                                    text-neutral-600
                                "
                            >
                                Browse manufacturers,
                                models, and genuine spare
                                parts for marine{" "}
                                {machineryType.title.toLowerCase()}
                                {" "}systems.
                            </p>
                        </div>

                    </div>

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
                                <Image
                                    src={
                                        brand.logo
                                            ? urlFor(
                                                brand.logo
                                            )
                                                .width(
                                                    1800
                                                )
                                                .url()
                                            : "/logo-1.jpeg"
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

                                <div className="absolute inset-0 bg-black/45" />

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
                                    </div>

                                    <div>
                                        <p
                                            className="
            text-lg
            text-white/80
        "
                                        >
                                            {brand.modelsCount} Models
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
                px-5
                py-3
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-gray-100
            "
                                            >
                                                Find Models
                                            </span>

                                            <Link
                                                href={`/categories/machinery/${brand.machineryType.slug.current}/${brand.slug.current}`}
                                                onClick={(e) =>
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
                                                View Brand
                                            </Link>
                                        </div>
                                    </div>
                                </div>

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
                <FindMachineryModal
                    open={true}
                    brand={selectedBrand}
                    models={models}
                    loading={loadingModels}
                    onClose={() =>
                        setSelectedBrand(null)
                    }
                />
            )}
        </>
    );
}