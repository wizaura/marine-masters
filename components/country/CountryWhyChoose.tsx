type Props = {
    points: string[];
};

export default function CountryWhyChoose({
    points,
}: Props) {
    return (
        <section className="bg-neutral-50 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}
                <div className="max-w-3xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                        Why Marine Masters
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
                        Marine Spare Parts Sourcing You Can Rely On
                    </h2>

                    <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-lg">
                        Marine Masters supports ship owners, ship management
                        companies, shipyards, marine service providers and
                        procurement teams with international sourcing for
                        marine engine parts and ship machinery.
                    </p>
                </div>

                {/* Points */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {points.map((point, index) => (
                        <div
                            key={point}
                            className="group rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                        >
                            {/* Number / icon */}
                            <div className="flex items-center justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-5 w-5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            d="M5 12.5l4 4L19 6.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                                <span className="text-sm font-semibold text-neutral-300">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <h3 className="mt-6 text-lg font-semibold leading-7 text-neutral-950">
                                {point}
                            </h3>

                            <div className="mt-5 h-1 w-8 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-14" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 rounded-3xl bg-neutral-950 p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:p-12">

                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                            Marine Procurement
                        </span>

                        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                            Looking for a specific marine spare part?
                        </h3>

                        <p className="mt-4 leading-7 text-neutral-400">
                            Share the manufacturer, engine model, machinery
                            model or part number and our team can review your
                            requirement.
                        </p>
                    </div>

                    <a
                        href="#rfq"
                        className="mt-7 inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 lg:mt-0"
                    >
                        Submit an RFQ
                        <span className="ml-2">→</span>
                    </a>

                </div>

            </div>
        </section>
    );
}