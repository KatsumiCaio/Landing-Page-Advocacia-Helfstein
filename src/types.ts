export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'scale' | 'file-text' | 'users' | 'landmark' | 'shield-check' | 'briefcase';
  items: string[];
  ctaMessage: string;
}

export interface Testimonial {
  id: string;
  author: string;
  roleOrContext?: string;
  text: string;
  rating: number;
  date?: string;
  verified?: boolean;
}

export interface OfficeLocation {
  id: string;
  city: string;
  type: string;
  address: string;
  neighborhood: string;
  postalCode?: string;
  phone: string;
  hours: string;
  mapsUrl: string;
  isMain?: boolean;
}
