document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const savedPreference = localStorage.getItem('darkMode') === 'true';
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const isDarkMode = savedPreference || prefersDarkMode;
  setTheme(isDarkMode);
  setToggle(darkModeToggle, isDarkMode);

  darkModeToggle.addEventListener('click', () => {
    const isDarkMode = getTheme() === 'dark';
    setTheme(!isDarkMode);
    setToggle(darkModeToggle, !isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
  });
});

function setTheme(isDarkMode) {
  document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
}

function setToggle(toggleElement, isDarkMode) {
  toggleElement.checked = isDarkMode;
  toggleElement.setAttribute('aria-checked', isDarkMode);
}

function getTheme() {
  return document.body.getAttribute('data-theme');
}
