import { storiesOf } from '@storybook/html';
import { text, number, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const storyImageUpload = storiesOf('Molecules/Image Upload', module);
storyImageUpload.addDecorator(withKnobs);
storyImageUpload.addParameters({
  readme: {
    sidebar: Readme,
  },
});

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

storyImageUpload.add('Image upload - default', () => {
  const rangeSliderOptions = {
    range: true,
    min: 1,
    max: 25,
    step: 1,
  };
  const inputFileText = text('inputFileText', 'Upload file');
  const maxSizeOfSingleFileMB = number(
    'maxSizeOfSingleFileMB',
    15,
    rangeSliderOptions
  );
  const maxSizeOfAllFilesMB = number(
    'maxSizeOfAllFilesMB',
    20,
    rangeSliderOptions
  );
  const maxNumberOfFiles = number('maxNumberOfFiles', 10, rangeSliderOptions);
  const deleteStatusText = text('deleteStatusText', 'Delete');
  const addStatusText = text('addStatusText', 'Add more');
  const fileTooBigStatusText = text(
    'fileTooBigStatusText',
    `File size exceeds ${maxSizeOfSingleFileMB}MB`
  );
  const filesTooBigStatusText = text(
    'filesTooBigStatusText',
    `File sizes exceeds ${maxSizeOfAllFilesMB}MB`
  );
  const tooManyFilesStatusText = text(
    'tooManyFilesStatusText',
    `You exceeded the maximum number of files: ${maxNumberOfFiles}`
  );
  const orText = text('orText', 'or');
  const infoText = text('infoText', 'Drag and drop to upload your file');
  const iconOptions = select('Icon', icons, 'cloud-upload');
  const wrapper = document.createElement('div');

  const template = html`
    <div style="width:453px;">
      <axa-image-upload
        inputFileText="${inputFileText}"
        maxSizeOfSingleFileMB="${maxSizeOfSingleFileMB}"
        maxSizeOfAllFilesMB="${maxSizeOfAllFilesMB}"
        maxNumberOfFiles="${maxNumberOfFiles}"
        deleteStatusText="${deleteStatusText}"
        addStatusText="${addStatusText}"
        fileTooBigStatusText="${fileTooBigStatusText}"
        filesTooBigStatusText="${filesTooBigStatusText}"
        tooManyFilesStatusText="${tooManyFilesStatusText}"
        orText="${orText}"
        infoText="${infoText}"
        icon="${iconOptions}"
        >Folgende Dateien werden übertragen:</axa-image-upload
      >
    </div>
  `;

  render(template, wrapper);
  return wrapper;
});
