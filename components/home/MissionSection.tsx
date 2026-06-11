"use client";

export default function MissionSection() {
    return (
        <section
            className="
                relative
                z-30
                bg-[#f3f3f3]
            "
        >
            {/* Top cap that hides hero */}
            <div className="absolute -top-12 left-0 h-12 w-full bg-[#f3f3f3]" />

            <div className="mx-auto max-w-8xl px-8 pt-20 pb-20">

                <div className="grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">

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
                            Mission and Vision
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
                            We <span className="text-orange-400">Marine Masters</span> supply genuine marine engine parts,
                            ship machinery, and critical components
                            to keep vessels operating efficiently,
                            reduce downtime, and support maritime
                            operations worldwide.
                        </h2>

                        <div
                            className="
            mt-10
            max-w-2xl
            text-lg
            leading-relaxed
            text-neutral-600
        "
                        >
                            From engine spares and turbocharger components
                            to pumps, compressors, and deck machinery,
                            we source and deliver reliable marine equipment
                            for ship owners, operators, and marine service
                            companies across global shipping routes.
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}