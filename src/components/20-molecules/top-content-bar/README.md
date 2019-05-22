# Top content bar

TODO Description

## Usage

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
If no attribute `href` is set, it will render a `axa-button` and only onClick callback will work. If omitted, no button will be shown.

### href

The attribute `href` specifies the link that should be opened by pressing on the button with text defined in `ctatext`

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
