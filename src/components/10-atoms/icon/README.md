# AXA Icon

&lt;axa-icon&gt; renders an icon, given an icon name, a resource path or a string to a suitable SVG image.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```
npm install @axa-ch/icon
```

```js
import '@axa-ch/icon';

<axa-icon icon="arrow-right"></axa-icon>

// resource path
<axa-icon icon="/img/name.svg"></axa-icon>

// svg string
<axa-icon icon='<svg width="100px" height="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M34.11 74.27v4.6m34.5-48.23A21.21 21.21 0 0 0 48 15.5a21.23 21.23 0 0 0-20.53 15.07m.43 12.23a21.61 21.61 0 0 0 40.29-.07m1.19-12.18a4.91 4.91 0 0 0-.77.09 19.36 19.36 0 0 1-.42 12.09 5.23 5.23 0 0 0 1.19.14A5.92 5.92 0 0 0 75 36.71a5.92 5.92 0 0 0-5.62-6.16zm-1.19 12.18a19.36 19.36 0 0 0 .42-12.09"/><path d="M27.31 42.87a4 4 0 0 0 .59-.07 19.34 19.34 0 0 1-.43-12.23h-.16m29.51-8.23c-2.77 0-5-3.45-5-6.47m2.49 10.58c-4.85 0-8.79-5.29-8.79-10.58M24.33 76.94l12.84 2.53a61.28 61.28 0 0 0 22.35 0l12.84-2.53m-9.78-2.67v4.6"/><path d="M24.33 76.94c0-13.26 10.75-20.46 24-20.46s24 7.2 24 20.46M54.57 57.37a6.23 6.23 0 1 1-12.45 0M27.81 42.73a5.23 5.23 0 0 1-1.19.14A5.92 5.92 0 0 1 21 36.71a5.92 5.92 0 0 1 5.65-6.16 4.91 4.91 0 0 1 .77.09"/></g></svg>"></axa-icon>'

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

| Attribute              |
| ---------------------- |
| `icon="arrow-left"`    |
| `icon="arrow-right"`   |
| `icon="collapse"`      |
| `icon="document"`      |
| `icon="download"`      |
| `icon="email"`         |
| `icon="expand"`        |
| `icon="mobile"`        |
| `icon="phone"`         |
| `icon="plus"`          |
| `icon="search"`        |
| `icon="upload"`        |
| `icon="axa-logo"`      |
| `icon="axa-logo-open"` |

#### Icon resource path

The icon resource path must have `.svg` extension.

#### Icon as a SVG string

You can load your own SVG and set its html string. The string must contain `<svg` tag. When using a custom icon, make sure to define the icon `width` and `height` (in `px`) in its definition and use `fill="currentColor"` on `path`s that should inherit the color from its containing component.

### Size

The default behavior set the size of the svgs to 16x16 px, to use original size on the svg use `size="auto"`.

| Attribute     |
| ------------- |
| `size="auto"` |
