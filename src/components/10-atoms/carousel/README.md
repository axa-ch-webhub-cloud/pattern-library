# Carousel

Every child is rendered as a slide. Only one child is visible at one time.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/carousel
```

```js
import 'src/components/10-atoms/carousel/lib/index';

<axa-carousel
  autorotatetime="1000"
  autorotatedisabled="true"
  keysenabled="true"
>
  <span>This is the first slide.</span>
  <span>This is the second slide.</span>
</axa-carousel>;
```

### React

Create a React-ified carousel with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXACarouselReact from '@axa-ch/carousel/lib/index.react';

const AXACarouselReact = createAXACarouselReact(createElement);

export default AXACarouselReact;
```

```js
<AXACarouselReact
  autorotatetime="1000"
  autorotatedisabled="false"
  keysenabled="true"
>
  <span>This is the first slide.</span>
  <span>This is the second slide.</span>
</AXACarouselReact>
```

### Pure HTML pages

Import the carousel-defining script and use a carousel like this:

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
    <axa-carousel
      autorotatetime="1000"
      autorotatedisabled="false"
      keysenabled="true"
    >
      <span>This is the first slide.</span>
      <span>This is the second slide.</span>
    </axa-carousel>
    <script src="node_modules/@axa-ch/carousel/dist/index.js"></script>
  </body>
</html>
```

## Properties

### autorotatedisabled

This boolean attribute specifies if the slides will automatically rotate.

### autorotatetime

This number specifies the milliseconds the slides will automatically rotate.

### keysenabled

This boolean attribute specifies if the keyboard navigation (left/right keys) should be enabled.

## Migration Notes

You don't have to pay attention to anything for upgrading to newer version.
