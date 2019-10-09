/* global document */
import { storiesOf } from '@storybook/html';
import { text, select, boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import { iconOptions } from '../icon/story';
import './index';
import Readme from './README.md';


storiesOf('Atoms/Input File', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Input File', () => {
    const inputText = text('text', 'Upload');
    const accept = text(
      'accept',
      'image/jpg, image/jpeg, application/pdf, image/png'
    );
    const icon = select('icon', iconOptions, 'cloud-upload');
    const disabled = boolean('disabled', false);
    const multiple = boolean('multiple', false);
    const capture = boolean('capture', false);
    const wrapper = document.createElement('div');
    const template = html`
      <axa-input-file
        icon="${icon}"
        accept="${accept}"
        ?disabled="${disabled}"
        ?multiple="${multiple}"
        ?capture="${capture}"
        >${inputText}</axa-input-file
      >
    `;
    render(template, wrapper);
    return wrapper;
  });
