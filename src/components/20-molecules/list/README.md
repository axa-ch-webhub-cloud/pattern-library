# List

TODO Description

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/list
```

```js
import '@axa-ch/list';
...
<axa-list></axa-list>
```

### React

Create a React-ified list with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAListReact from '@axa-ch/list/lib/index.react';

const AXAListReact = createAXAListReact(createElement);

export default AXAListReact;
```

```js
<AXAListReact onClick={handler}>
</AXAListReact>
```

### Pure HTML pages

Import the list-defining script and use a list like this:

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
    <axa-list></axa-list>
    <script src="node_modules/@axa-ch/list/dist/index.js"></script>
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
