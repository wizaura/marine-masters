"use client";

import { ChevronDown } from "lucide-react";

export default function CategoriesHero() {
    return (
        <section className="relative p-3">
            <div className="relative h-[97vh] overflow-hidden rounded-[48px]">

                {/* Background */}
                <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
                    alt="Marine Masters Categories"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-end">

                    {/* Big Title */}
                    <div className="w-full overflow-hidden pb-16">

                        <h1
                            className="
                                whitespace-nowrap
                                text-[clamp(5rem,15vw,15rem)]
                                font-bold
                                leading-none
                                text-white
                            "
                        >
                            Categories
                        </h1>

                    </div>

                </div>

                {/* Bottom Notch */}
                <div
                    className="
                        absolute
                        bottom-0
                        left-1/2
                        z-20
                        -translate-x-1/2
                    "
                >
                    <div
                        className="
                            relative
                            h-20
                            w-72
                            overflow-hidden
                        "
                    >
                        <div
                            className="
                                absolute
                                left-1/2
                                top-0
                                h-[160px]
                                w-[160px]
                                -translate-x-1/2
                                rounded-full
                                bg-[#f3f3f3]
                            "
                        />

                        <ChevronDown
                            size={28}
                            className="
                                absolute
                                left-1/2
                                top-5
                                -translate-x-1/2
                                animate-bounce
                                text-neutral-800
                            "
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}