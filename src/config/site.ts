export const APP_ORIGIN = 'https://anime.os20.org';

export const SITE = {
  name: 'STEMSketch',
  tagline: 'Build animated STEM lessons in minutes — drag, tune, and export.',
  description:
    'Create classroom-ready animated lessons with official STEM templates. Drag onto slides, adjust parameters, export MP4 or PowerPoint — no coding required.',
  url: 'https://stemsketch.github.io',
};

export const LINKS = {
  editor: `${APP_ORIGIN}/editor/demo`,
  signup: `${APP_ORIGIN}/signup`,
  login: `${APP_ORIGIN}/login`,
  terms: `${APP_ORIGIN}/legal/terms`,
  privacy: `${APP_ORIGIN}/legal/privacy`,
  contact: 'mailto:hello@stemsketch.dev',
};

/** End-user navigation only — /authors is intentionally excluded */
export const NAV = [
  { href: '/product', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/docs', label: 'Help' },
];
