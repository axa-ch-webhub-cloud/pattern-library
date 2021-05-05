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

class AXAList extends LitElement {
  static get tagName() {
    return 'axa-list';
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

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
  }

  // if you use dependent components inside your html-tagged string templates below,
  // first uncomment versionedHTML above.
  // Then, wrap them using a new tag versionedHTML(this), like so:
  // versionedHTML(this)`<axa-XXX foo="bar"></axa-XXX>`
  render() {
    return html`
      <article class="m-list">
        <slot></slot>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineVersioned([AXAList], __VERSION_INFO__);

export default AXAList;