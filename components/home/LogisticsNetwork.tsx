import Image from "next/image";
import Link from "next/link";
import SectionNotch from "../ui/SectionNotch";

export default function LogisticsNetworkSection() {
    return (
        <section className="px-4 py-24 bg-[#f3f3f3]">
            <div
                className="
                    relative
                    overflow-hidden
                    rounded-4xl
                    bg-black
                    py-6
                    min-h-[850px]
                "
            >
                {/* Content */}
                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        flex
                        max-w-4xl
                        flex-col
                        items-center
                        px-6
                        py-12
                        text-center
                    "
                >
                    <h2
                        className="
        max-w-4xl
        text-3xl
        font-bold
        leading-tight
        text-white
        md:text-5xl
    "
                    >
                        Supplying genuine{" "}
                        <span className="text-orange-300">
                            marine engine parts
                        </span>
                        <br />
                        and industrial machinery
                        <br />
                        to vessels worldwide
                    </h2>

                    <p
                        className="
        mt-5
        max-w-3xl
        text-lg
        font-medium
        text-white
        md:text-xl
    "
                    >
                        From critical engine components to complete marine
                        machinery solutions, we help ship owners, operators,
                        and marine service companies source reliable equipment
                        with fast global delivery.
                    </p>

                    <Link
                        href="/contact"
                        className="
                            mt-8
                            rounded-full
                            bg-orange-400
                            px-6
                            py-3
                            text-lg
                            font-semibold
                            text-white
                            transition
                            hover:scale-105
                        "
                    >
                        Ask for a quote
                    </Link>
                </div>

                {/* Map */}
                {/* Space between content and map */}
                <div className="h-4 md:h-32 lg:h-40" />

                {/* Map */}
                <div className="w-full px-4">
                    <Image
                        src="/map.avif"
                        alt="Global Logistics Network"
                        width={2000}
                        height={1000}
                        className="h-auto w-full"
                        priority
                    />
                </div>

                {/* Optional glow */}
                <div
                    className="
                        absolute
                        bottom-0
                        left-1/2
                        h-[300px]
                        w-[800px]
                        -translate-x-1/2
                        bg-blue-500/10
                        blur-[120px]
                    "
                />
                <SectionNotch />
            </div>
        </section>
    );
}