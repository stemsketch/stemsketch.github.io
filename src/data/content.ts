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
    description: 'Render video right in your browser with Chrome or Edge. Free exports are capped at 60 seconds.',
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
    description: 'Download MP4, PowerPoint, or a `.viewdeck` file. Team workspaces can save ViewDecks server-side for concurrent editing.',
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
      'Export runs in your browser (Chrome or Edge recommended). Free plan videos are limited to 60 seconds.',
      'Free plan exports include a non-intrusive "Created By STEMSketch" watermark; Starter, Team, and Enterprise export without watermark.',
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
    id: 'sync',
    title: 'Saving and syncing ViewDecks',
    steps: [
      'All users sign in with SSO before using STEMSketch.',
      'Free and Starter users can save portable `.viewdeck` files locally.',
      'Team workspaces save ViewDecks server-side, include 5 GB storage per user, and support concurrent editing.',
    ],
  },
  {
    id: 'share',
    title: 'Sharing a ViewDeck',
    steps: [
      'Export a `.viewdeck` file for offline backup or import on another account.',
      'Use a Team workspace when colleagues need to edit the same server-side ViewDeck together.',
      'Enterprise plans can add API access, SCIM, and company SSO for institution-wide workflows.',
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
    a: 'Yes. All users sign in with SSO. The Free plan includes official pack templates, local `.viewdeck` saves, shared AI processing that may be slower during busy periods, and MP4 exports with a "Created By STEMSketch" watermark up to 60 seconds.',
  },
  {
    q: 'Do I need to know programming?',
    a: 'No. Templates expose parameters as forms and sliders. You never write code to build a lesson.',
  },
  {
    q: 'What is a ViewDeck?',
    a: 'A ViewDeck is your multi-slide project — templates, timing, transitions, and layout. You can save it locally as a portable `.viewdeck` file, or save it server-side on Team plans for concurrent editing.',
  },
  {
    q: 'Why does video export only work in Chrome or Edge?',
    a: 'Video is rendered client-side using WebCodecs, which those browsers support reliably. We are not using a server render queue.',
  },
  {
    q: 'What is the 60-second export limit?',
    a: 'Free plan videos are capped at 60 seconds. Starter, Team, and Enterprise plans remove the video length limit.',
  },
  {
    q: 'Can I collaborate with colleagues?',
    a: 'Yes. Team plans save ViewDecks server-side and allow concurrent editing, with 5 GB storage per user.',
  },
  {
    q: 'How do I remove the watermark?',
    a: 'Upgrade to Starter, Team, or Enterprise. Free plan MP4 exports include a non-intrusive "Created By STEMSketch" watermark.',
  },
  {
    q: 'How do AI tokens and BYOK work?',
    a: 'Starter includes a base token allowance and Team includes 10x the Starter allowance. If a user runs out before the next subscription renewal, they can buy optional $10 AI token packs as pay-as-you-go add-ons. BYOK is available on paid plans.',
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
export type PlanId = 'free' | 'starter' | 'team' | 'enterprise';

export interface PlanComparison {
  access: string;
  videoLimit: string;
  serverStorage: string;
  localViewdeck: boolean;
  watermark: string;
  aiProcessing: string;
  aiTokens: string;
  aiTokenAddOns: string;
  byok: string;
  realtimeCollab: boolean;
  enterpriseControls: string;
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
    description: 'Start creating with SSO access, local ViewDeck files, and shared AI processing.',
    features: [
      'SSO sign-in required',
      'Videos include watermark',
      '60-second video limit',
      'Shared AI processing',
      'Local `.viewdeck` saves',
    ],
    cta: 'Start free',
    ctaHref: 'https://anime.os20.org/signup',
    comparison: {
      access: 'SSO required',
      videoLimit: '60 seconds',
      serverStorage: 'None',
      localViewdeck: true,
      watermark: 'Yes',
      aiProcessing: 'Shared; may be slower when busy',
      aiTokens: 'No included monthly allowance',
      aiTokenAddOns: '$10 packs available on demand',
      byok: 'No',
      realtimeCollab: false,
      enterpriseControls: '—',
    },
  },
  {
    id: 'starter',
    name: 'Starter',
    price: '$5',
    priceNote: 'per year',
    description: 'Watermark-free generation with included AI tokens and a dedicated processing slot.',
    features: [
      'SSO sign-in required',
      'No video watermark',
      'No video length limit',
      'Base AI token allowance',
      'Dedicated AI processing',
      'BYOK supported',
    ],
    cta: 'Upgrade to Starter',
    ctaHref: 'https://anime.os20.org/signup',
    comparison: {
      access: 'SSO required',
      videoLimit: 'Unlimited',
      serverStorage: 'None',
      localViewdeck: true,
      watermark: 'No',
      aiProcessing: 'Dedicated slot',
      aiTokens: 'Base allowance included',
      aiTokenAddOns: '$10 packs if allowance runs out',
      byok: 'Yes',
      realtimeCollab: false,
      enterpriseControls: '—',
    },
  },
  {
    id: 'team',
    name: 'Team',
    price: '$5',
    priceNote: 'per month · $50 per year',
    description: 'Server-side ViewDeck sync and concurrent editing for working groups.',
    features: [
      'SSO sign-in required',
      'Server-side ViewDeck saves',
      'Concurrent editing',
      '5 GB storage per user',
      '10x Starter AI tokens',
      'Dedicated AI processing per user',
      'BYOK supported',
    ],
    cta: 'Upgrade to Team',
    ctaHref: 'https://anime.os20.org/signup',
    highlighted: true,
    comparison: {
      access: 'SSO required',
      videoLimit: 'Unlimited',
      serverStorage: '5 GB per user',
      localViewdeck: true,
      watermark: 'No',
      aiProcessing: 'Dedicated slot per user',
      aiTokens: '10x Starter allowance',
      aiTokenAddOns: '$10 packs if allowance runs out',
      byok: 'Yes',
      realtimeCollab: true,
      enterpriseControls: '—',
    },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    priceNote: 'quote',
    description: 'Institution controls, provisioning, and API access tailored to your organization.',
    features: [
      'Company SSO',
      'SCIM provisioning',
      'API access',
      'Custom quote and terms',
    ],
    cta: 'Contact us',
    ctaHref: 'mailto:hello@stemsketch.dev',
    comparison: {
      access: 'Company SSO',
      videoLimit: 'Unlimited',
      serverStorage: 'Custom',
      localViewdeck: true,
      watermark: 'No',
      aiProcessing: 'Custom dedicated capacity',
      aiTokens: 'Custom',
      aiTokenAddOns: 'Custom',
      byok: 'Yes',
      realtimeCollab: true,
      enterpriseControls: 'API, SCIM, company SSO',
    },
  },
];

export const COMPARISON_ROWS: {
  label: string;
  key: keyof PlanComparison;
  format?: (v: boolean | string) => string;
}[] = [
  { label: 'Access', key: 'access' },
  { label: 'Video length', key: 'videoLimit' },
  { label: 'Video watermark', key: 'watermark' },
  { label: 'AI processing', key: 'aiProcessing' },
  { label: 'Included AI tokens', key: 'aiTokens' },
  { label: 'On-demand AI token add-ons', key: 'aiTokenAddOns' },
  { label: 'BYOK', key: 'byok' },
  { label: 'Server-side storage', key: 'serverStorage' },
  { label: 'Local `.viewdeck` saves', key: 'localViewdeck', format: (v) => (v ? 'Yes' : '—') },
  { label: 'Concurrent editing', key: 'realtimeCollab', format: (v) => (v ? 'Yes' : '—') },
  { label: 'Enterprise controls', key: 'enterpriseControls' },
];
