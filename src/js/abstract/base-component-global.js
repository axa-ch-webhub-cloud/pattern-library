import { withBase } from './hocs/with-base';
import { withContext } from './hocs/with-context';
import { withGlobalStyles } from './hocs/with-global-styles';
import { withLifecycle } from './hocs/with-lifecycle';
import { withMokeyPatches } from './hocs/with-mokey-patches';
import { withUpdate } from './hocs/with-update';
import { withUtils } from './hocs/with-utils';

export default function BaseComponentGlobal(Base) {
  // eslint-disable-next-line
  return withLifecycle(withMokeyPatches(withContext(withGlobalStyles(withUpdate(withUtils(withBase(Base || HTMLElement)))))));
}
