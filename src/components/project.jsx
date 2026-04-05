// import React from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Github,
//   Lock,
//   Sparkles,
//   Zap,
// } from "lucide-react";

// const headingFont = {
//   fontFamily: '"Baskervville SC", Georgia, serif',
// };

// const bodyFont = {
//   fontFamily: '"Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
// };

// const projects = [
//   {
//     id: 1,
//     title: "Exam Preparation Platform TestifyPro",
//     stack: "MongoDB, Express.js, React.js, Node.js, JWT, REST API",
//     summary:
//       "Full-stack exam platform with JWT authentication, role-based admin and candidate modules, a timed MCQ engine, question navigation, mark-for-review, and auto-submit on timeout.",
//     highlight: "150-question engine with analytics, scheduling, leaderboards, and attempt history.",
//     image: "/Incidence.jpg",
//     github: "",
//     demo: "https://testifypro.online",
//     ctaLabel: "Visit Project",
//     accent: "from-emerald-400 via-green-500 to-teal-400",
//     surface: "from-[#101914] via-[#16241b] to-[#0d140f]",
//   },
//   {
//     id: 2,
//     title: "CRM and HRMS Platform",
//     stack: "MongoDB, Express.js, React.js, Node.js, Socket.IO, Gemini API",
//     summary:
//       "CRM and HRMS suite for client management, leads, employee records, payroll, attendance, and task workflows with real-time notifications.",
//     highlight: "Gemini-assisted drafting and analytics dashboards for internal operations.",
//     image: "/CRM.jpg",
//     github: "",
//     demo: "",
//     ctaLabel: "Internal Deployment",
//     accent: "from-lime-300 via-emerald-400 to-green-500",
//     surface: "from-[#131b12] via-[#1a2617] to-[#0f160e]",
//   },
//   {
//     id: 3,
//     title: "Smart Inventory Management System",
//     stack: "MongoDB, Express.js, React.js, Node.js, JWT",
//     summary:
//       "Inventory system for SMEs covering stock tracking, order processing, transaction monitoring, and sales analytics.",
//     highlight: "AI-assisted demand forecasting with responsive operational dashboards for faster decisions.",
//     image: "/E-commerce.png",
//     github: "",
//     demo: "https://frontend-smart-inventory-management.vercel.app",
//     ctaLabel: "Open Demo",
//     accent: "from-cyan-400 via-sky-400 to-emerald-400",
//     surface: "from-[#0d1517] via-[#102224] to-[#0b1315]",
//   },
//   {
//     id: 4,
//     title: "PlagCheck Plagiarism Detection Platform",
//     stack: "Django, React.js, MongoDB, REST API",
//     summary:
//       "Plagiarism detection app with private document indexing and repository-specific similarity scoring for more accurate comparisons.",
//     highlight: "Detailed scan history, report generation, and stronger authentication reliability.",
//     image: "/Disease.jpg",
//     github: "",
//     demo: "https://plagcheck-one.vercel.app",
//     ctaLabel: "Open Demo",
//     accent: "from-amber-300 via-orange-400 to-rose-400",
//     surface: "from-[#1a1511] via-[#251a14] to-[#140f0b]",
//   },
//   {
//     id: 5,
//     title: "Symbolic RAG Diabetes Assistant",
//     stack: "Flask, ChromaDB, SentenceTransformers, Gemini API, NLP",
//     summary:
//       "Citation-backed diabetes education assistant using vector search, semantic chunking, PDF ingestion, embeddings, and retrieval-augmented generation.",
//     highlight: "Rule-based safety filters added to validate clinical output before display.",
//     image: "/EngageAI.jpg",
//     github: "",
//     demo: "",
//     ctaLabel: "Research Prototype",
//     accent: "from-fuchsia-400 via-violet-400 to-sky-400",
//     surface: "from-[#17111d] via-[#1e1526] to-[#110d16]",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="relative overflow-hidden bg-[#060a07] px-5 py-20 sm:px-6 lg:px-8">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_42%)]" />
//       <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
//       <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto mb-14 max-w-3xl text-center"
//         >
//           <span
//             style={bodyFont}
//             className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300"
//           >
//             <Sparkles className="h-4 w-4" />
//             Selected Work
//           </span>
//           <h2
//             style={headingFont}
//             className="mt-6 text-4xl uppercase leading-none text-white sm:text-5xl lg:text-6xl"
//           >
//             Projects Built
//             <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-300 bg-clip-text text-transparent">
//               For Real Use
//             </span>
//           </h2>
//           <p
//             style={bodyFont}
//             className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base"
//           >
//             A sharper presentation of full-stack products across education,
//             operations, inventory, plagiarism detection, and retrieval-augmented
//             AI systems.
//           </p>
//         </motion.div>

//         <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
//           {projects.map((project, index) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               index={index}
//               featured={index < 2}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ProjectCard = ({ project, index, featured }) => {
//   const linkIcon = project.demo ? (
//     <ArrowUpRight className="h-4 w-4" />
//   ) : (
//     <Lock className="h-4 w-4" />
//   );

//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.55, delay: index * 0.08 }}
//       className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br ${project.surface} shadow-[0_24px_80px_rgba(0,0,0,0.35)] ${
//         featured ? "xl:col-span-3" : "xl:col-span-2"
//       }`}
//     >
//       <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
//         <div
//           className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`}
//         />
//         <div className="absolute -right-16 top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
//       </div>

//       <div className="relative">
//         <div className="relative h-56 overflow-hidden sm:h-64">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
//           <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-2 backdrop-blur-md">
//             <Zap className="h-4 w-4 text-emerald-300" />
//             <span
//               style={bodyFont}
//               className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80"
//             >
//               Case Study
//             </span>
//           </div>
//         </div>

//         <div className="relative px-5 pb-6 pt-5 sm:px-6">
//           <div className="flex flex-wrap items-start justify-between gap-3">
//             <span
//               style={bodyFont}
//               className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
//             >
//               {project.stack}
//             </span>
//             <a
//               href={project.demo || "#"}
//               target={project.demo ? "_blank" : undefined}
//               rel={project.demo ? "noopener noreferrer" : undefined}
//               style={bodyFont}
//               className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
//                 project.demo
//                   ? "bg-white text-slate-900 hover:bg-emerald-300"
//                   : "cursor-default border border-white/10 bg-white/5 text-white/55"
//               }`}
//             >
//               {project.ctaLabel}
//               {linkIcon}
//             </a>
//           </div>

//           <h3
//             style={headingFont}
//             className="mt-5 text-2xl uppercase leading-tight text-white sm:text-[2rem]"
//           >
//             {project.title}
//           </h3>

//           <p
//             style={bodyFont}
//             className="mt-4 text-sm leading-7 text-slate-200/90 sm:text-[15px]"
//           >
//             {project.summary}
//           </p>

//           <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 p-4">
//             <p
//               style={bodyFont}
//               className="text-sm font-medium leading-6 text-slate-100"
//             >
//               {project.highlight}
//             </p>
//           </div>

//           {project.github ? (
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={bodyFont}
//               className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-white"
//             >
//               <Github className="h-4 w-4" />
//               Source Code
//             </a>
//           ) : null}
//         </div>
//       </div>
//     </motion.article>
//   );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock, Sparkles, Zap, ExternalLink } from "lucide-react";

const headingFont = {
  fontFamily: '"Baskervville SC", Georgia, serif',
};

const bodyFont = {
  fontFamily: '"Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
};

const projects = [
  {
    id: 1,
    title: "Exam Preparation Platform TestifyPro",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST API"],
    summary:
      "Full-stack exam platform with JWT authentication, role-based admin and candidate modules, a timed MCQ engine, question navigation, mark-for-review, and auto-submit on timeout.",
    highlight: "150-question engine with analytics, scheduling, leaderboards, and attempt history.",
    image: "/Incidence.jpg",
    demo: "https://testifypro.online",
    ctaLabel: "Visit Project",
    accent: "from-emerald-400 via-green-500 to-teal-400",
    accentSolid: "#34d399",
    surface: "from-[#101914] via-[#16241b] to-[#0d140f]",
    number: "01",
  },
  {
    id: 2,
    title: "CRM and HRMS Platform",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Gemini API"],
    summary:
      "CRM and HRMS suite for client management, leads, employee records, payroll, attendance, and task workflows with real-time notifications.",
    highlight: "Gemini-assisted drafting and analytics dashboards for internal operations.",
    image: "/CRM.jpg",
    demo: "",
    ctaLabel: "Internal Deployment",
    accent: "from-lime-300 via-emerald-400 to-green-500",
    accentSolid: "#a3e635",
    surface: "from-[#131b12] via-[#1a2617] to-[#0f160e]",
    number: "02",
  },
  {
    id: 3,
    title: "Smart Inventory Management",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    summary:
      "Inventory system for SMEs covering stock tracking, order processing, transaction monitoring, and sales analytics.",
    highlight: "AI-assisted demand forecasting with responsive operational dashboards.",
    image: "/E-commerce.png",
    demo: "https://frontend-smart-inventory-management.vercel.app",
    ctaLabel: "Open Demo",
    accent: "from-cyan-400 via-sky-400 to-emerald-400",
    accentSolid: "#22d3ee",
    surface: "from-[#0d1517] via-[#102224] to-[#0b1315]",
    number: "03",
  },
  {
    id: 4,
    title: "PlagCheck Plagiarism Detection",
    stack: ["Django", "React.js", "MongoDB", "REST API"],
    summary:
      "Plagiarism detection app with private document indexing and repository-specific similarity scoring for more accurate comparisons.",
    highlight: "Detailed scan history, report generation, and stronger authentication reliability.",
    image: "/Disease.jpg",
    demo: "https://plagcheck-one.vercel.app",
    ctaLabel: "Open Demo",
    accent: "from-amber-300 via-orange-400 to-rose-400",
    accentSolid: "#fb923c",
    surface: "from-[#1a1511] via-[#251a14] to-[#140f0b]",
    number: "04",
  },
  {
    id: 5,
    title: "Symbolic RAG Diabetes Assistant",
    stack: ["Flask", "ChromaDB", "SentenceTransformers", "Gemini API", "NLP"],
    summary:
      "Citation-backed diabetes education assistant using vector search, semantic chunking, PDF ingestion, embeddings, and retrieval-augmented generation.",
    highlight: "Rule-based safety filters validate clinical output before display.",
    image: "/EngageAI.jpg",
    demo: "",
    ctaLabel: "Research Prototype",
    accent: "from-fuchsia-400 via-violet-400 to-sky-400",
    accentSolid: "#c084fc",
    surface: "from-[#17111d] via-[#1e1526] to-[#110d16]",
    number: "05",
  },
  {
    id: 6,
    title: "Activewear Ecommerce App",
    stack: ["MongoDB", "Express.js", "React Native", "Node.js", "MERN"],
    summary:
      "Mobile-first ecommerce application for activewear shopping with product browsing, category discovery, cart flows, and streamlined checkout.",
    highlight: "Built with a MERN backend and React Native frontend to deliver a smooth shopping experience on mobile devices.",
    image: "/Activewear.png",
    demo: "",
    ctaLabel: "App Project",
    accent: "from-rose-300 via-pink-400 to-orange-400",
    accentSolid: "#fb7185",
    surface: "from-[#1a1013] via-[#241419] to-[#120b0d]",
    number: "06",
  },
];

const Projects = () => {
  return (
    <section className="relative overflow-hidden bg-[#060a07] px-5 py-24 sm:px-6 lg:px-8">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/8 blur-[100px]" />
        <div className="absolute left-0 top-1/2 h-64 w-64 rounded-full bg-green-400/8 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "radial-gradient(circle, #34d399 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span
            style={bodyFont}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Selected Work
          </span>

          <h2
            style={headingFont}
            className="mt-6 text-5xl uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Projects Built
            <span className="block bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-300 bg-clip-text text-transparent">
              For Real Use
            </span>
          </h2>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <div className="h-px w-32 bg-gradient-to-r from-emerald-400/50 to-cyan-400/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-r from-cyan-400/50 to-transparent" />
          </div>

          <p
            style={bodyFont}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
          >
            Full-stack products across education, operations, inventory,
            plagiarism detection, and retrieval-augmented AI systems.
          </p>
        </motion.div>

        {/* ── 3-column grid ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={bodyFont}
          className="mt-12 text-center text-xs uppercase tracking-[0.3em] text-slate-600"
        >
          {projects.length} Projects &nbsp;·&nbsp; More coming soon
        </motion.p>
      </div>
    </section>
  );
};

/* ── Project Card ── */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col overflow-hidden rounded-[22px] border border-white/[0.08] bg-gradient-to-br ${project.surface} shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-shadow duration-500 hover:shadow-[0_32px_80px_rgba(0,0,0,0.55)]`}
    >
      {/* Top accent bar */}
      <div
        className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      {/* Glow orb top-right */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[60px] opacity-0 transition-opacity duration-700 group-hover:opacity-35"
        style={{ background: project.accentSolid }}
      />

      {/* ── Image ── */}
      <div className="relative h-52 flex-shrink-0 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Number watermark */}
        <span
          style={{ ...headingFont, color: project.accentSolid }}
          className="absolute bottom-3 right-4 select-none text-6xl font-bold leading-none opacity-[0.18] transition-opacity duration-500 group-hover:opacity-30"
        >
          {project.number}
        </span>

        {/* Badge */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 backdrop-blur-md">
          <Zap className="h-3 w-3 text-emerald-300" />
          <span
            style={bodyFont}
            className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80"
          >
            Case Study
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              style={bodyFont}
              className="rounded-full border border-white/8 bg-white/5 px-2.5 py-[3px] text-[10px] font-medium text-slate-400 transition-colors group-hover:border-white/15 group-hover:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span
              style={bodyFont}
              className="rounded-full border border-white/8 bg-white/5 px-2.5 py-[3px] text-[10px] font-medium text-slate-500"
            >
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          style={headingFont}
          className="mt-4 text-[1.25rem] uppercase leading-tight text-white sm:text-[1.35rem]"
        >
          {project.title}
        </h3>

        {/* Summary */}
        <p
          style={bodyFont}
          className="mt-3 flex-1 text-[13px] leading-[1.8] text-slate-400"
        >
          {project.summary}
        </p>

        {/* Highlight box */}
        <div
          className="mt-4 rounded-xl border border-white/6 bg-black/25 px-4 py-3"
          style={{ borderLeftColor: project.accentSolid, borderLeftWidth: "2px" }}
        >
          <p style={bodyFont} className="text-[12px] font-medium leading-[1.65] text-slate-200">
            {project.highlight}
          </p>
        </div>

        {/* CTA row */}
        <div className="mt-5 flex items-center justify-between">
          <a
            href={project.demo || "#"}
            target={project.demo ? "_blank" : undefined}
            rel={project.demo ? "noopener noreferrer" : undefined}
            style={bodyFont}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
              project.demo
                ? "bg-white text-slate-900 hover:bg-emerald-300 hover:shadow-[0_0_18px_rgba(52,211,153,0.35)]"
                : "cursor-default border border-white/10 bg-white/5 text-white/35"
            }`}
          >
            {project.demo ? <ExternalLink className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
            {project.ctaLabel}
            {project.demo && <ArrowUpRight className="h-3 w-3" />}
          </a>

          {/* Accent dot indicator */}
          <div
            className="h-2 w-2 rounded-full opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125"
            style={{ background: project.accentSolid, boxShadow: `0 0 8px ${project.accentSolid}` }}
          />
        </div>
      </div>

      {/* Corner shine */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at bottom right, ${project.accentSolid}18, transparent 70%)`,
        }}
      />
    </motion.article>
  );
};

export default Projects;
