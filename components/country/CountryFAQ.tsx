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
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="bg-white pt-20">
            <div className="mx-auto max-w-5xl px-6">

                {/* Header */}
                <div className="max-w-3xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
                        FAQ
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>

                    <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg">
                        Find answers to common questions about marine spare
                        parts sourcing, quotations, manufacturers, delivery
                        and procurement.
                    </p>
                </div>

                {/* FAQ list */}
                <div className="mt-10 space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = open === index;

                        return (
                            <div
                                key={faq.question}
                                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                                    isOpen
                                        ? "border-orange-200 bg-orange-50/40"
                                        : "border-neutral-200 bg-white hover:border-neutral-300"
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpen(
                                            isOpen ? null : index
                                        )
                                    }
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-7"
                                >
                                    <span className="text-base font-semibold leading-7 text-neutral-950 sm:text-lg">
                                        {faq.question}
                                    </span>

                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg font-medium transition-all duration-300 ${
                                            isOpen
                                                ? "border-orange-500 bg-orange-500 text-white"
                                                : "border-neutral-300 bg-white text-neutral-700"
                                        }`}
                                    >
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ${
                                        isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="border-t border-orange-100 px-6 pb-6 pt-5 text-sm leading-7 text-neutral-600 sm:px-7 sm:text-base">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Small RFQ prompt */}
                <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
                    <div>
                        <p className="font-semibold text-neutral-950">
                            Can't find the information you need?
                        </p>

                        <p className="mt-1 text-sm text-neutral-500">
                            Send us your manufacturer, model or part number.
                        </p>
                    </div>

                    <a
                        href="#rfq"
                        className="mt-5 inline-flex shrink-0 items-center justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 sm:mt-0"
                    >
                        Send an RFQ
                        <span className="ml-2">→</span>
                    </a>
                </div>

            </div>
        </section>
    );
}