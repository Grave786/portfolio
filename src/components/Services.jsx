
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code, Brain, Settings } from 'lucide-react';

const services = [
  {
    title: 'Machine Learning Development',
    description: 'Expertise in developing and integrating machine learning models into web applications using Python, Django, and libraries like NLTK, Scikit-learn, and Spacy.',
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Proficient in building scalable and responsive MERN stack applications, with experience in React.js, Node.js, Express.js, and MongoDB.',
  },
  {
    title: 'AI-Based Solutions',
    description: 'Specialized in creating AI-based applications such as chatbots and predictive systems that enhance user experience and decision-making.',
  },
  {
    title: 'Software Testing & Deployment',
    description: 'Experience in software testing and deployment across various platforms, ensuring robust performance and security.',
  },
  {
    title: 'Database Design & Management',
    description: 'Skilled in designing efficient database schemas and managing data with MongoDB, MySQL, and PostgreSQL for optimal performance and scalability.',
  },
  {
    title: 'API Development & Integration',
    description: 'Expert in creating RESTful APIs and integrating third-party services to build robust, interconnected systems and enhance application functionality.',
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-light via-white to-gray-50 py-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-muted rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInLeft">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">What I Offer</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-muted bg-clip-text text-transparent">
            Our Services
          </h2>

          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into powerful digital solutions through cutting-edge technology and innovative approaches
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card group relative bg-white/40 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 border border-white/50 hover:border-accent/30 ${visibleCards.includes(index)
                  ? index % 2 === 0 ? 'animate-fadeInLeft' : 'animate-fadeInRight'
                  : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-muted/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-muted to-accent rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Service Number */}
                <div className="mb-6">
                  <div className="text-6xl font-bold text-muted/40 group-hover:text-muted/60 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted leading-relaxed mb-6 group-hover:text-primary/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 text-accent hover:text-primary font-medium transition-all duration-300 group-hover:gap-3">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                  {/* Service Category Icon */}
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    {index === 0 && <Brain className="w-5 h-5 text-accent" />}
                    {index === 1 && <Code className="w-5 h-5 text-accent" />}
                    {index === 2 && <Sparkles className="w-5 h-5 text-accent" />}
                    {index === 3 && <Settings className="w-5 h-5 text-accent" />}
                    {index === 4 && <Brain className="w-5 h-5 text-accent" />}
                    {index === 5 && <Code className="w-5 h-5 text-accent" />}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-accent/10 to-muted/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInRight">
          <div className="inline-flex flex-col items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted mb-6 max-w-md">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology solutions.
            </p>
            <a
              href="#contact"
              className="bg-gradient-to-r from-accent to-accent/80 text-light px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;