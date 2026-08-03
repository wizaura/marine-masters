"use client";

import { useState } from "react";

type FAQ = {
    question: string;
    answer: string;
};

type Props = {
    faqs: FAQ[];
};

export default function CountryFAQ({
    faqs,
}: Props) {
    const [open, setOpen] =
        useState<number | null>(0);

    return (
        <section className="py-20">

            <div className="mx-auto max-w-5xl px-6">

                <h2 className="text-4xl font-bold">
                    Frequently Asked Questions
                </h2>

                <div className="mt-10 space-y-5">

                    {faqs.map((faq, index) => (

                        <div
                            key={faq.question}
                            className="rounded-xl border border-gray-300"
                        >

                            <button
                                onClick={() =>
                                    setOpen(
                                        open === index
                                            ? null
                                            : index
                                    )
                                }
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    p-6
                                    text-left
                                    font-semibold
                                "
                            >
                                {faq.question}

                                <span>
                                    {open === index
                                        ? "-"
                                        : "+"}
                                </span>
                            </button>

                            {open === index && (

                                <div className="px-6 pb-6 leading-8 text-neutral-600">
                                    {faq.answer}
                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}