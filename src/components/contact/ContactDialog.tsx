
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const ContactDialog = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-pink-500 to-blue-500 border-none">
          <Mail className="mr-2 h-4 w-4" />
          Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#1A0F24] text-white border border-pink-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
            Get in Touch
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-[#0F0817] border-pink-500/20"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#0F0817] border-pink-500/20"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#0F0817] border-pink-500/20 min-h-[100px]"
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-pink-500 to-blue-500 border-none"
          >
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
