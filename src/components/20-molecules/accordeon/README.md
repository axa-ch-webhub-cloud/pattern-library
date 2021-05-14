# Accordeon

TODO Description

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/accordeon
```

```js
import '@axa-ch/accordeon';
...
<axa-accordeon></axa-accordeon>
```

### React

Create a React-ified accordeon with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAAccordeonReact from '@axa-ch/accordeon/lib/index.react';

const AXAAccordeonReact = createAXAAccordeonReact(createElement);

export default AXAAccordeonReact;
```

```js
<AXAAccordeonReact onClick={handler}>
</AXAAccordeonReact>
```

### Pure HTML pages

Import the accordeon-defining script and use a accordeon like this:

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
    <axa-accordeon></axa-accordeon>
    <script src="node_modules/@axa-ch/accordeon/dist/index.js"></script>
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
