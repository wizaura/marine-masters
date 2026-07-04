import CTA from "../ui/CTA";
import FAQSection from "./FAQ";

type FAQ = {
    question: string;
    answer: string;
};

type Props = {
    faqs: FAQ[];
};

export default function AboutInsights({
    faqs,
}: Props) {
    return (
        <section className="relative bg-white">


            {/* Blog Covers CTA */}
            <div className="relative z-20 mx-4">
                <FAQSection faqs={faqs} />
            </div>

            {/* CTA Behind */}
            <div className="sticky bottom-0 mx-4">
                <CTA />
            </div>

        </section>
    );
}