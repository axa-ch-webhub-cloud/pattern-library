import AXADemoLink from './index';
import withReact from '../../utils/with-react';

export default createElement => () => withReact(createElement)(AXADemoLink.tagName);
