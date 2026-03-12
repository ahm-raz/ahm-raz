import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const PROJECTS_PER_PAGE = 3;
const LEFT_ROTATE_Y = 25;
const RIGHT_ROTATE_Y = -25;
const SIDE_SCALE = 0.92;
const CENTER_SCALE = 1.05;
const SIDE_OFFSET_PX = 40;
const OVERLAP_MARGIN = 56;
const PERSPECTIVE_PX = 1200;
const CENTER_TRANSLATE_Z = 24;

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

const ProjectCard = ({
  project,
  style,
  className,
}: {
  project: (typeof featuredProjects)[0];
  style: React.CSSProperties;
  className?: string;
}) => (
  <div className={className} style={style}>
    <div
      className="h-full bg-black/40 border border-white/10 rounded-lg p-6 hover:border-[#00ff00]/30 transition-all duration-300 hover:bg-black/60 group"
      style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
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
      <p className="text-gray-500 text-xs mb-4 font-mono">{project.tech}</p>
      <Link
        to="/projects"
        className="inline-block text-sm text-white hover:text-[#00ff00] transition-colors font-medium"
      >
        View Details →
      </Link>
    </div>
  </div>
);

const FeaturedProjects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const initialScrollDone = useRef(false);
  const [slideWidth, setSlideWidth] = useState(400);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(featuredProjects.length / PROJECTS_PER_PAGE);
  const totalSlides = totalPages * 3;
  const middleStart = totalPages * slideWidth;

  const getProjectsForPage = useCallback(
    (pageIndex: number) =>
      [0, 1, 2].map((i) =>
        featuredProjects[(pageIndex * PROJECTS_PER_PAGE + i) % featuredProjects.length]
      ),
    []
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const updateWidth = () => setSlideWidth(el.clientWidth);
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || slideWidth <= 0 || initialScrollDone.current) return;
    initialScrollDone.current = true;
    el.scrollLeft = middleStart;
  }, [slideWidth, middleStart]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const left = el.scrollLeft;
    const w = slideWidth;
    const copyWidth = totalPages * w;
    const normalizedInCopy = ((left % copyWidth) + copyWidth) % copyWidth;

    if (left < 1) {
      el.scrollLeft = copyWidth + normalizedInCopy;
      return;
    }
    if (left > copyWidth * 2 - 1) {
      el.scrollLeft = copyWidth + normalizedInCopy;
      return;
    }

    const positionInMiddle = left - copyWidth;
    const page = Math.round(positionInMiddle / w) % totalPages;
    setCurrentPage(((page % totalPages) + totalPages) % totalPages);
  }, [slideWidth, totalPages]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const goToPage = useCallback(
    (page: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const p = ((page % totalPages) + totalPages) % totalPages;
      const targetScroll = middleStart + p * slideWidth;
      el.scrollTo({ left: targetScroll, behavior: "smooth" });
    },
    [middleStart, slideWidth, totalPages]
  );

  const cardTransforms = [
    {
      transform: `translateX(-${SIDE_OFFSET_PX}px) rotateY(${LEFT_ROTATE_Y}deg) scale(${SIDE_SCALE})`,
      zIndex: 0,
      marginRight: -OVERLAP_MARGIN,
    },
    {
      transform: `translateZ(${CENTER_TRANSLATE_Z}px) rotateY(0deg) scale(${CENTER_SCALE})`,
      zIndex: 10,
      marginLeft: -OVERLAP_MARGIN / 2,
      marginRight: -OVERLAP_MARGIN / 2,
    },
    {
      transform: `translateX(${SIDE_OFFSET_PX}px) rotateY(${RIGHT_ROTATE_Y}deg) scale(${SIDE_SCALE})`,
      zIndex: 0,
      marginLeft: -OVERLAP_MARGIN,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Featured Projects
        </h2>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth min-h-[340px] [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const pageIndex = slideIndex % totalPages;
            const projects = getProjectsForPage(pageIndex);
            return (
              <div
                key={slideIndex}
                className="flex-shrink-0 flex justify-center items-center snap-center"
                style={{
                  width: slideWidth,
                  minWidth: slideWidth,
                  perspective: PERSPECTIVE_PX,
                  perspectiveOrigin: "50% 50%",
                }}
              >
                <div
                  className="flex justify-center items-center w-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {projects.map((project, cardIndex) => (
                    <ProjectCard
                      key={`${slideIndex}-${cardIndex}`}
                      project={project}
                      className="flex-shrink-0 w-[260px] max-w-[260px] transition-transform duration-300 ease-out origin-center"
                      style={{
                        ...cardTransforms[cardIndex],
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentPage
                  ? "bg-[#00ff00] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to page ${i + 1}`}
              aria-current={i === currentPage ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
