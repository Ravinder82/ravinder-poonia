
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface SkillProps {
  label: string;
  rating: number;
}

const Skill = ({ label, rating }: SkillProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{label}</span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Star 
              key={index} 
              size={16} 
              className={index < rating ? "text-teal fill-teal" : "text-white/30"} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfileHeader = () => {
  return (
    <section className="pt-32 pb-16 bg-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 relative animate-fade-in">
            <div className="rounded-2xl overflow-hidden border-4 border-teal/20 shadow-xl shadow-teal/5">
              <img
                src="/lovable-uploads/6a6c0f0a-0e8e-411f-84d4-5a8dd5a88c54.png"
                alt="Ravinder Poonia"
                className="w-full object-cover aspect-square bg-navy"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-navy p-3 rounded-lg border border-teal/30 shadow-lg">
              <span className="ai-tag">AI Developer</span>
            </div>
          </div>
          
          <div className="md:w-2/3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Ravinder Poonia</h1>
            <p className="text-xl text-white/80 mb-8">Bridging Policy Analysis with AI-Driven Development</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-teal font-semibold mb-4">Key Expertise</h2>
                <Skill label="AI-Powered Full-Stack Development" rating={4} />
                <Skill label="iOS App Architecture" rating={5} />
                <Skill label="Public Policy Tech Solutions" rating={4} />
              </div>
              
              <div className="bg-secondary/30 rounded-xl p-6 border border-white/10">
                <h2 className="text-teal font-semibold mb-4">Let's Connect</h2>
                <p className="text-white/70 mb-4">I'm always open to interesting projects and collaborations.</p>
                <a href="mailto:1294ravinder@gmail.com" className="btn-primary block text-center">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
