import React from 'react';
import { Sparkles, Heart, Users, PartyPopper, Smile, Palette, CheckCircle } from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/bakeryData';

export const Philosophy: React.FC = () => {
  const getPillarIcon = (title: string) => {
    switch (title) {
      case 'Celebration':
        return <Sparkles className="w-5 h-5 text-[#D97757]" />;
      case 'Sharing':
        return <Heart className="w-5 h-5 text-[#D97757]" />;
      case 'Friendship':
        return <Users className="w-5 h-5 text-[#D97757]" />;
      case 'Creativity':
        return <Palette className="w-5 h-5 text-[#7A9078]" />;
      case 'Parties':
        return <PartyPopper className="w-5 h-5 text-[#D97757]" />;
      case 'Enjoyment':
      default:
        return <Smile className="w-5 h-5 text-[#D97757]" />;
    }
  };

  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#F4EFEA] relative overflow-hidden border-t border-b border-[#2D1F1A]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Philosophy Editorial Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#2D1F1A]/10 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-3">
            <Heart className="w-3.5 h-3.5" />
            <span>Our Philosophy</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1F1A] font-semibold tracking-tight leading-tight">
            More Than Simply a Sweet Treat
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#4A352D]/90 leading-relaxed">
            At Pearl &amp; Groove, cake is fundamentally associated with celebrations, sharing, friendship, parties and special occasions. Our philosophy is centred around taste and quality — made with minimal ingredients, mainly ground almonds, without flour.
          </p>
        </div>

        {/* 6 Key Pillars Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#2D1F1A]/10 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F4EFEA] border border-[#2D1F1A]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getPillarIcon(pillar.title)}
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#2D1F1A] mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[#4A352D]/85 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2D1F1A]/5 flex items-center gap-1.5 text-xs font-semibold text-[#D97757]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>100% Gluten-Free</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
