import withReact from '../../../utils/with-react';
import AXAFooter from './index';

export default createElement => ({
  onItemClick = () => {},
  clickevents = false,
  children,
}) =>
  withReact(createElement)(
    AXAFooter.tagName,
    {
      onItemClick,
      clickevents,
    },
    children
  );
