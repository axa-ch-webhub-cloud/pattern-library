# Cookie disclaimer

TODO Description

## Usage

```bash
npm install @axa-ch/cookie-disclaimer
```

```js
import '@axa-ch/cookie-disclaimer';
...
<axa-cookie-disclaimer></axa-cookie-disclaimer>
```

### React

Create a React-ified cookie-disclaimer with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXACookieDisclaimerReact from '@axa-ch/cookie-disclaimer/lib/index.react';

const AXACookieDisclaimerReact = createAXACookieDisclaimerReact(createElement);

export default AXACookieDisclaimerReact;
```

```js
<AXACookieDisclaimerReact onClick={handler}>
</AXACookieDisclaimerReact>
```

### Pure HTML pages

Import the cookie-disclaimer-defining script and use a cookie-disclaimer like this:

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
    <axa-cookie-disclaimer></axa-cookie-disclaimer>
    <script src="node_modules/@axa-ch/cookie-disclaimer/dist/index.js"></script>
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
