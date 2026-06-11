import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getCategories } from "@/sanity/lib/getCategories";
import { urlFor } from "@/sanity/lib/image";

export default async function CategoriesList() {
  const categories = await getCategories();

  return (
    <section className="px-6 py-24 bg-[#f3f3f3]">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-2xl text-neutral-500">
              Categories
            </p>
          </div>

          <div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Explore our marine parts and machinery categories.
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {categories.map((category: any) => (
            <Link
              key={category._id}
              href={`/categories/${category.slug.current}`}
              className="group"
            >
              <article
                className="
                  relative
                  overflow-hidden
                  rounded-[42px]
                  aspect-[4/4]
                "
              >

                {/* Image */}

                <img
                  src={
                    category.image
                      ? urlFor(category.image).width(1200).url()
                      : "/placeholder.jpg"
                  }
                  alt={category.title}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-black/30
                    via-black/10
                    to-black/30
                  "
                />

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
                        text-4xl
                        font-bold
                        text-white
                      "
                    >
                      {category.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-md
                        text-lg
                        text-white/90
                      "
                    >
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}

                  <div className="flex justify-end">

                    <div
                      className="
                        flex
                        h-20
                        w-20
                        translate-x-28
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        transition-all
                        duration-500
                        group-hover:translate-x-0
                      "
                    >
                      <ArrowUpRight
                        size={32}
                        className="text-black"
                      />
                    </div>

                  </div>

                </div>

              </article>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}