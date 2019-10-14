import { storiesOf } from '@storybook/html';
import { text, number, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import { iconList } from '../../10-atoms/icon/icon-list';
import './index';
import Readme from './README.md';

const story = storiesOf('Molecules/File Upload', module);
story.addDecorator(withKnobs);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

story.add('File upload', () => {
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
  const wrapper = document.createElement('div');

  const template = html`
    <div style="width:${wrapperWidth};">
      <axa-file-upload
        inputFileText="${inputFileText}"
        maxSizeOfSingleFileKB="${maxSizeOfSingleFileKB}"
        maxSizeOfAllFilesKB="${maxSizeOfAllFilesKB}"
        maxNumberOfFiles="${maxNumberOfFiles}"
        deleteStatusText="${deleteStatusText}"
        addStatusText="${addStatusText}"
        fileTooBigStatusText="${fileTooBigStatusText}"
        filesTooBigStatusText="${filesTooBigStatusText}"
        tooManyFilesStatusText="${tooManyFilesStatusText}"
        orText="${orText}"
        infoText="${infoText}"
        wrongFileTypeStatusText="${wrongFileTypeStatusText}"
        icon="${icon}"
        >${headerText}</axa-file-upload
      >
    </div>
  `;

  render(template, wrapper);
  return wrapper;
});
