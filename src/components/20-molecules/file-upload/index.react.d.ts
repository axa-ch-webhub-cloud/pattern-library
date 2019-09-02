import React from 'react';

interface AXAFileUploadProps {
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
}

declare function createAXAFileUpload(
  createElement: typeof React.createElement
): React.ComponentType<AXAFileUploadProps>;

export = createAXAFileUpload;
