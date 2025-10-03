import AboutContent from "@/components/about/AboutContent";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About the Project | iHEATRISK";
  }, []);

  return <AboutContent />;
};

export default About;
