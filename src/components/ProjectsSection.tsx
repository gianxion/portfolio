import { useState, useRef } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Commerce Monster Shop",
      category: "Web Development",
      description:
        "A modern e-commerce platform with a focus on user experience and performance. Built with Node.js.",
      image: "", // Removed image as requested
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      link: "https://github.com/gianxion/MonsterEnergyDrink",
    },
    {
      title: "E-Commerce Shop Clothing Shop",
      category: "Web Development",
      description:
        "A modern e-commerce platform with a focus on user experience and performance. Built with React.",
      image: "", // Removed image as requested
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      link: "https://github.com/gianxion/ReactClothingShop",
    },
    {
      title: "Packing List",
      category: "Web Application",
      description:
        "An interactive packing list application that helps users organize items for travel, with categorization and checklist functionality.",
      image: "", // No image as requested
      technologies: ["React", "CSS", "LocalStorage", "JavaScript"],
      link: "https://github.com/gianxion/PackingListTutorial",
    },
    {
      title: "Trivia Game",
      category: "Interactive Game",
      description:
        "A fun and challenging trivia game with multiple categories, difficulty levels, and score tracking.",
      image: "", // No image as requested
      technologies: ["React", "TypeScript", "Trivia API", "CSS"],
      link: "https://github.com/gianxion/React-Trivia-Questions",
    },
    {
      title: "Pizza Menu Page",
      category: "UI/UX Design",
      description:
        "A visually appealing and user-friendly pizza menu page with filtering options and an intuitive ordering system.",
      image: "", // No image as requested
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://github.com/gianxion/Pizza-Menu",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 450; // Approximate width of one project card
    const currentScroll = scrollContainerRef.current.scrollLeft;

    scrollContainerRef.current.scrollTo({
      left:
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div id="projects" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-portfolio-accent font-medium mb-2 opacity-0 animate-fade-in">
            SHOWCASES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark opacity-0 animate-fade-in animate-delay-1">
            Featured Projects
          </h2>
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
                  {/* Removed the image section and adjusted the card to work without images */}
                  <div className="p-6">
                    <div className="text-sm text-portfolio-accent font-medium mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-portfolio-dark">
                      {project.title}
                    </h3>
                    <p className="text-portfolio-dark/70 mb-4 line-clamp-3">
                      {project.description}
                    </p>

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
              onClick={() => handleScroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg text-portfolio-dark hover:bg-white transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => handleScroll("right")}
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
                {/* Removed the image section for mobile as well */}
                <div className="p-6">
                  <div className="text-sm text-portfolio-accent font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-portfolio-dark">
                    {project.title}
                  </h3>
                  <p className="text-portfolio-dark/70 mb-4">
                    {project.description}
                  </p>

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
