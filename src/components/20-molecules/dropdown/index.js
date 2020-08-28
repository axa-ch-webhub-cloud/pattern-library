/* eslint-disable camelcase */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
import { html, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { Expand_moreSvg } from '@axa-ch/materials/icons';
import debounce from '../../../utils/debounce';
import styles from './index.scss';
import NoShadowDOM from '../../../utils/no-shadow';
import { defineVersioned } from '../../../utils/component-versioning';
import fireCustomEvent from '../../../utils/custom-event';
import createRefId from '../../../utils/create-ref-id';
import typecheck from '../../../utils/typecheck';
import findIndex from '../../../utils/find-index';
import { applyDefaults } from '../../../utils/with-react';

// module constants
const ARROW_ICON = svg([Expand_moreSvg]);
const DEBOUNCE_DELAY = 250; // milliseconds
const DROPDOWN_UL_MAXHEIGHT = '200px';
const DOWN = '40'; // keyCode
const UP = '38'; // keyCode
const ARROW_KEY = { [UP]: -1, [DOWN]: 1 };

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

const nativeItemsMapper = ({ name, value, selected, _disabled }, index) =>
  html`
    <option
      class="m-dropdown__option"
      value="${value}"
      data-index="${index}"
      data-value="${value}"
      ?selected="${selected}"
      ?disabled="${_disabled}"
      >${name}</option
    >
  `;

const contentItemsMapper = (clickHandler, defaultTitle) => (
  { name, value, selected, _disabled },
  index
) => {
  const classes = {
    'm-dropdown__item': true,
    'm-dropdown__item--is-selected': selected,
  };
  return _disabled
    ? html``
    : html`
        <li class="${classMap(classes)}">
          <button
            type="button"
            @click="${clickHandler}"
            tabindex="-1"
            class="m-dropdown__button js-dropdown__button"
            data-index="${index + (defaultTitle ? 1 : 0)}"
            data-value="${value}"
          >
            ${name}
          </button>
        </li>
      `;
};

const defaultTitleIfNeeded = (title, anotherSelection) =>
  title
    ? [{ name: title, _disabled: true, selected: !anotherSelection, value: '' }]
    : [];

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
      maxHeight: { type: String, reflect: true },
      refId: { type: String, defaultValue: `dropdown-${createRefId()}` },
      label: { type: String },
      required: { type: Boolean },
      items: { type: Array, /* participate in typecheck'ing */ check: true },
      open: { type: Boolean, reflect: true },
      value: { type: String, defaultValue: undefined }, // proper default for controlled-mode under React
      name: { type: String, reflect: true },
      defaultTitle: { type: String, reflect: true },
      native: { type: Boolean, reflect: true },
      checkMark: { type: Boolean, reflect: true },
      invalid: { type: Boolean, reflect: true },
      error: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
      onChange: { type: Function, attribute: false },
      onFocus: { type: Function, attribute: false },
      onBlur: { type: Function, attribute: false },
      useCase: { type: String, reflect: true, noAccessor: true },
      isReact: { type: Boolean },
    };
  }

  set value(newValue) {
    const {
      state: { isControlled, value, firstTime },
      state,
    } = this;
    // first value coming in indicates controlledness?
    if (!isControlled && newValue !== undefined && firstTime) {
      // yes, remember in model state
      state.isControlled = true;
    }
    // update state
    state.value = newValue;
    state.firstTime = false;
    // manual re-render, necessary for custom setters
    this.requestUpdate('value', value);
  }

  get value() {
    return this.state.value;
  }

  get isControlled() {
    return this.state.isControlled && this.isReact;
  }

  constructor() {
    super();
    // internal properties
    this.state = { isControlled: false, firstTime: true };
    // Very important that applyDefaults is *after* state initialization
    // because applyDefaults changes 'value' and needs firstTime: true flag
    // to define controlledness
    applyDefaults(this);
    // bound event handlers (so scope and de-registration work as expected)
    this.handleWindowClick = this.handleWindowClick.bind(this);
    this.handleDropdownItemClick = this.handleDropdownItemClick.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.handleResize = debounce(
      () => handleViewportCheck(this.dropdown),
      DEBOUNCE_DELAY
    );
  }

  openDropdown(open) {
    this.open = open;
    const links = this.querySelectorAll('.js-dropdown__button');
    forEach(links, (_, link) =>
      link.setAttribute('tabindex', open ? '0' : '-1')
    );
    if (open) {
      // close any other open instance in the same document
      if (openDropdownInstance) {
        openDropdownInstance.open = false;
      }
      // focus on selected item s.t. enhanced-mode keyboard navigation works like native
      this.focusOnButton(
        this.selectedIndex,
        /* already includes default-title offset */ true
      );
    }
    openDropdownInstance = open ? this : /* help GC */ null;
  }

  handleWindowClick() {
    if (this.open) {
      this.openDropdown(false);
    }
  }

  focusOnButton(index, includesOffset) {
    if (typeof index === 'number') {
      const { defaultTitle, dropdown } = this;
      const defaultTitleOffset = defaultTitle && !includesOffset ? 1 : 0;
      dropdown
        .querySelector(
          `.js-dropdown__button[data-index="${index + defaultTitleOffset}"]`
        )
        .focus();
    }
  }

  navigateByKeyboard(direction) {
    const { items, defaultTitle } = this;
    const { activeElement } = document;
    const defaultTitleOffset = defaultTitle ? 1 : 0;

    // don't get involved if preexisting focus outside enhanced-mode DOM
    if (
      !this.contains(activeElement) ||
      !/(?:BUTTON|LI)/.test(activeElement.tagName)
    ) {
      return;
    }

    // get selected item's index
    let focussedIndex =
      parseInt(activeElement.dataset.index || '0', 10) - defaultTitleOffset;

    // move in the direction of the arrow key
    focussedIndex += direction;

    // we landed on a focussable item?
    if (items[focussedIndex] && !items[focussedIndex]._disabled) {
      // yes, put the focus on it
      this.focusOnButton(focussedIndex);
    }
  }

  handleKeyUp(e) {
    const { key, keyCode } = e;
    e.preventDefault();
    const arrowKey = ARROW_KEY[keyCode.toString()];
    // close dropdown via key?
    if (key === 'Escape' || key === 'Esc' || keyCode === 27) {
      this.openDropdown(false);
    } else if (arrowKey) {
      // arrow keys ↑, ↓,
      // case 1: dropdown closed
      if (!this.open) {
        // open it in order to mimick native <select> behaviour
        this.openDropdown(true);
      } else {
        // case 2: already open, navigate
        this.navigateByKeyboard(arrowKey);
      }
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
    const realTarget =
      target instanceof HTMLSelectElement
        ? target.children[target.selectedIndex]
        : target;

    const { value, index } = realTarget.dataset;
    const { onChange, selectedIndex, name } = this;

    this.openDropdown(false);

    // no change compared to previous selection?
    const integerIndex = parseInt(index, 10) || 0; // || 0: parseInt may return NaN
    if (
      selectedIndex === integerIndex &&
      /* in controlled mode, additionally clicked value and model value must agree
         (this may e.g. be violated in 1st click after 'unfreezing' a frozen model) */
      (!this.isControlled || value === this.value)
    ) {
      return;
    }

    this.selectedIndex = integerIndex;
    const [{ name: optionLabel }] = this.findByValue(value);
    // allow idiomatic event.target.value in onChange callback!
    const details = {
      value,
      name,
      optionLabel,
      index: integerIndex,
    };
    const syntheticEvent = { target: details };
    onChange(syntheticEvent);
    if (!this.isControlled) {
      // declare the following value update to be uncontrolled
      this.state.firstTime = false;
      this.value = value; // triggers re-render
      fireCustomEvent('axa-change', value, this, { bubbles: false });
      fireCustomEvent('change', details, this, { bubbles: false });
    }
  }

  findByValue(value, indexOnly) {
    const { items = [], defaultTitle } = this;
    const itemIndex = findIndex(items, ({ selected, value: selectedValue }) =>
      value === null
        ? selected
        : selectedValue === value || selectedValue === parseInt(value, 10)
    );
    if (indexOnly) {
      return itemIndex;
    }

    // no item selected, but defaultTitle set?
    if (value === null && itemIndex < 0 && defaultTitle) {
      return [false]; // signal caller (render) to use defaultTitle as title
    }

    return [items[itemIndex], itemIndex];
  }

  updateItems(value) {
    if (typeof value !== 'string') {
      return;
    }
    const [item, itemIndex] = this.findByValue(value);
    if (!item) {
      return;
    }
    const { name } = item;
    this.value = value || name || '';
    // clone items array with updated selected property
    // (the fact that items are cloned ensures re-render!)
    this.items = this.items.map((_item, index) => {
      _item.selected = index === itemIndex;
      return _item;
    });
  }

  /* last overrideable lifecycle point *before* render:
     put side-effects there that influence render */
  shouldUpdate(changedProperties) {
    typecheck(this, { items: [] });
    // implicit change of value via newly selected item?
    if (
      !this.isControlled &&
      changedProperties.has('items') &&
      changedProperties.size === 1
    ) {
      // make change explicit
      const selectedItem = this.items.find(item => item.selected);
      if (selectedItem) {
        this.value = selectedItem.value;
      }
    }
    this.updateItems(this.value);
    return true;
  }

  render() {
    const {
      items = [],
      name = '',
      label = '',
      refId = '',
      defaultTitle = '',
      checkMark,
      invalid,
      error,
      required,
      disabled,
      handleDropdownItemClick,
      handleDropdownClick,
      handleKeyUp,
      maxHeight,
    } = this;

    const [selectedItem] = this.findByValue(null);
    this.title = selectedItem ? selectedItem.name : defaultTitle;

    return html`
      ${label &&
        html`
          <label for="${refId}" class="m-dropdown__label">
            ${label}
            ${required
              ? html`
                  *
                `
              : ''}
          </label>
        `}
      <div class="m-dropdown__wrapper" @keyup="${handleKeyUp}">
        <div class="m-dropdown__elements">
          <!-- NATIVE -->
          <div class="m-dropdown__select-wrapper">
            <select
              id="${refId}"
              class="m-dropdown__select js-dropdown__select"
              name="${name}"
              aria-required="${required}"
              ?disabled="${disabled}"
              @focus="${this.onFocus}"
              @blur="${this.onBlur}"
              @change="${handleDropdownItemClick}"
            >
              ${defaultTitleIfNeeded(defaultTitle, selectedItem)
                .concat(items)
                .map(nativeItemsMapper)}
            </select>
            <span class="m-dropdown__select-icon">
              ${ARROW_ICON}
            </span>
          </div>
          <!-- NATIVE END -->

          <!-- ENHANCED -->
          <button
            type="button"
            class="m-dropdown__toggle js-dropdown__toggle"
            aria-disabled="${disabled}"
            @focus="${this.onFocus}"
            @blur="${this.onBlur}"
            @click="${handleDropdownClick}"
          >
            <span class="m-dropdown__flex-wrapper">
              <span class="js-dropdown__title">${this.title}</span>
              <span class="m-dropdown__select-icon">${ARROW_ICON}</span>
            </span>
          </button>

          <ul
            class="m-dropdown__content js-dropdown__content"
            style="${maxHeight && !isNaN(maxHeight)
              ? `max-height:${maxHeight}px;`
              : ''}"
          >
            ${items.map(
              contentItemsMapper(handleDropdownItemClick, defaultTitle)
            )}
          </ul>
          <!-- ENHANCED END -->
        </div>
        ${checkMark
          ? html`
              <span class="m-dropdown__check-wrapper">
                <span class="m-dropdown__check js-dropdown__check"></span>
              </span>
            `
          : ''}
      </div>
      ${invalid && error
        ? html`
            <span class="m-dropdown__error js-dropdown__error">${error}</span>
          `
        : ''}
    `;
  }

  firstUpdated() {
    this.dropdown = this.querySelector('.js-dropdown__content');
    this.select = this.querySelector('.js-dropdown__select');
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('axa-dropdown-close', this.handleWindowClick);
  }

  updated() {
    const { select, defaultTitle } = this;
    // adjust native <select>
    select.selectedIndex =
      this.findByValue(null, true) + (defaultTitle ? 1 : 0);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('axa-dropdown-close', this.handleWindowClick);
  }
}

/* eslint-disable no-undef */
defineVersioned([AXADropdown], __VERSION_INFO__);

export default AXADropdown;
