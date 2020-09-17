import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Container',
  parameters: {
    readme,
    changelog,
  },
};

export const Container = ({ childsText }) => {
  const wrapper = document.createElement('div');

  const template = html`
    <axa-container>${childsText}</axa-container>
  `;

  render(template, wrapper);
  return wrapper;
};
Container.args = {
  childsText: 'Some children',
};

Container.argTypes = {
  childsText: { name: 'set the childs text' },
};
