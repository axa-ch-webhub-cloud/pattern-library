# Progress Bar

TODO Description

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/progress-bar
```

```js
import '@axa-ch/progress-bar';
...
<axa-progress-bar></axa-progress-bar>
```

### React

Create a React-ified progress-bar with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAProgressBarReact from '@axa-ch/progress-bar/lib/index.react';

const AXAProgressBarReact = createAXAProgressBarReact(createElement);

export default AXAProgressBarReact;
```

```js
<AXAProgressBarReact onClick={handler}>
</AXAProgressBarReact>
```

### Pure HTML pages

Import the progress-bar-defining script and use a progress-bar like this:

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
    <axa-progress-bar></axa-progress-bar>
    <script src="node_modules/@axa-ch/progress-bar/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute             | Details                 |
| --------------------- | ----------------------- |
| `variant="foo"`       | Desc of Variant         |

### Bar

The attribute `bar` specifies...

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
