import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import getAttribute from '../../js/get-attribute';
import styles from './index.scss';
import template from './_template';
import DatepickerBody from './js/datepicker-body';
import fire from '../../js/fire';
import { AXA_EVENTS } from '../../js/ui-events';

class AXADatepickerBody extends BaseComponentGlobal {
  static tagName = 'axa-datepicker-body'

  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  static get observedAttributes() { return ['classes', 'locale', 'value', 'index', 'year', 'month', 'day', 'allowed-years']; }

  constructor() {
    super({ styles, template });

    this.datepickerBody = new DatepickerBody(this);
    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-datepicker-body`;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // TODO Don't forget to cleanup :)
  }

  willRenderCallback() {
    let month = getAttribute(this, 'month');
    month = (month || month === 0) ? month : undefined;
    let day = getAttribute(this, 'day');
    day = (day || day === 0) ? day : undefined;
    this.datepickerBody.init(getAttribute(this, 'index'), getAttribute(this, 'locale'), getAttribute(this, 'year') || undefined, month, day, getAttribute(this, 'allowed-years'));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if ((name === 'month' || name === 'year') && this.shouldUpdateCallback(newValue, oldValue) && newValue !== null && oldValue !== null) {
      fire(this, AXA_EVENTS.AXA_CHANGE, null, { bubbles: true, cancelable: true, composed: true });
    }
  }
}

defineOnce(AXADatepickerBody.tagName, AXADatepickerBody);

export default AXADatepickerBody;
