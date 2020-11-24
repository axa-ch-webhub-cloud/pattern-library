# Top content bar

Used as top of the page Warning or info box that can show text and have a call to action button.

There is also the possibility to add children by yourself. Be sure to set the margins yourself in this case.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/top-content-bar
```

```js
import '@axa-ch/top-content-bar';
...
<axa-top-content-bar ctatext="Click Me">Some Text</axa-top-content-bar>
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
<AXATopContentBarReact onClick={handler} ctatext="Click Me" />
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
    <axa-top-content-bar ctatext="Click Me" href="http://www.axa.ch">
      Some Text
    </axa-top-content-bar>
    <script src="node_modules/@axa-ch/top-content-bar/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute           | Details                                        |
| ------------------- | ---------------------------------------------- |
| `variant="warning"` | Show a red top content bar as a warning banner |

### ctatext

The attribute `ctatext` specifies the text displayed on the button.
If no attribute `href` is set, it will render a `axa-button` and the `onClick` callback will trigger upon click. If `ctatext` is omitted, no button will be shown.

### href

The attribute `href` specifies the link, that should be opened by pressing on the button with the text defined in `ctatext`. This is mainly for semantic reasons, you still need to route the user yourself, by listening to the `onClick` callback. Just providing the `href` attribute will not do anything by itself.

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
