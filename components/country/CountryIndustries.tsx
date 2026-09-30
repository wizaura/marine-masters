type Props = {
    industries: string[];
};

export default function CountryIndustries({
    industries,
}: Props) {
    return (
        <section className="bg-neutral-100 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="max-w-3xl">
                    <span
                        className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-orange-500
                        "
                    >
                        Industries
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
                        Marine Spare Parts for Maritime Industries
                    </h2>

                    <p
                        className="
                            mt-5
                            text-base
                            leading-8
                            text-neutral-600
                            sm:text-lg
                        "
                    >
                        Marine Masters supplies marine spare parts, engine
                        components, and ship machinery for vessel operators,
                        shipyards, marine service companies, and other maritime
                        industries across the country.
                    </p>
                </div>

                <div
                    className="
                        mt-12
                        grid
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                    "
                >
                    {industries.map((industry) => (
                        <div
                            key={industry}
                            className="
                                group
                                rounded-xl
                                border
                                border-neutral-200
                                bg-white
                                p-6
                                transition
                                duration-300
                                hover:-translate-y-1
                                hover:border-orange-200
                                hover:shadow-md
                            "
                        >
                            <div
                                className="
                                    mb-4
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    bg-orange-50
                                    text-orange-500
                                    transition
                                    group-hover:bg-orange-500
                                    group-hover:text-white
                                "
                            >
                                <span className="text-lg">✓</span>
                            </div>

                            <h3
                                className="
                                    font-semibold
                                    text-neutral-900
                                "
                            >
                                {industry}
                            </h3>

                            <p
                                className="
                                    mt-2
                                    text-sm
                                    leading-6
                                    text-neutral-500
                                "
                            >
                                Marine spare parts and machinery sourcing
                                support.
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}