import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import on from '../../js/on';
import fire from '../../js/fire';
import { EVENTS, AXA_EVENTS } from '../../js/ui-events';

const DEFAULTS = {
  selectClass: 'js-dropdown__content',
  containerClass: '.js-dropdown',
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
      name: PropTypes.string,
      url: urlPropType,
      value: PropTypes.string,
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
    this.selectedItem = this.items.filter(item => item.isSelected)[0];
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} m-dropdown`;
    this.isOpen = false; // use props.isOpen?

    this.onDropdownClick =
      on(this, EVENTS.CLICK, DEFAULTS.toggleClass, this.handleDropdownClick, { capture: true, passive: false });

    // the enhanced dropdown is a list with links -> clicks event. the native is a select change event
    this.onDropdownValueClick =
      on(this, EVENTS.CLICK, DEFAULTS.selectClass, e => this.handleDropdownValueClick(e), { capture: true, passive: false });

    this.onNativeDropdownChange =
      on(this, EVENTS.CHANGE, DEFAULTS.nativeSelectClass, e => this.handleDropdownNativeValueChange(e), { capture: true, passive: false });
  }

  didRenderCallback() {
    this.dropdownLinks = this.querySelectorAll('.js-dropdown__link');
  }

  handleDropdownClick = (e) => {
    e.preventDefault();
    this.toggleDropdown();
  }

  handleDropdownValueClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.toggleDropdown();
    this.title = e.target.dataset.name;
    this.value = e.target.dataset.value;
    this.updateCurrentItem(e.target.dataset.value);
    fire(this, AXA_EVENTS.AXA_CHANGE, e.target.dataset.value, { bubbles: true, cancelable: true });
  }

  handleDropdownNativeValueChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.value = e.target.value;
    this.title = e.target.name;
    this.updateCurrentItem(e.target.value);
    fire(this, AXA_EVENTS.AXA_CHANGE, e.target.value, { bubbles: true, cancelable: true });
  }

  handleDropdownValueChange(e) {
    e.preventDefault();
    e.stopPropagation();
    this.value = e.detail.value;
    this.title = e.detail.name;
    this.updateCurrentItem(e.detail.value);
  }

  toggleDropdown() {
    if (!this.isOpen) {
      this.classList.add(DEFAULTS.isOpenClass);
      this.isOpen = true;
      this.dropdownLinks.forEach((link) => { link.setAttribute('tabindex', '0'); });
    } else {
      this.classList.remove(DEFAULTS.isOpenClass);
      this.isOpen = false;
      this.dropdownLinks.forEach((link) => { link.setAttribute('tabindex', '-1'); });
    }
  }

  updateCurrentItem(value) {
    this.items = this.items.map((item) => {
      if (item.value === value) {
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
