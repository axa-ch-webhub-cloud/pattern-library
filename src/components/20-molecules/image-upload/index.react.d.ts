import React from 'react';

interface AXAImageUploadProps {
  inputFileText?: String;
  maxSizeOfSingleFileMB?: Number;
  maxSizeOfAllFilesMB?: Number;
  maxNumberOfFiles?: Number;
  showImageOverview?: Boolean;
  icon?: String;
  deleteStatusText?: String;
  addStatusText?: String;
  fileToBigStatusText?: String;
  filesToBigStatusText?: String;
  toManyFilesStatusText?: String;
  embedded?: Boolean;
  onClick?: () => void;
}

declare function createAXAImageUpload(
  createElement: typeof React.createElement
): React.ComponentType<AXAImageUploadProps>;

export = createAXAImageUpload;
