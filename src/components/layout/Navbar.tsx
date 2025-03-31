
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-teal flex items-center justify-center">
            <span className="text-navy font-bold text-lg">A</span>
          </div>
          <span className="text-white font-bold text-xl">AI Digital</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white/80 hover:text-teal transition-colors">Home</Link>
          <Link to="/#services" className="text-white/80 hover:text-teal transition-colors">Services</Link>
          <Link to="/#projects" className="text-white/80 hover:text-teal transition-colors">Projects</Link>
          <Link to="/about" className="text-white/80 hover:text-teal transition-colors">About</Link>
          <Link to="/#contact" className="btn-primary">Contact</Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute w-full bg-navy shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-6 flex flex-col gap-4">
          <Link to="/" className="text-white/80 hover:text-teal transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/#services" className="text-white/80 hover:text-teal transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/#projects" className="text-white/80 hover:text-teal transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/about" className="text-white/80 hover:text-teal transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/#contact" className="btn-primary w-full text-center" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
