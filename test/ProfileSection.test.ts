import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import ProfileSection from '../src/components/ProfileSection.astro';

describe('Profile Section', () => {
  test('should render the profile section', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ProfileSection);

    expect(result).toContain('<img');
  });

  test('should render the github button', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ProfileSection);

    expect(result).toContain('href="https://github.com/mflavin"');
    expect(result).toContain(
      'aria-labelledby="github-icon-title github-icon-description"',
    );
  });

  test('should render the linkedin button', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ProfileSection);

    expect(result).toContain('href="https://www.linkedin.com/in/mflavin/"');
    expect(result).toContain(
      'aria-labelledby="linkedin-icon-title linkedin-icon-description"',
    );
  });
});
