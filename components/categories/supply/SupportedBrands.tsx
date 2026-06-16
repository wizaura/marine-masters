import EngineBrandsGrid from "@/components/categories/details/EngineBrandsGrid";

export default function SupportedBrands({ brands }: { brands: any[] }) {
    return (
        <section className="rounded-4xl
                bg-gradient-to-b from-[#f3f3f3] via-white to-white
                pt-6
                ">

            <div className="mx-auto max-w-8xl">

                <div className="mb-20 px-8 grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-2xl text-neutral-500">
                            Engine Manufacturers
                        </p>
                    </div>

                    <div>

                        <h2
                            className="
                text-4xl
                font-bold
                leading-tight
                lg:text-6xl
            "
                        >
                            Supported engine brands for marine and industrial applications.
                        </h2>

                        <p
                            className="
                mt-6
                max-w-4xl
                text-lg
                text-neutral-600
            "
                        >
                            We support a wide range of leading marine engine
                            manufacturers, supplying genuine and replacement
                            spare parts for commercial vessels, offshore
                            assets, workboats, and industrial applications.
                            Our sourcing network enables fast access to
                            components across multiple engine series and
                            model generations.
                        </p>

                    </div>

                </div>

                <EngineBrandsGrid brands={brands} slug="engine-parts" />

            </div>

        </section>
    );
}