import { notFound } from "next/navigation";

import BlogHero from "@/components/blogs/details/Hero";
import BlogContent from "@/components/blogs/details/Content";
import RelatedBlogs from "@/components/blogs/details/RelatedBlogs";
import CTA from "@/components/ui/CTA";

import { getBlogBySlug } from "@/sanity/lib/getBlogBySlug";

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

    return (
        <>
            <BlogHero
                blog={blog}
            />

            <BlogContent
                blog={blog}
            />

            <RelatedBlogs
                currentBlogId={
                    blog._id
                }
                category={
                    blog.category
                }
            />

            <CTA />
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
        title:
            blog.seoTitle ||
            blog.title,
        description:
            blog.seoDescription ||
            blog.excerpt,
    };
}