
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Code, Component, Bot, Palette, GraduationCap, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="text-pink-500" size={24} />,
      title: "Custom Web Apps",
      description: "Full-stack development with React, Next.js, and Node.js for scalable web applications.",
      features: ["Responsive web applications", "Progressive Web Apps (PWA)", "Real-time functionality"]
    },
    {
      icon: <Bot className="text-purple-500" size={24} />,
      title: "AI Integration",
      description: "Enhance your products with intelligent features powered by the latest AI technologies.",
      features: ["Chatbots & virtual assistants", "Predictive analytics", "Natural language processing"]
    },
    {
      icon: <Component className="text-blue-500" size={24} />,
      title: "Mobile Development",
      description: "Native iOS development with SwiftUI and cross-platform solutions for mobile applications.",
      features: ["iOS app development", "Cross-platform solutions", "Mobile-first design"]
    },
    {
      icon: <Palette className="text-teal" size={24} />,
      title: "UI/UX Design",
      description: "Create cohesive and intuitive user experiences with AI-powered design systems.",
      features: ["Interactive prototypes", "Component libraries", "User behavior analytics"]
    },
    {
      icon: <GraduationCap className="text-pink-400" size={24} />,
      title: "Online Tutoring",
      description: "Personalized guidance in software development, AI integration, and modern tech stack.",
      features: ["One-on-one mentoring", "Project-based learning", "Career guidance"]
    }
  ];

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="bg-[#0F0817] relative pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="ai-tag mb-4">What We Offer</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive solutions for your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#1A0F24]/40 p-8 rounded-xl card-hover border border-pink-500/20"
              >
                <div className="h-12 w-12 rounded-lg bg-[#1A0F24]/60 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="text-pink-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
