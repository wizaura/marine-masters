import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  category: any;
};

export default function CategoryHero({
  category,
}: Props) {
  return (
    <section className="relative p-3">
      <div className="relative h-[75vh] overflow-hidden rounded-[48px]">

        <Image
          src={
            category.heroImage
              ? urlFor(category.heroImage)
                  .width(2000)
                  .url()
              : "/logo-1.jpeg"
          }
          alt={category.title}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex h-full items-end">
          <div className="px-8 pb-20">

            <h1 className="text-7xl font-bold text-white">
              {category.heroTitle}
            </h1>

            <p className="mt-6 max-w-3xl text-xl text-white/80">
              {category.heroDescription}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}