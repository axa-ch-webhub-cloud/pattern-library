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
    <style>
      body {
        font-family: 'Source Sans Pro', Arial, sans-serif;
      }
    </style>

    <axa-modal>
      <h2 class="h2-title">Prämie berechnen</h2>
      <p>
        <strong>Mehr als 80%</strong> unserer Kunden kombinieren die
        Hausratversicherung mit einer Privathaftpflichtversicherung.
      </p>
      <p>Was möchten Sie?</p>
      <axa-button data-modal-close>Hausrat und Privathaftpflicht</axa-button>
      <p>
        Schützt Sie zusätzlich gegen Forderungen anderer. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in
        vulputate velit esse molestie consequat, vel illum dolore eu feugiat
        nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
        blandit praesent luptatum zzril delenit augue duis dolore te feugait
        nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
        aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
        consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
        velit esse molestie consequat, vel illum dolore eu feugiat nulla
        facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
        praesent luptatum zzril delenit augue duis dolore te feugait nulla
        facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil
        imperdiet doming id quod mazim placerat facer Schützt Sie zusätzlich
        gegen Forderungen anderer. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
        amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor
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
