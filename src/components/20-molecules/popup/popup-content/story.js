import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import './index';

export default {
  title: 'Components/Popup Content',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      propsReact: 'onClick={handler}',
    },
    changelog,
  },
};

const children = html`
  <h4 style="margin-top: 0">Time until retirement</h4>
  <p>
    To calculate your monthly income in old age the time span until you retire is decisive.
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
