import PropTypes from 'prop-types';
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAFooterSocial extends BaseComponentGlobal {
  static tagName = 'axa-footer-social'
  static propTypes = {
    inline: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })),
    light: PropTypes.bool,
    title: PropTypes.string,
  }

  static get observedAttributes() { return ['inline', 'items', 'light', 'title']; }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { inline, light } = this;

    this.className = classnames(this.initialClassName, 'm-footer-social', {
      'm-footer-social--inline': inline,
      'm-footer-social--light': light,
    });
  }
}

defineOnce(AXAFooterSocial.tagName, AXAFooterSocial);

export default AXAFooterSocial;
