
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactDialog from '../components/contact/ContactDialog';
import { ExternalLink, Github, Play, Filter, Search } from 'lucide-react';

const AIPortfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Machine Learning', 'Computer Vision', 'NLP', 'Web Apps', 'Mobile Apps'];

  const projects = [
    {
      id: 1,
      title: "AI-Powered Code Assistant",
      category: "Machine Learning",
      description: "Intelligent code completion and suggestion tool using transformer models",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "GPT-3", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Smart Document Analyzer",
      category: "Computer Vision",
      description: "OCR and document classification system with 99.2% accuracy",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenCV", "YOLO", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Conversational AI Chatbot",
      category: "NLP",
      description: "Multi-language chatbot with context awareness and sentiment analysis",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      technologies: ["Python", "BERT", "DialogFlow", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Predictive Analytics Dashboard",
      category: "Web Apps",
      description: "Real-time data visualization with ML-powered forecasting",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Python", "Prophet"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "AI Fitness Trainer App",
      category: "Mobile Apps",
      description: "Computer vision-based form correction and workout recommendations",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "MediaPipe", "Firebase", "TensorFlow Lite"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Automated Trading Bot",
      category: "Machine Learning",
      description: "Algorithmic trading system with risk management and portfolio optimization",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "Alpha Vantage API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProjectClick = (projectId: number, type: 'live' | 'github') => {
    // In a real app, this would navigate to actual URLs
    console.log(`Opening ${type} for project ${projectId}`);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen text-white bg-[#0F0817]">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <span className="ai-tag mb-4">AI Development Portfolio</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Innovative AI Solutions in Action
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Explore a collection of cutting-edge AI projects showcasing machine learning, 
                computer vision, NLP, and intelligent automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Explore Projects
                </button>
                <Link to="/ai-coaching" className="btn-outline">
                  Learn AI Development
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-[#1A0F24]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-subtitle">Highlighted AI solutions with real-world impact</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.filter(p => p.featured).map((project) => (
                <div key={project.id} className="glass-card overflow-hidden group hover:scale-105 transition-transform">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-pink-400 text-sm font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleProjectClick(project.id, 'live')}
                        className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                        Live Demo
                      </button>
                      <button 
                        onClick={() => handleProjectClick(project.id, 'github')}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section id="projects" className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">All Projects</h2>
              <p className="section-subtitle">Complete portfolio of AI development work</p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="flex flex-wrap gap-2">
                <Filter className="w-5 h-5 text-white/60 mt-2 mr-2" />
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-pink-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
                />
              </div>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="glass-card overflow-hidden group hover:scale-105 transition-transform">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-pink-400 text-sm font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleProjectClick(project.id, 'live')}
                        className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                      <button 
                        onClick={() => handleProjectClick(project.id, 'github')}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/60 text-lg">No projects found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchTerm('');
                  }}
                  className="btn-outline mt-4"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1A0F24]">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-title">Ready to Build Something Amazing?</h2>
              <p className="section-subtitle mb-8">
                Let's collaborate on your next AI project and bring your innovative ideas to life
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactDialog />
                <Link to="/ai-coaching" className="btn-outline">
                  Learn AI Development
                </Link>
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
