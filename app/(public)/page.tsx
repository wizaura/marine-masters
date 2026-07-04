import HomeCategories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import HomeInsights from "@/components/home/HomeInsight";
import LogisticsNetworkSection from "@/components/home/LogisticsNetwork";
import { getLatestBlogs } from "@/sanity/lib/getLatestBlogs";
import type { Metadata } from "next";
import Script from "next/script";

const homeCategories = [
  {
    title: "Engine Parts",
    description:
      "Genuine and aftermarket spare parts for MAN B&W, Wärtsilä, Sulzer, Yanmar, and other marine engines.",
    image: "/engine-parts-2.webp",
    slug: "/categories/engine-parts",
  },
  {
    title: "Ship Machinery",
    description:
      "Pumps, compressors, purifiers, heat exchangers, and critical machinery components for marine operations.",
    image: "/machinery-2.webp",
    slug: "/categories/machinery",
  },
];

export const metadata: Metadata = {
  title: "Engine Parts, Ship Machinery & Worldwide Ship Spare Supplier",

  description:
    "Marine Masters supplies genuine, OEM, and reconditioned engine parts, ship machinery, pumps, compressors, turbochargers, and marine equipment with worldwide logistics support.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Marine Masters | Engine Parts & Ship Machinery Worldwide",

    description:
      "Worldwide supplier of engine parts, ship machinery, OEM spare parts, and industrial equipment.",

    url: "https://shipsparesworldwide.com",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    type: "website",
  },
};

export default async function Home() {

  const blogs =
    await getLatestBlogs();

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",

            name: "Marine Masters",

            description:
              "Worldwide supplier of engine parts, ship machinery and industrial marine equipment.",

            url: "https://shipsparesworldwide.com",
          }),
        }}
      />
      <Script
        id="homepage-category-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",

            name: "Product Categories",

            itemListElement: homeCategories.map((category, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: category.title,
              url: `https://shipsparesworldwide.com${category.slug}`,
            })),
          }),
        }}
      />
      <Script
        id="navigation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",

            name: [
              "Home",
              "About",
              "Categories",
              "Blogs",
              "Contact",
            ],

            url: [
              "https://shipsparesworldwide.com",
              "https://shipsparesworldwide.com/about",
              "https://shipsparesworldwide.com/categories",
              "https://shipsparesworldwide.com/blogs",
              "https://shipsparesworldwide.com/contact",
            ],
          }),
        }}
      />
      <div>
        <Hero />
        <HomeCategories categories={homeCategories} />
        <LogisticsNetworkSection />
        <HomeInsights blogs={blogs} />
      </div>
    </>
  );
}
