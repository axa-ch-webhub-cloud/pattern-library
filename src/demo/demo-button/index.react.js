import AXADemoButton from './index';
import withReact from '../../utils/with-react';

export default createElement => () => withReact(createElement)(AXADemoButton.tagName);
