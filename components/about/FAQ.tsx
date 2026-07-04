import SectionNotch from "../ui/SectionNotch";

type FAQ = {
    question: string;
    answer: string;
};

type Props = {
    faqs: FAQ[];
};

export default function FAQSection({
    faqs,
}: Props) {
    return (
        <section>

            <div
                className="
                    mx-auto
                    max-w-8xl
                    rounded-4xl
                    bg-orange-400
                    px-8
                    py-16
                    md:px-14
                    md:py-20
                    lg:px-20
                    lg:py-24
                "
            >

                <div className="grid gap-12 lg:grid-cols-[240px_1fr]">

                    {/* Left Label */}
                    <div>

                        <p
                            className="
                                text-xl
                                font-semibold
                                text-white
                            "
                        >
                            FAQ
                        </p>

                    </div>

                    {/* Right Content */}
                    <div>

                        <h2
                            className="
                                max-w-5xl
                                text-4xl
                                font-bold
                                leading-[1.05]
                                text-white
                                md:text-6xl
                            "
                        >
                            Frequently asked questions
                            about our marine spare
                            parts and supply services.
                        </h2>

                        <div
                            className="
                                mt-20
                                grid
                                gap-x-14
                                gap-y-16
                                md:grid-cols-2
                                xl:grid-cols-3
                            "
                        >

                            {faqs.map((faq) => (
                                <div key={faq.question}>

                                    <h3
                                        className="
                                            text-2xl
                                            font-semibold
                                            leading-snug
                                            text-white
                                        "
                                    >
                                        {faq.question}
                                    </h3>

                                    <p
                                        className="
                                            mt-5
                                            text-lg
                                            leading-relaxed
                                            text-white/65
                                        "
                                    >
                                        {faq.answer}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
                <SectionNotch />

            </div>

        </section>
    );
}