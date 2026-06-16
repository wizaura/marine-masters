import CTA from "../ui/CTA";
import FAQSection from "./FAQ";

export default function AboutInsights() {
    return (
        <section className="relative bg-white">


            {/* Blog Covers CTA */}
            <div className="relative z-20 mx-4">
                <FAQSection />
            </div>

            {/* CTA Behind */}
            <div className="sticky bottom-0 mx-4">
                <CTA />
            </div>

        </section>
    );
}