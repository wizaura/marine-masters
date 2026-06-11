import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import SectionNotch from "../ui/SectionNotch";
import SideNotch from "../ui/SideNotch";

const blogs = [
    {
        id: 1,
        title: "Global Supply Chain Challenges and Their Impact on Transportation",
        image:
            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600",
        date: "Feb 9, 2025",
        readTime: "5 min",
    },
    {
        id: 2,
        title: "Essential Marine Engine Parts Every Vessel Operator Should Know",
        image:
            "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1600",
        date: "Feb 15, 2025",
        readTime: "7 min",
    },
    {
        id: 3,
        title: "How Genuine Spare Parts Reduce Vessel Downtime",
        image:
            "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600",
        date: "Feb 21, 2025",
        readTime: "4 min",
    },
];

export default function HomeBlogsSection() {
    return (
        <section className="bg-gray-200 px-6 py-24 rounded-4xl">
            <div className="mx-auto max-w-7xl">

                <div className="grid lg:grid-cols-[450px_1fr] gap-16">

                    {/* Left Side */}
                    <div className="lg:sticky lg:top-32 h-fit">

                        <p className="text-neutral-500 text-xl mb-6">
                            Latest Blogs
                        </p>

                        <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95]">
                            Latest insights in marine logistics
                        </h2>

                        <Link
                            href="/blogs"
                            className="
                                inline-flex
                                mt-10
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
                            All News
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-16">

                        {blogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="group"
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-[40px]">

                                    <img
                                        src={blog.image}
                                        alt={blog.title}
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

                                    {/* Hover Notch */}
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
                                        <SideNotch />
                                    </div>

                                </div>

                                {/* Meta */}
                                <div className="mt-6 flex gap-4">
                                    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
                                        <CalendarDays size={18} />
                                        <span>{blog.date}</span>
                                    </div>

                                    <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
                                        <Clock3 size={18} />
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3
                                    className="
            mt-8
            text-xl
            lg:text-3xl
            font-bold
            leading-tight
        "
                                >
                                    {blog.title}
                                </h3>
                            </article>
                        ))}

                    </div>

                </div>
                <SectionNotch />

            </div>
        </section>
    );
}