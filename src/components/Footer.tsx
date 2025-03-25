
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Portfolio</h2>
            <p className="text-white/60 mt-2">Creating beautiful digital experiences</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-portfolio-accent transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© {year} Your Name. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
