# AXA Icon

&lt;axa-icon&gt; renders an icon, given either an icon name or a resource path to a suitable SVG image.

## Usage

`npm install @axa-ch/icon`

```js
import '@axa-ch/icon';

...
<axa-icon icon="arrow-right"></axa-icon>

// resource path
<axa-icon icon="/img/name.svg"></axa-icon>

```

### React

You can use this component directly in your JSX without further React-ification (see Usage above).

### Pure HTML pages

Import the icon-defining script and use icons like so:

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
    <axa-icon icon="arrow-right"></axa-icon>
    <script src="node_modules/@axa-ch/icon/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Icon

#### Icon names

| Attribute            |
| -------------------- |
| `icon="arrow-right"` |
| `icon="collapse"`    |
| `icon="download"`    |
| `icon="email"`       |
| `icon="expand"`      |
| `icon="phone"`       |
| `icon="plus"`        |
| `icon="search"`      |
| `icon="upload"`      |

#### Icon resource path

The icon resource path have to be end with `.svg` and the icon have to be a svg.
