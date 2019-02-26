import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import on from '../../js/on';
import fire from '../../js/fire';
import { EVENTS, AXA_EVENTS } from '../../js/ui-events';
import debounce from '../../js/debounce';

const DEFAULTS = {
  selectClass: 'js-dropdown__content',
  toggleClass: 'js-dropdown__toggle',
  nativeSelectClass: 'js-dropdown__native-select',
  isOpenClass: 'is-dropdown-open',
  isAnimatingClass: 'is-dropdown-animating',
};

class AXADropdown extends BaseComponentGlobal {
  static tagName = 'axa-dropdown';
  static propTypes = {
    classes: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      url: urlPropType,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      isSelected: PropTypes.bool,
    })),
    native: PropTypes.bool,
    size: PropTypes.oneOf(['sm']),
    title: PropTypes.string,
    value: PropTypes.string,
  }

  static get observedAttributes() {
    return ['items', 'title', 'native', 'value'];
  }

  init() {
    super.init({ styles, template }); // eslint-disable-next-line prefer-destructuring
    this.selectedItem = this.items.filter(item => item.isSelected)[0] || null;
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} m-dropdown`;
    this.isOpen = false; // use props.isOpen?
    window.openDropdownInstance = false;

    this.onDropdownClick =
      on(this, EVENTS.CLICK, DEFAULTS.toggleClass, this.handleDropdownClick, { capture: true, passive: false });

    // the enhanced dropdown is a list with links -> clicks event. the native is a select change event
    this.onDropdownValueClick =
      on(this, EVENTS.CLICK, DEFAULTS.selectClass, e => this.handleDropdownValueClick(e), { capture: true, passive: false });

    this.onNativeDropdownChange =
      on(this, EVENTS.CHANGE, DEFAULTS.nativeSelectClass, e => this.handleDropdownNativeValueChange(e), { capture: true, passive: false });

    window.addEventListener('keydown', e => this.handleWindowKeyDown(e));
    window.addEventListener('click', e => this.handleWindowClick(e));
    window.addEventListener('resize', debounce(() => this.handleViewportCheck(this.querySelector(`.${DEFAULTS.selectClass}`)), 250));
  }

  didRenderCallback() {
    this.dropdownLinks = this.querySelectorAll('.js-dropdown__link');
  }

  handleWindowClick() {
    if (this.isOpen) {
      this.closeDropdown(this);
    }
  }

  handleWindowKeyDown(e) {
    if ((e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27)) {
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
    return (!bottomIsInViewport && enoughSpaceToMove);
  }

  closeOpenDropdowns() {
    if (window.openDropdownInstance && this !== window.openDropdownInstance) {
      this.closeDropdown(window.openDropdownInstance);
    }
  }

  handleDropdownClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.closeOpenDropdowns();
    this.toggleDropdown();
  }

  handleDropdownValueClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.title = e.target.dataset.name;
    this.value = e.target.dataset.value;
    this.updateCurrentItem(e.target.dataset.value);
    fire(this, AXA_EVENTS.AXA_CHANGE, e.target.dataset.value, { bubbles: true, cancelable: true });
    this.closeDropdown(this);
  }

  handleDropdownNativeValueChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.value = e.target.value;
    this.title = e.target.name;
    this.updateCurrentItem(e.target.value);
    fire(this, AXA_EVENTS.AXA_CHANGE, e.target.value, { bubbles: true, cancelable: true });
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
    elem.forEach(this.dropdownLinks, (index, link) => { link.setAttribute('tabindex', '0'); });
    window.openDropdownInstance = elem;
  }

  closeDropdown(elem) {
    elem.classList.remove(DEFAULTS.isOpenClass);
    elem.forEach(this.dropdownLinks, (index, link) => { link.setAttribute('tabindex', '-1'); });
    elem.isOpen = false;
    window.openDropdownInstance = false;
  }

  updateCurrentItem(value) {
    const hasValue = value !== null;
    this.items = this.items.map((item) => {
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
    this.onDropdownClick();
    this.onDropdownValueChange();
    this.onDropdownValueClick();
  }

  set title(value) {
    this.setAttribute('title', value);
  }

  get title() {
    return this.getAttribute('title');
  }

  set items(value) {
    this.setAttribute('items', JSON.stringify(value));
  }

  get items() {
    return JSON.parse(this.getAttribute('items'));
  }

  set value(value) {
    this.setAttribute('value', value);
  }

  get value() {
    return this.getAttribute('value');
  }

  set native(value) {
    this.setAttribute('native', value);
  }

  get native() {
    return this.getAttribute('native');
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);

export default AXADropdown;
