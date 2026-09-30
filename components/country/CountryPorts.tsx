import type { CountryPort } from "@/lib/countries/types";

type Props = {
    country: string;
    ports: CountryPort[];
};

export default function CountryPorts({
    country,
    ports,
}: Props) {
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="max-w-4xl">
                    <span
                        className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-orange-500
                        "
                    >
                        Port & Vessel Support
                    </span>

                    <h2
                        className="
                            mt-3
                            text-3xl
                            font-bold
                            tracking-tight
                            text-neutral-950
                            sm:text-4xl
                        "
                    >
                        Marine Spare Parts for Major Ports in {country}
                    </h2>

                    <p
                        className="
                            mt-5
                            text-base
                            leading-8
                            text-neutral-600
                            sm:text-lg
                        "
                    >
                        Marine Masters supports vessel operators, ship owners,
                        shipyards, marine service providers, and procurement
                        teams sourcing spare parts for vessels operating through
                        major ports across {country}.
                    </p>
                </div>

                <div
                    className="
                        mt-12
                        grid
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {ports.map((port) => (
                        <div
                            key={port.name}
                            className="
                                rounded-xl
                                border
                                border-neutral-200
                                bg-neutral-50
                                p-6
                                transition
                                duration-300
                                hover:-translate-y-1
                                hover:border-orange-200
                                hover:bg-white
                                hover:shadow-md
                            "
                        >
                            <h3 className="text-lg font-semibold text-neutral-950">
                                {port.name}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-neutral-600">
                                {port.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className="
                        mt-10
                        rounded-2xl
                        border
                        border-orange-100
                        bg-orange-50
                        p-6
                        sm:p-8
                    "
                >
                    <h3 className="text-xl font-bold text-neutral-950">
                        Need Spare Parts for a Vessel Calling at a {country} Port?
                    </h3>

                    <p className="mt-3 max-w-4xl leading-7 text-neutral-700">
                        Send your manufacturer, engine or machinery model,
                        part number, required quantity, and delivery location.
                        Marine Masters can assist with sourcing marine engine
                        spare parts, ship machinery components, pumps,
                        turbochargers, compressors, oil purifier parts,
                        heat exchangers, and other marine equipment.
                    </p>

                    <a
                        href="#rfq"
                        className="
                            mt-6
                            inline-flex
                            items-center
                            justify-center
                            rounded-lg
                            bg-orange-500
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-orange-400
                        "
                    >
                        Request a Quote
                    </a>
                </div>

            </div>
        </section>
    );
}