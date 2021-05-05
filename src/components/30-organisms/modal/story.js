import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import readme from './README.md';
import changelog from './CHANGELOG.md';

export default {
  title: 'Components/Modal',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      componentName: 'modal',
    },
    changelog,
  },
};

export const Modal = () => {
  const open = boolean('open', true);
  const forced = boolean('forced', false);
  const small = boolean('small', false);

  const wrapper = document.createElement('div');

  setTimeout(() => {
    // document.querySelector('axa-button').addEventListener('click', () => {
    //   document.querySelector('axa-modal').removeAttribute('open');
    // });
  });

  const template = html`
    <style>
      .modal-story__close-modal-child-button {
        margin-top: 20px;
      }
    </style>
    <axa-modal ?open="${open}" ?forced="${forced}" ?small="${small}">
      <axa-heading rank="2">Liability insurance</axa-heading>
      <axa-text>
        The liability insurance protects the company against the financial
        consequences of personal injury and property damage caused by the
        company to others. others. The liability insurance protects the company
        against the financial consequences of personal injury and property
        damage caused by the company to others. others.The liability insurance
        protects the company against the financial consequences of personal
        injury and property damage caused by the company to others. others.The
        liability insurance protects the company against the financial
        consequences of personal injury and property damage caused by the
        company to others. others.The liability insurance protects the company
        against the financial consequences of personal injury and property
        damage caused by the company to others. others.The liability insurance
        protects the company against the financial consequences of personal
        injury and property damage caused by the company to others. others.The
        liability insurance protects the company against the financial
        consequences of personal injury and property damage caused by the
        company to others. others.The liability insurance protects the company
        against the financial consequences of personal injury and property
        damage caused by the company to others. others.The liability insurance
        protects the company against the financial consequences of personal
        injury and property damage caused by the company to others. others.The
        liability insurance protects the company against the financial
        consequences of personal injury and property damage caused by the
        company to others. others.The liability insurance protects the company
        against the financial consequences of personal injury and property
        damage caused by the company to others. others.The liability insurance
        protects the company against the financial consequences of personal
        injury and property damage caused by the company to others. others.The
        liability insurance protects the company against the financial
        consequences of personal injury and property damage caused by the
        company to others. others.The liability insurance protects the company
        against the financial consequences of personal injury and property
        damage caused by the company to others. others.v The liability insurance
        protects the company against the financial consequences of personal
        injury and property damage caused by the company to others. others.The
        liability insurance protects the company against the financial
        consequences of personal injury and property damage caused by the
        company to others. others.The liability insurance protects the company
        against the financial consequences of personal injury and property
        damage caused by the company to others. others.The liability insurance
        protects the company against the financial consequences of personal
        injury and property damage caused by the company to others. others.The
        liability insurance protects the company against the financial
        consequences of personal injury and property damage caused by the
        company to others. others.
      </axa-text>
    </axa-modal>

    <button
      type="button"
      class="js-modal-story__button"
      onClick="document.getElementsByTagName('axa-modal')[0].setAttribute('open', '');"
    >
      Open modal
    </button>
  `;

  render(template, wrapper);
  return wrapper;
};
