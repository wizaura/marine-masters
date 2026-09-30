type Props = {
    country: string;
    title: string;
    description: string;
    primaryCta?: string;
    secondaryCta?: string;
};

export default function CountryHero({
    country,
    title,
    description,
    primaryCta = "Request a Quote",
    secondaryCta = "Browse Marine Spare Parts",
}: Props) {
    return (
        <section className="relative overflow-hidden bg-neutral-950 text-white">
            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
                <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-orange-400/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
                <div className="max-w-4xl">

                    {/* Country label */}
                    <span
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.06]
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-orange-300
                        "
                    >
                        {country} Marine Spare Parts
                    </span>

                    {/* Heading */}
                    <h1
                        className="
                            mt-6
                            max-w-4xl
                            text-4xl
                            font-bold
                            tracking-tight
                            sm:text-5xl
                            lg:text-6xl
                            lg:leading-[1.08]
                        "
                    >
                        {title}
                    </h1>

                    {/* Description */}
                    <p
                        className="
                            mt-6
                            max-w-3xl
                            text-base
                            leading-7
                            text-neutral-300
                            sm:text-lg
                            sm:leading-8
                        "
                    >
                        {description}
                    </p>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <a
                            href="#rfq"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                rounded-lg
                                bg-orange-500
                                px-6
                                py-3.5
                                font-semibold
                                text-white
                                transition
                                hover:bg-orange-400
                            "
                        >
                            {primaryCta}
                        </a>

                        <a
                            href="/categories"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-white/20
                                bg-white/[0.03]
                                px-6
                                py-3.5
                                font-semibold
                                text-white
                                transition
                                hover:border-orange-400
                                hover:text-orange-400
                            "
                        >
                            {secondaryCta}
                        </a>

                    </div>

                    {/* RFQ hint */}
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-400">
                        <span>✓ Manufacturer</span>
                        <span>✓ Engine / Machinery Model</span>
                        <span>✓ Part Number</span>
                        <span>✓ Quantity</span>
                    </div>

                </div>
            </div>
        </section>
    );
}