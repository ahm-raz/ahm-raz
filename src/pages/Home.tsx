import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import TechStack from "../components/sections/TechStack";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import EngineeringApproach from "../components/sections/EngineeringApproach";
import CTA from "../components/sections/CTA";

const Home = () => {
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
