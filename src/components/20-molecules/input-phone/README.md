# Input Phone

This component constitutes a special-purpose input field to enter phone numbers from around the world in a standardized way.
It features a country-code dropdown and a text-input field for the phone number proper. Pasting composite numbers like '+41 771234567' into the text-input field is also supported.

Known restrictions: for now, &lt;axa-input-phone&gt; cannot be submitted in a &lt;form&gt; due to complications stemming from its _two_ internal form-input elements. This is likely to be lifted in a future version. Also, not all countries have country flags &mdash; this is unlikely to change, because of the undue code-size increase it would entail.

## Usage

```bash
npm install @axa-ch-webhub-cloud/input-phone
```

```js
import '@axa-ch-webhub-cloud/input-phone';
...
<axa-input-phone></axa-input-phone>
```

### React

Create a React-ified input-phone with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAInputPhoneReact from '@axa-ch-webhub-cloud/input-phone/lib/index.react';

const AXAInputPhoneReact = createAXAInputPhoneReact(createElement);

export default AXAInputPhoneReact;
```

```js
<AXAInputPhoneReact
  onChange={(value) => console.log(value)}
></AXAInputPhoneReact>
```

### Pure HTML pages

Import the input-phone-defining script and use &lt;axa-input-phone&gt; like this:

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
    <axa-input-phone></axa-input-phone>
    <script src="node_modules/@axa-ch-webhub-cloud/input-phone/dist/index.js"></script>
  </body>
</html>
```

## Properties

### invalid

Boolean attribute `invalid` is true if and only if the entered number does not meet wellformedness criteria. Currently, &lt;axa-input-phone invalid&gt; will not prevent submitting a form.

### disabled

Boolean attribute `disabled`, when true, disables both of the component's input elements, i.e. the country-code dropdown and the text-input field.

### label

The string-valued `label` defines the text above the input field.

### lang

The string-valued `lang` defines the UI's language used for displaying country names in the country-code dropdown. Permissible values are `de, fr, it, en` (default: `de`).

### value

The string-valued `value` property upon read access represents the phone number proper, i.e. minus the country-code part. When written to, again proper phone numbers are permissible values. Additionally a composite value consisting of country code (c) and phone number (p) digits is supported, using the format `+c...c p...p`, e.g. `+41 771234567`. Spaces, dashes, and dots are ignored in the phone-number part. This composite format can be used in React controlled mode.

### defaultValue

The string-valued `defaultValue` property represents the _initial_ phone-number value of the input field of the component. Its intended use is for React controlled mode.

### countrycode

The string-valued `countrycode` has `+c, +cc, +ccc` as wellformed formats with 1-3 digits c (default: `+41`). It gives an application the ability to preselect the country-code dropdown.

### countryflags

The Boolean `countryflags`, when true, causes country-flag icons to be displayed alongside the country code, where possible.
Note that in mobile viewports, the underlying native &lt;select&gt; cannot display such icons, since it allows only text.

### error

The string-valued `error` property can be used to set an error-message text, to be displayed below the component in case of an invalid phone number (default: `Falsches Format`).

### onChange

The function-valued `onChange` property takes a callback function, which will be invoked whenever the component's input elements register change. The function signature is `callback(compositeValue)`, see the description for `value` above for the format of the composite value passed.

Its intended use is for React controlled mode.

### placeholder

The string-valued `placeholder` specifies placeholder text for the component's input field (default: `79 123 45 67`).

## Events

### axa-change

This custom event targets the component itself and is fired whenever `onChange` is invoked (see above). Its event object contains the same composite-value string as `onChange`:

```js
{
  detail: compositeValue;
}
```
