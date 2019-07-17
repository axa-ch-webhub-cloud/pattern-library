# Textarea

The &lt;axa-textarea&gt; component is a wrapper for the HTML &lt;textarea&gt; element with custom styling and additional functionality, amongst other things a counter.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/textarea
```

```js
import '@axa-ch/textarea';
...
<axa-textarea></axa-textarea>
```

### React

Create a React-ified textarea with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATextareaReact from '@axa-ch/textarea/lib/index.react';

const AXATextareaReact = createAXATextareaReact(createElement);

export default AXATextareaReact;
```

```js
<AXATextareaReact onChange={handleChange} />
```

### Pure HTML pages

Import the textarea-defining script and use a textarea like this:

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
    <axa-textarea></axa-textarea>
    <script src="node_modules/@axa-ch/textarea/dist/index.js"></script>
  </body>
</html>
```

## Properties

#### label

The string-valued `label` provides the label text as HTML.

### name\*

The string-valued `name` of the element for purposes of form submission.

### required

The boolean attribute `required` visualizes an element that must obligatorily be filled by the user. When true displays `*` after the label text.

### placeholder

String-valued `placeholder`specifies the placeholder text shown when the element is empty.

### invalid

The boolean attribute `invalid` serves to indicate the validity of the element (default: `false`), if `false` it sets the element into a visual error state.

### checkMark

The boolean attribute `checkMark` shows an animated check mark to the right of the textarea (default: `false`), if `valid` is true .

### value

The string-valued `value` sets the value of the underlying native HTML &lt;textarea&gt;

### disabled

The boolean attribute `disabled` disables the underlying native HTML &lt;textarea&gt; text.

### error

The string-valued `error` provides error text as HTML. It sets the element into a visual error state.

### embedded

When true, the Boolean attribute `embedded` suppresses the default space around the textarea otherwise reserved for showing valid/error UI states.

### maxLength

The number-valued `maxlength` provides a maximum number of characters that the textarea allows to be entered. In addition, a character counter is added in the HTML.

### counter

The string-valued `counter` offers the possibility of placing a string pattern (##counter##) anywhere in a string. If no character counter has been placed then the character counter is placed before the string.

### counterMax

The string-valued `countermax` provides information text as HTML, if the max characters defined in `maxlength` are reached.

### defaultValue

The string-valued `defaultValue` can only be used for React and other frameworks. In native you set a default value in children for example: `<axa-textarea>default value</axa-textarea>`.

### onChange

The function-valued property `onChange` can be used as a callback prop for React and other frameworks.

### onFocus

The function-valued property `onFocus` can be used as a callback prop for React and other frameworks.

### onBlur

The function-valued property `onBlur` can be used as a callback prop for React and other frameworks.
