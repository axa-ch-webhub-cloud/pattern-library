# AXA Button

Buttons provide a clickable element, which can be used in forms, or anywhere that needs simple, standard button functionality. They may display text, icons, or both. Buttons can be styled with several attributes to look a specific way.
If you need a link with button styling use the [axa-button-link](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/10-atoms/button-link/README.md) component.

## Usage

`npm install @axa-ch/button`

```
import '@axa-ch/button';

<axa-button>I'm a button</axa-button>
```

### React

Create a react button with the createElement function from your react version and then use it.

```
import { createElement } from 'react';
import createAXAButtonReact from '@axa-ch/button/lib/index.react';

const AXAButtonReact = createAXAButtonReact(createElement);

export default AXAButtonReact;
```

```
<AXAButtonReact motionOff onClick={handler}>
  I'm a Button
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
    <axa-button>I'm a button</axa-button>
    <script src="node_modules/@axa-ch/button/dist/index.js"></script>
  </body>
</html>
```

##Properties

### Variant

| Attribute                      | Details                   |
| ------------------------------ | ------------------------- |
| `variant="secondary"`          | Button in a ghost state   |
| `variant="red"`                | Button red                |
| `variant="inverted"`           | Button inverted           |
| `variant="inverted-green"`     | Button inverted green     |
| `variant="inverted-dark-blue"` | Button inverted dark blue |

### Type

| Attribute       | Details                    |
| --------------- | -------------------------- |
| `type="button"` | Button default state       |
| `type="submit"` | Button submit for the form |
| `type="reset"`  | Button reset for the form  |

### Large

The boolean attribute `large` specifies the size of the button. Setting this attribute will change the height of the button.

### motionOff

The boolean attribute `motionoff` deactivates the hover animation.

### disabled

The boolean attribute `disabled` disables the button. 

### icon

Based on the attribute `icon` value, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/10-atoms/icon/README.md) readme.

### onClick

The function attribute `onClick` useable for React and other frameworks who can use callback props.
