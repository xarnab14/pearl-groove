import {
  BakeryConfig,
  CakeProduct,
  SpecialityItem,
  CorporateService,
  CafeFeature,
  GalleryItem
} from '../types';

export const BAKERY_CONFIG: BakeryConfig = {
  name: "Pearl & Groove Bakery",
  tagline: "100% Gluten-Free Cakes, Made to Celebrate",
  phone: "020 3601 3316",
  phoneFormatted: "020 3601 3316",
  locationStatus: "unconfirmed",
  locationAddress: "To be confirmed",
  locationNote: "Historical sources contain conflicting London addresses (Portobello Road & Exmouth Market). Verified current address will be updated upon confirmation from the owner.",
  historicalLocations: [
    {
      label: "Historical Store (Opened 2016)",
      address: "341 Portobello Road, London, W10 5SA",
      sourceNote: "Historical flagship store opened in 2016"
    },
    {
      label: "Alternative Historical Mention",
      address: "30 Exmouth Market, London, EC1R 4QE",
      sourceNote: "Listed in secondary historical directory source"
    }
  ],
  foundingYear: 2013,
  founder: "Serena Whitefield",
  foundingStory: "Founded in 2013 by Serena Whitefield, Pearl & Groove began from a London flat creating 100% gluten-free cakes for cafés, festivals and markets.",
  firstStoreYear: 2016,
  firstStoreLocation: "Portobello Road, London"
};

export const SPECIALITIES: SpecialityItem[] = [
  {
    id: "gluten-free",
    title: "100% Gluten Free",
    badge: "Core Guarantee",
    description: "Every single product baked at Pearl & Groove is completely 100% gluten-free, crafted with strict cross-contamination awareness.",
    footnote: "Applies to all Pearl & Groove baked goods without exception.",
    iconName: "WheatOff"
  },
  {
    id: "ground-almonds",
    title: "Ground Almonds",
    badge: "Flourless Foundation",
    description: "Our recipes are centred around taste and quality, made with minimal ingredients and ground almonds rather than traditional wheat flour.",
    footnote: "Flourless baking delivering signature moistness, structure, and rich nutty flavour.",
    iconName: "Sparkles"
  },
  {
    id: "refined-sugar-free",
    title: "Refined Sugar Free",
    badge: "Available Category",
    description: "Carefully created recipes sweetened with natural unrefined alternatives for conscious celebrants.",
    footnote: "Available product category; individual product specifications apply.",
    iconName: "Leaf"
  },
  {
    id: "dairy-free",
    title: "Dairy Free",
    badge: "Available Category",
    description: "Delightful dairy-free recipe formulations that retain the moistness and indulgence of our signature cakes.",
    footnote: "Available product category; individual product specifications apply.",
    iconName: "ShieldCheck"
  },
  {
    id: "vegan",
    title: "Vegan Options",
    badge: "Available Category",
    description: "Plant-based creations baked to perfection while remaining strictly 100% gluten-free and full of flavour.",
    footnote: "Available product category; individual product specifications apply.",
    iconName: "Heart"
  }
];

export const CAKE_PRODUCTS: CakeProduct[] = [
  {
    id: "cake-celebration-1",
    name: "Modern Rustic Celebration Cake",
    category: "celebration",
    categoryLabel: "Celebration Cakes",
    description: "Modern, creative and rustic celebration cakes, baked with minimal ingredients and ground almonds for landmark birthdays and parties.",
    imageUrl: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern rustic celebration cake with elegant floral touches",
    dietaryNote: "100% Gluten-Free · Dairy-free & refined-sugar-free options available",
    pricePlaceholder: "Contact us for details",
    sizePlaceholder: "Bespoke sizing on enquiry",
    availabilityPlaceholder: "Advance consultation recommended"
  },
  {
    id: "cake-wedding-1",
    name: "Artisan Wedding Tier Cake",
    category: "wedding",
    categoryLabel: "Wedding Cakes",
    description: "Elegantly finished tiered wedding cakes designed for your special day, combining rustic charm with sophisticated modern aesthetics.",
    imageUrl: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Multi-tiered elegant wedding cake styled with fresh florals",
    dietaryNote: "100% Gluten-Free · Custom dietary options available",
    pricePlaceholder: "Contact us for details",
    sizePlaceholder: "Multi-tier configurations",
    availabilityPlaceholder: "Wedding consultation on enquiry"
  },
  {
    id: "cake-mini-1",
    name: "Signature Mini Loaves",
    category: "mini-loaves",
    categoryLabel: "Mini Loaves",
    description: "Our signature individual mini loaves feature our recognisable design, baked with ground almonds for a delicately moist crumb.",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Signature artisan mini loaves presented on bakery board",
    dietaryNote: "100% Gluten-Free · Vegan & dairy-free options available",
    pricePlaceholder: "Contact us for details",
    sizePlaceholder: "Individual portion / Assorted hampers",
    availabilityPlaceholder: "Daily bakery batches & catering",
    isMiniLoaf: true
  },
  {
    id: "cake-bespoke-1",
    name: "Bespoke Custom Cake Commission",
    category: "bespoke",
    categoryLabel: "Bespoke Cakes",
    description: "Tailored cake commissions created for milestone celebrations, private dinners, and unique theme concepts across London.",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bespoke decorated celebration cake with creative toppings",
    dietaryNote: "100% Gluten-Free · Tailored dietary requirements",
    pricePlaceholder: "Contact us for details",
    sizePlaceholder: "Custom dimensions & portions",
    availabilityPlaceholder: "Bespoke order consultation"
  },
  {
    id: "cake-dessert-1",
    name: "Artisan Bakery Desserts",
    category: "desserts",
    categoryLabel: "Desserts",
    description: "A refined selection of 100% gluten-free bakery desserts and sharing bakes, celebrating pure flavour and wholesome ingredients.",
    imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Plated gluten-free artisan dessert with fresh berries",
    dietaryNote: "100% Gluten-Free · Refined-sugar-free available",
    pricePlaceholder: "Contact us for details",
    sizePlaceholder: "Plated & sharing options",
    availabilityPlaceholder: "Event catering & bakery orders"
  },
  {
    id: "cake-celebration-2",
    name: "Creative Botanical Celebration Cake",
    category: "celebration",
    categoryLabel: "Celebration Cakes",
    description: "Modern rustic celebration bakes decorated with natural botanical elements, crafted without wheat flour for memorable parties.",
    imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Creative botanical cake with fresh berries and rustic icing",
    dietaryNote: "100% Gluten-Free · Ground almond foundation",
    pricePlaceholder: "Contact us for details",
    sizePlaceholder: "Single & double tier sizes",
    availabilityPlaceholder: "Made to order for celebrations"
  }
];

export const CORPORATE_SERVICES: CorporateService[] = [
  {
    id: "corporate-catering",
    title: "Corporate Catering",
    description: "Impress clients and treat office teams with 100% gluten-free dessert platters and mini loaves, suited for morning meetings, product launches, and company milestones.",
    iconName: "Briefcase"
  },
  {
    id: "festivals-markets",
    title: "Festivals & Markets",
    description: "Honouring our founding roots: bringing vibrant, fresh gluten-free bakes to London food markets, seasonal pop-ups, and cultural festivals.",
    iconName: "Tent"
  },
  {
    id: "celebrations",
    title: "Private Celebrations",
    description: "From intimate birthday gatherings to grand celebrations across London, providing centrepiece cakes that everyone can share together.",
    iconName: "PartyPopper"
  },
  {
    id: "afternoon-tea",
    title: "Afternoon Tea",
    description: "An elegant London afternoon tea experience featuring signature mini loaves, sweet accompaniments, and artisanal hot beverages.",
    iconName: "Coffee"
  },
  {
    id: "hampers",
    title: "Bakery Hampers",
    description: "Curated gift hampers filled with signature gluten-free bakes, packaged thoughtfully for holidays, corporate gifting, and heartfelt surprises.",
    iconName: "Gift"
  },
  {
    id: "bespoke-orders",
    title: "Bespoke Cake Orders",
    description: "Collaborative consultations to design custom gluten-free creations matching your specific celebration vision and guest dietary preferences.",
    iconName: "Sparkles"
  }
];

export const CAFE_FEATURES: CafeFeature[] = [
  {
    id: "all-day-brunch",
    title: "All-Day Brunch",
    description: "Nutritious and comforting brunch plates served all day, keeping flavour, balance, and quality at the heart of every dish.",
    iconName: "Sun",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "vegan-salads",
    title: "Vegan Salads",
    description: "Vibrant, seasonal salads tossed with fresh produce, wholesome grains, and house dressings for a nourishing lunch.",
    iconName: "Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "cold-pressed-juices",
    title: "Cold-Pressed Juices",
    description: "Refreshing, nutrient-dense cold-pressed juices pressed daily from vibrant fruits and crisp greens.",
    iconName: "Citrus",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "nude-coffee",
    title: "Speciality Coffee",
    brandOrDetail: "From NUDE Roasters",
    description: "Speciality London-roasted coffee beans meticulously prepared by baristas to pair seamlessly with our sweet bakes.",
    iconName: "Coffee",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "good-proper-tea",
    title: "Single-Origin Tea",
    brandOrDetail: "From Good & Proper Tea Company",
    description: "Ethically sourced, loose-leaf artisan tea brewed to perfection for morning pauses and relaxed afternoon teas.",
    iconName: "CupSoda",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    title: "Celebration",
    description: "Cake marks life's brightest milestones — birthdays, anniversaries, reunions, and everyday triumphs.",
    accent: "bg-[#F7DCD3]"
  },
  {
    title: "Sharing",
    description: "Baked goods crafted to be enjoyed together around a table without anyone being excluded by gluten.",
    accent: "bg-[#EADBC8]"
  },
  {
    title: "Friendship",
    description: "A warm, welcoming spirit that brings people together over tea, coffee, and heartfelt conversations.",
    accent: "bg-[#E8C2B0]"
  },
  {
    title: "Creativity",
    description: "Modern, rustic aesthetics and inventive recipes that prove gluten-free baking can be breathtaking.",
    accent: "bg-[#D9C4B2]"
  },
  {
    title: "Parties",
    description: "Centrepiece creations designed to draw gasps, ignite joy, and leave lasting memories with guests.",
    accent: "bg-[#F7DCD3]"
  },
  {
    title: "Enjoyment",
    description: "Uncompromised taste and texture driven by ground almonds, pure ingredients, and real passion.",
    accent: "bg-[#EADBC8]"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Rustic Celebration Tier",
    category: "celebration",
    categoryLabel: "Celebration Cakes",
    imageUrl: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1200&q=85",
    alt: "Celebration cake placeholder photography",
    caption: "Rustic textured finish with delicate floral details. Owner photography placeholder."
  },
  {
    id: "gal-2",
    title: "Signature Mini Loaf Presentation",
    category: "mini-loaves",
    categoryLabel: "Mini Loaves",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    alt: "Mini loaves bakery placeholder photography",
    caption: "Recognisable signature mini loaf profile baked with ground almonds. Owner photography placeholder."
  },
  {
    id: "gal-3",
    title: "Elegant Wedding Cake Tiering",
    category: "wedding",
    categoryLabel: "Wedding Cakes",
    imageUrl: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1200&q=85",
    alt: "Wedding cake placeholder photography",
    caption: "Tiered wedding cake styled for London celebrations. Owner photography placeholder."
  },
  {
    id: "gal-4",
    title: "Café Brunch & Cold-Pressed Juices",
    category: "cafe",
    categoryLabel: "Café Products",
    imageUrl: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85",
    alt: "Café food and drinks placeholder photography",
    caption: "Nutritious all-day brunch and drinks spread. Owner photography placeholder."
  },
  {
    id: "gal-5",
    title: "Gluten-Free Plated Dessert",
    category: "desserts",
    categoryLabel: "Desserts",
    imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=85",
    alt: "Bakery dessert placeholder photography",
    caption: "Individual dessert bake with fresh fruits. Owner photography placeholder."
  },
  {
    id: "gal-6",
    title: "Boutique Bakery Atmosphere",
    category: "interior",
    categoryLabel: "Bakery Interior",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
    alt: "Bakery interior placeholder photography",
    caption: "Warm, welcoming boutique bakery setting. Owner photography placeholder."
  },
  {
    id: "gal-7",
    title: "Behind-the-Scenes Almond Flour Preparation",
    category: "baking",
    categoryLabel: "Behind-the-Scenes",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    alt: "Behind-the-scenes baking preparation photography",
    caption: "Artisanal preparation focusing on pure ground almonds and natural bakes. Owner photography placeholder."
  },
  {
    id: "gal-8",
    title: "Artisanal Coffee by NUDE Roasters",
    category: "cafe",
    categoryLabel: "Café Products",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    alt: "Speciality coffee placeholder photography",
    caption: "Freshly pulled espresso pairing with cakes. Owner photography placeholder."
  }
];
