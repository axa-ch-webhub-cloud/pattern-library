# File upload

A component used for uploading files in forms.

## Requirements

- Design requirements on [zeplin](https://zpl.io/2ZrKE7G).
- The only filetypes allowed are `image/jpg, image/jpeg, application/pdf, image/png`.
- To upload a file, you either drag an drop your file, or click the input-file component.
- The file-upload has two states. The start view and the file overview. The start view contains a text which asks the user to drag and drop a file, an icon consisting of four subjects and the input-file-component with an icon. The file overview shows all files ready to upload. Each file has a caption and when hovering over it displays the bin-icon to delete the file. Is the file to big or is of the wrong type, a red icon will be displayed and the caption will be replaced through the red error message. Nevertheless, when hovering over, it shows the bin-icon.
- To remove a file, the user has to hover over a file and click it.
- If a filename or a status text is too long it's going to be cut off and three dots will be added at the end. To show the full text, the user has to hover over.
- After the file limit is reached, the dropzone is not longer active and the input-file gets deactivated.
- If the file limit exceeds, the over-limit files are cut off and a matching error message is displayed under the file-upload.
- When all files together exceed the maximum file size, a matching error message is displayed under the file-upload.
- The file overview is scrollable after the files use more than 2 rows.
- All images are compressed and .png are converted to .jpeg.
- There will be a thumbnail for all images selected. For other types (for now only .pdf) an icon will represent the file.

## Request uploaded files:

```js
const { files } = document.querySelector('axa-file-upload');

if (files.length > 0) {
  files.map(file => {
    const reader = new FileReader();

    reader.onload = file => {
      // success
    };

    reader.onerror = evt => {
      // error
    };

    reader.readAsDataURL(file);
  });
}
```

## Properties

### Variant

| Attribute                                   | Details                                                                  |
| ------------------------------------------- | ------------------------------------------------------------------------ |
| `inputFileText="Upload file"`               | Text in the input-file component                                         |
| `maxSizeOfSingleFileKB="10"`                | Maximal size of a single, already compromised file in KB                 |
| `maxSizeOfAllFilesKB="15"`                  | Maximal size of all compromised files together in KB                     |
| `maxNumberOfFiles="10"`                     | Maximal number of files                                                  |
| `showFileOverview="false"`                  | Switch between normal view and file overview                             |
| `icon="cloud-upload"`                       | Specify the upload icon in input-file component                          |
| `fileTooBigStatusText="Error occurred"`     | Specify the error message for too big files                              |
| `tooManyFilesStatusText="Error occurred"`   | Specify the error message for too many files                             |
| `filesTooBigStatusText="Error occurred"`    | Specify the error message when maximum size of all files is exceeded     |
| `deleteStatusText="Delete"`                 | Specify the caption when hovering over a file                            |
| `addStatusText="Add more"`                  | Specify the caption of dashed box                                        |
| `infoText="drag and drop your files here"`  | Specify the text on the start view                                       |
| `orText="or"`                               | Specify the text on the start view box                                   |
| `wrongFileTypeStatusText="Wrong file-type"` | Specify the error message for dropped files with wrong file-type         |
| `allowedFileTypes="image/jpg"`              | Determindes the allowed file types. If empty, every file type is allowed |

### inputFileText

The attribute `inputFileText` specifies the text witch appears next to the icon in the [axa-input-file](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/input-file/README.md).

### maxSizeOfSingleFileKB

The attribute `maxSizeOfSingleFileKB` specifies the maximum size a single compressed file can have. A file which is too big gets displayed as a wrong file.

### maxSizeOfAllFilesKB

The attribute `maxSizeOfAllFilesKB` specifies the maximal size all compressed files together can have. Every file that is over the limit gets displayed as a wrong file.

### maxNumberOfFiles

The attribute `maxNumberOfFiles` specifies the maximum number of files. Every File that is over the limit will not be displayed.

### icon

The attribute `icon` specifies the icon in the [axa-input-file](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/input-file/README.md). Default is "cloud-upload".

### fileTooBigStatusText

The attribute `fileTooBigStatusText` specifies the error text under a file, which is bigger than allowed. Recommended is, to show in the message, what the `maxSizeOfSingleFileKB` is.

### tooManyFilesStatusText

The attribute `tooManyFilesStatusText` specifies the global error text, when the maximum number of files is exceeded. Recommended is, to show in the message what the `maxNumberOfFiles` is.

### filesTooBigStatusText

The attribute `filesTooBigStatusText` specifies the global error text, when all files together exceed the maximum file size.
Recommended is, to show in the message, what the `maxSizeOfAllFilesKB` is.

### deleteStatusText

The attribute `deleteStatusText` specifies the text that appears, when hovering over a file.

### addStatusText

The attribute `addStatusText` specifies the text under the dashed box, appearing after the last file.

### infoText

The attribute `infoText` specifies the text in the dropzone. It draws attention to drop a file.

### orText

The attribute `orText` specifies the orange text in the dropzone.

### wrongFileTypeStatusText

The attribute `wrongFileTypeStatusText` specifies the global error text, when a file without a valid file-type is dropped.

### preventFileCompression

The boolean attribute provides to user with the orignal files. If set to `false` the user receives compromised images and converted files.

### onFileDrop

The attribute `onFileDrop` function executes, as soon as the user dropped one or multiple files by drag & drop.

### onFileRemove

The attribute `onFileRemove` function executes, as soon as the user removed a file from the file-upload.

### allowedFileTypes

In the `allowedFileTypes` attribute, you can declare the allowed file types that a user can upload (ex: only pdf's are allowed). If the attribute is empty, every file type is allowed.

### onChange

The attribute `onChange` function executes as soon as the user removes or adds new files. Adding new files includes files from drag & drop or the `<axa-input-file>`. Custom data (files) gets passed and can be accessed over `e.detail`.
