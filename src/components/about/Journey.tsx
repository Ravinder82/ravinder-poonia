
import { CircleCheck, Briefcase, GraduationCap } from 'lucide-react';

const Journey = () => {
  return (
    <section className="py-24 bg-navy/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="ai-tag mb-4">My Background</span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle mx-auto">
            A path from policy research to AI-driven development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="mr-3 text-teal" />
              Education
            </h3>
            
            <div className="relative pl-8 border-l border-white/20">
              <div className="absolute w-4 h-4 bg-teal rounded-full -left-2 top-1.5"></div>
              <div className="bg-secondary/30 rounded-xl p-6 border border-white/10">
                <h4 className="text-xl font-bold text-white mb-2">B.Tech Computer Science & Technology</h4>
                <p className="text-white/70 mb-4">Specialization: Software Engineering & AI Systems</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                    AI Systems
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-xs">
                    Software Architecture
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Briefcase className="mr-3 text-teal" />
              Experience Timeline
            </h3>
            
            <div className="relative pl-8 border-l border-white/20">
              <div className="absolute w-4 h-4 bg-teal rounded-full -left-2 top-1.5"></div>
              <div className="bg-secondary/30 rounded-xl p-6 border border-white/10">
                <span className="text-teal text-sm font-medium">2022-Present</span>
                <h4 className="text-xl font-bold text-white mt-1 mb-2">Full-time AI Developer</h4>
                <p className="text-white/70 mb-4">Focus: Small Business AI Solutions</p>
                <ul className="space-y-2">
                  {["Developed AI-powered web applications", "Created custom AI agents", "Integrated GPT models into existing products"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative pl-8 border-l border-white/20">
              <div className="absolute w-4 h-4 bg-teal rounded-full -left-2 top-1.5"></div>
              <div className="bg-secondary/30 rounded-xl p-6 border border-white/10">
                <span className="text-teal text-sm font-medium">Previous Experience</span>
                <h4 className="text-xl font-bold text-white mt-1 mb-2">Public Policy Research</h4>
                <p className="text-white/70 mb-4">Led tech integration at Delhi Assembly Research Centre</p>
                <ul className="space-y-2">
                  {["Developed data visualization tools for policy analysis", "Designed interactive dashboards for legislators", "Implemented data-driven decision-making systems"].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CircleCheck size={16} className="text-teal mr-2 mt-1 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
