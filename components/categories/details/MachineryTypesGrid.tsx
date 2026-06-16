import Link from "next/link";
import Image from "next/image";

import SideNotch from "@/components/ui/SideNotch";

import { getMachineryTypes } from "@/sanity/lib/getMachineryTypes";
import { urlFor } from "@/sanity/lib/image";

export default async function MachineryTypesGrid() {
    const machineryTypes = await getMachineryTypes();

    console.log(machineryTypes);

    return (
        <section className="pb-24">
            <div className="mx-auto max-w-8xl">

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {machineryTypes.map((item: any) => (
                        <Link
                            key={item._id}
                            href={`/categories/machinery/${item.slug.current}`}
                            className="group"
                        >
                            <article
                                className="
                                overflow-hidden
                                relative
                                aspect-[1/1]
                                rounded-[40px]
                                "
                            >
                                {/* Background */}
                                <Image
                                    src={
                                        item.image
                                            ? urlFor(item.image)
                                                .width(1800)
                                                .url()
                                            : "/placeholder.jpg"
                                    }
                                    alt={item.title}
                                    fill
                                    className="
                                    transition
                                    object-cover
                                    group-hover:scale-105
                                    duration-700
                                    "
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/45" />

                                {/* Content */}
                                <div
                                    className="
                                    inset-0
                                    absolute
                                    flex-col
                                    flex
                                    p-8
                                    justify-between
                                    "
                                >
                                    <div>
                                        <h3
                                            className="
                                            font-bold
                                            text-3xl
                                            text-white
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        {item.description && (
                                            <p
                                                className="
                                                line-clamp-3
                                                mt-4
                                                text-white/80
                                                "
                                            >
                                                {item.description}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <p
                                            className="
                                            text-white/80
                                            text-lg
                                            "
                                        >
                                            {item.brandsCount} Brands Available
                                        </p>
                                    </div>
                                </div>

                                <div
                                    className="
                                    inset-y-0
                                    absolute
                                    w-[100px]
                                    right-0
                                    transition-all
                                    translate-x-full
                                    ease-out
                                    duration-500
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