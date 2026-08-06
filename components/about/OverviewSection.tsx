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

                        <h1
                            className="
                text-3xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-[1.05]
                tracking-tight
            "
                        >
                            <span className="text-orange-400">
                                Marine Masters
                            </span>{" "}
                            is an India-based global supplier of marine spare parts,
                            ship spare parts, marine engine spare parts, ship
                            machinery, and OEM marine components serving the
                            international maritime industry.
                        </h1>

                        <div
                            className="
                mt-10
                max-w-4xl
                text-lg
                leading-relaxed
                text-neutral-600
            "
                        >
                            Marine Masters supplies genuine, OEM, compatible
                            replacement, and reconditioned marine spare parts for
                            commercial shipping companies, ship owners, ship
                            management companies, shipyards, offshore operators,
                            marine service providers, and procurement professionals
                            across Europe, the Middle East, Asia-Pacific, North
                            America, and Africa. Our focus is on delivering reliable
                            sourcing solutions that reduce procurement delays and
                            keep vessels operating efficiently.

                            <br />
                            <br />

                            Our product portfolio includes marine engine spare
                            parts, main engine spare parts, auxiliary engine spare
                            parts, turbocharger spare parts, marine pump spare
                            parts, purifier spares, marine air compressor spare
                            parts, fuel injection equipment, cylinder liners,
                            piston rings, engine bearings, heat exchangers,
                            exhaust valve spindles, engine overhaul kits, and a
                            comprehensive range of ship machinery and marine
                            equipment from leading global manufacturers including
                            MAN B&W, Wärtsilä, Sulzer, Mitsubishi, Yanmar,
                            Daihatsu, Bergen, ABB, Alfa Laval, Allweiler,
                            Grundfos, DESMI, IMO, KSB, Mitsubishi MET, and
                            many more.

                            <br />
                            <br />

                            Whether supporting planned maintenance, emergency
                            vessel repairs, or dry dock projects, Marine Masters
                            combines technical expertise, responsive customer
                            service, competitive quotations, and worldwide
                            logistics to deliver dependable marine spare parts
                            solutions for fleets operating across major shipping
                            routes and international ports.
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}