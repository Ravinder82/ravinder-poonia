
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Products from '../components/sections/Products';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
