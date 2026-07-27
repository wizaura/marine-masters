import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import SectionNotch from "../ui/SectionNotch";

type Props = {
    products: any[];
};

export default function UpdatesGrid({
    products,
}: Props) {

    return (
        <section className="bg-gray-50 px-8 py-24">
            <div className="mx-auto max-w-8xl">

                <div className="mb-16 grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-2xl text-neutral-500">
                            Latest Updates
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
                            {products.length} newly added products.
                        </h2>

                        <p
                            className="
                                mt-8
                                max-w-5xl
                                text-lg
                                text-neutral-600
                                md:text-xl
                            "
                        >
                            Stay up to date with the newest marine
                            engine spare parts, ship machinery and
                            equipment recently added to our catalogue.
                        </p>
                    </div>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {products.map((product: any) => {
                        const href = product.engineModel
                            ? `/categories/engine-parts/${product.engineModel.brand.slug.current
                            }/${product.engineModel.slug.current
                            }/${product.slug.current
                            }`
                            : `/categories/machinery/${product.machineryType.slug.current
                            }/${product.machineryBrand.slug.current
                            }/${product.slug.current
                            }`;

                        return (
                            <Link
                                key={product._id}
                                href={href}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-neutral-200
                                    bg-white
                                    transition
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                "
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                                    <Image
                                        src={
                                            product.image
                                                ? urlFor(product.image)
                                                    .width(800)
                                                    .height(600)
                                                    .url()
                                                : "/logo-1.jpeg"
                                        }
                                        alt={product.title}
                                        fill
                                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="space-y-4 p-8">
                                    <div className="flex items-start justify-between gap-4">

                                        <div className="flex flex-wrap items-center gap-2">

                                            <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-gray-600">
                                                {product.engineModel
                                                    ? "Engine Part"
                                                    : "Machinery"}
                                            </span>

                                            {product.condition && (
                                                <span
                                                    className={`
                    rounded-full px-3 py-1 text-sm font-medium
                    ${product.condition === "NEW"
                                                            ? "bg-green-100 text-green-700"
                                                            : product.condition === "USED"
                                                                ? "bg-amber-100 text-amber-700"
                                                                : "bg-blue-100 text-blue-700"
                                                        }
                `}
                                                >
                                                    {product.condition.charAt(0).toUpperCase() +
                                                        product.condition.slice(1).toLowerCase()}
                                                </span>
                                            )}

                                        </div>

                                        <span className="shrink-0 text-sm text-neutral-500">
                                            {new Date(product._createdAt).toLocaleDateString()}
                                        </span>

                                    </div>

                                    <h3 className="text-2xl font-bold transition group-hover:text-primary">
                                        {product.title}
                                    </h3>

                                    {product.shortDescription && (
                                        <p className="line-clamp-3 text-neutral-600">
                                            {product.shortDescription}
                                        </p>
                                    )}

                                    <div className="pt-2 font-medium text-primary">
                                        View Product →
                                    </div>
                                </div>
                            </Link>
                        );
                    })}

                </div>
                <SectionNotch />

            </div>
        </section>
    );
}