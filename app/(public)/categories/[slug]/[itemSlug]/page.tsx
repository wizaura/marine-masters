import { notFound } from "next/navigation";

import EngineBrandPage from "@/components/categories/engine-parts/Main";
import MachineryTypePage from "@/components/categories/machinery/Main";

import { getCategoryBySlug } from "@/sanity/lib/getCategoryBySlug";
import { getBrandBySlug } from "@/sanity/lib/getBrandBySlug";
import { getMachineryTypeBySlug } from "@/sanity/lib/getMachineryTypeBySlug";
import CTA from "@/components/ui/CTA";
import { urlFor } from "@/sanity/lib/image";
import { Metadata } from "next";

type Props = {
    params: Promise<{
        slug: string;
        itemSlug: string;
    }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, itemSlug } = await params;

  if (slug === "engine-parts") {
    const brand = await getBrandBySlug(itemSlug);

    if (!brand) {
      return {
        title: "Not Found",
      };
    }

    const image = brand.image
      ? urlFor(brand.image).width(1600).url()
      : "/og-image.jpg";

    return {
      title: `${brand.name} Engine Parts | Marine Masters`,

      description:
        brand.description ||
        `Browse genuine and OEM ${brand.name} engine parts and marine spare parts supplied worldwide by Marine Masters.`,

      alternates: {
        canonical: `/categories/engine-parts/${itemSlug}`,
      },

      openGraph: {
        title: `${brand.name} Engine Parts`,

        description:
          brand.description ||
          `Worldwide supplier of ${brand.name} engine parts.`,

        url: `https://shipsparesworldwide.com/categories/engine-parts/${itemSlug}`,

        images: [
          {
            url: image,
            width: 1200,
            height: 630,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: `${brand.name} Engine Parts`,
        description:
          brand.description ||
          `Worldwide supplier of ${brand.name} engine parts.`,
        images: [image],
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  }

  const machinery = await getMachineryTypeBySlug(itemSlug);

  if (!machinery) {
    return {
      title: "Not Found",
    };
  }

  const image = machinery.image
    ? urlFor(machinery.image).width(1600).url()
    : "/og-image.jpg";

  return {
    title: `${machinery.title} | Marine Masters`,

    description:
      machinery.description ||
      `Worldwide supplier of ${machinery.title} and marine machinery components.`,

    alternates: {
      canonical: `/categories/machinery/${itemSlug}`,
    },

    openGraph: {
      title: machinery.title,

      description:
        machinery.description,

      url: `https://shipsparesworldwide.com/categories/machinery/${itemSlug}`,

      images: [
        {
          url: image,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: machinery.title,
      description: machinery.description,
      images: [image],
    },
  };
}

export default async function CategoryItemPage({
    params,
}: Props) {
    const { slug, itemSlug } = await params;

    const category = await getCategoryBySlug(slug);

    if (!category) {
        notFound();
    }

    /**
     * ENGINE PARTS
     */
    if (slug === "engine-parts") {
        const brand = await getBrandBySlug(itemSlug);

        console.log(brand, 'dfe')

        if (!brand) {
            notFound();
        }

        return (
            <>
                <EngineBrandPage
                    brand={brand}
                />
                <CTA />
            </>
        );
    }

    /**
     * MACHINERY
     */
    if (slug === "machinery") {
        const machineryType =
            await getMachineryTypeBySlug(itemSlug);

        if (!machineryType) {
            notFound();
        }

        return (
            <>
                <MachineryTypePage
                    machineryType={machineryType}
                />
                <CTA />
            </>
        );
    }

    notFound();
} 