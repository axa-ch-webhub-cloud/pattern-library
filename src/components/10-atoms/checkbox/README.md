# AXA Checkbox

Checkboxes provide a UI element for toggling between two visual states, checked and unchecked.
They can be labelled with text to explain the semantics of the checked state to users. Checkboxes
can be used in HTML forms as well as [React controlled components](https://reactjs.org/docs/forms.html#controlled-components).

For grouping multiple related checkboxes in a style-guide-conformant fashion see [&lt;axa-fieldset&gt;](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/fieldset).

## Usage

```bash
npm install @axa-ch/checkbox
```

```js
import '@axa-ch/checkbox';
...
<axa-checkbox label="I'm a checkbox"></axa-checkbox>
```

### React

Create a React-ified checkbox with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXACheckBox from '@axa-ch/checkbox/lib/index.react';

const AXACheckBox = createAXACheckBox(createElement);

export default AXACheckBox;
```

```js
<AXACheckBox onChange={handler} label="I'm a checkbox"></AXACheckBox>
<AXACheckBox onChange={handler} checked={checked} label="I'm a controlled checkbox"></AXACheckBox>
```

### Pure HTML pages

Import the checkbox-defining script and use a checkbox like this:

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
    <axa-checkbox label="I'm a checkbox"></axa-checkbox>
    <script src="node_modules/@axa-ch/checkbox/dist/index.js"></script>
  </body>
</html>
```

## Properties

Unless otherwise noted, properties can be set via attributes or properties.
Starred property names are reflected to attributes.

### type

The string-valued `type` of the axa-checkbox (default: _checkbox_).

### name\*

The string-valued `name` of the checkbox for purposes of form submission.

### value

The string-valued `value` of the checkbox for purposes of form submission.

### label

The string-valued `label` provides the label text as HTML.

_Note: The consumer is responsible for sanitizing the label HTML!_

### checked\*

The Boolean `checked` sets the checked/unchecked visual state.

### disabled\*

The Boolean `disabled` disables the checkbox natively.

### error\*

The string-valued `error` provides an error text as HTML. It sets the checkbox into a visual error state.

### onChange

The function-valued property `onChange` can be used as a callback prop for React and other frameworks.
