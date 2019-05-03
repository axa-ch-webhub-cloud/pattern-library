import withReact from '../../../utils/with-react';
import AXAImageUpload from './index';

export default createElement => ({
  title = 'Image Upload', 
  fileButtonText = 'Datei hochlanden',
  showImageOverview = false,
  maxFiles = 10
}) =>
  withReact(createElement)(
    AXAImageUpload.tagName,
    {
      title,
      fileButtonText,
      showImageOverview,
      maxFiles,
    },
  );
