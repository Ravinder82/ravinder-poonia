import { ArrowRight } from 'lucide-react';
import { AvatarCircles } from '@/components/magicui/avatar-circles';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';

const Icons = {
  openai: () => (
    <svg viewBox="0 0 24 24" className="fill-white" width="100%" height="100%">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z" />
    </svg>
  ),
  chatgpt: () => (
    <svg viewBox="0 0 24 24" className="fill-green-400" width="100%" height="100%">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  ),
  tensorflow: () => (
    <svg viewBox="0 0 24 24" className="fill-orange-400" width="100%" height="100%">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    </svg>
  ),
  pytorch: () => (
    <svg viewBox="0 0 24 24" className="fill-red-400" width="100%" height="100%">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  huggingface: () => (
    <svg viewBox="0 0 24 24" className="fill-yellow-400" width="100%" height="100%">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  stability: () => (
    <svg viewBox="0 0 24 24" className="fill-blue-400" width="100%" height="100%">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    </svg>
  ),
  midjourney: () => (
    <svg viewBox="0 0 24 24" className="fill-purple-400" width="100%" height="100%">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  anthropic: () => (
    <svg viewBox="0 0 24 24" className="fill-pink-400" width="100%" height="100%">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  deepmind: () => (
    <svg viewBox="0 0 24 24" className="fill-cyan-400" width="100%" height="100%">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
};
//Import necessary AI tool icons here.  e.g., import {AiOutlineAiFill} from 'react-icons/ai';

const OrbitingCirclesDemo = () => {
  //Implementation for OrbitingCirclesDemo component goes here.  This component should render 9 AI tool icons in an orbiting animation.
  return (
    <div>
      {/* Render orbiting circles with AI tool icons here */}
    </div>
  );
};

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