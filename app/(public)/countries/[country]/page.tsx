import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { countries } from "@/lib/countries";

import { getCategories } from "@/sanity/lib/getCategories";

// Sections
import CountryHero from "@/components/country/CountryHero";
import CountryOverview from "@/components/country/CountryOverview";
import CountryIndustries from "@/components/country/CountryIndustries";
import CountryPorts from "@/components/country/CountryPorts";
import CountryProducts from "@/components/country/CountryProducts";
import CountryBrands from "@/components/country/CountryBrands";
import CountryCategories from "@/components/country/CountryCategories";
import CountryLogistics from "@/components/country/CountryLogistics";
import CountryWhyChoose from "@/components/country/CountryWhyChoose";
import CountryFAQ from "@/components/country/CountryFAQ";
import CountryCTA from "@/components/country/CountryCTA";
import CountryRegions from "@/components/country/CountryRegions";

export type CountrySlug = keyof typeof countries;

type Props = {
    params: Promise<{
        country: string;
    }>;
};

export async function generateStaticParams() {
    return Object.keys(countries).map((country) => ({
        country,
    }));
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { country } = await params;

    const data = countries[country as CountrySlug];

    if (!data) return {};

    return {
        title: data.metaTitle,
        description: data.metaDescription,

        alternates: {
            canonical: `/countries/${country}`,
        },

        openGraph: {
            title: data.metaTitle,
            description: data.metaDescription,
            url: `https://shipsparesworldwide.com/countries/${country}`,
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
            title: data.metaTitle,
            description: data.metaDescription,
            images: ["/og-image.jpg"],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function CountryPage({
    params,
}: Props) {
    const { country } = await params;

    const data = countries[country as CountrySlug];

    if (!data) notFound();

    const categories = await getCategories();

    return (
        <>
            <Script
                id="country-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context":
                            "https://schema.org",

                        "@type":
                            "WebPage",

                        name: data.metaTitle,

                        description:
                            data.metaDescription,

                        url:
                            `https://shipsparesworldwide.com/countries/${country}`,

                        isPartOf: {
                            "@id":
                                "https://shipsparesworldwide.com/#website",
                        },

                        about: {
                            "@id":
                                "https://shipsparesworldwide.com/#organization",
                        },
                    }),
                }}
            />

            {/* Breadcrumb */}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context":
                            "https://schema.org",

                        "@type":
                            "BreadcrumbList",

                        itemListElement: [
                            {
                                "@type":
                                    "ListItem",

                                position: 1,

                                name: "Home",

                                item:
                                    "https://shipsparesworldwide.com",
                            },
                            {
                                "@type":
                                    "ListItem",

                                position: 2,

                                name:
                                    "Countries",

                                item:
                                    "https://shipsparesworldwide.com/countries",
                            },
                            {
                                "@type":
                                    "ListItem",

                                position: 3,

                                name:
                                    data.name,

                                item:
                                    `https://shipsparesworldwide.com/countries/${country}`,
                            },
                        ],
                    }),
                }}
            />

            {/* Service Schema */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context":
                            "https://schema.org",

                        "@type":
                            "Service",

                        serviceType:
                            `Marine Spare Parts Supply in ${data.name}`,

                        provider: {
                            "@id":
                                "https://shipsparesworldwide.com/#organization",
                        },

                        areaServed: {
                            "@type":
                                "Country",

                            name:
                                data.name,
                        },

                        url:
                            `https://shipsparesworldwide.com/countries/${country}`,
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
                        mainEntity: data.faqs.map((faq) => ({
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

            <CountryHero
                country={data.name}
                title={data.hero.title}
                description={data.hero.description}
            />

            <CountryOverview
                paragraphs={data.overview}
            />

            <CountryIndustries
                industries={data.industries}
            />

            <CountryPorts
                country={data.name}
                ports={data.ports}
            />

            <CountryProducts
                products={data.products}
            />

            <CountryBrands
                engineBrands={data.engineBrands}
                machineryBrands={data.machineryBrands}
            />

            <CountryCategories
                categories={categories}
            />

            <CountryRegions
                regions={data.regions}
                currentRegion={data.slug}
            />

            <CountryLogistics
                country={data.name}
                logistics={data.logistics}
            />

            <CountryWhyChoose
                points={data.whyChooseUs}
            />

            <CountryFAQ
                faqs={data.faqs}
            />

            <CountryCTA
                heading={data.cta.heading}
                description={data.cta.description}
                button={data.cta.button}
            />
        </>
    );
}