import CTA from "../ui/CTA";
import HomeBlogsSection from "./Blog";

interface HomeBlog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  featuredImage?: any;
  excerpt?: string;
  publishedAt: string;
  readingTime?: number;
}

type Props = {
    blogs: HomeBlog[];
};

export default function HomeInsights({
    blogs,
}: Props) {
    return (
        <section className="relative bg-white">


            {/* Blog Covers CTA */}
            <div className="relative z-20 mx-4">
                <HomeBlogsSection blogs={blogs} />
            </div>

            {/* CTA Behind */}
            <div className="sticky bottom-0 mx-4">
                <CTA />
            </div>

        </section>
    );
}