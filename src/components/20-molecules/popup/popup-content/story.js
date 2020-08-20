import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from '../CHANGELOG.md';

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  },
};

const children = html`
  <h4 style="margin-top: 0">Zeitspanne bis zur Pensionierung</h4>
  <p>
    Für die Berechnung Ihres monatlichen Einkommens im Alter ist die Zeitspanne
    bis zum Zeitpunkt Ihrer Pensionierung entscheidend.
  </p>
`;

export const PopupContent = () => {
  const open = boolean('open', true);

  const wrapper = document.createElement('div');
  const template = html`
    <axa-popup-content ?open="${open}">${children}</axa-popup-content>
  `;

  render(template, wrapper);
  return wrapper;
};
