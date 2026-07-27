import HeroSection from "./MainHero";
import SectionNotch from "../ui/SectionNotch";
import CTA from "../ui/CTA";
import UpdatesGrid from "./UpdatesGrid";

type Props = {
    products: any[];
};

export default function Hero({
    products,
}: Props) {
    return (
        <section className="bg-white">

            {/* Sticky Hero */}
            <div className="relative h-[205vh]">

                <div className="sticky top-0">
                    <HeroSection />
                </div>

            </div>

            {/* Content that covers hero */}
            <div className="relative z-30 -mt-[100vh] bg-white">

                <div className="absolute -top-10 left-1/2 z-50 -translate-x-1/2 -translate-y-full">
                    <SectionNotch />
                </div>
                <div className="absolute -top-12 left-0 h-12 w-full bg-white" />

                <div className="relative z-20 mx-4">
                    <UpdatesGrid products={products} />
                </div>

                <div className="sticky bottom-0 mx-4">
                    <CTA />
                </div>

            </div>

        </section>
    );
}