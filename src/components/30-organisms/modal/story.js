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
      <axa-heading rank="3">Haftpflichtversicherung</axa-heading>
      <axa-text>
        Die Haftpflichtversicherung schützt das Unternehmen vor den finanziellen
        Folgen von Personen- und Sachschäden, die das Unternehmen gegenüber
        anderen verursacht.
      </axa-text>
      <axa-heading rank="3">Schadenbeispiel</axa-heading>
      <axa-text>
        Eine vom versicherten Unternehmen verkaufte Spraydose explodiert beim
        Kunden und verletzt diesen.
      </axa-text>
      <axa-heading rank="3"
        >Für wen eignet sich diese Versicherung?</axa-heading
      >
      <axa-text>
        Für alle Unternehmen, da Schadenersatzforderungen oft existenzbedrohend
        sein können.
      </axa-text>

      <axa-text>
        Den Körper trainieren viele Menschen. Abesr wer trainiert auch sein
        Gehirn? „Das Gehirn muss genauso trainiert werden wie der Körper“, sagt
        Professor Siegfried Lehrl von der Universität Erlangen-Nürnberg. Denn
        wissenschaftliche Untersuchungen haben gezeigt, dass wir die
        Leistungsfähigkeit unseres Gehirns um 10 bis 15% steigern können, wenn
        wir einige Wochen lang täglich zehn Minuten unser Gehirn trainieren.
        Besonders wichtig ist dieses Gehirn-Jogging für Menschen, die sich im
        Alltag geistig nur wenig anstrengen. Ein Beispiel sind
        Krankenhauspatienten: Bereits nach wenigen Tagen beginnt ihr
        Intelligenzquotient zu sinken. Nach drei Wochen Krankenhausaufenthalt
        kann er bereits 20% niedriger als gewöhnlich sein. Besonders wichtig ist
        dieses Gehirn-Jogging für Menschen, die sich im Alltag geistig nur wenig
        anstrengen. Ein Beispiel sind Krankenhauspatienten: Bereits nach wenigen
        Tagen beginnt ihr Intelligenzquotient zu sinken. Nach drei Wochen
        Krankenhausaufenthalt kann er bereits 20% niedriger als gewöhnlich sein.
      </axa-text>
    </axa-modal>

    <button type="button" class="js-modal-story__button">
      Open modal story
    </button>
  `;

  render(template, wrapper);
  return wrapper;
};
