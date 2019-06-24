import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXACommercialHeroCover extends LitElement {
  static get tagName() {
    return 'axa-commercial-hero-cover';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      // onClick: { type: Function },
      src: { type: string },
      alt: { type: string },
      gradient: { type: string }, // PropTypes.oneOf(['white', 'black']),
      contentAlign: { type: string }, //PropTypes.oneOf(['left', 'right']),
      pictureClasses: { type: string },
      heroObjectPosition: { type: string },
    };
  }

  constructor() {
    super();
    // this.onClick = () => {};
    this.src = '';
    this.alt = '';
    this.gradient = 'white'; // PropTypes.oneOf(['white', 'black']),
    this.contentAlign = 'left'; //PropTypes.oneOf(['left', 'right']),
    this.pictureClasses = '';
    this.heroObjectPosition = '';
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
  }

  render() {
    return html`
      <article class="o-commercial-hero-cover">
        <slot></slot>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXACommercialHeroCover.tagName, AXACommercialHeroCover);

export default AXACommercialHeroCover;
