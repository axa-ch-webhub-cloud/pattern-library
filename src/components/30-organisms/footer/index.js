import { html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { Expand_moreSvg } from '@axa-ch-webhub-cloud/materials/icons/material-design';
import AXAContainer from '@axa-ch-webhub-cloud/container';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import applyDefaults from '../../../utils/apply-defaults';
import styles from './index.scss';
import childStyles from './child.scss';

import InlineStyles from '../../../utils/inline-styles';

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const _setMaxHeightToZero = panel => {
  panel.style.maxHeight = '0px';
};

/**
 * The caret is a little UI icon visually indicating accordion open/closed state.
 *
 * Caret state change bypasses render() and directly manipulates dom-element classes on purpose here,
 * because the height measurement of open accordion items conflicted with a model-based always-rerender
 * approach in the past.
 * TODO: Explore how to get rid of height measurement or make it compatible with always-rerender,
 * then refactor and remove this code in the future.
 */
const _changeStateOfCaret = (caret, isActive) => {
  caret.classList[isActive ? 'add' : 'remove'](
    'o-footer__accordion-button-caret--open'
  );
};

const _collapseAllPanels = ev => {
  const panels =
    ev.currentTarget.parentNode.parentNode.parentNode.querySelectorAll(
      '.js-footer__main-content-panel'
    );

  [].forEach.call(panels, panel => {
    _setMaxHeightToZero(panel);
  });
};

const _closeAllCarets = ev => {
  const carets =
    ev.currentTarget.parentNode.parentNode.parentNode.querySelectorAll(
      '.js-footer__accordion-button-caret'
    );

  [].forEach.call(carets, caret => {
    _changeStateOfCaret(caret, false);
  });
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

  // Parent class InlineStyles needs a static method to retrieve styles;
  // the name of such method is passed when calling this.inlineStyles('resetHeadingCss');
  static get resetHeadingCss() {
    return childStyles;
  }

  static get properties() {
    return {
      // 'clickevents' prevents the throwing of native click events and sends a custom axa-footer-click event.
      clickevents: { type: Boolean },
      onItemClick: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
    this._accordionActiveIndex = -1;
    this._handleAccordionClick = this._handleAccordionClick.bind(this);
    this._handleLinkClick = this._handleLinkClick.bind(this);

    defineVersioned([AXAContainer], __VERSION_INFO__, this);
  }

  firstUpdated() {
    // call parent class method that adds inline styles
    this.inlineStyles('resetHeadingCss');
  }

  _revealChildrenWithSlotAttribute(rawNode, slotElements) {
    if (typeof rawNode.hasAttribute === 'function') {
      if (rawNode.hasAttribute('slot')) {
        slotElements.push(rawNode);
      }
      if (rawNode.hasChildNodes()) {
        const children = Array.prototype.slice.call(rawNode.childNodes);
        children.forEach(ch => {
          this._revealChildrenWithSlotAttribute(ch, slotElements);
        });
      }
    }
  }

  /**
   * A slot element needs to be a direct child of a web component. In case AEM
   * (and potentially other systems) would wrap those children (individually, say under a <div>),
   * they would no longer be direct children of a component. We work around this problem by
   * copying such nested slot attribute values upwards to the direct children of the component.
   *
   * @param {*} nestedChild A possibly nested child of the component, which - if truly nested - would properly belong to a direct child.
   */
  _setSlotNameFromNestedChildToDirectChildNodeOfComponent(nestedChild) {
    let directChild = nestedChild;
    for (
      let parent;
      // eslint-disable-next-line no-cond-assign
      (parent = directChild.parentNode) && parent !== this; // is this still a *nested* child, whose parent node is not yet host element 'this'?
      directChild = parent // yes, so move 1 step up towards the direct child
    );
    // we established a nested-child situation and identified its corresponding, but distinct direct child?
    if (directChild && directChild !== nestedChild) {
      // yes, so copy the nested slot attribute value to the direct-child slot
      directChild.setAttribute('slot', nestedChild.getAttribute('slot'));
    }
    return directChild;
  }

  /**
   * Takes all child elements and extracts the ones that come with a
   * slot-attribute. Those elements will then be changed to be distinguishable
   * from each other. Each block of links will need a title, so that the block will be displayed.
   *
   * Each title marks the beginning of a new column:
   *
   * TITLE -> start column 0
   * ITEM -> add item to column 0
   * ITEM -> add item to column 0
   * ITEM -> add item to column 0
   * ITEM -> add item to column 0
   *
   * TITLE* -> start column 1
   * ITEM -> add item to column 1
   * ITEM -> add item to column 1
   * ITEM -> add item to column 1
   */
  _prepareSlotsWithIndexes() {
    const slotElements = Array.prototype.slice.call(
      this.querySelectorAll('[slot]')
    );

    const childrenArray = slotElements.map(c =>
      this._setSlotNameFromNestedChildToDirectChildNodeOfComponent(c)
    );

    const filter = criteria => child =>
      child.getAttribute('slot').includes(criteria);

    const noHeaderFilter = criteria => child => {
      const { nodeName } = child;
      return (
        filter(criteria)(child) && !HEADINGS.includes(nodeName.toLowerCase())
      );
    };

    const onlyColumns = childrenArray.filter(
      // only accepts those slots that are columns
      filter('column-')
    );

    const onlySocials = childrenArray.filter(
      // only accepts those slots that are social columns
      noHeaderFilter('social-')
    );

    let currentColumnIndex = -1;
    let totalAmountPreviousColumns = 0;
    onlyColumns.forEach((child, index) => {
      const { nodeName } = child;
      if (HEADINGS.includes(nodeName.toLowerCase())) {
        currentColumnIndex += 1;
        totalAmountPreviousColumns = index;
        child.setAttribute(
          'slot',
          child
            .getAttribute('slot')
            .replace('column-title', `column-${currentColumnIndex}-title`)
        );
      } else {
        // -1 because TITLE is always first of dom index -> see * in big comment above
        const actualIndex = index - totalAmountPreviousColumns - 1;
        child.setAttribute(
          'slot',
          `column-${currentColumnIndex}-item-${actualIndex}`
        );
      }
    });

    onlySocials.forEach((child, index) => {
      const slotName = `social-item-${index}`;
      child.setAttribute('slot', slotName);
    });
  }

  _addListenersToLinks(remove) {
    const links = [...this.querySelectorAll('a')];
    if (remove) {
      // clean up listeners
      links.forEach(link =>
        link.removeEventListener('click', this._handleLinkClick)
      );
      return;
    }
    // add event listener to each link/<a> tag, which is inside a slot element,
    // hence cannot use @click, as it resides in light DOM
    links.forEach(link =>
      link.addEventListener('click', this._handleLinkClick)
    );
  }

  // throttle re-rendering to once per frame (so that children added late by browser HTML parsers are defined)
  performUpdate() {
    new Promise(resolve =>
      // eslint-disable-next-line no-promise-executor-return
      window.requestAnimationFrame(() => resolve())
    ).then(() => super.performUpdate());
  }

  render() {
    const accordionContent = {
      'o-footer__main-content-panel': true,
      'js-footer__main-content-panel': true,
    };

    const shortAccordionContent = {
      'o-footer__main-content-panel': true,
      'o-footer__main-content-panel--short': true,
      'js-footer__main-content-panel': true,
    };

    const accordionCaretState = {
      'o-footer__accordion-button-caret': true,
      'js-footer__accordion-button-caret': true,
    };

    const showCaret = unsafeHTML(Expand_moreSvg);

    this._addListenersToLinks();

    this._prepareSlotsWithIndexes();

    /* eslint-disable indent */
    return versionedHtml(this)`
      <footer class="o-footer">
        <axa-container>
          <div class="o-footer__content">
            <div class="o-footer__collection">
              <div class="o-footer__main">
                ${
                  this.querySelectorAll('[slot^="column-0-item-"]').length
                    ? html`
                        <button
                          class="o-footer__accordion-button"
                          @click="${ev => this._handleAccordionClick(0, ev)}"
                        >
                          <slot
                            name="column-0-title"
                            class="o-footer__title"
                          ></slot>
                          <span class="${classMap(accordionCaretState)}">
                            ${showCaret}
                          </span>
                        </button>
                        <ul class="${classMap(accordionContent)}">
                          ${repeat(
                            new Array(
                              this.querySelectorAll(
                                '[slot^="column-0-item-"]'
                              ).length
                            ),
                            (item, index) => _renderFooterLinks(0, index)
                          )}
                        </ul>
                      `
                    : ''
                }
              </div>

              <div class="o-footer__main">
                ${
                  this.querySelectorAll('[slot^="column-1-item-"]').length
                    ? html`
                        <button
                          class="o-footer__accordion-button"
                          @click="${ev => this._handleAccordionClick(1, ev)}"
                        >
                          <slot
                            name="column-1-title"
                            class="o-footer__title"
                          ></slot>
                          <span class="${classMap(accordionCaretState)}">
                            ${showCaret}
                          </span>
                        </button>
                        <ul class="${classMap(shortAccordionContent)}">
                          ${repeat(
                            new Array(
                              this.querySelectorAll(
                                '[slot^="column-1-item-"]'
                              ).length
                            ),
                            (item, index) => _renderFooterLinks(1, index)
                          )}
                        </ul>
                      `
                    : ''
                }
                
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

  _handleAccordionClick(index, ev) {
    // toggle opening of correct accordion
    this._accordionActiveIndex =
      index === this._accordionActiveIndex ? -1 : index;

    _collapseAllPanels(ev);
    _closeAllCarets(ev);

    const panel = ev.currentTarget.parentNode.querySelector(
      '.js-footer__main-content-panel'
    );

    if (this._accordionActiveIndex > -1) {
      const {
        parentNode: { offsetHeight },
        children,
      } = panel;

      // set maxHeight to exactly the height of all elements combined
      panel.style.maxHeight = `${Math.ceil(offsetHeight * children.length)}px`;

      const caret = ev.currentTarget.parentNode.querySelector(
        '.js-footer__accordion-button-caret'
      );

      // sets the class for the caret open state
      _changeStateOfCaret(caret, true);
    } else {
      _setMaxHeightToZero(panel);
    }
  }

  _handleLinkClick(ev) {
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
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // remove link listeners
    this._addListenersToLinks(true);
  }
}

defineVersioned([AXAFooter], __VERSION_INFO__);

export default AXAFooter;
