# AXA Dropdown

[axa-dropdown](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/20-molecules/dropdown/README.md).

Note:

- Controled inputs for the react component are coming within the next minor release (1.1.0).
- Due to limitations of ShadowDom, sent input values won't be visible within native form data (WIP)

## Install

`npm install @axa-ch/dropdown`

## Example Usage

```
<axa-dropdown title="Please Select"
    items='[
    {"name": "Please Select", "value": "Please Select", "url": "#", "isSelected": true, "isInitialItem": true },
    {"name": "Item 1", "value": "Item 1", "url": "#", "isSelected": false },
    {"name": "Item 2", "value": "Item 2", "url": "#", "isSelected": false },
    {"name": "Item 3", "value": "Item 3", "url": "#", "isSelected": false }
    ]'></axa-dropdown>
```

## Example Usage React

Create a React-ified Dropdown with the createElement function from your React version and then use it like this.

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
      url: '#',
      isSelected: true,
      isInitialItem: true,
    },
    { name: 'Item 1', value: 'Item 1', url: '#', isSelected: false },
    { name: 'Item 2', value: 'Item 2', url: '#', isSelected: false },
    { name: 'Item 3', value: 'Item 3', url: '#', isSelected: false },
  ]}
  onAXAValueChange={value => console.log(`value changed ${value}`)}
/>
```

## Properties

<!-- prettier-ignore-start -->
| Attribute                             | Details                               |
| ------------------------------------- | ------------------------------------- |
|  title                                | initial item title (Please select)    |
|  open                                 | open/close state                      |
| `items='[ {                           | items array with items objects        |
|       "name": "Please Select",        |                                       |
|       "value": "Please Select",       |                                       |
|       "url": "#",                     |                                       |
|       "isSelected": true,             |                                       |
|       "isInitialItem": true           |                                       |
|  }]'                                  |                                       |
|                                       |                                       |
<!-- prettier-ignore-end -->

### onAXAValueChange

The function-valued attribute `onAXAValueChange` can be used as a callback prop for React and other frameworks.
