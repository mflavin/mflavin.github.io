function setTheme(
  theme: string,
  toggleElement: HTMLElement,
  themeSelector: HTMLSelectElement,
) {
  const doc = document.documentElement;
  doc.setAttribute('data-theme', theme);
  localStorage.setItem('data-theme', theme);
  toggleDarkMode(toggleElement, theme.includes('dark'));
  themeSelector.value = theme;
}

function initializeTheme(
  toggleElement: HTMLElement,
  themeSelector: HTMLSelectElement,
) {
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const savedTheme = localStorage.getItem('data-theme') || preferredTheme;
  setTheme(savedTheme, toggleElement, themeSelector);
}

function toggleDarkMode(toggleElement: HTMLElement, isDarkMode: boolean) {
  toggleElement.setAttribute('aria-checked', String(isDarkMode));
  const moon = toggleElement.querySelector('#moon');
  const sun = toggleElement.querySelector('#sun');
  moon?.setAttribute('style', `display: ${isDarkMode ? 'none' : 'block'};`);
  sun?.setAttribute('style', `display: ${isDarkMode ? 'block' : 'none'};`);
}

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const themeSelector = document.getElementById(
    'theme-selector',
  ) as HTMLSelectElement;
  if (!darkModeToggle || !themeSelector) return;

  initializeTheme(darkModeToggle, themeSelector);

  darkModeToggle.addEventListener('click', () => {
    const currentTheme =
      document.documentElement.getAttribute('data-theme') || 'light';

    let newTheme = 'dark';
    if (currentTheme === 'dark') {
      newTheme = 'light';
    } else if (currentTheme === 'light') {
      newTheme = 'dark';
    } else {
      newTheme = currentTheme?.includes('dark')
        ? currentTheme?.replace('dark-', '')
        : `dark-${currentTheme}`;
    }

    setTheme(newTheme, darkModeToggle, themeSelector);
  });

  themeSelector.addEventListener('change', (event) => {
    const selectedTheme = (event.target as HTMLSelectElement).value;
    setTheme(selectedTheme, darkModeToggle, themeSelector);
  });
});
