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
    { name: "React", icon: SiReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "JavaScript (ES6+)", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
  ];

  const backendTech = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Mongoose", icon: SiMongodb },
  ];

  const engineeringTech = [
    { name: "JWT Authentication", icon: FaKey },
    { name: "REST APIs", icon: FaPlug },
    { name: "MVC / Service Layer", icon: FaServer },
    { name: "Middleware Chains", icon: FaCog },
    { name: "Environment Configuration", icon: FaCog },
    { name: "Secure Session Handling", icon: FaShieldAlt },
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
                    <Icon className="text-lg sm:text-xl md:text-2xl text-white shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-900 dark:text-white text-xs sm:text-sm font-medium whitespace-nowrap">
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
                    <Icon className="text-lg sm:text-xl md:text-2xl text-white shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-900 dark:text-white text-xs sm:text-sm font-medium whitespace-nowrap">
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
                    <Icon className="text-lg sm:text-xl md:text-2xl text-white shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-900 dark:text-white text-xs sm:text-sm font-medium whitespace-nowrap">
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
