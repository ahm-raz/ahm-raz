import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="w-full max-w-full container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6 min-w-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white px-1">
            Let's Build Something Meaningful
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg px-1">
            Open to full-time roles, internships, and challenging engineering projects.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6">
            <Link
              to="/contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 text-sm sm:text-base text-black font-medium rounded hover:bg-gray-900 dark:hover:bg-black hover:text-white border border-gray-900 dark:border-white transition-colors duration-200 bg-white min-h-[2.75rem] inline-flex items-center justify-center"
            >
              Contact Me
            </Link>
            <a
              href="/my_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 text-sm sm:text-base border border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium rounded hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200 min-h-[2.75rem] inline-flex items-center justify-center"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
