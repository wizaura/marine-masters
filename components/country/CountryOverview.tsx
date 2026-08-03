type Props = {
    paragraphs: string[];
};

export default function CountryOverview({
    paragraphs,
}: Props) {
    return (
        <section className="mx-auto max-w-5xl px-6 py-20">

            <h2 className="text-4xl font-bold">
                Trusted Marine Spare Parts Supplier
            </h2>

            <div className="mt-8 space-y-6">

                {paragraphs.map((paragraph) => (
                    <p
                        key={paragraph}
                        className="
                            text-lg
                            leading-8
                            text-neutral-600
                        "
                    >
                        {paragraph}
                    </p>
                ))}

            </div>

        </section>
    );
}