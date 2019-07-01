# Tooltip

TODO Description

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/tooltip
```

```js
import '@axa-ch/tooltip';
...
<axa-tooltip></axa-tooltip>
```

### React

Create a React-ified tooltip with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATooltipReact from '@axa-ch/tooltip/lib/index.react';

const AXATooltipReact = createAXATooltipReact(createElement);

export default AXATooltipReact;
```

```js
<AXATooltipReact onClick={handler}>
</AXATooltipReact>
```

### Pure HTML pages

Import the tooltip-defining script and use a tooltip like this:

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
    <axa-tooltip></axa-tooltip>
    <script src="node_modules/@axa-ch/tooltip/dist/index.js"></script>
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
