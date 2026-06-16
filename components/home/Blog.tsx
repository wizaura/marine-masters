import Link from "next/link";
import Image from "next/image";
import {
    CalendarDays,
    Clock3,
} from "lucide-react";

import SectionNotch from "../ui/SectionNotch";
import SideNotch from "../ui/SideNotch";

import { getLatestBlogs } from "@/sanity/lib/getLatestBlogs";
import { urlFor } from "@/sanity/lib/image";

export default async function HomeBlogsSection() {
    const blogs =
        await getLatestBlogs();

    return (
        <section
            className="
                rounded-4xl
                bg-[#f3f3f3]
                px-6
                py-24
            "
        >
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-16 lg:grid-cols-[450px_1fr]">

                    {/* Left Side */}

                    <div
                        className="
                            h-fit
                            lg:sticky
                            lg:top-32
                        "
                    >
                        <p
                            className="
                                mb-6
                                text-xl
                                text-neutral-500
                            "
                        >
                            Latest Blogs
                        </p>

                        <h2
                            className="
                                text-5xl
                                font-bold
                                leading-[0.95]
                                lg:text-7xl
                            "
                        >
                            Latest insights in marine logistics
                        </h2>

                        <Link
                            href="/blogs"
                            className="
                                mt-10
                                inline-flex
                                rounded-full
                                bg-orange-400
                                px-8
                                py-4
                                text-lg
                                font-semibold
                                text-white
                                transition
                                hover:scale-105
                            "
                        >
                            All Articles
                        </Link>
                    </div>

                    {/* Right Side */}

                    <div className="space-y-16">

                        {blogs.length === 0 ? (
                            <div
                                className="
                                    rounded-[40px]
                                    border
                                    border-dashed
                                    border-neutral-300
                                    bg-white
                                    p-12
                                "
                            >
                                <h3
                                    className="
                                        text-3xl
                                        font-bold
                                    "
                                >
                                    No articles yet
                                </h3>

                                <p
                                    className="
                                        mt-4
                                        text-neutral-600
                                    "
                                >
                                    We're preparing new
                                    marine industry insights
                                    and technical articles.
                                </p>
                            </div>
                        ) : (
                            blogs.map(
                                (
                                    blog: any
                                ) => (
                                    <Link
                                        key={
                                            blog._id
                                        }
                                        href={`/blogs/${blog.slug.current}`}
                                        className="group block"
                                    >
                                        <article>

                                            {/* Image */}

                                            <div
                                                className="
                                                    relative
                                                    overflow-hidden
                                                    rounded-[40px]
                                                "
                                            >
                                                <img
                                                    src={
                                                        blog.featuredImage
                                                            ? urlFor(
                                                                blog.featuredImage
                                                            )
                                                                .width(
                                                                    1600
                                                                )
                                                                .url()
                                                            : "/placeholder.jpg"
                                                    }
                                                    alt={
                                                        blog.title
                                                    }
                                                    className="
                                                            h-[320px]
                                                            w-full
                                                            object-cover
                                                            transition
                                                            duration-700
                                                            group-hover:scale-105
                                                            md:h-[450px]
                                                        "
                                                />

                                                <div
                                                    className="
                                                        absolute
                                                        inset-y-0
                                                        right-0
                                                        w-[100px]
                                                        translate-x-full
                                                        transition-all
                                                        duration-500
                                                        ease-out
                                                        group-hover:translate-x-0
                                                    "
                                                >
                                                    <SideNotch color="#f3f3f3" />
                                                </div>
                                            </div>

                                            {/* Meta */}

                                            <div
                                                className="
                                                    mt-6
                                                    flex
                                                    gap-4
                                                "
                                            >
                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                        rounded-full
                                                        bg-white
                                                        px-4
                                                        py-2
                                                    "
                                                >
                                                    <CalendarDays
                                                        size={
                                                            18
                                                        }
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

                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        gap-2
                                                        rounded-full
                                                        bg-white
                                                        px-4
                                                        py-2
                                                    "
                                                >
                                                    <Clock3
                                                        size={
                                                            18
                                                        }
                                                    />

                                                    <span>
                                                        {blog.readingTime ||
                                                            5}{" "}
                                                        min
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Title */}

                                            <h3
                                                className="
                                                    mt-8
                                                    text-xl
                                                    font-bold
                                                    leading-tight
                                                    lg:text-3xl
                                                "
                                            >
                                                {
                                                    blog.title
                                                }
                                            </h3>

                                            {/* Excerpt */}

                                            {blog.excerpt && (
                                                <p
                                                    className="
                                                        mt-4
                                                        line-clamp-3
                                                        text-neutral-600
                                                    "
                                                >
                                                    {
                                                        blog.excerpt
                                                    }
                                                </p>
                                            )}
                                        </article>
                                    </Link>
                                )
                            )
                        )}

                    </div>

                </div>

                <SectionNotch color="#fff" />

            </div>
        </section>
    );
}