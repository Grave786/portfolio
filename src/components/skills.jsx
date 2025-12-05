import React from 'react';

const skillsData = [
  { skill: 'C', level: 90, color: 'color-1' },
  { skill: 'C++', level: 85, color: 'color-2' },
  { skill: 'Java', level: 95, color: 'color-3' },
  { skill: 'Python', level: 90, color: 'color-4' },
  { skill: 'SQL', level: 85, color: 'color-5' },
  { skill: 'JavaScript', level: 80, color: 'color-6' },
  { skill: 'Express.js', level: 80, color: 'color-1' },
  { skill: 'React.js', level: 85, color: 'color-2' },
  { skill: 'Node.js', level: 75, color: 'color-3' },
  { skill: 'Bootstrap', level: 70, color: 'color-4' },
  { skill: 'HTML', level: 95, color: 'color-5' },
  { skill: 'CSS', level: 90, color: 'color-6' },
  { skill: 'Django', level: 80, color: 'color-1' },
  { skill: 'Git', level: 85, color: 'color-2' },
  { skill: 'Github', level: 85, color: 'color-3' },
  { skill: 'Jira', level: 70, color: 'color-4' },
  { skill: 'Machine Learning', level: 75, color: 'color-5' },
  { skill: 'Web Development', level: 85, color: 'color-6' },
  { skill: 'Software Testing', level: 80, color: 'color-1' },
  { skill: 'Android', level: 70, color: 'color-2' },
  { skill: 'Windows', level: 85, color: 'color-3' },
  { skill: 'Linux', level: 80, color: 'color-4' },
];

const Skills = () => {
  return (
    <section id="skills-section" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center pb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Skills</h1>
          <h2 className="text-2xl mb-4">My Skills</h2>
          <p className="text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="animate-box">
              <h3 className="text-xl font-semibold mb-2">{skill.skill}</h3>
              <div className="relative pt-1">
                <div className="flex justify-between text-sm">
                  <span>0%</span>
                  <span>100%</span>
                </div>
                <div className="relative pt-1">
                  <div
                    className={`progress-bar bg-${skill.color} text-xs leading-none py-1 text-center text-white`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <span>{skill.level}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
