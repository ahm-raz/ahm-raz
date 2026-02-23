import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's Build Something Meaningful
          </h2>
          <p className="text-gray-400 text-lg">
            Open to full-time roles, internships, and challenging engineering projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Link
              to="/contact"
              className="px-8 py-3 text-black font-medium rounded hover:bg-[#000000] hover:text-white border border-[#00ff00] transition-colors duration-200 bg-[#00ff00]"
            >
              Contact Me
            </Link>
            <a
              href="/my_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#00ff00] text-white font-medium rounded hover:bg-[#00ff00]/80 hover:text-black transition-all duration-200"
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
