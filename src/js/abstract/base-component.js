import getId from './utils/get-id';
import lifecycleLogger from './utils/lifecycle-logger';

import withContext from './hocs/with-context';
import withMonkeyPatches from './hocs/with-monkey-patches';
import withUpdate from './hocs/with-update';
import withRender from './hocs/with-render';
import withStyles from './hocs/with-styles';

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree.
 */
class BaseComponent extends HTMLElement {
  constructor(options) {
    super(options);

    this._id = getId(this.nodeName);
  }

  static uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
      return v.toString(16);
    });
  }
}

export default withContext(withMonkeyPatches(withUpdate(withRender(withStyles(BaseComponent)))));
