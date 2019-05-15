import '@webcomponents/webcomponentsjs';
import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

import face from '../../00-materials/icons/facebook.svg';

// import {
//   facebookSvg,
//   // instagramSvg,
//   // twitterSvg,
//   // xingSvg,
//   // youtubeSvg,
//   // linkedinSvg,
// } from '@axa-ch/materials';

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
      iconArea: { type: Object },
      dynamic: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.content = [];
    this.iconArea = {};
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
    // const accordion = this.shadowRoot.querySelector('.panel');
    // console.log(accordion);
    // accordion.style.maxHeight = 'unset';

    this.content = this.content.map(c => {
      c.active = false;
      return c;
    });

    this.content[index].active = true;

    console.log('e', e);
    console.log('i', index);
    this.requestUpdate();

    // var acc = this.getElementsByClassName('accordion');
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

  render() {
    console.log('rerender');
    return html`
      <article class="o-footer">
        ${repeat(
          this.content,
          (contentItem, index) =>
            html`
              <div>
                <button
                  class="accordion"
                  @click="${ev => this.handleClick(ev, index)}"
                >
                  ${contentItem.title}
                </button>
                <ul class="panel ${contentItem.active ? 'is-active' : ''}">
                  ${repeat(
                    contentItem.items,
                    i =>
                      html`
                        <li>
                          <a href=${i.link}>${i.text}</a>
                          ${index}
                        </li>
                      `
                  )}
                </ul>
              </div>
            `
        )}
      </article>
    `;
    // ${repeat(this.iconArea.icons, icon => svg([face || '']))}

    // <button class="accordion active" @click="${this.handleClick}">
    //   Section 1
    // </button>
    // <ul class="panel">
    //   <li>hello</li>
    //   <li>bonjour</li>
    //   <li>hallo</li>
    // </ul>

    // <button class="accordion">Section 2</button>
    // <ul class="panel">
    //   <li>hello</li>
    //   <li>bonjour</li>
    //   <li>hallo</li>
    // </ul>
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXAFooter.tagName, AXAFooter);

export default AXAFooter;
