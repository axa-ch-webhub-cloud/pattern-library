/* eslint-disable import/no-extraneous-dependencies */
import { html, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ExpandSvg } from '@axa-ch/materials/icons';
import debounce from '../../../utils/debounce';
import styles from './index.scss';
import NoShadowDOM from '../../../utils/no-shadow';
import defineOnce from '../../../utils/define-once';
import fireCustomEvent from '../../../utils/custom-event';

// module constants
const ARROW_ICON = svg([ExpandSvg]);
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
      name: { type: String, reflect: true },
      title: { type: String, reflect: true },
      native: { type: Boolean },
      valid: { type: Boolean, reflect: true },
      error: { type: String, reflect: true },
      embedded: { type: Boolean, reflect: true },
      isReact: { type: Boolean },
    };
  }

  set value(newValue) {
    const {
      state: { isControlled, value, firstTime },
    } = this;
    // first value coming in indicates controlledness?
    if (!isControlled && newValue !== undefined && firstTime) {
      // yes, remember in model state
      this.state.isControlled = true;
    }
    // update state
    this.state.value = newValue;
    this.state.firstTime = false;
    // manual re-render, necessary for custom setters
    this.requestUpdate('value', value);
  }

  get value() {
    return this.state.value;
  }

  constructor() {
    super();
    // property defaults
    this.onChange = EMPTY_FUNCTION;
    this.onFocus = EMPTY_FUNCTION;
    this.onBlur = EMPTY_FUNCTION;
    // internal properties
    this.state = { isControlled: false, firstTime: true };
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
    // if click 'lands' on native <select> (narrow window widths or 'native' mode),
    // use DOM-API 'selectedIndex' to find out which option the click targeted
    const clickedItemIndex =
      target instanceof HTMLSelectElement
        ? target.selectedIndex
        : target.dataset.index;
    const {
      items,
      state: { isControlled },
      onChange,
    } = this;
    // allow idiomatic event.target.value in onChange callback!
    const syntheticEvent = { target: items[clickedItemIndex | 0] }; // | 0: coerce to integer
    onChange(syntheticEvent);
    this.openDropdown(false);
    if (!isControlled) {
      // causes re-render in next microtask!
      this.updateCurrentItems(clickedItemIndex); // side-effect: changed this.value
      this.updateTitle();
      fireCustomEvent('axa-change', this.value, this);
    }
  }

  updateCurrentItems(_item) {
    const { items } = this;
    let itemIndex = _item | 0; // | 0: coerce to integer
    // not a stringified data-index value?
    if (!/^\d+$/.test(_item)) {
      // compute index by scanning all items for matching value
      itemIndex = items.findIndex(currentItem => currentItem.value === _item);
    }
    // matching value not found?
    if (itemIndex < 0) {
      return;
    }
    const { name, value } = items[itemIndex];
    if (typeof name !== 'string') {
      return;
    }
    // equip our dropdown with same DOM API as native
    this.selectedIndex = itemIndex;
    if (this.select) {
      // ... and keep in sync with embedded <select>
      this.select.selectedIndex = itemIndex;
    }
    this.title = name;
    this.value = value || name;
    // clone items array with updated selected property
    // (the fact that items are cloned ensures re-render!)
    const newItems = items.map((item, index) => {
      item.selected = index === itemIndex;
      return item;
    });
    this.items = newItems;
  }

  /* last overrideable lifecycle point *before* render:
     put side-effects there that influence render *and* need access to changed
     properties */
  shouldUpdate(changedProperties) {
    // controlledness is only meaningful if the isReact property has been set
    // via the React wrapper
    this.state.isControlled = this.state.isControlled && this.isReact;
    // controlling React application imposes new 'value'?
    if (changedProperties.has('value') && this.state.isControlled) {
      this.updateCurrentItems(this.findByValue(this.value));
    }
    // 'items' property changed, potentially invalidating title?
    if (changedProperties.has('items')) {
      this.findSelected();
      this.updateTitle();
    }
    return true;
  }

  render() {
    const {
      items = [],
      name = '',
      title,
      native,
      valid,
      error,
      handleDropdownItemClick,
      handleDropdownClick,
    } = this;

    const classes = { 'm-dropdown': true, 'm-dropdown--native-only': native };

    const validClasses = {
      'm-dropdown__valid-icon-inner': true,
      'm-dropdown__valid-icon-inner-active': valid,
    };

    // note: js-XXX classes mark DOM nodes independently of styling needs for
    // purposes of programmatic DOM access, therefore need to be preserved even
    // when style refactoring would rename other classes.
    return html`
      <div class="${classMap(classes)}">
        <div class="m-dropdown__list m-dropdown__list--native">
          <select
            class="m-dropdown__select js-dropdown__select"
            name="${name}"
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
        <div class="m-dropdown__valid-icon">
          <span class="${classMap(validClasses)}"></span>
        </div>
      </div>
      <div class="m-dropdown__error">${error}</div>
    `;
  }

  firstUpdated() {
    // dropdowns cannot meaningfully be initially open, since the underlying
    // <select> cannot be force-opened natively
    this.dropdown = this.querySelector('.js-dropdown__content');
    this.select = this.querySelector('.js-dropdown__select');
    this.addEventListener('focus', this.onFocus, false);
    this.addEventListener('blur', this.onBlur, false);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleWindowKeyDown);
    window.addEventListener('click', this.handleWindowClick);
  }

  updated() {
    this.updateTitle();
  }

  disconnectedCallback() {
    this.removeEventListener('focus', this.onFocus, false);
    this.removeEventListener('blur', this.onBlur, false);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleWindowKeyDown);
    window.removeEventListener('click', this.handleWindowClick);
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);
export default AXADropdown;
