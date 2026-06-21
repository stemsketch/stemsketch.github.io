/** Mirrors @animation-dsl/platform PLAN_QUOTAS — placeholder prices until Stripe is wired. */

export type PlanId = 'free' | 'pro' | 'team' | 'api';

export interface Plan {
  id: PlanId;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  quotas: {
    maxProjects: number;
    renderMinutesPerMonth: number;
    llmCallsPerMonth: number;
    watermark: boolean;
    cloudViewDecks: boolean;
    maxViewDecks: number;
    cloudDrafts: boolean;
    realtimeCollab: boolean;
    scopedGrants: boolean;
  };
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    priceNote: 'forever',
    description: 'Try STEMSketch with official packs and local projects.',
    cta: 'Start free',
    ctaHref: 'https://anime.os20.org/signup',
    quotas: {
      maxProjects: 5,
      renderMinutesPerMonth: 10,
      llmCallsPerMonth: 20,
      watermark: true,
      cloudViewDecks: false,
      maxViewDecks: 0,
      cloudDrafts: false,
      realtimeCollab: false,
      scopedGrants: false,
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$19',
    priceNote: '/ month · placeholder',
    description: 'Cloud ViewDecks, higher limits, and watermark-free exports.',
    cta: 'Upgrade to Pro',
    ctaHref: '#',
    highlighted: true,
    quotas: {
      maxProjects: 50,
      renderMinutesPerMonth: 120,
      llmCallsPerMonth: 500,
      watermark: false,
      cloudViewDecks: true,
      maxViewDecks: 100,
      cloudDrafts: true,
      realtimeCollab: false,
      scopedGrants: true,
    },
  },
  {
    id: 'team',
    name: 'Team',
    price: '$49',
    priceNote: '/ month · placeholder',
    description: 'Realtime collaboration for departments and lab groups.',
    cta: 'Contact us',
    ctaHref: 'mailto:hello@stemsketch.dev',
    quotas: {
      maxProjects: 200,
      renderMinutesPerMonth: 600,
      llmCallsPerMonth: 2000,
      watermark: false,
      cloudViewDecks: true,
      maxViewDecks: 500,
      cloudDrafts: true,
      realtimeCollab: true,
      scopedGrants: true,
    },
  },
  {
    id: 'api',
    name: 'API',
    price: 'Custom',
    priceNote: 'contact sales',
    description: 'Highest quotas and programmatic access for integrators.',
    cta: 'Contact sales',
    ctaHref: 'mailto:hello@stemsketch.dev',
    quotas: {
      maxProjects: 500,
      renderMinutesPerMonth: 1000,
      llmCallsPerMonth: 5000,
      watermark: false,
      cloudViewDecks: true,
      maxViewDecks: 2000,
      cloudDrafts: true,
      realtimeCollab: true,
      scopedGrants: true,
    },
  },
];

export const COMPARISON_ROWS: {
  label: string;
  key: keyof Plan['quotas'];
  format?: (v: boolean | number) => string;
}[] = [
  { label: 'Saved projects', key: 'maxProjects' },
  { label: 'Export minutes / month', key: 'renderMinutesPerMonth' },
  { label: 'AI assist calls / month', key: 'llmCallsPerMonth' },
  {
    label: 'Watermark on exports',
    key: 'watermark',
    format: (v) => (v ? 'Yes' : 'No'),
  },
  {
    label: 'Cloud ViewDecks',
    key: 'cloudViewDecks',
    format: (v) => (v ? 'Yes' : '—'),
  },
  { label: 'Max cloud ViewDecks', key: 'maxViewDecks', format: (v) => (v === 0 ? '—' : String(v)) },
  {
    label: 'Cloud drafts',
    key: 'cloudDrafts',
    format: (v) => (v ? 'Yes' : '—'),
  },
  {
    label: 'Realtime collaboration',
    key: 'realtimeCollab',
    format: (v) => (v ? 'Yes' : '—'),
  },
  {
    label: 'Scoped sharing grants',
    key: 'scopedGrants',
    format: (v) => (v ? 'Yes' : '—'),
  },
];

export const TAXONOMY_AREAS = [
  { label: 'Natural Sciences', description: 'Biology, chemistry, physics, astronomy, earth science' },
  { label: 'Formal Sciences', description: 'Mathematics and quantitative foundations' },
  { label: 'Engineering', description: 'Mechanics, structures, and design systems' },
  { label: 'Computing', description: 'Algorithms, software, and information systems' },
  { label: 'Health Sciences', description: 'Clinical and applied human health' },
  { label: 'Social Sciences', description: 'Economics, geography, and society' },
  { label: 'Applied Sciences', description: 'Environmental science and policy contexts' },
];

export const FEATURES = [
  {
    title: 'Official STEM packs',
    description: 'Curated catalog templates authored by domain experts — biology, physics, chemistry, and more.',
  },
  {
    title: 'Multi-slide ViewDecks',
    description: 'Compose lessons with slide filmstrip, morph transitions, and a shared timeline.',
  },
  {
    title: 'Client-side MP4 export',
    description: 'Export video in the browser with WebCodecs — no server queue, up to 60 seconds at 1080p.',
  },
  {
    title: 'Parameter forms, not code',
    description: 'End-users tune ScenarioSpec parameters via property panels. No JavaScript required.',
  },
];

export const HOW_IT_WORKS = [
  { step: '1', title: 'Pick a template', description: 'Drag an official pack template from the catalog onto your slide.' },
  { step: '2', title: 'Compose slides', description: 'Adjust parameters, layer artifacts, and set transitions between slides.' },
  { step: '3', title: 'Export', description: 'Download MP4, PowerPoint, or a signed ViewDeck for sharing.' },
];
