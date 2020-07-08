# Input file

Input-File provides a clickable element, which can be used in forms to upload files. The upload function can be restricted with several attributes. They may display text, icons, or both. Input-File can be styled via properties like the [axa-button](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/button/README.md) or [axa-button-link](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/button-link/README.md).

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

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
<AXAInputFileReact onChange={handler}>I am a</AXAInputFileReact>
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

When using the input file element natively, all `<input type="file">` events will be available, like so:

```js
const inputFile = document.createElement('axa-input-file');
inputFile.setAttribute('multiple', 'multiple');

inputFile.addEventListener('change', e => {
  const {
    target: { files },
  } = e;
  console.log('Here are all selected files', files);
});
```

## Properties

### variant

| Attribute             | Details                 |
| --------------------- | ----------------------- |
| `variant="secondary"` | Button in a ghost state |
| `variant="red"`       | Button red              |
| `variant="inverted"`  | Button inverted         |

### icon

Based on the string-valued attribute `icon`, interpreted as icon name, an icon will be rendered. To see the full list of possible icons, see the [axa-icon](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/icon/README.md) README.

### large

The Boolean attribute `large` specifies the size of an input file. Setting this attribute will change the height of an input file.

### motionOff

The Boolean attribute `motionoff` deactivates hover animation.

### disabled

The Boolean attribute `disabled` disables the input file, but not natively like in the button.

### accept

The String attribute `accept` specifies a filter for which file types the user can pick from.

| Attribute                                   | Details                                       |
| ------------------------------------------- | --------------------------------------------- |
| `accept=""`                                 | Allow every file type                         |
| `accept="image/*"`                          | Files with media type image are accepted      |
| `accept="video/*"`                          | Files with media type video are accepted      |
| `accept="audio/*"`                          | Files with media type audio are accepted      |
| `accept=".png"`                             | files of the specified extension are accepted |
| `accept="image/jpg, image/jpeg, image/png"` | Allow multiple file types                     |

### capture

The Boolean attribute `capture` indicates that the capture of media directly from the device’s camera and/or microphone is preferred.

| Attribute                            | Details                           |
| ------------------------------------ | --------------------------------- |
| `capture`                            | Allow capturing media from device |
| `accept="audio/*" capture="capture"` | Allow capturing audio from device |
| `accept="video/*" capture=""`        | Allow capturing video from device |

You can restrict the different media types like audio, video or photo with the accept attribute.

### multiple

The Boolean attribute `multiple` specifies how many file the user can select.

### onChange

The function-valued attribute `onChange` can be used as a callback prop for React and other frameworks.
