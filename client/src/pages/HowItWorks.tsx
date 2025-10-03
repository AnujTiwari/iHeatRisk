import Process from "@/components/howItWorks/Process";
import { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    document.title = "How It Works | iHEATRISK";
  }, []);

  return <Process />;
};

export default HowItWorks;
