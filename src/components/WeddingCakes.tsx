import React from 'react';
import { ArrowRight, Sparkles, HeartHandshake } from 'lucide-react';

interface WeddingCakesProps {
  onEnquireWedding: () => void;
}

export const WeddingCakes: React.FC<WeddingCakesProps> = ({ onEnquireWedding }) => {
  return (
    <section id="wedding-cakes" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Delicate background ambient styling */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#F7DCD3]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#F4EFEA] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#2D1F1A]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Visual Wedding Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-2xl border-4 border-[#FAF7F2] shadow-xl bg-[#FAF7F2]">
                  <img
                    src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=85"
                    alt="Elegant multi-tiered wedding cake styled with fresh florals"
                    className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Wedding Feature Pill */}
                <div className="absolute -bottom-5 -right-2 sm:right-6 bg-[#FAF7F2] px-5 py-3 rounded-2xl shadow-md border border-[#2D1F1A]/10 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#F7DCD3] text-[#D97757]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-serif font-bold text-[#2D1F1A]">100% Gluten-Free</p>
                    <p className="text-[11px] text-[#4A352D]/80">For all your wedding guests to share</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wedding Text & CTA */}
            <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D97757]/30 text-[#4A352D] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D97757]" />
                <span>Wedding Celebrations</span>
              </div>

              {/* Exact required headline */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1F1A] font-semibold tracking-tight leading-tight">
                Wedding Cakes Made for Your Celebration
              </h2>

              <p className="text-base sm:text-lg text-[#4A352D]/90 leading-relaxed">
                Pearl &amp; Groove offers beautiful 100% gluten-free wedding cakes for London couples and their guests. Made with ground almonds and minimal ingredients, our wedding cakes combine modern, creative and rustic charm with uncompromised flavour.
              </p>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#2D1F1A]/5 text-xs text-[#4A352D] space-y-1">
                <p className="font-semibold text-[#2D1F1A]">Custom Dietary Options Available</p>
                <p className="text-[#4A352D]/80">
                  Discuss options including refined-sugar-free, dairy-free and vegan tiers while keeping every layer strictly 100% gluten-free.
                </p>
              </div>

              {/* Exact required CTA */}
              <div className="pt-2">
                <button
                  onClick={onEnquireWedding}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#2D1F1A] hover:bg-[#D97757] transition-all shadow-md hover:shadow-lg cursor-pointer group"
                >
                  <span>Enquire About Your Wedding Cake</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
