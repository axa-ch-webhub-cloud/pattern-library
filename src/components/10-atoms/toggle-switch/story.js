/* global document */
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Changelog from './CHANGELOG.md';
import './index';
import Readme from './README.md';

const story = storiesOf('Components|Atoms/Toggle Switch', module);
story.addDecorator(withKnobs);

story.addParameters({
  readme: {
    sidebar: Readme,
  },
  changelog: Changelog,
});

story.add('Toggle Switch', () => {
  const on = boolean('on', false);
  const disabled = boolean('disabled', false);
  const wrapper = document.createElement('div');

  const template = html`
    <axa-toggle-switch ?on=${on} ?disabled=${disabled}></axa-toggle-switch>
  `;

  render(template, wrapper);
  return wrapper;
});
