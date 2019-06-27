/* eslint-disable import/no-extraneous-dependencies */
import { html, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ExpandSvg, FilledTickSvg } from '@axa-ch/materials/icons';
import debounce from '../../../utils/debounce';
import styles from './index.scss';
import NoShadowDOM from '../../../utils/no-shadow';
import defineOnce from '../../../utils/define-once';
import fireCustomEvent from '../../../utils/custom-event';

// module constants
const ARROW_ICON = svg([ExpandSvg]);
const VALID_ICON = svg([FilledTickSvg]);
const DEBOUNCE_DELAY = 250; // milliseconds
const DROPDOWN_UL_MAXHEIGHT = '200px';
const EMPTY_FUNCTION = () => {};

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
  if (elem && shouldMove(elem)) {
    elem.style.maxHeight = DROPDOWN_UL_MAXHEIGHT;
  }
};

const forEach = (array, callback, scope) => {
  for (let i = 0, n = array.length; i < n; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

const nativeItemsMapper = ({ name, value, selected, disabled }, index) =>
  html`
    <option
      class="m-dropdown__option"
      ?disabled="${disabled}"
      value="${value}"
      ?selected="${selected}"
      data-index="${index}"
      >${name}</option
    >
  `;

const contentItemsMapper = clickHandler => (
  { name, selected, disabled },
  index
) => {
  const classes = {
    'm-dropdown__item': true,
    'm-dropdown__item--is-selected': selected,
  };
  return disabled
    ? html``
    : html`
        <li class="${classMap(classes)}">
          <button
            @click="${clickHandler}"
            tabindex="-1"
            class="m-dropdown__button js-dropdown__button"
            data-index="${index}"
          >
            ${name}
          </button>
        </li>
      `;
};

// CE
class AXADropdown extends NoShadowDOM {
  static get tagName() {
    return 'axa-dropdown';
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      'data-test-id': { type: String, reflect: true },
      items: { type: Array },
      open: { type: Boolean, reflect: true },
      value: { type: String },
      title: { type: String, reflect: true },
      native: { type: Boolean },
      valid: { type: Boolean, reflect: true },
      error: { type: String, reflect: true },
      isReact: { type: Boolean },
    };
  }

  set value(newValue) {
    const {
      state: { isControlled, value },
    } = this;
    // first value coming in indicates controlledness?
    if (!isControlled && newValue !== undefined) {
      // yes, remember in model state
      this.state.isControlled = true;
    }
    this.state.value = newValue;
    this.requestUpdate('value', value);
  }

  get value() {
    return this.state.value;
  }

  constructor() {
    super();
    // property defaults
    this.onChange = EMPTY_FUNCTION;
    this.onAXAValueChange = EMPTY_FUNCTION;
    // internal properties
    this.state = { isControlled: false };
    // bound event handlers (so scope and de-registration work as expected)
    this.handleWindowKeyDown = this.handleWindowKeyDown.bind(this);
    this.handleWindowClick = this.handleWindowClick.bind(this);
    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleResize = debounce(
      () => handleViewportCheck(this.dropdown),
      DEBOUNCE_DELAY
    );
  }

  findSelected(items) {
    this.selectedIndex = (items || this.items).findIndex(item => item.selected);
    return this.selectedIndex;
  }

  findByValue(value) {
    this.selectedIndex = this.items.findIndex(item => item.value === value);
    return this.selectedIndex;
  }

  updateTitle(items) {
    const selectedItem = (items || this.items)[this.selectedIndex];
    this.title = (selectedItem || { name: this.title }).name;
    if (this.select) {
      this.select.selectedIndex = this.selectedIndex;
    }
    return selectedItem;
  }

  openDropdown(open) {
    this.open = open;
    const links = this.querySelectorAll('.js-dropdown__button');
    forEach(links, (_, link) =>
      link.setAttribute('tabindex', open ? '0' : '-1')
    );
    if (open && openDropdownInstance) {
      openDropdownInstance.open = false;
    }
    openDropdownInstance = open ? this : /* help GC */ null;
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
    // toggle dropdown
    this.openDropdown(!this.open);
  }

  handleDropdownItemClick(e) {
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;
    const clickedItemIndex =
      target instanceof HTMLSelectElement
        ? target.selectedIndex
        : target.dataset.index;
    const {
      items,
      state: { isControlled },
      onChange,
    } = this;
    const syntheticEvent = { target: items[clickedItemIndex | 0] };
    onChange(syntheticEvent);
    this.openDropdown(false);
    if (!isControlled) {
      // causes re-render in next microtask!
      this.updateCurrentItems(clickedItemIndex); // side-effect: changed this.value
      fireCustomEvent('axa-change', this.value, this);
    }
  }

  updateCurrentItems(_item) {
    const { items } = this;
    let itemIndex = _item | 0; // | 0: coerce to integer
    if (!/^\d+$/.test(_item)) {
      itemIndex = items.findIndex(currentItem => currentItem.value === _item);
    }
    if (itemIndex < 0) {
      return;
    }
    const { name, value } = items[itemIndex];
    if (typeof name !== 'string') {
      return;
    }
    this.selectedIndex = itemIndex;
    if (this.select) {
      this.select.selectedIndex = itemIndex;
    }
    this.title = name;
    this.value = value || name;
    const newItems = items.map((item, index) => {
      item.selected = index === itemIndex;
      return item;
    });
    this.items = newItems;
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
    this.findSelected();
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

  shouldUpdate(changedProperties) {
    if (
      changedProperties.has('value') &&
      this.state.isControlled &&
      this.isReact
    ) {
      this.updateCurrentItems(this.findByValue(this.value));
    }
    return true;
  }

  /* note: js-XXX classes mark DOM nodes independently of styling needs for
     purposes of programmatic DOM access, therefore need to be preserved even
     when style refactoring would rename other classes.
  */
  render() {
    const {
      items = [],
      title,
      native,
      error,
      isReact,
      state: { isControlled },
      handleDropdownItemClick,
      handleDropdownClick,
    } = this;
    this.state.isControlled = isReact && isControlled;

    const classes = { 'm-dropdown': true, 'm-dropdown--native-only': native };
    return html`
      <div class="${classMap(classes)}">
        <div class="m-dropdown__list m-dropdown__list--native">
          <select
            class="m-dropdown__select js-dropdown__select"
            @change="${handleDropdownItemClick}"
          >
            ${items.map(nativeItemsMapper)}
          </select>
          <div class="m-dropdown__select-icon">${ARROW_ICON}</div>
        </div>
        <div class="m-dropdown__list m-dropdown__list--enhanced">
          <button
            @click="${handleDropdownClick}"
            type="button"
            class="m-dropdown__toggle js-dropdown__toggle"
          >
            <span>${title}</span>
            <div class="m-dropdown__select-icon">${ARROW_ICON}</div>
          </button>
          <ul class="m-dropdown__content js-dropdown__content">
            ${items.map(contentItemsMapper(handleDropdownItemClick))}
          </ul>
        </div>
        <div class="m-dropdown__valid-icon">${VALID_ICON}</div>
      </div>
      <div class="m-dropdown__error">${error}</div>
    `;
  }

  firstUpdated() {
    this.open = false;
    this.dropdown = this.querySelector('.js-dropdown__content');
    this.select = this.querySelector('.js-dropdown__select');
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleWindowKeyDown);
    window.addEventListener('click', this.handleWindowClick);
  }

  updated() {
    this.updateTitle();
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);
export default AXADropdown;
