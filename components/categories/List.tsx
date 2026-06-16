import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getCategories } from "@/sanity/lib/getCategories";
import { urlFor } from "@/sanity/lib/image";
import SectionNotch from "../ui/SectionNotch";
import Image from "next/image";
import SideNotch from "../ui/SideNotch";

export default async function CategoriesList() {
  const categories = await getCategories();

  return (
    <section className="px-6 py-20 bg-[#f3f3f3] rounded-4xl">
      <div className="mx-auto max-w-8xl">

        <div className="mb-20 grid gap-10 md:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="text-2xl text-neutral-500">
              Categories
            </p>
          </div>

          <div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Explore our engine parts and machinery categories.
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {categories.map((category: any) => (
            <Link
              key={category._id}
              href={`/categories/${category.slug.current}`}
              className="group block"
            >
              <article
                className="
            relative
            overflow-hidden
            rounded-[40px]
            aspect-square
        "
              >
                <img
                  src={
                    category.image
                      ? urlFor(category.image)
                        .width(1600)
                        .url()
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
                from-black/20
                via-black/20
                to-black/70
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
                    <div
                      className="
                        inline-flex
                        items-center
                        rounded-full
                        bg-white/15
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        backdrop-blur-md
                    "
                    >
                      Category
                    </div>
                  </div>

                  <div>
                    <h3
                      className="
                        text-3xl
                        font-bold
                        text-white
                        lg:text-4xl
                    "
                    >
                      {category.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-md
                        text-lg
                        text-white/80
                    "
                    >
                      {category.description}
                    </p>
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
                  <SideNotch color="#f3f3f3" />
                </div>

              </article>
            </Link>
          ))}

          <Link
            href={`/categories/supply`}
            className="group block"
          >
            <article
              className="
            relative
            overflow-hidden
            rounded-[40px]
            aspect-square
        "
            >
              <img
                src={"/hero-2.avif"}
                alt="supply-image"
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
                from-black/20
                via-black/20
                to-black/70
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
                  <div
                    className="
                        inline-flex
                        items-center
                        rounded-full
                        bg-white/15
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        backdrop-blur-md
                    "
                  >
                    Supply
                  </div>
                </div>

                <div>
                  <h3
                    className="
                        text-3xl
                        font-bold
                        text-white
                        lg:text-4xl
                    "
                  >
                    Our Supply
                  </h3>

                  <p
                    className="
                        mt-4
                        max-w-md
                        text-lg
                        text-white/80
                    "
                  >
                    All parts and brands we supply
                  </p>
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
                <SideNotch color="#f3f3f3" />
              </div>

            </article>
          </Link>

        </div>

        <div className="my-12 rounded-[32px] border border-neutral-300 bg-white p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

            <div>
              <span
                className="
                    inline-flex
                    rounded-full
                    bg-orange-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-orange-700
                "
              >
                Why Marine Masters
              </span>

              <h3
                className="
                    mt-4
                    text-3xl
                    font-bold
                    text-neutral-900
                    lg:text-4xl
                "
              >
                Genuine Marine Engine Parts with Fast Global Delivery
              </h3>

              <p
                className="
                    mt-4
                    max-w-2xl
                    text-lg
                    leading-relaxed
                    text-neutral-600
                "
              >
                We supply original and OEM-quality marine engine parts
                sourced from trusted manufacturers worldwide. With an
                extensive inventory network and efficient logistics,
                we ensure rapid delivery to vessels, shipyards, and
                fleet operators across global ports.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-neutral-50 p-6">
                <h4 className="font-semibold text-neutral-900">
                  Original Parts
                </h4>

                <p className="mt-2 text-sm text-neutral-600">
                  Genuine and OEM replacement parts for major marine
                  engine brands with assured quality and reliability.
                </p>
              </div>

              <div className="rounded-2xl bg-neutral-50 p-6">
                <h4 className="font-semibold text-neutral-900">
                  Fast Delivery
                </h4>

                <p className="mt-2 text-sm text-neutral-600">
                  Quick dispatch and worldwide shipping support to
                  minimize vessel downtime and operational delays.
                </p>
              </div>

              <div className="rounded-2xl bg-neutral-50 p-6">
                <h4 className="font-semibold text-neutral-900">
                  Global Sourcing
                </h4>

                <p className="mt-2 text-sm text-neutral-600">
                  Access to a wide network of manufacturers and
                  suppliers across major maritime markets.
                </p>
              </div>

              <div className="rounded-2xl bg-neutral-50 p-6">
                <h4 className="font-semibold text-neutral-900">
                  Technical Support
                </h4>

                <p className="mt-2 text-sm text-neutral-600">
                  Assistance in identifying the correct parts for
                  your engine model and application.
                </p>
              </div>

            </div>

          </div>
        </div>

        <SectionNotch />

      </div>
    </section>
  );
}