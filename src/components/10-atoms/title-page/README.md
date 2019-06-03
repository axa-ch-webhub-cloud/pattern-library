# Title Page

This gives you a fully styled page title according to AXA guidelines.

**Attention:**

This title is rendered within an H1 Element, meaning you must wrap this component within a custom `<page>`, `<article>` or `<axa-container>` to be semantically correct.

## Usage

```bash
npm install @axa-ch/title-page
```

```js
import '@axa-ch/title-page';
...
<axa-title-page>This is a title for a Page</axa-title-page>
```

### React

Create a React-ified title-page with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATitlePageReact from '@axa-ch/title-page/lib/index.react';

const AXATitlePageReact = createAXATitlePageReact(createElement);

export default AXATitlePageReact;
```

```js
<AXATitlePageReact>A Page title</AXATitlePageReact>
```

### Pure HTML pages

Import the title-page-defining script and use a title-page like this:

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
    <axa-title-page>This is a title for a Page</axa-title-page>
    <script src="node_modules/@axa-ch/title-page/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute         | Details                                                 |
| ----------------- | ------------------------------------------------------- |
| `variant="white"` | The title in white, to be used on different backgrounds |
