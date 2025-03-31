
import { Code, Smartphone, Bot, Palette, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <Code size={24} className="text-teal" />,
    title: "Custom Web & Mobile Apps",
    description: "Full-stack development with React, Next.js, Node.js and iOS/macOS app development with SwiftUI.",
    features: ["Responsive web applications", "Native mobile experiences", "Cross-platform solutions"]
  },
  {
    icon: <Bot size={24} className="text-teal" />,
    title: "AI Integration",
    description: "Enhance your products with intelligent features powered by the latest AI technologies.",
    features: ["Chatbots & virtual assistants", "Predictive analytics", "Natural language processing"]
  },
  {
    icon: <Palette size={24} className="text-teal" />,
    title: "UI/UX Design Systems",
    description: "Create cohesive and intuitive user experiences with AI-powered design systems.",
    features: ["Interactive prototypes", "Component libraries", "User behavior analytics"]
  },
  {
    icon: <Smartphone size={24} className="text-teal" />,
    title: "AI Product Suite",
    description: "Specialized AI solutions designed to solve specific business challenges.",
    features: ["Prompt engineering packages", "Custom AI agents", "MCP server configuration"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="ai-tag mb-4">Our Services</span>
          <h2 className="section-title">AI-Enhanced Development Solutions</h2>
          <p className="section-subtitle mx-auto">
            Leverage the power of artificial intelligence to create smarter, more efficient digital products
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary/30 rounded-xl p-8 card-hover border border-white/5">
              <div className="h-12 w-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight size={18} className="text-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
