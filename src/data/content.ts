export const FEATURES = [
  {
    icon: '🧬',
    title: 'Official STEM catalog',
    description: 'Ready-made biology, physics, chemistry, and more — vetted templates you can drop onto any slide.',
  },
  {
    icon: '🎬',
    title: 'Multi-slide ViewDecks',
    description: 'Build full lessons with transitions, morph effects, and a timeline that keeps every layer in sync.',
  },
  {
    icon: '⚡',
    title: 'Instant MP4 export',
    description: 'Render video right in your browser with Chrome or Edge — up to 60 seconds at 1080p.',
  },
  {
    icon: '🎛️',
    title: 'Simple controls',
    description: 'Adjust length, angle, speed, and more with labeled sliders — never write code.',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Pick a template',
    description: 'Open the catalog, choose a STEM animation, and drag it onto your slide canvas.',
  },
  {
    step: '2',
    title: 'Compose your deck',
    description: 'Add slides, tune parameters, reorder layers, and preview playback on the timeline.',
  },
  {
    step: '3',
    title: 'Export & share',
    description: 'Download MP4, PowerPoint, or a ViewDeck file — or save to the cloud on Pro plans.',
  },
];

export const SUBJECT_AREAS = [
  { label: 'Natural sciences', description: 'Biology, chemistry, physics, astronomy, earth science' },
  { label: 'Formal sciences', description: 'Mathematics and quantitative foundations' },
  { label: 'Engineering', description: 'Mechanics, structures, and design systems' },
  { label: 'Computing', description: 'Algorithms and information systems' },
  { label: 'Health sciences', description: 'Clinical and applied human health' },
  { label: 'Social sciences', description: 'Economics, geography, and society' },
];

export const GUIDES = [
  {
    id: 'start',
    title: 'Getting started',
    steps: [
      'Sign up free at the editor and open a blank project or starter deck.',
      'Browse Official packs in the left sidebar — templates are grouped by subject area.',
      'Drag a template onto the canvas. Use the properties panel on the right to adjust values like length, angle, or duration.',
      'Press Play on the timeline to preview your animation.',
    ],
  },
  {
    id: 'slides',
    title: 'Working with slides',
    steps: [
      'Use the slide filmstrip at the bottom to add, duplicate, or reorder slides.',
      'Click the transition gap between slides to set cut, fade, or morph effects.',
      'Each slide can have its own templates and timing — the timeline spans the full deck.',
    ],
  },
  {
    id: 'export-video',
    title: 'Exporting video (MP4)',
    steps: [
      'Use Export MP4 in the toolbar when your deck is ready.',
      'Export runs in your browser (Chrome or Edge recommended). Maximum length is 60 seconds at 1080p.',
      'Free plan exports include a small watermark; Pro and above export without watermark.',
    ],
  },
  {
    id: 'export-pptx',
    title: 'Exporting PowerPoint',
    steps: [
      'Click Export PPTX in the toolbar.',
      'STEMSketch picks the best fidelity per slide — static shapes, native transitions, or embedded video for complex motion.',
      'Open the file in PowerPoint or Google Slides for presenting.',
    ],
  },
  {
    id: 'cloud',
    title: 'Saving to the cloud (Pro+)',
    steps: [
      'Sign in and choose Save with a project name.',
      'Pro plans sync ViewDecks to the cloud so you can resume on another device.',
      'Publish when ready to share a view-only link with students or colleagues.',
    ],
  },
  {
    id: 'share',
    title: 'Sharing a ViewDeck',
    steps: [
      'Export a `.viewdeck` file for offline backup or import on another account.',
      'Use cloud publish (Pro+) to generate a share link for view-only playback.',
      'Recipients do not need to edit — they watch the composed lesson.',
    ],
  },
];

export const FAQ = [
  {
    q: 'Do I need to install anything?',
    a: 'No — STEMSketch runs in your browser. For video export, use Chrome or Edge for the best WebCodecs support.',
  },
  {
    q: 'Can I use STEMSketch for free?',
    a: 'Yes. The Free plan includes official pack templates, local projects, and exports with a watermark. See Pricing for cloud storage and watermark-free export.',
  },
  {
    q: 'Do I need to know programming?',
    a: 'No. Templates expose parameters as forms and sliders. You never write code to build a lesson.',
  },
  {
    q: 'What is a ViewDeck?',
    a: 'A ViewDeck is your multi-slide project — templates, timing, transitions, and layout. You can save it locally, to the cloud, or export as a portable `.viewdeck` file.',
  },
  {
    q: 'Why does video export only work in Chrome or Edge?',
    a: 'Video is rendered client-side using WebCodecs, which those browsers support reliably. We are not using a server render queue.',
  },
  {
    q: 'What is the 60-second export limit?',
    a: 'Browser-based encoding is capped at 60 seconds and 1080p to keep exports fast and reliable on classroom laptops.',
  },
  {
    q: 'Can I collaborate with colleagues?',
    a: 'Team plans include realtime collaboration on cloud ViewDecks. Pro plans support cloud drafts and scoped sharing.',
  },
  {
    q: 'How do I remove the watermark?',
    a: 'Upgrade to Pro or higher. Free plan MP4 exports include a STEMSketch watermark.',
  },
  {
    q: 'Can I import PowerPoint back into STEMSketch?',
    a: 'Not yet — round-trip PPTX import is planned. Use ViewDeck files for full editing fidelity.',
  },
  {
    q: 'Who creates the STEM templates?',
    a: 'Official packs are curated by the STEMSketch team and domain partners. You consume them from the in-app catalog.',
  },
];

/** Pricing plan data — mirrors platform PLAN_QUOTAS */
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
    description: 'Explore official packs and build lessons locally.',
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
    description: 'Cloud saves, watermark-free exports, and higher limits.',
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
  { label: 'Watermark on exports', key: 'watermark', format: (v) => (v ? 'Yes' : 'No') },
  { label: 'Cloud ViewDecks', key: 'cloudViewDecks', format: (v) => (v ? 'Yes' : '—') },
  { label: 'Max cloud ViewDecks', key: 'maxViewDecks', format: (v) => (v === 0 ? '—' : String(v)) },
  { label: 'Cloud drafts', key: 'cloudDrafts', format: (v) => (v ? 'Yes' : '—') },
  { label: 'Realtime collaboration', key: 'realtimeCollab', format: (v) => (v ? 'Yes' : '—') },
  { label: 'Scoped sharing', key: 'scopedGrants', format: (v) => (v ? 'Yes' : '—') },
];
