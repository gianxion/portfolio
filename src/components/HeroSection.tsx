
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-portfolio-accent/5 rounded-full filter blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-200/10 rounded-full filter blur-3xl animate-spin-slow"></div>
      </div>
      
      <div className="section-container flex flex-col justify-center items-center text-center pt-20">
        <div className="opacity-0 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-dark leading-tight">
            <span className="block">Hello, I'm</span>
            <span className="text-portfolio-accent">Your Name</span>
          </h1>
        </div>
        
        <div className="mt-6 opacity-0 animate-fade-in animate-delay-1">
          <p className="text-xl md:text-2xl text-portfolio-dark/80 max-w-2xl text-balance">
            I create beautiful, functional, and interactive web experiences
          </p>
        </div>
        
        <div className="mt-12 opacity-0 animate-fade-in animate-delay-2">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-portfolio-dark text-white rounded-full hover:bg-portfolio-dark/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            View My Work
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float opacity-0 animate-fade-in animate-delay-3">
          <a href="#skills" className="text-portfolio-dark/60 hover:text-portfolio-accent transition-colors duration-300">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
