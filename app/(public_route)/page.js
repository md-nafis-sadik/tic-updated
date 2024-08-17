import AboutSection from "@/components/homepage/AboutSection";
import Hero from "@/components/homepage/Hero";
import Overview from "@/components/homepage/Overview";
import Solution from "@/components/homepage/Solution";
import Sponsor from "@/components/homepage/Sponsor";
import TechStack from "@/components/homepage/TechStack";
import WhyChooseSection from "@/components/homepage/WhyChooseSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Sponsor />
      <Overview />
      <AboutSection />
      <WhyChooseSection />
      <Solution />
      <TechStack />
    </main>
  );
}
