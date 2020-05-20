/* global document */
// if your need more boolean, select, radios
import { text, withKnobs } from '@storybook/addon-knobs';
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
  const textknob = text('This is a knob', 'Value of text knob');
  const wrapper = document.createElement('div');

  const template = html`
    <axa-toggle-switch>${textknob}</axa-toggle-switch>
  `;

  render(template, wrapper);
  return wrapper;
});
