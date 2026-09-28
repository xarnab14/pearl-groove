import React from 'react';
import { Phone, MapPin, Sparkles, Heart, ArrowUp } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/bakeryData';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Cakes', target: 'cakes' },
    { label: 'Wedding Cakes', target: 'wedding-cakes' },
    { label: 'Corporate Catering', target: 'corporate' },
    { label: 'Café', target: 'cafe' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <footer className="bg-[#2D1F1A] text-[#FAF7F2] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-3xl font-semibold tracking-tight text-white">
                Pearl &amp; Groove
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D97757] font-semibold mt-1">
                Bakery London · 100% Gluten-Free
              </p>
            </div>

            <p className="text-sm text-[#FAF7F2]/80 leading-relaxed max-w-md">
              Known for 100% gluten-free celebration cakes, signature mini loaves, wedding cakes, and corporate catering across London. Made with minimal ingredients, mainly ground almonds, without flour.
            </p>

            <div className="pt-2 text-xs text-[#EADBC8] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D97757]" />
              <span>Founded in London 2013 by Serena Whitefield</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#EADBC8]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80">
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => onNavigateToSection(link.target)}
                    className="hover:text-[#D97757] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Verification Status */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#EADBC8]">
              Bakery Contact
            </h4>
            
            <div className="space-y-3 text-sm text-[#FAF7F2]/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D97757] shrink-0" />
                <a
                  href={`tel:${BAKERY_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="font-medium hover:text-white transition-colors"
                >
                  {BAKERY_CONFIG.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97757] shrink-0 mt-1" />
                <div>
                  <span className="font-medium text-white">Location:</span>
                  <span className="text-xs text-[#FAF7F2]/70 block mt-0.5">
                    London, UK (Current address to be confirmed by owner)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Status Note */}
            <div className="pt-3 border-t border-white/10 text-xs text-[#FAF7F2]/60">
              <p className="italic">
                Official social media accounts will be linked here once verified by the business owner.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/60">
          <p>
            © {new Date().getFullYear()} Pearl &amp; Groove Bakery. All rights reserved. 100% Gluten-Free Cakes London.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#FAF7F2] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
