import React from 'react';
import { ArrowRight, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/bakeryData';

interface HeroProps {
  onNavigateToSection: (sectionId: string, enquiryType?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToSection }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative subtle ambient glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#F7DCD3]/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#EADBC8]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#D97757]/30 text-[#4A352D] text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D97757] animate-pulse" />
              <span>London · 100% Gluten-Free Bakery</span>
            </div>

            {/* Main Required Hero Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D1F1A] font-semibold tracking-tight leading-[1.15]">
              100% Gluten-Free Cakes, Made to Celebrate
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#4A352D]/90 font-normal leading-relaxed max-w-2xl">
              Celebration cakes, mini loaves, wedding cakes, corporate catering and more.
            </p>

            {/* Key Authentic Attributes Chips */}
            <div className="pt-1 flex flex-wrap gap-2 sm:gap-3 text-xs font-medium text-[#4A352D]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#2D1F1A]/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7A9078]" />
                Ground Almond Base
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#2D1F1A]/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7A9078]" />
                Always Wheat-Flour Free
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#2D1F1A]/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7A9078]" />
                Available Vegan &amp; Dairy-Free Options
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onNavigateToSection('cakes')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#2D1F1A] hover:bg-[#D97757] transition-all shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>Explore Our Cakes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigateToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-[#2D1F1A] bg-[#FAF7F2] hover:bg-[#F4EFEA] border border-[#2D1F1A]/20 transition-all cursor-pointer"
              >
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Direct Phone Indicator */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#4A352D]/80">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D97757]" />
                Enquiries &amp; Consultations:
              </span>
              <a
                href={`tel:${BAKERY_CONFIG.phone.replace(/\s+/g, '')}`}
                className="font-semibold text-[#2D1F1A] hover:text-[#D97757] transition-colors underline underline-offset-2"
              >
                {BAKERY_CONFIG.phone}
              </a>
            </div>
          </div>

          {/* Right Image Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#EADBC8] via-[#F7DCD3] to-[#FAF7F2] opacity-70 blur-xs -z-10" />

              {/* Main Image Container */}
              <div className="overflow-hidden rounded-2xl border-4 border-[#FAF7F2] shadow-xl bg-[#F4EFEA]">
                <img
                  src="https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=85"
                  alt="Pearl & Groove modern rustic celebration cake with floral accents"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Floating Accent Card */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#FAF7F2] p-4 rounded-xl shadow-lg border border-[#2D1F1A]/10 max-w-[240px]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#F7DCD3] text-[#D97757]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-serif font-bold text-[#2D1F1A]">Signature Style</p>
                    <p className="text-[11px] text-[#4A352D]/80 leading-tight mt-0.5">
                      Modern, creative &amp; rustic celebration cakes &amp; mini loaves
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating London Badge */}
              <div className="absolute -top-4 -right-2 sm:right-4 bg-[#2D1F1A] text-[#FAF7F2] px-3.5 py-2 rounded-xl shadow-md text-xs font-medium">
                <span className="text-[#D97757] font-semibold">Founded 2013</span> · London
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
