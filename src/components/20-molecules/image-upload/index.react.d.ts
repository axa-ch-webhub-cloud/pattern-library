import React from 'react';

interface AXAImageUploadProps {
  inputFileText?: String;
  maxSizeFileMB?: Number;
  maxNumberOfFiles?: Number;
  showImageOverview?: Boolean;
  onClick?: () => void;
}

declare function createAXAImageUpload(
  createElement: typeof React.createElement
): React.ComponentType<AXAImageUploadProps>;

export = createAXAImageUpload;
