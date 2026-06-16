import Link from "next/link";
import {
    FileText,
    CalendarDays,
    Clock,
} from "lucide-react";

import BlogCard from "./BlogCard";
import SideNotch from "../ui/SideNotch";

import { getBlogs } from "@/sanity/lib/getBlogs";
import { urlFor } from "@/sanity/lib/image";
import SectionNotch from "../ui/SectionNotch";

export default async function BlogsPage({
    page,
}: {
    page: number;
}) {
    const currentPage = page;

    const {
        blogs,
        pages,
    } = await getBlogs(
        page,
        12
    );

    return (
        <section className="px-8 py-24 bg-[#f3f3f3] rounded-4xl">
            <div className="mx-auto max-w-8xl">

                {blogs.length === 0 ? (

                    <div
                        className="
                            flex
                            min-h-[400px]
                            flex-col
                            items-center
                            justify-center
                            rounded-4xl
                            border
                            border-dashed
                            border-neutral-300
                            bg-white
                            px-8
                            text-center
                        "
                    >
                        <div
                            className="
                                mb-6
                                flex
                                h-20
                                w-20
                                items-center
                                justify-center
                                rounded-full
                                bg-white
                                shadow-sm
                            "
                        >
                            <FileText
                                size={36}
                                className="text-neutral-400"
                            />
                        </div>

                        <h2
                            className="
                                text-3xl
                                font-bold
                            "
                        >
                            No blogs yet
                        </h2>

                        <p
                            className="
                                mt-4
                                max-w-md
                                text-lg
                                text-neutral-500
                            "
                        >
                            We're preparing industry insights,
                            technical articles, and marine
                            engineering updates. Check back soon.
                        </p>
                    </div>

                ) : (

                    <>
                        <div
                            className="
                                grid
                                gap-16
                                lg:grid-cols-[450px_1fr]
                            "
                        >

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
                            </div>

                            {/* Right Side */}

                            <div className="space-y-16">

                                {blogs.map(
                                    (blog: any) => (
                                        <Link
                                            key={blog._id}
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
                                                                    month:
                                                                        "short",
                                                                    day:
                                                                        "numeric",
                                                                    year:
                                                                        "numeric",
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
                                                        <Clock
                                                            size={18}
                                                        />
                                                        {blog.readingTime} min
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

                                                {blog.excerpt && (
                                                    <p
                                                        className="
                                                            mt-4
                                                            max-w-3xl
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
                                )}

                            </div>

                        </div>

                        {/* Pagination */}

                        {pages > 1 && (
                            <div
                                className="
                                    mt-24
                                    flex
                                    justify-center
                                    gap-3
                                "
                            >
                                {Array.from({
                                    length: pages,
                                }).map(
                                    (_, i) => (
                                        <Link
                                            key={
                                                i
                                            }
                                            href={`/blogs?page=${i + 1}`}
                                            className={`
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                transition
                                                ${
                                                    currentPage ===
                                                    i +
                                                        1
                                                        ? "bg-black text-white"
                                                        : "bg-white hover:bg-neutral-100"
                                                }
                                            `}
                                        >
                                            {i + 1}
                                        </Link>
                                    )
                                )}
                            </div>
                        )}
                    </>
                )}

                <SectionNotch />

            </div>
        </section>
    );
}