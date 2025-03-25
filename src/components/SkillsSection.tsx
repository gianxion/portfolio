
import { useState } from 'react';
import { Code, PenTool, Palette, Database, Layers, GitBranch } from 'lucide-react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      title: 'Frontend Development',
      icon: <Code size={32} />,
      description: 'Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'UI/UX Design',
      icon: <PenTool size={32} />,
      description: 'Creating intuitive user experiences and designing beautiful interfaces that balance form and function',
      technologies: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping']
    },
    {
      title: 'Visual Design',
      icon: <Palette size={32} />,
      description: 'Developing cohesive visual languages and design systems that communicate brand values effectively',
      technologies: ['Illustration', 'Typography', 'Color Theory', 'Branding']
    },
    {
      title: 'Backend Development',
      icon: <Database size={32} />,
      description: 'Crafting reliable and scalable server solutions using modern technologies and best practices',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs']
    },
    {
      title: 'Architecture',
      icon: <Layers size={32} />,
      description: 'Designing scalable and maintainable software architectures with a focus on performance and reliability',
      technologies: ['System Design', 'Microservices', 'Cloud Architecture', 'Performance Optimization']
    },
    {
      title: 'DevOps',
      icon: <GitBranch size={32} />,
      description: 'Implementing CI/CD pipelines and infrastructure automation to improve development workflows',
      technologies: ['Git', 'Docker', 'CI/CD', 'Cloud Platforms']
    }
  ];

  return (
    <div id="skills" className="py-20 relative bg-portfolio-gray">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-portfolio-accent font-medium mb-2 opacity-0 animate-fade-in">EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark opacity-0 animate-fade-in animate-delay-1">My Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 transition-all duration-500 opacity-0 animate-scale-in group"
              style={{ animationDelay: `${0.15 * index}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`
                w-16 h-16 rounded-xl flex items-center justify-center mb-4 
                transition-all duration-500 
                ${hoveredSkill === index ? 'bg-portfolio-accent text-white' : 'bg-portfolio-light text-portfolio-accent'}
              `}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold text-portfolio-dark mb-2">{skill.title}</h3>
              <p className="text-portfolio-dark/70 mb-4">{skill.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-sm py-1 px-3 rounded-full bg-white border border-portfolio-gray transition-all duration-300 group-hover:border-portfolio-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
