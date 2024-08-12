import Hero from "@/components/homepage/Hero";
import Sponsor from "@/components/homepage/Sponsor";
import WhyChooseSection from "@/components/homepage/WhyChooseSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Sponsor />
      <WhyChooseSection />
    </main>
  );
}
