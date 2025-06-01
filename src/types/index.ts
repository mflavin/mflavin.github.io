import type { Icon } from '@lucide/astro';

export type Skill = {
  icon:
    | (((props: astroHTML.JSX.SVGAttributes) => any) & ImageMetadata)
    | typeof Icon;
  name: string;
};

export type SkillCategory = {
  categoryName: string;
  skills: Skill[];
};

export type Project = {
  alt: string;
  description: string;
  features: string[];
  href: string;
  id: string;
  lastUpdated: string;
  src: ImageMetadata;
  technologies: Skill[];
  title: string;
};
