"use client";

import SectionNotch from "../ui/SectionNotch";

const FAQS = [
    {
        question: "What marine spare parts do you supply?",
        answer:
            "We supply genuine and reconditioned marine engine spares, turbocharger components, pumps, compressors, separators, governors, and deck machinery parts.",
    },
    {
        question: "Can you source obsolete or hard-to-find parts?",
        answer:
            "Yes. Through our global sourcing network, we help ship owners and operators locate discontinued and difficult-to-source marine components.",
    },
    {
        question: "Do you provide worldwide shipping?",
        answer:
            "Yes, we arrange international delivery to ports, shipyards, and vessel locations worldwide with reliable logistics support.",
    },
    {
        question: "Which engine brands do you support?",
        answer:
            "We supply parts for MAN, Wärtsilä, Yanmar, Daihatsu, Mitsubishi, Bergen, Sulzer, and many other leading marine engine manufacturers.",
    },
    {
        question: "How quickly can you provide quotations?",
        answer:
            "Most RFQ requests receive a response within 24 hours, including availability, pricing, and estimated delivery schedules.",
    },
    {
        question: "Do you supply genuine and OEM parts?",
        answer:
            "Yes. Depending on customer requirements, we offer genuine, OEM, and high-quality replacement parts with full specification details.",
    },
];

export default function FAQSection() {
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

                            {FAQS.map((faq) => (
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