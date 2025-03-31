
import { Component, FileCode, ShoppingBag } from 'lucide-react';

const Products = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-navy via-navy/95 to-navy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="ai-tag mb-4">Featured Products</span>
          <h2 className="section-title">AI-Powered Product Suite</h2>
          <p className="section-subtitle mx-auto">
            Discover our cutting-edge solutions designed to accelerate your digital transformation
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-transparent">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left text-white font-medium border-b border-white/10">Product</th>
                <th className="py-4 px-6 text-left text-white font-medium border-b border-white/10">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="group transition-colors hover:bg-white/5">
                <td className="py-5 px-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-secondary/40 flex items-center justify-center">
                      <FileCode size={20} className="text-teal" />
                    </div>
                    <span className="font-medium text-white">Cursor Rules Engine</span>
                  </div>
                </td>
                <td className="py-5 px-6 text-white/70 border-b border-white/10">
                  AI-powered code automation toolkit that streamlines development workflows and boosts productivity
                </td>
              </tr>
              <tr className="group transition-colors hover:bg-white/5">
                <td className="py-5 px-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-secondary/40 flex items-center justify-center">
                      <Component size={20} className="text-teal" />
                    </div>
                    <span className="font-medium text-white">Landing Page Templates</span>
                  </div>
                </td>
                <td className="py-5 px-6 text-white/70 border-b border-white/10">
                  AI-optimized conversion-focused templates that adapt to your brand and audience preferences
                </td>
              </tr>
              <tr className="group transition-colors hover:bg-white/5">
                <td className="py-5 px-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded bg-secondary/40 flex items-center justify-center">
                      <ShoppingBag size={20} className="text-teal" />
                    </div>
                    <span className="font-medium text-white">AI Agents Marketplace</span>
                  </div>
                </td>
                <td className="py-5 px-6 text-white/70 border-b border-white/10">
                  Pre-trained models for business automation that can be customized to fit your specific needs
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Products;
