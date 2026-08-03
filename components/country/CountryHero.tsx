type Props = {
    country: string;
    title: string;
    description: string;
};

export default function CountryHero({
    country,
    title,
    description,
}: Props) {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-neutral-950
                text-white
            "
        >
            <div className="mx-auto max-w-7xl px-6 py-24">

                <span
                    className="
                        inline-flex
                        rounded-full
                        bg-white/10
                        px-4
                        py-1
                        text-sm
                    "
                >
                    {country} Marine Spare Parts
                </span>

                <h1
                    className="
                        mt-6
                        max-w-4xl
                        text-5xl
                        font-bold
                    "
                >
                    {title}
                </h1>

                <p
                    className="
                        mt-6
                        max-w-3xl
                        text-lg
                        leading-8
                        text-neutral-300
                    "
                >
                    {description}
                </p>

                <div className="mt-10 flex gap-4">

                    <a
                        href="/contact"
                        className="
                            rounded-lg
                            bg-white
                            hover:bg-orange-400
                            px-6
                            py-3
                            font-semibold
                            text-black
                        "
                    >
                        Request Quote
                    </a>

                    <a
                        href="/categories"
                        className="
                            rounded-lg
                            border
                            border-white/30
                            hover:border-orange-400
                            hover:text-orange-400
                            px-6
                            py-3
                        "
                    >
                        Browse Categories
                    </a>

                </div>

            </div>
        </section>
    );
}