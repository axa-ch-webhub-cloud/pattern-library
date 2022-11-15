import React from 'react';

export interface AXAFile extends File {
  id: string;
  errorMessage?: string;
}

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
  children?: React.ReactNode;
  onFileDrop?: (event: DragEvent) => void;
  onFileRemove?: () => void;
  onChange?: (files: AXAFile[]) => void;
  reset?: () => void;
  invalidate?: (
    file: object,
    clear?: boolean,
    globalErrorMessage?: string
  ) => void;
  onValidityChange: (invalid: boolean, errorMessage?: string) => void;
}

declare function createAXAFileUpload(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAFileUploadProps>;

export default createAXAFileUpload;
