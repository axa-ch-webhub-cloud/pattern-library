# AXA Table Sortable

_WARNING: For mobile use, currently the innerscroll property must be set. This restriction will be lifted in the future._

**Attention: TableSortable is for people that need a Plug&Play component, which renders out of a Model. TableSortable includes functionalities like "sortable". The Table component, instead, is for whoever needs full control of its children (React's VDOM collides with native DOM if both try to manipulate the same children, this is why we have 2 components).**

## Properties

| Attribute                   | Details                                                                                                                                                                                                                                                                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `innerscroll="500"`         | Sets a min width in pixel to the table and if the viewport width is smaller than _innerscroll_, adds a horizontal scrollbar. This property obligatorily requires thead and tbody.                                                                                                                                                    |
| `maxheight="500"`           | (`innerscroll` must be set) Sets a min height in pixel for the table body. Adds a vertical scrollbar, if the list height surpasses _maxheight_. This property obligatorily requires thead and tbody.                                                                                                                                 |
| `model="{}"`                | Sets the model from which the component should render. See the example below.                                                                                                                                                                                                                                                        |
| `datesortcolumnindex="3,4"` | Sets the index of columns, which should be sorted as a date. Dates in the model _must_ be in the format `dd-mm-yyyy`, `dd/mm/yyyy` or `dd.mm.yyyy`. Leading zeros are optional, but pay attention that a 2 digit year will be treated as following: `1.1.20` -> `01.01.0020`. Multiple indices may be specified, separated by comma. |

Model example:

```js
const model = {
  thead: [
    { html: 'Title 0', sort: 'ASC' },
    { html: 'Title 1', sort: 'ASC' },
    { html: 'Title 3', sort: 'DESC' },
    { html: 'Title 2' },
    { html: 'Place', key: 'placeName', sort: 'ASC' },
  ],
  tbody: [
    [
      // Use 'html' to insert html to the table.
      { html: '<span>11 Test</span>' },
      // Use 'text' to display sanitized html.
      { text: '<span>Hello</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'A' },
      { html: '8180 Bülach', placeName: 'Bülach' },
    ],
    [
      { html: '<span>1 Test</span>' },
      { html: '<span>Z Hello 2</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'B' },
      { html: '8038 Zürich', placeName: 'Zürich' },
    ],
    [
      { html: '<span>2 Test</span>' },
      { html: '<span>A Hello 3</span>' },
      { html: '<span>Cell 2</span>' },
      { html: '8197 Rafz', placeName: 'Rafz' },
    ],
  ],
};
```

## Events

### click, onClick

The event `click` is fired on &lt;table-sortable&gt; whenever a user presses on a row

`click`'s event `detail` is an object `{type,index,domElement,textArray}`, where `type` is the row type (tbody or tfoot), `index` is its 0-based index, `domElement` is the native DOM element reference (be careful in its use under React) and `textArray` is an array containing the text of every cell in that row.

Under React, just set a function-valued `onClick` callback in order to directly receive the aforementioned `detail` object.

Both events do _not_ bubble up through the DOM.
