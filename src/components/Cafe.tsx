import React from 'react';
import { Coffee, Sun, Salad, Citrus, CupSoda, Sparkles } from 'lucide-react';
import { CAFE_FEATURES } from '../data/bakeryData';

export const Cafe: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#D97757]" />;
      case 'Salad':
        return <Salad className="w-5 h-5 text-[#7A9078]" />;
      case 'Citrus':
        return <Citrus className="w-5 h-5 text-[#D97757]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#4A352D]" />;
      case 'CupSoda':
      default:
        return <CupSoda className="w-5 h-5 text-[#D97757]" />;
    }
  };

  return (
    <section id="cafe" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#2D1F1A]/10 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-3">
            <Coffee className="w-3.5 h-3.5" />
            <span>Café &amp; Brunch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1F1A] font-semibold tracking-tight">
            The Pearl &amp; Groove Café Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A352D]/85 leading-relaxed">
            In addition to our signature bakery items, our café offerings include nourishing all-day brunch, refreshing beverages, and artisan London partners.
          </p>
        </div>

        {/* Featured 5 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAFE_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="group bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[#2D1F1A]/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-[#EADBC8]/30">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {feature.brandOrDetail && (
                  <span className="absolute bottom-3 left-3 bg-[#2D1F1A] text-[#FAF7F2] text-[11px] font-semibold px-3 py-1 rounded-full shadow-xs">
                    {feature.brandOrDetail}
                  </span>
                )}
              </div>

              {/* Text Container */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-1.5 rounded-lg bg-[#FAF7F2] border border-[#2D1F1A]/5">
                      {getIcon(feature.iconName)}
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#2D1F1A]">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#4A352D]/85 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2D1F1A]/5 text-[11px] font-medium text-[#4A352D]/70 italic">
                  Contact us for daily café details
                </div>
              </div>
            </div>
          ))}

          {/* Dedicated Partners Card */}
          <div className="p-7 rounded-2xl bg-[#2D1F1A] text-[#FAF7F2] flex flex-col justify-between shadow-xs">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2]/10 text-[#EADBC8] text-[11px] font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3 text-[#D97757]" />
                Artisan London Roasts &amp; Blends
              </span>
              <h3 className="font-serif text-2xl font-semibold text-white mb-3">
                Proud London Partnerships
              </h3>
              <p className="text-sm text-[#FAF7F2]/80 leading-relaxed">
                We take pride in serving ethically sourced coffee freshly roasted by <strong className="text-white">NUDE Roasters</strong> and exquisite loose-leaf teas from <strong className="text-white">Good &amp; Proper Tea Company</strong>.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#EADBC8]">
              Served fresh alongside our 100% gluten-free cakes
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
