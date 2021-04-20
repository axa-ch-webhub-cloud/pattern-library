# AXA Icon

&lt;axa-icon&gt; renders an icon, given an icon name, a resource path or a string to a suitable SVG image.

## Properties

### Icon

#### Icon names

| Attribute              |
| ---------------------- |
| `icon="add"`           |
| `icon="arrow-left"`    |
| `icon="arrow-right"`   |
| `icon="collapse"`      |
| `icon="document"`      |
| `icon="download"`      |
| `icon="email"`         |
| `icon="expand"`        |
| `icon="mobile"`        |
| `icon="phone"`         |
| `icon="search"`        |
| `icon="upload"`        |
| `icon="axa-logo"`      |
| `icon="axa-logo-open"` |

#### Icon resource path

The icon resource path must have `.svg` extension.

#### Icon as a SVG string

You can load your own SVG and set its html string. The string must contain `<svg` tag. When using a custom icon, make sure to define the icon `width` and `height` (in `px`) in its definition and use `fill="currentColor"` on `path`s that should inherit the color from its containing component.

### Size

The default behavior set the size of the svgs to `medium`, to use original size on the svg use `auto`.

| Attribute       | description                           |
| --------------- | ------------------------------------- |
| `size="small"`  | 20x20 px                              |
| `size="medium"` | default. 24x24 px                     |
| `size="large"`  | 32x32 px                              |
| `size="auto"`   | use original size of svg file you use |
