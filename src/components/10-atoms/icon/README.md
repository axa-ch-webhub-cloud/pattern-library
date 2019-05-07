# AXA Icon

axa-icon provides an icon set or a relative path to a svg resource, which can be used.

## Usage

`npm install @axa-ch/icon`

```
import @axa-ch/icon

<axa-icon icon="arrow-right"></axa-icon>

// resource path
<axa-icon icon="/img/name.svg"></axa-icon>

```

### React

You can use this component like a web component (see above).

### HTML Pages only, import the script like so:

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

##Properties

### Icon

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
