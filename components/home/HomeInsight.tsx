import CTA from "../ui/CTA";
import HomeBlogsSection from "./Blog";

export default function HomeInsights() {
    return (
        <section className="relative bg-white">


            {/* Blog Covers CTA */}
            <div className="relative z-20 mx-4">
                <HomeBlogsSection />
            </div>

            {/* CTA Behind */}
            <div className="sticky bottom-0 mx-4">
                <CTA />
            </div>

        </section>
    );
}