import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CategoryDetails from "@/components/categories/details/Main";

import { getCategory } from "@/sanity/lib/getCategory";
import CTA from "@/components/ui/CTA";
import { urlFor } from "@/sanity/lib/image";
import Script from "next/script";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{
        search?: string;
    }>;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const category = await getCategory(slug);

    if (!category) {
        return {
            title: "Category Not Found",
        };
    }

    const image = category.heroImage
        ? urlFor(category.heroImage).width(1600).url()
        : "/og-image.jpg";

    return {
        title: `${category.title} | Marine Masters`,

        description:
            category.description ||
            category.heroDescription,

        alternates: {
            canonical: `/categories/${slug}`,
        },

        openGraph: {
            title:
                category.heroTitle ||
                category.title,

            description:
                category.heroDescription ||
                category.description,

            url: `https://shipsparesworldwide.com/categories/${slug}`,

            type: "website",

            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: category.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",

            title:
                category.heroTitle ||
                category.title,

            description:
                category.heroDescription ||
                category.description,

            images: [image],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function CategoryDetailPage({
    params,
    searchParams,
}: PageProps) {
    const { slug } = await params;
    const { search = "" } = await searchParams;

    const category = await getCategory(slug);

    if (!category) {
        notFound();
    }

    return (
        <>
            <Script
                id="collection-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "CollectionPage",

                        "@id": `https://shipsparesworldwide.com/categories/${category.slug.current}#collection`,

                        name: category.title,

                        url: `https://shipsparesworldwide.com/categories/${category.slug.current}`,

                        description:
                            category.description ||
                            category.heroDescription,

                        inLanguage: "en",

                        isPartOf: {
                            "@id": "https://shipsparesworldwide.com/#website",
                        },

                        about: {
                            "@id": "https://shipsparesworldwide.com/#organization",
                        },
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

                        "@id": `https://shipsparesworldwide.com/categories/${category.slug.current}#webpage`,

                        name: category.title,

                        url: `https://shipsparesworldwide.com/categories/${category.slug.current}`,

                        description:
                            category.description ||
                            category.heroDescription,

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
                            url: category.heroImage
                                ? urlFor(category.heroImage)
                                    .width(1600)
                                    .url()
                                : "https://shipsparesworldwide.com/og-image.jpg",
                        },

                        breadcrumb: {
                            "@id": `https://shipsparesworldwide.com/categories/${category.slug.current}#breadcrumb`,
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

                        "@id": `https://shipsparesworldwide.com/categories/${category.slug.current}#breadcrumb`,

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
                                item: `https://shipsparesworldwide.com/categories/${category.slug.current}`,
                            },
                        ],
                    }),
                }}
            />
            
            <>
                <CategoryDetails
                    category={category}
                    search={search}
                />
                <CTA />
            </>
        </>
    );
}