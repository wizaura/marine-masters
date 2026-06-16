"use client";

export default function MissionSection() {
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
                            Mission and Vision
                        </p>
                    </div>

                    {/* Right */}
                    <div>
                        <div>
                            <h2
                                className="
            max-w-5xl
            text-2xl
            font-bold
            leading-tight
            md:text-4xl
            lg:text-5xl
        "
                            >
                                Our mission is to provide reliable access
                                to marine engine parts, ship machinery,
                                and technical solutions that help keep
                                vessels operating safely, efficiently,
                                and without unnecessary downtime.
                            </h2>

                            <div
                                className="
            mt-10
            max-w-4xl
            space-y-6
            text-lg
            leading-relaxed
            text-neutral-600
        "
                            >
                                <p>
                                    We are committed to supporting the
                                    maritime industry with dependable
                                    products, responsive service, and
                                    efficient global supply solutions.
                                    By connecting vessel operators,
                                    shipyards, and marine service
                                    companies with trusted marine
                                    equipment and spare parts, we help
                                    ensure operational continuity
                                    wherever our customers operate.
                                </p>

                                <p>
                                    Our vision is to become a trusted
                                    global partner for marine procurement,
                                    recognized for reliability, technical
                                    expertise, and long-term customer
                                    relationships. We strive to simplify
                                    the sourcing process while delivering
                                    value, quality, and confidence to the
                                    maritime sector.
                                </p>

                                <p>
                                    From engine spares and turbocharger
                                    components to pumps, compressors,
                                    separators, and deck machinery,
                                    we source and deliver reliable marine
                                    equipment for ship owners, operators,
                                    and marine service companies across
                                    global shipping routes.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}