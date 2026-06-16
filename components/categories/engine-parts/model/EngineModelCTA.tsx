import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function EngineModelCTA() {
    return (
        <section className="bg-white px-8 py-24">
            <div
                className="
                    mx-auto
                    max-w-8xl
                    rounded-[40px]
                    bg-neutral-900
                    p-12
                    text-white
                "
            >
                <h2
                    className="
                        text-4xl
                        font-bold
                        lg:text-6xl
                    "
                >
                    Can't find your part?
                </h2>

                <p
                    className="
                        mt-6
                        max-w-2xl
                        text-lg
                        text-white/70
                    "
                >
                    Send us your engine model and
                    required part numbers. Our team
                    will help source genuine marine
                    spare parts worldwide.
                </p>

                <Link
                    href="/contact"
                    className="
                        mt-10
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-orange-400
                        px-8
                        py-4
                        font-semibold
                    "
                >
                    Request a Quote
                    <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
}