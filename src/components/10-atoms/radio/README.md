# Radio

[Changelog](./CHANGELOG.md)

Radio buttons provide a UI element for selecting one out of several visible choices.
One may label them with text to explain the semantics of the selected choice to users.

Radio buttons can be used in HTML forms as well as [React controlled components](https://reactjs.org/docs/forms.html#controlled-components).

For grouping multiple related radio buttons in a style-guide-conformant fashion see [&lt;axa-fieldset&gt;](https://github.com/axa-ch/patterns-library/tree/develop/src/components/10-atoms/fieldset).

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/radio
```

```js
import '@axa-ch/radio';
...
<axa-radio></axa-radio>
```

### React

Create a React-ified radio button with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXARadioReact from '@axa-ch/radio/lib/index.react';

const AXARadioReact = createAXARadioReact(createElement);

export default AXARadioReact;
```

```js
<AXARadioReact
  name="insurance"
  label="yes, take out insurance"
  value="1"
  checked={checked}
  onChange={handler}
/>
```

### Pure HTML pages

Import the radio-button-defining script and use a radio button like this:

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
    <axa-radio
      name="insurance"
      label="yes, take out insurance"
      value="1"
      checked
    ></axa-radio>
    <script src="node_modules/@axa-ch/radio/dist/index.js"></script>
  </body>
</html>
```

## Properties

### button

The Boolean attribute `button`, when true, changes the radio button UI to a button-like appearance (default: false).

### checked

The Boolean attribute `checked` controls whether the radio button is selected (true) or not (false).

If `checked` is defined when first set under React, controlled-component mode is activated.

### disabled

The Boolean attribute `disabled` controls whether the radio button can be user-modified (false) or not (true).

A `disabled` radio button will not be submitted in a form.

### refId

The string-valued `refId` sets the `id` attribute of the component's hidden &lt;input&gt;.

### value

The string-valued `value` sets the `value` attribute of underlying &lt;input type="radio"&gt;.

It is especially useful in combination with form submission of the component.

### name

The string-valued `name` sets the `name` attribute of underlying &lt;input type="radio"&gt;.

It serves as the group identifier of all N same-named radio buttons that collectively exhibit one-out-N-choice behaviour.

It is a necessary attribute for form submission of the component.

### label

The string-valued `label` sets the visible text of this radio button (default: `''`).

### nogap

The Boolean `nogap` attribute, when true, suppresses the horizontal gap between this radio button and its left neighbour in conjunction with an enclosing &lt;axa-fieldset horizontal&gt;.

It is intended for two-radio-button choices.

### noAutoWidth

The Boolean `noAutoWidth` attribute, when true, suppresses the auto-width calculation for `button`-type radio buttons.

### icon

The string-valued `icon` attribute receives a valid SVG icon with working dimensions 60&times;35 pixels.

## Callbacks

### onChange

The function-valued `onChange` can be used as a callback prop for React and other frameworks.
Its only parameter is the native `change` event object from the underlying &lt;input type="radio"&gt;.

The callback is invoked whenever the `change` event from the underlying &lt;input type="radio"&gt; fires.

It is especially important in controlled-component mode.

### onFocus, onBlur

The function-valued `onFocus, onBlur` can be used as a callback prop for React and other frameworks.
Its only parameter in each case is the native `focus, blur` event object from the underlying &lt;input type="radio"&gt;.

The respective callbacks are invoked whenever the underlying &lt;input type="radio"&gt; receives or loses focus.
