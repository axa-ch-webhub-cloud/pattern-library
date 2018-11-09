import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import styles from './index.scss';
import template from './_template';

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
  }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { props: { inline } } = this;

    this.className = classnames(this.initialClassName, 'm-footer-languages', {
      'm-footer-languages--inline': inline,
    });
  }
}

defineOnce(AXAFooterLanguages.tagName, AXAFooterLanguages);

export default AXAFooterLanguages;
