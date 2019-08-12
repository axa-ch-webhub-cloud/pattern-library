import withReact from '../../../utils/with-react';
import AXAImageUpload from './index';

export default createElement => ({
  inputFileText = 'Upload file',
  maxSizeOfSingleFileMB = 5,
  maxSizeOfAllFilesMB = 20,
  maxNumberOfFiles = 10,
  showImageOverview = false,
  icon = 'cloud-upload',
  deleteStatusText = 'Delete',
  addStatusText = 'Add more',
  fileTooBigStatusText = `File bigger than ${maxSizeOfSingleFileMB}MB`,
  filesTooBigStatusText = `Files bigger than ${maxSizeOfAllFilesMB}MB`,
  tooManyFilesStatusText = `You exceeded the maximum number of files wich is ${maxNumberOfFiles}`,
  files = [],
  faultyFiles = [],
  infoText = 'Drag and drop to upload your file',
  orText = 'or',
  children,
}) =>
  withReact(createElement)(
    AXAImageUpload.tagName,
    {
      inputFileText,
      maxSizeOfSingleFileMB,
      maxSizeOfAllFilesMB,
      maxNumberOfFiles,
      showImageOverview,
      icon,
      deleteStatusText,
      addStatusText,
      fileTooBigStatusText,
      filesTooBigStatusText,
      tooManyFilesStatusText,
      files,
      faultyFiles,
      infoText,
      orText,
    },
    children
  );
