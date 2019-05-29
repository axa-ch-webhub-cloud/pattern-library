# Title section

This gives you a fully styled section title according AXA guidelines

## Usage

```bash
npm install @axa-ch/title-section
```

```js
import '@axa-ch/title-section';
...
<axa-title-section>This is a title for a section</axa-title-section>
```

### React

Create a React-ified title-section with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATitleSectionReact from '@axa-ch/title-section/lib/index.react';

const AXATitleSectionReact = createAXATitleSectionReact(createElement);

export default AXATitleSectionReact;
```

```js
<AXATitleSectionReact>A section title</AXATitleSectionReact>
```

### Pure HTML pages

Import the title-section-defining script and use a title-section like this:

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
    <axa-title-section></axa-title-section>
    <script src="node_modules/@axa-ch/title-section/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute         | Details                                                 |
| ----------------- | ------------------------------------------------------- |
| `variant="white"` | The title in white, to be used on different backgrounds |
