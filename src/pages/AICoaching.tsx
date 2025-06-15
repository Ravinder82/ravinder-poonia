
import { motion } from 'framer-motion';
import { BrainCircuit, BookOpen, Terminal, LucideGraduationCap, Clock, Users, Award, CheckCircle } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';

const AICoaching = () => {
  const services = [
    {
      icon: <BrainCircuit size={32} className="text-pink-500" />,
      title: "AI Integration Mastery",
      description: "Master the art of integrating AI into your development workflow",
      features: [
        "OpenAI GPT API Integration",
        "Custom AI Agent Development", 
        "Prompt Engineering Best Practices",
        "AI-Powered Code Generation",
        "LLM Fine-tuning Techniques"
      ],
      duration: "8 weeks",
      price: "$2,999"
    },
    {
      icon: <Terminal size={32} className="text-blue-500" />,
      title: "AI Development Tools",
      description: "Learn to leverage cutting-edge AI development environments",
      features: [
        "Advanced Replit Development",
        "MCP Server Configuration",
        "AI-Assisted Debugging",
        "Automated Testing with AI",
        "Version Control for AI Projects"
      ],
      duration: "6 weeks", 
      price: "$1,999"
    },
    {
      icon: <BookOpen size={32} className="text-purple-500" />,
      title: "1-on-1 AI Mentorship",
      description: "Personalized coaching to accelerate your AI development journey",
      features: [
        "Weekly 90-minute Sessions",
        "Custom Learning Path",
        "Real-world Project Guidance",
        "Portfolio Review & Optimization",
        "Career Strategy Development"
      ],
      duration: "12 weeks",
      price: "$4,999"
    },
    {
      icon: <LucideGraduationCap size={32} className="text-teal" />,
      title: "AI Business Integration",
      description: "Transform your business processes with intelligent automation",
      features: [
        "AI Strategy Development",
        "Custom Automation Solutions",
        "ROI Analysis & Implementation",
        "Team Training Programs",
        "Ongoing Support & Maintenance"
      ],
      duration: "10 weeks",
      price: "$7,999"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at TechCorp",
      content: "Ravinder's AI coaching transformed how I approach development. I'm now building AI-powered features that have increased our team's productivity by 300%.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Startup Founder",
      content: "The business integration coaching helped us implement AI across our entire workflow. We've reduced costs by 40% while improving output quality.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Freelance Developer",
      content: "The 1-on-1 mentorship was invaluable. Ravinder helped me transition from traditional development to AI-enhanced workflows, tripling my client rates.",
      rating: 5
    }
  ];

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
                Transform Your Development Career
              </motion.span>
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
              >
                AI Development & Coaching
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/80 mb-8"
              >
                Master AI integration, build intelligent applications, and transform your career with expert-led coaching programs designed for the future of development.
              </motion.p>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500">
                  Start Your AI Journey
                </Button>
                <Button size="lg" variant="outline">
                  View Success Stories
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Comprehensive AI Training Programs</h2>
              <p className="text-xl text-white/70">Choose the perfect program to accelerate your AI development skills</p>
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
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-16 w-16 rounded-lg bg-secondary/50 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {service.duration}
                        </span>
                        <span className="text-pink-400 font-semibold">{service.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-white/70 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
                    Enroll Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-white/70">Our students achieve remarkable success in AI development</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">500+</div>
                <div className="text-white/80">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-white/80">Avg. Salary Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal mb-2">50+</div>
                <div className="text-white/80">AI Tools Mastered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-xl text-white/70">Hear from developers who transformed their careers</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Award key={i} size={16} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AICoaching;
