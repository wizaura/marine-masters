"use client";

import HeroSection from "./MainHero";
import MissionSection from "./MissionSection";
import StatsSection from "./StatsSection";
import ClientsSection from "./ClientsSection";
import { ChevronDown } from "lucide-react";
import SectionNotch from "../ui/SectionNotch";

export default function Hero() {
    return (
        <section className="bg-[#f3f3f3]">

            {/* Sticky Hero */}
            <div className="relative h-[205vh]">

                <div className="sticky top-0">
                    <HeroSection />
                </div>

            </div>

            {/* Content that covers hero */}
            <div className="relative z-30 -mt-[100vh] bg-[#f3f3f3]">

                <div className="absolute -top-10 left-1/2 z-50 -translate-x-1/2 -translate-y-full">
                    <SectionNotch />
                </div>

                <MissionSection />
        
                <StatsSection />

                <ClientsSection />

            </div>

        </section>
    );
}