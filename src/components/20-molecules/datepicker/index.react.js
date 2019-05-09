import withReact from '../../../utils/with-react';
import AXADatepicker from './index';

export default createElement => ({
  'data-test-id': dataTestId,
  inputfield,
  open,
  locale,
  day,
  month,
  year,
  allowedyears = [year],
  labelbuttonok = 'OK',
  labelbuttoncancel = 'Cancel',
  onAXADateChange = () => {},
}) =>
  withReact(createElement)(AXADatepicker.tagName, {
    'data-test-id': dataTestId,
    inputfield,
    open,
    locale,
    day,
    month,
    year,
    allowedyears,
    labelbuttonok,
    labelbuttoncancel,
    onAXADateChange,
  });
