import { LitElement, html, css, unsafeCSS } from 'lit-element';

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

class AXASpinner extends LitElement {
  static get tagName() {
    return 'axa-spinner';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      size: { type: String, defaultValue: 'default' },
      color: { type: String, defaultValue: 'ocean-blue' },
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
    /* eslint-disable no-undef */
    // defineVersioned([myDependentComponent1, myDependentComponent2, ...], __VERSION_INFO__, this);
    /* eslint-enable no-undef */
  }

  firstUpdated() {
    // if(this.size === "small") {
    //   return css `
    //     .spinner {
    //       height: 8px;
    //       width: 8px;
    //     }
    //   `
    // }
  }

  // if you use dependent components inside your html-tagged string templates below,
  // first uncomment versionedHTML above.
  // Then, wrap them using a new tag versionedHTML(this), like so:
  // versionedHTML(this)`<axa-XXX foo="bar"></axa-XXX>`
  render() {
    return html`
      <article class="a-spinner">
        <div style="margin:100px">
          <span class="spinner __dot-1"></span>
          <span class="spinner __dot-2"></span>
          <span class="spinner __dot-3"></span>
        </div>
        <div style="margin:100px">
          <progress class="progressbar" value="32" max="100" />
        </div>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

/* eslint-disable no-undef */
defineVersioned([AXASpinner], __VERSION_INFO__);

export default AXASpinner;
