import withReact from '../../../utils/with-react';
import AXAImageUpload from './index';

export default createElement => ({ inputFileText = 'Upload file', children }) =>
  withReact(createElement)(
    AXAImageUpload.tagName,
    {
      inputFileText,
    },
    children
  );
