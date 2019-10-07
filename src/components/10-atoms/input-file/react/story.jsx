/* global document */
import { storiesOf } from '@storybook/html';
import { text, select, boolean, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import AXAInputFileReact from './AXAInputFileReact';
import Readme from '../README.md';

const iconOptions = {
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
  'axa-logo': 'axa-logo',
  'axa-logo-open': 'axa-logo-open',
};

storiesOf('Atoms/Input File/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('InputFile', () => {
    const inputText = text('text', 'Upload');
    const accept = text(
      'accept',
      'image/jpg, image/jpeg, application/pdf, image/png'
    );
    const icons = select('icon', iconOptions, 'cloud-upload');
    const disabled = boolean('disabled', false);
    const multiple = boolean('multiple', false);
    const capture = boolean('capture', false);

    const div = document.createElement('div');
    ReactDOM.render(
      <AXAInputFileReact
        onChange={e => {
          console.log('files selected: ', e.target.files);
        }}
        className="myCssClass"
        icon={icons}
        multiple={multiple}
        accept={accept}
        disabled={disabled}
        capture={capture}
      >
        {inputText}
      </AXAInputFileReact>,
      div
    );
    return div;
  });
