import {
  boolean,
  radios,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { iconList } from '../../icon/icon-list';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAInputFileReact from './AXAInputFileReact';
import AXATextReact from './AXATextReact';

storiesOf('Examples/Input File/React', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme,
    usage: { disable: true },
    changelog,
  })
  .add('Story', () => {
    const _text = text('text', 'Select a File');

    const variant = radios(
      'variant',
      {
        default: '',
        secondary: 'secondary',
        red: 'red',
        inverted: 'inverted',
      },
      ''
    );

    const icon = select('icon', iconList, 'cloud-upload');
    const large = boolean('large', false);
    const motionOff = boolean('motionOff', false);
    const disabled = boolean('disabled', false);

    const accept = text(
      'accept',
      'image/jpg, image/jpeg, application/pdf, image/png'
    );

    const capture = boolean('capture', false);
    const multiple = boolean('multiple', false);

    const container = document.createElement('div');

    if (variant.includes('inverted')) {
      container.style.backgroundColor = '#00008f';
      container.style.padding = '10px';
    }

    const root = createRoot(container);
    root.render(
      <>
        <AXAInputFileReact
          text={_text}
          variant={variant}
          onChange={e => {
            const allFileNames = [];
            [...e.target.files].forEach(i => allFileNames.push(i.name));

            document.getElementById(
              'checkbox-output'
            ).innerHTML = `Files selected: ${allFileNames.toString()}`;
          }}
          className="myCssClass"
          icon={icon}
          large={large}
          motionOff={motionOff}
          multiple={multiple}
          accept={accept}
          disabled={disabled}
          capture={capture}
        />
        <br />
        <AXATextReact id="checkbox-output">Files selected:</AXATextReact>
      </>
    );

    return container;
  });
