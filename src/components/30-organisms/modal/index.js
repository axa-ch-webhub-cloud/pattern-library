import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */

//    If you need other axa-XXX components inside your new component,
//    import them here like this:
//
//    import myDependentComponent1 from '@axa-ch/XXX;

import {
  defineVersioned,
  /* versionedHtml, */
} from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXAModal extends LitElement {
  static get tagName() {
    return 'axa-modal';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      open: { type: Boolean },
    };
  }

  constructor() {
    super();
    // this functions applies default values per type and verifies if
    // the HTML attribute has been set before defining the custom element
    applyDefaults(this);
    // if you depend on *other* axa-XXX components and imported them above,
    // then you declare them as versioned here like this:
    /* eslint-disable no-undef */
    // defineVersioned([myDependentComponent1, myDependentComponent2, ...], __VERSION_INFO__, this);
    /* eslint-enable no-undef */
  }

  // if you use dependent components inside your html-tagged string templates below,
  // first uncomment versionedHTML above.
  // Then, wrap them using a new tag versionedHTML(this), like so:
  // versionedHTML(this)`<axa-XXX foo="bar"></axa-XXX>`
  render() {
    const classes = {
      'o-modal--open': this.open,
    };
    return html`
      <article class="o-modal ${classMap(classes)}">
        <div class="o-modal-window">
          <h2 class="h2-title">Prämie berechnen</h2>
          <a href="#" class="o-modal-window__close-button"></a>
          <p>
            <strong>Mehr als 80%</strong> unserer Kunden kombinieren die
            Hausratversicherung mit einer Privathaftpflichtversicherung.
          </p>
          <p>Was möchten Sie?</p>
          <axa-button data-modal-close
            >Hausrat und Privathaftpflicht</axa-button
          >
          <p>Schützt Sie zusätzlich gegen Ford rungen anderer.</p>
        </div>
      </article>
    `;
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAModal], __VERSION_INFO__);

export default AXAModal;

// Cancel-Button programmieren => Klasse wird geändert
{
  /* <a href="#" class="o-modal-windows__close" /> */
}
