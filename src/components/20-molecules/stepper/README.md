# Stepper

&lt;axa-stepper&gt; conveys progress through numbered steps.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/stepper
```

```js
import '@axa-ch/stepper';
...
<axa-stepper steps='["Step 1", "Step 2", "Step 3"]'></axa-stepper>
```

### React

Create a React-ified stepper with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAStepperReact from '@axa-ch/stepper/lib/index.react';

const AXAStepperReact = createAXAStepperReact(createElement);

export default AXAStepperReact;
```

```js
<AXAStepperReact steps={['Step 1', 'Step 2', 'Step 3']}></AXAStepperReact>
```

### Pure HTML pages

Import the stepper-defining script and use a stepper like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your awesome title</title>
  </head>
  <body>
    <axa-stepper steps='["Step 1", "Step 2", "Step 3"]'></axa-stepper>
    <script src="node_modules/@axa-ch/stepper/dist/index.js"></script>
  </body>
</html>
```

## Properties

### steps

The Array attribute `steps` specifies the descriptions of the steps. The length of this array equals the number of steps.

### stepActive

The Number attribute `stepActive` defines the currently active step.

### stepProgress

The Number attribute `stepProgress` defines the progress of the currently active step.
