import Link from "next/link";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

import { getRelatedBlogs } from "@/sanity/lib/getRelatedBlogs";
import { urlFor } from "@/sanity/lib/image";

type Props = {
    currentBlogId: string;
    category: string;
};

export default async function RelatedBlogs({
    currentBlogId,
    category,
}: Props) {
    const blogs =
        await getRelatedBlogs(
            currentBlogId,
            category
        );

    if (!blogs.length) {
        return null;
    }

    return (
        <section className="bg-[#f3f3f3] px-8 py-24">
            <div className="mx-auto max-w-8xl">

                <div className="mb-16 grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-xl text-neutral-500">
                            Related Articles
                        </p>
                    </div>

                    <div>
                        <h2
                            className="
                                text-4xl
                                font-bold
                                leading-tight
                                lg:text-6xl
                            "
                        >
                            Continue reading
                        </h2>

                        <p
                            className="
                                mt-6
                                max-w-3xl
                                text-lg
                                text-neutral-600
                            "
                        >
                            Explore more marine industry insights,
                            technical guides, and procurement updates.
                        </p>
                    </div>

                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {blogs.map((blog: any) => (
                        <Link
                            key={blog._id}
                            href={`/blogs/${blog.slug.current}`}
                            className="group"
                        >
                            <article
                                className="
                                    overflow-hidden
                                    rounded-[40px]
                                    bg-white
                                "
                            >
                                <div
                                    className="
                                        relative
                                        aspect-[4/3]
                                        overflow-hidden
                                    "
                                >
                                    <Image
                                        src={
                                            blog.featuredImage
                                                ? urlFor(
                                                      blog.featuredImage
                                                  )
                                                      .width(1200)
                                                      .url()
                                                : "/placeholder.jpg"
                                        }
                                        alt={blog.title}
                                        fill
                                        className="
                                            object-cover
                                            transition
                                            duration-700
                                            group-hover:scale-105
                                        "
                                    />
                                </div>

                                <div className="p-8">

                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            text-neutral-500
                                        "
                                    >
                                        <CalendarDays
                                            size={18}
                                        />

                                        <span>
                                            {new Date(
                                                blog.publishedAt
                                            ).toLocaleDateString(
                                                "en-US",
                                                {
                                                    day: "numeric",
                                                    month: "short",
                                                    year: "numeric",
                                                }
                                            )}
                                        </span>
                                    </div>

                                    <h3
                                        className="
                                            mt-5
                                            text-2xl
                                            font-bold
                                            leading-tight
                                            transition
                                            group-hover:text-orange-500
                                        "
                                    >
                                        {blog.title}
                                    </h3>

                                    {blog.excerpt && (
                                        <p
                                            className="
                                                mt-4
                                                line-clamp-3
                                                text-neutral-600
                                            "
                                        >
                                            {blog.excerpt}
                                        </p>
                                    )}

                                </div>
                            </article>
                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}