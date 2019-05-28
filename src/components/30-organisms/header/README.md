# Header

TODO Description

## Usage

```bash
npm install @axa-ch/header
```

```js
import '@axa-ch/header';
...
<axa-header></axa-header>
```

### React

Create a React-ified header with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAHeaderReact from '@axa-ch/header/lib/index.react';

const AXAHeaderReact = createAXAHeaderReact(createElement);

export default AXAHeaderReact;
```

```js
<AXAHeaderReact onClick={handler}>
</AXAHeaderReact>
```

### Pure HTML pages

Import the header-defining script and use a header like this:

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
    <axa-header></axa-header>
    <script src="node_modules/@axa-ch/header/dist/index.js"></script>
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
