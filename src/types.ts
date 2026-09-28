export interface CakeProduct {
  id: string;
  name: string;
  category: 'celebration' | 'wedding' | 'mini-loaves' | 'bespoke' | 'desserts';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  dietaryNote: string;
  pricePlaceholder: string;
  sizePlaceholder: string;
  availabilityPlaceholder: string;
  isMiniLoaf?: boolean;
}

export interface SpecialityItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  footnote?: string;
  iconName: string;
}

export interface CorporateService {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CafeFeature {
  id: string;
  title: string;
  brandOrDetail?: string;
  description: string;
  iconName: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'celebration' | 'mini-loaves' | 'wedding' | 'cafe' | 'desserts' | 'interior' | 'baking';
  categoryLabel: string;
  imageUrl: string;
  alt: string;
  caption: string;
}

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  enquiryType: 'celebration' | 'wedding' | 'corporate' | 'afternoon-tea' | 'general';
  message: string;
}

export interface BakeryConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  locationStatus: 'unconfirmed' | 'confirmed';
  locationAddress: string;
  locationNote: string;
  historicalLocations: {
    label: string;
    address: string;
    sourceNote: string;
  }[];
  foundingYear: number;
  founder: string;
  foundingStory: string;
  firstStoreYear: number;
  firstStoreLocation: string;
}
