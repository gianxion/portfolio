
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 1500);
  };

  return (
    <div id="contact" className="py-20 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-portfolio-accent font-medium mb-2 opacity-0 animate-fade-in">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark opacity-0 animate-fade-in animate-delay-1">Contact Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in animate-delay-2">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-6">Let's start a conversation</h3>
            <p className="text-portfolio-dark/70 mb-8">
              Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form or reach out directly through one of the channels below.
            </p>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-accent/10 flex items-center justify-center text-portfolio-accent">
                  <Mail size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-portfolio-dark/60">Email</h4>
                  <p className="text-portfolio-dark">hello@yourname.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-accent/10 flex items-center justify-center text-portfolio-accent">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-portfolio-dark/60">Phone</h4>
                  <p className="text-portfolio-dark">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-portfolio-accent/10 flex items-center justify-center text-portfolio-accent">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-portfolio-dark/60">Location</h4>
                  <p className="text-portfolio-dark">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 opacity-0 animate-fade-in animate-delay-3">
            <div className="glass-card rounded-xl p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-dark/70 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-gray focus:border-portfolio-accent focus:ring focus:ring-portfolio-accent/20 transition-all duration-300 outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-dark/70 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-gray focus:border-portfolio-accent focus:ring focus:ring-portfolio-accent/20 transition-all duration-300 outline-none"
                    placeholder="Your email"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-dark/70 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-portfolio-gray focus:border-portfolio-accent focus:ring focus:ring-portfolio-accent/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    w-full py-3 px-6 rounded-lg flex items-center justify-center font-medium transition-all duration-300
                    ${isSubmitting 
                      ? 'bg-portfolio-accent/70 text-white cursor-not-allowed' 
                      : 'bg-portfolio-accent text-white hover:bg-portfolio-accent/90 shadow-md hover:shadow-lg'
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>Send Message <Send size={18} className="ml-2" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
