// // src/components/ContactForm.js
// import React, { useState } from 'react';
// import { Mail, MapPin, Phone, Send, CheckCircle, X } from 'lucide-react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [result, setResult] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     setResult("Sending....");
    
//     const formDataToSend = new FormData(event.target);
//     formDataToSend.append("access_key", "30e7b4a0-d0d0-49f2-b314-38694aa3a11a");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formDataToSend
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("Message sent successfully!");
//         setShowSuccess(true);
//         event.target.reset();
//         setFormData({ name: '', email: '', message: '' });
        
//         // Auto-hide success message after 5 seconds
//         setTimeout(() => {
//           setShowSuccess(false);
//         }, 5000);
//       } else {
//         console.log("Error", data);
//         setResult(data.message);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setResult("Failed to send message. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-primary text-light py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
//       {/* Background accent glows */}
//       <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>
//       <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto w-full relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
//           {/* Left Side - Contact Info */}
//           <div className="animate-fadeInLeft">
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
//               Get In Touch
//               <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-accent to-transparent"></span>
//             </h2>
//             <p className="text-muted text-lg mb-12 leading-relaxed max-w-xl">
//               Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
//             </p>

//             {/* Contact Info Cards */}
//             <div className="space-y-6">
//               <ContactInfoCard
//                 icon={<Mail size={24} />}
//                 title="Email"
//                 content="golusingh44629@gmail.com"
//                 href="mailto:golusingh44629@gmail.com"
//                 delay="0.1s"
//               />
//               <ContactInfoCard
//                 icon={<Phone size={24} />}
//                 title="Phone"
//                 content="+91 6202293374"
//                 href="tel:+916202293374"
//                 delay="0.2s"
//               />
//               <ContactInfoCard
//                 icon={<MapPin size={24} />}
//                 title="Location"
//                 content="Jaipur, Rajasthan, India"
//                 href="#"
//                 delay="0.3s"
//               />
//             </div>

//             {/* Decorative element */}
//             <div className="mt-12 flex items-center space-x-4">
//               <div className="h-px w-16 bg-gradient-to-r from-accent to-transparent"></div>
//               <p className="text-muted text-sm">Available for freelance opportunities</p>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="animate-fadeInRight">
//             <div className="relative group">
//               {/* Glowing border effect */}
//               <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
//               {/* Form Container */}
//               <div className="relative bg-secondary/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-secondary hover:border-accent/30 transition-all duration-500 shadow-2xl">
//                 <h3 className="text-2xl md:text-3xl font-bold text-light mb-8 text-center">
//                   Send a Message
//                 </h3>

//                 <form onSubmit={onSubmit} className="space-y-6">
//                   {/* Name Input */}
//                   <div className="relative group">
//                     <label htmlFor="name" className="block text-light text-sm font-medium mb-2">
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-xl bg-primary/50 text-light border border-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder-muted transition-all duration-300"
//                       placeholder="John Doe"
//                     />
//                   </div>

//                   {/* Email Input */}
//                   <div className="relative group">
//                     <label htmlFor="email" className="block text-light text-sm font-medium mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-xl bg-primary/50 text-light border border-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder-muted transition-all duration-300"
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   {/* Message Textarea */}
//                   <div className="relative group">
//                     <label htmlFor="message" className="block text-light text-sm font-medium mb-2">
//                       Your Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows="5"
//                       className="w-full px-4 py-3 rounded-xl bg-primary/50 text-light border border-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/50 placeholder-muted transition-all duration-300 resize-none"
//                       placeholder="Tell me about your project or inquiry..."
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-accent text-primary font-bold py-4 rounded-xl hover:bg-accent/90 hover:scale-105 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
//                   >
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
//                         <span>Sending...</span>
//                       </>
//                     ) : (
//                       <>
//                         <span>Send Message</span>
//                         <Send size={20} />
//                       </>
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Success Toast Notification */}
//       {showSuccess && (
//         <div className="fixed top-8 right-8 z-50 animate-fadeInRight">
//           <div className="bg-secondary border border-accent rounded-2xl shadow-2xl shadow-accent/20 p-6 flex items-start space-x-4 max-w-md">
//             <div className="flex-shrink-0">
//               <CheckCircle size={24} className="text-accent" />
//             </div>
//             <div className="flex-1">
//               <h4 className="text-light font-bold mb-1">Success!</h4>
//               <p className="text-muted text-sm">Your message has been sent successfully. I'll get back to you soon!</p>
//             </div>
//             <button
//               onClick={() => setShowSuccess(false)}
//               className="flex-shrink-0 text-muted hover:text-light transition-colors"
//             >
//               <X size={20} />
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };
// const ContactInfoCard = ({ icon, title, content, href, delay }) => (
//   <a
//     href={href}
//     className="group flex items-center space-x-4 bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary hover:border-accent/50 transition-all duration-500 hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 animate-fadeInLeft"
//     style={{ animationDelay: delay }}
//   >
//     <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300 group-hover:scale-110">
//       {icon}
//     </div>
//     <div className="flex-1">
//       <h4 className="text-muted text-sm font-medium mb-1">{title}</h4>
//       <p className="text-light font-semibold group-hover:text-accent transition-colors duration-300">
//         {content}
//       </p>
//     </div>
//   </a>
// );



// export default ContactForm;

// src/components/ContactForm.js
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, X } from 'lucide-react';
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_vhmm01q",
        "template_90rz3te",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "ScsqFTE5k5LYJjGlx"
      )
      .then(
        () => {
          setShowSuccess(true);
          setIsSubmitting(false);
          event.target.reset();
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => setShowSuccess(false), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="bg-primary text-light py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Section */}
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-accent to-transparent"></span>
            </h2>

            <p className="text-muted text-lg mb-12 leading-relaxed max-w-xl">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <ContactInfoCard
                icon={<Mail size={24} />}
                title="Email"
                content="golusingh44629@gmail.com"
                href="mailto:golusingh44629@gmail.com"
                delay="0.1s"
              />
              <ContactInfoCard
                icon={<Phone size={24} />}
                title="Phone"
                content="+91 6202293374"
                href="tel:+916202293374"
                delay="0.2s"
              />
              <ContactInfoCard
                icon={<MapPin size={24} />}
                title="Location"
                content="Jaipur, Rajasthan, India"
                href="#"
                delay="0.3s"
              />
            </div>
          </div>

          {/* Right - EmailJS Form */}
          <div className="animate-fadeInRight">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-secondary/50 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-secondary hover:border-accent/30 transition-all duration-500 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-light mb-8 text-center">
                  Send a Message
                </h3>

                <form onSubmit={onSubmit} className="space-y-6">
                  
                  <div>
                    <label className="block text-light text-sm mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 text-light border border-secondary"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-light text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 text-light border border-secondary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-light text-sm mb-2">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-primary/50 text-light border border-secondary"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-primary font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      {showSuccess && (
        <div className="fixed top-8 right-8 z-50 animate-fadeInRight">
          <div className="bg-secondary border border-accent rounded-2xl shadow-2xl p-6 flex items-start space-x-4 max-w-md">
            <CheckCircle size={24} className="text-accent" />
            <div>
              <h4 className="text-light font-bold mb-1">Success!</h4>
              <p className="text-muted text-sm">Your message has been sent successfully!</p>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-muted hover:text-light"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const ContactInfoCard = ({ icon, title, content, href, delay }) => (
  <a
    href={href}
    className="group flex items-center space-x-4 bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary hover:border-accent/50 transition-all duration-500 hover:-translate-y-1 animate-fadeInLeft"
    style={{ animationDelay: delay }}
  >
    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-muted text-sm">{title}</h4>
      <p className="text-light font-semibold group-hover:text-accent transition-colors">
        {content}
      </p>
    </div>
  </a>
);

export default ContactForm;
