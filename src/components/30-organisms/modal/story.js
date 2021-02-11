import { withKnobs } from '@storybook/addon-knobs';
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
        const modal = document.getElementsByTagName('axa-modal')[0];
        modal.setAttribute('open', '');
      });
  });
  const wrapper = document.createElement('div');
  const template = html`
    <axa-modal>
      <axa-heading rank="5">Haftpflichtversicherung</axa-heading>
      <axa-text>
        Die Haftpflichtversicherung schützt das Unternehmen vor den finanziellen
        Folgen von Personen- und Sachschäden, die das Unternehmen gegenüber
        anderen verursacht.
      </axa-text>
      <axa-heading rank="6">Schadenbeispiel</axa-heading>
      <axa-text>
        Eine vom versicherten Unternehmen verkaufte Spraydose explodiert beim
        Kunden und verletzt diesen.
      </axa-text>
      <axa-heading rank="6"
        >Für wen eignet sich diese Versicherung?</axa-heading
      >
      <axa-text>
        Für alle Unternehmen, da Schadenersatzforderungen oft existenzbedrohend
        sein können.
      </axa-text>
    </axa-modal>

    <button type="button" class="js-modal-story__button">
      Open modal story
    </button>
  `;

  render(template, wrapper);
  return wrapper;
};
