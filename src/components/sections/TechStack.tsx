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
    <section className="py-16 md:py-24 bg-black/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Tech Stack & Tools
        </h2>

        {/* Frontend Row */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 text-center md:text-left">
            Frontend
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-slow">
              {duplicateItems(frontendTech).map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-3 px-6 py-4 mx-4 bg-black/30 border border-[#00ff00]/20 rounded-lg hover:border-[#00ff00]/50 hover:bg-black/50 transition-all duration-300 group"
                  >
                    <Icon className="text-2xl text-[#00ff00] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white text-sm font-medium whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Backend Row */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-4 text-center md:text-left">
            Backend
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-slow-reverse">
              {duplicateItems(backendTech).map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-3 px-6 py-4 mx-4 bg-black/30 border border-[#00ff00]/20 rounded-lg hover:border-[#00ff00]/50 hover:bg-black/50 transition-all duration-300 group"
                  >
                    <Icon className="text-2xl text-[#00ff00] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white text-sm font-medium whitespace-nowrap">
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
          <h3 className="text-xl font-semibold text-white mb-4 text-center md:text-left">
            Engineering
          </h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-slow">
              {duplicateItems(engineeringTech).map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-3 px-6 py-4 mx-4 bg-black/30 border border-[#00ff00]/20 rounded-lg hover:border-[#00ff00]/50 hover:bg-black/50 transition-all duration-300 group"
                  >
                    <Icon className="text-2xl text-[#00ff00] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white text-sm font-medium whitespace-nowrap">
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
