import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import valuePropType from '../../js/prop-types/value-prop-type';
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
}

class AXADropdown extends BaseComponentGlobal {
  static tagName = 'axa-dropdown';
  static propTypes = {
    classes: PropTypes.string,
    inFlow: PropTypes.bool, // TODO: not needd
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: urlPropType,
      value: PropTypes.string,
      isSelected: PropTypes.bool
    })),
    native: PropTypes.bool,
    size: PropTypes.oneOf(['sm']),
    title: PropTypes.string,
    value: PropTypes.string,
  }

  static get observedAttributes() { 
    return ['items', 'title', 'native'];
  }

  init() {
    super.init({ styles, template });
    // TODO:: this is inited like 4 times... but must come before attributeChanged callback.
    this.selectedItem = this.items.filter((item) => item.isSelected)[0];
    
    if (!this.title) {
      this.title = this.selectedItem.name;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} m-dropdown`;
    this.isOpen = false; // use props.isOpen

    this.onDropdownClick = on(this, EVENTS.CLICK, DEFAULTS.toggleClass, this.handleDropdownClick, { capture: true, passive: false });
    this.onDropdownValueClick= on(this, EVENTS.CLICK, DEFAULTS.selectClass, this.handleDropdownValueClick, { capture: true, passive: false });
    this.onDropdownValueChange = on(this, AXA_EVENTS.AXA_CHANGE, this.handleDropdownValueChange, { capture: true, passive: false, } );
  }

  handleDropdownClick = (e) => {
    e.preventDefault();
    this.toggleDropdown();
  }

  handleDropdownValueClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.toggleDropdown();
    fire(this, AXA_EVENTS.AXA_CHANGE, {...e.target.dataset}, { bubbles: true, cancelable: true });
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
    } else {
      this.classList.remove(DEFAULTS.isOpenClass);
      this.isOpen = false;
    }
  }

  updateCurrentItem(value) {
    this.items = this.items.map((item) => {
      if (item.value == value) {
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

    // Update title and value when current item changes
    if (hasValue && name === 'items' && this.selectedItem) {
        this.title = this.selectedItem.name;
        this.value = this.selectedItem.value;
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
}

defineOnce(AXADropdown.tagName, AXADropdown);

export default AXADropdown;
