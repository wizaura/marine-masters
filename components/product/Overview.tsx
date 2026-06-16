import { PortableText } from "@portabletext/react";

export default function ProductOverview({
    product,
}: {
    product: any;
}) {
    return (
        <section className="pb-12">
            <div className="mx-auto max-w-5xl">

                <h2
                    className="
                        text-2xl
                        font-bold
                        lg:text-4xl
                    "
                >
                    About <span className="text-orange-400">{product.title}</span>
                </h2>

                <div
                    className="
                        prose
                        prose-lg
                        text-md
                        md:text-lg
                        mt-10
                        max-w-none
                    "
                >
                    <PortableText
                        value={
                            product.description
                        }
                    />
                </div>

            </div>
        </section>
    );
}