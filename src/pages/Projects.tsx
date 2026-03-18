import { useEffect } from "react";
import ProjectsShowcase from "../components/ui/ProjectsShowcase";

const Projects = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Projects | ahm-raz";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto min-w-0 px-1 relative overflow-hidden">
      <div className="px-2 sm:px-4 relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl">
          A curated set of systems I’ve built and shipped—click a card to see a quick breakdown of the tech stack.
        </p>

        <ProjectsShowcase enableTypeFilter density="normal" />
      </div>
    </section>
  );
};

export default Projects;
