import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type Props = {
    category: any;
};

export default function CategoryHero({
    category,
}: Props) {
    return (
        <section className="relative p-3">
            <div className="relative h-[75vh] overflow-hidden rounded-[48px]">

                <img
                    src={urlFor(category.heroImage).url()}
                    alt={category.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="relative z-10 flex h-full items-end">
                    <div className="px-8 pb-20">

                        <h1 className="text-7xl font-bold text-white">
                            {category.heroTitle}
                        </h1>

                        <p className="mt-6 max-w-3xl text-xl text-white/80">
                            {category.heroDescription}
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
}