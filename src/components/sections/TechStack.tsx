import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { FaShieldAlt, FaCog, FaServer, FaKey, FaPlug } from "react-icons/fa";

const TechStack = () => {
  const frontendTech = [
    {
      name: "React",
      icon: SiReact,
      iconClass: "text-sky-500 dark:text-sky-300",
      nameClass: "text-sky-900 dark:text-sky-100",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      iconClass: "text-cyan-500 dark:text-cyan-300",
      nameClass: "text-cyan-950 dark:text-cyan-100",
    },
    {
      name: "JavaScript (ES6+)",
      icon: SiJavascript,
      iconClass: "text-amber-400 dark:text-amber-300",
      nameClass: "text-amber-900 dark:text-amber-100",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      iconClass: "text-indigo-500 dark:text-indigo-300",
      nameClass: "text-indigo-900 dark:text-indigo-100",
    },
  ];

  const backendTech = [
    {
      name: "Node.js",
      icon: SiNodedotjs,
      iconClass: "text-emerald-500 dark:text-emerald-300",
      nameClass: "text-emerald-900 dark:text-emerald-100",
    },
    {
      name: "Express",
      icon: SiExpress,
      iconClass: "text-gray-900 dark:text-gray-100",
      nameClass: "text-gray-900 dark:text-gray-100",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      iconClass: "text-lime-500 dark:text-lime-300",
      nameClass: "text-lime-900 dark:text-lime-100",
    },
    {
      name: "Mongoose",
      icon: SiMongodb,
      iconClass: "text-lime-500 dark:text-lime-300",
      nameClass: "text-lime-900 dark:text-lime-100",
    },
  ];

  const engineeringTech = [
    {
      name: "JWT Authentication",
      icon: FaKey,
      iconClass: "text-amber-400 dark:text-amber-300",
      nameClass: "text-amber-900 dark:text-amber-100",
    },
    {
      name: "REST APIs",
      icon: FaPlug,
      iconClass: "text-sky-500 dark:text-sky-300",
      nameClass: "text-sky-900 dark:text-sky-100",
    },
    {
      name: "MVC / Service Layer",
      icon: FaServer,
      iconClass: "text-violet-500 dark:text-violet-300",
      nameClass: "text-violet-900 dark:text-violet-100",
    },
    {
      name: "Middleware Chains",
      icon: FaCog,
      iconClass: "text-fuchsia-500 dark:text-fuchsia-300",
      nameClass: "text-fuchsia-900 dark:text-fuchsia-100",
    },
    {
      name: "Environment Configuration",
      icon: FaCog,
      iconClass: "text-teal-500 dark:text-teal-300",
      nameClass: "text-teal-900 dark:text-teal-100",
    },
    {
      name: "Secure Session Handling",
      icon: FaShieldAlt,
      iconClass: "text-rose-500 dark:text-rose-300",
      nameClass: "text-rose-900 dark:text-rose-100",
    },
  ];

  // Duplicate items for seamless scroll
  const duplicateItems = (items: typeof frontendTech) => [...items, ...items];

  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-full container mx-auto px-4 sm:px-6 min-w-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 md:mb-12 text-center">
          Tech Stack & Tools
        </h2>

        {/* Frontend Row */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center md:text-left">
            Frontend
          </h3>
          <div className="relative overflow-hidden -mx-4 sm:mx-0">
            <div className="flex animate-scroll-slow">
              {duplicateItems(frontendTech).map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-5 sm:py-4 mx-2 sm:mx-4 bg-gray-100 dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg hover:border-gray-900 dark:hover:border-white/50 hover:bg-gray-200 dark:hover:bg-black transition-all duration-300 group"
                  >
                    <Icon
                      className={`text-lg sm:text-xl md:text-2xl ${tech.iconClass} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${tech.nameClass}`}>
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Backend Row */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center md:text-left">
            Backend
          </h3>
          <div className="relative overflow-hidden -mx-4 sm:mx-0">
            <div className="flex animate-scroll-slow-reverse">
              {duplicateItems(backendTech).map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-5 sm:py-4 mx-2 sm:mx-4 bg-gray-100 dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg hover:border-gray-900 dark:hover:border-white/50 hover:bg-gray-200 dark:hover:bg-black transition-all duration-300 group"
                  >
                    <Icon
                      className={`text-lg sm:text-xl md:text-2xl ${tech.iconClass} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${tech.nameClass}`}>
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Engineering Row */}
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center md:text-left">
            Engineering
          </h3>
          <div className="relative overflow-hidden -mx-4 sm:mx-0">
            <div className="flex animate-scroll-slow">
              {duplicateItems(engineeringTech).map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-5 sm:py-4 mx-2 sm:mx-4 bg-gray-100 dark:bg-black border border-gray-300 dark:border-white/20 rounded-lg hover:border-gray-900 dark:hover:border-white/50 hover:bg-gray-200 dark:hover:bg-black transition-all duration-300 group"
                  >
                    <Icon
                      className={`text-lg sm:text-xl md:text-2xl ${tech.iconClass} shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${tech.nameClass}`}>
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
