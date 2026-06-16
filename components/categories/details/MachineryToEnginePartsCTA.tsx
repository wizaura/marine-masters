import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MachineryToEnginePartsCTA() {
    return (
        <section className="px-6 pb-24">
            <div
                className="
            mx-auto
            max-w-8xl
            rounded-[48px]
            bg-neutral-900
            px-8
            py-16
            text-white
            lg:px-16
            lg:py-24
        "
            >
                <div className="grid gap-10 md:grid-cols-[0.6fr_1.4fr]">

                    <div>
                        <p className="text-neutral-400 text-xl">
                            Looking for engine parts?
                        </p>
                    </div>

                    <div>
                        <h2
                            className="
                        text-4xl
                        font-bold
                        text-white
                        leading-tight
                        lg:text-6xl
                    "
                        >
                            Need marine engine spare parts instead?
                        </h2>

                        <p
                            className="
                        mt-6
                        max-w-2xl
                        text-lg
                        text-white/70
                    "
                        >
                            Explore our complete range of marine engine
                            components, replacement parts, and equipment
                            sourced for vessels operating worldwide.
                        </p>

                        <Link
                            href="/categories/engine-parts"
                            className="
                        mt-10
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-orange-500
                        px-8
                        py-4
                        font-semibold
                        text-black
                        transition
                        hover:scale-105
                    "
                        >
                            Browse Engine Parts
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}