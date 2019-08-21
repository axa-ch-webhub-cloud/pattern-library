import withReact from '../../../utils/with-react';
import AXAImageUpload from './index';

export default createElement => ({
  inputFileText = 'Upload file',
  maxSizeOfSingleFileKB = 100,
  maxSizeOfAllFilesKB = 500,
  maxNumberOfFiles = 10,
  showFileOverview = false,
  icon = 'cloud-upload',
  deleteStatusText = 'Delete',
  addStatusText = 'Add more',
  fileTooBigStatusText = `File size exceeds maximum size`,
  filesTooBigStatusText = `File sizes exceed maximum size`,
  tooManyFilesStatusText = `You exceeded the maximum number of files`,
  infoText = 'Drag and drop to upload your file',
  orText = 'or',
  children,
}) =>
  withReact(createElement)(
    AXAImageUpload.tagName,
    {
      inputFileText,
      maxSizeOfSingleFileKB,
      maxSizeOfAllFilesKB,
      maxNumberOfFiles,
      showFileOverview,
      icon,
      deleteStatusText,
      addStatusText,
      fileTooBigStatusText,
      filesTooBigStatusText,
      tooManyFilesStatusText,
      infoText,
      orText,
    },
    children
  );
