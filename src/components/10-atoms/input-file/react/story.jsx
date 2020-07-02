/* global document */
import { storiesOf } from '@storybook/html';
import { text, select, boolean, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import ReactDOM from 'react-dom';
import { iconList } from '../../icon/icon-list';
import AXAInputFileReact from './AXAInputFileReact';
import Readme from '../README.md';
import Changelog from '../CHANGELOG.md';

storiesOf('Components|Input File/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  })
  .add('Story', () => {
    const inputText = text('text', 'Select a File');
    const accept = text(
      'accept',
      'image/jpg, image/jpeg, application/pdf, image/png'
    );
    const icons = select('icon', iconList, 'cloud-upload');
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
