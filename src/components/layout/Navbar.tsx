import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

const portfolioLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = theme === "dark";
  const desktopLinkClass =
    "text-xs sm:text-sm text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group whitespace-nowrap py-1";

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const mobileLinkClass =
    "block py-3 px-4 text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-200 text-base sm:text-lg border-b border-gray-200 dark:border-white/10 last:border-b-0";
  const mobileActiveClass = "text-gray-900 dark:text-white font-medium bg-gray-100 dark:bg-white/5";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 min-w-0 bg-white/90 dark:bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-black/70 border-b border-gray-200/50 dark:border-white/5"
        style={{
          boxShadow: isDark ? "0 2px 8px rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.05)" : "0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 0 rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="w-full max-w-full container mx-auto px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 flex flex-wrap items-center justify-between gap-x-2 sm:gap-x-4 md:gap-x-6 gap-y-2">
          {/* Desktop: left links | Mobile: hidden */}
          <div className="hidden md:flex flex-wrap gap-2 sm:gap-4 lg:gap-6 flex-1 min-w-0 justify-start order-2 md:order-1">
            {portfolioLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `${desktopLinkClass} ${isActive ? "text-gray-900 dark:text-white font-medium" : ""}`
                }
              >
                <span className="relative">
                  {label}
                  <span className="absolute -bottom-1 left-0 h-px bg-gray-900 dark:bg-white opacity-0 group-hover:opacity-50 group-hover:w-full transition-all duration-300 w-0" />
                </span>
              </NavLink>
            ))}
          </div>

          {/* Logo: center on desktop, left on mobile — day: black logo, night: white logo */}
          <NavLink
            to="/"
            className="text-base sm:text-lg md:text-xl tracking-[0.4em] sm:tracking-[0.6em] md:tracking-[0.7em] shrink-0 group min-h-[2.25rem] flex items-center order-1 md:order-2"
            style={{ fontFamily: "var(--font-suissnord)" }}
            onClick={closeMenu}
          >
            <img
              src={isDark ? "/navbarLogoWhite.png" : "/navbarLogoBlack.png"}
              alt="ahm-raz"
              className="h-5 sm:h-6 md:h-7 w-auto max-h-8 object-contain transition-shadow group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,0.2)] dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            />
          </NavLink>

          {/* Desktop: right links (CV + Contact) | Mobile: hamburger */}
          <div className="hidden md:flex flex-wrap gap-2 sm:gap-4 lg:gap-6 flex-1 justify-end order-3 items-center min-w-0">
            <a
              href="/my_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white/50 transition-all duration-300 relative group whitespace-nowrap"
            >
              <span className="relative z-10">CV</span>
              <span className="absolute inset-0 bg-gray-200/50 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${desktopLinkClass} ${isActive ? "text-gray-900 dark:text-white font-medium" : ""}`
              }
            >
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 h-px bg-gray-900 dark:bg-white opacity-0 group-hover:opacity-50 group-hover:w-full transition-all duration-300 w-0" />
              </span>
            </NavLink>
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded border border-gray-300 dark:border-white/20 text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/50"
            aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
          >
            {isDark ? <FaSun className="text-lg sm:text-xl" /> : <FaMoon className="text-lg sm:text-xl" />}
          </button>

          {/* Hamburger: only on small screens */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded border border-gray-300 dark:border-white/20 text-gray-600 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:border-gray-900 dark:hover:border-white/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/50 order-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <FaTimes className="text-xl sm:text-2xl" />
            ) : (
              <FaBars className="text-xl sm:text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay - mobile only when menu open */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 dark:bg-black transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Menu panel - mobile only */}
      <div
        className={`fixed top-0 right-0 z-[60] h-full w-full max-w-sm bg-white dark:bg-black border-l border-gray-200 dark:border-white/10 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="pt-16 pb-8 overflow-y-auto h-full">
          <nav className="flex flex-col">
            {portfolioLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${mobileLinkClass} ${isActive ? mobileActiveClass : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="/my_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className={`${mobileLinkClass} border-b border-white/10`}
            >
              CV / Resume
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
