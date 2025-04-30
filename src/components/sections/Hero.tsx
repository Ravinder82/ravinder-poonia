import { ArrowRight } from 'lucide-react';
import { AvatarCircles } from '@/components/magicui/avatar-circles';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import { Icons } from '@/components/magicui/icons';

const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-pattern pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <div className="mb-6">
              <span className="ai-tag mb-4">AI-Powered Development</span>
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                    Ravinder Poonia
                  </h1>
                  <AvatarCircles
                    className="mt-2"
                    numPeople={99}
                    avatarUrls={[
                      { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=1", profileUrl: "#" },
                      { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=2", profileUrl: "#" },
                      { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=3", profileUrl: "#" },
                    ]}
                  />
                </div>
                <div className="relative w-full h-[200px] overflow-visible">
                  <div className="relative flex h-full w-full flex-col items-center justify-center">
                    <OrbitingCircles iconSize={40} radius={160}>
                      <Icons.openai />
                      <Icons.chatgpt />
                      <Icons.tensorflow />
                      <Icons.pytorch />
                      <Icons.huggingface />
                    </OrbitingCircles>
                    <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                      <Icons.stability />
                      <Icons.midjourney />
                      <Icons.anthropic />
                      <Icons.deepmind />
                    </OrbitingCircles>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Empowering Developers with <span className="text-gradient">AI-Driven Expertise</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Elite mentorship in AI integration, software development, and digital transformation. Transform your coding journey with industry-leading guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#services" className="btn-primary">
                  Explore AI Services
                </a>
                <a href="#projects" className="btn-outline">
                  View Portfolio Projects
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-6 animate-float">
              <div className="rounded-lg bg-navy overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-white/60 text-sm">AI-Code-Assistant.tsx</div>
                </div>
                <div className="p-4 text-left">
                  <pre className="text-xs md:text-sm text-teal overflow-x-auto">
                    <code>
{`// AI-powered component generation
const AIComponent = ({ prompt, style }) => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    // Generate components based on prompt
    generateAIComponents(prompt)
      .then(result => setComponents(result))
      .catch(error => console.error(error));
  }, [prompt]);

  return (
    <div className={style}>
      {components.map((component, index) => (
        <component.type key={index} {...component.props} />
      ))}
    </div>
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="mt-4 text-sm text-white/80">
                <span className="text-teal font-medium">AI-Powered Development:</span> Let our intelligent systems build components based on your requirements.
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 bg-secondary p-4 rounded-xl border border-teal/30 shadow-xl w-40 animate-float" style={{ animationDelay: '0.2s' }}>
              <p className="text-teal text-xs mb-2 font-medium">Ready to start?</p>
              <a href="#contact" className="text-white flex items-center text-sm group">
                Contact Us 
                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
