import { storiesOf } from '@storybook/html';
import { text, number, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const story = storiesOf('Molecules/File Upload', module);
story.addDecorator(withKnobs);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});
const descriptionText = 'The following files are being transferred:';
// TODO: Move icon variants into icons and export it from there
const icons = {
  none: '',
  'arrow-right': 'arrow-right',
  collapse: 'collapse',
  document: 'document',
  download: 'download',
  email: 'email',
  expand: 'expand',
  mobile: 'mobile',
  phone: 'phone',
  search: 'search',
  upload: 'upload',
  'cloud-upload': 'cloud-upload',
};

story
  .add('File upload - default', () => {
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
    const iconOptions = select('icon', icons, 'cloud-upload');
    const headerText = text('headerText', descriptionText);
    const wrapper = document.createElement('div');

    const template = html`
      <div style="width:453px;">
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
          icon="${iconOptions}"
          >${headerText}</axa-file-upload
        >
      </div>
    `;

    render(template, wrapper);
    return wrapper;
  })
  .add('File upload - maxSizeOfSingleFileKB', () => {
    const wrapper = document.createElement('div');
    const template = html`
      <div style="width:453px;">
        <axa-file-upload maxSizeOfSingleFileKB="1"
          >${descriptionText}</axa-file-upload
        >
      </div>
    `;

    render(template, wrapper);
    return wrapper;
  })
  .add('File upload - maxNumberOfFiles', () => {
    const wrapper = document.createElement('div');
    const template = html`
      <div style="width:453px;">
        <axa-file-upload maxNumberOfFiles="1"
          >${descriptionText}</axa-file-upload
        >
      </div>
    `;

    render(template, wrapper);
    return wrapper;
  })
  .add('File upload - maxSizeOfAllFilesKB', () => {
    const wrapper = document.createElement('div');
    const template = html`
      <div style="width:453px;">
        <axa-file-upload maxSizeOfAllFilesKB="1"
          >${descriptionText}</axa-file-upload
        >
      </div>
    `;

    render(template, wrapper);
    return wrapper;
  });
