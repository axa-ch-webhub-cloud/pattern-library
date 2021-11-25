# Input Phone

Input field to enter phone numbers from around the world in a standardized way.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/input-phone
```

```js
import '@axa-ch/input-phone';
...
<axa-input-phone></axa-input-phone>
```

### React

Create a React-ified input-phone with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAInputPhoneReact from '@axa-ch/input-phone/lib/index.react';

const AXAInputPhoneReact = createAXAInputPhoneReact(createElement);

export default AXAInputPhoneReact;
```

```js
<AXAInputPhoneReact
  onClick={() => alert('you clicked me')}
></AXAInputPhoneReact>
```

### Pure HTML pages

Import the input-phone-defining script and use a input-phone like this:

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
    <axa-input-phone></axa-input-phone>
    <script src="node_modules/@axa-ch/input-phone/dist/index.js"></script>
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
