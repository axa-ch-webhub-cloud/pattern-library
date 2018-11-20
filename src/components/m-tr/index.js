import PropTypes from 'prop-types';
import classnames from 'classnames';

import { withBaseGlobalAndAllHocs } from '../../js/abstract/hocs';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';

const HTMLTableRowElementBase = withBaseGlobalAndAllHocs(HTMLTableRowElement);

class AXATr extends HTMLTableRowElementBase {
  static tagName = 'axa-tr'
  static builtInTagName = 'tr'

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
    head: PropTypes.bool,
    foot: PropTypes.bool,
    action: PropTypes.bool,
    dense: PropTypes.bool,
  }

  // Only use this if you need to observe attributes other than your prop-types!
  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  // static get observedAttributes() {
  //  return ['classes'];
  // }

  init() {
    super.init({ styles });

    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
  }

  willRenderCallback() {
    const { classes, head, foot, action, dense } = this.props;

    this.className = classnames('m-tr', classes, {
      'm-tr--head': head,
      'm-tr--foot': foot,
      'm-tr--action': action,
      'm-tr--dense': dense,
    });
  }
}

defineOnce(AXATr.tagName, AXATr, { extends: AXATr.builtInTagName });

export default AXATr;
