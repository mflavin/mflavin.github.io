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
