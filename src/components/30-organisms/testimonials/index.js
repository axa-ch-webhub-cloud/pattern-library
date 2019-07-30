import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/container';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXATestimonials extends LitElement {
  static get tagName() {
    return 'axa-testimonials';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      classes: { type: String },
      title: { type: String },
      subtitle: { type: String },
      autoRotateDisabled: { type: Boolean },
      keysEnabled: { type: Boolean },
      autoRotateTime: { type: Number },
      showAllInline: { type: Boolean },
    };
  }

  constructor() {
    super();
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
  }

  render() {
    const { title, subtitle} = this;

    return html`
      <article class="o-testimonials">
        <axa-container>
        
            ${title && html`<h1 class="o-testimonials__title">${title}</h1>`}
        ${subtitle && html`<p class="o-testimonials__subtitle">${subtitle}</p>`}
        <div class="o-testimonials__navigator js-o-testimonials__navigator">
          <button class="o-testimonials__arrow-left js-o-testimonials__control-left" type="button"></button>
          <div class="o-testimonials__content">
            <slot></slot>
          </div>
          <button class="o-testimonials__arrow-right js-o-testimonials__control-right" type="button"></button>
        </div>

        </axa-container>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXATestimonials.tagName, AXATestimonials);

export default AXATestimonials;
