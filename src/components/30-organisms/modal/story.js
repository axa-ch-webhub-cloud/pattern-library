import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const Modal = () => {
  setTimeout(() => {
    document
      .querySelector('.js-modal-story__button')
      .addEventListener('click', () => {
        var modal = document.getElementsByTagName('axa-modal')[0];
        modal.setAttribute('open', '');
      });
  });
  const wrapper = document.createElement('div');
  const template = html`
    <axa-modal></axa-modal>

    <button type="button" class="js-modal-story__button">
      Open modal story
    </button>
  `;

  render(template, wrapper);
  return wrapper;
};
