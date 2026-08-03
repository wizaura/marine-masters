type Props = {
    country: string;
    logistics: string[];
};

export default function CountryLogistics({
    country,
    logistics,
}: Props) {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="max-w-4xl">

                    <h2 className="text-4xl font-bold">
                        Worldwide Logistics Support for {country}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        Marine Masters understands that vessel maintenance often
                        depends on timely delivery of critical marine spare parts.
                        Our worldwide logistics network helps ship owners, fleet
                        operators, shipyards, and procurement teams receive
                        engine parts and ship machinery efficiently for planned
                        maintenance, dry dock projects, and emergency repairs.
                    </p>

                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {logistics.map((item) => (
                        <div
                            key={item}
                            className="rounded-xl border border-gray-300 bg-white p-6"
                        >
                            <h3 className="font-semibold">
                                {item}
                            </h3>
                        </div>
                    ))}

                </div>

                <div className="mt-14 rounded-2xl bg-neutral-950 p-10 text-white">

                    <h3 className="text-2xl font-semibold">
                        From RFQ to Worldwide Delivery
                    </h3>

                    <div className="mt-8 grid gap-6 md:grid-cols-5">

                        {[
                            "Submit RFQ",
                            "Technical Review",
                            "Competitive Quote",
                            "Dispatch",
                            "Worldwide Delivery",
                        ].map((step, index) => (
                            <div key={step} className="text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-black font-bold">
                                    {index + 1}
                                </div>
                                <p className="mt-4">{step}</p>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}