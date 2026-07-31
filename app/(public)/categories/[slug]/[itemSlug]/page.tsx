import { notFound } from "next/navigation";

import EngineBrandPage from "@/components/categories/engine-parts/Main";
import MachineryTypePage from "@/components/categories/machinery/Main";

import { getCategoryBySlug } from "@/sanity/lib/getCategoryBySlug";
import { getBrandBySlug } from "@/sanity/lib/getBrandBySlug";
import { getMachineryTypeBySlug } from "@/sanity/lib/getMachineryTypeBySlug";
import CTA from "@/components/ui/CTA";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";
import Script from "next/script";

type Props = {
    params: Promise<{
        slug: string;
        itemSlug: string;
    }>;
    searchParams: Promise<{
        search?: string;
    }>;

};

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug, itemSlug } = await params;

    if (slug === "engine-parts") {
        const brand = await getBrandBySlug(itemSlug);

        if (!brand) {
            return {
                title: "Not Found",
            };
        }

        const image = brand.logo
            ? urlFor(brand.logo).width(1600).url()
            : "/og-image.jpg";

        return {
            title: `${brand.name} Engine Parts | Marine Masters`,

            description:
                brand.description ||
                `Browse genuine and OEM ${brand.name} engine parts and marine spare parts supplied worldwide by Marine Masters.`,

            alternates: {
                canonical: `/categories/engine-parts/${itemSlug}`,
            },

            openGraph: {
                title: `${brand.name} Engine Parts`,

                description:
                    brand.description ||
                    `Worldwide supplier of ${brand.name} engine parts.`,

                url: `https://shipsparesworldwide.com/categories/engine-parts/${itemSlug}`,

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
                title: `${brand.name} Engine Parts`,
                description:
                    brand.description ||
                    `Worldwide supplier of ${brand.name} engine parts.`,
                images: [image],
            },

            robots: {
                index: true,
                follow: true,
            },
        };
    }

    const machinery = await getMachineryTypeBySlug(itemSlug);

    if (!machinery) {
        return {
            title: "Not Found",
        };
    }

    const image = machinery.image
        ? urlFor(machinery.image).width(1600).url()
        : "/og-image.jpg";

    return {
        title: `${machinery.title} | Marine Masters`,

        description:
            machinery.description ||
            `Worldwide supplier of ${machinery.title} and marine machinery components.`,

        alternates: {
            canonical: `/categories/machinery/${itemSlug}`,
        },

        openGraph: {
            title: machinery.title,

            description:
                machinery.description,

            url: `https://shipsparesworldwide.com/categories/machinery/${itemSlug}`,

            images: [
                {
                    url: image,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: machinery.title,
            description: machinery.description,
            images: [image],
        },
    };
}

export default async function CategoryItemPage({
    params,
    searchParams,
}: Props) {
    const { slug, itemSlug } = await params;
    const { search = "" } = await searchParams;

    const category = await getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    /**
     * ENGINE PARTS
     */
    if (slug === "engine-parts") {
        const brand = await getBrandBySlug(itemSlug);

        console.log(brand, 'dfe')

        if (!brand) {
            notFound();
        }

        const title = brand.name;

        const description =
            brand.description ??
            `Browse genuine and OEM ${brand.name} engine parts supplied worldwide.`;

        const image = brand.logo
            ? urlFor(brand.logo).width(1200).url()
            : "https://shipsparesworldwide.com/og-image.jpg";

        const currentUrl = `https://shipsparesworldwide.com/categories/engine-parts/${itemSlug}`;

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
                                    name: category.title,
                                    item: `https://shipsparesworldwide.com/categories/${slug}`,
                                },
                                {
                                    "@type": "ListItem",
                                    position: 4,
                                    name: title,
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

                            name: title,
                            termCode: itemSlug,

                            description,

                            url: currentUrl,

                            inDefinedTermSet: {
                                "@id": "https://shipsparesworldwide.com/categories",
                            },
                        }),
                    }}
                />
                <>
                    <EngineBrandPage
                        brand={brand}
                        search={search}
                    />
                    <CTA />
                </>
            </>
        );
    }

    /**
     * MACHINERY
     */
    if (slug === "machinery") {
        const machineryType =
            await getMachineryTypeBySlug(itemSlug);

        if (!machineryType) {
            notFound();
        }

        const title = machineryType.title;

        const description =
            machineryType.description ??
            `Explore ${machineryType.title} and related marine machinery solutions.`;

        const image = machineryType.image
            ? urlFor(machineryType.image).width(1200).url()
            : "https://shipsparesworldwide.com/og-image.jpg";

        const currentUrl = `https://shipsparesworldwide.com/categories/machinery/${itemSlug}`;

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
                                    name: category.title,
                                    item: `https://shipsparesworldwide.com/categories/${slug}`,
                                },
                                {
                                    "@type": "ListItem",
                                    position: 4,
                                    name: title,
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

                            name: title,
                            termCode: itemSlug,

                            description,

                            url: currentUrl,

                            inDefinedTermSet: {
                                "@id": "https://shipsparesworldwide.com/categories",
                            },
                        }),
                    }}
                />
                <>
                    <MachineryTypePage
                        machineryType={machineryType}
                        search={search}
                    />
                    <CTA />
                </>
            </>
        );
    }

    notFound();
} 