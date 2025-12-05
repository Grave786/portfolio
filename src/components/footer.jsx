// // src/components/Footer.js
// import React from 'react';
// import { MapPin, Phone, Mail, Twitter, Facebook, Instagram, ChevronRight } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-light relative overflow-hidden">
//       {/* Accent gradient bar at top */}
//       <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
//           {/* About Section - Animate from left */}
//           <div className="animate-fadeInLeft">
//             <h2 className="text-xl font-bold mb-4 relative inline-block">
//               About
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
//             </h2>
//             <p className="text-light leading-relaxed mb-6 text-sm">
//               Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
//             </p>
//             <div className="flex space-x-4">
//               <a 
//                 href="#" 
//                 className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-light hover:bg-accent hover:scale-110 transition duration-300 ease-out"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={18} />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-light hover:bg-accent hover:scale-110 transition duration-300 ease-out"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={18} />
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-light hover:bg-accent hover:scale-110 transition duration-300 ease-out"
//                 aria-label="Instagram"
//               >
//                 <Instagram size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Links Section - Animate from left with delay */}
//           {/* <div className="animate-fadeInLeft" style={{ animationDelay: '0.1s' }}>
//             <h2 className="text-xl font-bold mb-4 relative inline-block">
//               Links
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
//             </h2>
//             <ul className="space-y-3">
//               {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link, index) => (
//                 <li key={index}>
//                   <a 
//                     href="#" 
//                     className="text-light hover:text-accent flex items-center group transition duration-300"
//                   >
//                     <ChevronRight size={16} className="mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                     <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div> */}
          

//           {/* Services Section - Animate from right with delay */}
//           <div className="animate-fadeInRight" style={{ animationDelay: '0.1s' }}>
//             <h2 className="text-xl font-bold mb-4 relative inline-block">
//               Services
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
//             </h2>
//             <ul className="space-y-3">
//               {[
//                 'Machine Learning Development',
//                 'Full Stack Web Development',
//                 'AI Based Solutions',
//                 'Software Testing And Deployment'
//               ].map((service, index) => (
//                 <li key={index}>
//                   <a 
//                     href="/services" 
//                     className="text-light hover:text-accent flex items-center group transition duration-300"
//                   >
//                     <ChevronRight size={16} className="mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
//                     <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm">{service}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Section - Animate from right */}
//           <div className="animate-fadeInRight">
//             <h2 className="text-xl font-bold mb-4 relative inline-block">
//               Have Questions?
//               <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
//             </h2>
//             <ul className="space-y-4">
//               <li className="flex items-start group">
//                 <MapPin size={18} className="mr-3 mt-0.5 text-accent flex-shrink-0" />
//                 <span className="text-light text-sm group-hover:text-light transition duration-300">
//                   2/520 sector 2 Malviya nagar Jaipur, India
//                 </span>
//               </li>
//               <li className="flex items-center group">
//                 <Phone size={18} className="mr-3 text-accent flex-shrink-0" />
//                 <a 
//                   href="tel:+916202293374" 
//                   className="text-light hover:text-accent transition duration-300 text-sm"
//                 >
//                   +91 6202293374
//                 </a>
//               </li>
//               <li className="flex items-center group">
//                 <Mail size={18} className="mr-3 text-accent flex-shrink-0" />
//                 <a 
//                   href="mailto:golusingh44629@gmail.com" 
//                   className="text-light hover:text-accent transition duration-300 text-sm break-all"
//                 >
//                   golusingh44629@gmail.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent mb-8"></div>

//         {/* Bottom Bar */}
//         <div className="text-center">
//           <p className="text-light text-sm">
//             &copy; <span>{new Date().getFullYear()}</span> All rights reserved. Made with{' '}
//             <span className="text-accent inline-block animate-pulse">♥</span> by{' '}
//             <a 
//               href="#" 
//               className="text-light hover:text-accent font-semibold transition duration-300 hover:underline" 
//               target="_blank" 
//               rel="noopener noreferrer"
//             >
//               Golugrave
//             </a>
//           </p>
//         </div>
//       </div>

//       {/* Subtle background accent glow - optional */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>
//     </footer>
//   );
// };

// export default Footer;


// src/components/Footer.js
import React from 'react';
import { MapPin, Phone, Mail, Twitter, Facebook, Instagram, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-light relative overflow-hidden">
      {/* Accent gradient bar at top */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* About Section */}
          <div className="animate-fadeInLeft">
            <h2 className="text-xl font-bold mb-4 relative inline-block">
              About
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h2>
            <p className="text-light leading-relaxed mb-6 text-sm">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-light hover:bg-accent hover:scale-110 transition duration-300 ease-out" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-light hover:bg-accent hover:scale-110 transition duration-300 ease-out" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-light hover:bg-accent hover:scale-110 transition duration-300 ease-out" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="animate-fadeInLeft" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-xl font-bold mb-4 relative inline-block">
              Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h2>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-light hover:text-accent flex items-center group transition duration-300"
                  >
                    <ChevronRight size={16} className="mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="animate-fadeInRight" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-xl font-bold mb-4 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h2>
            <ul className="space-y-3">
              {[
                'Machine Learning Development',
                'Full Stack Web Development',
                'AI Based Solutions',
                'Software Testing And Deployment'
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-light hover:text-accent flex items-center group transition duration-300"
                  >
                    <ChevronRight size={16} className="mr-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="animate-fadeInRight">
            <h2 className="text-xl font-bold mb-4 relative inline-block">
              Have Questions?
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent"></span>
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-light text-sm group-hover:text-light transition duration-300">
                  2/520 sector 2 Malviya nagar Jaipur, India
                </span>
              </li>
              <li className="flex items-center group">
                <Phone size={18} className="mr-3 text-accent flex-shrink-0" />
                <a href="tel:+916202293374" className="text-light hover:text-accent transition duration-300 text-sm">
                  +91 6202293374
                </a>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 text-accent flex-shrink-0" />
                <a href="mailto:golusingh44629@gmail.com" className="text-light hover:text-accent transition duration-300 text-sm break-all">
                  golusingh44629@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-light text-sm">
            &copy; <span>{new Date().getFullYear()}</span> All rights reserved. Made with{' '}
            <span className="text-accent inline-block animate-pulse">♥</span> by{' '}
            <a href="#" className="text-light hover:text-accent font-semibold transition duration-300 hover:underline" target="_blank" rel="noopener noreferrer">
              Vibhakar
            </a>
          </p>
        </div>
      </div>

      {/* Subtle background accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
