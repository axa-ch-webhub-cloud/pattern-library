# Input file

Input-File provides a clickable element, which can be used in forms to upload files. The upload function can be restricted with several attributes. They may display text, icons, or both. Input-File can be styled via properties like the [axa-button](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/button/README.md) or [axa-button-link](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/button-link/README.md).

## Usage

```bash
npm install @axa-ch/input-file
```

```js
import '@axa-ch/input-file';
...
<axa-input-file>I am a upload</axa-input-file>
```

### React

Create a React-ified input-file with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAInputFileReact from '@axa-ch/input-file/lib/index.react';

const AXAInputFileReact = createAXAInputFileReact(createElement);

export default AXAInputFileReact;
```

```js
<AXAInputFileReact onClick={handler}>
  I am a
</AXAInputFileReact>
```

### Pure HTML pages

Import the input-file-defining script and use a input-file like this:

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
    <axa-input-file></axa-input-file>
    <script src="node_modules/@axa-ch/input-file/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Accept

The String attribute `accept` specifies a filter for which file types the user can pick from.

| Attribute          | Details                                       |
| ------------------ | --------------------------------------------- |
| `accept=""`        | Allow every file type                         |
| `accept="image/*"` | Files with media type image are accepted      |
| `accept="video/*"` | Files with media type video are accepted      |
| `accept="audio/*"` | Files with media type audio are accepted      |
| `accept=".png"`    | files of the specified extension are accepted |

### Capture

The String attribute `capture` specifies which camera or microphone to use for capture of image, video and audio data.
| Attribute               | Details                                      |
| ----------------------- | ---------------------------------------------|
| `capture=""`            | Allow every file type                        |
| `capture="user"`        | Use user-facing camera and/or microphone     |
| `capture="environment"` | Use outward-facing camera and/or microphone  |

If this attribute is missing, the user agent is free to decide on its own what to do. If the requested facing mode isn't available, the user agent may fall back to its preferred default mode.

### Multiple

The Boolean attribute `multiple` specifies how many file the user can select.

### Large

The Boolean attribute `large` specifies the size of a button. Setting this attribute will change the height of a button.

### motionOff

The Boolean attribute `motionoff` deactivates hover animation.

### disabled

The Boolean attribute `disabled` disables the button natively.

### icon

Based on the string-valued attribute `icon`, interpreted as icon name, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/icon/README.md) README.

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
