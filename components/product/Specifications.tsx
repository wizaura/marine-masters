export default function ProductSpecifications({
    product,
}: {
    product: any;
}) {

    const specifications = [];

    // Engine Product
    if (product.engineModel) {
        specifications.push(
            {
                label: "Engine Brand",
                value: product.engineModel.brand.name,
            },
            {
                label: "Engine Model",
                value: product.engineModel?.name,
            },
            {
                label: "Part Category",
                value: product.partType?.title,
            }
        );
    }

    // Machinery Product
    if (product.machineryBrand) {
        specifications.push(
            {
                label: "Machinery Type",
                value: product.machineryType?.title,
            },
            {
                label: "Machinery Brand",
                value: product.machineryBrand.name,
            },
            {
                label: "Machinery Model",
                value: product.machineryModel?.name,
            }
        );
    }

    specifications.push({
        label: "Condition",
        value: product.condition,
    });

    return (
        <section>
            <h2
                className="
                    mb-10
                    text-4xl
                    font-bold
                "
            >
                Specifications
            </h2>

            <div
                className="
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-neutral-200
                    bg-white
                "
            >
                {specifications.map(
                    (item, index) => (
                        <div
                            key={item.label}
                            className={`
                                grid
                                grid-cols-2
                                p-6
                                ${
                                    index !==
                                    specifications.length -
                                        1
                                        ? "border-b border-neutral-200"
                                        : ""
                                }
                            `}
                        >
                            <span className="text-neutral-500">
                                {item.label}
                            </span>

                            <span>
                                {item.value || "-"}
                            </span>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}