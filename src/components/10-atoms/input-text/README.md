# AXA Input Text

The input text component is a wrapper to the HTML input element with custom styling and additional functionality.
It accepts most of the same properties as the HTML input, but the accept only `type=text or type=email type=password`.

## Usage

```bash
npm install @axa-ch/input-text
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

The type of control to display. The default type is text.

| Attribute         | Details  |
| ----------------- | -------- |
| `type="text"`     | Default  |
| `type="email"`    | Email    |
| `type="password"` | Passwort |

### label

The string-valued `label` provides the label text as HTML.

_Note: The consumer is responsible for sanitizing the label HTML!_

### name\*

The string-valued `name` of the checkbox for purposes of form submission.

### required

When true and the value isn't empty, the Boolean attribute `required` shows an animated checkmark to the right of the input-text and display `*` after the label.

### placeholder

Instructional text that shows before the input has a value.

### valid

The Boolean attribute `valid` is in default true.

### validation

The Boolean attribute `validation` shows an animated checkmark to the right of the input-text, if `valid` is true.  

### disabled

The Boolean attribute `disabled` disables the input text natively.

### error\*

The string-valued `error` provides an error text as HTML. It sets the checkbox into a visual error state.

### onChange

The function-valued property `onChange` can be used as a callback prop for React and other frameworks.

### onFocus

The function-valued property `onFocus` can be used as a callback prop for React and other frameworks.

### onBlur

The function-valued property `onBlur` can be used as a callback prop for React and other frameworks.
