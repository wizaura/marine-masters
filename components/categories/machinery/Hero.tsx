import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Props = {
    machineryType: any;
};

export default function MachineryTypeHero({
    machineryType,
}: Props) {
    return (
        <section className="relative p-3">
            <div className="relative h-[75vh] overflow-hidden rounded-[48px]">

                <Image
                    src={
                        machineryType.image
                            ? urlFor(machineryType.image)
                                  .width(1800)
                                  .url()
                            : "/placeholder.jpg"
                    }
                    alt={machineryType.title}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 flex items-end">
                    <div className="w-full px-8 pb-16 lg:px-16">

                        <p className="mb-4 text-xl text-white/70">
                            Machinery Type
                        </p>

                        <h1
                            className="
                                max-w-5xl
                                text-5xl
                                font-bold
                                leading-[0.95]
                                text-white
                                md:text-7xl
                            "
                        >
                            {machineryType.title}
                        </h1>

                        {machineryType.description && (
                            <p
                                className="
                                    mt-8
                                    max-w-3xl
                                    text-lg
                                    text-white/80
                                    md:text-xl
                                "
                            >
                                {machineryType.description}
                            </p>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
}