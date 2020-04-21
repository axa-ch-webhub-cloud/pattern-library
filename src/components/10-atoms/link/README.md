# Link

The link component meant for hyper and simple links. Links can be styled via several properties to change their look-and-feel.

All links support the colors "red" and "white" if declared within the `variant` attribute. See the explanation below.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/link
```

```js
import '@axa-ch/link';
...
// Hyperlink
<axa-link href="https://axa.ch/en/private-customers.html">I am a link</axa-link>

// Simple Link
<axa-link variant="" href="https://axa.ch/en/private-customers.html">I am a link</axa-link>
```

### React

Create a React-ified link with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXALinkReact from '@axa-ch/link/lib/index.react';

const AXALinkReact = createAXALinkReact(createElement);

export default AXALinkReact;
```

```js
// Hyperlink
<AXALinkReact
  href="https://axa.ch/en/private-customers.html"
>
  I am a Link
</AXALinkReact>

// Simple Link
<AXALinkReact
  variant="arrowright"
  href="https://axa.ch/en/private-customers.html"
>
  I am a Link
</AXALinkReact>
```

### Pure HTML pages

Import the link-defining script and use a link like this:

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
    <!-- Hyperlink -->
    <axa-link href="https://axa.ch/en/private-customers.html"
      >I am a link</axa-link
    >

    <!-- Simple Link -->
    <axa-link
      variant="arrowright"
      href="https://axa.ch/en/private-customers.html"
      >I am a link</axa-link
    >
    <script src="node_modules/@axa-ch/link/dist/index.js"></script>
  </body>
</html>
```

## Properties

### variant (Simple Links)

#### Default color

| Attribute                       | Details                           |
| ------------------------------- | --------------------------------- |
| `variant="icon"`                | Link with an icon displayed       |
| `variant="arrowright"`          | Link with arrow icon to the right |
| `variant="arrowleft"`           | Link with arrow icon to the left  |
| `variant="arrowleft-animated"`  | Link with animated arrow icon     |
| `variant="arrowright-animated"` | Link with animated arrow icon     |

#### Red color

| Attribute                           | Details                           |
| ----------------------------------- | --------------------------------- |
| `variant="icon-red"`                | Link with an icon displayed       |
| `variant="arrowright-red"`          | Link with arrow icon to the right |
| `variant="arrowleft-red"`           | Link with arrow icon to the left  |
| `variant="arrowleft-animated-red"`  | Link with animated arrow icon     |
| `variant="arrowright-animated-red"` | Link with animated arrow icon     |

#### white color

| Attribute                             | Details                                |
| ------------------------------------- | -------------------------------------- |
| `variant="white"`                     | Link white                             |
| `variant="hyperlink-white"`           | Link white in lowercase                |
| `variant="hyperlink-white-underline"` | Link white in lowercase and underlined |
| `variant="icon-white"`                | Link with an icon displayed            |
| `variant="arrowright-white"`          | Link with arrow icon to the right      |
| `variant="arrowleft-white"`           | Link with arrow icon to the left       |
| `variant="arrowleft-animated-white"`  | Link with animated arrow icon          |
| `variant="arrowright-animated-white"` | Link with animated arrow icon          |

### href

The string-valued attribute `href` is used like in a native &lt;a&gt; hyperlink.

### external

The Boolean attribute `external` adds the `target="_blank"` functionality.

### icon

If the variant is `icon`, using the attribute `icon`'s string value as icon name, an icon will be rendered. The attributes `variant=icon` and `icon=xyz` both need to exist in order for an icon to be displayed. To see the full list of possible icons and custom icon usage, see the [axa-icon](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/icon/README.md) readme. The dimensions of the icons depends on `icon` component. Because of this its possible that some icons are bigger than the `link` text.

### onClick

On a React-ified component this function-valued attribute can be used as a callback function. Using it will prevent default link navigation.
