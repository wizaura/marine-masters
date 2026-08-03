import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getRegion, regions } from "@/lib/regions";

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
import RegionCountries from "@/components/country/RegionCountries";

export type RegionSlug = keyof typeof regions;

type Props = {
    params: Promise<{
        region: string;
    }>;
};

export async function generateStaticParams() {
    return Object.keys(regions).map((region) => ({
        region,
    }));
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { region } = await params;

    const data = getRegion(region);

    if (!data) return {};

    return {
        title: data.metaTitle,
        description: data.metaDescription,

        alternates: {
            canonical: `/regions/${region}`,
        },

        openGraph: {
            title: data.metaTitle,
            description: data.metaDescription,
            url: `https://shipsparesworldwide.com/regions/${region}`,
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

export default async function RegionPage({
    params,
}: Props) {
    const { region } = await params;

    const data = getRegion(region);

    if (!data) notFound();

    const categories = await getCategories();

    return (
        <>
            <Script
                id="region-webpage-schema"
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
                            `https://shipsparesworldwide.com/regions/${region}`,

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
                                    "Regions",

                                item:
                                    "https://shipsparesworldwide.com/regions",
                            },
                            {
                                "@type":
                                    "ListItem",

                                position: 3,

                                name:
                                    data.name,

                                item:
                                    `https://shipsparesworldwide.com/regions/${region}`,
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
                                "Region",

                            name:
                                data.name,
                        },

                        url:
                            `https://shipsparesworldwide.com/regions/${region}`,
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

            <Script
                id="region-itemlist"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: `${data.name} Countries`,
                        itemListElement: data.countries.map(
                            (country, index) => ({
                                "@type": "ListItem",
                                position: index + 1,
                                name: country.name,
                                url: `https://shipsparesworldwide.com/countries/${country.slug}`,
                            })
                        ),
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

            <RegionCountries
                countries={data.countries}
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