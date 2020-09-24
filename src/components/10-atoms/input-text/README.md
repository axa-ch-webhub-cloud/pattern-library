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

Create a React-ified &lt;axa-input-text&gt; with the `createElement` function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAInputTextReact from '@axa-ch/input-text/lib/index.react';

const AXAInputTextReact = createAXAInputTextReact(createElement);

export default AXAInputTextReact;
```

```js
<AXAInputTextReact onChange={handleChange} />
```

### Pure HTML pages

Import the input-text-defining script and use &lt;axa-input-text&gt; like this:

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
| `type="password"` | Password  |

### label

The string-valued `label` provides the label text as HTML.

_Note: The application is responsible for sanitizing HTML!_

### refId

The string-valued `refId` sets the reference ID for label and input. If no `refId` is set, a random ID will be created.

### name

The string-valued `name` of the element can be set for purposes of form submission.

_Note: See the [specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#naming-form-controls:-the-name-attribute) for further details._

### maxLength

Numeric `maxLength`, when defined, restricts the number of characters a user can enter. The underlying native &lt;input&gt; enforces `maxLength` by blocking user input when the character limit is exceeded.

The remaining characters are always displayed to the user, if `maxLength` and `counter` is provided.

The UI's remaining-characters message (see `counter`) will however use `maxLength - 1` internally to be able to provide advance warning when 0 characters remain. Upon hitting the character limit proper the 'character limit reached!' error message (see `counterMax`) is displayed instead.

### counter

String-valued `counter` defines the UI's remaining-characters message in conjunction with `maxLength`.

Valid `counter` values are:

- the empty string, which will cause that character count not to be displayed.
- a nonempty string suffix, which will be appended to the remaining character count
- a string template containing "##counter##", so that e.g. "still ##counter## characters left" will result in instantiated text like "still 9 characters left".

### counterMax

String-valued `counterMax` defines the validation error message that the user will see upon reaching `maxLength` characters.

### required

The Boolean attribute `required` visualizes an element that must obligatorily be filled by the user. When set to true, the element displays `*` after the label text.

### placeholder

The string-valued `placeholder` specifies the placeholder text shown when the element is empty.

### invalid

The Boolean attribute `invalid` serves to indicate the validity of the element (default: `false`). If set to `true` it sets the element into a visual error state.

### checkMark

The Boolean attribute `checkMark`, when set to true, shows an animated check mark to the right of the input (default: `false`).

### value

The string-valued `value` sets the value of the underlying native HTML &lt;input&gt;

### defaultValue

The string-valued `defaultValue` can only be used for React.

Like `value`, it sets the value of the underlying native HTML &lt;input&gt; &mdash; _but_ only once, on first render.

### disabled

The Boolean attribute `disabled` disables the underlying native HTML &lt;input&gt; text.

### error

The string-valued `error` provides error text as HTML.

This is the text shown when `invalid` is true.

### info

The string-valued `info` provides the label text as HTML.

_Note: The application is responsible for sanitizing HTML!_

### pattern

It is a string value. But just input a valid RegEx. Useful to open up numeric keyboard on iOS touch devices. See official HTML documentation for details.

Default: `.*`. This RegEx do not restrict any input. An empty string at this point causes errors on form validation, because it just allows to input a empty string.

### inputmode

It is a string value. Useful to open up numeric keyboard on touch devices. See official HTML documentation for details.

### autofocus

The Boolean attribute autofocus, when true, sets keyboard focus on the underlying native &lt;input&gt; element after initial rendering of the component.

### currency

You can set the `currency` attribute to a valid [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217) string. When set, &lt;input-text&gt; formats the input whenever the `onBlur` event of its internal input element fires, and also upon setting `value` programmatically. Note that the locale "style" remains fixed to `de-CH`.

Currency formatting is only active when attribute `type` is set to `text`. If the inputted text can not be formatted the attribute `invalid` switches to `true`. A valid input to format is for example `12.20`, invalid is `12.20.1` because of the two dots.

Please be mindful of using currency formatting in combination with `maxLength`. The result of formatting could exceed the limits of `maxLength`!

## Callbacks

### onChange

The function-valued property `onChange` can be used as a callback prop for React and other frameworks.

Its only argument is the original `change` event from the element's underlying native &lt;input&gt; field.

### onFocus

The function-valued property `onFocus` can be used as a callback prop for React and other frameworks.

Its only argument is the original `focus` event from the element's underlying native &lt;input&gt; field.

### onBlur

The function-valued property `onBlur` can be used as a callback prop for React and other frameworks.

Its only argument is the original `blur` event from the element's underlying native &lt;input&gt; field.

## Methods

### focus()

The `focus()` method focusses the underlying native HTML &lt;input&gt;.

Its UI consequences are the same as a keyboard/mouse-initiated focus.

### blur()

The `blur()` method unfocusses the underlying native HTML &lt;input&gt;.

Its UI consequences are the same as a keyboard/mouse-initiated blur.
