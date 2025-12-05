// src/components/About.js
import React from 'react';
import { Code2, Brain, Palette, Database, Linkedin, Github, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section className="bg-primary text-light py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent opacity-5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fadeInLeft">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></span>
          </h2>
          <p className="text-muted mt-6 text-lg max-w-2xl mx-auto">
            Crafting intelligent solutions at the intersection of code and creativity
          </p>
        </div>

        {/* Hero Section - Profile & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInLeft" style={{ animationDelay: '0.1s' }}>
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

              <div className="relative">
                <img
                  src="/golu.png"
                  alt="Vibhakar Kumar Golu"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-secondary shadow-2xl"
                />

                <div className="absolute bottom-6 right-6 w-6 h-6 bg-accent rounded-full border-4 border-primary animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="text-center lg:text-left animate-fadeInRight" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Vibhakar Kumar Golu</span>
            </h3>
            <p className="text-xl text-accent font-semibold mb-6">
              Software Developer & AI Enthusiast
            </p>
            <p className="text-light/90 leading-relaxed text-base md:text-lg mb-6">
              I'm a passionate software engineer specializing in <span className="text-accent font-semibold">Machine Learning</span>, <span className="text-accent font-semibold">Artificial Intelligence</span>, and the <span className="text-accent font-semibold">MERN Stack</span>. With a deep commitment to crafting intelligent, scalable, and elegant web solutions, I bridge the gap between cutting-edge AI research and real-world applications.
            </p>
            <p className="text-muted leading-relaxed text-base md:text-lg">
              My approach combines clean, maintainable code with innovative problem-solving to deliver products that not only meet technical requirements but create meaningful impact.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              <SocialLink href="https://www.linkedin.com/in/gravegolu" icon={<Linkedin size={20} />} label="LinkedIn" />
              <SocialLink href="https://github.com/gravegolu" icon={<Github size={20} />} label="GitHub" />
              <SocialLink href="https://leetcode.com/VK-G" icon={<Code2 size={20} />} label="LeetCode" />
              <SocialLink href="https://www.hackerrank.com/profile/golugrave" icon={<Award size={20} />} label="HackerRank" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 animate-fadeInLeft" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <StatCard number="06+" label="Years Experience" icon={<TrendingUp size={32} />} delay="0.1s" />
            <StatCard number="587+" label="Happy Clients" icon={<Award size={32} />} delay="0.2s" />
            <StatCard number="350+" label="Delivered Projects" icon={<Code2 size={32} />} delay="0.3s" />
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-fadeInRight" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Core Expertise
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-accent"></span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <SkillCard title="Web Development" icon={<Code2 size={40} />} description="Building responsive, performant web apps." delay="0.1s" />
            <SkillCard title="Machine Learning" icon={<Brain size={40} />} description="Deep learning, NLP, AI systems." delay="0.2s" />
            <SkillCard title="UI/UX Design" icon={<Palette size={40} />} description="Beautiful, intuitive interfaces." delay="0.3s" />
            <SkillCard title="MERN Stack" icon={<Database size={40} />} description="Full-stack scalable applications." delay="0.4s" />
          </div>
        </div>
      </div>
    </section>
  );
};


/* =========================
   SUB COMPONENTS FIXED
========================= */

const StatCard = ({ number, label, icon, delay }) => (
  <div
    className="group bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-secondary hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 text-center animate-fadeInLeft"
    style={{ animationDelay: delay }}
  >
    <div className="flex justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-4xl md:text-5xl font-bold text-light mb-2 group-hover:text-accent transition-colors duration-300">
      {number}
    </h3>
    <p className="text-muted text-sm md:text-base font-medium">{label}</p>
    <div className="mt-4 h-1 w-0 group-hover:w-full bg-accent transition-all duration-500 mx-auto rounded-full"></div>
  </div>
);


const SkillCard = ({ title, icon, description, delay }) => (
  <div
    className="group bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-secondary hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 text-center animate-fadeInRight"
    style={{ animationDelay: delay }}
  >
    <div className="flex justify-center mb-6 text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
      {icon}
    </div>
    <h4 className="text-xl md:text-2xl font-bold text-light mb-4 group-hover:text-accent transition-colors duration-300">
      {title}
    </h4>
    <p className="text-muted text-sm md:text-base leading-relaxed">{description}</p>
    <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-500 mx-auto rounded-full"></div>
  </div>
);


const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-12 h-12 bg-secondary rounded-lg border border-secondary hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent/20"
    aria-label={label}
  >
    <span className="text-light group-hover:text-accent transition-colors duration-300">
      {icon}
    </span>

    {/* Tooltip */}
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary px-3 py-1 rounded-lg text-xs text-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-accent/30">
      {label}
    </span>
  </a>
);

export default About;
