# Textarea

TODO Description

## Usage

```bash
npm install @axa-ch/textarea
```

```js
import '@axa-ch/textarea';
...
<axa-textarea></axa-textarea>
```

### React

Create a React-ified textarea with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATextareaReact from '@axa-ch/textarea/lib/index.react';

const AXATextareaReact = createAXATextareaReact(createElement);

export default AXATextareaReact;
```

```js
<AXATextareaReact onClick={handler}>
</AXATextareaReact>
```

### Pure HTML pages

Import the textarea-defining script and use a textarea like this:

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
    <axa-textarea></axa-textarea>
    <script src="node_modules/@axa-ch/textarea/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute             | Details                 |
| --------------------- | ----------------------- |
| `variant="foo"`       | Desc of Variant         |

### Bar

The attribute `bar` specifies...

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
