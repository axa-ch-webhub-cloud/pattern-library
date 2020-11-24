import React from 'react';

export interface AXAFileUploadProps {
  inputFileText?: string;
  maxSizeOfSingleFileKB?: number;
  maxSizeOfAllFilesKB?: number;
  maxNumberOfFiles?: number;
  showFileOverview?: boolean;
  accessOriginalFiles?: boolean;
  icon?: string;
  deleteStatusText?: string;
  addStatusText?: string;
  fileTooBigStatusText?: string;
  filesTooBigStatusText?: string;
  tooManyFilesStatusText?: string;
  infoText?: string;
  orText?: string;
  wrongFileTypeStatusText?: string;
  onFileDrop?: () => void;
  onFileRemove?: () => void;
}

declare function createAXAFileUpload(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAFileUploadProps>;

export default createAXAFileUpload;
