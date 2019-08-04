import withReact from '../../../utils/with-react';
import AXAFooter from './index';

export default createElement => ({
  onItemClick = () => {},
  clickevents = false,
  className,
  children,
}) =>
  withReact(createElement)(
    AXAFooter.tagName,
    {
      onItemClick,
      clickevents,
      className,
    },
    children
  );
