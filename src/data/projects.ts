export type Project = {
  id: string;
  title: string;
  description: string;
  type: string;
  tech: string[];
  details: {
    problem: string;
    approach: string;
    keyFeatures: string[];
    highlights: string[];
    responsibilities: string[];
  };
};

export const projects: Project[] = [
  {
    id: "payback",
    title: "Payback",
    description:
      "SaaS platform for automated recovery of failed subscription payments",
    type: "SaaS Dashboard",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Service Layer"],
    details: {
      problem:
        "Subscription payments fail due to card expirations, insufficient funds, or provider retries. Manual recovery is slow, expensive, and inconsistent.",
      approach:
        "Build an automated recovery pipeline that ingests payment failures, applies retry windows and idempotency, and exposes an operator dashboard for approvals and exceptions.",
      keyFeatures: [
        "Payment failure ingestion via provider webhooks",
        "Idempotent retry jobs (safe to re-run)",
        "Recovery decisioning with configurable rules",
        "Operator review queue with audit trail",
      ],
      highlights: [
        "Consistent ledger records for each recovery attempt",
        "Secure JWT-protected endpoints and role checks",
        "Background workers for scheduling retries",
      ],
      responsibilities: [
        "Designed service layer boundaries for pipeline stages",
        "Implemented secure token validation and request guards",
        "Added Mongo indexes to keep retries fast at scale",
      ],
    },
  },
  {
    id: "gas-cylinder-delivery",
    title: "Gas Cylinder Delivery System",
    description:
      "Enterprise-level delivery management with inventory tracking and payment processing",
    type: "Backend System",
    tech: ["Node.js", "Express", "MongoDB", "Transactions", "Cron Jobs"],
    details: {
      problem:
        "Deliveries require real-time inventory accuracy, consistent booking state, and reliable payment confirmations. Edge cases (partial deliveries, retries) quickly break naive implementations.",
      approach:
        "Use transactional updates for inventory reservations, track delivery status through a finite workflow, and reconcile payment and delivery states via scheduled jobs.",
      keyFeatures: [
        "Inventory reservation and stock decrement with transactions",
        "Delivery route/status tracking and timeline events",
        "Payment processing with failure retry handling",
        "Scheduled reconciliation for consistency repair",
      ],
      highlights: [
        "Transaction-safe state transitions for deliveries",
        "Background cron jobs for reconciliation",
        "Audit logs for operational visibility",
      ],
      responsibilities: [
        "Implemented stateful workflow transitions in service layer",
        "Built REST APIs for delivery and inventory operations",
        "Optimized queries for reporting and reconciliation",
      ],
    },
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with secure payment integration and admin dashboard",
    type: "Full-Stack Application",
    tech: ["MERN Stack", "Stripe API", "Role-Based Access"],
    details: {
      problem:
        "E-commerce requires secure checkout flows, product catalog performance, and admin tooling for consistent operations. Security mistakes directly impact revenue and trust.",
      approach:
        "Model the domain with clear separation between catalog, cart/checkout, and admin workflows. Use role-based APIs and payment webhooks to keep state accurate.",
      keyFeatures: [
        "Catalog browsing, cart management, and checkout APIs",
        "Stripe checkout + webhook-driven order state updates",
        "Admin dashboard endpoints (products, orders, users)",
        "Role-based access control for protected actions",
      ],
      highlights: [
        "Webhook-first order status handling to reduce edge cases",
        "Secure token validation and authorization middleware",
        "Clean separation between controller and service logic",
      ],
      responsibilities: [
        "Designed API contracts for consistent client integration",
        "Implemented RBAC checks across admin routes",
        "Built robust error handling and logging for payments",
      ],
    },
  },
  {
    id: "taskflow-realtime",
    title: "TaskFlow Realtime",
    description:
      "Realtime task management with live collaboration, activity timelines, and role-based access.",
    type: "Full-Stack Application",
    tech: ["MERN Stack", "WebSockets", "JWT", "MongoDB", "React"],
    details: {
      problem:
        "Teams need fast, reliable collaboration without overwriting each other’s changes. Activity visibility and permissions must stay consistent across clients.",
      approach:
        "Combine REST APIs for persistence with WebSockets for live updates. Use JWT-based authorization and server-side validation for all events.",
      keyFeatures: [
        "Realtime task updates and collaborative activity feed",
        "Event-based activity timelines (create/update/move)",
        "JWT-protected APIs and WebSocket event authorization",
        "Role-based permissions for projects and boards",
      ],
      highlights: [
        "Server-side validation of all incoming socket events",
        "Reduced UI latency by broadcasting incremental changes",
        "Consistent timelines by deriving from persisted state",
      ],
      responsibilities: [
        "Created event-driven workflow and activity schemas",
        "Implemented WebSocket event routing with auth checks",
        "Optimized DB queries for live board rendering",
      ],
    },
  },
  {
    id: "e-learning-portal",
    title: "E-Learning Portal",
    description:
      "Course marketplace with enrollment, progress tracking, and instructor/admin management.",
    type: "SaaS Dashboard",
    tech: ["MERN Stack", "Node.js", "Express", "MongoDB", "Stripe (optional)"],
    details: {
      problem:
        "Managing enrollments, course content, and progress data is complex—progress must remain consistent even when content is reorganized.",
      approach:
        "Separate course content from enrollment and track progress using stable identifiers. Add admin tools for instructors and content curation.",
      keyFeatures: [
        "Enrollment flows with role-based instructor/admin access",
        "Lesson progress tracking and completion states",
        "Progress resilience when courses are updated",
        "Admin endpoints for course and user management",
      ],
      highlights: [
        "Stable progress mapping using lesson identifiers",
        "Secure role-based boundaries for content and enrollment",
        "Clean APIs designed for incremental UI updates",
      ],
      responsibilities: [
        "Modeled course/enrollment/progress schemas",
        "Implemented secure endpoints with authorization middleware",
        "Added validation layers for consistent progress updates",
      ],
    },
  },
  {
    id: "inventory-billing-suite",
    title: "Inventory & Billing Suite",
    description:
      "Inventory + billing system with automated invoices, audit logs, and scheduled reconciliation.",
    type: "Backend System",
    tech: ["Node.js", "Express", "MongoDB", "Scheduled Jobs", "Audit Logging"],
    details: {
      problem:
        "Inventory and billing drift over time if records are updated inconsistently. Reconciliation must be automated and auditable.",
      approach:
        "Treat inventory movements as a source of truth. Generate invoices from those movements and continuously reconcile using scheduled jobs.",
      keyFeatures: [
        "Inventory movement ledger and audit logs",
        "Automated invoice generation from ledger data",
        "Scheduled reconciliation to detect and fix drift",
        "Admin APIs for reporting and corrections",
      ],
      highlights: [
        "Traceable ledger-driven billing",
        "Operational dashboards powered by aggregated queries",
        "Fail-safe reconciliation workflows",
      ],
      responsibilities: [
        "Implemented scheduled jobs for reconciliation cycles",
        "Built endpoints with consistent validation and error handling",
        "Optimized aggregation pipelines for report generation",
      ],
    },
  },
  {
    id: "social-threads",
    title: "Social Threads",
    description:
      "A mini social platform with feeds, comments, likes, and moderation workflows for safe growth.",
    type: "Full-Stack Application",
    tech: ["MERN Stack", "React", "REST APIs", "JWT", "MongoDB"],
    details: {
      problem:
        "A social feed must stay fast under load while supporting moderation, abuse prevention, and consistent “like/comment” state.",
      approach:
        "Use normalized data models for relationships (posts, likes, comments) and protect all actions with JWT authorization. Add moderation queues for review.",
      keyFeatures: [
        "Feeds with pagination and efficient query patterns",
        "Comments and likes with idempotent update logic",
        "Moderation queue for flagged content",
        "Admin endpoints for reviews and actions",
      ],
      highlights: [
        "Pagination-friendly data access for smoother UX",
        "Validation-first routes to keep state consistent",
        "Moderation workflows designed for operational safety",
      ],
      responsibilities: [
        "Designed feed query strategy with indexing",
        "Implemented secure endpoints for user-generated content",
        "Added moderation status fields and admin review APIs",
      ],
    },
  },
  {
    id: "job-board-rbac",
    title: "Job Board (RBAC)",
    description:
      "Hiring portal with recruiter/admin dashboards, applicant pipelines, and secure role-based APIs.",
    type: "SaaS Dashboard",
    tech: ["Node.js", "Express", "MongoDB", "RBAC", "React"],
    details: {
      problem:
        "Recruiting workflows involve multiple roles (applicants, recruiters, admins). APIs must remain secure while supporting pipeline changes.",
      approach:
        "Model pipeline stages explicitly and enforce RBAC on every action. Provide separate dashboards for each role with shared underlying services.",
      keyFeatures: [
        "Job posting management with recruiter workflows",
        "Applicant pipeline stages and actions (secure)",
        "Admin review endpoints for approvals and data cleanup",
        "RBAC-protected API boundaries across roles",
      ],
      highlights: [
        "Explicit pipeline modeling for predictable state",
        "Consistent authorization checks across controllers",
        "API contracts designed for dashboard rendering",
      ],
      responsibilities: [
        "Implemented RBAC middleware and role-aware services",
        "Built pipeline stage transition logic with validation",
        "Optimized Mongo queries for dashboard summaries",
      ],
    },
  },
  {
    id: "analytics-ops",
    title: "Analytics Ops Dashboard",
    description:
      "Operations analytics dashboard with aggregations, filters, and exportable reporting workflows.",
    type: "Full-Stack Application",
    tech: ["MERN Stack", "MongoDB Aggregations", "Charts", "React", "Node.js"],
    details: {
      problem:
        "Operational data becomes hard to interpret without reliable aggregation rules, filter controls, and exportable reports for stakeholders.",
      approach:
        "Provide a chart-friendly aggregation layer and a query interface that supports time ranges and filters while keeping results consistent.",
      keyFeatures: [
        "Aggregation pipelines for KPI computation",
        "Filterable reporting views (time range + categories)",
        "Export-ready report endpoints (CSV-ready outputs)",
        "Dashboard APIs designed for fast chart rendering",
      ],
      highlights: [
        "Consistent aggregation outputs across views",
        "Clear API contracts for front-end chart components",
        "Performance-focused query design",
      ],
      responsibilities: [
        "Implemented aggregation-based KPI services",
        "Created API endpoints for filters and summaries",
        "Added caching-friendly query shapes and validations",
      ],
    },
  },
  {
    id: "booking-service",
    title: "Booking Service",
    description:
      "Appointments/booking system with availability rules, payments, and confirmation flows.",
    type: "Backend System",
    tech: ["Node.js", "Express", "MongoDB", "Payment Integration", "Cron Jobs"],
    details: {
      problem:
        "Booking systems are prone to race conditions (double-booking), inconsistent availability, and payment confirmation edge cases.",
      approach:
        "Use availability rules backed by atomic reservations and confirm bookings using payment provider webhooks. Keep a scheduled reconciliation to fix any drift.",
      keyFeatures: [
        "Availability rules and slot reservation",
        "Payment integration with webhook-driven confirmation",
        "Booking status transitions and timeline events",
        "Cron-based reconciliation for safety repair",
      ],
      highlights: [
        "Atomic slot reservation to reduce double bookings",
        "Webhook-first confirmation for payment accuracy",
        "Operational reconciliation workflows",
      ],
      responsibilities: [
        "Implemented availability + reservation services",
        "Built secure booking and confirmation APIs",
        "Designed idempotent webhook handlers",
      ],
    },
  },
];

export const featuredProjectIds: string[] = ["payback", "gas-cylinder-delivery", "ecommerce-platform"];

export function getProjectsByIds(ids: string[]): Project[] {
  const byId = new Map(projects.map((p) => [p.id, p]));
  return ids.map((id) => byId.get(id)).filter((p): p is Project => Boolean(p));
}

