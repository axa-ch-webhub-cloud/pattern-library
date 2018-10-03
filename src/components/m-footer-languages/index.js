import PropTypes from 'prop-types';
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAFooterLanguages extends BaseComponentGlobal {
  static tagName = 'axa-footer-languages'
  static propTypes = {
    inline: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shap({
      name: PropTypes.string,
      code: PropTypes.string,
      url: PropTypes.string,
      isActive: PropTypes.bool,
    })),
    short: PropTypes.bool,
    title: PropTypes.string,
  }

  static get observedAttributes() { return ['inline', 'items', 'short', 'title']; }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { inline } = this;

    this.className = classnames(this.initialClassName, 'm-footer-languages', {
      'm-footer-languages--inline': inline,
    });
  }
}

defineOnce(AXAFooterLanguages.tagName, AXAFooterLanguages);

export default AXAFooterLanguages;
