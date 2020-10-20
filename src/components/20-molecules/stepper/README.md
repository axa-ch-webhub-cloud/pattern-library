# Stepper

TODO Description

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/stepper
```

```js
import '@axa-ch/stepper';
...
<axa-stepper></axa-stepper>
```

### React

Create a React-ified stepper with the createElement function from your React version anØd then use it like this:

```js
import { createElement } from 'react';
import createAXAStepperReact from '@axa-ch/stepper/lib/index.react';

const AXAStepperReact = createAXAStepperReact(createElement);

export default AXAStepperReact;
```

```js
<AXAStepperReact></AXAStepperReact>
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
    <axa-stepper></axa-stepper>
    <script src="node_modules/@axa-ch/stepper/dist/index.js"></script>
  </body>
</html>
```

## Properties
