type Props = {
    country: string;
    logistics: string[];
};

const steps = [
    {
        number: "01",
        title: "Submit RFQ",
        description: "Send your part number, model, manufacturer and quantity.",
    },
    {
        number: "02",
        title: "Technical Review",
        description: "Our team reviews the requirement and identifies the required component.",
    },
    {
        number: "03",
        title: "Quotation",
        description: "Receive a competitive quotation based on your requirement.",
    },
    {
        number: "04",
        title: "Dispatch",
        description: "Approved orders are prepared and dispatched through the appropriate logistics channel.",
    },
    {
        number: "05",
        title: "Delivery",
        description: "Marine spare parts are delivered to your specified port or location.",
    },
];

export default function CountryLogistics({
    country,
    logistics,
}: Props) {
    return (
        <section className="bg-white pt-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="max-w-3xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                        Logistics & Supply
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
                        Marine Spare Parts Logistics for {country}
                    </h2>

                    <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
                        Marine Masters supports international vessel operators,
                        shipyards, marine service companies and procurement teams
                        with sourcing and delivery of marine engine spare parts
                        and ship machinery.
                    </p>
                </div>

                {/* Logistics capabilities */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {logistics.map((item, index) => (
                        <div
                            key={item}
                            className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:bg-white hover:shadow-lg"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-sm font-bold text-orange-700">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-neutral-950">
                                        {item}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                                        Marine spare parts sourcing and logistics
                                        support for vessel maintenance requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RFQ workflow */}
                <div className="mt-16 overflow-hidden rounded-3xl bg-neutral-950 text-white">

                    <div className="p-8 sm:p-10 lg:p-12">

                        <div className="max-w-2xl">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                                Supply Process
                            </span>

                            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                                From RFQ to Marine Spare Parts Delivery
                            </h3>

                            <p className="mt-4 leading-7 text-neutral-400">
                                A straightforward sourcing process for ship owners,
                                fleet managers, shipyards and marine procurement teams.
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="mt-10 grid gap-8 md:grid-cols-5">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="relative"
                                >
                                    {/* Connector */}
                                    {index < steps.length - 1 && (
                                        <div className="absolute left-[3.25rem] top-6 hidden h-px w-[calc(100%-2rem)] bg-neutral-700 md:block" />
                                    )}

                                    <div className="relative">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-500 bg-orange-500 text-sm font-bold text-white">
                                            {step.number}
                                        </div>

                                        <h4 className="mt-5 font-semibold text-white">
                                            {step.title}
                                        </h4>

                                        <p className="mt-2 text-sm leading-6 text-neutral-400">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="font-semibold">
                                    Need a marine spare part?
                                </p>
                                <p className="mt-1 text-sm text-neutral-400">
                                    Send your manufacturer, model or part number.
                                </p>
                            </div>

                            <a
                                href="#rfq"
                                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                            >
                                Request a Quote
                                <span className="ml-2">→</span>
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}