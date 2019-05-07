# AXA Table Sortable

_WARNING: on mobile sortable not implemented, use innerscroll option till finished_

[axa-table-sortable](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/30-organisms/table-sortable/README.md) component.

## Usage

Install it with your CLI:
`npm install @axa-ch/table-sortable`

In your Html then:

```html
<axa-table-sortable
  innerscroll="500"
  model="HERE A JSON OF YOUR MODEL, FORMAT SEE BELOW"
>
</axa-table-sortable>
```

If you have a frontend stack, add the dependency like so:

```js
import '@axa-ch/table-sortable';

// Rest of your code here
```

If you use HTML Pages only, import the script like so:

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

Create a react table with the createElement function from your react version and then use it.

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
      { html: '<span>11 Test</span>' },
      { html: '<span>Hello</span>' },
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
