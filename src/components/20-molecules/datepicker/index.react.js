import withReact from '../../../utils/with-react';
import AXADatepicker from './index';

export default createElement => ({
  'data-test-id': dataTestId,
  open,
  locale,
  day,
  month,
  year,
  allowedYears,
}) =>
  withReact(createElement)(AXADatepicker.tagName, {
    'data-test-id': dataTestId,
    open,
    locale,
    day,
    month,
    year,
    allowedYears,
  });
