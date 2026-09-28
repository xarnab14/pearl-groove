import React from 'react';
import { Sparkles, Heart, Clock, Award } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/bakeryData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F4EFEA] relative border-t border-b border-[#2D1F1A]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#2D1F1A]/10 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Story &amp; Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1F1A] font-semibold tracking-tight leading-tight">
            Crafted with Flavour, Quality &amp; Pure Ingredients
          </h2>
        </div>

        {/* Editorial 2-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#4A352D] text-base sm:text-lg leading-relaxed">
            
            {/* Direct Required Founding Quote Block */}
            <blockquote className="p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#D97757] shadow-xs">
              <p className="font-serif italic text-xl sm:text-2xl text-[#2D1F1A] leading-snug">
                “{BAKERY_CONFIG.foundingStory}”
              </p>
              <footer className="mt-3 text-xs font-sans font-semibold uppercase tracking-widest text-[#D97757]">
                — Serena Whitefield, Founder
              </footer>
            </blockquote>

            <p>
              In 2016, Pearl &amp; Groove opened its first store on <span className="font-semibold text-[#2D1F1A]">Portobello Road, London</span>. From those early days supplying London's thriving cafés, markets, and festivals, the bakery has stayed committed to perfecting delicious bakes that never compromise on taste.
            </p>

            <p>
              The bakery's philosophy is centred around <span className="font-semibold text-[#2D1F1A]">taste and quality</span>. Our products are made with <span className="font-semibold text-[#2D1F1A]">minimal ingredients, mainly ground almonds, without flour</span>.
            </p>

            <p>
              Over the years, the business has developed a wide range of cakes including <span className="font-semibold text-[#2D1F1A]">refined-sugar-free, dairy-free and vegan options</span>, while keeping everything strictly <span className="font-semibold text-[#2D1F1A]">100% gluten-free</span>.
            </p>

            {/* Core Values Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#2D1F1A]/5">
                <p className="text-2xl font-serif font-bold text-[#2D1F1A]">2013</p>
                <p className="text-xs text-[#4A352D]/80 mt-1">Founded in London from Serena's flat</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#2D1F1A]/5">
                <p className="text-2xl font-serif font-bold text-[#2D1F1A]">2016</p>
                <p className="text-xs text-[#4A352D]/80 mt-1">First store on Portobello Road</p>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#2D1F1A]/5">
                <p className="text-2xl font-serif font-bold text-[#2D1F1A]">100%</p>
                <p className="text-xs text-[#4A352D]/80 mt-1">Gluten-free across all bakes</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Editorial Imagery */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative overflow-hidden rounded-2xl border-4 border-[#FAF7F2] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
                alt="Artisan baker preparing cake with wholesome ingredients"
                className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-widest text-[#EADBC8] font-semibold">Our Philosophy</p>
                <p className="font-serif text-lg font-medium">Minimal Ingredients, Ground Almonds, Pure Flavour</p>
              </div>
            </div>

            {/* Subtle Editorial Note Box */}
            <div className="p-5 rounded-xl bg-[#FAF7F2] border border-[#2D1F1A]/10 text-xs text-[#4A352D] leading-relaxed">
              <span className="font-semibold text-[#2D1F1A]">Beyond a sweet treat:</span> Pearl &amp; Groove celebrates cake as an essential part of celebrations, sharing, friendship, parties, and special occasions across London.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
