"use client";

import { Loader2, Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryIntro({
  category,
  search,
}: {
  category: any;
  search: string;
}) {

  const router = useRouter();

  const [query, setQuery] = useState(search);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search") ?? "";

  useEffect(() => {
    if (query.trim() === currentSearch) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(true);

      const params = new URLSearchParams(searchParams.toString());

      if (query.trim()) {
        params.set("search", query.trim());
      } else {
        params.delete("search");
      }

      router.replace(`?${params.toString()}`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query, currentSearch, router, searchParams]);

  useEffect(() => {
    setLoading(query.trim() !== currentSearch);
  }, [query, currentSearch]);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-8xl px-8">

        <div className="grid gap-10 md:grid-cols-[0.6fr_1.4fr]">

          <div>
            <p className="text-2xl text-neutral-500">
              {category.introTitle}
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold leading-tight">
              {category.heroTitle}
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

            <p className="mt-8 text-lg text-neutral-600">
              {category.introDescription}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}