# AXA Input Text

The &lt;axa-input-text&gt; component is a wrapper for the HTML &lt;input&gt; element with custom styling and additional functionality.
It accepts most of the same properties as HTML &lt;input&gt;, but with `type`restricted to `type=text`, `type=email`, or `type=password`.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/input-text
```

```js
import '@axa-ch/input-text';
...
<axa-input-text></axa-input-text>
```

### React

Create a React-ified &lt,axa-input-text&gt; with the `createElement` function from your React version and then use it like this:

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

Import the input-text-defining script and use an &lt,axa-input-text&gt; like this:

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

### type

The type of input element to display.

| Attribute         | Details   |
| ----------------- | --------- |
| `type="text"`     | (default) |
| `type="email"`    | Email     |
| `type="password"` | Passwort  |

### label

The string-valued `label` provides the label text as HTML.

_Note: The consumer is responsible for sanitizing the HTML provided!_

### name\*

The string-valued `name` of the element for purposes of form submission.

### required

The boolean attribute `required` visualizes an element that must obligatorily be filled by the user. When true and the element´s `value` is not empty, it shows an animated checkmark to the right of the element and displays `*` after the label text.

### placeholder

String-valued `placeholder`specifies the placeholder text shown when the element is empty.

### invalid

The boolean attribute `invalid` serves to indicate the validity of the element (default: `false`). if `false` it sets the element into a visual error state.

### checkMark

The boolean attribute `checkMark` shows an animated check mark to the right of the input (default: `false`), if `valid` is true .

### value

The string-valued `value` sets the value of the underlying native HTML &lt;input&gt;

### disabled

The boolean attribute `disabled` disables the underlying native HTML &lt;input&gt; text.

### error

The string-valued `error` provides error text as HTML. It sets the element into a visual error state.

### onChange

The function-valued property `onChange` can be used as a callback prop for React and other frameworks.

### onFocus

The function-valued property `onFocus` can be used as a callback prop for React and other frameworks.

### onBlur

The function-valued property `onBlur` can be used as a callback prop for React and other frameworks.
