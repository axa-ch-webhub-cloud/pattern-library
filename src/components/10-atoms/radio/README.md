# Radio

TODO Description

## Usage

```bash
npm install @axa-ch/radio
```

```js
import '@axa-ch/radio';
...
<axa-radio></axa-radio>
```

### React

Create a React-ified radio with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXARadioReact from '@axa-ch/radio/lib/index.react';

const AXARadioReact = createAXARadioReact(createElement);

export default AXARadioReact;
```

```js
<AXARadioReact onClick={handler}>
</AXARadioReact>
```

### Pure HTML pages

Import the radio-defining script and use a radio like this:

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
    <axa-radio></axa-radio>
    <script src="node_modules/@axa-ch/radio/dist/index.js"></script>
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
