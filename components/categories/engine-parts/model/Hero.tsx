import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function EngineModelHero({
    model,
}: {
    model: any;
}) {
    console.log(model, 'sw')
    return (
        <section className="relative p-3">
            <div className="relative h-[75vh] overflow-hidden rounded-[48px]">

                <Image
                    src={urlFor(model.brand.logo).width(1800).url()}
                    alt={model.brand.name}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex items-end">
                    <div className="px-8 pb-16 lg:px-16">

                        <p className="mb-4 text-xl text-white/70">
                            {model.brand?.name}
                        </p>

                        <h1
                            className="
                                text-5xl
                                font-bold
                                text-white
                                md:text-7xl
                            "
                        >
                            {model.name}
                        </h1>

                    </div>
                </div>

            </div>
        </section>
    );
}