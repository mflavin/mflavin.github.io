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
  github?: string;
  href: string;
  id: string;
  lastUpdated: string;
  src: ImageMetadata;
  technologies: Skill[];
  title: string;
};

export type WorkExperience = {
  logo: ImageMetadata;
  company: string;
  position: string;
  duration: string;
  description: string;
  responsibilities: string[];
};

export type Education = {
  logo: ImageMetadata;
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
};
