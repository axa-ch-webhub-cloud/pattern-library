/* global document */
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import { iconList } from '../../icon/icon-list';
import Changelog from '../CHANGELOG.md';
import Readme from '../README.md';
import AXAInputFileReact from './AXAInputFileReact';

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
        text={inputText}
        onChange={e => {
          console.log('files selected: ', e.target.files);
        }}
        className="myCssClass"
        icon={icons}
        multiple={multiple}
        accept={accept}
        disabled={disabled}
        capture={capture}
      ></AXAInputFileReact>,
      div
    );
    return div;
  });
