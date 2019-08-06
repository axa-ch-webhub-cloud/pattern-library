# Commercial Hero Banner

The commercial hero banner component to really set something into the focus of the user.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/commercial-hero-banner
```

```js
import '@axa-ch/commercial-hero-banner';
...
<axa-commercial-hero-banner></axa-commercial-hero-banner>
```

### React

Create a React-ified commercial-hero-banner with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXACommercialHeroBannerReact from '@axa-ch/commercial-hero-banner/lib/index.react';

const AXACommercialHeroBannerReact = createAXACommercialHeroBannerReact(
  createElement
);

export default AXACommercialHeroBannerReact;
```

```js
<AXACommercialHeroBannerReact onClick={handler} />
```

### Pure HTML pages

Import the commercial-hero-banner-defining script and use a commercial-hero-banner like this:

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
    <axa-commercial-hero-banner></axa-commercial-hero-banner>
    <script src="node_modules/@axa-ch/commercial-hero-banner/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute       | Details         |
| --------------- | --------------- |
| `variant="foo"` | Desc of Variant |

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.

### Migration Notes

You don't have to pay attention to anything for upgrading to newer version.
