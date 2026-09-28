import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/bakeryData';

interface NavbarProps {
  onNavigateToSection: (sectionId: string, enquiryType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Specialities', target: 'specialities' },
    { label: 'Cakes', target: 'cakes' },
    { label: 'Wedding Cakes', target: 'wedding-cakes' },
    { label: 'Corporate & Events', target: 'corporate' },
    { label: 'Café', target: 'cafe' },
    { label: 'Philosophy', target: 'philosophy' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigateToSection(target);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#2D1F1A] text-[#FAF7F2] text-xs py-2 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D97757]" />
        <span>100% Gluten-Free Celebration Cakes, Mini Loaves & Catering across London</span>
        <span className="hidden md:inline text-[#EADBC8]/60">|</span>
        <a
          href={`tel:${BAKERY_CONFIG.phone.replace(/\s+/g, '')}`}
          className="hidden md:inline-flex items-center gap-1 text-[#EADBC8] hover:text-[#FAF7F2] underline underline-offset-2 transition-colors"
        >
          <Phone className="w-3 h-3 text-[#D97757]" />
          <span>{BAKERY_CONFIG.phone}</span>
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#2D1F1A]/5 py-3'
            : 'bg-[#FAF7F2] py-4 border-b border-[#2D1F1A]/5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97757] rounded-sm"
            aria-label="Pearl & Groove Bakery - Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#2D1F1A] group-hover:text-[#D97757] transition-colors">
              Pearl &amp; Groove
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-[#4A352D]/80">
              Bakery London · 100% Gluten-Free
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-6 text-[13.5px] font-medium text-[#4A352D]">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="hover:text-[#D97757] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D97757] hover:after:w-full after:transition-all cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BAKERY_CONFIG.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-[#2D1F1A] bg-[#EADBC8]/40 hover:bg-[#EADBC8] transition-colors border border-[#EADBC8]"
              title="Call Pearl & Groove Bakery"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97757]" />
              <span>{BAKERY_CONFIG.phone}</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[#2D1F1A] hover:bg-[#D97757] transition-all shadow-sm cursor-pointer"
            >
              <span>Enquire</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#2D1F1A] hover:bg-[#F4EFEA] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97757]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FAF7F2] border-b border-[#2D1F1A]/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="text-left px-3 py-2.5 rounded-md text-sm font-medium text-[#2D1F1A] hover:bg-[#F4EFEA] hover:text-[#D97757] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#4A352D]/40" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#2D1F1A]/10 flex flex-col gap-2">
              <a
                href={`tel:${BAKERY_CONFIG.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-[#2D1F1A] bg-[#EADBC8]/50"
              >
                <Phone className="w-4 h-4 text-[#D97757]" />
                <span>Call {BAKERY_CONFIG.phone}</span>
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-full text-sm font-semibold text-white bg-[#2D1F1A] text-center"
              >
                Send an Enquiry
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
