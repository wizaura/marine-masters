"use client";

import Image from "next/image";
import { Play } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="sticky top-0 z-0 p-3">
            <div className="relative h-[97vh] overflow-hidden rounded-[48px]">

                {/* Background Image */}
                <Image
                    src="/hero-1.avif"
                    alt="Marine logistics"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Floating Image Card */}
                <div
                    className="
        absolute
        left-[6%]
        top-[32%]
        z-20
        flex
        items-center
        gap-12
        max-w-[1200px]
    "
                >

                    {/* Image */}
                    <div className="hidden lg:block shrink-0">
                        <Image
                            src="/hero-2.avif"
                            alt="Marine Vessel"
                            width={320}
                            height={220}
                            className="
                h-[220px]
                w-[320px]
                rounded-[32px]
                object-cover
                shadow-2xl
            "
                        />
                    </div>

                    {/* Content */}
                    <div className="max-w-4xl">

                        <h1
                            className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl
                font-bold
                leading-[0.95]
                text-white
            "
                        >
                            Global Marine
                            <br />
                            Engine Parts &
                            <br />
                            Machinery Supply
                        </h1>

                        <p
                            className="
                mt-6
                max-w-xl
                text-base
                md:text-lg
                lg:text-xl
                text-white/80
            "
                        >
                            Delivering genuine marine engine spare parts,
                            machinery, and worldwide logistics solutions.
                        </p>

                    </div>

                </div>

                {/* Marquee */}
                <div
                    className="
                        absolute
                        bottom-25
                        md:bottom-15
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
                            Marine Parts
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
                            Marine Machinery
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
                            Engine Components
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