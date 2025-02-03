import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';
import AppNav from '../src/components/AppNav.astro';

describe('Theme Selector', () => {
  test('should render the theme selector', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(AppNav);
    expect(result).toContain('id="theme-selector"');
  });

  test('should render the theme selector with the correct options', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(AppNav);

    const options = [
      { value: 'light', text: 'Light' },
      { value: 'brown', text: 'Brown' },
      { value: 'blue', text: 'Blue' },
      { value: 'green', text: 'Green' },
      { value: 'purple', text: 'Purple' },
      { value: 'red', text: 'Red' },
      { value: 'yellow', text: 'Yellow' },
      { value: 'dark', text: 'Dark' },
      { value: 'dark-brown', text: 'Dark Brown' },
      { value: 'dark-blue', text: 'Dark Blue' },
      { value: 'dark-green', text: 'Dark Green' },
      { value: 'dark-purple', text: 'Dark Purple' },
      { value: 'dark-red', text: 'Dark Red' },
      { value: 'dark-yellow', text: 'Dark Yellow' },
    ];

    for (const option of options) {
      expect(result).toContain(`<option value="${option.value}"`);
      expect(result).toContain(`>${option.text}</option>`);
    }
  });
});

describe('Dark Mode SVG Toggle', () => {
  test('should render the dark mode SVG toggle', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(AppNav);
    expect(result).toContain('id="darkModeToggle"');
    expect(result).toContain('role="switch"');
    expect(result).toContain('aria-label="Dark Mode Toggle"');
  });
});
