import withReact from '../../../utils/with-react';
import AXAButtonLink from './index';

export default createElement => ({
  icon = '',
  variant = '',
  href = null,
  size = '',
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
    AXAButtonLink.tagName,
    {
      attrs: {
        icon,
        variant,
        href,
        size,
        className,
        slot,
        ...rest,
      },
      ...events,
    },
    children
  );
}
