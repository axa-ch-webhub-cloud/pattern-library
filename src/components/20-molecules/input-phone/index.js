import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '@axa-ch/dropdown';
import '@axa-ch/input-text';

import { countries } from './country-items';

import {
  defineVersioned,
  /* versionedHtml, */
} from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXAInputPhone extends LitElement {
  static get tagName() {
    return 'axa-input-phone';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      onClick: { type: Function },
      foo: { type: String, defaultValue: 'bar' },
    };
  }

  constructor() {
    super();
    // this functions applies default values per type and verifies if
    // the HTML attribute has been set before defining the custom element
    applyDefaults(this);
    this.onClick = () => {};
    // if you depend on *other* axa-XXX components and imported them above,
    // then you declare them as versioned here like this:
    // defineVersioned([myDependentComponent1, myDependentComponent2, ...], __VERSION_INFO__, this);
  }

  updated() {
    this.shadowRoot.querySelector(
      '.m-input-phone__mobile-area-code-dropdown'
    ).items = countries;
  }

  // if you use dependent components inside your html-tagged string templates below,
  // first uncomment versionedHTML above.
  // Then, wrap them using a new tag versionedHTML(this), like so:
  // versionedHTML(this)`<axa-XXX foo="bar"></axa-XXX>`
  render() {
    return html`
      <div class="m-input-phone">
        <axa-dropdown
          class="m-input-phone__mobile-area-code-dropdown"
        ></axa-dropdown>
        <div>
          <axa-input-text
            class="m-input-phone__mobile-number-input"
          ></axa-input-text>
        </div>
      </div>
    `;
  }
}

defineVersioned([AXAInputPhone], __VERSION_INFO__);

export default AXAInputPhone;
