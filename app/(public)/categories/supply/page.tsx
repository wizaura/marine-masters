import CTA from "@/components/ui/CTA";

import ShipSupplyHero from "@/components/categories/supply/Hero";
import ShipSupplyIntro from "@/components/categories/supply/Intro";
import SupportedBrands from "@/components/categories/supply/SupportedBrands";
import MachineryCategories from "@/components/categories/supply/MachineryCategories";
import { getEngineBrands } from "@/sanity/lib/getEngineBrands";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title:
        "Worldwide Ship Supply Services | Marine Masters",

    description:
        "Marine Masters provides worldwide ship supply services including engine spare parts, ship machinery, technical procurement, OEM components, emergency sourcing, and global marine logistics.",

    alternates: {
        canonical: "/categories/supply",
    },

    openGraph: {
        type: "website",

        title:
            "Worldwide Ship Supply Services | Marine Masters",

        description:
            "Worldwide supplier of ship spare parts, engine components, ship machinery, and marine procurement services.",

        url:
            "https://shipsparesworldwide.com/categories/supply",

        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Worldwide Ship Supply Services | Marine Masters",

        description:
            "Worldwide supplier of ship spare parts, ship machinery, and marine logistics.",

        images: ["/og-image.jpg"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default async function ShipSupplyPage() {

    const brands = await getEngineBrands();

    return (
        <>
            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "WebPage",

                        "@id":
                            "https://shipsparesworldwide.com/categories/supply#webpage",

                        name:
                            "Worldwide Ship Supply Services",

                        url:
                            "https://shipsparesworldwide.com/categories/supply",

                        description:
                            "Worldwide ship supply services including marine engine spare parts, ship machinery, OEM sourcing and logistics.",

                        inLanguage: "en",

                        isPartOf: {
                            "@id":
                                "https://shipsparesworldwide.com/#website",
                        },

                        about: {
                            "@id":
                                "https://shipsparesworldwide.com/#organization",
                        },

                        publisher: {
                            "@id":
                                "https://shipsparesworldwide.com/#organization",
                        },

                        breadcrumb: {
                            "@id":
                                "https://shipsparesworldwide.com/categories/supply#breadcrumb",
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

                        "@id":
                            "https://shipsparesworldwide.com/categories/supply#breadcrumb",

                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,

                                name: "Home",

                                item:
                                    "https://shipsparesworldwide.com",
                            },
                            {
                                "@type": "ListItem",
                                position: 2,

                                name: "Categories",

                                item:
                                    "https://shipsparesworldwide.com/categories",
                            },
                            {
                                "@type": "ListItem",
                                position: 3,

                                name: "Ship Supply",

                                item:
                                    "https://shipsparesworldwide.com/categories/supply",
                            },
                        ],
                    }),
                }}
            />
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "Service",

                        "@id":
                            "https://shipsparesworldwide.com/categories/supply#service",

                        name:
                            "Worldwide Ship Supply Services",

                        description:
                            "Worldwide ship supply solutions including engine spare parts, ship machinery, OEM procurement, emergency sourcing, marine logistics and technical support.",

                        url:
                            "https://shipsparesworldwide.com/categories/supply",

                        provider: {
                            "@id":
                                "https://shipsparesworldwide.com/#organization",
                        },

                        areaServed: {
                            "@type": "Place",

                            name: "Worldwide",
                        },

                        serviceType: [
                            "Ship Supply",
                            "Marine Spare Parts",
                            "Ship Machinery Supply",
                            "OEM Parts",
                            "Marine Procurement",
                            "Emergency Ship Supply",
                        ],

                        audience: {
                            "@type": "Audience",

                            audienceType:
                                "Ship Owners, Ship Managers, Marine Engineers, Shipyards, Marine Procurement Teams",
                        },
                    }),
                }}
            />
            <>
                <ShipSupplyHero />

                <ShipSupplyIntro />

                <SupportedBrands brands={brands} />

                <MachineryCategories />

                <CTA />
            </>
        </>
    );
}