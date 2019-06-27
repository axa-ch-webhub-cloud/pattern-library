# AXA Dropdown

## Installation

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

`npm install @axa-ch/dropdown`

## Native Example Usage

```
<axa-dropdown title="Please Select" valid
    items='[
    {"name": "Please Select", "value": "Please Select",
     "selected": true, "disabled": true },
    {"name": "Item A", "value": "Item 1" },
    {"name": "Item B", "value": "Item 2" },
    {"name": "Item C", "value": "Item 3" }
    ]'></axa-dropdown>
```

## React Example Usage

Create a React-ified Dropdown with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXADropdownReact from '@axa-ch/Dropdown/lib/index.react';

const AXADropdownReact = createAXADropdownReact(createElement);

export default AXADropdownReact;
```

```js
<AXADropdownReact
  items={[
    {
      name: 'Please Select',
      value: 'Please Select',
      selected: true,
      disabled: true,
    },
    { name: 'Item 1', value: 'Item 1' },
    { name: 'Item 2', value: 'Item 2' },
    { name: 'Item 3', value: 'Item 3' },
  ]}
  onChange={event => console.log(`value changed ${event.target.value}`)}
/>
```

[Controlled-Component](https://reactjs.org/docs/forms.html#the-select-tag) behaviour is supported.

## Properties

### title

The String-valued attribute `value` sets the initial title of the closed dropdown (default: first selected item).

### value

The String-valued attribute `value` sets the selected dropdown option to the one with matching value. Restricted to controlled-component behaviour in React.

### onChange

The function-valued attribute `onChange` can be used as a callback prop for React and other frameworks.

### native

When true, the Boolean attribute `native` enforces native &lt;select&gt; UI look-and-feel for open dropdowns irrespective of
window widths.

### valid

When true, the Boolean attribute `valid` shows an animated checkmark to the right of the dropdown.

### error

The String-valued attribute `error` shows a red error text under the dropdown if nonempty, and colours the dropdown border
in red.

### embedded

When true, the Boolean attribute `embedded` suppresses the default space around the dropdown otherwise reserved for showing valid/error UI states. It is meant for embedding a dropdown as a subcomponent of other components (cf. axa-datepicker for an example).
