import React, { useState } from 'react';
import { Camera, Eye, X, Sparkles, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/bakeryData';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'celebration', label: 'Celebration Cakes' },
    { id: 'mini-loaves', label: 'Mini Loaves' },
    { id: 'wedding', label: 'Wedding Cakes' },
    { id: 'cafe', label: 'Café Products' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'interior', label: 'Bakery Interior' },
    { id: 'baking', label: 'Behind-the-Scenes' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFEA] border border-[#2D1F1A]/10 text-xs font-semibold uppercase tracking-wider text-[#D97757] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D1F1A] font-semibold tracking-tight">
            Bakery &amp; Cake Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A352D]/85">
            A curated visual presentation showcasing celebration cakes, signature mini loaves, wedding tiers, café creations, and behind-the-scenes baking.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-[#2D1F1A] text-[#FAF7F2] shadow-xs'
                  : 'bg-[#FDFBF7] text-[#4A352D] hover:bg-[#EADBC8]/50 border border-[#2D1F1A]/5'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#EADBC8]/30 aspect-square cursor-pointer border border-[#2D1F1A]/10 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#EADBC8]">
                  {item.categoryLabel}
                </span>
                <p className="font-serif text-sm font-semibold text-white leading-tight">
                  {item.title}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-[#FAF7F2]/80">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to view</span>
                </div>
              </div>

              <div className="absolute top-2.5 right-2.5 bg-[#FAF7F2]/90 backdrop-blur-xs text-[#2D1F1A] text-[10px] font-semibold px-2 py-0.5 rounded-md border border-[#2D1F1A]/10">
                Placeholder
              </div>
            </div>
          ))}
        </div>

        {/* Business Owner Customization Note */}
        <div className="mt-12 p-5 rounded-2xl bg-[#F4EFEA] border border-[#2D1F1A]/10 max-w-2xl mx-auto text-xs text-[#4A352D] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#2D1F1A]">Visual Asset Notice for Pearl &amp; Groove:</p>
            <p className="mt-0.5 leading-relaxed text-[#4A352D]/80">
              All visual frames above are structured placeholders. The business owner can easily replace them with authentic, high-resolution Pearl &amp; Groove London bakery photography.
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#2D1F1A]/85 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF7F2] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#2D1F1A]/80 text-white flex items-center justify-center hover:bg-[#2D1F1A] transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] sm:max-h-[70vh] overflow-hidden bg-[#2D1F1A]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.alt}
                className="w-full h-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D97757]">
                  {activeItem.categoryLabel}
                </span>
                <span className="text-[#4A352D]/30">•</span>
                <span className="text-xs text-[#4A352D]/70">Placeholder Photography</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#2D1F1A]">
                {activeItem.title}
              </h3>
              <p className="mt-2 text-sm text-[#4A352D]/80">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
