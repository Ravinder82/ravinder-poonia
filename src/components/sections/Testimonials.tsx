
import { Marquee } from "@/components/ui/marquee";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Tech Lead at TechCorp India",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    text: "Ravinder's AI expertise transformed our development workflow. His solutions are innovative and perfectly tailored to our needs."
  },
  {
    name: "Raj Patel",
    role: "Startup Founder",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=raj",
    text: "Outstanding work on our AI integration project. The results exceeded our expectations!"
  },
  {
    name: "Sarah Wilson",
    role: "Product Manager",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    text: "Incredible attention to detail and technical expertise. A true professional!"
  },
  {
    name: "Amit Kumar",
    role: "CTO at InnovateX",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit",
    text: "The AI solutions provided have significantly improved our development efficiency."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-[#0F0817]">
      <div className="container mx-auto px-6 mb-10">
        <span className="ai-tag mb-4">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What Clients Say</h2>
      </div>
      
      <Marquee className="py-12" pauseOnHover>
        {testimonials.map((testimonial, i) => (
          <div key={i} className="mx-4 bg-[#1A0F24] p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/30 transition-all w-[300px]">
            <div className="flex items-start gap-4 mb-4">
              <Avatar>
                <AvatarImage src={testimonial.image} />
                <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-white font-medium">{testimonial.name}</h3>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-white/80">{testimonial.text}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
