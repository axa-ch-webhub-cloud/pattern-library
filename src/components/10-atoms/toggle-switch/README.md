# AXA Toggle Switch

Toggle Switches provide a UI element for toggling between two visual states, on and off.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/toggle-switch
```

```js
import '@axa-ch/toggle-switch';
...
<axa-toggle-switch></axa-toggle-switch>
```

### React

Create a React-ified toggle-switch with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAToggleSwitchReact from '@axa-ch/toggle-switch/lib/index.react';

const AXAToggleSwitchReact = createAXAToggleSwitchReact(createElement);

export default AXAToggleSwitchReact;
```

```js
<AXAToggleSwitchReact onChange={handler}></AXAToggleSwitchReact>
```

### Pure HTML pages

Import the toggle-switch-defining script and use a toggle-switch like this:

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
    <axa-toggle-switch></axa-toggle-switch>
    <script src="node_modules/@axa-ch/toggle-switch/dist/index.js"></script>
  </body>
</html>
```

## Properties

### active

The Boolean attribute `active` sets the on/off visual state.

### disabled

The Boolean attribute `disabled` disables the toggle switch natively.

### onChange

The function-valued attribute `onChange` can be used as a callback prop for React and other frameworks.
