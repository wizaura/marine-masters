export default function CategoryIntro({
  category,
}: {
  category: any;
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-8xl px-8">

        <div className="grid gap-10 md:grid-cols-[0.6fr_1.4fr]">

          <div>
            <p className="text-2xl text-neutral-500">
              {category.introTitle}
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold leading-tight">
              {category.heroTitle}
            </h2>

            <p className="mt-8 text-lg text-neutral-600">
              {category.introDescription}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}