import withReact from '../../../utils/with-react';
import AXAImageUpload from './index';

export default createElement => ({
  inputFileText = 'Upload file',
  maxSizeOfSingleFileMB = 15,
  maxSizeOfAllFilesMB = 20,
  maxNumberOfFiles = 10,
  showImageOverview = false,
  icon = 'upload-cloud',
  finalFiles = [],
  wrongFiles = [],
  errorStatusText = 'Error occured',
  deleteStatusText = 'Delete',
  addStatusText = 'Add more',
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
      finalFiles,
      wrongFiles,
      errorStatusText,
      deleteStatusText,
      addStatusText,
    },
    children
  );
