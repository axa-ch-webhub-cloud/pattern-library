# ⚡⚡⚡ This is NOT Finished yet. Not ready to be used ⚡⚡⚡

# Title primary

[Changelog](./CHANGELOG.md)

Shows you an AXA conform title. A predefined size can be changed by setting a variant.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/title-primary
```

```js
import '@axa-ch/title-primary';
...
<axa-title-primary>A primary title</axa-title-primary>
```

### React

Create a React-ified title-primary with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATitlePrimaryReact from '@axa-ch/title-primary/lib/index.react';

const AXATitlePrimaryReact = createAXATitlePrimaryReact(createElement);

export default AXATitlePrimaryReact;
```

```js
<AXATitlePrimaryReact>A primary title</AXATitlePrimaryReact>
```

### Pure HTML pages

Import the title-primary-defining script and use a title-primary like this:

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
    <axa-title-primary>A primary title</axa-title-primary>
    <script src="node_modules/@axa-ch/title-primary/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute          | Details |
| ------------------ | ------- |
| `variant="size-2"` | Size 2  |
| `variant="size-3"` | Size 3  |
| `variant="size-4"` | Size 4  |
| `variant="size-5"` | Size 5  |
| `variant="size-6"` | Size 6  |
