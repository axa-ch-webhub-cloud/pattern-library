import withReact from '../../../utils/with-react';
import AXAImageUpload from './index';

export default createElement => ({ title = 'Image Upload', fileButtonText = 'Datei hochlanden', showImageOverview = false }) =>
  withReact(createElement)(
    AXAImageUpload.tagName,
    {
      title,
      fileButtonText,
      showImageOverview,
    },
  );
