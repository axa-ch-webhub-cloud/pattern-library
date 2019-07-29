# Popup content

TODO Description

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/popup-content
```

```js
import '@axa-ch/popup-content';
...
<axa-popup-content></axa-popup-content>
```

### React

Create a React-ified popup-content with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAPopupContentReact from '@axa-ch/popup-content/lib/index.react';

const AXAPopupContentReact = createAXAPopupContentReact(createElement);

export default AXAPopupContentReact;
```

```js
<AXAPopupContentReact onClick={handler}>
</AXAPopupContentReact>
```

### Pure HTML pages

Import the popup-content-defining script and use a popup-content like this:

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
    <axa-popup-content></axa-popup-content>
    <script src="node_modules/@axa-ch/popup-content/dist/index.js"></script>
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

### Migration Notes

You don't have to pay attention to anything for upgrading to newer version.
