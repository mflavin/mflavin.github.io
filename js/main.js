// Array of card data
const cardData = [
  {
    image: './assets/images/tailwind.webp',
    alt: 'Tailwind CSS Logo',
    title: 'Vue 3 + Tailwind CSS',
    description: 'Personal project using Tailwind CSS and Vue 3.',
    link: '/v3tw',
  },
  {
    image: './assets/images/daisyui.webp',
    alt: 'Daisy UI Logo',
    title: 'Vue 3 + Daisy UI',
    description: 'Personal project using Tailwind CSS, Daisy UI, and Vue 3.',
    link: 'https://spectacular-cascaron-b8176d.netlify.app',
  },
  {
    image: './assets/images/nuxt.webp',
    alt: 'Nuxt Logo',
    title: 'Nuxt 3 + Nuxt UI',
    description: 'Personal project using Nuxt 3 and Nuxt UI.',
    link: 'https://relaxed-eclair-22ba96.netlify.app/',
  },
];

// Function to create a card element
function createCardElement(card, tabIndex) {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');

  const imgElement = document.createElement('img');
  imgElement.classList.add('svg');
  imgElement.src = card.image;
  imgElement.alt = card.alt;
  cardElement.appendChild(imgElement);

  const titleElement = document.createElement('h2');
  titleElement.classList.add('title');
  titleElement.textContent = card.title;
  cardElement.appendChild(titleElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.classList.add('description');
  descriptionElement.textContent = card.description;
  cardElement.appendChild(descriptionElement);

  const linkElement = document.createElement('a');
  linkElement.href = card.link;
  linkElement.classList.add('card-link');
  linkElement.textContent = card.link;
  linkElement.tabIndex = tabIndex; // Make the link focusable
  cardElement.appendChild(linkElement);

  return cardElement;
}

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

  const container = document.querySelector('.card-container');

  // Loop through cardData array and create card elements
  cardData.forEach((card, index) => {
    const cardElement = createCardElement(card, index + 1);
    // Append the card to the container
    container.appendChild(cardElement);
  });

  const darkModeToggle = document.getElementById('darkModeToggle');
  darkModeToggle.checked = isDarkMode;
  darkModeToggle.tabIndex = 0; // Make the toggle focusable
  darkModeToggle.setAttribute('role', 'switch'); // Add ARIA role
  darkModeToggle.setAttribute('aria-checked', isDarkMode); // Add ARIA property

  // Save user preference when checkbox is toggled
  darkModeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    localStorage.setItem('darkMode', !isDarkMode);
    darkModeToggle.setAttribute('aria-checked', !isDarkMode); // Update ARIA property
  });
});
