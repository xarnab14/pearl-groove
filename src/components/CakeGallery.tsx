import React, { useState } from 'react';
import { Sparkles, ArrowRight, Tag, Ruler, Calendar, Check, Info } from 'lucide-react';
import { CAKE_PRODUCTS } from '../data/bakeryData';
import { CakeProduct } from '../types';

interface CakeGalleryProps {
  onSelectCakeForEnquiry: (cake: CakeProduct) => void;
}

export const CakeGallery: React.FC<CakeGalleryProps> = ({ onSelectCakeForEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Bakes' },
    { id: 'celebration', label: 'Celebration Cakes' },
    { id: 'wedding', label: 'Wedding Cakes' },
    { id: 'mini-loaves', label: 'Mini Loaves' },
    { id: 'bespoke', label: 'Bespoke Cakes' },
    { id: 'desserts', label: 'Desserts' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? CAKE_PRODUCTS
    : CAKE_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section id="cakes" className="py-16 sm:py-24 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#2D1F1A]/10 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Collection</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1F1A] font-semibold tracking-tight">
            100% Gluten-Free Cake Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A352D]/85">
            Recognisable signature mini loaves and modern, creative, rustic celebration cakes made with ground almonds without flour.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#2D1F1A] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#FAF7F2] text-[#4A352D] hover:bg-[#EADBC8]/50 border border-[#2D1F1A]/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Structured Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#2D1F1A]/10 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Visual Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EADBC8]/30">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-[#FAF7F2]/95 backdrop-blur-xs text-[#2D1F1A] text-[11px] font-semibold px-3 py-1 rounded-full shadow-xs border border-[#2D1F1A]/5">
                  {product.categoryLabel}
                </span>

                {product.isMiniLoaf && (
                  <span className="absolute top-3 right-3 bg-[#D97757] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-xs">
                    Signature Design
                  </span>
                )}
              </div>

              {/* Product Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#2D1F1A] group-hover:text-[#D97757] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  
                  <p className="mt-2 text-sm text-[#4A352D]/85 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Structured Metadata Fields ready for Owner Customization */}
                <div className="pt-4 border-t border-[#2D1F1A]/5 space-y-2 text-xs">
                  {/* Dietary Info */}
                  <div className="flex items-center gap-2 text-[#7A9078] font-medium">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>{product.dietaryNote}</span>
                  </div>

                  {/* Size placeholder */}
                  <div className="flex items-center justify-between text-[#4A352D]/80">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Ruler className="w-3.5 h-3.5 text-[#D97757]" />
                      Size:
                    </span>
                    <span className="text-[#2D1F1A] font-medium italic">{product.sizePlaceholder}</span>
                  </div>

                  {/* Price placeholder */}
                  <div className="flex items-center justify-between text-[#4A352D]/80">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Tag className="w-3.5 h-3.5 text-[#D97757]" />
                      Price:
                    </span>
                    <span className="text-[#2D1F1A] font-semibold bg-[#F4EFEA] px-2 py-0.5 rounded-sm">
                      {product.pricePlaceholder}
                    </span>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center justify-between text-[#4A352D]/80">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#D97757]" />
                      Availability:
                    </span>
                    <span className="text-[#2D1F1A]">{product.availabilityPlaceholder}</span>
                  </div>
                </div>

                {/* Interactive Consultation / Order Button Placeholder */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectCakeForEnquiry(product)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#2D1F1A] bg-[#EADBC8]/40 hover:bg-[#2D1F1A] hover:text-white transition-all flex items-center justify-center gap-2 border border-[#2D1F1A]/10 group-hover:border-transparent cursor-pointer"
                  >
                    <span>Enquire About This Cake</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Business Owner Architecture Notice */}
        <div className="mt-12 p-5 rounded-2xl bg-[#FAF7F2] border border-[#2D1F1A]/10 max-w-2xl mx-auto text-xs text-[#4A352D] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#2D1F1A]">Bakery Owner Content Architecture:</p>
            <p className="mt-0.5 leading-relaxed text-[#4A352D]/80">
              Each product card is architected to display verified product names, descriptions, prices, portion sizes, dietary certificates, and live order buttons once confirmed by Pearl &amp; Groove.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
