import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import SkillsSvgList from '../src/components/SkillsSvgList.astro';

describe('Skills Svg List', () => {
  test('should render the skills svg list', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SkillsSvgList);

    expect(result).toContain('aria-label="List of skills"');
    expect(result).toContain('aria-label="Vue"');
  });
});
