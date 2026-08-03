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
        <section className="py-20 bg-neutral-50">
            <div className="mx-auto max-w-7xl px-6">

                <div className="max-w-4xl">

                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Product Categories
                    </span>

                    <h2 className="mt-3 text-4xl font-bold">
                        Explore Our Marine Spare Parts & Ship Machinery
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        Browse our complete range of marine engine spare parts,
                        ship machinery, OEM marine components, and replacement
                        equipment. Each category includes manufacturers, models,
                        and products suitable for commercial vessels,
                        shipyards, and marine service companies.
                    </p>

                </div>

                <div className="mt-14 grid gap-8 md:grid-cols-2">

                    {categories.map((category) => (

                        <Link
                            key={category._id}
                            href={`/categories/${category.slug.current}`}
                            className="
                                group
                                overflow-hidden
                                rounded-2xl
                                border border-gray-300
                                bg-white
                                transition-all
                                hover:-translate-y-1
                                hover:shadow-xl
                            "
                        >

                            <div className="relative aspect-[16/9] bg-neutral-100">

                                <Image
                                    src={category.image
                                        ? urlFor(category.image)
                                            .width(1600)
                                            .url()
                                        : "/logo-1.jpeg"}
                                    alt={category.title}
                                    fill
                                    className="
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-105
                                        "
                                />

                            </div>

                            <div className="p-8">

                                <h3 className="text-2xl font-semibold">
                                    {category.title}
                                </h3>

                                <p className="mt-4 leading-8 text-neutral-600">

                                    {category.description ??
                                        `Browse ${category.title.toLowerCase()} including OEM marine components, genuine spare parts, compatible replacements, and products from leading manufacturers.`}

                                </p>

                                <div
                                    className="
                                        mt-8
                                        inline-flex
                                        items-center
                                        gap-2
                                        font-semibold
                                    "
                                >
                                    Explore Category

                                    <span
                                        className="
                                            transition-transform
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

            </div>
        </section>
    );
}