import HeroSection from "./MainHero";
import SectionNotch from "../ui/SectionNotch";
import BlogsPage from "./Blog";
import CTA from "../ui/CTA";

export default function Hero({
    page,
}: {
    page: number;
}) {
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
                    <BlogsPage page={page}/>
                </div>

                <div className="sticky bottom-0 mx-4">
                    <CTA />
                </div>

            </div>

        </section>
    );
}