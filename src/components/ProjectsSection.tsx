
import { useState, useRef } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with a focus on user experience and performance. Built with Next.js and integrated with a headless CMS.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      link: '#'
    },
    {
      title: 'Health & Fitness App',
      category: 'Mobile Application',
      description: 'A comprehensive fitness tracking application that helps users monitor their health metrics and achieve their fitness goals.',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop',
      technologies: ['React Native', 'Firebase', 'Expo', 'Redux'],
      link: '#'
    },
    {
      title: 'Financial Dashboard',
      category: 'Data Visualization',
      description: 'An interactive dashboard for financial analysis with real-time data visualization and advanced filtering capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      technologies: ['TypeScript', 'D3.js', 'Express', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Travel Blog Platform',
      category: 'Full Stack Development',
      description: 'A platform for travel enthusiasts to share their experiences through interactive stories and visual content.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop',
      technologies: ['Next.js', 'GraphQL', 'Postgres', 'AWS'],
      link: '#'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const scrollAmount = 450; // Approximate width of one project card
    const currentScroll = scrollContainerRef.current.scrollLeft;
    
    scrollContainerRef.current.scrollTo({
      left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div id="projects" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-portfolio-accent font-medium mb-2 opacity-0 animate-fade-in">SHOWCASES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark opacity-0 animate-fade-in animate-delay-1">Featured Projects</h2>
        </div>
        
        <div className="relative">
          {/* Projects scroller for larger screens */}
          <div className="hidden md:block relative">
            <div 
              ref={scrollContainerRef} 
              className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hidden"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`
                    flex-shrink-0 w-[400px] rounded-xl overflow-hidden glass-card opacity-0 animate-fade-in
                    transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl
                  `}
                  style={{ animationDelay: `${0.15 * index}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-portfolio-accent font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2 text-portfolio-dark">{project.title}</h3>
                    <p className="text-portfolio-dark/70 mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs py-1 px-2 rounded-full bg-portfolio-gray text-portfolio-dark/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link} 
                      className="inline-flex items-center text-portfolio-accent hover:text-portfolio-dark transition-colors duration-300"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={() => handleScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg text-portfolio-dark hover:bg-white transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={() => handleScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg text-portfolio-dark hover:bg-white transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Projects for mobile */}
          <div className="md:hidden space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden glass-card opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-portfolio-accent font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2 text-portfolio-dark">{project.title}</h3>
                  <p className="text-portfolio-dark/70 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs py-1 px-2 rounded-full bg-portfolio-gray text-portfolio-dark/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-portfolio-accent hover:text-portfolio-dark transition-colors duration-300"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
