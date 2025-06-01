document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const savedPreference = localStorage.getItem('darkMode');
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  const isDarkMode = savedPreference
    ? savedPreference === 'true'
    : prefersDarkMode;

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
  document.documentElement.classList.toggle('dark', isDarkMode);
}

function setToggle(toggleElement, isDarkMode) {
  toggleElement.checked = isDarkMode;
  toggleElement.setAttribute('aria-checked', isDarkMode);
}

function getTheme() {
  return document.documentElement.classList.value;
}
