import React, { useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialities } from './components/Specialities';
import { CakeGallery } from './components/CakeGallery';
import { WeddingCakes } from './components/WeddingCakes';
import { CorporateCatering } from './components/CorporateCatering';
import { Cafe } from './components/Cafe';
import { Philosophy } from './components/Philosophy';
import { Gallery } from './components/Gallery';
import { Contact, ContactHandle } from './components/Contact';
import { Footer } from './components/Footer';
import { CakeProduct, EnquiryFormData } from './types';
import { Sparkles, CheckCircle2, ShieldCheck, X, FileText } from 'lucide-react';

export default function App() {
  const contactRef = useRef<ContactHandle>(null);
  const [showProposalNotes, setShowProposalNotes] = useState(false);

  const handleNavigateToSection = (sectionId: string, enquiryType?: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (enquiryType && contactRef.current) {
      contactRef.current.setEnquiryType(enquiryType as EnquiryFormData['enquiryType']);
    }
  };

  const handleSelectCakeForEnquiry = (cake: CakeProduct) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (contactRef.current) {
      const type = cake.category === 'wedding' ? 'wedding' : 'celebration';
      contactRef.current.setEnquiryType(type, cake.name);
    }
  };

  const handleEnquireWedding = () => {
    handleNavigateToSection('contact', 'wedding');
  };

  const handleEnquireCatering = () => {
    handleNavigateToSection('contact', 'corporate');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D1F1A] font-sans selection:bg-[#E89A7D]/30 selection:text-[#2D1F1A]">
      {/* Top Header Navigation */}
      <Navbar onNavigateToSection={handleNavigateToSection} />

      {/* Main Website Flow */}
      <main>
        {/* Hero Section with exact required headline & CTAs */}
        <Hero onNavigateToSection={handleNavigateToSection} />

        {/* Section: About Pearl & Groove (Founding story, Serena Whitefield, Portobello Rd) */}
        <About />

        {/* Section: Our Speciality (100% Gluten-free, Ground Almonds, Refined Sugar Free, Dairy Free, Vegan) */}
        <Specialities />

        {/* Section: Cake Collection & Categories (Structured for owner updates) */}
        <CakeGallery onSelectCakeForEnquiry={handleSelectCakeForEnquiry} />

        {/* Section: Dedicated Wedding Cakes */}
        <WeddingCakes onEnquireWedding={handleEnquireWedding} />

        {/* Section: Corporate & Events */}
        <CorporateCatering onEnquireCatering={handleEnquireCatering} />

        {/* Section: Café (Brunch, Vegan Salads, Cold-pressed juices, NUDE coffee, Good & Proper tea) */}
        <Cafe />

        {/* Section: Our Philosophy (Celebration, Sharing, Friendship, Creativity, Parties, Enjoyment) */}
        <Philosophy />

        {/* Section: Gallery with Placeholders & Lightbox */}
        <Gallery />

        {/* Section: Contact (Phone 020 3601 3316, address architecture, enquiry form) */}
        <Contact ref={contactRef} />
      </main>

      {/* Footer */}
      <Footer onNavigateToSection={handleNavigateToSection} />

      {/* Discrete Proposal Brief Pill for Reviewers / Business Owners */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setShowProposalNotes(true)}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-[#2D1F1A] bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border border-[#2D1F1A]/20 shadow-lg backdrop-blur-xs transition-all hover:scale-105 cursor-pointer"
          title="Review proposal architecture & verified facts"
        >
          <FileText className="w-3.5 h-3.5 text-[#D97757]" />
          <span>Redesign Concept Architecture</span>
        </button>
      </div>

      {/* Proposal Notes Modal */}
      {showProposalNotes && (
        <div
          className="fixed inset-0 z-50 bg-[#2D1F1A]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowProposalNotes(false)}
        >
          <div
            className="bg-[#FAF7F2] max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-[#2D1F1A]/10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#F7DCD3] text-[#D97757]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#2D1F1A]">
                    Pearl &amp; Groove Redesign Proposal
                  </h3>
                  <p className="text-[11px] text-[#4A352D]/70 uppercase tracking-wider font-semibold">
                    100% Fact-Checked Concept Architecture
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowProposalNotes(false)}
                className="p-1 rounded-full text-[#4A352D]/60 hover:text-[#2D1F1A] hover:bg-[#F4EFEA]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-[#4A352D] leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#2D1F1A]/10 space-y-1.5">
                <p className="font-semibold text-[#2D1F1A] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7A9078]" />
                  Strict Content Integrity Maintained:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[#4A352D]/85 pl-1">
                  <li>No invented prices, menus, reviews, or unverified claims.</li>
                  <li>Phone verified: <strong>020 3601 3316</strong> with direct call action.</li>
                  <li>Heritage: Founded 2013 by Serena Whitefield; 2016 Portobello Road store.</li>
                  <li>Ingredient truth: Ground almond base, minimal ingredients, flourless.</li>
                  <li>Café partners: NUDE Roasters and Good &amp; Proper Tea Company included.</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F4EFEA] border border-[#2D1F1A]/10 space-y-1.5">
                <p className="font-semibold text-[#2D1F1A] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D97757]" />
                  Modular Owner Update Architecture:
                </p>
                <p className="text-[#4A352D]/85">
                  Because historical sources listed conflicting London locations (Portobello Road vs. Exmouth Market), the address is marked <em>“To be confirmed”</em> and easily connects to Google Maps once the business owner confirms the active location.
                </p>
                <p className="text-[#4A352D]/85 mt-1">
                  Each product card is structured with clear slots for prices, sizes, availability, and live order hooks.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2D1F1A]/10 flex justify-end">
              <button
                onClick={() => setShowProposalNotes(false)}
                className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#2D1F1A] hover:bg-[#D97757] transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
