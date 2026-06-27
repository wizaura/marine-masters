"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="sticky top-0 z-0 p-3">
            <div className="relative h-[97vh] overflow-hidden rounded-[48px]">

                {/* Background Image */}
                <Image
                    src="/about-hero-2.jpeg"
                    alt="Marine logistics"
                    fill
                    priority
                    className="object-cover object-bottom"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Marquee */}
                <div
                    className="
                        absolute
                        bottom-25
                        left-0
                        z-20
                        w-full
                        overflow-hidden
                    "
                >
                    <div className="freight-marquee flex items-center">

                        <span
                            className="
            whitespace-nowrap
            text-[clamp(5rem,14vw,14rem)]
            font-bold
            leading-none
            text-white
        "
                        >
                            About
                        </span>

                        <span
                            className="
            mx-10
            text-[clamp(3rem,8vw,6rem)]
            text-white/70
            leading-none
        "
                        >
                            •
                        </span>

                        <span
                            className="
            whitespace-nowrap
            text-[clamp(5rem,14vw,14rem)]
            font-bold
            leading-none
            text-white
        "
                        >
                            Marine Masters
                        </span>

                        <span
                            className="
            mx-10
            text-[clamp(3rem,8vw,6rem)]
            text-white/70
            leading-none
        "
                        >
                            •
                        </span>

                    </div>
                </div>

            </div>
        </div>
    );
}