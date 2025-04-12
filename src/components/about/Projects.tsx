
import { Code, Component, BarChart3 } from 'lucide-react';

const ActiveProjects = () => {
  const projects = [
    {
      icon: <Code className="text-pink-500" />,
      title: "AI Cursor Framework",
      description: "Next-gen code assistant with contextual awareness for enhanced developer productivity.",
      tags: ["GPT-4", "TypeScript", "Electron"]
    },
    {
      icon: <Component className="text-purple-500" />,
      title: "Smart Component Library",
      description: "300+ AI-generated UI elements designed for customization and rapid development.",
      tags: ["React", "Tailwind CSS", "AI Design"]
    },
    {
      icon: <BarChart3 className="text-blue-500" />,
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
    <section id="projects" className="py-24 bg-[#0F0817]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="ai-tag mb-4">Innovation</span>
          <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">Current Innovation Lab</h2>
          <p className="section-subtitle mx-auto">
            Exploring the intersection of artificial intelligence and practical applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#1A0F24]/40 p-6 rounded-xl card-hover border border-pink-500/20 hover:border-pink-500/30 transition-colors"
            >
              <div className="h-12 w-12 rounded-lg bg-[#1A0F24]/60 flex items-center justify-center mb-6">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-white/70 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#1A0F24]/60 rounded-full text-white/80 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-8 rounded-xl border border-pink-500/20 hover:border-pink-500/30 transition-colors backdrop-blur-md bg-[#1A0F24]/40">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Development Stack</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], idx) => (
              <div key={idx} className="text-center">
                <h4 className="text-pink-400 font-medium mb-4">{category}</h4>
                <div className="space-y-3">
                  {technologies.map((tech, i) => (
                    <div 
                      key={i} 
                      className="bg-[#1A0F24]/60 py-2 px-4 rounded-lg text-white/80 transition-transform hover:translate-y-[-2px] hover:bg-white/15"
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
