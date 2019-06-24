# Commercial hero cover

TODO Description

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/commercial-hero-cover
```

```js
import '@axa-ch/commercial-hero-cover';
...
<axa-commercial-hero-cover></axa-commercial-hero-cover>
```

### React

Create a React-ified commercial-hero-cover with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXACommercialHeroCoverReact from '@axa-ch/commercial-hero-cover/lib/index.react';

const AXACommercialHeroCoverReact = createAXACommercialHeroCoverReact(
  createElement
);

export default AXACommercialHeroCoverReact;
```

```js
<AXACommercialHeroCoverReact onClick={handler} />
```

### Pure HTML pages

Import the commercial-hero-cover-defining script and use a commercial-hero-cover like this:

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
    <axa-commercial-hero-cover></axa-commercial-hero-cover>
    <script src="node_modules/@axa-ch/commercial-hero-cover/dist/index.js"></script>
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
