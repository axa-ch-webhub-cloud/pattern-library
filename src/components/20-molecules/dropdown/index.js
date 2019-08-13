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
      data-value="${value}"
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
      refId: { type: String },
      label: { type: String },
      required: { type: Boolean },
      items: { type: Array },
      open: { type: Boolean, reflect: true },
      value: { type: String },
      name: { type: String, reflect: true },
      defaultTitle: { type: String, reflect: true },
      native: { type: Boolean },
      valid: { type: Boolean, reflect: true },
      error: { type: String, reflect: true },
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
      fireCustomEvent('axa-change', value, this);
      fireCustomEvent('change', details, this);
    }
  }

  findByValue(value) {
    const { items } = this;
    const itemIndex = items.findIndex(currentItem =>
      value === null ? currentItem.selected : currentItem.value === value
    );
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
  shouldUpdate() {
    // controlledness is only meaningful if the isReact property has been set
    // via the React wrapper
    this.state.isControlled = this.state.isControlled && this.isReact;
    this.updateItems(this.value);
    return true;
  }

  render() {
    const {
      items = [],
      name = '',
      label = '',
      refId = '',
      defaultTitle,
      native,
      valid,
      error,
      required,
      handleDropdownItemClick,
      handleDropdownClick,
    } = this;
    const classes = { 'm-dropdown': true, 'm-dropdown--native-only': native };

    const validClasses = {
      'm-dropdown__valid-icon-inner': true,
      'm-dropdown__valid-icon-inner-active': valid,
    };

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
      <div class="${classMap(classes)}">
        <div
          class="m-dropdown__list m-dropdown__list--native"
          tabindex="0"
          @focus="${this.onFocus}"
          @blur="${this.onBlur}"
        >
          <select
            id="${refId}"
            class="m-dropdown__select js-dropdown__select"
            name="${name}"
            aria-required="${required}"
            tabindex="-1"
            @change="${handleDropdownItemClick}"
          >
            ${[
              { name: defaultTitle, disabled: true, selected: true, value: '' },
            ]
              .concat(items)
              .map(nativeItemsMapper)}
          </select>
          <div class="m-dropdown__select-icon">${ARROW_ICON}</div>
        </div>
        <div class="m-dropdown__list m-dropdown__list--enhanced">
          <button
            @click="${handleDropdownClick}"
            @focus="${this.onFocus}"
            @blur="${this.onBlur}"
            type="button"
            class="m-dropdown__toggle js-dropdown__toggle"
          >
            <span>${this.title}</span>
            <div class="m-dropdown__select-icon">${ARROW_ICON}</div>
          </button>
          <ul class="m-dropdown__content js-dropdown__content">
            ${items.map(contentItemsMapper(handleDropdownItemClick))}
          </ul>
        </div>
        ${valid
          ? html`
              <div class="m-dropdown__valid-icon">
                <span class="${classMap(validClasses)}"></span>
              </div>
            `
          : html``}
      </div>
      <div class="m-dropdown__error">${error}</div>
    `;
  }

  firstUpdated() {
    this.dropdown = this.querySelector('.js-dropdown__content');
    this.select = this.querySelector('.js-dropdown__select');
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleWindowKeyDown);
    window.addEventListener('click', this.handleWindowClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleWindowKeyDown);
    window.removeEventListener('click', this.handleWindowClick);
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);
export default AXADropdown;
