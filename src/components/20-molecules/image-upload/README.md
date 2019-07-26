# Image upload

image-upload is a component used for uploading files in forms.

## Requirements

- Design requirements on [zeplin](https://zpl.io/2ZrKE7G)
- The only filetypes allowed are `image/jpg, image/jpeg, application/pdf, image/png`
- The image-upload has 2 states. The start view and the file overview. The start view contains a text which asks the user to drag and drop a file, an icon consisting of 4 subjects and the input-file-component with an icon. The file overview shows all uploaded files. Each file has a caption and when hovering over it displays the bin-icon to delete the file. Is the file to big or has other file specific, a red icon will be displayed and the caption will be replaced through the red error message. Nevertheless when hovering over it shows the bin-icon.
- To remove a file, the user has to hover over a file and click it
- Is a filename or a status text to long it's going to be cut off and 3 dots will be added at the end. To show the full text, the user has to hover over.
- After the file limit is reached, the dropzone is not longer active and the input-file gets deactivated
- Is the file limit exceeded, the unused file are cut off and a matching error message is displayed under the image-upload
- When all files together exceed the maximal file size a matching error message is displayed under the image-upload
- The file overview is scrollable after the files use more than 2 rows
- All files are compromised and .png are converted to .jpg

### Mobile requirements

- The mobile version isn't implemented and the requirements aren't defined yet

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

| Attribute                                  | Details                                               |
| ------------------------------------------ | ----------------------------------------------------- |
| `inputFileText="Upload file"`              | Text in the input-file component                      |
| `maxSizeOfSingleFileMB="10"`               | Maximal size of a single file in mb                   |
| `maxSizeOfAllFilesMB="15"`                 | Maximal size of a all files together in mb            |
| `maxNumberOfFiles="10"`                    | Maximal number of files                               |
| `showImageOverview="false"`                | Switch between normal view and image overview         |
| `icon="cloud-upload"`                      | Specify the upload icon in input-file component       |
| `fileTooBigStatusText="Error occurred"`    | Specify the error message for to big files            |
| `tooManyFilesStatusText="Error occurred"`  | Specify the error message for to many files           |
| `filesTooBigStatusText="Error occurred"`   | Specify the error message when maximal size of all fi |
| `deleteStatusText="Delete"`                | Specify the caption when hovering over a file         |
| `addStatusText="Add more"`                 | Specify the caption of dashed box                     |
| `infoText="drag and drop your files here"` | Specify the text on the start view                    |
| `orText="or"`                              | Specify the text on the start view box                |

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

### fileTooBigStatusText

The attribute `fileTooBigStatusText` specifies the error text under a file, which is bigger than allowed. Recommended is the following pattern of the message: Recommended is the following pattern of the message: `File size exceeds ${ this.maxSizeOfSingleFileMB }MB`

### tooManyFilesStatusText

The attribute `tooManyFilesStatusText` specifies the global error text when the maximal number of files is exceeded.
Recommended is the following pattern of the message: `You exceeded the maximum number of files: ${ this.maxNumberOfFiles }`

### filesTooBigStatusText

The attribute `filesTooBigStatusText` specifies the global error text when all files together exceed the maximal file size.
Recommended is the following pattern of the message: `File sizes exceed ${ this.maxSizeOfAllFilesMB }MB`

### deleteStatusText

The attribute `deleteStatusText` specifies the text that appears when hovering over a file.

### addStatusText

The attribute `addStatusText` specifies the text under the dashed box appearing after the last file.

### onClick TODO for all Events

The function-valued attribute `onClick` can be used as a callback prop for React and other frameworks.
