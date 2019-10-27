export function registerSpinnerComponent(name = 'app-spinner') {
    /**
     * A double line spinner
     *
     * size the size of the spinner. Default is 50px;
     * speed speed of rotation. Default is 1;
     * stroke-width - the width of the outer circle stroke. Default is 2px;
     * outer-color - the color of the outer circle. Default is #3be8b0;
     * inner-color the color of the inner circle. Default is #1aafd0;
     *
     * @example
     *   ```html
     *     <app-spinner size="25px" speed="2"></app-spinner>
     *   ```
     */
    // language=HTML
    const template = `
        <style>
          :host {
            align-items: center;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            height: var(--size);
            width: var(--size);
          }
          .circle {
            align-items: center;
            background-color: transparent;
            border-width: var(--stroke-width);
            border-style: solid;
            border-radius: 50%;
            display: flex;
            justify-content: center;
          }
          .outer-circle {
            animation: rotate calc(var(--time) / var(--speed)) linear infinite;
            border-color: var(--outer-color) transparent var(--outer-color) transparent;
            height: var(--size);
            width: var(--size);
          }
          .inner-circle {
            animation: rotate calc(calc(var(--time) / 2.3) / var(--speed)) linear infinite;
            animation-direction: reverse;
            border-color: transparent var(--inner-color) transparent var(--inner-color);
            border-width: calc(var(--stroke-width) * 0.6);
            height: calc(var(--size) * 0.8);
            width: calc(var(--size) * 0.8);
          }
          @keyframes rotate {
            0% {
              transform: rotate(0);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        </style>
        <div class="circle outer-circle">
          <div class="circle inner-circle"></div>
        </div>
    `;
    class AppSpinner extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            const container = document.createElement('div');
            container.innerHTML = template;
            shadow.appendChild(container);
        }
        connectedCallback() {
            this.style.setProperty('--time', '1.1s');
            this.style.setProperty('--size', this.getAttribute('size') || '50px');
            this.style.setProperty('--speed', this.getAttribute('speed') || '1');
            this.style.setProperty('--stroke-width', this.getAttribute('stroke-width') || '2px');
            this.style.setProperty('--outer-color', this.getAttribute('outer-color') || '#3be8b0');
            this.style.setProperty('--inner-color', this.getAttribute('inner-color') || '#1aafd0');
        }
    }
    try {
        customElements.define(name, AppSpinner);
    }
    catch (e) {
        console.warn(e);
    }
}
