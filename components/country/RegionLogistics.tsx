import Link from "next/link";

type LogisticsPoint = string;

type LogisticsStep = {
    number: string;
    title: string;
    description: string;
};

type Logistics = {
    heading: string;
    description: string;
    points: LogisticsPoint[];
    steps: LogisticsStep[];
};

type Props = {
    country: string;
    logistics: Logistics;
};

export default function RegionLogistics({
    country,
    logistics,
}: Props) {
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                        Marine Spare Parts Logistics
                    </span>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
                        {logistics.heading}
                    </h2>

                    <p className="mt-5 text-base leading-7 text-neutral-600 sm:text-lg">
                        {logistics.description}
                    </p>
                </div>

                {/* Logistics Points */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {logistics.points.map((point, index) => (
                        <div
                            key={`${point}-${index}`}
                            className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5"
                        >
                            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-xs font-bold text-white">
                                {String(index + 1).padStart(2, "0")}
                            </div>

                            <p className="text-sm font-medium leading-6 text-neutral-800">
                                {point}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Workflow */}
                <div className="mt-16 overflow-hidden rounded-3xl bg-neutral-950">
                    <div className="p-7 sm:p-10 lg:p-12">
                        <div className="max-w-2xl">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                                How It Works
                            </span>

                            <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                                From Requirement to Delivery
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-neutral-400 sm:text-base">
                                A straightforward sourcing and delivery
                                process for marine spare parts required in{" "}
                                {country}.
                            </p>
                        </div>

                        {/* Steps */}
                        <div className="mt-10">
                            {logistics.steps.map((step, index) => (
                                <div
                                    key={`${step.number}-${step.title}`}
                                    className={`grid gap-5 py-6 sm:grid-cols-[80px_1fr] sm:gap-6 ${
                                        index !== logistics.steps.length - 1
                                            ? "border-b border-white/10"
                                            : ""
                                    }`}
                                >
                                    {/* Number */}
                                    <div>
                                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-sm font-bold text-white">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-white">
                                            {step.title}
                                        </h4>

                                        <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-400 sm:text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="font-medium text-white">
                                    Looking for marine spare parts in{" "}
                                    {country}?
                                </p>

                                <p className="mt-1 text-sm text-neutral-500">
                                    Send us your requirement for a quotation.
                                </p>
                            </div>

                            <Link
                                href="#rfq"
                                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-orange-400"
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}