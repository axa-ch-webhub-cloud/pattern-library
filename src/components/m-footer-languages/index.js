import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import styles from './index.scss';
import template from './_template';
import valuePropType from '../../js/prop-types/value-prop-type';
import on from '../../js/on';
import { EVENTS } from '../../js/ui-events';

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

  handleClick = (e) => {
    if (e.target && e.target.dataset && e.target.dataset.language) {
      e.stopPropagation();
      this.setAttribute('value', e.target.dataset.language);
    }
  }

  connectedCallback() {
    super.connectedCallback();

    this.unClickEnd = on(
      this, EVENTS.CLICK, 'm-footer-languages__link',
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
