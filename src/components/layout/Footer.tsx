import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy/90 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-teal flex items-center justify-center">
                <span className="text-navy font-bold text-lg">A</span>
              </div>
              <span className="text-white font-bold text-xl">AI Digital</span>
            </Link>
            <p className="text-white/60 mb-4">Building smarter digital futures with AI-driven solutions.</p>
            <div className="flex gap-4">
              <a href="https://github.com" className="text-white/60 hover:text-teal transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-white/60 hover:text-teal transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white/60 hover:text-teal transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:1294ravinder@gmail.com" className="text-white/60 hover:text-teal transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/#services" className="text-white/60 hover:text-teal transition-colors">Custom Web Apps</Link></li>
              <li><Link to="/#services" className="text-white/60 hover:text-teal transition-colors">Mobile Development</Link></li>
              <li><Link to="/#services" className="text-white/60 hover:text-teal transition-colors">AI Integration</Link></li>
              <li><Link to="/#services" className="text-white/60 hover:text-teal transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-teal transition-colors">AI Development Blog</a></li>
              <li><a href="#" className="text-white/60 hover:text-teal transition-colors">Prompt Engineering Guide</a></li>
              <li><a href="#" className="text-white/60 hover:text-teal transition-colors">Open Source Components</a></li>
              <li><a href="#" className="text-white/60 hover:text-teal transition-colors">iOS App Demos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p className="text-white/60 mb-2">Feel free to reach out for a free consultation.</p>
            <a href="mailto:1294ravinder@gmail.com" className="text-teal hover:underline">1294ravinder@gmail.com</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40">© {currentYear} AI Digital Futures. All rights reserved.</p>
          <p className="text-white/40 mt-1 text-xs">
            <span className="ai-tag mr-2">Powered by AI</span>
            Built with modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
