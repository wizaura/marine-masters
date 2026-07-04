import Hero from "@/components/blogs/Hero";
import { getBlogs } from "@/sanity/lib/getBlogs";

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Marine Engineering Blogs & Industry Insights",

    description:
        "Explore Marine Masters' latest articles on engine parts, ship machinery, marine engineering, maintenance, OEM components, worldwide logistics, and maritime industry insights.",

    alternates: {
        canonical: "/blogs",
    },

    openGraph: {
        title: "Marine Engineering Blogs | Marine Masters",

        description:
            "Industry insights, technical articles, engine parts, ship machinery, and maritime updates from Marine Masters.",

        url: "https://shipsparesworldwide.com/blogs",

        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Marine Masters Blog",
            },
        ],

        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Marine Engineering Blogs | Marine Masters",

        description:
            "Latest insights on engine parts, ship machinery, marine engineering, and worldwide maritime logistics.",

        images: ["/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default async function BlogsPage({
    searchParams,
}: {
    searchParams: Promise<{
        page?: string;
    }>;
}) {
    const { page } = await searchParams;

    const currentPage = Number(page || 1);

    const { blogs, pages } = await getBlogs(
        currentPage,
        12
    );

    return (
        <>
            <Script
                id="collection-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "CollectionPage",

                        "@id": "https://shipsparesworldwide.com/blogs/#collection",

                        name: "Marine Masters Blog",

                        url: "https://shipsparesworldwide.com/blogs",

                        inLanguage: "en",

                        description:
                            "Marine engineering articles, ship machinery insights, engine parts, OEM components, maintenance guides, and maritime industry news.",

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
                id="blog-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "Blog",

                        "@id": "https://shipsparesworldwide.com/blogs/#blog",

                        name: "Marine Masters Blog",

                        url: "https://shipsparesworldwide.com/blogs",

                        description:
                            "Technical articles and industry insights covering engine parts, ship machinery, marine equipment, maintenance, OEM components, and maritime logistics.",

                        publisher: {
                            "@id": "https://shipsparesworldwide.com/#organization",
                        },

                        inLanguage: "en",
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
                                name: "Blogs",
                                item: "https://shipsparesworldwide.com/blogs",
                            },
                        ],
                    }),
                }}
            />
            <Script
                id="blog-list-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "ItemList",

                        name: "Latest Marine Masters Articles",

                        itemListElement: blogs.map((blog: any, index: number) => ({
                            "@type": "ListItem",

                            position: index + 1,

                            url: `https://shipsparesworldwide.com/blogs/${blog.slug.current}`,

                            name: blog.title,
                        })),
                    }),
                }}
            />
            <Hero
                page={currentPage}
                blogs={blogs}
                pages={pages}
            />
        </>
    );
}