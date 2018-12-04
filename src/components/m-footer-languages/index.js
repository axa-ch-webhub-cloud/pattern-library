import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import fire from '../../js/fire';
import urlPropType from '../../js/prop-types/url-prop-type';
import styles from './index.scss';
import template from './_template';
import valuePropType from '../../js/prop-types/value-prop-type';
import on from '../../js/on';
import { AXA_EVENTS, EVENTS } from '../../js/ui-events';

class AXAFooterLanguages extends BaseComponentGlobal {
  static tagName = 'axa-footer-languages'
  static propTypes = {
    inline: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      code: PropTypes.string,
      url: urlPropType,
      isActive: PropTypes.bool,
    })),
    short: PropTypes.bool,
    title: PropTypes.string,
    value: valuePropType,
  }

  init() {
    super.init({ styles, template });
  }

  handleClick = (event) => {
    const { target } = event;
    const { lang } = target;
    const { dataset } = target;

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

    // @todo: we shouldn't need data attributes, since the HTMLElement interface support `lang` DOM Property
    // @link: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang
    if (dataset && dataset.language) {
      event.stopPropagation();
      this.setAttribute('value', dataset.language);
    }
  }

  connectedCallback() {
    super.connectedCallback();

    this.unClickEnd = on(
      this, EVENTS.CLICK, 'js-footer-languages__link',
      this.handleClick, {
        capture: true, passive: false,
      },
    );
  }

  willRenderCallback() {
    const { props: { inline } } = this;

    this.className = classnames(this.initialClassName, 'm-footer-languages', {
      'm-footer-languages--inline': inline,
    });
  }

  disconnectedCallback() {
    if (this.unClickEnd) {
      this.unClickEnd();
    }
  }
}

defineOnce(AXAFooterLanguages.tagName, AXAFooterLanguages);

export default AXAFooterLanguages;
