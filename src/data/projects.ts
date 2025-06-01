import type { Project } from '@/types';

import {
  typescript,
  vue,
  nuxt,
  javascript,
  tailwindcss,
  primevue,
  chartjs,
  firebase,
  supabase,
  i18n,
  daisyUI,
} from '@data/skills';

import bank from '@/images/projects/bank.png';
import expenseTracker from '@/images/projects/expense_tracker.png';
import hr from '@/images/projects/hr.png';
import nuxt3 from '@/images/projects/nuxt3.png';
import pigtracks from '@/images/projects/pigtracks.png';
import timeoff from '@/images/projects/timeoff.png';
import vuebase from '@/images/projects/vuebase.png';

export const projects: Project[] = [
  {
    id: 'pigtracks',
    title: 'Pig Tracks',
    href: 'https://pigtracks.netlify.app/',
    alt: 'Pig Tracks',
    description:
      'Pig Tracks is a simple and easy-to-use expense tracker app that helps you manage your finances.',
    src: pigtracks,
    technologies: [vue, typescript, tailwindcss, primevue, chartjs],
    lastUpdated: 'February 2025',
  },
  {
    id: 'timeoff',
    title: 'Timeoff Calendar',
    href: 'https://timeoff-remaining-calc-app.netlify.app/',
    alt: 'Timeoff Calendar',
    description: 'Calendar app for planning timeoff / vacation days at work.',
    src: timeoff,
    technologies: [vue, typescript, tailwindcss],
    lastUpdated: 'January 2025',
  },
  {
    id: 'expenseTracker',
    title: 'Expense Tracker',
    href: 'https://guileless-jelly-8d3df3.netlify.app/daisyui',
    alt: 'Expense Tracker',
    description:
      'Easily record transactions, set up budgets, add recurring expenses, and view insightful reports. Plus, this uses AI that can create transactions for you automatically!',
    src: expenseTracker,
    technologies: [vue, typescript, tailwindcss, chartjs, supabase],
    lastUpdated: 'November 2024',
  },
  {
    id: 'hr',
    title: 'HR App',
    href: 'https://guileless-jelly-8d3df3.netlify.app/hr-management',
    alt: 'HR App',
    description:
      'HR App that allows you join meetings, send messages, track employees, time attendance, and much more!',
    src: hr,
    technologies: [vue, typescript, primevue, tailwindcss, chartjs, i18n],
    lastUpdated: 'October 2024',
  },
  {
    id: 'bank',
    title: 'Banking App',
    href: 'https://guileless-jelly-8d3df3.netlify.app/bank-dashboard',
    alt: 'Banking App',
    description:
      'Mockup finance / bank app to track transactions, credit cards, bills, and saving goals.',
    src: bank,
    technologies: [vue, typescript, primevue, tailwindcss, chartjs],
    lastUpdated: 'September 2024',
  },
  {
    id: 'nuxt3',
    title: 'Notes App (Nuxt Version)',
    href: 'https://guileless-jelly-8d3df3.netlify.app/nuxt3',
    alt: 'Notes App (Nuxt Version)',
    description: 'Notes app to save notes and files.',
    src: nuxt3,
    technologies: [nuxt, typescript, tailwindcss, firebase],
    lastUpdated: 'June 2024',
  },
  {
    id: 'vuebase',
    title: 'Notes App (Vue Version)',
    href: 'https://guileless-jelly-8d3df3.netlify.app/vue-base',
    alt: 'Notes App (Vue Version)',
    description: 'Notes app to save notes and files.',
    src: vuebase,
    technologies: [vue, javascript, daisyUI, tailwindcss, firebase],
    lastUpdated: 'February 2024',
  },
];
