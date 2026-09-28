import React from 'react';
import { Briefcase, Tent, PartyPopper, Coffee, Gift, Sparkles, ArrowRight } from 'lucide-react';
import { CORPORATE_SERVICES } from '../data/bakeryData';

interface CorporateCateringProps {
  onEnquireCatering: () => void;
}

export const CorporateCatering: React.FC<CorporateCateringProps> = ({ onEnquireCatering }) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#D97757]" />;
      case 'Tent':
        return <Tent className="w-5 h-5 text-[#D97757]" />;
      case 'PartyPopper':
        return <PartyPopper className="w-5 h-5 text-[#D97757]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#D97757]" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-[#D97757]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#D97757]" />;
    }
  };

  return (
    <section id="corporate" className="py-16 sm:py-24 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#2D1F1A]/10 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Events &amp; Collaborations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1F1A] font-semibold tracking-tight">
            Corporate Catering &amp; Event Bakes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A352D]/85 leading-relaxed">
            Pearl &amp; Groove offers 100% gluten-free cakes and catering across London for business occasions, private celebrations, seasonal markets, and afternoon tea.
          </p>
        </div>

        {/* Services Grid based strictly on supplied information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CORPORATE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-[#FAF7F2] border border-[#2D1F1A]/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#F4EFEA] border border-[#2D1F1A]/5 flex items-center justify-center mb-5">
                  {getServiceIcon(service.iconName)}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2D1F1A] mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-[#4A352D]/85 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2D1F1A]/5 text-xs font-medium text-[#D97757]">
                100% Gluten-Free · Made to Order
              </div>
            </div>
          ))}
        </div>

        {/* Catering Banner & Required CTA */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#2D1F1A] text-[#FAF7F2] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Planning an Event or Corporate Gathering?
            </h3>
            <p className="text-sm text-[#EADBC8]/80 max-w-xl">
              From signature mini loaf assortments to landmark celebration tiers, we cater to office events, festivals, and celebrations throughout London.
            </p>
          </div>

          <button
            onClick={onEnquireCatering}
            className="shrink-0 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-[#2D1F1A] bg-[#FAF7F2] hover:bg-[#EADBC8] transition-all cursor-pointer shadow-sm group"
          >
            <span>Enquire About Catering</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D97757]" />
          </button>
        </div>

      </div>
    </section>
  );
};
