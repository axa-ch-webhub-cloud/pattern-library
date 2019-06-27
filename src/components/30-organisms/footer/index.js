// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, svg, css, unsafeCSS } from 'lit-element';
import { CaretSvg } from '@axa-ch/materials/icons';
import '@axa-ch/container';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

import { classMap } from 'lit-html/directives/class-map';

const _listElementHasNoContent = label => {
  return !label || label.nodeType === 3;
};

const _extractNestedHref = ev => {
  const { target } = ev;
  let element;
  if (!target || !target.href) {
    element = ev;
    while (!element.href) {
      if (element.target && element.target.parentNode) {
        element = element.target.parentNode;
      } else if (element.parentNode) {
        element = element.parentNode;
      } else {
        return undefined;
      }
    }
  }
  return element === undefined ? target.href : element.href;
};

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
      // 'clickevents' prevents the throwing of native click events and sends a custom axa-footer-click event.
      clickevents: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.clickevents = false;
    this.onItemClick = () => {};
    this._accordionActiveIndex = -1;
  }

  render() {
    const accordionContent = {
      'o-footer__main-content-panel': true,
      'o-footer__main-content-panel--open': this._accordionActiveIndex === 0,
    };

    const shortAccordionContent = {
      'o-footer__main-content-panel': true,
      'o-footer__main-content-panel--short': true,
      'o-footer__main-content-panel--open': this._accordionActiveIndex === 1,
    };

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
                  @click="${() => this._handleAccordionClick(0)}"
                >
                  <slot name="column-0-title" class="o-footer__title"></slot>
                  <span
                    class="o-footer__accordion-button-caret o-footer__accordion-button-caret${this
                      ._accordionActiveIndex === 0
                      ? '--open'
                      : ''}"
                  >
                    ${svg([CaretSvg || ''])}
                  </span>
                </button>
                <ul class="${classMap(accordionContent)}">
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-0"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-1"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-2"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-3"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-4"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-5"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-6"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-0-item-7"
                      @click="${this._handleLinkClick}"
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
                  @click="${() => this._handleAccordionClick(1)}"
                >
                  <slot name="column-1-title" class="o-footer__title"></slot>
                  <span
                    class="o-footer__accordion-button-caret o-footer__accordion-button-caret${this
                      ._accordionActiveIndex === 1
                      ? '--open'
                      : ''}"
                  >
                    ${svg([CaretSvg || ''])}
                  </span>
                </button>
                <ul class="${classMap(shortAccordionContent)}">
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-1-item-0"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-1-item-1"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-1-item-2"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                  <li class="o-footer__main-content-panel-list-item">
                    <slot
                      name="column-1-item-3"
                      @click="${this._handleLinkClick}"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class="o-footer__social-media">
              <slot
                name="social-title"
                class="o-footer__social-media-title"
              ></slot>
              <ul class="o-footer__social-media-list">
                <li class="o-footer__social-media-item">
                  <slot
                    name="social-item-0"
                    @click="${this._handleLinkClick}"
                  ></slot>
                </li>
                <li class="o-footer__social-media-item">
                  <slot
                    name="social-item-1"
                    @click="${this._handleLinkClick}"
                  ></slot>
                </li>
                <li class="o-footer__social-media-item">
                  <slot
                    name="social-item-2"
                    @click="${this._handleLinkClick}"
                  ></slot>
                </li>
                <li class="o-footer__social-media-item">
                  <slot
                    name="social-item-3"
                    @click="${this._handleLinkClick}"
                  ></slot>
                </li>
                <li class="o-footer__social-media-item">
                  <slot
                    name="social-item-4"
                    @click="${this._handleLinkClick}"
                  ></slot>
                </li>
                <li class="o-footer__social-media-item">
                  <slot
                    name="social-item-5"
                    @click="${this._handleLinkClick}"
                  ></slot>
                </li>
              </ul>
            </div>
          </div>
        </axa-container>
      </footer>
    `;
  }

  updated() {
    this._removeEmptyListElements();
  }

  _removeEmptyListElements() {
    this.shadowRoot
      .querySelectorAll('.o-footer__main-content-panel-list-item')
      .forEach(el => {
        const label = el.querySelector('slot').assignedNodes()[0];
        // Second part of IF-statement is an IE11 workaround
        if (_listElementHasNoContent(label)) {
          el.style.display = 'none';
        }
      });
  }

  _handleAccordionClick = index => {
    this._accordionActiveIndex =
      index === this._accordionActiveIndex ? -1 : index;
    this.requestUpdate();
  };

  _handleLinkClick = ev => {
    if (this.clickevents) {
      ev.preventDefault();

      const href = _extractNestedHref(ev);

      if (href) {
        this.onItemClick(href);
        this.dispatchEvent(
          new CustomEvent('axa-footer-click', {
            detail: href,
            bubbles: true,
            cancelable: true,
          })
        );
      }
    }
  };
}

defineOnce(AXAFooter.tagName, AXAFooter);

export default AXAFooter;
