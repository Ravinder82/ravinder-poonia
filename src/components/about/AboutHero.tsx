
import { useState, useEffect } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/ec5a11cb-abdf-4fb8-b7b7-390ac7842fdc.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="min-h-[90vh] pt-28 pb-16 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 z-10 animate-fade-in">
            <span className="ai-tag mb-4">Software Developer & AI Automation Consultant</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Ravinder Poonia
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl">
              Transforming complex challenges into innovative digital solutions through AI-driven development and automation.
            </p>
            
            <div className="flex gap-4 text-sm text-white/60 mb-8">
              <div>
                <p className="text-pink-400 font-medium mb-1">Experience</p>
                <p>5+ Years</p>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <p className="text-blue-400 font-medium mb-1">Projects</p>
                <p>25+ Completed</p>
              </div>
              <div className="h-12 w-px bg-white/10"></div>
              <div>
                <p className="text-purple-400 font-medium mb-1">Expertise</p>
                <p>AI & Development</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/ai-coaching" className="btn-primary">
                Explore AI Coaching
              </Link>
              <Link to="/ai-portfolio" className="btn-outline">
                View AI Portfolio
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative z-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl max-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-600/20 to-blue-500/20 mix-blend-overlay z-10"></div>
              
              {!imageLoaded && (
                <div className="w-full aspect-[4/5] max-h-[500px] bg-gray-800 animate-pulse flex items-center justify-center">
                  <Avatar className="w-16 h-16 opacity-50">
                    <span className="text-lg font-bold text-pink-400">RP</span>
                  </Avatar>
                </div>
              )}
              
              <img 
                src="/lovable-uploads/ec5a11cb-abdf-4fb8-b7b7-390ac7842fdc.png" 
                alt="Ravinder Poonia" 
                className={`w-full h-auto max-h-[500px] object-cover object-top z-0 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
