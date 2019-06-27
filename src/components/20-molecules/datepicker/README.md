# AXA Datepicker

## Install

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/datepicker
```

## Native Example Usage

```js
import '@axa-ch/datepicker';

`<axa-datepicker locale="de-CH" year="2020" month="1" day="20"><axa-datepicker>`;
```

## React Example Usage

Create a React-ified datepicker with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXADatepickerReact from '@axa-ch/Datepicker/lib/index.react';

const AXADatepickerReact = createAXADatepickerReact(createElement);

export default AXADatepickerReact;
```

```js
<AXADatepickerReact locale="de-CH" year={2020} month={1} day={1} onDateChange={date => console.log(`date changed ${date}`)}>
</AxaDatepickerReact>
```

[Controlled-Component](https://reactjs.org/docs/forms.html#the-select-tag) behaviour is supported when the `inputfield` property is set.

## Properties

### locale

The string-valued `locale` defines region-specific date rendering preferences such as separators etc. (default: `de-CH`).

### year

The number-valued `year` defines the start year of the datepicker (default: current year).

### month

The number-valued `month` defines the start month of the datepicker (default: current month).

_Note_: Numeric months are _zero_-based, i.e. January is 0.

### day

The number-valued `day` defines the start day of the datepicker (default: current day).

_Note_: Numeric days &le; 0 wrap around into the end of the _previous_ month
(cf. [MDN Date.setDate](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate#Description)).

### inputfield

Boolean-valued `inputfield` toggles visibility of a free-form date-input field (default: `false`).

Input-field content is validated.

### allowedyears

The array-valued `allowedyears` specifies the years that will be visible in the date-picker dropdown. Both individual years `[2019,202]`,
year ranges `["1989-2010"]`, and a mix of the two `["1989-2010", 2012, 2014]` are supported.

### labelbuttoncancel, labelbuttonok, placeholder, monthtitle, yeartitle, invaliddatetext

These string-valued properties are all used to internationalize various texts in &lt;axa-datepicker&gt;:

- `labelbuttoncancel` is the text of the action button cancelling a date selection (default: `Schliessen`).

- `labelbuttonok` is the text of the action button approving a date selection (default: `OK`).

- `placeholder` is the placeholder text of the free-form date-input field (default: `Please select a date`).

- `monthtitle` is the text shown on the month dropdown when nothing is preselected (default: `Choose Month`).

- `yeartitle` is the text shown on the year dropdown when nothing is preselected (default: `Choose Year`).

- `invaliddatetext` is the text shown under the free-form date-input field when date validation fails (default:
  `Invalid date`).

### value

The string-valued `value` sets the content of the free-form date-input field.

It is especially relevant for controlled-component behaviour under React.

### name

The string-valued `name` sets the name attribute of the free-form date-input field.

It is especially relevant for using &lt;axa-datepicker&gt; inside a &lt;form&gt;.

### outputdate

The string-valued `outputdate` (read-only) reflects the currently selected date.

## Callback Properties

### onChange

The function-valued attribute `onChange` can be used as a callback prop for React and other frameworks.
The callback is invoked on every `input` event emitted from the free-form date-input field.

The property is especially relevant for controlled-component behaviour under React.

An `input` event with `target:{value}` is passed as parameter 1 of the callback, in which `value` represents
the new date-input string from the free-form date-input field.

### onDateChange

The function-valued attribute `onDateChange` can be used as a callback prop for React and other frameworks.
The callback is invoked whenever the `date` property/attribute changes.

A `Date` object is passed as parameter 1 of the callback.

## Events

### axa-change

The custom event `axa-change` is fired on the &lt;axa-datepicker&gt; element itself whenever the `date` property/attribute changes
and the resulting year is within the `allowedyears.`

Its `detail` value is a `Date` object.
