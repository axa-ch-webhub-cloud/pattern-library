import BaseComponentGlobal from 'js/abstract/base-component-global';

import styles from './index.scss';
import observeDeviceState from './js/device-state';

observeDeviceState();

BaseComponentGlobal.appendGlobalStyles(styles);
