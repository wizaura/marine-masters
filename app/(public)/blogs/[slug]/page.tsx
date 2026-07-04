import { notFound } from "next/navigation";

import BlogHero from "@/components/blogs/details/Hero";
import BlogContent from "@/components/blogs/details/Content";
import RelatedBlogs from "@/components/blogs/details/RelatedBlogs";
import CTA from "@/components/ui/CTA";

import { getBlogBySlug } from "@/sanity/lib/getBlogBySlug";
import { urlFor } from "@/sanity/lib/image";
import Script from "next/script";
import { getRelatedBlogs } from "@/sanity/lib/getRelatedBlogs";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogDetailPage({
    params,
}: Props) {
    const { slug } =
        await params;

    const blog =
        await getBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    const relatedBlogs = await getRelatedBlogs(
        blog._id,
        blog.category
    );

    return (
        <>

            <Script
                id="blog-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "BlogPosting",

                        "@id": `https://shipsparesworldwide.com/blogs/${blog.slug.current}#article`,

                        headline: blog.title,

                        description:
                            blog.seoDescription ||
                            blog.excerpt,

                        image: blog.featuredImage
                            ? [
                                urlFor(blog.featuredImage)
                                    .width(1600)
                                    .url(),
                            ]
                            : [],

                        datePublished:
                            blog.publishedAt,

                        dateModified:
                            blog._updatedAt,

                        author: {
                            "@type": "Organization",

                            "@id":
                                "https://shipsparesworldwide.com/#organization",
                        },

                        publisher: {
                            "@id":
                                "https://shipsparesworldwide.com/#organization",
                        },

                        mainEntityOfPage: {
                            "@type": "WebPage",

                            "@id":
                                `https://shipsparesworldwide.com/blogs/${blog.slug.current}#webpage`,
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
                        "@id": `https://shipsparesworldwide.com/blogs/${blog.slug.current}#breadcrumb`,

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
                            {
                                "@type": "ListItem",
                                position: 3,
                                name: blog.title,
                                item:
                                    `https://shipsparesworldwide.com/blogs/${blog.slug.current}`,
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

                        "@id": `https://shipsparesworldwide.com/blogs/${blog.slug.current}#webpage`,

                        name: blog.title,

                        url: `https://shipsparesworldwide.com/blogs/${blog.slug.current}`,

                        inLanguage: "en",

                        description:
                            blog.seoDescription ||
                            blog.excerpt,

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
                            url: blog.featuredImage
                                ? urlFor(blog.featuredImage)
                                    .width(1600)
                                    .url()
                                : "https://shipsparesworldwide.com/blog-og.jpg",
                        },

                        breadcrumb: {
                            "@id": `https://shipsparesworldwide.com/blogs/${blog.slug.current}#breadcrumb`,
                        },

                        mainEntity: {
                            "@id": `https://shipsparesworldwide.com/blogs/${blog.slug.current}#article`,
                        },
                    }),
                }}
            />
            <div>
                <BlogHero
                    blog={blog}
                />

                <BlogContent
                    blog={blog}
                />

                <RelatedBlogs
                    blogs={relatedBlogs} 
                />

                <CTA />
            </div>
        </>
    );
}

export async function generateMetadata({
    params,
}: Props) {
    const { slug } =
        await params;

    const blog =
        await getBlogBySlug(slug);

    if (!blog) {
        return {};
    }

    return {
        title: blog.seoTitle || blog.title,

        description:
            blog.seoDescription ||
            blog.excerpt,

        alternates: {
            canonical: `/blogs/${blog.slug.current}`,
        },

        openGraph: {
            title:
                blog.seoTitle ||
                blog.title,

            description:
                blog.seoDescription ||
                blog.excerpt,

            url: `https://shipsparesworldwide.com/blogs/${blog.slug.current}`,

            type: "article",

            publishedTime: blog.publishedAt,

            modifiedTime:
                blog._updatedAt,

            images: blog.featuredImage
                ? [
                    {
                        url: blog.featuredImage
                            ? urlFor(blog.featuredImage)
                                .width(1600)
                                .url()
                            : "/og-image.jpg",

                        width: 1200,
                        height: 630,
                        alt: blog.title,
                    },
                ]
                : [],
        },

        twitter: {
            card: "summary_large_image",

            title:
                blog.seoTitle ||
                blog.title,

            description:
                blog.seoDescription ||
                blog.excerpt,

            images: blog.featuredImage
                ? [
                    urlFor(blog.featuredImage)
                        .width(1600)
                        .url(),
                ]
                : ["/og-image.jpg"],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}