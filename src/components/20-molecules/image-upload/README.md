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

| Attribute                                | Details                                               |
| ---------------------------------------- | ----------------------------------------------------- |
| `inputFileText="Upload file"`            | Text in the input-file component                      |
| `maxSizeOfSingleFileMB="10"`             | Maximal size of a single file in mb                   |
| `maxSizeOfAllFilesMB="15"`               | Maximal size of a all files together in mb            |
| `maxNumberOfFiles="10"`                  | Maximal number of files                               |
| `showImageOverview="false"`              | Switch between normal view and image overview         |
| `icon="cloud-upload"`                    | Specify the upload icon in input-file component       |
| `fileToBigStatusText="Error occurred"`   | Specify the error message for to big files            |
| `toManyFilesStatusText="Error occurred"` | Specify the error message for to many files           |
| `filesToBigStatusText="Error occurred"`  | Specify the error message when maximal size of all fi |
| `deleteStatusText="Delete"`              | Specify the caption when hovering over a file         |
| `addStatusText="Add more"`               | Specify the caption of dashed box                     |
| `embedded=true`                          | Suppresses the default space around the image-upload  |

### inputFileText

The attribute `inputFileText` specifies the text witch appears next to the icon in the [axa-input-file](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/input-file/README.md).

### maxSizeOfSingleFileMB

The attribute `maxSizeOfSingleFileMB` specifies the maximal size a single file can have. A file which is to big gets displayed as a wrong file.

### maxSizeOfAllFilesMB

The attribute `maxSizeOfAllFilesMB` specifies the maximal size all files together can have. Every File that is over the limit gets displayed as a wrong file.

### maxNumberOfFiles

The attribute `maxNumberOfFiles` specifies the maximal number of files. Every File that is over the limit will not be displayed.

### showImageOverview

The attribute `showImageOverview` turns to the value true as soon as one file is selected. It turns false again when all files are removed through the user.

### icon

The attribute `icon` specifies the icon in the [axa-input-file](https://github.com/axa-ch/patterns-library/blob/develop/src/components/10-atoms/input-file/README.md). Default is "cloud-upload".

### fileToBigStatusText

The attribute `fileToBigStatusText` specifies the error text under a file, which is bigger than allowed.

### toManyFilesStatusText

The attribute `toManyFilesStatusText` specifies the global error text when the maximal number of files is exceeded.

### filesToBigStatusText

The attribute `filesToBigStatusText` specifies the global error text when all files together exceed the maximal file size.

### deleteStatusText

The attribute `deleteStatusText` specifies the text that appears when hovering over a file.

### addStatusText

The attribute `addStatusText` specifies the text under the dashed box appearing after the last file.

### embedded

When true, the Boolean attribute `embedded` suppresses the default space around the image-upload otherwise reserved for showing valid/error UI states.

### onClick TODO for all Events

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
