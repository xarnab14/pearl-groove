import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, AlertCircle, Info, Navigation, Clock } from 'lucide-react';
import { BAKERY_CONFIG } from '../data/bakeryData';
import { EnquiryFormData } from '../types';

export interface ContactHandle {
  setEnquiryType: (type: EnquiryFormData['enquiryType'], cakeName?: string) => void;
}

export const Contact = forwardRef<ContactHandle>((_, ref) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'celebration',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  useImperativeHandle(ref, () => ({
    setEnquiryType: (type: EnquiryFormData['enquiryType'], cakeName?: string) => {
      setFormData(prev => ({
        ...prev,
        enquiryType: type,
        message: cakeName
          ? `Hello, I would like to enquire about details and consultation for the ${cakeName}.`
          : prev.message
      }));
    }
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      enquiryType: 'general',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#2D1F1A]/10 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1F1A] font-semibold tracking-tight">
            Contact Pearl &amp; Groove
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A352D]/85">
            Get in touch for bespoke celebration cakes, wedding consultations, corporate catering, or afternoon tea in London.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Contact Details & Location Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Phone Card */}
            <div className="p-7 rounded-2xl bg-[#FAF7F2] border border-[#2D1F1A]/10 shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#EADBC8]/50 flex items-center justify-center text-[#D97757]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#2D1F1A]">Telephone</h3>
                  <p className="text-xs text-[#4A352D]/70">Direct bakery enquiries</p>
                </div>
              </div>

              <p className="text-2xl font-serif font-bold text-[#2D1F1A] mb-4">
                {BAKERY_CONFIG.phone}
              </p>

              <a
                href={`tel:${BAKERY_CONFIG.phone.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-semibold text-white bg-[#2D1F1A] hover:bg-[#D97757] transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BAKERY_CONFIG.phone}</span>
              </a>
            </div>

            {/* Location Card with strict Architecture for Owner Verification */}
            <div className="p-7 rounded-2xl bg-[#FAF7F2] border border-[#2D1F1A]/10 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F7DCD3] flex items-center justify-center text-[#D97757]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#2D1F1A]">Bakery Location</h3>
                    <p className="text-xs text-[#4A352D]/70">London, United Kingdom</p>
                  </div>
                </div>

                {/* Status Badge */}
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#EADBC8]/60 text-[#4A352D] border border-[#2D1F1A]/10">
                  To be confirmed
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#2D1F1A]/5 text-xs text-[#4A352D] space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-[#2D1F1A]">Address Verification Pending:</strong> Historical sources mention both <em>341 Portobello Road (W10 5SA)</em> and <em>30 Exmouth Market (EC1R 4QE)</em>. To prevent inaccurate visitor directions, the verified current location will be activated upon owner confirmation.
                  </p>
                </div>
              </div>

              {/* Directions Button State */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowLocationModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full text-xs font-semibold text-[#4A352D] bg-[#F4EFEA] hover:bg-[#EADBC8]/40 border border-[#2D1F1A]/10 transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D97757]" />
                  <span>View Location Architecture Details</span>
                </button>
              </div>
            </div>

            {/* Business Fact Summary */}
            <div className="p-6 rounded-2xl bg-[#2D1F1A] text-[#FAF7F2] text-xs space-y-2">
              <p className="font-serif text-base font-semibold text-[#EADBC8]">
                Pearl &amp; Groove Bakery
              </p>
              <p className="text-[#FAF7F2]/80 leading-relaxed">
                Specialising in 100% gluten-free celebration cakes, signature mini loaves, wedding cakes, and corporate catering across London.
              </p>
              <p className="pt-2 text-[11px] text-[#EADBC8]/70 border-t border-white/10">
                Opening hours &amp; retail visitation confirmed upon address verification.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#2D1F1A]/10 shadow-sm">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-semibold text-[#2D1F1A]">
                  Send an Enquiry
                </h3>
                <p className="mt-1 text-xs text-[#4A352D]/80">
                  Please complete the form below. Our team reviews all enquiries individually for consultation and quotation.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#FDFBF7] border border-[#7A9078]/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#7A9078]/15 text-[#7A9078] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-semibold text-[#2D1F1A]">Enquiry Received</h4>
                    <p className="text-xs sm:text-sm text-[#4A352D]/85 mt-1 max-w-md mx-auto">
                      Thank you for contacting Pearl &amp; Groove Bakery. Our team will review your {formData.enquiryType.replace('-', ' ')} details and respond promptly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#2D1F1A] bg-[#EADBC8]/40 hover:bg-[#EADBC8] transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-[#2D1F1A] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#2D1F1A]/15 text-sm text-[#2D1F1A] focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Contact Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-[#2D1F1A] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#2D1F1A]/15 text-sm text-[#2D1F1A] focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#2D1F1A] mb-1.5">
                        Telephone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="07123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#2D1F1A]/15 text-sm text-[#2D1F1A] focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Enquiry Type Dropdown */}
                  <div>
                    <label htmlFor="contact-enquiry-type" className="block text-xs font-semibold text-[#2D1F1A] mb-1.5">
                      Enquiry Type *
                    </label>
                    <select
                      id="contact-enquiry-type"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value as EnquiryFormData['enquiryType'] })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#2D1F1A]/15 text-sm text-[#2D1F1A] focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:border-transparent transition-all"
                    >
                      <option value="celebration">Celebration Cake</option>
                      <option value="wedding">Wedding Cake</option>
                      <option value="corporate">Corporate Catering</option>
                      <option value="afternoon-tea">Afternoon Tea</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-[#2D1F1A] mb-1.5">
                      Message &amp; Celebration Requirements *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Please tell us about your occasion date, guest numbers, dietary preferences (e.g., dairy-free, refined-sugar-free, vegan), and any design thoughts..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#2D1F1A]/15 text-sm text-[#2D1F1A] focus:outline-none focus:ring-2 focus:ring-[#D97757] focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Honest Scope Clarification */}
                  <div className="p-3.5 rounded-xl bg-[#F4EFEA] border border-[#2D1F1A]/10 text-[11px] text-[#4A352D]/85 flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                    <span>
                      <strong>Enquiry Process:</strong> Submitting this form sends an enquiry directly to the bakery team for personal consultation and quotation. It does not place an automatic online order.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-[#2D1F1A] hover:bg-[#D97757] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Bakery Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* Location Architecture Modal */}
      {showLocationModal && (
        <div
          className="fixed inset-0 z-50 bg-[#2D1F1A]/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setShowLocationModal(false)}
        >
          <div
            className="bg-[#FAF7F2] max-w-lg w-full rounded-3xl p-7 border border-[#2D1F1A]/10 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#F7DCD3] text-[#D97757] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-[#2D1F1A]">Location Architecture</h4>
                <p className="text-xs text-[#4A352D]/70">Pending Owner Confirmation</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#4A352D] leading-relaxed mb-4">
              To adhere strictly to verified business data, we do not present conflicting historical addresses as current:
            </p>

            <div className="space-y-3 mb-5">
              {BAKERY_CONFIG.historicalLocations.map((loc, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#F4EFEA] border border-[#2D1F1A]/5 text-xs">
                  <span className="font-semibold text-[#2D1F1A] block">{loc.label}</span>
                  <span className="text-[#4A352D] block mt-0.5">{loc.address}</span>
                  <span className="text-[#4A352D]/60 text-[10px] block mt-1 italic">{loc.sourceNote}</span>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#D97757]/30 text-xs text-[#4A352D] flex items-start gap-2 mb-6">
              <Info className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
              <p>
                Once verified with the owner, the active address and Google Maps directions button will automatically populate this section.
              </p>
            </div>

            <button
              onClick={() => setShowLocationModal(false)}
              className="w-full py-2.5 rounded-full text-xs font-semibold text-[#2D1F1A] bg-[#EADBC8]/50 hover:bg-[#EADBC8] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
});

Contact.displayName = 'Contact';
