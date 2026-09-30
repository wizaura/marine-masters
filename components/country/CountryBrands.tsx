import Link from "next/link";

type Brand = {
    name: string;
    href: string;
};

type Props = {
    engineBrands: Brand[];
    machineryBrands: Brand[];
};

export default function CountryBrands({
    engineBrands,
    machineryBrands,
}: Props) {
    return (
        <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

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
                        Manufacturers
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
                        Marine Engine & Ship Machinery Brands We Support
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
                        Browse marine engine and ship machinery manufacturers
                        to find relevant spare-parts categories, equipment
                        information, and manufacturer-specific sourcing
                        options.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-2">

                    {/* Engine Brands */}
                    <div
                        className="
                            rounded-2xl
                            border
                            border-neutral-200
                            bg-neutral-50
                            p-6
                            sm:p-8
                        "
                    >
                        <h3 className="text-2xl font-bold text-neutral-950">
                            Marine Engine Brands
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-neutral-600">
                            Marine engine spare parts for major engine
                            manufacturers and engine types.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {engineBrands.map((brand) => (
                                <Link
                                    key={brand.name}
                                    href={brand.href}
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-xl
                                        border
                                        border-neutral-200
                                        bg-white
                                        px-4
                                        py-4
                                        text-sm
                                        font-medium
                                        text-neutral-800
                                        transition
                                        hover:border-orange-300
                                        hover:text-orange-600
                                        hover:shadow-sm
                                    "
                                >
                                    <span>{brand.name}</span>

                                    <span
                                        className="
                                            text-neutral-400
                                            transition
                                            group-hover:translate-x-1
                                            group-hover:text-orange-500
                                        "
                                    >
                                        →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Machinery Brands */}
                    <div
                        className="
                            rounded-2xl
                            border
                            border-neutral-200
                            bg-neutral-50
                            p-6
                            sm:p-8
                        "
                    >
                        <h3 className="text-2xl font-bold text-neutral-950">
                            Ship Machinery Brands
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-neutral-600">
                            Spare parts and components for marine machinery
                            manufacturers across pumps, turbochargers, and
                            other shipboard equipment.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {machineryBrands.map((brand) => (
                                <Link
                                    key={brand.name}
                                    href={brand.href}
                                    className="
                                        group
                                        flex
                                        items-center
                                        justify-between
                                        rounded-xl
                                        border
                                        border-neutral-200
                                        bg-white
                                        px-4
                                        py-4
                                        text-sm
                                        font-medium
                                        text-neutral-800
                                        transition
                                        hover:border-orange-300
                                        hover:text-orange-600
                                        hover:shadow-sm
                                    "
                                >
                                    <span>{brand.name}</span>

                                    <span
                                        className="
                                            text-neutral-400
                                            transition
                                            group-hover:translate-x-1
                                            group-hover:text-orange-500
                                        "
                                    >
                                        →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

                {/* RFQ */}
                <div
                    className="
                        mt-10
                        rounded-2xl
                        border
                        border-orange-100
                        bg-orange-50
                        p-6
                        sm:p-8
                    "
                >
                    <h3 className="text-2xl font-bold text-neutral-950">
                        Can't Find Your Brand or Model?
                    </h3>

                    <p
                        className="
                            mt-4
                            max-w-4xl
                            leading-8
                            text-neutral-700
                        "
                    >
                        Send us the manufacturer, engine or machinery model,
                        serial number where available, part number, required
                        quantity, and photographs or drawings. Our team can
                        review the requirement and assist with sourcing the
                        required marine spare parts.
                    </p>

                    <Link
                        href="#rfq"
                        className="
                            mt-7
                            inline-flex
                            items-center
                            justify-center
                            rounded-lg
                            bg-neutral-950
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-orange-500
                        "
                    >
                        Request a Quote
                    </Link>
                </div>

            </div>
        </section>
    );
}