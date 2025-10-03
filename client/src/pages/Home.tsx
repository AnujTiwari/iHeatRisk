import HeroSection from "@/components/home/HeroSection";
import DescriptionSection from "@/components/home/DescriptionSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { useEffect } from "react";

// Simple Home page component
function Home() {
  // Set document title on component mount
  useEffect(() => {
    document.title = "iHEATRISK - Individual Heat Risk Toolkit";
  }, []);

  return (
    <div className="home-page">
      <HeroSection />
      <DescriptionSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;
