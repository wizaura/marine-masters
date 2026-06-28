import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function MachineryBrandHero({
    brand,
}: {
    brand: any;
}) {
    return (
        <section className="relative p-3">
            <div className="relative h-[75vh] overflow-hidden rounded-[48px]">
        
                <Image
                    src={       
                        brand.logo
                            ? urlFor(brand.logo)
                                  .width(1800)
                                  .url()
                            : "/logo-1.jpeg"
                    }
                    alt={brand.name}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex items-end">
                    <div className="px-8 pb-16 lg:px-16">

                        <p className="mb-4 text-xl text-white/70">
                            {brand.machineryType?.title}
                        </p>

                        <h1
                            className="
                                text-5xl
                                font-bold
                                text-white
                                md:text-7xl
                            "
                        >
                            {brand.name}
                        </h1>

                    </div>
                </div>

            </div>
        </section>
    );
}   