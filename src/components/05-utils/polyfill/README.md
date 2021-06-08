# AXA Pattern Library Polyfill

This package includes polyfills for all AXA B2C Browsers. It includes 2 types of bundles:

- Bundle for IE11 + custom elements (short: **CE**)
- Bundle for modern browser that don't support custom elements yet.

## Usage

Install the package:

```bash
npm install @axa-ch/patterns-library-polyfill
```

For IE11 + CE support in a "pure HTML" page:

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
    <script src="node_modules/@axa-ch/patterns-library-polyfill/dist/index.js"></script>
    <!-- HERE you will load your other PLIB components -->
  </body>
</html>
```

For IE11 + CE support in a typical frontend stack:

```js
import '@axa-ch/patterns-library-polyfill';

// rest of your code here
```

For modern browser support in a "pure HTML" page:

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
    <script src="node_modules/@axa-ch/patterns-library-polyfill/dist/index.webcomponents.js"></script>
    <!-- HERE you will load your other PLIB components -->
  </body>
</html>
```

For modern browser support in a typical frontend stack:

```js
import '@axa-ch/patterns-library-polyfill/index.webcomponents';

// rest of your code here
```

## Polyfills used:

https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/05-utils/polyfill/index.js
