import HeroSection from "./MainHero";
import SectionNotch from "../ui/SectionNotch";
import BlogsList from "./Blog";
import CTA from "../ui/CTA";

type Props = {
    page: number;
    blogs: any[];
    pages: number;
};

export default function Hero({
    page,
    blogs,
    pages,
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
                    <BlogsList page={page} blogs={blogs} pages={pages} />
                </div>

                <div className="sticky bottom-0 mx-4">
                    <CTA />
                </div>

            </div>

        </section>
    );
}