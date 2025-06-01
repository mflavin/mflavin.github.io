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
  id: string;
  title: string;
  href: string;
  alt: string;
  description: string;
  src: ImageMetadata;
  technologies: Skill[];
  lastUpdated?: string;
};
