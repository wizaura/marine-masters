"use client";

import { Loader2, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
    brand: any;
    itemSlug: string;
    models: any[];
    search: string;
};

export default function MachineryBrandContent({
    brand,
    itemSlug,
    models,
    search,
}: Props) {

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
    }, [models]);

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