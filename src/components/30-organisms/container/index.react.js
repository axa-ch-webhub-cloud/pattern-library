import withReact from '../../../utils/with-react.js';
import AXAContainer from './index.wc.js';

export default (createElement, version) =>
  withReact(createElement, AXAContainer, version);
