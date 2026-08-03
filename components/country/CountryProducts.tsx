import Link from "next/link";

type Props = {
    products: string[];
};

export default function CountryProducts({
    products,
}: Props) {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="max-w-4xl">
                    <h2 className="text-4xl font-bold">
                        Marine Spare Parts & Ship Machinery We Supply
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        Marine Masters supplies a comprehensive range of marine
                        spare parts, ship spare parts, engine components, and
                        ship machinery to support commercial vessels, offshore
                        operators, and shipyards worldwide.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product}
                            className="
                                rounded-xl
                                border border-gray-300
                                bg-white
                                p-5
                                hover:border-orange-600
                                transition-colors
                            "
                        >
                            <span className="font-medium">
                                {product}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Link
                        href="/categories"
                        className="
                            inline-flex
                            rounded-lg
                            bg-black
                            hover:bg-orange-400
                            px-6
                            py-3
                            text-white
                            font-medium
                        "
                    >
                        Browse Product Categories
                    </Link>
                </div>

            </div>
        </section>
    );
}