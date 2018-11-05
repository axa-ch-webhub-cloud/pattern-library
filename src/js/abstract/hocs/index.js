import compose from '../../compose';

import withContext from './with-context';
import withMonkeyPatches from './with-monkey-patches';
import withRender from './with-render';
import withShadow from './with-shadow';
import withStyles from './with-styles';
import withUpdate from './with-update';

export {
  withContext,
  withMonkeyPatches,
  withRender,
  withShadow,
  withStyles,
  withUpdate,
};

export const withAllHocs = compose(withContext, withMonkeyPatches, withUpdate, withRender, withStyles);
