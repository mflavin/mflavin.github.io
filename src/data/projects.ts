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
    alt: 'Pig Tracks',
    description:
      'Effortlessly manage your finances with Pig Tracks, a user-friendly expense tracker.',
    features: [
      'View all account balances, totals, and charts in one place.',
      'Log and categorize transactions for clear financial insights.',
      'Set custom budgets and track spending in real-time.',
      'Automate recurring payments and view them on a calendar.',
    ],
    href: 'https://pigtracks.netlify.app/',
    id: 'pigtracks',
    lastUpdated: 'February 2025',
    src: pigtracks,
    technologies: [vue, typescript, tailwindcss, primevue, chartjs],
    title: 'Pig Tracks',
  },
  {
    alt: 'Timeoff Calendar',
    description:
      'Streamline work time-off planning with a dedicated vacation and leave calendar.',
    features: [
      'Track vacation and personal time off with detailed hour balances.',
      'View a color-coded calendar with icons for quick status checks.',
      'Log time off rapidly with configurable quick-click actions.',
      'Access statistics on total, used, available, and future earned hours.',
    ],
    href: 'https://timeoff-remaining-calc-app.netlify.app/',
    id: 'timeoff',
    lastUpdated: 'January 2025',
    src: timeoff,
    technologies: [vue, typescript, tailwindcss],
    title: 'Timeoff Calendar',
  },
  {
    alt: 'Expense Tracker',
    description:
      'Record transactions, manage budgets, and gain insights with AI-powered expense tracking.',
    features: [
      'View net worth, recent transactions, and upcoming payments on a dashboard.',
      'Detailed budget tracking with visual progress bars and linked transaction views.',
      'Log and manage all transactions, including recurring expenses.',
      'Visual insightful financial reports with interactive charts.',
    ],
    href: 'https://guileless-jelly-8d3df3.netlify.app/daisyui',
    id: 'expenseTracker',
    lastUpdated: 'November 2024',
    src: expenseTracker,
    technologies: [vue, typescript, tailwindcss, chartjs, supabase],
    title: 'Expense Tracker',
  },
  {
    alt: 'HR App',
    description:
      'A comprehensive HR platform for team collaboration, employee management, and time tracking.',
    features: [
      'Access employee directory, profiles, and attendance via an HR portal.',
      'Utilize integrated tools for video meetings, messaging, and announcements.',
      'Manage projects and support tickets with built-in work tools.',
      'Personalize experience with light/dark modes and i18n support.',
    ],
    href: 'https://guileless-jelly-8d3df3.netlify.app/hr-management',
    id: 'hr',
    lastUpdated: 'October 2024',
    src: hr,
    technologies: [vue, typescript, primevue, tailwindcss, chartjs, i18n],
    title: 'HR App',
  },
  {
    alt: 'Banking App',
    description:
      'A mockup banking application for tracking finances, managing cards, and achieving savings goals.',
    features: [
      'View account balances, transactions, and upcoming bills.',
      'Analyze expenses by category with monthly comparisons.',
      'Track savings goal progress with visual charts and comparisons.',
    ],
    href: 'https://guileless-jelly-8d3df3.netlify.app/bank-dashboard',
    id: 'bank',
    lastUpdated: 'September 2024',
    src: bank,
    technologies: [vue, typescript, primevue, tailwindcss, chartjs],
    title: 'Banking App',
  },
  {
    alt: 'Notes App (Nuxt Version)',
    description:
      'Securely save and organize notes and files with user authentication.',
    features: [
      'Upload, download, view, and delete files via a central dashboard.',
      'Save notes and links with titles, tags, and timestamps.',
      'Search files and notes, with tag-based filtering.',
      'Manage personal files and notes with Firebase user authentication.',
    ],
    href: 'https://guileless-jelly-8d3df3.netlify.app/nuxt3',
    id: 'nuxt3',
    lastUpdated: 'June 2024',
    src: nuxt3,
    technologies: [nuxt, typescript, tailwindcss, firebase],
    title: 'Notes App (Nuxt Version)',
  },
  {
    alt: 'Notes App (Vue Version)',
    description:
      'Securely save and organize notes and files with user authentication.',
    features: [
      'Upload, download, view, and delete files via a central dashboard.',
      'Save notes and links with titles, tags, and timestamps.',
      'Search files and notes, with tag-based filtering.',
      'Manage personal files and notes with Firebase user authentication.',
    ],
    href: 'https://guileless-jelly-8d3df3.netlify.app/vue-base',
    id: 'vuebase',
    lastUpdated: 'February 2024',
    src: vuebase,
    technologies: [vue, javascript, daisyUI, tailwindcss, firebase],
    title: 'Notes App (Vue Version)',
  },
];
