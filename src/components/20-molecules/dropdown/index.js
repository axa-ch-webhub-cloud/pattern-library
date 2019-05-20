/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { ExpandSvg } from '@axa-ch/materials/icons';
import debounce from '../../../utils/debounce';
import styles from './index.scss';
import defineOnce from '../../../utils/define-once';

// module globals
const ArrowIcon = svg([ExpandSvg]);

const DEFAULTS = {
  selectClass: 'js-dropdown__content',
};

let openDropdownInstance;

// helper functions
const shouldMove = elem => {
  const bounding = elem.getBoundingClientRect();
  const bottomIsInViewport =
    bounding.bottom <=
    (window.innerHeight || document.documentElement.clientHeight);
  const enoughSpaceToMove = bounding.top > bounding.height;
  return !bottomIsInViewport && enoughSpaceToMove;
};

const handleViewportCheck = elem => {
  if (shouldMove(elem)) {
    elem.style.maxHeight = '200px';
  }
};

const forEach = (array, callback, scope) => {
  for (let i = 0, n = array.length; i < n; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

class AXADropdown extends LitElement {
  static get tagName() {
    return 'axa-dropdown';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      'data-test-id': { type: String, reflect: true },
      items: { type: Array, reflect: true },
      open: { type: Boolean, reflect: true },
      value: { type: String, reflect: true },
      title: { type: String, reflect: true },
      native: { type: Boolean },
      size: { type: String },
      onAXAValueChange: { type: Function },
    };
  }

  constructor() {
    super();
    this.onAXAValueChange = () => {};
    this.handleWindowKeyDown = this.handleWindowKeyDown.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
    this.handleResize = debounce(() => handleViewportCheck(this.dropdown), 250);
  }

  updateTitle() {
    const selectedItem = this.items.filter(item => item.isSelected);
    if (selectedItem.length > 0) {
      this.title = selectedItem[0].name;
    }
  }

  firstUpdated() {
    this.open = false;
    this.dropdown = this.shadowRoot.querySelector(`.${DEFAULTS.selectClass}`);

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleWindowKeyDown);
    window.addEventListener('click', this.handleWindowClick);

    this.updateTitle();
  }

  handleWindowClick() {
    if (this.open) {
      this.closeDropdown();
    }
  }

  handleWindowKeyDown(e) {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      e.preventDefault();
      this.closeDropdown();
    }
  }

  handleDropdownClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.toggleDropdown();
  }

  handleDropdownValueClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.title = e.target.dataset.name;
    this.value = e.target.dataset.value;
    this.updateCurrentItem(e.target.dataset.value);
    this.closeDropdown();
    const event = new CustomEvent('axa-change', {
      detail: e.target.dataset.value,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  handleDropdownNativeValueChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.value = e.target.value;
    this.title = e.target.value;
    this.updateCurrentItem(e.target.value);
    const event = new CustomEvent('axa-change', {
      detail: e.target.value,
      bubbles: true,
      cancelable: true,
    });
    this.dispatchEvent(event);
  }

  toggleDropdown() {
    if (!this.open) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  }

  openDropdown() {
    this.open = true;
    const links = this.shadowRoot.querySelectorAll('.js-dropdown__button');
    forEach(links, (index, link) => {
      link.setAttribute('tabindex', '0');
    });
    if (openDropdownInstance) {
      openDropdownInstance.open = false;
    }
    openDropdownInstance = this;
  }

  closeDropdown() {
    this.open = false;
    const links = this.shadowRoot.querySelectorAll('.js-dropdown__button');
    forEach(links, (index, link) => {
      link.setAttribute('tabindex', '-1');
    });
    openDropdownInstance = null; // help GC
  }

  updateCurrentItem(value) {
    this.items = this.items.map(item => {
      if (item.value.toString() === value.toString()) {
        item.isSelected = true;
        this.selectedItem = item;
      } else {
        item.isSelected = false;
      }
      return item;
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    const hasValue = newValue !== null;
    if (hasValue && name === 'items') {
      const currentItem = JSON.parse(newValue).filter(
        item => item.isSelected === true
      );
      this.title = currentItem[0] ? currentItem[0].name : this.title;
      const value = currentItem[0] ? currentItem[0].value : '';

      // Fire custom callbacks and events
      const eventValidation = new CustomEvent('AXA_CHANGE', {
        detail: value,
        bubbles: true,
        cancelable: true,
      });
      this.dispatchEvent(eventValidation);
      this.onAXAValueChange(value);
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleWindowKeyDown);
    window.removeEventListener('click', this.handleWindowClick);
  }

  render() {
    return html`
      <div class="m-dropdown${this.native ? ' m-dropdown--native-only' : ''}">
        <div class="m-dropdown__list m-dropdown__list--native">
          <select
            class="m-dropdown__select"
            @change="${this.handleDropdownNativeValueChange}"
          >
            ${this.items &&
              this.items.map(
                ({ name, value, isSelected, isInitialItem }) =>
                  html`
                    <option
                      class="m-dropdown__option"
                      ?disabled="${isInitialItem}"
                      value="${value}"
                      ?selected="${isSelected}"
                      >${name}</option
                    >
                  `
              )}
          </select>
          <div class="m-dropdown__select-icon">${ArrowIcon}</div>
        </div>
        <div class="m-dropdown__list m-dropdown__list--enhanced">
          <button
            @click="${this.handleDropdownClick}"
            type="button"
            class="m-dropdown__toggle js-dropdown__toggle"
          >
            <span>${this.title}</span>
            <div class="m-dropdown__select-icon">${ArrowIcon}</div>
          </button>
          <ul class="m-dropdown__content js-dropdown__content">
            ${this.items &&
              this.items.map(({ name, value, isSelected, isInitialItem }) => {
                let out = '';
                if (!isInitialItem) {
                  out = html`
                    <li
                      class="m-dropdown__item${isSelected
                        ? ' m-dropdown__item--is-selected'
                        : ''}"
                    >
                      <button
                        @click="${this.handleDropdownValueClick}"
                        tabindex="-1"
                        class="m-dropdown__button js-dropdown__button"
                        data-name="${name}"
                        data-value="${value}"
                        data-selected="${isSelected ? 'true' : 'false'}"
                      >
                        ${name}
                      </button>
                    </li>
                  `;
                }
                return out;
              })}
          </ul>
        </div>
      </div>
    `;
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);
export default AXADropdown;
