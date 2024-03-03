document.addEventListener('DOMContentLoaded', () => {
  // Dark mode toggle
  const savedPreference = localStorage.getItem('darkMode');
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const isDarkMode = savedPreference
    ? savedPreference === 'true'
    : prefersDarkMode;

  document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

  // Create a new style element
  const style = document.createElement('style');
  style.textContent = `
    body {
      transition: color 0.5s, background-color 0.5s;
    }
  `;

  // Append the style element to the head of the document
  setTimeout(() => document.head.appendChild(style), 0);

  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.checked = isDarkMode;
  darkModeToggle.setAttribute('aria-checked', isDarkMode); // Add ARIA property

  // Save user preference when checkbox is toggled
  darkModeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    localStorage.setItem('darkMode', !isDarkMode);
    darkModeToggle.setAttribute('aria-checked', !isDarkMode); // Update ARIA property
  });
});
