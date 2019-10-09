/* eslint-disable import/no-extraneous-dependencies */
import { html, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { ExpandSvg } from '@axa-ch/materials/icons';
import debounce from '../../../utils/debounce';
import styles from './index.scss';
import NoShadowDOM from '../../../utils/no-shadow';
import defineOnce from '../../../utils/define-once';
import fireCustomEvent from '../../../utils/custom-event';
import createRefId from '../../../utils/create-ref-id';
import typecheck from '../../../utils/typecheck';

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
      value="${value}"
      data-index="${index}"
      data-value="${value}"
      ?selected="${selected}"
      ?disabled="${disabled}"
      >${name}</option
    >
  `;

const contentItemsMapper = clickHandler => (
  { name, value, selected, disabled },
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
            type="button"
            @click="${clickHandler}"
            tabindex="-1"
            class="m-dropdown__button js-dropdown__button"
            data-index="${index}"
            data-value="${value}"
          >
            ${name}
          </button>
        </li>
      `;
};

const defaultTitleIfNeeded = (title, anotherSelection) =>
  title
    ? [{ name: title, disabled: true, selected: !anotherSelection, value: '' }]
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
      maxHeight: { type: Boolean, reflect: true },
      label: { type: String },
      required: { type: Boolean },
      items: { type: Array, /* participate in typecheck'ing */ check: true },
      open: { type: Boolean, reflect: true },
      value: { type: String },
      name: { type: String, reflect: true },
      defaultTitle: { type: String, reflect: true },
      native: { type: Boolean, reflect: true },
      checkMark: { type: Boolean, reflect: true },
      invalid: { type: Boolean, reflect: true },
      error: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true },
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

  constructor() {
    super();
    this.refId = `dropdown-${createRefId()}`;
    this.label = '';
    this.checkMark = false;
    this.invalid = false;
    this.disabled = false;
    this.required = false;
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
    const realTarget =
      target instanceof HTMLSelectElement
        ? target.children[target.selectedIndex]
        : target;

    const { value, index } = realTarget.dataset;
    const {
      state: { isControlled },
      onChange,
      selectedIndex,
    } = this;

    this.openDropdown(false);

    // no change compared to previous selection?
    // eslint-disable-next-line eqeqeq
    if (selectedIndex == index) {
      // ==: indices may be number or string
      return;
    }

    this.selectedIndex = index | 0;
    const [{ name }] = this.findByValue(value);
    // allow idiomatic event.target.value in onChange callback!
    const syntheticEvent = { target: { value, index, name } };
    onChange(syntheticEvent);
    if (!isControlled) {
      this.value = value; // triggers re-render
      const details = { value, index, name };
      fireCustomEvent('axa-change', value, this, { bubbles: false });
      fireCustomEvent('change', details, this, { bubbles: false });
    }
  }

  findByValue(value, indexOnly) {
    const { items } = this;
    const itemIndex = items.findIndex(({selected, value: selectedValue}) =>
      value === null ? selected : (selectedValue === value || selectedValue === parseInt(value, 10))
    );
    return indexOnly ? itemIndex : [items[itemIndex], itemIndex];
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
    // controlledness is only meaningful if the isReact property has been set
    // via the React wrapper
    this.state.isControlled = this.state.isControlled && this.isReact;
    const {
      state: { isControlled },
    } = this;
    // implicit change of value via newly selected item?
    if (
      !isControlled &&
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
      <div class="m-dropdown__wrapper">
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

          <ul class="m-dropdown__content js-dropdown__content">
            ${items.map(contentItemsMapper(handleDropdownItemClick))}
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
      ${invalid
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
    window.addEventListener('keydown', this.handleWindowKeyDown);
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
    window.removeEventListener('keydown', this.handleWindowKeyDown);
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('axa-dropdown-close', this.handleWindowClick);
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);
export default AXADropdown;
