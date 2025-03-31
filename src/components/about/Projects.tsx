
import { Code, Component, BarChart3 } from 'lucide-react';

const ActiveProjects = () => {
  const projects = [
    {
      icon: <Code className="text-teal" />,
      title: "AI Cursor Framework",
      description: "Next-gen code assistant with contextual awareness for enhanced developer productivity.",
      tags: ["GPT-4", "TypeScript", "Electron"]
    },
    {
      icon: <Component className="text-teal" />,
      title: "Smart Component Library",
      description: "300+ AI-generated UI elements designed for customization and rapid development.",
      tags: ["React", "Tailwind CSS", "AI Design"]
    },
    {
      icon: <BarChart3 className="text-teal" />,
      title: "Policy Analytics Toolkit",
      description: "AI-powered legislative impact analysis system for data-driven policy decisions.",
      tags: ["Python", "D3.js", "Machine Learning"]
    }
  ];

  const techStack = {
    "Frontend": ["SwiftUI", "React", "Next.js"],
    "AI Tools": ["GPT-4", "LangChain", "HuggingFace"],
    "DevOps": ["Docker", "Kubernetes", "AWS AI Services"]
  };

  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="ai-tag mb-4">Innovation</span>
          <h2 className="section-title">Current Innovation Lab</h2>
          <p className="section-subtitle mx-auto">
            Exploring the intersection of artificial intelligence and practical applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-secondary/30 p-6 rounded-xl card-hover border border-white/10"
            >
              <div className="h-12 w-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-6">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-white/70 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Development Stack</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], idx) => (
              <div key={idx} className="text-center">
                <h4 className="text-teal font-medium mb-4">{category}</h4>
                <div className="space-y-3">
                  {technologies.map((tech, i) => (
                    <div 
                      key={i} 
                      className="bg-white/10 py-2 px-4 rounded-lg text-white/80 transition-transform hover:translate-y-[-2px] hover:bg-white/15"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActiveProjects;
