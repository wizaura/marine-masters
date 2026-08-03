import Link from "next/link";

type Country = {
    name: string;
    slug: string;
    description: string;
};

type Props = {
    countries: Country[];
};

export default function RegionCountries({
    countries,
}: Props) {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="mx-auto max-w-7xl px-6">

                <div className="max-w-4xl">
                    <h2 className="text-4xl font-bold">
                        Countries We Support
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        Marine Masters supplies marine spare parts,
                        ship spare parts, marine engine spare parts,
                        and ship machinery across major maritime
                        markets throughout this region.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {countries.map((country) => (
                        <Link
                            key={country.slug}
                            href={`/countries/${country.slug}`}
                            className="
                                rounded-2xl
                                border border-gray-300
                                bg-white
                                p-6
                                transition-all
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >
                            <h3 className="text-xl font-semibold">
                                {country.name}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-neutral-600">
                                {country.description}
                            </p>

                            <span className="mt-6 inline-flex font-medium text-blue-600">
                                Explore Country →
                            </span>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}