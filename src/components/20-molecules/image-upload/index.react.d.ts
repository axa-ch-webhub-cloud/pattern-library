import React from 'react';

interface AXAImageUploadProps {
  inputFileText?: string;
  maxSizeOfSingleFileMB?: number;
  maxSizeOfAllFilesMB?: number;
  maxNumberOfFiles?: number;
  showImageOverview?: boolean;
  icon?: string;
  deleteStatusText?: string;
  addStatusText?: string;
  fileTooBigStatusText?: string;
  filesTooBigStatusText?: string;
  tooManyFilesStatusText?: string;
  infoText?: string;
  orText?: string;
  onClick?: () => void;
}

declare function createAXAImageUpload(
  createElement: typeof React.createElement
): React.ComponentType<AXAImageUploadProps>;

export = createAXAImageUpload;
