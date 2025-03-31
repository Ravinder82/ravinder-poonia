
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "AI Component Generator",
    category: "Web Development",
    description: "A Next.js and GPT-4 powered system that generates React components from natural language descriptions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "GPT-4", "React", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Smart Form Builder",
    category: "AI Integration",
    description: "Form builder with natural language processing that creates complex forms from simple descriptions.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["NLP", "React", "TypeScript", "Firebase"],
    link: "#"
  },
  {
    title: "AI-Powered Task Manager",
    category: "Mobile Apps",
    description: "iOS app that uses AI to prioritize tasks, suggest optimal work times, and automate routine activities.",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["SwiftUI", "Core ML", "iOS", "AI"],
    link: "#"
  },
  {
    title: "Intelligent Health Tracker",
    category: "Mobile Apps",
    description: "Health monitoring application with AI-powered insights and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1576089073624-b5401a57c2c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["SwiftUI", "HealthKit", "Machine Learning"],
    link: "#"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-navy/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="ai-tag mb-4">Our Work</span>
          <h2 className="section-title">Project Showcase</h2>
          <p className="section-subtitle mx-auto">
            Explore our latest AI-integrated projects and see how we're pushing the boundaries of technology
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['All', 'Web Development', 'AI Integration', 'Mobile Apps'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === category
                  ? 'bg-teal text-navy font-medium'
                  : 'bg-secondary/30 text-white/70 hover:bg-secondary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <a 
              href={project.link} 
              key={index} 
              className="group relative overflow-hidden rounded-xl card-hover border border-white/10"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent opacity-90"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-teal text-sm font-medium block mb-2">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="h-10 w-10 rounded-full bg-teal/20 flex items-center justify-center group-hover:bg-teal transition-colors">
                    <ArrowUpRight size={18} className="text-teal group-hover:text-navy transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn-outline">
            See Live Demos →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
