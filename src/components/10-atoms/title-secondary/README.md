# ⚡⚡⚡ This is NOT Finished yet. Not ready to be used ⚡⚡⚡

# Title secondary

Shows you an AXA conform title. A predefined size can be changed by setting a variant.

## Usage

```bash
npm install @axa-ch/title-secondary
```

```js
import '@axa-ch/title-secondary';
...
<axa-title-secondary>A secondary title</axa-title-secondary>
```

### React

Create a React-ified title-secondary with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATitleSecondaryReact from '@axa-ch/title-secondary/lib/index.react';

const AXATitleSecondaryReact = createAXATitleSecondaryReact(createElement);

export default AXATitleSecondaryReact;
```

```js
<AXATitleSecondaryReact>A secondary title<AXATitleSecondaryReact>
```

### Pure HTML pages

Import the title-secondary-defining script and use a title-secondary like this:

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
    <axa-title-secondary>A secondary title</axa-title-secondary>
    <script src="node_modules/@axa-ch/title-secondary/dist/index.js"></script>
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
