# List

List in various variants. Standardizes the use of `ol` and `ul` tags.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/list
```

```js
import '@axa-ch/list';
...
<axa-list></axa-list>
```

### React

Create a React-ified list with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAListReact from '@axa-ch/list/lib/index.react';

const AXAListReact = createAXAListReact(createElement);

export default AXAListReact;
```

```js
<AXAListReact></AXAListReact>
```

### Pure HTML pages

Import the list-defining script and use a list like this:

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
    <axa-list></axa-list>
    <script src="node_modules/@axa-ch/list/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute           | Details                                                   |
| ------------------- | --------------------------------------------------------- |
| `variant="ordered"` | Variants (default: ul)                                    |
| `icon=""`           | If `variant` is set to `icon`, add the SVG here as string |

### variant

This defines, which tag is being used internally (`ol` and `ul`) and also gives certain possibilies like adding icons or go completely without styling.

default: Unordered list, with bullet-points
`ordered`: Ordered list, with numbers
`unstyles`: Unordered list, without bullet-points
`icon`: Unordered list, with icons as replacement for bullet-points

# icon

Add an SVG as string, if you need an icon instead of a bullet point or number preceding each list item.
