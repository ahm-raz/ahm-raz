import { useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";
import { SiReact, SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { FaShieldAlt, FaCog, FaServer, FaKey, FaPlug } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FiCopy, FiCheck } from "react-icons/fi";

type SkillCategory = "Frontend" | "Backend" | "Architecture";

type Skill = {
  name: string;
  description: string;
  category: SkillCategory;
  icon: IconType;
  iconClass: string;
  nameClass: string;
};

const Skills = () => {
  useEffect(() => {
    const prev = document.title;
    document.title = "Skills | ahm-raz";
    return () => {
      document.title = prev;
    };
  }, []);

  const skills: Skill[] = useMemo(
    () => [
      {
        name: "React",
        description: "Component-driven UI development with a focus on maintainable state patterns.",
        category: "Frontend",
        icon: SiReact,
        iconClass: "text-sky-500 dark:text-sky-300",
        nameClass: "text-sky-900 dark:text-sky-100",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling for consistent, fast UI iteration and clean design systems.",
        category: "Frontend",
        icon: SiTailwindcss,
        iconClass: "text-cyan-500 dark:text-cyan-300",
        nameClass: "text-cyan-950 dark:text-cyan-100",
      },
      {
        name: "JavaScript (ES6+)",
        description: "Modern language features for robust logic, tooling, and runtime-safe code.",
        category: "Frontend",
        icon: SiJavascript,
        iconClass: "text-amber-400 dark:text-amber-300",
        nameClass: "text-amber-900 dark:text-amber-100",
      },
      {
        name: "TypeScript",
        description: "Static typing for safer refactors, better DX, and scalable codebases.",
        category: "Frontend",
        icon: SiTypescript,
        iconClass: "text-indigo-500 dark:text-indigo-300",
        nameClass: "text-indigo-900 dark:text-indigo-100",
      },
      {
        name: "Node.js",
        description: "Server-side runtime built for performant, production-ready backend systems.",
        category: "Backend",
        icon: SiNodedotjs,
        iconClass: "text-emerald-500 dark:text-emerald-300",
        nameClass: "text-emerald-900 dark:text-emerald-100",
      },
      {
        name: "Express",
        description: "Minimal web framework for clean routing and API request handling.",
        category: "Backend",
        icon: SiExpress,
        iconClass: "text-gray-900 dark:text-gray-100",
        nameClass: "text-gray-900 dark:text-gray-100",
      },
      {
        name: "MongoDB",
        description: "Document database modeling with indexing and query tuning for performance.",
        category: "Backend",
        icon: SiMongodb,
        iconClass: "text-lime-500 dark:text-lime-300",
        nameClass: "text-lime-900 dark:text-lime-100",
      },
      {
        name: "Mongoose (ODM)",
        description: "Schema-based data modeling for safer persistence and validation rules.",
        category: "Backend",
        icon: SiMongodb,
        iconClass: "text-lime-500 dark:text-lime-300",
        nameClass: "text-lime-900 dark:text-lime-100",
      },
      {
        name: "JWT Authentication",
        description: "Stateless auth with token-based workflows and robust role validation.",
        category: "Architecture",
        icon: FaKey,
        iconClass: "text-amber-400 dark:text-amber-300",
        nameClass: "text-amber-900 dark:text-amber-100",
      },
      {
        name: "REST APIs",
        description: "Resource-based API contracts with consistent response shapes and versioning discipline.",
        category: "Architecture",
        icon: FaPlug,
        iconClass: "text-sky-500 dark:text-sky-300",
        nameClass: "text-sky-900 dark:text-sky-100",
      },
      {
        name: "MVC / Service Layer",
        description: "Separation of concerns with business logic abstractions and clean layering.",
        category: "Architecture",
        icon: FaServer,
        iconClass: "text-violet-500 dark:text-violet-300",
        nameClass: "text-violet-900 dark:text-violet-100",
      },
      {
        name: "Middleware Chains",
        description: "Cross-cutting request handling (validation, auth, errors) via composable middleware.",
        category: "Architecture",
        icon: FaCog,
        iconClass: "text-fuchsia-500 dark:text-fuchsia-300",
        nameClass: "text-fuchsia-900 dark:text-fuchsia-100",
      },
      {
        name: "Environment Configuration",
        description: "Environment-driven configuration with secure defaults and predictable deployment behavior.",
        category: "Architecture",
        icon: FaCog,
        iconClass: "text-teal-500 dark:text-teal-300",
        nameClass: "text-teal-900 dark:text-teal-100",
      },
      {
        name: "Secure Session Handling",
        description: "Security-focused session handling patterns with role-based access control.",
        category: "Architecture",
        icon: FaShieldAlt,
        iconClass: "text-rose-500 dark:text-rose-300",
        nameClass: "text-rose-900 dark:text-rose-100",
      },
    ],
    []
  );

  const [category, setCategory] = useState<"All" | SkillCategory>("All");
  const [query, setQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredSkills = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skills.filter((s) => {
      const matchesCategory = category === "All" || s.category === category;
      const matchesQuery =
        q.length === 0 ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [skills, category, query]);

  const categories: ("All" | SkillCategory)[] = ["All", "Frontend", "Backend", "Architecture"];

  const copySkillName = async (skill: Skill) => {
    try {
      await navigator.clipboard.writeText(skill.name);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.10),transparent_45%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.10),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto min-w-0 px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-8 sm:mb-10">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Skills
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2 max-w-2xl">
              Search and explore the areas I focus on. Click a skill for a quick explanation.
            </p>
          </div>
        </div>

        <div className="mb-8 sm:mb-10">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-[1fr_auto] items-start">
            <div className="min-w-0">
              <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 sm:mb-2">
                Search skills
              </label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try 'React', 'JWT', 'Middleware'..."
                className="w-full min-w-0 px-3 py-2.5 sm:px-4 sm:py-3 bg-white dark:bg-black border border-gray-300 dark:border-white/30 rounded-lg text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors duration-200"
                aria-label="Search skills"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
              {categories.map((c) => {
                const active = category === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={`px-3 py-1.5 rounded-full border text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap ${
                      active
                        ? "bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-black dark:border-white"
                        : "bg-transparent text-gray-700 dark:text-gray-200 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                    aria-pressed={active}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {filteredSkills.length === 0 ? (
          <div className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur px-4 py-10 text-center">
            <div className="text-gray-900 dark:text-white font-bold text-base sm:text-lg">
              No matching skills
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-1">
              Try a different keyword or switch categories.
            </div>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSkills.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={`${s.category}-${s.name}`}
                  type="button"
                  onClick={() => setSelectedSkill(s)}
                  className="group text-left rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur px-4 sm:px-5 py-4 sm:py-5 transition-all duration-200 hover:border-gray-900/60 dark:hover:border-white/30 hover:bg-white/90 dark:hover:bg-black/55"
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-2xl sm:text-3xl ${s.iconClass} transition-transform duration-200 group-hover:scale-[1.04]`}>
                      <Icon />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`font-semibold text-sm sm:text-base ${s.nameClass} leading-tight`}>
                        {s.name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">
                        {s.description}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-mono">
                      {s.category}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      Click →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Dialog
        open={selectedSkill !== null}
        onClose={() => {
          setSelectedSkill(null);
          setCopied(false);
        }}
        maxWidth="sm"
        fullWidth
      >
        {selectedSkill && (
          <>
            <DialogTitle className="!pr-8">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = selectedSkill.icon;
                    return (
                      <div className={`text-3xl ${selectedSkill.iconClass}`}>
                        <Icon />
                      </div>
                    );
                  })()}
                  <div className="min-w-0">
                    <div className={`font-extrabold text-xl sm:text-2xl ${selectedSkill.nameClass} leading-tight`}>
                      {selectedSkill.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono mt-1">
                      {selectedSkill.category}
                    </div>
                  </div>
                </div>

                <TooltipForCopy
                  copied={copied}
                  onCopy={() => copySkillName(selectedSkill)}
                />
              </div>
            </DialogTitle>

            <DialogContent className="!pt-4">
              <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
                {selectedSkill.description}
              </Typography>
              <div className="mt-4 text-sm sm:text-base">
                <Typography variant="subtitle2" sx={{ fontWeight: 900, mb: 1 }}>
                  How I use it
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  I apply this skill to build reliable flows, clean architecture, and production-ready behavior across the stack.
                </Typography>
              </div>
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => {
                  setSelectedSkill(null);
                  setCopied(false);
                }}
                sx={{ textTransform: "none" }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </section>
  );
};

function TooltipForCopy({ copied, onCopy }: { copied: boolean; onCopy: () => void }) {
  // Keep it as a helper component to avoid rerendering dialog layout.
  return (
    <Button
      variant="outlined"
      onClick={onCopy}
      size="small"
      sx={{
        textTransform: "none",
        borderRadius: 2,
        minWidth: 92,
        fontWeight: 900,
      }}
    >
      {copied ? (
        <span className="inline-flex items-center gap-2">
          <FiCheck /> Copied
        </span>
      ) : (
        <span className="inline-flex items-center gap-2">
          <FiCopy /> Copy
        </span>
      )}
    </Button>
  );
}

export default Skills;
