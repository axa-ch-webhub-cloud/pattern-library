import PropTypes from "prop-types";
import classnames from "classnames";

import { withBaseGlobalAndAllHocs } from "../../js/abstract/hocs";

import defineOnce from "../../js/define-once";
// import the styles used for this component
import styles from "./index.scss";
import alignPropType from "../../js/prop-types/align-prop-type";
import sortPropType from "../../js/prop-types/sort-prop-type";
import floatPropType from "../../js/prop-types/float-prop-type";

const HTMLTableCellElementBase = withBaseGlobalAndAllHocs(HTMLTableCellElement);

class AXATh extends HTMLTableCellElementBase {
  static tagName = "axa-th";
  static builtInTagName = "th";

  // specify runtime type-checking here, if you use custom attributes
  // this will also derived your needed observed attributes automatically for you
  static propTypes = {
    classes: PropTypes.string,
    align: alignPropType,
    sort: sortPropType,
    float: floatPropType,
    sortActive: PropTypes.bool,
    dense: PropTypes.bool
  };

  // Only use this if you need to observe attributes other than your prop-types!
  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  // static get observedAttributes() {
  //  return ['classes'];
  // }

  // Always use init if you want to construct your element
  // never use the constructor directly, we call init for you with the proper context
  // @link https://github.com/WebReflection/document-register-element#v1-caveat
  init() {
    super.init({ styles });
  }

  willRenderCallback() {
    const { classes, align, sort, float, sortActive, dense } = this.props;

    this.className = classnames("a-th", classes, {
      [`u-align-${align}`]: align,
      [`a-th--sort a-th--sort-${sort}`]: sort,
      [`o-table__cell--float-${float}`]: float,
      "a-th--sort-active": sortActive,
      "a-th--dense": dense
    });
  }
}

defineOnce(AXATh.tagName, AXATh, { extends: AXATh.builtInTagName });

export default AXATh;
