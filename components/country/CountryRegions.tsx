import Link from "next/link";

type Region = {
    name: string;
    slug: string;
    description: string;
};

type Props = {
    currentRegion?: string;
    regions: Region[];
};

export default function CountryRegions({
    regions,
    currentRegion,
}: Props) {
    return (
        <section className="bg-neutral-50 py-20">

            <div className="mx-auto max-w-7xl px-6">

                <div className="max-w-4xl">

                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Global Coverage
                    </span>

                    <h2 className="mt-3 text-4xl font-bold">
                        Regions We Support
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        Marine Masters supplies marine spare parts,
                        ship spare parts, marine engine spare parts,
                        ship machinery, and OEM marine components to
                        commercial shipping companies, shipyards,
                        offshore operators, and marine service providers
                        worldwide. Explore our regional hubs to learn
                        more about our international supply capabilities.
                    </p>

                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {regions.map((region) => {

                        const active =
                            currentRegion === region.slug;

                        return (

                            <Link
                                key={region.slug}
                                href={`/regions/${region.slug}`}
                                className={`
                                    rounded-2xl
                                    border border-gray-300
                                    bg-white
                                    p-8
                                    transition-all
                                    hover:-translate-y-1
                                    hover:shadow-lg
                                    ${
                                        active
                                            ? "border-blue-600 ring-2 ring-blue-100"
                                            : ""
                                    }
                                `}
                            >

                                <h3 className="text-2xl font-semibold">
                                    {region.name}
                                </h3>

                                <p className="mt-4 leading-7 text-neutral-600">
                                    {region.description}
                                </p>

                                <span className="mt-8 inline-flex font-medium text-blue-600">
                                    Explore Region →
                                </span>

                            </Link>

                        );
                    })}

                </div>

            </div>

        </section>
    );
}