# AXA Button Link

Button Links provide link functionality, but in the style of the button. They may display text, icons, or both. Button links can be styled with several attributes to look a specific way.
If you need the semantic button use [axa-button](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/10-atoms/button/README.md).

## Usage

`npm install @axa-ch/button-link`

```
import '@axa-ch/button-link';

<axa-button-link>I'm a button link</axa-button-link>
```

### React

Create a react button link with the createElement function from your react version and then use it.

```
import { createElement } from 'react';
import createAXAButtonLinkReact from '@axa-ch/button-link/lib/index.react';

const AXAButtonLinkReact = createAXAButtonLinkReact(createElement);

export default AXAButtonLinkReact;
```

```
<AXAButtonLinkReact href='#axa' motionOff onClick={handler}>
  I'm a Button Link
</AxaButtonReact>
```

### HTML Pages only, import the script like so:

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

##Properties

### Variant

| Attribute                      | Details                        |
| ------------------------------ | ------------------------------ |
| `variant="secondary"`          | Button link in a ghost state   |
| `variant="red"`                | Button link red                |
| `variant="inverted"`           | Button link inverted           |
| `variant="inverted-green"`     | Button link inverted green     |
| `variant="inverted-dark-blue"` | Button link inverted dark blue |

### Href

The string attribute `href` is used like the standard HTML.

### External

The boolean attribute `external` adds the `target="_blank"` functionality.

### Large

The boolean attribute `large` specifies the size of the button link. Setting this attribute will change the height of a button link.

### motionOff

This boolean attribute `motionoff` deactivates the hover animation.

### disabled

This boolean attribute `disabled` disables the button.

### icon

Based on the attribute `icon` value, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/10-atoms/icon/README.md) readme.

### onClick

The function attribute `onClick` useable for React and other frameworks who can use callback props.
