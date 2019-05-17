# Container

Adds a max-with and margin auto according to Style Guide

## Usage

```bash
npm install @axa-ch/container
```

```js
import '@axa-ch/container';
...
<axa-container>some children</axa-container>
```

### React

Create a React-ified container with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAContainerReact from '@axa-ch/container/lib/index.react';

const AXAContainerReact = createAXAContainerReact(createElement);

export default AXAContainerReact;
```

```js
<AXAContainerReact>some children</AXAContainerReact>
```

### Pure HTML pages

Import the container-defining script and use a container like this:

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
    <axa-container>
      some children
    </axa-container>
    <script src="node_modules/@axa-ch/container/dist/index.js"></script>
  </body>
</html>
```
