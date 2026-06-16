import { CalendarDays } from "lucide-react";

import { urlFor } from "@/sanity/lib/image";

type Props = {
    blog: any;
};

export default function BlogHero({
    blog,
}: Props) {
    return (
        <section className="relative p-3">
            <div className="relative h-[75vh] overflow-hidden rounded-4xl">

                <img
                    src={
                        blog.featuredImage
                            ? urlFor(
                                  blog.featuredImage
                              )
                                  .width(2000)
                                  .url()
                            : "/placeholder.jpg"
                    }
                    alt={blog.title}
                    className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                    "
                />

                <div className="absolute inset-0 bg-black/50" />

                <div
                    className="
                        relative
                        z-10
                        flex
                        h-full
                        items-end
                    "
                >
                    <div
                        className="
                            max-w-5xl
                            px-8
                            pb-20
                        "
                    >

                        <div
                            className="
                                mb-6
                                flex
                                flex-wrap
                                gap-4
                            "
                        >

                            {blog.category && (
                                <span
                                    className="
                                        rounded-full
                                        bg-white/15
                                        px-4
                                        py-2
                                        text-sm
                                        text-white
                                        backdrop-blur
                                    "
                                >
                                    {blog.category}
                                </span>
                            )}

                            <span
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-white/15
                                    px-4
                                    py-2
                                    text-sm
                                    text-white
                                    backdrop-blur
                                "
                            >
                                <CalendarDays size={16} />

                                {new Date(
                                    blog.publishedAt
                                ).toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    }
                                )}
                            </span>

                        </div>

                        <h1
                            className="
                                text-5xl
                                font-bold
                                leading-[0.95]
                                text-white
                                lg:text-7xl
                            "
                        >
                            {blog.title}
                        </h1>

                        {blog.excerpt && (
                            <p
                                className="
                                    mt-8
                                    max-w-3xl
                                    text-xl
                                    leading-relaxed
                                    text-white/85
                                "
                            >
                                {blog.excerpt}
                            </p>
                        )}

                        {blog.author && (
                            <p
                                className="
                                    mt-8
                                    text-white/70
                                "
                            >
                                By {blog.author}
                            </p>
                        )}

                    </div>
                </div>

            </div>
        </section>
    );
}