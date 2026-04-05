import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';



export default function Hero() {
    const navigate = useNavigate(); // <-- Add this
  return (
    <div className="relative overflow-hidden bg-light text-primary">
      {/* Animated Blurred Blob Background */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-accent blur-[100px] rounded-full opacity-20 z-0"></div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-20 gap-12 relative z-10">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 animate-fadeInLeft">
          <h2 className="text-lg xl:text-2xl font-medium mb-2">Hello, I'm</h2>
          <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold font-serif leading-tight mb-4">
            Vibhakar Kumar <span className="text-accent">Golu</span>
          </h1>

          <TypeAnimation
            sequence={[
              'Software Developer',
              2000,
              'ML Enthusiast',
              2000,
              'Full-Stack Engineer',
              2000,
            ]}
            wrapper="h3"
            className="text-xl xl:text-3xl text-accent font-semibold mb-6"
            repeat={Infinity}
          />

          <p className="text-base xl:text-lg leading-relaxed max-w-xl">
            Passionate about building scalable web apps with React, Node.js, and cloud platforms. Focused on clean design, performance, and accessibility.
          </p>

          {/* <button className="mt-6 px-6 py-2 bg-accent text-light text-lg font-medium rounded-md shadow-md hover:scale-105 transition-transform">
            Contact Me
          </button> */}
           <button
      onClick={() => navigate('/contact')}
      className="mt-6 px-6 py-2 bg-accent text-light text-lg font-medium rounded-md shadow-md hover:scale-105 transition-transform"
    >
      Contact Me
    </button>
        </div>

        {/* Right Column - Image Panel */}
        <div className="relative w-full lg:w-1/2 grid grid-cols-2 gap-4 animate-fadeInRight">
          <div className="relative z-10 transform rotate-[-6deg] hover:rotate-[-3deg] hover:scale-105 transition-all shadow-xl rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1542744095-291d1f67b221?fit=crop&w=600&q=80"
              alt="Developers collaborating at a desk"
              className="object-cover w-full h-48 rounded-xl"
            />
          </div>
          <div className="relative z-20 transform rotate-[5deg] hover:rotate-[2deg] hover:scale-105 transition-all shadow-xl rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=600&q=80"
              alt="Team working together in a meeting"
              className="object-cover w-full h-48 rounded-xl"
            />
          </div>
          <div className="col-span-2 relative z-0 transform rotate-[2deg] hover:rotate-[0deg] hover:scale-105 transition-all shadow-2xl rounded-xl overflow-hidden mt-4">
            <img
              src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?fit=crop&w=1080&q=80"
              alt="Developer workspace with laptop and code"
              className="object-cover w-full h-60 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// --------------------------------------------------------
// import React from 'react';

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-primary via-light to-muted dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
//       {/* Background Wave */}
//       <div className="absolute inset-0 pointer-events-none -z-10">
//         <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
//           <path fill="url(#wave)" fillOpacity="1" d="M0,160L30,154.7C60,149,120,139,180,138.7C240,139,300,149,360,165.3C420,181,480,203,540,186.7C600,171,660,117,720,117.3C780,117,840,171,900,170.7C960,171,1020,117,1080,106.7C1140,96,1200,128,1260,133.3C1320,139,1380,117,1410,106.7L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z" />
//           <defs>
//             <linearGradient id="wave" x1="0" x2="1" y1="0" y2="1">
//               <stop offset="0%" stopColor="#00B4D8" />
//               <stop offset="100%" stopColor="#90E0EF" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>

//       {/* Container */}
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 lg:px-16 gap-12">
//         {/* Text Content */}
//         <div className="w-full md:w-1/2 animate-fadeInLeft text-primary dark:text-light">
//           <h2 className="text-xl font-medium xl:text-2xl">Hi, I'm</h2>
//           <h1 className="text-4xl sm:text-5xl xl:text-7xl font-extrabold font-serif mt-2 text-accent">
//             Vibhakar Kumar <span className="text-primary dark:text-light">Golu</span>
//           </h1>
//           <h3 className="text-2xl xl:text-3xl mt-4 text-secondary font-semibold">
//             Software Developer
//           </h3>
//           <p className="mt-6 max-w-xl text-base xl:text-lg text-muted dark:text-gray-300 leading-relaxed">
//             Software Developer | Machine Learning Enthusiast | Full-Stack Developer. Passionate about building responsive, scalable, and accessible software using modern stacks like React, Node.js, and cloud-native solutions.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex gap-4">
//             <button className="px-6 py-3 rounded-lg bg-accent text-light text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-accent hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
//               Hire Me
//             </button>
//             <button className="px-6 py-3 rounded-lg border-2 border-accent text-accent dark:text-light text-lg font-semibold transition-all hover:scale-105 hover:bg-accent hover:text-white">
//               Download Resume
//             </button>
//           </div>
//         </div>

//         {/* Portrait or Graphic */}
//         <div className="w-full md:w-1/2 flex justify-center animate-fadeInRight">
//           <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-4 border-accent shadow-lg p-2 animate-pulse">
//             <img
//               src="https://avatars.githubusercontent.com/u/10347084?v=4"
//               alt="Developer Portrait"
//               className="w-full h-full object-cover rounded-full shadow-xl"
//               loading="lazy"
//             />
//             {/* Optional glowing ring */}
//             <div className="absolute inset-0 rounded-full border-4 border-accent opacity-30 blur-xl animate-pulse" />
//           </div>
//         </div>
//       </div>

//       {/* Optional Floating Particles */}
//       <div className="absolute inset-0 pointer-events-none -z-10">
//         <div className="absolute w-2 h-2 bg-accent rounded-full animate-bounce left-10 top-10"></div>
//         <div className="absolute w-3 h-3 bg-secondary rounded-full animate-ping left-[90%] top-[30%]"></div>
//         <div className="absolute w-2 h-2 bg-primary rounded-full animate-bounce right-20 bottom-20"></div>
//       </div>
//     </section>
//   );
// }


// ===========================


