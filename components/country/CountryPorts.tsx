import Link from "next/link";

type Props = {
    country: string;
    ports: string[];
};

export default function CountryPorts({
    country,
    ports,
}: Props) {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="mx-auto max-w-7xl px-6">

                <div className="max-w-4xl">
                    <h2 className="text-4xl font-bold">
                        Supporting Major Ports Across {country}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        Marine Masters supports vessel operators, ship owners,
                        shipyards, marine service providers, and procurement
                        teams operating through major commercial ports across{" "}
                        {country}. Whether your vessel requires planned
                        maintenance, dry dock support, or urgent replacement
                        components, we help source marine spare parts and ship
                        machinery with worldwide logistics support.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {ports.map((port) => (
                        <div
                            key={port}
                            className="rounded-xl border border-gray-300 bg-white p-6"
                        >
                            <h3 className="font-semibold text-lg">
                                {port}
                            </h3>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-neutral-600 leading-8">
                    If your vessel is calling at one of these ports, our team
                    can assist with sourcing marine engine spare parts, ship
                    spare parts, pumps, turbochargers, compressors, purifiers,
                    heat exchangers, and other critical ship machinery.
                </p>

            </div>
        </section>
    );
}