# AXA Dropdown

[axa-dropdown](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/20-molecules/dropdown/README.md).

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
