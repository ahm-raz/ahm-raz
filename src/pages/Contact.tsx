import { useEffect } from "react";
import ContactHero from "../components/sections/ContactHero";
import ContactForm from "../components/sections/ContactForm";
import SocialGrid from "../components/sections/SocialGrid";
import ContactInfo from "../components/sections/ContactInfo";

const Contact = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Contact | ahm-raz";
    return () => { document.title = prev; };
  }, []);
  return (
    <>
      <ContactHero />
      <ContactForm />
      <SocialGrid />
      <ContactInfo />
    </>
  );
};

export default Contact;
