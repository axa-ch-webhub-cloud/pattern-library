# Image upload

image-upload is a component used for uploading files in forms.

## Usage

```bash
npm install @axa-ch/image-upload
```

```js
import '@axa-ch/image-upload';
...
<axa-image-upload></axa-image-upload>
```

### React

Create a React-ified image-upload with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXAImageUploadReact from '@axa-ch/image-upload/lib/index.react';

const AXAImageUploadReact = createAXAImageUploadReact(createElement);

export default AXAImageUploadReact;
```

```js
<AXAImageUploadReact onClick={handler} />
```

### Pure HTML pages

Import the image-upload-defining script and use a image-upload like this:

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
    <axa-image-upload></axa-image-upload>
    <script src="node_modules/@axa-ch/image-upload/dist/index.js"></script>
  </body>
</html>
```

## Properties

### Variant

| Attribute                         | Details                                         |
| --------------------------------- | ----------------------------------------------- |
| `inputFileText="Upload file"`     | Text in the input-file component                |
| `maxSizeOfSingleFileMB="10"`      | Maximal size of a single file in mb             |
| `maxSizeOfAllFilesMB="15"`        | Maximal size of a all files together in mb      |
| `maxNumberOfFiles="10"`           | Maximal number of files                         |
| `showImageOverview="false"`       | Switch between normal view and image overview   |
| `icon="upload-cloud"`             | Specify the upload icon in input-file component |
| `finalFiles="foo"`                | Returns compressed and converted images         |
| `wrongFiles="foo"`                | Returns wrong files                             |
| `errorStatusText="Error occured"` | Specify the caption for wrong files             |
| `deleteStatusText="Delete"`       | Specify the caption when hovering over a file   |
| `addStatusText="Add more"`        | Specify the caption of dashed input-file        |

### Bar

The attribute `bar` specifies...

### onClick

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
