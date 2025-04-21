
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: 'Web Development',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0F0817]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="ai-tag mb-4">Get In Touch</span>
          <h2 className="section-title">AI Solutions Inquiry</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind? Fill out the form below and we'll get back to you with a custom AI solution
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto glass-card p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-navy/80 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-navy/80 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-white font-medium mb-2">Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-navy/80 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
              >
                <option>Web Development</option>
                <option>AI Integration</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
                <option>Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">Project Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-navy/80 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal/50"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full btn-primary"
            >
              Get AI Consultation
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/70">Prefer to email directly?</p>
            <a href="mailto:1294ravinder@gmail.com" className="text-teal hover:underline">1294ravinder@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
