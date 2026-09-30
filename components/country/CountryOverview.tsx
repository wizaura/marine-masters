type Props = {
    country?: string;
    paragraphs: string[];
};

export default function CountryOverview({
    country,
    paragraphs,
}: Props) {
    return (
        <section className="border-b border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">

                <div className="grid gap-12 lg:grid-cols-[1fr_320px]">

                    {/* Main content */}
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
                            Marine Spare Parts Supply
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
                            Marine Spare Parts Supply
                            {country ? ` in ${country}` : ""}
                        </h2>

                        <div className="mt-8 space-y-6">
                            {paragraphs.map((paragraph, index) => (
                                <p
                                    key={`${index}-${paragraph.slice(0, 30)}`}
                                    className="
                                        text-base
                                        leading-8
                                        text-neutral-600
                                        sm:text-lg
                                    "
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                    </div>

                    {/* Commercial RFQ card */}
                    <aside className="lg:pt-10">
                        <div
                            className="
                                rounded-2xl
                                border
                                border-neutral-200
                                bg-neutral-50
                                p-6
                                shadow-sm
                            "
                        >
                            <h3 className="text-lg font-bold text-neutral-950">
                                Need a Spare Part?
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-neutral-600">
                                Send your manufacturer, model or part number
                                and request a quotation for your marine spare
                                parts requirement.
                            </p>

                            <a
                                href="#rfq"
                                className="
                                    mt-6
                                    inline-flex
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-orange-500
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-orange-400
                                "
                            >
                                Request a Quote
                            </a>

                            <p className="mt-4 text-center text-xs text-neutral-500">
                                Manufacturer · Model · Part Number · Quantity
                            </p>
                        </div>
                    </aside>

                </div>
            </div>
        </section>
    );
}