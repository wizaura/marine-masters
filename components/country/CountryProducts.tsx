import Link from "next/link";

type Product = {
    name: string;
    description: string;
    href: string;
};

type Props = {
    products: Product[];
};

export default function CountryProducts({
    products,
}: Props) {
    return (
        <section className="bg-neutral-50 py-20 sm:py-24">
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
                        What We Supply
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
                        Marine Spare Parts & Ship Machinery We Supply
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
                        Marine Masters supplies marine engine spare parts,
                        ship machinery components, and replacement parts for
                        vessel maintenance, repairs, dry-dock projects, and
                        other marine procurement requirements.
                    </p>
                </div>

                <div
                    className="
                        mt-12
                        grid
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        xl:grid-cols-4
                    "
                >
                    {products.map((product) => (
                        <Link
                            key={product.name}
                            href={product.href}
                            className="
                                group
                                rounded-2xl
                                border
                                border-neutral-200
                                bg-white
                                p-6
                                transition
                                duration-300
                                hover:-translate-y-1
                                hover:border-orange-300
                                hover:shadow-lg
                            "
                        >
                            <div
                                className="
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
                                <span className="text-lg">→</span>
                            </div>

                            <h3
                                className="
                                    mt-5
                                    text-lg
                                    font-semibold
                                    text-neutral-950
                                "
                            >
                                {product.name}
                            </h3>

                            <p
                                className="
                                    mt-3
                                    text-sm
                                    leading-6
                                    text-neutral-600
                                "
                            >
                                {product.description}
                            </p>

                            <span
                                className="
                                    mt-5
                                    inline-flex
                                    text-sm
                                    font-semibold
                                    text-orange-600
                                    transition
                                    group-hover:text-orange-500
                                "
                            >
                                View Category →
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="mt-12">
                    <Link
                        href="/categories"
                        className="
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
                        Browse All Marine Spare Parts
                    </Link>
                </div>

            </div>
        </section>
    );
}