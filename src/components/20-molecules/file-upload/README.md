# File upload

A component used for uploading files in forms.

## Requirements

- Design requirements are on [zeplin](https://zpl.io/2ZrKE7G).
- To upload a file, you either drag &amp; drop your file or click on the embedded input-file component.
- The file-upload component implements two views, the start view and the file overview. The start view contains a text which asks the user to drag and drop a file, an icon consisting of four subjects and the input-file-component with an icon. The file overview shows all files ready to upload. Each file has a caption, which &mdash; when hovered over &mdash; displays the bin-icon to delete the file. If the file is too big in size or is of the wrong type, a red icon will be displayed and the caption will be replaced by a red error message. The hovering-displays-bin-icon behaviour is retained, however.
- To remove a file, the user has to hover over a file and click it.
- If a filename or a status text is too long it's going to be cut off and three dots will be added at the end. To show the full text, the user has to hover over it.
- After the file limit is reached, the dropzone is not longer active and the embedded input-file component gets deactivated.
- If the file limit is exceeded, the files over the limit are disregarded and a matching error message is displayed under the file-upload component.
- When all files, taken together, exceed the maximum file size, an appropriate error message is displayed under the file-upload component.
- The file overview is scrollable after the files uploaded sofar use more than 2 rows.
- By default, all images are compressed and .png are converted to .jpeg.
- For images, a thumbnail will visually represent each file uploaded. For other known types (for now only .pdf), an icon will visually represent the file.

## Code snippet to request uploaded files from axa-file-upload:

```js
const { files } = document.querySelector('axa-file-upload');

if (files.length > 0) {
  files.map((file) => {
    const reader = new FileReader();

    reader.onload = (file) => {
      // success
    };

    reader.onerror = (evt) => {
      // error
    };

    reader.readAsDataURL(file);
  });
}
```

## Properties

### inputFileText

The attribute `inputFileText` specifies the text which appears next to the icon in the [axa-input-file](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/input-file/README.md).

### maxSizeOfSingleFileKB

The attribute `maxSizeOfSingleFileKB` specifies the maximum size a single compressed file can have. A file which is too big is visually flagged as a wrong file.

### maxSizeOfAllFilesKB

The attribute `maxSizeOfAllFilesKB` specifies the maximal size all compressed files together can have. Every file that is over the limit is visually flagged as a wrong file.

### maxNumberOfFiles

The attribute `maxNumberOfFiles` specifies the maximum number of files. Every file that is over the limit will **not** be displayed.

### icon

The attribute `icon` specifies the icon in the [axa-input-file](https://github.com/axa-ch-webhub-cloud/pattern-library/blob/develop/src/components/10-atoms/input-file/README.md). The default is the "cloud-upload" icon.

### fileTooBigStatusText

The attribute `fileTooBigStatusText` specifies the error text under a file which exceeds the maximum size specified. It is recommended to mention the `maxSizeOfSingleFileKB` value in the error text.

### tooManyFilesStatusText

The attribute `tooManyFilesStatusText` specifies the global error text, when the maximum number of files is exceeded. It is recommended to mention the `maxNumberOfFiles` value in the global error text.

### filesTooBigStatusText

The attribute `filesTooBigStatusText` specifies the global error text, when the sum of all file sizes exceeds the `maxSizeOfAllFilesKB` value.
It is recommended to mention the `maxSizeOfAllFilesKB` value in the global error text.

### deleteStatusText

The attribute `deleteStatusText` specifies the text that appears when hovering over a file.

### addStatusText

The attribute `addStatusText` specifies the text under the dashed box, appearing after the last file.

### infoText

The attribute `infoText` specifies the text in the dropzone. It is meant to draw attention to the purpose of the dropzone, which is to drop a file there.

### orText

The attribute `orText` specifies the orange text in the dropzone.

### wrongFileTypeStatusText

The attribute `wrongFileTypeStatusText` specifies the global error text when a file without a valid file type is dropped in the dropzone.

### preventFileCompression

The Boolean attribute `preventFileCompression`, when truthy, instructs the component to provide the original files uploaded. By default, it is set to `false`, thus the user receives compressed images and converted files.

### onFileDrop

The function-valued callback property `onFileDrop` is called as soon as the user drops one or more files in the dropzone via drag &amp; drop. As its sole parameter the original native `drop` event is passed.

### onFileRemove

The function-valued callback property `onFileRemove` is called (without parameters) as soon as the user *removes* a previously uploaded file from the file-upload component.

### allowedFileTypes

In the string-valued `allowedFileTypes` attribute, you can restrict the allowed file types that a user can upload. For example, you might specify that only PDFs are allowed via the value `application/pdf`. If the attribute value is empty, every file type is allowed. The allowed file types must be formatted as valid MIME types. In case of multiple allowed file types, a comma (,) separator must be used. As an example value, `text/plain, image/jpeg, image/png` allows plain text or PNG or JPEG images to be uploaded.

### invalid

The read-only Boolean attribute `invalid` is true whenever the component is in an "invalid" state. You might use it e.g. to disable or enable form submission.

### onChange

The function-valued `onChange` callback property is executed as soon as the user removes or adds new files. Adding new files encompasses files added via drag &amp; drop as well as files added via the embedded `<axa-input-file>` dialogue. As its sole parameter a `files` array of Blob objects is passed to the callback, having the Typescript signature `files: Blob[]`.

### onValidityChange

The function-valued callback property `onValidityChange` will be called whenever the `invalid` status value changes.
The parameters passed are a Boolean `invalid` and a `globalErrorMessage` string (`undefined` if not set).

### invalidate

This component-instance method has the signature `invalidate(file, clear, globalErrorMessage)`, where `file` is
a [File]() object enriched with properties `id` (a string UUID) and `errorMessage` (a per-file string), `clear` returns a file to valid status when truthy (default: false), and `globalErrorMessage` sets the error-message string for the entire component (default: per-file `errorMessage`).

Its intended use is for external validation of files, e.g. when using server-side malware scanning:

```js
const ref = document.querySelector('axa-file-upload');
// ... assume user uploads 3 files,
// server identifies the 2nd file as invalid
const file = ref.files[1];
file.errorMessage = 'Malware detected.';
// set UI into invalid state for 2nd file
ref.invalidate(file, false, 'Attempt to upload file(s) containing malware');
// declare file as valid again
ref.invalidate(file, true);
```

## Events

### reset

The `reset` event, when dispatched on `<axa-input-file>`, causes all added files to be removed in one go.
It has the exact same consequences as a sequence of manual 1-file removals, starting with the first and proceeding till the last. If no files were added in the first place, the event has no consequences.

The `reset` component-instance method is equivalent to the aforementioned `reset` event. In fact, the `reset` event is implemented using the method. Choose whichever is more convenient to you. Naming and functionality are loosely modelled after [HTMLFormElement.reset()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset).

Here is an example:

```js
const ref = document.querySelector('axa-file-upload');

ref.dispatchEvent(new Event('reset')); // event-based reset
ref.reset(); // equivalent, method-based
```
