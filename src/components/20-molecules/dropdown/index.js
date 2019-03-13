import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import debounce from './utils/debounce';
import styles from './index.scss';

// TODO import icon from '@axa-ch/materials and extend them with classes'
const ArrowIcon = svg`<svg class="a-icon__svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
<path fill="currentColor" d="M16 28.067c-0.533 0-1-0.2-1.4-0.6l-14-14c-1.8-1.8 1-4.667 2.8-2.8l12.6 12.533 12.6-12.533c1.8-1.8 4.667 1 2.8 2.8l-14 14c-0.333 0.4-0.867 0.6-1.4 0.6z"></path>
</svg>
`;

const DEFAULTS = {
  isOpenClass: 'is-dropdown-open',
  selectClass: 'js-dropdown__content',
};

class AXADropdown extends LitElement {
  static tagName = 'axa-dropdown';
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  static get properties() {
    return {
      items: { type: Array },
      native: { type: Boolean },
      size: { type: String },
      title: { type: String },
      value: { type: String },
    };
  }

  firstUpdated() {
    this.dropdown = this.shadowRoot.querySelector(`.${DEFAULTS.selectClass}`);
    this.dropdownLinks = this.querySelectorAll('.js-dropdown__link');
    window.addEventListener('resize', debounce(() => this.handleViewportCheck(this.dropdown), 250));
  }

  connectedCallback() {
    super.connectedCallback();
    window.axaComponents = window.axaComponents || {};
    this.isOpen = false;
    this.selectedItem = this.items.filter(item => item.isSelected)[0] || null;
    this.title = this.selectedItem.name;

    window.axaComponents.openDropdownInstance = false;
    window.addEventListener('keydown', e => this.handleWindowKeyDown(e));
    window.addEventListener('click', e => this.handleWindowClick(e));
  }

  render() {
    return html`
      <div class="m-dropdown${this.native ? ' m-dropdown--native-only' : ''}">
        <div class="m-dropdown__list m-dropdown__list--native">
          <select class="m-dropdown__select" @change="${this.handleDropdownNativeValueChange}">
            ${this.items &&
              this.items.map(
                ({ name, value, isSelected, isInitialItem }) =>
                  html`
                    <option class="m-dropdown__option" ?disabled="${isInitialItem}" value="${value}" ?selected="${isSelected}"
                      >${name}</option
                    >
                  `
              )}
          </select>
          <div class="m-dropdown__select-icon">${ArrowIcon}</div>
        </div>
        <div class="m-dropdown__list m-dropdown__list--enhanced">
          <button @click="${this.handleDropdownClick}" type="button" class="m-dropdown__toggle js-dropdown__toggle">
            <span>${this.title}</span>
            <div class="m-dropdown__select-icon">${ArrowIcon}</div>
          </button>
          <ul class="m-dropdown__content js-dropdown__content">
            ${this.items &&
              this.items.map(({ name, value, isSelected, isInitialItem }, index) =>
                !isInitialItem
                  ? html`
                      <li class="m-dropdown__item${isSelected ? ' m-dropdown__item--is-selected' : ''}">
                        <button
                          @click="${this.handleDropdownValueClick}"
                          tabindex="-1"
                          class="m-dropdown__button js-dropdown__button"
                          data-name="${name}"
                          data-index="${index}"
                          data-value="${value}"
                          data-selected="${isSelected ? 'true' : 'false'}"
                        >
                          ${name}
                        </button>
                      </li>
                    `
                  : ''
              )}
          </ul>
        </div>
      </div>
    `;
  }

  handleWindowClick() {
    if (this.isOpen) {
      this.closeDropdown(this);
    }
  }

  handleWindowKeyDown(e) {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      e.preventDefault();
      this.closeDropdown(this);
    }
  }

  handleViewportCheck(elem) {
    if (this.shouldMove(elem)) {
      elem.style.maxHeight = '200px';
    }
  }

  shouldMove(elem) {
    const bounding = elem.getBoundingClientRect();
    const bottomIsInViewport = bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    const enoughSpaceToMove = bounding.top > bounding.height;
    return !bottomIsInViewport && enoughSpaceToMove;
  }

  closeOpenDropdowns() {
    if (window.axaComponents.openDropdownInstance && this !== window.axaComponents.openDropdownInstance) {
      this.closeDropdown(window.axaComponents.openDropdownInstance);
    }
  }

  handleDropdownClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.closeOpenDropdowns();
    this.toggleDropdown();
  }

  handleDropdownValueClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.title = e.target.dataset.name;
    this.value = e.target.dataset.value;
    this.updateCurrentItem(e.target.dataset.value);
    this.closeDropdown(this);
    const event = new CustomEvent('AXA_CHANGE', { detail: e.target.dataset.value, bubbles: true, cancelable: true });
    this.dispatchEvent(event);
  }

  handleDropdownNativeValueChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.value = e.target.value;
    this.title = e.target.value;
    this.updateCurrentItem(e.target.value);
    const event = new CustomEvent('AXA_CHANGE', { detail: e.target.value, bubbles: true, cancelable: true });
    this.dispatchEvent(event);
  }

  forEach(array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  }

  toggleDropdown() {
    if (!this.isOpen) {
      this.openDropdown(this);
    } else {
      this.closeDropdown(this);
    }
  }

  openDropdown(elem) {
    elem.classList.add(DEFAULTS.isOpenClass);
    elem.isOpen = true;
    const links = this.shadowRoot.querySelectorAll('.js-dropdown__button');
    elem.forEach(links, (index, link) => {
      link.setAttribute('tabindex', '0');
    });
    window.axaComponents.openDropdownInstance = elem;
  }

  closeDropdown(elem) {
    elem.classList.remove(DEFAULTS.isOpenClass);
    const links = this.shadowRoot.querySelectorAll('.js-dropdown__button');
    elem.forEach(links, (index, link) => {
      link.setAttribute('tabindex', '-1');
    });
    elem.isOpen = false;
    window.axaComponents.openDropdownInstance = false;
  }

  updateCurrentItem(value) {
    const hasValue = value !== null;
    this.items = this.items.map(item => {
      if (hasValue && item.value.toString() === value.toString()) {
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

    if (hasValue && name === 'value') {
      this.updateCurrentItem(newValue.toString());
      if (this.selectedItem) {
        this.title = this.selectedItem.name;
      }
    }
  }

  disconnectedCallback() {
    window.removeEventListener('resize', debounce(() => this.handleViewportCheck(this.dropdown), 250));
    window.removeEventListener('keydown', e => this.handleWindowKeyDown(e));
    window.removeEventListener('click', e => this.handleWindowClick(e));
  }
}

customElements.define(AXADropdown.tagName, AXADropdown);
