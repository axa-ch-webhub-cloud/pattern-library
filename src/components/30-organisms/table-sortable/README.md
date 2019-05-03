# AXA Table Sortable

[axa-table-sortable](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/30-organisms/table-sortable/README.md) component.

## Properties

| Attribute           | Details                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `innerscroll="500"` | sets a min width and if viewport is less than defined here in PX, it will add a scrollbar |
| `model="{}"`        | Sets the model on how the component should render. See example below                      |

Model example:

```js
const model = {
  thead: [
    { html: 'Title 0', sort: 'ASC' },
    { html: 'Title 1', sort: 'ASC' },
    { html: 'Title 3', sort: 'DESC' },
    { html: 'Title 2' },
  ],
  tbody: [
    [
      { html: '<span>11 Gaa</span>' },
      { html: '<span>Hello</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>1 Gaa</span>' },
      { html: '<span>zHello 2</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>2 Gaa</span>' },
      { html: '<span>aHello 3</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'C' },
    ],
  ],
};
```

## Variants

None
