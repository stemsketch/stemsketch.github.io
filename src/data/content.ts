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
    description: 'Download MP4, PowerPoint, or a `.viewdeck` file — or save to the cloud on Pro and Team plans.',
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
      'Free plan exports include a non-intrusive "Created By STEMSketch" watermark; Pro and above export without watermark.',
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
    title: 'Saving to the cloud (Pro & Team)',
    steps: [
      'Sign in and choose Save with a project name.',
      'Pro plans include 2 GB of cloud storage; Team plans include 5 GB.',
      'Publish when ready to share a view-only link with students or colleagues.',
    ],
  },
  {
    id: 'share',
    title: 'Sharing a ViewDeck',
    steps: [
      'Export a `.viewdeck` file for offline backup or import on another account.',
      'Use cloud publish (Pro or Team) to generate a share link for view-only playback.',
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
    a: 'Yes. The Free plan includes official pack templates, local `.viewdeck` saves, and exports with a "Created By STEMSketch" watermark. See Pricing for cloud storage and watermark-free export.',
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
    a: 'Team plans include realtime collaboration on cloud ViewDecks. Pro plans include 2 GB cloud storage without collaboration.',
  },
  {
    q: 'How do I remove the watermark?',
    a: 'Upgrade to Pro or Team. Free plan MP4 exports include a non-intrusive "Created By STEMSketch" watermark.',
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
export type PlanId = 'free' | 'pro' | 'team' | 'enterprise';

export interface PlanComparison {
  serverStorage: string;
  localViewdeck: boolean;
  watermark: string;
  realtimeCollab: boolean;
  ssoScim: boolean;
}

export interface Plan {
  id: PlanId;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  comparison: PlanComparison;
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    priceNote: 'forever',
    description: 'Build lessons locally with official STEM templates.',
    features: [
      'Local `.viewdeck` saves',
      'No server-side storage',
      '"Created By STEMSketch" on rendered videos',
    ],
    cta: 'Start free',
    ctaHref: 'https://anime.os20.org/signup',
    comparison: {
      serverStorage: '—',
      localViewdeck: true,
      watermark: 'Created By STEMSketch',
      realtimeCollab: false,
      ssoScim: false,
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$5',
    priceNote: 'per year',
    description: 'Cloud storage and watermark-free exports for individual educators.',
    features: [
      '2 GB server-side storage',
      'Watermark-free MP4 export',
      'Cloud sync across devices',
    ],
    cta: 'Upgrade to Pro',
    ctaHref: 'https://anime.os20.org/signup',
    comparison: {
      serverStorage: '2 GB',
      localViewdeck: true,
      watermark: '—',
      realtimeCollab: false,
      ssoScim: false,
    },
  },
  {
    id: 'team',
    name: 'Team',
    price: '$5',
    priceNote: 'per month · or $50 per year',
    description: 'Collaborate in realtime with more cloud storage for your group.',
    features: [
      '5 GB server-side storage',
      'Realtime collaboration',
      'Watermark-free MP4 export',
    ],
    cta: 'Upgrade to Team',
    ctaHref: 'https://anime.os20.org/signup',
    highlighted: true,
    comparison: {
      serverStorage: '5 GB',
      localViewdeck: true,
      watermark: '—',
      realtimeCollab: true,
      ssoScim: false,
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    priceNote: 'contact us',
    description: 'SSO, SCIM, and custom terms for institutions.',
    features: [
      'Single sign-on (SSO)',
      'SCIM provisioning',
      'Custom storage & support',
    ],
    cta: 'Contact us',
    ctaHref: 'mailto:hello@stemsketch.dev',
    comparison: {
      serverStorage: 'Custom',
      localViewdeck: true,
      watermark: '—',
      realtimeCollab: true,
      ssoScim: true,
    },
  },
];

export const COMPARISON_ROWS: {
  label: string;
  key: keyof PlanComparison;
  format?: (v: boolean | string) => string;
}[] = [
  { label: 'Server-side storage', key: 'serverStorage' },
  { label: 'Local `.viewdeck` saves', key: 'localViewdeck', format: (v) => (v ? 'Yes' : '—') },
  { label: 'Video watermark', key: 'watermark' },
  { label: 'Realtime collaboration', key: 'realtimeCollab', format: (v) => (v ? 'Yes' : '—') },
  { label: 'SSO / SCIM', key: 'ssoScim', format: (v) => (v ? 'Yes' : '—') },
];
