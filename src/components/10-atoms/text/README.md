# Text

A convenience component to apply possible AXA text styles to a piece of text.

It accepts simple text strings as children or top-level HTML tags like `<p>` or `<span>`. Nested HTML tags are not supported.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/text
```

```js
import '@axa-ch/text';
...
<axa-text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet laoreet mauris sit amet congue. Pellentesque lacinia imperdiet turpis, sit amet finibus est porta sit amet.

Vestibulum maximus enim suscipit, bibendum nisi et, sodales turpis. Morbi eget eros sed tortor finibus pretium nec at lacus.
</axa-text>
```

### React

Create a React-ified text with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATextReact from '@axa-ch/text/lib/index.react';

const AXATextReact = createAXATextReact(createElement);

export default AXATextReact;
```

```js
<AXATextReact>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet
  laoreet mauris sit amet congue. Pellentesque lacinia imperdiet turpis, sit
  amet finibus est porta sit amet. Vestibulum maximus enim suscipit, bibendum
  nisi et, sodales turpis. Morbi eget eros sed tortor finibus pretium nec at
  lacus.
</AXATextReact>
```

### Pure HTML pages

Import the text-defining script and use a text like this:

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
    <axa-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      laoreet laoreet mauris sit amet congue. Pellentesque lacinia imperdiet
      turpis, sit amet finibus est porta sit amet. Vestibulum maximus enim
      suscipit, bibendum nisi et, sodales turpis. Morbi eget eros sed tortor
      finibus pretium nec at lacus.
    </axa-text>
    <script src="node_modules/@axa-ch/text/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute            | Details          |
| -------------------- | ---------------- |
| `variant="size-2"`   | Bigger Text Size |
| `variant="size-3"`   | Large Text Size  |
| `variant="bold"`     | Bold Text        |
| `variant="semibold"` | Semi-Bold Text   |
