# AXA Table

**Attention: TableSortable is for people that need a Plug&Play component, which renders out of a Model. TableSortable includes functionalities like "sortable". The Table component, instead, is for whoever needs full control of its children (React's VDOM collides with native DOM if both try to manipulate the same children), which means everything like sorting cells needs to be implemented from the customer. THERE IS NO SORTABLE FUNCTIONALITY ON Table!**

## Properties

| Attribute           | Details                                                                                                                                                                                              |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `innerscroll="500"` | Sets a min width in pixel to the table and if the viewport width is smaller than _innerscroll_, adds a horizontal scrollbar. This property obligatorily requires thead and tbody.                    |
| `maxheight="500"`   | (`innerscroll` must be set) Sets a min height in pixel for the table body. Adds a vertical scrollbar, if the list height surpasses _maxheight_. This property obligatorily requires thead and tbody. |

## Variants

The consumer of axa-table can create variants of the default look-and-feel by applying classes to cells.

The following classes are provided:

- `<td class="o-table--light">Longer Body A2</td>` For a lighter-styled cell
- `<td class="o-table--bold">Super Long Body B3 </td>` For a bolder-styled cell

## Example

Example on how to use it in a HTML standalone page:

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
    <axa-table innerscroll="500">
      <table class="any-for-test">
        <thead>
          <tr>
            <th>Titel 1</th>
            <th>Titel 2</th>
            <th>Titel 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Body 1</td>
            <td class="o-table--light">Longer Body 2</td>
            <td class="o-table--bold">Super Long Body 3</td>
          </tr>
          <tr>
            <td>Body A1 AA</td>
            <td class="o-table--light">Longer Body A2</td>
            <td class="o-table--bold">Super Long Body A3</td>
          </tr>
          <tr>
            <td>Body B1</td>
            <td class="o-table--light">Longer Body B2</td>
            <td class="o-table--bold">Super Long Body B3</td>
          </tr>
        </tbody>
      </table>
    </axa-table>
    <script src="node_modules/@axa-ch/table/dist/index.js"></script>
  </body>
</html>
```

Example on how to use it as a React-ified component:

```js
import React, { Component, createElement } from 'react';
import createAXATable from '@axa-ch/table/lib/index.react';

import logo from './logo.svg';
import './App.css';

const AXATableReact = createAXATable(createElement);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <AXATableReact innerscroll="500">
            <table class="any-for-test">
              <thead>
                <tr>
                  <th>Titel 1</th>
                  <th>Titel 2</th>
                  <th>Titel 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Body 1</td>
                  <td class="o-table--light">Longer Body 2</td>
                  <td class="o-table--bold">Super Long Body 3</td>
                </tr>
                <tr>
                  <td>Body A1 AA</td>
                  <td class="o-table--light">Longer Body A2</td>
                  <td class="o-table--bold">Super Long Body A3</td>
                </tr>
                <tr>
                  <td>Body B1</td>
                  <td class="o-table--light">Longer Body B2</td>
                  <td class="o-table--bold">Super Long Body B3</td>
                </tr>
              </tbody>
            </table>
          </AXATableReact>
        </p>
      </div>
    );
  }
}

export default App;
```

**Note: axa-table does _not_ use ShadowDOM, unlike its sister component axa-table-sortable.**
