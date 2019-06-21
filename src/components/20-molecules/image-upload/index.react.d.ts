import React from 'react';

interface AXAImageUploadProps {
  inputFileText?: String;
  maxSizeOfSingleFileMB?: Number;
  maxSizeOfAllFilesMB?: Number;
  maxNumberOfFiles?: Number;
  showImageOverview?: Boolean;
  icon?: String;
  finalFiles?: Object;
  wrongFiles?: Object;
  errorStatusText?: String;
  deleteStatusText?: String;
  onClick?: () => void;
}

declare function createAXAImageUpload(
  createElement: typeof React.createElement
): React.ComponentType<AXAImageUploadProps>;

export = createAXAImageUpload;
