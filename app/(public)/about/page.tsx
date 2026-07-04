import AboutInsights from "@/components/about/AboutInsight";
import Hero from "@/components/about/Hero";
import { Metadata } from "next";
import Script from "next/script";

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
    title: "About Marine Masters",

    description:
        "Learn about Marine Masters, our worldwide supply network, expertise in engine parts and ship machinery, and commitment to delivering genuine OEM and reconditioned components.",

    alternates: {
        canonical: "/about",
    },

    openGraph: {
        title: "About Marine Masters",

        description:
            "Worldwide supplier of engine parts, ship machinery and marine equipment.",

        url: "https://shipsparesworldwide.com/about",

        images: [
            {
                url: "/about-og.jpg",
                width: 1200,
                height: 630,
                alt: "About Marine Masters",
            },
        ],

        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "About Marine Masters",
        description:
            "Learn about Marine Masters, a trusted worldwide supplier of engine parts, ship machinery, OEM components, and industrial marine equipment.",
        images: ["/about-og.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function About() {
    return (
        <>
            <Script
                id="about-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",

                        name: "About Marine Masters",

                        inLanguage: "en",

                        url:
                            "https://shipsparesworldwide.com/about",

                        description:
                            "Learn about Marine Masters, a trusted worldwide supplier of engine parts, ship machinery, OEM components, and industrial marine equipment. Discover our commitment to quality, reliable sourcing, and global logistics solutions for the maritime industry.",

                        isPartOf: {
                            "@type": "WebSite",
                            "@id": "https://shipsparesworldwide.com/#website",
                            name: "Marine Masters",
                            url: "https://shipsparesworldwide.com",
                        },

                        about: {
                            "@type": "Organization",
                            "@id": "https://shipsparesworldwide.com/#organization",
                            name: "Marine Masters",
                            url: "https://shipsparesworldwide.com",
                        },

                        publisher: {
                            "@type": "Organization",
                            "@id": "https://shipsparesworldwide.com/#organization",
                            name: "Marine Masters",
                            url: "https://shipsparesworldwide.com",
                        },

                        primaryImageOfPage: {
                            "@type": "ImageObject",
                            url: "https://shipsparesworldwide.com/about-hero-2.webp",
                        },

                        mainEntity: {
                            "@type": "Organization",
                            "@id": "https://shipsparesworldwide.com/#organization",
                            name: "Marine Masters",
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
                                name: "About",
                                item: "https://shipsparesworldwide.com/about",
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
                <AboutInsights faqs={faqs} />
            </div>
        </>
    )
}