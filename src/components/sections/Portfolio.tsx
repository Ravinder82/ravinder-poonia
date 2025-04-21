
import { motion } from 'framer-motion';
import { Code, Bot, Layout, PaintBucket, FileCode, Server } from 'lucide-react';

const portfolioItems = [
  {
    title: "AI-Powered Portfolio",
    description: "This website showcases the power of AI in modern web development",
    icon: <Layout className="text-pink-500" size={24} />,
    className: "md:col-span-2 md:row-span-1"
  },
  {
    title: "Custom AI Agents",
    description: "Development of specialized AI agents for automation",
    icon: <Bot className="text-purple-500" size={24} />,
    className: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Web Applications",
    description: "Modern web apps built with AI assistance",
    icon: <Code className="text-blue-500" size={24} />,
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "UI/UX Design",
    description: "AI-enhanced design systems and interfaces",
    icon: <PaintBucket className="text-teal" size={24} />,
    className: "md:col-span-1 md:row-span-1"
  },
  {
    title: "MCP Server Solutions",
    description: "Custom server configurations for AI applications",
    icon: <Server className="text-pink-400" size={24} />,
    className: "md:col-span-2 md:row-span-1"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="ai-tag mb-4"
          >
            Featured Work
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="section-title"
          >
            AI Development Portfolio
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="section-subtitle mx-auto"
          >
            Explore how I leverage AI to create extraordinary digital experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card animated-card p-8 group ${item.className}`}
            >
              <div className="content relative z-10">
                <div className="h-12 w-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
