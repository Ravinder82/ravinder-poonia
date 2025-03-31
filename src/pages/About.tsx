
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProfileHeader from '../components/about/ProfileHeader';
import Journey from '../components/about/Journey';
import ActiveProjects from '../components/about/Projects';
import Connect from '../components/about/Connect';

const About = () => {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main>
        <ProfileHeader />
        <Journey />
        <ActiveProjects />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default About;
