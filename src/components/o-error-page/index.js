import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAErrorPage extends BaseComponentGlobal {
  static tagName = 'axa-error-page';
  static propTypes = {
    code: PropTypes.number,
    status: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    ctaHref: urlPropType,
    ctaTitle: PropTypes.string,
    background: PropTypes.oneOf(['pacific', 'teal']),
  };

  init() {
    super.init({ styles, template });
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  willRenderCallback() {
    const {
      props: { background },
    } = this;

    this.className = classnames(this.initialClassName, 'o-error-page', {
      [`o-error-page--${background}`]: background,
    });
  }
}

defineOnce(AXAErrorPage.tagName, AXAErrorPage);

export default AXAErrorPage;
