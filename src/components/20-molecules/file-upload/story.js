import { html } from 'lit';
import { args, argTypes } from './story.args.js';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Components/File Upload',
  parameters: {
    readme,
    usage: {
      propsReact: 'onClick={() => alert("you clicked me")}',
    },
    changelog,
  },
  args,
  argTypes,
};

export const FileUpload = ({
  width,
  inputFileText,
  maxSizeOfSingleFileKB,
  maxSizeOfAllFilesKB,
  maxNumberOfFiles,
  deleteStatusText,
  addStatusText,
  fileTooBigStatusText,
  filesTooBigStatusText,
  tooManyFilesStatusText,
  orText,
  infoText,
  wrongFileTypeStatusText,
  icon,
  slot,
  preventFileCompression,
  allowedFileTypes,
}) => html`
  <div style="width:${width};">
    <axa-file-upload
      inputFileText="${inputFileText}"
      maxSizeOfSingleFileKB="${maxSizeOfSingleFileKB}"
      maxSizeOfAllFilesKB="${maxSizeOfAllFilesKB}"
      maxNumberOfFiles="${maxNumberOfFiles}"
      deleteStatusText="${deleteStatusText}"
      addStatusText="${addStatusText}"
      fileTooBigStatusText="${fileTooBigStatusText}"
      ?preventFileCompression="${preventFileCompression}"
      filesTooBigStatusText="${filesTooBigStatusText}"
      tooManyFilesStatusText="${tooManyFilesStatusText}"
      orText="${orText}"
      infoText="${infoText}"
      wrongFileTypeStatusText="${wrongFileTypeStatusText}"
      icon="${icon}"
      allowedFileTypes="${allowedFileTypes}"
      >${slot}</axa-file-upload
    >
  </div>
`;
