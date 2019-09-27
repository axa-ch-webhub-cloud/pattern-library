import withReact from '../../../utils/with-react';
import AXATable from './index';

export default createElement => ({
  children,
  model = null,
  innerscroll = 0,
  maxheight = 0,
  onClick = () => {},
  className,
}) =>
  withReact(createElement)(
    AXATable.tagName,
    { model, innerscroll, maxheight, className, onClick },
    children
  );
