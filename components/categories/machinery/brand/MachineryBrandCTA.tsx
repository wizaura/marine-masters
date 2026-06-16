import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MachineryCTA() {
    return (
        <section className="bg-white px-6 py-20">
            <div
                className="
                    mx-auto
                    max-w-8xl
                    rounded-4xl
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
                    Need help sourcing equipment?
                </h2>

                <p
                    className="
                        mt-6
                        max-w-2xl
                        text-lg
                        text-white/70
                    "
                >
                    Tell us your machinery type,
                    brand, model, or part number.
                    Our team can source genuine
                    marine equipment worldwide.
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