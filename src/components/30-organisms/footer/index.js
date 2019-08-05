// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import { html, svg, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map';
import { CaretSvg } from '@axa-ch/materials/icons';
import '@axa-ch/container';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import childStyles from './child.scss';

import InlineStyles from '../../../utils/inline-styles';

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const _listElementHasNoContent = label => {
  // Second part of statement is an IE11 workaround, because a slotted
  // empty node is not empty on IE11 (with the ShadyCss polyfill).
  return !label || label.nodeType === 3;
};

const _setMaxHeightToZero = panel => {
  panel.style.maxHeight = '0px';
};

const _renderFooterLinks = (columnIndex, itemIndex) => {
  return html`
    <li class="o-footer__main-content-panel-list-item js-footer_list-item">
      <slot name="column-${columnIndex}-item-${itemIndex}" />
    </li>
  `;
};

class AXAFooter extends InlineStyles {
  static get tagName() {
    return 'axa-footer';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get resetHeadingCss() {
    return childStyles;
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
    this.firstRender = true;
  }

  firstUpdated() {
    this.inlineStyles('resetHeadingCss');
  }

  prepareSlotsWithIndexes() {
    // set slotted numbers automatically for all titles and all items for each column
    // every title followed with items will be a column (dome sequence)
    // There is no wrapper for the columns but a counter that controls which
    // column to use
    // EXAMPLE IN PSEUDO DOM:
    //
    // TITLE -> start column 0
    // ITEM -> add item to column 0
    // ITEM -> add item to column 0
    // ITEM -> add item to column 0
    // ITEM -> add item to column 0
    //
    // TITLE -> start column 1
    // ITEM -> add item to column 1
    // ITEM -> add item to column 1
    // ITEM -> add item to column 1

    const childrenArr = Array.prototype.slice.call(this.children);

    const filter = criteria => child =>
      ~child.getAttribute('slot').indexOf(criteria);

    const noHeaderFilter = criteria => child => {
      const { nodeName } = child;
      return (
        filter(criteria)(child) && !~HEADINGS.indexOf(nodeName.toLowerCase())
      );
    };

    const onlyColumns = childrenArr.filter(
      // only accepts those slots that are columns
      filter('column-')
    );
    const onlySocials = childrenArr.filter(
      // only accepts those slots that are social columns
      noHeaderFilter('social-')
    );

    let currentColumnIndex = -1;
    let totalAmountPreviousColumns = 0;
    onlyColumns.forEach((child, index) => {
      const { nodeName } = child;
      if (~HEADINGS.indexOf(nodeName.toLowerCase())) {
        currentColumnIndex += 1;
        totalAmountPreviousColumns = index;
        child.setAttribute(
          'slot',
          child.getAttribute('slot').replace('-x-', `-${currentColumnIndex}-`)
        );
      } else {
        // -1 cause heading is always first of index
        const actualIndex = index - totalAmountPreviousColumns - 1;
        const slotName = `${child
          .getAttribute('slot')
          .replace('-x-', `-${currentColumnIndex}-`)}-${actualIndex}`;
        child.setAttribute('slot', slotName);
      }
    });

    onlySocials.forEach((child, index) => {
      const slotName = `${child.getAttribute('slot')}-${index}`;
      child.setAttribute('slot', slotName);
    });
  }

  render() {
    const accordionContent = {
      'o-footer__main-content-panel': true,
      'o-footer__main-content-panel--open': this._accordionActiveIndex === 0,
      'js-footer__main-content-panel': true,
    };

    const shortAccordionContent = {
      'o-footer__main-content-panel': true,
      'o-footer__main-content-panel--short': true,
      'o-footer__main-content-panel--open': this._accordionActiveIndex === 1,
      'js-footer__main-content-panel': true,
    };

    const accordionCaretState = index => {
      return {
        'o-footer__accordion-button-caret': true,
        'o-footer__accordion-button-caret--open':
          this._accordionActiveIndex === index,
      };
    };

    const showCaret = svg([CaretSvg || '']);

    const links = this.querySelectorAll('a');
    // Add event listsner on the <a> tag, which is inside a slot element.
    // That's why we cannot use @click, as it comes from light dom
    [].forEach.call(links, link => {
      link.addEventListener('click', this._handleLinkClick);
    });

    if (this.firstRender) {
      this.prepareSlotsWithIndexes();
      this.firstRender = false;
    }

    return html`
      <footer class="o-footer">
        <axa-container>
          <div class="o-footer__content">
            <div class="o-footer__collection">
              <div class="o-footer__main">
                <button
                  class="o-footer__accordion-button"
                  @click="${ev => this._handleAccordionClick(0, ev)}"
                >
                  <slot name="column-0-title" class="o-footer__title"></slot>
                  <span class="${classMap(accordionCaretState(0))}">
                    ${showCaret}
                  </span>
                </button>
                <ul class="${classMap(accordionContent)}">
                  ${repeat(
                    new Array(
                      this.querySelectorAll('[slot^="column-0-item-"]').length
                    ),
                    (item, index) => _renderFooterLinks(0, index)
                  )}
                </ul>
              </div>

              <div class="o-footer__main">
                <button
                  class="o-footer__accordion-button"
                  @click="${ev => this._handleAccordionClick(1, ev)}"
                >
                  <slot name="column-1-title" class="o-footer__title"></slot>
                  <span class="${classMap(accordionCaretState(1))}">
                    ${showCaret}
                  </span>
                </button>
                <ul class="${classMap(shortAccordionContent)}">
                  ${repeat(
                    new Array(
                      this.querySelectorAll('[slot^="column-1-item-"]').length
                    ),
                    (item, index) => _renderFooterLinks(1, index)
                  )}
                </ul>
              </div>
            </div>
            <div class="o-footer__social-media">
              <slot
                name="social-title"
                class="o-footer__social-media-title"
              ></slot>
              <ul class="o-footer__social-media-list">
                ${repeat(
                  new Array(
                    this.querySelectorAll('[slot^="social-item-"]').length
                  ),
                  (item, index) => html`
                    <li class="o-footer__social-media-item">
                      <slot name="social-item-${index}"></slot>
                    </li>
                  `
                )}
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
    this.shadowRoot.querySelectorAll('.js-footer_list-item').forEach(el => {
      const label = el.querySelector('slot').assignedNodes()[0];
      if (_listElementHasNoContent(label)) {
        el.style.display = 'none';
      }
    });
  }

  _handleAccordionClick = (index, ev) => {
    // Toggle opening of correct accordion
    this._accordionActiveIndex =
      index === this._accordionActiveIndex ? -1 : index;
    this.requestUpdate();

    const panels = ev.currentTarget.parentNode.parentNode.parentNode.querySelectorAll(
      '.js-footer__main-content-panel'
    );

    [].forEach.call(panels, panel => {
      _setMaxHeightToZero(panel);
    });

    const panel = ev.currentTarget.parentNode.querySelector(
      '.js-footer__main-content-panel'
    );
    if (this._accordionActiveIndex > -1) {
      const {
        parentNode: { offsetHeight },
        children,
      } = panel;
      // Set maxHeight to exactly the height of all elements combined
      panel.style.maxHeight = `${Math.ceil(offsetHeight * children.length)}px`;
    } else {
      _setMaxHeightToZero(panel);
    }
  };

  _handleLinkClick = ev => {
    if (this.clickevents) {
      ev.preventDefault();

      const { currentTarget } = ev;

      if (currentTarget) {
        this.onItemClick(currentTarget);
        this.dispatchEvent(
          new CustomEvent('axa-footer-click', {
            detail: currentTarget,
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
