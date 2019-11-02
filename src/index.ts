export function registerSpinnerComponent(name: string = 'app-spinner') {

    // language=HTML
  const template = `
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
          }
          
          .container {
            --_inner-spinner-color: var(--inner-spinner-color, #3be8b0);
            --_outer-spinner-color: var(--outer-spinner-color, #1aafd0);
            --_size: var(--size, 50px);
            --_speed: var(--speed, 1);
            --_stroke-width: var(--stroke-width, 2px);
            --_time: var(--time, 1.1s);
            display: grid;
            place-items: center;
            height: var(--_size);
            width: var(--_size);
          }
          .circle {
            align-items: center;
            background-color: transparent;
            border-width: var(--_stroke-width);
            border-style: solid;
            border-radius: 50%;
            display: flex;
            justify-content: center;
          }
          .outer-circle {
            animation: rotate calc(var(--_time) / var(--_speed)) linear infinite;
            border-color: var(--_outer-spinner-color) transparent var(--_outer-spinner-color) transparent;
            height: var(--_size);
            width: var(--_size);
          }
          .inner-circle {
            animation: rotate calc(calc(var(--_time) / 2.3) / var(--_speed)) linear infinite;
            animation-direction: reverse;
            border-color: transparent var(--_inner-spinner-color) transparent var(--_inner-spinner-color);
            border-width: calc(var(--_stroke-width) * 0.6);
            height: calc(var(--_size) * 0.8);
            width: calc(var(--_size) * 0.8);
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
        <div class="container">
          <div class="circle outer-circle">
            <div class="circle inner-circle"></div>
          </div>
        </div>
    `;

  class AppSpinner extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({mode: 'open'});
      const container = document.createElement('div');
      container.innerHTML = template;
      shadow.appendChild(container);
    }
  }

  try {
    customElements.define(name, AppSpinner);
  } catch (e) {
    console.warn(e);
  }
}
