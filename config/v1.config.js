// ============================================================================
// DO NOT REMOVE THIS COMMENT
// Version: 5.1.0
//
// This file is the single source of truth for all site content (V1 template).
// Components import from here instead of hardcoding text/links, so edit
// values below to update the live site — no component code changes needed.
//
// Image fields (e.g. heroConfig.backgroundImage, servicesConfig.cards[].image):
// - Leave as an empty string '' to keep the current design (gradient / no photo).
// - Paste an image URL to display that photo instead.
// ============================================================================

export const siteConfig = {
  businessName: 'Fast & Green Cleaning Services LLC',
  tagline: 'Professional. Fast. Eco-Friendly.',
  description:
    'Fast & Green Cleaning Services LLC provides professional eco-friendly cleaning solutions for homes and offices in the Chicago area.',
  subdomain: 'fastgreencleaningservicesllc',
  url: 'https://fastgreencleaningservicesllc.mybizsolutions.us',
  parentDomain: 'mybizsolutions.us',
  schemaType: 'HouseCleaning',
  keywords: [
    'cleaning services',
    'residential cleaning',
    'commercial cleaning',
    'basic cleaning',
    'floor cleaning',
    'carpet cleaning',
    'post-construction cleaning',
    'eco-friendly cleaning',
    'Montgomery IL cleaning services',
    'Chicago area cleaning services',
  ],
  themeColor: '#f97316',
  backgroundColor: '#0d1117',
  googleVerification: '',
  bingVerification: '',
}

export const logoConfig = {
  part1: 'FAST & GREEN',
  part2: 'CLEANING SERVICES',
}

export const navConfig = {
  links: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  cta: {
    label: 'Get a Free Quote',
    href: '#contact',
  },
}

export const heroConfig = {
  backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJoY3QSa7f48IpcEJUiIzp4KguevOnaXemAfAFoYVEsA&s=10',
  badge: 'PROFESSIONAL & ECO-FRIENDLY CLEANING',
  h1: ['PROFESSIONAL.', 'FAST.', 'ECO-FRIENDLY.'],
  subtext:
    'Enjoy a spotless home or office with professional cleaning solutions, efficient service, and eco-friendly products.',
  primaryCta: {
    label: 'Get a Free Quote',
    href: '#contact',
  },
  secondaryCta: {
    label: 'Our Services',
    href: '#services',
  },
  stats: [
    { value: '100%', label: 'Eco-Friendly' },
    { value: 'Licensed', label: '& Insured' },
    { value: 'Bilingual', label: 'Cleaning Team' },
  ],
}

export const servicesConfig = {
  label: 'WHAT WE DO',
  title: 'Our Cleaning Services',
  cards: [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSufvEiH5HoKAMMnCyVUkpWRnbOxJixUjlwZEVHfudzkA&s=10',
      title: 'Basic Cleaning',
      desc: 'Regular home and office cleaning, including dusting, vacuuming, mopping, kitchens, and bathrooms.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarIOeLmZHzqYyS48oD9DjSS0Ma6ST-V5QAzrzc73GWg&s=10',
      title: 'Floor & Carpet Cleaning',
      desc: 'Deep cleaning for different floor types and carpets to remove embedded dirt, stains, and allergens.',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ95LUZF-C8fX8zWFXIKs7BHAPYHGZtqmqTit1NJymozA&s=10',
      title: 'Construction Cleaning',
      desc: 'Thorough post-construction cleanup to remove debris and dust and prepare spaces for use.',
    },
  ],
}

export const bizSolutionsConfig = {
  url: 'https://mybizsolutions.us/biz/fast-and-green-cleaning-services-llc',
  name: 'MyBizSolutions',
  label: 'BizSolutions Partner',
}

export const mainwebsiteConfig = {
  url: 'https://fastgreencleaningservicesllc.com/',
  name: 'Fast & Green Cleaning Services LLC',
  label: 'Official Website',
}

export const aboutConfig = {
  label: 'WHY CHOOSE US',
  h2: ['The Fast & Green', 'Difference'],
  desc:
    'We deliver professional cleaning solutions with attention to detail, efficient service, and eco-friendly products. Our trained team works to keep your home or business clean while respecting your time and space.',
  checklist: [
    '100% eco-friendly cleaning approach',
    'Licensed & insured',
    'Professional bilingual team',
    'Fast and efficient service',
    'On-time arrivals',
  ],
  founder: {
    emoji: '🌿',
    name: 'Fast & Green Cleaning Services LLC',
    role: 'Professional Cleaning Team',
    quote:
      '"Professional. Fast. Eco-Friendly. We make every space cleaner and fresher."',
  },
}

export const contactConfig = {
  label: 'REACH US',
  h2: ['GET A FREE QUOTE', '& BOOK YOUR CLEANING'],
  phone: '(630) 352-1690',
  email: 'info@fastgreencleaningservicesllc.com',
  address: 'Montgomery, IL 60538, USA',
  mapsUrl: 'https://maps.google.com/?q=Montgomery,+IL+60538',
  primaryCta: {
    label: 'Call Now',
    href: 'tel:+16303521690',
  },
  secondaryCta: {
    label: 'Get Directions',
    href: 'https://maps.google.com/?q=Montgomery,+IL+60538',
  },
}

export const footerConfig = {
  links: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  copyright: '© 2026 Fast & Green Cleaning Services LLC. All rights reserved.',
}