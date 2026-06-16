import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock3 } from "lucide-react";

import SideNotch from "@/components/ui/SideNotch";
import { urlFor } from "@/sanity/lib/image";

export default function BlogCard({
    blog,
}: {
    blog: any;
}) {
    return (
        <Link
            href={`/blogs/${blog.slug.current}`}
            className="group block"
        >
            <article>

                <div className="relative overflow-hidden rounded-[40px]">

                    <Image
                        src={
                            blog.featuredImage
                                ? urlFor(blog.featuredImage)
                                      .width(1800)
                                      .url()
                                : "/placeholder.jpg"
                        }
                        alt={blog.title}
                        width={1200}
                        height={700}
                        className="
                            h-[320px]
                            md:h-[450px]
                            w-full
                            object-cover
                            transition
                            duration-700
                            group-hover:scale-105
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

                <div className="mt-6 flex gap-4">

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
                        <CalendarDays size={18} />
                        <span>
                            {new Date(
                                blog.publishedAt
                            ).toLocaleDateString()}
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
                        <Clock3 size={18} />
                        <span>
                            {blog.readingTime || 5}
                            {" "}min
                        </span>
                    </div>

                </div>

                <h3
                    className="
                        mt-8
                        text-xl
                        font-bold
                        leading-tight
                        lg:text-3xl
                    "
                >
                    {blog.title}
                </h3>

                <p
                    className="
                        mt-4
                        line-clamp-3
                        text-neutral-600
                    "
                >
                    {blog.excerpt}
                </p>

            </article>
        </Link>
    );
}