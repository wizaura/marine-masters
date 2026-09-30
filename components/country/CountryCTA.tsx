import Link from "next/link";

type Props = {
    heading: string;
    description: string;
    button: string;
};

export default function CountryCTA({
    heading,
    description,
    button,
}: Props) {
    return (
        <section className="bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-7 py-14 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">

                    {/* Decorative elements */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

                    <div className="relative mx-auto max-w-4xl text-center">

                        <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                            Marine Spare Parts Procurement
                        </span>

                        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            {heading}
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
                            {description}
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                            <a
                                href="#rfq"
                                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                            >
                                {button}
                                <span className="ml-2">→</span>
                            </a>

                            <Link
                                href="/categories"
                                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
                            >
                                Browse Marine Spare Parts
                            </Link>

                        </div>

                        {/* Trust / intent line */}
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-sm text-neutral-400">
                            <span>Manufacturer & Model Sourcing</span>
                            <span className="hidden sm:inline">•</span>
                            <span>Part Number Identification</span>
                            <span className="hidden sm:inline">•</span>
                            <span>Worldwide Delivery</span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}