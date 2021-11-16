import React from 'react';

export interface AXAFileUploadProps {
  inputFileText?: string;
  maxSizeOfSingleFileKB?: number;
  maxSizeOfAllFilesKB?: number;
  maxNumberOfFiles?: number;
  preventFileCompression?: boolean;
  icon?: string;
  deleteStatusText?: string;
  addStatusText?: string;
  fileTooBigStatusText?: string;
  filesTooBigStatusText?: string;
  tooManyFilesStatusText?: string;
  infoText?: string;
  orText?: string;
  wrongFileTypeStatusText?: string;
  allowedFileTypes?: string;
  onFileDrop?: () => void;
  onFileRemove?: () => void;
  onChange?: () => void;
  reset?: () => void;
  invalidate?: (file:object, clear:boolean?, globalErrorMessage:string?) => void;
}

declare function createAXAFileUpload(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAFileUploadProps>;

export default createAXAFileUpload;
