import PropTypes from "../../js/prop-types"; // eslint-disable-next-line import/first
import classnames from "classnames";

import BaseComponentGlobal from "../../js/abstract/base-component-global";
import defineOnce from "../../js/define-once";
import urlPropType from "../../js/prop-types/url-prop-type";
import styles from "./index.scss";
import template from "./_template";
import FooterLinks from "./js/footer-links";

class AXAFooterLinks extends BaseComponentGlobal {
  static tagName = "axa-footer-links";
  static propTypes = {
    cols: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: urlPropType,
        isActive: PropTypes.bool
      })
    ),
    title: PropTypes.string
  };

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
  }

  willRenderCallback() {
    const {
      props: { cols }
    } = this;

    this.className = classnames(this.initialClassName, "m-footer-links", {
      "m-footer-links--cols": cols,
      [`m-footer-links--cols-${cols}`]: cols
    });
  }

  didRenderCallback() {
    if (this.footerLinks) {
      this.footerLinks.destroy();
    }
    this.footerLinks = new FooterLinks(this);
  }

  disconnectedCallback() {
    if (this.footerLinks) {
      this.footerLinks.destroy();
      delete this.footerLinks;
    }
  }
}

defineOnce(AXAFooterLinks.tagName, AXAFooterLinks);

export default AXAFooterLinks;
