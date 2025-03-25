
import { Download } from 'lucide-react';

const AboutSection = () => {
  return (
    <div id="about" className="py-20 relative bg-portfolio-gray">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg opacity-0 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/30 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-48 h-48 rounded-lg border-2 border-portfolio-accent opacity-20"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-48 h-48 rounded-lg border-2 border-portfolio-accent opacity-20"></div>
          </div>
          
          {/* Content Column */}
          <div>
            <p className="text-portfolio-accent font-medium mb-2 opacity-0 animate-fade-in">ABOUT ME</p>
            <h2 className="text-3xl md:text-4xl font-bold text-portfolio-dark mb-6 opacity-0 animate-fade-in animate-delay-1">
              Creating meaningful digital experiences that inspire
            </h2>
            
            <div className="space-y-4 opacity-0 animate-fade-in animate-delay-2">
              <p className="text-portfolio-dark/80">
                I'm a passionate designer and developer with a keen eye for detail and a commitment to creating intuitive, user-centered digital experiences. With a background spanning both design and development, I bring a holistic approach to every project.
              </p>
              <p className="text-portfolio-dark/80">
                My journey began in graphic design before expanding into frontend development, giving me unique insights into both the aesthetic and technical aspects of digital products. I believe in the power of thoughtful design to solve problems and in clean code to implement those solutions effectively.
              </p>
              <p className="text-portfolio-dark/80 mb-8">
                Whether crafting beautiful interfaces or building robust applications, my goal remains the same: to create meaningful experiences that resonate with users and deliver real value.
              </p>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-3">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-portfolio-dark text-white rounded-lg hover:bg-portfolio-dark/90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Download size={18} className="mr-2" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
