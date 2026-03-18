import ProjectsShowcase from "../ui/ProjectsShowcase";
import { featuredProjectIds, getProjectsByIds } from "../../data/projects";

const FeaturedProjects = () => {
  const featured = getProjectsByIds(featuredProjectIds);

  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-full max-w-full container mx-auto px-4 sm:px-6 min-w-0 relative z-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
            Featured Projects
          </h2>

          <a
            href="/projects"
            className="inline-flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base border border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200"
          >
            View all →
          </a>
        </div>

        <ProjectsShowcase
          projects={featured}
          viewAllHref="/projects"
          enableTypeFilter
          density="compact"
        />
      </div>
    </section>
  );
};

export default FeaturedProjects;
