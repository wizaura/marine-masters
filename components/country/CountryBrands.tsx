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
        <section className="bg-neutral-50 py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="max-w-4xl">
                    <h2 className="text-4xl font-bold">
                        Marine Engine & Ship Machinery Brands We Support
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        Marine Masters supplies marine engine spare parts,
                        ship machinery, and replacement components for many
                        of the world's leading marine equipment manufacturers.
                        Whether you're sourcing parts for routine maintenance,
                        emergency repairs, or dry dock projects, we help ship
                        owners, shipyards, and procurement teams identify the
                        right components quickly.
                    </p>
                </div>

                <div className="mt-14 grid gap-12 lg:grid-cols-2">

                    {/* Engine Brands */}

                    <div>

                        <h3 className="text-2xl font-semibold">
                            Marine Engine Brands
                        </h3>

                        <div className="mt-6 flex flex-wrap gap-3">

                            {engineBrands.map((brand) => (
                                <Link
                                    key={brand.name}
                                    href={brand.href}
                                    className="
                                        rounded-full
                                        border border-gray-300
                                        bg-white
                                        px-5
                                        py-2
                                        text-sm
                                        font-medium
                                        transition-all
                                        hover:border-orange-600
                                        hover:bg-orange-50
                                    "
                                >
                                    {brand.name}
                                </Link>
                            ))}

                        </div>

                    </div>

                    {/* Machinery Brands */}

                    <div>

                        <h3 className="text-2xl font-semibold">
                            Ship Machinery Brands
                        </h3>

                        <div className="mt-6 flex flex-wrap gap-3">

                            {machineryBrands.map((brand) => (
                                <Link
                                    key={brand.name}
                                    href={brand.href}
                                    className="
                                        rounded-full
                                        border border-gray-300
                                        bg-white
                                        px-5
                                        py-2
                                        text-sm
                                        font-medium
                                        transition-all
                                        hover:border-orange-600
                                        hover:bg-orange-50
                                    "
                                >
                                    {brand.name}
                                </Link>
                            ))}

                        </div>

                    </div>

                </div>

                <div className="mt-16 rounded-2xl border border-gray-300 bg-white p-8">

                    <h3 className="text-2xl font-semibold">
                        Can't Find Your Brand or Model?
                    </h3>

                    <p className="mt-4 leading-8 text-neutral-600">
                        If your required engine brand, machinery manufacturer,
                        or model is not listed, simply send us the manufacturer,
                        model number, serial number, part number, and quantity
                        required. Our technical team will help identify suitable
                        marine spare parts, OEM components, or compatible
                        replacement parts and provide a competitive quotation.
                    </p>

                    <Link
                        href="/contact"
                        className="
                            mt-8
                            inline-flex
                            rounded-lg
                            bg-black
                            hover:bg-orange-400
                            px-6
                            py-3
                            font-medium
                            text-white
                            transition-colors
                            hover:bg-neutral-800
                        "
                    >
                        Request a Quote
                    </Link>

                </div>

            </div>
        </section>
    );
}