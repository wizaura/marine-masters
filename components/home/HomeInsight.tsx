import HomeBlogsSection from "./Blog";
import HomeCTA from "./CTA";

export default function HomeInsights() {
    return (
        <section className="relative bg-[#f3f3f3]">


            {/* Blog Covers CTA */}
            <div className="relative z-20 mx-4">
                <HomeBlogsSection />
            </div>

            {/* CTA Behind */}
            <div className="sticky bottom-0 mx-4">
                <HomeCTA />
            </div>

        </section>
    );
}