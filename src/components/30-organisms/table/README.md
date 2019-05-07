# AXA Table

Install it with your CLI:
`npm install @axa-ch/table-sortable`

Example on how to use it as a HTML Stand alone:

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

Example on how to use it as a React Component:

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

**This Table is not inside a ShadowDom, the axa-table-sortable, instead, is inside a ShadowDom**

## Options

As see in the example above, we have following options

- innerscroll="500" instead of having cell 100% width on mobile screen, the table will add an overflow after the threshold (500px in the example above). Mandatory here the use of thead and tbody

[axa-table](https://github.com/axa-ch/patterns-library/blob/develop-v2/src/components/30-organisms/table/README.md) component.

## Properties

| Attribute           | Details                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------- |
| `innerscroll="500"` | sets a min width and if viewport is less than defined here in PX, it will add a scrollbar |

## Variants

Cause is native tag styling, variants have to be done on the consumer side by applying classes to cells.

The following classes are provided:

- `<td class="o-table--light">Longer Body A2</td>` For a lighter styled cell
- `<td class="o-table--bold">Super Long Body B3 </td>` For a bolder styled cell
