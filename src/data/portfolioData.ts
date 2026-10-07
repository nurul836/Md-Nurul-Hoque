import { Project, Service, SkillItem, ProcessStep, FAQItem, Testimonial } from '../types/portfolio';

export const HERO_DEFAULT_IMAGE = '/src/assets/images/nurul_hoque_official_portrait_1791264591190.jpg';

export const PERSONAL_INFO = {
  name: 'Nurul Hoque',
  role: 'WordPress Web Designer & Website Developer',
  experience: '2+ Years Experience',
  location: 'Remote · Available Worldwide',
  email: 'mdnurulhoque1904@gmail.com',
  whatsapp: '01970277595',
  whatsappFormatted: '+880 1970 277595',
  whatsappUrl:
    'https://wa.me/8801970277595?text=Hello%20Nurul,%20I%20am%20interested%20in%20discussing%20a%20WordPress%20website%20project.',
  facebookUrl: 'https://www.facebook.com/nurlhoque22',
  linkedinUrl: 'https://www.linkedin.com/in/md-nurul-hoque-191a4637a/',
  status: 'Available for new client projects',
  badge: 'WORDPRESS WEB DESIGNER',
  heroHeading: 'I Build Modern WordPress Websites That Help Businesses Grow.',
  heroSubheading:
    'I design fast, responsive and conversion-focused WordPress websites for businesses, entrepreneurs, agencies and online brands.',
  bio: 'I am a WordPress Web Designer and Developer dedicated to turning ideas into high-converting, responsive digital experiences. With 2+ years of hands-on WordPress craft, I blend clean visual design principles with robust page-builder architecture using Elementor, WooCommerce, and Tutor LMS. My mission is simple: create websites that build client trust, elevate brand authority, and turn visitors into paying customers.',
};

export const STATS = [
  { value: '2+', label: 'Years Experience', subtext: 'Continuous WordPress specialization' },
  { value: '20+', label: 'Projects Built', subtext: 'E-commerce, Business & Landing Pages' },
  { value: '100%', label: 'Responsive Design', subtext: 'Flawless across mobile, tablet & desktop' },
  { value: 'Client-Focused', label: 'Strategic Approach', subtext: 'Prioritizing business conversion & speed' },
];

export const SERVICES: Service[] = [
  {
    id: 'wp-design',
    number: '01',
    title: 'WordPress Website Design',
    description: 'Custom, modern WordPress website layouts tailored to your brand identity, messaging, and business goals.',
    iconName: 'Layout',
    keyFeatures: ['Custom layout architecture', 'Fluid responsive grid', 'Brand-aligned typography', 'SEO-friendly hierarchy'],
    recommendedFor: 'Growing businesses and personal brands seeking a professional online home',
  },
  {
    id: 'business-website',
    number: '02',
    title: 'Business Website',
    description: 'Corporate and service-firm websites focused on credibility, trust-building, and inbound lead generation.',
    iconName: 'Building2',
    keyFeatures: ['Lead capture forms & CTAs', 'Service showcase architecture', 'Trust badges & client proof', 'Fast page loading'],
    recommendedFor: 'Consultancies, agencies, legal firms, and corporate enterprises',
  },
  {
    id: 'ecommerce-website',
    number: '03',
    title: 'E-commerce Website',
    description: 'Full-featured online stores built on WooCommerce with seamless product catalogs, filters, and checkout flows.',
    iconName: 'ShoppingBag',
    keyFeatures: ['WooCommerce setup & customization', 'Secure payment gateway integration', 'Cart & checkout optimization', 'Inventory & shipping rules'],
    recommendedFor: 'Retailers, boutique brands, and digital product merchants',
  },
  {
    id: 'landing-page',
    number: '04',
    title: 'Landing Page Design',
    description: 'High-converting single-page sales funnels and marketing landing pages engineered for maximum conversion rate.',
    iconName: 'Zap',
    keyFeatures: ['Attention-grabbing hero section', 'Benefit-driven copywriting structure', 'Fast mobile load speeds', 'Clear conversion triggers'],
    recommendedFor: 'PPC ad campaigns, product launches, and lead magnet promos',
  },
  {
    id: 'elementor-website',
    number: '05',
    title: 'Elementor Website',
    description: 'Modern, dynamic websites built with Elementor & Elementor Pro using custom containers, loops, and micro-interactions.',
    iconName: 'Cpu',
    keyFeatures: ['Elementor Pro Theme Builder', 'Dynamic content & custom loops', 'Lightweight container layout', 'Easy client-side editing'],
    recommendedFor: 'Clients wanting 100% control to edit their own content effortlessly',
  },
  {
    id: 'woocommerce-dev',
    number: '06',
    title: 'WooCommerce Development',
    description: 'Advanced store customization including custom product pages, checkout fields, currency switchers, and order flow.',
    iconName: 'CreditCard',
    keyFeatures: ['Custom single product templates', 'Checkout page streamlining', 'Stripe, PayPal, or local gateways', 'Order automated emails'],
    recommendedFor: 'E-commerce owners needing customized sales flows and checkout perks',
  },
  {
    id: 'lms-education',
    number: '07',
    title: 'LMS / Education Website',
    description: 'Interactive online learning academies powered by Tutor LMS, featuring course catalogs, student portals, and video lessons.',
    iconName: 'GraduationCap',
    keyFeatures: ['Tutor LMS course curriculum builder', 'Student & instructor dashboards', 'Quiz & certification systems', 'Monetization & memberships'],
    recommendedFor: 'Educators, coaches, academies, and course creators',
  },
  {
    id: 'wp-redesign',
    number: '08',
    title: 'WordPress Redesign',
    description: 'Transform outdated, slow, or cluttered websites into modern, high-speed, and conversion-ready experiences.',
    iconName: 'RefreshCw',
    keyFeatures: ['Modern visual refresh', 'UI/UX layout restructuring', 'Codebase & plugin cleanup', 'Mobile responsiveness fix'],
    recommendedFor: 'Businesses whose current website looks dated or fails to generate leads',
  },
  {
    id: 'website-customization',
    number: '09',
    title: 'Website Customization',
    description: 'Tailoring themes, adding custom CSS, tweaking layouts, and configuring plugins to match your exact vision.',
    iconName: 'Sliders',
    keyFeatures: ['Child theme tweaking', 'Advanced Custom Fields (ACF)', 'Header & footer customization', 'Third-party API / webhook hookups'],
    recommendedFor: 'Existing site owners who need specific modifications and enhancements',
  },
  {
    id: 'responsive-design',
    number: '10',
    title: 'Responsive Website Design',
    description: 'Ensuring your website looks and operates flawlessly across 1920px desktops, laptops, tablets, and smartphones.',
    iconName: 'Smartphone',
    keyFeatures: ['Mobile-first breakpoint tuning', 'Touch-friendly navigation & buttons', 'Adaptive media & typography', 'Zero horizontal scroll QA'],
    recommendedFor: 'Every website seeking international standards and search engine favor',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'luxecart-ecommerce',
    title: 'LuxeCart Lifestyle Store',
    category: 'E-commerce',
    tagline: 'Modern WooCommerce store with high-converting cart flow',
    description:
      'A luxury lifestyle and apparel online store built with WooCommerce and Elementor Pro. Features a minimalist aesthetic, curated product discovery, real-time product filters, and streamlined single-page checkout.',
    image: '/src/assets/images/project_ecommerce_store_1791263211935.jpg',
    techStack: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Custom AJAX Filters', 'Stripe Payments'],
    deliverables: [
      'Custom catalog and product detail templates',
      'Optimized mini-cart drawer for quick buying',
      'Mobile-optimized bottom checkout bar',
      'Zero layout shift performance tuning',
    ],
    clientType: 'Direct-to-Consumer Lifestyle Brand',
    highlights: ['+34% Checkout Completion', 'Sub-2s Page Load Speed', 'Full Tablet & Phone Optimization'],
  },
  {
    id: 'edumaster-lms',
    title: 'EduMaster Learning Academy',
    category: 'LMS / Education',
    tagline: 'Comprehensive Tutor LMS online course platform',
    description:
      'An engaging e-learning hub designed for high student retention. Built with Tutor LMS, this platform offers interactive video lesson progression, instructor bios, automated quizzes, and paid course memberships.',
    image: '/src/assets/images/project_lms_education_1791263227273.jpg',
    techStack: ['WordPress', 'Tutor LMS', 'Elementor Pro', 'WooCommerce Subscriptions', 'Vimeo Video Sync'],
    deliverables: [
      'Interactive curriculum roadmap & progress trackers',
      'Distraction-free learning viewer mode',
      'Automated PDF certificate generation',
      'Student profile and assignment submissions',
    ],
    clientType: 'Online Educational Institute',
    highlights: ['Multi-Instructor Support', 'Structured Lesson Hierarchy', 'Secure Video DRM Integration'],
  },
  {
    id: 'vanguard-business',
    title: 'Vanguard Global Advisory',
    category: 'Business',
    tagline: 'Executive corporate website focused on authority & lead capture',
    description:
      'A sleek, high-trust corporate portal for a management consulting firm. Engineered with crisp typography, comprehensive case study archives, interactive service calculators, and direct consultation booking.',
    image: '/src/assets/images/project_business_corporate_1791263238329.jpg',
    techStack: ['WordPress', 'Elementor Pro', 'ACF Pro', 'WP Rocket', 'RankMath SEO'],
    deliverables: [
      'Editorial corporate typography system',
      'Filterable case study and insight library',
      'Executive team profiles with bio popups',
      'Integrated Calendly / consultation scheduler',
    ],
    clientType: 'B2B Strategic Advisory Agency',
    highlights: ['99/100 Desktop PageSpeed', 'High-Trust White-Collar Design', 'GDPR & Privacy Compliant'],
  },
  {
    id: 'apexflow-landing',
    title: 'ApexFlow Growth SaaS',
    category: 'Landing Page',
    tagline: 'High-converting SaaS landing page engineered for PPC ads',
    description:
      'A performance-tuned single-page marketing landing page created for a SaaS startup. Prioritizes clear value propositions, interactive pricing toggles, customer proof badges, and sticky CTA funnels.',
    image: '/src/assets/images/project_landing_page_1791263248887.jpg',
    techStack: ['WordPress', 'Elementor Pro', 'Custom CSS Grid', 'HubSpot Form Integration', 'Schema Markup'],
    deliverables: [
      'Above-the-fold conversion architecture',
      'Monthly / Annual interactive pricing switcher',
      'Proof-stacking feature comparison matrix',
      'Smooth scroll navigation triggers',
    ],
    clientType: 'Technology Software Startup',
    highlights: ['Optimized for Paid Google Ads', 'Under 1.5s Core Web Vitals', 'Single-Goal Action Funnel'],
  },
  {
    id: 'studio-aether-portfolio',
    title: 'Studio Aether Creative',
    category: 'Portfolio',
    tagline: 'Avant-garde creative design and brand showcase',
    description:
      'A bespoke visual portfolio website for a creative branding studio. Delivers a dark minimalist aesthetic, immersive project preview lightboxes, dynamic grid masonry, and streamlined project inquiry workflows.',
    image: '/src/assets/images/project_portfolio_showcase_1791263259914.jpg',
    techStack: ['WordPress', 'Elementor Pro', 'Custom Post Types', 'Lightbox Engine', 'Accessible Contrast'],
    deliverables: [
      'Filterable project showcase gallery',
      'High-resolution imagery modal viewer',
      'Client inquiry step-by-step form',
      'Keyboard navigation accessibility',
    ],
    clientType: 'Independent Creative Director',
    highlights: ['Editorial Dark Mode Aesthetics', 'Zero Layout Shift', 'Silky Hover Interactions'],
  },
];

export const SKILLS: SkillItem[] = [
  {
    name: 'WordPress CMS',
    category: 'Design & Page Builders',
    description: 'Deep understanding of core WordPress structure, theme hierarchy, and database best practices.',
    level: 'Core Expertise',
    tags: ['Theme Hierarchy', 'Custom Post Types', 'Child Themes', 'Security & Updates'],
  },
  {
    name: 'Elementor & Elementor Pro',
    category: 'Design & Page Builders',
    description: 'Mastery of Theme Builder, Flexbox containers, CSS grid, custom query loops, and dynamic tags.',
    level: 'Advanced Specialist',
    tags: ['Flexbox Containers', 'Theme Builder', 'Global Styling', 'Dynamic Content'],
  },
  {
    name: 'WooCommerce',
    category: 'E-commerce & Systems',
    description: 'End-to-end e-commerce store architecture from catalog displays to secure payment checkout workflows.',
    level: 'Advanced Specialist',
    tags: ['Product Catalogs', 'Payment Gateways', 'Cart Optimization', 'Order Workflows'],
  },
  {
    name: 'Tutor LMS',
    category: 'E-commerce & Systems',
    description: 'Full deployment of course-selling academies, lesson hierarchies, quizzes, and student management.',
    level: 'Proficient',
    tags: ['Curriculum Building', 'Student Dashboards', 'Quiz Engine', 'Monetization'],
  },
  {
    name: 'Responsive Web Design',
    category: 'Core Craft & Optimization',
    description: 'Rigorous cross-device testing ensuring pixel-precise layouts on desktop, tablet, and mobile screens.',
    level: 'Standard of Excellence',
    tags: ['Fluid Typography', 'Touch Targets', 'Zero Overflow', 'Breakpoint QA'],
  },
  {
    name: 'Landing Page Strategy',
    category: 'Core Craft & Optimization',
    description: 'Strategic page layout psychology, objection handling, proof placement, and clear conversion funnels.',
    level: 'High Conversion',
    tags: ['Focal Anchors', 'CTA Hierarchy', 'Objection Killers', 'PPC Alignment'],
  },
  {
    name: 'Figma-to-WordPress',
    category: 'Design & Page Builders',
    description: 'Pixel-perfect translation of modern UI design mockups into living, editable WordPress pages.',
    level: 'Pixel Perfect',
    tags: ['Design Systems', 'Asset Optimization', 'Spacing Harmony', 'Exact Typography'],
  },
  {
    name: 'WordPress Migration & Backup',
    category: 'E-commerce & Systems',
    description: 'Zero-downtime website transfers between hosting providers, staging setups, and disaster recovery.',
    level: 'Safe & Seamless',
    tags: ['Zero Downtime', 'DNS & Domain Setup', 'Database Migration', 'Staging QA'],
  },
  {
    name: 'Speed & Performance',
    category: 'Core Craft & Optimization',
    description: 'Asset minification, caching setup (WP Rocket/LiteSpeed), WebP conversion, and clean DOM trees.',
    level: 'Performance Focus',
    tags: ['Core Web Vitals', 'Caching Configuration', 'Asset Clean-up', 'Lazy Loading'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'I deeply analyze your business niche, target audience, competitors, and specific conversion goals.',
    outcome: 'Clear project roadmap, target audience profile, and feature scope definition.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'I map out the complete website structure, sitemap, wireframe flow, and overall visual direction.',
    outcome: 'Approved structural layout, page hierarchy, and content architecture.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'I craft modern, international-standard interfaces with high visual hierarchy and responsive mobile layouts.',
    outcome: 'Clean typography, cohesive color palette, and polished visual mockups.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'I bring the designs to life inside WordPress using Elementor Pro, clean containers, and necessary plugins.',
    outcome: 'Fast, lightweight, client-editable WordPress website ready for content testing.',
  },
  {
    number: '05',
    title: 'Test',
    description: 'Rigorous quality assurance across desktop (1920px), laptops, tablets, and mobile devices (480px/375px).',
    outcome: '100% bug-free responsiveness, cross-browser compatibility, and form validation.',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'Final migration to your live domain, SEO meta checklist, speed check, and complete client handover.',
    outcome: 'Live, secure website plus a video walkthrough showing how to edit your own content.',
  },
];

export const TRUST_PILLARS = [
  {
    title: 'Professional Design',
    description: 'Modern layouts designed to create a strong first impression that separates you from generic competitors.',
    iconName: 'Sparkles',
  },
  {
    title: 'Responsive Experience',
    description: 'Websites optimized specifically for desktop, tablet, and mobile with zero horizontal overflow.',
    iconName: 'Smartphone',
  },
  {
    title: 'Business Focused',
    description: 'Design decisions guided by usability, trust building, and measurable visitor conversion into clients.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Clean & User Friendly',
    description: 'Intuitive navigation paths and clear page hierarchies that make your site effortless to browse.',
    iconName: 'Compass',
  },
  {
    title: 'Reliable Communication',
    description: 'Transparent updates, quick responses, and proactive communication at every phase of the project.',
    iconName: 'MessageSquareCheck',
  },
  {
    title: 'Long-Term Support',
    description: 'Ongoing help with updates, customization, plugin security, and future improvements when needed.',
    iconName: 'ShieldCheck',
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What type of websites do you build?',
    answer:
      'I specialize in custom WordPress websites including corporate business sites, WooCommerce e-commerce stores, Tutor LMS online learning academies, high-converting marketing landing pages, and creative portfolio websites. Every project is tailored to the client’s industry and business objectives.',
  },
  {
    id: 'faq-2',
    question: 'Do you work with Elementor?',
    answer:
      'Yes, Elementor and Elementor Pro are my primary page-building tools. I utilize the latest Flexbox containers, dynamic custom loops, global style kits, and lightweight structures to ensure your site remains blazing fast and effortless for you to edit without touching code.',
  },
  {
    id: 'faq-3',
    question: 'Can you build WooCommerce websites?',
    answer:
      'Absolutely. I design and configure complete WooCommerce e-commerce stores with custom product pages, dynamic category filters, mini-cart slide-outs, secure payment gateways (Stripe, PayPal, etc.), automated order emails, and mobile-friendly checkouts.',
  },
  {
    id: 'faq-4',
    question: 'Will my website be responsive?',
    answer:
      '100% guaranteed. Responsiveness is never an afterthought. Every layout is tested across ultra-wide monitors (1920px), laptops (1440px), tablets (1024px & 768px), and mobile phones (480px & 375px) with dedicated touch targets and balanced typography.',
  },
  {
    id: 'faq-5',
    question: 'Can you redesign an existing WordPress website?',
    answer:
      'Yes. If your current WordPress website looks dated, loads slowly, or isn’t generating inquiries, I can perform a full redesign. I preserve your existing SEO rankings, migrate your content, and give your brand a high-end, modern presence.',
  },
  {
    id: 'faq-6',
    question: 'Do you build landing pages?',
    answer:
      'Yes. I design high-converting single-page landing pages tailored specifically for marketing campaigns, paid ad traffic (Google & Meta), software launches, and lead magnet opt-ins. I focus on compelling hero sections, clear value propositions, and strong calls-to-action.',
  },
  {
    id: 'faq-7',
    question: 'Can you help with website migration?',
    answer:
      'Yes. I offer zero-downtime website migrations between hosting providers, moving sites from local/staging environments to live production servers, and setting up automated backup solutions to keep your data protected.',
  },
  {
    id: 'faq-8',
    question: 'How can I start a project with you?',
    answer:
      'It is simple! You can fill out the contact form below or reach out directly via email at mdnurulhoque1904@gmail.com. Share a brief summary of what you need, and I will get back to you within 12 hours with a clear roadmap, estimated timeline, and next steps.',
  },
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientRole: 'Founder & CEO',
    companyOrNiche: 'E-commerce Retail Brand',
    quote:
      '“Nurul transformed our store into a sleek, high-performing shopping experience. His mastery of WooCommerce and Elementor helped improve our mobile conversion rates significantly.”',
    rating: 5,
    projectType: 'WooCommerce Redesign',
    isPlaceholderNotice: true,
  },
  {
    id: 'test-2',
    clientRole: 'Managing Director',
    companyOrNiche: 'B2B Consulting Firm',
    quote:
      '“Working with Nurul was effortless. He understood our corporate vision immediately, delivered a pixel-perfect responsive site on time, and showed our team how to update content easily.”',
    rating: 5,
    projectType: 'Corporate Business Website',
    isPlaceholderNotice: true,
  },
  {
    id: 'test-3',
    clientRole: 'Lead Instructor & Creator',
    companyOrNiche: 'Digital Academy Platform',
    quote:
      '“The LMS platform Nurul created for our online courses exceeded our expectations. The video navigation is silky smooth, and our students love the clean layout.”',
    rating: 5,
    projectType: 'Tutor LMS Platform',
    isPlaceholderNotice: true,
  },
];
