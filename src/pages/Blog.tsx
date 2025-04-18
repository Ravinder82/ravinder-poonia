
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing software development and what it means for developers.",
      date: "April 15, 2025",
      readTime: "5 min read",
      category: "AI & Development"
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and patterns for creating maintainable and scalable React applications in 2025.",
      date: "April 10, 2025",
      readTime: "7 min read",
      category: "React"
    },
    {
      title: "Public Policy in the Age of AI",
      excerpt: "Understanding the intersection of artificial intelligence and public policy making.",
      date: "April 5, 2025",
      readTime: "6 min read",
      category: "Policy"
    }
  ];

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main className="bg-[#0F0817] relative pt-28 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="ai-tag mb-4">Insights & Updates</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Latest Blog Posts
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Exploring the intersection of AI, development, and public policy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="bg-[#1A0F24]/40 rounded-xl p-6 card-hover border border-pink-500/20"
              >
                <div className="flex items-center gap-2 text-pink-400 text-sm mb-4">
                  <span className="px-3 py-1 bg-pink-500/10 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
                <p className="text-white/70 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-white/60">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <a href="#" className="text-pink-400 flex items-center gap-1 group">
                    Read More
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
