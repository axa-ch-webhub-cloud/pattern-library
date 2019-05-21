# Footer

TODO Description

## Usage

```bash
npm install @axa-ch/footer
```

```js
import '@axa-ch/footer';
...
<axa-footer></axa-footer>
```

### React

Create a React-ified footer with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAFooterReact from '@axa-ch/footer/lib/index.react';

const AXAFooterReact = createAXAFooterReact(createElement);

export default AXAFooterReact;
```

```js
<AXAFooterReact onClick={handler}>
</AXAFooterReact>
```

### Pure HTML pages

Import the footer-defining script and use a footer like this:

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
    <axa-footer></axa-footer>
    <script src="node_modules/@axa-ch/footer/dist/index.js"></script>
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
