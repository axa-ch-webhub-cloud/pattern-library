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
  title="The main title"
  subtitle="This is the subtitle"
  keysenabled=""
>
  <span>first slide</span>
  <div>
    <span>second slide</span>
    <span class="author">Andrew Jackson, Advocate</span>
  </div>
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
  title="The main title"
  subtitle="This is the subtitle"
  keysenabled
>
  <span>first slide</span>
  <div>
    <span>second slide</span>
    <span className="author">Andrew Jackson, Advocate</span>
  </div>
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
      title="The main title"
      subtitle="This is the subtitle"
      keysenabled=""
    >
      <span>first slide</span>
      <div>
        <span>second slide</span>
        <span class="author">Andrew Jackson, Advocate</span>
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

This boolean attribute specifies the visibility of the carousel. Set this attribute if you want all the childs shown above each other.

### autorotatedisabled

This boolean attribute specifies if the slides will not automatically rotate.

### autorotatetime

This number specifies the milliseconds the slides will automatically rotate.

### keysenabled

This boolean attribute specifies if the keyboard navigation (left/right keys) should be enabled.

## Child Elements

### Maximum

Do not set more than ~100 child elements. Because of height calculation the performance will be slow down.

### class="author" (React: className="author")

You can set this class to a span. The Text will be uppercase and above of another nested slide elements.

## Migration Notes

You don't have to pay attention to anything for upgrading to newer version.
