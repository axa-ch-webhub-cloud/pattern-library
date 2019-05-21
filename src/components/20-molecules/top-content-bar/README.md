# Top content bar

TODO Description

## Usage

```bash
npm install @axa-ch/top-content-bar
```

```js
import '@axa-ch/top-content-bar';
...
<axa-top-content-bar></axa-top-content-bar>
```

### React

Create a React-ified top-content-bar with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATopContentBarReact from '@axa-ch/top-content-bar/lib/index.react';

const AXATopContentBarReact = createAXATopContentBarReact(createElement);

export default AXATopContentBarReact;
```

```js
<AXATopContentBarReact onClick={handler}>
</AXATopContentBarReact>
```

### Pure HTML pages

Import the top-content-bar-defining script and use a top-content-bar like this:

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
    <axa-top-content-bar></axa-top-content-bar>
    <script src="node_modules/@axa-ch/top-content-bar/dist/index.js"></script>
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
