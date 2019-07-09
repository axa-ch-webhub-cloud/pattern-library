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

| Attribute                          | Details                                         |
| ---------------------------------- | ----------------------------------------------- |
| `inputFileText="Upload file"`      | Text in the input-file component                |
| `maxSizeOfSingleFileMegaByte="10"` | Maximal size of a single file in mb             |
| `maxSizeOfAllFilesMegaByte="15"`   | Maximal size of a all files together in mb      |
| `maxNumberOfFiles="10"`            | Maximal number of files                         |
| `showImageOverview="false"`        | Switch between normal view and image overview   |
| `icon="cloud-upload"`              | Specify the upload icon in input-file component |
| `errorStatusText="Error occurred"` | Specify the caption for wrong files             |
| `deleteStatusText="Delete"`        | Specify the caption when hovering over a file   |
| `addStatusText="Add more"`         | Specify the caption of dashed box               |

### inputFileText

The attribute `inputFileText` specifies the text witch appears next to the icon in the [axa-input-file](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/input-file/README.md).

### maxSizeOfSingleFileMegaByte

The attribute `maxSizeOfSingleFileMegaByte` specifies the maximal size a single file can have. A file which is to big gets displayed as a wrong file.

### maxSizeOfAllFilesMegaByte

The attribute `maxSizeOfAllFilesMegaByte` specifies the maximal size all files together can have. Every File that is over the limit gets displayed as a wrong file.

### maxNumberOfFiles

The attribute `maxNumberOfFiles` specifies the maximal number of files. Every File that is over the limit will not be displayed. _TODO_

### showImageOverview

The attribute `showImageOverview` turns to the value true as soon as one file is selected. It turns false again when all files are removed through the user.

### icon

The attribute `icon` specifies the icon in the [axa-input-file](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/input-file/README.md). Default is "cloud-upload".

### errorStatusText

The attribute `errorStatusText` specifies the text under a selected file with an error.

### deleteStatusText

The attribute `deleteStatusText` specifies the text that appears when hovering over a file.

### addStatusText

The attribute `addStatusText` specifies the text under the dashed box appearing after the last file.

### onClick TODO for all Events

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
