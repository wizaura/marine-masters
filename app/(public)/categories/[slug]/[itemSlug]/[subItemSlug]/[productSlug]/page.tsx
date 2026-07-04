import { notFound } from "next/navigation";
import ProductPage from "@/components/product/Main";
import { getEngineProduct } from "@/sanity/lib/getEngineProducts";
import { getMachineryProduct } from "@/sanity/lib/getMachineryProducts";
import CTA from "@/components/ui/CTA";
import type { Metadata } from "next";
import { urlFor } from "@/sanity/lib/image";
import Script from "next/script";

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const {
        slug,
        itemSlug,
        subItemSlug,
        productSlug,
    } = await params;

    const product =
        slug === "engine-parts"
            ? await getEngineProduct(
                itemSlug,
                subItemSlug,
                productSlug
            )
            : await getMachineryProduct(
                itemSlug,
                subItemSlug,
                productSlug
            );

    if (!product) {
        return {
            title: "Product Not Found",
        };
    }

    const image = product.image
        ? urlFor(product.image).width(1600).url()
        : "/og-image.jpg";

    return {
        title: `${product.title} | Marine Masters`,

        description:
            product.shortDescription ??
            product.description ??
            `Worldwide supplier of ${product.title}.`,

        alternates: {
            canonical:
                slug === "engine-parts"
                    ? `/categories/engine-parts/${itemSlug}/${subItemSlug}/${productSlug}`
                    : `/categories/machinery/${itemSlug}/${subItemSlug}/${productSlug}`,
        },

        openGraph: {
            type: "website",

            title: product.title,

            description:
                product.shortDescription ??
                product.description,

            url:
                slug === "engine-parts"
                    ? `https://shipsparesworldwide.com/categories/engine-parts/${itemSlug}/${subItemSlug}/${productSlug}`
                    : `https://shipsparesworldwide.com/categories/machinery/${itemSlug}/${subItemSlug}/${productSlug}`,

            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",

            title: product.title,

            description:
                product.shortDescription ??
                product.description,

            images: [image],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

type Props = {
    params: Promise<{
        slug: string;
        itemSlug: string;
        subItemSlug: string;
        productSlug: string;
    }>;
};

export default async function ProductDetailPage({
    params,
}: Props) {
    const {
        slug,
        itemSlug,
        subItemSlug,
        productSlug,
    } = await params;

    let product = null;

    if (slug === "engine-parts") {
        product = await getEngineProduct(
            itemSlug,
            subItemSlug,
            productSlug
        );
    }

    if (slug === "machinery") {
        product = await getMachineryProduct(
            itemSlug,
            subItemSlug,
            productSlug
        );
    }

    if (!product) {
        notFound();
    }

    const currentUrl =
        slug === "engine-parts"
            ? `https://shipsparesworldwide.com/categories/engine-parts/${itemSlug}/${subItemSlug}/${productSlug}`
            : `https://shipsparesworldwide.com/categories/machinery/${itemSlug}/${subItemSlug}/${productSlug}`;

    const title = product.title;

    const description =
        product.shortDescription ??
        product.description ??
        `Worldwide supplier of ${product.title}.`;

    const image = product.image
        ? urlFor(product.image).width(1600).url()
        : "https://shipsparesworldwide.com/og-image.jpg";

    const category =
        product.partType?.title ??
        product.machineryType?.title ??
        "";

    const brand =
        product.engineModel?.brand?.name ??
        product.machineryBrand?.name ??
        "";

    return (
        <>
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "Product",

                        "@id": `${currentUrl}#product`,

                        name: title,

                        description,

                        image: [image],

                        url: currentUrl,

                        sku: product.slug.current,

                        category,

                        brand: {
                            "@type": "Brand",
                            name: brand,
                        },

                        manufacturer: {
                            "@type": "Organization",
                            "@id": "https://shipsparesworldwide.com/#organization",
                        },

                        additionalProperty: [
                            {
                                "@type": "PropertyValue",

                                name: "Condition",

                                value: product.condition,
                            },
                        ],
                    }),
                }}
            />
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "WebPage",

                        "@id": `${currentUrl}#webpage`,

                        name: title,

                        url: currentUrl,

                        description,

                        inLanguage: "en",

                        mainEntity: {
                            "@id": `${currentUrl}#product`,
                        },

                        isPartOf: {
                            "@id": "https://shipsparesworldwide.com/#website",
                        },

                        about: {
                            "@id": "https://shipsparesworldwide.com/#organization",
                        },

                        publisher: {
                            "@id": "https://shipsparesworldwide.com/#organization",
                        },

                        primaryImageOfPage: {
                            "@type": "ImageObject",
                            url: image,
                        },
                    }),
                }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "BreadcrumbList",

                        itemListElement:
                            slug === "engine-parts"
                                ? [
                                    {
                                        "@type": "ListItem",
                                        position: 1,
                                        name: "Home",
                                        item: "https://shipsparesworldwide.com",
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 2,
                                        name: "Categories",
                                        item: "https://shipsparesworldwide.com/categories",
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 3,
                                        name: "Engine Parts",
                                        item: "https://shipsparesworldwide.com/categories/engine-parts",
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 4,
                                        name: product.engineModel.brand.name,
                                        item: `https://shipsparesworldwide.com/categories/engine-parts/${product.engineModel.brand.slug.current}`,
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 5,
                                        name: product.engineModel.name,
                                        item: `https://shipsparesworldwide.com/categories/engine-parts/${product.engineModel.brand.slug.current}/${product.engineModel.slug.current}`,
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 6,
                                        name: product.title,
                                        item: currentUrl,
                                    },
                                ]
                                : [
                                    {
                                        "@type": "ListItem",
                                        position: 1,
                                        name: "Home",
                                        item: "https://shipsparesworldwide.com",
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 2,
                                        name: "Categories",
                                        item: "https://shipsparesworldwide.com/categories",
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 3,
                                        name: "Machinery",
                                        item: "https://shipsparesworldwide.com/categories/machinery",
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 4,
                                        name: product.machineryType.title,
                                        item: `https://shipsparesworldwide.com/categories/machinery/${product.machineryType.slug.current}`,
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 5,
                                        name: product.machineryBrand.name,
                                        item: `https://shipsparesworldwide.com/categories/machinery/${product.machineryType.slug.current}/${product.machineryBrand.slug.current}`,
                                    },
                                    {
                                        "@type": "ListItem",
                                        position: 6,
                                        name: product.title,
                                        item: currentUrl,
                                    },
                                ],
                    }),
                }}
            />
            <>
                <ProductPage
                    product={product}
                    subItemSlug={subItemSlug}
                />

                <CTA />
            </>
        </>
    );
}