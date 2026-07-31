import { notFound } from "next/navigation";

import EngineModelPage from "@/components/categories/engine-parts/model/Main";
import MachineryBrandPage from "@/components/categories/machinery/brand/Main";

import { getEngineModelBySlug } from "@/sanity/lib/getEngineModelBySlug";
import { getMachineryBrandBySlug } from "@/sanity/lib/getMachineryBrandBySlug";
import CTA from "@/components/ui/CTA";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";
import Script from "next/script";

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug, itemSlug, subItemSlug } = await params;

    if (slug === "engine-parts") {
        const model = await getEngineModelBySlug(subItemSlug);

        if (!model) {
            return {
                title: "Not Found",
            };
        }

        const image = model.brand?.logo
            ? urlFor(model.brand.logo).width(1600).url()
            : "/og-image.jpg";

        return {
            title: `${model.name} Engine Parts | Marine Masters`,

            description:
                model.description ??
                `Browse genuine, OEM and replacement spare parts for ${model.name} supplied worldwide.`,

            alternates: {
                canonical: `/categories/engine-parts/${itemSlug}/${subItemSlug}`,
            },

            openGraph: {
                type: "website",

                title: `${model.name} Engine Parts`,

                description:
                    model.description ??
                    `Worldwide supplier of ${model.name} engine spare parts.`,

                url: `https://shipsparesworldwide.com/categories/engine-parts/${itemSlug}/${subItemSlug}`,

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

                title: `${model.name} Engine Parts`,

                description:
                    model.description ??
                    `Worldwide supplier of ${model.name} engine spare parts.`,

                images: [image],
            },

            robots: {
                index: true,
                follow: true,
            },
        };
    }

    const brand = await getMachineryBrandBySlug(subItemSlug);

    if (!brand) {
        return {
            title: "Not Found",
        };
    }

    const image = brand.logo
        ? urlFor(brand.logo).width(1600).url()
        : "/og-image.jpg";

    return {
        title: `${brand.name} | Marine Masters`,

        description:
            `Worldwide supplier of ${brand.name} ${brand.machineryType.title} and related ship machinery components.`,

        alternates: {
            canonical: `/categories/machinery/${itemSlug}/${subItemSlug}`,
        },

        openGraph: {
            type: "website",

            title: brand.name,

            description: brand.description,

            url: `https://shipsparesworldwide.com/categories/machinery/${itemSlug}/${subItemSlug}`,

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

            title: brand.name,

            description: brand.description,

            images: [image],
        },
    };
}

type Props = {
    params: Promise<{
        slug: string;
        itemSlug: string;
        subItemSlug: string;
    }>;
    searchParams: Promise<{
        search?: string;
    }>;
};

export default async function CategorySubItemPage({
    params,
    searchParams,
}: Props) {
    const {
        slug,
        itemSlug,
        subItemSlug,
    } = await params;

    const { search = "" } = await searchParams;

    /**
     * Engine Parts → Model
     */
    if (slug === "engine-parts") {
        const model =
            await getEngineModelBySlug(
                subItemSlug
            );

        if (!model) {
            notFound();
        }

        const title = model.name;

        const description =
            model.description ??
            `Browse genuine, OEM and replacement spare parts for ${model.name} supplied worldwide by Marine Masters.`;

        const image = model.brand?.logo
            ? urlFor(model.brand.logo).width(1200).url()
            : "https://shipsparesworldwide.com/og-image.jpg";

        const currentUrl = `https://shipsparesworldwide.com/categories/engine-parts/${itemSlug}/${subItemSlug}`;

        return (
            <>
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

                            mainEntity: {
                                "@id": `${currentUrl}#definedterm`,
                            },

                            breadcrumb: {
                                "@id": `${currentUrl}#breadcrumb`,
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

                            "@id": `${currentUrl}#breadcrumb`,

                            itemListElement: [
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
                                    name: model.brand.name,
                                    item: `https://shipsparesworldwide.com/categories/engine-parts/${model.brand.slug.current}`,
                                },
                                {
                                    "@type": "ListItem",
                                    position: 5,
                                    name: model.name,
                                    item: currentUrl,
                                },
                            ],
                        }),
                    }}
                />

                <Script
                    id="definedterm-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "DefinedTerm",

                            "@id": `${currentUrl}#definedterm`,

                            name: model.name,

                            termCode: model.slug.current,

                            description,

                            url: currentUrl,

                            inDefinedTermSet: {
                                "@id": "https://shipsparesworldwide.com/categories",
                            },
                        }),
                    }}
                />

                <EngineModelPage
                    model={model}
                    itemSlug={itemSlug}
                    subItemSlug={subItemSlug}
                    search={search}
                />

                <CTA />
            </>
        );
    }

    /**
     * Machinery → Brand
     */
    if (slug === "machinery") {
        const brand =
            await getMachineryBrandBySlug(
                subItemSlug
            );

        if (!brand) {
            notFound();
        }

        const title = brand.name;

        const description =
            `Browse ${brand.name} ${brand.machineryType.title} and related ship machinery supplied worldwide by Marine Masters.`;

        const image = brand.logo
            ? urlFor(brand.logo).width(1200).url()
            : "https://shipsparesworldwide.com/og-image.jpg";

        const currentUrl = `https://shipsparesworldwide.com/categories/machinery/${itemSlug}/${subItemSlug}`;

        return (
            <>
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

                            mainEntity: {
                                "@id": `${currentUrl}#definedterm`,
                            },

                            breadcrumb: {
                                "@id": `${currentUrl}#breadcrumb`,
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

                            "@id": `${currentUrl}#breadcrumb`,

                            itemListElement: [
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
                                    name: brand.machineryType.title,
                                    item: `https://shipsparesworldwide.com/categories/machinery/${brand.machineryType.slug.current}`,
                                },
                                {
                                    "@type": "ListItem",
                                    position: 5,
                                    name: brand.name,
                                    item: currentUrl,
                                },
                            ],
                        }),
                    }}
                />

                <Script
                    id="definedterm-schema"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "DefinedTerm",

                            "@id": `${currentUrl}#definedterm`,

                            name: brand.name,

                            termCode: brand.slug.current,

                            description,

                            url: currentUrl,

                            inDefinedTermSet: {
                                "@id": "https://shipsparesworldwide.com/categories",
                            },
                        }),
                    }}
                />

                <MachineryBrandPage
                    brand={brand}
                    itemSlug={itemSlug}
                    search={search}
                />

                <CTA />
            </>
        );
    }

    notFound();
}