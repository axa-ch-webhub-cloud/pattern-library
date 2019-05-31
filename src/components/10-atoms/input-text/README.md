# AXA Input Text

The input text component is a wrapper to the HTML input element with custom styling and additional functionality.
It accepts most of the same properties as the HTML input, but the accept only `type=text or type=email`.

## Usage

```bash
npm install @axa-ch/button
```

```js
import '@axa-ch/input-text';
...
<axa-input-text></axa-input-text>
```

### React

Create a React-ified input-text with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAInputTextReact from '@axa-ch/input-text/lib/index.react';

const AXAInputTextReact = createAXAInputTextReact(createElement);

export default AXAInputTextReact;
```

```js
<AXAInputTextReact onChange={handeChange} />
```

### Pure HTML pages

Import the button-defining script and use a button like this:

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
    <axa-input-text></axa-input-text>
    <script src="node_modules/@axa-ch/input-text/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Type

| Attribute      | Details |
| -------------- | ------- |
| `type="text"`  | Default |
| `type="email"` | Email   |

### Large

The Boolean attribute `large` specifies the size of a button. Setting this attribute will change the height of a button.

### motionOff

The Boolean attribute `motionoff` deactivates hover animation.

### disabled

The Boolean attribute `disabled` disables the button natively.

### icon

Based on the string-valued attribute `icon`, interpreted as icon name, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/icon/README.md) README.

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
