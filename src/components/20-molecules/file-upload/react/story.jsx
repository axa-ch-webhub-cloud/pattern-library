/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { iconList } from '../../../10-atoms/icon/icon-list';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAFileUploadReact from './AXAFileUploadReact';

export default {
  title: 'Examples/File Upload/React',
  parameters: {
    readme,
    changelog,
  },
};

export const Story = ({
  wrapperWidth,
  inputFileText,
  maxSizeOfSingleFileKB,
  maxSizeOfAllFilesKB,
  maxNumberOfFiles,
  deleteStatusText,
  addStatusText,
  fileTooBigStatusText,
  filesTooBigStatusText,
  tooManyFilesStatusText,
  orText,
  infoText,
  wrongFileTypeStatusText,
  icon,
  headerText,
}) => {
  const div = document.createElement('div');
  ReactDOM.render(
    <div style={{ width: wrapperWidth }}>
      <AXAFileUploadReact
        inputFileText={inputFileText}
        maxSizeOfSingleFileKB={maxSizeOfSingleFileKB}
        maxSizeOfAllFilesKB={maxSizeOfAllFilesKB}
        maxNumberOfFiles={maxNumberOfFiles}
        deleteStatusText={deleteStatusText}
        addStatusText={addStatusText}
        fileTooBigStatusText={fileTooBigStatusText}
        filesTooBigStatusText={filesTooBigStatusText}
        tooManyFilesStatusText={tooManyFilesStatusText}
        orText={orText}
        infoText={infoText}
        wrongFileTypeStatusText={wrongFileTypeStatusText}
        icon={icon}
      >
        {headerText}
      </AXAFileUploadReact>
    </div>,
    div
  );
  return div;
};

Story.args = {
  wrapperWidth: '455px',
  inputFileText: 'Upload file',
  maxSizeOfSingleFileKB: 100,
  maxSizeOfAllFilesKB: 500,
  maxNumberOfFiles: 20,
  deleteStatusText: 'Delete',
  addStatusText: 'Add more',
  fileTooBigStatusText: 'File size exceeds maximum size',
  filesTooBigStatusText: 'File sizes exceed maximum size',
  tooManyFilesStatusText: 'You exceeded the maximum number of files',
  orText: 'or',
  infoText: 'Drag and drop to upload your file',
  wrongFileTypeStatusText:
    'Your file does not correspond with our allowed file-types',
  icon: 'cloud-upload',
  headerText: 'The following files are going to be uploaded',
};

Story.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: iconList,
    },
  },
  maxSizeOfSingleFileKB: {
    control: {
      type: 'range',
      min: 1,
      max: 5000,
      step: 10,
    },
  },
  maxSizeOfAllFilesKB: {
    control: {
      type: 'range',
      min: 1,
      max: 30000,
      step: 10,
    },
  },
  maxNumberOfFiles: {
    control: {
      type: 'range',
      min: 1,
      max: 20,
      step: 1,
    },
  },
  headerText: { name: 'set header text' },
};
