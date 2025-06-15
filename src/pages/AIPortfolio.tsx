
import { motion } from 'framer-motion';
import { Bot, Code, Zap, Database, Brain, Globe, Server, Smartphone } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';

const AIPortfolio = () => {
  const projects = [
    {
      title: "Intelligent Customer Support Bot",
      description: "AI-powered chatbot using GPT-4 and RAG architecture, reducing support tickets by 70%",
      tech: ["GPT-4", "Vector Database", "React", "Node.js"],
      features: [
        "Natural language processing",
        "Context-aware responses", 
        "Multi-language support",
        "Analytics dashboard"
      ],
      metrics: {
        "Response Time": "< 2 seconds",
        "Accuracy": "94%",
        "Cost Reduction": "70%"
      },
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&h=400&fit=crop",
      category: "AI Automation"
    },
    {
      title: "AI-Powered Content Generator",
      description: "Advanced content creation platform using multiple LLMs for blog posts, social media, and marketing copy",
      tech: ["OpenAI API", "Claude", "React", "PostgreSQL"],
      features: [
        "Multi-format content generation",
        "Brand voice adaptation",
        "SEO optimization",
        "Batch processing"
      ],
      metrics: {
        "Content Quality": "96%",
        "Time Saved": "85%",
        "User Satisfaction": "4.8/5"
      },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Content AI"
    },
    {
      title: "Smart Code Review Assistant",
      description: "AI-driven code analysis tool that automatically reviews code for bugs, security issues, and best practices",
      tech: ["CodeT5", "AST Analysis", "Python", "GitHub API"],
      features: [
        "Automated bug detection",
        "Security vulnerability scanning",
        "Performance optimization suggestions",
        "Code quality metrics"
      ],
      metrics: {
        "Bug Detection": "91%",
        "False Positives": "< 5%",
        "Development Speed": "+40%"
      },
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      category: "Developer Tools"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Machine learning platform for business intelligence with real-time predictions and insights",
      tech: ["TensorFlow", "React", "Python", "Apache Kafka"],
      features: [
        "Real-time data processing",
        "Predictive modeling",
        "Interactive visualizations",
        "Custom ML pipelines"
      ],
      metrics: {
        "Prediction Accuracy": "89%",
        "Processing Speed": "100K records/sec",
        "ROI Improvement": "250%"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Data Science"
    },
    {
      title: "AI Personal Assistant Platform",
      description: "Comprehensive AI assistant for task automation, scheduling, and productivity enhancement",
      tech: ["GPT-4", "Speech-to-Text", "React Native", "MongoDB"],
      features: [
        "Voice command processing",
        "Calendar integration",
        "Email automation",
        "Task prioritization"
      ],
      metrics: {
        "User Productivity": "+60%",
        "Task Completion": "94%",
        "User Retention": "85%"
      },
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      category: "Productivity AI"
    },
    {
      title: "Intelligent Document Processor",
      description: "AI-powered document analysis and extraction system for automated data processing",
      tech: ["OCR", "NLP", "Computer Vision", "FastAPI"],
      features: [
        "Multi-format document support",
        "Automated data extraction",
        "Intelligent categorization",
        "Batch processing capabilities"
      ],
      metrics: {
        "Accuracy": "97%",
        "Processing Speed": "1000 docs/hour",
        "Manual Work Reduction": "90%"
      },
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      category: "Document AI"
    }
  ];

  const categories = ["All", "AI Automation", "Content AI", "Developer Tools", "Data Science", "Productivity AI", "Document AI"];
  
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="bg-[#0F0817] relative pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ai-tag mb-6"
              >
                AI Innovation Showcase
              </motion.span>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
              >
                AI Development Portfolio
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/80 mb-8"
              >
                Explore cutting-edge AI solutions that transform businesses and enhance human capabilities. Each project showcases the power of artificial intelligence in solving real-world challenges.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500">
                  Discuss Your Project
                </Button>
                <Button size="lg" variant="outline">
                  Download Case Studies
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured AI Projects</h2>
              <p className="text-xl text-white/70">Real-world applications of artificial intelligence</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card overflow-hidden group hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-pink-500/20 text-pink-400">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                        <ul className="text-sm text-white/70 space-y-1">
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-pink-400"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                        <div className="space-y-1">
                          {Object.entries(project.metrics).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                              <span className="text-white/70">{key}:</span>
                              <span className="text-green-400 font-semibold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500">
                      View Case Study
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">AI Expertise Areas</h2>
              <p className="text-xl text-white/70">Comprehensive artificial intelligence capabilities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Brain size={32} />, title: "Machine Learning", desc: "Custom ML models and algorithms" },
                { icon: <Bot size={32} />, title: "AI Agents", desc: "Intelligent automation systems" },
                { icon: <Database size={32} />, title: "Data Processing", desc: "Large-scale data analysis" },
                { icon: <Globe size={32} />, title: "Web AI", desc: "AI-powered web applications" },
                { icon: <Server size={32} />, title: "AI Infrastructure", desc: "Scalable AI deployment" },
                { icon: <Smartphone size={32} />, title: "Mobile AI", desc: "AI in mobile applications" },
                { icon: <Code size={32} />, title: "AI Development", desc: "Full-stack AI solutions" },
                { icon: <Zap size={32} />, title: "Real-time AI", desc: "Low-latency AI systems" }
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center glass-card p-6"
                >
                  <div className="text-pink-400 mb-4 flex justify-center">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-white/70 text-sm">{capability.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto glass-card p-12">
              <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
              <p className="text-xl text-white/80 mb-8">
                Let's discuss how AI can transform your business and create innovative solutions that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500">
                  Start Your AI Project
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIPortfolio;
