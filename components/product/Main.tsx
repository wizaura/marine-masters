import ProductHero from "./Hero";
import ProductDetails from "./Details";

export default function ProductPage({
    product,
    subItemSlug,
}: {
    product: any;
    subItemSlug: string;
}) {
    return (
        <>
            <ProductHero product={product} />

            <ProductDetails product={product} subItemSlug={subItemSlug} />
        </>
    );
}