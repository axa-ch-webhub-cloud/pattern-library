/* global document */
import { number, object, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import Changelog from './CHANGELOG.md';
import './index';

export default {
  title: 'Components/Stepper',
  decorators: [withKnobs],
  parameters: {
    changelog: Changelog,
  },
};

export const Stepper = () => {
  const wrapper = document.createElement('div');

  const steps = object('steps', [
    'Angaben',
    'Leistungen',
    'Übersicht',
    'Fertig',
  ]);

  const stepActive = number('stepActive', 2);
  const stepProgress = number('stepProgress', 0.5);

  const template = html`
    <axa-stepper
      .steps=${steps}
      .stepactive=${stepActive || 0}
      .stepprogress=${stepProgress || 0}
    ></axa-stepper>
  `;

  render(template, wrapper);
  return wrapper;
};
