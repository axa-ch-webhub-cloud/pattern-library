import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import Sticky from './js/sticky';

export class AXASticky extends BaseComponentGlobal {
  static tagName = 'axa-sticky'
  static propTypes = {
    debug: PropTypes.bool,
  }

  constructor() {
    super({ styles, template });

    this.consumeContext('axa-sticky-container');
  }

  willRenderCallback() {
    const { props: { debug } } = this;

    this.className = classnames(this.initialClassName, 'm-sticky js-sticky', {
      'm-sticky--debug': debug,
    });
  }

  didRenderCallback() {
    if (this.sticky) {
      this.sticky.destroy();
    }

    this.sticky = new Sticky(this);

    const { contextNode } = this;

    if (contextNode) {
      this.contextCallback(contextNode);
    }
  }

  contextCallback(contextNode) {
    if (this.sticky) {
      this.sticky.contextNode = contextNode;
    }
  }

  disconnectedCallback() {
    if (this.sticky) {
      this.sticky.destroy();
      delete this.sticky;
    }
  }
}

defineOnce(AXASticky.tagName, AXASticky);

export default AXASticky;
