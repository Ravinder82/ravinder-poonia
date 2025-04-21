
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/about/AboutHero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="bg-[#0F0817] relative">
        <AboutHero />
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-32">
              {/* AI Tools Animation */}
              <div className="relative w-full h-[300px]">
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

              {/* Avatar Circles */}
              <div className="flex justify-center">
                <AvatarCircles
                  numPeople={99}
                  avatarUrls={[
                    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=1", profileUrl: "#" },
                    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=2", profileUrl: "#" },
                    { imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=3", profileUrl: "#" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
