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
| `icon="document"`    |
| `icon="download"`    |
| `icon="email"`       |
| `icon="expand"`      |
| `icon="mobile"`      |
| `icon="phone"`       |
| `icon="plus"`        |
| `icon="search"`      |
| `icon="upload"`      |

#### Icon resource path

The icon resource path must have `.svg` extension.

### Size

The default behavior set the size of the svgs to 16x16 px, to use default size use `size="auto"`.

| Attribute     |
| ------------- |
| `size="auto"` |

## Using custom icons

Typical icon SVG looks similar to

```html
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  width="10px"
  height="12px"
  viewBox="0 0 10 12"
>
  <path fill="currentColor" d="M9.7,4.3H7v-4H3v4H0.3L5,9L9.7,4.3z" />
  <path fill="currentColor" d="M0.3,10.3v1.3h9.3v-1.3H0.3z" />
</svg>
```

When using a custom icon, make sure to define the icon `width` and `height` (in `px`) in its definition and use `fill="currentColor"` on `path`s that should inherit the color from its containing component, ie `<AXALinkReact variant="icon" icon={importedIcon}>Link</AXALinkReact>`.
