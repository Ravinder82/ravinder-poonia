
import { FileText, Github, FileCode } from 'lucide-react';

const Connect = () => {
  return (
    <section id="connect" className="py-24 bg-gradient-to-b from-[#0F0817] to-[#0F0817]/95">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="ai-tag mb-4">Collaboration</span>
          <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">Connect & Collaborate</h2>
          <p className="section-subtitle mx-auto">
            Let's create something amazing together
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/30 transition-colors backdrop-blur-md bg-[#1A0F24]/40 hover:shadow-lg hover:shadow-pink-500/5">
            <div className="h-12 w-12 rounded-lg bg-[#1A0F24]/60 flex items-center justify-center mb-6">
              <FileText className="text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">AI Development Blog</h3>
            <p className="text-white/70 mb-6">
              Insights, tutorials, and best practices for AI-driven development.
            </p>
            <div className="bg-[#1A0F24]/60 p-4 rounded-lg mb-4">
              <span className="text-pink-400 text-sm font-medium">Latest Post</span>
              <h4 className="text-white font-medium mt-1">Implementing AI Agents in SwiftUI Apps</h4>
            </div>
            <a href="#" className="text-pink-400 hover:underline flex items-center">
              Read Blog
              <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/30 transition-colors backdrop-blur-md bg-[#1A0F24]/40 hover:shadow-lg hover:shadow-purple-500/5">
            <div className="h-12 w-12 rounded-lg bg-[#1A0F24]/60 flex items-center justify-center mb-6">
              <Github className="text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Toolkit Showcase</h3>
            <p className="text-white/70 mb-6">
              Free resources and open-source projects to boost your development.
            </p>
            <div className="space-y-3">
              <a href="#" className="block bg-[#1A0F24]/60 p-3 rounded-lg text-white hover:bg-white/10 transition-colors">
                <span className="text-purple-400 text-sm">Free Download</span>
                <p className="text-white/90">Prompt Engineering Guide (PDF)</p>
              </a>
              <a href="#" className="block bg-[#1A0F24]/60 p-3 rounded-lg text-white hover:bg-white/10 transition-colors">
                <span className="text-purple-400 text-sm">GitHub</span>
                <p className="text-white/90">Open-Source Component Library</p>
              </a>
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/30 transition-colors backdrop-blur-md bg-[#1A0F24]/40 hover:shadow-lg hover:shadow-blue-500/5">
            <div className="h-12 w-12 rounded-lg bg-[#1A0F24]/60 flex items-center justify-center mb-6">
              <FileCode className="text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Contact</h3>
            <p className="text-white/70 mb-6">
              Have a project in mind? Let's discuss how we can work together.
            </p>
            <div className="space-y-4">
              <a href="mailto:1294ravinder@gmail.com" className="block text-white hover:text-blue-400 transition-colors">
                <span className="text-blue-400 text-sm">Email</span>
                <p className="text-white">1294ravinder@gmail.com</p>
              </a>
              <div className="flex gap-4">
                <a href="#" className="text-white/70 hover:text-pink-500 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-purple-500 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="text-white/70 hover:text-blue-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="/#contact" className="btn-primary bg-gradient-to-r from-pink-500 to-blue-500 border-none">
            Start a Project Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
