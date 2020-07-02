/* global document */
import { storiesOf } from '@storybook/html';
import { text, select, boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

storiesOf('Components|Input File', module)
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
    const icon = select('icon', iconList, 'cloud-upload');
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
