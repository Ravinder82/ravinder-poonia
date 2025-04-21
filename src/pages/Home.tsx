
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import Services from '../components/sections/Services';

const Home = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="bg-[#0F0817] relative">
        <AboutHero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
