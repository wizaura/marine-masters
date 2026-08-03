type Props = {
    industries: string[];
};

export default function CountryIndustries({
    industries,
}: Props) {
    return (
        <section
            className="
                bg-neutral-100
                py-20
            "
        >
            <div className="mx-auto max-w-7xl px-6">

                <h2 className="text-4xl font-bold">
                    Industries We Support
                </h2>

                <p className="mt-4 max-w-3xl text-neutral-600">
                    Marine Masters supplies marine spare parts and ship machinery
                    for a wide range of maritime industries.
                </p>

                <div
                    className="
                        mt-10
                        grid
                        gap-5
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >

                    {industries.map((industry) => (

                        <div
                            key={industry}
                            className="
                                rounded-xl
                                bg-white
                                p-6
                                shadow-sm
                            "
                        >
                            <h3 className="font-semibold">
                                {industry}
                            </h3>
                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}