export interface Project {
  id: string;
  title: string;
  category: 'E-commerce' | 'LMS / Education' | 'Business' | 'Landing Page' | 'Portfolio';
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  deliverables: string[];
  clientType: string;
  liveUrl?: string;
  highlights: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  keyFeatures: string[];
  recommendedFor: string;
}

export interface SkillItem {
  name: string;
  category: 'Design & Page Builders' | 'E-commerce & Systems' | 'Core Craft & Optimization';
  description: string;
  level: string;
  tags: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  outcome: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  clientRole: string;
  companyOrNiche: string;
  quote: string;
  rating: number;
  projectType: string;
  isPlaceholderNotice: boolean;
}
