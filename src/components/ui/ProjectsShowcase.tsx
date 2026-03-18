import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { projects as allProjects, type Project } from "../../data/projects";

type ProjectsShowcaseProps = {
  projects?: Project[];
  enableSearch?: boolean;
  enableTypeFilter?: boolean;
  viewAllHref?: string;
  density?: "normal" | "compact";
};

const getTechQueryString = (project: Project) => project.tech.join(" ").toLowerCase();

export default function ProjectsShowcase({
  projects,
  enableSearch = false,
  enableTypeFilter = false,
  density = "normal",
}: ProjectsShowcaseProps) {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");

  const effectiveProjects = projects ?? allProjects;

  const typeOptions = useMemo(() => {
    const unique = Array.from(new Set(effectiveProjects.map((p) => p.type)));
    unique.sort((a, b) => a.localeCompare(b));
    return unique;
  }, [effectiveProjects]);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return effectiveProjects.filter((p) => {
      const matchesQuery =
        q.length === 0 ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q) ||
        getTechQueryString(p).includes(q);

      const matchesType = selectedType === "All" || p.type === selectedType;
      return matchesQuery && matchesType;
    });
  }, [effectiveProjects, query, selectedType]);

  const showTypeFilter = enableSearch || enableTypeFilter;
  const isCompact = density === "compact";
  const clearFilters = () => {
    setQuery("");
    setSelectedType("All");
  };

  return (
    <>
      {showTypeFilter && (
        <div className={isCompact ? "mb-4 sm:mb-6" : "mb-6 sm:mb-8"}>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-[1fr_auto] items-start">
            {enableSearch ? (
              <div className="min-w-0">
                <label className="block text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5 sm:mb-2">
                  Search projects
                </label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try 'Node', 'MongoDB', 'SaaS'..."
                  className="w-full min-w-0 px-3 py-2.5 sm:px-4 sm:py-3 bg-white dark:bg-black border border-gray-300 dark:border-white/30 rounded-lg text-gray-900 dark:text-white text-sm sm:text-base placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors duration-200"
                  aria-label="Search projects"
                />
              </div>
            ) : (
              <div />
            )}

            <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
              <Chip
                label="All"
                clickable
                onClick={() => setSelectedType("All")}
                color={selectedType === "All" ? "primary" : "default"}
                variant={selectedType === "All" ? "filled" : "outlined"}
              />
              {typeOptions.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  clickable
                  onClick={() => setSelectedType(t)}
                  color={selectedType === t ? "primary" : "default"}
                  variant={selectedType === t ? "filled" : "outlined"}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur px-4 py-8 text-center">
          <div className="text-gray-900 dark:text-white font-bold text-base sm:text-lg">
            No matching projects
          </div>
          <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-1">
            Try clearing filters or searching a different keyword.
          </div>
          <div className="mt-4 flex items-center justify-center">
            <Button
              variant="outlined"
              onClick={clearFilters}
              sx={{ textTransform: "none", borderRadius: 2, fontWeight: 800 }}
            >
              Clear filters
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 ${
            isCompact ? "gap-3 sm:gap-4 md:gap-5" : "gap-4 sm:gap-5 md:gap-6"
          }`}
        >
          {filteredProjects.map((project) => (
            <Link to={`/projects/${project.id}`} className="block" key={project.id}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  backgroundImage:
                    "linear-gradient(180deg, rgba(148,163,184,0.12), rgba(0,0,0,0) 55%)",
                  transition:
                    "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                  borderColor: "divider",
                  boxShadow: "none",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 6,
                    borderColor: "text.primary",
                  },
                }}
              >
                <CardContent className="!p-4 sm:!p-5">
                  <div className="flex items-start justify-between gap-3">
                    <Chip
                      size="small"
                      label={project.type}
                      variant="outlined"
                      sx={{ fontWeight: 600 }}
                    />
                  </div>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mt: isCompact ? 1 : 1.25, fontWeight: 800 }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: isCompact ? 1 : 1.25,
                      color: "text.secondary",
                      lineHeight: 1.5,
                    }}
                  >
                    {project.description}
                  </Typography>

                  <div className={(isCompact ? "mt-3" : "mt-4") + " flex flex-wrap gap-2"}>
                    {project.tech.slice(0, 6).map((t) => (
                      <Chip
                        key={t}
                        size="small"
                        label={t}
                        variant="outlined"
                        sx={{ fontWeight: 600 }}
                      />
                    ))}
                  </div>

                  <div
                    className={(isCompact ? "mt-3" : "mt-4") +
                      " flex items-center justify-between gap-3"}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", fontWeight: 800 }}
                    >
                      View details →
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Details are handled via navigation to `/projects/:id` */}
    </>
  );
}

