# AXA Button Link

Button links provide link functionality, but in the style of a button. They may display text, icons, or both. Button links can be styled via several properties to change their look-and-feel.
If you need a semantically correct button, use [axa-button](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/10-atoms/button/README.md) instead.

## Usage

```bash
npm install @axa-ch/button-link
```

```js
import '@axa-ch/button-link';
...
<axa-button-link>I'm a button link</axa-button-link>
```

### React

Create a React-ified button link with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAButtonLinkReact from '@axa-ch/button-link/lib/index.react';

const AXAButtonLinkReact = createAXAButtonLinkReact(createElement);

export default AXAButtonLinkReact;
```

```js
<AXAButtonLinkReact href='#axa' motionOff onClick={handler}>
  I'm a Button Link
</AxaButtonReact>
```

### Pure HTML pages

Import the button-link-defining script and use a button link like this:

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
    <axa-button-link>I'm a button link</axa-button-link>
    <script src="node_modules/@axa-ch/button-link/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute                      | Details                        |
| ------------------------------ | ------------------------------ |
| `variant="secondary"`          | Button link in a ghost state   |
| `variant="red"`                | Button link red                |
| `variant="inverted"`           | Button link inverted           |
| `variant="inverted-green"`     | Button link inverted green     |
| `variant="inverted-dark-blue"` | Button link inverted dark blue |

### Href

The string-valued attribute `href` is used like in a native &lt;a&gt; hyperlink.

### External

The Boolean attribute `external` adds the `target="_blank"` functionality.

### Large

The Boolean attribute `large` specifies the size of a button link. Setting this attribute will change the height of a button link.

### motionOff

The Boolean attribute `motionoff` deactivates the hover animation.

### disabled

The Boolean attribute `disabled` disables the button natively.

### icon

Using the attribute `icon`'s string value as icon name, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/10-atoms/icon/README.md) README.

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
