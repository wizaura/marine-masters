"use client";

export default function OverviewSection() {
    return (
        <section
            className="
                relative
                z-30
                bg-white
            "
        >
            {/* Top cap that hides hero */}
            <div className="absolute -top-12 left-0 h-12 w-full bg-white" />

            <div className="mx-auto max-w-8xl px-8 pt-20 pb-20">

                <div className="grid gap-12 md:grid-cols-[0.6fr_1.4fr]">

                    {/* Left */}
                    <div>
                        <p
                            className="
                                text-xl
                                md:text-2xl
                                font-medium
                                text-neutral-500
                            "
                        >
                            Company Overview
                        </p>
                    </div>

                    {/* Right */}
                    <div>
                        <h2
                            className="
            text-3xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-[1.05]
            tracking-tight
        "
                        >
                            <span className="text-orange-400">Marine Masters</span> is a trusted supplier
                            of marine engine spare parts, ship machinery, and critical marine
                            equipment for vessels operating worldwide.
                        </h2>

                        <div
                            className="
            mt-10
            max-w-4xl
            text-lg
            leading-relaxed
            text-neutral-600
        "
                        >
                            With a focus on reliability, availability, and fast response times, we help customers source genuine, OEM, and quality reconditioned parts for a wide range of marine engines and onboard machinery. Our extensive network and industry expertise enable us to support routine maintenance, emergency repairs, and complete vessel overhauls with dependable supply solutions.<br/><br/>

                            From engine components and turbocharger parts to pumps, compressors, separators, deck equipment, and auxiliary machinery, Marine Masters provides access to a comprehensive range of products designed to keep vessels operating safely and efficiently.<br/><br/>

                            Our commitment is simple: deliver the right marine parts at the right time, minimize operational downtime, and support the global maritime industry with professional service and worldwide logistics capabilities.
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}