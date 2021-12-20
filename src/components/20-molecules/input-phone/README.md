# Input Phone

Input field to enter phone numbers from around the world in a standardized way.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch-webhub-cloud/pattern-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/input-phone
```

```js
import '@axa-ch/input-phone';
...
<axa-input-phone></axa-input-phone>
```

### React

Create a React-ified input-phone with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAInputPhoneReact from '@axa-ch/input-phone/lib/index.react';

const AXAInputPhoneReact = createAXAInputPhoneReact(createElement);

export default AXAInputPhoneReact;
```

```js
<AXAInputPhoneReact
  onClick={() => alert('you clicked me')}
></AXAInputPhoneReact>
```

### Pure HTML pages

Import the input-phone-defining script and use a input-phone like this:

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
    <script src="node_modules/@axa-ch/input-phone/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute     | Details                                                |
| ------------- | ------------------------------------------------------ |
| `invalid`     | Invalid number indication                              |
| `label`       | Name of the element                                    |
| `lang`        | Language, one of `de`, `en`, `it`, `fr`, default: `de` |
| `value`       | String based, but object based if manually overridden  |
| `defaultarea` | Area Code, e.g. `+41` for Switzerland                  |
| `errorprefix` | Error Message                                          |

### invalid

Will become true if the entered number does not meet certain phone number related requirements. At the moment, this will not prevent submitting a form.

### label

The text on top of the input field.

### lang

The language, in which the countries should be displayed (and sorted).

### value

This property is always a `string` when read. To override it manually, you need to provide an object though (which will be converted to a string directly after). This is needed to provide proper validation of the string. Example: `+1268771231212` would need to be split into areacode (for the selection in the dropdown and for the validation), but those can contain from 1 up to 5 digits.

Example of a legitimate object to pass:

```js
{
  areaCode: '+41',
  phoneNumber: '795005050'
}
```

### defaultarea

Has this format: `+41` (for Switzerland).
Is used to pre-select from all available elements.

### errorprefix

The error message in case of a wrongly typed phone number. To display the following information: `Invalid Phone Number: +410795002020` you have to only provide `Invalid Phone Number` as `errorprefix` and the rest will be appended by the component.

### onChange

Will trigger onChange. The current value will be added as parameter.

## Events

### axa-change

This event fires and contains a synthetic event Object containing the current value.

Structure:

```js
{
  detail: string; // Contains the value
}
```
