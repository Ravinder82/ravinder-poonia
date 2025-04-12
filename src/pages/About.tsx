
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import Journey from '../components/about/Journey';
import ActiveProjects from '../components/about/Projects';
import Connect from '../components/about/Connect';

const About = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        <AboutHero />
        <Journey />
        <ActiveProjects />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default About;
