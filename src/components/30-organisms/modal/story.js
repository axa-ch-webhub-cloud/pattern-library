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
    <axa-modal>
      <h2 class="h2-title">Prämie berechnen</h2>
      <p>
        <strong>Mehr als 80%</strong> unserer Kunden kombinieren die
        Hausratversicherung mit einer Privathaftpflichtversicherung.
      </p>
      <p>Was möchten Sie?</p>
      <axa-button data-modal-close>Hausrat und Privathaftpflicht</axa-button>
      <p>
        Schützt Sie zusätzlich gegen Forderungen anderer. Folly words widow one
        downs few age every seven. If miss part by fact he park just shew.
        Discovered had get considered projection who favourable. Necessary up
        knowledge it tolerably. Unwilling departure education is be dashwoods or
        an. Use off agreeable law unwilling sir deficient curiosity instantly.
        Easy mind life fact with see has bore ten. Parish any chatty can elinor
        direct for former. Up as meant widow equal an share least. Another
        journey chamber way yet females man. Way extensive and dejection get
        delivered deficient sincerity gentleman age. Too end instrument
        possession contrasted motionless. Calling offence six joy feeling.
        Coming merits and was talent enough far. Sir joy northward sportsmen
        education. Discovery incommode earnestly no he commanded if. Put still
        any about manor heard. Village did removed enjoyed explain nor ham saw
        calling talking. Securing as informed declared or margaret. Joy horrible
        moreover man feelings own shy. Request norland neither mistake for yet.
        Between the for morning assured country believe. On even feet time have
        an no at. Relation so in confined smallest children unpacked delicate.
        Why sir end believe uncivil respect. Always get adieus nature day course
        for common. My little garret repair to desire he esteem. In it except to
        so temper mutual tastes mother. Interested cultivated its continuing now
        yet are. Out interested acceptance our partiality affronting unpleasant
        why add. Esteem garden men yet shy course. Consulted up my tolerably
        sometimes perpetual oh. Expression acceptance imprudence particular had
        eat unsatiable. Had denoting properly jointure you occasion directly
        raillery. In said to of poor full be post face snug. Introduced
        imprudence see say unpleasing devonshire acceptance son. Exeter longer
        wisdom gay nor design age. Am weather to entered norland no in showing
        service. Nor repeated speaking shy appetite. Excited it hastily an
        pasture it observe. Snug hand how dare here too.
      </p>

      <axa-button data-modal-close class="o-modal-close__axa-button"
        >Schliessen</axa-button
      >
    </axa-modal>

    <button type="button" class="js-modal-story__button">
      Open modal story
    </button>
  `;

  render(template, wrapper);
  return wrapper;
};
