# Policy features

TODO Description

- icons anbieten (erstmal aus vorhandenen)
- icons nachladbar, siehe icon component
- items als unterordner, tagname ist dann dem verwender autom. bekannt
- css aus dem browser kopieren

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/policy-features
```

```js
import '@axa-ch/policy-features';
...
<axa-policy-features></axa-policy-features>
```

### React

Create a React-ified policy-features with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAPolicyFeaturesReact from '@axa-ch/policy-features/lib/index.react';

const AXAPolicyFeaturesReact = createAXAPolicyFeaturesReact(createElement);

export default AXAPolicyFeaturesReact;
```

```js
<AXAPolicyFeaturesReact onClick={handler}>
</AXAPolicyFeaturesReact>
```

### Pure HTML pages

Import the policy-features-defining script and use a policy-features like this:

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
    <axa-policy-features></axa-policy-features>
    <script src="node_modules/@axa-ch/policy-features/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute             | Details                 |
| --------------------- | ----------------------- |
| `variant="foo"`       | Desc of Variant         |

### Bar

The attribute `bar` specifies...

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.

### Migration Notes

You don't have to pay attention to anything for upgrading to newer version.
