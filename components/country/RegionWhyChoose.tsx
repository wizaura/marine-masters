import Link from "next/link";

type WhyChoosePoint = {
    title: string;
    description: string;
};

type Props = {
    region: string;
    points: WhyChoosePoint[];
};

export default function RegionWhyChoose({
    region,
    points,
}: Props) {
    return (
        <section className="bg-neutral-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                        Why Marine Masters
                    </span>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
                        Why Choose Marine Masters in{" "}
                        <span className="text-orange-500">
                            {region}
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">
                        Marine Masters supports marine spare parts sourcing,
                        procurement, and delivery requirements for vessels,
                        shipyards, fleet operators, and marine businesses
                        across {region}.
                    </p>
                </div>

                {/* Points */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {points.map((point, index) => (
                        <div
                            key={`${point.title}-${index}`}
                            className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-7"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-sm font-semibold text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-neutral-950">
                                {point.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-neutral-600 sm:text-base">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 overflow-hidden rounded-3xl bg-neutral-950 p-8 sm:p-10 lg:p-12">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-2xl">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                                Need Marine Spare Parts?
                            </span>

                            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                                Send Your Requirement to Marine Masters
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-neutral-400 sm:text-base">
                                Share your part number, engine model,
                                machinery brand, product name, or vessel
                                requirement and request a quotation.
                            </p>
                        </div>

                        <Link
                            href="#rfq"
                            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-400"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}