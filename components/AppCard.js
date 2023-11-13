document.addEventListener('DOMContentLoaded', () => {
  const styles = `
    .svg {
      width: 100%;
      width: 10rem;
    }

    .icon {
      width: 100%;
      height: 12rem;
      min-height: 12rem;
      border-radius: 1rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      background: rgb(14, 165, 233);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a:hover {
      color: #000000;
    }

    .container {
      height: 100%;
    }

    .col-body {
      padding: 2rem;
    }

    .col-header {
      margin-bottom: 0.25rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 600;
      letter-spacing: 0.025em;
      text-transform: uppercase;
      color: rgb(56, 189, 248);
    }

    .col-link {
      font-size: 1.125rem;
      line-height: 1.75rem;
      font-weight: 500;
      color: #000000;
    }

    .col-text {
      margin-top: 0.5rem;
      color: rgb(100, 116, 139);
    }

    @media (min-width: 768px) {
      .svg {
        width: 8rem;
        padding: 1rem;
      }

      .container {
        display: flex;
      }

      .icon {
        flex-shrink: 0;
        height: 100%;
        width: 12rem;
        border-radius: 1rem;
        border-bottom-right-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
      }
    }
  `;

  class AppCard extends HTMLElement {
    constructor() {
      super();

      // Create shadow root
      this.attachShadow({ mode: 'open' });

      // Add the component's styles to the shadow root
      const style = document.createElement('style');
      style.textContent = styles;
      this.shadowRoot.appendChild(style);

      // Build and add container to shadow root
      this.container = document.createElement('div');
      this.container.classList.add('container');
      this.shadowRoot.appendChild(this.container);
    }

    connectedCallback() {
      this.render();
    }

    static get observedAttributes() {
      return ['text', 'desc', 'href', 'svg'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.render();
      }
    }

    render() {
      const wrapper = document.createElement('div');
      wrapper.classList.add('container');
      // Get the value of the 'text' attribute
      const text = this.getAttribute('text');
      // Get the value of the 'desc' attribute
      const desc = this.getAttribute('desc');
      // Get the value of the 'href' attribute
      const href = this.getAttribute('href');
      // Get the value of the 'svg' attribute
      const svg = this.getAttribute('svg');
      // Set the inner HTML of the component
      this.container.innerHTML = `
        <a href="${href}" style="display: contents">
          <div class="icon">
            <img class="svg" src="./${svg}.svg" alt="My Happy SVG" />
          </div>
          <div class="col-body">
            <div class="col-header">${text}</div>
            <div class="col-text">${desc}</div>
          </div>
          </a>
        `;
    }
  }
  customElements.define('app-card', AppCard);
});
