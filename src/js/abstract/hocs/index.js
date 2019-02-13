import compose from '../../compose';

import withBase from './with-base';
import withBaseGlobal from './with-base-global';
import withContext from './with-context';
import withMonkeyPatches from './with-monkey-patches';
import withRender from './with-render';
import withShadow from './with-shadow';
import withStyles from './with-styles';
import withUpdate from './with-update';
import withVersion from './with-version';

export { withBase, withBaseGlobal, withContext, withMonkeyPatches, withRender, withShadow, withStyles, withUpdate, withVersion };

export const withAllHocs = compose(
  withVersion,
  withContext,
  withMonkeyPatches,
  withUpdate,
  withRender,
  withStyles
);
export const withBaseAndAllHocs = compose(
  withAllHocs,
  withBase
);
export const withBaseGlobalAndAllHocs = compose(
  withAllHocs,
  withBaseGlobal,
  withBase
);
