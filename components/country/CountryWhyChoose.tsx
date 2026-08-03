type Props = {
    points: string[];
};

export default function CountryWhyChoose({
    points,
}: Props) {
    return (
        <section className="bg-neutral-50 py-20">

            <div className="mx-auto max-w-7xl px-6">

                <div className="max-w-4xl">

                    <h2 className="text-4xl font-bold">
                        Why Choose Marine Masters?
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        Marine Masters supports ship owners, ship management
                        companies, marine service providers, shipyards, and
                        procurement teams with dependable sourcing solutions
                        for marine spare parts and ship machinery worldwide.
                    </p>

                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {points.map((point) => (
                        <div
                            key={point}
                            className="rounded-xl bg-white p-8 shadow-sm"
                        >
                            <div className="text-2xl">
                                ✓
                            </div>

                            <h3 className="mt-4 font-semibold">
                                {point}
                            </h3>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}