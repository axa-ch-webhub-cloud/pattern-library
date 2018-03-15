import styles from './index.scss';
import observeDeviceState from './js/device-state';
import BaseComponentGlobal from '../../js/base-component-global';

observeDeviceState();

BaseComponentGlobal.appendGlobalStyles(styles);
