import Link from "next/link";

type Props = {
    heading: string;
    description: string;
    button: string;
};

export default function CountryCTA({
    heading,
    description,
    button,
}: Props) {
    return (
        <section className="py-24">

            <div className="mx-auto max-w-6xl px-6">

                <div
                    className="
                        rounded-3xl
                        bg-neutral-950
                        px-10
                        py-20
                        text-center
                        text-white
                    "
                >

                    <h2 className="text-4xl font-bold">
                        {heading}
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-3xl
                            text-lg
                            leading-8
                            text-neutral-300
                        "
                    >
                        {description}
                    </p>

                    <div className="mt-10 flex justify-center gap-4">

                        <Link
                            href="/contact"
                            className="
                                rounded-lg
                                bg-white
                                hover:bg-orange-400
                                px-8
                                py-4
                                font-semibold
                                text-black
                            "
                        >
                            {button}
                        </Link>

                        <Link
                            href="/categories"
                            className="
                                rounded-lg
                                border
                                border-white/30
                                hover:text-orange-400
                                hover:border-orange-400
                                px-8
                                py-4
                            "
                        >
                            Browse Categories
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}