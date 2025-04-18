
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import Connect from '../components/about/Connect';

const Home = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="bg-[#0F0817] relative">
        <AboutHero />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
