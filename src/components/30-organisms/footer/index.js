// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import {
  FacebookSvg,
  InstagramSvg,
  TwitterSvg,
  XingSvg,
  YoutubeSvg,
  LinkedinSvg,
  CaretSvg,
} from '@axa-ch/materials';
import '@axa-ch/container';
import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
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
      social: { type: Object },
      dynamic: { type: Boolean },
    };
  }

  accordionActiveIndex = 0;

  constructor() {
    super();
    this.content = [];
    this.social = {};
    this.dynamic = false;
    this.onItemClick = () => {};

    this.iconMap = new Map();
    this.iconMap.set('facebook', FacebookSvg);
    this.iconMap.set('instagram', InstagramSvg);
    this.iconMap.set('twitter', TwitterSvg);
    this.iconMap.set('xing', XingSvg);
    this.iconMap.set('youtube', YoutubeSvg);
    this.iconMap.set('linkedin', LinkedinSvg);
  }

  handleLinkClick = (ev, text) => {
    if (this.dynamic) {
      ev.preventDefault();
      this.onItemClick(text);
      this.dispatchEvent(
        new CustomEvent('axa-link-click', {
          detail: text,
          bubbles: true,
          cancelable: true,
        })
      );
    }
  };

  render() {
    return html`
      <footer class="o-footer">
        <axa-container>
          <div class="o-footer__content">
            <div class="o-footer__collection">
              <div class="o-footer__main">
                <slot
                  name="column-0-title-desktop"
                  class="o-footer__title-desktop"
                ></slot>
                <button
                  class="o-footer__accordion-button"
                  @click="${() => {
                    this.accordionActiveIndex = 0;
                    this.requestUpdate();
                  }}"
                >
                  <slot name="column-0-title" class="o-footer__title"></slot>
                  <span
                    class="o-footer__accordion-button-caret o-footer__accordion-button-caret${this
                      .accordionActiveIndex === 0
                      ? '--open'
                      : ''}"
                  >
                    ${svg([CaretSvg || ''])}
                  </span>
                </button>
                <ul
                  class="o-footer__main-content-panel o-footer__main-content-panel${this
                    .accordionActiveIndex === 0
                    ? '--open'
                    : ''}"
                >
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-0-item-0" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-0-item-1" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-0-item-2" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-0-item-3" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-0-item-4" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-0-item-5" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-0-item-6" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-0-item-7" />
                  </li>
                </ul>
              </div>

              <div class="o-footer__main">
                <slot
                  name="column-1-title-desktop"
                  class="o-footer__title-desktop"
                ></slot>
                <button
                  class="o-footer__accordion-button"
                  @click="${() => {
                    this.accordionActiveIndex = 1;
                    this.requestUpdate();
                  }}"
                >
                  <slot name="column-1-title" class="o-footer__title"></slot>
                  <span
                    class="o-footer__accordion-button-caret o-footer__accordion-button-caret${this
                      .accordionActiveIndex === 1
                      ? '--open'
                      : ''}"
                  >
                    ${svg([CaretSvg || ''])}
                  </span>
                </button>
                <ul
                  class="o-footer__main-content-panel o-footer__main-content-panel${this
                    .accordionActiveIndex === 1
                    ? '--open'
                    : ''}"
                >
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-1-item-0" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-1-item-1" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-1-item-2" />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot name="column-1-item-3" />
                  </li>
                </ul>
              </div>
            </div>
            <div class="o-footer__social-media">
              <slot
                name="column-2-social-title"
                class="o-footer__social-media-title"
              ></slot>
              <ul class="o-footer__social-media-list">
                <li>
                  <a
                    href="https://axa.ch/en/private-customers.html"
                    target="_blank"
                    >${svg([FacebookSvg || ''])}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </axa-container>
      </footer>
    `;
  }
}

defineOnce(AXAFooter.tagName, AXAFooter);

export default AXAFooter;
