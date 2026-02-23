import { NavLink } from "react-router-dom";

const portfolioLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
];

const NavLinkStyle =
  "text-sm text-white/60 hover:text-[#22c55e] transition-all duration-300 relative group";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black"
      style={{
        boxShadow: "0 2px 8px rgba(34, 197, 94, 0.15), 0 1px 0 rgba(34, 197, 94, 0.1)",
      }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <div className="flex gap-6 md:gap-8 flex-1 justify-start order-2 md:order-1">
          {portfolioLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${NavLinkStyle} ${
                  isActive
                    ? "text-[#00ff00] font-medium"
                    : ""
                }`
              }
            >
              <span className="relative">
                {label}
                <span className="absolute -bottom-1 left-0 h-px bg-[#00ff00] opacity-0 group-hover:opacity-50 group-hover:w-full transition-all duration-300 w-0" />
              </span>
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/"
          className="text-lg md:text-xl tracking-[0.6em] md:tracking-[0.7em] text-[#00ff00] transition-all duration-300 uppercase order-1 md:order-2 shrink-0 group"
          style={{ fontFamily: "var(--font-suissnord)" }}
        >
          <span className="group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
            RAZA
          </span>
        </NavLink>

        <div className="flex gap-4 md:gap-6 flex-1 justify-end order-3 items-center">
          <a
            href="/my_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-white/20 text-white/60 hover:text-[#22c55e] hover:border-[#22c55e]/50 transition-all duration-300 relative group"
          >
            <span className="relative z-10">CV</span>
            <span className="absolute inset-0 bg-[#22c55e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <NavLink
            to="/contact"
              className={({ isActive }) =>
                `${NavLinkStyle} ${
                  isActive ? "text-[#22c55e] font-medium" : ""
                }`
              }
          >
            <span className="relative">
              Contact
              <span className="absolute -bottom-1 left-0 h-[1px] bg-[#00ff00] opacity-0 group-hover:opacity-50 group-hover:w-full transition-all duration-300 w-0" />
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
