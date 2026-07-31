"use client";

import { Loader2, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
    model: any;
    search: string;
};

export default function EngineModelOverview({
    model,
    search
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
    }, [search]);

    return (
        <section className="bg-white px-8 py-24">
            <div className="mx-auto max-w-8xl">

                <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-2xl text-neutral-500">
                            Engine Model
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
                            Genuine spare parts for
                            {` ${model.name}`}.
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
                                text-lg
                                text-neutral-600
                            "
                        >
                            Browse genuine replacement
                            components, overhaul kits,
                            consumables, and engine spare
                            parts compatible with the
                            {` ${model.name}`} marine
                            engine platform.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}