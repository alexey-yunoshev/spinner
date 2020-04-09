# A double line spinner

![Spinner demo](demo/demo.gif)

Style with CSS properties:
* **--size** the size of the spinner. Default is 50px;
* **--speed** speed of rotation. Default is 1;
* **--stroke-width** the width of the outer circle stroke. Default is 2px;
* **--outer-spinner-color** the color of the outer circle. Default is #3be8b0;
* **--inner-spinner-color** the color of the inner circle. Default is #1aafd0;

### Install
```
npm install @ayunoshev/spinner
```

### Examples

#### With ES modules
```html
<!doctype html>
<html>
<head>
  <title>Spinner example</title>
  <script type="module">
      import {registerSpinnerComponent} from "./node_modules/@ayunoshev/spinner/dist/index.js";

      registerSpinnerComponent();
      registerSpinnerComponent('my-custom-name-spinner');
  </script>
  <style>
    .another-size {
      --size: 30px;
    }
    .another-speed {
      --speed: 2;
    }
    .another-stroke-width {
      --stroke-width: 5px;
    }
    .another-color {
      --inner-spinner-color: #EC28FF;
      --outer-spinner-color: #FF2C6B;
    }
  </style>
</head>
<body style="display: grid; grid-template-columns: repeat(10, auto); grid-gap: 10px; background-color: #0B1720">
<app-spinner></app-spinner>
<my-custom-name-spinner></my-custom-name-spinner>
<app-spinner class="another-size"></app-spinner>
<app-spinner class="another-speed"></app-spinner>
<app-spinner class="another-stroke-width"></app-spinner>
<app-spinner class="another-color"></app-spinner>
</body>
</html>

```

#### With Angular
In `main.ts`: 
```typescript
import {registerSpinnerComponent} from '@ayunoshev/spinner';

registerSpinnerComponent();
```

And then in the module in which you're going to use the component:
```typescript
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class SomeModule {
}
```
