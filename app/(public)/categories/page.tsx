import Hero from "@/components/categories/Hero";
import { getCategories } from "@/sanity/lib/getCategories";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Engine Parts & Ship Machinery Categories",

    description:
        "Browse Marine Masters' categories of engine parts, ship machinery, OEM spare parts, marine equipment, and worldwide ship supply solutions.",

    alternates: {
        canonical: "/categories",
    },

    openGraph: {
        title: "Engine Parts & Ship Machinery Categories",

        description:
            "Explore marine engine parts, ship machinery, OEM components, and worldwide supply categories.",

        url: "https://shipsparesworldwide.com/categories",

        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Engine Parts & Ship Machinery Categories | Marine Masters",

        description:
            "Browse Marine Masters' categories of engine parts, ship machinery, OEM spare parts, marine equipment, and worldwide ship supply solutions.",

        images: ["/og-image.jpg"],
    },
    
    robots: {
        index: true,
        follow: true,
    },
};

export default async function CategoriesPage() {
    const categories = await getCategories();
    return (
        <>
            <Script
                id="collection-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "CollectionPage",

                        "@id":
                            "https://shipsparesworldwide.com/categories/#collection",

                        name: "Engine Parts & Ship Machinery Categories",

                        url: "https://shipsparesworldwide.com/categories",

                        isPartOf: {
                            "@id":
                                "https://shipsparesworldwide.com/#website",
                        },

                        about: {
                            "@id":
                                "https://shipsparesworldwide.com/#organization",
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
                                item:
                                    "https://shipsparesworldwide.com/categories",
                            },
                        ],
                    }),
                }}
            />

            <Script
                id="itemlist-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "ItemList",

                        name: "Marine Masters Categories",

                        itemListElement: categories.map(
                            (category: any, index: number) => ({
                                "@type": "ListItem",

                                position: index + 1,

                                name: category.title,

                                url: `https://shipsparesworldwide.com/categories/${category.slug.current}`,
                            })
                        ),
                    }),
                }}
            />
            <div>
                <Hero categories={categories} />
            </div>
        </>
    )
}