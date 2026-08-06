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
                                Our mission is to supply high-quality marine spare parts,
                                ship spare parts, marine engine spare parts, and ship
                                machinery that help ship owners, shipyards, and marine
                                service companies keep vessels operating safely,
                                efficiently, and with minimal downtime.
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
                                    Marine Masters is committed to delivering reliable
                                    marine spare parts, OEM marine components, and
                                    vessel spare parts backed by responsive customer
                                    service and efficient worldwide logistics. We support
                                    commercial shipping companies, fleet operators,
                                    offshore operators, shipyards, and marine procurement
                                    professionals with dependable sourcing solutions for
                                    planned maintenance, emergency repairs, and dry dock
                                    projects.
                                </p>

                                <p>
                                    Our vision is to become a globally trusted marine
                                    spare parts supplier, recognized for technical
                                    expertise, product quality, and long-term customer
                                    partnerships. We continuously expand our portfolio of
                                    marine engine spare parts, auxiliary engine spare
                                    parts, ship machinery, and OEM replacement components
                                    to simplify procurement and deliver greater value to
                                    customers worldwide.
                                </p>

                                <p>
                                    From MAN B&W, Wärtsilä, Sulzer, Mitsubishi, and
                                    Yanmar engine spare parts to turbocharger spare
                                    parts, marine pump spare parts, purifier spares,
                                    marine air compressor spare parts, heat exchangers,
                                    and complete ship machinery solutions, Marine Masters
                                    provides reliable worldwide ship spares delivery for
                                    commercial vessels, offshore fleets, and marine
                                    industries across Europe, the Middle East,
                                    Asia-Pacific, North America, and Africa.
                                </p>
                            </div>
                        </div>
                </div>

            </div>

        </div>
        </section >
    );
}