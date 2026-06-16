import Link from "next/link";
import Image from "next/image";

import SideNotch from "@/components/ui/SideNotch";

import { getPartTypesByEngineModel } from "@/sanity/lib/getPartTypesByEngineModel";
import { urlFor } from "@/sanity/lib/image";

export default async function EngineModelPartTypes({
    itemSlug,
    subItemSlug,
}: {
    itemSlug: string;
    subItemSlug: string;
}) {
    const partTypes = await getPartTypesByEngineModel(subItemSlug);

    return (
        <section className="px-8 pb-24">
            <div className="mx-auto max-w-8xl">

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {partTypes.map((part: any) => (
                        <Link
                            key={part._id}
                            href={`/categories/engine-parts/${itemSlug}/${subItemSlug}/${part.slug.current}`}
                            className="group"
                        >
                            <article
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[40px]
                                    aspect-square
                                "
                            >
                                {/* Background */}
                                <Image
                                    src={
                                        part.image
                                            ? urlFor(part.image)
                                                  .width(1200)
                                                  .url()
                                            : "/placeholder.jpg"
                                    }
                                    alt={part.title}
                                    fill
                                    className="
                                        object-cover
                                        transition
                                        duration-700
                                        group-hover:scale-105
                                    "
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/45" />

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
                                                text-3xl
                                                font-bold
                                                text-white
                                            "
                                        >
                                            {part.title}
                                        </h3>

                                        {part.description && (
                                            <p
                                                className="
                                                    mt-4
                                                    line-clamp-3
                                                    text-white/80
                                                "
                                            >
                                                {part.description}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <p
                                            className="
                                                text-lg
                                                text-white/80
                                            "
                                        >
                                            Browse Products
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
                                    <SideNotch color="#fff" />
                                </div>

                            </article>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}