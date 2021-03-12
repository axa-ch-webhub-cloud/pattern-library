# Modal

A modal component for custom child elements.
**Important:** `z-index` for the modal is 3000.

```bash
npm install @axa-ch/modal
```

```js
import '@axa-ch/modal';
...
<axa-modal></axa-modal>
```

### React

Create a React-ified modal with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAModalReact from '@axa-ch/modal/lib/index.react';

const AXAModalReact = createAXAModalReact(createElement);

export default AXAModalReact;
```

```js
<AXAModalReact onClick={handler}></AXAModalReact>
```

### Pure HTML pages

Import the modal-defining script and use a modal like this:

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
    <axa-modal></axa-modal>
    <script src="node_modules/@axa-ch/modal/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute                 | Details                    |
| ------------------------- | -------------------------- |
| `open=true`               | State of modal visibility  |
| `closeButtonText='Close'` | Text of modal close button |

### open

If `open` is set to `true`, then the modal will be displayed to the user.

### closeButtonText

Defined the text of the close button.
