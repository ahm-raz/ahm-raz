import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BrokenMirrorProfile from "../ui/BrokenMirrorProfile";

const roles = [
  { text: "Full-Stack Dev", shade: "text-gray-900 dark:text-white" },
  { text: "Software Engineer", shade: "text-gray-800 dark:text-gray-200" },
  { text: "Frontend Dev", shade: "text-gray-700 dark:text-gray-300" },
  { text: "Backend Dev", shade: "text-gray-600 dark:text-gray-400" },
  { text: "Programmer", shade: "text-gray-500 dark:text-gray-500" },
  { text: "MERN Stack Dev", shade: "text-gray-600 dark:text-gray-400" },
  { text: "API Architect", shade: "text-gray-700 dark:text-gray-300" },
  { text: "System Builder", shade: "text-gray-800 dark:text-gray-200" },
  { text: "Web App Engineer", shade: "text-gray-900 dark:text-white" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
        setAnimate(true);
      }, 350);

    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const role = roles[index];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="w-full max-w-full container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center min-w-0">

          {/* Left */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in order-2 md:order-1 min-w-0">

            <h1 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight break-words">

              <span className="text-transparent hero-title-stroke">
                Hi I'm
              </span>{" "}

              <span className="text-gray-900 dark:text-white">
                Ahmad Raza
              </span>

              <br />

              <span
                className={`inline-block transition-all duration-500 ease-out break-words ${role.shade} ${animate
                    ? "opacity-100 translate-y-0 blur-0"
                    : "opacity-0 -translate-y-6 blur-sm"
                  }`}
              >
                {role.text}
              </span>

            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-medium max-w-xl">
              Focused on scalable backend systems & production-ready web applications.
            </p>

            <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl">
              I specialize in building enterprise-grade applications using the MERN stack,
              with a strong emphasis on backend architecture, secure APIs, and scalable SaaS systems.
              My code follows clean modular patterns designed for long-term maintainability.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4">
              <Link
                to="/projects"
                className="px-4 py-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base bg-white dark:bg-white text-black font-medium rounded hover:bg-black dark:hover:bg-black hover:text-white border border-gray-900 dark:border-white transition-colors duration-200 min-h-[2.75rem] inline-flex items-center justify-center"
              >
                View Projects
              </Link>

              <a
                href="/my_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base border border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium rounded hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 min-h-[2.75rem] inline-flex items-center justify-center"
              >
                Download CV
              </a>

              <Link
                to="/contact"
                className="px-4 py-2.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm sm:text-base bg-gray-900 dark:bg-black text-white font-medium rounded hover:bg-gray-700 dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200 border border-gray-900 dark:border-white min-h-[2.75rem] inline-flex items-center justify-center"
              >
                Contact Me
              </Link>
            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end animate-slide-in order-1 md:order-2 min-w-0">
            <div className="group w-full max-w-[min(100%,20rem)] sm:max-w-[22rem] md:max-w-none">
              <BrokenMirrorProfile />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;