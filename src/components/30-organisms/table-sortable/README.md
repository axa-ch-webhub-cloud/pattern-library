# AXA Table Sortable

_WARNING: For mobile use, currently the innerscroll property must be set. This restriction will be lifted in the future._

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

Install it with your CLI:
`npm install @axa-ch/table-sortable`

Include it in your HTML like this:

```html
<axa-table-sortable
  innerscroll="500"
  model="HERE A JSON OF YOUR MODEL, SEE BELOW FOR FORMAT"
>
</axa-table-sortable>
```

If you have a frontend stack, add the dependency like so:

```js
import '@axa-ch/table-sortable';

// rest of your code here
```

If you use HTML pages only, import the script like so:

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
    <axa-table-sortable
      innerscroll="500"
      model='{"thead":[{"html":"Title 0","sort":"ASC"},{"html":"Title 1","sort":"ASC"},{"html":"Title 3","sort":"DESC"},{"html":"Title 2"}],"tbody":[[{"html":"<span>11 Test</span>"},{"html":"<span>Hello</span>"},{"html":"<span>Cell 2</span>"},{"html":"A"}],[{"html":"<span>1 Test</span>"},{"html":"<span>zHello 2</span>"},{"html":"<span>Cell 2</span>"},{"html":"B"}],[{"html":"<span>2 Test</span>"},{"html":"<span>aHello 3</span>"},{"html":"<span>Cell 2</span>"},{"html":"C"}]]}'
    >
    </axa-table-sortable>
    <script src="node_modules/@axa-ch/table-sortable/dist/index.js"></script>
  </body>
</html>
```

### React

Create a React-ified sortable table with the createElement function from your React version and then use it like this:

```js
// Here an example from create-react-app
import React, { Component, createElement } from 'react';
import createAXATableSortable from '@axa-ch/table-sortable/lib/index.react';

import './App.css';

const AXATableSortableReact = createAXATableSortable(createElement);

const model = {
  thead: [
    { html: 'Title 0', sort: 'ASC' },
    { html: 'Title 1', sort: 'ASC' },
    { html: 'Title 3', sort: 'DESC' },
    { html: 'Title 2' },
  ],
  tbody: [
    [
      { html: '<span>11 Some Text</span>' },
      { html: '<span>Some Text</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>1 Some Text</span>' },
      { html: '<span>Z Some Text</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>2 Some Text</span>' },
      { html: '<span>A Some Text</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'C' },
    ],
  ],
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <AXATableSortableReact innerscroll="500" model={model} />
        </p>
      </div>
    );
  }
}

export default App;
```

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
  ],
  tbody: [
    [
      // Use 'html' to insert html to the table.
      { html: '<span>11 Test</span>' },
      // Use 'text' to display sanitized html.
      { text: '<span>Hello</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'A' },
    ],
    [
      { html: '<span>1 Test</span>' },
      { html: '<span>Z Hello 2</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'B' },
    ],
    [
      { html: '<span>2 Test</span>' },
      { html: '<span>A Hello 3</span>' },
      { html: '<span>Cell 2</span>' },
      { html: 'C' },
    ],
  ],
};
```

## Example

## Variants

None

## Events

### click, onClick

The event `click` is fired on &lt;table-sortable&gt; whenever a user presses on a row

`click`'s event `detail` is an object `{type,index,domElement,textArray}`, where `type` is the row type (tbody or tfoot), `index` is its 0-based index, `domElement` is the native DOM element reference (be careful in its use under React) and `textArray` is an array containing the text of every cell in that row.

Under React, just set a function-valued `onClick` callback in order to directly receive the aforementioned `detail` object.

Both events do _not_ bubble up through the DOM.
