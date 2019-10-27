# A double line spinner

![Spinner demo](demo/demo.gif)

Attributes:
* **size** the size of the spinner. Default is 50px;
* **speed** speed of rotation. Default is 1;
* **stroke-width** the width of the outer circle stroke. Default is 2px;
* **outer-color** the color of the outer circle. Default is #3be8b0;
* **inner-color** the color of the inner circle. Default is #1aafd0;

### Examples

#### With ES modules
```html
 <!doctype html>
 <html>
 <head>
   <title>Spinner example</title>
 </head>
 <script type="module">
     import {registerSpinnerComponent} from "./node_modules/@ayunoshev/spinner/dist/index.js";
 
     // Default name is "app-spinner"
     registerSpinnerComponent();
     // or provide your own name
     registerSpinnerComponent('my-custom-name-spinner');
 </script>
 <body style="display: grid; grid-template-rows: repeat(10, auto); grid-gap: 10px">
 <app-spinner></app-spinner>
 <my-custom-name-spinner></my-custom-name-spinner>
 <app-spinner size="100px"></app-spinner>
 <app-spinner speed="3"></app-spinner>
 <app-spinner stroke-width="10px"></app-spinner>
 <app-spinner outer-color="red" inner-color="black"></app-spinner>
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
