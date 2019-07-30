# AXA Popup Button

TODO Description

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/popup-button
```

```js
import '@axa-ch/popup';
...
<axa-popup-button></axa-popup-button>
```

### React

Create a React-ified popup-button with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAPopupButtonReact from '@axa-ch/popup-button/lib/index.react';

const AXAPopupButtonReact = createAXAPopupButtonReact(createElement);

export default AXAPopupButtonReact;
```

```js
<AXAPopupButtonReact onClick={handler}>
</AXAPopupButtonReact>
```

### Pure HTML pages

Import the popup-button-defining script and use a popup-button like this:

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
    <axa-popup-button></axa-popup-button>
    <script src="node_modules/@axa-ch/popup-button/dist/index.js"></script>
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
