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
      s .modal-story__close-modal-child-button {
        margin-top: 20px;
      }
    </style>
    <axa-modal ?open="${open}" ?forced="${forced}" ?small="${small}">
      <axa-heading rank="2">Liability insurance</axa-heading>
      <axa-text>
        The liability insurance protects the company against the financial
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

{
  /* <axa-text>
        Many people train their body. But who also trains their brain? "The
        brain needs to be trained just as much as the body," says Professor
        Siegfried Lehrl of the University of Erlangen-Nuremberg. Because
        scientific studies have shown that we can increase the performance of
        our brain by 10 to 15% if we exercise our brain for we train our brain
        for ten minutes a day for a few weeks. This brain jogging is
        particularly important for people who make little mental little mental
        effort in everyday life. An example are Hospital patients: After just a
        few days, their intelligence quotient begins to decline. After three
        weeks of hospitalization it can already be 20% lower than usual. This
        brain jogging is particularly important especially important for people
        who do not exert much mental effort in everyday life. mental effort in
        everyday life. One example is hospital patients: After just a few days
        days, their intelligence quotient begins to decline. After three weeks
        hospitalization, it can already be 20% lower than usual.
      </axa-text> */
}
