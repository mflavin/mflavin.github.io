function toggleDarkMode(toggleElement: HTMLElement, isDarkMode: boolean) {
  toggleElement.setAttribute('aria-checked', String(isDarkMode));

  const moon = toggleElement.querySelector('#moon');
  const sun = toggleElement.querySelector('#sun');

  if (isDarkMode) {
    moon?.setAttribute('style', 'display: none;');
    sun?.setAttribute('style', 'display: block;');
  } else {
    moon?.setAttribute('style', 'display: block;');
    sun?.setAttribute('style', 'display: none;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const doc = document.documentElement;
  const darkModeToggle = document.getElementById('darkModeToggle');
  const themeSelector = document.getElementById('theme-selector');
  if (!darkModeToggle) return;
  if (!themeSelector) return;

  const savedTheme = localStorage.getItem('data-theme');
  if (savedTheme) {
    doc.setAttribute('data-theme', savedTheme);
    toggleDarkMode(darkModeToggle, savedTheme?.includes('dark'));
    (themeSelector as HTMLSelectElement).value = savedTheme;
  } else {
    // Set preferred theme to themeSelector.value
    doc.setAttribute('data-theme', preferredTheme);
    (themeSelector as HTMLSelectElement).value = preferredTheme;
  }

  darkModeToggle.addEventListener('click', () => {
    const currentDataTheme = doc.getAttribute('data-theme');
    let newTheme = 'dark';

    if (currentDataTheme === 'dark') {
      newTheme = 'light';
    } else if (currentDataTheme === 'light') {
      newTheme = 'dark';
    } else {
      newTheme = currentDataTheme?.includes('dark')
        ? currentDataTheme?.replace('dark-', '')
        : `dark-${currentDataTheme}`;
    }

    doc.setAttribute('data-theme', newTheme);
    localStorage.setItem('data-theme', newTheme);
    toggleDarkMode(darkModeToggle, newTheme?.includes('dark'));

    (themeSelector as HTMLSelectElement).value = newTheme;
  });

  themeSelector.addEventListener('change', (event) => {
    const selectedTheme = (event.target as HTMLSelectElement).value;
    doc.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('data-theme', selectedTheme);
  });
});
