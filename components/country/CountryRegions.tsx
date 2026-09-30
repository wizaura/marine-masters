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
        <section className="bg-white pt-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header */}
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
                        Global Coverage
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
                        Marine Spare Parts Supply Across Our Global Regions
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
                        Marine Masters supports ship owners, fleet operators,
                        shipyards, marine service companies, and procurement
                        teams with marine spare parts and ship machinery
                        sourcing across international markets.
                    </p>
                </div>

                {/* Regions */}
                <div
                    className="
                        mt-12
                        grid
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {regions.map((region) => {
                        const active =
                            currentRegion === region.slug;

                        return (
                            <Link
                                key={region.slug}
                                href={`/regions/${region.slug}`}
                                className={`
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    bg-neutral-50
                                    p-7
                                    transition
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-lg
                                    ${
                                        active
                                            ? "border-orange-400 ring-1 ring-orange-200"
                                            : "border-neutral-200 hover:border-orange-300"
                                    }
                                `}
                            >
                                {/* Orange accent */}
                                <div
                                    className="
                                        absolute
                                        left-0
                                        top-0
                                        h-full
                                        w-1
                                        bg-orange-500
                                        opacity-0
                                        transition
                                        group-hover:opacity-100
                                    "
                                />

                                <div className="flex items-start justify-between gap-4">

                                    <div>
                                        <h3
                                            className="
                                                text-xl
                                                font-semibold
                                                text-neutral-950
                                            "
                                        >
                                            {region.name}
                                        </h3>

                                        <p
                                            className="
                                                mt-3
                                                text-sm
                                                leading-7
                                                text-neutral-600
                                            "
                                        >
                                            {region.description}
                                        </p>
                                    </div>

                                    <span
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-neutral-200
                                            bg-white
                                            text-neutral-500
                                            transition
                                            group-hover:border-orange-300
                                            group-hover:bg-orange-50
                                            group-hover:text-orange-500
                                        "
                                    >
                                        →
                                    </span>

                                </div>

                                <div
                                    className="
                                        mt-6
                                        text-sm
                                        font-semibold
                                        text-orange-600
                                    "
                                >
                                    Explore Region
                                </div>

                            </Link>
                        );
                    })}
                </div>

                {/* Regional RFQ */}
                <div
                    className="
                        mt-12
                        overflow-hidden
                        rounded-2xl
                        bg-neutral-950
                        px-6
                        py-8
                        text-white
                        sm:px-8
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-6
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-bold">
                                Need Marine Spare Parts for Another Region?
                            </h3>

                            <p className="mt-3 leading-7 text-neutral-400">
                                Send your vessel, manufacturer, model or part
                                number and delivery location. Our team can
                                review your requirement and assist with
                                international sourcing.
                            </p>
                        </div>

                        <Link
                            href="#rfq"
                            className="
                                inline-flex
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                bg-orange-500
                                px-6
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-orange-400
                            "
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}