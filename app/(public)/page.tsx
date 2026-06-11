import HomeCategories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import HomeInsights from "@/components/home/HomeInsight";
import LogisticsNetworkSection from "@/components/home/LogisticsNetwork";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeCategories />
      <LogisticsNetworkSection />
      <HomeInsights />
    </div>
  );
}
