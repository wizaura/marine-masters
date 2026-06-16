import ProductOverview from "./Overview";
import ProductSpecifications from "./Specifications";
import ProductRFQ from "./RFQ";
import OtherMachineryModels from "./OtherMachineryModels";
import OtherEnginePartTypes from "./OtherEnginePartTypes";

export default function ProductDetails({
    product,
    subItemSlug,
}: {
    product: any;
    subItemSlug: string;
}) {
    return (
        <section className="bg-white px-8 py-20">
            <div className="mx-auto max-w-8xl">

                <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* Left Side */}
                    <div>

                        <ProductOverview
                            product={product}
                        />

                        <ProductSpecifications
                            product={product}
                        />

                        {product.engineModel && (
                            <OtherEnginePartTypes
                                product={product}
                                subItemSlug={subItemSlug}
                            />
                        )}

                        {product.machineryModel && (
                            <OtherMachineryModels
                                product={product}
                            />
                        )}

                    </div>

                    {/* Right Side */}
                    <div>

                        <div className="lg:sticky lg:top-32">

                            <ProductRFQ
                                product={product}
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}