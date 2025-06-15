
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactDialog from '../components/contact/ContactDialog';
import { Brain, Code, Users, Target, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';

const AICoaching = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    // Scroll to contact section
    document.getElementById('coaching-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-white bg-[#0F0817]">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <span className="ai-tag mb-4">AI Development & Coaching</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Master AI Development with Expert Guidance
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Transform your coding journey with personalized AI mentorship. Learn cutting-edge technologies, 
                build real-world projects, and accelerate your career in AI development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  View Coaching Packages
                </button>
                <Link to="/ai-portfolio" className="btn-outline">
                  See Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-16 bg-[#1A0F24]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">What You'll Master</h2>
              <p className="section-subtitle">Comprehensive AI development skills for the modern tech landscape</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI/ML Fundamentals",
                  description: "Deep understanding of machine learning algorithms, neural networks, and AI frameworks"
                },
                {
                  icon: Code,
                  title: "Python & AI Libraries",
                  description: "Master TensorFlow, PyTorch, Scikit-learn, and modern AI development tools"
                },
                {
                  icon: Users,
                  title: "Real-World Projects",
                  description: "Build production-ready AI applications with hands-on project experience"
                },
                {
                  icon: Target,
                  title: "Industry Best Practices",
                  description: "Learn professional workflows, code quality, and deployment strategies"
                },
                {
                  icon: Clock,
                  title: "Accelerated Learning",
                  description: "Fast-track your progress with personalized guidance and structured curriculum"
                },
                {
                  icon: Star,
                  title: "Career Advancement",
                  description: "Portfolio building, interview prep, and career transition support"
                }
              ].map((item, index) => (
                <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform">
                  <item.icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coaching Packages */}
        <section id="packages" className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">Coaching Packages</h2>
              <p className="section-subtitle">Choose the perfect mentorship plan for your goals</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$297",
                  period: "per month",
                  description: "Perfect for beginners starting their AI journey",
                  features: [
                    "2 one-on-one sessions per month",
                    "Code review and feedback",
                    "Project guidance",
                    "Email support",
                    "Learning resources"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$497",
                  period: "per month",
                  description: "Ideal for developers advancing their AI skills",
                  features: [
                    "4 one-on-one sessions per month",
                    "Real-world project collaboration",
                    "Code review and optimization",
                    "Career guidance",
                    "Priority support",
                    "Industry networking"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$797",
                  period: "per month",
                  description: "Comprehensive mentorship for serious AI developers",
                  features: [
                    "8 one-on-one sessions per month",
                    "Custom curriculum design",
                    "Production deployment guidance",
                    "24/7 support",
                    "Interview preparation",
                    "Job placement assistance"
                  ],
                  popular: false
                }
              ].map((pkg, index) => (
                <div key={index} className={`glass-card p-8 relative ${pkg.popular ? 'border-2 border-pink-500' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-2">
                      {pkg.price}
                      <span className="text-lg text-white/60">/{pkg.period}</span>
                    </div>
                    <p className="text-white/70">{pkg.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-white/80">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => handlePackageSelect(pkg.name)}
                    className="w-full btn-primary"
                  >
                    Choose {pkg.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-[#1A0F24]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-title">Success Stories</h2>
              <p className="section-subtitle">Real results from our AI coaching program</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Data Scientist at Google",
                  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                  quote: "The personalized coaching helped me transition from web development to AI/ML. Now I'm building cutting-edge models at Google!"
                },
                {
                  name: "Marcus Johnson",
                  role: "AI Engineer at OpenAI",
                  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
                  quote: "Ravinder's mentorship was invaluable. The real-world projects and industry insights made all the difference in my career."
                },
                {
                  name: "Priya Patel",
                  role: "ML Researcher at Stanford",
                  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
                  quote: "From zero AI knowledge to publishing research papers. The structured learning path and expert guidance were game-changing."
                }
              ].map((story, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{story.name}</h4>
                      <p className="text-pink-400 text-sm">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic">"{story.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="coaching-contact" className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="section-title">Ready to Start Your AI Journey?</h2>
              <p className="section-subtitle mb-8">
                Book a free consultation to discuss your goals and find the perfect coaching package
              </p>
              
              {selectedPackage && (
                <div className="bg-pink-500/10 border border-pink-500/20 rounded-lg p-4 mb-6">
                  <p className="text-pink-400">
                    You've selected the <strong>{selectedPackage}</strong> package. Let's discuss how to get started!
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ContactDialog />
                <a 
                  href="mailto:1294ravinder@gmail.com" 
                  className="btn-outline flex items-center gap-2"
                >
                  Email Directly
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AICoaching;
