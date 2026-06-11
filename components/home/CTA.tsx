import Image from "next/image";
import Link from "next/link";

export default function HomeCTA() {
    return (
        <section
            className="
        bg-[#f3f3f3]
        overflow-hidden
    "
        >
            <div className="py-6 overflow-hidden">

                <div className="freight-marquee">

                    {/* First Set */}
                    <div className="flex items-center whitespace-nowrap shrink-0">

                        <div className="relative mx-8 h-[180px] w-[180px] overflow-hidden rounded-full shrink-0">
                            <Image
                                src="/hero-2.avif"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="text-[clamp(5rem,14vw,14rem)] font-black leading-none">
                            Request a quote
                        </h2>

                        <div className="relative mx-8 h-[180px] w-[180px] overflow-hidden rounded-full shrink-0">
                            <Image
                                src="/hero-2.avif"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>

                    {/* Duplicate Set */}
                    <div className="flex items-center whitespace-nowrap shrink-0">

                        <h2 className="text-[clamp(5rem,14vw,14rem)] font-black leading-none">
                            Request a quote
                        </h2>

                        <div className="relative mx-8 h-[180px] w-[180px] overflow-hidden rounded-full shrink-0">
                            <Image
                                src="/ship-cta.jpg"
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}