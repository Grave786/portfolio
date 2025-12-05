// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Github, Zap } from "lucide-react";

// const projects = [
//   {
//     id: 1,
//     title: "Incidence Management System",
//     category: "Full Stack",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
//     github: "#",
//     demo: "#"
//   },
//   {
//     id: 2,
//     title: "Chatbot for UK National Trains",
//     category: "AI/ML",
//     image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=1000&auto=format&fit=crop",
//     github: "#",
//     demo: "#"
//   },
//   {
//     id: 3,
//     title: "Disease Prediction Website",
//     category: "Healthcare",
//     image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
//     github: "#",
//     demo: "#"
//   },
//   {
//     id: 4,
//     title: "Job Recommendation System",
//     category: "Full Stack",
//     image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop",
//     github: "#",
//     demo: "#"
//   },
//   {
//     id: 5,
//     title: "Engage AI Dashboard",
//     category: "AI/ML",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
//     github: "#",
//     demo: "#"
//   },
//   {
//     id: 6,
//     title: "E-commerce Platform",
//     category: "Full Stack",
//     image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
//     github: "#",
//     demo: "#"
//   }
// ];

// const ProjectCard = ({ project, index }) => {
//   return (
//     <motion.div
//       className="group min-w-[300px] md:min-w-[350px] flex-shrink-0"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:border-[#22C55E]/30 transition-all duration-300">
//         {/* Image Container */}
//         <div className="relative h-48 overflow-hidden">
//           <motion.img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover"
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.4 }}
//           />
          
//           {/* Hover Overlay */}
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C]/80 via-transparent to-transparent flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100"
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.button
//               className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-[#22C55E] hover:text-white transition-colors duration-300 shadow-lg"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Github className="w-5 h-5" />
//             </motion.button>
//             <motion.button
//               className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-[#22C55E] hover:text-white transition-colors duration-300 shadow-lg"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <ExternalLink className="w-5 h-5" />
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <div className="flex items-center gap-2 mb-3">
//             <Zap className="w-4 h-4 text-[#22C55E]" />
//             <span className="text-sm font-medium text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full">
//               {project.category}
//             </span>
//           </div>
//           <h3 className="text-xl font-bold text-[#F4F4F5] mb-2 group-hover:text-[#22C55E] transition-colors duration-300">
//             {project.title}
//           </h3>
//           <div className="h-1 w-0 bg-gradient-to-r from-purple-600 to-teal-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Projects = () => {
//   const scrollRef = useRef(null);
//   const duplicatedProjects = [...projects, ...projects];

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollAmount = 0;
//     const scrollSpeed = 1;

//     const autoScroll = () => {
//       scrollAmount += scrollSpeed;
//       if (scrollContainer) {
//         scrollContainer.scrollLeft = scrollAmount;
        
//         // Reset scroll when we've scrolled through all original items
//         if (scrollAmount >= scrollContainer.scrollWidth / 2) {
//           scrollAmount = 0;
//         }
//       }
//     };

//     const intervalId = setInterval(autoScroll, 30);

//     // Pause auto-scroll on hover
//     const handleMouseEnter = () => clearInterval(intervalId);
//     const handleMouseLeave = () => {
//       const newIntervalId = setInterval(autoScroll, 30);
//       return newIntervalId;
//     };

//     scrollContainer.addEventListener('mouseenter', handleMouseEnter);
//     scrollContainer.addEventListener('mouseleave', () => {
//       clearInterval(intervalId);
//       const newIntervalId = setInterval(autoScroll, 30);
//     });

//     return () => {
//       clearInterval(intervalId);
//       if (scrollContainer) {
//         scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
//         scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
//       }
//     };
//   }, []);

//   return (
//     <section className="relative py-20 px-6 bg-gradient-to-br from-[#0B0F0C] via-[#1F2E1D] to-[#0B0F0C] overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent)] pointer-events-none"></div>
//       <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-600/20 to-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#22C55E]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h2
//             className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-[#22C55E] to-teal-500 mb-4"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Featured Projects
//           </motion.h2>
//           <motion.p
//             className="text-[#6B7280] text-lg max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Explore my latest work showcasing innovative solutions and cutting-edge technologies
//           </motion.p>
//         </motion.div>

//         {/* Carousel Container */}
//         <motion.div
//           ref={scrollRef}
//           className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           drag="x"
//           dragConstraints={{ left: -2000, right: 0 }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           {duplicatedProjects.map((project, index) => (
//             <ProjectCard 
//               key={`${project.id}-${Math.floor(index / projects.length)}`} 
//               project={project} 
//               index={index % projects.length} 
//             />
//           ))}
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           className="flex justify-center mt-12"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <div className="flex items-center gap-2 text-[#6B7280] text-sm">
//             <motion.div
//               className="w-2 h-2 bg-[#22C55E] rounded-full"
//               animate={{ scale: [1, 1.5, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             ></motion.div>
//             <span>Drag to explore • Auto-scrolling</span>
//           </div>
//         </motion.div>
//       </div>

//       <style jsx>{`
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Projects;
// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { ExternalLink, Github, Zap } from "lucide-react";

// // Updated with local images + descriptions + overlay option A
// const projects = [
//   {
//     id: 1,
//     title: "Incidence Management System",
//     category: "Full Stack",
//     description:
//       "A system for managing, tracking, and resolving incidents using structured workflows.",
//     image: "/Incidence.jpg",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 2,
//     title: "Chatbot for UK National Trains",
//     category: "AI/ML",
//     description:
//       "An AI chatbot providing real‑time train info and automated support.",
//     image: "/Chatbot.jpg",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 3,
//     title: "Disease Prediction Website",
//     category: "Healthcare",
//     description:
//       "A prediction system using ML models to identify diseases with accuracy.",
//     image: "/Disease.jpg",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 4,
//     title: "Job Recommendation System",
//     category: "Full Stack",
//     description:
//       "ML‑powered job recommendation engine with customizable filters.",
//     image: "/Job.jpg",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 5,
//     title: "Engage AI Dashboard",
//     category: "AI/ML",
//     description:
//       "Interactive dashboard tracking engagement metrics in real time.",
//     image: "/EngageAI.jpg",
//     github: "#",
//     demo: "#",
//   },
//   {
//     id: 6,
//     title: "E‑commerce Platform",
//     category: "Full Stack",
//     description:
//       "Complete e‑commerce system with cart, checkout, and admin tools.",
//     image: "/E-commerce.png",
//     github: "#",
//     demo: "#",
//   },
// ];

// // Single‑scroll‑only auto‑scroll
// const Projects = () => {
//   const scrollRef = useRef(null);
//   const [autoScrolled, setAutoScrolled] = useState(false);

//   useEffect(() => {
//     if (autoScrolled) return;
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollAmount = 0;
//     const scrollSpeed = 1;

//     const interval = setInterval(() => {
//       scrollAmount += scrollSpeed;
//       scrollContainer.scrollLeft = scrollAmount;

//       if (scrollAmount >= 350) {
//         clearInterval(interval);
//         setAutoScrolled(true);
//       }
//     }, 10);

//     return () => clearInterval(interval);
//   }, [autoScrolled]);

//   return (
//     <section className="relative py-20 px-6 bg-gradient-to-br from-[#0B0F0C] via-[#1F2E1D] to-[#0B0F0C] overflow-hidden">
//       <div className="relative max-w-7xl mx-auto">
//         <motion.h2
//           className="text-center text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-[#22C55E] to-teal-500 mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           Featured Projects
//         </motion.h2>

//         <div
//           ref={scrollRef}
//           className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
//         >
//           {projects.map((project, index) => (
//             <ProjectCard key={project.id} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const ProjectCard = ({ project, index }) => {
//   return (
//     <motion.div
//       className="group min-w-[300px] md:min-w-[350px] flex-shrink-0"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       whileHover={{ y: -5 }}
//     >
//       <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:border-[#22C55E]/30 transition-all duration-300">
//         {/* Image + Overlay */}
//         <div className="relative h-48 overflow-hidden">
//           <motion.img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover"
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.4 }}
//           />

//           {/* Overlay (Option A) */}
//           <motion.div
//             className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4"
//           >
//             <p className="text-gray-200 text-sm mb-4">
//               {project.description}
//             </p>
            
//           </motion.div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           <div className="flex items-center gap-2 mb-3">
//             <Zap className="w-4 h-4 text-[#22C55E]" />
//             <span className="text-sm font-medium text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full">
//               {project.category}
//             </span>
//           </div>
//           <h3 className="text-xl font-bold text-[#F4F4F5] mb-2 group-hover:text-[#22C55E] transition-colors duration-300">
//             {project.title}
//           </h3>
//           <div className="h-1 w-0 bg-gradient-to-r from-purple-600 to-teal-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Projects;

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Zap } from "lucide-react";

// Updated with local images + descriptions + overlay option A
const projects = [
  {
    id: 1,
    title: "Incidence Management System",
    category: "Full Stack",
    description:
      "A system for managing, tracking, and resolving incidents using structured workflows.",
    image: "/Incidence.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Chatbot for UK National Trains",
    category: "AI/ML",
    description:
      "An AI chatbot providing real‑time train info and automated support.",
    image: "/Chatbot.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Disease Prediction Website",
    category: "Healthcare",
    description:
      "A prediction system using ML models to identify diseases with accuracy.",
    image: "/Disease.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Job Recommendation System",
    category: "Full Stack",
    description:
      "ML‑powered job recommendation engine with customizable filters.",
    image: "/EngageAI.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Engage AI Dashboard",
    category: "AI/ML",
    description:
      "Interactive dashboard tracking engagement metrics in real time.",
    image: "/EngageAI.jpg",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "E‑commerce Platform",
    category: "Full Stack",
    description:
      "Complete e‑commerce system with cart, checkout, and admin tools.",
    image: "/E-commerce.png",
    github: "#",
    demo: "#",
  },
];

// Single‑scroll‑only auto‑scroll
const Projects = () => {
  const scrollRef = useRef(null);
  const [autoScrolled, setAutoScrolled] = useState(false);

  useEffect(() => {
    if (autoScrolled) return;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const interval = setInterval(() => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      if (scrollAmount >= 350) {
        clearInterval(interval);
        setAutoScrolled(true);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [autoScrolled]);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#0B0F0C] via-[#1F2E1D] to-[#0B0F0C] overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-[#22C55E] to-teal-500 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h2>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="group min-w-[300px] md:min-w-[350px] flex-shrink-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-full bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/20 hover:border-[#22C55E]/30 transition-all duration-300">
        {/* Image + Overlay */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Overlay (Option A) */}
          <motion.div
            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4"
          >
            <p className="text-gray-200 text-sm mb-4">{project.description}</p>
            <div className="flex gap-4 mt-2">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#22C55E] transition">
                <Github className="w-5 h-5" />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#22C55E] transition">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-[#22C55E]" />
            <span className="text-sm font-medium text-[#22C55E] bg-[#22C55E]/10 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#F4F4F5] mb-2 group-hover:text-[#22C55E] transition-colors duration-300">
            {project.title}
          </h3>
          <div className="h-1 w-0 bg-gradient-to-r from-purple-600 to-teal-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
