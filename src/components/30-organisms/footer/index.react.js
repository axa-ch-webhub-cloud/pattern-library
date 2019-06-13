import withReact from '../../../utils/with-react';
import AXAFooter from './index';

export default createElement => ({
  onItemClick = () => {},
  dynamic = false,
  children,
}) => {
  console.log(dynamic);
  return withReact(createElement)(
    AXAFooter.tagName,
    {
      onItemClick,
      dynamic,
    },
    children
  );
};
