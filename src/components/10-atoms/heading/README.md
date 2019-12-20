# Heading

[Changelog](./CHANGELOG.md)

TODO Description

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/heading
```

```js
import '@axa-ch/heading';
...
<axa-heading></axa-heading>
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
<AXAHeadingReact onClick={handler} />
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
    <axa-heading></axa-heading>
    <script src="node_modules/@axa-ch/heading/dist/index.js"></script>
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

### Migration Notes

You don't have to pay attention to anything for upgrading to newer version.
