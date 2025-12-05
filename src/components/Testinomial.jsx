// src/components/Testimonials.js
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = 
[
  {
        name: 'Aisha Verma',
    position: 'Lead AI Architect',
    company: 'Amazon',
    feedback:
      "One of the most talented developers I’ve collaborated with. Vibhakar’s expertise in full-stack AI solutions is outstanding. He architected our recommendation engine from scratch, handling 10M+ requests daily with sub-50ms latency. A rare combination of theoretical knowledge and practical execution.",
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
  },
  {
    name: 'Arjun Mehta',
    position: 'Senior Engineering Manager',
    company: 'Google',
    feedback:
      'Vibhakar brings exceptional technical depth combined with remarkable problem-solving abilities. His work on our ML pipeline optimization reduced inference time by 40% while maintaining accuracy. He consistently delivers production-ready code that scales beautifully.',

    image: 'https://media.istockphoto.com/id/1319790074/photo/headshot-portrait-of-smiling-attractive-indian-businessman-indoors.jpg?s=1024x1024&w=is&k=20&c=8SP8cVEv6Xx9fRJBDJQcsUzY3kULETTSgNX5-CWy55g=',
  },
  {
    name: 'Rohan Deshpande',
    position: 'CTO',
    company: 'QuantumSoft AI',
    feedback:
      "Vibhakar transformed our product vision into reality with incredible precision. His understanding of modern web architectures and AI integration is world-class. He doesn’t just write code—he engineers elegant solutions that consider scalability, maintainability, and business impact.",
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
  },
  {
    name: 'Emily Clarke',
    position: 'VP of Engineering',
    company: 'DataVerse Inc',
    feedback:
      "Working with Vibhakar elevated our entire team’s standards. His code reviews are insightful, his architecture decisions are sound, and his ability to mentor junior developers is exceptional. He delivered our real-time analytics dashboard ahead of schedule with zero production incidents.",
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
  },
  {
    name: 'Liam Wilson',
    position: 'Principal Software Engineer',
    company: 'Microsoft',
    feedback:
      "Vibhakar is the kind of engineer every team wants. He designed and implemented our distributed ML training system with remarkable efficiency. His deep understanding of both infrastructure and application layers made him invaluable. Truly a 10x contributor.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    name: 'Priya Nair',
    position: 'Director of Product',
    company: 'TechNova Solutions',
    feedback:
      'Beyond his technical brilliance, Vibhakar understands product strategy and user experience. He collaborated seamlessly with our design team to build an AI-powered platform that our customers love. His commitment to quality and timely delivery is unmatched.',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-primary text-light py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInLeft">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
            What People Say
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></span>
          </h2>
          <p className="text-muted mt-6 text-lg max-w-2xl mx-auto">
            Trusted by industry leaders and innovative teams worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-secondary hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 ${
                index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote size={48} className="text-accent" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar and Info */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-md group-hover:bg-accent/40 transition-all duration-300"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-accent/30 group-hover:border-accent transition-colors duration-300"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-light group-hover:text-accent transition-colors duration-300">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted">{testimonial.position}</p>
                    <p className="text-xs text-accent font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-light/90 leading-relaxed text-sm lg:text-base italic">
                  "{testimonial.feedback}"
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA or decorative element */}
        <div className="text-center mt-16 animate-fadeInRight" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center space-x-2 text-muted">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent"></div>
            <span className="text-sm">Trusted by 50+ companies worldwide</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;