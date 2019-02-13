import PropTypes from "prop-types";
import classnames from "classnames";

import { withBaseGlobalAndAllHocs } from "../../js/abstract/hocs";
import defineOnce from "../../js/define-once";
// import the styles used for this component
import styles from "./index.scss";
import alignPropType from "../../js/prop-types/align-prop-type";
import sidePropType from "../../js/prop-types/side-prop-type";

const TableCaptionBase = withBaseGlobalAndAllHocs(HTMLTableCaptionElement);

class AXACaption extends TableCaptionBase {
  static tagName = "axa-caption";
  static builtInTagName = "caption";

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
    align: alignPropType,
    side: sidePropType
  };

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
    const { classes, align, side } = this.props;

    this.className = classnames("a-caption", classes, {
      [`u-align-${align}`]: align,
      [`a-caption--${side}`]: side
    });
  }
}

defineOnce(AXACaption.tagName, AXACaption, {
  extends: AXACaption.builtInTagName
});

export default AXACaption;
