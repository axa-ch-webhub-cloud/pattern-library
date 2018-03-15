import styles from './index.scss';
import observeDeviceState from './js/device-state';
import { BaseComponentGlobal } from '../../js/component-types';

observeDeviceState();

BaseComponentGlobal.appendGlobalStyles(styles);
