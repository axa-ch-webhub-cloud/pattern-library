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
      dynamic: { type: Boolean },
    };
  }

  accordionActiveIndex = -1;

  constructor() {
    super();
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

  updated() {
    this.removeEmptyListElements();
  }

  removeEmptyListElements() {
    this.shadowRoot
      .querySelectorAll('.o-footer__main-content-panel-list-item')
      .forEach(el => {
        const label = el.querySelector('slot').assignedNodes()[0];
        // Second part of IF-statement is an IE11 workaround
        if (!label || label.toString() === '[object Text]') {
          el.style.display = 'none';
        }
      });
  }

  handleLinkClick = ev => {
    if (this.dynamic) {
      ev.preventDefault();
      this.onItemClick(ev.target.href);
      this.dispatchEvent(
        new CustomEvent('axa-footer-click', {
          detail: ev.target.href,
          bubbles: true,
          cancelable: true,
        })
      );
    }
  };

  handleAccordionClick = index => {
    this.accordionActiveIndex =
      index === this.accordionActiveIndex ? -1 : index;
    this.requestUpdate();
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
                  @click="${() => this.handleAccordionClick(0)}"
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
                    <slot
                      name="column-0-item-0"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-1"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-2"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-3"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-4"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-5"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-6"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-7"
                      @click="${this.handleLinkClick}"
                    />
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
                  @click="${() => this.handleAccordionClick(1)}"
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
                  class="o-footer__main-content-panel o-footer__main-content-panel--short o-footer__main-content-panel${this
                    .accordionActiveIndex === 1
                    ? '--open'
                    : ''}"
                >
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-1-item-0"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-1-item-1"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-1-item-2"
                      @click="${this.handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-1-item-3"
                      @click="${this.handleLinkClick}"
                    />
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
                <li class="js-footer__social-media-item">
                  <slot
                    name="column-social-item-0"
                    @click="${this.handleLinkClick}"
                  ></slot>
                </li>
                <li class="js-footer__social-media-item">
                  <slot
                    name="column-social-item-1"
                    @click="${this.handleLinkClick}"
                  ></slot>
                </li>
                <li class="js-footer__social-media-item">
                  <slot
                    name="column-social-item-2"
                    @click="${this.handleLinkClick}"
                  ></slot>
                </li>
                <li class="js-footer__social-media-item">
                  <slot
                    name="column-social-item-3"
                    @click="${this.handleLinkClick}"
                  ></slot>
                </li>
                <li class="js-footer__social-media-item">
                  <slot
                    name="column-social-item-4"
                    @click="${this.handleLinkClick}"
                  ></slot>
                </li>
                <li class="js-footer__social-media-item">
                  <slot
                    name="column-social-item-5"
                    @click="${this.handleLinkClick}"
                  ></slot>
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
