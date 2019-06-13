import withReact from '../../../utils/with-react';
import AXAImageUpload from './index';

export default createElement => ({
  inputFileText = 'Upload file',
  maxSizeFileMB = 15,
  maxNumberOfFiles = 10,
  showImageOverview = false,
  icon = 'upload-cloud',
  children,
}) =>
  withReact(createElement)(
    AXAImageUpload.tagName,
    {
      inputFileText,
      maxSizeFileMB,
      maxNumberOfFiles,
      showImageOverview,
      icon,
    },
    children
  );
