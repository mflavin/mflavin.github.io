import { MonitorSmartphone, Palette, Pencil } from "@lucide/astro";

import AstroSvg from "public/images/astro.svg";
import AwsSvg from "public/images/aws.svg";
import ChartJsSvg from "public/images/chartjs.svg";
import CssSvg from "public/images/css.svg";
import CypressSvg from "public/images/cypress.svg";
import DjangoSvg from "public/images/django.svg";
import FigmaSvg from "public/images/figma.svg";
import FirebaseSvg from "public/images/firebase.svg";
import GraphqlSvg from "public/images/graphql.svg";
import Html5Svg from "public/images/html.svg";
import JavascriptSvg from "public/images/javascript.svg";
import JestSvg from "public/images/jest.svg";
import MysqlSvg from "public/images/mysql.svg";
import NodejsSvg from "public/images/nodejs.svg";
import NuxtSvg from "public/images/nuxt.svg";
import PlaywrightSvg from "public/images/playwright.svg";
import PrimeVueSvg from "public/images/primevue.svg";
import PythonSvg from "public/images/python.svg";
import ShadcnSvg from "public/images/shadcn.svg";
import SupabaseSvg from "public/images/supabase.svg";
import TailwindcssSvg from "public/images/tailwindcss.svg";
import TypescriptSvg from "public/images/typescript.svg";
import UnovisSvg from "public/images/unovis.svg";
import VitestSvg from "public/images/vitest.svg";
import VueSvg from "public/images/vue.svg";
import VuetifySvg from "public/images/vuetify.svg";

type Skill = {
  icon: any;
  name: string;
};

type SkillCategory = {
  categoryName: string;
  skills: Skill[];
};

// Programming Languages
export const javascript: Skill = { icon: JavascriptSvg, name: "JavaScript" };
export const typescript: Skill = { icon: TypescriptSvg, name: "TypeScript" };
export const python: Skill = { icon: PythonSvg, name: "Python" };

// Frontend Technologies
export const html5: Skill = { icon: Html5Svg, name: "HTML5" };
export const css: Skill = { icon: CssSvg, name: "CSS" };
export const vue: Skill = { icon: VueSvg, name: "Vue" };
export const nuxt: Skill = { icon: NuxtSvg, name: "Nuxt" };
export const astro: Skill = { icon: AstroSvg, name: "Astro" };
export const django: Skill = { icon: DjangoSvg, name: "Django" };
export const tailwindcss: Skill = { icon: TailwindcssSvg, name: "Tailwind CSS" };
export const vuetify: Skill = { icon: VuetifySvg, name: "Vuetify" };
export const shadcn: Skill = { icon: ShadcnSvg, name: "ShadcnVue" };
export const primevue: Skill = { icon: PrimeVueSvg, name: "PrimeVue" };
export const chartjs: Skill = { icon: ChartJsSvg, name: "Chart.js" };
export const unovis: Skill = { icon: UnovisSvg, name: "Unovis" };

// Backend Technologies
export const node: Skill = { icon: NodejsSvg, name: "Node" };
export const aws: Skill = { icon: AwsSvg, name: "AWS" };
export const graphql: Skill = { icon: GraphqlSvg, name: "GraphQL" };
export const firebase: Skill = { icon: FirebaseSvg, name: "Firebase" };
export const supabase: Skill = { icon: SupabaseSvg, name: "Supabase" };
export const mysql: Skill = { icon: MysqlSvg, name: "MySQL" };

// Testing Tools
export const vitest: Skill = { icon: VitestSvg, name: "Vitest" };
export const jest: Skill = { icon: JestSvg, name: "Jest" };
export const cypress: Skill = { icon: CypressSvg, name: "Cypress" };
export const playwright: Skill = { icon: PlaywrightSvg, name: "Playwright" };

// Design & UX Tools
export const figma: Skill = { icon: FigmaSvg, name: "Figma" };
export const pencil: Skill = { icon: Pencil, name: "UI/UX Design" };
export const palette: Skill = { icon: Palette, name: "Design Systems" };
export const monitorSmartphone: Skill = { icon: MonitorSmartphone, name: "Responsive Design" };

export const groupedSkills: SkillCategory[] = [
  {
    categoryName: "Programming Languages",
    skills: [
      javascript,
      typescript,
      python,
    ],
  },
  {
    categoryName: "Frontend Technologies",
    skills: [
      html5,
      css,
      vue,
      nuxt,
      astro,
      django,
      tailwindcss,
      vuetify,
      shadcn,
      primevue,
      chartjs,
      unovis,
    ],
  },
  {
    categoryName: "Backend Technologies",
    skills: [
      node,
      aws,
      graphql,
      firebase,
      supabase,
      mysql,
    ],
  },
  {
    categoryName: "Testing Tools",
    skills: [
      vitest,
      jest,
      cypress,
      playwright,
    ],
  },
  {
    categoryName: "Design & UX Tools",
    skills: [
      figma,
      pencil,
      palette,
      monitorSmartphone,
    ],
  },
];