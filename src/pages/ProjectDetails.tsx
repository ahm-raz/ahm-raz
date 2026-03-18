import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = useMemo(() => projects.find((p) => p.id === id) ?? null, [id]);

  useEffect(() => {
    document.title = project ? `${project.title} | ahm-raz` : "Project | ahm-raz";
  }, [project]);

  if (!project) {
    return (
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 relative overflow-hidden min-w-0">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200/60 dark:border-white/10 px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
              ← Back to Projects
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-6">
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              Project not found
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.6 }}>
              The project id in the URL doesn’t match any entry.
            </Typography>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24 relative overflow-hidden min-w-0">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200/60 dark:border-white/10 px-3 py-2 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
          >
            ← Back to Projects
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <Chip label={project.type} variant="outlined" />
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono">
              {project.id}
            </span>
          </div>

          <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            {project.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-6">
              <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                Problem
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>
                {project.details.problem}
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 900, mt: 3 }}>
                Approach / Solution
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>
                {project.details.approach}
              </Typography>
            </div>

            <div className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-6">
              <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                Key Features
              </Typography>
              <ul className="mt-2 space-y-2 list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-200">
                {project.details.keyFeatures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <Typography variant="subtitle2" sx={{ fontWeight: 900, mt: 3 }}>
                Highlights
              </Typography>
              <ul className="mt-2 space-y-2 list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-200">
                {project.details.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-6">
              <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                Responsibilities (Sample)
              </Typography>
              <ul className="mt-2 space-y-2 list-disc list-inside text-sm sm:text-base text-gray-700 dark:text-gray-200">
                {project.details.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-6">
              <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                Tech Stack
              </Typography>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Chip key={t} label={t} variant="outlined" sx={{ fontWeight: 600 }} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur p-6">
              <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>
                Next Step
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.7 }}>
                Want to see more projects like this? Browse the full list and search by keywords.
              </Typography>
              <div className="mt-4">
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  sx={{ textTransform: "none", borderRadius: 2, fontWeight: 900 }}
                >
                  Back to Projects
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

