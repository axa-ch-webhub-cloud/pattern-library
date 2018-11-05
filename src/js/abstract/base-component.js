import getId from './utils/get-id';
import compose from '../compose';

import withContext from './hocs/with-context';
import withMonkeyPatches from './hocs/with-monkey-patches';
import withUpdate from './hocs/with-update';
import withRender from './hocs/with-render';
import withStyles from './hocs/with-styles';

const withAllHocs = compose(withContext, withMonkeyPatches, withUpdate, withRender, withStyles);

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree.
 */
class BaseComponent extends HTMLElement {
  constructor(self) {
    // eslint-disable-next-line no-param-reassign
    self = super(self);

    self.init();

    return self;
  }

  init() {
    this._id = getId(this.nodeName);
    this._initialised = true;
  }

  static uuidv4() {
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
      return v.toString(16);
    });

    return uuid;
  }
}

export default withAllHocs(BaseComponent);
