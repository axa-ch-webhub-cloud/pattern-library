/* global document */
import { number, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { iconList } from '../../../10-atoms/icon/icon-list';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAFileUploadReact from './AXAFileUploadReact';

storiesOf('Examples/File Upload/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme,
    changelog,
  })
  .add('Story', () => {
    const wrapperWidth = text('Width', '455px');
    const sizeSliderOptions = {
      range: true,
      min: 1,
      max: 500,
      step: 10,
    };
    const numberOfFilesSliderOptions = {
      range: true,
      min: 1,
      max: 20,
      step: 1,
    };
    const inputFileText = text('inputFileText', 'Upload file');
    const maxSizeOfSingleFileKB = number(
      'maxSizeOfSingleFileKB',
      100,
      sizeSliderOptions
    );
    const maxSizeOfAllFilesKB = number(
      'maxSizeOfAllFilesKB',
      500,
      sizeSliderOptions
    );
    const maxNumberOfFiles = number(
      'maxNumberOfFiles',
      10,
      numberOfFilesSliderOptions
    );
    const deleteStatusText = text('deleteStatusText', 'Delete');
    const addStatusText = text('addStatusText', 'Add more');
    const fileTooBigStatusText = text(
      'fileTooBigStatusText',
      `File size exceeds maximum size`
    );
    const filesTooBigStatusText = text(
      'filesTooBigStatusText',
      `File sizes exceed maximum size`
    );
    const tooManyFilesStatusText = text(
      'tooManyFilesStatusText',
      `You exceeded the maximum number of files`
    );
    const orText = text('orText', 'or');
    const infoText = text('infoText', 'Drag and drop to upload your file');
    const wrongFileTypeStatusText = text(
      'wrongFileTypeText',
      'Your file does not correspond with our allowed file-types'
    );
    const icon = select('icon', iconList, 'cloud-upload');
    const headerText = text(
      'headerText',
      'The following files are being transferred:'
    );

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
          onFileDrop={() => {
            document.querySelector(
              '#m-fileupload-story__events'
            ).textContent = `File dropped on ${new Date()}`;
          }}
          onFileRemove={() => {
            document.querySelector(
              '#m-fileupload-story__events'
            ).textContent = `File removed on ${new Date()}`;
          }}
        >
          {headerText}
        </AXAFileUploadReact>
        <div>
          <p>Events:</p>
          <p id="m-fileupload-story__events">-</p>
        </div>
      </div>,
      div
    );
    return div;
  });
