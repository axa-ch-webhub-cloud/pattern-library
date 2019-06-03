# Title primary

TODO Description

## Usage

```bash
npm install @axa-ch/title-primary
```

```js
import '@axa-ch/title-primary';
...
<axa-title-primary></axa-title-primary>
```

### React

Create a React-ified title-primary with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATitlePrimaryReact from '@axa-ch/title-primary/lib/index.react';

const AXATitlePrimaryReact = createAXATitlePrimaryReact(createElement);

export default AXATitlePrimaryReact;
```

```js
<AXATitlePrimaryReact onClick={handler} />
```

### Pure HTML pages

Import the title-primary-defining script and use a title-primary like this:

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
    <axa-title-primary></axa-title-primary>
    <script src="node_modules/@axa-ch/title-primary/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute       | Details         |
| --------------- | --------------- |
| `variant="foo"` | Desc of Variant |

### Bar

The attribute `bar` specifies...

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
