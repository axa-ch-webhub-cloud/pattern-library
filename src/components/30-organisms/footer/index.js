import '@webcomponents/webcomponentsjs';
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import '@axa-ch/icon';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAFooter extends LitElement {
  static get tagName() {
    return 'axa-footer';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      content: { type: Array },
      icons: { type: Object },
      dynamic: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.content = [];
    this.icons = {};
    this.dynamic = false;
  }

  firstUpdated() {
    // var acc = document.getElementsByClassName('accordion');
    // var i;
    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener('click', function() {
    //     this.classList.toggle('active');
    //     var panel = this.nextElementSibling;
    //     if (panel.style.maxHeight) {
    //       panel.style.maxHeight = null;
    //     } else {
    //       panel.style.maxHeight = panel.scrollHeight + 'px';
    //     }
    //   });
    // }
  }

  handleClick(e, index) {
    e.stopPropagation();
    console.log('newhandle', e.target);
  }

  render() {
    return html`
      <article class="o-footer">
        ${repeat(
          this.icons,
          icon =>
            html`
              <axa-icon icon="download"></axa-icon>
            `
        )}

        <button class="accordion active" @click="${this.handleClick}">
          Section 1
        </button>
        <ul class="panel">
          <li>hello</li>
          <li>bonjour</li>
          <li>hallo</li>
        </ul>

        <button class="accordion">Section 2</button>
        <ul class="panel">
          <li>hello</li>
          <li>bonjour</li>
          <li>hallo</li>
        </ul>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXAFooter.tagName, AXAFooter);

export default AXAFooter;
