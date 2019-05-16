import '@webcomponents/webcomponentsjs';
import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

import {
  FacebookSvg,
  InstagramSvg,
  TwitterSvg,
  XingSvg,
  YoutubeSvg,
  LinkedinSvg,
} from '@axa-ch/materials';

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

    this.iconMap = new Map();
    this.iconMap.set('facebook', FacebookSvg);
    this.iconMap.set('instagram', InstagramSvg);
    this.iconMap.set('twitter', TwitterSvg);
    this.iconMap.set('xing', XingSvg);
    this.iconMap.set('youtube', YoutubeSvg);
    this.iconMap.set('linkedin', LinkedinSvg);
  }

  handleClick(e, index) {
    e.stopPropagation();
    const oldState = this.content[index].active;
    this.content = this.content.map(c => {
      c.active = false;
      return c;
    });

    this.content[index].active = !oldState;
  }

  render() {
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
                        </li>
                      `
                  )}
                </ul>
              </div>
            `
        )}
        <div>
          <ul class="o-footer__social-media">
            ${repeat(this.iconArea.icons, icon => {
              return html`
                <li>
                  <a href="${icon.link}" target="_blank"
                    >${svg([this.iconMap.get(icon.title) || ''])}</a
                  >
                </li>
              `;
            })}
          </ul>
        <div>
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
