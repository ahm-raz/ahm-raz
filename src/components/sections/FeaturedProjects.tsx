import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Payback",
    description: "SaaS platform for automated recovery of failed subscription payments",
    tech: "Node.js • Express • MongoDB • JWT • Service Layer",
    type: "SaaS Dashboard",
  },
  {
    title: "Gas Cylinder Delivery System",
    description: "Enterprise-level delivery management with inventory tracking and payment processing",
    tech: "Node.js • Express • MongoDB • Transactions • Cron Jobs",
    type: "Backend System",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with secure payment integration and admin dashboard",
    tech: "MERN Stack • Stripe API • Role-Based Access",
    type: "Full-Stack Application",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-black/40 border border-white/10 rounded-lg p-6 hover:border-[#00ff00]/30 transition-all duration-300 hover:bg-black/60 group"
            >
              <div className="mb-2">
                <span className="text-xs text-[#00ff00] font-medium uppercase tracking-wide">
                  {project.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00ff00] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-500 text-xs mb-4 font-mono">
                {project.tech}
              </p>
              <Link
                to="/projects"
                className="inline-block text-sm text-white hover:text-[#00ff00] transition-colors font-medium"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
