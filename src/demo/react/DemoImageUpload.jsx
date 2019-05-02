import React, { createElement } from 'react';
import createAXAImageUploadReact from '../../components/20-molecules/image-upload/index.react';

const AXAImageUploadReact = createAXAImageUploadReact(createElement);

const DemoImageUpload = () => {
  return (
    <div style={{width: '440px'}}>
      <p>callback props are possible, but they aren't realized yet:</p>
      <AXAImageUploadReact title="Image Upload" fileButtonText="Datei hochladen" />
    </div>
  );
};

export default DemoImageUpload;
