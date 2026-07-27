import type { Metadata } from "next";
import Script from "next/script";

import { getUpdates } from "@/sanity/lib/getUpdates";
import Hero from "@/components/updates/Hero";

export const metadata: Metadata = {
    title: "Latest Product Updates | Marine Masters",

    description:
        "Explore the latest marine engine spare parts, ship machinery, and newly added products available from Marine Masters.",

    alternates: {
        canonical: "/updates",
    },

    openGraph: {
        title: "Latest Product Updates | Marine Masters",

        description:
            "Stay updated with the newest marine spare parts and ship machinery products.",

        url: "https://shipsparesworldwide.com/updates",

        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title: "Latest Product Updates | Marine Masters",

        description:
            "Discover the latest products added to our catalogue.",
    },
};

export default async function UpdatesPage() {
    const products = await getUpdates();

    return (
        <>
            <Script
                id="updates-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",

                        "@type": "CollectionPage",

                        name: "Latest Product Updates",

                        url: "https://shipsparesworldwide.com/updates",

                        description:
                            "Recently added marine engine spare parts and ship machinery products.",
                    }),
                }}
            />

            <Hero
                products={products}
            />
        </>
    );
}