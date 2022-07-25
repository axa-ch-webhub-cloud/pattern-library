import { iconList } from '../../10-atoms/icon/icon-list';

export const args = {
  width: '455px',
  inputFileText: 'Upload file',
  maxSizeOfSingleFileKB: 100,
  maxSizeOfAllFilesKB: 500,
  maxNumberOfFiles: 10,
  deleteStatusText: 'Delete',
  addStatusText: 'Add more',
  allowedFileTypes: 'image/jpg, image/jpeg, application/pdf, image/png',
  fileTooBigStatusText: 'File size exceeds maximum size',
  filesTooBigStatusText: 'File sizes exceed maximum size',
  tooManyFilesStatusText: 'You exceeded the maximum number of files',
  orText: 'or',
  infoText: 'Drag and drop to upload your file',
  wrongFileTypeStatusText:
    'Your file does not correspond with our allowed file-types',
  icon: 'cloud-upload',
  slot: 'The following files are being transferred:',
  preventFileCompression: false,
};

export const argTypes = {
  width: { control: 'text' },
  inputFileText: { control: 'text' },
  maxSizeOfSingleFileKB: { control: 'number' },
  maxSizeOfAllFilesKB: { control: 'number' },
  maxNumberOfFiles: { control: 'number' },
  deleteStatusText: { control: 'text' },
  addStatusText: { control: 'text' },
  allowedFileTypes: { control: 'text' },
  fileTooBigStatusText: { control: 'text' },
  filesTooBigStatusText: { control: 'text' },
  tooManyFilesStatusText: { control: 'text' },
  orText: { control: 'text' },
  infoText: { control: 'text' },
  wrongFileTypeStatusText: { control: 'text' },
  icon: {
    control: 'select',
    options: Object.keys(iconList),
    mapping: iconList,
    labels: iconList,
  },
  slot: { control: 'text' },
  preventFileCompression: { control: 'boolean' },
};
