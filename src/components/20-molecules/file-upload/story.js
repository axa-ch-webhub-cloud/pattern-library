import { html, render } from 'lit-html';
import { iconList } from '../../10-atoms/icon/icon-list';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/File Upload',
  parameters: {
    readme,
    changelog,
  },
};

export const FileUpload = ({
  wrapperWidth,
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
  preventFileCompression,
  icon,
  headerText,
}) => {
  const wrapper = document.createElement('div');

  const template = html`
    <div style="width:${wrapperWidth};">
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
        >${headerText}</axa-file-upload
      >
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};
FileUpload.args = {
  wrapperWidth: '455px',
  inputFileText: 'Upload file',
  maxSizeOfSingleFileKB: 100,
  maxSizeOfAllFilesKB: 500,
  maxNumberOfFiles: 20,
  deleteStatusText: 'Delete',
  addStatusText: 'Add more',
  fileTooBigStatusText: 'File size exceeds maximum size',
  filesTooBigStatusText: 'File sizes exceed maximum size',
  tooManyFilesStatusText: 'You exceeded the maximum number of files',
  orText: 'or',
  infoText: 'Drag and drop to upload your file',
  wrongFileTypeStatusText:
    'Your file does not correspond with our allowed file-types',
  icon: 'cloud-upload',
  headerText: 'The following files are being transferred:',
  preventFileCompression: false,
};

FileUpload.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: iconList,
    },
  },
  maxSizeOfSingleFileKB: {
    control: {
      type: 'range',
      min: 1,
      max: 5000,
      step: 10,
    },
  },
  maxSizeOfAllFilesKB: {
    control: {
      type: 'range',
      min: 1,
      max: 30000,
      step: 10,
    },
  },
  maxNumberOfFiles: {
    control: {
      type: 'range',
      min: 1,
      max: 20,
      step: 1,
    },
  },
};
