# Heading

The title component provides a way to conveniently use headings and titles, that are in line with the style guide. Keep in mind that you need to import the fonts separately.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/heading
```

```js
import '@axa-ch/heading';
...
<axa-heading rank="1">H1 Heading</axa-heading>
```

### React

Create a React-ified heading with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAHeadingReact from '@axa-ch/heading/lib/index.react';

const AXAHeadingReact = createAXAHeadingReact(createElement);

export default AXAHeadingReact;
```

```js
<AXAHeadingReact rank="1">H1 Heading</AXAHeadingReact>
```

### Pure HTML pages

Import the heading-defining script and use a heading like this:

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
    <axa-heading rank="1">H1 Heading</axa-heading>
    <script src="node_modules/@axa-ch/heading/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute             | Details                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `variant="secondary"` | Secondary variant will use publico as font. Default: "primary"                                                                 |
| `rank="1"`            | Rank holds a number from one to six, which represents the underlying html heading tag. `rank="1"` will lead to a `h1` element. |
