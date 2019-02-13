import BaseComponent from "./base-component";

import withShadow from "./hocs/with-shadow";

/**
 * Base class {BaseComponentShadow}. This class extends the {BaseComponent} and
 * applies a shadow dom to it. Please be aware that only a few browser
 * implements this correctly. With other browser works as well, apart of the global contamination.
 * So if a inner shadow override a upper shadow and has the same class, the upper will be overridden from the
 * inners class as it has only one DOM.
 *
 * https://caniuse.com/#feat=shadowdom
 */
export default withShadow(BaseComponent);
