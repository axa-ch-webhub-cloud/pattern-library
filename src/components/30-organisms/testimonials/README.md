# Testimonials

Shows several information in a carousel or inline and sets title and subtitle over it.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/testimonials
```

```js
import '@axa-ch/testimonials';

<axa-testimonials
  autorotatetime="1000"
  autorotatedisabled="false"
  keysenabled="true"
  showallinline="false"
  title="The main title"
  subtitle="This is the subtitle"
>
  <span>first slide</span>
  <span>second slide</span>
</axa-testimonials>;
```

### React

Create a React-ified testimonials with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATestimonialsReact from '@axa-ch/testimonials/lib/index.react';

const AXATestimonialsReact = createAXATestimonialsReact(createElement);

export default AXATestimonialsReact;
```

```js
<AXATestimonialsReact
  autorotatetime="1000"
  autorotatedisabled="false"
  keysenabled="true"
  showallinline="false"
  title="The main title"
  subtitle="This is the subtitle"
>
  <span>first slide</span>
  <span>second slide</span>
</AXATestimonialsReact>
```

### Pure HTML pages

Import the testimonials-defining script and use a testimonials like this:

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
    <axa-testimonials
      autorotatetime="1000"
      autorotatedisabled="false"
      keysenabled="true"
      showallinline="false"
      title="The main title"
      subtitle="This is the subtitle"
    >
      <span>first slide</span>
      <div>
        <span>second slide</span>
        <span slot="author">Andrew Jackson, Advocate</span>
      </div>
    </axa-testimonials>
    <script src="node_modules/@axa-ch/testimonials/dist/index.js"></script>
  </body>
</html>
```

## Properties

### title

The main title at the top.

### subtitle

The subtitle.

### showallinline

Set it to `true` if you dont want to see the carousel. All the childs are shown below the other.

### autorotatedisabled

This boolean attribute specifies if the slides will automatically rotate.

### autorotatetime

This number specifies the milliseconds the slides will automatically rotate.

### keysenabled

This boolean attribute specifies if the keyboard navigation (left/right keys) should be enabled.

## Child Elements
### Maximum
Do not set more than ~100 child elements. Because of height calculation the performance will be slow down.

### slot="author"
You can set this attribute to a span. The Text will be uppercase and above of another nested slide elements.

## Migration Notes

You don't have to pay attention to anything for upgrading to newer version.
