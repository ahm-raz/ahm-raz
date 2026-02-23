import { Link } from "react-router-dom";
import BrokenMirrorProfile from "../ui/BrokenMirrorProfile";

const Hero = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6 animate-fade-in order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-[#00ff00]">Ahmad</span> — <br/> Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-medium">
              Focused on scalable backend systems & production-ready web applications.
            </p>
            <p className="text-gray-300 leading-relaxed max-w-xl">
              I specialize in building enterprise-grade applications using the MERN stack, 
              with a strong emphasis on backend architecture, secure APIs, and scalable SaaS systems. 
              My code follows clean modular patterns designed for long-term maintainability.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="px-6 py-3 bg-[#00ff00] text-black font-medium rounded hover:bg-[#000000]/80 hover:text-white border border-[#00ff00] transition-colors duration-200"
              >
                View Projects
              </Link>
              <a
                href="/my_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-[#00ff00] text-white font-medium rounded hover:bg-[#00ff00]/80 hover:text-black transition-all duration-200"
              >
                Download CV
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 bg-[#000000] text-white font-medium rounded hover:bg-[#00ff00]/80 hover:text-black transition-colors duration-200 border border-[#00ff00]"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right: Broken Mirror Profile */}
          <div className="flex justify-center md:justify-end animate-slide-in order-1 md:order-2">
            <div className="group">
              <BrokenMirrorProfile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
