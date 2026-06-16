import Link from "next/link";
import Image from "next/image";

export default function CTA() {
    return (
        <Link
            href="/contact"
            className="block"
        >
            <section
                className="
                    overflow-hidden
                    bg-[#fefefe]
                    cursor-pointer
                "
            >
                <div className="overflow-hidden py-6">

                    <div className="freight-marquee">

                        <div className="flex shrink-0 items-center justify-center whitespace-nowrap">

                            <div className="relative mx-8 h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full">
                                <Image
                                    src="/hero-2.avif"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h2 className="pb-12 text-[clamp(5rem,14vw,14rem)] font-black leading-none">
                                Request a quote
                            </h2>

                            <div className="relative mx-8 h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full">
                                <Image
                                    src="/hero-2.avif"
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>

                        <div className="flex shrink-0 items-center whitespace-nowrap">

                            <h2 className="text-[clamp(5rem,14vw,14rem)] font-black leading-none">
                                Request a quote
                            </h2>

                            <div className="relative mx-8 h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full">
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
        </Link>
    );
}