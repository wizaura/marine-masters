import Hero from "@/components/contact/Hero";
import ContactInsights from "@/components/contact/ContactInsight";
import Script from "next/script";
import type { Metadata } from "next";

const faqs = [
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


export const metadata: Metadata = {
    title: "Contact Marine Masters",

    description:
        "Contact Marine Masters for engine parts, ship machinery, OEM components, worldwide spare part sourcing, quotations, and global marine logistics support.",

    alternates: {
        canonical: "/contact",
    },

    openGraph: {
        title: "Contact Marine Masters",

        description:
            "Get in touch with Marine Masters for engine parts, ship machinery, OEM spare parts, and worldwide sourcing solutions.",

        url: "https://shipsparesworldwide.com/contact",

        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Marine Masters",
            },
        ],

        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Contact Marine Masters",
        description:
            "Contact Marine Masters for worldwide engine parts and ship machinery enquiries.",
        images: ["/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function ContactPage() {
    return (
        <>
            <Script
                id="contact-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "ContactPage",

                        "@id": "https://shipsparesworldwide.com/contact/#webpage",

                        name: "Contact Marine Masters",

                        url: "https://shipsparesworldwide.com/contact",

                        inLanguage: "en",

                        description:
                            "Contact Marine Masters for engine parts, ship machinery, worldwide sourcing, quotations, and marine equipment enquiries.",

                        isPartOf: {
                            "@id": "https://shipsparesworldwide.com/#website",
                        },

                        about: {
                            "@id": "https://shipsparesworldwide.com/#organization",
                        },

                        publisher: {
                            "@id": "https://shipsparesworldwide.com/#organization",
                        },

                        mainEntity: {
                            "@id": "https://shipsparesworldwide.com/#organization",
                        },
                    }),
                }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",

                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Home",
                                item: "https://shipsparesworldwide.com",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Contact",
                                item: "https://shipsparesworldwide.com/contact",
                            },
                        ],
                    }),
                }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",

                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",

                            name: faq.question,

                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer,
                            },
                        })),
                    }),
                }}
            />
            <div>
                <Hero />
                <ContactInsights faqs={faqs} />
            </div>
        </>
    )
}