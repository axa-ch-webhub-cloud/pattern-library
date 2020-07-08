/* global document */
import {
  boolean,
  radios,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import Changelog from './CHANGELOG.md';
import './index';
import Readme from './README.md';

storiesOf('Components|Input File', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
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

    const template = html`
      <axa-input-file
        variant="${variant}"
        icon="${icon}"
        ?large="${large}"
        ?motionOff="${motionOff}"
        ?disabled="${disabled}"
        accept="${accept}"
        ?capture="${capture}"
        ?multiple="${multiple}"
        >${_text}</axa-input-file
      >
    `;

    const wrapper = document.createElement('div');
    render(template, wrapper);

    return wrapper;
  });
