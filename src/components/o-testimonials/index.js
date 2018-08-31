import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';
import Testimonials from './js/testimonials';

class AXATestimonials extends BaseComponentGlobal {
  static tagName = 'axa-testimonials';

  static get observedAttributes() { return ['classes', 'title', 'subtitle', 'auto-rotate-disabled', 'auto-rotate-time', 'show-all-inline']; }

  constructor() {
    super({
      styles, template,
    });
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} o-testimonials`;
  }

  didRenderCallback() {
    if (this.testimonials) {
      this.testimonials.destroy();
    }

    this.testimonials = new Testimonials(this);
  }

  disconnectedCallback() {
    if (this.testimonials) {
      this.testimonials.destroy();
      delete this.testimonials;
    }
  }
}

defineOnce(AXATestimonials.tagName, AXATestimonials);

export default AXATestimonials;
