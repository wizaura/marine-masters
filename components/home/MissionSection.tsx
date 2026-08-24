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
                            We are{" "}
                            <span className="text-orange-400">
                                Marine Masters
                            </span>
                            , supplying marine spare parts,
                            marine engine components, ship machinery,
                            and critical equipment to keep vessels
                            operating efficiently and reliably.
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
                            From main engine and auxiliary engine spare
                            parts to crankshafts, cylinder liners,
                            piston rings, engine bearings, fuel injection
                            components, exhaust valve spindles, and
                            turbocharger spare parts, we help ship owners,
                            fleet operators, ship management companies,
                            shipyards, and marine service providers source
                            the components they need for vessel maintenance
                            and repairs.

                            <br />
                            <br />

                            Our marine machinery supply also covers pumps,
                            compressors, purifiers, separators,
                            heat exchangers, and other critical onboard
                            equipment. We support genuine, OEM, compatible,
                            and reconditioned marine components from
                            established manufacturers, helping customers
                            reduce procurement delays and vessel downtime.

                            <br />
                            <br />

                            Marine Masters combines technical sourcing,
                            competitive quotations, and worldwide ship
                            spares delivery to support planned maintenance,
                            emergency repairs, dry dock projects, and
                            complete vessel overhauls across major
                            international shipping markets.
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}