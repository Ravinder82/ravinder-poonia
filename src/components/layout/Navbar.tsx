import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ContactDialog from '../contact/ContactDialog';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F0817]/90 backdrop-blur-md shadow-lg border-b border-pink-500/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-r from-pink-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 font-bold text-xl">AI Digital</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white/80 hover:text-pink-400 transition-colors">Home</Link>
          <ContactDialog />
        </div>

        {/* Mobile Navigation */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute w-full bg-[#0F0817]/95 backdrop-blur-md border-b border-pink-500/20 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-6 flex flex-col gap-4">
          <Link to="/" className="text-white/80 hover:text-pink-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <div onClick={() => setIsMenuOpen(false)}>
            <ContactDialog />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
