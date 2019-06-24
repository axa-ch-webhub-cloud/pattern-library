/* global document */
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import './index';
import Readme from './README.md';

const storyButton = storiesOf('Atoms/Button', module);
storyButton.addDecorator(withKnobs);
storyButton.addParameters({
  readme: {
    sidebar: Readme,
  },
});

const blueBackgroundStyle = 'background-color: #00008f; padding: 10px;';

storyButton.add('Button - default', () => {
  const options = {
    None: '',
    Red: 'red',
    Secondary: 'secondary',
    Inverted: 'inverted',
  };

  // TODO:: Move icon variants into icons and export it from there
  const iconOptions = {
    None: '',
    'Arrow Right': 'arrow-right',
    Collapse: 'collapse',
    Document: 'document',
    Download: 'download',
    Email: 'email',
    Expand: 'expand',
    Mobile: 'mobile',
    Phone: 'phone',
    Search: 'search',
    Upload: 'upload',
  };

  const buttonText = text('Text', 'Click me');
  const variants = radios('Variant', options, '');
  const icons = select('Icon', iconOptions);
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);
  const large = boolean('large', false); // should probably be a variant.
  const type = radios('Types', { submit: 'submit', reset: 'reset' });

  return `<div style='${variants === 'inverted' ? blueBackgroundStyle : ''}'>
    <axa-button ${disabled ? 'disabled' : ''} ${
    large ? 'large' : ''
  } type='${type}' variant='${variants}' ${
    motionOff ? 'motionoff' : ''
  } icon='${icons}'>${buttonText}</axa-button></div>`;
});
