import withReact from '../../../utils/with-react';
import AXACarousel from './index';

export default createElement => ({
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
    AXACarousel.tagName,
    {
      attrs: {
        ...rest,
      },
      ...events,
    },
    children
  );
}
