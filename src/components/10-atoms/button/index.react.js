import withReact from '../../../utils/with-react';
import AXAButton from './index';

export default createElement => ({
  type = 'button',
  icon = '',
  size = '',
  variant = '',
  className = '',
  slot = '',
  children,
  ...rest,
}) => {

  const events = {};

  // Get all events as events
  Object.keys(rest).forEach((name) => {
    if (name.indexOf('on') === 0) {
      events[name] = rest[name];
    }
  });

  return withReact(createElement)(
    AXAButton.tagName,
    {
      attrs: {
        type,
        icon,
        size,
        variant,
        className,
        slot,
        ...rest,
      },
      ...events,
    },
    children
  );
}