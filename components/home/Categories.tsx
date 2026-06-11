import Link from "next/link";
import SideNotch from "../ui/SideNotch";

const categories = [
    {
        title: "Marine Engine Parts",
        description:
            "Genuine and aftermarket spare parts for MAN B&W, Wärtsilä, Sulzer, Yanmar, and other marine engines.",
        image: "/category-engine.avif",
        slug: "/categories/engine-parts",
    },
    {
        title: "Marine Machinery",
        description:
            "Pumps, compressors, purifiers, heat exchangers, and critical machinery components for marine operations.",
        image: "/category-machinery.jpg",
        slug: "/categories/machinery",
    },
];

export default function HomeCategories() {
    return (
        <section className="bg-[#f3f3f3] px-6 pt-20">
            <div className="mx-auto max-w-8xl">

                {/* Heading */}
                <div className="mb-20 grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p
                            className="
                                text-xl
                                md:text-2xl
                                font-medium
                                text-neutral-500
                            "
                        >
                            Product Categories
                        </p>
                    </div>

                    <div>
                        <h2
                            className="
                                text-3xl
            md:text-5xl
            lg:text-6xl
                                font-bold
                                leading-tight
                            "
                        >
                            Marine spare parts and
                            machinery solutions for
                            vessels worldwide.
                        </h2>
                    </div>

                </div>

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-2">

                    {categories.map((category) => (
                        <Link
                            key={category.title}
                            href={category.slug}
                            className="group"
                        >
                            <article
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-4xl
                                    aspect-[4/4]
                                "
                            >

                                {/* Image */}
                                <img
                                    src={category.image}
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
                                        via-black/10
                                        to-black/60
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

                                </div>

                                {/* Side Notch */}
                                <div
                                    className="
                                        absolute
                                        inset-y-0
                                        right-0
                                        w-[90px]
                                        translate-x-full
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-0
                                    "
                                >
                                    <SideNotch color="#ffffff" />
                                </div>

                            </article>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}