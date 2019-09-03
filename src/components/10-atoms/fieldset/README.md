# Fieldset

The &lt;axa-fieldset&gt; component is used to group several controls within a web form. Compared to its native HTML counterpart, its function is mainly restricted to styling: the element ensures that the grouped controls
obey correct spacing as per the style guide.

By default, the element children's layout direction is vertical.

Vertical direction is typically used to used to ensure correct layout for a group of &lt;axa-checkbox&gt; or non-button
&lt;axa-radio&gt; elements.

_Note: This component only styles its immediate children! For best results, avoid extra &lt;div&gt; wrappers or similar around children components._

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/fieldset
```

```js
import '@axa-ch/fieldset';
...
<axa-fieldset>...children</axa-fieldset>
```

### React

Create a React-ified fieldset with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAFieldset from '@axa-ch/fieldset/lib/index.react';

const AXAFieldset = createAXAFieldset(createElement);

export default AXAFieldset;
```

```js
<AXAFieldset horizontal>...children</AXAFieldset>
```

### Pure HTML pages

Import the fieldset-defining script and use a fieldset like this:

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
    <axa-fieldset horizontal>...</axa-fieldset>
    <script src="node_modules/@axa-ch/fieldset/dist/index.js"></script>
  </body>
</html>
```

## Properties

Unless noted otherwise, properties can be set via attributes or properties.
Starred property names are reflected to attributes.

### horizontal\*

Boolean `horizontal` changes the layout direction of the element's children to horizontal (default: false). It also imposes the correct horizontal gaps between children, except for children with a `nogap` attribute.

The `horizontal` attribute is typically used to ensure correct layout for a group of &lt;axa-radio&gt; buttons.

`horizontal` mode is responsive: when crossing the `sm(all)` breakpoint (575px), this component forces conformant children to assume 100% width and rearranges them into a vertical layout with correct vertical spacing.

### error\*

The string-valued `error` attribute, when nonempty, displays its value as an error message below the fieldset's children.

As a special case, it also colors the border of unselected &lt;axa-radio&gt; components in the error color.
