
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const NewsletterForm = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed successfully!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-8 animate-fade-in">
      <div className="glass-card p-6 border border-pink-500/20">
        <h3 className="text-xl font-semibold mb-4 text-white">Subscribe to My Newsletter</h3>
        <p className="text-white/70 mb-6">
          Get the latest updates on AI, development, and tech tutorials directly in your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-[#0F0817] border-pink-500/20"
          />
          <Button 
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-blue-500 border-none"
          >
            <Send className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
