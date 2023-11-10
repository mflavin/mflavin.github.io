class SimpleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.container = document.createElement('div');
    this.shadowRoot.appendChild(this.container);

    // Create and configure the link element for the CSS file
    var linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = './AppCard/style.css'; // Replace with the actual path to your CSS file

    // Listen for the 'load' event before applying styles
    linkElement.addEventListener('load', () => {
      this.connectedCallback(); // Re-render once styles are loaded
    });

    // Append the link element to the head of the document
    document.head.appendChild(linkElement);
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['propvalue'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const propValue = this.getAttribute('propvalue') || 'Default Value';

    this.container.innerHTML = `
      <div>
        <p>${propValue}</p>
      </div>
    `;
  }
}

customElements.define('simple-component', SimpleComponent);
