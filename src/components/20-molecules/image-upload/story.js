import { storiesOf } from '@storybook/html';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs';
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

// TODO:: Move icon variants into icons and export it from there
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
  // const open = boolean('open', false);
  // const name = text('name', '');
  const inputFileText = text('inputFileText', 'Upload file');

  const iconOptions = select('Icon', icons);
  const wrapper = document.createElement('div');
  const template = html`
    <div style="width:453px;">
      <axa-image-upload inputFileText="${inputFileText}" icon="${iconOptions}"
        >Folgende Dateien werden übertragen:</axa-image-upload
      >
    </div>
  `;

  render(template, wrapper);
  return wrapper;
});
// <axa-popup-button ?open="${open}" name="${name}"></axa-popup-button>

// .add(
//   'Image upload - default',
//   () =>
//     `<div style="width:453px;"><axa-image-upload>Folgende Dateien werden übertragen:</axa-image-upload></div>`
// )
// .add(
//   'Image upload - custom',
//   () =>
//     `<div style="width:600px;"><axa-image-upload inputFileText="Datei hochladen" icon="cloud-upload" errorStatusText="Fehler aufgetreten" deleteStatusText="Löschen langgggggg"
//     addStatusText="Ein sehr langer Text">Image-Upload:</axa-image-upload></div>`
// );
