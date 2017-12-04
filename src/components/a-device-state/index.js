import styles from './index.scss';
import deviceState from './js/device-state';
import { BaseComponentGlobal } from '../_abstract/component-types';

deviceState();

BaseComponentGlobal.appendGlobalStyles(styles);
