import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Category = {
    _id: string;
    title: string;
    description?: string;
    slug: {
        current: string;
    };
    image?: string;
};

type Props = {
    categories: Category[];
};

export default function CountryCategories({
    categories,
}: Props) {
    return (
        <section className="bg-neutral-950 py-20 text-white sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
                <div className="max-w-4xl">
                    <span
                        className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-orange-400
                        "
                    >
                        Product Categories
                    </span>

                    <h2
                        className="
                            mt-3
                            text-3xl
                            font-bold
                            tracking-tight
                            sm:text-4xl
                        "
                    >
                        Explore Marine Spare Parts & Ship Machinery
                    </h2>

                    <p
                        className="
                            mt-5
                            text-base
                            leading-8
                            text-neutral-400
                            sm:text-lg
                        "
                    >
                        Browse our marine spare parts and ship machinery
                        categories covering engine components, marine
                        equipment, replacement parts, and products from
                        leading manufacturers.
                    </p>
                </div>

                {/* Categories */}
                <div
                    className="
                        mt-12
                        grid
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {categories.map((category) => (
                        <Link
                            key={category._id}
                            href={`/categories/${category.slug.current}`}
                            className="
                                group
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/[0.04]
                                transition
                                duration-300
                                hover:-translate-y-1
                                hover:border-orange-500/50
                                hover:bg-white/[0.07]
                                hover:shadow-2xl
                            "
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900">
                                <Image
                                    src={
                                        category.image
                                            ? urlFor(category.image)
                                                .width(1200)
                                                .url()
                                            : "/logo-1.jpeg"
                                    }
                                    alt={category.title}
                                    fill
                                    sizes="
                                        (max-width: 768px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                    "
                                    className="
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                                {/* Overlay */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/70
                                        via-black/10
                                        to-transparent
                                    "
                                />

                                {/* Category indicator */}
                                <div
                                    className="
                                        absolute
                                        bottom-4
                                        left-4
                                        rounded-full
                                        border
                                        border-white/20
                                        bg-black/50
                                        px-3
                                        py-1
                                        text-xs
                                        font-medium
                                        text-white
                                        backdrop-blur-sm
                                    "
                                >
                                    Marine Parts
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-7">

                                <h3
                                    className="
                                        text-xl
                                        font-semibold
                                        text-white
                                    "
                                >
                                    {category.title}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        line-clamp-3
                                        text-sm
                                        leading-7
                                        text-neutral-400
                                    "
                                >
                                    {category.description ??
                                        `Browse ${category.title.toLowerCase()} including marine spare parts, OEM components, compatible replacements, and products from leading manufacturers.`}
                                </p>

                                <div
                                    className="
                                        mt-6
                                        inline-flex
                                        items-center
                                        gap-2
                                        text-sm
                                        font-semibold
                                        text-orange-400
                                    "
                                >
                                    Explore Category

                                    <span
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    >
                                        →
                                    </span>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    className="
                        mt-12
                        flex
                        flex-col
                        gap-5
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-6
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        sm:p-8
                    "
                >
                    <div>
                        <h3 className="text-xl font-semibold">
                            Looking for a specific marine spare part?
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-neutral-400">
                            Send the manufacturer, model or part number and
                            request a quotation.
                        </p>
                    </div>

                    <Link
                        href="#rfq"
                        className="
                            inline-flex
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-orange-500
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-orange-400
                        "
                    >
                        Request a Quote
                    </Link>
                </div>

            </div>
        </section>
    );
}