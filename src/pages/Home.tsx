import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import TechStack from "../components/sections/TechStack";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import EngineeringApproach from "../components/sections/EngineeringApproach";
import CTA from "../components/sections/CTA";

const Home = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Home | ahm-raz";
    return () => { document.title = prev; };
  }, []);
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <EngineeringApproach />
      <CTA />
    </>
  );
};

export default Home;
