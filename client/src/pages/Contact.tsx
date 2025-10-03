import ContactForm from "@/components/contact/ContactForm";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | iHEATRISK";
  }, []);

  return <ContactForm />;
};

export default Contact;
