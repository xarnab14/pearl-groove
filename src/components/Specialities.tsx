import React from 'react';
import { WheatOff, Sparkles, Leaf, ShieldCheck, Heart, Info } from 'lucide-react';
import { SPECIALITIES } from '../data/bakeryData';

export const Specialities: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'WheatOff':
        return <WheatOff className="w-6 h-6 text-[#D97757]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D97757]" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#7A9078]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D97757]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#D97757]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D97757]" />;
    }
  };

  return (
    <section id="specialities" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#2D1F1A]/10 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-3">
            <span>Baking Foundations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1F1A] font-semibold tracking-tight">
            Our Specialities &amp; Ingredients
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A352D]/85 max-w-2xl mx-auto">
            Everything we bake is 100% gluten-free, crafted primarily with wholesome ground almonds rather than flour, alongside dedicated dietary categories.
          </p>
        </div>

        {/* 5 Distinct Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SPECIALITIES.map((item, index) => {
            const isFullWidth = index === 0;
            return (
              <div
                key={item.id}
                className={`group relative rounded-2xl p-7 bg-[#FDFBF7] border border-[#2D1F1A]/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  isFullWidth ? 'lg:col-span-1 md:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#2D1F1A]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(item.iconName)}
                    </div>
                    <span
                      className={`text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full ${
                        item.badge === 'Core Guarantee' || item.badge === 'Flourless Foundation'
                          ? 'bg-[#2D1F1A] text-[#FAF7F2]'
                          : 'bg-[#F4EFEA] text-[#4A352D] border border-[#2D1F1A]/10'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-[#2D1F1A] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#4A352D]/85 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {item.footnote && (
                  <div className="mt-6 pt-4 border-t border-[#2D1F1A]/5 flex items-start gap-2 text-xs text-[#4A352D]/70 italic">
                    <Info className="w-3.5 h-3.5 text-[#D97757] shrink-0 mt-0.5" />
                    <span>{item.footnote}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Responsible Transparency Disclaimer */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-[#F4EFEA] border border-[#2D1F1A]/10 text-xs sm:text-sm text-[#4A352D]/85 text-center max-w-4xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#D97757] shrink-0" />
          <span>
            <strong>Dietary Note:</strong> While 100% gluten-free applies to everything we bake, refined-sugar-free, dairy-free, and vegan characteristics belong to specific recipes. Please mention your exact dietary needs when enquiring.
          </span>
        </div>

      </div>
    </section>
  );
};
