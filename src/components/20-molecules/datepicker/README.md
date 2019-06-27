# AXA Datepicker

## Install

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/datepicker
```

## Usage Native

```js
import '@axa-ch/datepicker';

`<axa-datepicker locale="de-CH" year="2020" month="1" day="20"><axa-datepicker>`;
```

## Usage React

Create a React-ified datepicker with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXADatepickerReact from '@axa-ch/Datepicker/lib/index.react';

const AXADatepickerReact = createAXADatepickerReact(createElement);

export default AXADatepickerReact;
```

```js
<AXADatepickerReact locale="de-CH" year={2020} month={1} day={1} onAXADateChange={date => console.log(`date changed ${date}`)}>
</AxaDatepickerReact>
```

## Properties

| Attribute                                  | Details                                            |
| ------------------------------------------ | -------------------------------------------------- |
| `locale="de-CH"`                           | locale (second part must be in uppercase!)         |
| `year="2020"`                              | year of date to start                              |
| `month="0"`                                | month of date to start (January is 0)              |
| `day="1"`                                  | day of date to start                               |
| `inputfield`                               | Rendered as inputfield                             |
| `allowedyears='[2019,2020]'`               | allowed years visible in dropdown                  |
| `allowedyears='["1989-2010", 2012, 2014]'` | allowed years as range or mix of range and numbers |
| `labelbuttoncancel="Schliessen"`           | Label for OK button                                |
| `labelbuttonok="OK"`                       | Label for Cancel button                            |
| `inputplaceholder="Wählen Sie ein Datum"`  | Text for inputfield                                |

## Callbacks

### onAXADateChange

The function-valued attribute `onAXADateChange` can be used as a callback prop for React and other frameworks.
