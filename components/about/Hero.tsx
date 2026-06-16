"use client";

import HeroSection from "./MainHero";
import MissionSection from "./OverviewSection";
import StatsSection from "./StatsSection";
import ClientsSection from "./MissionSection";
import { ChevronDown } from "lucide-react";
import SectionNotch from "../ui/SectionNotch";

export default function Hero() {
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

                <MissionSection />
        
                <StatsSection />

                <ClientsSection />

            </div>

        </section>
    );
}