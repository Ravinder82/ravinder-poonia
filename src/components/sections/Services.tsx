
import { Code, Bot, BookOpen, Terminal, LucideGraduationCap, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <BrainCircuit size={24} className="text-pink-500" />,
    title: "AI Integration Mastery",
    description: "Learn how to leverage AI tools and APIs to enhance your development workflow and create intelligent applications.",
    features: ["AI Agents & LLMs", "Prompt Engineering", "AI-assisted Development"]
  },
  {
    icon: <BookOpen size={24} className="text-purple-500" />,
    title: "Online AI Coaching",
    description: "Personalized mentoring to help you master AI tools and modern development practices.",
    features: ["1-on-1 Sessions", "Project-based Learning", "Real-world Applications"]
  },
  {
    icon: <Terminal size={24} className="text-blue-500" />,
    title: "IDE & Tools Mastery",
    description: "Master development environments and AI-powered tools to maximize your productivity.",
    features: ["Replit Mastery", "MCP Server Setup", "AI Development Tools"]
  },
  {
    icon: <LucideGraduationCap size={24} className="text-teal" />,
    title: "AI Career Guidance",
    description: "Learn how to monetize your AI skills and build a successful career in AI development.",
    features: ["Portfolio Building", "Freelancing with AI", "Business Integration"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="ai-tag mb-4"
          >
            Expert AI Training
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="section-title"
          >
            AI Development & Coaching
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Transform your development skills with AI-powered techniques and personalized coaching
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 hover:border-pink-500/30 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
