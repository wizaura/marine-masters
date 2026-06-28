import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function ProductHero({
    product,
}: {
    product: any;
}) {
    const image =
        product.image;

    return (
        <section className="relative p-3">
            <div className="relative h-[75vh] overflow-hidden rounded-[48px]">

                <Image
                    src={
                        image
                            ? urlFor(image)
                                  .width(1800)      
                                  .url()
                            : "/logo-1.jpeg"
                    }
                    alt={product.title}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex items-end">
                    <div className="px-8 pb-16 lg:px-16">

                        <p className="mb-4 text-white/70">
                            {product.partType?.title}
                        </p>

                        <h1
                            className="
                                max-w-5xl
                                text-4xl
                                font-bold
                                text-white
                                md:text-7xl
                            "
                        >
                            {product.title}
                        </h1>

                        {product.shortDescription && (
                            <p
                                className="
                                    mt-6
                                    max-w-3xl
                                    text-lg
                                    text-white/80
                                "
                            >
                                {product.shortDescription}
                            </p>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
}