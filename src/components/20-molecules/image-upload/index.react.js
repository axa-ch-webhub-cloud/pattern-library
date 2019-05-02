import withReact from '../../../utils/with-react';
import AXAImageUpload from './index';

export default createElement => ({ title = 'Image Upload', fileButtonText = 'Datei hochlanden' }) =>
  withReact(createElement)(
    AXAImageUpload.tagName,
    {
      title,
      fileButtonText,
    },
  );
