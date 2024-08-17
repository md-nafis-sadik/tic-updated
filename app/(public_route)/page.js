import AboutSection from "@/components/homepage/AboutSection";
import GlobalPartners from "@/components/homepage/GlobalPartners";
import Hero from "@/components/homepage/Hero";
import Overview from "@/components/homepage/Overview";
import ServingIndustries from "@/components/homepage/ServingIndustries";
import Solution from "@/components/homepage/Solution";
import Sponsor from "@/components/homepage/Sponsor";
import TechStack from "@/components/homepage/TechStack";
import Testimonial from "@/components/homepage/Testimonial";
import WhyChooseSection from "@/components/homepage/WhyChooseSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Sponsor />
      <Overview />
      <Solution />
      <AboutSection />
      <ServingIndustries />
      <WhyChooseSection />
      <TechStack />
      <Testimonial />
      <GlobalPartners />
    </main>
  );
}
