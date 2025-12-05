// import React, { useEffect, useRef, useState } from 'react';
// import { Calendar, ArrowRight, Tag } from 'lucide-react';

// const BlogPage = () => {
//   const [visibleCards, setVisibleCards] = useState([]);
//   const cardRefs = useRef([]);

//   const blogs = [
//     {
//       id: 1,
//       title: "Why AI Will Change the Future of Web Development",
//       category: "Artificial Intelligence",
//       description: "Exploring how AI-powered tools are revolutionizing the way we build, deploy, and optimize modern web applications.",
//       date: "Dec 1, 2024",
//       image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
//       direction: "left"
//     },
//     {
//       id: 2,
//       title: "Improving UI/UX with Modern Animation Techniques",
//       category: "Design",
//       description: "Discover cutting-edge animation patterns that enhance user experience and create memorable digital interactions.",
//       date: "Nov 28, 2024",
//       image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
//       direction: "right"
//     },
//     {
//       id: 3,
//       title: "Building Scalable Backends Using Node & MongoDB",
//       category: "Backend Development",
//       description: "A comprehensive guide to architecting robust, scalable server-side applications with Node.js and MongoDB.",
//       date: "Nov 25, 2024",
//       image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
//       direction: "left"
//     },
//     {
//       id: 4,
//       title: "How Machine Learning Enhances Recommendation Systems",
//       category: "Machine Learning",
//       description: "Deep dive into ML algorithms that power personalized recommendations and improve user engagement.",
//       date: "Nov 22, 2024",
//       image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
//       direction: "right"
//     }
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = cardRefs.current.indexOf(entry.target);
//             if (index !== -1 && !visibleCards.includes(index)) {
//               setVisibleCards(prev => [...prev, index]);
//             }
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, [visibleCards]);

//   return (
//     <div className="min-h-screen bg-[#0B0F0C] relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #22C55E 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }}></div>
//       </div>

//       {/* Gradient Orbs */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-[#22C55E] rounded-full blur-[120px] opacity-10"></div>
//       <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#22C55E] rounded-full blur-[120px] opacity-10"></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
//         {/* Header Section */}
//         <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#F4F4F5] via-[#22C55E] to-[#F4F4F5] bg-clip-text text-transparent animate-pulse" style={{
//             backgroundSize: '200% auto',
//             animation: 'gradient 3s linear infinite'
//           }}>
//             Latest Blogs & Articles
//           </h1>
//           <p className="text-[#6B7280] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
//             Insights, tutorials, and thoughts on web development, AI, and modern technology
//           </p>

//           {/* Divider */}
//           <div className="mt-8 flex items-center justify-center gap-4">
//             <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#22C55E]"></div>
//             <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></div>
//             <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#22C55E]"></div>
//           </div>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
//           {blogs.map((blog, index) => (
//             <div
//               key={blog.id}
//               ref={el => cardRefs.current[index] = el}
//               className={`group relative transition-all duration-700 ${
//                 visibleCards.includes(index)
//                   ? 'opacity-100 translate-x-0'
//                   : blog.direction === 'left'
//                   ? 'opacity-0 -translate-x-12'
//                   : 'opacity-0 translate-x-12'
//               }`}
//               style={{ transitionDelay: `${index * 150}ms` }}
//             >
//               {/* Card */}
//               <div className="relative h-full bg-[#1F2E1D] bg-opacity-40 backdrop-blur-lg rounded-2xl overflow-hidden border border-[#22C55E] border-opacity-20 hover:border-opacity-60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#22C55E]/20">
//                 {/* Image Container */}
//                 <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-transparent to-transparent opacity-60"></div>

//                   {/* Category Badge */}
//                   <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#22C55E] bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
//                     <Tag className="w-3 h-3 text-[#0B0F0C]" />
//                     <span className="text-xs font-semibold text-[#0B0F0C] uppercase tracking-wide">
//                       {blog.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 sm:p-8">
//                   {/* Date */}
//                   <div className="flex items-center gap-2 text-[#6B7280] text-sm mb-3">
//                     <Calendar className="w-4 h-4" />
//                     <span>{blog.date}</span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-[#F4F4F5] text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#22C55E] transition-colors duration-300">
//                     {blog.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-6">
//                     {blog.description}
//                   </p>

//                   {/* Read More Button */}
//                   <button className="relative inline-flex items-center gap-2 text-[#22C55E] font-semibold text-sm sm:text-base group/btn overflow-hidden">
//                     <span className="relative z-10">Read More</span>
//                     <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22C55E] transition-all duration-300 group-hover/btn:w-full"></span>
//                   </button>
//                 </div>

//                 {/* Glow Effect on Hover */}
//                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#22C55E]/10 via-transparent to-transparent"></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Keyframes for gradient animation */}
//       <style jsx>{`
//         @keyframes gradient {
//           0% { background-position: 0% center; }
//           50% { background-position: 100% center; }
//           100% { background-position: 0% center; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BlogPage;

import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, Tag, X, User } from 'lucide-react';

const BlogPage = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const cardRefs = useRef([]);

  const blogs = [
    {
      id: 1,
      title: "Why AI Will Change the Future of Web Development",
      category: "Artificial Intelligence",
      description: "Exploring how AI-powered tools are revolutionizing the way we build, deploy, and optimize modern web applications.",
      date: "Dec 1, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      direction: "left",
      author: "Vibhakar kr golu",
      content: {
        heading: "The AI Revolution in Web Development",
        subheading: "How Artificial Intelligence is Transforming Code Creation",
        body: "Artificial Intelligence is fundamentally reshaping how developers approach web development. AI-powered code assistants like GitHub Copilot and ChatGPT are enabling developers to write code faster and with fewer errors. These tools understand context, suggest entire functions, and even debug complex issues in real-time.\n\nThe integration of AI extends beyond coding assistance. Machine learning algorithms now optimize website performance automatically, predict user behavior patterns, and personalize content delivery. AI-driven testing frameworks can identify bugs and vulnerabilities that traditional testing might miss, ensuring more robust applications.\n\nLooking ahead, we're entering an era where AI might generate entire application architectures based on simple descriptions. Natural language processing will allow non-technical stakeholders to communicate directly with development tools, democratizing web creation. The future isn't about AI replacing developers—it's about amplifying human creativity and problem-solving capabilities through intelligent automation."
      }
    },
    {
      id: 2,
      title: "Improving UI/UX with Modern Animation Techniques",
      category: "Design",
      description: "Discover cutting-edge animation patterns that enhance user experience and create memorable digital interactions.",
      date: "Nov 28, 2024",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      direction: "right",
      author: "Vibhakar kr golu",
      content: {
        heading: "Modern Animation in Digital Experiences",
        subheading: "Creating Fluid and Engaging User Interfaces",
        body: "Modern animation techniques have evolved far beyond simple transitions and hover effects. Today's web experiences leverage sophisticated animation libraries like Framer Motion, GSAP, and Three.js to create immersive, physics-based interactions that feel natural and intuitive.\n\nMicro-interactions play a crucial role in guiding users through digital experiences. Subtle animations provide feedback, indicate state changes, and create emotional connections with users. When a button responds to a click with a satisfying ripple effect or when page elements gracefully fade in as users scroll, these details accumulate into a polished, professional experience.\n\nThe key to effective UI animation lies in purposeful implementation. Every animation should serve a functional goal—whether reducing cognitive load, directing attention, or simply delighting users. Performance optimization ensures animations run smoothly across devices without compromising accessibility. By balancing aesthetics with usability, modern animation techniques transform static interfaces into dynamic, memorable experiences that keep users engaged."
      }
    },
    {
      id: 3,
      title: "Building Scalable Backends Using Node & MongoDB",
      category: "Backend Development",
      description: "A comprehensive guide to architecting robust, scalable server-side applications with Node.js and MongoDB.",
      date: "Nov 25, 2024",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      direction: "left",
      author: "Vibhakar kr golu",
      content: {
        heading: "Architecting Scalable Backend Systems",
        subheading: "Best Practices with Node.js and MongoDB",
        body: "Building scalable backend systems requires careful architectural decisions from the start. Node.js, with its non-blocking I/O model, excels at handling concurrent requests, making it ideal for real-time applications and microservices architectures. Combined with MongoDB's flexible document model, developers can create systems that adapt to changing requirements.\n\nKey scalability principles include implementing proper indexing strategies in MongoDB, utilizing connection pooling, and designing efficient data schemas that minimize query complexity. Horizontal scaling through sharding and replica sets ensures your database can handle growing traffic. On the application layer, implementing caching strategies with Redis and load balancing across multiple Node.js instances distributes workload effectively.\n\nMonitoring and observability are critical components of scalable systems. Tools like PM2 for process management, combined with logging solutions and performance monitoring, help identify bottlenecks before they impact users. By following RESTful API design principles and implementing proper error handling, you create maintainable backends that can evolve with your application's needs."
      }
    },
    {
      id: 4,
      title: "How Machine Learning Enhances Recommendation Systems",
      category: "Machine Learning",
      description: "Deep dive into ML algorithms that power personalized recommendations and improve user engagement.",
      date: "Nov 22, 2024",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80",
      direction: "right",
      author: "Vibhakar kr golu",
      content: {
        heading: "Machine Learning in Recommendation Systems",
        subheading: "Algorithms That Power Personalization",
        body: "Recommendation systems have become the backbone of modern digital platforms, from streaming services to e-commerce sites. Machine learning algorithms analyze vast amounts of user behavior data to predict preferences and suggest relevant content, dramatically improving user engagement and satisfaction.\n\nCollaborative filtering, content-based filtering, and hybrid approaches form the foundation of most recommendation engines. Collaborative filtering identifies patterns by comparing user behaviors, suggesting items that similar users enjoyed. Content-based methods analyze item features to recommend similar products. Advanced systems combine both approaches, leveraging deep learning techniques like neural collaborative filtering and transformer models for more accurate predictions.\n\nThe real power lies in continuous learning and adaptation. Modern recommendation systems employ reinforcement learning to optimize suggestions based on real-time feedback, balancing exploration of new items with exploitation of known preferences. Challenges like the cold start problem and filter bubbles require thoughtful solutions, including contextual bandits and diversity-promoting algorithms that ensure users discover unexpected but relevant content."
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <div className="min-h-screen bg-[#0B0F0C] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #22C55E 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#22C55E] rounded-full blur-[120px] opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#22C55E] rounded-full blur-[120px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-20 lg:mb-20">
          {/* <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#F4F4F5] via-[#22C55E] to-[#F4F4F5] bg-clip-text text-transparent animate-pulse" style={{
            backgroundSize: '200% auto',
            animation: 'gradient 3s linear infinite'
          }}>
            Latest Blogs & Articles
          </h1> */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#F4F4F5] via-[#22C55E] to-[#F4F4F5] bg-clip-text text-transparent animate-pulse" style={{
            backgroundSize: '200% auto',
            animation: 'gradient 3s linear infinite'
          }}>
            Latest Blogs & Articles
          </h1>

          <p className="text-[#6B7280] text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Insights, tutorials, and thoughts on web development, AI, and modern technology
          </p>

          {/* Divider */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#22C55E]"></div>
            <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></div>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#22C55E]"></div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              ref={el => cardRefs.current[index] = el}
              className={`group relative transition-all duration-700 ${visibleCards.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : blog.direction === 'left'
                    ? 'opacity-0 -translate-x-12'
                    : 'opacity-0 translate-x-12'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-[#1F2E1D] bg-opacity-40 backdrop-blur-lg rounded-2xl overflow-hidden border border-[#22C55E] border-opacity-20 hover:border-opacity-60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#22C55E]/20">
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0C] via-transparent to-transparent opacity-60"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#22C55E] bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3 text-[#0B0F0C]" />
                    <span className="text-xs font-semibold text-[#0B0F0C] uppercase tracking-wide">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-[#6B7280] text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#F4F4F5] text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#22C55E] transition-colors duration-300">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed mb-6">
                    {blog.description}
                  </p>

                  {/* Read More Button */}
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="relative inline-flex items-center gap-2 text-[#22C55E] font-semibold text-sm sm:text-base group/btn overflow-hidden"
                  >
                    <span className="relative z-10">Read More</span>
                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#22C55E] transition-all duration-300 group-hover/btn:w-full"></span>
                  </button>
                </div>

                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#22C55E]/10 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="relative bg-[#1F2E1D] bg-opacity-95 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#22C55E] border-opacity-40 shadow-2xl shadow-[#22C55E]/20 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#0B0F0C] bg-opacity-80 rounded-full hover:bg-[#22C55E] hover:rotate-90 transition-all duration-300 group"
            >
              <X className="w-6 h-6 text-[#F4F4F5] group-hover:text-[#0B0F0C]" />
            </button>

            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E1D] via-transparent to-transparent"></div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-[#22C55E] bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full">
                <Tag className="w-4 h-4 text-[#0B0F0C]" />
                <span className="text-sm font-semibold text-[#0B0F0C] uppercase tracking-wide">
                  {selectedBlog.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-[#6B7280] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedBlog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-[#22C55E]">By {selectedBlog.author}</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] mb-4 leading-tight">
                {selectedBlog.content.heading}
              </h1>

              {/* Subheading */}
              <h2 className="text-xl sm:text-2xl font-semibold text-[#22C55E] mb-8 leading-relaxed">
                {selectedBlog.content.subheading}
              </h2>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-[#22C55E] to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                <div className="h-px flex-1 bg-gradient-to-l from-[#22C55E] to-transparent"></div>
              </div>

              {/* Body Content */}
              <div className="prose prose-invert max-w-none">
                {selectedBlog.content.body.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-[#F4F4F5] text-base sm:text-lg leading-relaxed mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author Section */}
              <div className="mt-10 pt-8 border-t border-[#22C55E] border-opacity-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#22C55E] to-[#1F2E1D] flex items-center justify-center">
                    <User className="w-6 h-6 text-[#0B0F0C]" />
                  </div>
                  <div>
                    <p className="text-[#F4F4F5] font-semibold text-lg">{selectedBlog.author}</p>
                    <p className="text-[#6B7280] text-sm">Tech Writer & Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;