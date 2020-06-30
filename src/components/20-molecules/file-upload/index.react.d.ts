import React from 'react';

export interface AXAFileUploadProps {
  inputFileText?: string;
  maxSizeOfSingleFileKB?: number;
  maxSizeOfAllFilesKB?: number;
  maxNumberOfFiles?: number;
  showFileOverview?: boolean;
  icon?: string;
  deleteStatusText?: string;
  addStatusText?: string;
  fileTooBigStatusText?: string;
  filesTooBigStatusText?: string;
  tooManyFilesStatusText?: string;
  infoText?: string;
  orText?: string;
  wrongFileTypeStatusText?: string;
}

declare function createAXAFileUpload(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAFileUploadProps>;

export default createAXAFileUpload;
