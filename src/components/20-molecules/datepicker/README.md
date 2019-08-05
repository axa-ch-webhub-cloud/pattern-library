# AXA Datepicker

## Install

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/datepicker
```

## Usage

**Important:** If this component needs to run in Internet Explorer 11,
[you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

### Native Example

```js
import '@axa-ch/datepicker';

`<axa-datepicker locale="de-CH" year="2020" month="1" day="20"><axa-datepicker>`;
```

### React Example

Create a React-ified datepicker with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXADatepickerReact from '@axa-ch/datepicker/lib/index.react';

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

The array-valued `allowedyears` specifies the years that will be visible in the date-picker dropdown. The `year` property value is an automatic member of `allowedyears`.

Both individual years `[2019,202]`,
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

The string-valued `value` sets the content of the free-form date-input field. When reading from `value`, it contains
the date-input field's current content.

This property is especially relevant for controlled-component behaviour under React.

### defaultValue

The string-valued `defaultValue` sets the _initial_ content of the free-form date-input field.
This property is only available under React.

It is intended to be used in conjunction with `date`, which does not auto-reflect to the date-input field (
rather, only user-initiated input does).

_Note_: _initial_ refers to the [firstUpdated lifecyle point](https://lit-element.polymer-project.org/guide/lifecycle#firstupdated) of the component's internal lifecycle &mdash; the datepicker by construction is unaware of
external lifecycles such as React's.

As a consequence, React developers should avoid the pitfall of unnecessarily recreating a new instance of the datepicker from scratch on every property update, especially for `date` changes. Failure to do so not only incurs a performance penalty, it also causes `defaultValue` to be imposed after every (re)creation. This may in turn create the false impression that the datepicker is not reactive to property changes, since its input-field value would be always that of `defaultValue`.

### name

The string-valued `name` sets the name attribute of the free-form date-input field.

This property is especially relevant for using &lt;axa-datepicker&gt; inside a &lt;form&gt;.

### outputdate

The string-valued `outputdate` (read-only) reflects the currently selected date in the format of the
current locale.

### date

The `date` property takes a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object to set the current internal date of the datepicker.

Setting `date` implies automatically derived values for `year`, `month`, and `day`.

Defining a `date` property does **not** imply controlled-component behaviour.

Likewise, `date` is **not** automatically reflected to the date input field. Rather, only _user input_ is.

### embedded

Boolean `embedded`, when true, _suppresses_ any extraneous space around the date UI proper, in particular the vertical space normally reserved below the component for displaying error messages.

While no error message will be shown, internal validation continues to be performed. As a result,
UI state still changes to red border, and the `error` attribute still is being set upon validation failure.

### invalid

Boolean `invalid`, when set to true, forces showing the error message set with `invaliddatetext` even when user input is valid.

The intended use case is to easily convey external validation failure, e.g. when an application decides the entered date is outside a permissible date range.

### width, height

String-valued `width, height` allow to override the intrinsic dimensions of the datepicker (default: `auto`).

For example, setting `width=100%` makes the datepicker assume its parent's width, whereas `height=45` sets the height of the input field to 45px.

Note that missing `px` is added to numeric values automatically.

## Callback Properties

### onChange

The function-valued attribute `onChange` can be used as a callback prop for React and other frameworks.
The callback is invoked on every [`input`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) event
emitted from the free-form date-input field.
It is also invoked whenever the user presses the OK button to accept a date selected from the calendar.

This property is especially relevant for controlled-component behaviour under React.

An `input` event with `target:{value}` is passed as parameter 1 of the callback, in which `value` represents
the new date-input string from the free-form date-input field.

Note that due to `input` event characteristics, pasting date strings into the free-form date-input field is supported (unlike in native &lt;input type="date"&gt;).

### onDateChange

The function-valued attribute `onDateChange` can be used as a callback prop for React and other frameworks.

The callback is invoked once for every _user input_ change that results in a valid date under the current locale and `allowedyears` restrictions.

A valid [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object is passed as parameter 1 of the callback.

### onFocus, onBlur

The function-valued attributes `onFocus, onBlur` can be used as callback props for React and other frameworks.

The respective callbacks are invoked with the original native event as their only parameter whenever the free-form date-input field receives or loses focus. As such, they only make sense together with the `inputfield` attribute.
