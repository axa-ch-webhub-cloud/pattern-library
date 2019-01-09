import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import valuePropType from '../../js/prop-types/value-prop-type';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
// import DropDown from '../m-dropdown/js/drop-down';
import fire from '../../js/fire';
import { AXA_EVENTS, EVENTS } from '../../js/ui-events';
import on from '../../js/on';

class AXAHeaderLanguages extends BaseComponentGlobal {
  static tagName = 'axa-header-languages'
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      url: urlPropType,
      name: PropTypes.string,
      code: PropTypes.string,
      isActive: PropTypes.bool,
    })),
    value: valuePropType,
  }

  init() {
    super.init({ styles, template });

    this.handleClick = (event) => {
      const { target: { lang } } = event;

      /**
       * axa-click event.
       *
       * @event FooterLinks#axa-click
       * @type {object}
       */
      const cancelled = fire(this, AXA_EVENTS.AXA_CLICK, lang, {
        bubbles: true,
        cancelable: true,
        composed: true,
      });

      if (!cancelled) {
        event.preventDefault();
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this.unClickEnd = on(
      this, EVENTS.CLICK, 'js-header-languages__list-link',
      this.handleClick, {
        capture: true, passive: false,
      },
    );
  }

  willRenderCallback() {
    this.className = `${this.initialClassName} m-header-languages js-dropdown`;
  }

  didRenderCallback() {
    // if (this.dropDown) {
    //   this.dropDown.destroy();
    // }

    // Ttemp disable the dropdown
    // this.dropDown = new DropDown(this, {
    //   containerClass: null,
    // });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Temp disable the dropdown
    // if (this.dropDown) {
    //   this.dropDown.destroy();
    //   delete this.dropDown;
    // }

    if (this.unClickEnd) {
      this.unClickEnd();
    }
  }
}

defineOnce(AXAHeaderLanguages.tagName, AXAHeaderLanguages);

export default AXAHeaderLanguages;
