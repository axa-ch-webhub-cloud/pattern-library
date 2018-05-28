import { withBase } from './hocs/with-base';
import { withContext } from './hocs/with-context';
import { withLifecycle } from './hocs/with-lifecycle';
import { withMokeyPatches } from './hocs/with-mokey-patches';
import { withStyles } from './hocs/with-styles';
import { withUpdate } from './hocs/with-update';
import { withUtils } from './hocs/with-utils';

export default function BaseComponent(Base) {
  return withLifecycle(withMokeyPatches(withContext(withStyles(withUpdate(withUtils(withBase(Base || HTMLElement)))))));
}
