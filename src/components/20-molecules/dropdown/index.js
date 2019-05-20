/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ExpandSvg } from '@axa-ch/materials/icons';
import debounce from '../../../utils/debounce';
import styles from './index.scss';
import defineOnce from '../../../utils/define-once';
import fireCustomEvent from '../../../utils/custom-event';

// module constants
const ARROW_ICON = svg([ExpandSvg]);
const DEBOUNCE_DELAY = 250; // milliseconds
const DROPDOWN_UL_MAXHEIGHT = '200px';

// module globals
let openDropdownInstance;

// helper functions
const shouldMove = elem => {
  const boundingBox = elem.getBoundingClientRect();
  const bottomIsInViewport =
    boundingBox.bottom <=
    (window.innerHeight || document.documentElement.clientHeight);
  const enoughSpaceToMove = boundingBox.top > boundingBox.height;
  return !bottomIsInViewport && enoughSpaceToMove;
};

const handleViewportCheck = elem => {
  if (shouldMove(elem)) {
    elem.style.maxHeight = DROPDOWN_UL_MAXHEIGHT;
  }
};

const forEach = (array, callback, scope) => {
  for (let i = 0, n = array.length; i < n; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

const nativeItemsMapper = ({ name, value, isSelected, isInitialItem }) =>
  html`
    <option
      class="m-dropdown__option"
      ?disabled="${isInitialItem}"
      value="${value}"
      ?selected="${isSelected}"
      >${name}</option
    >
  `;

const contentItemsMapper = clickHandler => ({
  name,
  value,
  isSelected,
  isInitialItem,
}) => {
  const classes = {
    'm-dropdown__item': true,
    'm-dropdown__item--is-selected': isSelected,
  };
  return isInitialItem
    ? html``
    : html`
        <li class="${classMap(classes)}">
          <button
            @click="${clickHandler}"
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
};

// CE
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
      items: { type: Array },
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
    // property defaults
    this.onAXAValueChange = () => {};
    // bound event handlers (so scope and de-registration work as expected)
    this.handleWindowKeyDown = this.handleWindowKeyDown.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
    this.handleDropdownValueClick = this.handleDropdownValueClick.bind(this);
    this.handleResize = debounce(
      () => handleViewportCheck(this.dropdown),
      DEBOUNCE_DELAY
    );
  }

  updateTitle(items) {
    const selectedItems = (items || this.items).filter(item => item.isSelected);
    const firstSelectedItem = selectedItems[0];
    this.title = firstSelectedItem ? firstSelectedItem.name : this.title;
    return firstSelectedItem;
  }

  firstUpdated() {
    this.open = false;
    this.dropdown = this.shadowRoot.querySelector('.js-dropdown__content');
    this.dropdownLinks = this.querySelectorAll('.js-dropdown__link');

    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleWindowKeyDown);
    window.addEventListener('click', this.handleWindowClick);

    this.updateTitle();
  }

  handleWindowClick() {
    if (this.open) {
      this.openDropdown(false);
    }
  }

  handleWindowKeyDown(e) {
    const { key, keyCode } = e;
    if (key === 'Escape' || key === 'Esc' || keyCode === 27) {
      e.preventDefault();
      this.openDropdown(false);
    }
  }

  handleDropdownClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.toggleDropdown();
  }

  handleDropdownValueEvent(type, e) {
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;
    this.title = type === 'native' ? target.name : target.dataset.name;
    this.value = type === 'native' ? target.value : target.dataset.value;
    this.updateCurrentItems(this.value);
    this.openDropdown(false);
    fireCustomEvent('axa-change', this.value, this);
  }

  handleDropdownValueClick(e) {
    this.handleDropdownValueEvent('value', e);
  }

  handleDropdownNativeValueChange(e) {
    this.handleDropdownValueEvent('native', e);
  }

  toggleDropdown() {
    this.openDropdown(!this.open);
  }

  openDropdown(open) {
    this.open = open;
    const links = this.shadowRoot.querySelectorAll('.js-dropdown__button');
    forEach(links, (_, link) =>
      link.setAttribute('tabindex', open ? '0' : '-1')
    );
    if (open && openDropdownInstance) {
      openDropdownInstance.open = false;
    }
    openDropdownInstance = open ? this : /* help GC */ null;
  }

  updateCurrentItems(value) {
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
    // irrelevant attribute change?
    if (newValue === null || name !== 'items') {
      return;
    }
    // for changed nonempty 'items' attribute value:
    let currentItems;
    try {
      currentItems = JSON.parse(newValue);
    } catch (e) {
      currentItems = [];
      // eslint-disable-next-line no-console
      console.warn(
        `axa-dropdown: skipped illformed 'items' attribute JSON string "${newValue}"`
      );
    }

    const firstSelectedItem = this.updateTitle(currentItems);
    // note: it's crucial to *not* update this.value here (otherwise endless update loop)!
    const value = firstSelectedItem ? firstSelectedItem.value : '';

    // fire custom events and callback
    fireCustomEvent('axa-change', value, this);
    this.onAXAValueChange(value);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleWindowKeyDown);
    window.removeEventListener('click', this.handleWindowClick);
  }

  render() {
    const { items, native } = this;
    const classes = { 'm-dropdown': true, 'm-dropdown--native-only': native };

    return html`
      <div class="${classMap(classes)}">
        <div class="m-dropdown__list m-dropdown__list--native">
          <select
            class="m-dropdown__select"
            @change="${this.handleDropdownNativeValueChange}"
          >
            ${items && items.map(nativeItemsMapper)}
          </select>
          <div class="m-dropdown__select-icon">${ARROW_ICON}</div>
        </div>
        <div class="m-dropdown__list m-dropdown__list--enhanced">
          <button
            @click="${this.handleDropdownClick}"
            type="button"
            class="m-dropdown__toggle js-dropdown__toggle"
          >
            <span>${this.title}</span>
            <div class="m-dropdown__select-icon">${ARROW_ICON}</div>
          </button>
          <ul class="m-dropdown__content js-dropdown__content">
            ${items &&
              items.map(contentItemsMapper(this.handleDropdownValueClick))}
          </ul>
        </div>
      </div>
    `;
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);
export default AXADropdown;
