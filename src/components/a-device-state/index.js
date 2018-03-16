import styles from './index.scss';
import observeDeviceState from './js/device-state';
import BaseComponentGlobal from '../../js/abstract/base-component-global';

observeDeviceState();

BaseComponentGlobal.appendGlobalStyles(styles);
