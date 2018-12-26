import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import valuePropType from '../../js/prop-types/value-prop-type';
import DropDown from './js/drop-down';
import on from '../../js/on';
import { AXA_EVENTS } from '../../js/ui-events';

class AXADropdown extends BaseComponentGlobal {
  static tagName = 'axa-dropdown';
  static propTypes = {
    classes: PropTypes.string,
    inFlow: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: urlPropType,
      value: PropTypes.string,
      isSelected: PropTypes.bool
    })),
    native: PropTypes.bool,
    size: PropTypes.oneOf(['sm']),
    title: PropTypes.string,
    value: valuePropType,
  }

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} m-dropdown`;
    this.dropDown = new DropDown(this);
    this.onDropdownValueChange = on(this, AXA_EVENTS.AXA_CHANGE, this.onDropdownValueChange);
  }

  onDropdownValueChange(e) {
    const itemIndex = parseInt(e.detail.index, 10);
    this.items = this.items.map((item, index) => {
      if (index === itemIndex) {
        item.isSelected = true;
        this.title = item.name;
      } else {
        item.isSelected = false;
      }
      return item;
    });
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

  disconnectedCallback() {
    // Deregister Event listener
    this.onDropdownValueChange();
    if (this.dropDown) {
      this.dropDown.destroy();
      delete this.dropDown;
    }
  }
}

defineOnce(AXADropdown.tagName, AXADropdown);

export default AXADropdown;
